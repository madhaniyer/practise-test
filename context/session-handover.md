# Session Context — JMSS Practice Suite
## Saved: Current working session before home handover

---

## WHAT WAS ACCOMPLISHED THIS SESSION

### 1. Short/Full test structure
- 7 short tests (45 min): 20 MCQ + 2 IC + 1 AR = 23 questions each
- 7 full tests (150 min): 60 MCQ + 10 IC + 10 AR = 80 questions each (true JMSS format)
- All 14 tests released to students
- Per-test files: `src/lib/tests/short-tests/short-test-1.ts` through `short-test-7.ts`
- Per-test files: `src/lib/tests/full-tests/full-test-1.ts` through `full-test-7.ts`
- `curated-test-packs.ts` is now a clean index importing all 14 files

### 2. Written question banks — FIXED, zero duplicates
- 147 unique IC (Science Interest & Communication) prompts
- 147 unique AR (Science Analysis & Reporting) tasks
- Saved in: `written-banks.json`
- Generator: `generate-written-bank.js`
- Verified: IC 0 dups, AR 0 dups across all 14 tests

### 3. MCQ bank — PARTIALLY REPLACED (Y9-10 level)
- Old bank had ~1124 questions but many were Year 6-7 recall level, mislabelled difficulty
- New Y9-10 level questions written and saved as JSON files:
  - `bio-bank.json` — 75 Biology questions (Cell Biology, Genetics, Human Body, Ecology)
  - `chem-bank.json` — 50 Chemistry questions (Atomic Structure, Bonding, Reactions, Electrochemistry, Organic)
  - `phys-bank.json` — 40 Physics questions (Forces, Energy/Waves, Electricity, Nuclear/Space)
  - `earth-bank.json` — 31 Earth Science questions (Earth/Climate, Scientific Method, Interdisciplinary)
  - **Total so far: 196 questions**
- These have NOT yet been merged into `jmss-master-bank.ts` as the final replacement
- Need: 560+ questions minimum (7 short × 20 + 7 full × 60 = 560 MCQs needed)

### 4. Model answers — BROKEN, needs fix
- All written questions currently have `"modelAnswer": "See marking guide."` — a placeholder
- The test runner DOES already display "Top-band model answer" correctly in the UI (code is there)
- The fix is to put real top-band model answers into `written-banks.json` and regenerate test files
- Generator to use: the inline node script in `generate-tests.js` (or rewrite it)

---

## WHAT STILL NEEDS TO BE DONE (in order)

### STEP 1 — Expand MCQ bank to 560+ Y9-10 questions
Need ~364 more questions. Suggested approach:
- Write `gen-bio2.js` — 75 more Biology (Evolution, Plants, Microbiology, Scientific Method)
- Write `gen-chem2.js` — 75 more Chemistry (more Reactions, Materials, Quantitative)
- Write `gen-phys2.js` — 75 more Physics (more Forces, Thermodynamics, Optics)
- Write `gen-earth2.js` — 75 more Earth Science (Ecology, Geology, Space)
- Combine all 8 JSON files into new `jmss-master-bank.ts`
- All questions must be Y9-10 JMSS entrance exam level — application and reasoning, NOT simple recall
- Difficulty: Medium = solid Year 9 application; Hard = Year 9-10 multi-step reasoning

### STEP 2 — Add real top-band model answers to written-banks.json
- Open `generate-written-bank.js`
- For EACH of the 147 IC prompts, add a `modelAnswer` field with a genuine top-band response (~150 words, scientifically precise, well-structured)
- For EACH of the 147 AR tasks, add a `modelAnswer` field with a proper Aim/Observation/Explanation/Conclusion structure
- The model answer is the yardstick shown to the student after they check their answer
- It is also sent to the AI coach for comparison

### STEP 3 — Regenerate all 14 test files
Run the inline node script (similar to what's in `generate-tests.js`) to:
- Use new `jmss-master-bank.ts` for MCQs
- Use updated `written-banks.json` (with real model answers) for written questions
- Verify zero duplicates across all question types

### STEP 4 — Verify and commit
- Run duplicate check script (already written — see below)
- Run `npx tsc --noEmit` to check TypeScript
- `git add -A && git commit -m "..." && git push`

---

## KEY FILE LOCATIONS

```
src/lib/tests/jmss-master-bank.ts        ← MCQ bank (currently old 1124 questions — needs replacing)
src/lib/tests/curated-test-packs.ts      ← Index file importing all 14 tests
src/lib/tests/short-tests/short-test-1..7.ts
src/lib/tests/full-tests/full-test-1..7.ts
src/components/jmss/student/test-runner.tsx  ← UI (model answer display already works)
written-banks.json                        ← 147 IC + 147 AR prompts (model answers = placeholder)
bio-bank.json                             ← 75 Y9-10 Bio MCQs
chem-bank.json                            ← 50 Y9-10 Chem MCQs
phys-bank.json                            ← 40 Y9-10 Physics MCQs
earth-bank.json                           ← 31 Y9-10 Earth Science MCQs
generate-written-bank.js                  ← Written bank generator
generate-tests.js                         ← Test file generator
gen-bio.js, gen-chem.js, gen-phys.js, gen-earth.js  ← MCQ generators (run already)
```

---

## DUPLICATE CHECK SCRIPT (ready to run)
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
const icDups = allIC.filter((p,i)=>allIC.indexOf(p)!==i).length;
const arDups = allAR.filter((p,i)=>allAR.indexOf(p)!==i).length;
const mcqDups = allMCQ.filter((p,i)=>allMCQ.indexOf(p)!==i).length;
console.log('IC dups:',icDups,'AR dups:',arDups,'MCQ dups:',mcqDups);
"
```

---

## RESUME PROMPT (paste this when you get home)

> "Pick up from the saved context in context/session-handover.md. We need to:
> 1. Expand the Y9-10 MCQ bank from 196 to 560+ questions (gen-bio2, gen-chem2, gen-phys2, gen-earth2)
> 2. Add real top-band model answers to all 147 IC and 147 AR written questions in written-banks.json
> 3. Regenerate all 14 test files using the new bank and real model answers
> 4. Verify zero duplicates, TypeScript check, commit and push"

---

## CURRENT GIT STATE
- Branch: main
- Last commit: b173b73 — "Fix: zero duplicate written questions across all 14 tests (147 unique IC + 147 AR)"
- All changes above are uncommitted local files (bio-bank.json, chem-bank.json, phys-bank.json, earth-bank.json, gen-*.js)
