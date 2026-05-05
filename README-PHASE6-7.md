# JMSS Phase 6 + 7 Overlay — Admin Feedback Toggle + JMSS-Specific AI

This overlay adds two major upgrades on top of the previous no-persistence phases.

## What is new
1. Admins can toggle feedback mode between:
   - AI Coach Mode
   - Local Coach Mode
2. If AI feedback fails at runtime, the student automatically sees the local coach fallback instead.
3. The AI prompt has been upgraded to be more JMSS-specific, with stronger focus on:
   - scientific accuracy
   - reasoning and logic
   - evidence and use of data
   - structure and organisation
   - scientific expression

## Files in this overlay
- `package.json`
- `src/lib/runtime/runtime-config.ts`
- `src/app/api/admin/runtime-config/route.ts`
- `src/app/api/ai/feedback/route.ts`
- `src/components/jmss/admin/feedback-mode-card.tsx`
- `src/components/jmss/admin/admin-dashboard.tsx`
- `src/components/jmss/student/test-runner.tsx`

## How to apply
1. Copy these files into your current project, overwriting the existing versions where relevant.
2. Ensure `.env.local` contains:
   `OPENAI_API_KEY=...`
3. Run:
   `npm install`
4. Then run:
   `npm run dev`

## Important note
This still does not add persistence.
The admin toggle is runtime-only and will reset if the server restarts.
