# Admin User Guide

## Global page actions
Every page includes:
- **Back**
- **Home**
- **Logout**

## Logging in
1. Open `http://localhost:3000`.
2. Go to `/login`.
3. Enter your Supabase email and password.
4. Your row in `public.profiles` must have `role = 'admin'`.
5. If your role is correct, you can use `/admin/*` routes.

## Admin dashboard overview
The admin dashboard provides:
- summary cards
- test management overview
- attempt inspector overview

## Test catalogue in this package
The package contains:
- 2 trial tests
- 7 full tests

### Release logic
Current release state is driven by the mock data layer in:
```text
src/lib/tests/mock-data.ts
```

A test with:
```ts
released: true
```
can be started by students.

A test with:
```ts
released: false
```
appears locked.

## Admin tests page
Route:
```text
/admin/tests
```

This page shows:
- test title
- subtitle
- kind (`trial` or `full`)
- released / locked state

## Admin attempts page
Route:
```text
/admin/attempts
```

This page lists attempts and links to individual attempt detail pages.

## Managing roles in Supabase
The app uses `public.profiles`.

### Make a user admin
```sql
update public.profiles
set role = 'admin'
where email = 'your-admin-email@example.com';
```

### Make a user student
```sql
update public.profiles
set role = 'student'
where email = 'student-email@example.com';
```

## SQL bootstrap
Run the contents of:
```text
supabase/profiles.sql
```
This creates:
- `public.profiles`
- RLS policies
- trigger for new auth users
- optional backfill for older users
