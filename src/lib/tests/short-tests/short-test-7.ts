import type { PracticeTest } from "@/types/test";

export const shortTest7: PracticeTest = {
  "id": "short-7",
  "title": "Short Test 7",
  "subtitle": "45-minute practice — Ecology and Environment, Earth and Climate + written",
  "kind": "short",
  "released": true,
  "durationSec": 2700,
  "questions": [
    {
      "id": "MCQ-EXTRA-Y910-011",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of removing wolves from Yellowstone National Park. Elk populations increased, overgrazing reduced vegetation, and stream banks eroded. Reintroducing wolves reversed these effects. Which ecological concept does this illustrate?",
      "options": [
        "Competitive exclusion",
        "Trophic cascade — changes at one trophic level affect multiple levels below",
        "Primary succession",
        "Eutrophication"
      ],
      "correctIndex": 1,
      "explanation": "A trophic cascade occurs when a top predator's presence or absence affects multiple lower trophic levels. Wolves controlled elk numbers, allowing vegetation recovery, which stabilised stream banks — demonstrating the far-reaching effects of keystone predators."
    },
    {
      "id": "MCQ-EARTH-Y910-001",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student analyses ice core data and finds that CO2 levels and temperature have risen and fallen together over 800 000 years. Which of the following is the most appropriate conclusion?",
      "options": [
        "CO2 causes temperature change only",
        "Temperature causes CO2 change only",
        "There is a strong correlation between CO2 and temperature over geological time",
        "CO2 and temperature are unrelated"
      ],
      "correctIndex": 2,
      "explanation": "Ice core data shows a strong positive correlation between CO2 and temperature over 800 000 years. While the relationship is complex (each can drive the other), the correlation is robust evidence for the greenhouse effect."
    },
    {
      "id": "MCQ-EARTH-Y910-011",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of fertiliser concentration on plant growth. They keep temperature, light, water volume and pot size the same for all plants. What are these kept-constant factors called?",
      "options": [
        "Independent variables",
        "Dependent variables",
        "Control variables",
        "Anomalous results"
      ],
      "correctIndex": 2,
      "explanation": "Control variables are factors that are kept constant throughout an experiment to ensure that any change in the dependent variable is caused only by the independent variable."
    },
    {
      "id": "MCQ-EXTRA-Y910-012",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses data showing that species diversity in a forest increases with distance from a road. Which of the following correctly explains this pattern?",
      "options": [
        "Roads increase biodiversity by creating new habitats",
        "Roads create edge effects — noise, pollution, light and human disturbance reduce diversity near roads; interior forest has more stable conditions",
        "Species prefer to live near roads",
        "Roads have no effect on biodiversity"
      ],
      "correctIndex": 1,
      "explanation": "Roads create edge effects: noise, light pollution, vehicle emissions, invasive species and human disturbance reduce habitat quality near roads. Interior forest provides more stable, undisturbed conditions supporting greater species diversity."
    },
    {
      "id": "MCQ-EARTH-Y910-002",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why the ocean absorbs CO2 from the atmosphere?",
      "options": [
        "CO2 is heavier than air and sinks into the ocean",
        "CO2 dissolves in seawater to form carbonic acid, driven by the concentration gradient",
        "The ocean produces CO2",
        "CO2 is absorbed only by marine plants"
      ],
      "correctIndex": 1,
      "explanation": "CO2 dissolves in seawater according to Henry's law, forming carbonic acid (H₂CO₃). The concentration gradient between atmosphere and ocean surface drives net absorption when atmospheric CO2 is higher."
    },
    {
      "id": "MCQ-EARTH-Y910-012",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student repeats an experiment five times and gets results of 23, 24, 25, 23 and 24 cm. Which of the following correctly describes these results?",
      "options": [
        "Accurate but not precise",
        "Precise but not necessarily accurate",
        "Neither precise nor accurate",
        "Both precise and accurate"
      ],
      "correctIndex": 1,
      "explanation": "Precision refers to how close repeated measurements are to each other. These results are clustered closely (23-25 cm), so they are precise. Whether they are accurate depends on the true value, which is not given."
    },
    {
      "id": "MCQ-EXTRA-Y910-013",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates primary succession on a volcanic island. Which of the following correctly describes the sequence of events?",
      "options": [
        "Climax community appears first, then pioneer species",
        "Pioneer species (lichens, mosses) colonise bare rock, modify the environment, enabling more complex communities to establish, eventually reaching a climax community",
        "All species colonise simultaneously",
        "Succession only occurs in aquatic environments"
      ],
      "correctIndex": 1,
      "explanation": "Primary succession on bare rock: pioneer species (lichens, mosses) weather rock and add organic matter, creating thin soil. This enables grasses, then shrubs, then trees to establish. Each stage modifies conditions for the next, eventually reaching a stable climax community."
    },
    {
      "id": "MCQ-EARTH-Y910-003",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates ocean acidification. As CO2 dissolves in seawater, pH decreases. Which of the following correctly explains the impact on coral reefs?",
      "options": [
        "Lower pH increases calcium carbonate availability for coral",
        "Lower pH dissolves calcium carbonate shells and skeletons, threatening coral and shellfish",
        "Lower pH has no effect on marine organisms",
        "Lower pH increases photosynthesis in coral"
      ],
      "correctIndex": 1,
      "explanation": "Ocean acidification reduces carbonate ion concentration, making it harder for corals and shellfish to build calcium carbonate (CaCO₃) shells and skeletons. Existing structures may also dissolve."
    },
    {
      "id": "MCQ-EARTH-Y910-013",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student's results show a clear outlier. Which of the following is the most appropriate action?",
      "options": [
        "Include it in the mean calculation",
        "Ignore it without investigation",
        "Investigate whether it was caused by an error; if so, exclude it from the mean",
        "Report only the outlier"
      ],
      "correctIndex": 2,
      "explanation": "An outlier should be investigated. If it resulted from an identifiable error (equipment fault, recording mistake), it should be excluded from the mean. If no cause is found, it should be reported but may still be excluded."
    },
    {
      "id": "MCQ-EXTRA-Y910-014",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares the carbon stored in a tropical rainforest and a temperate grassland per hectare. The rainforest stores significantly more carbon. Which of the following correctly explains this?",
      "options": [
        "Grasslands photosynthesise more efficiently",
        "Rainforests have greater biomass due to year-round growing conditions, storing more carbon in wood and organic matter",
        "Grasslands have more decomposers",
        "Rainforests have less biodiversity"
      ],
      "correctIndex": 1,
      "explanation": "Tropical rainforests have high temperatures and rainfall year-round, supporting continuous rapid growth and enormous biomass. The large woody biomass (trees) stores vast amounts of carbon. Grasslands have lower biomass and store more carbon in soil than above ground."
    },
    {
      "id": "MCQ-EARTH-Y910-004",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the difference between weather and climate?",
      "options": [
        "Weather is long-term; climate is short-term",
        "Climate is the average weather pattern over a long period (30+ years); weather is day-to-day atmospheric conditions",
        "They are the same thing",
        "Climate only refers to temperature"
      ],
      "correctIndex": 1,
      "explanation": "Weather describes short-term atmospheric conditions (today's rain, tomorrow's temperature). Climate is the statistical average of weather patterns over at least 30 years for a region."
    },
    {
      "id": "MCQ-EARTH-Y910-014",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student plots a scatter graph and draws a line of best fit. The line does not pass through the origin. Which of the following correctly describes what the y-intercept represents?",
      "options": [
        "The gradient of the line",
        "The value of the dependent variable when the independent variable is zero",
        "The maximum value of the data",
        "The anomalous result"
      ],
      "correctIndex": 1,
      "explanation": "The y-intercept is the value of the dependent variable (y-axis) when the independent variable (x-axis) equals zero. It may represent a systematic error or a genuine feature of the relationship."
    },
    {
      "id": "MCQ-EXTRA-Y910-015",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of acid rain on a freshwater ecosystem. pH decreases from 7 to 4.5 over 10 years. Which of the following correctly predicts the ecological impact?",
      "options": [
        "Biodiversity increases as pH decreases",
        "Most aquatic organisms cannot tolerate pH below 5; fish, invertebrates and amphibians decline, reducing biodiversity",
        "Acid rain has no effect on aquatic organisms",
        "Only plants are affected by pH changes"
      ],
      "correctIndex": 1,
      "explanation": "Most freshwater organisms are adapted to near-neutral pH. As pH falls below 5, aluminium ions (toxic to fish) are mobilised from soils, and many invertebrates and fish cannot survive. Reduced prey availability further impacts predators, causing cascading biodiversity loss."
    },
    {
      "id": "MCQ-EARTH-Y910-005",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student compares the albedo of fresh snow (0.85) and ocean water (0.06). Which of the following correctly explains the significance of this difference for climate?",
      "options": [
        "Snow absorbs more solar energy than ocean water",
        "Ocean water reflects more solar energy than snow",
        "As ice melts due to warming, darker ocean is exposed, absorbing more energy and accelerating warming — a positive feedback loop",
        "Snow and ocean water have the same effect on climate"
      ],
      "correctIndex": 2,
      "explanation": "The ice-albedo feedback: melting ice exposes darker ocean (lower albedo), which absorbs more solar energy, causing further warming and more melting. This is a positive feedback that amplifies climate change."
    },
    {
      "id": "MCQ-EARTH-Y910-015",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student finds a positive correlation between two variables. Which of the following is the most appropriate conclusion?",
      "options": [
        "One variable causes the other to change",
        "The two variables are related — as one increases, the other tends to increase — but correlation does not prove causation",
        "The relationship is definitely causal",
        "The variables are unrelated"
      ],
      "correctIndex": 1,
      "explanation": "Correlation shows a statistical relationship between variables but does not establish causation. A third variable (confounding factor) may cause both, or the correlation may be coincidental."
    },
    {
      "id": "MCQ-FINAL-Y910-011",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the effect of light intensity on the distribution of plant species in a woodland. More shade-tolerant species are found under the canopy. Which of the following correctly explains this?",
      "options": [
        "Shade-tolerant plants do not need light",
        "Shade-tolerant plants have adaptations (larger leaves, more chlorophyll) allowing efficient photosynthesis at low light intensities; they are outcompeted in high-light environments by faster-growing species",
        "All plants grow equally well in shade",
        "Light intensity has no effect on plant distribution"
      ],
      "correctIndex": 1,
      "explanation": "Shade-tolerant plants have adaptations for low-light environments: larger leaves increase light capture; higher chlorophyll concentration maximises photon absorption. In high-light environments, faster-growing sun-adapted species outcompete them."
    },
    {
      "id": "MCQ-EARTH-Y910-006",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the rock cycle?",
      "options": [
        "Rocks are permanently fixed in one form",
        "Rocks are continuously transformed between igneous, sedimentary and metamorphic forms through geological processes",
        "Only igneous rocks can become sedimentary",
        "The rock cycle only operates at plate boundaries"
      ],
      "correctIndex": 1,
      "explanation": "The rock cycle describes the continuous transformation of rocks: magma cools to form igneous rock; weathering and erosion produce sediment that forms sedimentary rock; heat and pressure transform rocks into metamorphic rock; melting restarts the cycle."
    },
    {
      "id": "MCQ-EARTH-Y910-016",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the boiling point of water five times: 99.8, 100.1, 99.9, 100.0 and 100.2°C. The true boiling point is 100°C. Which of the following correctly describes these measurements?",
      "options": [
        "Precise and accurate",
        "Precise but not accurate",
        "Accurate but not precise",
        "Neither precise nor accurate"
      ],
      "correctIndex": 0,
      "explanation": "The measurements are clustered closely together (precise) and their mean (100.0°C) is very close to the true value (accurate). These results are both precise and accurate."
    },
    {
      "id": "MCQ-FINAL-Y910-012",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student analyses data showing that the population of a prey species oscillates with a period of approximately 10 years, with predator populations peaking 1-2 years after prey peaks. Which of the following correctly explains the time lag?",
      "options": [
        "Predators respond instantly to prey changes",
        "Predator population growth takes time — increased prey availability improves predator survival and reproduction, but population increase lags behind prey increase due to generation time",
        "Prey populations control predator populations directly",
        "The time lag is random"
      ],
      "correctIndex": 1,
      "explanation": "Predator-prey cycles show a time lag because population responses are not instantaneous. When prey increases, predators have more food, improving survival and reproduction. But it takes time (generation time) for the predator population to grow, explaining the 1-2 year lag."
    },
    {
      "id": "MCQ-EARTH-Y910-007",
      "section": "Science Reasoning",
      "topic": "Earth and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the distribution of earthquakes and volcanoes on a world map. Which of the following correctly describes the pattern?",
      "options": [
        "They are randomly distributed",
        "They are concentrated along tectonic plate boundaries",
        "They only occur in the Southern Hemisphere",
        "They only occur in ocean basins"
      ],
      "correctIndex": 1,
      "explanation": "Earthquakes and volcanoes are concentrated along tectonic plate boundaries where plates converge, diverge or slide past each other. This distribution was key evidence for plate tectonic theory."
    },
    {
      "id": "IC-19-S7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write about the scientific and ethical considerations of gene editing in humans.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Gene editing in humans raises profound scientific and ethical questions. CRISPR-Cas9 enables precise modification of specific DNA sequences, offering potential cures for hereditary diseases including cystic fibrosis, sickle cell disease and Huntington's. Somatic gene therapy modifies non-reproductive cells, affecting only the treated individual. Germline editing modifies embryos, eggs or sperm — changes are heritable and affect all future descendants. Scientific concerns include off-target effects (unintended edits elsewhere in the genome) and mosaicism (incomplete editing). Ethical concerns include: consent (future individuals cannot consent to germline changes); equity (expensive therapies may only be accessible to wealthy populations); the boundary between therapy and enhancement; and the risk of 'designer babies'. The 2018 case of He Jiankui, who edited human embryos without adequate oversight, highlighted the urgent need for robust international governance."
    },
    {
      "id": "IC-20-S7",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how photosynthesis and respiration are complementary processes.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Photosynthesis and respiration are complementary metabolic processes that together drive the carbon cycle. Photosynthesis: 6CO2 + 6H2O + light energy → C6H12O6 + 6O2. It converts light energy into chemical energy stored in glucose, removing CO2 from the atmosphere. Respiration: C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP. It releases the stored chemical energy as ATP for cellular work, returning CO2 to the atmosphere. The products of each process are the reactants of the other — they are biochemically complementary. In ecosystems, photosynthesis by producers fixes carbon into organic molecules; respiration by all organisms releases it. The balance between these processes determines whether an ecosystem is a net carbon source or sink. Globally, photosynthesis and respiration are approximately balanced, maintaining atmospheric CO2 levels — though human activities are disrupting this balance."
    },
    {
      "id": "AR-7-S7",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Seed germination rate is highest at moderate temperature and lower at extremes. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: To investigate the effect of temperature on seed germination rate.\nObservation: Germination rate was highest at a moderate temperature (~20-25°C), with lower rates observed at both low and high temperature extremes.\nExplanation: Germination depends on enzyme-controlled biochemical reactions. At low temperatures, enzyme activity is reduced because molecules have less kinetic energy and collide less frequently. At high temperatures, enzymes may denature, disrupting the reactions needed for germination. At the optimum temperature, enzyme activity is maximised.\nConclusion: Seed germination rate is temperature-dependent, with a clear optimum. Temperatures above or below this optimum reduce germination rate, consistent with the effect of temperature on enzyme-controlled reactions."
    }
  ]
};
