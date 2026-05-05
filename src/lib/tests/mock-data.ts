import type { PracticeTest } from "@/types/test";
import type { AttemptRecord } from "@/types/attempt";

export const mockTests: PracticeTest[] = [
  {
    id: "batch-1",
    title: "Practice Test 1",
    subtitle: "Foundations + Confidence Builder",
    released: true,
    durationSec: 30 * 60,
    questions: [
      {
        id: "q1",
        section: "Science Reasoning",
        topic: "Experimental Design",
        difficulty: "Medium",
        type: "mcq",
        prompt: "A student grows identical bean plants under blue, red and green light for two weeks. What is the independent variable?",
        options: ["Plant height", "Colour of light", "Amount of water", "Number of leaves"],
        correctIndex: 1,
        explanation: "The independent variable is the factor deliberately changed by the experimenter. Here, the colour of light is varied to observe its effect on growth.",
      },
      {
        id: "q2",
        section: "Science Interest & Communication",
        topic: "Science Writing",
        difficulty: "Extended",
        type: "written",
        prompt: "In 120–180 words, explain why renewable energy matters for future generations.",
        rubric: ["Scientific accuracy", "Structure", "Examples", "Expression"],
        modelAnswer: "Renewable energy matters because it provides a sustainable alternative to finite fossil fuels and reduces greenhouse emissions. It supports energy security, scientific innovation, and long-term environmental stability. From both a scientific and ethical perspective, investing in renewable energy helps future generations inherit a cleaner and more resilient planet.",
      }
    ]
  },
  {
    id: "batch-2",
    title: "Practice Test 2",
    subtitle: "Reasoning Under Pressure",
    released: false,
    durationSec: 30 * 60,
    questions: []
  }
];

export const mockAttempts: AttemptRecord[] = [
  {
    id: "attempt-1",
    studentId: "student-aarav",
    studentName: "Aarav",
    testId: "batch-1",
    score: 72,
    correctCount: 4,
    totalMcq: 5,
    startedAt: "2026-05-04T17:55:00.000Z",
    submittedAt: "2026-05-04T18:18:50.000Z",
    durationSeconds: 1430,
    strengths: ["Physics", "Experimental Design"],
    improvements: ["Scientific Literacy", "Science Writing"],
    answers: {
      q1: 1,
      q2: "Renewable energy matters because..."
    }
  }
];
