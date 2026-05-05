import { requireRole } from "@/lib/auth/guards";

interface Props {
  params: Promise<{ testId: string }>;
}

export default async function StudentTestRunnerPage({ params }: Props) {
  await requireRole("student");
  const { testId } = await params;

  return (
    <div className="space-y-6">
      <div className="card-shell p-6">
        <h1 className="text-3xl font-semibold text-slate-900">Test Runner Placeholder</h1>
        <p className="mt-2 text-slate-600">This route will host the real timed exam runner for test: <strong>{testId}</strong>.</p>
      </div>
    </div>
  );
}
