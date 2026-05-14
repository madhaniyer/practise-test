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
      "id": "IC-01-F1",
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
      "modelAnswer": "Renewable energy provides a sustainable alternative to fossil fuels, which are finite and release greenhouse gases. Solar, wind and hydroelectric power generate electricity with far fewer emissions, reducing climate change. Investment in renewables drives innovation and creates jobs, ensuring future generations inherit a cleaner planet."
    },
    {
      "id": "IC-02-F1",
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
      "modelAnswer": "Biodiversity underpins human survival through pollination, clean water, soil fertility and natural pest control. Over 75% of food crops rely on wild pollinators. Greater biodiversity improves ecosystem resilience, meaning natural systems recover more effectively from drought or disease."
    },
    {
      "id": "IC-03-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Discuss whether genetic engineering of crops should be a scientific priority.",
      "rubric": [
        "Scientific accuracy",
        "Balanced argument",
        "Use of evidence",
        "Quality of expression"
      ],
      "modelAnswer": "Genetic engineering offers solutions to food insecurity and climate adaptation via CRISPR-enabled drought tolerance. However, ecological risks including gene flow to wild species and reduced genetic diversity must be weighed carefully through rigorous safety testing and transparent regulation."
    },
    {
      "id": "IC-04-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how a student scientist could explain the importance of vaccination to a sceptical audience.",
      "rubric": [
        "Scientific accuracy",
        "Communication strategy",
        "Use of evidence",
        "Quality of expression"
      ],
      "modelAnswer": "Vaccines introduce harmless antigens that train the immune system before serious illness develops. Historical evidence is compelling: smallpox was eradicated entirely through vaccination. Herd immunity frames vaccination as a community responsibility, protecting those who cannot be vaccinated."
    },
    {
      "id": "IC-05-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Evaluate the statement: 'Space exploration benefits life on Earth more than it costs.'",
      "rubric": [
        "Scientific accuracy",
        "Balanced argument",
        "Use of evidence",
        "Quality of expression"
      ],
      "modelAnswer": "Space exploration has produced GPS, weather forecasting and materials science advances. The financial cost is significant but the return in knowledge and technology is difficult to overstate. Long-term scientific dividends suggest the investment is justified when evaluated across decades."
    },
    {
      "id": "IC-06-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how the human immune system responds to a bacterial infection.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of terminology",
        "Quality of expression"
      ],
      "modelAnswer": "The innate immune response acts immediately: phagocytes engulf bacteria while inflammation recruits more immune cells. The adaptive response then activates: B lymphocytes produce specific antibodies and T lymphocytes coordinate the response. Memory cells allow faster response on re-exposure."
    },
    {
      "id": "IC-07-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Write for a general audience about why reducing plastic waste is a scientific and social priority.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Plastics persist for hundreds of years, breaking into microplastics that enter food chains and contaminate water. Marine ecosystems are severely affected. Solutions require both individual behaviour change and systemic approaches including biodegradable alternatives and extended producer responsibility."
    },
    {
      "id": "IC-08-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain the scientific basis of climate change and why the evidence is considered reliable.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of evidence",
        "Quality of expression"
      ],
      "modelAnswer": "Greenhouse gases trap infrared radiation, raising global temperatures. Evidence comes from ice cores, satellite data, ocean temperature records and atmospheric CO2 measurements. The convergence of multiple independent data sources makes the scientific consensus on human-caused climate change extremely robust."
    },
    {
      "id": "IC-09-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe what makes a good scientific experiment and why controls are important.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "A good experiment tests one variable at a time, uses controls to isolate the effect of the independent variable, and repeats trials to improve reliability. Controls ensure any observed change is caused by the independent variable rather than confounding factors."
    },
    {
      "id": "IC-10-F1",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain how antibiotic resistance develops and what can be done to slow it.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Antibiotic resistance develops through natural selection: bacteria with resistance mutations survive treatment and reproduce. Overuse and incomplete courses accelerate this. Slowing resistance requires completing prescribed courses, reducing agricultural antibiotic use, and investing in new antibiotic development."
    },
    {
      "id": "AR-01-F1",
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
      "modelAnswer": "Aim: Investigate effect of temperature on enzyme activity. Observation: Activity increased to an optimum then fell sharply. Explanation: Rising temperature increases collision frequency; above optimum the active site denatures permanently. Conclusion: Enzyme activity peaks at optimum temperature and falls due to denaturation."
    },
    {
      "id": "AR-02-F1",
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
      "modelAnswer": "Aim: Investigate effect of light intensity on plant growth. Observation: Growth increased then plateaued. Explanation: At low intensity light limits photosynthesis; at the plateau another factor such as CO2 becomes limiting. Conclusion: Light promotes growth only until another factor becomes limiting."
    },
    {
      "id": "AR-03-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Reaction rate increases as reactant concentration increases. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: Investigate effect of concentration on reaction rate. Observation: Rate increased consistently with concentration. Explanation: Higher concentration increases collision frequency and probability of successful collisions. Conclusion: Concentration has a direct positive effect on reaction rate, consistent with collision theory."
    },
    {
      "id": "AR-04-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Dissolved oxygen in water decreases as water temperature rises. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: Investigate relationship between water temperature and dissolved oxygen. Observation: Dissolved oxygen decreased as temperature increased. Explanation: Higher temperature gives gas molecules energy to escape solution. Conclusion: Temperature and dissolved oxygen are inversely related, with ecological implications for aquatic life."
    },
    {
      "id": "AR-05-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A bulb becomes dimmer as more bulbs are added in series. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: Investigate effect of series bulbs on brightness. Observation: Each bulb became progressively dimmer. Explanation: Series circuits share current; more bulbs increase resistance, reducing current by Ohm's law. Conclusion: Adding series bulbs reduces brightness as resistance increases and current decreases."
    },
    {
      "id": "AR-06-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Sound intensity decreases as distance from the source increases. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: Investigate how sound intensity changes with distance. Observation: Intensity decreased with distance, less steeply at greater distances. Explanation: Sound energy spreads over increasing area following inverse square law. Conclusion: Sound intensity decreases with distance as energy spreads over larger area."
    },
    {
      "id": "AR-07-F1",
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
      "modelAnswer": "Aim: Investigate effect of temperature on germination rate. Observation: Highest rate at moderate temperature, lower at extremes. Explanation: Germination requires enzyme-controlled reactions; extremes reduce activity or cause denaturation. Conclusion: Germination is temperature-dependent with a clear optimum."
    },
    {
      "id": "AR-08-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A student measures the pH of solutions A, B and C and finds values of 3, 7 and 11. Interpret these results and explain what they indicate about each solution.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Solution A (pH 3) is acidic, containing excess H+ ions. Solution B (pH 7) is neutral, with equal H+ and OH- concentrations. Solution C (pH 11) is alkaline, containing excess OH- ions. The pH scale is logarithmic, so each unit represents a tenfold change in H+ concentration."
    },
    {
      "id": "AR-09-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "A graph shows population of predators and prey oscillating over time, with predator peaks following prey peaks. Analyse this data and explain the relationship.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "The data shows classic predator-prey oscillation. When prey is abundant, predator population grows. Increased predation reduces prey numbers, which then causes predator decline due to food shortage. Reduced predation allows prey recovery, restarting the cycle. This demonstrates interdependence in ecosystems."
    },
    {
      "id": "AR-10-F1",
      "section": "Science Analysis & Reporting",
      "topic": "Scientific Analysis",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "An experiment shows that adding fertiliser increases crop yield up to a point, after which yield declines. Write a scientific report: Aim, Observation, Explanation, Conclusion.",
      "rubric": [
        "Interpretation of evidence",
        "Scientific reasoning",
        "Structure",
        "Scientific terminology"
      ],
      "modelAnswer": "Aim: Investigate effect of fertiliser concentration on crop yield. Observation: Yield increased to a maximum then declined at high concentrations. Explanation: Moderate fertiliser supplies limiting nutrients; excess causes osmotic stress, drawing water out of roots. Conclusion: Optimal fertiliser concentration exists beyond which yield is reduced."
    }
  ]
};
