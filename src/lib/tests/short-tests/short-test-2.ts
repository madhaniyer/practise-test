import type { PracticeTest } from "@/types/test";

export const shortTest2: PracticeTest = {
  "id": "short-2",
  "title": "Short Test 2",
  "subtitle": "45-minute practice — Genetics, Evolution and Classification + written",
  "kind": "short",
  "released": true,
  "durationSec": 2700,
  "questions": [
    {
      "id": "MCQ-BIO-Y910-021",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "In a monohybrid cross between two heterozygous parents (Aa × Aa), what is the expected phenotypic ratio of dominant to recessive offspring?",
      "options": [
        "1:1",
        "2:1",
        "3:1",
        "4:0"
      ],
      "correctIndex": 2,
      "explanation": "The Punnett square gives AA, Aa, Aa, aa — three show the dominant phenotype and one shows the recessive phenotype, giving a 3:1 ratio."
    },
    {
      "id": "MCQ-BIO2-Y910-001",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A population of beetles lives on dark soil. Most are dark-coloured; a few are light-coloured. Birds preferentially eat light beetles. After 20 generations, nearly all beetles are dark. Which process explains this?",
      "options": [
        "Lamarckian inheritance — beetles darkened their colour in response to predation",
        "Natural selection — dark beetles had higher survival and reproductive rates, increasing the frequency of dark alleles",
        "Genetic drift — random chance eliminated light beetles",
        "Mutation — all light beetles mutated to dark"
      ],
      "correctIndex": 1,
      "explanation": "Natural selection: pre-existing variation (dark/light colour) interacted with selection pressure (bird predation). Dark beetles survived and reproduced more, passing dark alleles to offspring. Over generations, dark allele frequency increased."
    },
    {
      "id": "MCQ-BIO2-Y910-011",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the rate of photosynthesis in pondweed at different light intensities. At low light intensity, doubling the light doubles the rate. At high light intensity, doubling the light has no effect. Which of the following correctly explains the plateau?",
      "options": [
        "The plant runs out of chlorophyll",
        "Light is no longer the limiting factor — CO2 concentration or temperature is now limiting",
        "The plant is producing too much oxygen",
        "The water becomes too warm"
      ],
      "correctIndex": 1,
      "explanation": "At low light intensity, light is the limiting factor. At the plateau, another factor (CO2 concentration or temperature) becomes limiting. Increasing light further cannot increase the rate until the new limiting factor is addressed."
    },
    {
      "id": "MCQ-BIO-Y910-022",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A woman who is a carrier of haemophilia (X^H X^h) has children with an unaffected man (X^H Y). What is the probability that their son will have haemophilia?",
      "options": [
        "0%",
        "25%",
        "50%",
        "100%"
      ],
      "correctIndex": 2,
      "explanation": "Sons receive the Y chromosome from their father and either X^H or X^h from their mother. There is a 50% chance a son receives X^h and is affected."
    },
    {
      "id": "MCQ-BIO2-Y910-002",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Two populations of a bird species are separated by a mountain range for 50 000 years. When the range disappears, the two populations can no longer interbreed. Which of the following has occurred?",
      "options": [
        "Sympatric speciation",
        "Allopatric speciation — geographic isolation led to reproductive isolation",
        "Genetic drift only",
        "Convergent evolution"
      ],
      "correctIndex": 1,
      "explanation": "Allopatric speciation: geographic isolation (mountain range) prevented gene flow. Each population accumulated different mutations and adaptations. After sufficient divergence, reproductive isolation was complete — they became separate species."
    },
    {
      "id": "MCQ-BIO2-Y910-012",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the rate of transpiration in a plant on a humid day versus a dry day. Transpiration is faster on the dry day. Which of the following correctly explains this?",
      "options": [
        "Stomata open wider on dry days",
        "The concentration gradient for water vapour between the leaf and air is steeper on a dry day, increasing the rate of diffusion",
        "Plants produce more water on dry days",
        "Temperature is always higher on dry days"
      ],
      "correctIndex": 1,
      "explanation": "Transpiration rate depends on the water vapour concentration gradient between the leaf air spaces (saturated) and the surrounding air. On a dry day, the air has lower humidity, creating a steeper gradient and faster diffusion of water vapour out of the leaf."
    },
    {
      "id": "MCQ-BIO-Y910-023",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following describes a test cross?",
      "options": [
        "Crossing two homozygous dominant individuals",
        "Crossing an individual of unknown genotype with a homozygous recessive individual",
        "Crossing two heterozygous individuals",
        "Crossing a dominant with a recessive phenotype individual"
      ],
      "correctIndex": 1,
      "explanation": "A test cross uses a homozygous recessive individual to reveal whether the unknown individual is homozygous dominant or heterozygous."
    },
    {
      "id": "MCQ-BIO2-Y910-003",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the forelimb bones of a human arm, a whale flipper and a bat wing. All contain the same bones (humerus, radius, ulna) arranged differently. What does this indicate?",
      "options": [
        "Convergent evolution — similar environments produced similar structures",
        "Analogous structures with no common ancestry",
        "Homologous structures indicating common ancestry",
        "The structures have identical functions"
      ],
      "correctIndex": 2,
      "explanation": "Homologous structures share the same underlying anatomy due to common ancestry, even if they serve different functions. This is evidence for divergent evolution from a common ancestor."
    },
    {
      "id": "MCQ-BIO2-Y910-013",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of CO2 concentration on photosynthesis rate. Results show rate increases then plateaus. A second experiment at higher temperature shows a higher plateau. Which of the following correctly explains why temperature affects the plateau?",
      "options": [
        "Higher temperature increases CO2 concentration",
        "Higher temperature increases the activity of Calvin cycle enzymes, so they can process more CO2 before becoming saturated",
        "Higher temperature increases chlorophyll production",
        "Higher temperature reduces the limiting effect of light"
      ],
      "correctIndex": 1,
      "explanation": "The Calvin cycle (light-independent reactions) is enzyme-controlled. Higher temperature (up to the optimum) increases enzyme activity, allowing faster processing of CO2. This raises the plateau because the enzyme limitation is reduced."
    },
    {
      "id": "MCQ-BIO-Y910-024",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A gene has two alleles: T (tall, dominant) and t (short, recessive). A tall plant is crossed with a short plant and produces 50% tall and 50% short offspring. What is the genotype of the tall parent?",
      "options": [
        "TT",
        "Tt",
        "tt",
        "Cannot be determined"
      ],
      "correctIndex": 1,
      "explanation": "If the tall parent were TT, all offspring would be tall (Tt). The 50:50 ratio indicates the tall parent is Tt, producing Tt (tall) and tt (short) offspring."
    },
    {
      "id": "MCQ-BIO2-Y910-004",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses the amino acid sequence of cytochrome c (a protein) in five species. Species A and B differ by 1 amino acid; A and C differ by 12. What can be concluded?",
      "options": [
        "A and C are more closely related than A and B",
        "A and B share a more recent common ancestor than A and C",
        "All species are equally related",
        "Amino acid sequences are unrelated to evolution"
      ],
      "correctIndex": 1,
      "explanation": "Fewer differences in protein sequences indicate more recent divergence. A and B (1 difference) share a more recent common ancestor than A and C (12 differences). Molecular evidence supports phylogenetic relationships."
    },
    {
      "id": "MCQ-BIO2-Y910-014",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the role of the xylem in a plant?",
      "options": [
        "Transports sugars from leaves to roots",
        "Transports water and dissolved minerals from roots to leaves",
        "Stores starch in the stem",
        "Produces new cells at the shoot tip"
      ],
      "correctIndex": 1,
      "explanation": "Xylem is a vascular tissue that transports water and dissolved mineral ions from the roots upward through the stem to the leaves. Water movement is driven by transpiration pull (cohesion-tension mechanism)."
    },
    {
      "id": "MCQ-BIO-Y910-025",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes codominance?",
      "options": [
        "One allele is completely dominant over the other",
        "The heterozygote shows a blend of both phenotypes",
        "Both alleles are fully expressed simultaneously in the heterozygote",
        "The recessive allele is never expressed"
      ],
      "correctIndex": 2,
      "explanation": "In codominance, both alleles contribute equally to the phenotype. For example, AB blood type shows both A and B antigens simultaneously."
    },
    {
      "id": "MCQ-BIO2-Y910-005",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the role of mutations in evolution?",
      "options": [
        "Mutations are always harmful and reduce fitness",
        "Mutations provide the heritable variation upon which natural selection acts",
        "Mutations are directed toward beneficial outcomes",
        "Mutations only occur in somatic cells"
      ],
      "correctIndex": 1,
      "explanation": "Mutations are random changes in DNA sequence. Most are neutral or harmful, but occasionally a mutation increases fitness. Natural selection then acts on this heritable variation, potentially increasing the frequency of beneficial alleles."
    },
    {
      "id": "MCQ-BIO2-Y910-015",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of removing leaves from a plant on the rate of water uptake. Water uptake decreases significantly. Which of the following best explains this?",
      "options": [
        "Roots absorb less water without leaves",
        "Leaves are the main site of transpiration; removing them eliminates the transpiration pull that drives water uptake",
        "The stem cannot transport water without leaves",
        "Photosynthesis drives water uptake directly"
      ],
      "correctIndex": 1,
      "explanation": "Transpiration from leaves creates a tension (negative pressure) that pulls water up through the xylem — the cohesion-tension mechanism. Removing leaves eliminates transpiration, removing the driving force for water uptake."
    },
    {
      "id": "MCQ-BIO-Y910-026",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A mutation changes a single base in a DNA sequence, resulting in a codon that codes for the same amino acid. What type of mutation is this?",
      "options": [
        "Frameshift mutation",
        "Nonsense mutation",
        "Silent mutation",
        "Missense mutation"
      ],
      "correctIndex": 2,
      "explanation": "A silent (synonymous) mutation changes a base but due to the degeneracy of the genetic code, the same amino acid is still incorporated — no change in protein function."
    },
    {
      "id": "MCQ-BIO2-Y910-006",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student studies a population of moths over 50 years. The frequency of a melanic (dark) allele increased from 5% to 85% during industrialisation, then decreased to 30% after clean air legislation. Which of the following best explains this pattern?",
      "options": [
        "Genetic drift caused random allele frequency changes",
        "Natural selection: dark moths were camouflaged on soot-covered trees during industrialisation; clean air restored lichen, favouring pale moths",
        "Mutation rates increased during industrialisation",
        "Lamarckian inheritance caused moths to change colour"
      ],
      "correctIndex": 1,
      "explanation": "Industrial melanism: soot killed lichens, darkening tree bark. Dark moths were better camouflaged from predators, increasing their survival. After clean air legislation, lichens returned, pale moths became better camouflaged again — selection reversed."
    },
    {
      "id": "MCQ-BIO2-Y910-016",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student tests a variegated leaf (green and white sections) for starch using iodine solution. Only the green sections turn blue-black. Which of the following correctly explains this result?",
      "options": [
        "White sections contain more starch",
        "Green sections contain chlorophyll and can photosynthesise, producing starch; white sections lack chlorophyll",
        "Iodine only reacts with green pigments",
        "White sections are dead"
      ],
      "correctIndex": 1,
      "explanation": "Starch is produced by photosynthesis. Green sections contain chlorophyll and can photosynthesise, producing glucose that is converted to starch. White sections lack chlorophyll and cannot photosynthesise, so no starch is produced."
    },
    {
      "id": "MCQ-BIO-Y910-027",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "During meiosis, crossing over between homologous chromosomes increases genetic diversity. At which stage does this occur?",
      "options": [
        "Metaphase I",
        "Anaphase II",
        "Prophase I",
        "Telophase II"
      ],
      "correctIndex": 2,
      "explanation": "Crossing over (recombination) occurs during prophase I of meiosis, when homologous chromosomes pair up and exchange segments of DNA."
    },
    {
      "id": "MCQ-BIO2-Y910-007",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly distinguishes a species from a genus in the Linnaean classification system?",
      "options": [
        "A genus contains only one species",
        "A genus is a group of closely related species; a species is a group of organisms that can interbreed and produce fertile offspring",
        "Species is a broader category than genus",
        "Genus and species are the same level"
      ],
      "correctIndex": 1,
      "explanation": "In Linnaean taxonomy, a genus groups closely related species. A species is defined as a group of organisms that can interbreed naturally and produce fertile offspring. The binomial name uses genus + species (e.g. Homo sapiens)."
    },
    {
      "id": "IC-4-S2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how a student scientist could explain the importance of vaccination to a sceptical audience.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "A student scientist communicating vaccination to a sceptical audience should lead with evidence rather than argument. Vaccines introduce antigens — weakened pathogens or their proteins — that train the immune system to produce antibodies and memory cells without causing disease. Historical evidence is compelling: smallpox was eradicated globally through vaccination; polio has been eliminated from most countries. Large-scale clinical trials involving tens of thousands of participants provide robust safety and efficacy data, subject to peer review and regulatory scrutiny. The student should acknowledge concerns respectfully, explaining that serious adverse events are extremely rare and monitored continuously. Emphasising herd immunity — that vaccination protects those who cannot be vaccinated, including infants and immunocompromised individuals — frames the decision as a shared community responsibility rather than a purely personal one."
    },
    {
      "id": "IC-5-S2",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Evaluate the statement: 'Space exploration benefits life on Earth more than it costs.'",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Space exploration generates benefits that extend far beyond the laboratory. Satellite technology underpins GPS navigation, weather forecasting, telecommunications and disaster monitoring — technologies embedded in daily life. Materials developed for spacecraft have found applications in medical imaging, water purification and lightweight construction. Earth observation satellites have transformed our understanding of climate change, deforestation and ocean health. The financial cost is significant — NASA's annual budget is approximately 0.5% of US federal spending — but the return in scientific knowledge, technological innovation and international collaboration is difficult to overstate. Critics argue resources should address immediate human needs first, and this tension is legitimate. However, evaluated across decades, space exploration's technological dividends and its role in inspiring scientific careers suggest the investment is well justified."
    },
    {
      "id": "AR-2-S2",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Plant growth increases with light intensity before reaching a plateau. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of light intensity on plant growth rate.\nObservation: Plant growth increased as light intensity increased, but the rate of growth levelled off beyond a certain point, forming a plateau.\nExplanation: At low light intensity, light is the limiting factor for photosynthesis — insufficient ATP and NADPH are produced for the Calvin cycle. As intensity increases, more light energy drives the light-dependent reactions. Once light is no longer limiting, another factor — CO2 concentration, temperature or enzyme concentration — restricts further increase.\nConclusion: Light intensity promotes plant growth only up to the point where another factor becomes limiting. Beyond that threshold, additional light produces no further increase in growth rate."
    }
  ]
};
