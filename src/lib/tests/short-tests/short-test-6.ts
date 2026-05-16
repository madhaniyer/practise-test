import type { PracticeTest } from "@/types/test";

export const shortTest6: PracticeTest = {
  "id": "short-6",
  "title": "Short Test 6",
  "subtitle": "45-minute practice — Electricity and Magnetism, Nuclear and Space + written",
  "kind": "short",
  "released": true,
  "durationSec": 2700,
  "questions": [
    {
      "id": "MCQ-PHYS-Y910-021",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student connects a 12 V battery to a resistor and measures a current of 3 A. What is the resistance of the resistor?",
      "options": [
        "36 Ω",
        "4 Ω",
        "0.25 Ω",
        "9 Ω"
      ],
      "correctIndex": 1,
      "explanation": "R = V/I = 12/3 = 4 Ω (Ohm's law: V = IR)."
    },
    {
      "id": "MCQ-PHYS-Y910-031",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A radioactive sample has a half-life of 20 years. What fraction of the original sample remains after 60 years?",
      "options": [
        "1/2",
        "1/4",
        "1/8",
        "1/16"
      ],
      "correctIndex": 2,
      "explanation": "After 60 years = 3 half-lives. Fraction remaining = (1/2)³ = 1/8."
    },
    {
      "id": "MCQ-EXTRA-Y910-001",
      "section": "Science Reasoning",
      "topic": "Thermodynamics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student heats 200 g of water from 20°C to 80°C. Using Q = mcΔT (c = 4200 J/kg°C), how much energy is required?",
      "options": [
        "50 400 J",
        "8 400 J",
        "504 000 J",
        "84 000 J"
      ],
      "correctIndex": 0,
      "explanation": "Q = mcΔT = 0.2 kg × 4200 J/kg°C × 60°C = 50 400 J."
    },
    {
      "id": "MCQ-PHYS-Y910-022",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is the total resistance?",
      "options": [
        "9 Ω",
        "2 Ω",
        "4.5 Ω",
        "18 Ω"
      ],
      "correctIndex": 1,
      "explanation": "1/R_total = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. R_total = 2 Ω."
    },
    {
      "id": "MCQ-PHYS-Y910-032",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates alpha, beta and gamma radiation using different absorbers. Which of the following correctly matches radiation type to its penetrating power?",
      "options": [
        "Alpha is most penetrating; gamma is least",
        "Gamma is most penetrating; alpha is stopped by a few centimetres of air or a sheet of paper",
        "Beta is most penetrating; alpha is stopped by lead",
        "All three have equal penetrating power"
      ],
      "correctIndex": 1,
      "explanation": "Alpha particles are stopped by a few cm of air or paper. Beta particles are stopped by a few mm of aluminium. Gamma rays require several cm of lead or metres of concrete to significantly reduce intensity."
    },
    {
      "id": "MCQ-EXTRA-Y910-002",
      "section": "Science Reasoning",
      "topic": "Thermodynamics",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the specific heat capacity of a metal block. They supply 2000 J of energy to a 500 g block and measure a temperature rise of 8°C. What is the specific heat capacity?",
      "options": [
        "500 J/kg°C",
        "250 J/kg°C",
        "4000 J/kg°C",
        "1000 J/kg°C"
      ],
      "correctIndex": 0,
      "explanation": "c = Q/(mΔT) = 2000/(0.5 × 8) = 2000/4 = 500 J/kg°C."
    },
    {
      "id": "MCQ-PHYS-Y910-023",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the current through a resistor at different voltages and plots a straight line through the origin. What does this indicate?",
      "options": [
        "The resistor does not obey Ohm's law",
        "The resistor obeys Ohm's law — resistance is constant",
        "The resistance increases with voltage",
        "The current decreases with voltage"
      ],
      "correctIndex": 1,
      "explanation": "A straight line through the origin on a V-I graph indicates that V is directly proportional to I — the component obeys Ohm's law and has constant resistance."
    },
    {
      "id": "MCQ-PHYS-Y910-033",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly describes nuclear fission?",
      "options": [
        "Small nuclei fuse together releasing energy",
        "A large nucleus splits into smaller nuclei, releasing energy and neutrons",
        "A nucleus emits an alpha particle",
        "A nucleus emits a beta particle"
      ],
      "correctIndex": 1,
      "explanation": "Nuclear fission occurs when a large unstable nucleus (e.g. uranium-235) absorbs a neutron and splits into two smaller nuclei, releasing energy and 2-3 neutrons that can trigger further fissions (chain reaction)."
    },
    {
      "id": "MCQ-EXTRA-Y910-003",
      "section": "Science Reasoning",
      "topic": "Thermodynamics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the cooling of two identical containers — one painted black, one shiny silver. The black container cools faster. Which of the following correctly explains this?",
      "options": [
        "Black surfaces are better conductors",
        "Black surfaces are better emitters of infrared radiation than shiny surfaces",
        "Shiny surfaces absorb more radiation",
        "Black surfaces have lower specific heat capacity"
      ],
      "correctIndex": 1,
      "explanation": "Black (matt) surfaces are good absorbers and emitters of infrared radiation. Shiny surfaces reflect infrared and are poor emitters. The black container loses heat faster by radiation."
    },
    {
      "id": "MCQ-PHYS-Y910-024",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A 60 W light bulb is left on for 2 hours. How much energy does it use?",
      "options": [
        "120 J",
        "432 000 J",
        "7200 J",
        "3600 J"
      ],
      "correctIndex": 1,
      "explanation": "Energy = power × time = 60 W × (2 × 3600 s) = 60 × 7200 = 432 000 J."
    },
    {
      "id": "MCQ-PHYS-Y910-034",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student compares nuclear fission and nuclear fusion. Which of the following is a correct comparison?",
      "options": [
        "Fission joins nuclei; fusion splits them",
        "Both fission and fusion release energy, but fusion requires extremely high temperatures to overcome electrostatic repulsion between nuclei",
        "Fusion is used in current nuclear power stations",
        "Fission produces no radioactive waste"
      ],
      "correctIndex": 1,
      "explanation": "Both processes release energy. Fusion (joining light nuclei) requires extremely high temperatures (~10⁷ K) to overcome the electrostatic repulsion between positively charged nuclei. Current power stations use fission."
    },
    {
      "id": "MCQ-X-Y910-019",
      "section": "Science Reasoning",
      "topic": "Thermodynamics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the efficiency of a heat engine. It absorbs 1000 J from a hot reservoir and does 400 J of useful work. What is its efficiency?",
      "options": [
        "60%",
        "40%",
        "25%",
        "100%"
      ],
      "correctIndex": 1,
      "explanation": "Efficiency = useful output / total input × 100 = 400/1000 × 100 = 40%. The remaining 600 J is wasted as heat to the cold reservoir."
    },
    {
      "id": "MCQ-PHYS-Y910-025",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the magnetic field around a current-carrying wire. Which of the following correctly describes the field?",
      "options": [
        "Straight lines parallel to the wire",
        "Concentric circles around the wire, with direction given by the right-hand rule",
        "Straight lines perpendicular to the wire",
        "No magnetic field is produced"
      ],
      "correctIndex": 1,
      "explanation": "A current-carrying wire produces a magnetic field in concentric circles around the wire. The direction is given by the right-hand rule (thumb points in direction of current, fingers curl in direction of field)."
    },
    {
      "id": "MCQ-PHYS-Y910-035",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student observes that the light from distant galaxies is red-shifted. Which of the following correctly interprets this observation?",
      "options": [
        "Distant galaxies are moving toward us",
        "Distant galaxies are moving away from us, and the universe is expanding",
        "The galaxies are cooling down",
        "The galaxies are rotating faster"
      ],
      "correctIndex": 1,
      "explanation": "Red shift occurs when a light source moves away from the observer — the wavelength is stretched. The greater the red shift, the faster the galaxy is receding. This is evidence for the expanding universe."
    },
    {
      "id": "MCQ-E19-017",
      "section": "Science Reasoning",
      "topic": "Thermodynamics",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the Carnot efficiency of a heat engine operating between 500 K and 300 K. What is the maximum theoretical efficiency?",
      "options": [
        "40%",
        "60%",
        "50%",
        "30%"
      ],
      "correctIndex": 0,
      "explanation": "Carnot efficiency = 1 - (T_cold/T_hot) = 1 - (300/500) = 1 - 0.6 = 0.4 = 40%. No real engine can exceed Carnot efficiency. This represents the theoretical maximum for any heat engine operating between these temperatures."
    },
    {
      "id": "MCQ-PHYS-Y910-026",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student builds an electromagnet by wrapping wire around an iron core. Which of the following would increase the strength of the electromagnet?",
      "options": [
        "Decreasing the current",
        "Using a steel core instead of iron",
        "Increasing the number of turns of wire",
        "Decreasing the voltage"
      ],
      "correctIndex": 2,
      "explanation": "Increasing the number of turns increases the magnetic field strength. Iron is preferred over steel as it is a soft magnetic material that is easily magnetised and demagnetised."
    },
    {
      "id": "MCQ-PHYS-Y910-036",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Which of the following correctly describes the life cycle of a star similar to our Sun?",
      "options": [
        "Nebula → main sequence → red supergiant → supernova → neutron star",
        "Nebula → main sequence → red giant → planetary nebula → white dwarf",
        "Nebula → white dwarf → main sequence → red giant",
        "Nebula → neutron star → main sequence → red giant"
      ],
      "correctIndex": 1,
      "explanation": "A star like the Sun: forms from a nebula → main sequence (hydrogen fusion) → red giant (hydrogen exhausted in core) → planetary nebula (outer layers expelled) → white dwarf (dense remnant)."
    },
    {
      "id": "MCQ-PHYS-Y910-027",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A transformer has 200 turns on the primary coil and 1000 turns on the secondary coil. If the input voltage is 12 V, what is the output voltage?",
      "options": [
        "2.4 V",
        "60 V",
        "12 V",
        "120 V"
      ],
      "correctIndex": 1,
      "explanation": "Vs/Vp = Ns/Np. Vs = 12 × (1000/200) = 12 × 5 = 60 V. This is a step-up transformer."
    },
    {
      "id": "MCQ-PHYS-Y910-037",
      "section": "Science Reasoning",
      "topic": "Nuclear and Space",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates background radiation and measures 30 counts per minute with no source present. What is the most likely source of this background radiation?",
      "options": [
        "Only nuclear power stations",
        "Only cosmic rays",
        "Natural sources including cosmic rays, rocks (radon gas) and building materials, plus small contributions from human activity",
        "Only medical X-rays"
      ],
      "correctIndex": 2,
      "explanation": "Background radiation comes from natural sources (cosmic rays, naturally occurring radioactive isotopes in rocks and soil, radon gas) and artificial sources (nuclear industry, medical uses). Natural sources dominate."
    },
    {
      "id": "MCQ-PHYS-Y910-028",
      "section": "Science Reasoning",
      "topic": "Electricity and Magnetism",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the photoelectric effect. Increasing the intensity of light below the threshold frequency does not cause electron emission. Which of the following best explains this?",
      "options": [
        "Light is a wave and waves cannot eject electrons",
        "Light consists of photons; below the threshold frequency each photon has insufficient energy to eject an electron regardless of intensity",
        "Intensity is not related to energy",
        "Electrons are too heavy to be ejected"
      ],
      "correctIndex": 1,
      "explanation": "The photoelectric effect demonstrates the particle nature of light. Each photon must have sufficient energy (E = hf) to eject an electron. Below the threshold frequency, no individual photon has enough energy, regardless of how many photons (intensity) arrive."
    },
    {
      "id": "IC-16-S6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain the difference between a hypothesis, a theory and a scientific law.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "A hypothesis is a testable, falsifiable prediction about the relationship between variables, based on prior observation or theory. A scientific theory is a well-tested, evidence-supported explanation for a broad range of phenomena — not a guess. The theory of evolution, for example, is supported by fossil evidence, comparative anatomy, molecular biology and direct observation of natural selection. A scientific law describes a consistent, observed relationship under specific conditions — such as the law of conservation of mass — without necessarily explaining the underlying mechanism. Laws describe what happens; theories explain why. All three are subject to revision if new evidence demands it. This self-correcting nature distinguishes science from other ways of knowing. Misunderstanding 'theory' as meaning 'uncertain guess' is a common misconception that undermines public understanding of science."
    },
    {
      "id": "IC-17-S6",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe how the nervous system and endocrine system work together to maintain homeostasis.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The nervous system and endocrine system work in complementary ways to maintain homeostasis. The nervous system provides rapid, precise, short-duration responses via electrical impulses along neurons. The endocrine system uses hormones — chemical messengers transported in blood — for slower, longer-lasting, widespread effects. In blood glucose regulation, both systems cooperate: falling glucose is detected by the hypothalamus (nervous system), which signals the pancreas (endocrine system) to release glucagon, stimulating glycogen breakdown in the liver. Rising glucose triggers insulin release, promoting cellular glucose uptake. In thermoregulation, the hypothalamus detects temperature changes and coordinates both nervous responses (shivering, vasodilation) and hormonal responses (adrenaline, thyroxine). Together, these systems maintain the stable internal environment essential for enzyme function and cellular metabolism."
    },
    {
      "id": "AR-6-S6",
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
      "modelAnswer": "Aim: To investigate how sound intensity changes with distance from the source.\nObservation: Sound intensity decreased as the measuring device was moved further from the source, with the decrease becoming less steep at greater distances.\nExplanation: Sound energy spreads outward in all directions from its source. As distance increases, the same amount of energy is distributed over a larger surface area (proportional to 4πr²). This means less energy reaches any given point, so measured intensity falls. The relationship follows an inverse square law — doubling the distance reduces intensity to approximately one quarter.\nConclusion: Sound intensity decreases with distance from the source because energy spreads over an increasing area. This principle applies to all wave phenomena that radiate from a point source."
    }
  ]
};
