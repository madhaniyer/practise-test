import { notFound } from "next/navigation";
import { requireRole } from "@/lib/auth/guards";
import { mockTests } from "@/lib/tests/mock-data";
import { TestRunner } from "@/components/jmss/student/test-runner";

interface Props {
  params: Promise<{ testId: string }>;
}

export default async function StudentTestRunnerPage({ params }: Props) {
  await requireRole("student");
  const { testId } = await params;
  const test = mockTests.find((item) => item.id === testId);

  if (!test) notFound();

  if (test.kind === "full" && !test.released) {
    return (
      <div className="card-shell p-6">
        <h1 className="text-3xl font-semibold text-slate-900">Test Not Released</h1>
        <p className="mt-2 text-slate-600">This full test exists but has not yet been released to the student.</p>
      </div>
    );
  }

  return <TestRunner test={test} />;
}
