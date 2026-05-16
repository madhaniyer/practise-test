import { NextResponse } from "next/server";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  try {
    const { section, prompt, rubric } = await request.json();

    if (!prompt?.trim()) {
      return NextResponse.json({ error: "No question provided." }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [
        {
          role: "system",
          content: `You are an expert JMSS entrance exam marker. Write a concise top-band model answer for a Year 9 science question. 100-150 words, scientifically accurate, well-structured, appropriate terminology. Return ONLY the model answer text — no preamble, no labels, no markdown.`,
        },
        {
          role: "user",
          content: `Section: ${section}\nRubric: ${(rubric ?? []).join(", ")}\nQuestion: ${prompt}\n\nWrite the top-band model answer:`,
        },
      ],
    });

    const modelAnswer = completion.choices[0]?.message?.content?.trim() ?? "";
    return NextResponse.json({ modelAnswer });
  } catch (error) {
    return NextResponse.json(
      { error: "Model answer generation failed.", detail: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
