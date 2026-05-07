import { NextResponse } from "next/server";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  try {
    const { section, rubric, prompt, studentAnswer, modelAnswer } = await request.json();

    if (!studentAnswer?.trim()) {
      return NextResponse.json({ error: "No student answer provided." }, { status: 400 });
    }

    const systemPrompt = `You are an expert JMSS (John Monash Science School) entrance exam coach.
You evaluate student written responses for Year 9 students aiming to score 90%+ in the JMSS entrance exam.
You must return ONLY valid JSON matching the exact schema provided. No markdown, no extra text.`;

    const userPrompt = `Section: ${section}
Rubric criteria: ${(rubric ?? []).join(", ")}
Question: ${prompt}
Model answer: ${modelAnswer ?? "Not provided"}
Student answer: ${studentAnswer}

Return JSON in this exact shape:
{
  "headline": "one sentence overall verdict",
  "estimatedBand": "one of: Developing / Competent / Strong / Top-band",
  "jmssFocusAreas": ["up to 3 JMSS-relevant skill areas"],
  "criterionScores": {
    "scientificAccuracy": "score and brief note",
    "reasoningAndLogic": "score and brief note",
    "evidenceAndUseOfData": "score and brief note",
    "structureAndOrganisation": "score and brief note",
    "scientificExpression": "score and brief note"
  },
  "strengths": ["2-3 specific strengths"],
  "improvements": ["2-3 specific actionable improvements"],
  "rewriteTip": "one concrete sentence on how to improve the weakest part",
  "nextStepExercise": "one short practice exercise to build the key skill"
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const raw = completion.choices[0]?.message?.content ?? "";
    const feedback = JSON.parse(raw);

    return NextResponse.json({ feedback });
  } catch (error) {
    return NextResponse.json(
      { error: "AI feedback failed.", detail: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
