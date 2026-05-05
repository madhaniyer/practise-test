import type { AttemptSummary } from "@/types/attempt";

export function generateAttemptSummary(input: {
  score: number;
  correctCount: number;
  totalMcq: number;
  strengths: string[];
  improvements: string[];
  totalWrittenWords?: number;
}): AttemptSummary {
  const { score, correctCount, totalMcq, strengths, improvements, totalWrittenWords = 0 } = input;

  const headline = score >= 85
    ? "Outstanding work — this performance is trending toward JMSS-readiness."
    : score >= 70
      ? "A strong effort with genuine top-band potential."
      : "A promising attempt with several high-value growth opportunities.";

  const praise = strengths.length
    ? `What went well: you showed the most confidence in ${strengths.join(", ")}, and those areas are becoming reliable strengths.`
    : "What went well: you stayed engaged through the full attempt and gave yourself useful data for the next round.";

  const growth = improvements.length
    ? `What did not go well: your biggest scoring drag came from ${improvements.join(", ")}. Slow down slightly and explain your logic more explicitly.`
    : "What did not go well: precision under pressure is the main thing to sharpen from here.";

  const writingSignal = totalWrittenWords > 90
    ? "Your written responses showed good stamina and commitment."
    : "Your written responses need more scientific detail, evidence, and structure.";

  const coaching = `${writingSignal} Your current MCQ score was ${correctCount}/${totalMcq}. For the next attempt, revise weak topics for 10 minutes and aim to improve by at least 10 percentage points.`;
  return { headline, praise, growth, coaching };
}
