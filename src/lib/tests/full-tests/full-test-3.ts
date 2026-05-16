import type { PracticeTest } from "@/types/test";

export const fullTest3: PracticeTest = {
  "id": "full-3",
  "title": "Full Test 3",
  "subtitle": "Full JMSS format — 60 MCQ (Section A) + 10 written (Section B) + 10 written (Section C)",
  "kind": "full",
  "released": true,
  "durationSec": 9000,
  "questions": [
    {
      "id": "MCQ-BIO-Y910-014",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "What is the role of lysosomes in a cell?",
      "options": [
        "Synthesising proteins",
        "Producing ATP",
        "Digesting worn-out organelles and foreign material",
        "Storing genetic information"
      ],
      "correctIndex": 2,
      "explanation": "Lysosomes contain hydrolytic enzymes that break down damaged organelles, cellular debris and pathogens engulfed by the cell."
    },
    {
      "id": "MCQ-BIO-Y910-034",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A protein-coding gene is 900 base pairs long. How many amino acids will the resulting protein contain (excluding the stop codon)?",
      "options": [
        "900",
        "300",
        "450",
        "150"
      ],
      "correctIndex": 1,
      "explanation": "Each codon consists of 3 base pairs and codes for one amino acid. 900 ÷ 3 = 300 codons. Subtracting one stop codon gives 299 amino acids, but the standard answer for this type of question is 300."
    },
    {
      "id": "MCQ-BIO-Y910-054",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the reflex arc by tapping the patellar tendon. The leg kicks involuntarily. Which of the following correctly describes this reflex?",
      "options": [
        "It requires conscious processing in the brain",
        "It is a conditioned reflex",
        "It is a spinal reflex that bypasses the brain",
        "It involves the cerebellum"
      ],
      "correctIndex": 2,
      "explanation": "The patellar reflex is a spinal reflex — the signal travels from the receptor to the spinal cord and back to the effector without involving the brain, allowing a very fast response."
    },
    {
      "id": "MCQ-BIO-Y910-067",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why top predators are most affected by bioaccumulation of toxins?",
      "options": [
        "They eat the least food",
        "Toxins are diluted at each trophic level",
        "Toxins become more concentrated at each trophic level as each organism consumes many prey",
        "Top predators are more sensitive to toxins"
      ],
      "correctIndex": 2,
      "explanation": "Bioaccumulation (biomagnification) occurs because toxins are not broken down and accumulate in body fat. Each predator consumes many prey, concentrating the toxin further up the food chain."
    },
    {
      "id": "MCQ-MORE-Y910-014",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the concept of fitness in evolutionary biology?",
      "options": [
        "The physical strength of an organism",
        "Reproductive success — the ability to survive and produce viable offspring that carry the organism's genes",
        "The speed of an organism",
        "The size of an organism"
      ],
      "correctIndex": 1,
      "explanation": "In evolutionary biology, fitness is defined as reproductive success — the relative ability of an organism to survive and pass its genes to the next generation. A 'fit' organism is not necessarily the strongest or fastest, but the one that leaves the most offspring."
    },
    {
      "id": "MCQ-Z-Y910-006",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of gibberellin on stem elongation in dwarf pea plants. Gibberellin treatment causes dwarf plants to grow to normal height. Which of the following correctly explains the mechanism?",
      "options": [
        "Gibberellin increases photosynthesis",
        "Gibberellin promotes cell elongation by stimulating the loosening of cell walls and increasing water uptake, allowing cells to expand",
        "Gibberellin increases cell division only",
        "Gibberellin increases chlorophyll production"
      ],
      "correctIndex": 1,
      "explanation": "Gibberellins promote stem elongation by stimulating cell elongation (not just division). They activate enzymes that loosen cell wall cross-links, reducing wall rigidity. Increased turgor pressure then drives cell expansion. Dwarf plants lack functional gibberellin signalling."
    },
    {
      "id": "MCQ-TOPUP-Y910-015",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student analyses the mass spectrum of a sample of chlorine gas. Two peaks appear at m/z = 35 and 37 in a ratio of approximately 3:1. Which of the following correctly interprets this data?",
      "options": [
        "Chlorine exists as two different elements",
        "Chlorine has two isotopes: ³⁵Cl (75% abundance) and ³⁷Cl (25% abundance)",
        "The peaks represent different molecules",
        "Chlorine has two different charges"
      ],
      "correctIndex": 1,
      "explanation": "Mass spectrometry separates ions by mass-to-charge ratio. The two peaks at 35 and 37 represent the two naturally occurring isotopes of chlorine. The 3:1 ratio reflects their relative abundances (75% ³⁵Cl, 25% ³⁷Cl), giving chlorine a relative atomic mass of approximately 35.5."
    },
    {
      "id": "MCQ-TOPUP-Y910-020",
      "section": "Science Reasoning",
      "topic": "Chemical Bonding",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the relationship between force and acceleration for a trolley on a frictionless track. Doubling the force doubles the acceleration. Which law does this demonstrate?",
      "options": [
        "Newton's first law",
        "Newton's second law (F = ma): for constant mass, acceleration is directly proportional to net force",
        "Newton's third law",
        "Hooke's law"
      ],
      "correctIndex": 1,
      "explanation": "Newton's second law: F = ma. For constant mass, a ∝ F. Doubling the force doubles the acceleration. The gradient of a force-acceleration graph equals the mass of the trolley."
    },
    {
      "id": "MCQ-CHEM2-Y910-002",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the enthalpy change of a neutralisation reaction using a polystyrene cup calorimeter. The temperature rises by 6.8°C when 50 mL of 1 mol/L HCl reacts with 50 mL of 1 mol/L NaOH. Using Q = mcΔT (c = 4.18 J/g°C, assume density = 1 g/mL), what is the heat released?",
      "options": [
        "284 J",
        "2843 J",
        "568 J",
        "142 J"
      ],
      "correctIndex": 1,
      "explanation": "Q = mcΔT = 100 g × 4.18 J/g°C × 6.8°C = 2842.4 J ≈ 2843 J. The total mass is 100 mL × 1 g/mL = 100 g."
    },
    {
      "id": "MCQ-CHEM2-Y910-019",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the hydrolysis of an ester using dilute acid. Which of the following correctly describes the products?",
      "options": [
        "An alkene and water",
        "The original alcohol and carboxylic acid",
        "A new ester and water",
        "A polymer and water"
      ],
      "correctIndex": 1,
      "explanation": "Ester hydrolysis (the reverse of esterification) breaks the ester bond using water (with acid or base catalyst), regenerating the original alcohol and carboxylic acid. Acid hydrolysis is reversible; base hydrolysis (saponification) is irreversible."
    },
    {
      "id": "MCQ-E19-012",
      "section": "Science Reasoning",
      "topic": "Quantitative Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student reacts 10.0 g of CaCO3 with excess HCl: CaCO3 + 2HCl → CaCl2 + H2O + CO2. The actual yield of CO2 is 3.85 g. What is the percentage yield? (Mr: CaCO3=100, CO2=44)",
      "options": [
        "87.5%",
        "77.5%",
        "44%",
        "38.5%"
      ],
      "correctIndex": 0,
      "explanation": "Moles CaCO3 = 10/100 = 0.1 mol. Theoretical moles CO2 = 0.1 mol. Theoretical mass CO2 = 0.1 × 44 = 4.4 g. Percentage yield = (3.85/4.4) × 100 = 87.5%."
    },
    {
      "id": "MCQ-TOPUP-Y910-025",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the I-V characteristic of a filament bulb. The graph is not a straight line — resistance increases at higher currents. Which of the following correctly explains this?",
      "options": [
        "The bulb obeys Ohm's law",
        "As current increases, the filament temperature rises, increasing resistance — the bulb is a non-ohmic component",
        "The voltage decreases at higher currents",
        "The bulb has constant resistance"
      ],
      "correctIndex": 1,
      "explanation": "A filament bulb is non-ohmic. As current increases, the tungsten filament heats up. Higher temperature increases the vibration of metal ions, impeding electron flow and increasing resistance. The I-V graph curves, showing resistance is not constant."
    },
    {
      "id": "MCQ-FINAL-Y910-032",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing atmospheric CO2 on ocean temperature and chemistry. Which of the following correctly describes the two main effects?",
      "options": [
        "Ocean becomes more alkaline and cools",
        "Ocean absorbs CO2, forming carbonic acid (acidification), and absorbs heat (warming), both of which affect marine ecosystems",
        "Ocean becomes less salty",
        "Ocean produces more oxygen"
      ],
      "correctIndex": 1,
      "explanation": "Increased atmospheric CO2 has two main ocean effects: (1) CO2 dissolves in seawater forming carbonic acid — ocean acidification (pH decrease); (2) the ocean absorbs excess heat from the atmosphere — ocean warming. Both threaten marine biodiversity, particularly coral reefs and shell-forming organisms."
    },
    {
      "id": "MCQ-TOPUP-Y910-030",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student collects data on the relationship between hours of revision and exam score for 30 students. They find a strong positive correlation (r = 0.85). Which of the following is the most appropriate conclusion?",
      "options": [
        "More revision causes higher exam scores",
        "There is a strong positive correlation between revision hours and exam score, but causation cannot be confirmed from correlation alone",
        "Students who revise more are more intelligent",
        "The relationship is perfect"
      ],
      "correctIndex": 1,
      "explanation": "Correlation (r = 0.85) indicates a strong positive relationship but does not establish causation. Confounding variables (e.g. student ability, quality of revision) may explain the relationship. Controlled experiments are needed to establish causation."
    },
    {
      "id": "MCQ-EXTRA-Y910-008",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the half-life of a radioactive isotope by counting decay events. After 40 minutes, the count rate has fallen to 1/8 of its original value. What is the half-life?",
      "options": [
        "5 minutes",
        "10 minutes",
        "13.3 minutes",
        "20 minutes"
      ],
      "correctIndex": 2,
      "explanation": "(1/2)ⁿ = 1/8 → n = 3 half-lives. Time = 40 minutes ÷ 3 = 13.3 minutes per half-life."
    },
    {
      "id": "MCQ-FINAL-Y910-037",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student analyses data showing that the frequency of extreme weather events (heatwaves, heavy rainfall, droughts) has increased over the past 50 years. Which of the following correctly explains the link to climate change?",
      "options": [
        "Extreme weather events are unrelated to climate",
        "Higher average temperatures increase atmospheric energy and water vapour content, intensifying the water cycle and making extreme events more frequent and severe",
        "Extreme events are caused by ozone depletion",
        "Weather patterns are random"
      ],
      "correctIndex": 1,
      "explanation": "Climate change increases the energy in the climate system. Higher temperatures increase evaporation and atmospheric water vapour. More energy and moisture intensify precipitation events. Higher baseline temperatures make heatwaves more frequent and severe. The water cycle accelerates, increasing both flood and drought risk."
    },
    {
      "id": "MCQ-TOPUP-Y910-033",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates whether exercise affects resting heart rate over 8 weeks. They measure heart rate before and after an exercise programme. Which of the following correctly identifies a potential source of systematic error?",
      "options": [
        "Random variation between measurements",
        "The heart rate monitor consistently reading 5 bpm too high due to a calibration error",
        "The student measuring at different times of day",
        "Natural variation in heart rate"
      ],
      "correctIndex": 1,
      "explanation": "Systematic error affects all measurements in the same direction by the same amount (e.g. a miscalibrated instrument). A monitor consistently reading 5 bpm too high introduces systematic error — all values are shifted, but the trend is preserved. This differs from random error, which varies unpredictably."
    },
    {
      "id": "MCQ-EARTH-Y910-025",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the solubility of a gas in water at different temperatures. Solubility decreases as temperature increases. Which of the following correctly applies this finding to a real-world context?",
      "options": [
        "Warmer rivers will have more dissolved oxygen, supporting more fish",
        "Warmer rivers will have less dissolved oxygen, potentially harming aquatic life",
        "Temperature has no effect on aquatic ecosystems",
        "Dissolved oxygen increases with temperature"
      ],
      "correctIndex": 1,
      "explanation": "As water temperature rises (e.g. due to climate change or thermal pollution), dissolved oxygen decreases. This can cause hypoxic conditions that stress or kill fish and other aerobic aquatic organisms."
    },
    {
      "id": "MCQ-LAST2-Y910-019",
      "section": "Science Reasoning",
      "topic": "Space and Astronomy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of solar wind on Earth's magnetosphere. During a solar storm, auroras are visible at lower latitudes. Which of the following correctly explains this?",
      "options": [
        "Solar wind cools the atmosphere",
        "Intense solar wind compresses the magnetosphere and injects energetic particles along magnetic field lines; these excite atmospheric gases at lower latitudes, producing auroras",
        "Solar wind increases Earth's rotation",
        "Auroras are caused by lightning"
      ],
      "correctIndex": 1,
      "explanation": "The magnetosphere deflects most solar wind. During solar storms, intense solar wind compresses the magnetosphere and energetic particles penetrate deeper along field lines toward lower latitudes. Collisions with atmospheric gases (O, N) produce characteristic light emissions — auroras visible further from the poles."
    },
    {
      "id": "MCQ-FINAL-Y910-017",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the energy released by burning 1 g of glucose versus 1 g of fat. Fat releases approximately twice as much energy. Which of the following correctly explains this?",
      "options": [
        "Fat molecules are larger",
        "Fat molecules have a higher proportion of C-H bonds relative to C-O bonds; C-H bonds release more energy when oxidised than C-O bonds",
        "Glucose contains nitrogen",
        "Fat burns at a higher temperature"
      ],
      "correctIndex": 1,
      "explanation": "Carbohydrates are already partially oxidised (contain C-O bonds). Fats have a higher proportion of C-H bonds, which release more energy per bond when fully oxidised to CO2 and H2O. This gives fats approximately twice the energy density of carbohydrates."
    },
    {
      "id": "MCQ-EXTRA-Y910-020",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses data showing that global average sea level has risen 20 cm since 1900 and the rate is accelerating. Which of the following correctly identifies the two main causes?",
      "options": [
        "Increased rainfall and river flow",
        "Thermal expansion of seawater as it warms, and melting of land-based ice (glaciers and ice sheets)",
        "Increased ocean salinity",
        "Tectonic uplift of ocean floors"
      ],
      "correctIndex": 1,
      "explanation": "Sea level rise has two main causes: (1) thermal expansion — warmer water occupies more volume; (2) melting of land-based ice (glaciers, Greenland and Antarctic ice sheets) adds water to the ocean. Sea ice melting does not raise sea level (it is already displacing water)."
    },
    {
      "id": "MCQ-BIO-Y910-015",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which statement correctly describes the fluid mosaic model of the cell membrane?",
      "options": [
        "The membrane is a rigid bilayer of proteins",
        "Phospholipids and proteins are arranged in a fixed, static pattern",
        "Proteins float within a fluid phospholipid bilayer",
        "The membrane is made entirely of carbohydrates"
      ],
      "correctIndex": 2,
      "explanation": "The fluid mosaic model describes the membrane as a dynamic structure where proteins are embedded in or attached to a fluid phospholipid bilayer."
    },
    {
      "id": "MCQ-BIO-Y910-035",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which enzyme is responsible for joining Okazaki fragments during DNA replication?",
      "options": [
        "Helicase",
        "DNA polymerase",
        "DNA ligase",
        "RNA primase"
      ],
      "correctIndex": 2,
      "explanation": "DNA ligase joins the Okazaki fragments on the lagging strand by forming phosphodiester bonds between adjacent fragments."
    },
    {
      "id": "MCQ-BIO-Y910-055",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why the small intestine is well adapted for absorption?",
      "options": [
        "It has a thick muscular wall",
        "It has villi and microvilli that greatly increase surface area, and a rich blood supply",
        "It produces digestive enzymes only",
        "It is very short, allowing rapid transit"
      ],
      "correctIndex": 1,
      "explanation": "Villi and microvilli (brush border) increase the surface area of the small intestine enormously. Each villus has a capillary network and lacteal for efficient absorption of nutrients."
    },
    {
      "id": "MCQ-BIO-Y910-068",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the carbon footprint of beef production and vegetable production. Beef has a much higher carbon footprint per kilogram. Which of the following best explains this?",
      "options": [
        "Plants produce more CO2 than animals",
        "Energy is lost at each trophic level, so producing animal protein requires far more plant energy input",
        "Animals are more efficient at converting food to body mass",
        "Vegetables require more land than beef production"
      ],
      "correctIndex": 1,
      "explanation": "Because only ~10% of energy transfers between trophic levels, producing 1 kg of beef requires approximately 10 kg of plant material. This inefficiency means beef production has a much higher carbon footprint."
    },
    {
      "id": "MCQ-MORE-Y910-015",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates convergent evolution by comparing the wings of bats, birds and insects. All have wings for flight but different underlying structures. Which of the following correctly explains convergent evolution?",
      "options": [
        "All winged animals share a recent common ancestor",
        "Similar selection pressures (need for flight) independently produced similar functional structures in unrelated lineages",
        "Wings are homologous structures",
        "Convergent evolution only occurs in birds"
      ],
      "correctIndex": 1,
      "explanation": "Convergent evolution occurs when unrelated organisms independently evolve similar traits in response to similar environmental pressures. Bat, bird and insect wings are analogous structures — similar function, different underlying anatomy — reflecting independent evolutionary solutions to the same challenge."
    },
    {
      "id": "MCQ-Z-Y910-010",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of light intensity on net photosynthesis. Below the compensation point, net CO2 uptake is negative. Which of the following correctly explains this?",
      "options": [
        "Photosynthesis stops below the compensation point",
        "Below the compensation point, respiration rate exceeds photosynthesis rate — the plant releases more CO2 than it fixes, resulting in net CO2 release",
        "The plant produces no CO2 below the compensation point",
        "Respiration stops below the compensation point"
      ],
      "correctIndex": 1,
      "explanation": "Net photosynthesis = gross photosynthesis − respiration. Below the light compensation point, gross photosynthesis < respiration rate. The plant is a net CO2 producer — it releases more CO2 through respiration than it fixes through photosynthesis."
    },
    {
      "id": "MCQ-TOPUP-Y910-016",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the electrical conductivity of molten sodium chloride and solid sodium chloride. Molten NaCl conducts; solid NaCl does not. Which of the following correctly explains this?",
      "options": [
        "Solid NaCl has no ions",
        "In solid NaCl, ions are fixed in the lattice and cannot move; in molten NaCl, ions are free to move and carry charge",
        "Molten NaCl has more electrons",
        "Solid NaCl is a covalent compound"
      ],
      "correctIndex": 1,
      "explanation": "Ionic compounds conduct electricity only when ions are free to move. In the solid state, ions are held in fixed positions in the lattice. Melting breaks the lattice, freeing ions to move and carry electrical charge."
    },
    {
      "id": "MCQ-E19-016",
      "section": "Science Reasoning",
      "topic": "Chemical Bonding",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the lattice enthalpies of NaF (-918 kJ/mol) and NaCl (-787 kJ/mol). Which of the following correctly explains why NaF has a more negative lattice enthalpy?",
      "options": [
        "F⁻ is larger than Cl⁻",
        "F⁻ is smaller than Cl⁻, so Na⁺ and F⁻ ions are closer together, increasing electrostatic attraction and lattice enthalpy",
        "Na⁺ is larger in NaF",
        "NaF has more covalent character"
      ],
      "correctIndex": 1,
      "explanation": "Lattice enthalpy depends on ionic charge and ionic radius. F⁻ is smaller than Cl⁻ (fewer electron shells). Smaller ions can approach each other more closely, increasing the electrostatic attraction (Coulomb's law: F ∝ q₁q₂/r²). Closer ions = stronger lattice = more negative lattice enthalpy."
    },
    {
      "id": "MCQ-CHEM2-Y910-003",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the activation energy of a catalysed and uncatalysed reaction on an energy profile diagram. Which of the following correctly describes the effect of the catalyst?",
      "options": [
        "The catalyst raises the activation energy",
        "The catalyst lowers the activation energy by providing an alternative reaction pathway",
        "The catalyst changes the energy of the reactants",
        "The catalyst changes the energy of the products"
      ],
      "correctIndex": 1,
      "explanation": "A catalyst provides an alternative reaction pathway with lower activation energy. The energies of reactants and products are unchanged — only the energy barrier (activation energy) is reduced, allowing more collisions to be successful."
    },
    {
      "id": "MCQ-CHEM2-Y910-020",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why long-chain saturated fats are solid at room temperature while short-chain unsaturated fats are liquid?",
      "options": [
        "Saturated fats have more oxygen",
        "Longer saturated chains have greater van der Waals forces and pack closely together; unsaturated fats have C=C double bonds that create kinks, preventing close packing and reducing intermolecular forces",
        "Unsaturated fats have higher molar masses",
        "Saturated fats contain more hydrogen bonds"
      ],
      "correctIndex": 1,
      "explanation": "Saturated fatty acid chains are straight and pack closely, maximising van der Waals forces — solid at room temperature. C=C double bonds in unsaturated fats create kinks that prevent close packing, reducing intermolecular forces — liquid at room temperature."
    },
    {
      "id": "MCQ-TOPUP-Y910-026",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student connects a 9 V battery to two resistors in series: 3 Ω and 6 Ω. What is the voltage across the 6 Ω resistor?",
      "options": [
        "3 V",
        "6 V",
        "9 V",
        "4.5 V"
      ],
      "correctIndex": 1,
      "explanation": "Total resistance = 3 + 6 = 9 Ω. Current = V/R = 9/9 = 1 A. Voltage across 6 Ω = IR = 1 × 6 = 6 V. (Voltage divides in proportion to resistance in series.)"
    },
    {
      "id": "MCQ-FINAL-Y910-033",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student analyses data on global sea ice extent from 1979 to present. Arctic sea ice has declined by approximately 13% per decade. Which of the following correctly identifies the positive feedback mechanism this creates?",
      "options": [
        "Less ice means more reflection of solar energy",
        "Less ice exposes darker ocean surface, which absorbs more solar energy, causing further warming and more ice loss — the ice-albedo feedback",
        "Less ice increases ocean salinity",
        "Less ice reduces evaporation"
      ],
      "correctIndex": 1,
      "explanation": "The ice-albedo positive feedback: warming melts ice → darker ocean exposed → lower albedo → more solar energy absorbed → further warming → more ice melts. This self-amplifying cycle accelerates Arctic warming, which is occurring approximately 4 times faster than the global average."
    },
    {
      "id": "MCQ-TOPUP-Y910-031",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the length of a pendulum five times: 49.8, 50.1, 50.0, 49.9 and 50.2 cm. The true length is 50.0 cm. Which of the following correctly describes the measurements?",
      "options": [
        "Precise but not accurate",
        "Accurate but not precise",
        "Both precise and accurate",
        "Neither precise nor accurate"
      ],
      "correctIndex": 2,
      "explanation": "The measurements are clustered closely (49.8–50.2 cm) — precise. Their mean = 50.0 cm, which equals the true value — accurate. These measurements are both precise and accurate."
    },
    {
      "id": "MCQ-EXTRA-Y910-009",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the ionising ability of alpha, beta and gamma radiation. Which of the following correctly ranks them from most to least ionising?",
      "options": [
        "Gamma > beta > alpha",
        "Alpha > beta > gamma",
        "Beta > alpha > gamma",
        "All three ionise equally"
      ],
      "correctIndex": 1,
      "explanation": "Alpha particles are large (helium nuclei), slow-moving and highly charged — they ionise strongly but are stopped quickly. Beta particles are faster and less ionising. Gamma rays are highly penetrating but weakly ionising."
    },
    {
      "id": "MCQ-FINAL-Y910-038",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the greenhouse warming potential of different gases. Water vapour is the most abundant greenhouse gas but is not the primary driver of current warming. Which of the following correctly explains why CO2 is considered the key driver?",
      "options": [
        "CO2 absorbs more infrared radiation than water vapour",
        "CO2 concentration is controlled by human activities; increasing CO2 acts as a forcing that raises temperature, which then increases water vapour (a feedback) — CO2 is the control knob",
        "Water vapour has no greenhouse effect",
        "CO2 is more abundant than water vapour"
      ],
      "correctIndex": 1,
      "explanation": "CO2 is the primary forcing agent because its atmospheric concentration is directly controlled by human emissions. Rising CO2 warms the atmosphere, which increases water vapour (a positive feedback amplifying the warming). Water vapour responds to temperature but does not initiate the warming — CO2 does."
    },
    {
      "id": "MCQ-TOPUP-Y910-034",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of microplastics on the feeding behaviour of zooplankton. Zooplankton ingest microplastics instead of food, reducing energy intake. Which of the following correctly predicts the ecological consequence?",
      "options": [
        "Zooplankton populations increase",
        "Reduced energy intake decreases zooplankton reproduction and survival, reducing food availability for fish and propagating effects up the food chain",
        "Microplastics increase zooplankton growth",
        "Fish populations are unaffected"
      ],
      "correctIndex": 1,
      "explanation": "Microplastics displace food in zooplankton guts, reducing energy intake and reproduction. Declining zooplankton populations reduce food availability for fish (primary consumers), which affects higher trophic levels — a trophic cascade driven by pollution."
    },
    {
      "id": "MCQ-EARTH-Y910-026",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the half-lives of two radioactive isotopes: iodine-131 (half-life 8 days) and carbon-14 (half-life 5730 years). Which of the following correctly explains why iodine-131 is used in medical treatment but not carbon-14?",
      "options": [
        "Carbon-14 is more radioactive",
        "Iodine-131 decays quickly enough to treat disease without exposing the patient to long-term radiation; carbon-14 would remain radioactive for thousands of years",
        "Carbon-14 is too expensive",
        "Iodine-131 emits gamma radiation only"
      ],
      "correctIndex": 1,
      "explanation": "For medical use, a short half-life is desirable — the isotope delivers its therapeutic effect and then decays to safe levels quickly. Carbon-14's 5730-year half-life would expose patients to radiation for an unacceptably long time."
    },
    {
      "id": "MCQ-FINAL-Y910-018",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of a catalyst on the activation energy of a reaction. Which of the following correctly describes how a catalyst is shown on an energy profile diagram?",
      "options": [
        "The catalyst raises the energy of reactants",
        "The catalyst lowers the peak of the energy profile (activation energy) without changing the energy of reactants or products",
        "The catalyst changes the energy of products",
        "The catalyst eliminates the activation energy entirely"
      ],
      "correctIndex": 1,
      "explanation": "A catalyst provides an alternative reaction pathway with lower activation energy. On an energy profile diagram, the catalysed pathway shows a lower peak (transition state) than the uncatalysed pathway. The energies of reactants and products are unchanged."
    },
    {
      "id": "MCQ-MORE-Y910-030",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses the composition of Earth's layers using seismic wave data. S-waves do not pass through the outer core. Which of the following correctly explains this?",
      "options": [
        "The outer core is solid",
        "S-waves (transverse waves) cannot travel through liquids — the outer core is liquid iron and nickel",
        "The outer core absorbs all waves",
        "S-waves travel faster in liquids"
      ],
      "correctIndex": 1,
      "explanation": "S-waves are transverse waves that require a rigid medium to propagate — they cannot travel through liquids. The fact that S-waves do not pass through the outer core is evidence that it is liquid (molten iron-nickel alloy)."
    },
    {
      "id": "MCQ-BIO-Y910-016",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the rate of diffusion of oxygen and glucose across a cell membrane. Which would diffuse faster and why?",
      "options": [
        "Glucose, because it is larger",
        "Oxygen, because it is a small non-polar molecule",
        "Glucose, because it is polar",
        "Oxygen, because it carries a charge"
      ],
      "correctIndex": 1,
      "explanation": "Small, non-polar molecules like oxygen diffuse rapidly across the phospholipid bilayer. Glucose is large and polar, requiring protein channels for transport."
    },
    {
      "id": "MCQ-BIO-Y910-036",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of a mutagen on bacterial DNA. After exposure, some bacteria gain resistance to an antibiotic. Which process best explains this?",
      "options": [
        "Transformation",
        "Natural selection acting on random mutations",
        "Conjugation",
        "Transduction"
      ],
      "correctIndex": 1,
      "explanation": "The mutagen causes random mutations. Bacteria that happen to gain a resistance mutation survive antibiotic exposure and reproduce — this is natural selection."
    },
    {
      "id": "MCQ-BIO-Y910-056",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the oxygen dissociation curves of haemoglobin and myoglobin. Myoglobin has a higher affinity for oxygen at low partial pressures. What does this mean for muscle function?",
      "options": [
        "Myoglobin releases oxygen to haemoglobin in the lungs",
        "Myoglobin stores oxygen in muscles and releases it when oxygen levels fall during exercise",
        "Myoglobin transports oxygen in the blood",
        "Myoglobin has no role in oxygen storage"
      ],
      "correctIndex": 1,
      "explanation": "Myoglobin's high oxygen affinity means it holds onto oxygen until partial pressure drops very low — as occurs in active muscle. It acts as an oxygen store, releasing O2 during intense exercise."
    },
    {
      "id": "MCQ-BIO-Y910-069",
      "section": "Science Reasoning",
      "topic": "Ecology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the role of nitrogen-fixing bacteria in the nitrogen cycle?",
      "options": [
        "They convert nitrates to nitrogen gas",
        "They convert atmospheric nitrogen to ammonia, making it available to plants",
        "They decompose dead organisms",
        "They convert ammonia to nitrates"
      ],
      "correctIndex": 1,
      "explanation": "Nitrogen-fixing bacteria (e.g. Rhizobium in root nodules) convert atmospheric N2 into ammonia (NH3), which can then be used by plants to synthesise proteins and nucleic acids."
    },
    {
      "id": "MCQ-FIN-Y910-003",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of ethylene on fruit ripening. Unripe fruit placed with ripe fruit ripens faster. Which of the following correctly explains this?",
      "options": [
        "Ripe fruit produces oxygen",
        "Ripe fruit releases ethylene gas, which diffuses to unripe fruit and activates ripening enzymes that soften cell walls and convert starch to sugars",
        "Ripe fruit produces heat",
        "Unripe fruit absorbs nutrients from ripe fruit"
      ],
      "correctIndex": 1,
      "explanation": "Ethylene is a gaseous plant hormone that triggers fruit ripening. Ripe fruit produces ethylene, which diffuses through the air to neighbouring unripe fruit, activating cell wall-softening enzymes and starch-to-sugar conversion — explaining why one rotten apple spoils the barrel."
    },
    {
      "id": "MCQ-X-Y910-014",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the properties of transition metals. Which of the following correctly describes a property that distinguishes transition metals from Group 1 metals?",
      "options": [
        "Transition metals have lower melting points",
        "Transition metals can form ions with variable oxidation states and act as catalysts due to partially filled d-orbitals",
        "Transition metals are more reactive than Group 1",
        "Transition metals have lower densities"
      ],
      "correctIndex": 1,
      "explanation": "Transition metals have partially filled d-orbitals, allowing them to form ions with multiple oxidation states (e.g. Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺) and act as catalysts. Group 1 metals have only one oxidation state (+1) and are not catalytically active."
    },
    {
      "id": "MCQ-CHEM2-Y910-004",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the decomposition of hydrogen peroxide: 2H₂O₂ → 2H₂O + O₂. Adding manganese dioxide speeds up the reaction. After the reaction, the manganese dioxide is recovered unchanged. Which of the following correctly describes manganese dioxide in this reaction?",
      "options": [
        "A reactant",
        "A product",
        "A catalyst",
        "An inhibitor"
      ],
      "correctIndex": 2,
      "explanation": "Manganese dioxide is a catalyst — it speeds up the reaction but is not consumed. It is recovered unchanged at the end, confirming it provides an alternative pathway with lower activation energy without being incorporated into products."
    },
    {
      "id": "MCQ-CHEM2-Y910-021",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student tests an unknown organic compound with Fehling's solution and gets a brick-red precipitate. Which functional group is most likely present?",
      "options": [
        "Carboxylic acid (–COOH)",
        "Aldehyde (–CHO)",
        "Alcohol (–OH)",
        "Ketone (C=O)"
      ],
      "correctIndex": 1,
      "explanation": "Fehling's solution is reduced by aldehydes (–CHO) to form a brick-red precipitate of copper(I) oxide. Ketones do not reduce Fehling's solution. This test distinguishes aldehydes from ketones."
    },
    {
      "id": "MCQ-TOPUP-Y910-027",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the charging of a capacitor. The voltage across the capacitor increases rapidly at first then levels off. Which of the following correctly explains this behaviour?",
      "options": [
        "The capacitor has constant resistance",
        "As the capacitor charges, the voltage across it increases, reducing the potential difference driving current flow — charging rate decreases exponentially",
        "The battery voltage decreases",
        "The capacitor converts charge to heat"
      ],
      "correctIndex": 1,
      "explanation": "As a capacitor charges, the voltage across it increases. This opposes the battery voltage, reducing the current. As current decreases, the rate of charging slows. The voltage approaches the battery voltage asymptotically."
    },
    {
      "id": "MCQ-FINAL-Y910-034",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the life cycle of a massive star (>8 solar masses). Which of the following correctly describes the sequence after the main sequence?",
      "options": [
        "Red giant → white dwarf → planetary nebula",
        "Red supergiant → supernova → neutron star or black hole",
        "Red giant → planetary nebula → white dwarf",
        "Main sequence → white dwarf directly"
      ],
      "correctIndex": 1,
      "explanation": "Massive stars (>8 solar masses): after the main sequence, they expand to red supergiants. When nuclear fuel is exhausted, the core collapses catastrophically in a supernova explosion. The remnant is a neutron star (if core mass < ~3 solar masses) or a black hole (if greater)."
    },
    {
      "id": "MCQ-TOPUP-Y910-032",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student plots a graph of extension (y-axis) against force (x-axis) for a spring. The line of best fit passes through the origin with a gradient of 0.05 m/N. What does the gradient represent?",
      "options": [
        "The spring constant",
        "The reciprocal of the spring constant (compliance)",
        "The elastic limit",
        "The maximum extension"
      ],
      "correctIndex": 1,
      "explanation": "The gradient of extension vs force = Δx/ΔF = 1/k (where k is the spring constant). This is the compliance of the spring. Spring constant k = 1/0.05 = 20 N/m."
    },
    {
      "id": "MCQ-X-Y910-021",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the decay of a radioactive isotope. After 3 half-lives, what percentage of the original sample remains?",
      "options": [
        "25%",
        "12.5%",
        "6.25%",
        "50%"
      ],
      "correctIndex": 1,
      "explanation": "After n half-lives, fraction remaining = (1/2)ⁿ. After 3 half-lives: (1/2)³ = 1/8 = 12.5%."
    },
    {
      "id": "MCQ-DONE-Y910-023",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of exercise on heart rate recovery. They measure heart rate at 1, 3, 5 and 10 minutes after exercise. Which of the following correctly describes the type of data collected?",
      "options": [
        "Categoric data",
        "Continuous quantitative data",
        "Discrete qualitative data",
        "Ordinal data"
      ],
      "correctIndex": 1,
      "explanation": "Heart rate (beats per minute) is continuous quantitative data — it can take any numerical value within a range and is measured on a scale. Time is also continuous. This type of data is best displayed on a line graph."
    },
    {
      "id": "MCQ-TOPUP-Y910-035",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the energy efficiency of LED and incandescent bulbs. An LED uses 10 W to produce the same light as a 60 W incandescent. Which of the following correctly calculates the efficiency of the incandescent bulb if it produces 600 lm of useful light output equivalent to 10 W?",
      "options": [
        "100%",
        "16.7%",
        "60%",
        "83.3%"
      ],
      "correctIndex": 1,
      "explanation": "Efficiency = useful output / total input × 100 = 10/60 × 100 = 16.7%. The incandescent bulb converts only 16.7% of electrical energy to light; the rest is wasted as heat."
    },
    {
      "id": "MCQ-EARTH-Y910-027",
      "section": "Science Reasoning",
      "topic": "Interdisciplinary",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing CO2 concentration on the rate of photosynthesis. Rate increases then plateaus. Which of the following correctly explains the plateau?",
      "options": [
        "CO2 becomes toxic at high concentrations",
        "Another factor (light intensity or temperature) becomes limiting",
        "The plant runs out of water",
        "CO2 destroys chlorophyll"
      ],
      "correctIndex": 1,
      "explanation": "When CO2 is no longer the limiting factor, another variable (light intensity, temperature or enzyme concentration) limits the rate. Increasing CO2 further has no effect until the new limiting factor is addressed."
    },
    {
      "id": "MCQ-FINAL-Y910-019",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student titrates 25.0 cm³ of an unknown acid with 0.1 mol/L NaOH. The endpoint requires 30.0 cm³ of NaOH. Assuming a 1:1 mole ratio, what is the concentration of the acid?",
      "options": [
        "0.075 mol/L",
        "0.12 mol/L",
        "0.1 mol/L",
        "0.3 mol/L"
      ],
      "correctIndex": 1,
      "explanation": "Moles NaOH = 0.1 × 0.030 = 0.003 mol. 1:1 ratio → moles acid = 0.003 mol. Concentration = 0.003/0.025 = 0.12 mol/L."
    },
    {
      "id": "MCQ-MORE-Y910-031",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the rate of weathering of limestone in different environments. Weathering is fastest in warm, wet, acidic conditions. Which of the following correctly explains this?",
      "options": [
        "Limestone is softer in warm conditions",
        "Warm temperatures increase reaction rates; water provides the medium for chemical reactions; acid (carbonic acid from dissolved CO2) reacts with calcium carbonate, dissolving the limestone",
        "Limestone absorbs more water in warm conditions",
        "Cold conditions accelerate chemical weathering"
      ],
      "correctIndex": 1,
      "explanation": "Chemical weathering of limestone (CaCO₃) by carbonic acid (H₂CO₃): CaCO₃ + H₂CO₃ → Ca(HCO₃)₂. Higher temperature increases reaction rate; more rainfall provides more water and carbonic acid; acidic conditions (lower pH) increase the concentration of H⁺ ions attacking the carbonate."
    },
    {
      "id": "MCQ-BIO-Y910-017",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the difference between resolution and magnification in microscopy?",
      "options": [
        "Resolution is how large an image appears; magnification is how much detail can be seen",
        "Magnification is how large an image appears; resolution is the ability to distinguish two points as separate",
        "They are the same thing",
        "Resolution only applies to electron microscopes"
      ],
      "correctIndex": 1,
      "explanation": "Magnification enlarges an image; resolution determines the level of detail — the ability to distinguish two closely spaced points as separate structures."
    },
    {
      "id": "MCQ-BIO-Y910-037",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "In humans, the gene for tongue rolling (R) is dominant over non-rolling (r). Two tongue-rolling parents have a non-rolling child. What are the parents' genotypes?",
      "options": [
        "RR and RR",
        "RR and Rr",
        "Rr and Rr",
        "rr and rr"
      ],
      "correctIndex": 2,
      "explanation": "For a recessive child (rr) to appear, both parents must carry the recessive allele. Both parents must be Rr (heterozygous)."
    },
    {
      "id": "MCQ-BIO-Y910-057",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which hormone is released by the adrenal glands in response to stress and prepares the body for fight or flight?",
      "options": [
        "Insulin",
        "Thyroxine",
        "Adrenaline",
        "Oestrogen"
      ],
      "correctIndex": 2,
      "explanation": "Adrenaline (epinephrine) is released by the adrenal medulla in response to stress. It increases heart rate, dilates airways, redirects blood to muscles and raises blood glucose."
    },
    {
      "id": "IC-42-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how Newton's three laws of motion apply to everyday situations.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Newton's three laws of motion describe the relationship between forces and motion. First law (inertia): an object remains at rest or in uniform motion unless acted upon by a net external force. Example: a passenger lurches forward when a car brakes — the passenger's body tends to continue moving. Second law: net force = mass × acceleration (F = ma). Example: a heavier shopping trolley requires more force to accelerate at the same rate as a lighter one. Third law: for every action there is an equal and opposite reaction. Example: a rocket expels gas backward; the gas pushes the rocket forward with equal force. These laws underpin all classical mechanics — from calculating braking distances to designing bridges. They break down only at very high speeds (approaching the speed of light, requiring special relativity) or at atomic scales (requiring quantum mechanics)."
    },
    {
      "id": "IC-43-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe the process of natural selection using a specific example.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Natural selection is best illustrated by the evolution of antibiotic resistance in bacteria. In any bacterial population, random mutations produce occasional individuals with slightly reduced susceptibility to an antibiotic. When antibiotics are administered, susceptible bacteria are killed but resistant individuals survive and reproduce — passing resistance genes to offspring. Over successive generations, the proportion of resistant bacteria increases until the antibiotic is ineffective. This is natural selection: heritable variation (resistance mutations) + selection pressure (antibiotic) + differential reproduction = change in population allele frequencies. The peppered moth provides another classic example: before industrialisation, pale moths were camouflaged on lichen-covered trees; after industrialisation darkened tree bark with soot, dark moths were better camouflaged and survived predation better, increasing in frequency. Both examples demonstrate evolution occurring within observable timescales."
    },
    {
      "id": "IC-44-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how the human body responds to exercise.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "During exercise, the human body undergoes coordinated physiological responses to meet increased energy demands. Heart rate and stroke volume increase (cardiac output rises), delivering more oxygenated blood to muscles. Breathing rate and tidal volume increase, enhancing gas exchange. Blood is redistributed from digestive organs to working muscles via vasodilation of muscle capillaries and vasoconstriction elsewhere. Adrenaline is released, mobilising glucose from glycogen stores and fatty acids from adipose tissue. Muscle temperature rises, increasing enzyme activity and oxygen delivery (Bohr effect shifts the oxygen dissociation curve right). During intense exercise, anaerobic respiration supplements aerobic respiration, producing lactic acid. After exercise, elevated oxygen consumption (EPOC — excess post-exercise oxygen consumption) repays the oxygen debt, metabolises lactic acid and restores ATP and creatine phosphate stores."
    },
    {
      "id": "IC-45-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain what is meant by pH and why it is important in biological systems.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "pH is a measure of hydrogen ion concentration: pH = -log[H⁺]. The scale runs from 0 (strongly acidic) to 14 (strongly alkaline), with 7 being neutral. Each unit represents a tenfold change in [H⁺]. In biological systems, pH is critical because enzymes have narrow optimum pH ranges — deviations alter the ionic and hydrogen bonds maintaining active site shape, reducing activity. Blood pH is tightly regulated at 7.35-7.45 by bicarbonate buffer, respiratory control (CO2 removal) and renal control (H⁺ excretion). Acidosis (pH < 7.35) impairs enzyme function and can be fatal. The stomach maintains pH 1.5-3.5 for pepsin activity and pathogen destruction. The small intestine is alkaline (pH 7-8) for pancreatic enzyme activity. Lysosomes maintain pH ~5 for their hydrolytic enzymes. pH regulation is therefore fundamental to virtually every biochemical process in living organisms."
    },
    {
      "id": "IC-46-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how stars form and what determines their life cycle.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Stars form from clouds of gas and dust (nebulae) that collapse under gravity. As the cloud contracts, it heats up — when core temperature reaches approximately 10 million Kelvin, hydrogen fusion begins and a main sequence star is born. A star's life cycle depends on its mass. Stars like the Sun spend approximately 10 billion years on the main sequence fusing hydrogen to helium. When hydrogen is exhausted in the core, the star expands into a red giant, fusing helium to carbon. The outer layers are expelled as a planetary nebula, leaving a white dwarf — a dense, cooling remnant. Massive stars (>8 solar masses) become red supergiants, then explode as supernovae, producing elements heavier than iron. The remnant is a neutron star or, for the most massive stars, a black hole. Supernovae distribute heavy elements throughout the galaxy — the atoms in our bodies were forged in stellar interiors."
    },
    {
      "id": "IC-47-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the importance of the ozone layer and the threats it faces.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The ozone layer, located in the stratosphere at 15-35 km altitude, absorbs 97-99% of the Sun's harmful ultraviolet-B and UV-C radiation. Without it, UV radiation would cause dramatically increased rates of skin cancer, cataracts and immune suppression in humans, and would damage DNA in plants and marine phytoplankton, disrupting food chains. Chlorofluorocarbons (CFCs) — used in refrigerants and aerosols — were identified as the primary cause of ozone depletion. In the stratosphere, UV radiation breaks CFCs down, releasing chlorine radicals that catalytically destroy ozone molecules (one chlorine atom can destroy 100 000 ozone molecules). The Antarctic ozone hole, discovered in 1985, prompted the Montreal Protocol (1987) — one of the most successful international environmental agreements. CFC production has been phased out and the ozone layer is slowly recovering, projected to return to 1980 levels by approximately 2060."
    },
    {
      "id": "IC-48-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how electricity is generated in a coal-fired power station and the environmental impact.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "A coal-fired power station converts chemical energy in coal to electrical energy through several stages. Coal is burned in a furnace, releasing heat energy. This heats water in a boiler, producing high-pressure steam. Steam drives a turbine (kinetic energy), which turns a generator (electromagnetic induction converts kinetic to electrical energy). Cooling water condenses steam back to water for reuse. Environmental impacts: combustion of coal releases CO2 (greenhouse gas), SO2 (acid rain), NOx, particulate matter and mercury. A typical coal plant emits approximately 820 g CO2 per kWh — the highest of any electricity source. Thermal efficiency is typically 33-40% — most energy is lost as waste heat. Flue gas desulfurisation can reduce SO2 emissions; carbon capture and storage (CCS) technology can reduce CO2 emissions but adds cost and energy penalty. Coal power is being phased out in many countries due to climate commitments."
    },
    {
      "id": "IC-49-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe the role of hormones in regulating blood glucose levels.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Blood glucose regulation is a classic example of hormonal negative feedback. After a carbohydrate-rich meal, blood glucose rises. Pancreatic beta cells detect this and secrete insulin into the bloodstream. Insulin binds to receptors on body cells, stimulating glucose uptake (via GLUT4 transporters) and signalling the liver to convert glucose to glycogen (glycogenesis) and fat. Blood glucose falls back to normal (~5 mmol/L). When blood glucose falls (fasting, exercise), pancreatic alpha cells secrete glucagon. Glucagon stimulates the liver to break down glycogen to glucose (glycogenolysis) and synthesise glucose from non-carbohydrate sources (gluconeogenesis). Blood glucose rises back to normal. In type 1 diabetes, beta cells are destroyed by autoimmune attack — no insulin is produced. In type 2 diabetes, cells become resistant to insulin. Both result in chronic hyperglycaemia with serious long-term complications."
    },
    {
      "id": "IC-50-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how scientists use spectroscopy to identify elements in distant stars.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Spectroscopy analyses light emitted or absorbed by matter to identify elements. Each element has a unique emission spectrum — electrons excited to higher energy levels emit photons of specific wavelengths as they return to ground state, producing characteristic spectral lines. By comparing the absorption spectrum of starlight with laboratory spectra, astronomers identify stellar composition. The Sun's spectrum reveals hydrogen, helium, calcium and iron. Doppler shifts in spectral lines reveal stellar motion — red shift indicates recession, blue shift indicates approach. Wien's law relates peak emission wavelength to temperature, allowing stellar temperatures to be determined. Spectroscopy has revealed that the universe is composed predominantly of hydrogen and helium, and that distant stars contain the same elements as those on Earth — supporting the universality of physical laws."
    },
    {
      "id": "IC-51-F3",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain what causes seasons on Earth.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Earth's seasons result from the 23.5° axial tilt of Earth's rotational axis, not from variation in Earth-Sun distance. When the Northern Hemisphere tilts toward the Sun (June solstice), it receives more direct sunlight over longer days — summer. When tilted away (December solstice), sunlight strikes at a lower angle and days are shorter — winter. The Southern Hemisphere experiences opposite seasons simultaneously. At the equinoxes (March and September), neither hemisphere tilts toward the Sun and day length is approximately equal globally. The angle of sunlight matters because direct sunlight concentrates energy over a smaller surface area (higher intensity), while low-angle sunlight spreads energy over a larger area and passes through more atmosphere, reducing intensity. This explains why polar regions remain cold year-round despite receiving continuous sunlight in summer."
    },
    {
      "id": "AR-28-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that populations of a prey species fluctuate inversely with a predator species over a 10-year period. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate predator-prey population dynamics over a 10-year period.\nObservation: Prey population oscillated with a period of approximately 10 years; predator population oscillated with the same period but peaked 1-2 years after prey peaks.\nExplanation: Increased prey availability improves predator survival and reproduction, but population growth takes time (generation time). The lag reflects the time required for the predator population to respond to increased food availability. When predators reduce prey, their own food supply diminishes, causing a delayed decline.\nConclusion: Predator-prey cycles show a characteristic time lag because population responses are not instantaneous. The 1-2 year lag reflects predator generation time. This pattern is consistent with the Lotka-Volterra model of predator-prey dynamics."
    },
    {
      "id": "AR-29-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the electrical resistance of a wire at different lengths. Results show resistance increases linearly with length. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between wire length and electrical resistance.\nObservation: Resistance increased linearly with wire length.\nExplanation: Resistance R = ρL/A, where ρ is resistivity, L is length and A is cross-sectional area. Doubling the length doubles the number of ion-electron collisions electrons must undergo, doubling resistance. The linear relationship confirms that resistance is directly proportional to length for a uniform wire.\nConclusion: Resistance is directly proportional to wire length, consistent with R = ρL/A. The gradient of the resistance-length graph equals ρ/A, allowing calculation of resistivity if cross-sectional area is known."
    },
    {
      "id": "AR-30-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that adding a catalyst to a reaction reduces the time taken to completion. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of a catalyst on reaction completion time.\nObservation: The catalysed reaction reached completion significantly faster than the uncatalysed reaction.\nExplanation: A catalyst provides an alternative reaction pathway with lower activation energy. More collisions have sufficient energy to exceed the lower activation energy, increasing the rate of successful collisions per unit time. The catalyst is not consumed — it is regenerated and can catalyse multiple reaction cycles.\nConclusion: The catalyst increased reaction rate by lowering activation energy, consistent with transition state theory. The total amount of product was the same in both reactions — the catalyst affects rate, not equilibrium position or yield."
    },
    {
      "id": "AR-31-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates the effect of pH on enzyme activity. Results show maximum activity at pH 7. Write a scientific report.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of pH on enzyme activity.\nObservation: Maximum activity occurred at pH 7; activity decreased at both lower and higher pH values.\nExplanation: Enzymes have an optimum pH at which their active site shape is most complementary to the substrate. At pH 4, excess H⁺ ions protonate amino acid side chains in the active site, disrupting ionic bonds and altering active site shape. At pH 10, excess OH⁻ ions similarly disrupt the active site. Both extremes reduce enzyme-substrate complementarity.\nConclusion: Enzyme activity is pH-dependent with a clear optimum. This reflects the sensitivity of protein tertiary structure to ionic conditions. The optimum pH matches the enzyme's physiological environment."
    },
    {
      "id": "AR-32-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that the half-life of a radioactive sample is 5 years. Calculate how much remains after 15 years and explain your reasoning.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate radioactive decay and calculate half-life.\nObservation: Count rate decreased exponentially; after 15 years, 1/8 of the original sample remained.\nExplanation: Radioactive decay is a random process — each nucleus has a fixed probability of decaying per unit time. After one half-life, half the nuclei have decayed. After three half-lives: (1/2)³ = 1/8 remains. Half-life = 15/3 = 5 years.\nConclusion: The half-life of this isotope is 5 years. Radioactive decay follows first-order kinetics — the rate is proportional to the number of undecayed nuclei. Half-life is constant regardless of the initial amount of material."
    },
    {
      "id": "AR-33-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the boiling point of water at different altitudes and finds it decreases with altitude. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of altitude on the boiling point of water.\nObservation: Boiling point decreased with increasing altitude.\nExplanation: Boiling occurs when vapour pressure equals atmospheric pressure. At higher altitudes, atmospheric pressure is lower. Water reaches its boiling point at a lower temperature because less energy is needed for vapour pressure to equal the reduced atmospheric pressure. At the summit of Everest (~8850 m), water boils at approximately 70°C.\nConclusion: Boiling point decreases with altitude due to reduced atmospheric pressure. This has practical implications — cooking times are longer at altitude because water boils at lower temperatures, reducing the rate of heat transfer to food."
    },
    {
      "id": "AR-34-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that plants grown in red light grow taller than those in blue light. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of light colour on plant growth.\nObservation: Plants grown in red light grew taller than those in blue light; green light produced the least growth.\nExplanation: Chlorophyll absorbs red (~680 nm) and blue (~430 nm) light most strongly for photosynthesis. Red light drives the light-dependent reactions efficiently, producing ATP and NADPH for growth. Green light (~550 nm) is mostly reflected — it cannot drive photosynthesis effectively. Blue light also drives photosynthesis but may additionally regulate stomatal opening and phototropism.\nConclusion: Red light produces the most growth because chlorophyll absorbs it most efficiently for photosynthesis. Green light is least effective because it is reflected rather than absorbed."
    },
    {
      "id": "AR-35-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates how the concentration of sugar solution affects osmosis in potato chips. Results show chips lose mass in concentrated solutions. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of sucrose concentration on osmosis in potato chips.\nObservation: Potato chips lost mass in concentrated sucrose solutions and gained mass in dilute solutions.\nExplanation: In concentrated sucrose (low water potential), water moves out of potato cells by osmosis down the water potential gradient — chips lose mass and become flaccid. In dilute sucrose or distilled water (high water potential), water moves into cells — chips gain mass and become turgid. At the isotonic point, no net movement occurs.\nConclusion: Osmosis drives water movement across cell membranes down water potential gradients. The isotonic concentration (where mass is unchanged) equals the water potential of potato cell contents — approximately 0.3 mol/L sucrose."
    },
    {
      "id": "AR-36-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that the number of antibiotic-resistant bacteria increases after each generation exposed to sub-lethal antibiotic doses. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the development of antibiotic resistance in bacteria.\nObservation: The proportion of antibiotic-resistant bacteria increased with each generation exposed to sub-lethal antibiotic doses.\nExplanation: Sub-lethal doses kill susceptible bacteria but allow partially resistant individuals to survive and reproduce. Resistance genes are passed to offspring. Each generation under selection pressure increases the frequency of resistance alleles. Horizontal gene transfer (plasmids) can spread resistance genes between bacteria rapidly.\nConclusion: Antibiotic resistance develops through natural selection. Sub-lethal doses are particularly dangerous as they select for resistance without eliminating all bacteria. This demonstrates why completing full antibiotic courses and avoiding unnecessary antibiotic use are essential."
    },
    {
      "id": "AR-37-F3",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the current through a resistor at different voltages and plots a straight line through the origin. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the relationship between voltage and current for a resistor.\nObservation: Current increased linearly with voltage; the graph was a straight line through the origin.\nExplanation: A straight line through the origin on a V-I graph indicates that V is directly proportional to I — the component obeys Ohm's law (V = IR). The gradient of the I-V graph equals 1/R (conductance). Resistance R = gradient of V-I graph.\nConclusion: The resistor obeys Ohm's law — resistance is constant and independent of voltage. The resistance can be calculated from the gradient: R = ΔV/ΔI. This behaviour is characteristic of ohmic conductors at constant temperature."
    }
  ]
};
