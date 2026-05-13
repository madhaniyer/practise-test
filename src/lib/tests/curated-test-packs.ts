import { mcqBank1400 } from "./jmss-master-bank";

// Deduplicate by question text so no question appears twice across any test
function dedupeByQuestion(questions: typeof mcqBank1400) {
  const seen = new Set<string>();
  return questions.filter((q) => {
    const key = q.question.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const uniqueMCQs = dedupeByQuestion(mcqBank1400);

// Test configuration
const SHORT_TEST_MCQS = 20; // 45-minute tests
const FULL_TEST_MCQS = 140; // Full JMSS format
const NUM_SHORT_TESTS = 7;
const NUM_FULL_TESTS = 7;

// Calculate required questions
const totalRequired = (NUM_SHORT_TESTS * SHORT_TEST_MCQS) + (NUM_FULL_TESTS * FULL_TEST_MCQS);
console.log(`Need ${totalRequired} unique MCQs, have ${uniqueMCQs.length}`);

// Distribute questions ensuring no overlap between any tests
function distributeQuestions(startIdx: number, count: number) {
  return uniqueMCQs.slice(startIdx, startIdx + count);
}

function toMcqQuestion(item: any) {
  return {
    id: item.id,
    section: "Science Reasoning",
    topic: item.topic,
    difficulty: item.difficulty,
    type: "mcq" as const,
    prompt: item.question,
    options: item.options,
    correctIndex: item.answerIndex,
    explanation: item.explanation,
  };
}

function toWritingQuestion(item: any) {
  return {
    id: item.id,
    section: "Science Interest & Communication",
    topic: item.category,
    difficulty: item.difficulty,
    type: "written" as const,
    prompt: item.prompt,
    rubric: item.rubric,
    modelAnswer: item.modelAnswerGuide,
  };
}

function toReportingQuestion(item: any) {
  return {
    id: item.id,
    section: "Science Analysis & Reporting",
    topic: item.category,
    difficulty: item.difficulty,
    type: "written" as const,
    prompt: item.task,
    rubric: item.rubric,
    modelAnswer: item.modelAnswerGuide,
  };
}

const WRITING_PROMPTS = [
  {
    id: "WRITE-A1", category: "Scientific Explanation", difficulty: "Medium", wordRange: "120-180 words",
    prompt: "Explain why renewable energy matters for future generations.",
    rubric: ["Scientific accuracy", "Clarity and structure", "Use of examples", "Quality of expression"],
    modelAnswerGuide: "Renewable energy matters because it provides a sustainable alternative to fossil fuels, which are finite and release greenhouse gases when burned. Solar, wind and hydroelectric power generate electricity with far fewer emissions, reducing climate change and air pollution. Investment in renewables also drives innovation and creates jobs. Most importantly, it ensures future generations inherit a cleaner, more stable planet. From both a scientific and ethical perspective, transitioning to renewable energy is not simply beneficial — it is necessary.",
  },
  {
    id: "WRITE-A2", category: "Argumentative Science Writing", difficulty: "Advanced", wordRange: "120-180 words",
    prompt: "Write for an intelligent general audience about how biodiversity supports human life.",
    rubric: ["Scientific accuracy", "Clarity and structure", "Use of examples", "Quality of expression"],
    modelAnswerGuide: "Biodiversity underpins human survival in ways that are often invisible until they are lost. Healthy ecosystems with high species diversity provide pollination, clean water, soil fertility and natural pest control — services that agriculture and medicine depend on. For example, over 75% of food crops rely on animal pollinators, most of which are wild species. Greater biodiversity also improves ecosystem resilience, meaning natural systems recover more effectively from drought, disease or disturbance. Protecting biodiversity is therefore not simply an environmental concern; it is a practical necessity for long-term food security, public health and economic stability.",
  },
  {
    id: "WRITE-A3", category: "Ethics in Science", difficulty: "Medium", wordRange: "120-180 words",
    prompt: "Discuss whether genetic engineering of crops should be considered a scientific priority.",
    rubric: ["Scientific accuracy", "Clarity and structure", "Use of examples", "Quality of expression"],
    modelAnswerGuide: "Genetic engineering of crops deserves serious scientific attention because it offers potential solutions to food insecurity, disease resistance and climate adaptation. Techniques such as CRISPR allow scientists to introduce traits like drought tolerance or pest resistance with greater precision than traditional breeding. However, this priority must be balanced against ecological risks, including unintended gene flow to wild species and reduced genetic diversity. Ethical concerns about corporate control of food systems also warrant scrutiny. A responsible scientific approach would pursue genetic engineering within a framework of rigorous safety testing, transparent regulation and equitable access to ensure benefits are broadly shared.",
  },
  {
    id: "WRITE-A4", category: "Science Communication", difficulty: "Advanced", wordRange: "120-180 words",
    prompt: "Describe how a student scientist could explain the importance of vaccination to a sceptical audience.",
    rubric: ["Scientific accuracy", "Clarity and structure", "Use of examples", "Quality of expression"],
    modelAnswerGuide: "A student scientist communicating vaccination to a sceptical audience should begin with evidence rather than argument. Vaccines work by introducing harmless antigens that train the immune system to recognise and respond to pathogens before serious illness develops. Historical data is compelling: smallpox was eradicated entirely through vaccination, and polio has been eliminated from most of the world. The student should acknowledge concerns respectfully while explaining that large-scale clinical trials and ongoing surveillance provide strong evidence of safety and efficacy. Emphasising herd immunity — the protection vaccination provides to those who cannot be vaccinated — helps frame the decision as a community responsibility, not just a personal one.",
  },
  {
    id: "WRITE-A5", category: "Curiosity and Discovery", difficulty: "Medium", wordRange: "120-180 words",
    prompt: "Evaluate the statement: 'Space exploration benefits life on Earth more than it costs.'",
    rubric: ["Scientific accuracy", "Clarity and structure", "Use of examples", "Quality of expression"],
    modelAnswerGuide: "Space exploration has produced technologies that benefit everyday life far beyond the laboratory. Satellite systems underpin GPS navigation, weather forecasting and global communications. Materials developed for spacecraft have found applications in medicine, transport and construction. Scientific discoveries about Earth's atmosphere, climate and geology have come directly from space-based observation. The financial cost is significant, but the return — in knowledge, technology and international collaboration — is difficult to overstate. Critics argue that resources should address immediate human needs first, and this tension is legitimate. However, the long-term scientific and technological dividends of space exploration suggest that, evaluated across decades, the investment is justified.",
  },
  {
    id: "WRITE-A6", category: "Scientific Explanation", difficulty: "Advanced", wordRange: "120-180 words",
    prompt: "Explain how the human immune system responds to a bacterial infection.",
    rubric: ["Scientific accuracy", "Clarity and structure", "Use of examples", "Quality of expression"],
    modelAnswerGuide: "When bacteria enter the body, the immune system responds in two stages. The innate immune response acts immediately: phagocytes such as neutrons and macrophages engulf and destroy bacteria, while inflammation signals recruit more immune cells to the site of infection. If the innate response is insufficient, the adaptive immune response activates. B lymphocytes produce antibodies specific to the bacterial antigens, neutralising the pathogen and marking it for destruction. T lymphocytes coordinate the response and destroy infected cells. Memory cells formed during this process allow the immune system to respond faster and more effectively if the same bacterium is encountered again, which is the scientific basis of vaccination.",
  },
  {
    id: "WRITE-A7", category: "Argumentative Science Writing", difficulty: "Medium", wordRange: "120-180 words",
    prompt: "Write for a general audience about why reducing plastic waste is a scientific and social priority.",
    rubric: ["Scientific accuracy", "Clarity and structure", "Use of examples", "Quality of expression"],
    modelAnswerGuide: "Plastic waste has become one of the most visible environmental challenges of our time. Scientifically, plastics persist in ecosystems for hundreds of years, breaking down into microplastics that enter food chains, contaminate water supplies and accumulate in animal tissue including humans. Marine ecosystems are particularly affected, with millions of tonnes of plastic entering oceans annually. Reducing plastic waste requires both individual behaviour change and systemic solutions, including better product design, extended producer responsibility and investment in biodegradable alternatives. The science is clear: continued plastic pollution poses measurable risks to biodiversity, human health and ecosystem function. Addressing it is not optional — it is a scientific and social obligation.",
  },
];

const REPORTING_TASKS = [
  {
    id: "REPORT-A1", category: "Scientific Analysis & Reporting", difficulty: "Medium",
    task: "A student investigation shows that enzyme activity increases with temperature until an optimum is reached, then falls sharply. Write a short scientific report including Aim, Observation, Explanation and Conclusion.",
    rubric: ["Interpretation of evidence", "Scientific reasoning", "Structure", "Use of scientific terminology"],
    modelAnswerGuide: "Aim: To investigate the effect of temperature on enzyme activity.\\nObservation: Enzyme activity increased steadily as temperature rose, reaching a peak at the optimum temperature, after which activity declined sharply.\\nExplanation: Rising temperature increases the kinetic energy of enzyme and substrate molecules, raising collision frequency and reaction rate. Above the optimum, the enzyme's active site denatures — its shape changes permanently — so substrate molecules can no longer bind effectively, causing the sharp decline.\\nConclusion: Temperature affects enzyme activity in a predictable, non-linear way. Activity peaks at an optimum temperature and falls rapidly above it due to denaturation.",
  },
  {
    id: "REPORT-A2", category: "Scientific Analysis & Reporting", difficulty: "Advanced",
    task: "A student investigation shows that plant growth increases with light intensity before reaching a plateau. Write a short scientific report including Aim, Observation, Explanation and Conclusion.",
    rubric: ["Interpretation of evidence", "Scientific reasoning", "Structure", "Use of scientific terminology"],
    modelAnswerGuide: "Aim: To investigate the effect of light intensity on plant growth rate.\\nObservation: Plant growth increased as light intensity increased, but the rate of growth levelled off beyond a certain point, forming a plateau.\\nExplanation: At low light intensity, light is the limiting factor for photosynthesis. As intensity increases, more light energy is available for glucose production, supporting faster growth. Once light is no longer limiting, another factor — such as carbon dioxide concentration, water availability or temperature — restricts further increase in the photosynthesis rate.\\nConclusion: Light intensity promotes plant growth only up to the point where another factor becomes limiting. Beyond that threshold, additional light produces no further increase in growth rate.",
  },
  {
    id: "REPORT-A3", category: "Scientific Analysis & Reporting", difficulty: "Medium",
    task: "A student investigation shows that reaction rate increases as reactant concentration increases. Write a short scientific report including Aim, Observation, Explanation and Conclusion.",
    rubric: ["Interpretation of evidence", "Scientific reasoning", "Structure", "Use of scientific terminology"],
    modelAnswerGuide: "Aim: To investigate the effect of reactant concentration on reaction rate.\\nObservation: As concentration increased, the reaction rate increased consistently across all trials.\\nExplanation: Higher concentration means more reactant particles are present in the same volume. This increases the frequency of collisions between reacting particles and raises the probability of successful collisions, so the reaction proceeds more quickly.\\nConclusion: Reactant concentration has a direct positive effect on reaction rate. This is consistent with collision theory, which predicts that more particles in a given volume will collide more often.",
  },
  {
    id: "REPORT-A4", category: "Scientific Analysis & Reporting", difficulty: "Advanced",
    task: "A student investigation shows that dissolved oxygen in water decreases as water temperature rises. Write a short scientific report including Aim, Observation, Explanation and Conclusion.",
    rubric: ["Interpretation of evidence", "Scientific reasoning", "Structure", "Use of scientific terminology"],
    modelAnswerGuide: "Aim: To investigate the relationship between water temperature and dissolved oxygen concentration.\\nObservation: As water temperature increased, the concentration of dissolved oxygen decreased in a consistent pattern.\\nExplanation: At higher temperatures, water molecules move faster and gas molecules gain enough kinetic energy to escape from solution into the atmosphere. This reduces the amount of oxygen that remains dissolved. Warmer water therefore holds less dissolved oxygen, which has significant implications for aquatic organisms that depend on it for respiration.\\nConclusion: Water temperature and dissolved oxygen concentration are inversely related. This finding is ecologically important because rising water temperatures due to climate change may reduce oxygen availability for aquatic life.",
  },
  {
    id: "REPORT-A5", category: "Scientific Analysis & Reporting", difficulty: "Medium",
    task: "A student investigation shows that a bulb becomes dimmer as more bulbs are added in series. Write a short scientific report including Aim, Observation, Explanation and Conclusion.",
    rubric: ["Interpretation of evidence", "Scientific reasoning", "Structure", "Use of scientific terminology"],
    modelAnswerGuide: "Aim: To investigate the effect of adding bulbs in series on the brightness of individual bulbs.\\nObservation: Each bulb became progressively dimmer as additional bulbs were added to the series circuit.\\nExplanation: In a series circuit, all components share the same current. Adding more bulbs increases the total resistance of the circuit. By Ohm's law, increased resistance reduces the current for a fixed voltage. With less current flowing, each bulb receives less power and therefore produces less light.\\nConclusion: Adding bulbs in series reduces the brightness of each bulb because total resistance increases and current decreases. This demonstrates the relationship between resistance, current and power in series circuits.",
  },
  {
    id: "REPORT-A6", category: "Scientific Analysis & Reporting", difficulty: "Advanced",
    task: "A student investigation shows that sound intensity decreases as distance from the source increases. Write a short scientific report including Aim, Observation, Explanation and Conclusion.",
    rubric: ["Interpretation of evidence", "Scientific reasoning", "Structure", "Use of scientific terminology"],
    modelAnswerGuide: "Aim: To investigate how sound intensity changes with distance from the source.\\nObservation: Sound intensity decreased as the measuring device was moved further from the source, with the decrease becoming less steep at greater distances.\\nExplanation: Sound energy spreads outward in all directions from its source. As distance increases, the same amount of energy is distributed over a larger surface area. This means less energy reaches any given point, so the measured intensity falls. The relationship follows an inverse square law — doubling the distance reduces intensity to approximately one quarter.\\nConclusion: Sound intensity decreases with distance from the source because energy spreads over an increasing area. This principle applies to all wave phenomena that radiate from a point source.",
  },
  {
    id: "REPORT-A7", category: "Scientific Analysis & Reporting", difficulty: "Medium",
    task: "A student investigation shows that seed germination rate is highest at a moderate temperature and lower at both extremes. Write a short scientific report including Aim, Observation, Explanation and Conclusion.",
    rubric: ["Interpretation of evidence", "Scientific reasoning", "Structure", "Use of scientific terminology"],
    modelAnswerGuide: "Aim: To investigate the effect of temperature on seed germination rate.\\nObservation: Germination rate was highest at a moderate temperature, with lower rates observed at both low and high temperature extremes.\\nExplanation: Germination depends on enzyme-controlled biochemical reactions. At low temperatures, enzyme activity is reduced because molecules have less kinetic energy and collide less frequently. At high temperatures, enzymes may denature, disrupting the reactions needed for germination. At the optimum temperature, enzyme activity is maximised, supporting the fastest germination rate.\\nConclusion: Seed germination rate is temperature-dependent, with a clear optimum. Temperatures above or below this optimum reduce germination rate, consistent with the effect of temperature on enzyme-controlled reactions.",
  },
];

export const curatedTestPacks = [
  // 7 Short Tests (45 minutes, 20 MCQs each)
  ...Array.from({ length: NUM_SHORT_TESTS }, (_, i) => {
    const startIdx = i * SHORT_TEST_MCQS;
    const mcqSlice = distributeQuestions(startIdx, SHORT_TEST_MCQS);
    const writing = WRITING_PROMPTS[i % WRITING_PROMPTS.length];
    const reporting = REPORTING_TASKS[i % REPORTING_TASKS.length];

    return {
      id: `short-${i + 1}`,
      title: `Short Test ${i + 1}`,
      subtitle: `45-minute focused practice (${SHORT_TEST_MCQS} MCQs + 2 written)`,
      kind: "short" as const,
      released: true,
      durationSec: 45 * 60, // 45 minutes
      questions: [
        ...mcqSlice.map(toMcqQuestion),
        toWritingQuestion({ ...writing, id: `${writing.id}-S${i + 1}` }),
        toReportingQuestion({ ...reporting, id: `${reporting.id}-S${i + 1}` }),
      ],
    };
  }),

  // 7 Full Tests (150 minutes, 140 MCQs each)
  ...Array.from({ length: NUM_FULL_TESTS }, (_, i) => {
    const startIdx = (NUM_SHORT_TESTS * SHORT_TEST_MCQS) + (i * FULL_TEST_MCQS);
    const mcqSlice = distributeQuestions(startIdx, FULL_TEST_MCQS);
    const writing = WRITING_PROMPTS[(i + NUM_SHORT_TESTS) % WRITING_PROMPTS.length];
    const reporting = REPORTING_TASKS[(i + NUM_SHORT_TESTS) % REPORTING_TASKS.length];

    return {
      id: `full-${i + 1}`,
      title: `Full Test ${i + 1}`,
      subtitle: `Complete JMSS practice (${FULL_TEST_MCQS} MCQs + 30 written)`,
      kind: "full" as const,
      released: true, // All tests released
      durationSec: 150 * 60, // 2.5 hours
      questions: [
        ...mcqSlice.map(toMcqQuestion),
        // Add multiple writing and reporting questions for full tests
        ...Array.from({ length: 15 }, (_, j) => 
          toWritingQuestion({ 
            ...WRITING_PROMPTS[(i + j) % WRITING_PROMPTS.length], 
            id: `WRITE-F${i + 1}-${j + 1}` 
          })
        ),
        ...Array.from({ length: 15 }, (_, j) => 
          toReportingQuestion({ 
            ...REPORTING_TASKS[(i + j) % REPORTING_TASKS.length], 
            id: `REPORT-F${i + 1}-${j + 1}` 
          })
        ),
      ],
    };
  }),
];