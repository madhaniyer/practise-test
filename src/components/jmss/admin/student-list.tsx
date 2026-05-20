"use client";

import { useState } from "react";
import Link from "next/link";
import { mockAttempts, mockStudents } from "@/lib/tests/mock-data";
import { HeaderShell } from "@/components/jmss/shared/header-shell";

export function StudentList() {
  const [query, setQuery] = useState("");

  const students = mockStudents.map((s) => {
    const attempts = mockAttempts.filter((a) => a.studentId === s.id);
    const scores = attempts.map((a) => a.score);
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
    const best = scores.length ? Math.max(...scores) : null;
    const latest = attempts.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())[0];
    const trend = scores.length >= 2 ? scores[scores.length - 1] - scores[0] : null;
    return { ...s, attempts: attempts.length, avg, best, trend, latest };
  });

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <HeaderShell
        badge="Admin"
        title="Student Performance"
        subtitle="Search for a student to view their full dashboard, score trends and attempt history."
      />

      <div className="card-shell p-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-slate-400 focus:bg-white"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((s) => (
          <Link
            key={s.id}
            href={`/admin/students/${s.id}` as any}
            className="card-shell p-5 hover:border-slate-300 hover:bg-white transition block"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="font-semibold text-slate-900">{s.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.email}</div>
              </div>
              {s.avg !== null && (
                <span className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  s.avg >= 85 ? "bg-emerald-100 text-emerald-700" :
                  s.avg >= 70 ? "bg-amber-100 text-amber-700" :
                  "bg-rose-100 text-rose-700"
                }`}>
                  {s.avg}% avg
                </span>
              )}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-slate-50 p-3 text-center">
                <div className="text-xs text-slate-500">Attempts</div>
                <div className="mt-1 text-xl font-semibold text-slate-900">{s.attempts}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3 text-center">
                <div className="text-xs text-slate-500">Best</div>
                <div className="mt-1 text-xl font-semibold text-slate-900">{s.best ?? "—"}%</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3 text-center">
                <div className="text-xs text-slate-500">Trend</div>
                <div className={`mt-1 text-xl font-semibold ${
                  s.trend === null ? "text-slate-400" :
                  s.trend > 0 ? "text-emerald-600" :
                  s.trend < 0 ? "text-rose-600" : "text-slate-600"
                }`}>
                  {s.trend === null ? "—" : s.trend > 0 ? `+${s.trend}` : s.trend}
                </div>
              </div>
            </div>

            {s.latest && (
              <div className="mt-3 text-xs text-slate-500">
                Last attempt: {new Date(s.latest.submittedAt).toLocaleDateString()} — {s.latest.testId}
              </div>
            )}
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-3 rounded-3xl border border-dashed border-slate-200 p-8 text-center text-slate-500">
            No students match &ldquo;{query}&rdquo;
          </div>
        )}
      </div>
    </div>
  );
}
