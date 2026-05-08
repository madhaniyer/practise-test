"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/auth/browser";

export function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/student/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();

    // Diagnostic — remove after confirming fix
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setError("Supabase configuration is missing. Please contact the administrator.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Wait for the session cookie to be written before navigating
    await supabase.auth.getSession();
    window.location.replace(redirectTo);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <input className="rounded-2xl border border-slate-300 px-4 py-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className="rounded-2xl border border-slate-300 px-4 py-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {error ? <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div> : null}
      <button disabled={loading} className="rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white disabled:opacity-60">
        {loading ? "Signing in..." : "Continue"}
      </button>
    </form>
  );
}
