import type { PracticeTest } from "@/types/test";

export const fullTest5: PracticeTest = {
  "id": "full-5",
  "title": "Full Test 5",
  "subtitle": "Full JMSS format — 60 MCQ (Section A) + 10 written (Section B) + 10 written (Section C)",
  "kind": "full",
  "released": true,
  "durationSec": 9000,
  "questions": [
    {
      "id": "MCQ-TOPUP-Y910-002",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of surface area to volume ratio on diffusion. Small cubes of agar (containing indicator) are placed in acid. Smaller cubes change colour throughout faster. Which of the following correctly explains this?",
      "options": [
        "Smaller cubes have less surface area",
        "Smaller cubes have a higher surface area to volume ratio, so diffusion reaches the centre faster",
        "Smaller cubes contain less indicator",
        "Larger cubes have faster diffusion rates"
      ],
      "correctIndex": 1,
      "explanation": "As cell size decreases, the surface area to volume ratio increases. A higher SA:V ratio means diffusion distances are shorter and the surface area available for exchange is proportionally greater, allowing faster exchange of substances."
    },
    {
      "id": "MCQ-TOPUP-Y910-007",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates incomplete dominance in snapdragons. Red (RR) × White (WW) gives all pink (RW) offspring. What phenotypic ratio results from crossing two pink plants (RW × RW)?",
      "options": [
        "All pink",
        "1 red : 2 pink : 1 white",
        "3 pink : 1 white",
        "1 red : 1 white"
      ],
      "correctIndex": 1,
      "explanation": "RW × RW gives 1 RR (red) : 2 RW (pink) : 1 WW (white). In incomplete dominance, the heterozygote shows an intermediate phenotype, and the F2 ratio is 1:2:1 phenotypic (same as genotypic)."
    },
    {
      "id": "MCQ-FINAL-Y910-002",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of exercise on tidal volume and breathing rate. Both increase during exercise. Which of the following correctly explains why CO2 levels in blood trigger this response?",
      "options": [
        "CO2 directly stimulates lung expansion",
        "Rising CO2 lowers blood pH, detected by chemoreceptors in the medulla oblongata and aortic arch, which signal the diaphragm and intercostal muscles to increase rate and depth of breathing",
        "CO2 stimulates the heart only",
        "Rising O2 levels trigger increased breathing"
      ],
      "correctIndex": 1,
      "explanation": "During exercise, CO2 production increases. CO2 dissolves in blood forming carbonic acid, lowering pH. Chemoreceptors detect this pH drop and signal the respiratory centre in the medulla oblongata to increase breathing rate and tidal volume."
    },
    {
      "id": "MCQ-BIO-Y910-074",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the population of a species over time and finds it follows a logistic growth curve. What limits population growth in the logistic model?",
      "options": [
        "Only predation",
        "Only food supply",
        "Carrying capacity — the maximum population the environment can sustain",
        "Temperature only"
      ],
      "correctIndex": 2,
      "explanation": "Logistic growth occurs when a population approaches the carrying capacity (K) of its environment. As resources become limiting, birth rate falls and death rate rises, slowing growth."
    },
    {
      "id": "MCQ-E19-015",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of abscisic acid (ABA) on stomatal closure during drought. ABA causes stomata to close. Which of the following correctly describes the mechanism?",
      "options": [
        "ABA directly closes stomata mechanically",
        "ABA triggers K⁺ efflux from guard cells, reducing their osmotic potential; water leaves by osmosis, guard cells become flaccid and stomata close",
        "ABA increases photosynthesis",
        "ABA increases transpiration"
      ],
      "correctIndex": 1,
      "explanation": "ABA (stress hormone) triggers signalling cascades in guard cells that activate K⁺ channels, causing K⁺ to leave. This reduces the osmotic potential of guard cells, causing water to leave by osmosis. Guard cells become flaccid, closing the stomatal pore and reducing water loss."
    },
    {
      "id": "MCQ-FINAL-Y910-021",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the electrolysis of copper sulfate solution using inert (platinum) electrodes. Which of the following correctly describes the products at each electrode?",
      "options": [
        "Copper at anode; oxygen at cathode",
        "Copper at cathode; oxygen at anode",
        "Hydrogen at cathode; chlorine at anode",
        "Oxygen at both electrodes"
      ],
      "correctIndex": 1,
      "explanation": "At the cathode (negative), Cu²⁺ ions are reduced: Cu²⁺ + 2e⁻ → Cu (copper deposited). At the anode (positive), water is oxidised: 2H₂O → O₂ + 4H⁺ + 4e⁻ (oxygen gas produced). With inert electrodes, the anode cannot dissolve."
    },
    {
      "id": "MCQ-LAST-Y910-025",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates nuclear fusion in stars. Which of the following correctly describes the conditions required for fusion to occur?",
      "options": [
        "Low temperature and low pressure",
        "Extremely high temperature (~10⁷ K) and pressure to overcome electrostatic repulsion between nuclei",
        "Room temperature and atmospheric pressure",
        "High temperature and low pressure"
      ],
      "correctIndex": 1,
      "explanation": "Nuclear fusion requires extremely high temperatures (~10⁷ K for hydrogen fusion) to give nuclei sufficient kinetic energy to overcome the electrostatic repulsion between their positive charges. High pressure (density) increases collision frequency. These conditions exist in stellar cores."
    },
    {
      "id": "MCQ-MORE-Y910-026",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the relationship between pressure and volume of a gas at constant temperature. Doubling the pressure halves the volume. Which law describes this?",
      "options": [
        "Charles's law",
        "Boyle's law — at constant temperature, pressure and volume are inversely proportional (PV = constant)",
        "Gay-Lussac's law",
        "Avogadro's law"
      ],
      "correctIndex": 1,
      "explanation": "Boyle's law: P₁V₁ = P₂V₂ at constant temperature. Pressure and volume are inversely proportional. Doubling pressure halves volume. This reflects the increased frequency of molecular collisions with the container walls at smaller volume."
    },
    {
      "id": "MCQ-LAST-Y910-028",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the net primary productivity (NPP) of a tropical rainforest and a desert. The rainforest has much higher NPP. Which of the following correctly explains this?",
      "options": [
        "Deserts have more sunlight",
        "Tropical rainforests have high temperature, rainfall and sunlight year-round, maximising photosynthesis; deserts are limited by water availability",
        "Deserts have more nutrients",
        "Rainforests have fewer plants"
      ],
      "correctIndex": 1,
      "explanation": "Net primary productivity is the rate of biomass production by plants. Tropical rainforests have optimal conditions (warmth, water, light) for photosynthesis year-round. Deserts are severely limited by water — the primary limiting factor for photosynthesis and plant growth."
    },
    {
      "id": "MCQ-Z-Y910-018",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of a magnetic field on a beam of electrons. The beam curves. Which of the following correctly explains this?",
      "options": [
        "Electrons are neutral and should not be affected",
        "Electrons are negatively charged; the magnetic force (F = qvB) acts perpendicular to both velocity and field, causing circular motion",
        "Electrons are attracted to the magnetic poles",
        "The magnetic field accelerates electrons along the field lines"
      ],
      "correctIndex": 1,
      "explanation": "Moving charged particles experience a magnetic force F = qvB perpendicular to both their velocity and the magnetic field (Fleming's left-hand rule for negative charges). This perpendicular force causes circular motion without doing work (speed unchanged, direction changes)."
    },
    {
      "id": "MCQ-X-Y910-024",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of deforestation on local water cycles. Rainfall decreases after large-scale deforestation. Which of the following correctly explains this?",
      "options": [
        "Trees block rainfall",
        "Trees release water vapour through transpiration, contributing to local humidity and rainfall; removing trees reduces transpiration, decreasing atmospheric moisture and local precipitation",
        "Deforestation increases river flow",
        "Trees absorb rainfall before it reaches the ground"
      ],
      "correctIndex": 1,
      "explanation": "Forests contribute significantly to local water cycles through transpiration — releasing water vapour that contributes to cloud formation and precipitation. Large-scale deforestation reduces transpiration, lowering atmospheric humidity and reducing local rainfall, contributing to regional drying."
    },
    {
      "id": "MCQ-MORE-Y910-034",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the extension of a spring 10 times and gets a mean of 4.5 cm with a standard deviation of 0.2 cm. Which of the following correctly describes what the standard deviation tells us?",
      "options": [
        "The range of all measurements",
        "The spread of measurements around the mean — smaller standard deviation indicates greater precision",
        "The accuracy of the measurements",
        "The systematic error"
      ],
      "correctIndex": 1,
      "explanation": "Standard deviation measures the spread of data around the mean. A small standard deviation indicates measurements are clustered closely (precise). A large standard deviation indicates high variability. It does not indicate accuracy (closeness to the true value)."
    },
    {
      "id": "MCQ-TOPUP-Y910-038",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of ocean acidification on the shell thickness of marine snails over 10 years. Shell thickness decreases as pH decreases. Which of the following correctly explains the mechanism?",
      "options": [
        "Lower pH increases calcium availability",
        "Lower pH reduces carbonate ion concentration, making it harder for snails to precipitate calcium carbonate (CaCO₃) for shell formation",
        "Lower pH increases shell growth",
        "Snails do not use calcium carbonate"
      ],
      "correctIndex": 1,
      "explanation": "Shell formation requires calcium carbonate (CaCO₃). Ocean acidification reduces carbonate ion (CO₃²⁻) concentration. With less carbonate available, snails cannot maintain shell formation rates, producing thinner shells that are more vulnerable to dissolution and predation."
    },
    {
      "id": "MCQ-LAST-Y910-034",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student plots a calibration curve for a colorimeter by measuring absorbance of known concentrations of a dye. The curve is linear between 0 and 0.5 mol/L. An unknown sample gives absorbance of 0.35. Which of the following correctly describes how to find the concentration?",
      "options": [
        "Extrapolate beyond the linear range",
        "Read the concentration corresponding to absorbance 0.35 from the linear portion of the calibration curve (interpolation)",
        "Use the highest concentration on the curve",
        "Divide absorbance by the gradient"
      ],
      "correctIndex": 1,
      "explanation": "Interpolation: reading a value within the range of measured data from a calibration curve. The unknown absorbance (0.35) falls within the linear range, so the corresponding concentration can be read directly from the curve with confidence."
    },
    {
      "id": "MCQ-TOPUP-Y910-003",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student observes cells dividing under a microscope. In which phase of mitosis are chromosomes most clearly visible and aligned at the cell equator?",
      "options": [
        "Prophase",
        "Metaphase",
        "Anaphase",
        "Telophase"
      ],
      "correctIndex": 1,
      "explanation": "During metaphase, chromosomes are maximally condensed (most visible) and aligned at the metaphase plate (cell equator) by spindle fibres. This is the phase used for karyotyping."
    },
    {
      "id": "MCQ-TOPUP-Y910-008",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student studies a gene with two alleles where both are expressed simultaneously in the heterozygote. A cow with genotype I^A I^B has both red and white hairs. Which term describes this inheritance pattern?",
      "options": [
        "Incomplete dominance",
        "Codominance",
        "Sex linkage",
        "Epistasis"
      ],
      "correctIndex": 1,
      "explanation": "Codominance: both alleles are fully expressed simultaneously in the heterozygote. The cow shows both red and white hairs (roan coat) — neither allele is dominant over the other."
    },
    {
      "id": "MCQ-FINAL-Y910-003",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the structure of a capillary with an artery. Which of the following correctly describes a key structural difference that suits each vessel to its function?",
      "options": [
        "Capillaries have thick muscular walls; arteries have thin walls",
        "Arteries have thick elastic muscular walls to withstand high pressure; capillaries are one cell thick to allow rapid diffusion of substances",
        "Capillaries carry blood at high pressure",
        "Arteries allow diffusion of oxygen into tissues"
      ],
      "correctIndex": 1,
      "explanation": "Arteries carry blood at high pressure from the heart — thick elastic walls absorb and maintain pressure. Capillaries are the site of exchange — walls are one endothelial cell thick, minimising diffusion distance for O2, CO2, glucose and waste products."
    },
    {
      "id": "MCQ-BIO-Y910-075",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why genetic diversity within a population is important for long-term survival?",
      "options": [
        "Genetic diversity reduces mutation rate",
        "Greater genetic diversity increases the likelihood that some individuals will survive environmental changes",
        "Genetic diversity reduces competition",
        "Genetic diversity prevents predation"
      ],
      "correctIndex": 1,
      "explanation": "Genetic diversity provides the raw material for natural selection. If the environment changes, a genetically diverse population is more likely to contain individuals with traits suited to the new conditions."
    },
    {
      "id": "MCQ-FINAL-Y910-022",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student calculates the theoretical yield of a reaction and finds the actual yield is 75%. Which of the following correctly explains why the actual yield is less than 100%?",
      "options": [
        "The law of conservation of mass is violated",
        "Reactions may be incomplete, products may be lost during separation, or side reactions may occur",
        "The molar mass calculations are incorrect",
        "Catalysts always reduce yield"
      ],
      "correctIndex": 1,
      "explanation": "Percentage yield < 100% because: reactions may not go to completion (reversible reactions); product is lost during filtration, evaporation or transfer; side reactions produce unwanted products. These are practical limitations, not violations of conservation of mass."
    },
    {
      "id": "MCQ-DONE-Y910-013",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the reaction of chlorine with methane in UV light. Which type of reaction occurs and what is the mechanism?",
      "options": [
        "Addition reaction; ionic mechanism",
        "Free radical substitution; UV light generates chlorine radicals that substitute hydrogen atoms in methane",
        "Elimination reaction; acid-base mechanism",
        "Nucleophilic substitution; polar mechanism"
      ],
      "correctIndex": 1,
      "explanation": "Alkanes undergo free radical substitution with halogens in UV light. UV photons split Cl₂ into chlorine radicals (Cl•). These abstract H from CH₄, producing CH₃• which reacts with Cl₂ to give CH₃Cl and another Cl•, propagating the chain reaction."
    },
    {
      "id": "MCQ-X-Y910-016",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the motion of a ball thrown vertically upward. At the highest point, which of the following correctly describes the ball's velocity and acceleration?",
      "options": [
        "Velocity = 0; acceleration = 0",
        "Velocity = 0; acceleration = 9.8 m/s² downward",
        "Velocity = maximum; acceleration = 0",
        "Velocity = 0; acceleration = 9.8 m/s² upward"
      ],
      "correctIndex": 1,
      "explanation": "At the highest point, the ball momentarily stops (velocity = 0). However, gravity still acts — acceleration = g = 9.8 m/s² downward. Acceleration is not zero at the highest point; only velocity is zero."
    },
    {
      "id": "MCQ-LAST-Y910-029",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of introducing a new plant species to an ecosystem. The new species spreads rapidly and reduces native plant diversity by 60%. Which of the following correctly explains this?",
      "options": [
        "The new species improves soil quality",
        "The invasive species outcompetes native plants for resources (light, water, nutrients) and may lack natural predators or pathogens that would control its population in its native range",
        "Native plants are less adapted to the environment",
        "The new species increases biodiversity"
      ],
      "correctIndex": 1,
      "explanation": "Invasive species often lack the natural predators, parasites and pathogens that control their populations in their native range. Without these controls, they can outcompete native species for resources, rapidly dominating the ecosystem and reducing native biodiversity."
    },
    {
      "id": "MCQ-FIN-Y910-014",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing the distance between two parallel plates of a capacitor while keeping charge constant. Voltage increases. Which of the following correctly explains this?",
      "options": [
        "More charge accumulates",
        "Increasing plate separation increases the electric field path length; for constant charge, voltage V = Q/C increases as capacitance C = ε₀A/d decreases with increasing d",
        "Capacitance increases with distance",
        "Charge density increases"
      ],
      "correctIndex": 1,
      "explanation": "Capacitance C = ε₀A/d. Increasing d decreases C. Since Q = CV and Q is constant, V = Q/C increases. The electric field E = V/d remains approximately constant, but voltage increases proportionally with distance."
    },
    {
      "id": "MCQ-X-Y910-025",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of ocean temperature on coral bleaching. Bleaching occurs when temperature exceeds 1°C above the seasonal maximum for 4+ weeks. Which of the following correctly explains the mechanism?",
      "options": [
        "Coral produces more pigment when warm",
        "Thermal stress causes coral to expel their symbiotic algae (zooxanthellae); without algae, coral loses its colour and primary food source, leading to starvation and death if stress persists",
        "Warm water increases coral growth",
        "Coral bleaching is caused by pollution only"
      ],
      "correctIndex": 1,
      "explanation": "Coral bleaching: thermal stress disrupts the photosynthetic machinery of zooxanthellae (symbiotic algae living in coral tissue). The coral expels the algae as a stress response. Without zooxanthellae, coral loses its colour (bleaches) and its primary energy source. Prolonged bleaching leads to coral death."
    },
    {
      "id": "MCQ-MORE-Y910-035",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of light intensity on plant growth. They use artificial lights at 5 different intensities and measure stem height after 4 weeks. Which of the following correctly identifies a limitation of this experiment?",
      "options": [
        "The experiment has too many variables",
        "Using artificial light may not replicate the full spectrum of natural sunlight, potentially affecting results; also, 4 weeks may not be sufficient to observe long-term effects",
        "The experiment has no independent variable",
        "Stem height is not a valid measure of growth"
      ],
      "correctIndex": 1,
      "explanation": "Limitations are factors that reduce the validity or generalisability of results. Artificial light differs from natural sunlight in spectral composition. Short duration may miss long-term effects. Identifying limitations is essential for evaluating experimental design."
    },
    {
      "id": "MCQ-TOPUP-Y910-039",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the relationship between body mass and metabolic rate across mammals. Smaller mammals have higher metabolic rates per unit mass. Which of the following correctly explains this?",
      "options": [
        "Smaller mammals eat less food",
        "Smaller mammals have a higher surface area to volume ratio, losing heat faster and requiring a higher metabolic rate to maintain body temperature",
        "Larger mammals are more active",
        "Smaller mammals have fewer mitochondria"
      ],
      "correctIndex": 1,
      "explanation": "Smaller mammals have a higher SA:V ratio, meaning they lose heat to the environment faster relative to their body mass. To maintain constant body temperature (endothermy), they must generate heat at a higher rate per unit mass — requiring a higher mass-specific metabolic rate."
    },
    {
      "id": "MCQ-LAST-Y910-035",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of exercise on heart rate. They measure heart rate before exercise, immediately after, and at 1, 3, 5 and 10 minutes after stopping. Which of the following correctly identifies the dependent variable?",
      "options": [
        "Exercise intensity",
        "Time after exercise",
        "Heart rate",
        "The student's age"
      ],
      "correctIndex": 2,
      "explanation": "The dependent variable is what is measured — the variable that responds to changes in the independent variable. Here, heart rate is measured at different times (independent variable) to see how it changes with recovery time."
    },
    {
      "id": "MCQ-TOPUP-Y910-004",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of pH on the rate of enzyme-catalysed hydrolysis of starch by amylase. Maximum activity occurs at pH 7. Which of the following correctly explains why activity decreases at pH 4?",
      "options": [
        "Substrate concentration decreases at low pH",
        "Acidic conditions alter the ionic and hydrogen bonds maintaining the enzyme's tertiary structure, changing the shape of the active site",
        "Temperature increases at low pH",
        "The substrate denatures at low pH"
      ],
      "correctIndex": 1,
      "explanation": "Enzymes have an optimum pH at which their active site shape is complementary to the substrate. At pH 4, excess H⁺ ions disrupt ionic and hydrogen bonds in the enzyme's tertiary structure, altering the active site shape and reducing enzyme-substrate complementarity."
    },
    {
      "id": "MCQ-TOPUP-Y910-009",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the inheritance of two genes on different chromosomes. The observed ratio of phenotypes in the F2 generation is 9:3:3:1. Which of the following correctly describes this result?",
      "options": [
        "The genes are linked",
        "The genes assort independently — this is the expected dihybrid ratio for two unlinked genes",
        "One gene is dominant over the other",
        "The genes show incomplete dominance"
      ],
      "correctIndex": 1,
      "explanation": "The 9:3:3:1 ratio is the expected result of a dihybrid cross (AaBb × AaBb) when the two genes are on different chromosomes and assort independently, as described by Mendel's law of independent assortment."
    },
    {
      "id": "MCQ-FINAL-Y910-004",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of a high-fat diet on blood cholesterol levels. LDL cholesterol increases. Which of the following correctly explains the health risk?",
      "options": [
        "High LDL reduces blood pressure",
        "High LDL cholesterol contributes to atherosclerosis — fatty plaques build up in artery walls, narrowing the lumen and increasing risk of heart attack and stroke",
        "High LDL improves oxygen delivery",
        "High LDL reduces clotting risk"
      ],
      "correctIndex": 1,
      "explanation": "LDL (low-density lipoprotein) deposits cholesterol in artery walls, forming atherosclerotic plaques. These narrow the arterial lumen, reduce blood flow, increase blood pressure and can rupture, triggering clot formation — leading to heart attack or stroke."
    },
    {
      "id": "MCQ-FINAL-Y910-023",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the reaction: 2H₂O₂(aq) → 2H₂O(l) + O₂(g). The reaction is slow without a catalyst. Adding liver (containing catalase) produces rapid bubbling. Which of the following correctly identifies the type of catalyst?",
      "options": [
        "Inorganic catalyst",
        "Biological catalyst (enzyme)",
        "Homogeneous catalyst",
        "Inhibitor"
      ],
      "correctIndex": 1,
      "explanation": "Catalase is an enzyme — a biological catalyst. It dramatically increases the rate of hydrogen peroxide decomposition by providing an alternative pathway with lower activation energy. Enzymes are protein catalysts found in living organisms."
    },
    {
      "id": "MCQ-DONE-Y910-014",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the reactivity of primary, secondary and tertiary alcohols with acidified potassium dichromate. Primary alcohols oxidise to aldehydes then carboxylic acids; secondary to ketones; tertiary do not oxidise. Which of the following correctly explains why tertiary alcohols resist oxidation?",
      "options": [
        "Tertiary alcohols have no O-H bond",
        "Tertiary alcohols have no hydrogen on the carbon bearing the -OH group; oxidation requires removal of this hydrogen",
        "Tertiary alcohols are less soluble",
        "Tertiary alcohols have higher boiling points"
      ],
      "correctIndex": 1,
      "explanation": "Oxidation of alcohols involves removal of hydrogen from the carbon bearing the -OH group (C-H bond). Tertiary alcohols have no H on this carbon (three carbon groups attached instead), so oxidation cannot occur under normal conditions."
    },
    {
      "id": "MCQ-X-Y910-017",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the relationship between force and extension for a rubber band. The graph is not linear. Which of the following correctly describes this result?",
      "options": [
        "The rubber band obeys Hooke's law",
        "The rubber band does not obey Hooke's law — extension is not proportional to force; rubber bands have a non-linear elastic response",
        "The rubber band has no elastic limit",
        "The rubber band is inelastic"
      ],
      "correctIndex": 1,
      "explanation": "Hooke's law states F = kx (linear relationship). A rubber band shows a non-linear force-extension graph — it does not obey Hooke's law. Rubber has a complex polymer structure that gives it a non-linear elastic response, unlike a metal spring."
    },
    {
      "id": "MCQ-LAST-Y910-030",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses data on the population of a species of fish in a lake over 20 years. The population grew rapidly initially, then levelled off at approximately 5000 individuals. Which of the following correctly describes this growth pattern?",
      "options": [
        "Exponential growth",
        "Logistic growth — the population approached the carrying capacity of the lake",
        "Linear growth",
        "Random fluctuation"
      ],
      "correctIndex": 1,
      "explanation": "Logistic growth: rapid initial growth when resources are abundant, followed by slowing growth as the population approaches the carrying capacity (K). At K, birth rate equals death rate and population stabilises. The S-shaped (sigmoidal) curve is characteristic of logistic growth."
    },
    {
      "id": "MCQ-LAST2-Y910-016",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing the number of turns in a solenoid on its inductance. Inductance increases with turns². Which of the following correctly explains this?",
      "options": [
        "More turns increase resistance",
        "Each turn contributes to the magnetic flux; more turns both increase the flux produced per unit current and the number of turns linking that flux — inductance L ∝ N²",
        "More turns decrease the magnetic field",
        "Inductance is independent of turn number"
      ],
      "correctIndex": 1,
      "explanation": "Inductance L = μ₀μᵣN²A/l. Inductance is proportional to N² because: (1) more turns produce more magnetic flux per unit current; (2) more turns link more of that flux. Both effects scale with N, giving an N² dependence."
    },
    {
      "id": "MCQ-Z-Y910-021",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of urbanisation on local biodiversity. Urban areas have lower native species diversity but higher non-native species diversity. Which of the following correctly explains this pattern?",
      "options": [
        "Urban areas have more food",
        "Urban environments favour generalist and non-native species adapted to disturbed habitats; native specialist species are displaced by habitat loss, pollution, light and noise",
        "Urban areas have no predators",
        "Native species prefer urban environments"
      ],
      "correctIndex": 1,
      "explanation": "Urbanisation creates novel, disturbed habitats with altered temperature, light, noise and pollution levels. Generalist species and non-native species (often introduced accidentally) thrive in these conditions. Native specialist species requiring specific habitat conditions are displaced, reducing native biodiversity."
    },
    {
      "id": "MCQ-DONE-Y910-026",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates whether caffeine affects reaction time. They test 10 participants before and after caffeine. Which of the following correctly identifies this as a paired or unpaired design and explains why?",
      "options": [
        "Unpaired — different participants are used for each condition",
        "Paired — the same participants are tested under both conditions, controlling for individual differences in baseline reaction time",
        "Paired — participants are matched by age",
        "Unpaired — caffeine affects everyone differently"
      ],
      "correctIndex": 1,
      "explanation": "A paired (within-subjects) design uses the same participants in both conditions. This controls for individual differences (e.g. some people naturally have faster reaction times). Comparing each person's before/after scores reduces variability and increases the sensitivity of the experiment."
    },
    {
      "id": "MCQ-TOPUP-Y910-040",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the carbon footprint of electricity generated by solar panels versus coal. Solar panels produce approximately 20 g CO₂/kWh over their lifetime; coal produces approximately 820 g CO₂/kWh. Which of the following correctly explains why solar panels have a lower carbon footprint?",
      "options": [
        "Solar panels produce no CO₂ at all",
        "Solar panels produce CO₂ only during manufacture and installation; during operation they generate electricity from sunlight with no combustion and no direct CO₂ emissions",
        "Coal produces less CO₂ than solar",
        "Solar panels are less efficient than coal"
      ],
      "correctIndex": 1,
      "explanation": "Solar panels have a lifecycle carbon footprint (manufacturing, transport, installation) but produce no CO₂ during operation. Coal combustion continuously releases CO₂. Over a 25-year lifespan, solar panels' manufacturing emissions are spread across enormous energy output, giving a very low per-kWh footprint."
    },
    {
      "id": "MCQ-LAST-Y910-036",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student reports a result as 45.6 ± 0.5 cm. Which of the following correctly describes what the ± 0.5 cm represents?",
      "options": [
        "The range of all measurements",
        "The uncertainty — the range within which the true value is likely to lie",
        "The systematic error",
        "The percentage error"
      ],
      "correctIndex": 1,
      "explanation": "The ± value represents the measurement uncertainty — the range within which the true value is expected to lie. It reflects the precision of the measurement and the limitations of the measuring instrument."
    },
    {
      "id": "MCQ-TOPUP-Y910-005",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the mitochondria content of liver cells and red blood cells. Liver cells have many mitochondria; mature red blood cells have none. Which of the following correctly explains this difference?",
      "options": [
        "Red blood cells are larger",
        "Liver cells carry out many energy-requiring metabolic reactions; mature red blood cells have no nucleus and carry out no aerobic respiration — they rely on anaerobic glycolysis",
        "Red blood cells photosynthesise",
        "Liver cells are prokaryotic"
      ],
      "correctIndex": 1,
      "explanation": "Liver cells are metabolically very active (detoxification, protein synthesis, glycogen storage) and require large amounts of ATP. Mature red blood cells lack a nucleus and mitochondria — they produce ATP only by anaerobic glycolysis, maximising space for haemoglobin."
    },
    {
      "id": "MCQ-TOPUP-Y910-010",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses a karyotype and finds a cell with 47 chromosomes, with three copies of chromosome 21. Which condition does this represent and what is the cause?",
      "options": [
        "Turner syndrome; loss of a sex chromosome",
        "Down syndrome (trisomy 21); non-disjunction during meiosis",
        "Klinefelter syndrome; extra X chromosome",
        "Cri du chat syndrome; deletion of chromosome 5"
      ],
      "correctIndex": 1,
      "explanation": "Trisomy 21 (Down syndrome) results from non-disjunction during meiosis — chromosome 21 fails to separate, producing a gamete with two copies. After fertilisation, the zygote has three copies of chromosome 21."
    },
    {
      "id": "MCQ-FINAL-Y910-005",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student analyses data showing that people who sleep fewer than 6 hours per night have higher rates of obesity. Which of the following correctly explains a biological mechanism for this relationship?",
      "options": [
        "Sleep deprivation increases metabolic rate",
        "Sleep deprivation disrupts hormones regulating appetite — ghrelin (hunger hormone) increases and leptin (satiety hormone) decreases, promoting overeating",
        "Sleep deprivation reduces food absorption",
        "Obese people need less sleep"
      ],
      "correctIndex": 1,
      "explanation": "Sleep deprivation alters appetite-regulating hormones: ghrelin rises (increasing hunger) and leptin falls (reducing satiety signals). This promotes increased food intake. Combined with fatigue-related reduced physical activity, this contributes to weight gain."
    },
    {
      "id": "MCQ-FINAL-Y910-024",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the diffraction of water waves through a gap. Maximum diffraction occurs when the gap width equals the wavelength. Which of the following correctly explains why diffraction is more noticeable for sound than light in everyday situations?",
      "options": [
        "Sound travels faster than light",
        "Sound has wavelengths (cm to metres) comparable to everyday objects; light has wavelengths (~500 nm) much smaller than most gaps, so diffraction effects are negligible",
        "Light cannot diffract",
        "Sound has higher frequency than light"
      ],
      "correctIndex": 1,
      "explanation": "Diffraction is most significant when wavelength ≈ gap size. Sound wavelengths (cm to metres) are comparable to doorways and buildings, producing noticeable diffraction. Light wavelengths (~500 nm) are far smaller than everyday gaps, so diffraction is negligible in most situations."
    },
    {
      "id": "MCQ-DONE-Y910-015",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the polymerisation of propene (CH₃CH=CH₂). Which of the following correctly describes the product and type of polymerisation?",
      "options": [
        "Condensation polymerisation producing polypropene and water",
        "Addition polymerisation producing polypropene — the C=C double bond opens and monomers link into a long chain",
        "Substitution polymerisation producing polypropene",
        "Elimination polymerisation producing polypropene and HCl"
      ],
      "correctIndex": 1,
      "explanation": "Propene undergoes addition polymerisation. The C=C double bond opens, allowing monomers to link together. No atoms are lost — all atoms in the monomer are incorporated into the polymer chain. Product: polypropene (used in packaging, fibres, automotive parts)."
    },
    {
      "id": "MCQ-X-Y910-018",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the gravitational field strength on the Moon as 1.6 N/kg. A 70 kg astronaut stands on the Moon. What is their weight on the Moon?",
      "options": [
        "70 N",
        "112 N",
        "686 N",
        "44 N"
      ],
      "correctIndex": 1,
      "explanation": "Weight = mass × gravitational field strength = 70 × 1.6 = 112 N. On Earth, the same astronaut would weigh 70 × 9.8 = 686 N. Mass is unchanged; weight depends on gravitational field strength."
    },
    {
      "id": "MCQ-LAST-Y910-031",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of eutrophication on dissolved oxygen in a lake. Oxygen levels fall sharply after an algal bloom dies. Which of the following correctly explains the sequence of events?",
      "options": [
        "Algae produce oxygen when they die",
        "Bacteria decomposing dead algae consume large amounts of dissolved oxygen through aerobic respiration, creating hypoxic conditions that kill fish",
        "Algae absorb oxygen from water",
        "Fish consume all the oxygen"
      ],
      "correctIndex": 1,
      "explanation": "Eutrophication sequence: excess nutrients → algal bloom → algae die → bacteria decompose dead algae using aerobic respiration → dissolved oxygen depleted (hypoxia/anoxia) → fish and other aerobic organisms suffocate. This is called biological oxygen demand (BOD)."
    },
    {
      "id": "MCQ-LAST2-Y910-017",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on the resistance of a semiconductor. Resistance decreases with temperature. Which of the following correctly explains this?",
      "options": [
        "Semiconductors behave like metals",
        "In semiconductors, higher temperature promotes more electrons across the band gap into the conduction band, increasing charge carrier density and reducing resistance",
        "Semiconductors have no band gap",
        "Higher temperature reduces electron mobility only"
      ],
      "correctIndex": 1,
      "explanation": "Semiconductors have a band gap between valence and conduction bands. At higher temperatures, more electrons gain sufficient thermal energy to cross the band gap, increasing the number of charge carriers (electrons and holes). The increase in carrier density outweighs reduced mobility, so resistance decreases."
    },
    {
      "id": "MCQ-Z-Y910-022",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of ocean acidification on the calcification rate of coral. Rate decreases as pH decreases. Which of the following correctly explains the mechanism at the molecular level?",
      "options": [
        "Lower pH increases calcium availability",
        "Lower pH reduces carbonate ion (CO3²⁻) concentration; coral use carbonate to precipitate calcium carbonate (CaCO3) for skeleton formation — less carbonate means slower calcification",
        "Lower pH increases coral metabolism",
        "Lower pH increases water temperature"
      ],
      "correctIndex": 1,
      "explanation": "Calcification: Ca²⁺ + CO3²⁻ → CaCO3. Ocean acidification increases H⁺ concentration, which reacts with CO3²⁻ to form HCO3⁻, reducing carbonate ion availability. With less CO3²⁻, coral cannot maintain calcification rates, producing weaker skeletons and slower growth."
    },
    {
      "id": "MCQ-DONE-Y910-027",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student calculates the mean, median and mode of a data set: 2, 3, 3, 4, 5, 5, 5, 20. Which measure of central tendency is most affected by the outlier (20)?",
      "options": [
        "Median",
        "Mode",
        "Mean",
        "All are equally affected"
      ],
      "correctIndex": 2,
      "explanation": "The mean is calculated using all values, so it is most sensitive to outliers. Mean = (2+3+3+4+5+5+5+20)/8 = 47/8 = 5.875. The median (4.5) and mode (5) are unaffected by the outlier value of 20."
    },
    {
      "id": "MCQ-TOPUP-Y910-041",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of nitrogen deposition on plant diversity in grasslands. High nitrogen deposition reduces species diversity. Which of the following correctly explains this?",
      "options": [
        "Nitrogen is toxic to all plants",
        "Nitrogen fertilises fast-growing grasses that outcompete slower-growing wildflowers, reducing species diversity",
        "Nitrogen reduces photosynthesis",
        "High nitrogen increases soil pH"
      ],
      "correctIndex": 1,
      "explanation": "Nitrogen deposition acts as a fertiliser, favouring fast-growing, competitive grass species. These grasses grow tall and dense, shading out slower-growing wildflowers and reducing light availability. The result is competitive exclusion of less competitive species, reducing overall plant diversity."
    },
    {
      "id": "MCQ-X-Y910-026",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the carbon footprint of different diets. A vegan diet has approximately 1.5 kg CO2e/day; an omnivore diet approximately 3.3 kg CO2e/day. Which of the following correctly explains the main reason for this difference?",
      "options": [
        "Vegans eat more food",
        "Animal products (especially beef and dairy) require more land, water and energy to produce and generate more greenhouse gases (methane from livestock, N2O from fertilisers) than plant foods",
        "Plant foods produce more CO2 during digestion",
        "Vegan diets require more refrigeration"
      ],
      "correctIndex": 1,
      "explanation": "Animal agriculture generates greenhouse gases through: methane from livestock digestion (enteric fermentation); nitrous oxide from manure and fertilisers; CO2 from land use change (deforestation for pasture/feed crops). The inefficiency of trophic energy transfer means animal products require far more resources per calorie than plant foods."
    },
    {
      "id": "MCQ-LAST-Y910-001",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student places a plant cell in distilled water. The cell becomes turgid but does not burst. Which structure prevents the cell from bursting?",
      "options": [
        "Cell membrane",
        "Cell wall",
        "Vacuole",
        "Nucleus"
      ],
      "correctIndex": 1,
      "explanation": "The rigid cellulose cell wall exerts a wall pressure (turgor pressure) that counteracts the osmotic pressure driving water in. This prevents the cell from bursting, unlike animal cells which lack a cell wall."
    },
    {
      "id": "MCQ-TOPUP-Y910-011",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the reactivity of chlorine and iodine with hydrogen. Chlorine reacts explosively; iodine reacts slowly and reversibly. Which of the following correctly explains this trend?",
      "options": [
        "Iodine has more electrons than chlorine",
        "Down Group 17, atomic radius increases and the outer shell is further from the nucleus, reducing the ability to attract a shared electron pair — bond formation becomes less favourable",
        "Chlorine has a higher atomic mass",
        "Iodine is a solid at room temperature"
      ],
      "correctIndex": 1,
      "explanation": "Down Group 17, the outer shell electrons are further from the nucleus and more shielded. The ability to attract electrons (electronegativity) decreases, making bond formation with hydrogen less energetically favourable and reducing reactivity."
    },
    {
      "id": "MCQ-FINAL-Y910-006",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of alcohol on reaction time. Reaction time increases significantly after alcohol consumption. Which of the following correctly explains this?",
      "options": [
        "Alcohol increases nerve conduction speed",
        "Alcohol is a CNS depressant that slows synaptic transmission by enhancing inhibitory neurotransmitters and reducing excitatory ones",
        "Alcohol increases blood glucose",
        "Alcohol stimulates the sympathetic nervous system"
      ],
      "correctIndex": 1,
      "explanation": "Alcohol is a central nervous system depressant. It enhances GABA (inhibitory neurotransmitter) activity and inhibits glutamate (excitatory), slowing neural processing, impairing coordination and increasing reaction time."
    },
    {
      "id": "MCQ-FINAL-Y910-025",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the speed of a wave in a string by changing tension. Increasing tension increases wave speed. Which of the following correctly explains this?",
      "options": [
        "Higher tension reduces wavelength",
        "Higher tension increases the restoring force on displaced string segments, allowing disturbances to propagate faster",
        "Higher tension reduces frequency",
        "Wave speed is independent of tension"
      ],
      "correctIndex": 1,
      "explanation": "Wave speed in a string depends on tension (T) and linear mass density (μ): v = √(T/μ). Higher tension increases the restoring force that pulls displaced segments back, allowing the wave to propagate faster."
    },
    {
      "id": "MCQ-DONE-Y910-016",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the interference pattern produced by two coherent light sources. Bright fringes appear where path difference equals nλ. Which of the following correctly explains why dark fringes form?",
      "options": [
        "Dark fringes form where light is absorbed",
        "Dark fringes form where path difference = (n + ½)λ — waves arrive exactly out of phase and destructively interfere, cancelling each other",
        "Dark fringes form where light is reflected",
        "Dark fringes form at the centre of the pattern"
      ],
      "correctIndex": 1,
      "explanation": "Destructive interference occurs when waves from two coherent sources arrive exactly out of phase (path difference = half-integer multiples of wavelength). The crests of one wave coincide with the troughs of the other, resulting in zero amplitude — a dark fringe."
    },
    {
      "id": "MCQ-FIN-Y910-011",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the motion of a ball rolling down a ramp. The acceleration is constant. Which of the following correctly describes the velocity-time graph?",
      "options": [
        "A horizontal line",
        "A straight line with positive gradient (constant acceleration)",
        "A curve",
        "A line with decreasing gradient"
      ],
      "correctIndex": 1,
      "explanation": "Constant acceleration produces a linear velocity-time graph (straight line with positive gradient). The gradient equals the acceleration. This is consistent with Newton's second law — constant net force on constant mass produces constant acceleration."
    },
    {
      "id": "MCQ-DONE-Y910-019",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the Doppler effect. An ambulance siren emits 800 Hz. The ambulance moves toward a stationary observer at 34 m/s. What frequency does the observer hear? (speed of sound = 340 m/s)",
      "options": [
        "880 Hz",
        "727 Hz",
        "800 Hz",
        "760 Hz"
      ],
      "correctIndex": 0,
      "explanation": "f_observed = f_source × v/(v - v_source) = 800 × 340/(340-34) = 800 × 340/306 = 800 × 1.111 = 888.9 ≈ 880 Hz (approaching source increases observed frequency)."
    },
    {
      "id": "MCQ-E19-006",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the force between two parallel current-carrying wires. The wires attract each other when currents flow in the same direction. Which of the following correctly explains this?",
      "options": [
        "Like currents repel",
        "Each wire creates a magnetic field; the field of one wire exerts a force on the current in the other wire — parallel currents attract, antiparallel currents repel",
        "The wires are charged",
        "Magnetic fields only affect permanent magnets"
      ],
      "correctIndex": 1,
      "explanation": "Each current-carrying wire produces a circular magnetic field. The magnetic field of wire 1 acts on the current in wire 2 (F = BIL). For parallel currents, the force is attractive; for antiparallel currents, repulsive. This is the basis of the SI definition of the ampere."
    },
    {
      "id": "MCQ-FIN-Y910-016",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing ocean temperature on the distribution of marine species. Species are shifting poleward. Which of the following correctly explains this?",
      "options": [
        "Warmer water contains more food",
        "Species are tracking their thermal tolerance range — as oceans warm, species move poleward to remain within their preferred temperature range",
        "Species prefer colder water",
        "Poleward currents are stronger"
      ],
      "correctIndex": 1,
      "explanation": "Climate change is causing species range shifts as organisms track their thermal tolerance zones. Marine species adapted to specific temperature ranges are moving poleward (toward cooler water) as their traditional habitats warm beyond their tolerance limits."
    },
    {
      "id": "IC-62-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how invasive species affect native ecosystems.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Invasive species are organisms introduced outside their native range that establish, spread and cause ecological or economic harm. Without the natural predators, parasites and pathogens that control their populations in their native range, invasive species can expand rapidly. They harm native ecosystems by: outcompeting native species for resources (light, water, nutrients, territory); predating native species that lack evolved defences; introducing novel diseases; hybridising with native species; and altering habitat structure. Examples: cane toads in Australia prey on native wildlife and are toxic to predators; European rabbits in Australia cause severe overgrazing; zebra mussels in North American lakes filter phytoplankton, disrupting food webs. Prevention (biosecurity measures, border controls) is far more effective than eradication once established. Invasive species are the second leading cause of biodiversity loss globally after habitat destruction."
    },
    {
      "id": "IC-63-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain what causes earthquakes and how their magnitude is measured.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Earthquakes occur when stress accumulated along fault lines is suddenly released as seismic energy. Tectonic plates move continuously; where they meet, friction prevents smooth movement and stress builds up. When stress exceeds the frictional strength of the fault, rocks slip suddenly — an earthquake. The focus (hypocentre) is the point of rupture underground; the epicentre is the point on the surface directly above. Seismic waves radiate outward: P-waves (compressional, fastest) and S-waves (shear, slower) travel through Earth; surface waves cause most damage. The Richter scale measures earthquake magnitude logarithmically — each unit represents a tenfold increase in amplitude and approximately 31.6 times more energy. The moment magnitude scale (Mw) is now preferred for large earthquakes. Seismographs record ground motion; the time difference between P and S wave arrivals at multiple stations allows triangulation of the epicentre."
    },
    {
      "id": "IC-64-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the immune system distinguishes between self and non-self cells.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The immune system distinguishes self from non-self through MHC (Major Histocompatibility Complex) molecules. Every nucleated cell displays fragments of its own proteins on MHC-I molecules — a molecular identity tag. T cells learn during development in the thymus to tolerate self-MHC molecules (positive selection) and to ignore self-peptides (negative selection — self-reactive T cells are eliminated by apoptosis). Cytotoxic T cells (CD8⁺) only attack cells displaying foreign peptides on MHC-I — infected cells, cancer cells or transplanted cells. Autoimmune diseases occur when this self-tolerance breaks down — the immune system attacks the body's own tissues (type 1 diabetes attacks beta cells; rheumatoid arthritis attacks joint tissue). Organ transplant rejection occurs because donor MHC molecules are recognised as foreign. Immunosuppressant drugs reduce rejection by dampening the immune response."
    },
    {
      "id": "IC-65-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the scientific principles behind solar panels.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Solar panels convert sunlight directly to electricity through the photovoltaic effect. Photovoltaic cells are made of semiconductor materials, typically silicon. Silicon atoms are arranged in a crystal lattice; some are doped with phosphorus (n-type, extra electrons) and some with boron (p-type, electron holes). At the p-n junction, an electric field forms. When photons of sufficient energy strike the cell, they excite electrons, freeing them from their atoms. The electric field drives freed electrons in one direction, creating a direct current. Multiple cells are connected in panels; panels are connected in arrays. Efficiency of commercial silicon cells is typically 15-22%. Advantages: no fuel cost; no direct emissions; silent; low maintenance; scalable. Disadvantages: intermittent (requires sunlight); requires storage or grid backup; manufacturing has environmental costs; land use for large installations. Solar costs have fallen over 90% since 2010."
    },
    {
      "id": "IC-66-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how diffusion and active transport differ and give biological examples of each.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Diffusion is the passive net movement of molecules from high to low concentration down a concentration gradient — no energy required. Simple diffusion: small, non-polar molecules (O2, CO2) dissolve in the lipid bilayer and diffuse freely. Facilitated diffusion: larger or polar molecules (glucose, ions) move through specific protein channels or carriers down their concentration gradient — passive but requires proteins. Active transport moves molecules against their concentration gradient using ATP energy and specific carrier proteins. Biological examples: oxygen diffuses from alveoli (high pO2) into blood (low pO2) — simple diffusion; glucose is absorbed from the small intestine into blood by facilitated diffusion (GLUT transporters); sodium is pumped out of neurons against its gradient by the Na⁺/K⁺ ATPase — active transport. The distinction is critical: active transport can concentrate substances; diffusion cannot."
    },
    {
      "id": "IC-67-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe the role of the atmosphere in regulating Earth's temperature.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The atmosphere regulates Earth's temperature through the greenhouse effect and by distributing heat. The greenhouse effect: solar radiation (short wavelength) passes through the atmosphere and warms the surface. The surface emits infrared radiation (long wavelength), which is absorbed by greenhouse gases (CO2, H2O, CH4) and re-emitted in all directions, warming the lower atmosphere. Without this natural greenhouse effect, Earth's average temperature would be -18°C rather than +15°C. The atmosphere also distributes heat: atmospheric circulation (driven by differential solar heating) transports warm air from the tropics toward the poles, moderating temperature extremes. The ozone layer in the stratosphere absorbs harmful UV radiation. Clouds reflect incoming solar radiation (cooling effect) and trap outgoing infrared (warming effect). Human activities are enhancing the greenhouse effect by increasing greenhouse gas concentrations, disrupting this natural temperature regulation."
    },
    {
      "id": "IC-68-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how genetic mutations can be both harmful and beneficial.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Mutations are changes in DNA sequence that can be harmful, neutral or beneficial depending on their nature and context. Harmful mutations: those disrupting essential gene function — frameshift mutations often produce non-functional proteins; mutations in tumour suppressor genes can cause cancer; mutations in developmental genes can cause birth defects. Most new mutations are harmful or neutral. Neutral mutations: synonymous (silent) mutations that don't change the amino acid sequence; mutations in non-coding regions with no functional effect. Beneficial mutations: rare but essential for evolution — a mutation conferring antibiotic resistance is beneficial to bacteria under antibiotic pressure; mutations increasing enzyme efficiency or altering protein function can improve fitness. The same mutation can be beneficial in one environment and harmful in another. Beneficial mutations are the raw material for natural selection and adaptation. Without mutation, there would be no genetic variation and evolution could not occur."
    },
    {
      "id": "IC-69-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain what is meant by carrying capacity and how it limits population growth.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Carrying capacity (K) is the maximum population size that an environment can sustainably support, given available resources (food, water, space, shelter). As a population grows toward K, limiting factors — intraspecific competition for resources, increased predation, disease transmission and waste accumulation — increase death rate and decrease birth rate. Population growth slows and eventually stabilises at K, producing the characteristic S-shaped (logistic) growth curve. Below K, resources are relatively abundant and population grows rapidly. Near K, resources become limiting and growth slows. Above K, the population overshoots and declines as resources are depleted. Human populations have historically increased K through agriculture, medicine and technology — but this does not eliminate resource limits, it raises them. Overshoot and collapse occur in many animal populations when resources are suddenly depleted. Understanding carrying capacity is fundamental to conservation, fisheries management and sustainability."
    },
    {
      "id": "IC-70-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how a nerve impulse is transmitted along a neuron and across a synapse.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "A nerve impulse (action potential) is transmitted along a neuron as a wave of depolarisation. At the axon terminal, the action potential triggers voltage-gated Ca²⁺ channels to open. Ca²⁺ influx causes synaptic vesicles to fuse with the presynaptic membrane, releasing neurotransmitters (e.g. acetylcholine, dopamine) into the synaptic cleft by exocytosis. Neurotransmitters diffuse across the cleft (20-40 nm) and bind to specific receptors on the postsynaptic membrane. Binding opens ion channels: excitatory neurotransmitters (glutamate) open Na⁺ channels, depolarising the postsynaptic cell; inhibitory neurotransmitters (GABA) open Cl⁻ channels, hyperpolarising it. If the postsynaptic membrane reaches threshold, a new action potential fires. Neurotransmitters are then removed by reuptake (transported back into the presynaptic terminal), enzymatic degradation (acetylcholinesterase breaks down acetylcholine), or diffusion. This chemical synapse allows signal modulation and integration."
    },
    {
      "id": "IC-71-F5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the environmental impact of plastic pollution in oceans.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Plastic pollution in oceans has reached crisis proportions — an estimated 8-12 million tonnes enter oceans annually. Most plastics are non-biodegradable; UV radiation and wave action fragment them into microplastics (< 5 mm) and nanoplastics. These particles are ingested by marine organisms from zooplankton to whales, causing physical blockage, false satiety (animals feel full but receive no nutrition), and chemical toxicity (plastics adsorb persistent organic pollutants). Microplastics enter food chains and have been detected in fish, shellfish and human blood. Larger plastic debris entangles and kills seabirds, turtles and marine mammals. The Great Pacific Garbage Patch covers an area twice the size of Texas. Solutions require: reducing plastic production; improving waste management; developing biodegradable alternatives; extended producer responsibility; and international agreements. Individual action (reducing single-use plastics) is necessary but insufficient without systemic change."
    },
    {
      "id": "AR-48-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that areas with higher nitrogen deposition have lower plant species diversity. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between nitrogen deposition and plant species diversity.\nObservation: Plant species diversity decreased in areas with higher nitrogen deposition.\nExplanation: Nitrogen deposition acts as a fertiliser, favouring fast-growing, competitive grass species. These grasses grow tall and dense, shading out slower-growing wildflowers and reducing light availability at ground level. Competitive exclusion reduces species diversity. Additionally, nitrogen deposition acidifies soil, mobilising toxic aluminium ions that damage plant roots.\nConclusion: High nitrogen deposition reduces plant species diversity through competitive exclusion by fast-growing grasses and soil acidification. This has implications for conservation of species-rich grasslands, which require low-nutrient conditions to maintain diversity."
    },
    {
      "id": "AR-49-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates how the number of coils in an electromagnet affects its strength. Results show strength increases with coil number. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of coil turns on electromagnet strength.\nObservation: Electromagnet strength increased with the number of coil turns.\nExplanation: Each turn of wire carrying current contributes to the magnetic field. The magnetic field strength B ∝ NI/L (where N = turns, I = current, L = length). More turns produce a stronger, more concentrated magnetic field. The iron core becomes magnetised by the field, amplifying it further through its high magnetic permeability.\nConclusion: Electromagnet strength is directly proportional to the number of coil turns, consistent with Ampere's law. This principle is used in the design of transformers, motors and MRI machines, where strong magnetic fields are required."
    },
    {
      "id": "AR-50-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that the solubility of a salt increases with temperature. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of temperature on the solubility of a salt.\nObservation: Solubility increased with temperature.\nExplanation: For most ionic solids, dissolution is endothermic — energy is required to break the ionic lattice. Higher temperature provides more thermal energy, increasing the rate of lattice disruption and the solubility of the salt. Le Chatelier's principle: increasing temperature shifts the dissolution equilibrium toward the dissolved state (endothermic direction).\nConclusion: Solubility of the salt increases with temperature, consistent with endothermic dissolution. This is the typical behaviour for ionic solids. Note: gas solubility decreases with temperature (exothermic dissolution) — the opposite trend."
    },
    {
      "id": "AR-51-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the rate of cooling of water in containers of different colours. Black containers cool fastest. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of container colour on rate of heat loss.\nObservation: Black containers cooled faster than shiny silver containers.\nExplanation: Black (matt) surfaces are good emitters and absorbers of infrared radiation. Shiny surfaces reflect infrared and are poor emitters. The black container loses heat faster by radiation. Both containers lose heat by conduction and convection equally, but the additional radiative heat loss from the black surface produces a faster overall cooling rate.\nConclusion: Container colour affects the rate of radiative heat loss. Black surfaces emit infrared radiation more effectively than shiny surfaces, consistent with the properties of black body radiators. This principle is applied in the design of radiators (painted black) and vacuum flask silvered surfaces."
    },
    {
      "id": "AR-52-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that the frequency of a genetic disorder is higher in isolated populations. Analyse and explain using genetic principles.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between genetic isolation and disorder frequency.\nObservation: The frequency of a genetic disorder was higher in isolated populations.\nExplanation: Isolated populations have reduced gene flow from outside. If the disorder allele was present in the founding population, genetic drift can increase its frequency by chance in small populations (founder effect). Inbreeding (mating between relatives) increases the probability of homozygous recessive genotypes, increasing the frequency of recessive disorders.\nConclusion: Genetic isolation increases disorder frequency through genetic drift, founder effect and inbreeding. This explains why certain genetic disorders are more common in historically isolated communities. Genetic counselling is particularly important in such populations."
    },
    {
      "id": "AR-53-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates the effect of light intensity on the rate of photosynthesis using pondweed. Results show bubble rate increases with light intensity. Write a scientific report.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of light intensity on photosynthesis rate using pondweed.\nObservation: The rate of bubble production (O2) increased with light intensity, then plateaued.\nExplanation: At low light intensity, light is the limiting factor — insufficient photons drive the light-dependent reactions. As intensity increases, more ATP and NADPH are produced, increasing the Calvin cycle rate and O2 production. At the plateau, another factor (CO2 concentration or temperature) becomes limiting.\nConclusion: Light intensity increases photosynthesis rate up to the point where another factor becomes limiting. Counting bubbles per minute is a valid proxy for photosynthesis rate, though it measures net photosynthesis (gross photosynthesis minus respiration)."
    },
    {
      "id": "AR-54-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that the extension of a rubber band is not proportional to the load applied. Analyse and explain how this differs from a metal spring.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To compare the elastic behaviour of a rubber band and a metal spring.\nObservation: The metal spring showed a linear force-extension relationship (Hooke's law); the rubber band showed a non-linear relationship.\nExplanation: Metal springs have a regular crystalline structure — atomic bonds stretch proportionally to applied force up to the elastic limit (Hooke's law: F = kx). Rubber consists of long polymer chains that uncoil when stretched — the relationship between force and extension is non-linear because the mechanism of extension changes as chains uncoil and then straighten.\nConclusion: Metal springs obey Hooke's law; rubber bands do not. This reflects their different molecular structures. Both are elastic (return to original shape when force is removed), but only the spring shows proportional extension."
    },
    {
      "id": "AR-55-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the time for sugar to dissolve in water at different temperatures. Results show faster dissolving at higher temperatures. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of temperature on the rate of sugar dissolving.\nObservation: Sugar dissolved faster at higher temperatures.\nExplanation: Dissolving requires solvent molecules to overcome the attractive forces holding solute particles together. Higher temperature increases the kinetic energy of water molecules, increasing the frequency and energy of collisions with sugar crystals. This accelerates the rate at which sugar molecules are pulled into solution. Stirring would further increase rate by removing the saturated layer around crystals.\nConclusion: Temperature increases the rate of dissolving by increasing molecular kinetic energy and collision frequency. This is consistent with the general principle that reaction and dissolution rates increase with temperature."
    },
    {
      "id": "AR-56-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that the number of stomata per unit area is higher in plants grown in low CO2 environments. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between CO2 environment and stomatal density.\nObservation: Plants grown in low CO2 environments had higher stomatal density than those in high CO2.\nExplanation: Stomata are the primary entry point for CO2 into leaves. In low CO2 environments, plants need more stomata to absorb sufficient CO2 for photosynthesis. In high CO2 environments, fewer stomata are needed to meet the same CO2 demand. This is a developmental adaptation — stomatal density is regulated during leaf development in response to CO2 availability.\nConclusion: Stomatal density is inversely related to CO2 concentration, representing an adaptive response to CO2 availability. Historical records show that stomatal density has decreased as atmospheric CO2 has risen since industrialisation — providing evidence of plant adaptation to changing CO2 levels."
    },
    {
      "id": "AR-57-F5",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates how the angle of incidence affects the angle of refraction when light enters glass. Results follow Snell's law. Write a scientific report.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between angle of incidence and angle of refraction when light enters glass.\nObservation: Angle of refraction increased with angle of incidence, following Snell's law: n₁sinθ₁ = n₂sinθ₂.\nExplanation: When light passes from air (n=1.0) into glass (n=1.5), it slows down and bends toward the normal. The relationship between angles is described by Snell's law. The refractive index of glass can be calculated from the gradient of a sinθ₁ vs sinθ₂ graph: n_glass = sinθ₁/sinθ₂.\nConclusion: The results confirm Snell's law. The refractive index of the glass can be determined from the data. This experiment demonstrates that light bends toward the normal when entering a denser medium, consistent with the wave model of light."
    }
  ]
};
