import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/student/dashboard";

  if (!code) return NextResponse.redirect(`${origin}/login?error=missing_code`);

  const response = NextResponse.redirect(`${origin}${next}`);
  const requestCookies = new Headers(request.headers).get("cookie") || "";

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return requestCookies.split(";").map((v) => v.trim()).filter(Boolean).map((kv) => {
            const idx = kv.indexOf("=");
            return { name: kv.slice(0, idx), value: kv.slice(idx + 1) };
          });
        },
        setAll(cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[]) {
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    }
  );

  await supabase.auth.exchangeCodeForSession(code);
  return response;
}
