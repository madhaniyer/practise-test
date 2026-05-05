import Link from "next/link";
import { mockAttempts, mockTests } from "@/lib/tests/mock-data";
import { HeaderShell } from "@/components/jmss/shared/header-shell";

export function StudentDashboard() {
  const released = mockTests.filter((test) => test.released);

  return (
    <div className="space-y-6">
      <HeaderShell badge="Student Mode" title="JMSS Student Dashboard" subtitle="Build confidence with timed practice, premium answer review, and intelligent next-step coaching." />

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="card-shell p-6">
          <h2 className="text-xl font-semibold text-slate-900">Released Practice Tests</h2>
          <p className="mt-1 text-sm text-slate-600">Only tests released by the admin appear here.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {released.map((test) => (
              <div key={test.id} className="rounded-[28px] border border-slate-100 bg-slate-50/80 p-5">
                <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 p-5 text-white">
                  <div className="text-sm font-medium text-white/80">Ready</div>
                  <h3 className="mt-2 text-xl font-semibold">{test.title}</h3>
                  <p className="mt-1 text-sm text-white/90">{test.subtitle}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>{test.questions.length} questions</span>
                  <span>{Math.round(test.durationSec / 60)} min</span>
                </div>
                <Link href={`/student/tests/${test.id}`} className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white hover:bg-slate-800">Start Test</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="card-shell p-6">
            <h2 className="text-xl font-semibold text-slate-900">Progress Snapshot</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Attempts</div><div className="mt-2 text-3xl font-semibold text-slate-900">{mockAttempts.length}</div></div>
              <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Best Score</div><div className="mt-2 text-3xl font-semibold text-slate-900">72%</div></div>
            </div>
          </div>

          <div className="card-shell p-6">
            <h2 className="text-xl font-semibold text-slate-900">Recent Attempts</h2>
            <div className="mt-4 space-y-3">
              {mockAttempts.map((attempt) => (
                <Link key={attempt.id} href={`/student/attempts/${attempt.id}`} className="block rounded-3xl border border-slate-100 bg-slate-50/80 p-4 hover:border-slate-300 hover:bg-white">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">{attempt.score}%</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{attempt.testId}</span>
                  </div>
                  <div className="mt-3 text-sm text-slate-600">Completed: {new Date(attempt.submittedAt).toLocaleString()}</div>
                  <div className="mt-2 text-sm text-slate-700"><strong>Strengths:</strong> {attempt.strengths.join(", ")}</div>
                  <div className="mt-1 text-sm text-slate-700"><strong>Improve next:</strong> {attempt.improvements.join(", ")}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
