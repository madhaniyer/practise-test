# practise-test

JMSS practice test suite scaffold for a student/admin exam simulator.

## What is included
- `src/app/page.tsx` wiring for the page
- `src/components/JMSSPracticeSuite.tsx` scaffold based on the prototype in the workspace page
- `package.json` with core dependencies

## Before running
This prototype expects:
- Tailwind CSS to be configured
- shadcn/ui components to exist under `@/components/ui/*`
- project aliases (`@/*`) to be configured in `tsconfig.json`

## Recommended setup
1. `npx create-next-app@latest practise-test --ts --tailwind --app`
2. `npx shadcn@latest init`
3. Add components used by the prototype:
   - button
   - card
   - input
   - badge
   - progress
   - switch
   - dialog
   - tabs
   - select
4. Replace `src/app/page.tsx` and `src/components/JMSSPracticeSuite.tsx` with the files in this bundle.

## Git commands to push
```bash
git clone https://github.com/madhaniyer/practise-test.git
cd practise-test
# copy files from this bundle into the repo
npm install
# add shadcn/ui pieces if not already present
git add .
git commit -m "Add JMSS practice test suite prototype"
git push origin main
```

## Note
I cannot directly push to GitHub from this environment because there is no authenticated Git access/token session available here.
