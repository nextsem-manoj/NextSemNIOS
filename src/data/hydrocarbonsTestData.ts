export interface HydrocarbonTestQuestion {
  id: string;
  sectionCode: 'alkanes' | 'alkenes' | 'alkynes' | 'benzene' | 'general';
  sectionTitle: string;
  questionNo: number;
  questionType: 'MCQ' | 'Assertion-Reason' | 'Reaction-Mechanism' | 'Match-the-Following';
  questionText: string;
  questionTextHinglish: string;
  options: string[];
  optionsHinglish: string[];
  correctIndex: number;
  niosReference: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  detailedSolutionHinglish: string;
  keyReactionOrConcept: string;
  tags: string[];
}

export const HYDROCARBONS_TEST_QUESTIONS: HydrocarbonTestQuestion[] = [
  // =========================================================================
  // SECTION 1: ALKANES (Pages 146 - 152)
  // =========================================================================
  {
    id: 'hc-alkane-q1',
    sectionCode: 'alkanes',
    sectionTitle: 'Alkanes: Preparation & Wurtz Reaction',
    questionNo: 1,
    questionType: 'MCQ',
    questionText: 'Which of the following alkanes CANNOT be prepared by the standard Wurtz reaction?',
    questionTextHinglish: 'Wurtz reaction (2 R-X + 2Na in dry ether) dwara inme se kaunsa alkane nahi banaya ja sakta?',
    options: [
      'Ethane (CH3-CH3)',
      'Methane (CH4)',
      'Butane (CH3-CH2-CH2-CH3)',
      'Hexane (CH3-(CH2)4-CH3)'
    ],
    optionsHinglish: [
      'Ethane (2 CH3Br + 2Na se ban jata hai)',
      'Methane (CH4 - isme kam se kam 2 carbon chahiye hote hain)',
      'Butane (2 C2H5Br + 2Na se ban jata hai)',
      'Hexane (2 C3H7Br + 2Na se ban jata hai)'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 148',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Wurtz reaction mein 2 alkyl halide molecules aapas mein Sodium (Na) ke sath couple hote hain (R-X + 2Na + X-R → R-R + 2NaX). Is reaction se banne wale alkane mein kam se kam 2 carbon atoms hone chahiye. Isliye **Methane (CH4)** ko Wurtz reaction se nahi banaya ja sakta.',
    keyReactionOrConcept: 'Wurtz Reaction: 2 R-X + 2Na → R-R + 2NaX (Cannot form Methane)',
    tags: ['Wurtz Reaction', 'Alkanes', 'Preparation']
  },
  {
    id: 'hc-alkane-q2',
    sectionCode: 'alkanes',
    sectionTitle: 'Alkanes: Decarboxylation & Soda Lime',
    questionNo: 2,
    questionType: 'MCQ',
    questionText: 'When Sodium Propanoate (CH3CH2COONa) is heated with Soda Lime (NaOH + CaO), what is the primary hydrocarbon product obtained?',
    questionTextHinglish: 'Jab Sodium Propanoate (CH3CH2COONa) ko Soda Lime (NaOH + CaO) ke sath heat kiya jata hai, toh kaunsa alkane milta hai?',
    options: [
      'Propane (C3H8)',
      'Ethane (C2H6)',
      'Methane (CH4)',
      'Butane (C4H10)'
    ],
    optionsHinglish: [
      'Propane (3 carbon)',
      'Ethane (C2H6 - ek carbon kam wala alkane)',
      'Methane (1 carbon)',
      'Butane (4 carbon)'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 148',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Decarboxylation reaction mein sodium carboxylate se ek carboxyl group (CO2) nikal jata hai Na2CO3 ke roop mein:\nCH3CH2COONa + NaOH ──(CaO / Δ)──> CH3-CH3 (Ethane) + Na2CO3\nIs reaction mein starting salt se hamesha **1 carbon kam** wala alkane banta hai.',
    keyReactionOrConcept: 'Decarboxylation: R-COONa + NaOH ──(CaO)──> R-H + Na2CO3',
    tags: ['Decarboxylation', 'Soda Lime', 'Alkanes']
  },
  {
    id: 'hc-alkane-q3',
    sectionCode: 'alkanes',
    sectionTitle: 'Alkanes: Physical Properties & Boiling Point',
    questionNo: 3,
    questionType: 'MCQ',
    questionText: 'Among the isomeric pentanes (n-pentane, isopentane, and neopentane), why does neopentane have the lowest boiling point (282.5 K)?',
    questionTextHinglish: 'Pentane ke teeno isomers (n-pentane, isopentane, neopentane) mein se Neopentane ka boiling point sabse kam kyu hota hai?',
    options: [
      'Neopentane has the highest molecular mass',
      'Branching makes the molecule spherical, decreasing surface area and van der Waals forces',
      'Neopentane contains intermolecular hydrogen bonding',
      'Neopentane is planar and has strong dipole-dipole repulsion'
    ],
    optionsHinglish: [
      'Neopentane ka molecular weight zyada hota hai',
      'Branching ki wajah se molecule spherical ho jata hai, jisse surface area aur van der Waals forces kam ho jate hain',
      'Neopentane mein hydrogen bonding hoti hai',
      'Neopentane planar molecule hai'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 149-150',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Jaise-jaise alkane chain mein branching badhti hai, molecule ka shape zyada spherical (gol) ho jata hai. Spherical shape ka surface area sabse kam hota hai, jisse molecules ke beech van der Waals attraction forces kamjor ho jate hain aur boiling point ghat jata hai. (Order: n-pentane > isopentane > neopentane).',
    keyReactionOrConcept: 'Branching ↑ ⟹ Surface Area ↓ ⟹ van der Waals Forces ↓ ⟹ Boiling Point ↓',
    tags: ['Boiling Point', 'Branching', 'Isomers']
  },
  {
    id: 'hc-alkane-q4',
    sectionCode: 'alkanes',
    sectionTitle: 'Alkanes: Free Radical Halogenation Mechanism',
    questionNo: 4,
    questionType: 'Reaction-Mechanism',
    questionText: 'In the photochemical chlorination of methane (CH4 + Cl2 in presence of light hν), what is the crucial Chain Initiation step?',
    questionTextHinglish: 'Methane ke chlorination ke 3-step free radical mechanism mein Chain Initiation (शुरुआत) step kaunsa hota hai?',
    options: [
      'CH4 + Cl• → CH3• + HCl',
      'Cl2 ──(hν)──> 2 Cl• (Homolytic cleavage of chlorine molecule)',
      'CH3• + Cl2 → CH3Cl + Cl•',
      'CH3• + CH3• → CH3-CH3'
    ],
    optionsHinglish: [
      'CH4 + Cl• → CH3• + HCl (Propagation step 1)',
      'Cl2 ──(hν)──> 2 Cl• (Sunlight se Cl2 ka homolytic fission - Initiation)',
      'CH3• + Cl2 → CH3Cl + Cl• (Propagation step 2)',
      'CH3• + CH3• → CH3-CH3 (Termination step)'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 151',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Methane ke chlorination mechanism ke 3 steps hote hain:\n1. **Initiation**: Cl2 ──(hν)──> 2 Cl• (Chlorine molecule ka homolysis hoke do free radicals banna).\n2. **Propagation**: CH4 + Cl• → CH3• + HCl aur CH3• + Cl2 → CH3Cl + Cl•.\n3. **Termination**: Free radicals aapas mein judkar neutral molecule banana (Cl• + Cl• → Cl2, CH3• + Cl• → CH3Cl, CH3• + CH3• → C2H6).',
    keyReactionOrConcept: 'Chain Initiation: Cl-Cl ──(hν)──> 2 Cl• (Homolytic Fission)',
    tags: ['Free Radical Mechanism', 'Chlorination', 'Initiation']
  },
  {
    id: 'hc-alkane-q5',
    sectionCode: 'alkanes',
    sectionTitle: 'Alkanes: Kolbe Electrolysis',
    questionNo: 5,
    questionType: 'MCQ',
    questionText: 'During Kolbe\'s electrolytic preparation of ethane from concentrated aqueous sodium ethanoate (CH3COONa), which gases are liberated at the Anode and Cathode respectively?',
    questionTextHinglish: 'Sodium ethanoate ke Kolbe electrolysis ke dauran Anode aur Cathode par kramashah (respectively) kaunsi gases banti hain?',
    options: [
      'Anode: Ethane + CO2 ; Cathode: H2',
      'Anode: H2 ; Cathode: Ethane + CO2',
      'Anode: Methane + O2 ; Cathode: H2',
      'Anode: CO2 ; Cathode: Ethane + O2'
    ],
    optionsHinglish: [
      'Anode par: Ethane (C2H6) aur CO2 ; Cathode par: H2 gas',
      'Anode par: H2 ; Cathode par: Ethane aur CO2',
      'Anode par: Methane aur O2 ; Cathode par: H2',
      'Anode par: CO2 ; Cathode par: Ethane aur O2'
    ],
    correctIndex: 0, // A
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 149',
    difficulty: 'Hard',
    detailedSolutionHinglish: 'Kolbe Electrolysis mein:\n- **At Anode (Oxidation)**: 2 CH3COO⁻ ──(-2e⁻)──> 2 CH3COO• ──> 2 CH3• + 2 CO2 ↑ ; Fir 2 CH3• judkar C2H6 (Ethane) banate hain.\n- **At Cathode (Reduction)**: 2 H2O + 2e⁻ ──> 2 OH⁻ + H2 ↑ gas liberate hoti hai.',
    keyReactionOrConcept: 'Kolbe Electrolysis: Anode ⟹ C2H6 + CO2 ; Cathode ⟹ H2',
    tags: ['Kolbe Electrolysis', 'Anode', 'Cathode', 'Alkanes']
  },

  // =========================================================================
  // SECTION 2: ALKENES (Pages 152 - 157)
  // =========================================================================
  {
    id: 'hc-alkene-q6',
    sectionCode: 'alkenes',
    sectionTitle: 'Alkenes: Dehydrohalogenation & Saytzeff Rule',
    questionNo: 6,
    questionType: 'MCQ',
    questionText: 'When 2-Bromobutane is heated with alcoholic KOH, what is the MAJOR alkene product formed according to Saytzeff\'s Rule?',
    questionTextHinglish: 'Jab 2-Bromobutane ko alcoholic KOH ke sath heat kiya jata hai, toh Saytzeff\'s Rule ke mutabik MAJOR product kaunsa alkene hota hai?',
    options: [
      'But-1-ene (CH3-CH2-CH=CH2)',
      'But-2-ene (CH3-CH=CH-CH3)',
      '2-Methylpropene',
      'Butane (CH3-CH2-CH2-CH3)'
    ],
    optionsHinglish: [
      'But-1-ene (Minor product, ~20%)',
      'But-2-ene (Major product, ~80% - more substituted double bond)',
      '2-Methylpropene',
      'Butane'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 153',
    difficulty: 'Medium',
    detailedSolutionHinglish: '**Saytzeff\'s Rule (Zaitsev Rule)** kehta hai ki dehydrohalogenation mein woh alkene major product banta hai jiske double bonded carbon par zyada sankhya mein alkyl groups jude hon (more highly substituted alkene). Isliye 2-Bromobutane se **But-2-ene (80% Major)** banta hai aur But-1-ene (20% Minor) banta hai.',
    keyReactionOrConcept: 'Saytzeff\'s Rule: More substituted alkene is the major product (But-2-ene > But-1-ene)',
    tags: ['Saytzeff Rule', 'Dehydrohalogenation', 'Alkenes']
  },
  {
    id: 'hc-alkene-q7',
    sectionCode: 'alkenes',
    sectionTitle: 'Alkenes: Markovnikov Rule',
    questionNo: 7,
    questionType: 'MCQ',
    questionText: 'What is the major product formed when Propene (CH3-CH=CH2) reacts with Hydrogen Bromide (HBr) in the absence of peroxides?',
    questionTextHinglish: 'Bina peroxide ki presence mein Propene par HBr add karne par Markovnikov\'s Rule ke anusar mukhya product kya banega?',
    options: [
      '1-Bromopropane (CH3-CH2-CH2Br)',
      '2-Bromopropane (CH3-CH(Br)-CH3)',
      '1,2-Dibromopropane',
      'Propyl alcohol'
    ],
    optionsHinglish: [
      '1-Bromopropane (Anti-Markovnikov product)',
      '2-Bromopropane (Markovnikov major product)',
      '1,2-Dibromopropane',
      'Propyl alcohol'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 155',
    difficulty: 'Easy',
    detailedSolutionHinglish: '**Markovnikov\'s Rule**: Unsymmetrical alkene par polar reagent (HX) add hone par uska negative part (Br⁻) us double-bonded carbon par judta hai jiske paas **kam hydrogen atoms** hote hain. Propene (CH3-CH=CH2) mein CH ke paas 1 H hai aur CH2 ke paas 2 H hain, isliye Br⁻ beech wale carbon par judkar **2-Bromopropane** banata hai.',
    keyReactionOrConcept: 'Markovnikov Addition: CH3-CH=CH2 + HBr → CH3-CH(Br)-CH3 (2-Bromopropane)',
    tags: ['Markovnikov Rule', 'Propene', 'Electrophilic Addition']
  },
  {
    id: 'hc-alkene-q8',
    sectionCode: 'alkenes',
    sectionTitle: 'Alkenes: Kharasch / Peroxide Effect',
    questionNo: 8,
    questionType: 'MCQ',
    questionText: 'Why does the Anti-Markovnikov addition (Peroxide / Kharasch effect) take place exclusively with HBr and NOT with HCl or HI?',
    questionTextHinglish: 'Anti-Markovnikov peroxide effect kewal HBr ke sath kyu hota hai, HCl ya HI ke sath kyu nahi hota?',
    options: [
      'HCl and HI are non-polar molecules',
      'H-Cl bond is too strong to be broken by peroxide radicals, and H-I gives I• radicals that dimerize to I2 rather than adding to alkene',
      'HCl is gaseous and HI is unstable in water',
      'Peroxide decomposes in the presence of HCl and HI'
    ],
    optionsHinglish: [
      'HCl aur HI non-polar hote hain',
      'H-Cl bond bohot strong hota hai (homolysis nahi hota), aur H-I se I• radicals alkene par judne ke bajay aapas mein judkar I2 bana lete hain',
      'HCl gas hai aur HI pani mein unstable hai',
      'Peroxide decompose ho jata hai'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 155',
    difficulty: 'Hard',
    detailedSolutionHinglish: 'Peroxide effect free radical mechanism se chalta hai:\n1. **H-Cl bond energy (430 kJ/mol) bohot high** hoti hai, isliye alkoxy radical ise break karke Cl• radical nahi bana pata (endothermic step 1).\n2. **H-I bond weak** hota hai aur I• radical ban jata hai, lekin I• alkene par add hone ki jagah aapas mein judkar **I2 molecule (I• + I• → I2)** bana leta hai (endothermic step 2).\nKewal **HBr** mein dono propagation steps exothermic hote hain!',
    keyReactionOrConcept: 'Peroxide Effect only with HBr: HCl bond too strong; I• radicals dimerize to I2',
    tags: ['Peroxide Effect', 'Kharasch Effect', 'Thermodynamics']
  },
  {
    id: 'hc-alkene-q9',
    sectionCode: 'alkenes',
    sectionTitle: 'Alkenes: Ozonolysis & Double Bond Location',
    questionNo: 9,
    questionType: 'MCQ',
    questionText: 'An alkene on reductive ozonolysis (O3 followed by Zn/H2O) yields Equimolar Ethanal (CH3CHO) and Methanal (HCHO). What is the structure of the alkene?',
    questionTextHinglish: 'Kisi alkene ka ozonolysis (O3 + Zn/H2O) karne par Ethanal (CH3CHO) aur Methanal (HCHO) milte hain. Woh alkene kaunsa hai?',
    options: [
      'Ethene (CH2=CH2)',
      'Propene (CH3-CH=CH2)',
      'But-1-ene (CH3-CH2-CH=CH2)',
      'But-2-ene (CH3-CH=CH-CH3)'
    ],
    optionsHinglish: [
      'Ethene (2 HCHO deta hai)',
      'Propene (CH3-CH=CH2 → CH3CHO + HCHO)',
      'But-1-ene (CH3CH2CHO + HCHO deta hai)',
      'But-2-ene (2 CH3CHO deta hai)'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 156',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Ozonolysis trick: Dono carbonyl products ke oxygen ko aamne-saamne rakh kar remove karein aur carbon ke beech double bond laga dein:\nCH3-CH=O + O=CH2 ──> CH3-CH=CH2 (Propene) + O2.\nIsliye starting alkene **Propene** hai.',
    keyReactionOrConcept: 'Ozonolysis: CH3-CH=CH2 ──(1. O3 / 2. Zn, H2O)──> CH3CHO + HCHO',
    tags: ['Ozonolysis', 'Propene', 'Carbonyl Products']
  },
  {
    id: 'hc-alkene-q10',
    sectionCode: 'alkenes',
    sectionTitle: 'Alkenes: Baeyer Reagent Test for Unsaturation',
    questionNo: 10,
    questionType: 'MCQ',
    questionText: 'What is Baeyer\'s Reagent, and what observation confirms the presence of unsaturation (C=C or C≡C)?',
    questionTextHinglish: 'Baeyer\'s Reagent kya hota hai aur unsaturation confirm karne par kya observation dikhta hai?',
    options: [
      'Hot concentrated HNO3 ; Evolution of brown NO2 fumes',
      'Cold dilute alkaline KMnO4 solution ; Decolourization of purple colour and formation of vicinal glycol',
      'Acidified Potassium Dichromate (K2Cr2O7) ; Solution turns green',
      'Ammoniacal Cuprous Chloride ; Formation of red precipitate'
    ],
    optionsHinglish: [
      'Hot concentrated HNO3',
      'Cold dilute alkaline KMnO4 ; Purple colour gayab ho jata hai aur Glycol banta hai',
      'Acidified K2Cr2O7',
      'Ammoniacal Cu2Cl2'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 156',
    difficulty: 'Easy',
    detailedSolutionHinglish: '**Baeyer\'s Reagent** 1% cold alkaline KMnO4 solution hota hai. Jab ise unsaturated hydrocarbon (alkene/alkyne) mein milate hain, toh KMnO4 ka pink/purple colour decolourize ho jata hai aur brown MnO2 precipitate banta hai sath mein vicinal glycol (Ethane-1,2-diol) banta hai.',
    keyReactionOrConcept: 'Baeyer\'s Reagent = Cold alk. KMnO4 (Decolourization of purple colour = Unsaturation test)',
    tags: ['Baeyer Reagent', 'Glycol', 'Unsaturation Test']
  },

  // =========================================================================
  // SECTION 3: ALKYNES (Pages 157 - 161)
  // =========================================================================
  {
    id: 'hc-alkyne-q11',
    sectionCode: 'alkynes',
    sectionTitle: 'Alkynes: Acidity of Terminal Alkynes & s-Character',
    questionNo: 11,
    questionType: 'MCQ',
    questionText: 'Why is Ethyne (CH≡CH) acidic in nature and capable of forming sodium acetylide with Sodium metal?',
    questionTextHinglish: 'Ethyne (CH≡CH) acidic nature kyu show karta hai aur Na metal ke sath H2 gas kyu release karta hai?',
    options: [
      'Carbon atom in ethyne is sp3 hybridized with 25% s-character',
      'Carbon atom in ethyne is sp hybridized with 50% s-character, making it highly electronegative and polarizing the C-H bond',
      'Ethyne has resonance stabilization in its triple bond',
      'Hydrogen atoms in ethyne are bonded to oxygen atoms'
    ],
    optionsHinglish: [
      'Carbon sp3 hybridized hota hai (25% s-character)',
      'Carbon sp hybridized hota hai (50% s-character), jisse carbon ki electronegativity bohot badh jati hai aur H+ easily release ho jata hai',
      'Triple bond mein resonance hoti hai',
      'Hydrogen oxygen se juda hota hai'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 160',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Hybridization vs % s-character:\n- Ethane (sp³): 25% s-character\n- Ethene (sp²): 33.3% s-character\n- Ethyne (sp): **50% s-character**\ns-orbital nucleus ke sabse paas hota hai. Isliye 50% s-character hone ke karan sp carbon bohot electronegative ho jata hai aur C-H bond ke electrons ko kheench kar H+ release kar deta hai (Acidic nature).',
    keyReactionOrConcept: 'Acidity of Terminal Alkynes: 50% s-character in sp Carbon ⟹ High Electronegativity',
    tags: ['Acidity of Alkynes', 's-character', 'sp hybridization']
  },
  {
    id: 'hc-alkyne-q12',
    sectionCode: 'alkynes',
    sectionTitle: 'Alkynes: Cyclic Polymerisation to Benzene',
    questionNo: 12,
    questionType: 'MCQ',
    questionText: 'When Ethyne (Acetylene) is passed through a red-hot iron tube at 873 K, what is the aromatic product obtained?',
    questionTextHinglish: 'Jab Ethyne (C2H2) ko 873 K par Red-Hot Iron tube se pass kiya jata hai, toh kaunsa aromatic compound banta hai?',
    options: [
      'Toluene (C6H5CH3)',
      'Benzene (C6H6)',
      'Cyclohexane (C6H12)',
      'Naphthalene (C10H8)'
    ],
    optionsHinglish: [
      'Toluene',
      'Benzene (C6H6 - 3 molecules of ethyne undergo cyclic trimerization)',
      'Cyclohexane',
      'Naphthalene'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 159',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Ethyne ke 3 molecules red hot iron ya copper tube mein $873\\text{ K}$ par cyclic trimerisation karte hain:\n$$3\\text{ CH}\\equiv\\text{CH} \\xrightarrow{\\text{Red Hot Fe Tube / 873 K}} \\text{C}_6\\text{H}_6\\text{ (Benzene)}$$',
    keyReactionOrConcept: 'Cyclic Trimerisation: 3 C2H2 ──(Red Hot Fe Tube / 873 K)──> Benzene (C6H6)',
    tags: ['Cyclic Polymerisation', 'Ethyne to Benzene', 'Synthesis']
  },
  {
    id: 'hc-alkyne-q13',
    sectionCode: 'alkynes',
    sectionTitle: 'Alkynes: Hydration Reaction (Kucherov Reaction)',
    questionNo: 13,
    questionType: 'MCQ',
    questionText: 'What is the final stable carbonyl product obtained when Propyne (CH3-C≡CH) is treated with warm dilute H2SO4 in the presence of HgSO4 catalyst?',
    questionTextHinglish: 'Jab Propyne (CH3-C≡CH) ko dil. H2SO4 aur HgSO4 catalyst ke sath 333 K par react karwate hain, toh final stable product kya banta hai?',
    options: [
      'Propanal (CH3CH2CHO)',
      'Propanone / Acetone (CH3COCH3)',
      'Propanoic acid (CH3CH2COOH)',
      'Propan-1-ol (CH3CH2CH2OH)'
    ],
    optionsHinglish: [
      'Propanal (Aldehyde)',
      'Propanone / Acetone (Ketone - Markovnikov hydration followed by tautomerisation)',
      'Propanoic acid',
      'Propan-1-ol'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 158',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Hydration of Propyne:\n1. Markovnikov addition of H2O: CH3-C≡CH + H2O ──(Hg²⁺/H⁺)──> [CH3-C(OH)=CH2] (Unstable enol intermediate).\n2. Keto-Enol Tautomerisation: Enol form convert ho jati hai stable keto form **Propanone (Acetone - CH3COCH3)** mein.\n*(Note: Kewal Ethyne se Acetaldehyde banta hai, baaki sabhi higher alkynes se Ketones bante hain).*',
    keyReactionOrConcept: 'Kucherov Hydration: CH3-C≡CH + H2O ──(HgSO4/H2SO4)──> CH3-CO-CH3 (Propanone)',
    tags: ['Hydration of Alkynes', 'Propanone', 'Tautomerisation']
  },

  // =========================================================================
  // SECTION 4: ARENES & BENZENE (Pages 161 - 167)
  // =========================================================================
  {
    id: 'hc-benzene-q14',
    sectionCode: 'benzene',
    sectionTitle: 'Benzene: Aromaticity & Hückel Rule',
    questionNo: 14,
    questionType: 'MCQ',
    questionText: 'According to Hückel\'s Rule of Aromaticity, which criteria must a monocyclic conjugated system satisfy to be classified as aromatic?',
    questionTextHinglish: 'Hückel\'s Rule ke anusar kisi ring compound ko Aromatic hone ke liye kaunsi shartein poori karni padti hain?',
    options: [
      'Must be non-planar with 4n π-electrons',
      'Must be cyclic, planar, fully conjugated with (4n + 2) delocalized π-electrons (where n = 0, 1, 2, ...)',
      'Must contain only carbon-carbon triple bonds',
      'Must have alternating single and double bonds with localized electrons'
    ],
    optionsHinglish: [
      'Non-planar aur 4n π electrons',
      'Cyclic, Planar, Conjugated aur (4n + 2) delocalized π electrons (n = 0, 1, 2...)',
      'Kewal triple bond hona chahiye',
      'Localized electrons hone chahiye'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 162',
    difficulty: 'Easy',
    detailedSolutionHinglish: '**Hückel\'s (4n+2)π Rule**: Aromatic hone ke liye 4 shartein hain:\n1. Molecule **Cyclic** hona chahiye.\n2. Ring **Planar** (flat) honi chahiye ($sp^2$ hybridized carbons).\n3. Pura ring **Conjugated** hona chahiye (continuous ring of p-orbitals).\n4. Ring mein **$(4n+2)\pi$ electrons** hone chahiye ($n=0 \implies 2\pi$, $n=1 \implies 6\pi$ [jaise Benzene], $n=2 \implies 10\pi$ [Naphthalene]).',
    keyReactionOrConcept: 'Hückel\'s Rule: Planar + Cyclic + Conjugated + (4n+2)π electrons',
    tags: ['Hückel Rule', 'Aromaticity', 'Benzene']
  },
  {
    id: 'hc-benzene-q15',
    sectionCode: 'benzene',
    sectionTitle: 'Benzene: Electrophilic Aromatic Substitution (SEAr)',
    questionNo: 15,
    questionType: 'Reaction-Mechanism',
    questionText: 'What is the active electrophile generated in the nitration of benzene using a mixture of concentrated HNO3 and concentrated H2SO4 (Nitrating Mixture)?',
    questionTextHinglish: 'Benzene ke nitration mein conc. HNO3 + conc. H2SO4 ke nitrating mixture se kaunsa active electrophile generate hota hai?',
    options: [
      'Nitrate ion (NO3⁻)',
      'Nitronium ion (NO2⁺)',
      'Nitrite ion (NO2⁻)',
      'Nitrosyl cation (NO⁺)'
    ],
    optionsHinglish: [
      'NO3⁻ ion',
      'Nitronium ion (NO2⁺ - active electrophile)',
      'NO2⁻ ion',
      'NO⁺ ion'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 164',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Nitrating mixture mein H2SO4 stronger acid hone ke karan HNO3 ko protonate karta hai:\nHNO3 + 2 H2SO4 ⇌ **NO2⁺ (Nitronium Ion)** + H3O⁺ + 2 HSO4⁻\nYeh **NO2⁺** strong electrophile ban kar benzene ring par attack karta hai aur Nitrobenzene banata hai.',
    keyReactionOrConcept: 'Nitration Electrophile: NO2⁺ (Nitronium Ion)',
    tags: ['Nitration', 'Nitronium Ion', 'Electrophilic Substitution']
  },
  {
    id: 'hc-benzene-q16',
    sectionCode: 'benzene',
    sectionTitle: 'Benzene: Friedel-Crafts Alkylation',
    questionNo: 16,
    questionType: 'MCQ',
    questionText: 'When Benzene is treated with Chloromethane (CH3Cl) in the presence of anhydrous AlCl3 catalyst, what is the product and what role does AlCl3 play?',
    questionTextHinglish: 'Jab Benzene ko anhydrous AlCl3 ki presence mein CH3Cl ke sath react karwate hain, toh product kya banta hai aur AlCl3 ka kya role hota hai?',
    options: [
      'Chlorobenzene ; AlCl3 acts as a reducing agent',
      'Toluene (C6H5CH3) ; AlCl3 acts as a Lewis acid to generate the CH3⁺ carbocation electrophile',
      'Benzaldehyde ; AlCl3 acts as an oxidising agent',
      'Acetophenone ; AlCl3 neutralizes the acid'
    ],
    optionsHinglish: [
      'Chlorobenzene',
      'Toluene (C6H5CH3) ; AlCl3 Lewis acid hai jo CH3⁺ electrophile generate karta hai',
      'Benzaldehyde',
      'Acetophenone'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 165',
    difficulty: 'Medium',
    detailedSolutionHinglish: '**Friedel-Crafts Alkylation**:\n1. Generation of Electrophile: CH3-Cl + AlCl3 ──> **CH3⁺ (Carbocation)** + [AlCl4]⁻\n2. Attack on Benzene: C6H6 + CH3⁺ ──> **C6H5-CH3 (Toluene)** + HCl + AlCl3\nAnhydrous AlCl3 ek electron-deficient **Lewis Acid** hai jo halogen ko kheench kar carbocation banata hai.',
    keyReactionOrConcept: 'Friedel-Crafts Alkylation: C6H6 + CH3Cl ──(anh. AlCl3)──> C6H5CH3 (Toluene) + HCl',
    tags: ['Friedel-Crafts', 'Alkylation', 'Toluene', 'Lewis Acid']
  },
  {
    id: 'hc-benzene-q17',
    sectionCode: 'benzene',
    sectionTitle: 'Benzene: Directive Influence of Groups',
    questionNo: 17,
    questionType: 'MCQ',
    questionText: 'Which of the following substituent groups on a benzene ring is a META-directing and ring-DEACTIVATING group?',
    questionTextHinglish: 'Inme se kaunsa group benzene ring par jude hone par META-directing aur ring-DEACTIVATING hota hai?',
    options: [
      '-OH (Hydroxyl group)',
      '-NO2 (Nitro group)',
      '-NH2 (Amino group)',
      '-CH3 (Methyl group)'
    ],
    optionsHinglish: [
      '-OH (Ortho/Para directing, Activating)',
      '-NO2 (Meta directing, strongly Deactivating due to -M / -I effect)',
      '-NH2 (Ortho/Para directing, strongly Activating)',
      '-CH3 (Ortho/Para directing, Activating due to Hyperconjugation)'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 166',
    difficulty: 'Easy',
    detailedSolutionHinglish: '- **Ortho-Para Directing (Activating)**: Inke paas lone pair hota hai ya +I group hote hain jo ring ko electrons donate karte hain: -OH, -NH2, -OCH3, -CH3.\n- **Meta Directing (Deactivating)**: Yeh electronegative atom se multiple bond ke sath jude hote hain aur ring se electron density kheench lete hain (-M / -I effect): **-NO2, -CN, -CHO, -COOH, -SO3H**.',
    keyReactionOrConcept: 'Meta Directors: -NO2, -COOH, -CHO, -CN (Electron Withdrawing Groups)',
    tags: ['Directive Influence', 'Meta Directing', 'Nitrobenzene']
  },
  {
    id: 'hc-benzene-q18',
    sectionCode: 'benzene',
    sectionTitle: 'Benzene: Addition Reaction & BHC (Lindane)',
    questionNo: 18,
    questionType: 'MCQ',
    questionText: 'Under intense ultraviolet (UV) light or sunlight, Benzene reacts with excess Chlorine gas (Cl2) by addition to form which important agricultural insecticide?',
    questionTextHinglish: 'UV light ya sunlight ki presence mein Benzene 3 Cl2 molecules ke sath addition reaction karke kaunsa insecticide banata hai?',
    options: [
      'Chlorobenzene (C6H5Cl)',
      'Benzene Hexachloride / BHC / Gammaxene / Lindane (C6H6Cl6)',
      'Hexachlorobenzene (C6Cl6)',
      'DDT'
    ],
    optionsHinglish: [
      'Chlorobenzene (Electrophilic substitution product)',
      'Benzene Hexachloride (BHC / Gammaxene / Lindane - C6H6Cl6)',
      'Hexachlorobenzene',
      'DDT'
    ],
    correctIndex: 1, // B
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 165',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Sunlight/UV radiation ki presence mein Benzene addition reaction deta hai:\n$$\\text{C}_6\\text{H}_6 + 3\\text{Cl}_2 \\xrightarrow{h\\nu / \\text{UV}} \\text{C}_6\\text{H}_6\\text{Cl}_6$$\nIs product ko **Benzene Hexachloride (BHC)**, **Gammaxene**, ya **Lindane (γ-isomer)** kehte hain, jo ek powerful insecticide/pesticide hai.',
    keyReactionOrConcept: 'Addition of Cl2 to Benzene: C6H6 + 3 Cl2 ──(hν)──> C6H6Cl6 (BHC / Gammaxene)',
    tags: ['BHC', 'Gammaxene', 'Lindane', 'Addition Reactions']
  },
  {
    id: 'hc-benzene-q19',
    sectionCode: 'benzene',
    sectionTitle: 'Benzene: Resonance Energy & Bond Lengths',
    questionNo: 19,
    questionType: 'Assertion-Reason',
    questionText: 'Assertion (A): All six Carbon-Carbon bond lengths in Benzene are completely identical and equal to 139 pm, intermediate between single (154 pm) and double (134 pm) bonds.\nReason (R): The 6 π-electrons in benzene are completely delocalized over the entire hexagonal ring, giving it a resonance stabilization energy of 150.6 kJ/mol.',
    questionTextHinglish: 'Assertion (A): Benzene ke sabhi 6 C-C bond lengths barabar (139 pm) hote hain, jo single (154 pm) aur double (134 pm) ke beech ke hote hain.\nReason (R): Benzene ke 6 π-electrons poori ring par delocalized hote hain, jisse ise 150.6 kJ/mol ki resonance energy milti hai.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    optionsHinglish: [
      'Dono (A) aur (R) sahi hain aur (R) sahi spashtikaran hai (A) ka',
      'Dono sahi hain lekin explanation galat hai',
      '(A) sahi hai par (R) galat hai',
      '(A) galat hai par (R) sahi hai'
    ],
    correctIndex: 0, // A
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 161-162',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Dono statements 100% correct hain. Kekule structure mein alternating single/double bonds maane gaye the, par resonance hybrid mein 6 π-electrons delocalize hokar uniform electron cloud banate hain, jisse sabhi C-C bond order 1.5 aur length 139 pm ho jati hai.',
    keyReactionOrConcept: 'Benzene Bond Length = 139 pm (Resonance Hybrid) ; Resonance Energy = 150.6 kJ/mol',
    tags: ['Resonance Energy', 'Bond Length', 'Assertion-Reason']
  },
  {
    id: 'hc-general-q20',
    sectionCode: 'general',
    sectionTitle: 'Chemical Distinction: Ethane vs Ethene vs Ethyne',
    questionNo: 20,
    questionType: 'Match-the-Following',
    questionText: 'Match the Hydrocarbon in Column I with its distinguishing chemical reaction in Column II:\n(p) Ethane (CH3-CH3) → 1. Decolourizes Br2/CCl4 AND gives white ppt with ammoniacal AgNO3\n(q) Ethene (CH2=CH2) → 2. Inert to Br2/CCl4 and ammoniacal AgNO3\n(r) Ethyne (CH≡CH) → 3. Decolourizes Br2/CCl4 BUT gives NO precipitate with ammoniacal AgNO3',
    questionTextHinglish: 'Hydrocarbons ko unke distinguishing chemical test ke sath match karein:\n(p) Ethane\n(q) Ethene\n(r) Ethyne',
    options: [
      'p-2, q-3, r-1',
      'p-1, q-2, r-3',
      'p-3, q-1, r-2',
      'p-2, q-1, r-3'
    ],
    optionsHinglish: [
      'p-2, q-3, r-1',
      'p-1, q-2, r-3',
      'p-3, q-1, r-2',
      'p-2, q-1, r-3'
    ],
    correctIndex: 0, // A
    niosReference: 'NIOS Chemistry 313, Lesson 26, Page 168',
    difficulty: 'Hard',
    detailedSolutionHinglish: '- **Ethane (p-2)**: Saturated hydrocarbon hai, isliye na bromine water discharge karta hai na Tollens test deta hai.\n- **Ethene (q-3)**: Alkene hai, bromine water decolourize karta hai par acidic hydrogen na hone ke karan Tollens reagent se white ppt nahi deta.\n- **Ethyne (r-1)**: Alkynes bromine water decolourize karta hai AUR terminal alkyne hone ki wajah se ammoniacal AgNO3 ke sath **Silver acetylide ka white precipitate** deta hai.',
    keyReactionOrConcept: 'Distinction Table: Ethane (No reaction), Ethene (Br2 test only), Ethyne (Br2 + Tollens white ppt)',
    tags: ['Distinction Tests', 'Ethane', 'Ethene', 'Ethyne', 'Match-the-Following']
  }
];
