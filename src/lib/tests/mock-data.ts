import type { PracticeTest, Question } from "@/types/test";
import type { AttemptRecord } from "@/types/attempt";
import { curatedTestPacks } from "@/lib/tests/curated-test-packs";

function toMcqQuestion(item: any): Question {
  return {
    id: item.id,
    section: "Science Reasoning",
    topic: item.topic,
    difficulty: item.difficulty,
    type: "mcq",
    prompt: item.question,
    options: item.options,
    correctIndex: item.answerIndex,
    explanation: item.explanation,
  };
}

function toWritingQuestion(item: any): Question {
  return {
    id: item.id,
    section: "Science Interest & Communication",
    topic: item.category,
    difficulty: item.difficulty,
    type: "written",
    prompt: item.prompt,
    rubric: item.rubric,
    modelAnswer: item.modelAnswerGuide,
  };
}

function toReportingQuestion(item: any): Question {
  return {
    id: item.id,
    section: "Science Analysis & Reporting",
    topic: item.category,
    difficulty: item.difficulty,
    type: "written",
    prompt: item.task,
    rubric: item.rubric,
    modelAnswer: item.modelAnswerGuide,
  };
}

export const mockTests: PracticeTest[] = [
  {
    id: "trial-1",
    title: "Trial Test 1",
    subtitle: "15-minute sampler: quick reasoning check",
    kind: "trial",
    released: true,
    durationSec: 15 * 60,
    questions: [
      ...curatedTestPacks[0].mcqs.slice(0, 8).map(toMcqQuestion),
      ...curatedTestPacks[0].writingPrompts.slice(0, 1).map(toWritingQuestion),
      ...curatedTestPacks[0].reportingTasks.slice(0, 1).map(toReportingQuestion),
    ],
  },
  {
    id: "trial-2",
    title: "Trial Test 2",
    subtitle: "15-minute sampler: data + communication",
    kind: "trial",
    released: true,
    durationSec: 15 * 60,
    questions: [
      ...curatedTestPacks[1].mcqs.slice(0, 8).map(toMcqQuestion),
      ...curatedTestPacks[1].writingPrompts.slice(0, 1).map(toWritingQuestion),
      ...curatedTestPacks[1].reportingTasks.slice(0, 1).map(toReportingQuestion),
    ],
  },
  ...curatedTestPacks.map((pack) => ({
    id: pack.id,
    title: pack.title,
    subtitle: `${pack.subtitle} (${pack.mcqs.length} MCQs, ${pack.writingPrompts.length} writing, ${pack.reportingTasks.length} reporting)`,
    kind: "full" as const,
    released: pack.released,
    durationSec: pack.durationSec,
    questions: [
      ...pack.mcqs.map(toMcqQuestion),
      ...pack.writingPrompts.map(toWritingQuestion),
      ...pack.reportingTasks.map(toReportingQuestion),
    ],
  })),
];

export const mockAttempts: AttemptRecord[] = [
  {
    id: "attempt-1",
    studentId: "student-aarav",
    studentName: "Aarav",
    testId: "batch-1",
    score: 72,
    correctCount: 101,
    totalMcq: 140,
    startedAt: "2026-05-04T17:55:00.000Z",
    submittedAt: "2026-05-04T20:18:50.000Z",
    durationSeconds: 8630,
    strengths: ["Experimental Design", "Chemistry", "Physics"],
    improvements: ["Scientific Literacy", "Scientific Reporting", "Science Writing"],
    answers: {}
  }
];
