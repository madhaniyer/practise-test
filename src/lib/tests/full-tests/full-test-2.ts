import type { PracticeTest } from "@/types/test";

export const fullTest2: PracticeTest = {
  "id": "full-2",
  "title": "Full Test 2",
  "subtitle": "Full JMSS format — 60 MCQ (Section A) + 10 written (Section B) + 10 written (Section C)",
  "kind": "full",
  "released": true,
  "durationSec": 9000,
  "questions": [
    {
      "id": "MCQ-BIO-Y910-011",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the rate of osmosis in potato cylinders at different sucrose concentrations. At which concentration would the potato cylinder neither gain nor lose mass?",
      "options": [
        "0.0 mol/L",
        "0.2 mol/L",
        "The concentration equal to the cell's water potential",
        "1.0 mol/L"
      ],
      "correctIndex": 2,
      "explanation": "The potato cylinder will not change mass when the external solution has the same water potential as the cell contents — this is the isotonic point."
    },
    {
      "id": "MCQ-BIO-Y910-031",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "What is the role of mRNA in protein synthesis?",
      "options": [
        "It carries amino acids to the ribosome",
        "It carries the genetic code from the nucleus to the ribosome",
        "It forms the structure of the ribosome",
        "It unwinds the DNA double helix"
      ],
      "correctIndex": 1,
      "explanation": "mRNA (messenger RNA) is transcribed from DNA in the nucleus and carries the genetic code (as codons) to the ribosome in the cytoplasm where translation occurs."
    },
    {
      "id": "MCQ-BIO-Y910-051",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes negative feedback in homeostasis?",
      "options": [
        "A change triggers a response that amplifies the original change",
        "A change triggers a response that reverses the original change",
        "The body maintains a constantly changing internal environment",
        "Negative feedback only applies to temperature regulation"
      ],
      "correctIndex": 1,
      "explanation": "Negative feedback is the mechanism by which the body detects a deviation from the set point and triggers a corrective response that returns conditions to normal."
    },
    {
      "id": "MCQ-BIO-Y910-064",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares two islands of different sizes. The larger island has more species. Which ecological principle does this illustrate?",
      "options": [
        "Competitive exclusion",
        "Island biogeography — larger islands support more species",
        "Succession",
        "Niche partitioning"
      ],
      "correctIndex": 1,
      "explanation": "The species-area relationship (a key principle of island biogeography) states that larger areas support more species due to greater habitat diversity and lower extinction rates."
    },
    {
      "id": "MCQ-MORE-Y910-011",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the fossil record of horses over 55 million years. Early horses were small with multiple toes; modern horses are large with a single hoof. Which of the following correctly interprets this evidence?",
      "options": [
        "Horses were created in their current form",
        "The fossil record shows gradual morphological change over time consistent with evolution by natural selection in response to changing environments",
        "Horses evolved randomly with no pattern",
        "The fossil record is unreliable"
      ],
      "correctIndex": 1,
      "explanation": "The horse fossil record is one of the best-documented examples of macroevolution. Progressive changes in size, leg structure and tooth morphology over 55 million years are consistent with natural selection adapting horses to changing grassland environments."
    },
    {
      "id": "MCQ-BIO2-Y910-020",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the role of guard cells in regulating gas exchange?",
      "options": [
        "Guard cells produce glucose by photosynthesis only",
        "Guard cells change shape by gaining or losing water, opening or closing the stomatal pore",
        "Guard cells are dead cells that provide structural support",
        "Guard cells produce oxygen directly"
      ],
      "correctIndex": 1,
      "explanation": "Guard cells are kidney-shaped cells surrounding each stoma. When they absorb water by osmosis, they become turgid and bow outward, opening the pore. When they lose water, they become flaccid and the pore closes, reducing water loss."
    },
    {
      "id": "MCQ-BIO2-Y910-030",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the transmission of malaria. Which of the following correctly identifies the vector and causative agent?",
      "options": [
        "Vector: mosquito; causative agent: Plasmodium (a protozoan)",
        "Vector: Plasmodium; causative agent: mosquito",
        "Vector: mosquito; causative agent: a virus",
        "Vector: rat; causative agent: Plasmodium"
      ],
      "correctIndex": 0,
      "explanation": "Malaria is caused by Plasmodium (a protozoan parasite). The Anopheles mosquito is the vector — it transmits Plasmodium to humans during a blood meal. The mosquito itself does not cause the disease."
    },
    {
      "id": "MCQ-TOPUP-Y910-012",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the flame test colours of Group 1 metals. Lithium gives crimson, sodium gives yellow, potassium gives lilac. Which of the following correctly explains why different metals give different colours?",
      "options": [
        "Different metals have different densities",
        "Each metal has electrons in different energy levels; when excited, electrons emit photons of specific wavelengths (colours) as they return to lower energy levels",
        "Different metals burn at different temperatures",
        "The colours are caused by different oxides forming"
      ],
      "correctIndex": 1,
      "explanation": "Flame tests work because heat excites electrons to higher energy levels. As electrons return to lower levels, they emit photons with energy equal to the difference between levels. Each element has unique energy level spacings, producing characteristic emission wavelengths (colours)."
    },
    {
      "id": "MCQ-TOPUP-Y910-017",
      "section": "Science Reasoning",
      "topic": "Chemical Bonding",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the properties of diamond and graphite. Diamond is hard and does not conduct electricity; graphite is soft and conducts electricity. Both are pure carbon. Which of the following correctly explains these differences?",
      "options": [
        "Diamond has ionic bonds; graphite has covalent bonds",
        "In diamond, all four valence electrons form covalent bonds in a rigid 3D lattice; in graphite, three electrons form bonds in layers with one delocalised electron per atom between layers",
        "Diamond is denser than graphite",
        "Graphite has a higher melting point than diamond"
      ],
      "correctIndex": 1,
      "explanation": "Diamond: each C forms 4 covalent bonds in a tetrahedral 3D network — very hard, no free electrons (insulator). Graphite: each C forms 3 bonds in hexagonal layers, leaving one delocalised electron per atom — soft (layers slide), good conductor."
    },
    {
      "id": "MCQ-CHEM-Y910-029",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the pH of a weak acid and a strong acid of the same concentration. The weak acid has a higher pH. Which of the following best explains this?",
      "options": [
        "The weak acid has fewer hydrogen atoms",
        "The weak acid only partially dissociates in water, producing fewer H⁺ ions",
        "The weak acid has a higher molar mass",
        "The weak acid reacts faster"
      ],
      "correctIndex": 1,
      "explanation": "Strong acids fully dissociate in water; weak acids only partially dissociate. At the same concentration, a weak acid produces fewer H⁺ ions, giving a higher pH (less acidic)."
    },
    {
      "id": "MCQ-CHEM-Y910-040",
      "section": "Science Reasoning",
      "topic": "Electrochemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student calculates the empirical formula of a compound containing 40% carbon, 6.7% hydrogen and 53.3% oxygen by mass. What is the empirical formula?",
      "options": [
        "CH₂O",
        "C₂H₄O",
        "CH₄O",
        "C₂H₂O"
      ],
      "correctIndex": 0,
      "explanation": "Divide by atomic masses: C = 40/12 = 3.33, H = 6.7/1 = 6.7, O = 53.3/16 = 3.33. Ratio C:H:O = 1:2:1. Empirical formula = CH₂O."
    },
    {
      "id": "MCQ-CHEM-Y910-050",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why plastics are difficult to dispose of?",
      "options": [
        "Plastics are highly reactive",
        "Most plastics are non-biodegradable — microorganisms cannot break down the long polymer chains",
        "Plastics dissolve in water",
        "Plastics are too heavy to landfill"
      ],
      "correctIndex": 1,
      "explanation": "Most synthetic polymers have very long, stable carbon chains that microorganisms cannot break down. This makes them persist in the environment for hundreds of years."
    },
    {
      "id": "MCQ-LAST-Y910-020",
      "section": "Science Reasoning",
      "topic": "Quantitative Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses the mass spectrum of an organic compound. The molecular ion peak appears at m/z = 46. The compound contains C, H and O only. Which of the following could be the molecular formula?",
      "options": [
        "CH₂O₂",
        "C₂H₆O",
        "C₂H₄O",
        "CH₄O₂"
      ],
      "correctIndex": 1,
      "explanation": "Mr = 46. C₂H₆O: 2(12) + 6(1) + 16 = 24 + 6 + 16 = 46. ✓ This is ethanol (C₂H₅OH). CH₂O₂ = 12+2+32 = 46 also works (formic acid), but C₂H₆O is the more common answer for Mr=46."
    },
    {
      "id": "MCQ-TOPUP-Y910-022",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates conservation of momentum using two trolleys on a frictionless track. Trolley A (2 kg, 3 m/s) collides with stationary trolley B (1 kg) and they stick together. What is their combined velocity after collision?",
      "options": [
        "3 m/s",
        "2 m/s",
        "1.5 m/s",
        "6 m/s"
      ],
      "correctIndex": 1,
      "explanation": "Conservation of momentum: p_before = p_after. 2 × 3 + 1 × 0 = (2+1) × v. 6 = 3v. v = 2 m/s."
    },
    {
      "id": "MCQ-FINAL-Y910-029",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student analyses temperature records from 1880 to present. The global average temperature has increased by approximately 1.1°C. Which of the following correctly identifies the primary driver of this warming?",
      "options": [
        "Natural solar variability",
        "Increased atmospheric CO2 and other greenhouse gases from human activities (fossil fuel combustion, deforestation, agriculture)",
        "Volcanic activity",
        "Changes in Earth's orbit"
      ],
      "correctIndex": 1,
      "explanation": "The scientific consensus, supported by multiple independent lines of evidence, identifies increased greenhouse gas concentrations from human activities as the primary driver of observed warming since 1880. Natural factors (solar variability, volcanoes) cannot explain the observed trend."
    },
    {
      "id": "MCQ-TOPUP-Y910-028",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates electromagnetic induction. Moving a magnet into a coil produces a current. Which of the following changes would increase the induced EMF?",
      "options": [
        "Moving the magnet more slowly",
        "Using a weaker magnet",
        "Increasing the number of turns in the coil",
        "Decreasing the cross-sectional area of the coil"
      ],
      "correctIndex": 2,
      "explanation": "By Faraday's law, induced EMF is proportional to the rate of change of magnetic flux. Increasing the number of turns multiplies the EMF (each turn contributes). Faster movement, stronger magnet and larger coil area also increase EMF."
    },
    {
      "id": "MCQ-PHYS-Y910-040",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the evidence for the Big Bang theory?",
      "options": [
        "The universe is contracting",
        "The cosmic microwave background radiation and red shift of distant galaxies both support the Big Bang",
        "Only red shift supports the Big Bang",
        "The universe has always existed in its current state"
      ],
      "correctIndex": 1,
      "explanation": "Two key pieces of evidence support the Big Bang: (1) red shift of distant galaxies shows the universe is expanding; (2) the cosmic microwave background radiation is the remnant heat from the Big Bang itself."
    },
    {
      "id": "MCQ-EARTH-Y910-010",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the greenhouse effect?",
      "options": [
        "The atmosphere reflects all solar radiation back to space",
        "Greenhouse gases absorb outgoing infrared radiation from Earth's surface and re-emit it, warming the lower atmosphere",
        "The ozone layer traps heat",
        "The greenhouse effect is entirely human-caused"
      ],
      "correctIndex": 1,
      "explanation": "The natural greenhouse effect: solar radiation passes through the atmosphere and warms Earth's surface. The surface emits infrared radiation, which is absorbed by greenhouse gases (CO₂, H₂O, CH₄) and re-emitted in all directions, warming the lower atmosphere."
    },
    {
      "id": "MCQ-EARTH-Y910-019",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on enzyme activity. They use a water bath to control temperature. Which of the following correctly identifies the independent variable?",
      "options": [
        "Enzyme activity",
        "Temperature",
        "The type of enzyme",
        "The volume of substrate"
      ],
      "correctIndex": 1,
      "explanation": "The independent variable is the variable deliberately changed by the experimenter. In this investigation, the student changes the temperature to see its effect on enzyme activity."
    },
    {
      "id": "MCQ-EARTH-Y910-023",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of light intensity on the rate of photosynthesis and respiration in a plant. At the compensation point, which of the following is true?",
      "options": [
        "Photosynthesis rate exceeds respiration rate",
        "Respiration rate exceeds photosynthesis rate",
        "The rate of photosynthesis equals the rate of respiration",
        "The plant produces no CO₂"
      ],
      "correctIndex": 2,
      "explanation": "The compensation point is the light intensity at which the rate of photosynthesis exactly equals the rate of respiration. Net gas exchange is zero — all CO₂ produced by respiration is used in photosynthesis."
    },
    {
      "id": "MCQ-Z-Y910-017",
      "section": "Science Reasoning",
      "topic": "Space and Astronomy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the relationship between orbital radius and orbital speed for planets. As orbital radius increases, orbital speed decreases. Which of the following correctly explains this?",
      "options": [
        "Larger orbits have more friction",
        "Gravitational force decreases with distance (inverse square law); less centripetal force is needed for a larger orbit, so orbital speed is lower (v = √(GM/r))",
        "Larger planets move faster",
        "Orbital speed is independent of radius"
      ],
      "correctIndex": 1,
      "explanation": "Orbital speed v = √(GM/r). As orbital radius r increases, v decreases (inversely proportional to √r). Planets further from the Sun move more slowly — consistent with Kepler's third law (T² ∝ r³)."
    },
    {
      "id": "MCQ-FINAL-Y910-015",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of removing all decomposers from a model ecosystem. Which of the following correctly predicts the long-term consequence?",
      "options": [
        "The ecosystem becomes more productive",
        "Nutrients become locked in dead organic matter, unavailable to producers; plant growth declines and the ecosystem collapses",
        "Decomposers are not important to ecosystems",
        "Primary consumers increase without decomposers"
      ],
      "correctIndex": 1,
      "explanation": "Decomposers (bacteria, fungi) break down dead organic matter, releasing inorganic nutrients (nitrates, phosphates) back into the soil for plant uptake. Without decomposers, nutrients accumulate in dead matter, become unavailable to producers, and the ecosystem's nutrient cycles break down."
    },
    {
      "id": "MCQ-EXTRA-Y910-018",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the greenhouse warming potential of CO₂ and methane. Methane has a global warming potential (GWP) approximately 25 times greater than CO₂ over 100 years. Which of the following correctly explains why reducing methane emissions is a high priority?",
      "options": [
        "Methane is more abundant than CO₂",
        "Despite lower atmospheric concentration, methane's high GWP means each molecule causes significantly more warming than CO₂; reducing methane has rapid climate benefits",
        "Methane lasts longer in the atmosphere than CO₂",
        "Methane is easier to measure than CO₂"
      ],
      "correctIndex": 1,
      "explanation": "Methane's GWP of ~25 means it traps 25 times more heat per molecule than CO₂ over 100 years. Although less abundant, reducing methane emissions (from agriculture, landfill, fossil fuels) provides rapid climate benefits because methane has a shorter atmospheric lifetime (~12 years) than CO₂."
    },
    {
      "id": "MCQ-BIO-Y910-012",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following best explains why mitochondria have a folded inner membrane?",
      "options": [
        "To increase the strength of the organelle",
        "To increase the surface area for ATP production",
        "To store more DNA",
        "To allow more ribosomes to attach"
      ],
      "correctIndex": 1,
      "explanation": "The cristae (folds of the inner mitochondrial membrane) greatly increase the surface area available for the enzymes and proteins involved in ATP synthesis."
    },
    {
      "id": "MCQ-BIO-Y910-032",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student finds that two genes are always inherited together and do not assort independently. What is the most likely explanation?",
      "options": [
        "The genes are on different chromosomes",
        "The genes are linked on the same chromosome",
        "The genes show codominance",
        "The genes are both recessive"
      ],
      "correctIndex": 1,
      "explanation": "Genes located close together on the same chromosome tend to be inherited together (genetic linkage) and do not follow Mendel's law of independent assortment."
    },
    {
      "id": "MCQ-BIO-Y910-052",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures their core body temperature on a hot day. Sweating increases. Which of the following correctly explains how sweating reduces body temperature?",
      "options": [
        "Sweat absorbs heat from the body as it evaporates",
        "Sweat increases blood flow to the skin",
        "Sweat causes vasoconstriction",
        "Sweat increases metabolic rate"
      ],
      "correctIndex": 0,
      "explanation": "Evaporation of sweat from the skin surface is an endothermic process — it absorbs latent heat from the body, cooling the skin and blood flowing near the surface."
    },
    {
      "id": "MCQ-BIO-Y910-065",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the difference between interspecific and intraspecific competition?",
      "options": [
        "Interspecific competition is between individuals of the same species",
        "Intraspecific competition is between different species",
        "Interspecific competition is between different species; intraspecific is within the same species",
        "They are the same process"
      ],
      "correctIndex": 2,
      "explanation": "Interspecific competition occurs between different species competing for the same resource. Intraspecific competition occurs between individuals of the same species."
    },
    {
      "id": "MCQ-MORE-Y910-012",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the embryos of fish, reptiles, birds and mammals. All show gill slits and tails at early stages. Which of the following correctly interprets this observation?",
      "options": [
        "All these animals breathe through gills as adults",
        "Shared embryonic features reflect common ancestry — early developmental pathways are conserved across vertebrates",
        "Embryos are identical to adults",
        "The observation is coincidental"
      ],
      "correctIndex": 1,
      "explanation": "Comparative embryology reveals that vertebrate embryos share similar early developmental stages (pharyngeal arches, post-anal tail), reflecting their common ancestry. These conserved developmental pathways are evidence for evolution from a common vertebrate ancestor."
    },
    {
      "id": "MCQ-X-Y910-003",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on the rate of transpiration. Rate increases with temperature. Which of the following correctly explains this?",
      "options": [
        "Higher temperature closes stomata",
        "Higher temperature increases the kinetic energy of water molecules, increasing evaporation from mesophyll cells and steepening the water vapour concentration gradient between leaf and air",
        "Higher temperature reduces water uptake",
        "Higher temperature increases root pressure"
      ],
      "correctIndex": 1,
      "explanation": "Transpiration rate depends on evaporation from mesophyll cells and diffusion of water vapour through stomata. Higher temperature increases kinetic energy of water molecules (faster evaporation) and reduces relative humidity of air (steeper concentration gradient), both increasing transpiration rate."
    },
    {
      "id": "MCQ-LAST2-Y910-009",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing NaCl concentration on the activity of a halophilic (salt-loving) bacterium versus a non-halophilic bacterium. Halophiles grow optimally at high salt; non-halophiles are inhibited. Which of the following correctly explains the difference?",
      "options": [
        "Halophiles have no cell membrane",
        "Halophiles have evolved enzymes and membrane components adapted to function at high ionic strength; non-halophile enzymes denature at high salt concentrations",
        "Halophiles produce more ATP",
        "Non-halophiles have thicker cell walls"
      ],
      "correctIndex": 1,
      "explanation": "Halophilic bacteria have evolved molecular adaptations: their enzymes have acidic surface residues that maintain stability at high ionic strength; their membranes contain ether-linked lipids resistant to salt. Non-halophile enzymes and membranes are disrupted by high salt concentrations."
    },
    {
      "id": "MCQ-TOPUP-Y910-013",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the melting points of Period 3 elements: Na (98°C), Mg (650°C), Al (660°C), Si (1414°C), P (44°C), S (119°C), Cl (−101°C), Ar (−189°C). Which of the following correctly explains why silicon has the highest melting point?",
      "options": [
        "Silicon has the most electrons",
        "Silicon has a giant covalent structure with strong Si-Si covalent bonds throughout the lattice, requiring enormous energy to break",
        "Silicon is a metal",
        "Silicon has the highest atomic mass in Period 3"
      ],
      "correctIndex": 1,
      "explanation": "Silicon has a giant covalent (diamond-like) structure where each Si atom is bonded to four others by strong covalent bonds. Breaking this network requires very high energy. Metals (Na, Mg, Al) have lower melting points due to weaker metallic bonding; non-metals have molecular structures with weak intermolecular forces."
    },
    {
      "id": "MCQ-TOPUP-Y910-018",
      "section": "Science Reasoning",
      "topic": "Chemical Bonding",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the boiling points of noble gases: He (−269°C), Ne (−246°C), Ar (−186°C), Kr (−153°C), Xe (−108°C). Which of the following correctly explains the trend?",
      "options": [
        "Noble gases form stronger bonds down the group",
        "Down the group, atomic size and electron count increase, strengthening van der Waals (London dispersion) forces between atoms",
        "Noble gases become ionic down the group",
        "The trend is due to increasing nuclear charge only"
      ],
      "correctIndex": 1,
      "explanation": "Van der Waals (London dispersion) forces arise from temporary dipoles caused by electron movement. Larger atoms with more electrons have stronger, more polarisable electron clouds, creating stronger temporary dipoles and greater intermolecular forces — hence higher boiling points."
    },
    {
      "id": "MCQ-CHEM-Y910-030",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes oxidation in terms of electron transfer?",
      "options": [
        "Gain of electrons",
        "Loss of protons",
        "Loss of electrons",
        "Gain of protons"
      ],
      "correctIndex": 2,
      "explanation": "Oxidation is the loss of electrons (OIL — Oxidation Is Loss). Reduction is the gain of electrons (RIG — Reduction Is Gain). Together: REDOX reactions."
    },
    {
      "id": "MCQ-CHEM2-Y910-013",
      "section": "Science Reasoning",
      "topic": "Electrochemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student electroplates a steel spoon with silver using silver nitrate solution. Which of the following correctly describes what happens at the cathode?",
      "options": [
        "Silver ions are oxidised and deposited",
        "Silver ions are reduced and deposited as silver metal on the spoon",
        "The spoon dissolves into solution",
        "Oxygen gas is produced"
      ],
      "correctIndex": 1,
      "explanation": "At the cathode (negative electrode), Ag⁺ ions from solution gain electrons (reduction) and are deposited as silver metal on the spoon surface: Ag⁺ + e⁻ → Ag."
    },
    {
      "id": "MCQ-CHEM2-Y910-017",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student reacts ethene with bromine water. The bromine water is decolourised. Which type of reaction has occurred and what is the product?",
      "options": [
        "Substitution; dibromoethane",
        "Addition; 1,2-dibromoethane",
        "Elimination; bromoethene",
        "Combustion; CO₂ and H₂O"
      ],
      "correctIndex": 1,
      "explanation": "Alkenes undergo addition reactions across the C=C double bond. Bromine adds across the double bond: CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (1,2-dibromoethane). The decolourisation of bromine water is the test for unsaturation."
    },
    {
      "id": "MCQ-X-Y910-012",
      "section": "Science Reasoning",
      "topic": "Quantitative Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student calculates the percentage composition by mass of carbon in ethanol (C₂H₅OH, Mr = 46). What is the percentage of carbon?",
      "options": [
        "26.1%",
        "52.2%",
        "13.0%",
        "34.8%"
      ],
      "correctIndex": 1,
      "explanation": "Mass of carbon in C₂H₅OH = 2 × 12 = 24 g/mol. Percentage = (24/46) × 100 = 52.2%."
    },
    {
      "id": "MCQ-TOPUP-Y910-023",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the gravitational potential energy of a 2 kg ball at 5 m height (g = 10 m/s²) and its kinetic energy at the bottom of a ramp. GPE = 100 J; KE = 80 J. Which of the following correctly explains the difference?",
      "options": [
        "Energy was created during the fall",
        "20 J was lost to friction and air resistance (thermal energy)",
        "The calculation is wrong",
        "Kinetic energy cannot equal potential energy"
      ],
      "correctIndex": 1,
      "explanation": "Conservation of energy: total energy is conserved but can change form. GPE (100 J) converts to KE + thermal energy. KE = 80 J means 20 J was dissipated as heat through friction and air resistance."
    },
    {
      "id": "MCQ-FINAL-Y910-030",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the carbon cycle. Which of the following correctly identifies the process that transfers the most carbon from the atmosphere to the biosphere annually?",
      "options": [
        "Volcanic outgassing",
        "Photosynthesis by terrestrial plants and marine phytoplankton",
        "Weathering of rocks",
        "Ocean evaporation"
      ],
      "correctIndex": 1,
      "explanation": "Photosynthesis is the primary mechanism transferring carbon from atmospheric CO2 into organic molecules in living organisms. Terrestrial plants and marine phytoplankton together fix approximately 120 Gt of carbon per year from the atmosphere."
    },
    {
      "id": "MCQ-TOPUP-Y910-029",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student designs an experiment to test whether a new fertiliser increases plant growth. They use 30 plants — 15 with fertiliser, 15 without. All other conditions are identical. After 4 weeks, they measure height. Which of the following correctly identifies the control group?",
      "options": [
        "The 15 plants with fertiliser",
        "The 15 plants without fertiliser",
        "All 30 plants together",
        "The measuring equipment"
      ],
      "correctIndex": 1,
      "explanation": "The control group receives no treatment (no fertiliser). It provides a baseline against which the experimental group (with fertiliser) is compared. Any difference in height can then be attributed to the fertiliser."
    },
    {
      "id": "MCQ-EXTRA-Y910-007",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the photoelectric effect. Increasing the frequency of light above the threshold frequency increases the maximum kinetic energy of emitted electrons. Which of the following correctly explains this?",
      "options": [
        "Higher frequency means more photons",
        "Higher frequency photons have more energy (E=hf); after overcoming the work function, more energy remains as kinetic energy of the electron",
        "Higher frequency increases the intensity",
        "Higher frequency reduces the work function"
      ],
      "correctIndex": 1,
      "explanation": "Photon energy E = hf. Above the threshold frequency, the photon has enough energy to eject an electron. Any energy above the work function (φ) becomes kinetic energy: KE_max = hf - φ. Higher frequency → more energy → greater KE_max."
    },
    {
      "id": "MCQ-EARTH-Y910-031",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the efficiency of energy transfer in a food chain: grass → cow → human. Which of the following correctly explains why eating plants directly is more energy-efficient than eating beef?",
      "options": [
        "Plants contain more protein than beef",
        "Each trophic level loses approximately 90% of energy as heat and waste; eating plants skips one energy-losing step",
        "Cows destroy energy",
        "Humans cannot digest beef efficiently"
      ],
      "correctIndex": 1,
      "explanation": "Only ~10% of energy transfers between trophic levels. Eating plants (one transfer) is far more efficient than eating beef (two transfers: plant→cow→human). This is why plant-based diets have a lower environmental footprint."
    },
    {
      "id": "MCQ-EARTH-Y910-020",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student calculates the percentage error of a measurement. The true value is 50 cm and the measured value is 48 cm. What is the percentage error?",
      "options": [
        "2%",
        "4%",
        "96%",
        "0.04%"
      ],
      "correctIndex": 1,
      "explanation": "Percentage error = (|measured - true| / true) × 100 = (|48 - 50| / 50) × 100 = (2/50) × 100 = 4%."
    },
    {
      "id": "MCQ-EARTH-Y910-024",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses data showing that a species of bird has a beak size that has increased over 20 years during a period of drought when only large, hard seeds were available. Which of the following correctly explains this observation?",
      "options": [
        "Individual birds grew larger beaks in response to the drought",
        "Birds with larger beaks were better able to crack hard seeds, survived and reproduced more, passing the large-beak alleles to offspring",
        "All birds developed larger beaks through mutation",
        "The drought caused a change in the birds' DNA"
      ],
      "correctIndex": 1,
      "explanation": "This is natural selection in action. Pre-existing variation in beak size meant birds with larger beaks could access food during drought. They survived and reproduced, increasing the frequency of large-beak alleles over generations."
    },
    {
      "id": "MCQ-LAST2-Y910-018",
      "section": "Science Reasoning",
      "topic": "Space and Astronomy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of a gravitational slingshot manoeuvre on a spacecraft. The spacecraft gains kinetic energy. Which of the following correctly explains this?",
      "options": [
        "Energy is created during the manoeuvre",
        "The spacecraft transfers momentum from the planet during a close flyby; in the planet's reference frame the spacecraft's speed is unchanged, but in the Sun's frame it gains speed from the planet's orbital motion",
        "The planet loses no energy",
        "Gravity does work on the spacecraft directly"
      ],
      "correctIndex": 1,
      "explanation": "Gravitational slingshot (gravity assist): the spacecraft approaches a moving planet, curves around it and departs. In the planet's frame, speed is conserved. But in the Sun's frame, the spacecraft gains momentum from the planet's orbital motion. The planet loses an imperceptibly small amount of orbital energy."
    },
    {
      "id": "MCQ-FINAL-Y910-016",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the reaction between zinc and sulfuric acid. The rate of hydrogen gas production decreases over time. Which of the following correctly explains this?",
      "options": [
        "The temperature decreases over time",
        "As the reaction proceeds, reactant concentration decreases, reducing collision frequency and reaction rate",
        "The zinc becomes more reactive over time",
        "The acid becomes more concentrated over time"
      ],
      "correctIndex": 1,
      "explanation": "As zinc and sulfuric acid are consumed, their concentrations decrease. Lower concentration means fewer particles per unit volume, reducing collision frequency and the rate of successful collisions — reaction rate decreases over time."
    },
    {
      "id": "MCQ-EXTRA-Y910-019",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of urbanisation on local temperature. Urban areas are consistently warmer than surrounding rural areas. Which of the following correctly explains the urban heat island effect?",
      "options": [
        "Urban areas receive more solar radiation",
        "Dark surfaces (roads, buildings) absorb more solar energy; reduced vegetation decreases evaporative cooling; waste heat from vehicles and buildings all contribute to higher urban temperatures",
        "Urban areas have more greenhouse gases",
        "Urban areas are at lower altitude"
      ],
      "correctIndex": 1,
      "explanation": "The urban heat island effect results from: dark impervious surfaces absorbing more solar radiation; reduced vegetation (less evapotranspiration cooling); waste heat from transport and buildings; and reduced wind speed between buildings. Together these raise urban temperatures by 1-3°C above rural areas."
    },
    {
      "id": "MCQ-BIO-Y910-013",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A cell producing large amounts of protein for export would be expected to have an abundance of which organelles?",
      "options": [
        "Chloroplasts and vacuoles",
        "Rough ER and Golgi apparatus",
        "Smooth ER and lysosomes",
        "Centrioles and mitochondria"
      ],
      "correctIndex": 1,
      "explanation": "Protein synthesis occurs on ribosomes attached to the rough ER; the Golgi apparatus then modifies and packages proteins for secretion."
    },
    {
      "id": "MCQ-BIO-Y910-033",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the relationship between genotype and phenotype?",
      "options": [
        "Genotype and phenotype are always identical",
        "Phenotype is determined solely by genotype",
        "Genotype is the genetic makeup; phenotype is the observable result of genotype and environment",
        "Phenotype determines genotype"
      ],
      "correctIndex": 2,
      "explanation": "Phenotype results from the interaction between an organism's genotype and its environment. The same genotype can produce different phenotypes in different environments."
    },
    {
      "id": "MCQ-BIO-Y910-053",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the difference between the sympathetic and parasympathetic nervous systems?",
      "options": [
        "Both increase heart rate",
        "Sympathetic prepares the body for action; parasympathetic promotes rest and digestion",
        "Parasympathetic prepares the body for action; sympathetic promotes rest",
        "They have identical effects on the body"
      ],
      "correctIndex": 1,
      "explanation": "The sympathetic nervous system triggers the fight-or-flight response (increased heart rate, dilated pupils). The parasympathetic system promotes rest-and-digest responses."
    },
    {
      "id": "MCQ-BIO-Y910-066",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates succession in an abandoned field. Which of the following correctly describes the process?",
      "options": [
        "The ecosystem remains unchanged over time",
        "Pioneer species colonise first, gradually modifying conditions until a stable climax community is reached",
        "The climax community appears immediately",
        "Succession only occurs in aquatic environments"
      ],
      "correctIndex": 1,
      "explanation": "Ecological succession is the gradual change in species composition over time. Pioneer species modify the environment, enabling other species to establish, eventually leading to a stable climax community."
    },
    {
      "id": "MCQ-MORE-Y910-013",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates genetic variation in a population of 500 beetles. A flood kills 490 beetles randomly, leaving 10 survivors. The survivors happen to be mostly one colour. Which evolutionary process does this illustrate?",
      "options": [
        "Natural selection",
        "Genetic drift (bottleneck effect) — random survival of a small sample causes allele frequencies to change by chance",
        "Mutation",
        "Gene flow"
      ],
      "correctIndex": 1,
      "explanation": "The bottleneck effect is a form of genetic drift. When a population is drastically reduced by a random event, the survivors may not represent the original allele frequencies. The small surviving population has reduced genetic diversity and different allele frequencies by chance."
    },
    {
      "id": "MCQ-X-Y910-004",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of mineral deficiency on plant growth. Plants lacking nitrate ions show stunted growth and yellowing leaves. Which of the following correctly explains this?",
      "options": [
        "Nitrate ions are needed for photosynthesis directly",
        "Nitrate ions are needed for synthesis of amino acids and proteins (including chlorophyll); deficiency limits protein synthesis and chlorophyll production",
        "Nitrate ions are needed for water uptake",
        "Nitrate ions are needed for cell wall synthesis"
      ],
      "correctIndex": 1,
      "explanation": "Nitrate ions (NO₃⁻) provide nitrogen for amino acid synthesis. Without nitrogen, plants cannot make proteins (including enzymes) or chlorophyll. Stunted growth results from reduced protein synthesis; yellowing (chlorosis) results from reduced chlorophyll production."
    },
    {
      "id": "MCQ-TOPUP-Y910-014",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the reaction of Period 3 metals with water. Sodium reacts vigorously; magnesium reacts very slowly with cold water but faster with steam; aluminium does not react with water under normal conditions. Which of the following correctly explains this trend?",
      "options": [
        "Atomic mass increases across the period",
        "Metallic character and reactivity decrease across Period 3 as nuclear charge increases, making it harder to lose outer electrons",
        "Melting point increases across the period",
        "The metals become less dense across the period"
      ],
      "correctIndex": 1,
      "explanation": "Across Period 3, nuclear charge increases while shielding remains similar. This makes it progressively harder to remove outer electrons. Na (1 outer electron, low ionisation energy) is most reactive; Al (3 outer electrons, higher ionisation energy) is least reactive of the three metals."
    },
    {
      "id": "MCQ-TOPUP-Y910-019",
      "section": "Science Reasoning",
      "topic": "Chemical Bonding",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student drops a ball from a tall building and measures its velocity every second. Initially velocity increases by 9.8 m/s each second, but eventually velocity becomes constant. Which of the following correctly explains why velocity becomes constant?",
      "options": [
        "Gravity decreases with height",
        "Air resistance increases with velocity until it equals the gravitational force; net force becomes zero and acceleration stops — terminal velocity is reached",
        "The ball runs out of energy",
        "Gravity reverses direction"
      ],
      "correctIndex": 1,
      "explanation": "As velocity increases, air resistance (drag) increases. When drag equals the gravitational force (weight), net force = 0. By Newton's first law, the ball continues at constant velocity — terminal velocity."
    },
    {
      "id": "MCQ-CHEM2-Y910-001",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the reaction between sodium thiosulfate and hydrochloric acid. As concentration of sodium thiosulfate increases, the time for the solution to turn cloudy decreases. Which of the following correctly explains this?",
      "options": [
        "Higher concentration lowers activation energy",
        "Higher concentration increases the frequency of successful collisions between reactant particles",
        "Higher concentration increases temperature",
        "Higher concentration changes the products"
      ],
      "correctIndex": 1,
      "explanation": "Collision theory: higher concentration means more particles per unit volume, increasing collision frequency. More collisions per second means more successful collisions (those exceeding activation energy), increasing reaction rate."
    },
    {
      "id": "MCQ-X-Y910-011",
      "section": "Science Reasoning",
      "topic": "Electrochemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the electrolysis of molten lead bromide. Which of the following correctly describes the products?",
      "options": [
        "Lead at anode; bromine at cathode",
        "Bromine at anode; lead at cathode",
        "Hydrogen at cathode; oxygen at anode",
        "Lead at both electrodes"
      ],
      "correctIndex": 1,
      "explanation": "In molten PbBr₂: Pb²⁺ ions migrate to the cathode (negative) and are reduced to lead metal: Pb²⁺ + 2e⁻ → Pb. Br⁻ ions migrate to the anode (positive) and are oxidised to bromine gas: 2Br⁻ → Br₂ + 2e⁻."
    },
    {
      "id": "MCQ-CHEM2-Y910-018",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the boiling points of ethanol (78°C) and dimethyl ether (−24°C), which are structural isomers (both C₂H₆O). Which of the following correctly explains the large difference?",
      "options": [
        "Ethanol has a higher molar mass",
        "Ethanol molecules form hydrogen bonds through the –OH group; dimethyl ether cannot form hydrogen bonds as there is no O–H bond",
        "Dimethyl ether has stronger van der Waals forces",
        "Ethanol is more polar overall"
      ],
      "correctIndex": 1,
      "explanation": "Ethanol has an –OH group where the hydrogen is bonded directly to oxygen, enabling hydrogen bonding between molecules. Dimethyl ether (CH₃–O–CH₃) has no O–H bond, so it cannot form hydrogen bonds. Hydrogen bonds are much stronger than van der Waals forces, giving ethanol a much higher boiling point."
    },
    {
      "id": "MCQ-FIN-Y910-007",
      "section": "Science Reasoning",
      "topic": "Quantitative Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the reaction of sodium carbonate with hydrochloric acid: Na2CO3 + 2HCl → 2NaCl + H2O + CO2. What volume of CO2 is produced at STP when 5.3 g of Na2CO3 reacts with excess HCl? (Mr Na2CO3 = 106; molar volume at STP = 22.4 L/mol)",
      "options": [
        "1.12 L",
        "2.24 L",
        "0.56 L",
        "4.48 L"
      ],
      "correctIndex": 0,
      "explanation": "Moles Na2CO3 = 5.3/106 = 0.05 mol. From equation, 1 mol Na2CO3 produces 1 mol CO2. So 0.05 mol CO2. Volume = 0.05 × 22.4 = 1.12 L."
    },
    {
      "id": "MCQ-TOPUP-Y910-024",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates pressure in fluids using a U-tube manometer. Increasing the height of liquid on one side increases pressure at the bottom. Which of the following correctly describes the relationship?",
      "options": [
        "Pressure is independent of height",
        "Pressure = ρgh, where ρ is fluid density, g is gravitational field strength and h is height of fluid",
        "Pressure only depends on the volume of fluid",
        "Pressure decreases with height of fluid"
      ],
      "correctIndex": 1,
      "explanation": "Fluid pressure at depth h: P = ρgh. Pressure increases linearly with depth (height of fluid above). This explains why deep-sea pressure is enormous and why dams are thicker at the base."
    },
    {
      "id": "MCQ-FINAL-Y910-031",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the albedo of different surfaces: fresh snow (0.85), forest (0.15), ocean (0.06). Which of the following correctly explains the significance of deforestation for climate?",
      "options": [
        "Forests have higher albedo than cleared land",
        "Replacing dark forest (low albedo) with lighter agricultural land (higher albedo) increases reflection, but loss of carbon storage and transpiration cooling have larger warming effects",
        "Deforestation has no effect on albedo",
        "Forests absorb more solar radiation than snow"
      ],
      "correctIndex": 1,
      "explanation": "Deforestation has complex climate effects. While replacing dark forest with lighter crops slightly increases albedo (cooling effect), the dominant effects are: release of stored carbon (warming), reduced transpiration (less evaporative cooling), and reduced CO2 uptake — net result is warming."
    },
    {
      "id": "IC-32-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how deforestation affects both local and global environments.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Deforestation has profound local and global environmental consequences. Locally: removal of trees destroys habitat, reducing biodiversity; tree roots no longer bind soil, increasing erosion and landslide risk; reduced transpiration decreases local rainfall and increases temperature; rivers become silted and flooding increases. Globally: forests store approximately 650 billion tonnes of carbon. When trees are burned or decompose, this carbon is released as CO2, contributing to climate change. Tropical forests are particularly important — the Amazon alone stores approximately 150-200 billion tonnes of carbon. Deforestation also reduces the planet's capacity to absorb atmospheric CO2 through photosynthesis. Additionally, forests regulate the global water cycle — large-scale deforestation can alter precipitation patterns thousands of kilometres away. Sustainable forest management, reforestation and reducing demand for products driving deforestation are essential responses."
    },
    {
      "id": "IC-33-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain what osmosis is and give an example of its importance in living organisms.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Osmosis is the net movement of water molecules across a partially permeable membrane from a region of higher water potential (lower solute concentration) to a region of lower water potential (higher solute concentration). It is a passive process requiring no energy. In living organisms, osmosis is critical for: maintaining cell turgor in plants (turgid cells provide structural support; wilting occurs when cells lose water); reabsorption of water in the kidney nephron; absorption of water by plant roots from soil; and regulation of blood osmolarity. A practical example: placing a potato cylinder in concentrated salt solution causes it to lose water by osmosis and become flaccid (plasmolysis). In distilled water, the cylinder gains water and becomes turgid. Understanding osmosis is fundamental to medicine — intravenous fluids must be isotonic to prevent red blood cells from swelling or shrinking."
    },
    {
      "id": "IC-34-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the periodic table is organised and what trends it reveals.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The periodic table organises elements by increasing atomic number in rows (periods) and groups elements with similar chemical properties in columns (groups). Elements in the same group have the same number of valence electrons, explaining their similar reactivity. Key trends: atomic radius decreases across a period (increasing nuclear charge pulls electrons closer) and increases down a group (additional electron shells). Ionisation energy increases across a period and decreases down a group. Electronegativity increases across a period and decreases down a group. Metallic character decreases across a period and increases down a group. The table reveals patterns in reactivity: Group 1 metals become more reactive down the group; Group 17 halogens become less reactive. The periodic table is one of science's most powerful organisational tools — it allows prediction of unknown element properties and guides synthesis of new compounds and materials."
    },
    {
      "id": "IC-35-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the advantages and disadvantages of nuclear energy as a power source.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Nuclear energy generates electricity through controlled fission of uranium-235 or plutonium-239. Neutrons split heavy nuclei, releasing enormous energy (E=mc²) and more neutrons that sustain a chain reaction. Advantages: very low CO2 emissions during operation; high energy density (1 kg of uranium yields as much energy as 3000 tonnes of coal); reliable baseload power independent of weather. Disadvantages: radioactive waste remains hazardous for thousands of years, requiring secure long-term storage; catastrophic accidents (Chernobyl, Fukushima) release radioactive contamination; high construction costs and long build times; uranium mining has environmental impacts; proliferation risk (enrichment technology can produce weapons-grade material). Nuclear fusion — joining light nuclei — would produce more energy with less waste, but achieving sustained net energy gain remains a major scientific challenge. The debate over nuclear energy involves genuine trade-offs between climate, safety and economics."
    },
    {
      "id": "IC-36-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how the human heart pumps blood around the body.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The heart is a dual pump with four chambers. The right side pumps deoxygenated blood to the lungs (pulmonary circulation); the left side pumps oxygenated blood to the body (systemic circulation). Deoxygenated blood enters the right atrium via the vena cava, passes through the tricuspid valve to the right ventricle, and is pumped through the pulmonary valve into the pulmonary artery to the lungs. Oxygenated blood returns via the pulmonary veins to the left atrium, passes through the mitral valve to the left ventricle, and is pumped through the aortic valve into the aorta. The left ventricle has a thicker wall than the right because it must generate higher pressure to drive blood around the entire body. The sinoatrial node (pacemaker) initiates each heartbeat, coordinating atrial and ventricular contractions."
    },
    {
      "id": "IC-37-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe what happens during an allergic reaction at the cellular level.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "An allergic reaction is an inappropriate immune response to a harmless antigen (allergen) such as pollen, dust mites or peanut proteins. On first exposure, B lymphocytes produce IgE antibodies specific to the allergen. These IgE antibodies bind to mast cells throughout the body — sensitisation. On subsequent exposure, the allergen cross-links IgE antibodies on mast cells, triggering degranulation — mast cells release histamine and other inflammatory mediators. Histamine causes vasodilation (increased blood flow), increased vascular permeability (fluid leaks into tissues causing swelling), smooth muscle contraction (bronchoconstriction in asthma) and stimulation of nerve endings (itching). Antihistamines block histamine receptors, reducing symptoms. Anaphylaxis is a severe systemic allergic reaction causing widespread vasodilation, bronchoconstriction and potentially fatal circulatory collapse — treated with adrenaline (epinephrine)."
    },
    {
      "id": "IC-38-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how scientists investigate the causes of a new disease outbreak.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Investigating a new disease outbreak follows established epidemiological principles. First, case definition: precisely define what constitutes a case (symptoms, timing, location). Second, case finding: identify all cases through surveillance, contact tracing and laboratory testing. Third, descriptive epidemiology: characterise cases by person (who is affected), place (where) and time (when) — the epidemiological triad. Fourth, hypothesis generation: identify potential sources and transmission routes from patterns in the data. Fifth, analytical studies: case-control or cohort studies test hypotheses by comparing exposures between cases and controls. Sixth, laboratory investigation: isolate and identify the causative agent; test antimicrobial sensitivity. Seventh, control measures: implement interventions (quarantine, vaccination, hygiene measures) based on findings. The COVID-19 pandemic demonstrated both the power of this approach and the challenges of responding to a novel pathogen at global scale."
    },
    {
      "id": "IC-39-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain the difference between aerobic and anaerobic respiration.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Aerobic respiration: C6H12O6 + 6O2 → 6CO2 + 6H2O + ~36-38 ATP. It occurs in the cytoplasm (glycolysis) and mitochondria (Krebs cycle, oxidative phosphorylation). It fully oxidises glucose, producing maximum ATP. Anaerobic respiration occurs when oxygen is insufficient. In animals and some bacteria: glucose → lactic acid + 2 ATP (glycolysis only). In yeast and plants: glucose → ethanol + CO2 + 2 ATP (fermentation). Key differences: aerobic produces ~18 times more ATP per glucose; anaerobic is faster but less efficient; aerobic requires oxygen; anaerobic does not. Lactic acid fermentation in muscles during intense exercise causes fatigue and the burning sensation. The 'oxygen debt' after exercise represents the extra oxygen needed to metabolise accumulated lactic acid. Yeast fermentation is exploited in brewing (ethanol production) and bread-making (CO2 causes dough to rise)."
    },
    {
      "id": "IC-40-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how light microscopes and electron microscopes differ in their capabilities.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Light microscopes use visible light focused by glass lenses to magnify specimens up to approximately 1500× with a resolution of ~200 nm. They can image living cells and coloured specimens. Electron microscopes use beams of electrons (much shorter wavelength than light) focused by electromagnetic lenses. Transmission electron microscopes (TEM) pass electrons through ultra-thin sections, achieving resolution of ~0.1 nm and magnification up to 500 000× — revealing internal ultrastructure including ribosomes, membranes and viruses. Scanning electron microscopes (SEM) scan a focused electron beam across the surface, producing detailed 3D surface images at up to 100 000×. Limitations of electron microscopes: specimens must be dead (fixed and dehydrated); preparation artefacts may alter structure; expensive and complex to operate. Light microscopes remain essential for observing living cells, cell division and tissue sections."
    },
    {
      "id": "IC-41-F2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the role of decomposers in nutrient cycling.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Decomposers — primarily bacteria and fungi — are essential for nutrient cycling. They secrete extracellular enzymes that break down complex organic molecules (proteins, carbohydrates, lipids) in dead organisms and waste into simpler inorganic compounds: nitrates, phosphates, carbon dioxide and water. These inorganic nutrients are returned to the soil and atmosphere, where they become available to producers (plants) again. Without decomposers, nutrients would remain locked in dead organic matter, unavailable to living organisms. Ecosystems would accumulate dead material and eventually collapse as nutrients became depleted. Decomposers also play a role in soil formation — breaking down organic matter into humus, which improves soil structure and water retention. In aquatic ecosystems, decomposers recycle nutrients from dead organisms back into the water column, supporting phytoplankton growth. They are the invisible foundation of all nutrient cycles."
    },
    {
      "id": "AR-18-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student tests five unknown substances with litmus and universal indicator. Interpret the results to classify each substance.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To classify five unknown substances using litmus and universal indicator.\nObservation: Substances turning litmus red and universal indicator orange/red are acidic; blue litmus and green/blue universal indicator indicates neutral to alkaline.\nExplanation: Litmus is a pH indicator that turns red in acid (pH < 7) and blue in alkali (pH > 7). Universal indicator gives a colour corresponding to pH across the full scale. Combining both results allows classification as strongly acidic (pH 1-3), weakly acidic (pH 4-6), neutral (pH 7), weakly alkaline (pH 8-10) or strongly alkaline (pH 11-14).\nConclusion: The two indicators together provide more information than either alone. Universal indicator gives approximate pH; litmus confirms acid/alkali classification. This method is a simple, reliable way to classify unknown solutions."
    },
    {
      "id": "AR-19-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows a positive correlation between screen time and reported sleep problems in teenagers. Analyse this data critically.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between screen time and sleep quality in teenagers.\nObservation: Data shows a positive correlation between screen time and reported sleep problems.\nExplanation: Possible mechanisms include: blue light from screens suppresses melatonin production, delaying sleep onset; mentally stimulating content delays sleep; social media use causes anxiety. However, correlation does not establish causation — reverse causation is possible (poor sleepers may use screens more to pass time); confounding variables (stress, caffeine, exercise) may explain both.\nConclusion: The positive correlation suggests increased screen time is associated with more sleep problems. However, the study design (survey/observational) cannot establish causation. Controlled experimental studies are needed to determine whether screen time directly causes sleep problems."
    },
    {
      "id": "AR-20-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Rate of photosynthesis increases with CO2 concentration then plateaus. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of CO2 concentration on photosynthesis rate.\nObservation: Rate increased with CO2 concentration then plateaued.\nExplanation: At low CO2, carbon dioxide is the limiting factor for the Calvin cycle — RuBisCO cannot fix sufficient CO2 to maximise ATP and NADPH use. As CO2 increases, the Calvin cycle runs faster. At the plateau, another factor — light intensity, temperature or enzyme concentration — becomes limiting.\nConclusion: CO2 promotes photosynthesis only until another factor limits the rate. This demonstrates the concept of limiting factors — the rate of a biological process is determined by the factor in shortest supply."
    },
    {
      "id": "AR-21-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Objects of different masses dropped from the same height fall in approximately the same time. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate whether mass affects free-fall time.\nObservation: All objects fell in approximately equal time regardless of mass.\nExplanation: In free fall, gravitational acceleration g = 9.8 m/s² acts equally on all masses regardless of weight. This is because gravitational force is proportional to mass (F = mg), but so is inertia (F = ma) — the two effects cancel exactly. Air resistance differences for similar-shaped objects are negligible over short distances.\nConclusion: Mass does not affect free-fall time, consistent with Galileo's principle and Newton's laws. This result demonstrates the equivalence of gravitational and inertial mass — a fundamental principle of physics confirmed by Galileo's experiments at the Leaning Tower of Pisa."
    },
    {
      "id": "AR-22-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates the effect of exercise on heart rate. Results show heart rate increases with exercise intensity. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of exercise on heart rate.\nObservation: Heart rate increased with exercise intensity and returned to resting rate during recovery.\nExplanation: During exercise, muscles require more oxygen and produce more CO2. Rising CO2 lowers blood pH, detected by chemoreceptors in the medulla oblongata and aortic arch. The medulla signals the sinoatrial node to increase heart rate, delivering more oxygenated blood to muscles and removing CO2 more rapidly.\nConclusion: Heart rate increases proportionally with exercise intensity to meet increased metabolic demands. Recovery time reflects the time needed to clear CO2 and lactic acid and restore homeostasis. This demonstrates the cardiovascular system's role in maintaining homeostasis during exercise."
    },
    {
      "id": "AR-23-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that species diversity is higher in undisturbed habitats than in disturbed ones. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between habitat disturbance and species diversity.\nObservation: Species diversity was significantly higher in undisturbed habitats than in disturbed ones.\nExplanation: Disturbance (clearing, pollution, fragmentation) destroys habitat structure, eliminates specialist species requiring specific conditions, and favours generalist species. Undisturbed habitats provide diverse microhabitats, food sources and nesting sites supporting a wider range of species. The intermediate disturbance hypothesis suggests moderate disturbance can maximise diversity, but severe disturbance reduces it.\nConclusion: Habitat disturbance reduces species diversity by eliminating specialist species and simplifying habitat structure. This supports the importance of habitat protection for biodiversity conservation."
    },
    {
      "id": "AR-24-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the extension of a spring for different loads and finds a linear relationship up to a point. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the extension of a spring under different loads.\nObservation: Extension was proportional to load up to 6 N (linear relationship), beyond which the relationship became non-linear.\nExplanation: Up to the elastic limit, the spring obeys Hooke's law: F = kx, where k is the spring constant. The spring stores elastic potential energy and returns to its original length when the load is removed. Beyond the elastic limit, the spring is permanently deformed — the coils are stretched beyond their elastic range.\nConclusion: The spring obeys Hooke's law up to the elastic limit. Beyond this point, permanent deformation occurs. The spring constant k = gradient of the linear section = F/x."
    },
    {
      "id": "AR-25-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that increasing the surface area of a solid reactant increases reaction rate. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of surface area on reaction rate.\nObservation: Powdered calcium carbonate reacted faster than lumps of the same mass.\nExplanation: Smaller particles have greater surface area exposed to the acid. More reactant particles are available for collisions with acid molecules, increasing the frequency of successful collisions per unit time. The total amount of reactant is the same, so the final amount of product is identical — only the rate differs.\nConclusion: Increasing surface area increases reaction rate by increasing collision frequency. This is consistent with collision theory and has practical applications in industrial chemistry, where reactants are often ground to powder to maximise reaction rate."
    },
    {
      "id": "AR-26-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A graph shows that global average temperature has increased by approximately 1.2°C since 1880. Analyse this data and discuss its significance.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between global temperature and time since 1880.\nObservation: Global average temperature has increased by approximately 1.2°C since 1880, with the rate of increase accelerating since 1980.\nExplanation: The increase correlates strongly with rising atmospheric CO2 from fossil fuel combustion and deforestation. Greenhouse gases trap outgoing infrared radiation, warming the lower atmosphere. The accelerating rate reflects increasing emissions and positive feedback mechanisms (ice-albedo feedback, permafrost thawing).\nConclusion: The data shows a clear warming trend consistent with enhanced greenhouse effect from human activities. This is significant because even small average temperature increases have large effects on weather patterns, sea level, ice extent and ecosystem distribution."
    },
    {
      "id": "AR-27-F2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates how the angle of a ramp affects the speed of a rolling ball. Results show speed increases with angle. Write a scientific report.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of ramp angle on the speed of a rolling ball.\nObservation: Speed at the bottom of the ramp increased with ramp angle.\nExplanation: A steeper ramp increases the component of gravitational force acting along the ramp (F = mg sinθ). Greater net force produces greater acceleration. Using energy conservation: v = √(2gh), where h = L sinθ (L = ramp length). Greater angle increases h, increasing final speed.\nConclusion: Ramp angle is directly related to the speed of a rolling ball at the bottom. This demonstrates the conversion of gravitational potential energy to kinetic energy and the effect of the angle on the component of gravitational force."
    }
  ]
};
