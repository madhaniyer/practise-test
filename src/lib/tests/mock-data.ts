import type { PracticeTest, Question } from "@/types/test";
import type { AttemptRecord } from "@/types/attempt";
import { curatedTestPacks } from "@/lib/tests/curated-test-packs";

export const mockTests: PracticeTest[] = [
  {
    id: "trial-1",
    title: "Trial Test 1",
    subtitle: "15-minute sampler: quick reasoning check",
    kind: "trial",
    released: true,
    durationSec: 15 * 60,
    questions: [
      // Use first 8 MCQs from first short test + 2 written questions
      ...curatedTestPacks[0].questions.filter(q => q.type === "mcq").slice(0, 8),
      ...curatedTestPacks[0].questions.filter(q => q.type === "written").slice(0, 2),
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
      // Use first 8 MCQs from second short test + 2 written questions
      ...curatedTestPacks[1].questions.filter(q => q.type === "mcq").slice(0, 8),
      ...curatedTestPacks[1].questions.filter(q => q.type === "written").slice(0, 2),
    ],
  },
  // Add all curated test packs (short and full tests)
  ...curatedTestPacks,
];

export const mockAttempts: AttemptRecord[] = [
  {
    id: "attempt-1",
    studentId: "student-aarav",
    studentName: "Aarav",
    testId: "short-1",
    score: 85,
    correctCount: 17,
    totalMcq: 20,
    startedAt: "2026-05-04T17:55:00.000Z",
    submittedAt: "2026-05-04T18:40:50.000Z",
    durationSeconds: 2750,
    strengths: ["Cell Biology", "Genetics", "Scientific Method"],
    improvements: ["Data Analysis", "Scientific Writing"],
    answers: {}
  },
  {
    id: "attempt-2",
    studentId: "student-aarav",
    studentName: "Aarav",
    testId: "full-1",
    score: 72,
    correctCount: 101,
    totalMcq: 140,
    startedAt: "2026-05-05T09:00:00.000Z",
    submittedAt: "2026-05-05T11:30:00.000Z",
    durationSeconds: 9000,
    strengths: ["Experimental Design", "Chemistry", "Physics"],
    improvements: ["Scientific Literacy", "Scientific Reporting", "Science Writing"],
    answers: {}
  }
];