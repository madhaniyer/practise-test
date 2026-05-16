import type { PracticeTest } from "@/types/test";

export const fullTest6: PracticeTest = {
  "id": "full-6",
  "title": "Full Test 6",
  "subtitle": "Full JMSS format — 60 MCQ (Section A) + 10 written (Section B) + 10 written (Section C)",
  "kind": "full",
  "released": true,
  "durationSec": 9000,
  "questions": [
    {
      "id": "MCQ-LAST-Y910-002",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the rate of active transport and diffusion when a cell is treated with a metabolic poison that blocks ATP production. Which process is most affected?",
      "options": [
        "Diffusion",
        "Active transport",
        "Osmosis",
        "Facilitated diffusion"
      ],
      "correctIndex": 1,
      "explanation": "Active transport requires ATP to move substances against their concentration gradient. Blocking ATP production stops active transport. Diffusion, osmosis and facilitated diffusion are passive processes that do not require ATP."
    },
    {
      "id": "MCQ-LAST-Y910-011",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the inheritance of eye colour. Brown (B) is dominant over blue (b). Two brown-eyed parents have a blue-eyed child. What is the probability their next child will have brown eyes?",
      "options": [
        "25%",
        "50%",
        "75%",
        "100%"
      ],
      "correctIndex": 2,
      "explanation": "Both parents must be Bb (carriers of blue). Bb × Bb gives 1BB:2Bb:1bb. Probability of brown eyes (BB or Bb) = 3/4 = 75%."
    },
    {
      "id": "MCQ-FINAL-Y910-007",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the oxygen dissociation curves of fetal and adult haemoglobin. Fetal haemoglobin has a higher affinity for oxygen at all partial pressures. Which of the following correctly explains the significance of this?",
      "options": [
        "Fetal haemoglobin carries less oxygen",
        "Fetal haemoglobin can load oxygen from maternal blood across the placenta, where pO2 is relatively low, ensuring adequate oxygen supply to the fetus",
        "Fetal haemoglobin releases oxygen more readily",
        "Adult haemoglobin has higher affinity than fetal"
      ],
      "correctIndex": 1,
      "explanation": "Fetal haemoglobin (HbF) has higher O2 affinity than adult haemoglobin (HbA). At the placenta, where pO2 is intermediate, HbF loads O2 that HbA releases. This ensures efficient O2 transfer from mother to fetus."
    },
    {
      "id": "MCQ-FINAL-Y910-026",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the Doppler effect using a sound source moving toward a stationary observer. The observed frequency is higher than the emitted frequency. Which of the following correctly explains this?",
      "options": [
        "The source emits more sound waves when moving",
        "As the source moves toward the observer, successive wave fronts are compressed — the wavelength decreases and observed frequency increases",
        "The observer moves toward the source",
        "The speed of sound increases"
      ],
      "correctIndex": 1,
      "explanation": "The Doppler effect: as a source moves toward an observer, each successive wave is emitted from a position closer to the observer, compressing the wave fronts. Shorter wavelength means higher frequency (f = v/λ). The observer hears a higher pitch."
    },
    {
      "id": "MCQ-DONE-Y910-017",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the speed of light in glass using a semicircular block. The refractive index is 1.5. What is the speed of light in the glass? (c = 3 × 10⁸ m/s)",
      "options": [
        "4.5 × 10⁸ m/s",
        "2 × 10⁸ m/s",
        "1.5 × 10⁸ m/s",
        "3 × 10⁸ m/s"
      ],
      "correctIndex": 1,
      "explanation": "n = c/v → v = c/n = 3×10⁸/1.5 = 2×10⁸ m/s. The refractive index is the ratio of the speed of light in vacuum to the speed in the medium."
    },
    {
      "id": "MCQ-FIN-Y910-012",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the elastic potential energy stored in a spring. Using E = ½kx², if k = 200 N/m and x = 0.1 m, what is the elastic PE?",
      "options": [
        "1 J",
        "2 J",
        "10 J",
        "0.1 J"
      ],
      "correctIndex": 0,
      "explanation": "E = ½kx² = ½ × 200 × (0.1)² = ½ × 200 × 0.01 = 1 J."
    },
    {
      "id": "MCQ-DONE-Y910-020",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses data showing that Arctic sea ice extent has declined by 13% per decade since 1979. Which of the following correctly identifies this as a positive or negative feedback?",
      "options": [
        "Negative feedback — less ice stabilises temperature",
        "Positive feedback — less ice reduces albedo, increasing heat absorption, causing further warming and more ice loss",
        "Neutral — ice loss has no effect on temperature",
        "Negative feedback — more water absorbs more CO2"
      ],
      "correctIndex": 1,
      "explanation": "The ice-albedo feedback is a positive feedback: warming → ice melts → darker ocean exposed → lower albedo → more solar energy absorbed → further warming → more ice melts. Positive feedbacks amplify the initial change, accelerating Arctic warming."
    },
    {
      "id": "MCQ-LAST2-Y910-020",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing atmospheric aerosols (from volcanic eruptions) on global temperature. Temperature decreases after major eruptions. Which of the following correctly explains this?",
      "options": [
        "Aerosols absorb infrared radiation",
        "Volcanic aerosols (sulfate particles) reflect incoming solar radiation back to space, reducing the amount reaching Earth's surface and causing temporary cooling",
        "Aerosols increase greenhouse effect",
        "Volcanic eruptions release CO2 only"
      ],
      "correctIndex": 1,
      "explanation": "Volcanic aerosols (mainly sulfate particles from SO2 oxidation) scatter and reflect incoming solar radiation, reducing solar irradiance at Earth's surface. This causes temporary global cooling — the 'volcanic winter' effect. The 1991 Pinatubo eruption cooled global temperatures by ~0.5°C for 1-2 years."
    },
    {
      "id": "MCQ-X-Y910-027",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student designs an experiment to test whether a new insecticide reduces crop damage. They apply the insecticide to 10 plots and leave 10 plots untreated. After 8 weeks they measure crop yield. Which of the following correctly identifies a potential confounding variable?",
      "options": [
        "The number of plots used",
        "Variation in soil quality between plots — if treated plots happen to have better soil, higher yield may be due to soil quality rather than the insecticide",
        "The type of crop grown",
        "The weather during the experiment"
      ],
      "correctIndex": 1,
      "explanation": "A confounding variable is one that varies alongside the independent variable and could explain the results. If treated and untreated plots differ in soil quality, any yield difference could be due to soil rather than the insecticide. Randomisation of plot assignment helps control for this."
    },
    {
      "id": "MCQ-TOPUP-Y910-042",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses data from a long-term study showing that average egg-laying dates for a migratory bird have advanced by 10 days over 40 years, correlating with earlier spring temperatures. Which of the following correctly interprets this finding?",
      "options": [
        "Birds are laying eggs randomly",
        "Climate change is causing earlier springs; birds are responding to temperature cues, laying eggs earlier — a phenological shift that may affect synchrony with peak insect food availability",
        "Birds have evolved to lay fewer eggs",
        "The data shows no trend"
      ],
      "correctIndex": 1,
      "explanation": "Phenological shifts: many species time breeding to coincide with peak food availability (e.g. caterpillar emergence). As springs warm earlier, birds advance egg-laying. If insect emergence advances faster than bird breeding, a mismatch occurs, reducing chick survival — a key climate change impact on biodiversity."
    },
    {
      "id": "MCQ-X-Y910-030",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of exercise intensity on oxygen consumption. They plot a graph and find a linear relationship up to moderate intensity, then a steeper increase at high intensity. Which of the following correctly explains the steeper increase?",
      "options": [
        "Oxygen consumption decreases at high intensity",
        "At high intensity, anaerobic respiration supplements aerobic respiration; the body also needs extra oxygen to repay the oxygen debt and process lactic acid after exercise",
        "The heart stops pumping at high intensity",
        "Oxygen is produced by muscles at high intensity"
      ],
      "correctIndex": 1,
      "explanation": "At high exercise intensity, anaerobic respiration produces lactic acid. During and after exercise, extra oxygen is consumed to: oxidise lactic acid; replenish ATP and creatine phosphate stores; restore oxygen levels in blood and muscle. This excess post-exercise oxygen consumption (EPOC) explains the steeper increase."
    },
    {
      "id": "MCQ-LAST-Y910-003",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "During which stage of the cell cycle is the DNA content of a cell doubled?",
      "options": [
        "G1 phase",
        "S phase",
        "G2 phase",
        "M phase"
      ],
      "correctIndex": 1,
      "explanation": "DNA replication occurs during the S (synthesis) phase of interphase. Each chromosome is copied, doubling the DNA content from 2n to 4n before mitosis begins."
    },
    {
      "id": "MCQ-LAST-Y910-012",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses a DNA sequence and finds a mutation where one base is substituted for another, resulting in a different amino acid. What type of mutation is this?",
      "options": [
        "Silent mutation",
        "Missense mutation",
        "Nonsense mutation",
        "Frameshift mutation"
      ],
      "correctIndex": 1,
      "explanation": "A missense mutation is a base substitution that changes one amino acid to a different amino acid. This may alter protein function depending on the location and chemical properties of the substituted amino acid."
    },
    {
      "id": "MCQ-FINAL-Y910-008",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of caffeine on the heart rate of Daphnia. Heart rate increases with caffeine concentration. Which of the following correctly explains the mechanism?",
      "options": [
        "Caffeine directly stimulates heart muscle",
        "Caffeine inhibits phosphodiesterase, increasing cAMP levels, which enhances sympathetic nervous system effects and increases heart rate",
        "Caffeine reduces blood viscosity",
        "Caffeine stimulates the parasympathetic nervous system"
      ],
      "correctIndex": 1,
      "explanation": "Caffeine inhibits phosphodiesterase (the enzyme that breaks down cAMP). Elevated cAMP amplifies sympathetic signalling, increasing heart rate and force of contraction — the same mechanism that makes caffeine a stimulant."
    },
    {
      "id": "MCQ-FINAL-Y910-027",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the absorption of gamma radiation by lead. The count rate halves for every 10 mm of lead. What thickness of lead reduces the count rate to 1/8 of its original value?",
      "options": [
        "10 mm",
        "20 mm",
        "30 mm",
        "40 mm"
      ],
      "correctIndex": 2,
      "explanation": "(1/2)ⁿ = 1/8 → n = 3 half-value layers. Thickness = 3 × 10 mm = 30 mm."
    },
    {
      "id": "MCQ-DONE-Y910-018",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates resonance in a closed pipe. The fundamental frequency has a quarter wavelength fitting the pipe length (L = λ/4). For a pipe 0.85 m long, what is the fundamental frequency? (speed of sound = 340 m/s)",
      "options": [
        "100 Hz",
        "200 Hz",
        "400 Hz",
        "50 Hz"
      ],
      "correctIndex": 0,
      "explanation": "λ = 4L = 4 × 0.85 = 3.4 m. f = v/λ = 340/3.4 = 100 Hz."
    },
    {
      "id": "MCQ-FIN-Y910-013",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the relationship between the angle of a ramp and the component of gravity along the ramp. For a mass m on a ramp at angle θ, the component along the ramp is mg sinθ. At 30°, what fraction of the weight acts along the ramp?",
      "options": [
        "0.5",
        "0.866",
        "1.0",
        "0.25"
      ],
      "correctIndex": 0,
      "explanation": "Component along ramp = mg sin30° = mg × 0.5. So 0.5 (50%) of the weight acts along the ramp. The component perpendicular to the ramp = mg cos30° = mg × 0.866."
    },
    {
      "id": "MCQ-DONE-Y910-021",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of ocean warming on hurricane intensity. Warmer oceans provide more energy to developing hurricanes. Which of the following correctly explains the mechanism?",
      "options": [
        "Warm water cools hurricanes",
        "Warm ocean water increases evaporation, adding more water vapour to the atmosphere; condensation of this vapour releases latent heat that powers the hurricane",
        "Warm water reduces wind speed",
        "Hurricanes form only over cold water"
      ],
      "correctIndex": 1,
      "explanation": "Hurricanes are heat engines powered by the latent heat released when water vapour condenses. Warmer oceans increase evaporation rates, providing more water vapour. As this vapour rises and condenses, it releases more latent heat, intensifying the hurricane's circulation."
    },
    {
      "id": "MCQ-LAST2-Y910-021",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of ocean stratification on marine productivity. Strongly stratified oceans have lower productivity. Which of the following correctly explains this?",
      "options": [
        "Stratified oceans are warmer",
        "Stratification prevents mixing of nutrient-rich deep water with the sunlit surface layer; phytoplankton in the surface layer deplete nutrients and cannot be replenished, limiting productivity",
        "Stratified oceans have more light",
        "Stratification increases CO2 availability"
      ],
      "correctIndex": 1,
      "explanation": "Ocean productivity depends on nutrient availability in the photic zone. Stratification (warm, less dense surface water over cold, dense deep water) prevents vertical mixing. Phytoplankton deplete surface nutrients; without mixing to replenish them from nutrient-rich deep water, productivity declines."
    },
    {
      "id": "MCQ-X-Y910-028",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of sample size on the reliability of results. They repeat an experiment with 5, 10, 20 and 50 trials. The standard error of the mean decreases as sample size increases. Which of the following correctly explains this?",
      "options": [
        "Larger samples always give higher means",
        "Larger samples better represent the true population; random variation averages out, reducing the standard error and increasing confidence in the mean",
        "Larger samples increase systematic error",
        "Standard error is unrelated to sample size"
      ],
      "correctIndex": 1,
      "explanation": "Standard error of the mean = standard deviation / √n. As sample size (n) increases, standard error decreases. Larger samples reduce the influence of random variation, giving a more reliable estimate of the true population mean and narrower confidence intervals."
    },
    {
      "id": "MCQ-FIN-Y910-017",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of nitrogen deposition on soil pH. High nitrogen deposition decreases soil pH. Which of the following correctly explains the ecological consequence?",
      "options": [
        "Lower pH increases plant diversity",
        "Lower pH mobilises toxic aluminium ions from soil minerals, which damage plant roots and reduce nutrient uptake, decreasing plant diversity and productivity",
        "Lower pH increases nitrogen availability",
        "Lower pH has no effect on soil organisms"
      ],
      "correctIndex": 1,
      "explanation": "Soil acidification from nitrogen deposition mobilises Al³⁺ ions from soil minerals. Al³⁺ is toxic to plant roots, inhibiting nutrient uptake and damaging root cells. This reduces plant diversity (acid-sensitive species decline) and productivity, with cascading effects on dependent organisms."
    },
    {
      "id": "MCQ-LAST-Y910-004",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of cyanide (which blocks mitochondrial function) on a cell. Which process would be most immediately affected?",
      "options": [
        "Diffusion of oxygen",
        "Active transport of glucose",
        "Osmosis of water",
        "Passive diffusion of CO2"
      ],
      "correctIndex": 1,
      "explanation": "Cyanide blocks the electron transport chain in mitochondria, stopping ATP synthesis. Active transport depends entirely on ATP, so it would be most immediately and severely affected."
    },
    {
      "id": "MCQ-LAST-Y910-013",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates sex-linked inheritance. A colour-blind father (X^b Y) and a carrier mother (X^B X^b) have children. What proportion of their daughters will be colour blind?",
      "options": [
        "0%",
        "25%",
        "50%",
        "100%"
      ],
      "correctIndex": 2,
      "explanation": "Daughters receive X from father (X^b) and X from mother (X^B or X^b). Possible daughter genotypes: X^B X^b (carrier) or X^b X^b (colour blind) — 50% of daughters will be colour blind."
    },
    {
      "id": "MCQ-FINAL-Y910-009",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student analyses urine samples from a patient and finds glucose present. Which of the following correctly explains this finding?",
      "options": [
        "Glucose is always present in urine",
        "Blood glucose is so high (hyperglycaemia) that it exceeds the renal threshold, and the kidney cannot reabsorb all filtered glucose",
        "The kidneys are producing glucose",
        "The patient has eaten no carbohydrates"
      ],
      "correctIndex": 1,
      "explanation": "Normally, all filtered glucose is reabsorbed in the proximal convoluted tubule. When blood glucose exceeds the renal threshold (~10 mmol/L), the reabsorption transporters are saturated and excess glucose appears in urine — glycosuria, a sign of uncontrolled diabetes."
    },
    {
      "id": "MCQ-FINAL-Y910-028",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the ionising radiation emitted by three sources using a Geiger counter and different absorbers. Source A is stopped by paper; source B is stopped by 3 mm aluminium; source C requires 10 cm lead to significantly reduce count rate. Which of the following correctly identifies the radiation types?",
      "options": [
        "A = gamma, B = beta, C = alpha",
        "A = alpha, B = beta, C = gamma",
        "A = beta, B = alpha, C = gamma",
        "A = alpha, B = gamma, C = beta"
      ],
      "correctIndex": 1,
      "explanation": "Alpha particles are stopped by paper (or a few cm of air). Beta particles are stopped by a few mm of aluminium. Gamma rays require thick lead or concrete to significantly attenuate. Source A = alpha, B = beta, C = gamma."
    },
    {
      "id": "MCQ-Z-Y910-012",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the reaction between ethanol and acidified potassium dichromate. The orange dichromate turns green. Which of the following correctly explains this observation?",
      "options": [
        "Ethanol is reduced",
        "Ethanol is oxidised to ethanal/ethanoic acid; dichromate (Cr2O7²⁻, orange) is reduced to Cr³⁺ (green) — a redox reaction",
        "Ethanol reacts with water",
        "Dichromate is oxidised"
      ],
      "correctIndex": 1,
      "explanation": "Acidified potassium dichromate is an oxidising agent. It oxidises primary alcohols (ethanol → ethanal → ethanoic acid). The Cr2O7²⁻ ion (orange) is reduced to Cr³⁺ (green). The colour change from orange to green confirms oxidation of the alcohol."
    },
    {
      "id": "MCQ-E19-005",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the motion of a skydiver. Before opening the parachute, terminal velocity is 55 m/s. After opening, terminal velocity is 5 m/s. Which of the following correctly explains the lower terminal velocity with the parachute?",
      "options": [
        "The parachute reduces gravity",
        "The parachute greatly increases drag force, so terminal velocity (where drag = weight) is reached at much lower speed",
        "The parachute reduces the skydiver's mass",
        "The parachute increases gravity"
      ],
      "correctIndex": 1,
      "explanation": "Terminal velocity occurs when drag = weight. The parachute dramatically increases cross-sectional area and drag coefficient, so drag equals weight at a much lower speed."
    },
    {
      "id": "MCQ-DONE-Y910-022",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the carbon stored in permafrost with annual global CO2 emissions. Permafrost stores approximately 1500 Gt of carbon — twice the current atmospheric carbon. Which of the following correctly explains why permafrost thawing is a major climate concern?",
      "options": [
        "Permafrost thawing reduces methane emissions",
        "Thawing permafrost releases stored carbon as CO2 and methane as frozen organic matter decomposes, creating a powerful positive feedback that could significantly accelerate climate change",
        "Permafrost thawing increases albedo",
        "Permafrost stores no significant carbon"
      ],
      "correctIndex": 1,
      "explanation": "Permafrost contains vast amounts of frozen organic matter. As it thaws due to warming, microorganisms decompose this material, releasing CO2 and methane (a potent greenhouse gas). This creates a positive feedback — warming causes thawing, which releases greenhouse gases, causing further warming."
    },
    {
      "id": "MCQ-E19-007",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of volcanic eruptions on atmospheric CO2. Large eruptions release CO2 but also SO2. Which of the following correctly describes the net short-term climate effect?",
      "options": [
        "Warming only from CO2",
        "Cooling — sulfate aerosols from SO2 reflect solar radiation, outweighing the warming effect of CO2 in the short term",
        "Warming from both CO2 and SO2",
        "No net effect"
      ],
      "correctIndex": 1,
      "explanation": "Volcanic CO2 emissions are small compared to human emissions and cause minimal warming. However, SO2 converts to sulfate aerosols that reflect solar radiation, causing significant short-term cooling (months to years). The net short-term effect of large eruptions is cooling."
    },
    {
      "id": "MCQ-X-Y910-029",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates whether two variables are correlated. They calculate Pearson's r = −0.92. Which of the following correctly interprets this value?",
      "options": [
        "Strong positive correlation",
        "Weak negative correlation",
        "Strong negative correlation — as one variable increases, the other decreases strongly",
        "No correlation"
      ],
      "correctIndex": 2,
      "explanation": "Pearson's r ranges from −1 to +1. r = −0.92 indicates a strong negative correlation — the two variables are strongly inversely related. Values close to −1 or +1 indicate strong correlations; values close to 0 indicate weak or no correlation."
    },
    {
      "id": "MCQ-FIN-Y910-018",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of habitat fragmentation on wildlife populations. Fragmented habitats support smaller, more isolated populations. Which of the following correctly explains the genetic consequence?",
      "options": [
        "Fragmentation increases genetic diversity",
        "Smaller isolated populations are more susceptible to genetic drift and inbreeding, reducing genetic diversity and increasing the risk of inbreeding depression",
        "Fragmentation has no genetic effects",
        "Isolated populations evolve faster"
      ],
      "correctIndex": 1,
      "explanation": "Habitat fragmentation creates small, isolated populations. Small populations are vulnerable to genetic drift (random allele frequency changes) and inbreeding (mating between relatives). Both reduce genetic diversity, increase the frequency of harmful recessive alleles (inbreeding depression) and reduce adaptive potential."
    },
    {
      "id": "MCQ-LAST-Y910-005",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student examines a cell under an electron microscope and observes many ribosomes attached to a membrane network. Which organelle is this?",
      "options": [
        "Smooth endoplasmic reticulum",
        "Golgi apparatus",
        "Rough endoplasmic reticulum",
        "Lysosome"
      ],
      "correctIndex": 2,
      "explanation": "Rough endoplasmic reticulum (rough ER) is characterised by ribosomes studded on its membrane surface. These ribosomes synthesise proteins that are threaded into the ER lumen for processing and transport."
    },
    {
      "id": "MCQ-LAST-Y910-014",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the DNA sequences of a gene in two populations of the same species that have been geographically isolated for 10 000 years. The sequences differ by 3%. Which of the following correctly interprets this finding?",
      "options": [
        "The populations are different species",
        "Mutations have accumulated independently in each population since isolation; the 3% difference reflects genetic divergence but does not necessarily indicate speciation",
        "The populations cannot interbreed",
        "3% difference means the populations are identical"
      ],
      "correctIndex": 1,
      "explanation": "Geographic isolation prevents gene flow. Mutations accumulate independently in each population. The 3% sequence difference reflects genetic divergence over 10 000 years. Whether they have speciated depends on whether reproductive isolation has developed — sequence difference alone is insufficient to determine this."
    },
    {
      "id": "MCQ-FINAL-Y910-010",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on the rate of enzyme-catalysed reactions in the human body. Which of the following correctly explains why human enzymes have an optimum temperature of approximately 37°C?",
      "options": [
        "37°C is the temperature of the environment",
        "Human enzymes have evolved to function optimally at core body temperature (37°C); above this, denaturation reduces activity; below this, reduced kinetic energy slows reaction rates",
        "All enzymes have the same optimum temperature",
        "37°C maximises substrate concentration"
      ],
      "correctIndex": 0,
      "explanation": "Human enzymes have evolved over millions of years to function optimally at normal body temperature (37°C). This temperature balances maximum enzyme activity (high enough kinetic energy) with structural stability (below denaturation threshold)."
    },
    {
      "id": "MCQ-MORE-Y910-016",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of pressure on the solubility of CO2 in water. Solubility increases with pressure. Which law describes this relationship?",
      "options": [
        "Boyle's law",
        "Henry's law — the solubility of a gas in a liquid is proportional to the partial pressure of the gas above the liquid",
        "Charles's law",
        "Raoult's law"
      ],
      "correctIndex": 1,
      "explanation": "Henry's law: at constant temperature, the amount of gas dissolved in a liquid is proportional to the partial pressure of that gas above the liquid. This explains why carbonated drinks release CO2 when opened (pressure drops)."
    },
    {
      "id": "MCQ-Z-Y910-013",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the properties of nylon (a polyamide). Nylon is formed by condensation polymerisation between a diamine and a dicarboxylic acid. Which of the following correctly describes the bond formed between monomers?",
      "options": [
        "Ester bond",
        "Peptide (amide) bond — formed between the amine group (-NH2) of one monomer and the carboxylic acid group (-COOH) of another, releasing water",
        "Carbon-carbon double bond",
        "Ionic bond"
      ],
      "correctIndex": 1,
      "explanation": "Polyamides (nylons) form when the -NH2 group of a diamine reacts with the -COOH group of a dicarboxylic acid, forming an amide (peptide) bond (-CO-NH-) and releasing water. This is condensation polymerisation — the same bond type as in proteins."
    },
    {
      "id": "MCQ-Z-Y910-020",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing the number of solar panels on a house's energy output. Output increases linearly with number of panels. Which of the following correctly explains why the relationship eventually becomes non-linear?",
      "options": [
        "More panels produce less electricity",
        "At high panel numbers, shading between panels, inverter capacity limits and roof space constraints reduce the marginal output of additional panels",
        "Solar panels become less efficient over time",
        "The grid cannot accept more electricity"
      ],
      "correctIndex": 1,
      "explanation": "Initially, each additional panel adds the same output (linear). Eventually, practical constraints limit output: panels shade each other (reducing irradiance), the inverter reaches maximum capacity, or available roof space runs out. These factors cause the relationship to become non-linear (diminishing returns)."
    },
    {
      "id": "MCQ-E19-014",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates whether a new conservation strategy increases bird species diversity. They survey 20 sites before and after implementation. Which statistical test is most appropriate?",
      "options": [
        "Chi-squared test for categorical data",
        "Paired t-test — comparing means of the same sites before and after, controlling for site-specific variation",
        "Unpaired t-test",
        "Correlation coefficient"
      ],
      "correctIndex": 1,
      "explanation": "A paired t-test compares means from the same subjects (sites) under two conditions (before/after). This controls for site-specific variation (some sites naturally have more species). It tests whether the mean change in diversity is significantly different from zero."
    },
    {
      "id": "MCQ-FIN-Y910-019",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of microplastics on soil organisms. Earthworm populations decline in microplastic-contaminated soil. Which of the following correctly explains the ecological consequence?",
      "options": [
        "Fewer earthworms improve soil quality",
        "Earthworms are ecosystem engineers — they aerate soil, mix organic matter and enhance nutrient cycling; their decline reduces soil fertility and plant productivity",
        "Earthworms are not important to soil ecosystems",
        "Microplastics improve drainage"
      ],
      "correctIndex": 1,
      "explanation": "Earthworms are keystone soil organisms. They burrow through soil (improving aeration and drainage), fragment organic matter (accelerating decomposition) and mix soil layers (improving nutrient distribution). Their decline due to microplastic contamination reduces soil fertility and plant productivity."
    },
    {
      "id": "MCQ-LAST-Y910-006",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the rate of photosynthesis and respiration in a leaf at different light intensities. At the light compensation point, which of the following is true?",
      "options": [
        "Only photosynthesis occurs",
        "Only respiration occurs",
        "The rate of photosynthesis equals the rate of respiration — net gas exchange is zero",
        "Photosynthesis rate is double respiration rate"
      ],
      "correctIndex": 2,
      "explanation": "The light compensation point is the light intensity at which CO2 fixed by photosynthesis exactly equals CO2 released by respiration. Net gas exchange is zero — the plant neither gains nor loses carbon."
    },
    {
      "id": "MCQ-LAST-Y910-015",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of UV radiation on bacterial DNA. UV causes thymine dimers (adjacent thymine bases bonding together). Which of the following correctly explains why this is harmful?",
      "options": [
        "Thymine dimers increase mutation rate beneficially",
        "Thymine dimers distort the DNA double helix, blocking replication and transcription, potentially causing cell death or cancer if repair mechanisms fail",
        "UV radiation only affects RNA",
        "Thymine dimers strengthen DNA"
      ],
      "correctIndex": 1,
      "explanation": "UV radiation causes covalent bonds to form between adjacent thymine bases (thymine dimers). These distort the DNA helix, blocking DNA polymerase during replication and RNA polymerase during transcription. If repair mechanisms (e.g. nucleotide excision repair) fail, mutations accumulate, potentially causing cancer."
    },
    {
      "id": "MCQ-MORE-Y910-001",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the effect of increasing CO2 on breathing rate. Which receptor detects the change?",
      "options": [
        "Stretch receptors in lungs",
        "Chemoreceptors in the medulla and aortic arch detecting blood pH",
        "Pressure receptors in the heart",
        "Temperature receptors in the skin"
      ],
      "correctIndex": 1,
      "explanation": "Chemoreceptors in the medulla oblongata and aortic/carotid bodies detect rising CO2 (falling blood pH). They signal the respiratory centre to increase breathing rate and depth to expel excess CO2."
    },
    {
      "id": "MCQ-MORE-Y910-017",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the pH of 0.1 mol/L hydrochloric acid and 0.1 mol/L ethanoic acid. HCl has pH ≈ 1; ethanoic acid has pH ≈ 3. Which of the following correctly explains this difference?",
      "options": [
        "HCl has a higher molar mass",
        "HCl is a strong acid that fully dissociates; ethanoic acid is a weak acid that only partially dissociates, producing fewer H⁺ ions at the same concentration",
        "Ethanoic acid is more concentrated",
        "HCl reacts with water differently"
      ],
      "correctIndex": 1,
      "explanation": "Strong acids (HCl) fully dissociate: [H⁺] = 0.1 mol/L → pH = 1. Weak acids (CH₃COOH) partially dissociate: [H⁺] << 0.1 mol/L → pH > 1. At the same concentration, weak acids have higher pH (less acidic) than strong acids."
    },
    {
      "id": "MCQ-Z-Y910-014",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of chain length on the viscosity of alkanes. Longer chains have higher viscosity. Which of the following correctly explains this?",
      "options": [
        "Longer chains have more C-H bonds that react with oxygen",
        "Longer chains have greater surface area, increasing van der Waals forces between molecules, making them harder to flow past each other",
        "Longer chains have lower boiling points",
        "Shorter chains have stronger intermolecular forces"
      ],
      "correctIndex": 1,
      "explanation": "Viscosity reflects resistance to flow — how easily molecules slide past each other. Longer alkane chains have greater surface area contact between molecules, increasing van der Waals (London dispersion) forces. Stronger intermolecular forces make longer-chain alkanes more viscous."
    },
    {
      "id": "MCQ-E19-013",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the intensity of light from a point source at different distances. Intensity at 2 m is 100 W/m². What is the intensity at 4 m?",
      "options": [
        "50 W/m²",
        "25 W/m²",
        "200 W/m²",
        "12.5 W/m²"
      ],
      "correctIndex": 1,
      "explanation": "Intensity follows the inverse square law: I ∝ 1/r². Doubling distance: I₂ = I₁ × (r₁/r₂)² = 100 × (2/4)² = 100 × 0.25 = 25 W/m²."
    },
    {
      "id": "MCQ-FIN-Y910-020",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the relationship between biodiversity and resilience in grassland ecosystems. More diverse grasslands recover faster after drought. Which of the following correctly explains this?",
      "options": [
        "Diverse grasslands have more water",
        "Greater species diversity provides functional redundancy — if drought-sensitive species decline, drought-tolerant species maintain ecosystem functions, allowing faster recovery",
        "Diverse grasslands have deeper roots only",
        "Resilience is unrelated to biodiversity"
      ],
      "correctIndex": 1,
      "explanation": "Functional redundancy: in diverse ecosystems, multiple species perform similar ecological roles. When one species is stressed or lost, others can compensate. This redundancy buffers the ecosystem against disturbance, maintaining function and enabling faster recovery — a key mechanism linking biodiversity to resilience."
    },
    {
      "id": "MCQ-LAST-Y910-007",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing substrate concentration on enzyme activity. The rate increases then plateaus. Which of the following correctly explains the plateau?",
      "options": [
        "The substrate denatures at high concentration",
        "All enzyme active sites are occupied (enzyme is saturated) — adding more substrate cannot increase rate until more enzyme is added",
        "The temperature increases at high substrate concentration",
        "The pH changes at high substrate concentration"
      ],
      "correctIndex": 1,
      "explanation": "At the plateau, all enzyme active sites are occupied with substrate molecules. The enzyme is working at maximum rate (Vmax). Adding more substrate has no effect because there are no free active sites available."
    },
    {
      "id": "MCQ-DONE-Y910-008",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses a family pedigree for a condition that appears in every generation and affects both males and females equally. Which pattern of inheritance is most consistent?",
      "options": [
        "Autosomal recessive",
        "X-linked recessive",
        "Autosomal dominant",
        "Mitochondrial"
      ],
      "correctIndex": 2,
      "explanation": "Autosomal dominant inheritance: one copy of the dominant allele is sufficient to cause the condition. It appears in every generation (no skipping), affects males and females equally (autosomal, not sex-linked), and affected individuals typically have at least one affected parent."
    },
    {
      "id": "MCQ-MORE-Y910-002",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why the left ventricle has a thicker wall than the right ventricle?",
      "options": [
        "The left ventricle pumps blood to the lungs only",
        "The left ventricle pumps blood around the entire body at high pressure; the right ventricle only pumps to the nearby lungs at lower pressure",
        "The left ventricle is larger",
        "The right ventricle pumps more blood"
      ],
      "correctIndex": 1,
      "explanation": "The left ventricle must generate sufficient pressure to drive blood through the systemic circulation (entire body). The right ventricle only pumps blood to the lungs (pulmonary circulation), a much shorter distance requiring less pressure — hence thinner walls."
    },
    {
      "id": "MCQ-MORE-Y910-018",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the Born-Haber cycle for sodium chloride. Which of the following correctly describes the lattice enthalpy?",
      "options": [
        "Energy released when gaseous ions form a solid ionic lattice",
        "Energy required to atomise sodium metal",
        "Energy released when sodium loses an electron",
        "Energy required to dissociate chlorine gas"
      ],
      "correctIndex": 0,
      "explanation": "Lattice enthalpy is the energy released when gaseous ions come together to form one mole of solid ionic lattice. It reflects the strength of ionic bonding — higher lattice enthalpy means stronger ionic bonds and higher melting point."
    },
    {
      "id": "MCQ-LAST2-Y910-013",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on the viscosity of a polymer solution. Viscosity decreases with temperature. Which of the following correctly explains this?",
      "options": [
        "Polymer chains break at higher temperatures",
        "Higher temperature increases the kinetic energy of polymer chains and solvent molecules, reducing intermolecular interactions and allowing chains to move past each other more easily",
        "Higher temperature increases polymer concentration",
        "Viscosity is independent of temperature"
      ],
      "correctIndex": 1,
      "explanation": "Viscosity reflects resistance to flow — the difficulty of molecules moving past each other. Higher temperature increases kinetic energy, overcoming intermolecular forces (van der Waals, hydrogen bonds) between polymer chains and solvent. Chains move more freely, reducing viscosity."
    },
    {
      "id": "MCQ-LAST2-Y910-022",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of rewilding (reintroducing wolves) on a degraded ecosystem. Plant diversity increases after wolf reintroduction. Which of the following correctly explains this?",
      "options": [
        "Wolves eat plants directly",
        "Wolves reduce deer grazing pressure through direct predation and fear effects; reduced grazing allows plant communities to recover and diversify — a trophic cascade",
        "Wolves improve soil quality",
        "Wolves compete with plants for water"
      ],
      "correctIndex": 1,
      "explanation": "Trophic cascade: wolves prey on deer and alter their behaviour (deer avoid open areas). Reduced grazing pressure allows vegetation recovery. Diverse plant communities establish, improving habitat structure and supporting more species — demonstrating how apex predators can restore ecosystem function."
    },
    {
      "id": "MCQ-LAST-Y910-008",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares prokaryotic and eukaryotic cells. Which of the following is found in eukaryotic cells but NOT in prokaryotic cells?",
      "options": [
        "Ribosomes",
        "Cell membrane",
        "Membrane-bound nucleus",
        "DNA"
      ],
      "correctIndex": 2,
      "explanation": "Eukaryotic cells have a membrane-bound nucleus containing their DNA. Prokaryotic cells lack a nuclear membrane — their DNA floats freely in the cytoplasm as a circular chromosome."
    },
    {
      "id": "MCQ-DONE-Y910-009",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of UV radiation on the mutation rate in bacteria. UV exposure increases the frequency of mutations. Which of the following correctly explains the mechanism?",
      "options": [
        "UV radiation increases temperature",
        "UV radiation causes thymine dimers — covalent bonds between adjacent thymine bases — that distort the DNA helix and cause errors during replication",
        "UV radiation destroys ribosomes",
        "UV radiation increases transcription rate"
      ],
      "correctIndex": 1,
      "explanation": "UV radiation causes pyrimidine dimers (most commonly thymine dimers) by forming covalent bonds between adjacent thymine bases. These distort the DNA double helix, causing DNA polymerase to insert incorrect bases during replication, resulting in mutations."
    },
    {
      "id": "MCQ-MORE-Y910-003",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of smoking on lung function. Smokers have reduced FEV1 (forced expiratory volume). Which of the following correctly explains this?",
      "options": [
        "Smoking increases lung capacity",
        "Smoking damages alveoli (emphysema) and causes airway inflammation, reducing elastic recoil and increasing airway resistance",
        "Smoking increases oxygen absorption",
        "Smoking reduces mucus production"
      ],
      "correctIndex": 1,
      "explanation": "Smoking causes emphysema (destruction of alveolar walls, reducing surface area and elastic recoil) and chronic bronchitis (airway inflammation and excess mucus). Both reduce the ability to expel air forcefully, lowering FEV1."
    },
    {
      "id": "MCQ-MORE-Y910-019",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the enthalpy of combustion of methane: CH₄ + 2O₂ → CO₂ + 2H₂O. ΔH = −890 kJ/mol. Which of the following correctly describes this value?",
      "options": [
        "890 kJ is absorbed per mole of methane burned",
        "890 kJ is released per mole of methane burned — the reaction is exothermic",
        "The reaction is endothermic",
        "890 kJ is the activation energy"
      ],
      "correctIndex": 1,
      "explanation": "A negative ΔH indicates an exothermic reaction — energy is released to the surroundings. Combustion of methane releases 890 kJ per mole. The products (CO₂ and H₂O) have lower energy than the reactants."
    },
    {
      "id": "MCQ-E19-009",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the reaction of benzene with bromine in the presence of AlBr3 catalyst. Which type of reaction occurs?",
      "options": [
        "Addition reaction",
        "Electrophilic substitution — AlBr3 generates Br⁺ electrophile which substitutes a hydrogen on the benzene ring",
        "Free radical substitution",
        "Nucleophilic substitution"
      ],
      "correctIndex": 1,
      "explanation": "Benzene undergoes electrophilic aromatic substitution. AlBr3 (Lewis acid) polarises Br2, generating an electrophilic Br⁺ species. This attacks the electron-rich benzene ring, substituting H with Br while preserving the aromatic system. Addition would destroy aromaticity."
    },
    {
      "id": "MCQ-E19-011",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of introducing a top predator to an ecosystem. Which of the following correctly describes a trophic cascade?",
      "options": [
        "The predator eats all prey immediately",
        "The predator reduces prey numbers, which reduces grazing pressure on plants, allowing vegetation to recover — effects cascade down through trophic levels",
        "The predator has no effect on lower trophic levels",
        "Only the prey species is affected"
      ],
      "correctIndex": 1,
      "explanation": "A trophic cascade occurs when a predator indirectly affects lower trophic levels. Predator → reduces prey → reduces grazing → vegetation recovers. The effects ripple down through the food web, demonstrating the interconnectedness of ecosystems."
    },
    {
      "id": "MCQ-LAST-Y910-009",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates osmosis using dialysis tubing filled with concentrated sucrose solution, placed in distilled water. The tubing swells. Which of the following correctly explains this?",
      "options": [
        "Sucrose moves out of the tubing",
        "Water moves into the tubing by osmosis down its concentration gradient (from high water potential to low water potential)",
        "The tubing produces water",
        "Sucrose breaks down into water"
      ],
      "correctIndex": 1,
      "explanation": "Osmosis: water moves from high water potential (dilute solution/distilled water) to low water potential (concentrated sucrose) across the semi-permeable dialysis membrane. Water enters the tubing, causing it to swell."
    },
    {
      "id": "MCQ-DONE-Y910-010",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the genome sizes of different organisms. Humans have approximately 3 billion base pairs; a simple bacterium has approximately 4 million. Which of the following correctly explains why genome size does not directly correlate with organism complexity?",
      "options": [
        "Bacteria have more genes than humans",
        "Much of the human genome consists of non-coding sequences (introns, regulatory regions, repetitive sequences); the number of protein-coding genes is a better indicator of complexity",
        "Humans have fewer chromosomes than bacteria",
        "Genome size determines intelligence"
      ],
      "correctIndex": 1,
      "explanation": "The C-value paradox: genome size does not correlate with organism complexity. Much eukaryotic DNA is non-coding (introns, regulatory sequences, transposable elements, repetitive DNA). Humans have ~20 000 protein-coding genes — similar to many simpler organisms."
    },
    {
      "id": "IC-72-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how the rock cycle works and give an example of each rock type.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The rock cycle describes the continuous transformation of rocks between three types. Igneous rocks form when magma (underground) or lava (surface) cools and solidifies — granite (intrusive, slow cooling, large crystals) and basalt (extrusive, fast cooling, small crystals). Weathering and erosion break rocks into sediment; compaction and cementation of sediment layers form sedimentary rocks — sandstone, limestone, shale. Heat and pressure (without melting) transform existing rocks into metamorphic rocks — limestone becomes marble; shale becomes slate; sandstone becomes quartzite. Metamorphic rocks can melt to form magma, restarting the cycle. The rock cycle operates over millions of years, driven by tectonic forces (plate movement, volcanism) and surface processes (weathering, erosion, deposition). It continuously recycles Earth's crustal material and is intimately linked to the carbon cycle — limestone stores vast amounts of carbon."
    },
    {
      "id": "IC-73-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe what happens during fertilisation in humans.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Fertilisation in humans is the fusion of a sperm cell and an egg cell (ovum) to form a diploid zygote. After ovulation, the egg is swept into the fallopian tube. Sperm deposited in the vagina swim through the cervix and uterus into the fallopian tube. Of millions of sperm, only a few hundred reach the egg. The acrosome reaction: enzymes released from the sperm head digest the zona pellucida (protective layer around the egg). The first sperm to penetrate the zona pellucida fuses with the egg cell membrane. The cortical reaction immediately follows: cortical granules release enzymes that harden the zona pellucida, preventing polyspermy (fertilisation by multiple sperm). The egg completes meiosis II, and the two haploid nuclei (pronuclei) fuse, restoring the diploid chromosome number (46). The zygote begins dividing as it travels to the uterus for implantation."
    },
    {
      "id": "IC-74-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the role of bacteria in both causing disease and supporting life.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Bacteria are prokaryotic microorganisms that play dual roles in human health and ecosystem function. As pathogens, bacteria cause diseases including tuberculosis (Mycobacterium tuberculosis), pneumonia (Streptococcus pneumoniae), food poisoning (Salmonella, E. coli O157), and cholera (Vibrio cholerae). They cause disease through toxin production, direct tissue invasion and triggering inflammatory responses. However, bacteria are also essential for life. The human gut microbiome (predominantly bacteria) aids digestion, synthesises vitamins, trains the immune system and protects against pathogens. Nitrogen-fixing bacteria (Rhizobium) convert atmospheric N2 to ammonia, making nitrogen available to plants. Decomposer bacteria recycle nutrients from dead organic matter. Bacteria are exploited industrially for producing antibiotics, insulin (via genetic engineering), fermented foods and biofuels. The vast majority of bacterial species are harmless or beneficial — pathogens represent a small minority."
    },
    {
      "id": "IC-75-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how the Doppler effect is used in medicine and astronomy.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The Doppler effect describes the change in observed frequency when a source and observer are in relative motion. When a source moves toward an observer, wave fronts are compressed — observed frequency increases (higher pitch for sound, blue shift for light). When moving away, wave fronts are stretched — observed frequency decreases (lower pitch, red shift). Medical applications: Doppler ultrasound measures blood flow velocity by detecting frequency shifts in ultrasound reflected from moving red blood cells. It diagnoses arterial blockages, heart valve defects and fetal circulation problems. Colour Doppler imaging maps blood flow direction and speed. Astronomical applications: red shift of spectral lines from distant galaxies reveals they are receding — the basis of Hubble's discovery that the universe is expanding. The degree of red shift indicates recession speed; combined with Hubble's law, it estimates galactic distances."
    },
    {
      "id": "IC-76-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe the process of protein synthesis from DNA to functional protein.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Spectroscopy analyses the interaction of light with matter to identify elements and compounds. Each element has a unique emission spectrum — when electrons are excited and return to lower energy levels, they emit photons of specific wavelengths, producing characteristic spectral lines. By comparing the absorption or emission spectrum of starlight with laboratory spectra of known elements, astronomers can determine stellar composition. The Sun's spectrum reveals hydrogen, helium, calcium, iron and many other elements. Doppler shifts in spectral lines reveal stellar motion — blue shift indicates approach, red shift indicates recession. Temperature can be inferred from the peak wavelength of emission (Wien's law) and the pattern of ionisation states. Spectroscopy has revealed that the universe is composed predominantly of hydrogen and helium, and that distant stars and galaxies contain the same elements as those on Earth."
    },
    {
      "id": "IC-77-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how climate change is affecting polar ecosystems.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Earth's seasons result from the 23.5° tilt of Earth's rotational axis relative to its orbital plane, not from variation in Earth-Sun distance. When the Northern Hemisphere is tilted toward the Sun (June), it receives more direct sunlight over longer days — summer. When tilted away (December), sunlight strikes at a lower angle and days are shorter — winter. The Southern Hemisphere experiences opposite seasons simultaneously. At the equinoxes (March and September), neither hemisphere is tilted toward the Sun and day and night are approximately equal globally. The angle of sunlight matters because: direct sunlight concentrates energy over a smaller area (higher intensity); low-angle sunlight spreads energy over a larger area and passes through more atmosphere (lower intensity). This explains why polar regions are cold year-round — they always receive low-angle sunlight."
    },
    {
      "id": "IC-78-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain what is meant by half-life and give a practical application of radioactive decay.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The theory of evolution has been substantially extended since Darwin proposed natural selection in 1859. The Modern Synthesis (1930s-1940s) integrated Mendelian genetics with Darwinian evolution, explaining the genetic basis of heritable variation. Molecular biology revealed that DNA mutations are the ultimate source of variation. Neutral theory (Kimura, 1968) proposed that most molecular evolution is neutral — driven by genetic drift rather than selection. Evo-devo (evolutionary developmental biology) showed that changes in regulatory genes controlling development can produce major morphological changes with few mutations. Horizontal gene transfer (especially in bacteria) allows evolution without reproduction. Epigenetic inheritance — heritable changes in gene expression without DNA sequence changes — adds another layer. The core mechanism of natural selection remains central, but modern evolutionary theory is far richer and more nuanced than Darwin could have imagined."
    },
    {
      "id": "IC-79-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the digestive system breaks down and absorbs nutrients.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "MRI (Magnetic Resonance Imaging) uses the magnetic properties of hydrogen nuclei (protons) to produce detailed images of soft tissue. The patient is placed in a strong magnetic field, aligning hydrogen protons. Radiofrequency pulses knock protons out of alignment; as they realign, they emit radiofrequency signals detected by the scanner. Different tissues contain different amounts of water (hydrogen), producing different signal intensities. Computer processing constructs detailed cross-sectional images. MRI is particularly valuable for imaging the brain, spinal cord, joints and soft tissues — structures poorly visualised by X-ray or CT. It uses no ionising radiation, making it safer for repeated use. Functional MRI (fMRI) detects blood flow changes associated with neural activity, mapping brain function. Limitations include: high cost, long scan times, noise, and contraindications for patients with metal implants."
    },
    {
      "id": "IC-80-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the scientific basis for recommending a balanced diet.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Predator-prey relationships create oscillating population cycles. When prey is abundant, predators have plentiful food, improving survival and reproduction — predator population grows. Increased predation reduces prey numbers. With less food, predator survival and reproduction decline — predator population falls. Reduced predation allows prey to recover. The cycle repeats. Classic examples include the Canadian lynx and snowshoe hare, whose populations oscillate with approximately 10-year cycles. However, real ecosystems are more complex — prey populations are also affected by food availability, disease and other predators. Predators also influence prey behaviour (fear effects) — prey may avoid high-risk areas even when predator numbers are low, reducing grazing pressure. This 'landscape of fear' can have significant ecosystem effects, as demonstrated by wolf reintroduction in Yellowstone, which altered elk behaviour and allowed vegetation recovery."
    },
    {
      "id": "IC-81-F6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how convection currents in the mantle drive plate tectonics.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Subduction occurs where a denser oceanic plate converges with a less dense continental plate and sinks into the mantle. As the oceanic plate descends, it heats up and releases water, which lowers the melting point of the overlying mantle wedge, generating magma. This magma rises through the continental crust, forming volcanic arcs (e.g. the Andes, Cascade Range). The descending plate also generates earthquakes as it grinds against the overriding plate — subduction zones produce the world's largest earthquakes (e.g. 2011 Tōhoku earthquake, magnitude 9.0). Deep ocean trenches mark subduction zones (e.g. Mariana Trench). Subduction is part of the rock cycle — oceanic crust is continuously created at mid-ocean ridges and destroyed at subduction zones, maintaining the total area of Earth's surface. The subducted material is eventually recycled into the mantle."
    },
    {
      "id": "AR-58-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that the rate of transpiration is higher in windy conditions than in still air. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of environmental conditions on transpiration rate.\nObservation: Transpiration rate was higher in windy conditions than in still air.\nExplanation: Transpiration depends on the water vapour concentration gradient between leaf air spaces (saturated) and surrounding air. In still air, water vapour accumulates around the leaf, reducing the gradient. Wind removes this humid boundary layer, maintaining a steep gradient and increasing diffusion rate. Higher temperature, lower humidity and higher light intensity (open stomata) also increase transpiration.\nConclusion: Wind increases transpiration by maintaining a steep water vapour concentration gradient. This demonstrates that transpiration rate is controlled by both internal factors (stomatal aperture) and external environmental conditions."
    },
    {
      "id": "AR-59-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the voltage across components in a parallel circuit and finds it is the same across each branch. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate voltage distribution in a parallel circuit.\nObservation: Voltage across each branch of the parallel circuit was equal to the supply voltage.\nExplanation: In a parallel circuit, each branch is connected directly between the same two points (the positive and negative terminals of the supply). The potential difference across each branch equals the EMF of the supply. Current divides between branches according to their resistance (I = V/R), but voltage is the same across all branches.\nConclusion: Voltage is equal across all branches in a parallel circuit, consistent with Kirchhoff's voltage law. This is why household appliances are connected in parallel — each receives the full mains voltage regardless of how many other appliances are connected."
    },
    {
      "id": "AR-60-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that the diversity of bird species is positively correlated with the diversity of tree species in a forest. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between tree species diversity and bird species diversity.\nObservation: Bird species diversity was positively correlated with tree species diversity.\nExplanation: Greater tree species diversity provides more diverse habitat structure — different tree species offer different food sources (seeds, fruits, insects), nesting sites and microhabitats. This supports a wider range of bird species with different ecological niches. The relationship reflects the general principle that habitat complexity supports greater biodiversity.\nConclusion: Tree species diversity positively correlates with bird species diversity, consistent with the habitat heterogeneity hypothesis. This has conservation implications — maintaining diverse woodland structure is important for bird biodiversity."
    },
    {
      "id": "AR-61-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates the effect of temperature on the rate of fermentation by yeast. Results show maximum rate at 37°C. Write a scientific report.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of temperature on fermentation rate in yeast.\nObservation: CO2 production rate increased with temperature up to 37°C, then decreased sharply above 45°C.\nExplanation: Fermentation is enzyme-controlled. Up to the optimum (~37°C), higher temperature increases enzyme activity and reaction rate. Above the optimum, yeast enzymes denature — their active sites change shape permanently, reducing catalytic activity. At very high temperatures, yeast cells die.\nConclusion: Fermentation rate is temperature-dependent with a clear optimum at approximately 37°C. This reflects the effect of temperature on enzyme activity. The optimum temperature for yeast fermentation is exploited in bread-making and brewing."
    },
    {
      "id": "AR-62-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that the acceleration of an object increases as the net force applied increases, for constant mass. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate Newton's second law: F = ma.\nObservation: Acceleration increased linearly with net force for constant mass.\nExplanation: Newton's second law states that net force equals mass times acceleration (F = ma). For constant mass, a ∝ F — doubling the force doubles the acceleration. The gradient of the force-acceleration graph equals the mass of the trolley. Any deviation from linearity indicates friction or measurement error.\nConclusion: The results confirm Newton's second law — acceleration is directly proportional to net force for constant mass. The mass of the trolley can be calculated from the gradient of the F-a graph."
    },
    {
      "id": "AR-63-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the absorption of light by chlorophyll at different wavelengths. Results show peaks in red and blue regions. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the absorption spectrum of chlorophyll.\nObservation: Chlorophyll showed peak absorption in the red (~680 nm) and blue (~430 nm) regions; minimum absorption in the green region (~550 nm).\nExplanation: Chlorophyll molecules contain a porphyrin ring with a magnesium ion at the centre. The conjugated double bond system absorbs photons of specific wavelengths. Red and blue photons have energies matching electronic transitions in chlorophyll. Green light is not absorbed — it is reflected, which is why plants appear green.\nConclusion: Chlorophyll absorbs red and blue light most strongly for photosynthesis. The absorption spectrum explains why red and blue light are most effective at driving photosynthesis, and why green light is least effective."
    },
    {
      "id": "AR-64-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that the incidence of skin cancer is higher in populations living closer to the equator. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between latitude and skin cancer incidence.\nObservation: Skin cancer incidence was higher in populations living closer to the equator.\nExplanation: UV radiation intensity increases closer to the equator because sunlight strikes at a more direct angle, passing through less atmosphere. UV-B radiation damages DNA in skin cells, causing mutations in tumour suppressor genes (p53) and proto-oncogenes. Accumulated mutations can lead to uncontrolled cell division (cancer). Fair-skinned populations at low latitudes are particularly vulnerable.\nConclusion: The positive correlation between equatorial proximity and skin cancer incidence is consistent with UV radiation as a causative agent. However, confounding factors (skin type, sun exposure behaviour, healthcare access) must be considered. The relationship supports the use of sunscreen and protective clothing."
    },
    {
      "id": "AR-65-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates how the concentration of hydrochloric acid affects the rate of reaction with marble chips. Results show faster reaction at higher concentrations. Write a scientific report.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of HCl concentration on reaction rate with marble chips.\nObservation: Rate of CO2 production increased with HCl concentration.\nExplanation: Higher HCl concentration means more H⁺ ions per unit volume. This increases the frequency of collisions between H⁺ ions and CaCO3 surface particles, increasing the rate of successful collisions. The reaction: CaCO3 + 2HCl → CaCl2 + H2O + CO2. Rate can be measured by mass loss or CO2 volume collected.\nConclusion: HCl concentration has a direct positive effect on reaction rate with marble chips, consistent with collision theory. The relationship demonstrates how concentration affects reaction rate in a heterogeneous reaction (solid-liquid)."
    },
    {
      "id": "AR-66-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that the gravitational potential energy of an object increases linearly with height. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between height and gravitational potential energy.\nObservation: GPE increased linearly with height.\nExplanation: GPE = mgh. For constant mass and g, GPE is directly proportional to height — a linear relationship. The gradient of the GPE-height graph equals mg (weight of the object). This energy is stored as potential energy and can be converted to kinetic energy when the object falls.\nConclusion: GPE increases linearly with height, consistent with GPE = mgh. The gradient equals the object's weight. This demonstrates the principle of energy storage in gravitational fields."
    },
    {
      "id": "AR-67-F6",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the effect of adding salt to water on its boiling point. Results show boiling point increases with salt concentration. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of salt concentration on the boiling point of water.\nObservation: Boiling point increased with salt concentration.\nExplanation: Dissolving salt in water is a colligative property — the solute particles reduce the vapour pressure of the solution. Lower vapour pressure means the solution must be heated to a higher temperature before vapour pressure equals atmospheric pressure (boiling point). This is boiling point elevation: ΔTb = Kb × m (where m = molality).\nConclusion: Salt increases the boiling point of water through boiling point elevation — a colligative property depending on the number of dissolved particles. This explains why salted water takes slightly longer to boil and why antifreeze raises the boiling point of engine coolant."
    }
  ]
};
