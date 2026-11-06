import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Atom, 
  Calculator, 
  FileSpreadsheet, 
  Zap, 
  Scroll, 
  Search, 
  ExternalLink, 
  Sparkles,
  BookOpen,
  Compass
} from 'lucide-react';

interface QuizItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'science' | 'math' | 'commerce' | 'history' | 'cs';
  categoryLabel: string;
  badge: string;
  url: string;
  icon: React.ReactNode;
  accentColor: string;
}

const ALL_QUIZZES: QuizItem[] = [
  {
    id: 'hindi-grammar-class9-complete-mastery',
    title: 'Class 9 Hindi Grammar Masterclass (हिंदी व्याकरण संपूर्ण अध्ययन व अभ्यास)',
    subtitle: 'उपसर्ग-प्रत्यय (संस्कृत, हिंदी, उर्दू, कृत् व तद्धित), समास (6 भेद + विग्रह), अर्थ की दृष्टि से वाक्य भेद (8 प्रकार), अलंकार (अनुप्रास, यमक, श्लेष, उपमा, रूपक, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण) + 20 MCQs और 20 रिक्त स्थान पूर्ति।',
    category: 'history',
    categoryLabel: 'Class 9 Hindi Grammar',
    badge: '4 Core Pillars • 40 Practice Qs',
    url: '/hindi-class9-grammar-complete-mastery.html',
    icon: <Sparkles size={20} />,
    accentColor: '#e11d48'
  },
  {
    id: 'navyug-class11-accountancy-exam-solutions',
    title: 'Navyug School Class 11 Accountancy Mid-Term Solved Exam (80 Marks Complete)',
    subtitle: 'All 13 Qs Solved Line-by-Line: Accounting Equation, Journal Entries, T-Accounts, Sales Book, Two-Column Cash Book, & Bank Reconciliation Statement (BRS) with click-to-reveal solutions.',
    category: 'commerce',
    categoryLabel: 'Class 11 Accountancy',
    badge: '80 Marks • 13 Solved Qs',
    url: '/navyug-class11-accountancy-exam-solutions.html',
    icon: <FileSpreadsheet size={20} />,
    accentColor: '#f59e0b'
  },
  {
    id: 'class9-physics-motion-force-numericals',
    title: 'Class 9 Physics: Motion & Force Master Problem Bank (Distance, Speed, Accel, Force)',
    subtitle: '25 High-Yield Questions & Numericals: Distance vs Displacement, Speed, Velocity, Average Speed, Acceleration, and Newton’s Laws (F=ma) with click-to-reveal step solutions.',
    category: 'science',
    categoryLabel: 'Class 9 Science (Physics)',
    badge: '25 Problems • Solved Studio',
    url: '/class9-physics-motion-force-numericals-questions.html',
    icon: <Zap size={20} />,
    accentColor: '#06b6d4'
  },
  {
    id: 'science-class9-ch6-how-forces-affect-motion',
    title: 'Class 9 Science Ch 6: How Forces Affect Motion (Complete Notes & 20 MCQs)',
    subtitle: 'New NCERT 2026-27 Exploration (iesc106.pdf): Balanced & Unbalanced Forces, Friction, Galileo’s Thought Experiment, Newton’s 3 Laws, F=ma, Momentum, Impulse & Action-Reaction Pairs.',
    category: 'science',
    categoryLabel: 'Class 9 Science',
    badge: 'Notes + 20 MCQs',
    url: '/science-class9-ch6-how-forces-affect-motion-notes-mcq.html',
    icon: <Atom size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'curiosity-class7-ch9-life-processes',
    title: 'Class 7 Science Ch 9: Life Processes in Animals (Digestion & Respiration Notes)',
    subtitle: 'New NCERT Curiosity (gecu109.pdf): Complete Digestive Tract, Villi, Cellular Respiration Equation, Breathing Mechanics, and Aquatic/Amphibian Respiration.',
    category: 'science',
    categoryLabel: 'Class 7 Science',
    badge: 'Bilingual Notes',
    url: '/curiosity-class7-ch9-life-processes-notes.html',
    icon: <Atom size={20} />,
    accentColor: '#34d399'
  },
  {
    id: 'curiosity-class7-ch7-heat-transfer',
    title: 'Class 7 Science Ch 7: Heat Transfer in Nature (20 Exam MCQs & Solutions)',
    subtitle: 'New NCERT 2026-27 Curiosity (gecu107.pdf): Conduction, Convection, Radiation, Sea & Land Breeze, Infiltration, Aquifers, Varahamihira & Ice Stupas.',
    category: 'science',
    categoryLabel: 'Class 7 Science',
    badge: '20 Bilingual MCQs',
    url: '/curiosity-class7-ch7-heat-transfer-mcq.html',
    icon: <Atom size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'class11-accountancy-ch5-brs-studio',
    title: 'Class 11 Financial Accounting Ch 5: Bank Reconciliation Statement (BRS Studio)',
    subtitle: 'NCERT Financial Accounting-I (keac105.pdf): Complete Guide, Timing Differences, Errors, 4-Balance Matrix, All 8 Solved Illustrations, 18 Numerical Questions & 20-MCQ Exam',
    category: 'commerce',
    categoryLabel: 'Class 11 Accountancy',
    badge: 'BRS Studio • 18 Numericals & 20 MCQs',
    url: '/financial-accounting-ch5-bank-reconciliation-statement-studio.html',
    icon: <FileSpreadsheet size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'class7-soc-ch2-weather-mcq',
    title: 'Class 7 Social Science Ch 2: Understanding the Weather (25 Bilingual MCQs)',
    subtitle: 'NCERT Exploring Society Part 1 (gees102.pdf): Troposphere, 5 Weather Elements, IMD 1875 & Motto, Khardung La 650mb, Anemometer, Hygrometer & AWS Sikkim',
    category: 'history',
    categoryLabel: 'Class 7 Social Science',
    badge: '25 MCQs • Dual Lang',
    url: '/class7-social-science-ch2-understanding-weather-mcq.html',
    icon: <Compass size={20} />,
    accentColor: '#0284c7'
  },
  {
    id: 'nios-class10-english-202-l1-snake-bite',
    title: 'NIOS Class 10 English (202) • Lesson 1: Snake Bite (Complete Question Bank)',
    subtitle: 'By Shankar (L_1.pdf): 31 Questions, Intext 1.1-1.3, Regular/Irregular Verbs, -ly Adverbs, 6-Option Shuffled Quiz & Auto-Hide Fill-in-the-Blanks',
    category: 'cs',
    categoryLabel: 'NIOS Secondary (Class 10)',
    badge: '31 Qs • 6 Options + Blanks',
    url: '/nios-class10-english-202-lesson1-snake-bite-questions.html',
    icon: <BookOpen size={20} />,
    accentColor: '#6366f1'
  },
  {
    id: 'history-class12-ch7-vijayanagara',
    title: 'कक्षा 12 इतिहास अध्याय 7: एक साम्राज्य की राजधानी: विजयनगर (lhhs203.pdf)',
    subtitle: 'NCERT Textbook: संपूर्ण 26 पृष्ठों का 1-पृष्ठ-दर-पृष्ठ विस्तृत सारगर्भित नोट्स, मुख्य शब्दावली (अमर-नायक, गोपुरम, महानवमी डिब्बा) एवं 27+ बहुविकल्पीय प्रश्न',
    category: 'history',
    categoryLabel: 'Class 12 History',
    badge: '26 Pages • Notes & MCQs',
    url: '/history-class12-ch7-vijayanagara-page-by-page-notes-mcq.html',
    icon: <BookOpen size={20} />,
    accentColor: '#f59e0b'
  },
  {
    id: 'polscience-class12-ch1-fill-blanks',
    title: 'कक्षा 12 राजनीति विज्ञान अध्याय 1: दो ध्रुवीयता का अंत (रिक्त स्थान भरो + संकेत)',
    subtitle: 'NCERT Textbook (lhps101.pdf): बर्लिन दीवार, सोवियत प्रणाली, विघटन, शॉक थेरेपी, चेचन्या, भारत-रूस सम्बंध पर 27 संकेत-युक्त प्रश्न',
    category: 'history',
    categoryLabel: 'Class 12 Arts / Humanities',
    badge: 'Fill-in-the-Blanks + Hints',
    url: '/political-science-class12-ch1-fill-in-the-blanks.html',
    icon: <BookOpen size={20} />,
    accentColor: '#04aa6d'
  },
  {
    id: 'english-class6-poorvi-ch7-neem-baba',
    title: 'Class 6 English Poorvi Unit 3 Ch 7: Neem Baba (30 MCQs • 6 Options)',
    subtitle: 'By S.I. Farooqi: 6-option unpredictable MCQs with live Fisher-Yates shuffle covering dialogue, origin, linguistic names, remedies & personification',
    category: 'cs',
    categoryLabel: 'Class 6 English',
    badge: '6 Options • Live Shuffle',
    url: '/english-class6-poorvi-unit3-ch7-neem-baba-mcq.html',
    icon: <BookOpen size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'english-class7-poorvi-unit1-learning-together',
    title: 'Class 7 English Poorvi Unit 1: Learning Together (36 Bilingual MCQs & Blanks)',
    subtitle: 'Kamala Nair, Eliza Cook & Helen Keller: The Day the River Spoke, Try Again, Three Days to See, Prepositions vs Adverbs, Modals & Assistive Tech',
    category: 'cs',
    categoryLabel: 'Class 7 English',
    badge: '36 MCQs • Bilingual • Hints',
    url: '/english-class7-poorvi-unit1-learning-together-mcq.html',
    icon: <BookOpen size={20} />,
    accentColor: '#38bdf8'
  },
  {
    id: 'class6-7-english-comprehension-passage',
    title: 'Class 6 & 7 English: The Mighty Banyan Tree (Reading Comprehension Studio)',
    subtitle: 'NCERT Poorvi & Honeysuckle Aligned: Detailed Passage, Factual, Vocabulary (Synonyms/Antonyms), Grammar in Context & Bilingual Solutions',
    category: 'cs',
    categoryLabel: 'Class 7 & 6 English',
    badge: 'Comprehension Studio • Bilingual',
    url: '/class6-7-english-comprehension-passage.html',
    icon: <BookOpen size={20} />,
    accentColor: '#f59e0b'
  },
  {
    id: 'class6-7-easy-mcq-practice',
    title: 'Class 6 & 7 English Grammar: 30 Easy MCQs (Nouns, Verbs, Adjectives & Tenses)',
    subtitle: 'Bilingual practice test with Fisher-Yates shuffle, instant feedback, Hindi translations, and score analytics',
    category: 'cs',
    categoryLabel: 'Class 7 & 6 English',
    badge: '30 Easy MCQs • Bilingual',
    url: '/class6-7-easy-mcq-practice.html',
    icon: <BookOpen size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'ganita-class7-ch6-number-play-mcq',
    title: 'Class 7 Maths Ganita Prakash Ch 6: Number Play (20 Bilingual MCQs)',
    subtitle: 'Lo Shu 3x3 magic square, Khajuraho 4x4 Chautīsā Yantra, Virahāṅka numbers, parity rules & cryptarithms',
    category: 'math',
    categoryLabel: 'Class 7 Mathematics',
    badge: '20 MCQs • Magic Squares',
    url: '/ganita-class7-ch6-number-play-mcq.html',
    icon: <Calculator size={20} />,
    accentColor: '#0ea5e9'
  },
  {
    id: 'curiosity-class7-ch6-adolescence-worksheet',
    title: 'Class 7 Science Curiosity Ch 6: Adolescence (Interactive Worksheet & A5 Sheet)',
    subtitle: 'Growth spurts, voice box (Adam’s apple), hormonal regulation, hygiene & nutrition with print layout',
    category: 'science',
    categoryLabel: 'Class 7 Science',
    badge: 'Worksheet • Bilingual • A5 Print',
    url: '/curiosity-class7-ch6-adolescence-worksheet.html',
    icon: <Atom size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'hindi-class7-ch1-maa-kah-ek-kahani',
    title: 'Class 7 Hindi Malhar Ch 1: माँ, कह एक कहानी (मैथिलीशरण गुप्त)',
    subtitle: 'संवादपरक कविता: सिद्धार्थ एवं घायल हंस, अहिंसा एवं करुणा पर सम्पूर्ण अभ्यास प्रश्न एवं रिक्त स्थान',
    category: 'history',
    categoryLabel: 'Class 7 Hindi',
    badge: 'अभ्यास एवं रिक्त स्थान',
    url: '/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks.html',
    icon: <Scroll size={20} />,
    accentColor: '#ec4899'
  },
  // Science & Physics
  {
    id: 'physics-class12-55-3-1-solved',
    title: 'Class 12 Physics Board Exam 55/3/1 (Solved MCQs & Page 1 Guidelines)',
    subtitle: 'Official CBSE Paper (PQS3R, Set 1): Page 1 exam protocols, Section A MCQs (Kinetic Energy qE₀x, induced EMF, wave velocity 2×10⁸ m/s, lens combo, telescope) with KaTeX formulas',
    category: 'science',
    categoryLabel: 'Class 12 Physics',
    badge: 'Board Paper 55/3/1 • 12 MCQs',
    url: '/cbse-class12-physics-55-3-1-mcq-solutions.html',
    icon: <Atom size={20} />,
    accentColor: '#38bdf8'
  },
  {
    id: 'science-ch1-difficult-mcq',
    title: 'Class 10 Science Ch 1: Chemical Reactions (25 Difficult MCQs)',
    subtitle: 'High-difficulty HOTS & Competency bilingual MCQs with step-by-step scientific explanations & lab deductions',
    category: 'science',
    categoryLabel: 'Science & Chemistry',
    badge: '25 Difficult MCQs • HOTS',
    url: '/class10-science-ch1-chemical-reactions-difficult-mcq.html',
    icon: <Atom size={20} />,
    accentColor: '#2563eb'
  },
  {
    id: 'bio-kids-microbes',
    title: 'Microbes: The Invisible Superheroes! (Class 6 Fun Edition)',
    subtitle: 'Page-by-page kid storybook with cartoon mascots, curd/bread science, gowbar gas & interactive quiz',
    category: 'science',
    categoryLabel: 'Science & Biology',
    badge: 'Kids Illustrated • Pg-by-Pg',
    url: '/class12-biology-ch8-microbes-kids-edition.html',
    icon: <Sparkles size={20} />,
    accentColor: '#f59e0b'
  },
  {
    id: 'chem-c12-ch7-pages3-6',
    title: 'Class 12 Chemistry Ch 7: Ethers, IUPAC & 3D Geometry (25 Fill-ups)',
    subtitle: 'Pages 3 to 6: Symmetrical/Unsymmetrical ethers, full IUPAC tables, 3D bond angles (108.9°, 109°, 111.7°) & 25 interactive blanks',
    category: 'science',
    categoryLabel: 'Class 12 Chemistry',
    badge: 'Pages 3–6 • 25 Fill-ups',
    url: '/chemistry-class12-alcohols-phenols-ethers-page3-6.html?class=12&subject=c12-chemistry&book=part-2',
    icon: <Atom size={20} />,
    accentColor: '#0ea5e9'
  },
  {
    id: 'chem-c12-ch7-pages1-2',
    title: 'Class 12 Chemistry Ch 7: Alcohols & Phenols Classification (Pages 1 & 2)',
    subtitle: 'Pages 1 & 2: Primary, Secondary, Tertiary alcohols, allylic, benzylic, vinylic systems and 20 fill-in-the-blanks',
    category: 'science',
    categoryLabel: 'Class 12 Chemistry',
    badge: 'Pages 1–2 • Classification',
    url: '/chemistry-class12-alcohols-phenols-ethers-page1-2.html?class=12&subject=c12-chemistry&book=part-2',
    icon: <Atom size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'chem-ch8',
    title: 'Class 9 Science Ch 8: Journey Inside the Atom (50 MCQs)',
    subtitle: '50 Master Bilingual MCQs with instant explanations (Acharya Kanada to Subatomic Particles)',
    category: 'science',
    categoryLabel: 'Science & Chemistry',
    badge: '50 MCQs • Bilingual',
    url: '/chapter-8-journey-inside-the-atom-mcq.html',
    icon: <Atom size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'chem-ch8-notes',
    title: 'Class 9 Science Ch 8: Pagewise Notes, Fill-in-Blanks & Matching',
    subtitle: 'Page-by-page textbook notes, interactive fill-ups with hints, and match-the-following practice',
    category: 'science',
    categoryLabel: 'Science & Chemistry',
    badge: 'Notes + Fill-ups + Matching',
    url: '/chapter-8-journey-inside-the-atom-notes-and-practice.html',
    icon: <BookOpen size={20} />,
    accentColor: '#06b6d4'
  },
  {
    id: 'bio-ch8',
    title: 'Class 12 Biology Ch 8: Microbes in Human Welfare',
    subtitle: 'NEET & Board exam focused bilingual MCQs on fermentation, sewage, biogas & biocontrol',
    category: 'science',
    categoryLabel: 'Science & Biology',
    badge: 'NEET / Board Exam',
    url: '/quiz.html?chapter=bio8',
    icon: <Sparkles size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'bio-notes',
    title: 'Class 12 Biology Notes: Microbes in Human Welfare',
    subtitle: 'Complete textbook summary, flowcharts, chemical equations and key takeaways',
    category: 'science',
    categoryLabel: 'Science & Biology',
    badge: 'Study Notes',
    url: '/bio-notes.html',
    icon: <BookOpen size={20} />,
    accentColor: '#e5c158'
  },
  {
    id: 'phy-ch7-fill',
    title: 'Class 12 Physics Ch 7: Alternating Current Fill-in-the-Blanks',
    subtitle: 'Page-by-page paragraph practice on RMS values, phasor diagrams, resonance & transformers',
    category: 'science',
    categoryLabel: 'Physics',
    badge: 'Paragraph Fill-ups',
    url: '/physics-ch7-alternating-current-fill-in-the-blanks.html',
    icon: <Zap size={20} />,
    accentColor: '#f59e0b'
  },
  {
    id: 'phy-ch7-num',
    title: 'Class 12 Physics Ch 7: AC Numericals (Easy to Difficult)',
    subtitle: 'Step-by-step calculation practice on LCR series circuit impedance, Q-factor & power factor',
    category: 'science',
    categoryLabel: 'Physics',
    badge: 'Step Numericals',
    url: '/physics-ch7-numericals-easy-to-difficult.html',
    icon: <Zap size={20} />,
    accentColor: '#ef4444'
  },

  // Mathematics
  {
    id: 'math-ganita-manjari-ch1-num',
    title: 'Class 9 Ganita Manjari Ch 1: Coordinate Geometry Numericals',
    subtitle: '17 step-by-step numerical calculation problems on distance formula, reflections, missing vertices, midpoints & trisection',
    category: 'math',
    categoryLabel: 'Mathematics',
    badge: '17 Step Numericals • Class 9',
    url: '/class9-ganita-manjari-ch1-coordinate-geometry-numericals.html',
    icon: <Calculator size={20} />,
    accentColor: '#2563eb'
  },
  {
    id: 'math-ch4-data-mcq',
    title: 'Class 6 Ganita Prakash Ch 4: Data Handling MCQs',
    subtitle: '50 Bilingual MCQs on Tally Marks, Pictographs, Bar Graphs & Real-life Statistics',
    category: 'math',
    categoryLabel: 'Mathematics',
    badge: '50 MCQs • Class 6',
    url: '/ganita-prakash-ch4-data-handling-mcq.html',
    icon: <Calculator size={20} />,
    accentColor: '#3b82f6'
  },
  {
    id: 'math-ch4-data-num',
    title: 'Class 6 Ganita Prakash Ch 4: Data Handling Numericals',
    subtitle: '50 pure-calculation arithmetic problems on Range, Scales, Unit heights & Bar totals',
    category: 'math',
    categoryLabel: 'Mathematics',
    badge: '50 Numericals Only',
    url: '/ganita-prakash-ch4-data-handling-numericals-only.html',
    icon: <Calculator size={20} />,
    accentColor: '#06b6d4'
  },
  {
    id: 'nios-math-ch1-fill',
    title: 'NIOS Class 10 Math Ch 1: Number Systems Fill-in-the-Blanks',
    subtitle: 'Exponents, surds, rationalisation, and algebraic identities page-by-page test',
    category: 'math',
    categoryLabel: 'Mathematics',
    badge: 'NIOS Class 10',
    url: '/nios-math-ch1-number-systems-fill-in-the-blanks.html',
    icon: <Calculator size={20} />,
    accentColor: '#6366f1'
  },
  {
    id: 'nios-math-ch1-num',
    title: 'NIOS Class 10 Math Ch 1: Numericals Only Practice',
    subtitle: '100% calculation-driven step problems for rational indices and radical simplification',
    category: 'math',
    categoryLabel: 'Mathematics',
    badge: 'Numericals Only',
    url: '/nios-math-ch1-numericals-only-fill-in-the-blanks.html',
    icon: <Calculator size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'math-ch4-complex',
    title: 'Class 11 Mathematics Ch 4: Complex Numbers',
    subtitle: 'Interactive practice questions on imaginary numbers, modulus, argument & quadratic roots',
    category: 'math',
    categoryLabel: 'Mathematics',
    badge: 'Class 11 CBSE',
    url: '/quiz.html?chapter=math4',
    icon: <Calculator size={20} />,
    accentColor: '#3b82f6'
  },

  // Commerce & Financial Accounting
  {
    id: 'acc-cash-book-numericals-studio',
    title: 'Financial Accounting: Cash Book Numericals Studio & Ledger Validator',
    subtitle: 'Interactive calculation problems on Single Column, Two-Column (Cash & Bank with Contra), Overdrafts & Imprest Petty Cash Book',
    category: 'commerce',
    categoryLabel: 'Financial Accounting',
    badge: 'Cash Book Studio • keac104',
    url: '/financial-accounting-cash-book-numericals-studio.html',
    icon: <FileSpreadsheet size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'acc-ch3-textbook-cases',
    title: 'Class 11 Accounting Ch 3: Master Textbook Cases (keac103.pdf)',
    subtitle: 'Direct test cases based on Example 1 (Dual Impact), Illustration 1 (Equation Matrix), Soraj Mart, & Sanjana Ledgers',
    category: 'commerce',
    categoryLabel: 'Financial Accounting',
    badge: 'Textbook Cases • keac103',
    url: '/financial-accounting-ch3-textbook-cases-test.html',
    icon: <FileSpreadsheet size={20} />,
    accentColor: '#10b981'
  },
  {
    id: 'acc-ch3-notes-num',
    title: 'Class 11 Accounting Ch 3: Advanced Pagewise Numericals (keac103.pdf)',
    subtitle: 'Olympiad & CA-level pagewise study notes, 40 strict calculation problems (no hints), and 50 matching pairs',
    category: 'commerce',
    categoryLabel: 'Financial Accounting',
    badge: 'Pagewise • No Hints • keac103',
    url: '/financial-accounting-ch3-notes-and-numericals.html',
    icon: <BookOpen size={20} />,
    accentColor: '#e5b842'
  },
  {
    id: 'acc-ch3-numericals',
    title: 'Class 11 Financial Accounting Ch 3: 50 Numericals Test (keac103.pdf)',
    subtitle: '50 pure-calculation problems on Accounting Equations (A = L + C), Opening/Closing Capital, Discounts & Ledger Balances',
    category: 'commerce',
    categoryLabel: 'Financial Accounting',
    badge: '50 Numericals • keac103',
    url: '/financial-accounting-ch3-recording-transactions-numericals-only.html',
    icon: <Calculator size={20} />,
    accentColor: '#e5b842'
  },
  {
    id: 'acc-ch4-subsidiary',
    title: 'Class 11 Financial Accounting Ch 4: Special Purpose Books',
    subtitle: 'Topic-by-topic interactive study with MCQs on Cash Book, Purchases/Sales Books & Journal Proper',
    category: 'commerce',
    categoryLabel: 'Financial Accounting',
    badge: 'NCERT Ch 4 • Bilingual',
    url: '/financial-accounting-ch4-subsidiary-books.html',
    icon: <FileSpreadsheet size={20} />,
    accentColor: '#a855f7'
  },
  {
    id: 'acc-journal-ledger',
    title: 'Financial Accounting: Journal to Ledger Accounts',
    subtitle: 'Complete masterclass with 10 practical transactions, 12 balanced ledger accounts & Trial Balance',
    category: 'commerce',
    categoryLabel: 'Financial Accounting',
    badge: '10-Step Masterclass',
    url: '/journal-to-ledger-posting.html',
    icon: <FileSpreadsheet size={20} />,
    accentColor: '#ec4899'
  },
  {
    id: 'acc-ts-grewal',
    title: 'T.S. Grewal Accountancy: Accounting Equation',
    subtitle: 'Assets = Liabilities + Capital interactive solver, numerical examples, and ledger rules',
    category: 'commerce',
    categoryLabel: 'Financial Accounting',
    badge: 'Accounting Equation',
    url: '/accountancy/',
    icon: <FileSpreadsheet size={20} />,
    accentColor: '#a855f7'
  },

  // History & Social Sciences
  {
    id: 'hist-ch5-travellers',
    title: 'Class 12 History Theme 5: Through the Eyes of Travellers',
    subtitle: 'Bilingual paragraph fill-in-the-blanks on Al-Biruni, Ibn Battuta and François Bernier',
    category: 'history',
    categoryLabel: 'History',
    badge: 'CBSE Class 12',
    url: '/history-ch5-travellers-fill-in-the-blanks.html',
    icon: <Scroll size={20} />,
    accentColor: '#8b5cf6'
  },
  {
    id: 'hist-ch4-orders',
    title: 'Class 11 History Theme 4: The Three Orders',
    subtitle: 'Feudal society, clergy, nobility and peasantry paragraph-wise fill-in-the-blanks',
    category: 'history',
    categoryLabel: 'History',
    badge: 'CBSE Class 11',
    url: '/history-fill-in-the-blanks.html',
    icon: <Scroll size={20} />,
    accentColor: '#d97706'
  },
  {
    id: 'hist-ch4-quiz',
    title: 'Class 11 History Theme 4: Three Orders MCQs',
    subtitle: 'Interactive multiple choice questions with timer and instant feedback',
    category: 'history',
    categoryLabel: 'History',
    badge: 'MCQ Quiz',
    url: '/quiz.html?chapter=hist4',
    icon: <Scroll size={20} />,
    accentColor: '#d97706'
  }
];

interface QuizzesModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

export const QuizzesModal: React.FC<QuizzesModalProps> = ({ isOpen, onClose, isDarkMode = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const filteredQuizzes = ALL_QUIZZES.filter(quiz => {
    const matchesCategory = selectedCategory === 'all' || quiz.category === selectedCategory;
    const matchesSearch = 
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(2, 6, 23, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '88vh',
          background: isDarkMode ? '#0b1329' : '#ffffff',
          border: isDarkMode ? '1.5px solid rgba(229, 193, 88, 0.3)' : '1.5px solid #e2e8f0',
          borderRadius: '24px',
          boxShadow: isDarkMode ? '0 25px 60px rgba(0, 0, 0, 0.8)' : '0 20px 50px rgba(10, 34, 64, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{
          padding: '20px 24px 16px',
          borderBottom: isDarkMode ? '1px solid #1e293b' : '1px solid #f1f5f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '14px',
              background: 'rgba(79, 70, 229, 0.12)',
              border: '1px solid rgba(79, 70, 229, 0.3)',
              color: '#4f46e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: 900,
                color: isDarkMode ? '#ffffff' : '#0f172a',
                letterSpacing: '-0.02em'
              }}>
                Interactive Quizzes & Practice Hub
              </h2>
              <p style={{
                margin: '2px 0 0',
                fontSize: '0.78rem',
                color: isDarkMode ? '#94a3b8' : '#64748b'
              }}>
                17+ chapter-wise practice tests, bilingual MCQs, step numericals & accounting masterclasses
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: isDarkMode ? '#1e293b' : '#f1f5f9',
              border: 'none',
              borderRadius: '12px',
              padding: '8px',
              color: isDarkMode ? '#cbd5e1' : '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div style={{
          padding: '12px 24px',
          background: isDarkMode ? '#070d1e' : '#f8fafc',
          borderBottom: isDarkMode ? '1px solid #1e293b' : '1px solid #f1f5f9',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {/* Search bar */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search size={16} style={{
              position: 'absolute',
              left: '12px',
              color: isDarkMode ? '#64748b' : '#94a3b8'
            }} />
            <input
              type="text"
              placeholder="Search quizzes by chapter, topic, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 12px 9px 36px',
                borderRadius: '12px',
                fontSize: '0.84rem',
                background: isDarkMode ? '#131e3a' : '#ffffff',
                border: isDarkMode ? '1px solid #1e293b' : '1px solid #cbd5e1',
                color: isDarkMode ? '#ffffff' : '#0f172a',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Chips */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '2px'
          }}>
            {[
              { id: 'all', label: 'All Lessons (17)' },
              { id: 'science', label: '🔬 Science & Physics' },
              { id: 'math', label: '📐 Mathematics' },
              { id: 'commerce', label: '📊 Accounting & Commerce' },
              { id: 'history', label: '📜 History' },
              { id: 'cs', label: '💻 Computer Science' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '5px 12px',
                  borderRadius: '10px',
                  fontSize: '0.74rem',
                  fontWeight: selectedCategory === cat.id ? 800 : 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: selectedCategory === cat.id ? '1px solid #4f46e5' : (isDarkMode ? '1px solid #1e293b' : '1px solid #e2e8f0'),
                  background: selectedCategory === cat.id ? 'rgba(79, 70, 229, 0.15)' : (isDarkMode ? '#0f172a' : '#ffffff'),
                  color: selectedCategory === cat.id ? '#4f46e5' : (isDarkMode ? '#94a3b8' : '#64748b'),
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quizzes List */}
        <div style={{
          padding: '16px 24px',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '12px'
        }}>
          {filteredQuizzes.length === 0 ? (
            <div style={{
              gridColumn: '1 / -1',
              padding: '40px 20px',
              textAlign: 'center',
              color: isDarkMode ? '#64748b' : '#94a3b8'
            }}>
              No quizzes match your search. Try a different keyword!
            </div>
          ) : (
            filteredQuizzes.map((quiz) => (
              <a
                key={quiz.id}
                href={quiz.url}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: '16px',
                  background: isDarkMode ? '#131e3a' : '#f8fafc',
                  border: isDarkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4f46e5';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isDarkMode ? '#1e293b' : '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: `rgba(79, 70, 229, 0.08)`,
                  color: quiz.accentColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  {quiz.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '6px',
                    marginBottom: '4px'
                  }}>
                    <span style={{
                      fontSize: '0.66rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: quiz.accentColor,
                      letterSpacing: '0.04em'
                    }}>
                      {quiz.categoryLabel}
                    </span>
                    <span style={{
                      fontSize: '0.64rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '6px',
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                      color: isDarkMode ? '#cbd5e1' : '#475569'
                    }}>
                      {quiz.badge}
                    </span>
                  </div>

                  <h3 style={{
                    margin: '0 0 3px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    color: isDarkMode ? '#ffffff' : '#0f172a',
                    lineHeight: 1.3
                  }}>
                    {quiz.title}
                  </h3>

                  <p style={{
                    margin: 0,
                    fontSize: '0.74rem',
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                    lineHeight: 1.35,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {quiz.subtitle}
                  </p>
                </div>

                <ExternalLink size={14} style={{ color: isDarkMode ? '#475569' : '#94a3b8', flexShrink: 0, marginTop: '4px' }} />
              </a>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '12px 24px',
          background: isDarkMode ? '#070d1e' : '#f1f5f9',
          borderTop: isDarkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontSize: '0.74rem',
          color: isDarkMode ? '#94a3b8' : '#64748b'
        }}>
          <span>✨ 100% Free Open Access • No sign-in required</span>
          <a
            href="/quiz.html"
            style={{
              color: '#4f46e5',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>Open Full Quiz Engine →</span>
          </a>
        </div>
      </div>
    </div>
  );
};
