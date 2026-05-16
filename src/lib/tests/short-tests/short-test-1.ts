import type { PracticeTest } from "@/types/test";

export const shortTest1: PracticeTest = {
  "id": "short-1",
  "title": "Short Test 1",
  "subtitle": "45-minute practice — Cell Biology, Human Body + written",
  "kind": "short",
  "released": true,
  "durationSec": 2700,
  "questions": [
    {
      "id": "MCQ-BIO-Y910-001",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student observes a cell with a large central vacuole, chloroplasts and a cell wall. Which type of cell is this?",
      "options": [
        "Animal cell",
        "Bacterial cell",
        "Plant cell",
        "Fungal cell"
      ],
      "correctIndex": 2,
      "explanation": "Plant cells uniquely contain chloroplasts, a large central vacuole and a rigid cell wall made of cellulose."
    },
    {
      "id": "MCQ-BIO-Y910-041",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures their heart rate before and after exercise. The heart rate increases during exercise. Which of the following best explains this?",
      "options": [
        "The heart pumps less blood per beat",
        "Increased CO2 in the blood stimulates the medulla to increase heart rate",
        "The blood pressure drops during exercise",
        "The heart muscle relaxes more during exercise"
      ],
      "correctIndex": 1,
      "explanation": "Rising CO2 levels during exercise lower blood pH, which is detected by chemoreceptors. The medulla oblongata responds by increasing heart rate to deliver more oxygen and remove CO2."
    },
    {
      "id": "MCQ-BIO2-Y910-021",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of temperature on bacterial growth rate. Growth rate increases up to 37°C then falls sharply above 45°C. Which of the following correctly explains the sharp decline above 45°C?",
      "options": [
        "Bacteria run out of nutrients above 45°C",
        "Enzymes essential for bacterial metabolism denature above their optimum temperature",
        "Bacteria reproduce faster above 45°C",
        "The growth medium becomes toxic above 45°C"
      ],
      "correctIndex": 1,
      "explanation": "Bacterial enzymes have an optimum temperature (~37°C for human pathogens). Above this, the enzyme's tertiary structure is disrupted (denaturation), preventing metabolic reactions essential for growth and reproduction."
    },
    {
      "id": "MCQ-BIO-Y910-002",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which process moves glucose into a cell against its concentration gradient?",
      "options": [
        "Osmosis",
        "Facilitated diffusion",
        "Active transport",
        "Simple diffusion"
      ],
      "correctIndex": 2,
      "explanation": "Active transport uses ATP energy to move substances against their concentration gradient, unlike passive processes."
    },
    {
      "id": "MCQ-BIO-Y910-042",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which blood vessel carries oxygenated blood from the lungs to the heart?",
      "options": [
        "Pulmonary artery",
        "Aorta",
        "Pulmonary vein",
        "Vena cava"
      ],
      "correctIndex": 2,
      "explanation": "The pulmonary vein carries oxygenated blood from the lungs back to the left atrium of the heart. The pulmonary artery carries deoxygenated blood from the heart to the lungs."
    },
    {
      "id": "MCQ-BIO2-Y910-022",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student cultures bacteria on an agar plate and places antibiotic-soaked discs on the surface. After incubation, clear zones (zones of inhibition) appear around some discs. Which of the following correctly interprets a large zone of inhibition?",
      "options": [
        "The bacterium is resistant to that antibiotic",
        "The bacterium is highly sensitive to that antibiotic — it cannot grow in the presence of that concentration",
        "The antibiotic promotes bacterial growth",
        "The zone indicates the antibiotic has been absorbed"
      ],
      "correctIndex": 1,
      "explanation": "A large zone of inhibition indicates the antibiotic diffuses outward and kills or inhibits bacteria over a wide area — the bacterium is sensitive (susceptible) to that antibiotic. No zone indicates resistance."
    },
    {
      "id": "MCQ-BIO-Y910-003",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A red blood cell is placed in a solution and swells until it bursts. What type of solution was it placed in?",
      "options": [
        "Hypertonic",
        "Isotonic",
        "Hypotonic",
        "Saturated"
      ],
      "correctIndex": 2,
      "explanation": "In a hypotonic solution, water moves into the cell by osmosis because the solution has a lower solute concentration than the cell."
    },
    {
      "id": "MCQ-BIO-Y910-043",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A patient has a blocked coronary artery. Which part of the body is most directly affected?",
      "options": [
        "Brain",
        "Lungs",
        "Heart muscle",
        "Kidneys"
      ],
      "correctIndex": 2,
      "explanation": "Coronary arteries supply oxygenated blood to the heart muscle itself. A blockage causes a myocardial infarction (heart attack) as heart muscle cells are deprived of oxygen."
    },
    {
      "id": "MCQ-BIO2-Y910-023",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes how viruses differ from bacteria?",
      "options": [
        "Viruses are larger than bacteria",
        "Viruses are non-living particles that require a host cell to replicate; bacteria are living cells that can reproduce independently",
        "Bacteria require a host cell to replicate",
        "Viruses can be treated with antibiotics"
      ],
      "correctIndex": 1,
      "explanation": "Viruses are acellular (non-living) particles consisting of nucleic acid (DNA or RNA) enclosed in a protein coat. They cannot reproduce independently — they must hijack host cell machinery. Bacteria are living prokaryotic cells that reproduce by binary fission."
    },
    {
      "id": "MCQ-BIO-Y910-004",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A plant cell is placed in a concentrated salt solution. What will happen?",
      "options": [
        "The cell will burst",
        "The cell will become turgid",
        "The cell will plasmolyse",
        "The cell wall will dissolve"
      ],
      "correctIndex": 2,
      "explanation": "In a hypertonic solution, water leaves the cell by osmosis, causing the cell membrane to pull away from the cell wall — plasmolysis."
    },
    {
      "id": "MCQ-BIO-Y910-044",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the role of insulin in blood glucose regulation?",
      "options": [
        "Insulin stimulates the liver to convert glycogen to glucose",
        "Insulin stimulates cells to take up glucose and the liver to store it as glycogen",
        "Insulin is released when blood glucose is low",
        "Insulin is produced by the adrenal gland"
      ],
      "correctIndex": 1,
      "explanation": "After a meal, rising blood glucose triggers the pancreas to release insulin. Insulin stimulates cells to absorb glucose and the liver to convert excess glucose to glycogen (glycogenesis)."
    },
    {
      "id": "MCQ-BIO2-Y910-024",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the spread of a respiratory infection in a school. Cases cluster in classrooms with poor ventilation. Which of the following correctly identifies the mode of transmission?",
      "options": [
        "Vector-borne transmission",
        "Airborne/droplet transmission — infectious particles spread through the air",
        "Direct contact transmission",
        "Foodborne transmission"
      ],
      "correctIndex": 1,
      "explanation": "Respiratory infections spread via droplets or aerosols expelled when infected individuals breathe, cough or sneeze. Poor ventilation allows infectious particles to accumulate, increasing transmission risk."
    },
    {
      "id": "MCQ-BIO-Y910-005",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which organelle is responsible for modifying and sorting proteins for secretion?",
      "options": [
        "Rough endoplasmic reticulum",
        "Smooth endoplasmic reticulum",
        "Golgi apparatus",
        "Lysosome"
      ],
      "correctIndex": 2,
      "explanation": "The Golgi apparatus receives proteins from the rough ER, modifies them (e.g. adds carbohydrate chains) and packages them into vesicles for secretion."
    },
    {
      "id": "MCQ-BIO-Y910-045",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student with type 1 diabetes cannot produce insulin. Which of the following would be observed after a carbohydrate-rich meal?",
      "options": [
        "Blood glucose would remain normal",
        "Blood glucose would fall rapidly",
        "Blood glucose would rise and remain elevated",
        "Blood glucose would be converted to glycogen normally"
      ],
      "correctIndex": 2,
      "explanation": "Without insulin, cells cannot absorb glucose and the liver cannot store it as glycogen. Blood glucose rises and remains elevated (hyperglycaemia)."
    },
    {
      "id": "MCQ-BIO2-Y910-025",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why completing a full course of antibiotics is important?",
      "options": [
        "To ensure the patient feels better",
        "To eliminate all bacteria, including slower-growing ones that survive initial treatment, preventing resistance developing from survivors",
        "To prevent the antibiotic from being wasted",
        "To increase the patient's immunity"
      ],
      "correctIndex": 1,
      "explanation": "Stopping antibiotics early leaves slower-growing or partially resistant bacteria alive. These survivors can reproduce and pass on resistance genes. Completing the full course ensures all bacteria are eliminated, reducing the risk of resistance developing."
    },
    {
      "id": "MCQ-BIO-Y910-006",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student uses a light microscope with a 10× eyepiece and a 40× objective lens. What is the total magnification?",
      "options": [
        "40×",
        "50×",
        "400×",
        "4000×"
      ],
      "correctIndex": 2,
      "explanation": "Total magnification = eyepiece × objective = 10 × 40 = 400×."
    },
    {
      "id": "MCQ-BIO-Y910-046",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which structure in the kidney is responsible for the initial filtration of blood?",
      "options": [
        "Loop of Henle",
        "Collecting duct",
        "Glomerulus",
        "Proximal convoluted tubule"
      ],
      "correctIndex": 2,
      "explanation": "The glomerulus is a knot of capillaries inside the Bowman's capsule where high pressure forces small molecules (water, glucose, urea, ions) out of the blood into the nephron."
    },
    {
      "id": "MCQ-BIO2-Y910-026",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the effectiveness of different hand-washing techniques in removing bacteria. Which of the following would be the most appropriate control?",
      "options": [
        "Washing hands with hot water only",
        "Not washing hands at all — to compare bacterial counts before and after washing",
        "Using the most effective technique as the control",
        "Using distilled water as the control"
      ],
      "correctIndex": 1,
      "explanation": "A control group (no washing) establishes the baseline bacterial count. Comparing washed hands to unwashed hands allows the student to determine whether washing actually reduces bacterial counts and by how much."
    },
    {
      "id": "MCQ-BIO-Y910-007",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following is NOT found in a prokaryotic cell?",
      "options": [
        "Ribosome",
        "Cell membrane",
        "Nucleus",
        "Cell wall"
      ],
      "correctIndex": 2,
      "explanation": "Prokaryotic cells lack a membrane-bound nucleus. Their DNA floats freely in the cytoplasm."
    },
    {
      "id": "MCQ-BIO-Y910-047",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the composition of blood entering the kidney (renal artery) with urine. Which substance is present in blood but absent in urine in a healthy person?",
      "options": [
        "Urea",
        "Water",
        "Glucose",
        "Sodium ions"
      ],
      "correctIndex": 2,
      "explanation": "Glucose is completely reabsorbed in the proximal convoluted tubule and should not appear in urine. Its presence in urine (glycosuria) indicates diabetes mellitus."
    },
    {
      "id": "IC-1-S1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain why renewable energy is essential for future generations. Use scientific reasoning and examples.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Renewable energy is essential because fossil fuels are finite and their combustion releases carbon dioxide, a greenhouse gas that drives climate change. Solar, wind and hydroelectric sources generate electricity with negligible emissions during operation. Scientifically, the sun delivers approximately 173 000 terawatts of energy to Earth continuously — far exceeding global demand. Transitioning to renewables reduces atmospheric CO2, slowing ocean acidification and global temperature rise. Beyond climate, renewables improve energy security by reducing dependence on imported fuels. Investment in renewable infrastructure also stimulates technological innovation and employment. From a thermodynamic perspective, harnessing energy flows rather than depleting stored reserves is the only sustainable long-term strategy for civilisation."
    },
    {
      "id": "IC-2-S1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write for a general audience explaining how biodiversity supports human life.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Biodiversity underpins human survival through ecosystem services that are often invisible until lost. Pollination by wild insects supports over 75% of global food crops. Diverse plant communities stabilise soils, filter water and regulate local climate through transpiration. Genetic diversity within species provides the raw material for developing disease-resistant crops and new medicines — over 50% of pharmaceuticals derive from natural compounds. Ecologically, high species diversity increases ecosystem resilience: if one species declines, others fulfil similar roles, maintaining function. Economically, ecosystem services are estimated to be worth trillions of dollars annually. Protecting biodiversity is therefore not merely an ethical choice but a practical necessity for food security, medicine and long-term human wellbeing."
    },
    {
      "id": "AR-1-S1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Enzyme activity increases with temperature until an optimum, then falls sharply. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of temperature on enzyme activity.\nObservation: Enzyme activity increased steadily as temperature rose, reaching a peak at the optimum temperature (~37°C), after which activity declined sharply.\nExplanation: Rising temperature increases the kinetic energy of enzyme and substrate molecules, raising collision frequency and reaction rate. Above the optimum, the enzyme's tertiary structure is disrupted — hydrogen and ionic bonds maintaining the active site shape break (denaturation) — so substrate molecules can no longer bind effectively.\nConclusion: Enzyme activity peaks at an optimum temperature and falls rapidly above it due to denaturation. This relationship is non-linear and irreversible above the denaturation point."
    }
  ]
};
