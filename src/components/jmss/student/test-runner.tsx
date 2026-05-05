"use client";

import { useEffect, useMemo, useState } from "react";
import type { PracticeTest, Question } from "@/types/test";
import { NavButtons } from "@/components/jmss/shared/nav-buttons";

interface TestRunnerProps {
  test: PracticeTest;
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

  const handleCheckAnswer = (questionId: string) => {
    setCheckedAnswers((prev) => ({ ...prev, [questionId]: true }));
  };

  const renderQuestion = (question: Question, index: number) => {
    const checked = !!checkedAnswers[question.id];
    const answer = answers[question.id];

    return (
      <div key={question.id} className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-calm">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">Question {index + 1}</span>
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs text-sky-700">{question.section}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{question.topic}</span>
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
            rows={6}
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
            onClick={() => handleCheckAnswer(question.id)}
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
            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">Your response</div>
                <p className="text-sm leading-7 text-slate-700 whitespace-pre-wrap">{typeof answer === "string" ? answer : "No response"}</p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                <div className="mb-2 text-sm font-semibold text-sky-700">Model answer / guide</div>
                <p className="text-sm leading-7 text-slate-700 whitespace-pre-wrap">{question.modelAnswer}</p>
                {question.rubric?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {question.rubric.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3 py-1 text-xs text-slate-700">{item}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          )
        ) : null}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="card-shell p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${test.kind === "trial" ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700"}`}>
                {test.kind === "trial" ? "Trial Test" : "Full Test"}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{test.questions.length} questions</span>
            </div>
            <h1 className="text-3xl font-semibold text-slate-900">{test.title}</h1>
            <p className="mt-1 text-slate-600">{test.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${timeLeft < 300 ? "border-rose-200 bg-rose-50 text-rose-700" : "border-sky-200 bg-sky-50 text-sky-700"}`}>
              Time Left: {formatClock(timeLeft)}
            </div>
            <NavButtons homeHref="/student/dashboard" />
          </div>
        </div>
      </div>

      {!submitted ? (
        <>
          {test.questions.map((question, index) => renderQuestion(question, index))}
          <div className="flex justify-end">
            <button type="button" onClick={() => setSubmitted(true)} className="rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">
              Submit Test
            </button>
          </div>
        </>
      ) : (
        <div className="card-shell p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Test Summary</h2>
          <p className="mt-2 text-slate-600">You have completed the test. Use the information below to reflect before your next attempt.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">MCQ Score</div>
              <div className="mt-2 text-3xl font-semibold text-slate-900">{score}%</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Correct MCQs</div>
              <div className="mt-2 text-3xl font-semibold text-slate-900">{mcqCorrect}/{mcqQuestions.length}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Written Questions</div>
              <div className="mt-2 text-3xl font-semibold text-slate-900">{writtenQuestions.length}</div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">
              <div className="mb-2 font-semibold">What went well</div>
              You completed the test and can now review each checked answer immediately. Trial tests are ideal for fast confidence-building.
            </div>
            <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-800">
              <div className="mb-2 font-semibold">What to improve</div>
              Use the question-by-question feedback to identify the exact areas where your scientific reasoning or expression needs tightening.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
