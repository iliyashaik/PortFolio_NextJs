import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type VisitorInfo = {
  ip: string;
  country: string;
  region: string;
  city: string;
};

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

const getHeaderValue = (request: NextRequest, headerName: string) => {
  const value = request.headers.get(headerName);

  if (!value) {
    return 'unknown';
  }

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

const isMissing = (value: string) => value === 'unknown' || value === 'Unavailable';

const getLocationFromIp = async (ip: string) => {
  const url = ip === 'unknown' || ip === 'localhost' ? 'https://ipwho.is/' : `https://ipwho.is/${ip}`;
  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  if (!data.success) {
    return null;
  }

  return {
    ip: data.ip,
    country: data.country,
    region: data.region,
    city: data.city,
  };
};

export const GET = async (request: NextRequest) => {
  const visitorInfo: VisitorInfo = {
    ip: getClientIp(request),
    country: getHeaderValue(request, 'x-vercel-ip-country'),
    region: getHeaderValue(request, 'x-vercel-ip-country-region'),
    city: getHeaderValue(request, 'x-vercel-ip-city'),
  };

  if (isMissing(visitorInfo.country) || isMissing(visitorInfo.region) || isMissing(visitorInfo.city)) {
    const fallbackLocation = await getLocationFromIp(visitorInfo.ip);

    if (fallbackLocation) {
      visitorInfo.ip = fallbackLocation.ip;
      visitorInfo.country = isMissing(visitorInfo.country) ? fallbackLocation.country : visitorInfo.country;
      visitorInfo.region = isMissing(visitorInfo.region) ? fallbackLocation.region : visitorInfo.region;
      visitorInfo.city = isMissing(visitorInfo.city) ? fallbackLocation.city : visitorInfo.city;
    }
  }

  return NextResponse.json(visitorInfo, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
};
