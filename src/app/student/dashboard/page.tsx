import { StudentDashboard } from "@/components/jmss/student/student-dashboard";
import { requireRole } from "@/lib/auth/guards";

export default async function StudentDashboardPage() {
  await requireRole("student");
  return <StudentDashboard />;
}
