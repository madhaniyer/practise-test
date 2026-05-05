# JMSS Practice Suite — Phase 3 Overlay

This overlay adds the first real student test-flow features on top of the Phase 1 + Phase 2 package.

## Added in this overlay
- Two **trial/sample tests** (15 minutes each)
- Full tests separated from trial tests
- Student dashboard shows:
  - trial tests
  - released full tests
  - locked full tests
- Real client-side **test runner**
- Per-question **Check Answer** button
- **Answer locking** after checking
- Immediate reveal of:
  - correct answer + explanation for MCQ
  - model answer + rubric for written questions
- End-of-test summary on the same page

## How to apply
1. Unzip this overlay into the root of your existing project.
2. Overwrite the matching files.
3. Run `npm run dev`.

## Notes
- This overlay still uses the current mock-data layer.
- The next step after this is real DB persistence for tests and attempts.
