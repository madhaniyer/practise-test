"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, LogOut } from "lucide-react";

interface NavButtonsProps {
  homeHref?: string;
}

export function NavButtons({ homeHref = "/" }: NavButtonsProps) {
  const router = useRouter();
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
      <Link
        href={homeHref}
        className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
      >
        <Home className="h-4 w-4" />
        Home
      </Link>
      <form method="POST" action="/logout">
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 rounded-2xl border border-rose-200 bg-white px-4 py-2 text-sm font-medium text-rose-600 shadow-sm transition hover:bg-rose-50"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </form>
    </div>
  );
}
