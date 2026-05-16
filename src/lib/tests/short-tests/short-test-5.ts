import type { PracticeTest } from "@/types/test";

export const shortTest5: PracticeTest = {
  "id": "short-5",
  "title": "Short Test 5",
  "subtitle": "45-minute practice — Forces and Motion, Energy and Waves + written",
  "kind": "short",
  "released": true,
  "durationSec": 2700,
  "questions": [
    {
      "id": "MCQ-PHYS-Y910-001",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student drops a ball from rest and measures its velocity every second. The velocity increases by 9.8 m/s each second. Which of the following correctly describes this motion?",
      "options": [
        "Constant velocity",
        "Uniform deceleration",
        "Uniform acceleration due to gravity",
        "Random motion"
      ],
      "correctIndex": 2,
      "explanation": "The ball accelerates uniformly at g = 9.8 m/s² due to gravity. Each second, velocity increases by 9.8 m/s — this is uniform acceleration."
    },
    {
      "id": "MCQ-PHYS-Y910-011",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A 2 kg ball is lifted 5 m above the ground. What is its gravitational potential energy? (g = 10 m/s²)",
      "options": [
        "10 J",
        "25 J",
        "100 J",
        "50 J"
      ],
      "correctIndex": 2,
      "explanation": "GPE = mgh = 2 × 10 × 5 = 100 J."
    },
    {
      "id": "MCQ-EXTRA-Y910-004",
      "section": "Science Reasoning",
      "topic": "Optics and Light",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A ray of light travels from glass (n=1.5) into air (n=1.0) at an angle of incidence of 30°. Using Snell's law (n₁sinθ₁ = n₂sinθ₂), what is the angle of refraction?",
      "options": [
        "20°",
        "48.6°",
        "30°",
        "90°"
      ],
      "correctIndex": 1,
      "explanation": "n₁sinθ₁ = n₂sinθ₂ → 1.5 × sin30° = 1.0 × sinθ₂ → 1.5 × 0.5 = sinθ₂ → sinθ₂ = 0.75 → θ₂ = 48.6°."
    },
    {
      "id": "MCQ-PHYS-Y910-002",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A 5 kg object accelerates at 3 m/s². What is the net force acting on it?",
      "options": [
        "1.67 N",
        "8 N",
        "15 N",
        "0.6 N"
      ],
      "correctIndex": 2,
      "explanation": "F = ma = 5 × 3 = 15 N. Newton's second law states that net force equals mass times acceleration."
    },
    {
      "id": "MCQ-PHYS-Y910-012",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student releases a pendulum from a height of 0.2 m. What is the maximum speed at the bottom of the swing? (g = 10 m/s², ignore air resistance)",
      "options": [
        "1 m/s",
        "2 m/s",
        "4 m/s",
        "0.5 m/s"
      ],
      "correctIndex": 1,
      "explanation": "Conservation of energy: mgh = ½mv². v = √(2gh) = √(2 × 10 × 0.2) = √4 = 2 m/s."
    },
    {
      "id": "MCQ-EXTRA-Y910-005",
      "section": "Science Reasoning",
      "topic": "Optics and Light",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates total internal reflection. The critical angle for glass-air is 42°. A ray hits the glass-air boundary at 50°. Which of the following correctly describes what happens?",
      "options": [
        "The ray refracts into the air",
        "Total internal reflection occurs — the ray reflects back into the glass",
        "The ray is absorbed",
        "The ray passes straight through"
      ],
      "correctIndex": 1,
      "explanation": "When the angle of incidence exceeds the critical angle (50° > 42°), total internal reflection occurs. The ray cannot pass into the less dense medium and is completely reflected back into the glass."
    },
    {
      "id": "MCQ-PHYS-Y910-003",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student pushes a box across a floor at constant velocity. Which of the following correctly describes the forces acting on the box?",
      "options": [
        "Net force is upward",
        "The applied force is greater than friction",
        "Net force is zero — applied force equals friction",
        "There are no forces acting"
      ],
      "correctIndex": 2,
      "explanation": "At constant velocity, acceleration is zero. By Newton's first law, net force must be zero — the applied force exactly balances friction."
    },
    {
      "id": "MCQ-PHYS-Y910-013",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A wave has a frequency of 500 Hz and a wavelength of 0.68 m. What is its speed?",
      "options": [
        "735 m/s",
        "340 m/s",
        "0.00136 m/s",
        "1000 m/s"
      ],
      "correctIndex": 1,
      "explanation": "Wave speed = frequency × wavelength = 500 × 0.68 = 340 m/s (speed of sound in air)."
    },
    {
      "id": "MCQ-EXTRA-Y910-006",
      "section": "Science Reasoning",
      "topic": "Optics and Light",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student uses a converging lens of focal length 10 cm to form an image of an object placed 30 cm from the lens. Using 1/f = 1/v - 1/u (with sign convention), where is the image formed?",
      "options": [
        "10 cm from the lens",
        "15 cm from the lens",
        "20 cm from the lens",
        "30 cm from the lens"
      ],
      "correctIndex": 1,
      "explanation": "Using 1/f = 1/v + 1/u (real is positive): 1/10 = 1/v + 1/30 → 1/v = 1/10 - 1/30 = 3/30 - 1/30 = 2/30 → v = 15 cm."
    },
    {
      "id": "MCQ-PHYS-Y910-004",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A car of mass 1200 kg travelling at 20 m/s brakes to a stop in 4 seconds. What is the braking force?",
      "options": [
        "6000 N",
        "4800 N",
        "300 N",
        "240 N"
      ],
      "correctIndex": 0,
      "explanation": "Deceleration = Δv/t = 20/4 = 5 m/s². F = ma = 1200 × 5 = 6000 N."
    },
    {
      "id": "MCQ-PHYS-Y910-014",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student investigates the reflection of waves in a ripple tank. The angle of incidence is 35°. What is the angle of reflection?",
      "options": [
        "55°",
        "70°",
        "35°",
        "90°"
      ],
      "correctIndex": 2,
      "explanation": "The law of reflection states that the angle of incidence equals the angle of reflection, both measured from the normal to the surface."
    },
    {
      "id": "MCQ-PHYS-Y910-005",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the extension of a spring. For loads up to 6 N, extension is proportional to load. Beyond 6 N, the relationship is no longer linear. What does the 6 N point represent?",
      "options": [
        "The breaking point",
        "The elastic limit",
        "The maximum extension",
        "The equilibrium point"
      ],
      "correctIndex": 1,
      "explanation": "The elastic limit (or limit of proportionality) is the point beyond which Hooke's law no longer applies and the spring is permanently deformed."
    },
    {
      "id": "MCQ-PHYS-Y910-015",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "Which of the following correctly explains why a straw appears bent when placed in a glass of water?",
      "options": [
        "Light reflects off the water surface",
        "Light refracts (changes speed and direction) as it passes from water to air",
        "The straw actually bends in water",
        "Light is absorbed by water"
      ],
      "correctIndex": 1,
      "explanation": "Light travels more slowly in water than in air. When it crosses the boundary, it changes direction (refracts), making the straw appear bent at the water surface."
    },
    {
      "id": "MCQ-PHYS-Y910-006",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A rocket in space fires its engines. According to Newton's third law, which of the following correctly describes the reaction force?",
      "options": [
        "The rocket pushes forward on the exhaust gases",
        "The exhaust gases push backward on the rocket",
        "The exhaust gases push forward on the rocket",
        "There is no reaction force in space"
      ],
      "correctIndex": 1,
      "explanation": "Newton's third law: for every action there is an equal and opposite reaction. The rocket pushes exhaust gases backward; the exhaust gases push the rocket forward with equal force."
    },
    {
      "id": "MCQ-PHYS-Y910-016",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student measures the frequency of a sound wave as 440 Hz. What does this mean?",
      "options": [
        "The wave travels 440 m per second",
        "440 complete wave cycles pass a point per second",
        "The wavelength is 440 m",
        "The amplitude is 440 units"
      ],
      "correctIndex": 1,
      "explanation": "Frequency is the number of complete wave cycles per second, measured in Hertz (Hz). 440 Hz means 440 complete cycles per second — the note A in music."
    },
    {
      "id": "MCQ-PHYS-Y910-007",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student measures the momentum of a 2 kg ball moving at 5 m/s. What is its momentum?",
      "options": [
        "2.5 kg m/s",
        "7 kg m/s",
        "10 kg m/s",
        "3 kg m/s"
      ],
      "correctIndex": 2,
      "explanation": "Momentum = mass × velocity = 2 × 5 = 10 kg m/s."
    },
    {
      "id": "MCQ-PHYS-Y910-017",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student investigates the electromagnetic spectrum. Which of the following correctly orders waves from longest to shortest wavelength?",
      "options": [
        "Gamma, X-ray, UV, visible, infrared, microwave, radio",
        "Radio, microwave, infrared, visible, UV, X-ray, gamma",
        "Visible, UV, infrared, radio, microwave, X-ray, gamma",
        "Radio, visible, UV, microwave, infrared, X-ray, gamma"
      ],
      "correctIndex": 1,
      "explanation": "The electromagnetic spectrum from longest to shortest wavelength: radio → microwave → infrared → visible → UV → X-ray → gamma ray."
    },
    {
      "id": "MCQ-PHYS-Y910-008",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "Two ice skaters push off each other from rest. Skater A (mass 60 kg) moves at 2 m/s. What is the speed of skater B (mass 40 kg)?",
      "options": [
        "2 m/s",
        "3 m/s",
        "1.33 m/s",
        "4 m/s"
      ],
      "correctIndex": 1,
      "explanation": "Conservation of momentum: total momentum before = 0. So 60 × 2 = 40 × v. v = 120/40 = 3 m/s in the opposite direction."
    },
    {
      "id": "MCQ-PHYS-Y910-018",
      "section": "Science Reasoning",
      "topic": "Energy and Waves",
      "difficulty": "Hard",
      "type": "mcq",
      "prompt": "A student uses a convex lens to focus sunlight onto a piece of paper. Which property of the lens causes this?",
      "options": [
        "The lens reflects light",
        "The lens refracts parallel rays to converge at the focal point",
        "The lens absorbs UV radiation",
        "The lens diffracts light"
      ],
      "correctIndex": 1,
      "explanation": "A convex (converging) lens refracts parallel rays of light so they converge at the focal point. The concentrated energy at this point can ignite paper."
    },
    {
      "id": "MCQ-PHYS-Y910-009",
      "section": "Science Reasoning",
      "topic": "Forces and Motion",
      "difficulty": "Medium",
      "type": "mcq",
      "prompt": "A student plots a velocity-time graph for a moving object. The area under the graph represents which quantity?",
      "options": [
        "Acceleration",
        "Force",
        "Distance travelled",
        "Power"
      ],
      "correctIndex": 2,
      "explanation": "The area under a velocity-time graph equals displacement (distance travelled). The gradient of a velocity-time graph equals acceleration."
    },
    {
      "id": "IC-13-S5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Describe the water cycle and explain how human activity is affecting it.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "The water cycle describes the continuous movement of water through the biosphere, atmosphere, hydrosphere and lithosphere. Evaporation from oceans and transpiration from plants (evapotranspiration) add water vapour to the atmosphere. Condensation forms clouds; precipitation returns water to land and oceans. Runoff and groundwater flow complete the cycle. Human activities are significantly altering this cycle. Deforestation reduces transpiration, decreasing local rainfall and increasing surface runoff and erosion. Urbanisation increases impermeable surfaces, accelerating runoff and reducing groundwater recharge. Climate change intensifies the cycle — warmer temperatures increase evaporation and atmospheric water vapour, making wet regions wetter and dry regions drier. Groundwater extraction for agriculture depletes aquifers faster than they recharge. These disruptions threaten water security for billions of people."
    },
    {
      "id": "IC-14-S5",
      "section": "Science Interest & Communication",
      "topic": "Science Communication",
      "difficulty": "Medium",
      "type": "written",
      "prompt": "Explain why scientists use models and what their limitations are.",
      "rubric": [
        "Scientific accuracy",
        "Clarity and structure",
        "Use of examples",
        "Quality of expression"
      ],
      "modelAnswer": "Scientists use models to simplify complex systems, making them tractable for analysis and prediction. Models range from physical scale models to mathematical equations to computer simulations. The atomic model, food web diagrams and climate models are examples. Models allow scientists to test hypotheses, make predictions and communicate ideas. However, all models have limitations: they are simplifications that omit some variables; they rely on assumptions that may not hold in all conditions; and they are only as good as the data used to build them. Climate models, for instance, cannot perfectly represent every atmospheric process. The key is to understand what a model can and cannot tell us — using it as a tool for insight rather than treating its outputs as absolute truth. Models should be continuously refined as new data and understanding emerge."
    },
    {
      "id": "AR-5-S5",
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
      "modelAnswer": "Aim: To investigate the effect of adding bulbs in series on the brightness of individual bulbs.\nObservation: Each bulb became progressively dimmer as additional bulbs were added to the series circuit.\nExplanation: In a series circuit, all components share the same current. Adding more bulbs increases the total resistance of the circuit. By Ohm's law (V = IR), increased resistance reduces the current for a fixed voltage. With less current flowing, each bulb receives less power (P = I²R) and produces less light.\nConclusion: Adding bulbs in series reduces the brightness of each bulb because total resistance increases and current decreases. This demonstrates the relationship between resistance, current and power in series circuits."
    }
  ]
};
