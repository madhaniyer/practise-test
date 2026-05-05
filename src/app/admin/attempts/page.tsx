import Link from "next/link";
import { mockAttempts } from "@/lib/tests/mock-data";
import { requireRole } from "@/lib/auth/guards";

export default async function AdminAttemptsPage() {
  await requireRole("admin");
  return (
    <div className="card-shell p-6">
      <h1 className="text-3xl font-semibold text-slate-900">Admin Attempt Inspector</h1>
      <p className="mt-2 text-slate-600">This page lists attempts and links to the detailed inspector placeholder.</p>
      <div className="mt-6 space-y-3">
        {mockAttempts.map((attempt) => (
          <Link key={attempt.id} href={`/admin/attempts/${attempt.id}`} className="block rounded-3xl border border-slate-100 bg-slate-50/80 p-4 hover:border-slate-300 hover:bg-white">
            <div className="font-semibold text-slate-900">{attempt.studentName} · {attempt.score}%</div>
            <div className="text-sm text-slate-600">{attempt.testId} · {new Date(attempt.submittedAt).toLocaleString()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
