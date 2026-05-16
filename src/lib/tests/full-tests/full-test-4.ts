import type { PracticeTest } from "@/types/test";

export const fullTest4: PracticeTest = {
  "id": "full-4",
  "title": "Full Test 4",
  "subtitle": "Full JMSS format — 60 MCQ (Section A) + 10 written (Section B) + 10 written (Section C)",
  "kind": "full",
  "released": true,
  "durationSec": 9000,
  "questions": [
    {
      "id": "MCQ-BIO-Y910-018",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A cell undergoing rapid division would require large amounts of which molecule?",
      "options": [
        "Glucose only",
        "ATP and nucleotides",
        "Haemoglobin",
        "Insulin"
      ],
      "correctIndex": 1,
      "explanation": "Cell division requires ATP for energy and nucleotides (the building blocks of DNA) for DNA replication during the S phase."
    },
    {
      "id": "MCQ-BIO-Y910-038",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following describes epigenetic inheritance?",
      "options": [
        "Changes in DNA base sequence passed to offspring",
        "Heritable changes in gene expression that do not involve changes to the DNA sequence",
        "Mutations caused by radiation",
        "Changes in chromosome number"
      ],
      "correctIndex": 1,
      "explanation": "Epigenetic changes (such as DNA methylation and histone modification) alter gene expression without changing the underlying DNA sequence and can be passed to daughter cells."
    },
    {
      "id": "MCQ-BIO-Y910-058",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of exercise on breathing rate and tidal volume. Both increase during exercise. Which of the following best explains the increase in tidal volume?",
      "options": [
        "The diaphragm relaxes more",
        "The intercostal muscles and diaphragm contract more forcefully, increasing lung volume",
        "The lungs become smaller",
        "The alveoli produce more surfactant"
      ],
      "correctIndex": 1,
      "explanation": "During exercise, more forceful contraction of the diaphragm and intercostal muscles increases the volume of the thoracic cavity more than at rest, drawing in a larger volume of air per breath."
    },
    {
      "id": "MCQ-BIO-Y910-070",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of eutrophication on a lake. Which sequence of events correctly describes the process?",
      "options": [
        "Algae die → nutrients increase → algal bloom → oxygen increases",
        "Nutrients increase → algal bloom → algae die → bacteria decompose algae → oxygen depleted",
        "Oxygen depletes → nutrients increase → algal bloom → fish die",
        "Fish die → algae increase → oxygen increases"
      ],
      "correctIndex": 1,
      "explanation": "Eutrophication: excess nutrients (from fertiliser runoff) cause algal blooms. When algae die, bacteria decompose them, consuming oxygen. Oxygen depletion kills fish and other aerobic organisms."
    },
    {
      "id": "MCQ-FIN-Y910-004",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of auxin concentration on root and shoot growth. Low auxin concentrations promote root growth; high concentrations inhibit it. Which of the following correctly explains the differential sensitivity?",
      "options": [
        "Roots and shoots have different DNA",
        "Root cells are more sensitive to auxin than shoot cells — concentrations that promote shoot elongation inhibit root elongation due to different receptor densities and downstream signalling",
        "Auxin is destroyed in roots",
        "Shoots produce more auxin than roots"
      ],
      "correctIndex": 1,
      "explanation": "Roots and shoots have different sensitivities to auxin. Root cells have more auxin receptors or different downstream signalling, making them respond to much lower concentrations. Concentrations optimal for shoot elongation are supraoptimal for roots, inhibiting their growth."
    },
    {
      "id": "MCQ-Z-Y910-011",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the reaction of Period 2 elements with oxygen. Lithium forms Li2O; sodium forms Na2O2; potassium forms KO2. Which of the following correctly explains why different oxides form?",
      "options": [
        "All alkali metals form the same oxide",
        "Larger alkali metal atoms with more diffuse electron clouds stabilise larger, more polarisable oxide ions (O2²⁻ peroxide, O2⁻ superoxide) that would destabilise smaller, more charge-dense Li⁺",
        "The reactions occur at different temperatures",
        "Oxygen reacts differently with each metal"
      ],
      "correctIndex": 1,
      "explanation": "The type of oxide formed depends on the size and charge density of the metal cation. Li⁺ is small and highly charge-dense, stabilising the simple O²⁻ oxide. Larger Na⁺ stabilises the peroxide O2²⁻. Even larger K⁺ stabilises the superoxide O2⁻."
    },
    {
      "id": "MCQ-CHEM2-Y910-005",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "In the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the forward reaction is exothermic. A student increases the pressure. According to Le Chatelier's principle, which of the following will occur?",
      "options": [
        "Equilibrium shifts left, producing more N₂ and H₂",
        "Equilibrium shifts right, producing more NH₃",
        "Equilibrium position does not change with pressure",
        "The reaction stops"
      ],
      "correctIndex": 1,
      "explanation": "Increasing pressure favours the side with fewer moles of gas. Left side: 1 + 3 = 4 moles; right side: 2 moles. Equilibrium shifts right toward fewer moles (NH₃), reducing pressure."
    },
    {
      "id": "MCQ-LAST-Y910-021",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the efficiency of a motor lifting a 2 kg mass 3 m in 5 seconds using 80 J of electrical energy. What is the efficiency? (g = 10 m/s²)",
      "options": [
        "75%",
        "60%",
        "80%",
        "50%"
      ],
      "correctIndex": 0,
      "explanation": "Useful output = mgh = 2 × 10 × 3 = 60 J. Efficiency = (60/80) × 100 = 75%."
    },
    {
      "id": "MCQ-MORE-Y910-022",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student launches a projectile horizontally from a cliff 20 m high. Using g = 10 m/s², how long does it take to reach the ground?",
      "options": [
        "1 s",
        "2 s",
        "4 s",
        "0.5 s"
      ],
      "correctIndex": 1,
      "explanation": "Vertical motion: h = ½gt². 20 = ½ × 10 × t². t² = 4. t = 2 s. Horizontal velocity does not affect the time to fall."
    },
    {
      "id": "MCQ-FINAL-Y910-035",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student uses Hubble's law (v = H₀d) to estimate the age of the universe. If H₀ = 70 km/s/Mpc, the age is approximately 1/H₀. Converting units gives approximately 14 billion years. Which of the following correctly interprets this calculation?",
      "options": [
        "The universe is 14 million years old",
        "The age estimate assumes the universe has been expanding at a constant rate since the Big Bang; the actual age (~13.8 billion years) accounts for changes in expansion rate",
        "The universe is contracting",
        "Hubble's law cannot be used to estimate age"
      ],
      "correctIndex": 1,
      "explanation": "1/H₀ gives a rough age estimate assuming constant expansion rate. The actual age (13.8 billion years) is determined by more sophisticated models accounting for the fact that expansion was decelerating early on (matter-dominated) and is now accelerating (dark energy-dominated)."
    },
    {
      "id": "MCQ-MORE-Y910-027",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the charging of a capacitor through a resistor. The time constant τ = RC. With R = 10 kΩ and C = 100 μF, what is the time constant?",
      "options": [
        "1 s",
        "0.1 s",
        "10 s",
        "0.01 s"
      ],
      "correctIndex": 0,
      "explanation": "τ = RC = 10×10³ × 100×10⁻⁶ = 10⁴ × 10⁻⁴ = 1 s. After one time constant, the capacitor has charged to approximately 63% of the supply voltage."
    },
    {
      "id": "MCQ-Z-Y910-019",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates nuclear decay. A nucleus emits a beta-minus particle. Which of the following correctly describes what happens to the nucleus?",
      "options": [
        "Atomic number decreases by 1; mass number unchanged",
        "Atomic number increases by 1; mass number unchanged — a neutron converts to a proton and an electron (beta particle)",
        "Atomic number decreases by 2; mass number decreases by 4",
        "Atomic number unchanged; mass number decreases by 1"
      ],
      "correctIndex": 1,
      "explanation": "Beta-minus decay: a neutron in the nucleus converts to a proton, emitting an electron (beta particle) and an antineutrino. Atomic number increases by 1 (one more proton); mass number is unchanged (same total nucleons)."
    },
    {
      "id": "MCQ-DONE-Y910-024",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student reports that their experiment supports their hypothesis. A peer reviewer points out that the sample size was only 5. Which of the following correctly describes the concern?",
      "options": [
        "Sample size does not affect conclusions",
        "A sample size of 5 is too small to draw reliable conclusions — results may not be representative of the population and could be due to chance variation",
        "The hypothesis must be wrong",
        "Peer review is not necessary"
      ],
      "correctIndex": 1,
      "explanation": "Small sample sizes increase the risk that results are due to random variation rather than a real effect. With only 5 data points, one anomalous result significantly affects the mean. Larger samples reduce the influence of random variation and increase statistical power."
    },
    {
      "id": "MCQ-TOPUP-Y910-036",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on the rate of decomposition of leaf litter. Rate increases with temperature up to 35°C then decreases. Which of the following correctly explains the decrease above 35°C?",
      "options": [
        "Decomposers run out of leaf litter",
        "Decomposer enzymes denature above their optimum temperature, reducing metabolic activity",
        "Temperature has no effect on decomposition",
        "Leaf litter becomes more resistant at high temperatures"
      ],
      "correctIndex": 1,
      "explanation": "Decomposition is carried out by microorganisms (bacteria, fungi) using enzyme-controlled reactions. Above the optimum temperature (~35°C for soil microorganisms), enzymes denature — their active sites change shape, reducing decomposition rate."
    },
    {
      "id": "MCQ-EARTH-Y910-028",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses data from a clinical trial of a new drug. The trial uses a double-blind, randomised, placebo-controlled design. Which of the following correctly explains why this design is used?",
      "options": [
        "To reduce the cost of the trial",
        "To eliminate bias from both participants and researchers, and to separate the drug's effect from the placebo effect",
        "To increase the number of participants",
        "To avoid using statistics"
      ],
      "correctIndex": 1,
      "explanation": "Double-blind design prevents both participants and researchers from knowing who receives the drug, eliminating expectation bias. The placebo control separates the drug's pharmacological effect from psychological effects of receiving treatment."
    },
    {
      "id": "MCQ-FINAL-Y910-020",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the reaction of metals with dilute hydrochloric acid. Magnesium reacts vigorously; copper does not react. Which of the following correctly explains why copper does not react?",
      "options": [
        "Copper is too dense",
        "Copper is below hydrogen in the reactivity series and cannot displace hydrogen ions from acid",
        "Copper reacts with water instead",
        "Copper requires concentrated acid"
      ],
      "correctIndex": 1,
      "explanation": "In the reactivity series, metals above hydrogen can displace H⁺ ions from acids, producing hydrogen gas. Copper is below hydrogen in the reactivity series — it cannot displace hydrogen ions and therefore does not react with dilute hydrochloric acid."
    },
    {
      "id": "MCQ-MORE-Y910-032",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the age of rocks at a mid-ocean ridge and 500 km away. Rocks at the ridge are youngest; rocks 500 km away are oldest. Which of the following correctly explains this pattern?",
      "options": [
        "Older rocks sink to the ridge",
        "New oceanic crust is continuously created at the ridge by seafloor spreading; older crust moves away from the ridge over time",
        "Rocks at the ridge are heated and rejuvenated",
        "The pattern is random"
      ],
      "correctIndex": 1,
      "explanation": "Seafloor spreading: magma erupts at mid-ocean ridges, solidifies and forms new oceanic crust. As new material is added, older crust is pushed away from the ridge. Radiometric dating confirms that oceanic crust age increases with distance from the ridge."
    },
    {
      "id": "MCQ-BIO-Y910-019",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "What happens to the cell membrane during endocytosis?",
      "options": [
        "It breaks down permanently",
        "It folds inward to engulf material, forming a vesicle",
        "It becomes more rigid",
        "It releases proteins into the extracellular space"
      ],
      "correctIndex": 1,
      "explanation": "During endocytosis, the cell membrane invaginates and pinches off to form an intracellular vesicle containing the engulfed material."
    },
    {
      "id": "MCQ-BIO-Y910-039",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the DNA of two species and finds 95% similarity. What can be concluded?",
      "options": [
        "The species are identical",
        "The species likely share a recent common ancestor",
        "The species cannot interbreed",
        "The species have the same phenotype"
      ],
      "correctIndex": 1,
      "explanation": "High DNA sequence similarity suggests the two species diverged relatively recently from a common ancestor. DNA comparison is a key tool in molecular phylogenetics."
    },
    {
      "id": "MCQ-BIO-Y910-059",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the role of bile in digestion?",
      "options": [
        "Bile chemically digests fats",
        "Bile emulsifies fats into smaller droplets, increasing surface area for lipase",
        "Bile is produced by the pancreas",
        "Bile breaks down proteins"
      ],
      "correctIndex": 1,
      "explanation": "Bile, produced by the liver and stored in the gall bladder, emulsifies fat globules into tiny droplets. This increases the surface area available for lipase enzymes to act on."
    },
    {
      "id": "MCQ-BIO-Y910-071",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes allopatric speciation?",
      "options": [
        "Two populations evolve in the same geographic area",
        "A geographic barrier separates a population; the two groups evolve independently until they can no longer interbreed",
        "Speciation occurs due to sexual selection only",
        "Two species merge into one"
      ],
      "correctIndex": 1,
      "explanation": "Allopatric speciation occurs when a geographic barrier (mountain range, river, ocean) separates a population. Isolated groups accumulate different mutations and adaptations until reproductive isolation is complete."
    },
    {
      "id": "MCQ-FIN-Y910-005",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on the rate of transpiration. Rate increases with temperature. Which of the following correctly explains the role of stomata in this relationship?",
      "options": [
        "Stomata close at higher temperatures",
        "Higher temperatures increase the kinetic energy of water molecules and reduce air humidity, steepening the water vapour gradient; stomata remain open during the day allowing water vapour to diffuse out faster",
        "Stomata open wider at lower temperatures",
        "Temperature has no effect on stomatal aperture"
      ],
      "correctIndex": 1,
      "explanation": "Transpiration rate depends on: (1) the water vapour concentration gradient between leaf air spaces and external air; (2) stomatal aperture. Higher temperatures increase evaporation from mesophyll cells and reduce relative humidity of air, steepening the gradient and increasing transpiration through open stomata."
    },
    {
      "id": "MCQ-E19-003",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the first ionisation energies of Na (496 kJ/mol) and Mg (738 kJ/mol). Which of the following correctly explains why Mg has a higher first ionisation energy?",
      "options": [
        "Mg has more neutrons",
        "Mg has greater nuclear charge (+12 vs +11) with similar shielding, so the outer electron is held more tightly",
        "Mg has a larger atomic radius",
        "Mg has fewer electrons"
      ],
      "correctIndex": 1,
      "explanation": "Across Period 3, nuclear charge increases while shielding remains similar. Mg (Z=12) has greater nuclear charge than Na (Z=11), attracting the outer electron more strongly and requiring more energy to remove it."
    },
    {
      "id": "MCQ-CHEM2-Y910-006",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on the equilibrium: A ⇌ B (exothermic forward reaction). Increasing temperature shifts equilibrium to the left. Which of the following correctly explains this?",
      "options": [
        "Increasing temperature always shifts equilibrium right",
        "Le Chatelier's principle: increasing temperature favours the endothermic (reverse) reaction to absorb the added heat",
        "Increasing temperature increases the concentration of A",
        "Increasing temperature has no effect on equilibrium"
      ],
      "correctIndex": 1,
      "explanation": "Le Chatelier's principle: a system at equilibrium responds to oppose changes. Adding heat (increasing temperature) shifts equilibrium toward the endothermic direction (reverse reaction) to absorb the excess heat, reducing the temperature increase."
    },
    {
      "id": "MCQ-LAST-Y910-022",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the frequency of a standing wave on a string of length 0.5 m. The fundamental frequency has one half-wavelength fitting the string length. What is the wavelength of the fundamental?",
      "options": [
        "0.25 m",
        "0.5 m",
        "1.0 m",
        "2.0 m"
      ],
      "correctIndex": 2,
      "explanation": "For the fundamental mode, the string length = λ/2. Therefore λ = 2L = 2 × 0.5 = 1.0 m."
    },
    {
      "id": "MCQ-MORE-Y910-023",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates circular motion. A ball on a string moves in a horizontal circle. Which of the following correctly describes the direction of the centripetal force?",
      "options": [
        "Tangential to the circle",
        "Away from the centre (centrifugal)",
        "Toward the centre of the circle",
        "Vertically downward"
      ],
      "correctIndex": 2,
      "explanation": "Centripetal force always acts toward the centre of the circular path. It is provided by the tension in the string. Without this inward force, the ball would travel in a straight line (Newton's first law)."
    },
    {
      "id": "MCQ-FINAL-Y910-036",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the evidence for plate tectonics. Which of the following correctly identifies the strongest direct evidence for seafloor spreading?",
      "options": [
        "Matching coastlines of continents",
        "Symmetric magnetic anomaly stripes on either side of mid-ocean ridges, combined with increasing age of seafloor with distance from the ridge",
        "Distribution of earthquakes",
        "Fossil evidence"
      ],
      "correctIndex": 1,
      "explanation": "Magnetic anomaly stripes provide direct, quantitative evidence for seafloor spreading. New oceanic crust records Earth's magnetic field as it cools at mid-ocean ridges. Periodic geomagnetic reversals create symmetric stripes. Combined with radiometric dating showing increasing age with distance, this is compelling evidence."
    },
    {
      "id": "MCQ-MORE-Y910-028",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the resistance of a wire at different temperatures. Resistance increases with temperature. Which of the following correctly explains this for a metallic conductor?",
      "options": [
        "More electrons are available at higher temperatures",
        "Higher temperature increases lattice ion vibration, increasing the frequency of collisions between electrons and ions, impeding electron flow",
        "Resistance decreases with temperature in metals",
        "Higher temperature reduces electron density"
      ],
      "correctIndex": 1,
      "explanation": "In metallic conductors, resistance increases with temperature because thermal energy causes lattice ions to vibrate more vigorously. This increases the frequency of collisions between conduction electrons and lattice ions, impeding electron flow and increasing resistance."
    },
    {
      "id": "MCQ-FIN-Y910-015",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the half-life of protactinium-234 using a Geiger counter. The count rate falls from 200 to 25 counts/min. How many half-lives have elapsed?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correctIndex": 1,
      "explanation": "200 → 100 → 50 → 25. Three halvings = 3 half-lives. (200 × (1/2)³ = 200/8 = 25)."
    },
    {
      "id": "MCQ-DONE-Y910-025",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the length of a metal rod at different temperatures. They plot temperature (x-axis) against length (y-axis) and find a linear relationship. The gradient is 0.002 cm/°C. Which of the following correctly describes what the gradient represents?",
      "options": [
        "The y-intercept",
        "The rate of thermal expansion — the increase in length per degree Celsius",
        "The initial length of the rod",
        "The maximum length"
      ],
      "correctIndex": 1,
      "explanation": "The gradient of a length vs temperature graph represents the rate of change of length with temperature — the coefficient of linear thermal expansion (in cm/°C). It tells us how much the rod expands for each 1°C increase in temperature."
    },
    {
      "id": "MCQ-TOPUP-Y910-037",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student analyses data showing that countries with higher GDP have lower rates of infectious disease. Which of the following is the most appropriate interpretation?",
      "options": [
        "Higher GDP directly prevents infection",
        "There is a correlation between GDP and infectious disease rates; wealthier countries likely have better healthcare, sanitation and vaccination programmes, but GDP itself does not directly prevent infection",
        "Poor countries have more pathogens",
        "The relationship is coincidental"
      ],
      "correctIndex": 1,
      "explanation": "This is a correlation, not direct causation. Higher GDP is associated with better healthcare infrastructure, clean water, sanitation and vaccination coverage — these are the actual mechanisms reducing infectious disease. GDP is a proxy for these factors."
    },
    {
      "id": "MCQ-EARTH-Y910-029",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the electrical resistance of a solution of sodium chloride at different concentrations. Resistance decreases as concentration increases. Which of the following correctly explains this?",
      "options": [
        "More water molecules carry charge at higher concentrations",
        "More ions are present at higher concentrations, providing more charge carriers",
        "Salt molecules conduct electricity",
        "Higher concentration increases temperature"
      ],
      "correctIndex": 1,
      "explanation": "Electrical conductivity in ionic solutions depends on the number of ions available to carry charge. Higher NaCl concentration means more Na⁺ and Cl⁻ ions, reducing resistance and increasing conductivity."
    },
    {
      "id": "MCQ-LAST-Y910-032",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates whether a new drug reduces blood pressure. They use a randomised controlled trial with 200 participants. Which of the following correctly explains why randomisation is important?",
      "options": [
        "It reduces the number of participants needed",
        "Random allocation to treatment and control groups minimises systematic differences between groups, reducing confounding bias",
        "It eliminates the need for a control group",
        "It ensures all participants receive the drug"
      ],
      "correctIndex": 1,
      "explanation": "Randomisation ensures that known and unknown confounding variables are distributed equally between treatment and control groups by chance. This means any difference in outcomes can be attributed to the treatment rather than pre-existing differences between groups."
    },
    {
      "id": "MCQ-E19-018",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the carbon cycle over geological timescales. Which of the following correctly describes the role of silicate weathering in regulating atmospheric CO2?",
      "options": [
        "Silicate weathering releases CO2",
        "Silicate weathering consumes CO2: CO2 + H2O + CaSiO3 → CaCO3 + SiO2 + H2O; this long-term negative feedback regulates Earth's temperature over millions of years",
        "Silicate weathering has no effect on CO2",
        "Silicate weathering only affects ocean chemistry"
      ],
      "correctIndex": 1,
      "explanation": "The silicate weathering thermostat: CO2 reacts with silicate rocks (e.g. CaSiO3), consuming CO2 and producing carbonate minerals. Higher temperatures increase weathering rates, consuming more CO2 and cooling the planet. This negative feedback has regulated Earth's climate over geological timescales."
    },
    {
      "id": "MCQ-BIO-Y910-020",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following is a correct comparison between plant and animal cells?",
      "options": [
        "Plant cells have centrioles; animal cells do not",
        "Animal cells have a cell wall; plant cells do not",
        "Plant cells have chloroplasts; animal cells do not",
        "Animal cells have a large central vacuole; plant cells do not"
      ],
      "correctIndex": 2,
      "explanation": "Chloroplasts are found only in plant cells (and some protists). Animal cells lack chloroplasts, a cell wall and a large central vacuole."
    },
    {
      "id": "MCQ-BIO-Y910-040",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the central dogma of molecular biology?",
      "options": [
        "Protein → RNA → DNA",
        "DNA → Protein → RNA",
        "DNA → RNA → Protein",
        "RNA → DNA → Protein"
      ],
      "correctIndex": 2,
      "explanation": "The central dogma states that genetic information flows from DNA (via transcription to RNA) and then from RNA (via translation) to protein."
    },
    {
      "id": "MCQ-BIO-Y910-060",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the structure of arteries, veins and capillaries. Which of the following correctly matches structure to function?",
      "options": [
        "Veins have thick muscular walls to withstand high pressure",
        "Capillaries have valves to prevent backflow",
        "Arteries have thick elastic walls to withstand and maintain high blood pressure",
        "Capillaries have thick walls to slow diffusion"
      ],
      "correctIndex": 2,
      "explanation": "Arteries carry blood at high pressure from the heart and have thick, elastic, muscular walls to withstand and smooth out pressure pulses. Capillaries have thin walls for diffusion; veins have valves."
    },
    {
      "id": "MCQ-BIO-Y910-072",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the DNA sequences of four species and constructs a phylogenetic tree. Species A and B share 98% DNA similarity; A and C share 85%. What can be concluded?",
      "options": [
        "A and C are more closely related than A and B",
        "A and B share a more recent common ancestor than A and C",
        "All four species are equally related",
        "DNA similarity has no relationship to evolutionary history"
      ],
      "correctIndex": 1,
      "explanation": "Greater DNA sequence similarity indicates more recent divergence from a common ancestor. A and B (98% similar) diverged more recently than A and C (85% similar)."
    },
    {
      "id": "MCQ-LAST2-Y910-005",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of DCMU (a herbicide that blocks electron transport in photosystem II) on photosynthesis. Which of the following would be most directly affected?",
      "options": [
        "Carbon fixation in the Calvin cycle",
        "The light-dependent reactions — DCMU blocks electron flow from PSII, stopping ATP and NADPH production and therefore all photosynthesis",
        "Transpiration rate",
        "Stomatal opening"
      ],
      "correctIndex": 1,
      "explanation": "DCMU blocks plastoquinone binding in photosystem II, preventing electron transfer from PSII to the electron transport chain. This stops the light-dependent reactions — no ATP or NADPH is produced. Without these, the Calvin cycle cannot proceed, halting all photosynthesis."
    },
    {
      "id": "MCQ-CHEM2-Y910-007",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student calculates the atom economy of a reaction: CH₄ + 2O₂ → CO₂ + 2H₂O. The desired product is CO₂ (Mr = 44). The total Mr of all products = 44 + 36 = 80. What is the atom economy?",
      "options": [
        "55%",
        "45%",
        "80%",
        "44%"
      ],
      "correctIndex": 0,
      "explanation": "Atom economy = (Mr of desired product / total Mr of all products) × 100 = (44/80) × 100 = 55%."
    },
    {
      "id": "MCQ-LAST-Y910-023",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the relationship between the temperature of a black body and the wavelength of peak emission. As temperature increases, peak wavelength decreases. Which law describes this?",
      "options": [
        "Boyle's law",
        "Wien's displacement law",
        "Hubble's law",
        "Faraday's law"
      ],
      "correctIndex": 1,
      "explanation": "Wien's displacement law states that the peak wavelength of black body radiation is inversely proportional to temperature: λ_max = b/T (where b = 2.898 × 10⁻³ m·K). Hotter objects emit at shorter wavelengths (e.g. blue stars are hotter than red stars)."
    },
    {
      "id": "MCQ-MORE-Y910-024",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the power output of a student climbing stairs. The student (mass 60 kg) climbs 3 m in 6 seconds. What is the power output? (g = 10 m/s²)",
      "options": [
        "30 W",
        "100 W",
        "300 W",
        "600 W"
      ],
      "correctIndex": 2,
      "explanation": "Work done = mgh = 60 × 10 × 3 = 1800 J. Power = work/time = 1800/6 = 300 W."
    },
    {
      "id": "MCQ-LAST-Y910-026",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses the spectrum of light from a distant star and finds absorption lines shifted toward longer wavelengths compared to a laboratory source. Which of the following correctly interprets this observation?",
      "options": [
        "The star is moving toward Earth",
        "The star is moving away from Earth — the Doppler effect stretches wavelengths (red shift)",
        "The star is hotter than the Sun",
        "The star is cooler than the Sun"
      ],
      "correctIndex": 1,
      "explanation": "Red shift (wavelengths shifted toward longer/red end of spectrum) indicates the source is moving away from the observer. The Doppler effect stretches the wavelength of light from receding sources. This is the basis of Hubble's discovery that distant galaxies are receding."
    },
    {
      "id": "MCQ-MORE-Y910-029",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student builds a potential divider circuit with two resistors (R1 = 4 kΩ, R2 = 6 kΩ) connected to a 10 V supply. What is the voltage across R2?",
      "options": [
        "4 V",
        "6 V",
        "10 V",
        "2 V"
      ],
      "correctIndex": 1,
      "explanation": "Voltage divider: V_R2 = V_supply × R2/(R1+R2) = 10 × 6/(4+6) = 10 × 0.6 = 6 V."
    },
    {
      "id": "MCQ-E19-010",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student calculates the energy released when 1 kg of matter is completely converted to energy using E=mc². With c = 3×10⁸ m/s, what is the energy released?",
      "options": [
        "3×10⁸ J",
        "9×10¹⁶ J",
        "3×10¹⁶ J",
        "9×10⁸ J"
      ],
      "correctIndex": 1,
      "explanation": "E = mc² = 1 × (3×10⁸)² = 1 × 9×10¹⁶ = 9×10¹⁶ J. This enormous energy (equivalent to ~21 megatons of TNT) explains why nuclear reactions release so much energy from tiny mass changes."
    },
    {
      "id": "MCQ-X-Y910-022",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses seismic data and finds that P-waves travel faster through the inner core than the outer core. Which of the following correctly explains this?",
      "options": [
        "The inner core is liquid",
        "P-waves travel faster through solids than liquids; the inner core is solid iron-nickel under extreme pressure",
        "The inner core is less dense",
        "P-waves are absorbed by the outer core"
      ],
      "correctIndex": 1,
      "explanation": "P-wave velocity depends on the rigidity and density of the medium. The inner core is solid (despite extreme temperature) due to immense pressure. P-waves travel faster through the rigid solid inner core than through the liquid outer core."
    },
    {
      "id": "MCQ-MORE-Y910-033",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates whether a new fertiliser increases crop yield. They grow 20 plants with the fertiliser and 20 without. The mean yield with fertiliser is 15% higher. Which of the following is the most appropriate next step before concluding the fertiliser is effective?",
      "options": [
        "Immediately recommend the fertiliser",
        "Apply a statistical test (e.g. t-test) to determine whether the difference is statistically significant or could be due to chance",
        "Repeat with only 5 plants",
        "Conclude the fertiliser is ineffective"
      ],
      "correctIndex": 1,
      "explanation": "Statistical analysis determines whether an observed difference is likely to be real or due to random variation. A t-test compares means and calculates a p-value. If p < 0.05, the difference is statistically significant and unlikely to be due to chance alone."
    },
    {
      "id": "MCQ-EARTH-Y910-030",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of exercise on blood lactate concentration. Lactate increases sharply above a certain exercise intensity (the lactate threshold). Which of the following correctly explains this?",
      "options": [
        "Aerobic respiration produces lactate",
        "Below the threshold, aerobic respiration meets energy demands; above it, anaerobic respiration supplements energy production, generating lactate faster than it can be cleared",
        "Lactate is produced by the liver during exercise",
        "The heart produces lactate during exercise"
      ],
      "correctIndex": 1,
      "explanation": "At low-moderate intensity, aerobic respiration meets energy demands with no lactate accumulation. Above the lactate threshold, oxygen delivery is insufficient and anaerobic respiration produces lactate faster than the body can remove it."
    },
    {
      "id": "MCQ-LAST-Y910-033",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the boiling point of water at different altitudes and finds it decreases with altitude. Which of the following correctly explains this?",
      "options": [
        "Water is less pure at high altitude",
        "Atmospheric pressure decreases with altitude; lower pressure means water molecules need less energy to escape the liquid phase, so boiling occurs at lower temperatures",
        "Temperature is always lower at high altitude",
        "Water evaporates faster at high altitude"
      ],
      "correctIndex": 1,
      "explanation": "Boiling occurs when vapour pressure equals atmospheric pressure. At higher altitudes, atmospheric pressure is lower, so water reaches its boiling point at a lower temperature. This is why cooking times are longer at altitude — water boils below 100°C."
    },
    {
      "id": "MCQ-TOPUP-Y910-001",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the rate of diffusion of oxygen across a cell membrane at different temperatures. Rate increases with temperature. Which of the following correctly explains this?",
      "options": [
        "Membranes become thicker at higher temperatures",
        "Higher temperature increases the kinetic energy of oxygen molecules, increasing the rate of random movement and diffusion",
        "Higher temperature decreases the concentration gradient",
        "Membranes dissolve at higher temperatures"
      ],
      "correctIndex": 1,
      "explanation": "Diffusion rate increases with temperature because molecules have greater kinetic energy and move faster, increasing the frequency of random collisions with the membrane and the rate of net movement down the concentration gradient."
    },
    {
      "id": "MCQ-TOPUP-Y910-006",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses a pedigree for an autosomal recessive condition. Two unaffected parents have an affected child. What is the probability that their next child will be affected?",
      "options": [
        "0%",
        "25%",
        "50%",
        "75%"
      ],
      "correctIndex": 1,
      "explanation": "Both parents must be carriers (Aa). Aa × Aa gives 1 AA : 2 Aa : 1 aa. Probability of affected (aa) child = 25% for each pregnancy, regardless of previous children."
    },
    {
      "id": "MCQ-FINAL-Y910-001",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures blood glucose levels in a person with type 2 diabetes after a meal. Glucose remains elevated for longer than in a healthy person. Which of the following correctly explains this?",
      "options": [
        "The pancreas produces too much insulin",
        "Body cells have reduced sensitivity to insulin, so glucose uptake is impaired despite insulin being present",
        "The liver produces too much glycogen",
        "The kidneys excrete too much glucose"
      ],
      "correctIndex": 1,
      "explanation": "Type 2 diabetes involves insulin resistance — cells do not respond normally to insulin. Glucose cannot enter cells efficiently, so blood glucose remains elevated after meals despite insulin being secreted."
    },
    {
      "id": "MCQ-BIO-Y910-073",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the concept of a keystone species?",
      "options": [
        "A species that is the most abundant in an ecosystem",
        "A species whose removal has a disproportionately large effect on ecosystem structure",
        "A species at the top of the food chain",
        "A species that is endangered"
      ],
      "correctIndex": 1,
      "explanation": "A keystone species has an outsized effect on its ecosystem relative to its abundance. Its removal causes dramatic changes in species composition and ecosystem function."
    },
    {
      "id": "MCQ-LAST2-Y910-010",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of CO2 concentration on the rate of the Calvin cycle. Rate increases with CO2 up to a plateau. Which enzyme is directly responsible for CO2 fixation?",
      "options": [
        "ATP synthase",
        "RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase) — it catalyses the carboxylation of RuBP with CO2",
        "Photosystem II",
        "NADP reductase"
      ],
      "correctIndex": 1,
      "explanation": "RuBisCO catalyses the first step of the Calvin cycle: CO2 + RuBP → 2 × 3-phosphoglycerate. It is the most abundant enzyme on Earth and the primary enzyme responsible for carbon fixation. Its activity directly determines the rate of CO2 incorporation into organic molecules."
    },
    {
      "id": "MCQ-CHEM2-Y910-008",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why a higher percentage yield does not necessarily mean a more sustainable process?",
      "options": [
        "Yield and sustainability are always related",
        "A high yield reaction may still produce large amounts of toxic by-products or use non-renewable feedstocks — atom economy and green chemistry principles must also be considered",
        "Sustainability only depends on energy use",
        "Percentage yield only applies to industrial processes"
      ],
      "correctIndex": 1,
      "explanation": "Percentage yield measures how much of the theoretical product is obtained. Atom economy measures how efficiently atoms are incorporated into the desired product. A high-yield reaction with low atom economy wastes resources and produces unwanted by-products."
    },
    {
      "id": "MCQ-LAST-Y910-024",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student calculates the gravitational force between two objects. Doubling the distance between them reduces the force to what fraction of its original value?",
      "options": [
        "1/2",
        "1/4",
        "1/8",
        "1/16"
      ],
      "correctIndex": 1,
      "explanation": "Newton's law of gravitation: F ∝ 1/r². Doubling r gives F ∝ 1/(2r)² = 1/4r². The force is reduced to 1/4 of its original value — the inverse square law."
    },
    {
      "id": "MCQ-MORE-Y910-025",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the conservation of energy on a roller coaster. At the top of a loop (height 10 m), the speed is 5 m/s. What is the speed at the bottom? (g = 10 m/s², ignore friction)",
      "options": [
        "10 m/s",
        "15 m/s",
        "5 m/s",
        "20 m/s"
      ],
      "correctIndex": 1,
      "explanation": "Energy conservation: ½mv²_bottom = ½mv²_top + mgh. v²_bottom = v²_top + 2gh = 25 + 2×10×10 = 225. v_bottom = 15 m/s."
    },
    {
      "id": "MCQ-LAST-Y910-027",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on the rate of decomposition of leaf litter in soil. Rate increases with temperature up to 35°C. Which of the following correctly explains why decomposition is slower in cold climates?",
      "options": [
        "Cold climates have fewer leaves",
        "Lower temperatures reduce the metabolic activity of decomposer microorganisms, slowing enzyme-controlled breakdown of organic matter",
        "Cold climates have more oxygen",
        "Decomposers migrate to warmer regions"
      ],
      "correctIndex": 1,
      "explanation": "Decomposition is carried out by bacteria and fungi using enzyme-controlled reactions. Lower temperatures reduce enzyme activity (less kinetic energy, fewer successful collisions), slowing the breakdown of organic matter. This is why organic matter accumulates in cold climates (e.g. peat bogs)."
    },
    {
      "id": "MCQ-X-Y910-020",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the relationship between current and magnetic force on a wire. Doubling the current doubles the force. Which law describes this?",
      "options": [
        "Faraday's law",
        "Ampere's force law — force on a current-carrying conductor in a magnetic field is proportional to current (F = BIL)",
        "Ohm's law",
        "Lenz's law"
      ],
      "correctIndex": 1,
      "explanation": "The force on a current-carrying conductor in a magnetic field: F = BIL (where B = magnetic flux density, I = current, L = length of conductor in field). Force is directly proportional to current — doubling current doubles force."
    },
    {
      "id": "MCQ-X-Y910-023",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing atmospheric CO2 on the rate of photosynthesis in aquatic plants. Rate increases with CO2. Which of the following correctly explains the ecological implication?",
      "options": [
        "More CO2 always benefits aquatic ecosystems",
        "Increased CO2 may initially boost aquatic plant growth, but ocean acidification simultaneously harms calcifying organisms — the net ecological effect is complex and largely negative",
        "CO2 has no effect on aquatic plants",
        "Aquatic plants do not use CO2"
      ],
      "correctIndex": 1,
      "explanation": "While elevated CO2 can increase photosynthesis in some aquatic plants, ocean acidification (from CO2 dissolving in water) harms coral, shellfish and other calcifying organisms. The net ecological impact of rising CO2 on aquatic ecosystems is predominantly negative."
    },
    {
      "id": "IC-52-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the theory of evolution has changed since Darwin first proposed it.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Darwin's theory of evolution by natural selection (1859) has been substantially extended by subsequent discoveries. The Modern Synthesis (1930s-40s) integrated Mendelian genetics with Darwinian evolution, explaining the genetic basis of heritable variation. Molecular biology revealed DNA mutations as the ultimate source of variation. Neutral theory (Kimura, 1968) proposed that most molecular evolution is neutral — driven by genetic drift rather than selection. Evo-devo showed that changes in regulatory genes controlling development can produce major morphological changes. Horizontal gene transfer allows evolution without reproduction, especially in bacteria. Epigenetic inheritance adds heritable changes in gene expression without DNA sequence changes. The core mechanism of natural selection remains central, but modern evolutionary theory is far richer, incorporating multiple mechanisms of evolutionary change operating at different levels."
    },
    {
      "id": "IC-53-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the scientific principles behind MRI scanning.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "MRI uses the magnetic properties of hydrogen nuclei (protons) to produce detailed soft tissue images. Patients are placed in a strong magnetic field (1.5-3 Tesla), aligning hydrogen protons. Radiofrequency pulses knock protons out of alignment; as they realign, they emit radiofrequency signals detected by the scanner. Different tissues contain different amounts of water, producing different signal intensities. Computer processing constructs detailed cross-sectional images. MRI excels at imaging the brain, spinal cord, joints and soft tissues — structures poorly visualised by X-ray. It uses no ionising radiation, making it safer for repeated use. Functional MRI (fMRI) detects blood flow changes associated with neural activity, mapping brain function. Limitations include high cost, long scan times, noise, and contraindications for patients with ferromagnetic metal implants."
    },
    {
      "id": "IC-54-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how predator-prey relationships maintain balance in ecosystems.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Predator-prey relationships create oscillating population cycles that maintain ecosystem balance. When prey is abundant, predators have plentiful food, improving survival and reproduction — predator population grows. Increased predation reduces prey numbers. With less food, predator survival declines — predator population falls. Reduced predation allows prey to recover. The cycle repeats. Classic examples include the Canadian lynx and snowshoe hare, oscillating with approximately 10-year cycles. Predators also influence prey behaviour — the 'landscape of fear' causes prey to avoid high-risk areas even when predator numbers are low, reducing overgrazing. Wolf reintroduction in Yellowstone altered elk behaviour, allowing riverbank vegetation to recover and increasing biodiversity — demonstrating that predator-prey relationships have ecosystem-wide effects beyond simple population control."
    },
    {
      "id": "IC-55-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe what happens at a subduction zone and the geological consequences.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Subduction occurs where a denser oceanic plate converges with a less dense continental plate and sinks into the mantle. As the oceanic plate descends, it heats up and releases water, lowering the melting point of the overlying mantle wedge and generating magma. This magma rises through the continental crust, forming volcanic arcs such as the Andes and Cascade Range. The descending plate generates earthquakes as it grinds against the overriding plate — subduction zones produce the world's largest earthquakes, including the 2011 Tōhoku earthquake (magnitude 9.0). Deep ocean trenches mark subduction zones. Subduction is part of the rock cycle — oceanic crust created at mid-ocean ridges is destroyed at subduction zones, maintaining Earth's surface area. Subducted material is eventually recycled into the mantle, completing the geological cycle."
    },
    {
      "id": "IC-56-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how the development of antibiotics changed medicine.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Before antibiotics, bacterial infections — pneumonia, tuberculosis, sepsis — were leading causes of death. Alexander Fleming discovered penicillin in 1928 when Penicillium mould inhibited bacterial growth on a culture plate. Howard Florey and Ernst Chain developed it into a usable medicine by 1940. Penicillin inhibits bacterial cell wall synthesis — bacteria cannot maintain osmotic pressure and lyse. The antibiotic era dramatically reduced mortality from bacterial infections, enabled complex surgery and organ transplantation, and extended average life expectancy by decades. However, antibiotic resistance — driven by overuse and misuse — now threatens to reverse these gains. The WHO estimates antimicrobial resistance could cause 10 million deaths annually by 2050. New antibiotic development has slowed as pharmaceutical investment has declined, making resistance one of the greatest threats to global health."
    },
    {
      "id": "IC-57-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain the difference between renewable and non-renewable energy sources with examples.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Renewable energy sources are replenished naturally and do not deplete finite resources. Solar energy converts sunlight to electricity via photovoltaic cells. Wind turbines convert kinetic energy of wind. Hydroelectric power uses flowing water. Geothermal energy harnesses Earth's internal heat. Non-renewable sources include fossil fuels (coal, oil, natural gas) — formed over millions of years — and nuclear fuel (uranium). Fossil fuels release CO2 when burned, driving climate change. Nuclear fuel produces radioactive waste. Key differences: renewables have low operational emissions but variable output (sun and wind are intermittent); non-renewables provide reliable baseload power but have significant environmental costs. The energy transition requires expanding renewables, developing storage technologies to manage intermittency, and improving energy efficiency. The cost of solar and wind has fallen dramatically — both are now cost-competitive with fossil fuels in most markets."
    },
    {
      "id": "IC-58-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the eye focuses light to form an image on the retina.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The eye focuses light through a two-lens system. The cornea provides most refractive power (fixed). The lens fine-tunes focus through accommodation — ciliary muscles change lens shape. For distant objects, ciliary muscles relax and the lens flattens. For near objects, ciliary muscles contract and the lens becomes more convex. Light is focused onto the retina, which contains rods (sensitive to low light, no colour discrimination) and cones (colour vision, concentrated in the fovea). The optic nerve transmits signals to the visual cortex. Common refractive errors: myopia (short-sightedness) — eyeball too long, image focuses in front of retina, corrected with concave lens; hyperopia (long-sightedness) — eyeball too short, corrected with convex lens. The brain integrates signals from both eyes to produce stereoscopic depth perception."
    },
    {
      "id": "IC-59-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the role of the liver in maintaining homeostasis.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The liver is the body's primary metabolic organ, maintaining homeostasis through multiple functions. Blood glucose regulation: the liver converts excess glucose to glycogen (glycogenesis) after meals and breaks glycogen down to glucose (glycogenolysis) when blood glucose falls. Protein metabolism: deamination of excess amino acids produces urea (excreted by kidneys); the liver synthesises plasma proteins including albumin and clotting factors. Lipid metabolism: synthesises cholesterol and lipoproteins; converts excess carbohydrates to fat. Detoxification: metabolises alcohol, drugs and toxins; converts ammonia to urea. Bile production: bile salts emulsify fats for digestion. Heat production: the liver's high metabolic activity generates significant body heat. Iron storage: stores iron from recycled red blood cells. The liver's central role in metabolism makes it essential for maintaining the stable internal environment required for cellular function."
    },
    {
      "id": "IC-60-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how radioactive decay is used in carbon dating.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Carbon dating uses the radioactive decay of carbon-14 (¹⁴C) to determine the age of organic materials up to approximately 50 000 years old. ¹⁴C is produced in the upper atmosphere when cosmic ray neutrons strike nitrogen-14. Living organisms continuously exchange carbon with the environment, maintaining a constant ¹⁴C/¹²C ratio. After death, no new ¹⁴C is incorporated and existing ¹⁴C decays with a half-life of 5730 years. By measuring the remaining ¹⁴C/¹²C ratio and comparing it to the atmospheric ratio, the time since death can be calculated. For example, if a sample has half the expected ¹⁴C, it is approximately 5730 years old. Calibration curves correct for historical variations in atmospheric ¹⁴C. Carbon dating has been essential for archaeology, establishing the ages of ancient artefacts, human remains and organic materials."
    },
    {
      "id": "IC-61-F4",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe the structure and function of the cell membrane.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The cell membrane is a fluid mosaic of phospholipids and proteins. The phospholipid bilayer consists of two layers of phospholipid molecules with hydrophilic heads facing outward (toward water) and hydrophobic tails facing inward — forming a stable barrier. Integral proteins span the bilayer, forming channels and carriers for specific molecules. Peripheral proteins are attached to the surface. Glycoproteins and glycolipids on the outer surface act as cell recognition molecules and receptors. Cholesterol molecules between phospholipids regulate fluidity — preventing the membrane from becoming too rigid at low temperatures or too fluid at high temperatures. Functions: selective permeability (controls what enters and exits); cell signalling (receptor proteins bind hormones and neurotransmitters); cell recognition (glycoproteins identify cell type); enzyme activity (some membrane proteins are enzymes); cell adhesion (proteins anchor cells to each other and to the extracellular matrix)."
    },
    {
      "id": "AR-38-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that increasing temperature increases the rate of diffusion of a dye in water. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of temperature on diffusion rate.\nObservation: The rate of diffusion of a dye in water increased with temperature.\nExplanation: Diffusion rate depends on the kinetic energy of molecules. Higher temperature increases kinetic energy, causing molecules to move faster and collide more frequently. This increases the rate of random movement and therefore the net rate of diffusion down the concentration gradient. The relationship is approximately described by the Arrhenius equation.\nConclusion: Diffusion rate increases with temperature due to increased molecular kinetic energy. This has biological significance — higher body temperature increases the rate of metabolic processes including diffusion of substrates and products across membranes."
    },
    {
      "id": "AR-39-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates the effect of wind speed on transpiration rate in plants. Results show transpiration increases with wind speed. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of wind speed on transpiration rate.\nObservation: Transpiration rate increased with wind speed.\nExplanation: Transpiration depends on the water vapour concentration gradient between the leaf air spaces (saturated) and the surrounding air. In still air, water vapour accumulates around the leaf, reducing the gradient and slowing transpiration. Wind removes this humid boundary layer, maintaining a steep concentration gradient and increasing the rate of water vapour diffusion out of the leaf.\nConclusion: Wind increases transpiration rate by removing the humid boundary layer around leaves, maintaining a steep water vapour concentration gradient. This explains why plants wilt faster on windy days and why wind is a key environmental factor in transpiration."
    },
    {
      "id": "AR-40-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that coral reef biodiversity has declined by 50% in regions where ocean temperature has increased by 2°C. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of ocean temperature increase on coral reef biodiversity.\nObservation: Coral reef biodiversity declined by 50% in regions where ocean temperature increased by 2°C.\nExplanation: Thermal stress causes coral bleaching — corals expel their symbiotic algae (zooxanthellae) when water temperature exceeds 1°C above the seasonal maximum for extended periods. Without zooxanthellae, corals lose their primary food source and colour. Prolonged bleaching leads to coral death. Loss of coral structure reduces habitat complexity, causing cascading biodiversity loss.\nConclusion: A 2°C ocean temperature increase causes severe coral bleaching and biodiversity loss. This demonstrates the sensitivity of coral reef ecosystems to temperature change and the threat posed by climate change to marine biodiversity."
    },
    {
      "id": "AR-41-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates how the mass of a parachute affects its terminal velocity. Results show heavier parachutes reach higher terminal velocities. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of parachute mass on terminal velocity.\nObservation: Heavier parachutes reached higher terminal velocities.\nExplanation: Terminal velocity occurs when drag force equals gravitational force (weight). Weight = mg increases with mass. At terminal velocity, drag = weight. Since drag increases with speed (F_drag ∝ v²), a heavier parachute must travel faster before drag equals its greater weight. Therefore, terminal velocity increases with mass.\nConclusion: Terminal velocity increases with mass because a greater gravitational force requires greater drag to achieve balance, which requires higher speed. This demonstrates the relationship between weight, drag and terminal velocity."
    },
    {
      "id": "AR-42-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that the rate of decay of a radioactive substance follows an exponential curve. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the decay of a radioactive substance over time.\nObservation: Count rate decreased exponentially, consistent with radioactive decay.\nExplanation: Radioactive decay is a random, first-order process — the rate of decay is proportional to the number of undecayed nuclei: dN/dt = -λN. This produces an exponential decay curve: N = N₀e^(-λt). The half-life (t½ = ln2/λ) is constant regardless of initial activity. The exponential shape is characteristic of all first-order decay processes.\nConclusion: The exponential decay curve confirms radioactive decay follows first-order kinetics. The half-life can be determined from the graph by finding the time for count rate to halve. This is consistent with the probabilistic nature of nuclear decay."
    },
    {
      "id": "AR-43-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the force needed to pull an object up a ramp at different angles. Results show force increases with angle. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of ramp angle on the force required to pull an object up the ramp.\nObservation: Force required increased with ramp angle.\nExplanation: The component of gravitational force along the ramp = mg sinθ. As angle θ increases, sinθ increases, so the component of gravity opposing upward motion increases. The applied force must overcome this component plus friction. At 90° (vertical), the full weight must be lifted.\nConclusion: Force required to pull an object up a ramp increases with angle, consistent with F = mg sinθ + friction. Ramps reduce the force needed compared to lifting vertically, but increase the distance over which the force must be applied — demonstrating the principle of mechanical advantage."
    },
    {
      "id": "AR-44-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that children who receive more sleep perform better on memory tests. Analyse this data critically and discuss limitations.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between sleep duration and memory performance in children.\nObservation: Children who received more sleep performed better on memory tests.\nExplanation: Sleep is essential for memory consolidation — during slow-wave and REM sleep, the hippocampus replays experiences and transfers memories to long-term storage in the cortex. Sleep deprivation impairs attention, working memory and learning. However, this is an observational study — reverse causation is possible (better cognitive function may enable better sleep); confounding variables (socioeconomic status, screen time, exercise) may explain both.\nConclusion: The positive correlation between sleep and memory performance is consistent with the known role of sleep in memory consolidation. However, the observational design cannot establish causation. Controlled experimental studies with randomised sleep manipulation are needed."
    },
    {
      "id": "AR-45-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates the effect of substrate concentration on enzyme activity. Results show rate increases then plateaus. Write a scientific report.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of substrate concentration on enzyme activity.\nObservation: Rate increased with substrate concentration then plateaued at Vmax.\nExplanation: At low substrate concentration, many enzyme active sites are unoccupied — adding more substrate increases the rate as more enzyme-substrate complexes form. At the plateau (Vmax), all active sites are occupied (enzyme is saturated) — adding more substrate cannot increase rate until more enzyme is added. The Michaelis constant (Km) is the substrate concentration at half-maximum velocity.\nConclusion: Enzyme activity follows Michaelis-Menten kinetics. The plateau demonstrates enzyme saturation. Vmax and Km characterise the enzyme's kinetic properties and can be determined from a Lineweaver-Burk plot."
    },
    {
      "id": "AR-46-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that the period of a pendulum increases with its length. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between pendulum length and period.\nObservation: Period increased with pendulum length; the relationship was non-linear (period ∝ √length).\nExplanation: Pendulum period T = 2π√(L/g). Period is proportional to the square root of length, not length itself. Doubling the length increases the period by a factor of √2 ≈ 1.41. This relationship arises because longer pendulums have greater arc length to travel but also greater restoring force — the net effect is a √L dependence.\nConclusion: Pendulum period is proportional to the square root of length, consistent with T = 2π√(L/g). A graph of T² vs L should be linear with gradient 4π²/g, allowing g to be calculated."
    },
    {
      "id": "AR-47-F4",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the speed of a trolley at the bottom of a ramp for different heights. Results show speed increases with height. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the conservation of energy on a ramp.\nObservation: Speed at the bottom of the ramp increased with release height; the relationship was consistent with v = √(2gh).\nExplanation: Gravitational potential energy (GPE = mgh) converts to kinetic energy (KE = ½mv²) as the trolley descends. If energy is conserved: mgh = ½mv² → v = √(2gh). The mass cancels — speed at the bottom depends only on height, not mass. Any deviation from v = √(2gh) indicates energy lost to friction.\nConclusion: The results are consistent with conservation of energy. Speed at the bottom is determined by release height according to v = √(2gh). Friction losses can be quantified by comparing actual speed with the theoretical maximum."
    }
  ]
};
