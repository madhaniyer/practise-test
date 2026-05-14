const fs = require('fs');

const existing = JSON.parse(
  fs.readFileSync('./src/lib/tests/jmss-master-bank.ts','utf8')
    .replace('export const mcqBank1400 = ','').replace(/;\s*$/,'')
);
console.log(`Existing: ${existing.length}`);

const extra = [];

// ── BIOLOGY: Evolution & Classification ─────────────────────────────────────
const bioEvoQ = [
  ["Evolution is","change in species over short time","change in allele frequency in population over generations","individual organism changing","random mutation only",1],
  ["Natural selection requires","identical offspring","variation heritable traits and selection pressure","no variation","no reproduction",1],
  ["Survival of the fittest means","strongest survives","best adapted to environment reproduces most","fastest survives","largest survives",1],
  ["Variation in a population comes from","mutation and sexual reproduction","only mutation","only environment","only sexual reproduction",0],
  ["Fossil record provides evidence for","creation","evolution over time","no change in species","random species appearance",1],
  ["Comparative anatomy compares","DNA only","body structures across species","behaviour","habitats",1],
  ["Homologous structures suggest","no relationship","common ancestry","convergent evolution","random similarity",1],
  ["Analogous structures result from","common ancestry","convergent evolution","identical DNA","same habitat",1],
  ["Speciation occurs when","populations interbreed freely","populations become reproductively isolated","environments are identical","mutations stop",1],
  ["Allopatric speciation involves","same habitat","geographic isolation","no isolation","identical populations",1],
  ["Sympatric speciation occurs","with geographic isolation","without geographic isolation","only in plants","only in animals",1],
  ["Binomial nomenclature gives each species","one name","two-part Latin name","three names","a number",1],
  ["Taxonomy classifies organisms into","random groups","hierarchical groups based on shared features","groups by size","groups by colour",1],
  ["Correct order of classification is","Kingdom Phylum Class Order Family Genus Species","Species Genus Family Order Class Phylum Kingdom","Kingdom Class Phylum Order Family Genus Species","Phylum Kingdom Class Order Family Genus Species",0],
  ["Prokaryotes belong to domains","Eukarya only","Bacteria and Archaea","Animalia and Plantae","Fungi and Protista",1],
  ["Eukaryotes have","no nucleus","membrane-bound nucleus","no organelles","no DNA",1],
  ["Five kingdoms include","Animalia Plantae Fungi Protista Monera","Animalia Plantae Fungi Bacteria Virus","Animalia Plantae Fungi Protista Virus","Animalia Plantae Bacteria Protista Monera",0],
  ["Viruses are","living cells","non-living particles","bacteria","fungi",1],
  ["Bacteria are","eukaryotic","prokaryotic","viral","fungal",1],
  ["Fungi obtain nutrients by","photosynthesis","absorption from dead matter","predation","chemosynthesis",1],
  ["Plants are","heterotrophic","autotrophic","parasitic","saprophytic",1],
  ["Animals are","autotrophic","heterotrophic","photosynthetic","chemosynthetic",1],
  ["Dichotomous key identifies organisms using","one question","series of paired questions","colour only","size only",1],
  ["Phylogenetic tree shows","food chains","evolutionary relationships","habitat preferences","behaviour",1],
  ["Cladistics classifies based on","appearance only","shared derived characteristics","size","habitat",1],
  ["Convergent evolution produces","homologous structures","analogous structures","identical DNA","same ancestors",1],
  ["Divergent evolution produces","analogous structures","homologous structures","identical appearance","same habitat",1],
  ["Adaptive radiation is","one species becoming many","many species becoming one","no change","random mutation",0],
  ["Genetic drift is most significant in","large populations","small populations","stable populations","diverse populations",1],
  ["Founder effect occurs when","large population colonises new area","small group colonises new area","population grows rapidly","population is stable",1],
  ["Bottleneck effect reduces","population size temporarily","genetic diversity permanently","mutation rate","selection pressure",1],
  ["Sexual selection favours traits that","aid survival only","increase mating success","reduce fitness","increase predation",1],
  ["Coevolution occurs between","unrelated species","interacting species that evolve together","isolated species","extinct species",1],
  ["Endosymbiotic theory explains origin of","nucleus","mitochondria and chloroplasts","ribosomes","cell membrane",1],
  ["Horizontal gene transfer occurs","only in eukaryotes","between organisms not through reproduction","only in animals","only in plants",1],
  ["Molecular clock uses","fossil record","mutation rate to estimate divergence time","anatomy","behaviour",1],
  ["Comparative genomics compares","anatomy","DNA sequences across species","behaviour","habitats",1],
  ["Antibiotic resistance is an example of","Lamarckian evolution","natural selection in action","random change","no evolution",1],
  ["Peppered moth example demonstrates","genetic drift","natural selection and industrial melanism","founder effect","bottleneck effect",1],
  ["Darwin's finches demonstrate","no evolution","adaptive radiation on Galapagos Islands","genetic drift","founder effect only",1],
  ["Lamarck proposed","natural selection","inheritance of acquired characteristics","genetic drift","mutation theory",1],
  ["Darwin proposed","inheritance of acquired characteristics","natural selection","genetic drift","Lamarckian evolution",1],
  ["Mass extinction events","increase biodiversity","reduce biodiversity dramatically","have no effect","only affect plants",1],
  ["K-Pg extinction event eliminated","fish","non-avian dinosaurs","mammals","insects",1],
  ["Biodiversity hotspots have","low species diversity","high species diversity and endemism","no endemic species","stable populations",1],
  ["Endemic species are","found worldwide","found only in specific region","invasive","extinct",1],
  ["IUCN Red List categorises","habitats","species by extinction risk","ecosystems","populations",1],
  ["Critically endangered means","low extinction risk","extremely high extinction risk","already extinct","stable population",1],
  ["Gene banks preserve","living animals","genetic material of species","habitats","ecosystems",1],
  ["Rewilding reintroduces","invasive species","native species to restore ecosystems","domestic animals","crops",1],
];

bioEvoQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-BIO-EVO-${String(i+1).padStart(3,'0')}`,domain:"Biology",topic:"Evolution and Classification",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── CHEMISTRY: Organic Chemistry ────────────────────────────────────────────
const chemOrganicQ = [
  ["Organic chemistry studies compounds containing","only oxygen","carbon","only nitrogen","only hydrogen",1],
  ["Hydrocarbons contain only","carbon and oxygen","carbon and hydrogen","carbon and nitrogen","carbon and sulfur",1],
  ["Alkanes have general formula","CnH2n","CnH2n+2","CnH2n-2","CnHn",1],
  ["Alkenes have general formula","CnH2n+2","CnH2n","CnH2n-2","CnHn",1],
  ["Alkynes have general formula","CnH2n+2","CnH2n","CnH2n-2","CnHn",2],
  ["Methane has formula","CH4","C2H6","C3H8","C4H10",0],
  ["Ethane has formula","CH4","C2H6","C3H8","C4H10",1],
  ["Propane has formula","CH4","C2H6","C3H8","C4H10",2],
  ["Ethene has formula","C2H6","C2H4","C2H2","C3H6",1],
  ["Functional group of alcohols is","COOH","OH","CHO","NH2",1],
  ["Functional group of carboxylic acids is","OH","CHO","COOH","NH2",2],
  ["Functional group of aldehydes is","COOH","OH","CHO","NH2",2],
  ["Functional group of amines is","COOH","OH","CHO","NH2",3],
  ["Ethanol has formula","CH3OH","C2H5OH","C3H7OH","C4H9OH",1],
  ["Ethanoic acid is also known as","formic acid","acetic acid","citric acid","lactic acid",1],
  ["Substitution reaction replaces","adds atoms","one atom or group with another","removes atoms","joins molecules",1],
  ["Addition reaction","replaces atoms","adds atoms across double bond","removes atoms","joins molecules",1],
  ["Elimination reaction","adds atoms","replaces atoms","removes atoms to form double bond","joins molecules",2],
  ["Condensation reaction","adds water","removes water or small molecule","replaces atoms","adds atoms",1],
  ["Hydrolysis reaction","removes water","adds water to break bonds","replaces atoms","adds atoms",1],
  ["Isomers have same","molecular formula different structure","structure different formula","mass different formula","formula and structure",0],
  ["Structural isomers differ in","molecular formula","arrangement of atoms","number of atoms","type of atoms",1],
  ["Stereoisomers have same","molecular formula and connectivity but different spatial arrangement","different formula","different connectivity","different atoms",0],
  ["Chiral carbon has","two identical groups","four different groups","three identical groups","no hydrogen",1],
  ["Enantiomers are","identical molecules","non-superimposable mirror images","structural isomers","same compound",1],
  ["Benzene formula is","C6H12","C6H6","C6H8","C6H10",1],
  ["Benzene is","aliphatic","aromatic","alkylic","alkenic",1],
  ["Electrophilic substitution occurs in","alkanes","alkenes","benzene","alkynes",2],
  ["Nucleophile is","electron pair acceptor","electron pair donor","proton donor","proton acceptor",1],
  ["Electrophile is","electron pair donor","electron pair acceptor","proton acceptor","proton donor",1],
  ["Free radical is","charged species","species with unpaired electron","ionic species","neutral molecule",1],
  ["Initiation step in free radical substitution","terminates chain","creates free radicals","propagates chain","adds atoms",1],
  ["Propagation step","creates free radicals","terminates chain","continues chain reaction","adds atoms",2],
  ["Termination step","creates free radicals","continues chain","ends chain reaction","adds atoms",2],
  ["Markovnikov's rule predicts","where substitution occurs","where addition occurs in unsymmetrical alkenes","elimination products","condensation products",1],
  ["Saponification produces soap from","esters and acid","esters and alkali","alcohols and acid","alcohols and alkali",1],
  ["Transesterification produces","soap","biodiesel","nylon","polyester",1],
  ["Amino acids contain both","COOH and OH","NH2 and COOH","OH and CHO","NH2 and OH",1],
  ["Peptide bond forms between","two carboxylic acids","amino and carboxylic acid groups","two amino groups","two hydroxyl groups",1],
  ["Proteins are","monosaccharides","polypeptides","lipids","nucleic acids",1],
  ["Denaturation of protein","strengthens structure","disrupts structure permanently","has no effect","increases activity",1],
  ["Glucose formula is","C6H12O6","C12H22O11","C6H10O5","C5H10O5",0],
  ["Sucrose is a","monosaccharide","disaccharide","polysaccharide","lipid",1],
  ["Starch is a","monosaccharide","disaccharide","polysaccharide","lipid",2],
  ["Cellulose is","digestible by humans","indigestible structural polysaccharide","a lipid","a protein",1],
  ["Triglycerides consist of","glucose and amino acids","glycerol and three fatty acids","two fatty acids and glycerol","four fatty acids",1],
  ["Saturated fats have","double bonds","no double bonds in carbon chain","only double bonds","triple bonds",1],
  ["Unsaturated fats have","no double bonds","one or more double bonds in carbon chain","only single bonds","triple bonds",1],
  ["DNA is a","protein","polysaccharide","nucleic acid","lipid",2],
  ["Nucleotide consists of","sugar only","sugar phosphate and base","base only","phosphate only",1],
];

chemOrganicQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-CHEM-ORG-${String(i+1).padStart(3,'0')}`,domain:"Chemistry",topic:"Organic Chemistry",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── PHYSICS: Space & Astronomy ───────────────────────────────────────────────
const physSpaceQ = [
  ["Our galaxy is called","Andromeda","Milky Way","Triangulum","Sombrero",1],
  ["The Sun is a","planet","moon","star","black hole",2],
  ["Light year is a unit of","time","distance","speed","mass",1],
  ["Nearest star to Earth (after Sun) is","Sirius","Proxima Centauri","Betelgeuse","Vega",1],
  ["Planets orbit the Sun due to","magnetism","gravity","electric force","nuclear force",1],
  ["Inner planets are","gas giants","rocky terrestrial planets","ice giants","dwarf planets",1],
  ["Outer planets are","rocky","gas and ice giants","terrestrial","dwarf planets",1],
  ["Asteroid belt is between","Earth and Mars","Mars and Jupiter","Jupiter and Saturn","Saturn and Uranus",1],
  ["Comets are made of","rock only","ice and dust","gas only","metal",1],
  ["Moon phases are caused by","Earth's shadow","Moon's orbit changing our view of lit side","Sun moving","clouds",1],
  ["Solar eclipse occurs when","Moon is behind Earth","Moon blocks Sun from Earth","Earth blocks Sun from Moon","Sun is behind Moon",1],
  ["Lunar eclipse occurs when","Moon blocks Sun","Earth's shadow falls on Moon","Moon is in front of Sun","Sun is behind Earth",1],
  ["Tides are caused by","wind","Moon's gravitational pull","Earth's rotation only","Sun's heat",1],
  ["Stars form from","planets","clouds of gas and dust (nebulae)","black holes","galaxies",1],
  ["Main sequence star fuses","helium to carbon","hydrogen to helium","carbon to oxygen","iron to nickel",1],
  ["Red giant forms when","star runs out of hydrogen in core","star is young","star is very small","star explodes",0],
  ["White dwarf is remnant of","massive star","medium-sized star like Sun","neutron star","black hole",1],
  ["Neutron star forms from","small star","medium star","massive star supernova","white dwarf",2],
  ["Black hole forms from","small star","medium star","very massive star collapse","white dwarf",2],
  ["Supernova is","star formation","massive star explosion","planet formation","galaxy collision",1],
  ["Hertzsprung-Russell diagram plots","mass vs volume","luminosity vs temperature","distance vs speed","age vs size",1],
  ["Hubble's law states galaxies are","stationary","moving toward us","moving away with speed proportional to distance","orbiting each other",2],
  ["Cosmic microwave background radiation is evidence for","steady state","Big Bang","black holes","dark matter",1],
  ["Dark matter","emits light","does not emit light but has gravitational effects","is visible","is hot gas",1],
  ["Dark energy causes","universe to contract","universe expansion to accelerate","galaxy formation","star formation",1],
  ["Parallax measures","star temperature","star distance","star mass","star age",1],
  ["Cepheid variables are used to measure","temperature","distance to galaxies","star mass","star age",1],
  ["Spectroscopy of stars reveals","only temperature","composition temperature and motion","only composition","only motion",1],
  ["Blue shift indicates object is","stationary","moving away","moving toward observer","rotating",2],
  ["Escape velocity is","speed to orbit","speed to escape gravitational field","speed of light","speed of sound",1],
  ["Orbital speed depends on","mass of orbiting object","mass of central body and orbital radius","colour","temperature",1],
  ["Geostationary orbit has period of","12 hours","24 hours","1 week","1 month",1],
  ["GPS satellites use","geostationary orbit","medium Earth orbit","low Earth orbit","high elliptical orbit",1],
  ["International Space Station is in","geostationary orbit","low Earth orbit","medium Earth orbit","high orbit",1],
  ["Kepler's first law states orbits are","circular","elliptical","spiral","random",1],
  ["Kepler's second law states planet sweeps equal areas in","unequal times","equal times","random times","no time",1],
  ["Kepler's third law relates","mass and distance","orbital period and distance","speed and mass","temperature and distance",1],
  ["Solar wind is","light from Sun","stream of charged particles from Sun","heat radiation","gravitational waves",1],
  ["Aurora is caused by","moonlight","solar wind interacting with atmosphere","volcanic activity","ocean currents",1],
  ["Sunspots are","hot regions","cooler darker regions on Sun's surface","planets","asteroids",1],
  ["Nuclear fusion in Sun converts","mass to energy","energy to mass","light to heat","heat to light",0],
  ["E = mc² relates","energy and velocity","energy mass and speed of light","force and mass","power and time",1],
  ["Speed of light in vacuum is","3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","3×10⁴ m/s",1],
  ["Light takes approximately ___ to reach Earth from Sun","8 seconds","8 minutes","8 hours","8 days",1],
  ["Pluto is classified as","planet","dwarf planet","moon","asteroid",1],
  ["Jupiter's Great Red Spot is","a volcano","a persistent storm","a crater","a moon",1],
  ["Saturn's rings are made of","gas","ice and rock particles","liquid","metal",1],
  ["Mars is known as","blue planet","red planet","ringed planet","gas giant",1],
  ["Venus has","no atmosphere","thick CO2 atmosphere","oxygen atmosphere","nitrogen only atmosphere",1],
  ["Mercury has","thick atmosphere","no significant atmosphere","oxygen atmosphere","water vapour atmosphere",1],
];

physSpaceQ.forEach(([q,a,b,c,d,ai],i)=>{
  extra.push({id:`MCQ-PHYS-SPACE-${String(i+1).padStart(3,'0')}`,domain:"Physics",topic:"Space and Astronomy",difficulty:["Easy","Medium","Hard"][i%3],question:q,options:[a,b,c,d],answerIndex:ai,explanation:`Correct answer: ${[a,b,c,d][ai]}`});
});

// ── WRITE COMBINED OUTPUT ────────────────────────────────────────────────────
const allQuestions = [...existing, ...extra];
console.log(`Total questions: ${allQuestions.length}`);
const ts = `export const mcqBank1400 = ${JSON.stringify(allQuestions, null, 2)};\n`;
fs.writeFileSync('./src/lib/tests/jmss-master-bank.ts', ts);
console.log('Done.');
