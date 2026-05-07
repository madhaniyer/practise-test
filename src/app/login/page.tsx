import { Suspense } from "react";
import { LoginForm } from "@/components/jmss/auth/login-form";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-xl rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-calm">
      <h1 className="text-3xl font-semibold text-slate-900">Secure Login</h1>
      <p className="mt-2 text-slate-600">Sign in with your Supabase email/password account. Student and admin access will be enforced after sign-in.</p>
      <Suspense fallback={<div className="mt-6 text-sm text-slate-500">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
