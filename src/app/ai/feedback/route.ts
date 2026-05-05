import { NextResponse } from "next/server";
import OpenAI from "openai";

function extractJson(text: string) {
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed);
  } catch {}

  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start >= 0 && end > start) {
    return JSON.parse(trimmed.slice(start, end + 1));
  }

  throw new Error("No JSON object found in model output");
}

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error: "OPENAI_API_KEY is not set.",
          note: "Set OPENAI_API_KEY in .env.local to use AI feedback mode.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { prompt, studentAnswer, modelAnswer, rubric, section } = body ?? {};

    if (!prompt || !studentAnswer || !modelAnswer) {
      return NextResponse.json(
        { error: "Missing required fields: prompt, studentAnswer, modelAnswer." },
        { status: 400 }
      );
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const developerPrompt = [
      "You are an elite JMSS science writing coach for high-performing Year 9/10 students preparing for John Monash Science School style entrance tasks.",
      "Evaluate the student's response against the exact task, the top-band model answer, and the rubric.",
      "Your feedback must feel JMSS-specific: scientific precision, reasoning quality, data interpretation, structure, explanation depth, and quality of scientific expression all matter.",
      "Use a demanding but encouraging tone. Be specific, never generic.",
      "Return STRICT JSON only with this exact shape:",
      '{"headline":"string","estimatedBand":"Emerging|Developing|Secure|Strong|Top-Band","jmssFocusAreas":["string","string"],"criterionScores":{"scientificAccuracy":"string","reasoningAndLogic":"string","evidenceAndUseOfData":"string","structureAndOrganisation":"string","scientificExpression":"string"},"strengths":["string","string","string"],"improvements":["string","string","string"],"rewriteTip":"string","nextStepExercise":"string"}',
      "Rules:",
      "- strengths must point to actual qualities in the student's answer.",
      "- improvements must be actionable and highly specific.",
      "- criterionScores must be short evaluative labels such as 'Strong', 'Developing', 'Secure'.",
      "- rewriteTip must give one sentence-level or paragraph-level improvement strategy.",
      "- nextStepExercise must be one short targeted exercise.",
      "- Do not mention being an AI.",
      "- Output valid JSON only and nothing else."
    ].join("\n");

    const response = await client.responses.create({
      model: "gpt-5.4-mini",
      store: false,
      input: [
        {
          role: "developer",
          content: [{ type: "input_text", text: developerPrompt }],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: JSON.stringify({ section, rubric, prompt, studentAnswer, modelAnswer }),
            },
          ],
        },
      ],
    });

    const outputText = response.output_text || "";
    const parsed = extractJson(outputText);

    return NextResponse.json({ feedback: parsed });
  } catch (error) {
    console.error("AI feedback route failed", error);
    return NextResponse.json(
      {
        error: "AI feedback generation failed.",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
