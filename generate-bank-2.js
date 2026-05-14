const fs = require('fs');

// Load existing bank
const existing = JSON.parse(
  fs.readFileSync('./src/lib/tests/jmss-master-bank.ts','utf8')
    .replace('export const mcqBank1400 = ','')
    .replace(/;\s*$/,'')
);
console.log(`Existing: ${existing.length}`);

const extra = [];

// ── BIOLOGY: Human Body ──────────────────────────────────────────────────────
const bioBodyQ = [
  ["Which system pumps blood around the body?","Respiratory","Circulatory","Digestive","Nervous",1],
  ["The heart has how many chambers?","2","3","4","5",2],
  ["Arteries carry blood","to the heart","away from the heart","only in lungs","only in kidneys",1],
  ["Veins carry blood","away from heart","to the heart","only in lungs","only in brain",1],
  ["Capillaries allow","fast blood flow","exchange of substances with tissues","blood storage","oxygen production",1],
  ["Red blood cells carry","nutrients","oxygen","hormones","waste",1],
  ["Haemoglobin binds to","CO2","oxygen","glucose","water",1],
  ["White blood cells","carry oxygen","fight infection","clot blood","carry nutrients",1],
  ["Platelets are involved in","oxygen transport","blood clotting","fighting infection","digestion",1],
  ["Plasma transports","only red blood cells","dissolved substances and cells","only oxygen","only hormones",1],
  ["Gas exchange in lungs occurs in","bronchi","trachea","alveoli","bronchioles",2],
  ["Alveoli have large surface area and thin walls to","slow diffusion","maximise diffusion","store oxygen","produce CO2",1],
  ["Diaphragm contracts during","exhalation","inhalation","digestion","circulation",1],
  ["Breathing in increases","lung pressure","lung volume","CO2 in lungs","water in lungs",1],
  ["Oxygen moves from alveoli to blood by","active transport","osmosis","diffusion","endocytosis",2],
  ["Digestion breaks food into","larger molecules","smaller molecules","gases","minerals only",1],
  ["Amylase digests","proteins","fats","starch","DNA",2],
  ["Protease digests","starch","fats","proteins","carbohydrates",2],
  ["Lipase digests","proteins","starch","fats","DNA",2],
  ["Bile is produced by","pancreas","stomach","liver","small intestine",2],
  ["Bile emulsifies","proteins","starch","fats","DNA",2],
  ["Absorption of nutrients occurs mainly in","stomach","large intestine","small intestine","oesophagus",2],
  ["Villi increase surface area in the","stomach","large intestine","small intestine","oesophagus",2],
  ["The nervous system consists of","brain only","brain spinal cord and nerves","heart and lungs","muscles and bones",1],
  ["Neurons transmit","blood","electrical impulses","hormones","nutrients",1],
  ["Synapse is a","muscle","gap between neurons","bone joint","blood vessel",1],
  ["Reflex arc bypasses","spinal cord","brain","muscles","sensory neurons",1],
  ["Hormones are transported in","nerves","blood","lymph","air",1],
  ["Insulin lowers","oxygen levels","blood glucose","blood pressure","heart rate",1],
  ["Glucagon raises","oxygen levels","blood glucose","blood pressure","heart rate",1],
  ["Pancreas produces","bile","insulin and glucagon","adrenaline","thyroxine",1],
  ["Adrenaline prepares body for","sleep","fight or flight","digestion","growth",1],
  ["Kidneys filter","blood","lymph","air","food",0],
  ["Urea is produced in the","kidneys","liver","pancreas","lungs",1],
  ["Osmoregulation controls","blood glucose","water balance in blood","oxygen levels","hormone levels",1],
  ["Skin regulates body temperature by","sweating and vasodilation","only sweating","only shivering","only vasodilation",0],
  ["Vasodilation","reduces heat loss","increases heat loss","increases blood pressure","reduces blood flow",1],
  ["Vasoconstriction","increases heat loss","reduces heat loss","reduces blood pressure","increases sweating",1],
  ["Homeostasis maintains","changing internal conditions","stable internal conditions","external conditions","temperature only",1],
  ["Negative feedback","amplifies change","reverses change to restore balance","has no effect","increases change",1],
  ["Skeleton provides","only support","support protection and movement","only protection","only movement",1],
  ["Joints allow","no movement","movement between bones","bone growth","nerve transmission",1],
  ["Antagonistic muscles work","together in same direction","in opposite pairs","independently","randomly",1],
  ["Bicep contracts to","extend arm","flex arm","rotate arm","stabilise arm",1],
  ["Tricep contracts to","flex arm","extend arm","rotate arm","stabilise arm",1],
  ["Immune system first line of defence includes","antibodies","skin and mucus","white blood cells","lymph nodes",1],
  ["Antibodies are produced by","red blood cells","B lymphocytes","T lymphocytes","platelets",1],
  ["Vaccination introduces","live pathogens","weakened or dead pathogens or antigens","antibodies directly","white blood cells",1],
  ["Memory cells allow","slower response","faster response on re-exposure","no response","weaker response",1],
  ["Antibiotic resistance develops through","vaccination","natural selection of resistant bacteria","mutation of viruses","immune response",1],
];

bioBodyQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-BIO-BODY-${String(i+1).padStart(3,'0')}`,domain:"Biology",topic:"Human Body",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── BIOLOGY: Scientific Method ───────────────────────────────────────────────
const bioSciMethodQ = [
  ["A hypothesis is","a proven fact","a testable prediction","a conclusion","a law",1],
  ["Independent variable is","what you measure","what you change","what you keep the same","the result",1],
  ["Dependent variable is","what you change","what you keep the same","what you measure","the hypothesis",2],
  ["Control variables are","what you change","what you measure","what you keep the same","the results",2],
  ["A control experiment","changes all variables","keeps all variables the same","tests the hypothesis","proves the theory",1],
  ["Repeating an experiment improves","accuracy","reliability","validity","hypothesis",1],
  ["Accuracy refers to","how close results are to each other","how close results are to true value","number of repeats","sample size",1],
  ["Precision refers to","how close results are to true value","how close repeated results are to each other","accuracy","validity",1],
  ["Anomalous results should be","included in average","excluded from average","repeated once","ignored completely",1],
  ["Mean is calculated by","adding all values","dividing by number of values","adding all and dividing by count","multiplying all values",2],
  ["A line of best fit","connects all points","shows the trend through data","ignores outliers only","connects first and last point",1],
  ["Correlation means","causation","a relationship between two variables","no relationship","a proven cause",1],
  ["Causation means","correlation","one variable directly causes change in another","a relationship","a trend",1],
  ["Sample size should be","as small as possible","as large as possible","exactly 10","exactly 100",1],
  ["Random sampling reduces","accuracy","bias","precision","reliability",1],
  ["Peer review involves","self-checking","other scientists evaluating the work","government approval","student checking",1],
  ["Scientific theory is","a guess","a well-tested explanation supported by evidence","a hypothesis","a law",1],
  ["Scientific law describes","why something happens","what happens under certain conditions","a hypothesis","a theory",1],
  ["Bar charts are used for","continuous data","categoric data","only temperature","only time",1],
  ["Line graphs are used for","categoric data","continuous data","only bar data","only pie data",1],
  ["Pie charts show","trends over time","proportions of a whole","continuous data","categoric comparisons",1],
  ["Scatter graphs show","categoric data","relationships between two continuous variables","proportions","trends in one variable",1],
  ["Gradient of a line graph represents","y-intercept","rate of change","total value","average",1],
  ["Error bars on graphs show","the mean","uncertainty or range of data","the gradient","the intercept",1],
  ["Systematic error affects","precision only","all results by same amount","random results","only one result",1],
  ["Random error affects","all results equally","results unpredictably","only one result","precision only",1],
  ["Validity means","the experiment is reliable","the experiment tests what it claims to test","results are precise","results are accurate",1],
  ["Secondary data comes from","your own experiment","other researchers' published work","observations","calculations",1],
  ["Primary data comes from","published papers","your own experiment or observation","textbooks","internet",1],
  ["Ethical considerations in science include","only cost","harm to participants and environment","only time","only accuracy",1],
  ["Placebo is used in trials to","increase drug dose","compare against no treatment","reduce sample size","increase accuracy",1],
  ["Double blind trial means","neither participants nor researchers know who gets treatment","only participants know","only researchers know","everyone knows",0],
  ["Outlier is a data point that","fits the trend","does not fit the trend","is the mean","is the median",1],
  ["Median is","the mean","the middle value when data is ordered","the most common value","the range",1],
  ["Mode is","the mean","the middle value","the most common value","the range",2],
  ["Range is","mean minus median","largest minus smallest value","sum of all values","middle value",1],
  ["Standard deviation measures","mean","spread of data around the mean","range","median",1],
  ["Interpolation is","reading beyond data range","reading within data range","calculating mean","finding outliers",1],
  ["Extrapolation is","reading within data range","reading beyond data range","calculating median","finding mode",1],
  ["Units must be included in","hypothesis only","all measurements and results","conclusions only","graphs only",1],
  ["SI unit of temperature is","Celsius","Fahrenheit","Kelvin","Rankine",2],
  ["SI unit of length is","centimetre","millimetre","metre","kilometre",2],
  ["SI unit of mass is","gram","tonne","kilogram","milligram",2],
  ["SI unit of time is","minute","hour","second","millisecond",2],
  ["Scientific notation expresses numbers as","fractions","powers of 10","percentages","decimals only",1],
  ["1000 in scientific notation is","10²","10³","10⁴","10¹",1],
  ["0.001 in scientific notation is","10⁻²","10⁻³","10⁻⁴","10⁻¹",1],
  ["Percentage error = (error/true value) ×","10","100","1000","0.1",1],
  ["Concordant results are","very different","very similar to each other","outliers","inaccurate",1],
  ["Reproducibility means","same lab gets same results","different labs get same results","results are accurate","results are precise",1],
];

bioSciMethodQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-SCI-METHOD-${String(i+1).padStart(3,'0')}`,domain:"Biology",topic:"Scientific Method",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── CHEMISTRY: Materials & Properties ───────────────────────────────────────
const chemMaterialsQ = [
  ["Metals are generally","brittle","good conductors of heat and electricity","non-lustrous","poor conductors",1],
  ["Non-metals are generally","lustrous","malleable","poor conductors","good conductors",2],
  ["Alloys are","pure metals","mixtures of metals or metal and non-metal","compounds","elements",1],
  ["Steel is an alloy of","copper and tin","iron and carbon","aluminium and copper","zinc and iron",1],
  ["Bronze is an alloy of","iron and carbon","copper and tin","aluminium and copper","zinc and copper",1],
  ["Brass is an alloy of","iron and carbon","copper and tin","copper and zinc","aluminium and copper",2],
  ["Ceramics are","metallic","polymeric","non-metallic inorganic solids","biological",2],
  ["Polymers are made of","small atoms","long chain molecules","ionic lattices","metallic bonds",1],
  ["Thermoplastics","cannot be remoulded","can be remoulded when heated","are always rigid","conduct electricity",1],
  ["Thermosetting plastics","can be remoulded","cannot be remoulded once set","dissolve in water","conduct electricity",1],
  ["Composites combine","two metals","two or more materials for improved properties","two non-metals","two polymers",1],
  ["Carbon fibre composites are","heavy and weak","light and strong","heavy and strong","light and weak",1],
  ["Concrete is a composite of","metal and polymer","cement aggregate and water","two metals","two polymers",1],
  ["Density = ","mass × volume","mass / volume","volume / mass","mass + volume",1],
  ["Unit of density is","kg","m³","kg/m³","m/kg",2],
  ["Tensile strength measures resistance to","compression","stretching","bending","twisting",1],
  ["Hardness measures resistance to","stretching","scratching or indentation","bending","compression",1],
  ["Ductility is ability to be","compressed","drawn into wire","moulded","dissolved",1],
  ["Malleability is ability to be","drawn into wire","hammered into sheets","dissolved","compressed",1],
  ["Brittleness means","bends without breaking","breaks without deforming","stretches easily","compresses easily",1],
  ["Conductivity of metals is due to","ionic bonds","delocalised electrons","covalent bonds","hydrogen bonds",1],
  ["Superconductors conduct electricity with","high resistance","zero resistance","variable resistance","no electrons",1],
  ["Semiconductors have conductivity","higher than metals","lower than metals but higher than insulators","same as metals","same as insulators",1],
  ["Silicon is a","metal","non-metal","semiconductor","noble gas",2],
  ["Nanotechnology works at scale of","millimetres","micrometres","nanometres","centimetres",2],
  ["Nanoparticles have","small surface area to volume ratio","large surface area to volume ratio","no special properties","same properties as bulk material",1],
  ["Smart materials change properties in response to","nothing","external stimuli","only temperature","only light",1],
  ["Shape memory alloys return to","random shape","original shape when heated","liquid state","gaseous state",1],
  ["Piezoelectric materials generate electricity when","heated","mechanically stressed","cooled","dissolved",1],
  ["Photochromic materials change","shape","colour in response to light","conductivity","density",1],
  ["Thermochromic materials change colour in response to","light","pressure","temperature","electricity",2],
  ["Corrosion is","strengthening of metals","degradation of metals by chemical reaction","melting of metals","bending of metals",1],
  ["Oxidation of iron produces","iron carbonate","iron oxide (rust)","iron sulfate","iron chloride",1],
  ["Sacrificial protection uses","more reactive metal to corrode instead","less reactive metal","paint only","oil only",0],
  ["Electroplating coats metal with","paint","another metal using electrolysis","polymer","ceramic",1],
  ["Anodising increases","conductivity","corrosion resistance of aluminium","density","malleability",1],
  ["Recycling metals saves","only money","energy and raw materials","only time","only space",1],
  ["Life cycle assessment evaluates","only cost","environmental impact from production to disposal","only energy use","only waste",1],
  ["Biodegradable materials","never break down","break down naturally","are always plastic","are always metal",1],
  ["Photodegradable plastics break down in","water","light","heat","acid",1],
  ["Bioplastics are made from","crude oil","renewable biological sources","metals","ceramics",1],
  ["Crude oil is a mixture of","elements","hydrocarbons","salts","metals",1],
  ["Fractional distillation separates crude oil by","density","boiling point","colour","viscosity",1],
  ["Shorter hydrocarbon chains have","higher boiling points","lower boiling points","higher viscosity","darker colour",1],
  ["Petrol fraction is used as","lubricant","fuel for cars","making plastics","road surfacing",1],
  ["Bitumen fraction is used for","fuel","road surfacing","making plastics","lubricants",1],
  ["Cracking produces","longer chains","shorter more useful chains","only gases","only liquids",1],
  ["Addition polymerisation uses","saturated monomers","unsaturated monomers","ionic compounds","metals",1],
  ["Condensation polymerisation releases","oxygen","water or HCl","CO2","nitrogen",0],
  ["Nylon is a","addition polymer","condensation polymer","metal alloy","ceramic",1],
];

chemMaterialsQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-CHEM-MAT-${String(i+1).padStart(3,'0')}`,domain:"Chemistry",topic:"Materials and Properties",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── PHYSICS: Electricity & Magnetism ────────────────────────────────────────
const physElecQ = [
  ["Electric current is","flow of protons","flow of electrons or charge","flow of neutrons","flow of photons",1],
  ["Unit of electric current is","Volt","Ohm","Ampere","Watt",2],
  ["Unit of voltage is","Ampere","Ohm","Volt","Watt",2],
  ["Unit of resistance is","Volt","Ampere","Watt","Ohm",3],
  ["Ohm's law: V =","IR","I/R","R/I","I+R",0],
  ["In series circuit current is","different at each component","same throughout","zero","variable",1],
  ["In parallel circuit voltage is","different across each branch","same across each branch","zero","variable",1],
  ["Adding resistors in series","decreases total resistance","increases total resistance","keeps resistance same","makes resistance zero",1],
  ["Adding resistors in parallel","increases total resistance","decreases total resistance","keeps resistance same","makes resistance infinite",1],
  ["Power = ","V/I","VI","V+I","V-I",1],
  ["Unit of electrical power is","Volt","Ampere","Ohm","Watt",3],
  ["Energy = ","power × time","power / time","power + time","power - time",0],
  ["Unit of electrical energy is","Watt","Volt","Joule","Ampere",2],
  ["Fuse protects circuit by","increasing current","melting when current is too high","decreasing voltage","increasing resistance",1],
  ["Circuit breaker","melts when overloaded","trips when current is too high","increases resistance","decreases voltage",1],
  ["Earth wire is","live","neutral","a safety wire connected to ground","the fuse",2],
  ["Live wire colour in UK is","blue","green and yellow","brown","black",2],
  ["Neutral wire colour in UK is","brown","green and yellow","blue","black",2],
  ["Earth wire colour in UK is","brown","blue","black","green and yellow",3],
  ["Static electricity is caused by","current flow","transfer of electrons by friction","magnetic fields","heat",1],
  ["Like charges","attract","repel","have no effect","cancel out",1],
  ["Unlike charges","repel","attract","have no effect","cancel out",1],
  ["Electric field shows","direction of force on positive charge","direction of force on negative charge","magnetic field","gravitational field",0],
  ["Magnetic field lines go from","south to north outside magnet","north to south outside magnet","randomly","inward only",1],
  ["Electromagnet is created by","permanent magnet","current flowing through coil","static charge","heat",1],
  ["Increasing current in electromagnet","weakens field","strengthens field","has no effect","reverses polarity only",1],
  ["Motor effect: current in magnetic field experiences","no force","a force","only heat","only light",1],
  ["Fleming's left hand rule applies to","generators","motors","transformers","capacitors",1],
  ["Generator converts","electrical to mechanical energy","mechanical to electrical energy","heat to electrical","light to electrical",1],
  ["Transformer changes","current only","voltage using electromagnetic induction","resistance","power",1],
  ["Step-up transformer","decreases voltage","increases voltage","keeps voltage same","increases current",1],
  ["Step-down transformer","increases voltage","decreases voltage","keeps voltage same","decreases current",1],
  ["Transformer equation: Vp/Vs =","Np×Ns","Np/Ns","Ns/Np","Np+Ns",1],
  ["AC stands for","Alternating Current","Absolute Current","Atomic Current","Angular Current",0],
  ["DC stands for","Direct Current","Decreasing Current","Dual Current","Dynamic Current",0],
  ["Mains electricity in Australia is","110V 60Hz","240V 50Hz","120V 60Hz","230V 60Hz",1],
  ["Diode allows current to flow","in both directions","in one direction only","in no direction","randomly",1],
  ["LED stands for","Light Emitting Diode","Low Energy Device","Light Energy Device","Low Emitting Diode",0],
  ["LDR resistance","increases in light","decreases in light","stays constant","is always zero",1],
  ["Thermistor resistance","increases with temperature","decreases with temperature","stays constant","is always zero",1],
  ["Capacitor stores","charge","current","resistance","power",0],
  ["Inductor stores energy in","electric field","magnetic field","gravitational field","thermal energy",1],
  ["Coulomb is unit of","current","charge","voltage","resistance",1],
  ["Charge = ","current × time","current / time","voltage × time","voltage / time",0],
  ["Electrical conductors have","high resistance","low resistance","no electrons","fixed electrons",1],
  ["Electrical insulators have","low resistance","high resistance","free electrons","no atoms",1],
  ["Superconductors have resistance of","high","variable","zero","infinite",2],
  ["Potential difference drives","resistance","current through a circuit","magnetic field","heat only",1],
  ["Ammeter is connected in","parallel","series","either","neither",1],
  ["Voltmeter is connected in","series","parallel","either","neither",1],
];

physElecQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-PHYS-ELEC-${String(i+1).padStart(3,'0')}`,domain:"Physics",topic:"Electricity and Magnetism",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── WRITE COMBINED OUTPUT ────────────────────────────────────────────────────
const allQuestions = [...existing, ...extra];
console.log(`Total questions: ${allQuestions.length}`);
const ts = `export const mcqBank1400 = ${JSON.stringify(allQuestions, null, 2)};\n`;
fs.writeFileSync('./src/lib/tests/jmss-master-bank.ts', ts);
console.log('Done. Written to src/lib/tests/jmss-master-bank.ts');
