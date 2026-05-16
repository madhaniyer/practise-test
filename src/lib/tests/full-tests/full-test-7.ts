import type { PracticeTest } from "@/types/test";

export const fullTest7: PracticeTest = {
  "id": "full-7",
  "title": "Full Test 7",
  "subtitle": "Full JMSS format — 60 MCQ (Section A) + 10 written (Section B) + 10 written (Section C)",
  "kind": "full",
  "released": true,
  "durationSec": 9000,
  "questions": [
    {
      "id": "MCQ-LAST-Y910-010",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on membrane permeability using beetroot cells. At higher temperatures, more red pigment leaks out. Which of the following correctly explains this?",
      "options": [
        "Red pigment is produced faster at high temperatures",
        "Higher temperatures increase the fluidity of the phospholipid bilayer and can denature membrane proteins, increasing permeability",
        "Red pigment dissolves in water at high temperatures",
        "The cell wall breaks down at high temperatures"
      ],
      "correctIndex": 1,
      "explanation": "The phospholipid bilayer becomes more fluid at higher temperatures, and membrane proteins may denature. Both effects increase membrane permeability, allowing the red pigment (betalain) to leak out of the vacuole and cell more readily."
    },
    {
      "id": "MCQ-DONE-Y910-011",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates gene expression in differentiated cells. All cells in an organism contain the same DNA, yet liver cells and muscle cells have different proteins. Which of the following correctly explains this?",
      "options": [
        "Different cells have different DNA",
        "Gene expression is regulated — different genes are switched on or off in different cell types through epigenetic mechanisms and transcription factors",
        "Differentiation changes the DNA sequence",
        "Muscle cells have more chromosomes"
      ],
      "correctIndex": 1,
      "explanation": "Cell differentiation involves differential gene expression, not changes to DNA sequence. Transcription factors, epigenetic modifications (DNA methylation, histone modification) and regulatory RNA molecules control which genes are expressed in each cell type."
    },
    {
      "id": "MCQ-MORE-Y910-004",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the concentration of urea in the renal artery, renal vein and urine. Which of the following correctly ranks them from highest to lowest urea concentration?",
      "options": [
        "Renal artery > renal vein > urine",
        "Urine > renal artery > renal vein",
        "Renal vein > urine > renal artery",
        "Renal artery > urine > renal vein"
      ],
      "correctIndex": 1,
      "explanation": "Urea is concentrated in urine (highest). The renal artery carries blood with normal urea levels. The renal vein carries blood after urea has been filtered out — lowest urea concentration. So: urine > renal artery > renal vein."
    },
    {
      "id": "MCQ-MORE-Y910-020",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates Hess's law. The enthalpy change for a reaction is the same regardless of the route taken. Which of the following correctly explains the basis of Hess's law?",
      "options": [
        "Enthalpy depends on the pathway",
        "Enthalpy is a state function — it depends only on the initial and final states, not the route taken",
        "Hess's law only applies to combustion reactions",
        "Enthalpy changes are always positive"
      ],
      "correctIndex": 1,
      "explanation": "Hess's law is a consequence of enthalpy being a state function. The total enthalpy change depends only on the energies of reactants and products, not on the intermediate steps. This allows calculation of enthalpy changes for reactions that cannot be measured directly."
    },
    {
      "id": "MCQ-DONE-Y910-001",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student adds a respiratory inhibitor that blocks the electron transport chain. Which process is most directly affected?",
      "options": [
        "Diffusion of oxygen",
        "ATP synthesis by oxidative phosphorylation",
        "Osmosis of water",
        "Transcription of DNA"
      ],
      "correctIndex": 1,
      "explanation": "The electron transport chain drives ATP synthesis via oxidative phosphorylation. Blocking it stops the majority of ATP production (approximately 32 ATP per glucose), severely affecting all energy-requiring cellular processes."
    },
    {
      "id": "MCQ-DONE-Y910-012",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the inheritance of two traits in pea plants: seed colour (yellow Y dominant over green y) and seed shape (round R dominant over wrinkled r). A YyRr plant is crossed with a yyrr plant. What phenotypic ratio is expected?",
      "options": [
        "9:3:3:1",
        "1:1:1:1",
        "3:1",
        "All yellow round"
      ],
      "correctIndex": 1,
      "explanation": "YyRr × yyrr (test cross for two genes): gametes from YyRr are YR, Yr, yR, yr (equal frequency). Each combines with yr from yyrr. Offspring: YyRr (yellow round), Yyrr (yellow wrinkled), yyRr (green round), yyrr (green wrinkled) — ratio 1:1:1:1."
    },
    {
      "id": "MCQ-MORE-Y910-005",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the role of the hypothalamus in thermoregulation?",
      "options": [
        "It produces sweat directly",
        "It acts as the thermostat — detecting blood temperature and coordinating responses (sweating, shivering, vasodilation/vasoconstriction) to restore normal temperature",
        "It stores glycogen for energy",
        "It produces insulin"
      ],
      "correctIndex": 1,
      "explanation": "The hypothalamus contains thermoreceptors that monitor blood temperature. When temperature deviates from the set point (37°C), it coordinates corrective responses via the nervous and endocrine systems — sweating and vasodilation to cool, shivering and vasoconstriction to warm."
    },
    {
      "id": "MCQ-MORE-Y910-021",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares bond energies: C-H (413 kJ/mol), C=C (614 kJ/mol), C-C (347 kJ/mol), H-H (436 kJ/mol). For the hydrogenation of ethene: C₂H₄ + H₂ → C₂H₆, which of the following correctly calculates the enthalpy change?",
      "options": [
        "Bonds broken: C=C + H-H = 614 + 436 = 1050 kJ; Bonds formed: C-C + 2(C-H) = 347 + 826 = 1173 kJ; ΔH = 1050 − 1173 = −123 kJ/mol",
        "Bonds broken: C-C + H-H = 347 + 436 = 783 kJ; Bonds formed: C=C + 2(C-H) = 614 + 826 = 1440 kJ; ΔH = +657 kJ/mol",
        "ΔH = +123 kJ/mol",
        "ΔH = 0 kJ/mol"
      ],
      "correctIndex": 0,
      "explanation": "ΔH = energy in (bonds broken) − energy out (bonds formed). Breaking C=C (614) + H-H (436) = 1050 kJ. Forming C-C (347) + 2×C-H (2×413=826) = 1173 kJ. ΔH = 1050 − 1173 = −123 kJ/mol (exothermic)."
    },
    {
      "id": "MCQ-DONE-Y910-002",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the rate of enzyme activity at pH 2 and pH 8 for pepsin (optimum pH 2) and trypsin (optimum pH 8). Which of the following correctly predicts the results?",
      "options": [
        "Both enzymes are most active at pH 5",
        "Pepsin is most active at pH 2; trypsin is most active at pH 8 — each enzyme has evolved to function in its specific physiological environment",
        "Both enzymes are equally active at all pH values",
        "Trypsin is most active at pH 2"
      ],
      "correctIndex": 1,
      "explanation": "Enzyme optimum pH reflects the environment where they function: pepsin works in the acidic stomach (pH 2); trypsin works in the alkaline small intestine (pH 8). At non-optimum pH, ionic and hydrogen bonds maintaining active site shape are disrupted."
    },
    {
      "id": "MCQ-X-Y910-007",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the inheritance of blood groups. A person with blood group AB has children with a person of blood group O. Which blood groups are possible in their children?",
      "options": [
        "AB and O only",
        "A and B only",
        "A, B, AB and O",
        "AB only"
      ],
      "correctIndex": 1,
      "explanation": "Blood group AB has genotype I^A I^B; blood group O has genotype ii. Cross: I^A I^B × ii gives I^A i (blood group A) and I^B i (blood group B) only. AB and O are not possible from this cross."
    },
    {
      "id": "MCQ-MORE-Y910-006",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of adrenaline on heart rate. Heart rate increases. Which of the following correctly explains the mechanism?",
      "options": [
        "Adrenaline directly stimulates heart muscle fibres",
        "Adrenaline binds to receptors on the sinoatrial node, increasing the rate of depolarisation and therefore heart rate",
        "Adrenaline reduces blood viscosity",
        "Adrenaline increases blood volume"
      ],
      "correctIndex": 1,
      "explanation": "Adrenaline (epinephrine) binds to beta-adrenergic receptors on the sinoatrial node (the heart's pacemaker). This increases the rate of spontaneous depolarisation, increasing heart rate. It also increases force of contraction."
    },
    {
      "id": "MCQ-X-Y910-009",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing temperature on the rate of a chemical reaction. The rate doubles for every 10°C rise. Which of the following correctly explains this using collision theory?",
      "options": [
        "Higher temperature increases reactant concentration",
        "Higher temperature increases the kinetic energy of particles; a greater proportion of collisions exceed the activation energy, and collision frequency also increases",
        "Higher temperature lowers activation energy",
        "Higher temperature changes the products"
      ],
      "correctIndex": 1,
      "explanation": "The Arrhenius equation describes how rate increases exponentially with temperature. Higher temperature: (1) increases collision frequency (particles move faster); (2) increases the proportion of collisions with energy ≥ activation energy. Together these approximately double the rate per 10°C rise."
    },
    {
      "id": "MCQ-DONE-Y910-003",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of inhibitor concentration on enzyme activity. A competitive inhibitor reduces activity but adding more substrate restores it. Which of the following correctly explains this?",
      "options": [
        "Competitive inhibitors permanently block the active site",
        "Competitive inhibitors bind reversibly to the active site; increasing substrate concentration outcompetes the inhibitor for active site binding",
        "Competitive inhibitors change the shape of the active site permanently",
        "Competitive inhibitors bind to an allosteric site"
      ],
      "correctIndex": 1,
      "explanation": "Competitive inhibitors have a similar shape to the substrate and compete for the active site. The inhibition is reversible — increasing substrate concentration increases the probability of substrate (rather than inhibitor) binding to the active site, restoring activity."
    },
    {
      "id": "MCQ-X-Y910-008",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses a DNA sample using gel electrophoresis. Smaller DNA fragments travel further through the gel. Which of the following correctly explains this?",
      "options": [
        "Smaller fragments have more charge",
        "Smaller fragments experience less resistance moving through the gel matrix and migrate further in the same time",
        "Larger fragments are more negatively charged",
        "Smaller fragments move toward the positive electrode only"
      ],
      "correctIndex": 1,
      "explanation": "In gel electrophoresis, DNA fragments are negatively charged and migrate toward the positive electrode. Smaller fragments move more easily through the pores of the agarose gel matrix, experiencing less resistance and travelling further in a given time."
    },
    {
      "id": "MCQ-MORE-Y910-007",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the structure of a motor neuron and a sensory neuron. Which of the following correctly describes a key difference?",
      "options": [
        "Motor neurons are shorter than sensory neurons",
        "Sensory neurons carry impulses from receptors to the CNS; motor neurons carry impulses from the CNS to effectors (muscles/glands)",
        "Both carry impulses in the same direction",
        "Sensory neurons have myelin; motor neurons do not"
      ],
      "correctIndex": 1,
      "explanation": "Sensory (afferent) neurons transmit impulses from sensory receptors toward the CNS. Motor (efferent) neurons transmit impulses from the CNS to effectors. This directional difference reflects their distinct roles in the reflex arc and voluntary movement."
    },
    {
      "id": "MCQ-X-Y910-010",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the reaction of sodium with water: 2Na + 2H₂O → 2NaOH + H₂. Which of the following correctly identifies the oxidation state change of sodium?",
      "options": [
        "Sodium is reduced from 0 to +1",
        "Sodium is oxidised from 0 to +1",
        "Sodium is reduced from +1 to 0",
        "Sodium does not change oxidation state"
      ],
      "correctIndex": 1,
      "explanation": "In elemental sodium, oxidation state = 0. In NaOH, sodium has oxidation state +1. Sodium loses an electron (0 → +1) — this is oxidation. Water is reduced (hydrogen goes from +1 to 0 in H₂)."
    },
    {
      "id": "MCQ-DONE-Y910-004",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the oxygen consumption of germinating seeds at different temperatures. Consumption increases with temperature up to 35°C then falls. Which of the following correctly explains the fall above 35°C?",
      "options": [
        "Seeds run out of oxygen above 35°C",
        "Respiratory enzymes denature above their optimum temperature, reducing the rate of aerobic respiration",
        "Seeds stop germinating above 35°C",
        "Oxygen becomes less soluble above 35°C"
      ],
      "correctIndex": 1,
      "explanation": "Aerobic respiration is enzyme-controlled. Above the optimum temperature (~35°C for most plant enzymes), the tertiary structure of respiratory enzymes is disrupted (denaturation), reducing their catalytic activity and therefore oxygen consumption."
    },
    {
      "id": "MCQ-Z-Y910-007",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the inheritance of a trait controlled by two genes on the same chromosome. The observed ratio deviates from the expected 9:3:3:1. Which of the following correctly explains this deviation?",
      "options": [
        "The genes show incomplete dominance",
        "The genes are linked — they tend to be inherited together rather than assorting independently, causing deviation from Mendelian ratios",
        "The genes are on different chromosomes",
        "One gene is dominant over the other"
      ],
      "correctIndex": 1,
      "explanation": "Linked genes (on the same chromosome) violate Mendel's law of independent assortment. They tend to be inherited together, producing offspring ratios that deviate from the expected 9:3:3:1 dihybrid ratio. Crossing over can partially separate linked genes."
    },
    {
      "id": "MCQ-MORE-Y910-008",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of insulin on blood glucose in a healthy person after a meal. Which of the following correctly describes the sequence of events?",
      "options": [
        "Blood glucose falls → insulin released → glucose absorbed by cells",
        "Blood glucose rises → pancreas releases insulin → cells absorb glucose → blood glucose returns to normal",
        "Blood glucose rises → glucagon released → glycogen broken down",
        "Blood glucose falls → glucagon released → cells absorb glucose"
      ],
      "correctIndex": 1,
      "explanation": "After a meal, blood glucose rises. The pancreatic beta cells detect this and release insulin. Insulin stimulates cells to absorb glucose and the liver to convert glucose to glycogen (glycogenesis), returning blood glucose to normal — negative feedback."
    },
    {
      "id": "MCQ-X-Y910-013",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the reaction between iron and steam: 3Fe + 4H₂O → Fe₃O₄ + 4H₂. Which of the following correctly identifies the reducing agent?",
      "options": [
        "Water",
        "Iron — it is oxidised (loses electrons), reducing water to hydrogen",
        "Hydrogen",
        "Iron oxide"
      ],
      "correctIndex": 1,
      "explanation": "Iron is oxidised (Fe: 0 → +8/3 in Fe₃O₄) — it loses electrons. A reducing agent is the substance that gets oxidised (donates electrons). Iron reduces water to hydrogen gas, so iron is the reducing agent."
    },
    {
      "id": "MCQ-DONE-Y910-005",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the number of mitochondria in cardiac muscle cells and skin cells. Cardiac muscle has far more mitochondria. Which of the following correctly explains this?",
      "options": [
        "Cardiac muscle cells are larger",
        "Cardiac muscle contracts continuously and requires large amounts of ATP; skin cells have low energy demands and require fewer mitochondria",
        "Cardiac muscle cells divide more rapidly",
        "Skin cells do not respire"
      ],
      "correctIndex": 1,
      "explanation": "The number of mitochondria in a cell reflects its energy demands. Cardiac muscle contracts continuously (approximately 100 000 times per day) and requires a constant, large supply of ATP. Skin cells have relatively low metabolic activity and fewer mitochondria."
    },
    {
      "id": "MCQ-Z-Y910-008",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses the karyotype of a cell and finds 45 chromosomes with only one X chromosome (45,X). Which condition does this represent?",
      "options": [
        "Down syndrome",
        "Klinefelter syndrome",
        "Turner syndrome — monosomy X, caused by non-disjunction",
        "Patau syndrome"
      ],
      "correctIndex": 2,
      "explanation": "Turner syndrome (45,X) results from non-disjunction during meiosis, producing an egg or sperm lacking a sex chromosome. The resulting individual has only one X chromosome. Features include short stature, infertility and heart defects."
    },
    {
      "id": "MCQ-MORE-Y910-009",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why the small intestine is the primary site of nutrient absorption rather than the stomach?",
      "options": [
        "The stomach is too acidic for absorption",
        "The small intestine has villi and microvilli greatly increasing surface area, a rich blood supply, and appropriate pH for enzyme activity — all optimised for absorption",
        "The stomach absorbs fats only",
        "The small intestine produces more acid"
      ],
      "correctIndex": 1,
      "explanation": "The small intestine is specialised for absorption: villi and microvilli increase surface area ~600-fold; each villus has capillaries (for glucose/amino acids) and lacteals (for fats); thin epithelium minimises diffusion distance; appropriate pH for digestive enzymes."
    },
    {
      "id": "MCQ-X-Y910-015",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of concentration on the rate of reaction between HCl and Na₂S₂O₃. They measure the time for a cross to disappear under the reaction mixture. Which of the following correctly identifies the dependent variable?",
      "options": [
        "Concentration of HCl",
        "Temperature of the reaction",
        "Time for the cross to disappear (inversely proportional to rate)",
        "Volume of Na₂S₂O₃"
      ],
      "correctIndex": 2,
      "explanation": "The dependent variable is what is measured. Here, the time for the cross to disappear is measured — it is inversely proportional to reaction rate (faster reaction = shorter time). Concentration is the independent variable being changed."
    },
    {
      "id": "MCQ-DONE-Y910-006",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of light wavelength on the rate of photosynthesis. Which of the following correctly explains why green light produces the lowest rate?",
      "options": [
        "Green light has the highest energy",
        "Chlorophyll reflects green light rather than absorbing it, so green light cannot drive the light-dependent reactions",
        "Green light is absorbed by carotenoids only",
        "Green light has the longest wavelength"
      ],
      "correctIndex": 1,
      "explanation": "Chlorophyll absorbs red and blue light most strongly for photosynthesis. Green light (~550 nm) is mostly reflected — which is why plants appear green. Reflected light is not absorbed and cannot drive photosynthesis, resulting in the lowest photosynthesis rate."
    },
    {
      "id": "MCQ-LAST2-Y910-008",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of a frameshift mutation on protein structure. A single base insertion near the start of a gene causes a non-functional protein. Which of the following correctly explains this?",
      "options": [
        "One extra base has no effect",
        "A frameshift mutation shifts the reading frame for all subsequent codons, changing every amino acid from the insertion point onward and likely introducing a premature stop codon",
        "Only the inserted codon is affected",
        "Frameshift mutations only affect introns"
      ],
      "correctIndex": 1,
      "explanation": "The genetic code is read in triplets (codons). Inserting one base shifts the reading frame for all downstream codons. Every amino acid from the insertion point onward is changed, producing a completely different (usually non-functional) protein. A premature stop codon often terminates translation early."
    },
    {
      "id": "MCQ-MORE-Y910-010",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of exercise on lactic acid concentration in blood. Lactic acid rises sharply above the lactate threshold. Which of the following correctly explains what happens to lactic acid during recovery?",
      "options": [
        "Lactic acid is excreted in urine",
        "Lactic acid is transported to the liver where it is converted back to glucose (Cori cycle) or oxidised in aerobic respiration",
        "Lactic acid evaporates from the lungs",
        "Lactic acid is stored in muscle"
      ],
      "correctIndex": 1,
      "explanation": "During recovery, lactic acid diffuses from muscles into blood and is transported to the liver. The liver converts lactic acid back to pyruvate and then to glucose (gluconeogenesis/Cori cycle), or it is oxidised in aerobic respiration. This is the 'oxygen debt' repayment."
    },
    {
      "id": "MCQ-Z-Y910-015",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the reaction of halogens with aqueous sodium halide solutions. Chlorine displaces bromide and iodide; bromine displaces iodide only; iodine displaces neither. Which of the following correctly explains this?",
      "options": [
        "Iodine is the most reactive halogen",
        "Reactivity decreases down Group 17 — chlorine is most reactive and can displace less reactive halogens from their salts; iodine is least reactive and cannot displace any",
        "Chlorine is the largest halogen",
        "Bromine has the highest electronegativity"
      ],
      "correctIndex": 1,
      "explanation": "Halogen reactivity decreases down Group 17 as atomic radius increases and the ability to attract electrons (electronegativity) decreases. More reactive halogens can oxidise (displace) the ions of less reactive halogens. Cl2 > Br2 > I2 in reactivity."
    },
    {
      "id": "MCQ-DONE-Y910-007",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of CO2 concentration on the rate of photosynthesis at two different light intensities. At high light intensity, increasing CO2 produces a higher plateau. Which of the following correctly explains this?",
      "options": [
        "High light intensity increases CO2 production",
        "At high light intensity, the light-dependent reactions produce more ATP and NADPH, allowing the Calvin cycle to fix more CO2 before another factor becomes limiting",
        "High light intensity reduces the need for CO2",
        "CO2 concentration is unrelated to light intensity"
      ],
      "correctIndex": 1,
      "explanation": "At high light intensity, more ATP and NADPH are produced by the light-dependent reactions. These drive the Calvin cycle faster, allowing more CO2 to be fixed before enzyme concentration or temperature becomes limiting — hence a higher plateau rate."
    },
    {
      "id": "MCQ-E19-002",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student finds that two genes show 20% recombination frequency. What does this indicate about their chromosomal location?",
      "options": [
        "They are on different chromosomes",
        "They are linked on the same chromosome, approximately 20 cM apart",
        "They are at the same locus",
        "They show codominance"
      ],
      "correctIndex": 1,
      "explanation": "Recombination frequency (map units/cM) reflects the distance between linked genes. 20% recombination means the genes are linked but 20 cM apart on the same chromosome. Genes on different chromosomes show 50% recombination."
    },
    {
      "id": "MCQ-X-Y910-005",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the immune response to a pathogen on first and second exposure. The second response is faster and stronger. Which of the following correctly explains this?",
      "options": [
        "The pathogen is weaker on second exposure",
        "Memory B and T cells formed during the primary response persist and respond rapidly on re-exposure, producing a faster, larger antibody response",
        "The immune system becomes less specific over time",
        "The pathogen mutates to become less harmful"
      ],
      "correctIndex": 1,
      "explanation": "During the primary immune response, some B and T cells differentiate into long-lived memory cells. On second exposure to the same antigen, memory cells rapidly proliferate and differentiate, producing a faster and larger secondary immune response that clears the infection before symptoms develop."
    },
    {
      "id": "MCQ-FIN-Y910-006",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of pH on the solubility of calcium carbonate. Solubility increases at lower pH. Which of the following correctly explains this?",
      "options": [
        "Lower pH increases calcium ion concentration",
        "Lower pH increases H⁺ concentration; H⁺ reacts with CO3²⁻ ions, removing them from solution and shifting the dissolution equilibrium toward more CaCO3 dissolving",
        "Lower pH decreases water temperature",
        "Lower pH increases carbonate concentration"
      ],
      "correctIndex": 1,
      "explanation": "CaCO3 ⇌ Ca²⁺ + CO3²⁻. At lower pH, H⁺ reacts with CO3²⁻: H⁺ + CO3²⁻ → HCO3⁻. This removes CO3²⁻ from solution, shifting equilibrium right (Le Chatelier's principle), dissolving more CaCO3. This is why acid rain dissolves limestone."
    },
    {
      "id": "MCQ-X-Y910-001",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of substrate concentration on enzyme activity using amylase and starch. At high substrate concentration the rate plateaus. Adding more enzyme at this point increases the rate. Which of the following correctly explains this?",
      "options": [
        "More enzyme increases substrate concentration",
        "At the plateau all enzyme active sites are saturated; adding more enzyme provides more active sites, allowing more substrate to be processed simultaneously",
        "More enzyme lowers activation energy",
        "More enzyme changes the pH"
      ],
      "correctIndex": 1,
      "explanation": "When enzyme is the limiting factor (all active sites occupied), adding more enzyme increases the total number of active sites available. More substrate molecules can be processed simultaneously, increasing the overall reaction rate."
    },
    {
      "id": "MCQ-FIN-Y910-002",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of a drug that blocks sodium-potassium ATPase pumps in neurons. Which of the following would be the most immediate consequence?",
      "options": [
        "Faster nerve impulse transmission",
        "Inability to restore resting membrane potential after action potentials, leading to failure of nerve signalling",
        "Increased neurotransmitter release",
        "Faster synaptic transmission"
      ],
      "correctIndex": 1,
      "explanation": "The Na⁺/K⁺ ATPase pump restores the resting membrane potential after each action potential by pumping 3 Na⁺ out and 2 K⁺ in. Blocking this pump prevents repolarisation, making neurons unable to fire repeated action potentials."
    },
    {
      "id": "MCQ-FIN-Y910-008",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of concentration on the rate of reaction between HCl and CaCO3. They measure the volume of CO2 produced over time. Which of the following correctly describes the shape of the volume-time graph?",
      "options": [
        "A straight line through the origin",
        "A curve that starts steep and levels off as reactants are consumed",
        "A straight horizontal line",
        "A curve that starts flat and becomes steeper"
      ],
      "correctIndex": 1,
      "explanation": "As the reaction proceeds, reactant concentration decreases, slowing the rate. The volume-time graph starts steep (fast initial rate at high concentration) and levels off as reactants are consumed and rate decreases, eventually reaching a plateau when reaction is complete."
    },
    {
      "id": "MCQ-X-Y910-002",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares aerobic and anaerobic respiration in yeast. Aerobic respiration produces 36-38 ATP per glucose; anaerobic produces 2 ATP. Which of the following correctly explains the difference?",
      "options": [
        "Anaerobic respiration uses more glucose",
        "Aerobic respiration fully oxidises glucose through glycolysis, the Krebs cycle and oxidative phosphorylation, extracting maximum energy; anaerobic only completes glycolysis",
        "Anaerobic respiration is faster",
        "Aerobic respiration uses less oxygen"
      ],
      "correctIndex": 1,
      "explanation": "Aerobic respiration extracts energy through three stages: glycolysis (2 ATP), Krebs cycle (2 ATP) and oxidative phosphorylation (~32-34 ATP via the electron transport chain). Anaerobic respiration only completes glycolysis, producing just 2 ATP per glucose."
    },
    {
      "id": "MCQ-LAST2-Y910-001",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of bile salts on fat digestion. Adding bile salts increases the rate of lipase activity. Which of the following correctly explains this?",
      "options": [
        "Bile salts are enzymes",
        "Bile salts emulsify fat globules into smaller droplets, greatly increasing the surface area available for lipase to act on",
        "Bile salts increase lipase concentration",
        "Bile salts change the pH optimum of lipase"
      ],
      "correctIndex": 1,
      "explanation": "Bile salts are amphipathic molecules that reduce surface tension between fat and water, breaking large fat globules into tiny droplets (emulsification). This dramatically increases the surface area exposed to lipase, accelerating fat digestion without bile salts being enzymes themselves."
    },
    {
      "id": "MCQ-FIN-Y910-009",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the properties of a buffer solution. Adding 0.01 mol of HCl to 1 L of buffer changes pH by only 0.1 units. Adding the same amount to pure water changes pH by 2 units. Which of the following correctly explains the buffer's resistance to pH change?",
      "options": [
        "Buffers neutralise all acids",
        "The buffer contains a weak acid and its conjugate base; added H⁺ is consumed by the conjugate base (A⁻ + H⁺ → HA), minimising pH change",
        "Buffers have no weak acid",
        "Buffers increase in concentration when acid is added"
      ],
      "correctIndex": 1,
      "explanation": "A buffer (weak acid HA + conjugate base A⁻) resists pH change: added H⁺ is consumed by A⁻ → HA; added OH⁻ is consumed by HA → A⁻ + H₂O. The equilibrium shifts to absorb the added acid or base, minimising pH change."
    },
    {
      "id": "MCQ-X-Y910-006",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of pH on the activity of salivary amylase. Maximum activity occurs at pH 7. Which of the following correctly explains why amylase is inactive at pH 2?",
      "options": [
        "Starch denatures at pH 2",
        "At pH 2, excess H⁺ ions protonate amino acid side chains in the active site, disrupting the ionic and hydrogen bonds that maintain the active site shape, preventing substrate binding",
        "pH 2 increases substrate concentration",
        "pH 2 increases temperature"
      ],
      "correctIndex": 1,
      "explanation": "Salivary amylase has an optimum pH of ~7 (matching the mouth). At pH 2 (stomach acid), the high H⁺ concentration disrupts the ionic interactions and hydrogen bonds maintaining the enzyme's tertiary structure, particularly in the active site, preventing effective substrate binding."
    },
    {
      "id": "MCQ-LAST2-Y910-002",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of exercise on stroke volume (volume of blood per heartbeat). Stroke volume increases during moderate exercise. Which of the following correctly explains this?",
      "options": [
        "The heart beats more slowly during exercise",
        "Increased venous return during exercise stretches the ventricles; by Starling's law, greater stretch produces a more forceful contraction and larger stroke volume",
        "The heart muscle weakens during exercise",
        "Blood pressure decreases during exercise"
      ],
      "correctIndex": 1,
      "explanation": "Frank-Starling law: increased venous return (from muscle pumping action during exercise) stretches the ventricular walls. Greater stretch increases the force of contraction, ejecting more blood per beat (increased stroke volume). This is an intrinsic cardiac mechanism."
    },
    {
      "id": "MCQ-FIN-Y910-010",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of pressure on the rate of a gas-phase reaction. Doubling pressure doubles the rate. Which of the following correctly explains this?",
      "options": [
        "Pressure changes activation energy",
        "Doubling pressure doubles the concentration of gas molecules, increasing collision frequency and therefore reaction rate",
        "Pressure changes temperature",
        "Pressure changes the products"
      ],
      "correctIndex": 1,
      "explanation": "For gases, pressure is proportional to concentration (at constant T and V). Doubling pressure doubles the number of gas molecules per unit volume, doubling collision frequency and reaction rate (for a first-order reaction with respect to that reactant)."
    },
    {
      "id": "MCQ-Z-Y910-001",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates osmosis in potato cylinders placed in solutions of different sucrose concentrations. At 0.3 mol/L the cylinder neither gains nor loses mass. Which of the following correctly describes the water potential of the potato cells?",
      "options": [
        "Higher than 0.3 mol/L sucrose solution",
        "Equal to the water potential of 0.3 mol/L sucrose solution",
        "Lower than 0.3 mol/L sucrose solution",
        "Zero"
      ],
      "correctIndex": 1,
      "explanation": "At the isotonic point, there is no net movement of water — the water potential of the cell contents equals the water potential of the external solution. The potato cell water potential equals that of 0.3 mol/L sucrose."
    },
    {
      "id": "MCQ-LAST2-Y910-003",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of dehydration on kidney function. Urine becomes more concentrated. Which of the following correctly explains the hormonal mechanism?",
      "options": [
        "Insulin increases urine concentration",
        "Dehydration is detected by osmoreceptors in the hypothalamus; ADH (antidiuretic hormone) is released from the posterior pituitary, increasing water reabsorption in the collecting duct",
        "Adrenaline increases urine concentration",
        "Glucagon controls urine concentration"
      ],
      "correctIndex": 1,
      "explanation": "Dehydration raises blood osmolarity, detected by hypothalamic osmoreceptors. This triggers ADH release from the posterior pituitary. ADH increases the permeability of the collecting duct to water by inserting aquaporin channels, increasing water reabsorption and producing concentrated urine."
    },
    {
      "id": "MCQ-LAST2-Y910-011",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the reaction of chlorine water with sodium bromide solution. The solution turns orange-brown. Which of the following correctly explains this?",
      "options": [
        "Sodium is oxidised",
        "Chlorine oxidises bromide ions to bromine (Br2), which gives the orange-brown colour: Cl2 + 2Br⁻ → 2Cl⁻ + Br2",
        "Sodium chloride is formed only",
        "Bromine is reduced to bromide"
      ],
      "correctIndex": 1,
      "explanation": "Chlorine is a stronger oxidising agent than bromine (higher electronegativity, higher reduction potential). It oxidises Br⁻ to Br2: Cl2 + 2Br⁻ → 2Cl⁻ + Br2. Bromine gives the characteristic orange-brown colour. This is a halogen displacement reaction."
    },
    {
      "id": "MCQ-Z-Y910-002",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the rate of diffusion of glucose and oxygen across a cell membrane. Oxygen diffuses faster. Which of the following correctly explains this?",
      "options": [
        "Glucose is charged",
        "Oxygen is a small non-polar molecule that dissolves in the lipid bilayer and diffuses freely; glucose is large and polar, requiring protein carriers (facilitated diffusion)",
        "Glucose has a higher concentration gradient",
        "Oxygen requires active transport"
      ],
      "correctIndex": 1,
      "explanation": "Simple diffusion through the lipid bilayer is fastest for small, non-polar, uncharged molecules like O2 and CO2. Glucose is large and polar — it cannot dissolve in the hydrophobic core of the bilayer and requires specific carrier proteins for facilitated diffusion."
    },
    {
      "id": "MCQ-LAST2-Y910-004",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of statins (drugs that inhibit cholesterol synthesis) on LDL cholesterol levels. LDL decreases. Which of the following correctly explains the mechanism?",
      "options": [
        "Statins destroy LDL directly",
        "Statins inhibit HMG-CoA reductase, reducing liver cholesterol synthesis; liver cells upregulate LDL receptors to obtain cholesterol from blood, reducing circulating LDL",
        "Statins increase HDL production",
        "Statins reduce fat absorption"
      ],
      "correctIndex": 1,
      "explanation": "Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme in cholesterol biosynthesis. With less intracellular cholesterol, liver cells upregulate LDL receptor expression, increasing uptake of LDL from blood. This reduces circulating LDL cholesterol levels."
    },
    {
      "id": "MCQ-LAST2-Y910-012",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of adding a common ion on the solubility of a sparingly soluble salt. Adding NaCl to a saturated AgCl solution reduces AgCl solubility. Which of the following correctly explains this?",
      "options": [
        "NaCl reacts with AgCl",
        "The common ion effect: added Cl⁻ from NaCl shifts the dissolution equilibrium AgCl ⇌ Ag⁺ + Cl⁻ to the left, reducing AgCl solubility",
        "NaCl increases ionic strength only",
        "AgCl becomes more soluble with added NaCl"
      ],
      "correctIndex": 1,
      "explanation": "The common ion effect: AgCl ⇌ Ag⁺ + Cl⁻. Adding Cl⁻ (from NaCl) increases [Cl⁻], making Q > Ksp. The equilibrium shifts left (Le Chatelier's principle), causing more AgCl to precipitate and reducing its solubility."
    },
    {
      "id": "MCQ-Z-Y910-003",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on membrane fluidity using a fluorescence recovery experiment. Fluidity increases with temperature. Which of the following correctly explains the consequence for membrane function?",
      "options": [
        "Higher fluidity always improves membrane function",
        "Optimal fluidity is required for membrane protein function; too fluid (high temperature) or too rigid (low temperature) impairs protein conformation and transport function",
        "Higher fluidity reduces permeability",
        "Lower fluidity increases transport rates"
      ],
      "correctIndex": 1,
      "explanation": "Membrane proteins (channels, carriers, receptors) require optimal fluidity to maintain their functional conformation and mobility. Extremes of temperature — too fluid or too rigid — disrupt protein structure and function, impairing transport, signalling and enzyme activity."
    },
    {
      "id": "MCQ-E19-008",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of high altitude on red blood cell production. At altitude, RBC count increases over weeks. Which of the following correctly explains the mechanism?",
      "options": [
        "The heart produces more RBCs",
        "Low oxygen at altitude is detected by the kidneys, which release erythropoietin (EPO); EPO stimulates bone marrow to produce more RBCs, increasing oxygen-carrying capacity",
        "The lungs produce more haemoglobin",
        "High altitude reduces RBC destruction"
      ],
      "correctIndex": 1,
      "explanation": "Hypoxia (low O2) at altitude is detected by peritubular cells in the kidney, which secrete erythropoietin (EPO). EPO travels to bone marrow and stimulates erythropoiesis (RBC production). More RBCs increase blood oxygen-carrying capacity — a physiological adaptation to altitude."
    },
    {
      "id": "MCQ-LAST2-Y910-014",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of pressure on the equilibrium: CO(g) + 3H2(g) ⇌ CH4(g) + H2O(g). Increasing pressure shifts equilibrium to the right. Which of the following correctly explains this?",
      "options": [
        "Pressure always shifts equilibrium right",
        "Left side has 4 moles of gas; right side has 2 moles. Increasing pressure favours the side with fewer moles of gas (right), reducing pressure",
        "Pressure has no effect on gas equilibria",
        "Right side has more moles of gas"
      ],
      "correctIndex": 1,
      "explanation": "Le Chatelier's principle: increasing pressure favours the side with fewer moles of gas. Left: 1 + 3 = 4 mol gas. Right: 1 + 1 = 2 mol gas. Equilibrium shifts right toward fewer moles, reducing the pressure increase."
    },
    {
      "id": "MCQ-Z-Y910-004",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the cell cycle using a drug that blocks DNA replication. Cells accumulate in which phase?",
      "options": [
        "G1",
        "S phase — DNA replication is blocked, preventing progression to G2 and mitosis",
        "G2",
        "M phase"
      ],
      "correctIndex": 1,
      "explanation": "DNA replication occurs in S phase. A drug blocking replication causes cells to arrest in S phase — they cannot complete DNA synthesis and therefore cannot progress to G2 or enter mitosis. This is the basis of some chemotherapy drugs."
    },
    {
      "id": "MCQ-LAST2-Y910-015",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of a Lewis acid catalyst on an organic reaction. Which of the following correctly describes a Lewis acid?",
      "options": [
        "A proton donor",
        "An electron pair acceptor — it accepts a lone pair from a Lewis base to form a coordinate bond",
        "A proton acceptor",
        "An electron pair donor"
      ],
      "correctIndex": 1,
      "explanation": "Lewis acid-base theory: a Lewis acid accepts an electron pair; a Lewis base donates an electron pair. This is broader than Brønsted-Lowry theory (which only considers proton transfer). Examples of Lewis acids: BF3, AlCl3, Fe³⁺ — all have empty orbitals that accept electron pairs."
    },
    {
      "id": "MCQ-Z-Y910-005",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the ATP yield of aerobic respiration of glucose versus fatty acids. Fatty acids yield more ATP per gram. Which of the following correctly explains this?",
      "options": [
        "Fatty acids contain nitrogen",
        "Fatty acids have more C-H bonds per carbon atom than glucose; complete oxidation releases more energy per gram",
        "Fatty acids are smaller molecules",
        "Glucose contains more oxygen"
      ],
      "correctIndex": 1,
      "explanation": "Fatty acids are more reduced than carbohydrates — they have a higher proportion of C-H bonds and fewer C-O bonds. C-H bonds release more energy when oxidised. Per gram, fatty acids yield approximately twice the ATP of glucose."
    },
    {
      "id": "MCQ-E19-004",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of a catalyst on the equilibrium position of a reversible reaction. Which of the following correctly describes the effect?",
      "options": [
        "The catalyst shifts equilibrium to the right",
        "The catalyst shifts equilibrium to the left",
        "The catalyst increases the rate of both forward and reverse reactions equally, reaching equilibrium faster without changing the equilibrium position",
        "The catalyst changes the equilibrium constant"
      ],
      "correctIndex": 2,
      "explanation": "A catalyst lowers activation energy equally for both forward and reverse reactions. It increases the rate at which equilibrium is reached but does not change the equilibrium position (Keq). The ratio of forward to reverse rate constants remains unchanged."
    },
    {
      "id": "MCQ-Z-Y910-009",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of a non-competitive inhibitor on enzyme activity. Unlike competitive inhibition, adding more substrate does not restore activity. Which of the following correctly explains this?",
      "options": [
        "Non-competitive inhibitors bind to the active site",
        "Non-competitive inhibitors bind to an allosteric site, changing the shape of the active site permanently — substrate cannot overcome this by competing for the active site",
        "Non-competitive inhibitors increase activation energy",
        "Non-competitive inhibitors are irreversible only"
      ],
      "correctIndex": 1,
      "explanation": "Non-competitive inhibitors bind to an allosteric site (not the active site), causing a conformational change that distorts the active site. Since the inhibitor does not compete with substrate for the active site, increasing substrate concentration cannot overcome the inhibition."
    },
    {
      "id": "MCQ-FIN-Y910-001",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing substrate concentration on the rate of an enzyme-catalysed reaction. The Michaelis constant (Km) is the substrate concentration at half-maximum velocity. A lower Km indicates which of the following?",
      "options": [
        "Lower enzyme affinity for substrate",
        "Higher enzyme affinity for substrate — less substrate is needed to half-saturate the enzyme",
        "Higher maximum velocity",
        "More enzyme is present"
      ],
      "correctIndex": 1,
      "explanation": "Km is the substrate concentration at which reaction rate = Vmax/2. A lower Km means the enzyme reaches half-maximum velocity at lower substrate concentration — indicating higher affinity between enzyme and substrate."
    },
    {
      "id": "MCQ-LAST2-Y910-006",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effect of increasing temperature on the Km of an enzyme. Km increases above the optimum temperature. Which of the following correctly explains this?",
      "options": [
        "Higher temperature increases substrate concentration",
        "Above the optimum, thermal disruption of the active site reduces enzyme-substrate complementarity, requiring higher substrate concentration to achieve half-maximum velocity",
        "Higher temperature always decreases Km",
        "Km is independent of temperature"
      ],
      "correctIndex": 1,
      "explanation": "Km reflects enzyme-substrate affinity. Above the optimum temperature, thermal energy disrupts the precise shape of the active site (partial denaturation). The enzyme-substrate fit is less complementary, reducing affinity and requiring higher substrate concentration to achieve Vmax/2 — hence higher Km."
    },
    {
      "id": "MCQ-LAST2-Y910-007",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the synthesis of ATP in chloroplasts. Which of the following correctly describes the chemiosmotic mechanism?",
      "options": [
        "ATP is synthesised directly by photosystem I",
        "H⁺ ions accumulate in the thylakoid lumen during the light-dependent reactions; their flow down the concentration gradient through ATP synthase drives ATP synthesis (photophosphorylation)",
        "ATP is synthesised in the stroma without a proton gradient",
        "ATP synthase uses NADPH directly"
      ],
      "correctIndex": 1,
      "explanation": "Chemiosmosis in chloroplasts: the light-dependent reactions pump H⁺ into the thylakoid lumen, creating a proton gradient. H⁺ flows back through ATP synthase (CF0-CF1 complex) down the gradient, driving conformational changes that synthesise ATP from ADP + Pi — photophosphorylation."
    },
    {
      "id": "MCQ-E19-001",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of cyanide on cellular respiration. Cyanide blocks cytochrome c oxidase in the electron transport chain. Which molecule accumulates as a result?",
      "options": [
        "ATP",
        "NADH",
        "Oxygen",
        "Carbon dioxide"
      ],
      "correctIndex": 1,
      "explanation": "Blocking the ETC prevents NADH from being oxidised to NAD⁺. NADH accumulates as it cannot donate electrons to the chain. This also stops ATP synthesis and oxygen consumption."
    },
    {
      "id": "MCQ-E19-019",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of colchicine (which prevents spindle fibre formation) on cell division. Cells accumulate chromosomes but cannot separate them. In which phase are cells arrested?",
      "options": [
        "S phase",
        "Metaphase — chromosomes are condensed and aligned but cannot be pulled apart without spindle fibres",
        "G1 phase",
        "Telophase"
      ],
      "correctIndex": 1,
      "explanation": "Colchicine binds tubulin, preventing polymerisation of microtubules into spindle fibres. Chromosomes condense and align at the metaphase plate normally, but without spindle fibres, sister chromatids cannot be pulled to opposite poles. Cells arrest at metaphase with duplicated chromosomes."
    },
    {
      "id": "IC-82-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe the differences between plant and animal cells.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The development of antibiotics transformed medicine in the 20th century. Before antibiotics, bacterial infections — pneumonia, tuberculosis, sepsis — were leading causes of death. Alexander Fleming discovered penicillin in 1928 when he noticed that Penicillium mould inhibited bacterial growth. Howard Florey and Ernst Chain developed it into a usable medicine by 1940. Penicillin works by inhibiting bacterial cell wall synthesis — bacteria cannot maintain osmotic pressure and lyse. The antibiotic era dramatically reduced mortality from bacterial infections, enabled complex surgery and organ transplantation, and extended average life expectancy by decades. However, antibiotic resistance — driven by overuse and misuse — now threatens to reverse these gains. The WHO estimates that antimicrobial resistance could cause 10 million deaths annually by 2050 if not addressed. New antibiotic development has slowed as pharmaceutical investment has declined."
    },
    {
      "id": "IC-83-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about how scientists measure and monitor air quality.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Renewable energy sources are replenished naturally and do not deplete finite resources. Solar energy: photovoltaic cells convert sunlight directly to electricity; solar thermal systems heat water. Wind energy: turbines convert kinetic energy of wind to electricity. Hydroelectric: flowing water drives turbines. Geothermal: heat from Earth's interior generates steam to drive turbines. Tidal and wave energy: ocean movements drive generators. Non-renewable sources include fossil fuels (coal, oil, natural gas) — formed over millions of years from ancient organic matter — and nuclear fuel (uranium). Fossil fuels release CO2 when burned, driving climate change. Nuclear fuel produces radioactive waste. Key differences: renewables have low operational emissions but variable output (sun and wind are intermittent); non-renewables provide reliable baseload power but have significant environmental costs. The energy transition requires both expanding renewables and developing storage technologies to manage intermittency."
    },
    {
      "id": "IC-84-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain what causes the phases of the Moon.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The eye focuses light through a two-lens system. The cornea provides most of the refracting power (fixed). The lens fine-tunes focus through accommodation — ciliary muscles change lens shape. For distant objects, ciliary muscles relax, the lens flattens (less refracting power). For near objects, ciliary muscles contract, the lens becomes more convex (greater refracting power). Light is focused onto the retina, which contains photoreceptors: rods (sensitive to low light, no colour discrimination) and cones (colour vision, concentrated in the fovea). The optic nerve transmits signals to the visual cortex. Common refractive errors: myopia (short-sightedness) — eyeball too long, image focuses in front of retina, corrected with concave lens; hyperopia (long-sightedness) — eyeball too short, corrected with convex lens; astigmatism — irregular cornea curvature, corrected with cylindrical lens."
    },
    {
      "id": "IC-85-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the endocrine system uses negative feedback to regulate hormones.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Radioactive tracers are radioisotopes introduced into the body to track physiological processes. They emit radiation detectable by external scanners without requiring surgery. Technetium-99m (half-life 6 hours) is the most widely used medical tracer — it emits gamma rays detectable by gamma cameras and decays quickly, minimising radiation dose. It is used to image bone, heart, kidney and thyroid function. Iodine-131 (half-life 8 days) is taken up selectively by the thyroid gland — used to diagnose and treat thyroid cancer and hyperthyroidism. PET (Positron Emission Tomography) uses fluorine-18 labelled glucose (FDG) to image metabolic activity — cancer cells and active brain regions consume more glucose, appearing as 'hot spots'. The short half-lives of medical tracers are essential — they must remain radioactive long enough for imaging but decay quickly to minimise patient radiation exposure."
    },
    {
      "id": "IC-86-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the role of meiosis in generating genetic diversity.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The placenta is a temporary organ that develops during pregnancy, connecting the fetal and maternal circulations without allowing blood to mix. It performs multiple functions: gas exchange (O2 from mother to fetus, CO2 from fetus to mother by diffusion); nutrient transfer (glucose, amino acids, fatty acids, vitamins); waste removal (urea from fetus to mother); hormone production (hCG maintains the corpus luteum early in pregnancy; oestrogen and progesterone maintain the uterine lining); and immune protection (maternal IgG antibodies cross the placenta, providing passive immunity to the newborn). The placenta has a large surface area of chorionic villi bathed in maternal blood, maximising exchange efficiency. It also acts as a partial barrier against some pathogens and toxins, though many drugs, alcohol and some viruses (e.g. rubella, HIV) can cross, causing fetal harm."
    },
    {
      "id": "IC-87-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how a catalyst speeds up a chemical reaction without being consumed.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Neurons are specialised cells adapted for rapid electrical signalling. Structure reflects function: the cell body (soma) contains the nucleus and metabolic machinery; dendrites are short branched extensions that receive signals from other neurons; the axon is a long projection that transmits signals away from the cell body; myelin sheath (produced by Schwann cells) insulates the axon, dramatically increasing conduction speed (saltatory conduction — impulse jumps between nodes of Ranvier); the axon terminal releases neurotransmitters into the synapse. Motor neurons have long axons to reach distant muscles; sensory neurons have specialised receptor endings; interneurons in the CNS have extensive dendritic trees for integration. The resting membrane potential (-70 mV) is maintained by the Na⁺/K⁺ ATPase pump. An action potential is an all-or-nothing depolarisation that propagates along the axon without decrement."
    },
    {
      "id": "IC-88-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe the structure of the atom and how our understanding of it has changed over time.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "When a virus enters the body, the immune system responds in stages. Innate immunity acts immediately: infected cells release interferons that warn neighbouring cells and activate natural killer cells. Macrophages engulf viral particles and present antigens on MHC molecules. The adaptive immune response activates over days: helper T cells (CD4⁺) recognise viral antigens and release cytokines that activate B cells and cytotoxic T cells. B cells differentiate into plasma cells producing virus-specific antibodies that neutralise virions and mark them for destruction. Cytotoxic T cells (CD8⁺) kill virus-infected cells displaying viral antigens on MHC-I molecules, preventing viral replication. Memory B and T cells persist after infection, enabling rapid secondary responses. Viruses evade immunity through mutation (antigenic drift — influenza), latency (herpes viruses hide in neurons) and immune suppression (HIV destroys CD4⁺ T cells)."
    },
    {
      "id": "IC-89-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the ethical considerations of cloning animals.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Genetic screening identifies individuals carrying disease-associated gene variants before symptoms develop or before conception. Carrier screening: identifies heterozygous carriers of recessive conditions (cystic fibrosis, sickle cell disease) who are unaffected but may pass the condition to children. Prenatal screening: amniocentesis or chorionic villus sampling analyses fetal DNA for chromosomal abnormalities (Down syndrome) or single-gene disorders. Newborn screening: heel-prick blood tests screen for treatable metabolic conditions (PKU, congenital hypothyroidism) enabling early intervention. Predictive testing: identifies variants increasing risk of adult-onset conditions (BRCA1/2 for breast cancer, APOE4 for Alzheimer's). Scientific benefits: enables informed reproductive decisions, early intervention and personalised medicine. Ethical concerns: psychological impact of positive results; insurance and employment discrimination; privacy of genetic information; reproductive decisions under social pressure; and the risk of genetic determinism — overestimating the predictive power of genetic variants."
    },
    {
      "id": "IC-90-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how the carbon cycle maintains atmospheric CO2 levels.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The heart's structure is precisely adapted for its function as a dual pump. Four chambers: two atria (thin-walled, receive blood) and two ventricles (thick-walled, pump blood). The left ventricle has the thickest wall — it pumps blood around the entire systemic circulation at high pressure. Four valves prevent backflow: atrioventricular valves (tricuspid right, mitral left) between atria and ventricles; semilunar valves (pulmonary and aortic) at the exits of the ventricles. The sinoatrial node (pacemaker) generates electrical impulses that spread across the atria, pause at the atrioventricular node, then travel via the bundle of His and Purkinje fibres to the ventricles — ensuring coordinated contraction. Coronary arteries supply the heart muscle itself with oxygenated blood. The heart's double-pump design ensures complete separation of oxygenated and deoxygenated blood, maximising oxygen delivery to tissues."
    },
    {
      "id": "IC-91-F7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the human respiratory system is adapted for efficient gas exchange.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Tidal energy harnesses the kinetic and potential energy of ocean tides, driven by gravitational forces of the Moon and Sun. Tidal barrages trap water at high tide and release it through turbines at low tide. Tidal stream generators (underwater turbines) capture energy from tidal currents. Advantages: highly predictable (tides follow astronomical cycles); no fuel costs; no direct CO2 emissions; long operational lifespan. Disadvantages: high capital costs; limited suitable sites (requires large tidal range or strong currents); tidal barrages alter estuarine ecosystems, affecting sediment transport, water quality and habitats for migratory birds and fish; tidal stream generators may affect marine life. Global tidal energy potential is estimated at 1000 TWh/year — significant but limited compared to solar and wind. The UK, with its large tidal ranges (Severn Estuary: 14 m), has substantial potential. Tidal energy is reliable but geographically constrained."
    },
    {
      "id": "AR-68-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that the population of a species of moth changed from mostly light-coloured to mostly dark-coloured after industrialisation. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the change in moth population colour during industrialisation.\nObservation: The proportion of dark (melanic) moths increased from ~5% to ~85% during industrialisation, then decreased after clean air legislation.\nExplanation: Before industrialisation, pale moths were camouflaged on lichen-covered tree bark; dark moths were visible to predators. Industrialisation killed lichens and darkened bark with soot — dark moths became better camouflaged and survived predation more successfully. After clean air legislation, lichens returned and pale moths regained their camouflage advantage.\nConclusion: This is a classic example of natural selection (industrial melanism). Selection pressure (predation) changed with the environment, causing allele frequency changes in both directions. It demonstrates evolution occurring within observable timescales."
    },
    {
      "id": "AR-69-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates the effect of exercise duration on lactic acid concentration in blood. Results show lactic acid increases with duration. Write a scientific report.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of exercise duration on blood lactic acid concentration.\nObservation: Lactic acid concentration increased with exercise duration, rising sharply above the lactate threshold.\nExplanation: At low-moderate intensity, aerobic respiration meets energy demands — no lactic acid accumulates. Above the lactate threshold, oxygen delivery is insufficient and anaerobic respiration supplements energy production, generating lactic acid faster than it can be cleared. Lactic acid accumulation causes muscle fatigue and the burning sensation.\nConclusion: Lactic acid accumulates above the lactate threshold when anaerobic respiration supplements aerobic respiration. This has implications for athletic training — training at or above the lactate threshold improves the body's ability to clear lactic acid and raises the threshold."
    },
    {
      "id": "AR-70-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that the rate of a chemical reaction doubles for every 10°C rise in temperature. Analyse and explain using collision theory.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of temperature on reaction rate using the Arrhenius relationship.\nObservation: Reaction rate approximately doubled for every 10°C rise in temperature.\nExplanation: The Arrhenius equation: k = Ae^(-Ea/RT). Higher temperature increases the proportion of molecules with energy ≥ activation energy (Ea) exponentially. A 10°C rise approximately doubles the fraction of molecules exceeding Ea for typical biological reactions (Q10 ≈ 2). Collision frequency also increases with temperature.\nConclusion: Reaction rate increases exponentially with temperature, consistent with the Arrhenius equation. The Q10 value of approximately 2 is typical for enzyme-controlled reactions and has implications for the effect of fever on metabolic rate."
    },
    {
      "id": "AR-71-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the current in a series circuit with different numbers of resistors. Results show current decreases as more resistors are added. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of adding resistors in series on circuit current.\nObservation: Current decreased as more resistors were added in series.\nExplanation: In a series circuit, total resistance = sum of individual resistances (R_total = R1 + R2 + R3...). By Ohm's law (I = V/R), increasing total resistance decreases current for a fixed voltage. Each additional resistor adds to the total resistance, reducing current proportionally.\nConclusion: Adding resistors in series increases total resistance and decreases current, consistent with Ohm's law and Kirchhoff's laws. This demonstrates why series circuits are less practical for household wiring — adding more appliances reduces current to all."
    },
    {
      "id": "AR-72-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that the number of individuals in a population follows a logistic growth curve. Analyse and explain the shape of this curve.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate logistic population growth.\nObservation: Population grew rapidly initially, then growth slowed and stabilised at approximately 5000 individuals.\nExplanation: Initially, resources are abundant and the population grows exponentially. As population approaches carrying capacity (K), intraspecific competition for food, space and other resources intensifies. Birth rate decreases and death rate increases, slowing growth. At K, birth rate equals death rate and population stabilises. The S-shaped (sigmoidal) curve is characteristic of logistic growth.\nConclusion: The population followed logistic growth, stabilising at the carrying capacity of approximately 5000. This model describes population growth in resource-limited environments and is fundamental to ecology and conservation biology."
    },
    {
      "id": "AR-73-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates how the mass of a ball affects the depth of the crater it makes when dropped into sand. Results show deeper craters with heavier balls. Write a scientific report.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of crater depth on the mass of a dropped ball.\nObservation: Heavier balls produced deeper craters when dropped from the same height.\nExplanation: Heavier balls have greater gravitational potential energy (GPE = mgh) at the same height. This converts to greater kinetic energy at impact (KE = ½mv²). Greater kinetic energy means more work is done on the sand, producing a deeper crater. The depth of the crater is proportional to the kinetic energy at impact.\nConclusion: Crater depth increases with ball mass because heavier balls have greater kinetic energy at impact. This demonstrates the relationship between mass, energy and impact force."
    },
    {
      "id": "AR-74-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Results show that the rate of enzyme activity decreases when an inhibitor is added. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of an enzyme inhibitor on reaction rate.\nObservation: Reaction rate decreased as inhibitor concentration increased.\nExplanation: The inhibitor binds to the enzyme, reducing the number of functional active sites available for substrate binding. Competitive inhibitors compete with substrate for the active site — increasing substrate concentration can overcome this. Non-competitive inhibitors bind to an allosteric site, changing active site shape — substrate cannot overcome this.\nConclusion: Enzyme inhibitors reduce reaction rate by decreasing the number of functional enzyme-substrate complexes. The type of inhibition (competitive vs non-competitive) can be determined by testing whether excess substrate restores activity."
    },
    {
      "id": "AR-75-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the wavelength of light using a diffraction grating. Describe how the results can be used to calculate wavelength.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To calculate the wavelength of light using a diffraction grating.\nObservation: Bright fringes appeared at specific angles; the angle of the first-order maximum was measured.\nExplanation: The diffraction grating equation: dsinθ = nλ, where d = slit spacing, θ = angle of nth order maximum, n = order number, λ = wavelength. Rearranging: λ = dsinθ/n. The slit spacing d = 1/N (where N = lines per metre on the grating). Measuring θ for the first-order maximum (n=1) allows λ to be calculated.\nConclusion: The wavelength of light can be accurately determined using a diffraction grating and the equation λ = dsinθ/n. This method is more precise than using a single slit and demonstrates the wave nature of light through diffraction and interference."
    },
    {
      "id": "AR-76-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Data shows that the average beak size of a bird population increased during a drought when only large seeds were available. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "AI-generated model answer: When checking this answer, the AI coach will evaluate your response against the task requirements and provide a top-band model answer based on: correct scientific terminology, logical structure (Aim/Observation/Explanation/Conclusion), accurate interpretation of the data, and sound scientific reasoning."
    },
    {
      "id": "AR-77-F7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student investigates the effect of substrate concentration on the rate of catalase activity. Results show rate increases then levels off. Analyse and explain.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "AI-generated model answer: When checking this answer, the AI coach will evaluate your response against the task requirements and provide a top-band model answer based on: correct scientific terminology, logical structure (Aim/Observation/Explanation/Conclusion), accurate interpretation of the data, and sound scientific reasoning."
    }
  ]
};
