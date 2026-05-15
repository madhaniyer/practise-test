# Session Handover — JMSS Practice Suite
## Status at wrap-up

---

## WHAT IS DONE ✓

### MCQ Bank — COMPLETE
- 560 unique Y9-10 level MCQs written and saved to `src/lib/tests/jmss-master-bank.ts`
- All questions are application/reasoning level (NOT simple recall)
- Topics covered: Cell Biology, Genetics, Human Body, Ecology, Evolution, Plants, Microbiology, Atomic Structure, Chemical Bonding, Reactions, Electrochemistry, Organic Chemistry, Quantitative Chemistry, Forces, Energy/Waves, Electricity, Nuclear/Space, Thermodynamics, Optics, Earth/Climate, Scientific Method, Interdisciplinary
- Committed and pushed: commit `0589311`

### Written Question Banks — COMPLETE (prompts only, NO model answers yet)
- 147 unique IC (Science Interest & Communication) prompts in `written-banks.json`
- 147 unique AR (Science Analysis & Reporting) tasks in `written-banks.json`
- Zero duplicates across all 14 tests
- **MODEL ANSWERS ARE STILL PLACEHOLDER "See marking guide."** — this is the main remaining task

### Test Files — NEED REGENERATING
- 14 test files exist but use OLD MCQ bank and have placeholder model answers
- They need to be regenerated after model answers are added

---

## WHAT STILL NEEDS TO BE DONE (in order)

### STEP 1 — Add model answers to written-banks.json (BIGGEST TASK)
Run this generator script approach:

```bash
node generate-model-answers.js
```

The script needs to:
1. Read `written-banks.json`
2. For each of 147 IC prompts — add a `modelAnswer` field (~120-150 words, top-band quality)
3. For each of 147 AR tasks — add a `modelAnswer` field (Aim / Observation / Explanation / Conclusion format)
4. Write updated `written-banks.json`

**Shortcut**: The first 21 IC and 21 AR already have model answers written in the OLD `generate-written-bank.js` file. These can be reused for the first 21 of each. The remaining 126 IC and 126 AR need new model answers.

### STEP 2 — Regenerate all 14 test files
Run:
```bash
node generate-tests.js
```
This already exists and works — it just needs the updated `written-banks.json` with real model answers.

### STEP 3 — Verify zero duplicates
```bash
node -e "
const fs = require('fs');
const allIC = [], allAR = [], allMCQ = [];
for(let i=1;i<=7;i++) {
  const f = fs.readFileSync('./src/lib/tests/short-tests/short-test-'+i+'.ts','utf8').replace(/^import.*\n/gm,'').replace('export const shortTest'+i+': PracticeTest = ','').replace(/;\s*$/,'');
  const t = JSON.parse(f);
  t.questions.forEach(q => { if(q.section==='Science Interest & Communication') allIC.push(q.prompt); else if(q.section==='Science Analysis & Reporting') allAR.push(q.prompt); else allMCQ.push(q.id); });
}
for(let i=1;i<=7;i++) {
  const f = fs.readFileSync('./src/lib/tests/full-tests/full-test-'+i+'.ts','utf8').replace(/^import.*\n/gm,'').replace('export const fullTest'+i+': PracticeTest = ','').replace(/;\s*$/,'');
  const t = JSON.parse(f);
  t.questions.forEach(q => { if(q.section==='Science Interest & Communication') allIC.push(q.prompt); else if(q.section==='Science Analysis & Reporting') allAR.push(q.prompt); else allMCQ.push(q.id); });
}
console.log('IC dups:', allIC.filter((p,i)=>allIC.indexOf(p)!==i).length);
console.log('AR dups:', allAR.filter((p,i)=>allAR.indexOf(p)!==i).length);
console.log('MCQ dups:', allMCQ.filter((p,i)=>allMCQ.indexOf(p)!==i).length);
"
```

### STEP 4 — TypeScript check + commit + push
```bash
npx tsc --noEmit
git add -A && git commit -m "Complete Y9-10 MCQ bank + real model answers + regenerated 14 tests" && git push
```

---

## RESUME PROMPT (paste this when you get home)

> "Pick up from context/session-handover-2.md. MCQs are done (560 questions). The only remaining tasks are:
> 1. Add real top-band model answers to all 147 IC and 147 AR written questions in written-banks.json
> 2. Regenerate all 14 test files using generate-tests.js
> 3. Verify zero duplicates
> 4. TypeScript check, commit and push
> Use a generator script approach — write the model answers as a node script and run it."

---

## KEY FILES

```
src/lib/tests/jmss-master-bank.ts     ← 560 Y9-10 MCQs ✓ DONE
written-banks.json                     ← 147 IC + 147 AR prompts, NO model answers yet
generate-tests.js                      ← Regenerates all 14 test files (ready to run)
src/lib/tests/short-tests/             ← 7 short test files (need regenerating)
src/lib/tests/full-tests/              ← 7 full test files (need regenerating)
src/components/jmss/student/test-runner.tsx  ← UI already shows "Top-band model answer" ✓
```

## CURRENT GIT STATE
- Branch: main
- Last commit: `0589311` — "WIP: 560 Y9-10 MCQs complete, model answers pending"
- Everything pushed to GitHub
