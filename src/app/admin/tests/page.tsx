import { mockTests } from "@/lib/tests/mock-data";
import { requireRole } from "@/lib/auth/guards";

export default async function AdminTestsPage() {
  await requireRole("admin");
  return (
    <div className="card-shell p-6">
      <h1 className="text-3xl font-semibold text-slate-900">Admin Test Management</h1>
      <p className="mt-2 text-slate-600">This page will become the real release-management and content workspace.</p>
      <div className="mt-6 space-y-3">
        {mockTests.map((test) => (
          <div key={test.id} className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4">
            <div className="font-semibold text-slate-900">{test.title}</div>
            <div className="text-sm text-slate-600">{test.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
