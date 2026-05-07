# Safe Overlay Patch — Admin Dashboard Release Management

This overlay follows the safe-overlay pattern:
- it adds new files only
- it does not overwrite your working AI route or logout route
- you manually wire the new release-management card into your existing admin dashboard

## New files to add
Copy these files into your project:

```text
supabase/sql/overlay1_schema_release_controls.sql
src/lib/supabase/admin-server.ts
src/app/api/admin/tests/route.ts
src/app/api/admin/tests/[testId]/release/route.ts
src/components/jmss/admin/release-management-card.tsx
```

---

## 1. Run the SQL migration in Supabase
Open your Supabase SQL editor and run:

```text
supabase/sql/overlay1_schema_release_controls.sql
```

This creates:
- profiles
- tests
- questions
- attempts
- attempt_answers
- RLS policies
- admin helper function

---

## 2. Set required environment variables
Make sure your app has these values in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

`SUPABASE_SERVICE_ROLE_KEY` is used only in the server-side admin route handlers.
Do not expose it in client-side code.

---

## 3. Add the release card to your admin dashboard
Open your existing admin dashboard file.

Add this import:

```ts
import { ReleaseManagementCard } from "@/components/jmss/admin/release-management-card";
```

Then render the card near the top of the admin control centre, for example beneath your header shell:

```tsx
<ReleaseManagementCard />
```

---

## 4. Seed tests into the database
Before the card can display anything useful, your `tests` table needs rows.

For Overlay 1, you can do this manually with simple SQL inserts, for example:

```sql
insert into public.tests (title, subtitle, kind, status, duration_sec)
values
  ('Practice Test 1', 'Curated full pack from master bank', 'full', 'draft', 9000),
  ('Practice Test 2', 'Curated full pack from master bank', 'full', 'draft', 9000),
  ('Trial Test 1', '15-minute sampler', 'trial', 'released', 900);
```

In Overlay 2, we can add a proper seeding/import script for the full curated bank.

---

## 5. What you get after Overlay 1
After this patch, your admin control centre can:
- read real tests from Supabase
- show each test’s real release status
- move a test between draft / released / retired
- store release timestamps in the database

This is the first step away from hardcoded mock release flags.

---

## Important note
This overlay intentionally does not yet:
- replace your test runner data source
- persist student attempts
- build the student search card
- build the student performance dashboard

Those come in the next overlays.
