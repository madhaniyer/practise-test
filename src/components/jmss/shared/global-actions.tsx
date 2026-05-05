"use client";

import { useRouter } from "next/navigation";

export function GlobalActions() {
  const router = useRouter();

  return (
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => router.back()}
        className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        Back
      </button>
      <button
        type="button"
        onClick={() => router.push("/")}
        className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        Home
      </button>
      <button
        type="button"
        onClick={() => router.push("/logout")}
        className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        Logout
      </button>
    </div>
  );
}
