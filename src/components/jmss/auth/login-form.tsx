"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/auth/browser";

export function LoginForm() {
  const router = useRouter();
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
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push(redirectTo);
    router.refresh();
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
