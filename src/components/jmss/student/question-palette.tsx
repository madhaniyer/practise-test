"use client";

import type { Question } from "@/types/test";

interface QuestionPaletteProps {
  questions: Question[];
  currentIndex: number;
  answers: Record<string, string | number>;
  checkedAnswers: Record<string, boolean>;
  flaggedQuestions: Record<string, boolean>;
  onJump: (index: number) => void;
}

function getButtonClass(args: {
  active: boolean;
  answered: boolean;
  checked: boolean;
  flagged: boolean;
}) {
  const { active, answered, checked, flagged } = args;

  if (active) {
    return "border-slate-900 bg-slate-900 text-white";
  }

  if (checked) {
    return flagged
      ? "border-amber-300 bg-amber-50 text-amber-800"
      : "border-emerald-300 bg-emerald-50 text-emerald-800";
  }

  if (answered) {
    return flagged
      ? "border-amber-300 bg-amber-50 text-amber-800"
      : "border-sky-300 bg-sky-50 text-sky-800";
  }

  if (flagged) {
    return "border-amber-300 bg-white text-amber-800";
  }

  return "border-slate-200 bg-white text-slate-700";
}

export function QuestionPalette({
  questions,
  currentIndex,
  answers,
  checkedAnswers,
  flaggedQuestions,
  onJump,
}: QuestionPaletteProps) {
  const answeredCount = questions.filter((q) => answers[q.id] !== undefined && String(answers[q.id]).trim() !== "").length;
  const checkedCount = questions.filter((q) => !!checkedAnswers[q.id]).length;
  const flaggedCount = questions.filter((q) => !!flaggedQuestions[q.id]).length;

  return (
    <aside className="card-shell p-5 xl:sticky xl:top-6">
      <h2 className="text-lg font-semibold text-slate-900">Question Navigator</h2>
      <p className="mt-1 text-sm text-slate-600">
        Jump to any question and keep track of flagged items you want to revisit.
      </p>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
        <div className="rounded-2xl bg-slate-50 p-3">
          <div className="text-slate-500">Answered</div>
          <div className="mt-1 text-xl font-semibold text-slate-900">{answeredCount}</div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <div className="text-slate-500">Checked</div>
          <div className="mt-1 text-xl font-semibold text-slate-900">{checkedCount}</div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <div className="text-slate-500">Flagged</div>
          <div className="mt-1 text-xl font-semibold text-slate-900">{flaggedCount}</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-slate-900 px-3 py-1 text-white">Current</span>
        <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700 ring-1 ring-sky-300">Answered</span>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-300">Checked</span>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700 ring-1 ring-amber-300">Flagged</span>
      </div>

      <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-6 xl:grid-cols-5 2xl:grid-cols-6">
        {questions.map((question, index) => {
          const answered = answers[question.id] !== undefined && String(answers[question.id]).trim() !== "";
          const checked = !!checkedAnswers[question.id];
          const flagged = !!flaggedQuestions[question.id];

          return (
            <button
              key={question.id}
              type="button"
              onClick={() => onJump(index)}
              className={`relative rounded-2xl border px-0 py-3 text-sm font-medium transition hover:scale-[1.02] ${getButtonClass({
                active: currentIndex === index,
                answered,
                checked,
                flagged,
              })}`}
              title={`${question.section} · ${question.topic}`}
            >
              {index + 1}
              {flagged ? (
                <span className="absolute right-1 top-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-5 space-y-2">
        <div className="text-sm font-semibold text-slate-900">Flagged Questions</div>
        {flaggedCount === 0 ? (
          <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            No flagged questions yet.
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {questions.map((q, idx) =>
              flaggedQuestions[q.id] ? (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => onJump(idx)}
                  className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-300"
                >
                  Q{idx + 1}
                </button>
              ) : null
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
