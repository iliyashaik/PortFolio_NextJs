import { NextResponse } from 'next/server';

type ChatRequest = {
  message?: string;
};

export async function POST(request: Request) {

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
    'You are an assistant for Iliyaz Ahmed\'s portfolio website. Keep answers concise, friendly, and focused on my projects, skills, and experience. If unsure, suggest using the contact form.';

  return await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.NEXT_GROQ_MODEL,
      temperature: 0.4,
      max_tokens: 300,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
    }),
  }).then(async (groqResponse) => {
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
  });
}
