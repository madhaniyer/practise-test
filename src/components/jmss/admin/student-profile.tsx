import Link from "next/link";
import { mockAttempts, mockStudents, mockTests } from "@/lib/tests/mock-data";
import { HeaderShell } from "@/components/jmss/shared/header-shell";

export function StudentProfile({ studentId }: { studentId: string }) {
  const student = mockStudents.find((s) => s.id === studentId);
  const attempts = mockAttempts
    .filter((a) => a.studentId === studentId)
    .sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime());

  if (!student) {
    return (
      <div className="card-shell p-8 text-center text-slate-500">
        Student not found. <Link href={"/admin/students" as any} className="text-slate-900 underline">Back to students</Link>
      </div>
    );
  }

  const scores = attempts.map((a) => a.score);
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  const best = scores.length ? Math.max(...scores) : 0;
  const trend = scores.length >= 2 ? scores[scores.length - 1] - scores[0] : null;

  // Aggregate strengths and improvements across all attempts
  const strengthCounts: Record<string, number> = {};
  const improveCounts: Record<string, number> = {};
  attempts.forEach((a) => {
    a.strengths.forEach((s) => { strengthCounts[s] = (strengthCounts[s] || 0) + 1; });
    a.improvements.forEach((s) => { improveCounts[s] = (improveCounts[s] || 0) + 1; });
  });
  const topStrengths = Object.entries(strengthCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const topImprovements = Object.entries(improveCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // Score band
  const band = avg >= 90 ? { label: "Excellent", color: "text-emerald-700 bg-emerald-100" }
    : avg >= 80 ? { label: "Strong", color: "text-sky-700 bg-sky-100" }
    : avg >= 70 ? { label: "Developing", color: "text-amber-700 bg-amber-100" }
    : { label: "Needs Work", color: "text-rose-700 bg-rose-100" };

  return (
    <div className="space-y-6">
      <HeaderShell
        badge="Student Dashboard"
        title={student.name}
        subtitle={student.email}
      />

      {/* Summary stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Attempts", value: attempts.length },
          { label: "Average Score", value: `${avg}%` },
          { label: "Best Score", value: `${best}%` },
          { label: "Score Trend", value: trend === null ? "—" : trend > 0 ? `+${trend}` : `${trend}` },
        ].map((item) => (
          <div key={item.label} className="card-shell p-5">
            <div className="text-sm text-slate-500">{item.label}</div>
            <div className={`mt-2 text-3xl font-semibold ${
              item.label === "Score Trend"
                ? trend === null ? "text-slate-400" : trend > 0 ? "text-emerald-600" : trend < 0 ? "text-rose-600" : "text-slate-900"
                : "text-slate-900"
            }`}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Band + score bar */}
      <div className="card-shell p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-slate-700">Overall Performance Band</div>
          <span className={`rounded-full px-3 py-1 text-sm font-semibold ${band.color}`}>{band.label}</span>
        </div>
        <div className="h-4 overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full transition-all ${avg >= 90 ? "bg-emerald-500" : avg >= 80 ? "bg-sky-500" : avg >= 70 ? "bg-amber-500" : "bg-rose-500"}`}
            style={{ width: `${avg}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>0%</span><span>Target: 90%</span><span>100%</span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        {/* Score trend chart (visual bar chart) */}
        <div className="card-shell p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Score History</h2>
          {attempts.length === 0 ? (
            <p className="text-sm text-slate-500">No attempts yet.</p>
          ) : (
            <div className="space-y-3">
              {attempts.map((a) => {
                const test = mockTests.find((t) => t.id === a.testId);
                return (
                  <div key={a.id}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-700 font-medium">{test?.title ?? a.testId}</span>
                      <span className={`font-semibold ${a.score >= 90 ? "text-emerald-600" : a.score >= 80 ? "text-sky-600" : a.score >= 70 ? "text-amber-600" : "text-rose-600"}`}>
                        {a.score}%
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${a.score >= 90 ? "bg-emerald-500" : a.score >= 80 ? "bg-sky-500" : a.score >= 70 ? "bg-amber-500" : "bg-rose-500"}`}
                        style={{ width: `${a.score}%` }}
                      />
                    </div>
                    <div className="mt-0.5 text-xs text-slate-400">{new Date(a.submittedAt).toLocaleDateString()}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Strengths and improvements */}
        <div className="card-shell p-6 space-y-5">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Consistent Strengths</h2>
            {topStrengths.length === 0 ? (
              <p className="text-sm text-slate-500">No data yet.</p>
            ) : (
              <div className="space-y-2">
                {topStrengths.map(([topic, count]) => (
                  <div key={topic} className="flex items-center justify-between rounded-2xl bg-emerald-50 px-4 py-2">
                    <span className="text-sm text-emerald-800">{topic}</span>
                    <span className="text-xs text-emerald-600">{count}× flagged</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Areas to Improve</h2>
            {topImprovements.length === 0 ? (
              <p className="text-sm text-slate-500">No data yet.</p>
            ) : (
              <div className="space-y-2">
                {topImprovements.map(([topic, count]) => (
                  <div key={topic} className="flex items-center justify-between rounded-2xl bg-rose-50 px-4 py-2">
                    <span className="text-sm text-rose-800">{topic}</span>
                    <span className="text-xs text-rose-600">{count}× flagged</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Attempt history table */}
      <div className="card-shell p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Full Attempt History</h2>
        <div className="space-y-3">
          {attempts.length === 0 ? (
            <p className="text-sm text-slate-500">No attempts yet.</p>
          ) : (
            [...attempts].reverse().map((a) => {
              const test = mockTests.find((t) => t.id === a.testId);
              return (
                <Link
                  key={a.id}
                  href={`/admin/attempts/${a.id}`}
                  className="block rounded-3xl border border-slate-100 bg-slate-50/80 p-4 hover:border-slate-300 hover:bg-white transition"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      a.score >= 90 ? "bg-emerald-100 text-emerald-700" :
                      a.score >= 80 ? "bg-sky-100 text-sky-700" :
                      a.score >= 70 ? "bg-amber-100 text-amber-700" :
                      "bg-rose-100 text-rose-700"
                    }`}>{a.score}%</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{test?.title ?? a.testId}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      test?.kind === "short" ? "bg-orange-100 text-orange-700" :
                      test?.kind === "full" ? "bg-sky-100 text-sky-700" :
                      "bg-slate-100 text-slate-700"
                    }`}>{test?.kind ?? "test"}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span>{new Date(a.submittedAt).toLocaleString()}</span>
                    <span>{a.correctCount}/{a.totalMcq} MCQ correct</span>
                    <span>{Math.round(a.durationSeconds / 60)} min</span>
                  </div>
                  {a.strengths.length > 0 && (
                    <div className="mt-2 text-xs text-slate-600">
                      <span className="font-medium text-emerald-700">Strengths: </span>{a.strengths.join(", ")}
                    </div>
                  )}
                  {a.improvements.length > 0 && (
                    <div className="mt-1 text-xs text-slate-600">
                      <span className="font-medium text-rose-700">Improve: </span>{a.improvements.join(", ")}
                    </div>
                  )}
                </Link>
              );
            })
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <Link href={"/admin/students" as any} className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
          ← All Students
        </Link>
      </div>
    </div>
  );
}
