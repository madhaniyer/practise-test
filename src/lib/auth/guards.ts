import { redirect } from "next/navigation";
import { createClient } from "@/lib/auth/server";
import type { AppRole } from "@/types/user";

export async function requireUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");
  return { supabase, user };
}

export async function requireRole(role: AppRole) {
  const { supabase, user } = await requireUser();
  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, full_name, role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== role) {
    redirect(role === "admin" ? "/student/dashboard" : "/admin/dashboard");
  }

  return { supabase, user, profile };
}
