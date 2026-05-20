# Next.js Learning Guide — JMSS Practice Suite

## 1. What is Next.js?

Next.js is React + routing + API routes + server rendering in one framework. You already know React — Next.js just adds conventions on top.

**React alone:** you manage routing (react-router), no API layer, runs in browser only.
**Next.js:** routing = folder structure, API routes built-in, server + client rendering, deploy to Vercel in one click.

In this app: `src/app/` is the entire application. Every folder = a route. Every `page.tsx` = a page. Every `route.ts` = an API endpoint.

---

## 2. The App Router

Next.js 13+ introduced the App Router. This app uses it exclusively. The old way was the Pages Router (`pages/` folder) — ignore that.

```
src/app/
├── layout.tsx              ← root layout (wraps every page)
├── page.tsx                ← homepage: localhost:3000/
├── login/page.tsx          ← localhost:3000/login
├── student/
│   ├── dashboard/page.tsx  ← localhost:3000/student/dashboard
│   └── tests/[testId]/page.tsx  ← localhost:3000/student/tests/short-1
├── admin/
│   ├── dashboard/page.tsx  ← localhost:3000/admin/dashboard
│   └── students/[studentId]/page.tsx
└── api/
    └── ai/feedback/route.ts  ← POST /api/ai/feedback
```

**Rule: Folder = URL segment. File = what happens at that URL.**

---

## 3. Special Files

### page.tsx
Makes a route accessible. Without it, the folder is just an organisational folder.

```tsx
// src/app/student/dashboard/page.tsx
import { StudentDashboard } from "@/components/jmss/student/student-dashboard";

export default function StudentDashboardPage() {
  return <StudentDashboard />;
}
```

### layout.tsx
Wraps all pages in the same folder and subfolders. Persists across navigation — only the page content swaps out.

```tsx
// src/app/layout.tsx — wraps EVERY page
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### route.ts
Creates an API endpoint. No page rendered — handles HTTP requests and returns JSON.

```ts
// src/app/api/ai/feedback/route.ts = POST /api/ai/feedback
export async function POST(request: Request) {
  const { prompt } = await request.json();
  return NextResponse.json({ result: "ok" });
}
```

### middleware.ts
Runs before every request. In this app it checks if the user is logged in and redirects if not. Lives at the project root.

---

## 4. Dynamic Routes — [param] folders

Square brackets = URL parameter. Same idea as `:testId` in React Router.

```
src/app/student/tests/[testId]/page.tsx
→ matches /student/tests/short-1
→ matches /student/tests/full-3
```

```tsx
export default function TestPage({ params }: { params: { testId: string } }) {
  // params.testId = "short-1" from the URL
  return <TestRunner testId={params.testId} />;
}
```

React Router equivalent: `<Route path="/tests/:testId" element={<TestPage />} />`

---

## 5. Server vs Client Components

This is the biggest mental shift from plain React.

**Server Components (default)** — run on the server, never sent to the browser as JS. Can fetch data directly, access databases, read env vars. No useState, no useEffect, no browser APIs.

**Client Components** — add `"use client"` at the top. These are the React you know — useState, useEffect, event handlers, browser APIs.

```tsx
// SERVER component — no "use client"
// src/app/admin/dashboard/page.tsx
export default function AdminDashboardPage() {
  // Runs on server. Can call database here.
  return <AdminDashboard />;
}
```

```tsx
// CLIENT component — has "use client"
// src/components/jmss/student/test-runner.tsx
"use client";
import { useState } from "react";

export function TestRunner({ test }) {
  const [answers, setAnswers] = useState({});
  // useState works here because it's a client component
}
```

**Rule of thumb:** Start with server components. Add `"use client"` only when you need interactivity (useState, useEffect, onClick, etc.).

In this app:
- Pages (`page.tsx`) = server components — thin wrappers
- Interactive components (TestRunner, StudentList search) = client components
- Data-display components (StudentProfile, AdminDashboard) = server components

---

## 6. API Routes in This App

This app has three API routes:

### POST /api/ai/feedback
Called by the test runner when a student checks a written answer. Sends the student's answer to OpenAI and returns structured feedback.

```ts
// src/app/api/ai/feedback/route.ts
export async function POST(request: Request) {
  const { section, rubric, prompt, studentAnswer, modelAnswer } = await request.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({ ... });
  return NextResponse.json({ feedback: JSON.parse(completion.choices[0].message.content) });
}
```

### POST /api/ai/model-answer
Called when a written question has no pre-written model answer. Generates one via AI at runtime.

```ts
// src/app/api/ai/model-answer/route.ts
export async function POST(request: Request) {
  const { section, prompt, rubric } = await request.json();
  // ... calls OpenAI, returns { modelAnswer: "..." }
}
```

### GET /api/admin/runtime-config
Returns the current feedback mode (ai or local) so the test runner knows which feedback system to use.

**How the test runner calls these APIs:**
```tsx
// Inside a "use client" component
const response = await fetch("/api/ai/feedback", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ section, prompt, studentAnswer }),
});
const data = await response.json();
```

This is identical to how you'd call an API in plain React — `fetch` works the same way.

---

## 7. Supabase Integration

Supabase is the backend database and auth provider. This app has three Supabase client files:

### Browser client — for client components
```ts
// src/lib/auth/browser.ts
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```
Used in: login form, test runner (to save attempts), any "use client" component that needs Supabase.

### Server client — for server components and API routes
```ts
// src/lib/auth/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(..., { cookies: { ... } });
}
```
Used in: server components that need to read data, API routes, middleware.

### Middleware client — for middleware.ts
```ts
// src/lib/auth/middleware.ts
// Special client that can read AND write cookies during middleware execution
```

**Why three clients?** Server and client have different ways of accessing cookies (session storage). Next.js requires different Supabase client configurations for each context.

---

## 8. Middleware — Route Protection

The middleware runs before every request and protects routes.

```ts
// middleware.ts (project root)
export async function middleware(request: NextRequest) {
  const { data: { user } } = await supabase.auth.getUser();

  const isProtected = request.nextUrl.pathname.startsWith("/student") ||
                      request.nextUrl.pathname.startsWith("/admin");

  if (isProtected && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Admin-only routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const profile = await getProfile(user.id);
    if (profile.role !== "admin") {
      return NextResponse.redirect(new URL("/student/dashboard", request.url));
    }
  }
}

export const config = {
  matcher: ["/student/:path*", "/admin/:path*"],
};
```

**The `matcher`** tells Next.js which routes to run middleware on. Without it, middleware runs on every request including static files.

---

## 9. Auth Flow — How Login Works

```
1. User visits /login
2. LoginForm component (client) calls supabase.auth.signInWithPassword()
3. Supabase sets a session cookie in the browser
4. User is redirected to /student/dashboard
5. On every subsequent request, middleware reads the session cookie
6. If valid session → allow through
7. If no session → redirect to /login
```

The login form:
```tsx
"use client";
const supabase = createClient(); // browser client

async function handleLogin(email, password) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (!error) router.push("/student/dashboard");
}
```

The logout route:
```ts
// src/app/logout/route.ts
export async function GET() {
  const supabase = await createClient(); // server client
  await supabase.auth.signOut();
  return NextResponse.redirect("/login");
}
```

---

## 10. The @/ Path Alias

Throughout the app you see imports like:
```ts
import { StudentDashboard } from "@/components/jmss/student/student-dashboard";
```

The `@/` is an alias for `src/`. Configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Without it you'd write `../../../components/jmss/student/student-dashboard` — much harder to read.

---

## 11. Environment Variables

Sensitive values (API keys, database URLs) live in `.env.local` — never committed to Git.

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
OPENAI_API_KEY=sk-...
```

**NEXT_PUBLIC_ prefix** = available in the browser (client components). Use for non-secret public values.
**No prefix** = server only. Never exposed to the browser. Use for secret keys like OpenAI.

```ts
// Server component or API route — works
const key = process.env.OPENAI_API_KEY;

// Client component — NEVER do this with secret keys
// process.env.OPENAI_API_KEY is undefined in the browser
```

This is why the OpenAI calls happen in API routes (`route.ts`) not in client components — the API key must stay on the server.

---

## 12. Data Fetching Patterns

### Pattern 1: Server component fetches data directly
```tsx
// No useEffect needed — just async/await at the top level
export default async function StudentProfilePage({ params }) {
  const supabase = await createClient();
  const { data: student } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", params.studentId)
    .single();

  return <StudentProfile student={student} />;
}
```

### Pattern 2: Client component fetches via API route
```tsx
"use client";
export function TestRunner() {
  const [feedback, setFeedback] = useState(null);

  async function checkAnswer() {
    const res = await fetch("/api/ai/feedback", {
      method: "POST",
      body: JSON.stringify({ answer }),
    });
    const data = await res.json();
    setFeedback(data.feedback);
  }
}
```

### Pattern 3: Client component fetches Supabase directly
```tsx
"use client";
const supabase = createClient(); // browser client

const { data } = await supabase.from("attempts").select("*");
```

**In this app:** currently using mock data (`mock-data.ts`). The next step is replacing mock data with real Supabase queries using Pattern 1 for admin pages and Pattern 3 for the test runner submit.

---

## 13. The Link Component

Next.js has its own `<Link>` component for client-side navigation — no full page reload.

```tsx
import Link from "next/link";

// Instead of <a href="/student/dashboard">
<Link href="/student/dashboard">Go to dashboard</Link>
```

Used throughout this app for all internal navigation. The `<a>` tag is only for external links.

---

## 14. TypeScript in Next.js

This app uses TypeScript throughout. Key patterns:

```tsx
// Page props — params comes from the URL
export default function TestPage({ params }: { params: { testId: string } }) {}

// API route — request is the Web Request API
export async function POST(request: Request) {}

// Component props — define an interface
interface TestRunnerProps {
  test: PracticeTest;
}
export function TestRunner({ test }: TestRunnerProps) {}
```

Types for the app's data are in `src/types/`:
- `test.ts` — PracticeTest, Question, TestKind
- `attempt.ts` — AttemptRecord
- `user.ts` — Profile, AppRole

---

## 15. Deployment to Vercel

This app is deployed to Vercel. The process:

1. Push to GitHub (`git push`)
2. Vercel detects the push and automatically builds
3. Build runs `next build` — compiles TypeScript, optimises assets
4. Deployed to a URL like `practise-test.vercel.app`

Environment variables are set in the Vercel dashboard (not in `.env.local` which is local only).

**Zero config needed** — Vercel knows it's a Next.js app and handles everything automatically.

---

## Quick Reference

| Concept | File/Folder | Example in this app |
|---|---|---|
| Page | `page.tsx` | `src/app/student/dashboard/page.tsx` |
| Layout | `layout.tsx` | `src/app/layout.tsx` |
| API endpoint | `route.ts` | `src/app/api/ai/feedback/route.ts` |
| Middleware | `middleware.ts` | `middleware.ts` (project root) |
| Dynamic route | `[param]/page.tsx` | `src/app/student/tests/[testId]/page.tsx` |
| Client component | `"use client"` at top | `src/components/jmss/student/test-runner.tsx` |
| Server component | No directive needed | `src/app/admin/dashboard/page.tsx` |
| Path alias | `@/` = `src/` | `import ... from "@/components/..."` |
| Public env var | `NEXT_PUBLIC_` prefix | `NEXT_PUBLIC_SUPABASE_URL` |
| Secret env var | No prefix | `OPENAI_API_KEY` |
