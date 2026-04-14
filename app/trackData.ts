import { NextRequest, NextResponse } from 'next/server';

const getClientIp = (request: NextRequest) => {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfIp = request.headers.get('cf-connecting-ip');
  const trueClientIp = request.headers.get('true-client-ip');
  const clientIp = request.headers.get('x-client-ip');

  const firstForwardedIp = forwardedFor?.split(',')[0]?.trim();
  const resolvedIp = firstForwardedIp || realIp || cfIp || trueClientIp || clientIp;

  if (!resolvedIp) {
    return 'unknown';
  }

  if (resolvedIp === '::1' || resolvedIp === '127.0.0.1') {
    return 'localhost';
  }

  return resolvedIp;
};

const shouldTrack = (request: NextRequest) => {
  if (request.method !== 'GET') {
    return false;
  }

  const path = request.nextUrl.pathname;

  if (
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path === '/favicon.ico' ||
    path.includes('.')
  ) {
    return false;
  }

  const purpose = request.headers.get('purpose');
  const prefetch = request.headers.get('next-router-prefetch');

  if (purpose === 'prefetch' || prefetch) {
    return false;
  }

  const accept = request.headers.get('accept') || '';
  return accept.includes('text/html');
};

const sendVisitAlertEmail = async (request: NextRequest) => {

  const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!web3FormsKey) {
    console.warn('[visitor-log] Email alert skipped: missing NEXT_PUBLIC_WEB3FORMS_KEY');
    return {
      ok: false,
      error: 'Missing NEXT_PUBLIC_WEB3FORMS_KEY',
    };
  }

  const ipAddress = getClientIp(request);
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const referrer = request.headers.get('referer') || 'direct';
  const language = request.headers.get('accept-language') || 'unknown';
  const path = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  const at = new Date().toISOString();
  const country = request.headers.get('x-vercel-ip-country') || 'unknown';
  const region = request.headers.get('x-vercel-ip-country-region') || 'unknown';
  const city = request.headers.get('x-vercel-ip-city') || 'unknown';

  const subject = `New portfolio visit: ${path}`;
  const text = [
    'A new visitor landed on your site.',
    '',
    `Time: ${at}`,
    `Path: ${path}`,
    `Referrer: ${referrer}`,
    `IP: ${ipAddress}`,
    `Country/Region/City: ${country}/${region}/${city}`,
    `Language: ${language}`,
    `User-Agent: ${userAgent}`,
  ].join('\n');

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      access_key: web3FormsKey,
      name: 'Portfolio Visitor Alert',
      email: process.env.NEXT_PUBLIC_CONTACT_MAIL,
      subject,
      message: text,
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      error: `Web3Forms API error: HTTP ${response.status}`,
    };
  }

  const data = await response.json();

  if (!data.success) {
    const failureReason = data.message || `HTTP ${response.status}`;
    return {
      ok: false,
      error: `Web3Forms API error: ${failureReason}`,
    };
  }
  return { ok: true };
};

const middleware = async (request: NextRequest) => {
  if (!shouldTrack(request)) {
    return NextResponse.next();
  }

  const result = await sendVisitAlertEmail(request);

  if (!result.ok) {
    console.error('[visitor-log] Failed to send visitor alert email', result.error);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

export { middleware };
