import { requireRole } from "@/lib/auth/guards";
import { mockAttempts } from "@/lib/tests/mock-data";

interface Props {
  params: Promise<{ attemptId: string }>;
}

export default async function StudentAttemptReviewPage({ params }: Props) {
  await requireRole("student");
  const { attemptId } = await params;
  const attempt = mockAttempts.find((a) => a.id === attemptId);

  return (
    <div className="space-y-6">
      <div className="card-shell p-6">
        <h1 className="text-3xl font-semibold text-slate-900">Student Attempt Review</h1>
        <p className="mt-2 text-slate-600">This page is the placeholder for the richer persisted attempt review flow.</p>
        {attempt ? (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Score</div><div className="mt-2 text-3xl font-semibold text-slate-900">{attempt.score}%</div></div>
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Test</div><div className="mt-2 text-xl font-semibold text-slate-900">{attempt.testId}</div></div>
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-sm text-slate-500">Duration</div><div className="mt-2 text-xl font-semibold text-slate-900">{Math.round(attempt.durationSeconds / 60)} min</div></div>
          </div>
        ) : <p className="mt-4 text-slate-600">Attempt not found.</p>}
      </div>
    </div>
  );
}
