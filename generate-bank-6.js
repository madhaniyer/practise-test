const fs = require('fs');

const existing = JSON.parse(
  fs.readFileSync('./src/lib/tests/jmss-master-bank.ts','utf8')
    .replace('export const mcqBank1400 = ','').replace(/;\s*$/,'')
);
console.log(`Existing: ${existing.length}`);

const extra = [];

const topupQ = [
  ["Which gas makes up most of Earth's atmosphere?","Oxygen","Nitrogen","Carbon dioxide","Argon",1],
  ["Ozone formula is","O2","O3","O4","O",1],
  ["Which planet is closest to the Sun?","Venus","Earth","Mercury","Mars",2],
  ["Speed of sound in air is approximately","340 m/s","3×10⁸ m/s","1500 m/s","100 m/s",0],
  ["Decibel measures","frequency","sound intensity level","wavelength","amplitude",1],
  ["Human hearing range is approximately","20 Hz to 20 kHz","2 Hz to 2 kHz","200 Hz to 200 kHz","0.2 Hz to 0.2 kHz",0],
  ["Resonance in a string depends on","colour","length tension and mass per unit length","temperature","pressure",1],
  ["Standing wave has nodes and","antinodes","only nodes","no fixed points","random points",0],
  ["Node is a point of","maximum displacement","zero displacement","maximum pressure","minimum pressure",1],
  ["Antinode is a point of","zero displacement","maximum displacement","minimum pressure","maximum pressure",1],
  ["Beats are caused by","two waves of same frequency","two waves of slightly different frequency","reflection","diffraction",1],
  ["Beat frequency equals","sum of two frequencies","difference of two frequencies","product of two frequencies","ratio of two frequencies",1],
  ["Mach number is ratio of","object speed to sound speed","sound speed to light speed","object speed to light speed","wave speed to object speed",0],
  ["Sonic boom occurs when object travels","at speed of sound","faster than speed of sound","slower than sound","at speed of light",1],
  ["Hydraulic systems use","gas pressure","liquid pressure","electrical force","magnetic force",1],
  ["Pascal's principle states pressure in fluid is","unequal","transmitted equally in all directions","only downward","only upward",1],
  ["Bernoulli's principle relates","temperature and pressure","fluid speed and pressure","density and temperature","volume and pressure",1],
  ["Faster moving fluid has","higher pressure","lower pressure","same pressure","variable pressure",1],
  ["Lift on aircraft wing is explained by","Newton's third law only","Bernoulli's principle and Newton's third law","gravity only","friction only",1],
  ["Viscosity is","fluid density","fluid resistance to flow","fluid temperature","fluid pressure",1],
  ["Laminar flow is","turbulent","smooth and orderly","random","chaotic",1],
  ["Turbulent flow is","smooth","chaotic and irregular","orderly","laminar",1],
  ["Reynolds number predicts","temperature","whether flow is laminar or turbulent","pressure","density",1],
  ["Surface tension is caused by","gravity","cohesive forces between liquid molecules","pressure","temperature",1],
  ["Capillary action is caused by","gravity","adhesive and cohesive forces","pressure","temperature",1],
  ["Meniscus curves up in","mercury","water in glass","oil","all liquids",1],
  ["Meniscus curves down in","water","mercury in glass","oil","all liquids",1],
  ["Diffusion rate increases with","decreasing temperature","increasing temperature","decreasing concentration gradient","increasing particle size",1],
  ["Graham's law states diffusion rate is inversely proportional to","temperature","square root of molar mass","pressure","volume",1],
  ["Effusion is","diffusion through solution","gas escaping through tiny hole","liquid evaporation","solid sublimation",1],
  ["Partial pressure is pressure exerted by","all gases combined","one gas in mixture","liquid only","solid only",1],
  ["Dalton's law states total pressure equals","product of partial pressures","sum of partial pressures","difference of partial pressures","ratio of partial pressures",1],
  ["Mole fraction is","moles of component / total moles","mass of component / total mass","volume of component / total volume","pressure of component / total pressure",0],
  ["Ideal solution obeys","Henry's law","Raoult's law","Dalton's law","Boyle's law",1],
  ["Raoult's law relates vapour pressure to","temperature","mole fraction of solvent","pressure","volume",1],
  ["Azeotrope is mixture that","boils at different temperatures","boils at constant temperature with constant composition","never boils","always separates",1],
  ["Chromatography separates based on","size only","differential affinity for stationary and mobile phase","colour only","mass only",1],
  ["Rf value in chromatography is","distance of solvent / distance of spot","distance of spot / distance of solvent","mass of spot / total mass","colour intensity",1],
  ["HPLC uses","gas mobile phase","high pressure liquid mobile phase","solid mobile phase","vacuum",1],
  ["Mass spectrometry measures","colour","mass to charge ratio","temperature","pressure",1],
  ["NMR spectroscopy detects","carbon only","hydrogen nuclei in magnetic field","oxygen only","nitrogen only",1],
  ["IR spectroscopy identifies","molecular mass","functional groups by bond vibrations","colour","density",1],
  ["UV-Vis spectroscopy measures","bond vibrations","absorption of UV and visible light","molecular mass","density",1],
  ["Atomic absorption spectroscopy measures","molecular structure","concentration of metal ions","bond vibrations","molecular mass",1],
  ["X-ray crystallography determines","colour","3D structure of crystals","molecular mass","bond vibrations",1],
  ["Scanning electron microscope images","internal structure","surface topography","molecular bonds","atomic nuclei",1],
  ["Transmission electron microscope images","surface only","internal structure at atomic scale","molecular bonds","colour",1],
  ["Atomic force microscope measures","colour","surface forces and topography","molecular mass","bond vibrations",1],
  ["Centrifugation separates by","colour","density using centrifugal force","size only","charge only",1],
  ["Electrophoresis separates by","colour","size and charge in electric field","density","temperature",1],
  ["Western blot detects","DNA","specific proteins using antibodies","RNA","lipids",1],
  ["Southern blot detects","proteins","RNA","specific DNA sequences","lipids",1],
  ["Northern blot detects","proteins","DNA","specific RNA sequences","lipids",2],
  ["ELISA detects","DNA","proteins or antibodies using enzyme-linked antibodies","RNA","lipids",1],
  ["Flow cytometry counts and sorts","molecules","cells based on fluorescent markers","bacteria only","viruses only",1],
  ["Confocal microscopy produces","2D images only","3D images by optical sectioning","X-ray images","electron images",1],
  ["Fluorescence microscopy uses","white light","fluorescent dyes and specific wavelengths","X-rays","electrons",1],
  ["Phase contrast microscopy visualises","only stained cells","unstained transparent cells","only dead cells","only bacteria",1],
  ["Dark field microscopy illuminates","background brightly","specimen against dark background","only fluorescent samples","only stained samples",1],
  ["Polarising microscopy uses","fluorescence","polarised light to study birefringent materials","X-rays","electrons",1],
  ["Cryo-EM preserves samples by","heating","rapid freezing","chemical fixation","dehydration",1],
  ["Super-resolution microscopy exceeds","electron microscope limit","diffraction limit of light","X-ray limit","acoustic limit",1],
  ["STORM and PALM are types of","electron microscopy","super-resolution fluorescence microscopy","X-ray crystallography","NMR",1],
  ["Patch clamp technique measures","gene expression","ion channel currents in cell membranes","protein structure","DNA sequence",1],
  ["Optogenetics controls","gene expression","neurons using light-sensitive proteins","protein folding","DNA replication",1],
  ["CRISPR-Cas9 acts as","a polymerase","molecular scissors for gene editing","a ribosome","a membrane",1],
  ["Guide RNA in CRISPR directs","protein synthesis","Cas9 to specific DNA sequence","cell division","membrane transport",1],
  ["Gene therapy introduces","drugs","functional genes to treat disease","vaccines","antibiotics",1],
  ["Stem cell therapy uses","differentiated cells","undifferentiated cells to repair tissue","antibodies","hormones",1],
  ["Monoclonal antibodies are","polyclonal","identical antibodies from single B cell clone","from multiple clones","from T cells",1],
  ["Hybridoma technology produces","vaccines","monoclonal antibodies","antibiotics","hormones",1],
  ["Recombinant DNA technology combines","two proteins","DNA from different sources","two cells","two organisms",1],
  ["Restriction enzymes cut DNA at","random sites","specific recognition sequences","only ends","only middle",1],
  ["DNA ligase","cuts DNA","joins DNA fragments","copies DNA","transcribes DNA",1],
  ["Vector in cloning is","the gene of interest","carrier (plasmid or virus) for gene delivery","restriction enzyme","DNA ligase",1],
];

topupQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-SCI-TOPUP-${String(i+1).padStart(3,'0')}`,domain:"Biology",topic:"Science and Technology",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

const allQuestions = [...existing, ...extra];
console.log(`Total questions: ${allQuestions.length}`);
const ts = `export const mcqBank1400 = ${JSON.stringify(allQuestions, null, 2)};\n`;
fs.writeFileSync('./src/lib/tests/jmss-master-bank.ts', ts);
console.log('Done.');
