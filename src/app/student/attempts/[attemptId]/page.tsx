import { requireRole } from "@/lib/auth/guards";

interface Props {
  params: Promise<{ attemptId: string }>;
}

export default async function StudentAttemptReviewPage({ params }: Props) {
  await requireRole("student");
  const { attemptId } = await params;

  return (
    <div className="space-y-6">
      <div className="card-shell p-6">
        <h1 className="text-3xl font-semibold text-slate-900">Student Attempt Review</h1>
        <p className="mt-2 text-slate-600">This route will host the premium answer comparison and power-summary UX for attempt: <strong>{attemptId}</strong>.</p>
      </div>
    </div>
  );
}
