const fs = require('fs');

const existing = JSON.parse(
  fs.readFileSync('./src/lib/tests/jmss-master-bank.ts','utf8')
    .replace('export const mcqBank1400 = ','').replace(/;\s*$/,'')
);
console.log(`Existing: ${existing.length}`);

const extra = [];

// ── BIOLOGY: Plants & Photosynthesis ────────────────────────────────────────
const bioPlantsQ = [
  ["Photosynthesis converts","CO2 and water to glucose and oxygen","glucose and oxygen to CO2 and water","nitrogen to protein","water to hydrogen",0],
  ["Photosynthesis requires","darkness","light energy","heat only","sound",1],
  ["Chlorophyll absorbs","green light","red and blue light","only yellow light","all wavelengths equally",1],
  ["Light-dependent reactions occur in","stroma","thylakoid membranes","cytoplasm","nucleus",1],
  ["Light-independent reactions (Calvin cycle) occur in","thylakoid","nucleus","stroma","cytoplasm",2],
  ["ATP is produced in","light-independent reactions only","light-dependent reactions","Calvin cycle only","stroma",1],
  ["NADPH is produced in","Calvin cycle","light-dependent reactions","stroma","nucleus",1],
  ["CO2 is fixed in","light-dependent reactions","Calvin cycle","thylakoid","nucleus",1],
  ["Glucose is produced in","light-dependent reactions","Calvin cycle","thylakoid","nucleus",1],
  ["Limiting factors for photosynthesis include","temperature CO2 and light intensity","only temperature","only light","only CO2",0],
  ["Stomata are","root structures","pores in leaves for gas exchange","flower parts","seed structures",1],
  ["Guard cells control","root growth","stomata opening and closing","flower colour","seed dispersal",1],
  ["Transpiration is","water absorption by roots","water loss through leaves","photosynthesis","respiration",1],
  ["Xylem transports","sugars","water and minerals upward","oxygen","CO2",1],
  ["Phloem transports","water","minerals","sugars (sucrose) up and down","oxygen",2],
  ["Root hair cells increase","photosynthesis","surface area for water absorption","transpiration","respiration",1],
  ["Osmosis in root hair cells moves water from","low to high water potential","high to low water potential","randomly","against gradient always",1],
  ["Mineral ions enter roots by","osmosis","active transport","diffusion only","endocytosis",1],
  ["Nitrates are needed for","energy","protein synthesis","fat storage","water transport",1],
  ["Magnesium is needed for","protein synthesis","chlorophyll production","fat storage","water transport",1],
  ["Phosphorus is needed for","chlorophyll","DNA and ATP","fat storage","water transport",1],
  ["Potassium is needed for","chlorophyll","protein","enzyme function and stomata","fat storage",2],
  ["Auxin promotes","root growth in shoots","cell elongation in shoots","flower production","seed dispersal",1],
  ["Phototropism is growth toward","gravity","water","light","touch",2],
  ["Gravitropism is growth toward","light","water","gravity","touch",2],
  ["Hydrotropism is growth toward","light","gravity","water","touch",2],
  ["Gibberellins promote","root growth","stem elongation and germination","flower colour","seed dispersal",1],
  ["Cytokinins promote","cell elongation","cell division","root growth","seed dispersal",1],
  ["Abscisic acid causes","growth","stomata closure and dormancy","flowering","germination",1],
  ["Ethylene promotes","growth","fruit ripening and leaf fall","germination","photosynthesis",1],
  ["Pollination transfers","seeds","pollen from anther to stigma","fruit","leaves",1],
  ["Fertilisation in plants joins","two pollen grains","pollen nucleus and egg cell","two egg cells","two seeds",1],
  ["Seed dispersal methods include","wind water and animals","only wind","only water","only animals",0],
  ["Germination requires","light only","water oxygen and suitable temperature","CO2 only","nitrogen only",1],
  ["Monocots have","two seed leaves","one seed leaf","no seed leaves","three seed leaves",1],
  ["Dicots have","one seed leaf","two seed leaves","no seed leaves","three seed leaves",1],
  ["Meristems are regions of","cell death","active cell division","storage","gas exchange",1],
  ["Apical meristem is at","root only","shoot and root tips","leaves","flowers",1],
  ["Lateral meristem produces","length growth","width growth","flowers","seeds",1],
  ["Cellulose cell walls provide","energy","structural support","photosynthesis","respiration",1],
  ["Turgor pressure keeps plants","wilted","turgid and upright","dormant","flowering",1],
  ["Wilting occurs when","too much water","insufficient water causing loss of turgor","too much light","too much CO2",1],
  ["C4 plants are adapted to","cold climates","hot dry climates","aquatic environments","dark environments",1],
  ["CAM plants open stomata","during day","at night","randomly","never",1],
  ["Carnivorous plants supplement nutrition with","sunlight","insects for nitrogen","CO2","water",1],
  ["Epiphytes grow","in soil","on other plants without parasitising","underground","in water",1],
  ["Halophytes tolerate","drought","high salt concentrations","cold","shade",1],
  ["Xerophytes are adapted to","wet conditions","dry conditions","cold conditions","dark conditions",1],
  ["Hydrophytes are adapted to","dry conditions","aquatic conditions","cold conditions","dark conditions",1],
  ["Annual plants complete life cycle in","many years","one year","two years","one month",1],
];

bioPlantsQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-BIO-PLANT-${String(i+1).padStart(3,'0')}`,domain:"Biology",topic:"Plants and Photosynthesis",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── CHEMISTRY: Electrochemistry & Solutions ──────────────────────────────────
const chemElectroQ = [
  ["Electrolyte is a substance that","conducts electricity as solid","conducts electricity when dissolved or molten","never conducts","only conducts as gas",1],
  ["In electrolysis cations move toward","anode","cathode","neither electrode","both electrodes",1],
  ["In electrolysis anions move toward","cathode","anode","neither electrode","both electrodes",1],
  ["Electrolysis of water produces","H2 at cathode O2 at anode","O2 at cathode H2 at anode","only H2","only O2",0],
  ["Electrolysis of brine produces","H2 Cl2 and NaOH","only NaCl","only H2","only Cl2",0],
  ["Faraday's law relates","temperature to current","amount of substance deposited to charge passed","pressure to voltage","resistance to temperature",1],
  ["One Faraday equals charge of","one electron","one mole of electrons","one proton","one neutron",1],
  ["Galvanic cell converts","electrical to chemical energy","chemical to electrical energy","heat to electrical","light to electrical",1],
  ["Standard hydrogen electrode has potential of","1V","0V","-1V","0.5V",1],
  ["More positive electrode potential means","less likely to be reduced","more likely to be reduced","more likely to be oxidised","less reactive",1],
  ["EMF of cell = ","Ecathode - Eanode","Eanode - Ecathode","Ecathode + Eanode","Ecathode × Eanode",0],
  ["Solubility is","amount of solute in saturated solution","amount of solvent","temperature of solution","pressure of solution",0],
  ["Saturated solution contains","no solute","maximum dissolved solute at given temperature","minimum solute","only solvent",1],
  ["Solubility generally increases with temperature for","all solids","most solids","all gases","most gases",1],
  ["Solubility of gases increases with","temperature","pressure","decreasing pressure","decreasing concentration",1],
  ["Henry's law relates gas solubility to","temperature","pressure","volume","concentration",1],
  ["Molarity is","moles per litre","grams per litre","moles per gram","litres per mole",0],
  ["Molality is","moles per litre","moles per kilogram of solvent","grams per litre","moles per gram",1],
  ["Colligative properties depend on","solute identity","number of solute particles","solvent identity","temperature only",1],
  ["Boiling point elevation is a","colligative property","non-colligative property","physical property only","chemical property",0],
  ["Freezing point depression is used in","cooking","antifreeze","sterilisation","combustion",1],
  ["Osmotic pressure depends on","solute identity","solute concentration","solvent identity","temperature only",1],
  ["Reverse osmosis","follows osmosis direction","forces water against osmotic gradient","has no pressure","uses no membrane",1],
  ["Buffer solution resists changes in","temperature","pH","pressure","concentration",1],
  ["Acidic buffer contains","weak acid and its conjugate base","strong acid and strong base","weak base and its conjugate acid","only weak acid",0],
  ["Basic buffer contains","weak acid and conjugate base","weak base and its conjugate acid","strong acid and strong base","only weak base",1],
  ["Henderson-Hasselbalch equation calculates","temperature","pH of buffer","pressure","concentration",1],
  ["Kw is the","acid dissociation constant","water dissociation constant","base dissociation constant","solubility product",1],
  ["At 25°C Kw =","10⁻⁷","10⁻¹⁴","10⁻⁷","10⁻¹²",1],
  ["Strong acid fully","partially dissociates","dissociates in water","does not dissociate","reacts with bases only",1],
  ["Weak acid partially","fully dissociates","dissociates in water","does not dissociate","reacts with bases only",1],
  ["Ka measures","base strength","acid dissociation strength","solubility","buffer capacity",1],
  ["pKa = ","log Ka","-log Ka","Ka/10","10/Ka",1],
  ["Lower pKa means","weaker acid","stronger acid","stronger base","weaker base",1],
  ["Amphiprotic species can","only donate protons","only accept protons","both donate and accept protons","neither donate nor accept",2],
  ["Water is amphiprotic because","it is neutral","it can act as acid or base","it has high boiling point","it is a solvent",1],
  ["Hydrolysis of salts can produce","only neutral solutions","acidic or basic solutions","only acidic solutions","only basic solutions",1],
  ["Salt of strong acid and weak base produces","neutral solution","acidic solution","basic solution","buffer solution",1],
  ["Salt of weak acid and strong base produces","neutral solution","acidic solution","basic solution","buffer solution",2],
  ["Precipitation occurs when","Qsp < Ksp","Qsp > Ksp","Qsp = Ksp","temperature increases",1],
  ["Ksp is the","acid constant","solubility product constant","base constant","buffer constant",1],
  ["Common ion effect","increases solubility","decreases solubility","has no effect","increases temperature",1],
  ["Complexation increases","solubility of precipitate","insolubility","temperature","pressure",0],
  ["Redox titration uses","acid-base indicators","oxidising or reducing agents as titrants","only pH meters","only colour change",1],
  ["Permanganate is","colourless","purple oxidising agent","blue reducing agent","yellow",1],
  ["Dichromate changes from","blue to green","orange to green on reduction","green to orange","colourless to blue",1],
  ["Iodometric titration uses","permanganate","thiosulfate to titrate iodine","dichromate","acid",1],
  ["Starch indicator turns blue-black with","permanganate","iodine","dichromate","acid",1],
  ["Conductometric titration monitors","colour change","electrical conductivity","temperature","pressure",1],
];

chemElectroQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-CHEM-ELEC-${String(i+1).padStart(3,'0')}`,domain:"Chemistry",topic:"Electrochemistry and Solutions",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── PHYSICS: Thermodynamics & Heat ───────────────────────────────────────────
const physThermQ = [
  ["Temperature measures","total thermal energy","average kinetic energy of particles","heat transferred","pressure",1],
  ["Heat is","temperature","thermal energy transferred due to temperature difference","average kinetic energy","pressure",1],
  ["SI unit of temperature is","Celsius","Fahrenheit","Kelvin","Rankine",2],
  ["Absolute zero is","0°C","0°F","0 K","100 K",2],
  ["0 K equals","0°C","-273°C","100°C","-100°C",1],
  ["Conduction transfers heat through","fluid movement","electromagnetic waves","direct particle contact","convection",2],
  ["Convection transfers heat through","direct contact","electromagnetic waves","fluid movement","conduction",2],
  ["Radiation transfers heat through","direct contact","fluid movement","electromagnetic waves","conduction",2],
  ["Good conductors of heat are","insulators","metals","non-metals","gases",1],
  ["Specific heat capacity is energy needed to","melt 1 kg","raise 1 kg by 1°C","boil 1 kg","freeze 1 kg",1],
  ["Q = mcΔT where m is","energy","mass","specific heat capacity","temperature change",1],
  ["Latent heat is energy for","temperature change","change of state without temperature change","pressure change","volume change",1],
  ["Latent heat of fusion is for","liquid to gas","solid to liquid","gas to liquid","liquid to solid",1],
  ["Latent heat of vaporisation is for","solid to liquid","liquid to gas","gas to solid","solid to gas",1],
  ["Evaporation occurs","only at boiling point","at any temperature from surface","only when heated","only in vacuum",1],
  ["Boiling occurs","at any temperature","throughout liquid at boiling point","only at surface","only in vacuum",1],
  ["Pressure increases boiling point","decreases","increases","has no effect","randomly changes",1],
  ["First law of thermodynamics states","energy is created","energy is conserved","entropy always increases","heat flows from cold to hot",1],
  ["Second law of thermodynamics states","energy is created","energy is conserved","entropy of universe always increases","heat flows from cold to hot",2],
  ["Entropy is a measure of","energy","disorder or randomness","temperature","pressure",1],
  ["Heat engine converts","all heat to work","some heat to work","work to heat","electrical to heat",1],
  ["Carnot efficiency depends on","only hot temperature","temperatures of hot and cold reservoirs","only cold temperature","pressure",1],
  ["Refrigerator moves heat from","hot to cold","cold to hot","randomly","nowhere",1],
  ["Heat pump moves heat from","cold to hot for heating","hot to cold","randomly","nowhere",0],
  ["Thermal expansion occurs when","temperature decreases","temperature increases","pressure increases","pressure decreases",1],
  ["Water anomalously expands when","heated above 4°C","cooled below 4°C","boiled","evaporated",1],
  ["Bimetallic strip bends because","two metals expand equally","two metals expand at different rates","one metal melts","one metal contracts",1],
  ["Ideal gas law: PV =","nRT","nR/T","nT/R","RT/n",0],
  ["Boyle's law: at constant temperature P ∝","V","1/V","V²","√V",1],
  ["Charles's law: at constant pressure V ∝","P","1/T","T","P/T",2],
  ["Gay-Lussac's law: at constant volume P ∝","V","1/T","T","V/T",2],
  ["Avogadro's law: at constant T and P V ∝","P","T","n (moles)","mass",2],
  ["STP is","0°C and 1 atm","25°C and 1 atm","100°C and 1 atm","0°C and 2 atm",0],
  ["Molar volume at STP is approximately","11.2 L","22.4 L","44.8 L","5.6 L",1],
  ["Kinetic molecular theory assumes gas particles have","large volume","negligible volume","fixed positions","strong attractions",1],
  ["Real gases deviate from ideal at","low pressure high temperature","high pressure low temperature","STP","all conditions",1],
  ["Van der Waals equation corrects for","only particle volume","particle volume and intermolecular forces","only intermolecular forces","temperature only",1],
  ["Thermal conductivity of metals is due to","ionic bonds","free electrons","covalent bonds","hydrogen bonds",1],
  ["Insulation reduces heat transfer by","conduction","convection and conduction","radiation only","all three methods",1],
  ["Double glazing reduces heat loss by","conduction","convection","trapped air reducing conduction and convection","radiation",2],
  ["Black body absorbs","no radiation","all radiation","only visible light","only infrared",1],
  ["Black body emits","no radiation","maximum radiation for its temperature","only visible light","only infrared",1],
  ["Stefan-Boltzmann law relates emitted power to","mass","temperature to the fourth power","pressure","volume",1],
  ["Wien's law relates peak wavelength to","mass","temperature","pressure","volume",1],
  ["Greenhouse effect is analogous to","conduction","convection","trapping of infrared radiation","radiation cooling",2],
  ["Heat death of universe refers to","maximum entropy state","minimum entropy","maximum temperature","minimum temperature",0],
  ["Thermometer works by","conduction","thermal expansion of liquid or gas","convection","radiation",1],
  ["Thermocouple generates voltage from","pressure difference","temperature difference between two junctions","light","magnetic field",1],
  ["Calorimeter measures","temperature only","heat exchange in reactions","pressure","volume",1],
  ["Bomb calorimeter measures","heat of combustion","heat of solution","heat of fusion","heat of vaporisation",0],
];

physThermQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-PHYS-THERM-${String(i+1).padStart(3,'0')}`,domain:"Physics",topic:"Thermodynamics and Heat",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── WRITE COMBINED OUTPUT ────────────────────────────────────────────────────
const allQuestions = [...existing, ...extra];
console.log(`Total questions: ${allQuestions.length}`);
const ts = `export const mcqBank1400 = ${JSON.stringify(allQuestions, null, 2)};\n`;
fs.writeFileSync('./src/lib/tests/jmss-master-bank.ts', ts);
console.log('Done.');
