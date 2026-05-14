const fs = require('fs');
const path = require('path');

const bank = JSON.parse(
  fs.readFileSync('./src/lib/tests/jmss-master-bank.ts','utf8')
    .replace('export const mcqBank1400 = ','').replace(/;\s*$/,'')
);

// ── WRITTEN QUESTION BANKS ───────────────────────────────────────────────────
// 21 unique Interest/Communication prompts (Section B)
const INTEREST_PROMPTS = [
  { id:'IC-01', prompt:'Explain why renewable energy is essential for future generations. Use scientific reasoning and examples.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'Renewable energy provides a sustainable alternative to fossil fuels, which are finite and release greenhouse gases. Solar, wind and hydroelectric power generate electricity with far fewer emissions, reducing climate change. Investment in renewables drives innovation and creates jobs, ensuring future generations inherit a cleaner planet.' },
  { id:'IC-02', prompt:'Write for a general audience explaining how biodiversity supports human life.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'Biodiversity underpins human survival through pollination, clean water, soil fertility and natural pest control. Over 75% of food crops rely on wild pollinators. Greater biodiversity improves ecosystem resilience, meaning natural systems recover more effectively from drought or disease.' },
  { id:'IC-03', prompt:'Discuss whether genetic engineering of crops should be a scientific priority.', rubric:['Scientific accuracy','Balanced argument','Use of evidence','Quality of expression'], modelAnswer:'Genetic engineering offers solutions to food insecurity and climate adaptation via CRISPR-enabled drought tolerance. However, ecological risks including gene flow to wild species and reduced genetic diversity must be weighed carefully through rigorous safety testing and transparent regulation.' },
  { id:'IC-04', prompt:'Describe how a student scientist could explain the importance of vaccination to a sceptical audience.', rubric:['Scientific accuracy','Communication strategy','Use of evidence','Quality of expression'], modelAnswer:'Vaccines introduce harmless antigens that train the immune system before serious illness develops. Historical evidence is compelling: smallpox was eradicated entirely through vaccination. Herd immunity frames vaccination as a community responsibility, protecting those who cannot be vaccinated.' },
  { id:'IC-05', prompt:"Evaluate the statement: 'Space exploration benefits life on Earth more than it costs.'", rubric:['Scientific accuracy','Balanced argument','Use of evidence','Quality of expression'], modelAnswer:'Space exploration has produced GPS, weather forecasting and materials science advances. The financial cost is significant but the return in knowledge and technology is difficult to overstate. Long-term scientific dividends suggest the investment is justified when evaluated across decades.' },
  { id:'IC-06', prompt:'Explain how the human immune system responds to a bacterial infection.', rubric:['Scientific accuracy','Clarity and structure','Use of terminology','Quality of expression'], modelAnswer:'The innate immune response acts immediately: phagocytes engulf bacteria while inflammation recruits more immune cells. The adaptive response then activates: B lymphocytes produce specific antibodies and T lymphocytes coordinate the response. Memory cells allow faster response on re-exposure.' },
  { id:'IC-07', prompt:'Write for a general audience about why reducing plastic waste is a scientific and social priority.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'Plastics persist for hundreds of years, breaking into microplastics that enter food chains and contaminate water. Marine ecosystems are severely affected. Solutions require both individual behaviour change and systemic approaches including biodegradable alternatives and extended producer responsibility.' },
  { id:'IC-08', prompt:'Explain the scientific basis of climate change and why the evidence is considered reliable.', rubric:['Scientific accuracy','Clarity and structure','Use of evidence','Quality of expression'], modelAnswer:'Greenhouse gases trap infrared radiation, raising global temperatures. Evidence comes from ice cores, satellite data, ocean temperature records and atmospheric CO2 measurements. The convergence of multiple independent data sources makes the scientific consensus on human-caused climate change extremely robust.' },
  { id:'IC-09', prompt:'Describe what makes a good scientific experiment and why controls are important.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'A good experiment tests one variable at a time, uses controls to isolate the effect of the independent variable, and repeats trials to improve reliability. Controls ensure any observed change is caused by the independent variable rather than confounding factors.' },
  { id:'IC-10', prompt:'Explain how antibiotic resistance develops and what can be done to slow it.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'Antibiotic resistance develops through natural selection: bacteria with resistance mutations survive treatment and reproduce. Overuse and incomplete courses accelerate this. Slowing resistance requires completing prescribed courses, reducing agricultural antibiotic use, and investing in new antibiotic development.' },
  { id:'IC-11', prompt:'Write about the role of stem cells in medicine and the ethical considerations involved.', rubric:['Scientific accuracy','Balanced argument','Use of evidence','Quality of expression'], modelAnswer:'Stem cells can differentiate into specialised cells, offering treatments for conditions like Parkinson\'s and diabetes. Embryonic stem cells raise ethical concerns about embryo destruction. Adult and induced pluripotent stem cells offer alternatives, though with different limitations in potency and availability.' },
  { id:'IC-12', prompt:'Explain how DNA fingerprinting works and give two applications.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'DNA fingerprinting analyses variable number tandem repeats (VNTRs) unique to each individual. Gel electrophoresis separates DNA fragments by size, creating a unique banding pattern. Applications include forensic crime scene analysis and paternity testing.' },
  { id:'IC-13', prompt:'Describe the water cycle and explain how human activity is affecting it.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'The water cycle involves evaporation, condensation, precipitation and transpiration. Human activities including deforestation, urbanisation and climate change are altering precipitation patterns, increasing flood and drought frequency, and reducing groundwater recharge rates.' },
  { id:'IC-14', prompt:'Explain why scientists use models and what their limitations are.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'Models simplify complex systems to make predictions and test hypotheses. Climate models, atomic models and food web diagrams are examples. Limitations include oversimplification, reliance on assumptions, and inability to capture all variables — meaning models must be continually refined as new data emerges.' },
  { id:'IC-15', prompt:'Write about the importance of biodiversity in maintaining ecosystem stability.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'Biodiversity increases ecosystem resilience by providing functional redundancy — if one species is lost, others can fulfil similar roles. Diverse ecosystems are more resistant to disease, climate fluctuation and invasive species. Loss of biodiversity reduces this resilience and can trigger cascade extinctions.' },
  { id:'IC-16', prompt:'Explain the difference between a hypothesis, a theory and a scientific law.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'A hypothesis is a testable prediction. A theory is a well-tested explanation supported by substantial evidence, such as the theory of evolution. A scientific law describes what happens under certain conditions, such as the law of conservation of mass, without necessarily explaining why.' },
  { id:'IC-17', prompt:'Describe how the nervous system and endocrine system work together to maintain homeostasis.', rubric:['Scientific accuracy','Clarity and structure','Use of terminology','Quality of expression'], modelAnswer:'The nervous system provides rapid electrical responses via neurons, while the endocrine system uses hormones for slower, longer-lasting regulation. Together they maintain homeostasis: for example, blood glucose is regulated by insulin and glucagon from the pancreas, triggered by nervous and hormonal signals.' },
  { id:'IC-18', prompt:'Explain how natural selection leads to evolution over time.', rubric:['Scientific accuracy','Clarity and structure','Use of examples','Quality of expression'], modelAnswer:'Natural selection acts on heritable variation within populations. Individuals with traits better suited to their environment survive and reproduce more successfully, passing advantageous alleles to offspring. Over generations, allele frequencies shift, leading to adaptation and eventually speciation.' },
  { id:'IC-19', prompt:'Write about the scientific and ethical considerations of gene editing in humans.', rubric:['Scientific accuracy','Balanced argument','Use of evidence','Quality of expression'], modelAnswer:'CRISPR-Cas9 enables precise gene editing with potential to eliminate hereditary diseases. Somatic gene therapy affects only the individual; germline editing affects all descendants, raising profound ethical questions about consent, equity of access, and the risk of unintended off-target effects.' },
  { id:'IC-20', prompt:'Explain how photosynthesis and respiration are complementary processes.', rubric:['Scientific accuracy','Clarity and structure','Use of terminology','Quality of expression'], modelAnswer:'Photosynthesis converts CO2 and water into glucose and oxygen using light energy. Respiration converts glucose and oxygen back into CO2, water and ATP energy. The products of each process are the reactants of the other, creating a complementary cycle that underpins energy flow in ecosystems.' },
  { id:'IC-21', prompt:'Describe the evidence that supports the theory of plate tectonics.', rubric:['Scientific accuracy','Clarity and structure','Use of evidence','Quality of expression'], modelAnswer:'Evidence includes matching coastlines of continents, identical fossil species on separated landmasses, mid-ocean ridges with symmetric magnetic striping, and the distribution of earthquakes and volcanoes along plate boundaries. Seafloor spreading measurements directly confirm plate movement.' },
];

// 21 unique Analysis/Reporting tasks (Section C)
const REPORTING_TASKS = [
  { id:'AR-01', task:'Enzyme activity increases with temperature until an optimum, then falls sharply. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of temperature on enzyme activity. Observation: Activity increased to an optimum then fell sharply. Explanation: Rising temperature increases collision frequency; above optimum the active site denatures permanently. Conclusion: Enzyme activity peaks at optimum temperature and falls due to denaturation.' },
  { id:'AR-02', task:'Plant growth increases with light intensity before reaching a plateau. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of light intensity on plant growth. Observation: Growth increased then plateaued. Explanation: At low intensity light limits photosynthesis; at the plateau another factor such as CO2 becomes limiting. Conclusion: Light promotes growth only until another factor becomes limiting.' },
  { id:'AR-03', task:'Reaction rate increases as reactant concentration increases. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of concentration on reaction rate. Observation: Rate increased consistently with concentration. Explanation: Higher concentration increases collision frequency and probability of successful collisions. Conclusion: Concentration has a direct positive effect on reaction rate, consistent with collision theory.' },
  { id:'AR-04', task:'Dissolved oxygen in water decreases as water temperature rises. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate relationship between water temperature and dissolved oxygen. Observation: Dissolved oxygen decreased as temperature increased. Explanation: Higher temperature gives gas molecules energy to escape solution. Conclusion: Temperature and dissolved oxygen are inversely related, with ecological implications for aquatic life.' },
  { id:'AR-05', task:'A bulb becomes dimmer as more bulbs are added in series. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of series bulbs on brightness. Observation: Each bulb became progressively dimmer. Explanation: Series circuits share current; more bulbs increase resistance, reducing current by Ohm\'s law. Conclusion: Adding series bulbs reduces brightness as resistance increases and current decreases.' },
  { id:'AR-06', task:'Sound intensity decreases as distance from the source increases. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate how sound intensity changes with distance. Observation: Intensity decreased with distance, less steeply at greater distances. Explanation: Sound energy spreads over increasing area following inverse square law. Conclusion: Sound intensity decreases with distance as energy spreads over larger area.' },
  { id:'AR-07', task:'Seed germination rate is highest at moderate temperature and lower at extremes. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of temperature on germination rate. Observation: Highest rate at moderate temperature, lower at extremes. Explanation: Germination requires enzyme-controlled reactions; extremes reduce activity or cause denaturation. Conclusion: Germination is temperature-dependent with a clear optimum.' },
  { id:'AR-08', task:'A student measures the pH of solutions A, B and C and finds values of 3, 7 and 11. Interpret these results and explain what they indicate about each solution.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Solution A (pH 3) is acidic, containing excess H+ ions. Solution B (pH 7) is neutral, with equal H+ and OH- concentrations. Solution C (pH 11) is alkaline, containing excess OH- ions. The pH scale is logarithmic, so each unit represents a tenfold change in H+ concentration.' },
  { id:'AR-09', task:'A graph shows population of predators and prey oscillating over time, with predator peaks following prey peaks. Analyse this data and explain the relationship.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'The data shows classic predator-prey oscillation. When prey is abundant, predator population grows. Increased predation reduces prey numbers, which then causes predator decline due to food shortage. Reduced predation allows prey recovery, restarting the cycle. This demonstrates interdependence in ecosystems.' },
  { id:'AR-10', task:'An experiment shows that adding fertiliser increases crop yield up to a point, after which yield declines. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of fertiliser concentration on crop yield. Observation: Yield increased to a maximum then declined at high concentrations. Explanation: Moderate fertiliser supplies limiting nutrients; excess causes osmotic stress, drawing water out of roots. Conclusion: Optimal fertiliser concentration exists beyond which yield is reduced.' },
  { id:'AR-11', task:'Data shows that countries with higher vaccination rates have lower rates of the target disease. Analyse this data and discuss what conclusions can be drawn.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'The negative correlation between vaccination rate and disease incidence supports vaccine effectiveness. High vaccination rates create herd immunity, protecting unvaccinated individuals. However, correlation does not prove causation; confounding factors such as healthcare quality must be considered. The pattern is consistent across multiple independent datasets.' },
  { id:'AR-12', task:'A student investigates how the mass of a pendulum affects its period. Results show no significant change in period with mass. Analyse and explain.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of pendulum mass on period. Observation: Period remained constant regardless of mass. Explanation: Pendulum period depends on length and gravitational acceleration (T=2π√(L/g)), not mass. Conclusion: Mass does not affect pendulum period, consistent with theoretical prediction.' },
  { id:'AR-13', task:'Experimental data shows that increasing salt concentration in soil reduces plant growth. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of soil salt concentration on plant growth. Observation: Growth decreased as salt concentration increased. Explanation: High salt concentration lowers soil water potential below that of root cells, reversing osmosis and causing water loss from roots. Conclusion: Excess soil salinity inhibits plant growth through osmotic stress.' },
  { id:'AR-14', task:'A cooling curve shows a substance cooling from liquid to solid with a flat section at 45°C. Interpret this graph and explain the flat section.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'The flat section at 45°C represents the freezing point of the substance. During this phase change, the substance releases latent heat of fusion at a constant temperature as liquid converts to solid. Temperature only continues to fall once all liquid has solidified.' },
  { id:'AR-15', task:'Data shows that areas with higher deforestation rates have higher atmospheric CO2 levels. Analyse this relationship and discuss implications.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Deforestation increases atmospheric CO2 by removing trees that absorb CO2 through photosynthesis and by releasing stored carbon when trees decompose or burn. The positive correlation in the data is consistent with this mechanism. Implications include accelerated climate change and reduced biodiversity in deforested regions.' },
  { id:'AR-16', task:'An investigation shows that white light passing through a prism produces a spectrum. Analyse this observation and explain the physics involved.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'White light is composed of all visible wavelengths. When entering the prism, each wavelength refracts by a different amount due to its different speed in glass (dispersion). Violet light refracts most, red least, separating the colours into a continuous spectrum from red to violet.' },
  { id:'AR-17', task:'Results show that a metal rod expands measurably when heated. Write a scientific report: Aim, Observation, Explanation, Conclusion.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate thermal expansion of a metal rod. Observation: Rod length increased measurably with temperature. Explanation: Heating increases kinetic energy of metal atoms, causing them to vibrate more and occupy more space. Conclusion: Metals expand when heated due to increased atomic vibration, consistent with thermal expansion theory.' },
  { id:'AR-18', task:'A student tests five unknown substances with litmus and universal indicator. Interpret the results to classify each substance.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Litmus turns red in acid and blue in alkali; universal indicator gives a colour corresponding to pH. Substances turning litmus red and universal indicator orange/red are acidic. Blue litmus and green/blue universal indicator indicates neutral to alkaline. Combining both results allows classification as strongly acidic, weakly acidic, neutral, weakly alkaline or strongly alkaline.' },
  { id:'AR-19', task:'Data from a survey shows a positive correlation between screen time and reported sleep problems in teenagers. Analyse this data critically.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'The positive correlation suggests increased screen time is associated with more sleep problems. Possible mechanisms include blue light suppressing melatonin production and mental stimulation delaying sleep onset. However, correlation does not establish causation; reverse causation (poor sleepers use screens more) and confounding variables must be considered.' },
  { id:'AR-20', task:'An experiment measures the rate of photosynthesis at different CO2 concentrations. Results show rate increases then plateaus. Analyse and explain.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of CO2 concentration on photosynthesis rate. Observation: Rate increased with CO2 then plateaued. Explanation: At low CO2, carbon dioxide is the limiting factor for the Calvin cycle. At the plateau, another factor such as light intensity or temperature becomes limiting. Conclusion: CO2 promotes photosynthesis only until another factor limits the rate.' },
  { id:'AR-21', task:'A student drops objects of different masses from the same height and measures fall time. Results show all objects fall in approximately the same time. Analyse and explain.', rubric:['Interpretation of evidence','Scientific reasoning','Structure','Scientific terminology'], modelAnswer:'Aim: Investigate effect of mass on free-fall time. Observation: All objects fell in approximately equal time regardless of mass. Explanation: In free fall, gravitational acceleration g acts equally on all masses (9.8 m/s²). Air resistance differences for similar-shaped objects are negligible. Conclusion: Mass does not affect free-fall time, consistent with Galileo\'s principle.' },
];

// ── MCQ DISTRIBUTION PLAN ────────────────────────────────────────────────────
// 21 topics, group into 7 domain clusters for rotation across tests
// Short test: 20 MCQs from 3 topics (rotating), 2 IC + 1 AR written = 23 questions
// Full test:  60 MCQs from all topics proportionally, 10 IC + 10 AR = 80 questions

const topicGroups = [
  ['Cell Biology','Human Body','Microbiology and Disease'],           // cluster 0 - Bio Life
  ['Genetics','Evolution and Classification','Plants and Photosynthesis'], // cluster 1 - Bio Genetics/Evo
  ['Atomic Structure','Reactions and Energy','Organic Chemistry'],    // cluster 2 - Chem Core
  ['Materials and Properties','Electrochemistry and Solutions','Thermodynamics and Heat'], // cluster 3 - Chem Applied
  ['Forces and Motion','Energy and Waves','Optics and Light'],        // cluster 4 - Physics Core
  ['Electricity and Magnetism','Space and Astronomy','Thermodynamics and Heat'], // cluster 5 - Physics Applied
  ['Ecology and Environment','Geology and Climate','Scientific Method','Science and Technology'], // cluster 6 - Earth/Method
];

// Index MCQs by topic
const byTopic = {};
bank.forEach(q => {
  if (!byTopic[q.topic]) byTopic[q.topic] = [];
  byTopic[q.topic].push(q);
});

// Track used MCQ ids globally to prevent cross-test repeats
const usedIds = new Set();

function pickMCQs(topics, count) {
  const pool = [];
  topics.forEach(t => { if (byTopic[t]) pool.push(...byTopic[t]); });
  const available = pool.filter(q => !usedIds.has(q.id));
  const perTopic = Math.ceil(count / topics.length);
  const picked = [];
  // Round-robin across topics for good mix
  let ti = 0;
  const topicQueues = topics.map(t => (byTopic[t]||[]).filter(q => !usedIds.has(q.id)));
  while (picked.length < count) {
    const queue = topicQueues[ti % topicQueues.length];
    if (queue.length > 0) {
      const q = queue.shift();
      if (!usedIds.has(q.id)) { picked.push(q); usedIds.add(q.id); }
    }
    ti++;
    if (topicQueues.every(q => q.length === 0)) break;
  }
  return picked;
}

function toMCQ(item) {
  return {
    id: item.id, section: 'Science Reasoning', topic: item.topic,
    difficulty: item.difficulty, type: 'mcq',
    prompt: item.question, options: item.options,
    correctIndex: item.answerIndex, explanation: item.explanation,
  };
}
function toIC(item, suffix) {
  return {
    id: `${item.id}-${suffix}`, section: 'Science Interest & Communication',
    topic: 'Science Communication', difficulty: 'Medium', type: 'written',
    prompt: item.prompt, rubric: item.rubric, modelAnswer: item.modelAnswer,
  };
}
function toAR(item, suffix) {
  return {
    id: `${item.id}-${suffix}`, section: 'Science Analysis & Reporting',
    topic: 'Scientific Analysis', difficulty: 'Medium', type: 'written',
    prompt: item.task, rubric: item.rubric, modelAnswer: item.modelAnswer,
  };
}

// ── GENERATE SHORT TESTS ─────────────────────────────────────────────────────
// Each short test: 20 MCQs (rotating topic cluster) + 2 IC + 1 AR = 23 questions
// IC and AR prompts are unique per test (3 IC prompts per test, 3 AR prompts per test, 7 tests = 21 each - perfect)

const shortTestTopicClusters = [0,1,2,3,4,5,6]; // one cluster per test

for (let i = 0; i < 7; i++) {
  const testNum = i + 1;
  const cluster = topicGroups[shortTestTopicClusters[i]];
  const mcqs = pickMCQs(cluster, 20).map(toMCQ);
  
  // 2 IC prompts unique to this test (indices i*3 and i*3+1, but we only have 21 so use i*2 and i*2+1 mod 21)
  const ic1 = toIC(INTEREST_PROMPTS[i * 3 % 21], `S${testNum}`);
  const ic2 = toIC(INTEREST_PROMPTS[(i * 3 + 1) % 21], `S${testNum}`);
  // 1 AR prompt unique to this test
  const ar1 = toAR(REPORTING_TASKS[i * 3 % 21], `S${testNum}`);

  const test = {
    id: `short-${testNum}`,
    title: `Short Test ${testNum}`,
    subtitle: `45-minute practice — ${cluster.slice(0,2).join(', ')} + written`,
    kind: 'short',
    released: true,
    durationSec: 45 * 60,
    questions: [...mcqs, ic1, ic2, ar1],
  };

  const content = `import type { PracticeTest } from "@/types/test";\n\nexport const shortTest${testNum}: PracticeTest = ${JSON.stringify(test, null, 2)};\n`;
  fs.writeFileSync(`./src/lib/tests/short-tests/short-test-${testNum}.ts`, content);
  console.log(`✓ short-test-${testNum}.ts — ${mcqs.length} MCQs + 2 IC + 1 AR = ${test.questions.length} questions`);
}

// ── GENERATE FULL TESTS ──────────────────────────────────────────────────────
// JMSS format: 60 MCQs (Section A) + 10 IC (Section B) + 10 AR (Section C) = 80 questions, 150 min
// MCQs drawn from ALL topic clusters proportionally (3 per topic, 20 topics = 60)

const allTopics = Object.keys(byTopic);

for (let i = 0; i < 7; i++) {
  const testNum = i + 1;
  // 60 MCQs: 3 from each of 20 topics (round-robin across all topics)
  const mcqs = pickMCQs(allTopics, 60).map(toMCQ);
  
  // 10 IC prompts: pick 10 unique ones cycling through bank
  const icQuestions = Array.from({length: 10}, (_, j) => 
    toIC(INTEREST_PROMPTS[(i * 10 + j) % 21], `F${testNum}`)
  );
  // 10 AR prompts: pick 10 unique ones cycling through bank
  const arQuestions = Array.from({length: 10}, (_, j) =>
    toAR(REPORTING_TASKS[(i * 10 + j) % 21], `F${testNum}`)
  );

  const test = {
    id: `full-${testNum}`,
    title: `Full Test ${testNum}`,
    subtitle: `Full JMSS format — 60 MCQ (Section A) + 10 written (Section B) + 10 written (Section C)`,
    kind: 'full',
    released: true,
    durationSec: 150 * 60,
    questions: [...mcqs, ...icQuestions, ...arQuestions],
  };

  const content = `import type { PracticeTest } from "@/types/test";\n\nexport const fullTest${testNum}: PracticeTest = ${JSON.stringify(test, null, 2)};\n`;
  fs.writeFileSync(`./src/lib/tests/full-tests/full-test-${testNum}.ts`, content);
  console.log(`✓ full-test-${testNum}.ts — ${mcqs.length} MCQs + 10 IC + 10 AR = ${test.questions.length} questions`);
}

// ── VERIFY NO CROSS-TEST MCQ REPEATS ────────────────────────────────────────
console.log(`\nTotal unique MCQs used: ${usedIds.size}`);
console.log('All done.');
