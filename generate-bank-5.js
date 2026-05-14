const fs = require('fs');

const existing = JSON.parse(
  fs.readFileSync('./src/lib/tests/jmss-master-bank.ts','utf8')
    .replace('export const mcqBank1400 = ','').replace(/;\s*$/,'')
);
console.log(`Existing: ${existing.length}`);

const extra = [];

// ── BIOLOGY: Microbiology & Disease ─────────────────────────────────────────
const bioMicroQ = [
  ["Bacteria reproduce by","mitosis","binary fission","meiosis","budding",1],
  ["Viruses reproduce by","binary fission","using host cell machinery","mitosis","meiosis",1],
  ["Pathogen is","any microorganism","disease-causing microorganism","beneficial microorganism","decomposer",1],
  ["Koch's postulates establish","treatment","causation of disease by microorganism","prevention","vaccination",1],
  ["Gram positive bacteria stain","pink","purple","red","blue",1],
  ["Gram negative bacteria stain","purple","pink","blue","green",1],
  ["Antibiotics target","viruses","bacteria","fungi","parasites",1],
  ["Antiviral drugs target","bacteria","viruses","fungi","parasites",1],
  ["Herd immunity threshold depends on","population size","R0 (basic reproduction number)","climate","season",1],
  ["R0 greater than 1 means","epidemic declining","epidemic growing","no spread","stable spread",1],
  ["Incubation period is","time from exposure to symptoms","time of illness","recovery time","infectious period",0],
  ["Zoonotic disease spreads from","human to human","animal to human","environment to human","water to human",1],
  ["Vector-borne disease is transmitted by","direct contact","intermediate organism like mosquito","air","water",1],
  ["Malaria is caused by","bacterium","virus","protozoan (Plasmodium)","fungus",2],
  ["HIV is a","bacterium","virus","protozoan","fungus",1],
  ["HIV attacks","red blood cells","CD4 T cells","B cells","platelets",1],
  ["AIDS is","HIV infection","advanced stage of HIV with immune failure","a bacterium","a vaccine",1],
  ["Prion is","bacterium","virus","misfolded protein","protozoan",2],
  ["Biofilm is","single bacterium","community of bacteria in protective matrix","virus cluster","fungal spore",1],
  ["Quorum sensing allows bacteria to","reproduce faster","coordinate behaviour based on population density","resist antibiotics","form spores",1],
  ["Endospores allow bacteria to","reproduce faster","survive extreme conditions","move faster","form biofilms",1],
  ["Plasmid is","main bacterial chromosome","small circular DNA in bacteria","viral DNA","human DNA",1],
  ["Transformation in bacteria is","cell division","uptake of foreign DNA","protein synthesis","spore formation",1],
  ["Transduction transfers DNA via","direct contact","bacteriophage","plasmid","transformation",1],
  ["Conjugation transfers DNA via","bacteriophage","direct cell-to-cell contact","transformation","transduction",1],
  ["MRSA is resistant to","penicillin only","methicillin and related antibiotics","all antibiotics","no antibiotics",1],
  ["Sterilisation kills","some microorganisms","all microorganisms including spores","only bacteria","only viruses",1],
  ["Pasteurisation kills","all microorganisms","most pathogens without full sterilisation","only spores","only viruses",1],
  ["Aseptic technique prevents","chemical contamination","microbial contamination","physical contamination","radiation",1],
  ["Agar plate is used to","dissolve bacteria","culture and grow bacteria","kill bacteria","stain bacteria",1],
  ["Colony forming unit measures","bacterial size","viable bacterial count","bacterial speed","bacterial mass",1],
  ["Serial dilution is used to","concentrate bacteria","count bacteria in large samples","kill bacteria","stain bacteria",1],
  ["Minimum inhibitory concentration is","maximum antibiotic dose","lowest antibiotic concentration that inhibits growth","average dose","lethal dose",1],
  ["Disc diffusion test measures","bacterial growth rate","antibiotic sensitivity","bacterial size","bacterial mass",1],
  ["Zone of inhibition indicates","bacterial growth","antibiotic effectiveness","bacterial resistance","bacterial size",1],
  ["Phage therapy uses","antibiotics","bacteriophages to kill bacteria","antifungals","antivirals",1],
  ["Probiotics are","harmful bacteria","beneficial live microorganisms","antibiotics","antifungals",1],
  ["Microbiome refers to","single pathogen","community of microorganisms in/on body","only gut bacteria","only skin bacteria",1],
  ["Dysbiosis is","healthy microbiome","imbalance in microbiome","no microbiome","large microbiome",1],
  ["Fecal transplant treats","cancer","C. difficile infection by restoring microbiome","diabetes","heart disease",1],
  ["Mycology is study of","bacteria","fungi","viruses","parasites",1],
  ["Fungi cell walls contain","cellulose","chitin","peptidoglycan","murein",1],
  ["Yeast reproduces by","binary fission","budding","mitosis only","meiosis only",1],
  ["Penicillin was discovered by","Pasteur","Fleming","Koch","Lister",1],
  ["Antiseptic is used","inside body","on living tissue to prevent infection","to sterilise equipment","to culture bacteria",1],
  ["Disinfectant is used","on living tissue","on non-living surfaces","inside body","to culture bacteria",1],
  ["Nosocomial infection is acquired","at home","in hospital","from animals","from food",1],
  ["Epidemiology studies","individual disease","disease patterns in populations","cell biology","genetics",1],
  ["Endemic disease is","absent from region","constantly present in region","epidemic","pandemic",1],
  ["Pandemic is","local outbreak","global epidemic","endemic disease","seasonal disease",1],
];

bioMicroQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-BIO-MICRO-${String(i+1).padStart(3,'0')}`,domain:"Biology",topic:"Microbiology and Disease",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── PHYSICS: Optics & Light ──────────────────────────────────────────────────
const physOpticsQ = [
  ["Law of reflection: angle of incidence equals","angle of refraction","angle of reflection","90°","0°",1],
  ["Refraction occurs because light changes","colour","speed at boundary","direction randomly","amplitude",1],
  ["Snell's law: n1 sin θ1 =","n2 cos θ2","n2 sin θ2","n1 sin θ2","n2 tan θ2",1],
  ["Refractive index = ","speed in medium / speed in vacuum","speed in vacuum / speed in medium","wavelength × frequency","amplitude / frequency",1],
  ["Higher refractive index means","faster light","slower light","same speed","no refraction",1],
  ["Critical angle is where refracted ray is","0°","90°","45°","180°",1],
  ["Convex lens","diverges light","converges light","reflects light","absorbs light",1],
  ["Concave lens","converges light","diverges light","reflects light","absorbs light",1],
  ["Focal length of convex lens is","negative","positive","zero","infinite",1],
  ["Real image can be","only virtual","projected on screen","only upright","only magnified",1],
  ["Virtual image","can be projected","cannot be projected on screen","is always inverted","is always small",1],
  ["Magnification = ","object height / image height","image height / object height","focal length / object distance","object distance / image distance",1],
  ["Lens formula: 1/f =","1/u + 1/v","1/u - 1/v","u + v","u × v",0],
  ["Concave mirror","diverges reflected light","converges reflected light","absorbs light","transmits light",1],
  ["Convex mirror","converges reflected light","diverges reflected light","absorbs light","transmits light",1],
  ["Plane mirror produces image that is","real and inverted","virtual and upright","real and upright","virtual and inverted",1],
  ["Dispersion separates white light into","one colour","spectrum of colours","two colours","no colours",1],
  ["Prism disperses light because","different colours reflect differently","different colours refract by different amounts","all colours absorbed","all colours transmitted equally",1],
  ["Red light has","highest frequency","lowest frequency in visible spectrum","highest energy","shortest wavelength",1],
  ["Violet light has","lowest frequency","highest frequency in visible spectrum","lowest energy","longest wavelength",1],
  ["Polarisation is property of","longitudinal waves","transverse waves","all waves","sound waves",1],
  ["Polaroid filter","reflects all light","transmits light of one polarisation","absorbs all light","refracts light",1],
  ["Interference requires","two sources of different frequency","two coherent sources","one source only","incoherent sources",1],
  ["Young's double slit experiment demonstrates","reflection","wave nature of light","particle nature of light","refraction",1],
  ["Fringe spacing in double slit depends on","wavelength slit separation and distance","only wavelength","only slit separation","only distance",0],
  ["Diffraction grating produces","one bright spot","multiple bright fringes","no pattern","only dark fringes",1],
  ["Photoelectric effect demonstrates","wave nature of light","particle nature of light","refraction","diffraction",1],
  ["Photon energy E =","hf","hλ","h/f","f/h",0],
  ["Planck's constant h ≈","6.63×10⁻³⁴ J·s","6.63×10⁻²⁴ J·s","6.63×10⁻¹⁴ J·s","6.63×10⁻⁴⁴ J·s",0],
  ["Work function is minimum energy to","excite electron","eject electron from metal","ionise atom","split nucleus",1],
  ["Threshold frequency is minimum frequency to","heat metal","cause photoelectric effect","cause refraction","cause diffraction",1],
  ["de Broglie wavelength shows","light is a wave","matter has wave properties","sound is a wave","gravity is a wave",1],
  ["Electron microscope uses","light waves","electron waves for higher resolution","X-rays","gamma rays",1],
  ["Optical fibre uses","reflection","total internal reflection","refraction","diffraction",1],
  ["Endoscope uses","X-rays","optical fibres and total internal reflection","ultrasound","gamma rays",1],
  ["Laser produces","incoherent light","coherent monochromatic light","white light","infrared only",1],
  ["Stimulated emission produces","random photons","photons identical to stimulating photon","absorbed photons","reflected photons",1],
  ["Population inversion is needed for","absorption","laser action","reflection","refraction",1],
  ["Hologram records","2D image","3D interference pattern","only colour","only shape",1],
  ["Fluorescence emits light","of higher energy than absorbed","of lower energy than absorbed","of same energy","no light",1],
  ["Phosphorescence","stops immediately when source removed","continues after source removed","is same as fluorescence","requires UV only",1],
  ["Bioluminescence is light produced by","heat","living organisms","electricity","friction",1],
  ["Chemiluminescence is light produced by","heat","chemical reaction","electricity","friction",1],
  ["Colour of object depends on","light it absorbs","light it reflects","light it transmits","all of these",3],
  ["White object","absorbs all light","reflects all visible light","transmits all light","emits light",1],
  ["Black object","reflects all light","absorbs all visible light","transmits all light","emits light",1],
  ["Primary colours of light are","red yellow blue","red green blue","cyan magenta yellow","red orange yellow",1],
  ["Mixing all colours of light gives","black","white","grey","brown",1],
  ["Complementary colours add to give","black","white","grey","brown",1],
  ["Cyan is complement of","blue","green","red","yellow",2],
];

physOpticsQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-PHYS-OPT-${String(i+1).padStart(3,'0')}`,domain:"Physics",topic:"Optics and Light",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── WRITE COMBINED OUTPUT ────────────────────────────────────────────────────
const allQuestions = [...existing, ...extra];
console.log(`Total questions: ${allQuestions.length}`);
const ts = `export const mcqBank1400 = ${JSON.stringify(allQuestions, null, 2)};\n`;
fs.writeFileSync('./src/lib/tests/jmss-master-bank.ts', ts);
console.log('Done.');
