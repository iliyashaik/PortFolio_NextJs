import { NextResponse } from 'next/server';

type ChatRequest = {
  message?: string;
};

export async function POST(request: Request) {
    const groqApiKey = process.env.NEXT_GROQ_API_KEY;
    const model = process.env.GROQ_MODEL;

  if (!groqApiKey) {
    return NextResponse.json(
      { error: 'Missing GROQ_API_KEY environment variable' },
      { status: 500 }
    );
  }

  let body: ChatRequest = {};

  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const userMessage = body.message?.trim();

  if (!userMessage) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  const systemPrompt =
    'You are an assistant for Iliyaz Ahmed\'s portfolio website. Keep answers concise, friendly, and focused on his projects, skills, and experience. If unsure, suggest using the contact form.';

  const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${groqApiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      max_tokens: 300,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
    }),
  });

  if (!groqResponse.ok) {
    const failure = await groqResponse.text();
    return NextResponse.json(
      { error: `Groq API error: ${groqResponse.status} ${failure}` },
      { status: 502 }
    );
  }

  const data = (await groqResponse.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const reply = data.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    return NextResponse.json(
      { error: 'No response content from Groq API' },
      { status: 502 }
    );
  }

  return NextResponse.json({ reply });
}
