"use client";

import { useEffect, useMemo, useState } from "react";
import type { PracticeTest, Question } from "@/types/test";
import { buildLocalCoachFeedback } from "@/lib/feedback/local-coach";
import { QuestionPalette } from "@/components/jmss/student/question-palette";

interface TestRunnerProps {
  test: PracticeTest;
}

interface RuntimeConfig {
  feedbackMode: "ai" | "local";
}

interface AIFeedback {
  headline: string;
  estimatedBand: string;
  jmssFocusAreas: string[];
  criterionScores: {
    scientificAccuracy: string;
    reasoningAndLogic: string;
    evidenceAndUseOfData: string;
    structureAndOrganisation: string;
    scientificExpression: string;
  };
  strengths: string[];
  improvements: string[];
  rewriteTip: string;
  nextStepExercise: string;
}

function formatClock(totalSeconds: number) {
  const mins = Math.floor(Math.max(0, totalSeconds) / 60).toString().padStart(2, "0");
  const secs = Math.floor(Math.max(0, totalSeconds) % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

export function TestRunner({ test }: TestRunnerProps) {
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(test.durationSec);
  const [submitted, setSubmitted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [runtimeConfig, setRuntimeConfig] = useState<RuntimeConfig>({ feedbackMode: "local" });
  const [aiFeedback, setAiFeedback] = useState<Record<string, AIFeedback>>({});
  const [aiLoading, setAiLoading] = useState<Record<string, boolean>>({});
  const [aiError, setAiError] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [aiModelAnswers, setAiModelAnswers] = useState<Record<string, string>>({});
  const [aiModelAnswerLoading, setAiModelAnswerLoading] = useState<Record<string, boolean>>({});

  function toggleFlag(questionId: string) {
    setFlaggedQuestions((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  }

  useEffect(() => {
    async function loadRuntimeConfig() {
      try {
        const response = await fetch("/api/admin/runtime-config", { cache: "no-store" });
        const payload = await response.json();
        if (response.ok && payload?.feedbackMode) {
          setRuntimeConfig(payload);
        }
      } catch {
        // Leave the default local mode in place if config cannot be loaded.
      }
    }

    loadRuntimeConfig();
  }, []);

  useEffect(() => {
    if (submitted) return;
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [submitted]);

  const question = test.questions[questionIndex];
  const mcqQuestions = useMemo(() => test.questions.filter((q) => q.type === "mcq"), [test.questions]);
  const writtenQuestions = useMemo(() => test.questions.filter((q) => q.type === "written"), [test.questions]);
  const mcqCorrect = mcqQuestions.filter((q) => answers[q.id] === q.correctIndex).length;
  const score = mcqQuestions.length ? Math.round((mcqCorrect / mcqQuestions.length) * 100) : 100;

  const canCheck = (question: Question) => {
    const answer = answers[question.id];
    if (checkedAnswers[question.id]) return false;
    if (question.type === "mcq") return answer !== undefined;
    return typeof answer === "string" && answer.trim().length > 0;
  };

  async function fetchAIFeedback(question: Question, studentAnswer: string) {
    if (aiFeedback[question.id] || aiLoading[question.id]) return;

    setAiLoading((prev) => ({ ...prev, [question.id]: true }));
    setAiError((prev) => ({ ...prev, [question.id]: "" }));

    try {
      const response = await fetch("/api/ai/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: question.section,
          rubric: question.rubric,
          prompt: question.prompt,
          studentAnswer,
          modelAnswer: question.modelAnswer,
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.detail || payload?.error || "AI feedback request failed");
      }

      setAiFeedback((prev) => ({ ...prev, [question.id]: payload.feedback }));
    } catch (error) {
      setAiError((prev) => ({
        ...prev,
        [question.id]: error instanceof Error ? error.message : "Unknown AI feedback error",
      }));
    } finally {
      setAiLoading((prev) => ({ ...prev, [question.id]: false }));
    }
  }

  const isFallbackModelAnswer = (ma: string | undefined) =>
    !ma || ma.startsWith("AI-generated model answer:");

  async function fetchAIModelAnswer(question: Question) {
    if (aiModelAnswers[question.id] || aiModelAnswerLoading[question.id]) return;
    setAiModelAnswerLoading((prev) => ({ ...prev, [question.id]: true }));
    try {
      const res = await fetch("/api/ai/model-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section: question.section, prompt: question.prompt, rubric: question.rubric }),
      });
      const data = await res.json();
      if (res.ok && data.modelAnswer) {
        setAiModelAnswers((prev) => ({ ...prev, [question.id]: data.modelAnswer }));
      }
    } catch {
      // silently fall back to placeholder
    } finally {
      setAiModelAnswerLoading((prev) => ({ ...prev, [question.id]: false }));
    }
  }

  const handleCheckAnswer = (question: Question) => {
    setCheckedAnswers((prev) => ({ ...prev, [question.id]: true }));

    if (question.type === "written") {
      // If model answer is a fallback placeholder, fetch real one from AI
      if (isFallbackModelAnswer(question.modelAnswer)) {
        fetchAIModelAnswer(question);
      }
      if (runtimeConfig.feedbackMode === "ai") {
        const studentAnswer = typeof answers[question.id] === "string" ? String(answers[question.id]) : "";
        if (studentAnswer.trim()) fetchAIFeedback(question, studentAnswer);
      }
    }
  };

  const checked = question ? !!checkedAnswers[question.id] : false;
  const answer = question ? answers[question.id] : undefined;
  const progress = Math.round(((questionIndex + 1) / test.questions.length) * 100);

  if (!question) {
    return <div className="card-shell p-6">No questions found.</div>;
  }

  const localCoach = checked && question.type === "written"
    ? buildLocalCoachFeedback({
        answer: typeof answer === "string" ? answer : "",
        modelAnswer: question.modelAnswer ?? "",
        section: question.section,
      })
    : null;

  const shouldShowLocalCoach = question.type === "written" && checked && (
    runtimeConfig.feedbackMode === "local" || !!aiError[question.id]
  );

  return (
    <div className="space-y-6">
      <div className="card-shell p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${test.kind === "trial" ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700"}`}>
                {test.kind === "trial" ? "Trial Test" : "Full Test"}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Question {questionIndex + 1} of {test.questions.length}</span>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${runtimeConfig.feedbackMode === "ai" ? "bg-fuchsia-100 text-fuchsia-700" : "bg-amber-100 text-amber-700"}`}>
                {runtimeConfig.feedbackMode === "ai" ? "AI Coach Enabled" : "Local Coach Enabled"}
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-slate-900">{test.title}</h1>
            <p className="mt-1 text-slate-600">{test.subtitle}</p>
          </div>
          <div className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${timeLeft < 300 ? "border-rose-200 bg-rose-50 text-rose-700" : "border-sky-200 bg-sky-50 text-sky-700"}`}>
            Time Left: {formatClock(timeLeft)}
          </div>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full bg-slate-900" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {!submitted ? (
        <div className="grid gap-6 xl:grid-cols-[1fr_260px]">
          <div className="space-y-6">
          <div className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-calm">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">Question {questionIndex + 1}</span>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs text-sky-700">{question.section}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{question.topic}</span>
              </div>
              <button
                type="button"
                onClick={() => toggleFlag(question.id)}
                className={`rounded-2xl border px-3 py-1.5 text-xs font-medium transition ${
                  flaggedQuestions[question.id]
                    ? "border-amber-300 bg-amber-50 text-amber-700"
                    : "border-slate-200 bg-white text-slate-500 hover:border-amber-300 hover:text-amber-600"
                }`}
              >
                {flaggedQuestions[question.id] ? "🚩 Flagged" : "🏳 Flag"}
              </button>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">{question.prompt}</h2>

            {question.type === "mcq" ? (
              <div className="mt-4 grid gap-3">
                {question.options?.map((option, optionIndex) => {
                  const selected = answer === optionIndex;
                  const locked = checked;
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={locked}
                      onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))}
                      className={`rounded-2xl border p-4 text-left transition ${selected ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 text-slate-700"} ${locked ? "cursor-not-allowed opacity-90" : "hover:border-slate-300 hover:bg-white"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${selected ? "border-white/40 bg-white/10" : "border-slate-300 bg-white text-slate-700"}`}>
                          {String.fromCharCode(65 + optionIndex)}
                        </div>
                        <span>{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <textarea
                className="mt-4 w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-90"
                rows={10}
                placeholder="Write your response here..."
                disabled={checked}
                value={typeof answer === "string" ? answer : ""}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [question.id]: e.target.value }))}
              />
            )}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={!canCheck(question)}
                onClick={() => handleCheckAnswer(question)}
                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {checked ? "Answer Checked" : "Check Answer"}
              </button>
              {checked ? <span className="text-sm text-slate-600">Answer locked — you cannot change it after checking.</span> : null}
            </div>

            {checked ? (
              question.type === "mcq" ? (
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Your answer</div>
                    <div className={`rounded-2xl border px-4 py-3 text-sm font-medium ${answer === question.correctIndex ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"}`}>
                      {typeof answer === "number" ? question.options?.[answer] : "Not answered"}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Correct answer</div>
                    <div className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
                      {question.options?.[question.correctIndex ?? 0]}
                    </div>
                  </div>
                  <div className="md:col-span-2 rounded-2xl border border-violet-100 bg-violet-50 p-4">
                    <div className="mb-2 text-sm font-semibold text-violet-700">Why this is correct</div>
                    <p className="text-sm leading-7 text-slate-700">{question.explanation}</p>
                  </div>
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Your response</div>
                      <p className="text-sm leading-7 text-slate-700 whitespace-pre-wrap">{typeof answer === "string" ? answer : "No response"}</p>
                    </div>
                    <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                      <div className="mb-2 text-sm font-semibold text-sky-700">Top-band model answer</div>
                      {aiModelAnswerLoading[question.id] ? (
                        <p className="text-sm text-slate-500 italic">Generating top-band model answer...</p>
                      ) : (
                        <p className="text-sm leading-7 text-slate-700 whitespace-pre-wrap">
                          {aiModelAnswers[question.id] ||
                            (isFallbackModelAnswer(question.modelAnswer) ? "" : question.modelAnswer)}
                        </p>
                      )}
                      {question.rubric?.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {question.rubric.map((item) => (
                            <span key={item} className="rounded-full bg-white px-3 py-1 text-xs text-slate-700">{item}</span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {shouldShowLocalCoach && localCoach ? (
                    <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
                      <div className="mb-2 text-sm font-semibold text-amber-700">
                        {runtimeConfig.feedbackMode === "local" ? "Local Coach Feedback" : "Fallback Local Coach Feedback"}
                      </div>
                      {aiError[question.id] ? <p className="mb-3 text-sm text-rose-700">AI feedback failed, so local coach mode has surfaced automatically: {aiError[question.id]}</p> : null}
                      <p className="mb-3 text-sm text-slate-700">{localCoach.headline}</p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <div className="mb-2 text-sm font-semibold text-emerald-700">What is working</div>
                          <ul className="space-y-2 text-sm text-slate-700">
                            {localCoach.strengths.length ? localCoach.strengths.map((item) => <li key={item}>• {item}</li>) : <li>• Keep building your scientific detail and structure.</li>}
                          </ul>
                        </div>
                        <div>
                          <div className="mb-2 text-sm font-semibold text-rose-700">Next step to improve</div>
                          <ul className="space-y-2 text-sm text-slate-700">
                            {localCoach.improvements.length ? localCoach.improvements.map((item) => <li key={item}>• {item}</li>) : <li>• Refine wording and keep strengthening explanation quality.</li>}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {runtimeConfig.feedbackMode === "ai" ? (
                    <div className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50 p-4">
                      <div className="mb-2 text-sm font-semibold text-fuchsia-700">AI Coach Feedback (Phase 7 JMSS-specific)</div>
                      {aiLoading[question.id] ? (
                        <p className="text-sm text-slate-700">Generating personalised JMSS-specific AI feedback...</p>
                      ) : aiError[question.id] ? (
                        <p className="text-sm text-rose-700">AI feedback could not be shown. Local coach fallback is active instead.</p>
                      ) : aiFeedback[question.id] ? (
                        <div className="space-y-4 text-sm text-slate-700">
                          <div>
                            <div className="font-semibold text-slate-900">{aiFeedback[question.id].headline}</div>
                            <div className="mt-1 inline-flex rounded-full bg-white px-3 py-1 text-xs text-fuchsia-700">Estimated band: {aiFeedback[question.id].estimatedBand}</div>
                          </div>

                          <div>
                            <div className="mb-2 font-semibold text-slate-900">JMSS focus areas</div>
                            <div className="flex flex-wrap gap-2">
                              {aiFeedback[question.id].jmssFocusAreas.map((item) => (
                                <span key={item} className="rounded-full bg-white px-3 py-1 text-xs text-slate-700">{item}</span>
                              ))}
                            </div>
                          </div>

                          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                            {Object.entries(aiFeedback[question.id].criterionScores).map(([key, value]) => (
                              <div key={key} className="rounded-2xl bg-white p-3">
                                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{key}</div>
                                <div className="mt-2 font-semibold text-slate-900">{value}</div>
                              </div>
                            ))}
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <div className="mb-2 font-semibold text-emerald-700">Specific strengths</div>
                              <ul className="space-y-2">
                                {aiFeedback[question.id].strengths.map((item) => <li key={item}>• {item}</li>)}
                              </ul>
                            </div>
                            <div>
                              <div className="mb-2 font-semibold text-rose-700">Specific improvements</div>
                              <ul className="space-y-2">
                                {aiFeedback[question.id].improvements.map((item) => <li key={item}>• {item}</li>)}
                              </ul>
                            </div>
                          </div>

                          <div className="rounded-2xl bg-white p-4">
                            <div className="mb-1 font-semibold text-slate-900">Rewrite tip</div>
                            <p>{aiFeedback[question.id].rewriteTip}</p>
                          </div>
                          <div className="rounded-2xl bg-white p-4">
                            <div className="mb-1 font-semibold text-slate-900">Next-step exercise</div>
                            <p>{aiFeedback[question.id].nextStepExercise}</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-slate-700">AI feedback will appear here after the written answer has been checked.</p>
                      )}
                    </div>
                  ) : null}
                </div>
              )
            ) : null}
          </div>

          <div className="flex flex-wrap justify-between gap-3">
            <button type="button" disabled={questionIndex === 0} onClick={() => setQuestionIndex((prev) => Math.max(0, prev - 1))} className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-50">← Previous</button>
            <div className="flex flex-wrap gap-3">
              <button type="button" disabled={questionIndex >= test.questions.length - 1} onClick={() => setQuestionIndex((prev) => Math.min(test.questions.length - 1, prev + 1))} className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-50">Next →</button>
              <button type="button" onClick={() => setSubmitted(true)} className="rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">Submit Test</button>
            </div>
          </div>
          </div>
          <QuestionPalette
            questions={test.questions}
            currentIndex={questionIndex}
            answers={answers}
            checkedAnswers={checkedAnswers}
            flaggedQuestions={flaggedQuestions}
            onJump={(index) => setQuestionIndex(index)}
          />
        </div>
      ) : (
        <div className="card-shell p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Test Summary</h2>
          <p className="mt-2 text-slate-600">This phase gives you admin-controlled feedback mode, true AI critique, and automatic local fallback — still without persistence.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">MCQ Score</div><div className="mt-2 text-3xl font-semibold text-slate-900">{score}%</div></div>
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Correct MCQs</div><div className="mt-2 text-3xl font-semibold text-slate-900">{mcqCorrect}/{mcqQuestions.length}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Written Questions</div><div className="mt-2 text-3xl font-semibold text-slate-900">{writtenQuestions.length}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Time Used</div><div className="mt-2 text-3xl font-semibold text-slate-900">{formatClock(test.durationSec - timeLeft)}</div></div>
          </div>
        </div>
      )}
    </div>
  );
}
