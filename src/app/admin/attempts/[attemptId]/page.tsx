import { requireRole } from "@/lib/auth/guards";

interface Props {
  params: Promise<{ attemptId: string }>;
}

export default async function AdminAttemptDetailPage({ params }: Props) {
  await requireRole("admin");
  const { attemptId } = await params;

  return (
    <div className="space-y-6">
      <div className="card-shell p-6">
        <h1 className="text-3xl font-semibold text-slate-900">Granular Attempt Detail</h1>
        <p className="mt-2 text-slate-600">This route will show section summaries, student answers, correct answers, and model written responses for attempt: <strong>{attemptId}</strong>.</p>
      </div>
    </div>
  );
}
