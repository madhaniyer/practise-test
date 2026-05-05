"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Gauge,
  Lightbulb,
  Lock,
  PlayCircle,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserRound,
  XCircle,
  BarChart3,
  Rocket,
  ChevronRight,
  Target,
  Eye,
  FileText,
  Wand2,
  Activity,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const TEST_DURATION_SECONDS = 30 * 60;

const testBank = [
  {
    id: "batch-1",
    title: "Practice Test 1",
    subtitle: "Foundations + Confidence Builder",
    released: true,
    accent: "from-sky-500 to-cyan-400",
    questions: [
      {
        id: "q1",
        section: "Science Reasoning",
        topic: "Experimental Design",
        difficulty: "Medium",
        type: "mcq",
        prompt:
          "A student grows identical bean plants under blue, red and green light for two weeks. What is the independent variable?",
        options: ["Plant height", "Colour of light", "Amount of water", "Number of leaves"],
        correctIndex: 1,
        explanation:
          "The independent variable is the factor deliberately changed by the experimenter. Here, the colour of light is varied to observe its effect on growth.",
      },
      {
        id: "q2",
        section: "Science Reasoning",
        topic: "Data Interpretation",
        difficulty: "Medium",
        type: "mcq",
        prompt:
          "A graph shows enzyme activity increasing from 20°C to 40°C, then dropping sharply at 50°C. What is the best explanation?",
        options: [
          "The enzyme becomes stronger above 40°C",
          "The substrate disappears at 50°C",
          "The enzyme denatures above its optimum temperature",
          "Heat stops all molecular movement",
        ],
        correctIndex: 2,
        explanation:
          "Enzymes work best at an optimum temperature. Above that point, their active site can change shape due to denaturation, reducing activity.",
      },
      {
        id: "q3",
        section: "Science Reasoning",
        topic: "Physics",
        difficulty: "Easy",
        type: "mcq",
        prompt:
          "Why does a metal spoon feel colder than a wooden spoon in the same room?",
        options: [
          "Metal is always at a lower temperature",
          "Metal conducts heat away from the hand more effectively",
          "Wood produces heat",
          "Metal contains less energy",
        ],
        correctIndex: 1,
        explanation:
          "Metal is a better conductor, so it transfers heat away from your skin more quickly, making it feel colder.",
      },
      {
        id: "q4",
        section: "Science Reasoning",
        topic: "Biology",
        difficulty: "Medium",
        type: "mcq",
        prompt:
          "Plant growth increases as light intensity rises, but eventually levels off. Which idea best explains this pattern?",
        options: [
          "Light becomes poisonous at high intensity",
          "A different factor becomes limiting",
          "Photosynthesis stops permanently",
          "Chlorophyll disappears",
        ],
        correctIndex: 1,
        explanation:
          "This is the principle of limiting factors. Once light is no longer the limiting factor, another factor such as carbon dioxide, water, or temperature limits the rate.",
      },
      {
        id: "q5",
        section: "Science Reasoning",
        topic: "Scientific Literacy",
        difficulty: "Medium",
        type: "mcq",
        prompt:
          "A student concludes, 'Warm conditions are best for every seed,' after one seed type germinates fastest in warmth. Why is this conclusion weak?",
        options: [
          "It overgeneralises from limited evidence",
          "It contains scientific vocabulary",
          "It repeats the data too clearly",
          "It includes a control",
        ],
        correctIndex: 0,
        explanation:
          "A strong scientific conclusion should match the evidence collected. One result with one seed type cannot justify a universal claim.",
      },
      {
        id: "q6",
        section: "Science Interest & Communication",
        topic: "Science Writing",
        difficulty: "Extended",
        type: "written",
        prompt:
          "In 120–180 words, explain why renewable energy matters for future generations. Write for an intelligent general audience.",
        rubric: [
          "Scientific accuracy",
          "Clarity and structure",
          "Use of examples",
          "Quality of expression",
        ],
        modelAnswer:
          "Renewable energy matters because it provides a sustainable alternative to fossil fuels, which are finite and environmentally damaging. Burning coal, oil and gas releases greenhouse gases that contribute to climate change, air pollution and ecosystem stress. In contrast, solar, wind and hydroelectric power generate energy with far fewer emissions. This reduces environmental harm while improving long-term energy security. Renewable energy also encourages scientific innovation, job creation and more resilient national infrastructure. Most importantly, it helps ensure that future generations inherit a cleaner and more stable planet. From both a scientific and ethical perspective, investing in renewable energy is not simply beneficial; it is necessary for a responsible future.",
      },
      {
        id: "q7",
        section: "Science Analysis & Reporting",
        topic: "Scientific Reporting",
        difficulty: "Extended",
        type: "written",
        prompt:
          "A graph shows enzyme activity rising steadily with temperature until an optimum point, after which activity falls sharply. Write a short report with Aim, Observation, Explanation and Conclusion.",
        rubric: [
          "Interpretation of evidence",
          "Scientific reasoning",
          "Structure",
          "Use of scientific terminology",
        ],
        modelAnswer:
          "Aim: To investigate the effect of temperature on enzyme activity. Observation: Enzyme activity increases as temperature rises until it reaches an optimum point, after which the activity decreases sharply. Explanation: At lower temperatures, increasing heat gives particles more kinetic energy, leading to more frequent successful collisions between enzyme and substrate. Above the optimum, the enzyme begins to denature, changing the shape of the active site and reducing its ability to bind with the substrate. Conclusion: Temperature increases enzyme activity only up to an optimum level. Beyond that point, denaturation causes a rapid decline in the reaction rate.",
      },
    ],
  },
  {
    id: "batch-2",
    title: "Practice Test 2",
    subtitle: "Reasoning Under Pressure",
    released: false,
    accent: "from-violet-500 to-fuchsia-400",
    questions: [
      {
        id: "q1",
        section: "Science Reasoning",
        topic: "Experimental Design",
        difficulty: "Medium",
        type: "mcq",
        prompt:
          "A student wants to test whether fertiliser affects tomato growth. Which variable should be controlled?",
        options: ["Plant growth", "Fertiliser amount", "Light exposure", "Final conclusion"],
        correctIndex: 2,
        explanation:
          "To isolate the effect of fertiliser, other variables such as light exposure, soil type and water should be kept the same.",
      },
      {
        id: "q2",
        section: "Science Reasoning",
        topic: "Chemistry",
        difficulty: "Medium",
        type: "mcq",
        prompt:
          "Why does increasing concentration often increase the rate of reaction?",
        options: [
          "There are fewer particles available",
          "There are more frequent collisions between reacting particles",
          "Particles become colder",
          "Reactions stop sooner",
        ],
        correctIndex: 1,
        explanation:
          "A higher concentration means more particles are present in the same volume, which increases collision frequency and the likelihood of successful collisions.",
      },
      {
        id: "q3",
        section: "Science Interest & Communication",
        topic: "Science Writing",
        difficulty: "Extended",
        type: "written",
        prompt:
          "Describe one scientific invention that changed everyday life and explain why it was so impactful.",
        rubric: ["Insight", "Scientific explanation", "Organisation", "Expression"],
        modelAnswer:
          "One scientific invention that transformed everyday life is vaccination. Vaccines train the immune system to recognise harmful pathogens before severe illness develops. This has prevented millions of deaths, reduced disease transmission and improved global life expectancy. Their impact goes beyond medicine; vaccination supports social stability by allowing schools, workplaces and communities to function more safely. What makes vaccination so powerful is the combination of deep scientific understanding and large-scale public benefit. It demonstrates how science can protect individual lives while strengthening society as a whole.",
      },
      {
        id: "q4",
        section: "Science Analysis & Reporting",
        topic: "Scientific Reporting",
        difficulty: "Extended",
        type: "written",
        prompt:
          "A plant exposed to increasing light intensity grows faster at first, but the growth rate later plateaus. Write a short scientific report.",
        rubric: ["Interpretation", "Reasoning", "Structure", "Terminology"],
        modelAnswer:
          "Aim: To investigate the effect of light intensity on plant growth. Observation: Growth increases as light intensity rises, but after a certain point the growth rate levels off. Explanation: Initially, greater light intensity increases the rate of photosynthesis, allowing more glucose to be produced for growth. Once light is no longer the limiting factor, another variable such as carbon dioxide concentration, temperature or water availability restricts further growth. Conclusion: Light intensity supports plant growth only until another limiting factor prevents further increase.",
      },
    ],
  },
  {
    id: "batch-3",
    title: "Practice Test 3",
    subtitle: "Deep Analysis Sprint",
    released: false,
    accent: "from-emerald-500 to-teal-400",
    questions: [],
  },
];

const starterAttempts = [
  {
    id: "attempt-1",
    student: "shaunak",
    testId: "batch-1",
    score: 72,
    completedAt: "2026-05-04 18:40",
    durationSeconds: 1430,
    strengths: ["Physics", "Experimental Design"],
    improvements: ["Scientific Literacy", "Science Writing"],
    answers: {},
  },
];

const students = [
  { id: "student-shaunak", name: "shaunak", password: "demo123", role: "student" },
  { id: "student-shalini", name: "shalini", password: "demo123", role: "student" },
  { id: "admin-parent", name: "admin", password: "admin123", role: "admin" },
];

function formatClock(totalSeconds: number) {
  const safe = Math.max(0, totalSeconds);
  const mins = Math.floor(safe / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(safe % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

function calcAttempt(test: any, answers: Record<string, any>, startedAt: number, submittedAt: number) {
  const evaluable = test.questions.filter((q: any) => q.type === "mcq");
  const correct = evaluable.filter((q: any) => answers[q.id] === q.correctIndex).length;
  const score = evaluable.length ? Math.round((correct / evaluable.length) * 100) : 100;
  const topicMap: Record<string, { correct: number; total: number }> = {};
  evaluable.forEach((q: any) => {
    topicMap[q.topic] = topicMap[q.topic] || { correct: 0, total: 0 };
    topicMap[q.topic].total += 1;
    if (answers[q.id] === q.correctIndex) topicMap[q.topic].correct += 1;
  });
  const ranked = Object.entries(topicMap)
    .map(([topic, v]) => ({ topic, pct: Math.round((v.correct / v.total) * 100) }))
    .sort((a, b) => b.pct - a.pct);
  const strengths = ranked.filter((x) => x.pct >= 75).slice(0, 3).map((x) => x.topic);
  const improvements = ranked.filter((x) => x.pct < 75).slice(0, 3).map((x) => x.topic);
  return {
    score,
    correct,
    total: evaluable.length,
    strengths,
    improvements,
    durationSeconds: Math.max(1, Math.floor((submittedAt - startedAt) / 1000)),
  };
}

function generateCoachFeedback({ score, correct, total, strengths, improvements, writtenResponses }: any) {
  const writingDepth = Object.values(writtenResponses || {}).reduce(
    (sum: number, val: any) => sum + (val?.trim()?.split(/\s+/).length || 0),
    0
  );
  const writingComment =
    writingDepth > 90
      ? "You sustained strong written effort and showed good stamina in the extended responses."
      : "Try expanding your written answers with clearer evidence, more scientific vocabulary, and sharper paragraph structure.";

  const headline =
    score >= 85
      ? "Outstanding work — this was a selective-school calibre performance."
      : score >= 70
      ? "A strong attempt with clear potential to push into the top band."
      : "A promising attempt with several high-value opportunities for improvement.";

  return {
    headline,
    praise:
      strengths.length
        ? `What went well: you showed the most confidence in ${strengths.join(", ")} and handled those questions with consistency.`
        : "What went well: you stayed engaged and completed the assessment with focus.",
    growth:
      improvements.length
        ? `What needs work: prioritise ${improvements.join(", ")} in your next revision cycle. Slow down on data interpretation and explain your reasoning more explicitly.`
        : "What needs work: keep sharpening precision and speed so your strongest work becomes repeatable under pressure.",
    coaching: `${writingComment} Your current MCQ score was ${correct}/${total}. For the next attempt, spend 10 minutes revising weak-topic notes, then retake the test with a goal of improving by at least 10 percentage points.`,
  };
}

function getBadgeTone(score: number) {
  if (score >= 85) return "bg-emerald-100 text-emerald-700 border-emerald-200";
  if (score >= 70) return "bg-amber-100 text-amber-700 border-amber-200";
  return "bg-rose-100 text-rose-700 border-rose-200";
}

function ReviewQuestionCard({ question, answer, index }: any) {
  const isCorrect = question.type === "mcq" ? answer === question.correctIndex : false;
  const studentLabel =
    question.type === "mcq"
      ? answer === undefined
        ? "Not answered"
        : question.options[answer]
      : answer?.trim()
      ? answer
      : "No written response submitted";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-lg shadow-slate-200/70 backdrop-blur"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              Question {index + 1}
            </Badge>
            <Badge className="rounded-full bg-slate-100 text-slate-700">{question.topic}</Badge>
            <Badge className="rounded-full bg-sky-100 text-sky-700">{question.section}</Badge>
          </div>
          <p className="text-base font-medium leading-7 text-slate-800">{question.prompt}</p>
        </div>
        {question.type === "mcq" ? (
          isCorrect ? (
            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-2 text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Correct
            </div>
          ) : (
            <div className="flex items-center gap-2 rounded-full bg-rose-100 px-3 py-2 text-rose-700">
              <XCircle className="h-4 w-4" />
              Needs review
            </div>
          )
        ) : (
          <div className="flex items-center gap-2 rounded-full bg-violet-100 px-3 py-2 text-violet-700">
            <FileText className="h-4 w-4" />
            Written
          </div>
        )}
      </div>

      {question.type === "mcq" ? (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Your answer</div>
            <div className={`rounded-2xl border px-4 py-3 text-sm font-medium ${isCorrect ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"}`}>
              {studentLabel}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Correct answer</div>
            <div className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-cyan-50 px-4 py-3 text-sm font-semibold text-sky-700 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                {question.options[question.correctIndex]}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-indigo-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-violet-700">
              <Lightbulb className="h-4 w-4" />
              Why this is correct
            </div>
            <p className="text-sm leading-7 text-slate-700">{question.explanation}</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Your response</div>
            <p className="text-sm leading-7 text-slate-700 whitespace-pre-wrap">{studentLabel}</p>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-cyan-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-sky-700">
              <Wand2 className="h-4 w-4" />
              Model answer / guide
            </div>
            <p className="text-sm leading-7 text-slate-700 whitespace-pre-wrap">{question.modelAnswer}</p>
            {question.rubric?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {question.rubric.map((item: string) => (
                  <Badge key={item} className="rounded-full bg-white/80 text-slate-700">
                    {item}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function JMSSPracticeSuite() {
  const [users] = useState(students);
  const [tests, setTests] = useState(testBank);
  const [attempts, setAttempts] = useState(starterAttempts);
  const [loginName, setLoginName] = useState("shaunak");
  const [password, setPassword] = useState("demo123");
  const [role, setRole] = useState("student");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loginError, setLoginError] = useState("");
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [testStartedAt, setTestStartedAt] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION_SECONDS);
  const [submittedAttempt, setSubmittedAttempt] = useState<any>(null);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const activeTest = useMemo(() => tests.find((t) => t.id === activeTestId) || null, [tests, activeTestId]);
  const studentAttempts = useMemo(
    () => attempts.filter((a) => a.student === currentUser?.name),
    [attempts, currentUser]
  );

  useEffect(() => {
    if (!activeTest || !testStartedAt || submittedAttempt) return;
    const id = setInterval(() => {
      const elapsed = Math.floor((Date.now() - testStartedAt) / 1000);
      const remaining = TEST_DURATION_SECONDS - elapsed;
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(id);
        handleSubmit();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [activeTest, testStartedAt, submittedAttempt]);

  const login = () => {
    const match = users.find(
      (u) =>
        u.name.toLowerCase() === loginName.trim().toLowerCase() &&
        u.password === password &&
        u.role === role
    );
    if (!match) {
      setLoginError("Login details do not match the demo users. Try shaunak / demo123 or Parent Admin / admin123.");
      return;
    }
    setCurrentUser(match);
    setLoginError("");
  };

  const logout = () => {
    setCurrentUser(null);
    setActiveTestId(null);
    setAnswers({});
    setTestStartedAt(null);
    setSubmittedAttempt(null);
    setReviewOpen(false);
    setTimeLeft(TEST_DURATION_SECONDS);
  };

  const startTest = (testId: string) => {
    setActiveTestId(testId);
    setAnswers({});
    setSubmittedAttempt(null);
    setReviewIndex(0);
    setTimeLeft(TEST_DURATION_SECONDS);
    setTestStartedAt(Date.now());
  };

  const handleSubmit = () => {
    if (!activeTest || !testStartedAt) return;
    const submittedAt = Date.now();
    const result = calcAttempt(activeTest, answers, testStartedAt, submittedAt);
    const feedback = generateCoachFeedback({
      ...result,
      writtenResponses: Object.fromEntries(
        Object.entries(answers).filter(([key]) => activeTest.questions.find((q: any) => q.id === key)?.type === "written")
      ),
    });
    const attempt = {
      id: `attempt-${attempts.length + 1}`,
      student: currentUser.name,
      testId: activeTest.id,
      score: result.score,
      completedAt: new Date().toLocaleString(),
      durationSeconds: result.durationSeconds,
      strengths: result.strengths,
      improvements: result.improvements,
      answers,
      feedback,
      correct: result.correct,
      total: result.total,
    };
    setAttempts((prev) => [attempt, ...prev]);
    setSubmittedAttempt(attempt);
    setReviewOpen(true);
  };

  const releaseToggle = (testId: string, nextValue: boolean) => {
    setTests((prev) => prev.map((t) => (t.id === testId ? { ...t, released: nextValue } : t)));
  };

  const statsByTest = useMemo(() => {
    return tests.map((test) => {
      const related = attempts.filter((a) => a.testId === test.id);
      const avg = related.length ? Math.round(related.reduce((s, x) => s + x.score, 0) / related.length) : 0;
      return {
        id: test.id,
        title: test.title,
        attempts: related.length,
        avg,
        released: test.released,
      };
    });
  }, [tests, attempts]);

  const adminRadar = useMemo(() => {
    const topicScores: Record<string, { total: number; count: number }> = {};
    attempts.forEach((attempt) => {
      attempt.strengths?.forEach((t: string) => {
        topicScores[t] = topicScores[t] || { total: 0, count: 0 };
        topicScores[t].total += 85;
        topicScores[t].count += 1;
      });
      attempt.improvements?.forEach((t: string) => {
        topicScores[t] = topicScores[t] || { total: 0, count: 0 };
        topicScores[t].total += 55;
        topicScores[t].count += 1;
      });
    });
    return Object.entries(topicScores).map(([topic, v]) => ({ topic, score: Math.round(v.total / v.count) }));
  }, [attempts]);

  const releasedTests = tests.filter((t) => t.released);
  const currentReviewQuestions = activeTest?.questions || [];

  // ── Active test screen ──────────────────────────────────────────────────────
  if (activeTest && !submittedAttempt) {
    const q = activeTest.questions[reviewIndex];
    const progress = Math.round(((reviewIndex + 1) / activeTest.questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 p-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest">{activeTest.title}</p>
            <p className="text-sm font-semibold text-slate-700">Question {reviewIndex + 1} of {activeTest.questions.length}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
              timeLeft < 300 ? "bg-rose-100 text-rose-700" : "bg-sky-100 text-sky-700"
            }`}>
              <Clock3 className="h-4 w-4" />
              {formatClock(timeLeft)}
            </div>
            <Button variant="outline" size="sm" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mb-4">
          <Progress value={progress} className="h-2" />
        </div>
        {/* Question card */}
        <div className="mx-auto max-w-3xl">
          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex gap-2 flex-wrap mb-2">
                <Badge variant="secondary">{q.section}</Badge>
                <Badge variant="outline">{q.topic}</Badge>
                <Badge className={q.difficulty === "Easy" ? "bg-emerald-100 text-emerald-700" : q.difficulty === "Medium" ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"}>{q.difficulty}</Badge>
              </div>
              <CardTitle className="text-base font-medium leading-7">{q.prompt}</CardTitle>
            </CardHeader>
            <CardContent>
              {q.type === "mcq" ? (
                <div className="grid gap-3">
                  {q.options!.map((opt: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: i }))}
                      className={`w-full text-left rounded-xl border px-4 py-3 text-sm transition-all ${
                        answers[q.id] === i
                          ? "border-sky-400 bg-sky-50 text-sky-800 font-semibold shadow"
                          : "border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50"
                      }`}
                    >
                      <span className="mr-3 font-bold text-slate-400">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <textarea
                  className="w-full rounded-xl border border-slate-200 p-4 text-sm min-h-[160px] focus:outline-none focus:ring-2 focus:ring-sky-300"
                  placeholder="Write your response here..."
                  value={answers[q.id] || ""}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                />
              )}
              <div className="mt-6 flex justify-between">
                <Button variant="outline" disabled={reviewIndex === 0} onClick={() => setReviewIndex((i) => i - 1)}>← Previous</Button>
                {reviewIndex < activeTest.questions.length - 1 ? (
                  <Button onClick={() => setReviewIndex((i) => i + 1)}>Next →</Button>
                ) : (
                  <Button onClick={handleSubmit} className="bg-emerald-600 hover:bg-emerald-700">Submit Test</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ── Login screen ────────────────────────────────────────────────────────────
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-violet-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">JMSS Practice Suite</CardTitle>
              <CardDescription>Year 10 Entrance Exam Preparation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1 block">Name</label>
                <Input value={loginName} onChange={(e) => setLoginName(e.target.value)} placeholder="e.g. shaunak" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1 block">Password</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1 block">Role</label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="admin">Admin / Parent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {loginError && <p className="text-sm text-rose-600 bg-rose-50 rounded-lg px-3 py-2">{loginError}</p>}
              <Button className="w-full" onClick={login}>Sign In <ChevronRight className="h-4 w-4" /></Button>
              <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-500 space-y-1">
                <p><span className="font-semibold">Student:</span> shaunak or shalini / demo123</p>
                <p><span className="font-semibold">Admin:</span> Parent Admin / admin123</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // ── Main dashboard ───────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      {/* Nav */}
      <div className="border-b bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-500">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">JMSS Practice Suite</p>
              <p className="text-xs text-slate-500">Year 10 Entrance Prep</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
              <UserRound className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">{currentUser.name}</span>
              <Badge variant="outline" className="text-xs">{currentUser.role}</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={logout}>Sign out</Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {currentUser.role === "admin" ? (
          // ── Admin view ──────────────────────────────────────────────────────
          <Tabs defaultValue="tests">
            <TabsList className="mb-6">
              <TabsTrigger value="tests"><BookOpen className="h-4 w-4 mr-2" />Tests</TabsTrigger>
              <TabsTrigger value="analytics"><BarChart3 className="h-4 w-4 mr-2" />Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="tests">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tests.map((test) => (
                  <Card key={test.id} className="shadow-md">
                    <CardHeader>
                      <div className={`h-2 w-full rounded-full bg-gradient-to-r ${test.accent} mb-3`} />
                      <CardTitle className="text-base">{test.title}</CardTitle>
                      <CardDescription>{test.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{test.questions.length} questions</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">{test.released ? "Released" : "Locked"}</span>
                          <Switch checked={test.released} onCheckedChange={(v) => releaseToggle(test.id, v)} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="shadow-md">
                  <CardHeader><CardTitle className="text-base">Average Score by Test</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={220}>
                      <BarChart data={statsByTest}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="title" tick={{ fontSize: 11 }} />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Bar dataKey="avg" fill="#6366f1" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                {adminRadar.length > 0 && (
                  <Card className="shadow-md">
                    <CardHeader><CardTitle className="text-base">Topic Mastery Radar</CardTitle></CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={220}>
                        <RadarChart data={adminRadar}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="topic" tick={{ fontSize: 11 }} />
                          <PolarRadiusAxis domain={[0, 100]} />
                          <Radar dataKey="score" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                )}
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">All Attempts</h3>
                <div className="grid gap-3">
                  {attempts.map((a) => (
                    <Card key={a.id} className="shadow-sm">
                      <CardContent className="py-3 flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <UserRound className="h-4 w-4 text-slate-400" />
                          <span className="text-sm font-medium">{a.student}</span>
                          <span className="text-xs text-slate-400">{a.testId}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getBadgeTone(a.score)}>{a.score}%</Badge>
                          <span className="text-xs text-slate-400">{a.completedAt}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          // ── Student view ────────────────────────────────────────────────────
          <Tabs defaultValue="tests">
            <TabsList className="mb-6">
              <TabsTrigger value="tests"><Rocket className="h-4 w-4 mr-2" />Practice Tests</TabsTrigger>
              <TabsTrigger value="history"><Activity className="h-4 w-4 mr-2" />My Results</TabsTrigger>
            </TabsList>

            <TabsContent value="tests">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tests.map((test) => {
                  const myAttempts = studentAttempts.filter((a) => a.testId === test.id);
                  const best = myAttempts.length ? Math.max(...myAttempts.map((a) => a.score)) : null;
                  return (
                    <motion.div key={test.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                      <Card className={`shadow-md h-full flex flex-col ${ !test.released ? "opacity-60" : ""}`}>
                        <CardHeader>
                          <div className={`h-2 w-full rounded-full bg-gradient-to-r ${test.accent} mb-3`} />
                          <CardTitle className="text-base flex items-center gap-2">
                            {test.title}
                            {!test.released && <Lock className="h-4 w-4 text-slate-400" />}
                          </CardTitle>
                          <CardDescription>{test.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3 flex-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-500">{test.questions.length} questions</span>
                            {best !== null && <Badge className={getBadgeTone(best)}>Best: {best}%</Badge>}
                          </div>
                          <Button
                            className="mt-auto w-full"
                            disabled={!test.released}
                            onClick={() => startTest(test.id)}
                          >
                            {!test.released ? <><Lock className="h-4 w-4 mr-2" />Locked</> : <><PlayCircle className="h-4 w-4 mr-2" />{myAttempts.length ? "Retake" : "Start"} Test</>}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="history">
              {studentAttempts.length === 0 ? (
                <div className="text-center py-16 text-slate-400">
                  <Trophy className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p>No attempts yet. Start a practice test!</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {studentAttempts.map((a: any) => (
                    <Card key={a.id} className="shadow-md">
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                          <div>
                            <p className="font-semibold text-slate-800">{tests.find((t) => t.id === a.testId)?.title}</p>
                            <p className="text-xs text-slate-400">{a.completedAt} · {Math.floor(a.durationSeconds / 60)}m {a.durationSeconds % 60}s</p>
                          </div>
                          <Badge className={`text-lg px-4 py-2 ${getBadgeTone(a.score)}`}>{a.score}%</Badge>
                        </div>
                        {a.feedback && (
                          <div className="rounded-xl bg-violet-50 border border-violet-100 p-4 space-y-2">
                            <p className="text-sm font-semibold text-violet-700 flex items-center gap-2"><Sparkles className="h-4 w-4" />{a.feedback.headline}</p>
                            <p className="text-xs text-slate-600">{a.feedback.praise}</p>
                            <p className="text-xs text-slate-600">{a.feedback.growth}</p>
                            <p className="text-xs text-slate-500 italic">{a.feedback.coaching}</p>
                          </div>
                        )}
                        {a.strengths?.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {a.strengths.map((s: string) => <Badge key={s} className="bg-emerald-100 text-emerald-700">✓ {s}</Badge>)}
                            {a.improvements?.map((s: string) => <Badge key={s} className="bg-rose-100 text-rose-700">↑ {s}</Badge>)}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </div>

      {/* Results dialog */}
      <Dialog open={reviewOpen} onOpenChange={setReviewOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              Test Complete!
            </DialogTitle>
            <DialogDescription>
              {submittedAttempt && (
                <span className="text-2xl font-bold text-slate-800">{submittedAttempt.score}%</span>
              )}
            </DialogDescription>
          </DialogHeader>
          {submittedAttempt && (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {submittedAttempt.feedback && (
                <div className="rounded-xl bg-violet-50 border border-violet-100 p-4 space-y-2">
                  <p className="text-sm font-semibold text-violet-700">{submittedAttempt.feedback.headline}</p>
                  <p className="text-xs text-slate-600">{submittedAttempt.feedback.praise}</p>
                  <p className="text-xs text-slate-600">{submittedAttempt.feedback.growth}</p>
                </div>
              )}
              <div className="space-y-3">
                {activeTest?.questions.map((q: any, i: number) => (
                  <ReviewQuestionCard key={q.id} question={q} answer={submittedAttempt.answers[q.id]} index={i} />
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-3 pt-2">
            <Button variant="outline" onClick={() => { setReviewOpen(false); setActiveTestId(null); setSubmittedAttempt(null); }}>
              Back to Dashboard
            </Button>
            <Button onClick={() => { setReviewOpen(false); if (activeTestId) startTest(activeTestId); }}>
              <RefreshCcw className="h-4 w-4 mr-2" />Retake
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
