import { requireRole } from "@/lib/auth/guards";
import { mockAttempts, mockTests } from "@/lib/tests/mock-data";
import { NavButtons } from "@/components/jmss/shared/nav-buttons";

interface Props {
  params: Promise<{ attemptId: string }>;
}

export default async function AdminAttemptDetailPage({ params }: Props) {
  await requireRole("admin");
  const { attemptId } = await params;
  const attempt = mockAttempts.find((a) => a.id === attemptId);
  const test = mockTests.find((t) => t.id === attempt?.testId);

  return (
    <div className="space-y-6">
      <div className="card-shell p-6">
        <div className="mb-4 flex justify-end"><NavButtons homeHref="/admin/dashboard" /></div>
        <h1 className="text-3xl font-semibold text-slate-900">Granular Attempt Detail</h1>
        <p className="mt-2 text-slate-600">This route will become the rich admin attempt inspector.</p>
        {attempt ? (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Student</div><div className="mt-2 text-xl font-semibold text-slate-900">{attempt.studentName}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Score</div><div className="mt-2 text-xl font-semibold text-slate-900">{attempt.score}%</div></div>
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Test</div><div className="mt-2 text-xl font-semibold text-slate-900">{test?.title ?? attempt.testId}</div></div>
          </div>
        ) : <p className="mt-4 text-slate-600">Attempt not found.</p>}
      </div>
    </div>
  );
}
