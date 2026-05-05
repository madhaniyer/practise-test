export interface LocalCoachFeedback {
  strengths: string[];
  improvements: string[];
  headline: string;
}

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function buildLocalCoachFeedback(input: {
  answer: string;
  modelAnswer: string;
  section: string;
}): LocalCoachFeedback {
  const answer = input.answer || "";
  const model = input.modelAnswer || "";
  const strengths: string[] = [];
  const improvements: string[] = [];

  const answerWords = wordCount(answer);
  const modelWords = wordCount(model);

  if (answerWords >= Math.max(60, Math.floor(modelWords * 0.45))) {
    strengths.push("You wrote enough to develop an idea rather than giving a one-line response.");
  } else {
    improvements.push("Your response is too brief. Expand your explanation with more scientific detail and clearer reasoning.");
  }

  if (input.section.includes("Reporting")) {
    if (/aim/i.test(answer)) strengths.push("You included an Aim section, which is strong scientific structure.");
    else improvements.push("Add an explicit Aim statement so the report begins with a clear investigative purpose.");

    if (/conclusion/i.test(answer)) strengths.push("You attempted a Conclusion, which helps link evidence back to the overall finding.");
    else improvements.push("Add a Conclusion that directly links the observed trend to the scientific claim being made.");

    if (/because|therefore|this suggests|indicates/i.test(answer)) strengths.push("Your report uses reasoning language to connect evidence with explanation.");
    else improvements.push("Use reasoning phrases like 'this suggests', 'therefore', or 'because' to explain the result rather than only describing it.");
  } else {
    if (/for example|for instance|such as/i.test(answer)) strengths.push("You used an example, which strengthens scientific explanation.");
    else improvements.push("Include at least one specific scientific example to make your explanation more convincing.");

    if (/therefore|overall|in conclusion|ultimately/i.test(answer)) strengths.push("You attempted to close the answer with a synthesising statement.");
    else improvements.push("Finish with a concluding sentence that pulls the explanation together in a confident way.");
  }

  const headline = improvements.length === 0
    ? "Strong work — this response is beginning to read like a top-band answer."
    : "A promising response, but there is still clear room to improve structure and scientific depth.";

  return { headline, strengths, improvements };
}
