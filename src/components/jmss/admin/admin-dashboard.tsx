import Link from "next/link";
import { mockAttempts, mockTests } from "@/lib/tests/mock-data";
import { HeaderShell } from "@/components/jmss/shared/header-shell";

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <HeaderShell badge="Admin Control Centre" title="JMSS Practice Suite Dashboard" subtitle="Release tests, monitor performance, and inspect granular student attempt detail." />

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Released Tests", value: mockTests.filter((t) => t.released).length },
          { label: "Total Attempts", value: mockAttempts.length },
          { label: "Average Score", value: "72%" },
          { label: "Attempt Inspector", value: "Live" },
        ].map((item) => (
          <div key={item.label} className="card-shell p-5">
            <div className="text-sm text-slate-500">{item.label}</div>
            <div className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <section className="card-shell p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Test Management</h2>
              <p className="mt-1 text-sm text-slate-600">Drafts, release state, and content operations.</p>
            </div>
            <Link href="/admin/tests" className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">Open tests</Link>
          </div>
          <div className="mt-4 space-y-3">
            {mockTests.map((test) => (
              <div key={test.id} className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold text-slate-900">{test.title}</div>
                    <div className="text-sm text-slate-600">{test.subtitle}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${test.kind === "trial" ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700"}`}>{test.kind}</span>
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${test.released ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"}`}>{test.released ? "Released" : "Locked"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card-shell p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Attempt Inspector</h2>
              <p className="mt-1 text-sm text-slate-600">Drill into section performance and question-level detail.</p>
            </div>
            <Link href="/admin/attempts" className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">Inspect attempts</Link>
          </div>
          <div className="mt-4 space-y-3">
            {mockAttempts.map((attempt) => (
              <Link key={attempt.id} href={`/admin/attempts/${attempt.id}`} className="block rounded-3xl border border-slate-100 bg-slate-50/80 p-4 hover:border-slate-300 hover:bg-white">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white">{attempt.studentName}</span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">{attempt.score}%</span>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700">{attempt.testId}</span>
                </div>
                <div className="mt-3 text-sm text-slate-600">Completed: {new Date(attempt.submittedAt).toLocaleString()}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
