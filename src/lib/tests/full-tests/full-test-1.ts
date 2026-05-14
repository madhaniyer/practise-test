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
      "id": "MCQ-BIO-CELL-008",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Cytoplasm is described as",
      "options": [
        "solid",
        "crystalline",
        "gel-like",
        "gaseous"
      ],
      "correctIndex": 2,
      "explanation": "Correct answer: gel-like"
    },
    {
      "id": "MCQ-BIO-GEN-008",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A mutation is a change in",
      "options": [
        "protein shape",
        "DNA sequence",
        "cell size",
        "membrane"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: DNA sequence"
    },
    {
      "id": "MCQ-CHEM-ATOM-008",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A cation has a ___ charge",
      "options": [
        "negative",
        "neutral",
        "positive",
        "variable"
      ],
      "correctIndex": 2,
      "explanation": "Correct answer: positive"
    },
    {
      "id": "MCQ-CHEM-REACT-008",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Rate of reaction can be increased by",
      "options": [
        "decreasing temperature",
        "decreasing concentration",
        "increasing surface area",
        "removing catalyst"
      ],
      "correctIndex": 2,
      "explanation": "Correct answer: increasing surface area"
    },
    {
      "id": "MCQ-PHYS-FORCE-008",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Acceleration is",
      "options": [
        "change in speed",
        "change in velocity / time",
        "distance / time",
        "speed × time"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: change in velocity / time"
    },
    {
      "id": "MCQ-PHYS-WAVE-008",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Wavelength is measured in",
      "options": [
        "Hertz",
        "seconds",
        "metres",
        "Newtons"
      ],
      "correctIndex": 2,
      "explanation": "Correct answer: metres"
    },
    {
      "id": "MCQ-EARTH-GEO-006",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Limestone is an example of",
      "options": [
        "igneous",
        "metamorphic",
        "sedimentary",
        "volcanic"
      ],
      "correctIndex": 2,
      "explanation": "Correct answer: sedimentary"
    },
    {
      "id": "MCQ-EARTH-ECO-006",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A niche is",
      "options": [
        "an organism's habitat",
        "an organism's role in ecosystem",
        "a food chain",
        "a population"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: an organism's role in ecosystem"
    },
    {
      "id": "MCQ-BIO-BODY-008",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "White blood cells",
      "options": [
        "carry oxygen",
        "fight infection",
        "clot blood",
        "carry nutrients"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: fight infection"
    },
    {
      "id": "MCQ-SCI-METHOD-006",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Repeating an experiment improves",
      "options": [
        "accuracy",
        "reliability",
        "validity",
        "hypothesis"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: reliability"
    },
    {
      "id": "MCQ-CHEM-MAT-008",
      "section": "Science Reasoning",
      "topic": "Materials and Properties",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Polymers are made of",
      "options": [
        "small atoms",
        "long chain molecules",
        "ionic lattices",
        "metallic bonds"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: long chain molecules"
    },
    {
      "id": "MCQ-PHYS-ELEC-008",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Adding resistors in series",
      "options": [
        "decreases total resistance",
        "increases total resistance",
        "keeps resistance same",
        "makes resistance zero"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: increases total resistance"
    },
    {
      "id": "MCQ-BIO-EVO-008",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Analogous structures result from",
      "options": [
        "common ancestry",
        "convergent evolution",
        "identical DNA",
        "same habitat"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: convergent evolution"
    },
    {
      "id": "MCQ-CHEM-ORG-007",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Ethane has formula",
      "options": [
        "CH4",
        "C2H6",
        "C3H8",
        "C4H10"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: C2H6"
    },
    {
      "id": "MCQ-PHYS-SPACE-008",
      "section": "Science Reasoning",
      "topic": "Space and Astronomy",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Asteroid belt is between",
      "options": [
        "Earth and Mars",
        "Mars and Jupiter",
        "Jupiter and Saturn",
        "Saturn and Uranus"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: Mars and Jupiter"
    },
    {
      "id": "MCQ-BIO-PLANT-007",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "NADPH is produced in",
      "options": [
        "Calvin cycle",
        "light-dependent reactions",
        "stroma",
        "nucleus"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: light-dependent reactions"
    },
    {
      "id": "MCQ-CHEM-ELEC-008",
      "section": "Science Reasoning",
      "topic": "Electrochemistry and Solutions",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Galvanic cell converts",
      "options": [
        "electrical to chemical energy",
        "chemical to electrical energy",
        "heat to electrical",
        "light to electrical"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: chemical to electrical energy"
    },
    {
      "id": "MCQ-PHYS-THERM-013",
      "section": "Science Reasoning",
      "topic": "Thermodynamics and Heat",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Latent heat of fusion is for",
      "options": [
        "liquid to gas",
        "solid to liquid",
        "gas to liquid",
        "liquid to solid"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: solid to liquid"
    },
    {
      "id": "MCQ-BIO-MICRO-007",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Antibiotics target",
      "options": [
        "viruses",
        "bacteria",
        "fungi",
        "parasites"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: bacteria"
    },
    {
      "id": "MCQ-PHYS-OPT-007",
      "section": "Science Reasoning",
      "topic": "Optics and Light",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Convex lens",
      "options": [
        "diverges light",
        "converges light",
        "reflects light",
        "absorbs light"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: converges light"
    },
    {
      "id": "MCQ-SCI-TOPUP-006",
      "section": "Science Reasoning",
      "topic": "Science and Technology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Human hearing range is approximately",
      "options": [
        "20 Hz to 20 kHz",
        "2 Hz to 2 kHz",
        "200 Hz to 200 kHz",
        "0.2 Hz to 0.2 kHz"
      ],
      "correctIndex": 0,
      "explanation": "Correct answer: 20 Hz to 20 kHz"
    },
    {
      "id": "MCQ-BIO-CELL-009",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which organelle modifies and packages proteins?",
      "options": [
        "Rough ER",
        "Smooth ER",
        "Golgi apparatus",
        "Lysosome"
      ],
      "correctIndex": 2,
      "explanation": "Correct answer: Golgi apparatus"
    },
    {
      "id": "MCQ-BIO-GEN-009",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "DNA is mainly located in the",
      "options": [
        "cytoplasm",
        "nucleus",
        "ribosome",
        "mitochondria"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: nucleus"
    },
    {
      "id": "MCQ-CHEM-ATOM-009",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "An anion has a ___ charge",
      "options": [
        "positive",
        "neutral",
        "negative",
        "variable"
      ],
      "correctIndex": 2,
      "explanation": "Correct answer: negative"
    },
    {
      "id": "MCQ-CHEM-REACT-009",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Collision theory states reactions occur when particles",
      "options": [
        "touch",
        "collide with sufficient energy",
        "are heated",
        "dissolve"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: collide with sufficient energy"
    },
    {
      "id": "MCQ-PHYS-FORCE-009",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Speed is",
      "options": [
        "distance / time",
        "time / distance",
        "distance × time",
        "force / mass"
      ],
      "correctIndex": 0,
      "explanation": "Correct answer: distance / time"
    },
    {
      "id": "MCQ-PHYS-WAVE-009",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Amplitude is the",
      "options": [
        "distance between peaks",
        "maximum displacement from rest",
        "wave speed",
        "frequency"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: maximum displacement from rest"
    },
    {
      "id": "MCQ-EARTH-GEO-007",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Marble is metamorphosed",
      "options": [
        "granite",
        "limestone",
        "basalt",
        "sandstone"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: limestone"
    },
    {
      "id": "MCQ-EARTH-ECO-007",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Interspecific competition is between",
      "options": [
        "same species",
        "different species",
        "predator and prey",
        "decomposers"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: different species"
    },
    {
      "id": "MCQ-BIO-BODY-009",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Platelets are involved in",
      "options": [
        "oxygen transport",
        "blood clotting",
        "fighting infection",
        "digestion"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: blood clotting"
    },
    {
      "id": "MCQ-SCI-METHOD-007",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Accuracy refers to",
      "options": [
        "how close results are to each other",
        "how close results are to true value",
        "number of repeats",
        "sample size"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: how close results are to true value"
    },
    {
      "id": "MCQ-CHEM-MAT-009",
      "section": "Science Reasoning",
      "topic": "Materials and Properties",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Thermoplastics",
      "options": [
        "cannot be remoulded",
        "can be remoulded when heated",
        "are always rigid",
        "conduct electricity"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: can be remoulded when heated"
    },
    {
      "id": "MCQ-PHYS-ELEC-009",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Adding resistors in parallel",
      "options": [
        "increases total resistance",
        "decreases total resistance",
        "keeps resistance same",
        "makes resistance infinite"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: decreases total resistance"
    },
    {
      "id": "MCQ-BIO-EVO-009",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Speciation occurs when",
      "options": [
        "populations interbreed freely",
        "populations become reproductively isolated",
        "environments are identical",
        "mutations stop"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: populations become reproductively isolated"
    },
    {
      "id": "MCQ-CHEM-ORG-008",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Propane has formula",
      "options": [
        "CH4",
        "C2H6",
        "C3H8",
        "C4H10"
      ],
      "correctIndex": 2,
      "explanation": "Correct answer: C3H8"
    },
    {
      "id": "MCQ-PHYS-SPACE-009",
      "section": "Science Reasoning",
      "topic": "Space and Astronomy",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Comets are made of",
      "options": [
        "rock only",
        "ice and dust",
        "gas only",
        "metal"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: ice and dust"
    },
    {
      "id": "MCQ-BIO-PLANT-008",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "CO2 is fixed in",
      "options": [
        "light-dependent reactions",
        "Calvin cycle",
        "thylakoid",
        "nucleus"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: Calvin cycle"
    },
    {
      "id": "MCQ-CHEM-ELEC-009",
      "section": "Science Reasoning",
      "topic": "Electrochemistry and Solutions",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Standard hydrogen electrode has potential of",
      "options": [
        "1V",
        "0V",
        "-1V",
        "0.5V"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: 0V"
    },
    {
      "id": "MCQ-PHYS-THERM-014",
      "section": "Science Reasoning",
      "topic": "Thermodynamics and Heat",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Latent heat of vaporisation is for",
      "options": [
        "solid to liquid",
        "liquid to gas",
        "gas to solid",
        "solid to gas"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: liquid to gas"
    },
    {
      "id": "MCQ-BIO-MICRO-008",
      "section": "Science Reasoning",
      "topic": "Microbiology and Disease",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Antiviral drugs target",
      "options": [
        "bacteria",
        "viruses",
        "fungi",
        "parasites"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: viruses"
    },
    {
      "id": "MCQ-PHYS-OPT-008",
      "section": "Science Reasoning",
      "topic": "Optics and Light",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Concave lens",
      "options": [
        "converges light",
        "diverges light",
        "reflects light",
        "absorbs light"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: diverges light"
    },
    {
      "id": "MCQ-SCI-TOPUP-007",
      "section": "Science Reasoning",
      "topic": "Science and Technology",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Resonance in a string depends on",
      "options": [
        "colour",
        "length tension and mass per unit length",
        "temperature",
        "pressure"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: length tension and mass per unit length"
    },
    {
      "id": "MCQ-BIO-CELL-010",
      "section": "Science Reasoning",
      "topic": "Cell Biology",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Plant cell structural support comes from",
      "options": [
        "Cell membrane",
        "Cell wall",
        "Cytoplasm",
        "Nucleus"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: Cell wall"
    },
    {
      "id": "MCQ-BIO-GEN-010",
      "section": "Science Reasoning",
      "topic": "Genetics",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Dominant allele is represented by",
      "options": [
        "lowercase",
        "uppercase",
        "number",
        "symbol"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: uppercase"
    },
    {
      "id": "MCQ-CHEM-ATOM-010",
      "section": "Science Reasoning",
      "topic": "Atomic Structure",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "The periodic table is arranged by",
      "options": [
        "atomic mass",
        "atomic number",
        "number of neutrons",
        "alphabetical order"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: atomic number"
    },
    {
      "id": "MCQ-CHEM-REACT-010",
      "section": "Science Reasoning",
      "topic": "Reactions and Energy",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "pH scale measures",
      "options": [
        "temperature",
        "acidity and alkalinity",
        "pressure",
        "concentration"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: acidity and alkalinity"
    },
    {
      "id": "MCQ-PHYS-FORCE-010",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Velocity differs from speed because it includes",
      "options": [
        "magnitude",
        "direction",
        "mass",
        "energy"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: direction"
    },
    {
      "id": "MCQ-PHYS-WAVE-010",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Reflection is when waves",
      "options": [
        "pass through a surface",
        "bounce off a surface",
        "bend around obstacles",
        "slow down"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: bounce off a surface"
    },
    {
      "id": "MCQ-EARTH-GEO-008",
      "section": "Science Reasoning",
      "topic": "Geology and Climate",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Slate is metamorphosed",
      "options": [
        "limestone",
        "granite",
        "mudstone or shale",
        "basalt"
      ],
      "correctIndex": 2,
      "explanation": "Correct answer: mudstone or shale"
    },
    {
      "id": "MCQ-EARTH-ECO-008",
      "section": "Science Reasoning",
      "topic": "Ecology and Environment",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Intraspecific competition is between",
      "options": [
        "different species",
        "same species",
        "predator and prey",
        "decomposers"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: same species"
    },
    {
      "id": "MCQ-BIO-BODY-010",
      "section": "Science Reasoning",
      "topic": "Human Body",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Plasma transports",
      "options": [
        "only red blood cells",
        "dissolved substances and cells",
        "only oxygen",
        "only hormones"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: dissolved substances and cells"
    },
    {
      "id": "MCQ-SCI-METHOD-008",
      "section": "Science Reasoning",
      "topic": "Scientific Method",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Precision refers to",
      "options": [
        "how close results are to true value",
        "how close repeated results are to each other",
        "accuracy",
        "validity"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: how close repeated results are to each other"
    },
    {
      "id": "MCQ-CHEM-MAT-010",
      "section": "Science Reasoning",
      "topic": "Materials and Properties",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Thermosetting plastics",
      "options": [
        "can be remoulded",
        "cannot be remoulded once set",
        "dissolve in water",
        "conduct electricity"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: cannot be remoulded once set"
    },
    {
      "id": "MCQ-PHYS-ELEC-010",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Power = ",
      "options": [
        "V/I",
        "VI",
        "V+I",
        "V-I"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: VI"
    },
    {
      "id": "MCQ-BIO-EVO-010",
      "section": "Science Reasoning",
      "topic": "Evolution and Classification",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Allopatric speciation involves",
      "options": [
        "same habitat",
        "geographic isolation",
        "no isolation",
        "identical populations"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: geographic isolation"
    },
    {
      "id": "MCQ-CHEM-ORG-009",
      "section": "Science Reasoning",
      "topic": "Organic Chemistry",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Ethene has formula",
      "options": [
        "C2H6",
        "C2H4",
        "C2H2",
        "C3H6"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: C2H4"
    },
    {
      "id": "MCQ-PHYS-SPACE-010",
      "section": "Science Reasoning",
      "topic": "Space and Astronomy",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "Moon phases are caused by",
      "options": [
        "Earth's shadow",
        "Moon's orbit changing our view of lit side",
        "Sun moving",
        "clouds"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: Moon's orbit changing our view of lit side"
    },
    {
      "id": "MCQ-BIO-PLANT-009",
      "section": "Science Reasoning",
      "topic": "Plants and Photosynthesis",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Glucose is produced in",
      "options": [
        "light-dependent reactions",
        "Calvin cycle",
        "thylakoid",
        "nucleus"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: Calvin cycle"
    },
    {
      "id": "MCQ-CHEM-ELEC-010",
      "section": "Science Reasoning",
      "topic": "Electrochemistry and Solutions",
      "difficulty": "Easy",
      "type": "mcq",
      "prompt": "More positive electrode potential means",
      "options": [
        "less likely to be reduced",
        "more likely to be reduced",
        "more likely to be oxidised",
        "less reactive"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: more likely to be reduced"
    },
    {
      "id": "MCQ-PHYS-THERM-015",
      "section": "Science Reasoning",
      "topic": "Thermodynamics and Heat",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Evaporation occurs",
      "options": [
        "only at boiling point",
        "at any temperature from surface",
        "only when heated",
        "only in vacuum"
      ],
      "correctIndex": 1,
      "explanation": "Correct answer: at any temperature from surface"
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
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
      "modelAnswer": "See marking guide."
    }
  ]
};
