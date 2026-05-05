import { mockTests } from "@/lib/tests/mock-data";
import { requireRole } from "@/lib/auth/guards";
import { NavButtons } from "@/components/jmss/shared/nav-buttons";

export default async function AdminTestsPage() {
  await requireRole("admin");
  return (
    <div className="card-shell p-6">
      <div className="mb-4 flex justify-end"><NavButtons homeHref="/admin/dashboard" /></div>
      <h1 className="text-3xl font-semibold text-slate-900">Admin Test Management</h1>
      <p className="mt-2 text-slate-600">This page will become the real release-management and content workspace.</p>
      <div className="mt-6 space-y-3">
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
    </div>
  );
}
