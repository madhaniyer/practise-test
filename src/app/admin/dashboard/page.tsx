import { AdminDashboard } from "@/components/jmss/admin/admin-dashboard";
import { requireRole } from "@/lib/auth/guards";

export default async function AdminDashboardPage() {
  await requireRole("admin");
  return <AdminDashboard />;
}
