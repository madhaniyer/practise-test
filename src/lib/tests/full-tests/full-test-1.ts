import type { PracticeTest } from "@/types/test";

export const fullTest1: PracticeTest = {
  "id": "full-1",
  "title": "Full Test 1",
  "subtitle": "Full JMSS format — 60 MCQ (Section A) + 10 written (Section B) + 10 written (Section C)",
  "kind": "full",
  "released": true,
  "durationSec": 9000,
  "questions": [
    {
      "id": "MCQ-BIO-Y910-008",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "During which phase of the cell cycle does DNA replication occur?",
      "options": [
        "Mitosis",
        "G1 phase",
        "S phase",
        "Cytokinesis"
      ],
      "correctIndex": 2,
      "explanation": "DNA replication occurs during the S (synthesis) phase of interphase, before mitosis begins."
    },
    {
      "id": "MCQ-BIO-Y910-028",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A diploid organism has 2n = 16. How many chromosomes will be present in each cell after meiosis II is complete?",
      "options": [
        "16",
        "8",
        "4",
        "2"
      ],
      "correctIndex": 1,
      "explanation": "Meiosis produces haploid cells. If 2n = 16, then n = 8. After meiosis II, each cell contains 8 chromosomes."
    },
    {
      "id": "MCQ-BIO-Y910-048",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the role of the alveoli in gas exchange?",
      "options": [
        "They produce surfactant only",
        "They provide a large, moist, thin-walled surface for diffusion of O2 and CO2",
        "They filter dust particles from inhaled air",
        "They produce mucus to trap pathogens"
      ],
      "correctIndex": 1,
      "explanation": "Alveoli are adapted for gas exchange: large surface area, thin walls (one cell thick), moist lining and rich capillary supply maximise diffusion of O2 into blood and CO2 out."
    },
    {
      "id": "MCQ-BIO-Y910-061",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student studies a food web in a pond ecosystem. If a pollutant kills all the primary producers, which of the following would be the most immediate consequence?",
      "options": [
        "Top predators would increase",
        "Primary consumers would increase",
        "Primary consumers would decline due to lack of food",
        "Decomposers would disappear"
      ],
      "correctIndex": 2,
      "explanation": "Primary consumers depend directly on primary producers for food. Removing producers immediately reduces the food supply for primary consumers, causing their population to decline."
    },
    {
      "id": "MCQ-BIO2-Y910-008",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the Hardy-Weinberg principle. In a population of 1000 individuals, 360 show the recessive phenotype (aa). What is the frequency of the recessive allele (q)?",
      "options": [
        "0.36",
        "0.6",
        "0.4",
        "0.16"
      ],
      "correctIndex": 1,
      "explanation": "Frequency of aa = q² = 360/1000 = 0.36. Therefore q = √0.36 = 0.6."
    },
    {
      "id": "MCQ-BIO2-Y910-017",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the process of translocation in plants?",
      "options": [
        "Movement of water from roots to leaves through xylem",
        "Movement of sugars (sucrose) from leaves to other parts of the plant through phloem",
        "Movement of minerals from soil into root hair cells",
        "Movement of oxygen from leaves to roots"
      ],
      "correctIndex": 1,
      "explanation": "Translocation is the transport of dissolved organic compounds (mainly sucrose) through the phloem. It is bidirectional — from source (leaves where photosynthesis occurs) to sink (roots, fruits, growing tips)."
    },
    {
      "id": "MCQ-BIO2-Y910-027",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the mechanism by which vaccines provide immunity?",
      "options": [
        "Vaccines directly kill pathogens in the body",
        "Vaccines introduce antigens that stimulate the immune system to produce memory cells, enabling a faster response on future exposure",
        "Vaccines provide antibodies directly to the patient",
        "Vaccines work by increasing body temperature"
      ],
      "correctIndex": 1,
      "explanation": "Vaccines contain antigens (weakened/killed pathogens or their components). The immune system responds by producing antibodies and memory B and T cells. On future exposure to the real pathogen, memory cells enable a rapid, strong secondary immune response."
    },
    {
      "id": "MCQ-BIO2-Y910-031",
      "section": "Science Reasoning",
      "topic": "General Science",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why HIV is difficult to treat with a single antiviral drug?",
      "options": [
        "HIV is a bacterium",
        "HIV mutates rapidly, producing variants that may be resistant to a single drug; combination therapy (HAART) targets multiple stages of the viral life cycle",
        "HIV cannot be detected by the immune system",
        "HIV only infects red blood cells"
      ],
      "correctIndex": 1,
      "explanation": "HIV has a high mutation rate due to error-prone reverse transcriptase. Single-drug therapy quickly selects for resistant mutants. HAART (Highly Active Antiretroviral Therapy) uses multiple drugs targeting different viral proteins, making it much harder for resistance to develop."
    },
    {
      "id": "MCQ-CHEM-Y910-008",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the trend in metallic character down Group 1?",
      "options": [
        "Metallic character decreases",
        "Metallic character stays the same",
        "Metallic character increases",
        "Metallic character is unrelated to group position"
      ],
      "correctIndex": 2,
      "explanation": "Down Group 1, the outer electron is further from the nucleus and more easily lost, so metallic character (ease of losing electrons) increases."
    },
    {
      "id": "MCQ-CHEM-Y910-018",
      "section": "Science Reasoning",
      "topic": "Chemical Bonding",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why silicon dioxide has a very high melting point?",
      "options": [
        "It has weak intermolecular forces",
        "It is a simple molecular substance",
        "It has a giant covalent structure with many strong Si-O covalent bonds throughout",
        "It is an ionic compound"
      ],
      "correctIndex": 2,
      "explanation": "Silicon dioxide (SiO₂) has a giant covalent (macromolecular) structure where every Si atom is bonded to 4 oxygen atoms. Breaking this network requires enormous energy."
    },
    {
      "id": "MCQ-CHEM-Y910-027",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student adds more reactant to a system at equilibrium. According to Le Chatelier's principle, what will happen?",
      "options": [
        "The equilibrium will shift to produce more reactants",
        "The equilibrium will shift to produce more products to reduce the added reactant",
        "The equilibrium position will not change",
        "The reaction will stop"
      ],
      "correctIndex": 1,
      "explanation": "Le Chatelier's principle states that a system at equilibrium will respond to a stress by shifting to oppose it. Adding reactant shifts equilibrium toward products to reduce the excess reactant."
    },
    {
      "id": "MCQ-CHEM-Y910-038",
      "section": "Science Reasoning",
      "topic": "Electrochemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the electrolysis of brine (sodium chloride solution). Which product is formed at the cathode?",
      "options": [
        "Chlorine",
        "Sodium",
        "Hydrogen",
        "Oxygen"
      ],
      "correctIndex": 2,
      "explanation": "At the cathode, H⁺ ions from water are preferentially discharged (reduced) to form H₂ gas. Sodium ions remain in solution as they are harder to discharge than H⁺."
    },
    {
      "id": "MCQ-CHEM-Y910-048",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly identifies the functional group of carboxylic acids?",
      "options": [
        "–OH",
        "–COOH",
        "–CHO",
        "–NH₂"
      ],
      "correctIndex": 1,
      "explanation": "Carboxylic acids contain the –COOH (carboxyl) functional group. This group is responsible for their acidic properties as it can donate a proton (H⁺)."
    },
    {
      "id": "MCQ-LAST-Y910-018",
      "section": "Science Reasoning",
      "topic": "Quantitative Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the structures of glucose and fructose. Both have the molecular formula C₆H₁₂O₆ but different structures. What term describes this relationship?",
      "options": [
        "Isotopes",
        "Isomers",
        "Allotropes",
        "Polymers"
      ],
      "correctIndex": 1,
      "explanation": "Glucose and fructose are structural isomers — they have the same molecular formula (C₆H₁₂O₆) but different structural arrangements of atoms. Glucose is an aldose (aldehyde group); fructose is a ketose (ketone group)."
    },
    {
      "id": "MCQ-CHEM2-Y910-014",
      "section": "Science Reasoning",
      "topic": "Materials",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the properties of a thermoplastic and a thermosetting polymer. Which of the following correctly describes the difference?",
      "options": [
        "Both can be remoulded when heated",
        "Thermoplastics soften and can be remoulded when heated; thermosetting polymers form permanent cross-links and cannot be remoulded",
        "Thermosetting polymers are always softer",
        "Thermoplastics cannot be recycled"
      ],
      "correctIndex": 1,
      "explanation": "Thermoplastics (e.g. polyethylene) have polymer chains held by weak intermolecular forces that break on heating, allowing remoulding. Thermosetting polymers (e.g. Bakelite) form covalent cross-links during curing, creating a rigid, permanent structure that cannot be remoulded."
    },
    {
      "id": "MCQ-CHEM2-Y910-015",
      "section": "Science Reasoning",
      "topic": "Corrosion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates corrosion of iron. Iron rusts faster in salt water than in pure water. Which of the following correctly explains this?",
      "options": [
        "Salt water is more acidic",
        "Salt water contains ions that increase electrical conductivity, accelerating the electrochemical corrosion process",
        "Salt water contains more oxygen",
        "Salt water is denser"
      ],
      "correctIndex": 1,
      "explanation": "Rusting is an electrochemical process. Salt water contains dissolved ions (Na⁺, Cl⁻) that increase electrical conductivity, allowing electrons to flow more easily between anodic and cathodic regions on the iron surface, accelerating the oxidation of iron."
    },
    {
      "id": "MCQ-PHYS-Y910-010",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates stopping distance at different speeds. Doubling the speed increases the braking distance by a factor of four. Which of the following correctly explains this?",
      "options": [
        "Braking force doubles with speed",
        "Kinetic energy is proportional to v², so braking distance is proportional to v²",
        "Friction increases with speed",
        "Mass increases with speed"
      ],
      "correctIndex": 1,
      "explanation": "Kinetic energy = ½mv². Doubling v quadruples KE. Since braking force is constant, the distance needed to dissipate four times the energy is four times greater."
    },
    {
      "id": "MCQ-PHYS-Y910-019",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates total internal reflection using a semicircular glass block. At which angle does total internal reflection first occur?",
      "options": [
        "The angle of refraction",
        "The critical angle",
        "90°",
        "The angle of incidence equals 0°"
      ],
      "correctIndex": 1,
      "explanation": "Total internal reflection occurs when light travels from a denser to a less dense medium and the angle of incidence exceeds the critical angle. At the critical angle, the refracted ray travels along the boundary (90° refraction)."
    },
    {
      "id": "MCQ-PHYS-Y910-029",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student connects three identical bulbs in series and then in parallel with the same battery. Which arrangement produces brighter bulbs?",
      "options": [
        "Series",
        "Parallel",
        "Both are equally bright",
        "It depends on the battery"
      ],
      "correctIndex": 1,
      "explanation": "In parallel, each bulb receives the full battery voltage. In series, the voltage is shared between bulbs. Higher voltage means more power (P = V²/R), so parallel bulbs are brighter."
    },
    {
      "id": "MCQ-PHYS-Y910-038",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why nuclear fusion releases energy?",
      "options": [
        "The products have more mass than the reactants",
        "The products have less mass than the reactants; the mass difference is converted to energy (E = mc²)",
        "Electrons are released during fusion",
        "The reaction is endothermic"
      ],
      "correctIndex": 1,
      "explanation": "In nuclear fusion, the mass of the products is slightly less than the mass of the reactants. This mass defect is converted to energy according to Einstein's equation E = mc²."
    },
    {
      "id": "MCQ-EARTH-Y910-008",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains how convection currents in the mantle drive plate movement?",
      "options": [
        "The mantle is solid and does not move",
        "Hot mantle material rises, spreads laterally, cools and sinks, dragging tectonic plates with it",
        "Plates are pushed by the rotation of the Earth",
        "Plates float on liquid water beneath the crust"
      ],
      "correctIndex": 1,
      "explanation": "Convection currents in the semi-fluid mantle are driven by heat from Earth's core. Hot material rises at mid-ocean ridges, spreads laterally and cools, sinking at subduction zones. This movement drags tectonic plates."
    },
    {
      "id": "MCQ-EARTH-Y910-017",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates whether a new fertiliser increases crop yield. They test it on 5 plants. A scientist suggests using 50 plants instead. Which of the following best explains why?",
      "options": [
        "Larger sample size reduces the effect of random variation and makes results more reliable",
        "Larger sample size increases accuracy of individual measurements",
        "Larger sample size changes the independent variable",
        "Larger sample size reduces the need for control variables"
      ],
      "correctIndex": 0,
      "explanation": "A larger sample size reduces the effect of random variation (chance differences between individual plants). Results from 50 plants are more likely to represent the true effect of the fertiliser than results from 5 plants."
    },
    {
      "id": "MCQ-EARTH-Y910-021",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of pH on the rate of a chemical reaction catalysed by an enzyme. The rate is highest at pH 7 and decreases at both lower and higher pH values. Which of the following best explains the decrease at high pH?",
      "options": [
        "More H⁺ ions are available at high pH",
        "The enzyme's active site changes shape (denatures) at extreme pH, reducing its ability to bind substrate",
        "The substrate concentration decreases at high pH",
        "The temperature increases at high pH"
      ],
      "correctIndex": 1,
      "explanation": "Extreme pH values disrupt the ionic and hydrogen bonds that maintain the enzyme's tertiary structure. The active site changes shape, reducing the enzyme-substrate complementarity and reaction rate."
    },
    {
      "id": "MCQ-EXTRA-Y910-010",
      "section": "Science Reasoning",
      "topic": "Space and Astronomy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the relationship between the distance of a planet from the Sun and its orbital period (Kepler's third law: T² ∝ r³). Earth's orbital period is 1 year at 1 AU. A planet at 4 AU has what orbital period?",
      "options": [
        "4 years",
        "8 years",
        "2 years",
        "16 years"
      ],
      "correctIndex": 1,
      "explanation": "T² ∝ r³ → T² = r³ = 4³ = 64 → T = √64 = 8 years."
    },
    {
      "id": "MCQ-FINAL-Y910-013",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of introducing a non-native predator to an island ecosystem. Native prey species decline rapidly. Which of the following correctly explains why native prey are particularly vulnerable?",
      "options": [
        "Native prey are smaller than introduced predators",
        "Native prey have not co-evolved with the introduced predator and lack effective anti-predator behaviours or adaptations",
        "Introduced predators are always larger",
        "Native prey reproduce more slowly"
      ],
      "correctIndex": 1,
      "explanation": "Co-evolution between predator and prey produces arms races — prey develop escape behaviours and defences; predators develop hunting strategies. Native prey that have never encountered a particular predator lack evolved defences, making them highly vulnerable to novel predators."
    },
    {
      "id": "MCQ-EXTRA-Y910-016",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses seismic wave data from an earthquake. P-waves arrive at a seismograph before S-waves. Which of the following correctly explains this?",
      "options": [
        "P-waves travel through solids only",
        "P-waves are longitudinal and travel faster than S-waves (transverse) through rock",
        "S-waves travel faster than P-waves",
        "P-waves travel through liquids; S-waves do not"
      ],
      "correctIndex": 1,
      "explanation": "P-waves (primary/compressional waves) are longitudinal and travel faster than S-waves (secondary/shear waves) through rock. P-waves arrive first at seismographs. S-waves cannot travel through liquid — this is how scientists determined Earth has a liquid outer core."
    },
    {
      "id": "MCQ-X-Y910-031",
      "section": "Science Reasoning",
      "topic": "Science",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the relationship between biodiversity and ecosystem productivity. More diverse ecosystems tend to be more productive. Which of the following correctly explains this?",
      "options": [
        "Diverse ecosystems have fewer species competing",
        "Greater species diversity means more complete use of available resources (niche complementarity) and greater functional redundancy, increasing overall productivity and stability",
        "Diverse ecosystems have more predators",
        "Productivity is unrelated to biodiversity"
      ],
      "correctIndex": 1,
      "explanation": "Biodiversity-ecosystem function relationship: diverse communities use resources more completely (different species exploit different niches), reducing waste. Functional redundancy means ecosystem processes continue even if some species are lost. Together these increase productivity and resilience."
    },
    {
      "id": "MCQ-BIO-Y910-009",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A cell has 46 chromosomes before mitosis. How many chromosomes will each daughter cell have?",
      "options": [
        "23",
        "46",
        "92",
        "12"
      ],
      "correctIndex": 1,
      "explanation": "Mitosis produces two genetically identical daughter cells, each with the same chromosome number as the parent cell — 46."
    },
    {
      "id": "MCQ-BIO-Y910-029",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following is an example of polygenic inheritance?",
      "options": [
        "ABO blood groups",
        "Huntington's disease",
        "Human skin colour",
        "Cystic fibrosis"
      ],
      "correctIndex": 2,
      "explanation": "Skin colour is controlled by multiple genes (polygenic), producing a continuous range of phenotypes. The other examples are controlled by a single gene."
    },
    {
      "id": "MCQ-BIO-Y910-049",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "During vigorous exercise, a student's muscles begin to ache and fatigue. Which process is most likely responsible?",
      "options": [
        "Aerobic respiration producing excess CO2",
        "Anaerobic respiration producing lactic acid",
        "Increased oxygen delivery to muscles",
        "Decreased heart rate"
      ],
      "correctIndex": 1,
      "explanation": "When oxygen supply is insufficient during intense exercise, muscles switch to anaerobic respiration, producing lactic acid. Lactic acid accumulation causes muscle fatigue and pain."
    },
    {
      "id": "MCQ-BIO-Y910-062",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following best explains why energy is lost between trophic levels?",
      "options": [
        "Energy is destroyed during feeding",
        "Energy is lost as heat through respiration, movement and waste",
        "Predators always eat less than their prey",
        "Energy is stored permanently in each organism"
      ],
      "correctIndex": 1,
      "explanation": "Only about 10% of energy is transferred between trophic levels. The rest is lost as heat through cellular respiration, used for movement, or lost in undigested waste."
    },
    {
      "id": "MCQ-BIO2-Y910-009",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following is NOT a condition required for Hardy-Weinberg equilibrium?",
      "options": [
        "Large population size",
        "Random mating",
        "Natural selection acting on the trait",
        "No migration into or out of the population"
      ],
      "correctIndex": 2,
      "explanation": "Hardy-Weinberg equilibrium requires: large population, random mating, no mutation, no migration, and NO natural selection. If selection acts on the trait, allele frequencies will change and equilibrium is not maintained."
    },
    {
      "id": "MCQ-BIO2-Y910-018",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of light colour on the rate of photosynthesis. Red and blue light produce the highest rates; green light produces the lowest. Which of the following correctly explains this?",
      "options": [
        "Chlorophyll absorbs red and blue light most strongly; it reflects green light",
        "Green light is more energetic than red light",
        "Chlorophyll absorbs all wavelengths equally",
        "Red light has the longest wavelength and most energy"
      ],
      "correctIndex": 0,
      "explanation": "Chlorophyll absorbs red (~680 nm) and blue (~430 nm) light most strongly for use in photosynthesis. Green light (~550 nm) is mostly reflected, which is why plants appear green. Reflected light cannot drive photosynthesis."
    },
    {
      "id": "MCQ-BIO2-Y910-028",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the growth of bacteria using a serial dilution technique. A 10⁻⁴ dilution produces 150 colonies on an agar plate. What is the original bacterial concentration?",
      "options": [
        "150 bacteria/mL",
        "1.5 × 10⁶ bacteria/mL",
        "1.5 × 10⁴ bacteria/mL",
        "150 × 10⁴ bacteria/mL"
      ],
      "correctIndex": 1,
      "explanation": "Colony count × dilution factor = original concentration. 150 × 10⁴ = 1.5 × 10⁶ bacteria/mL. Each colony on the plate represents one bacterium (colony forming unit) from the diluted sample."
    },
    {
      "id": "MCQ-CHEM-Y910-009",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student tests the reactivity of Group 1 metals with water. Which observation would be expected for potassium compared to sodium?",
      "options": [
        "Potassium reacts more slowly",
        "Potassium reacts more vigorously and may ignite",
        "Potassium does not react with water",
        "Potassium produces a different gas"
      ],
      "correctIndex": 1,
      "explanation": "Potassium is below sodium in Group 1. Its outer electron is further from the nucleus and more easily lost, making it more reactive. The reaction is vigorous enough to ignite the hydrogen produced."
    },
    {
      "id": "MCQ-CHEM-Y910-019",
      "section": "Science Reasoning",
      "topic": "Chemical Bonding",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the properties of a giant ionic lattice and a simple molecular substance. Which of the following is a correct comparison?",
      "options": [
        "Both have high melting points",
        "The ionic lattice has a high melting point; the molecular substance has a low melting point",
        "Both conduct electricity when solid",
        "The molecular substance has a higher melting point"
      ],
      "correctIndex": 1,
      "explanation": "Giant ionic lattices have high melting points due to strong electrostatic forces. Simple molecular substances have low melting points because only weak intermolecular forces need to be overcome."
    },
    {
      "id": "MCQ-CHEM-Y910-028",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "The Haber process produces ammonia: N₂ + 3H₂ ⇌ 2NH₃. The reaction is exothermic. Which conditions would maximise the yield of ammonia?",
      "options": [
        "High temperature and low pressure",
        "Low temperature and high pressure",
        "High temperature and high pressure",
        "Low temperature and low pressure"
      ],
      "correctIndex": 1,
      "explanation": "Low temperature favours the exothermic forward reaction (more product). High pressure favours the side with fewer moles of gas (2 moles products vs 4 moles reactants). In practice, a compromise temperature (~450°C) is used for acceptable rate."
    },
    {
      "id": "MCQ-CHEM-Y910-039",
      "section": "Science Reasoning",
      "topic": "Electrochemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why the percentage yield of a reaction is often less than 100%?",
      "options": [
        "The law of conservation of mass is violated",
        "Reactions are always incomplete, products may be lost during separation, or side reactions occur",
        "The molar mass calculations are always wrong",
        "Catalysts reduce the yield"
      ],
      "correctIndex": 1,
      "explanation": "Percentage yield is less than 100% due to incomplete reactions, loss of product during separation/purification, or competing side reactions that produce unwanted products."
    },
    {
      "id": "MCQ-CHEM-Y910-049",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student reacts ethanol with ethanoic acid in the presence of a sulfuric acid catalyst. Which type of reaction is this and what is the organic product?",
      "options": [
        "Addition reaction; ethane",
        "Esterification; ethyl ethanoate",
        "Fermentation; ethanol",
        "Hydrolysis; ethanoic acid"
      ],
      "correctIndex": 1,
      "explanation": "Esterification is the reaction between an alcohol and a carboxylic acid (with an acid catalyst) to produce an ester and water. Ethanol + ethanoic acid → ethyl ethanoate + water."
    },
    {
      "id": "MCQ-LAST-Y910-019",
      "section": "Science Reasoning",
      "topic": "Quantitative Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the hydration of ethene: C₂H₄ + H₂O → C₂H₅OH. This reaction requires a phosphoric acid catalyst and high temperature and pressure. Which type of reaction is this?",
      "options": [
        "Elimination",
        "Substitution",
        "Addition",
        "Condensation"
      ],
      "correctIndex": 2,
      "explanation": "Hydration of ethene is an addition reaction — water (H₂O) adds across the C=C double bond of ethene to produce ethanol. The double bond opens and both atoms of water are incorporated into the product."
    },
    {
      "id": "MCQ-CHEM2-Y910-016",
      "section": "Science Reasoning",
      "topic": "Corrosion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why aluminium does not corrode as readily as iron despite being a more reactive metal?",
      "options": [
        "Aluminium is less reactive than iron",
        "Aluminium forms a thin, adherent oxide layer (Al₂O₃) that protects the surface from further oxidation",
        "Aluminium is coated with zinc",
        "Aluminium does not react with oxygen"
      ],
      "correctIndex": 1,
      "explanation": "Aluminium reacts rapidly with oxygen to form a thin, dense, adherent layer of aluminium oxide (Al₂O₃). This layer is impermeable to oxygen and water, preventing further oxidation — unlike iron oxide (rust), which is porous and flaky."
    },
    {
      "id": "MCQ-TOPUP-Y910-021",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student calculates the work done pushing a 500 N box 3 m along a horizontal surface against a friction force of 200 N. What is the net work done on the box?",
      "options": [
        "1500 J",
        "900 J",
        "600 J",
        "300 J"
      ],
      "correctIndex": 2,
      "explanation": "Net work = net force × distance = (500 - 200) × 3 = 300 × 3 = 900 J. Wait — if the applied force is 500 N and friction is 200 N, net force = 300 N. Net work = 300 × 3 = 900 J."
    },
    {
      "id": "MCQ-PHYS-Y910-020",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the speed of sound by timing an echo from a wall 170 m away. The echo returns after 1 second. What is the speed of sound?",
      "options": [
        "85 m/s",
        "170 m/s",
        "340 m/s",
        "680 m/s"
      ],
      "correctIndex": 2,
      "explanation": "Sound travels to the wall and back — total distance = 2 × 170 = 340 m in 1 second. Speed = distance/time = 340/1 = 340 m/s."
    },
    {
      "id": "MCQ-PHYS-Y910-030",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains how a step-down transformer works?",
      "options": [
        "It uses a chemical reaction to reduce voltage",
        "Alternating current in the primary coil creates a changing magnetic field, which induces a lower voltage in the secondary coil with fewer turns",
        "It converts AC to DC",
        "It stores electrical energy"
      ],
      "correctIndex": 1,
      "explanation": "A transformer works by electromagnetic induction. AC in the primary creates a changing magnetic flux in the iron core, inducing an EMF in the secondary. Fewer turns on the secondary gives a lower output voltage."
    },
    {
      "id": "MCQ-PHYS-Y910-039",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student uses the equation v = H₀d to calculate the recession speed of a galaxy 500 Mpc away, where H₀ = 70 km/s/Mpc. What is the recession speed?",
      "options": [
        "35 000 km/s",
        "7 km/s",
        "500 km/s",
        "70 km/s"
      ],
      "correctIndex": 0,
      "explanation": "v = H₀ × d = 70 × 500 = 35 000 km/s. This is Hubble's law, which relates the recession speed of a galaxy to its distance."
    },
    {
      "id": "MCQ-EARTH-Y910-009",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the age of seafloor rocks at different distances from a mid-ocean ridge. Which of the following correctly describes the pattern?",
      "options": [
        "Rocks are oldest near the ridge",
        "Rocks are youngest near the ridge and get older with distance",
        "All rocks are the same age",
        "Age is unrelated to distance from the ridge"
      ],
      "correctIndex": 1,
      "explanation": "Seafloor spreading produces new oceanic crust at mid-ocean ridges. As new material is added, older crust moves away from the ridge. This produces a pattern of increasing age with distance from the ridge."
    },
    {
      "id": "MCQ-EARTH-Y910-018",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student uses a ruler with 1 mm graduations to measure the length of a leaf. Which of the following correctly states the appropriate uncertainty for a single measurement?",
      "options": [
        "±0.001 mm",
        "±0.5 mm",
        "±1 mm",
        "±5 mm"
      ],
      "correctIndex": 1,
      "explanation": "The uncertainty of a measurement made with an analogue instrument is typically ±half the smallest graduation. For a ruler with 1 mm graduations, uncertainty = ±0.5 mm."
    },
    {
      "id": "MCQ-EARTH-Y910-022",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the energy content of glucose and fat. Fat contains approximately twice the energy per gram. Which of the following correctly explains this?",
      "options": [
        "Fat molecules contain more water",
        "Fat molecules have a higher proportion of C-H bonds, which release more energy when oxidised",
        "Fat is denser than glucose",
        "Glucose contains nitrogen"
      ],
      "correctIndex": 1,
      "explanation": "Fat (lipid) molecules have a higher ratio of hydrogen to oxygen than carbohydrates. C-H bonds release more energy when oxidised than C-OH bonds, giving fat a higher energy density per gram."
    },
    {
      "id": "MCQ-Z-Y910-016",
      "section": "Science Reasoning",
      "topic": "Space and Astronomy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the motion of a satellite in circular orbit. Which of the following correctly describes the energy changes as the satellite moves to a lower orbit?",
      "options": [
        "Kinetic energy decreases; potential energy increases",
        "Kinetic energy increases; gravitational potential energy decreases; total mechanical energy decreases (energy lost to atmosphere)",
        "Both kinetic and potential energy increase",
        "Total mechanical energy is conserved in all orbits"
      ],
      "correctIndex": 1,
      "explanation": "Moving to a lower orbit: gravitational PE decreases (lower altitude). By the virial theorem, KE increases (faster orbital speed). However, total mechanical energy decreases because energy is lost to atmospheric drag. The satellite speeds up but loses total energy."
    },
    {
      "id": "MCQ-FINAL-Y910-014",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the biomass at each trophic level in a grassland ecosystem: grass 10 000 kg/ha, grasshoppers 1000 kg/ha, frogs 100 kg/ha, snakes 10 kg/ha. Which of the following correctly describes this data?",
      "options": [
        "A pyramid of numbers",
        "An inverted pyramid of biomass",
        "A pyramid of biomass showing approximately 10% energy transfer between levels",
        "A pyramid of energy showing 90% efficiency"
      ],
      "correctIndex": 2,
      "explanation": "The data shows biomass decreasing by approximately 90% at each trophic level — consistent with the 10% rule of energy transfer. This forms a pyramid of biomass with the largest biomass at the producer level."
    },
    {
      "id": "MCQ-EXTRA-Y910-017",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the distribution of magnetic anomalies on the seafloor. Symmetric stripes of normal and reversed magnetism are found on either side of a mid-ocean ridge. Which of the following correctly interprets this data?",
      "options": [
        "The seafloor is stationary",
        "New seafloor is continuously created at the ridge; as it cools, it records the current magnetic field orientation. Periodic reversals of Earth's magnetic field create the symmetric striped pattern",
        "The stripes are caused by different rock types",
        "Magnetic anomalies are unrelated to plate tectonics"
      ],
      "correctIndex": 1,
      "explanation": "Seafloor spreading: magma erupts at mid-ocean ridges and cools, recording Earth's magnetic field direction. Periodic geomagnetic reversals create alternating normal/reversed stripes. The symmetric pattern on both sides of the ridge is strong evidence for seafloor spreading and plate tectonics."
    },
    {
      "id": "MCQ-BIO-Y910-010",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which structure controls the movement of substances between the nucleus and cytoplasm?",
      "options": [
        "Nuclear membrane",
        "Cell membrane",
        "Endoplasmic reticulum",
        "Golgi apparatus"
      ],
      "correctIndex": 0,
      "explanation": "The nuclear envelope (nuclear membrane) contains nuclear pores that regulate the transport of molecules such as mRNA and proteins between the nucleus and cytoplasm."
    },
    {
      "id": "MCQ-BIO-Y910-030",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses a pedigree and finds that an autosomal recessive condition appears in every generation. Which statement is most likely correct?",
      "options": [
        "The condition is X-linked dominant",
        "All individuals in the pedigree are carriers",
        "The condition is autosomal dominant",
        "The condition skips generations"
      ],
      "correctIndex": 2,
      "explanation": "If a condition appears in every generation, it is most consistent with autosomal dominant inheritance, where one copy of the allele is sufficient to cause the condition."
    },
    {
      "id": "MCQ-BIO-Y910-050",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of caffeine on heart rate using Daphnia. Results show heart rate increases with caffeine concentration. Which system is caffeine most likely affecting?",
      "options": [
        "Digestive system",
        "Endocrine system",
        "Nervous system",
        "Immune system"
      ],
      "correctIndex": 2,
      "explanation": "Caffeine is a stimulant that affects the nervous system, blocking adenosine receptors and increasing neural activity, which leads to increased heart rate."
    },
    {
      "id": "MCQ-BIO-Y910-063",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A population of bacteria is exposed to an antibiotic. Most die, but a few survive and reproduce. After several generations, the population is resistant. Which process explains this?",
      "options": [
        "Lamarckian inheritance",
        "Genetic drift",
        "Natural selection",
        "Mutation only"
      ],
      "correctIndex": 2,
      "explanation": "This is natural selection: pre-existing random mutations gave some bacteria resistance. These individuals survived and passed on the resistance allele, increasing its frequency in the population."
    },
    {
      "id": "MCQ-BIO2-Y910-010",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the DNA of a chimpanzee and a human. They share approximately 98.7% of their DNA sequence. Which of the following is the most appropriate interpretation?",
      "options": [
        "Humans evolved from chimpanzees",
        "Humans and chimpanzees share a recent common ancestor and diverged relatively recently in evolutionary time",
        "The 1.3% difference is insignificant",
        "Chimpanzees and humans are the same species"
      ],
      "correctIndex": 1,
      "explanation": "High DNA similarity indicates recent common ancestry. Humans and chimpanzees diverged from a common ancestor approximately 6-7 million years ago. The 1.3% difference, while small, accounts for significant phenotypic differences due to regulatory gene changes."
    },
    {
      "id": "MCQ-BIO2-Y910-019",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates stomatal density on the upper and lower surfaces of a leaf. The lower surface has significantly more stomata. Which of the following correctly explains this adaptation?",
      "options": [
        "Upper surface needs more stomata for light absorption",
        "Lower surface stomata reduce water loss by avoiding direct sunlight while still allowing gas exchange",
        "Upper surface has more chloroplasts",
        "Lower surface is thicker"
      ],
      "correctIndex": 1,
      "explanation": "Stomata on the lower (abaxial) surface are shaded from direct sunlight, reducing the temperature and water vapour gradient, which helps minimise water loss. Gas exchange can still occur effectively through the lower surface."
    },
    {
      "id": "MCQ-BIO2-Y910-029",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the difference between a bacteriostatic and a bactericidal antibiotic?",
      "options": [
        "Both kill bacteria",
        "Bacteriostatic antibiotics inhibit bacterial growth; bactericidal antibiotics kill bacteria",
        "Bactericidal antibiotics inhibit growth; bacteriostatic antibiotics kill bacteria",
        "Both only inhibit growth"
      ],
      "correctIndex": 1,
      "explanation": "Bacteriostatic antibiotics (e.g. tetracycline) inhibit bacterial reproduction without killing them, relying on the immune system to clear the infection. Bactericidal antibiotics (e.g. penicillin) directly kill bacteria by disrupting cell wall synthesis or other vital processes."
    },
    {
      "id": "MCQ-CHEM-Y910-010",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why noble gases are unreactive?",
      "options": [
        "They have no electrons",
        "They have a full outer electron shell",
        "They are all gases at room temperature",
        "They have very high atomic masses"
      ],
      "correctIndex": 1,
      "explanation": "Noble gases have a complete outer electron shell (2 for helium, 8 for others), giving them maximum stability and no tendency to gain, lose or share electrons."
    },
    {
      "id": "MCQ-CHEM-Y910-020",
      "section": "Science Reasoning",
      "topic": "Chemical Bonding",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following molecules has a non-polar covalent bond?",
      "options": [
        "HCl",
        "H₂O",
        "NH₃",
        "Cl₂"
      ],
      "correctIndex": 3,
      "explanation": "Cl₂ consists of two identical atoms with equal electronegativity, so electrons are shared equally — a non-polar covalent bond. The other molecules have polar bonds due to electronegativity differences."
    },
    {
      "id": "IC-22-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how vaccines are developed and tested before being approved for public use.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Vaccine development follows a rigorous multi-stage process before approval. Preclinical testing: the vaccine candidate is tested in cell cultures and animal models to assess safety and immune response. Phase I trials: small groups of healthy volunteers test safety and dosage. Phase II trials: larger groups assess immune response, dosage optimisation and short-term safety. Phase III trials: thousands of participants in randomised, double-blind, placebo-controlled trials assess efficacy and detect rare adverse events. Regulatory review: independent agencies (e.g. TGA, FDA) scrutinise all trial data before approval. Post-approval surveillance (Phase IV) monitors long-term safety in millions of recipients. This process typically takes 10-15 years, though platform technologies (mRNA, viral vector) can accelerate development while maintaining safety standards. The rigour of this process is why approved vaccines have strong safety and efficacy profiles."
    },
    {
      "id": "IC-23-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the role of enzymes in digestion and how temperature affects their function.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Enzymes are biological catalysts — proteins that accelerate metabolic reactions by lowering activation energy. In digestion, specific enzymes break down food macromolecules: amylase (in saliva and pancreatic juice) hydrolyses starch to maltose; proteases (pepsin in stomach, trypsin in small intestine) hydrolyse proteins to amino acids; lipase (pancreatic) hydrolyses fats to fatty acids and glycerol. Each enzyme has an active site complementary to its specific substrate — the lock-and-key or induced-fit model. Temperature profoundly affects enzyme activity: increasing temperature increases kinetic energy and collision frequency, raising reaction rate up to the optimum (~37°C in humans). Above the optimum, thermal energy disrupts the hydrogen and ionic bonds maintaining the enzyme's tertiary structure — the active site denatures and activity falls sharply. This explains why high fever is dangerous."
    },
    {
      "id": "IC-24-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the greenhouse effect works and distinguish it from global warming.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The greenhouse effect is a natural atmospheric process essential for life on Earth. Solar radiation (short wavelength) passes through the atmosphere and warms the surface. The surface emits infrared radiation (long wavelength), which is absorbed by greenhouse gases (CO2, H2O, CH4, N2O) and re-emitted in all directions, warming the lower atmosphere. Without the natural greenhouse effect, Earth's average temperature would be approximately -18°C rather than +15°C. Global warming refers specifically to the enhanced greenhouse effect caused by human activities increasing greenhouse gas concentrations. The distinction is important: the greenhouse effect is natural and necessary; global warming is the human-caused intensification of this effect. Rising CO2 from fossil fuel combustion is the primary driver, trapping additional heat and raising global average temperatures."
    },
    {
      "id": "IC-25-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain what is meant by a food web and why removing one species can affect the whole ecosystem.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "A food web represents the complex feeding relationships within an ecosystem — multiple interconnected food chains. Removing one species can trigger cascading effects throughout the web. If a keystone predator is removed, its prey population explodes (trophic release), overgrazing vegetation and reducing habitat for other species. The removal of wolves from Yellowstone caused elk populations to increase, overgrazing riverbanks, destabilising stream banks and reducing biodiversity. Conversely, removing a primary producer reduces food availability for all consumers above it. Invasive species can disrupt food webs by outcompeting native species or introducing novel predator-prey relationships. The interconnectedness of food webs means that ecosystem management must consider indirect effects — removing or adding one species rarely affects only that species but ripples through the entire community."
    },
    {
      "id": "IC-26-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how scientists use the fossil record to understand evolution.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Fossil evidence provides a chronological record of life on Earth. Sedimentary rock layers (strata) preserve organisms in sequence — older fossils in deeper layers, younger in upper layers. Transitional fossils show intermediate forms between ancestral and descendant species: Archaeopteryx displays both reptilian features (teeth, clawed wings) and avian features (feathers, wishbone), linking dinosaurs to birds. The fossil record shows progressive complexity over time — simple prokaryotes appear first, followed by eukaryotes, then multicellular organisms, then vertebrates. Gaps in the record reflect the rarity of fossilisation rather than absence of transitional forms. Radiometric dating assigns absolute ages to fossils using known decay rates of radioactive isotopes. Together, the fossil record provides compelling evidence for evolution — species change over time and new species arise from ancestral forms."
    },
    {
      "id": "IC-27-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain the difference between mitosis and meiosis and when each is used.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Mitosis produces two genetically identical daughter cells for growth, repair and asexual reproduction. It maintains the diploid chromosome number (2n). Meiosis produces four genetically unique haploid cells (n) for sexual reproduction. Key differences: meiosis involves two divisions (meiosis I and II); homologous chromosomes pair up and exchange segments during crossing over in prophase I, generating genetic variation; independent assortment of homologous chromosomes further increases diversity. Mitosis is used for: growth of multicellular organisms, replacement of worn-out cells (skin, blood), and wound healing. Meiosis is used exclusively for: production of gametes (sperm and eggs in animals; spores in plants and fungi). The genetic variation produced by meiosis is the raw material for natural selection and evolution."
    },
    {
      "id": "IC-28-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the kidney maintains water balance in the human body.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The kidney maintains water balance (osmoregulation) through the nephron. Blood is filtered under pressure at the glomerulus — water, glucose, urea and ions pass into the Bowman's capsule. The proximal convoluted tubule reabsorbs all glucose, most water and ions by active transport and osmosis. The loop of Henle creates a concentration gradient in the medulla by actively pumping ions out of the ascending limb. The distal convoluted tubule and collecting duct fine-tune water reabsorption under hormonal control. When blood osmolarity rises (dehydration), the hypothalamus detects this and triggers ADH release from the posterior pituitary. ADH increases the permeability of the collecting duct by inserting aquaporin channels, increasing water reabsorption and producing concentrated urine. When hydrated, ADH levels fall and dilute urine is produced."
    },
    {
      "id": "IC-29-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the ethical issues surrounding animal testing in scientific research.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Animal testing in scientific research presents a genuine ethical dilemma. The scientific case for animal testing is strong: animal models have contributed to virtually every major medical advance of the past century, including vaccines, antibiotics, surgical techniques and cancer treatments. Physiological similarities between humans and other mammals make animal data relevant to human medicine. However, animals are sentient beings capable of suffering, and their use raises serious moral concerns. The 3Rs framework — Replace (use alternatives where possible), Reduce (minimise numbers used) and Refine (minimise suffering) — provides an ethical framework for responsible use. Alternatives including cell cultures, organoids, computer models and human tissue are increasingly available. The scientific community broadly accepts that animal testing should continue only where no adequate alternative exists, with rigorous welfare standards enforced."
    },
    {
      "id": "IC-30-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how sound waves travel and why they cannot travel through a vacuum.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Sound is a longitudinal mechanical wave — particles vibrate parallel to the direction of wave propagation, creating alternating compressions and rarefactions. Sound requires a medium (solid, liquid or gas) because it is transmitted by particle-to-particle collisions. In a vacuum, there are no particles to collide, so sound cannot propagate — explaining why space is silent. Sound travels fastest in solids (particles closely packed, strong intermolecular forces transmit vibrations efficiently), slower in liquids and slowest in gases. In air at 20°C, sound travels at approximately 343 m/s. Frequency determines pitch; amplitude determines loudness. The human ear detects frequencies from approximately 20 Hz to 20 000 Hz. Ultrasound (above 20 000 Hz) is used in medical imaging and sonar because it can be focused into narrow beams and reflected from tissue boundaries."
    },
    {
      "id": "IC-31-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe the structure of DNA and explain how it stores genetic information.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "DNA (deoxyribonucleic acid) is a double-stranded helix composed of nucleotides. Each nucleotide contains a deoxyribose sugar, a phosphate group and one of four nitrogenous bases: adenine (A), thymine (T), guanine (G) or cytosine (C). The two strands are held together by hydrogen bonds between complementary base pairs: A pairs with T (2 hydrogen bonds); G pairs with C (3 hydrogen bonds). The sequence of bases along one strand encodes genetic information. Each group of three bases (codon) specifies one amino acid. The entire sequence of codons in a gene specifies the amino acid sequence of a protein. The double helix structure, discovered by Watson and Crick in 1953 using X-ray crystallography data from Franklin and Wilkins, explains how DNA can be accurately replicated — each strand serves as a template for a new complementary strand."
    },
    {
      "id": "AR-8-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures pH of solutions A (pH 3), B (pH 7) and C (pH 11). Interpret these results and explain what they indicate about each solution.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the pH of three unknown solutions.\nObservation: Solution A (pH 3) is acidic; Solution B (pH 7) is neutral; Solution C (pH 11) is alkaline.\nExplanation: The pH scale measures hydrogen ion concentration: pH = -log[H⁺]. pH 3 indicates [H⁺] = 10⁻³ mol/L — strongly acidic. pH 7 indicates equal H⁺ and OH⁻ concentrations — neutral. pH 11 indicates [H⁺] = 10⁻¹¹ mol/L — strongly alkaline. Each unit represents a tenfold change in [H⁺].\nConclusion: The three solutions span the pH scale from acidic to alkaline. Solution A could be vinegar or lemon juice; B could be pure water; C could be bleach or ammonia solution."
    },
    {
      "id": "AR-9-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A graph shows predator and prey populations oscillating over time with predator peaks following prey peaks. Analyse this data and explain the relationship.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To analyse predator-prey population dynamics over time.\nObservation: Predator and prey populations oscillate with predator peaks following prey peaks by approximately 1-2 years.\nExplanation: When prey is abundant, predators have plentiful food, improving survival and reproduction — predator population grows. Increased predation reduces prey numbers. With less food, predator survival declines — predator population falls. Reduced predation allows prey to recover. The time lag occurs because population responses take time — generation time delays the predator response to prey changes.\nConclusion: Predator-prey populations show classic oscillating cycles. The time lag between prey and predator peaks reflects the time required for population growth responses. This demonstrates the interdependence of species in ecosystems."
    },
    {
      "id": "AR-10-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Adding fertiliser increases crop yield up to a point, after which yield declines. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of fertiliser concentration on crop yield.\nObservation: Yield increased to a maximum then declined at high concentrations.\nExplanation: Moderate fertiliser supplies limiting nutrients (nitrogen, phosphorus, potassium), increasing photosynthesis and growth. At optimal concentration, all nutrient requirements are met. Excess fertiliser increases soil solute concentration, lowering soil water potential below that of root cells — water leaves roots by osmosis (plasmolysis), causing wilting and reduced yield.\nConclusion: An optimal fertiliser concentration exists beyond which yield is reduced due to osmotic stress. This has practical implications for agriculture — over-fertilisation wastes resources and reduces yield."
    },
    {
      "id": "AR-11-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Countries with higher vaccination rates have lower rates of the target disease. Analyse this data and discuss what conclusions can be drawn.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between vaccination rate and disease incidence.\nObservation: Countries with higher vaccination rates have significantly lower rates of the target disease.\nExplanation: Vaccination stimulates immune memory without causing disease. High vaccination rates create herd immunity — when a sufficient proportion of the population is immune, transmission chains are broken, protecting unvaccinated individuals. The threshold for herd immunity varies by disease (measles requires ~95% coverage).\nConclusion: The negative correlation between vaccination rate and disease incidence supports vaccine effectiveness. However, correlation does not prove causation — confounding factors such as healthcare quality must be considered. The pattern is consistent across multiple independent datasets, strengthening the causal interpretation."
    },
    {
      "id": "AR-12-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates how pendulum mass affects its period. Results show no significant change. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of pendulum mass on its period.\nObservation: Period remained constant regardless of mass across all trials.\nExplanation: Pendulum period is determined by T = 2π√(L/g), where L is length and g is gravitational acceleration. Mass does not appear in this equation. Gravitational force on a heavier pendulum is greater, but so is its inertia — these effects cancel exactly, leaving period independent of mass.\nConclusion: Mass does not affect pendulum period, consistent with theoretical prediction. This result demonstrates that gravitational acceleration acts equally on all masses — a fundamental principle confirmed by Galileo's experiments."
    },
    {
      "id": "AR-13-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Increasing salt concentration in soil reduces plant growth. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of soil salt concentration on plant growth.\nObservation: Growth decreased as salt concentration increased.\nExplanation: High salt concentration lowers soil water potential below that of root cells. Water moves out of root cells by osmosis (down the water potential gradient), causing plasmolysis. Dehydrated cells cannot maintain turgor pressure, wilting occurs, and metabolic processes are disrupted. High salt also causes ion toxicity.\nConclusion: Excess soil salinity inhibits plant growth through osmotic stress and ion toxicity. This explains why agricultural land can become unproductive through salinisation from irrigation with mineral-rich water."
    },
    {
      "id": "AR-14-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A cooling curve shows a substance cooling from liquid to solid with a flat section at 45°C. Interpret this graph and explain the flat section.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the cooling curve of a substance undergoing a phase change.\nObservation: Temperature decreased steadily, then remained constant at 45°C for a period, then continued to decrease.\nExplanation: The flat section at 45°C represents the freezing point of the substance. During this phase change, the substance releases latent heat of fusion at a constant temperature as liquid converts to solid. The energy released during bond formation exactly compensates for heat loss to the surroundings, maintaining constant temperature until all liquid has solidified.\nConclusion: The flat section indicates a phase change at the freezing point. Temperature only continues to fall once all liquid has solidified and no more latent heat is being released."
    },
    {
      "id": "AR-15-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Areas with higher deforestation rates have higher atmospheric CO2 levels. Analyse this relationship and discuss implications.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between deforestation rate and atmospheric CO2 levels.\nObservation: Areas with higher deforestation rates have higher atmospheric CO2 levels.\nExplanation: Forests store carbon in biomass. When trees are burned or decompose, stored carbon is released as CO2. Deforestation also reduces the number of trees available to absorb CO2 through photosynthesis. Both effects increase atmospheric CO2 concentration.\nConclusion: Deforestation and atmospheric CO2 are positively correlated. This relationship has implications for climate change — protecting and restoring forests is a key strategy for reducing atmospheric CO2. However, correlation does not prove causation; other factors (industrial emissions, geography) may also contribute."
    },
    {
      "id": "AR-16-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "White light passing through a prism produces a spectrum. Analyse this observation and explain the physics involved.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the dispersion of white light through a prism.\nObservation: White light entering the prism produced a continuous spectrum of colours from red to violet on the other side.\nExplanation: White light is composed of all visible wavelengths. When light enters the glass prism, it refracts (changes speed and direction). Different wavelengths travel at different speeds in glass — violet light slows more than red light (higher refractive index for shorter wavelengths). This differential refraction (dispersion) separates the wavelengths, producing a spectrum.\nConclusion: White light is composed of multiple wavelengths that are separated by the prism due to their different refractive indices in glass. This demonstrates that white light is not a single colour but a mixture of all visible wavelengths."
    },
    {
      "id": "AR-17-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A metal rod expands measurably when heated. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate thermal expansion of a metal rod.\nObservation: Rod length increased measurably with temperature in a consistent, approximately linear relationship.\nExplanation: Heating increases the kinetic energy of metal atoms, causing them to vibrate more vigorously and occupy more space. The increased atomic vibration pushes atoms further apart on average, increasing the macroscopic dimensions of the rod. The coefficient of linear thermal expansion (α) describes this relationship: ΔL = αLΔT.\nConclusion: Metals expand when heated due to increased atomic vibration, consistent with thermal expansion theory. This has practical implications for engineering — bridges, railway tracks and pipelines must accommodate thermal expansion through expansion joints."
    }
  ]
};
