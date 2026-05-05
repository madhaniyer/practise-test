import type { PracticeTest } from "@/types/test";
import type { AttemptRecord } from "@/types/attempt";

export const mockTests: PracticeTest[] = [
  {
    id: "trial-1",
    title: "Trial Test 1",
    subtitle: "15-minute sampler: quick reasoning check",
    kind: "trial",
    released: true,
    durationSec: 15 * 60,
    questions: [
      {
        id: "t1-q1",
        section: "Science Reasoning",
        topic: "Experimental Design",
        difficulty: "Easy",
        type: "mcq",
        prompt: "A student changes only the colour of light when growing two identical plants. What is the independent variable?",
        options: ["Plant height", "Colour of light", "Type of soil", "Leaf number"],
        correctIndex: 1,
        explanation: "The independent variable is the factor deliberately changed by the student. Here that is the colour of light.",
      },
      {
        id: "t1-q2",
        section: "Science Interest & Communication",
        topic: "Science Writing",
        difficulty: "Medium",
        type: "written",
        prompt: "In 80–120 words, explain why good observations matter in science.",
        rubric: ["Scientific clarity", "Examples", "Structure"],
        modelAnswer: "Good observations matter in science because they form the foundation of evidence. Accurate observations help scientists notice patterns, identify changes, and compare results fairly. Without careful observation, conclusions may be based on assumptions rather than facts. In experiments, strong observations also make it easier to explain why a result occurred and whether it is reliable. This is why observation is a basic but essential scientific skill.",
      }
    ]
  },
  {
    id: "trial-2",
    title: "Trial Test 2",
    subtitle: "15-minute sampler: data + communication",
    kind: "trial",
    released: true,
    durationSec: 15 * 60,
    questions: [
      {
        id: "t2-q1",
        section: "Science Reasoning",
        topic: "Data Interpretation",
        difficulty: "Easy",
        type: "mcq",
        prompt: "A graph shows plant growth rising with light intensity, then flattening. Why does it flatten?",
        options: ["Light becomes harmful", "Another factor becomes limiting", "Photosynthesis stops forever", "The graph is incorrect"],
        correctIndex: 1,
        explanation: "Once light is no longer limiting, another factor such as carbon dioxide, water, or temperature limits further growth.",
      },
      {
        id: "t2-q2",
        section: "Science Analysis & Reporting",
        topic: "Scientific Reporting",
        difficulty: "Medium",
        type: "written",
        prompt: "Write a short conclusion for an experiment showing enzyme activity drops after the optimum temperature.",
        rubric: ["Conclusion quality", "Scientific language", "Accuracy"],
        modelAnswer: "The results show that enzyme activity increases up to an optimum temperature and then decreases. This suggests that higher temperatures eventually damage the enzyme’s active site through denaturation, reducing its ability to catalyse the reaction.",
      }
    ]
  },
  {
    id: "batch-1",
    title: "Practice Test 1",
    subtitle: "Foundations + Confidence Builder",
    kind: "full",
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
        section: "Science Reasoning",
        topic: "Data Interpretation",
        difficulty: "Medium",
        type: "mcq",
        prompt: "A graph shows enzyme activity increasing from 20°C to 40°C, then dropping sharply at 50°C. What is the best explanation?",
        options: [
          "The enzyme becomes stronger above 40°C",
          "The substrate disappears at 50°C",
          "The enzyme denatures above its optimum temperature",
          "Heat stops all molecular movement"
        ],
        correctIndex: 2,
        explanation: "Enzymes work best at an optimum temperature. Above that point, their active site can change shape due to denaturation, reducing activity.",
      },
      {
        id: "q3",
        section: "Science Interest & Communication",
        topic: "Science Writing",
        difficulty: "Extended",
        type: "written",
        prompt: "In 120–180 words, explain why renewable energy matters for future generations.",
        rubric: ["Scientific accuracy", "Structure", "Examples", "Expression"],
        modelAnswer: "Renewable energy matters because it provides a sustainable alternative to fossil fuels, which are finite and environmentally damaging. It reduces greenhouse gas emissions, improves energy security, and supports long-term environmental stability. It also drives innovation and helps future generations inherit a cleaner and more resilient planet.",
      }
    ]
  },
  {
    id: "batch-2",
    title: "Practice Test 2",
    subtitle: "Reasoning Under Pressure",
    kind: "full",
    released: false,
    durationSec: 30 * 60,
    questions: [
      {
        id: "b2-q1",
        section: "Science Reasoning",
        topic: "Chemistry",
        difficulty: "Medium",
        type: "mcq",
        prompt: "Why does increasing concentration often increase the rate of reaction?",
        options: [
          "There are fewer particles available",
          "There are more frequent collisions between reacting particles",
          "Particles become colder",
          "Reactions stop sooner"
        ],
        correctIndex: 1,
        explanation: "A higher concentration means more particles are present in the same volume, which increases collision frequency and the likelihood of successful collisions.",
      }
    ]
  }
];

export const mockAttempts: AttemptRecord[] = [
  {
    id: "attempt-1",
    studentId: "student-aarav",
    studentName: "Aarav",
    testId: "batch-1",
    score: 72,
    correctCount: 2,
    totalMcq: 2,
    startedAt: "2026-05-04T17:55:00.000Z",
    submittedAt: "2026-05-04T18:18:50.000Z",
    durationSeconds: 1430,
    strengths: ["Experimental Design"],
    improvements: ["Science Writing"],
    answers: {
      q1: 1,
      q2: 2,
      q3: "Renewable energy matters because..."
    }
  }
];
