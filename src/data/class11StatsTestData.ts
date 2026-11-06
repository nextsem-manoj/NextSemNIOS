export interface TestQuestion {
  id: string;
  chapterNumber: number;
  chapterCode: string;
  chapterTitle: string;
  questionNo: number;
  questionType: 'MCQ' | 'Assertion-Reason' | 'Numerical' | 'Case-Based';
  questionText: string;
  questionTextHinglish: string;
  options: string[];
  optionsHinglish: string[];
  correctIndex: number;
  ncertReference: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  detailedSolutionHinglish: string;
  formulaOrConcept?: string;
  tags: string[];
}

export const CLASS_11_STATS_TEST_QUESTIONS: TestQuestion[] = [
  // =========================================================================
  // CHAPTER 1: INTRODUCTION (kest101) - अर्थशास्त्र का परिचय
  // =========================================================================
  {
    id: 'stats-ch1-q1',
    chapterNumber: 1,
    chapterCode: 'kest101',
    chapterTitle: 'Chapter 1: Introduction (अर्थशास्त्र का परिचय)',
    questionNo: 1,
    questionType: 'MCQ',
    questionText: 'According to Alfred Marshall, one of the founders of modern economics, what is the core definition of Economics?',
    questionTextHinglish: 'Modern Economics ke founder Alfred Marshall ke according, Economics (अर्थशास्त्र) ki exact definition kya hai?',
    options: [
      'The study of wealth accumulation and state treasury',
      'The study of man in the ordinary business of life',
      'The science of dynamic mathematical models only',
      'The study of international trade balances and tariffs'
    ],
    optionsHinglish: [
      'Tijori aur daulat jama karne ka study',
      'Manushya ke aam rozmarra ke jeevan (ordinary business of life) ka study',
      'Sirf hard mathematical formulas aur calculus ka study',
      'International trade aur export-import taxes ka study'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Ch 1, Page 1',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Alfred Marshall ne Economics ko define kiya hai: "the study of man in the ordinary business of life". Iska matlab hai ki aam insaan kaise kamata hai, kaise kharch karta hai aur apni zarooratein poori karta hai, usi economic behavior ki study ko economics kehte hain.',
    formulaOrConcept: 'Alfred Marshall: "Study of man in the ordinary business of life"',
    tags: ['Marshall Definition', 'Basics', 'Chapter 1']
  },
  {
    id: 'stats-ch1-q2',
    chapterNumber: 1,
    chapterCode: 'kest101',
    chapterTitle: 'Chapter 1: Introduction (अर्थशास्त्र का परिचय)',
    questionNo: 2,
    questionType: 'MCQ',
    questionText: 'What is the root cause behind all economic problems in human society?',
    questionTextHinglish: 'Poori duniya mein saari Economic Problems (आर्थिक समस्याओं) ki asli jad (root cause) kya hai?',
    options: [
      'Lack of paper currency in central banks',
      'Excess production of agricultural crops in villages',
      'Scarcity of resources having alternative uses',
      'High rates of GST and corporate taxes'
    ],
    optionsHinglish: [
      'Banks ke paas currency notes ki kami hona',
      'Desh mein zarurat se zyada anaaj paida ho jana',
      'Resources (संसाधनों) ki kami (Scarcity) aur unke vikalpik upyog (alternative uses)',
      'Government dwara GST rate badha dena'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Ch 1, Page 2',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'NCERT clearly batata hai: "Scarcity is the root of all economic problems". Humare paas Aladdin ka magic lamp nahi hai! Hamari wants (icchayein) unlimited hain jabki resources (paise, zameen, time) limited hain aur unke multiple uses hain. Isliye hume choice (chunaav) karni padti hai.',
    formulaOrConcept: 'Unlimited Wants + Limited Scarce Resources = Economic Problem of Choice',
    tags: ['Scarcity', 'Choice', 'Chapter 1']
  },
  {
    id: 'stats-ch1-q3',
    chapterNumber: 1,
    chapterCode: 'kest101',
    chapterTitle: 'Chapter 1: Introduction (अर्थशास्त्र का परिचय)',
    questionNo: 3,
    questionType: 'MCQ',
    questionText: 'A doctor treating patients for fees, or a taxi driver transporting passengers for money, is classified in economics as a/an:',
    questionTextHinglish: 'Ek doctor jo fees lekar mareez ka ilaaj karta hai ya ek taxi driver jo ride dekar paise kamata hai, Economics mein kya kehlata hai?',
    options: [
      'Producer (उत्पादक / सेवा प्रदाता)',
      'Consumer (उपभोक्ता)',
      'Investor (निवेशक)',
      'Non-working Dependent (आश्रित)'
    ],
    optionsHinglish: [
      'Producer (उत्पादक / सेवा प्रदाता)',
      'Consumer (उपभोक्ता)',
      'Investor (निवेशक)',
      'Non-working Dependent (आश्रित)'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Ch 1, Page 1-2',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Jab aap koi goods manufacture karte hain (jaise farmer ya factory owner) ya services provide karte hain (jaise doctor, teacher, taxi driver, porter) jisse monetary gain hota hai, toh aapko Economics mein "Producer" kaha jata hai.',
    formulaOrConcept: 'Goods manufacture karna ya Services provide karna = Producer',
    tags: ['Economic Roles', 'Producer', 'Chapter 1']
  },
  {
    id: 'stats-ch1-q4',
    chapterNumber: 1,
    chapterCode: 'kest101',
    chapterTitle: 'Chapter 1: Introduction (अर्थशास्त्र का परिचय)',
    questionNo: 4,
    questionType: 'MCQ',
    questionText: 'Economics is conventionally studied under which three fundamental branches?',
    questionTextHinglish: 'Economics ko traditional roop se kin 3 mukhya bhagon (divisions) mein baanta gaya hai?',
    options: [
      'Inflation, Taxation and Auditing',
      'Monopoly, Duopoly and Perfect Competition',
      'Banking, Insurance and Stock Market',
      'Consumption, Production and Distribution'
    ],
    optionsHinglish: [
      'Mehangai, Tax aur Audit',
      'Monopoly market, Duopoly aur Perfect competition',
      'Bank, Bima aur Stock market',
      'Upbhog (Consumption), Utpadan (Production) aur Vitaran (Distribution)'
    ],
    correctIndex: 3, // D
    ncertReference: 'NCERT Ch 1, Page 3',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'NCERT ke mutabik Economics ke 3 conventional pillars hain:\n1. Consumption: Consumer apne limited budget mein kya aur kitna khareedega.\n2. Production: Producer market ke liye kya aur kaise manufacture karega.\n3. Distribution: Desh ki kul aamdani (GDP) Rent, Wages, Interest aur Profit ke roop mein kaise bategi.',
    formulaOrConcept: '3 Divisions: Consumption + Production + Distribution',
    tags: ['Divisions of Economics', 'Core Theory', 'Chapter 1']
  },
  {
    id: 'stats-ch1-q5',
    chapterNumber: 1,
    chapterCode: 'kest101',
    chapterTitle: 'Chapter 1: Introduction (अर्थशास्त्र का परिचय)',
    questionNo: 5,
    questionType: 'Case-Based',
    questionText: 'A father calculated the average depth of a river as 3.5 ft and average height of his family as 4.2 ft, so he tried to cross on foot, leading to his children drowning. What vital lesson does NCERT highlight here?',
    questionTextHinglish: 'Ek pitaji ne nadi ki average gehrai (3.5 ft) aur parivar ki average height (4.2 ft) dekhkar paidal nadi cross karne ka faisla kiya, par gehre gaddhe mein bachhe doob gaye. Is NCERT story ka main moral kya hai?',
    options: [
      'Average nikalna mathematics mein allowed nahi hai',
      'Statistical methods are NO substitute for common sense! (Aankh band karke sirf average par bharosa mat karo)',
      'Nadi ki gehrai ko numbers mein calculate nahi kiya ja sakta',
      'Average sirf factory ke data par hi apply hota hai'
    ],
    optionsHinglish: [
      'Average nikalna mathematics mein allowed nahi hai',
      'Statistical methods are NO substitute for common sense! (Aankh band karke sirf average par bharosa mat karo)',
      'Nadi ki gehrai ko numbers mein calculate nahi kiya ja sakta',
      'Average sirf factory ke data par hi apply hota hai'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Ch 1, Page 7 Box',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'NCERT Page 7 par golden quote hai: "Statistical methods are no substitute for common sense!". Averages poore group ka ek summary figure dete hain, lekin woh individual extreme values (jaise nadi ka 8 ft gehra gaddha ya chote bachhe ki 3 ft height) ko chupaa dete hain. Isliye statistics ke saath common sense lagana zaroori hai!',
    formulaOrConcept: 'Statistics + Common Sense = Right Decisions',
    tags: ['Case Study', 'Averages Warning', 'Chapter 1']
  },
  {
    id: 'stats-ch1-q6',
    chapterNumber: 1,
    chapterCode: 'kest101',
    chapterTitle: 'Chapter 1: Introduction (अर्थशास्त्र का परिचय)',
    questionNo: 6,
    questionType: 'MCQ',
    questionText: 'Which of the following is an example of Qualitative Data (Attribute) instead of Quantitative Data?',
    questionTextHinglish: 'Inme se kaunsa ek Qualitative Data (Gunaatmak data / Attribute) ka example hai jise direct numbers mein measure nahi kiya ja sakta?',
    options: [
      'Worker skill level categorized as unskilled, skilled, or highly skilled',
      'Rice production in India reached 106.5 million tonnes',
      'Daily wage of a worker is ₹450 per day',
      'Population of India in 2011 was 121.09 crore'
    ],
    optionsHinglish: [
      'Kisi worker ka skill level: Unskilled, Skilled ya Highly skilled hona',
      'Desh mein chawal ka utpadan 106.5 million tonnes hua',
      'Kisan ki daily majdoori ₹450 hai',
      'India ki 2011 mein population 121.09 crore thi'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Ch 1, Page 5',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Skill level, Gender (Male/Female), Health status (Healthy/Sick), Beauty, Intelligence qualitative attributes hain jinhe direct meter/kg/rupees mein nahi naapa jata balki categories ya degrees mein record kiya jata hai.',
    formulaOrConcept: 'Qualitative (Attributes) vs Quantitative (Numerical measurements)',
    tags: ['Qualitative Data', 'Attributes', 'Chapter 1']
  },
  {
    id: 'stats-ch1-q7',
    chapterNumber: 1,
    chapterCode: 'kest101',
    chapterTitle: 'Chapter 1: Introduction (अर्थशास्त्र का परिचय)',
    questionNo: 7,
    questionType: 'MCQ',
    questionText: 'True or False: "Statistics solves economic problems."',
    questionTextHinglish: 'NCERT Exercise 1(ii): "Statistics solves economic problems." Kya yeh statement True hai ya False?',
    options: [
      'True, statistics directly eradicates poverty and joblessness',
      'True, because economists rely on statistical surveys',
      'False, statistics only provides facts & tools to analyse problems and frame policies, but does not solve them on its own',
      'False, because statistics has no relation with economics'
    ],
    optionsHinglish: [
      'True, statistics se gareebi aur berozgari apne aap khatam ho jaati hai',
      'True, kyunki statistical formulas se sab kuch theek ho jata hai',
      'False, statistics problem ko samajhne aur sahi policy banane ka tool hai, par problem solve ground actions aur implementation se hoti hai',
      'False, kyunki statistics ka economics se koi lena dena nahi hai'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Ch 1, Page 8 (Ex. 1.ii)',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Statement FALSE hai. Statistics ek diagnostic aur analytical tool hai jo problem ki gehrai aur causes ko numbers mein batata hai taaki sarkar policies bana sake. Problem ko ground par implement karke government aur society solve karti hai, statistics akele nahi.',
    formulaOrConcept: 'Statistics is a tool to analyse and guide policy, not a magic solution.',
    tags: ['NCERT Exercise', 'True/False', 'Chapter 1']
  },

  // =========================================================================
  // CHAPTER 2: COLLECTION OF DATA (kest102) - आंकड़ों का संकलन
  // =========================================================================
  {
    id: 'stats-ch2-q8',
    chapterNumber: 2,
    chapterCode: 'kest102',
    chapterTitle: 'Chapter 2: Collection of Data (आंकड़ों का संकलन)',
    questionNo: 8,
    questionType: 'MCQ',
    questionText: 'Data collected by an investigator from respondents directly for the first time during an enquiry is called:',
    questionTextHinglish: 'Jab koi investigator kisi survey ke liye first-hand khud jaakar ya direct field se pehli baar data collect karta hai, toh use kya kehte hain?',
    options: [
      'Secondary Data (द्वितीयक आंकड़े)',
      'Tertiary Data (तृतीयक आंकड़े)',
      'Sample Frame Data',
      'Primary Data (प्राथमिक आंकड़े)'
    ],
    optionsHinglish: [
      'Secondary Data (द्वितीयक आंकड़े)',
      'Tertiary Data (तृतीयक आंकड़े)',
      'Sample Frame Data',
      'Primary Data (प्राथमिक आंकड़े)'
    ],
    correctIndex: 3, // D
    ncertReference: 'NCERT Ch 2, Page 10',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Primary data woh data hota hai jo researcher ya investigator khud direct enquiry conduct karke pehli baar original source se ikattha karta hai. Secondary data kisi dusri agency/published report se liya jata hai.',
    formulaOrConcept: 'First-hand original collection = Primary Data',
    tags: ['Primary Data', 'Data Collection', 'Chapter 2']
  },
  {
    id: 'stats-ch2-q9',
    chapterNumber: 2,
    chapterCode: 'kest102',
    chapterTitle: 'Chapter 2: Collection of Data (आंकड़ों का संकलन)',
    questionNo: 9,
    questionType: 'MCQ',
    questionText: 'Which of the following represents a POOR question in a questionnaire due to double negative / biased phrasing?',
    questionTextHinglish: 'Questionnaire (प्रश्नावली) design karte waqt inme se kaunsa question ek POOR question maana jayega kyunki isme biased / double negative language hai?',
    options: [
      'How much do you spend on books in a month?',
      'Wouldn’t you be opposed to an increase in the price of petrol? ("Don\'t you think...")',
      'Is the electricity supply in your locality regular?',
      'What is your monthly household expenditure?'
    ],
    optionsHinglish: [
      'Aap har mahine kitabo par kitna kharch karte hain?',
      'Kya aap petrol ke daam badhne ke khilaaf nahi honge? ("Wouldn\'t you be opposed...")',
      'Kya aapke area mein bijli regular aati hai?',
      'Aapke parivar ka monthly kharcha kitna hai?'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Ch 2, Page 11-12',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Questions jo "Wouldn\'t you" ya "Don\'t you" se start hote hain unme leading bias aur double-negative hota hai jo respondent ko ek fixed answer dene ke liye push karta hai. NCERT rule: Questionnaire humesha neutral, clear aur unbiased hona chahiye.',
    formulaOrConcept: 'Questionnaire Rule: Avoid leading questions and double negatives!',
    tags: ['Questionnaire Design', 'Biased Questions', 'Chapter 2']
  },
  {
    id: 'stats-ch2-q10',
    chapterNumber: 2,
    chapterCode: 'kest102',
    chapterTitle: 'Chapter 2: Collection of Data (आंकड़ों का संकलन)',
    questionNo: 10,
    questionType: 'MCQ',
    questionText: 'What is the purpose of conducting a "Pilot Survey" (Pre-testing) before the main survey?',
    questionTextHinglish: 'Main survey start karne se pehle ek chote group par "Pilot Survey" (Pre-testing) kyun karwaya jata hai?',
    options: [
      'Prashnavali ki galtiyan dhoondhne, questions ki suitability jaanchne aur time/cost estimate karne ke liye',
      'Airline ke pilot ki training lene ke liye',
      'Taaki main survey karne ki bilkul zarurat hi na pade',
      'Desh ki aadhi aabaadi ka final census publish karne ke liye'
    ],
    optionsHinglish: [
      'Prashnavali ki galtiyan dhoondhne, questions ki suitability jaanchne aur time/cost estimate karne ke liye',
      'Airline ke pilot ki training lene ke liye',
      'Taaki main survey karne ki bilkul zarurat hi na pade',
      'Desh ki aadhi aabaadi ka final census publish karne ke liye'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Ch 2, Page 14',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Pilot Survey questionnaire ka ek dry-run ya pre-test hota hai. Isse pata chalta hai ki koi question confusing toh nahi hai, enumerators sahi se pooch pa rahe hain ya nahi, aur main survey mein kitna samay aur kharcha aayega.',
    formulaOrConcept: 'Pilot Survey = Questionnaire Pre-testing & Feasibility Check',
    tags: ['Pilot Survey', 'Survey Methods', 'Chapter 2']
  },
  {
    id: 'stats-ch2-q11',
    chapterNumber: 2,
    chapterCode: 'kest102',
    chapterTitle: 'Chapter 2: Collection of Data (आंकड़ों का संकलन)',
    questionNo: 11,
    questionType: 'Numerical',
    questionText: 'In a group of 5 farmers, true average income is ₹600. A sample of 2 farmers gives an estimated average income of ₹550. What is the sampling error?',
    questionTextHinglish: '5 kisano ki actual average income ₹600 hai. Ek 2 kisano ke sample se estimated income ₹550 aayi. Sampling Error (प्रतिचयन त्रुटि) kitni hogi?',
    options: [
      '₹100',
      '₹550',
      '₹50 (₹600 - ₹550)',
      '₹1150'
    ],
    optionsHinglish: [
      '₹100',
      '₹550',
      '₹50 (₹600 - ₹550)',
      '₹1150'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Ch 2, Page 18',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Sampling Error ka formula hota hai:\nSampling Error = Actual Population Parameter - Sample Estimate\n= ₹600 (True value) - ₹550 (Sample estimate) = ₹50.',
    formulaOrConcept: 'Sampling Error = Population Parameter - Sample Estimate',
    tags: ['Sampling Error', 'Numerical', 'Chapter 2']
  },
  {
    id: 'stats-ch2-q12',
    chapterNumber: 2,
    chapterCode: 'kest102',
    chapterTitle: 'Chapter 2: Collection of Data (आंकड़ों का संकलन)',
    questionNo: 12,
    questionType: 'Assertion-Reason',
    questionText: 'Assertion (A): Non-sampling errors are more serious than sampling errors.\nReason (R): Non-sampling errors cannot be minimized merely by increasing sample size and can occur even in a complete Census.',
    questionTextHinglish: 'Assertion (A): Non-sampling errors (गैर-प्रतिचयन त्रुटियां) Sampling errors se zyada serious hoti hain.\nReason (R): Non-sampling errors ko bada sample lekar bhi kam nahi kiya ja sakta aur yeh poore Census mein bhi ho sakti hain.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    optionsHinglish: [
      'Dono (A) aur (R) sahi hain aur (R) bilkul sahi explanation hai (A) ka',
      'Dono sahi hain par (R) sahi explanation nahi hai',
      '(A) sahi hai lekin (R) galat hai',
      '(A) galat hai lekin (R) sahi hai'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Ch 2, Page 18',
    difficulty: 'Hard',
    detailedSolutionHinglish: 'Dono statements 100% true hain. Sampling error ko sample size bada karke control kiya ja sakta hai. Lekin Non-sampling errors (jaise interviewer ki recording mistake 13 ko 31 likhna, ya logo ka jhooth bolna ya jawab na dena) Census tak mein ho jati hain aur sample bada karne se kam nahi hoti!',
    formulaOrConcept: 'Non-Sampling Errors > Sampling Errors in severity',
    tags: ['Assertion-Reason', 'Errors in Statistics', 'Chapter 2']
  },
  {
    id: 'stats-ch2-q13',
    chapterNumber: 2,
    chapterCode: 'kest102',
    chapterTitle: 'Chapter 2: Collection of Data (आंकड़ों का संकलन)',
    questionNo: 13,
    questionType: 'MCQ',
    questionText: 'The National Sample Survey (NSS / NSSO) publishes its nation-wide socio-economic survey reports in which quarterly journal?',
    questionTextHinglish: 'National Sample Survey (NSSO) apne nation-wide surveys ke results kis famous quarterly journal mein release karta hai?',
    options: [
      'Yojana (योजना)',
      'Kurukshetra (कुरुक्षेत्र)',
      'Arthashastra Review',
      'Sarvekshana (सर्वेक्षण)'
    ],
    optionsHinglish: [
      'Yojana (योजना)',
      'Kurukshetra (कुरुक्षेत्र)',
      'Arthashastra Review',
      'Sarvekshana (सर्वेक्षण)'
    ],
    correctIndex: 3, // D
    ncertReference: 'NCERT Ch 2, Page 19',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'NSSO (National Sample Survey Office) Bharat sarkar ka ek pramukh sansthan hai jo literacy, employment, health wagairah par surveys karta hai aur iska official quarterly journal "Sarvekshana" hai.',
    formulaOrConcept: 'NSSO Quarterly Journal = "Sarvekshana"',
    tags: ['NSSO', 'Sarvekshana', 'Agencies', 'Chapter 2']
  },
  {
    id: 'stats-ch2-q14',
    chapterNumber: 2,
    chapterCode: 'kest102',
    chapterTitle: 'Chapter 2: Collection of Data (आंकड़ों का संकलन)',
    questionNo: 14,
    questionType: 'Numerical',
    questionText: 'Suppose there are 10 students in a class. You want to select a random sample of 3 students. How many distinct samples are mathematically possible? [NCERT Ch 2 Ex. 10]',
    questionTextHinglish: 'Aapki class mein 10 students hain. Aapko unme se 3 students ka sample chuna hai. Total kitne different random samples banaye ja sakte hain? (NCERT Ch 2 Q10)',
    options: [
      '30 samples',
      '120 samples (10C3)',
      '1000 samples',
      '720 samples'
    ],
    optionsHinglish: [
      '30 samples',
      '120 samples (10C3)',
      '1000 samples',
      '720 samples'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Ch 2, Page 21 (Ex. 10)',
    difficulty: 'Hard',
    detailedSolutionHinglish: 'Combination formula 10C3 lagayenge:\nTotal Samples = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 samples banaye ja sakte hain.',
    formulaOrConcept: 'nCr = n! / (r! * (n - r)!) = 10C3 = 120',
    tags: ['Combinations', 'NCERT Exercise', 'Sampling', 'Chapter 2']
  },

  // =========================================================================
  // CHAPTER 3: ORGANISATION OF DATA (kest103) - आंकड़ों का संगठन
  // =========================================================================
  {
    id: 'stats-ch3-q15',
    chapterNumber: 3,
    chapterCode: 'kest103',
    chapterTitle: 'Chapter 3: Organisation of Data (आंकड़ों का संगठन)',
    questionNo: 15,
    questionType: 'MCQ',
    questionText: 'When data are classified with reference to geographical locations such as states, cities, or countries, it is known as:',
    questionTextHinglish: 'Jab data ko kisi geographical jagah jaise states, districts, sheher ya desh ke aadhar par classify kiya jata hai, toh use kya kehte hain?',
    options: [
      'Chronological (कालक्रमिक - samay ke hisaab se)',
      'Qualitative (गुणात्मक - attributes ke hisaab se)',
      'Spatial (स्थानिक - jagah/location ke hisaab se)',
      'Quantitative (मात्रात्मक - numbers ke hisaab se)'
    ],
    optionsHinglish: [
      'Chronological (कालक्रमिक - samay ke hisaab se)',
      'Qualitative (गुणात्मक - attributes ke hisaab se)',
      'Spatial (स्थानिक - jagah/location ke hisaab se)',
      'Quantitative (मात्रात्मक - numbers ke hisaab se)'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Ch 3, Page 25-26',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Spatial classification ka matlab hota hai geographical location (States/Countries/Cities) ke hisaab se group banana (jaise Punjab mein wheat yield vs Haryana mein yield). Time ke hisaab se classify karne ko Chronological Classification kehte hain.',
    formulaOrConcept: 'Classification: Geographical = Spatial; Time = Chronological',
    tags: ['Spatial Classification', 'Classification Types', 'Chapter 3']
  },
  {
    id: 'stats-ch3-q16',
    chapterNumber: 3,
    chapterCode: 'kest103',
    chapterTitle: 'Chapter 3: Organisation of Data (आंकड़ों का संगठन)',
    questionNo: 16,
    questionType: 'MCQ',
    questionText: 'Which of the following represents a DISCRETE Variable (खंडित चर)?',
    questionTextHinglish: 'Inme se kaunsa ek DISCRETE Variable (खंडित चर) ka example hai jo specific jumps leta hai aur fractional intermediate values nahi leta?',
    options: [
      'Ek parivar mein mobile phones ki sankhya (jaise 1, 2, 3...)',
      'Kisi student ki height (jaise 152.4 cm)',
      'Kisi khiladi ka vajan (jaise 68.75 kg)',
      'Running race poori karne mein laga time (jaise 54.32 seconds)'
    ],
    optionsHinglish: [
      'Ek parivar mein mobile phones ki sankhya (jaise 1, 2, 3...)',
      'Kisi student ki height (jaise 152.4 cm)',
      'Kisi khiladi ka vajan (jaise 68.75 kg)',
      'Running race poori karne mein laga time (jaise 54.32 seconds)'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Ch 3, Page 27-28',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Discrete Variable woh hota hai jo specific jumps/whole numbers leta hai (jaise 1, 2, 3 phones; aadha phone hona absurd hai). Continuous variable (height, weight, time) fraction aur infinite decimal values le sakta hai.',
    formulaOrConcept: 'Discrete = Jumps in values; Continuous = Takes any value in interval',
    tags: ['Discrete Variable', 'Continuous Variable', 'Chapter 3']
  },
  {
    id: 'stats-ch3-q17',
    chapterNumber: 3,
    chapterCode: 'kest103',
    chapterTitle: 'Chapter 3: Organisation of Data (आंकड़ों का संगठन)',
    questionNo: 17,
    questionType: 'Numerical',
    questionText: 'Calculate the Class Mid-Point (Class Mark) for the class interval 60–70:',
    questionTextHinglish: 'Class interval 60–70 ke liye Class Mark (वर्ग मध्य-बिंदु) calculate karo:',
    options: [
      '10 (Class Width)',
      '60 (Lower limit)',
      '130 (Sum)',
      '65 ((60 + 70)/2)'
    ],
    optionsHinglish: [
      '10 (Class Width)',
      '60 (Lower limit)',
      '130 (Sum)',
      '65 ((60 + 70)/2)'
    ],
    correctIndex: 3, // D
    ncertReference: 'NCERT Ch 3, Page 29',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Class Mark ka formula hota hai:\nClass Mark = (Upper Class Limit + Lower Class Limit) / 2\n= (70 + 60) / 2 = 130 / 2 = 65.',
    formulaOrConcept: 'Class Mark = (L1 + L2) / 2',
    tags: ['Class Mark', 'Formula', 'Numerical', 'Chapter 3']
  },
  {
    id: 'stats-ch3-q18',
    chapterNumber: 3,
    chapterCode: 'kest103',
    chapterTitle: 'Chapter 3: Organisation of Data (आंकड़ों का संगठन)',
    questionNo: 18,
    questionType: 'Numerical',
    questionText: 'When converting inclusive classes (800–899, 900–999) into continuous exclusive classes, what adjustment is made to class limits?',
    questionTextHinglish: 'Inclusive classes (jaise 800–899, 900–999) ko continuous (exclusive) banane ke liye limits mein kitna adjustment factor add/subtract kiya jata hai?',
    options: [
      '1.0 ghatao aur 1.0 jodo',
      'Lower limit se 0.5 ghatao (799.5) aur Upper limit mein 0.5 jodo (899.5)',
      '5.0 add karo',
      '0.1 se multiply karo'
    ],
    optionsHinglish: [
      '1.0 ghatao aur 1.0 jodo',
      'Lower limit se 0.5 ghatao (799.5) aur Upper limit mein 0.5 jodo (899.5)',
      '5.0 add karo',
      '0.1 se multiply karo'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Ch 3, Page 32',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Adjustment Factor = (Lower limit of 2nd class - Upper limit of 1st class) / 2 = (900 - 899) / 2 = 1 / 2 = 0.5.\nIsliye har class ki Lower limit se 0.5 subtract karte hain (800 - 0.5 = 799.5) aur Upper limit mein 0.5 add karte hain (899 + 0.5 = 899.5).',
    formulaOrConcept: 'Correction Factor = (L2 - U1) / 2 = 0.5',
    tags: ['Inclusive to Exclusive', 'Adjustment Factor', 'Chapter 3']
  },
  {
    id: 'stats-ch3-q19',
    chapterNumber: 3,
    chapterCode: 'kest103',
    chapterTitle: 'Chapter 3: Organisation of Data (आंकड़ों का संगठन)',
    questionNo: 19,
    questionType: 'MCQ',
    questionText: 'What is meant by "Loss of Information" in classified frequency distributions?',
    questionTextHinglish: 'Frequency distribution table banane par "Loss of Information" (सूचना की हानि) ka kya matlab hota hai?',
    options: [
      'Data table save karte waqt excel file corrupt ho jana',
      'Saari frequencies ka total 100 nahi ban pata',
      'Individual values ki identity khatam ho jaati hai aur further calculations mein sirf Class Mark (midpoint) use hota hai',
      'Class width ka gayab ho jana'
    ],
    optionsHinglish: [
      'Data table save karte waqt excel file corrupt ho jana',
      'Saari frequencies ka total 100 nahi ban pata',
      'Individual values ki identity khatam ho jaati hai aur further calculations mein sirf Class Mark (midpoint) use hota hai',
      'Class width ka gayab ho jana'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Ch 3, Page 33-34',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'NCERT explains: Jab hum raw data ko groups (jaise 20-30) mein daal dete hain, toh hume yeh pata rehta hai ki 6 log hain, par unke actual marks (22, 25, 28) kya the woh pata nahi chalta. Aage ki saari calculations mein unhe class mark (25) hi maan liya jata hai. Isi ko Loss of Information kehte hain.',
    formulaOrConcept: 'Grouped data uses mid-point m instead of individual xi, causing loss of exact detail.',
    tags: ['Loss of Information', 'Class Mark', 'Chapter 3']
  },
  {
    id: 'stats-ch3-q20',
    chapterNumber: 3,
    chapterCode: 'kest103',
    chapterTitle: 'Chapter 3: Organisation of Data (आंकड़ों का संगठन)',
    questionNo: 20,
    questionType: 'MCQ',
    questionText: 'A table summarizing data on TWO variables simultaneously (e.g. Sales and Advertisement expenditure) is called a:',
    questionTextHinglish: 'Ek aisi frequency table jo ek saath 2 variables (jaise Company ki Sales aur Advertisement par kharcha) ka data show karti hai, use kya kehte hain?',
    options: [
      'Bivariate Frequency Distribution (द्विचर बारंबारता बंटन)',
      'Univariate Frequency Distribution (एक चर वाला)',
      'Single Frequency Array',
      'Random Scatter Matrix'
    ],
    optionsHinglish: [
      'Bivariate Frequency Distribution (द्विचर बारंबारता बंटन)',
      'Univariate Frequency Distribution (एक चर वाला)',
      'Single Frequency Array',
      'Random Scatter Matrix'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Ch 3, Page 36',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Bivariate Frequency Distribution do variables ki simultaneous frequency distribution hoti hai (jisme rows mein ek variable aur columns mein dusra variable hota hai). Yeh correlation padhne ke liye use hoti hai.',
    formulaOrConcept: 'Two variables simultaneously = Bivariate Frequency Distribution',
    tags: ['Bivariate Distribution', 'Definitions', 'Chapter 3']
  },
  {
    id: 'stats-ch3-q21',
    chapterNumber: 3,
    chapterCode: 'kest103',
    chapterTitle: 'Chapter 3: Organisation of Data (आंकड़ों का संगठन)',
    questionNo: 21,
    questionType: 'Numerical',
    questionText: 'For the sentence "The quick brown fox jumps over the lazy dog", if word length is variable X, what is the frequency of 3-letter words? [NCERT Ch 3 Ex. 11]',
    questionTextHinglish: 'Sentence: "The quick brown fox jumps over the lazy dog". Agar har word ke letters ki sankhya ko variable X maana jaye, toh 3-letter wale words ki frequency kitni hogi? (NCERT Ch 3 Q11)',
    options: [
      '2',
      '4 ("The", "fox", "the", "dog")',
      '3',
      '5'
    ],
    optionsHinglish: [
      '2',
      '4 ("The", "fox", "the", "dog")',
      '3',
      '5'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Ch 3, Page 38 (Ex. 11)',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Words count karte hain:\n- 3 letters: "The" (3), "fox" (3), "the" (3), "dog" (3) -> Total = 4 words\n- 4 letters: "over" (4), "lazy" (4) -> Total = 2 words\n- 5 letters: "quick" (5), "brown" (5), "jumps" (5) -> Total = 3 words\nTotal 9 words. 3-letter words ki frequency = 4.',
    formulaOrConcept: 'Frequency Array of Word Lengths',
    tags: ['Frequency Array', 'NCERT Exercise', 'Numerical', 'Chapter 3']
  },
  {
    id: 'stats-ch3-q22',
    chapterNumber: 3,
    chapterCode: 'kest103',
    chapterTitle: 'Chapter 3: Organisation of Data (आंकड़ों का संगठन)',
    questionNo: 22,
    questionType: 'MCQ',
    questionText: 'Range (परास) in statistics is mathematically defined as:',
    questionTextHinglish: 'Statistics mein Range (परास) ka formula kya hota hai?',
    options: [
      'Smallest observation minus Largest observation',
      'Highest aur Lowest ka average ((Max + Min)/2)',
      'Largest ko Smallest se divide karna',
      'Largest observation aur Smallest observation ka difference (X_max - X_min)'
    ],
    optionsHinglish: [
      'Smallest observation minus Largest observation',
      'Highest aur Lowest ka average ((Max + Min)/2)',
      'Largest ko Smallest se divide karna',
      'Largest observation aur Smallest observation ka difference (X_max - X_min)'
    ],
    correctIndex: 3, // D
    ncertReference: 'NCERT Ch 3, Page 30 & 37 (Ex. 1.iv)',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Range = Largest Observation (L) - Smallest Observation (S). Yeh dispersion ka sabse simple measure hai.',
    formulaOrConcept: 'Range = Maximum Value - Minimum Value',
    tags: ['Range', 'Dispersion', 'Formula', 'Chapter 3']
  },

  // =========================================================================
  // CHAPTER 4: PRESENTATION OF DATA (kest104) - आंकड़ों का प्रस्तुतीकरण
  // =========================================================================
  {
    id: 'stats-ch4-q23',
    chapterNumber: 4,
    chapterCode: 'kest104',
    chapterTitle: 'Chapter 4: Presentation of Data (आंकड़ों का प्रस्तुतीकरण)',
    questionNo: 23,
    questionType: 'MCQ',
    questionText: 'In a statistical table, what are the row headings on the extreme left called?',
    questionTextHinglish: 'Ek statistical table mein left side par rows ke headings (पंक्तियों के शीर्षक) ko kya kaha jata hai?',
    options: [
      'Captions (कॉलम के शीर्षक)',
      'Footnotes (पाद-टिप्पणी)',
      'Stubs (पंक्तियों/Rows ke headings)',
      'Source (स्रोत)'
    ],
    optionsHinglish: [
      'Captions (कॉलम के शीर्षक)',
      'Footnotes (पाद-टिप्पणी)',
      'Stubs (पंक्तियों/Rows ke headings)',
      'Source (स्रोत)'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Ch 4, Page 43-44',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Table ke left side mein rows ke titles ko "Stubs" ya Stub Column kaha jata hai. Table ke upar columns ke titles ko "Captions" kaha jata hai.',
    formulaOrConcept: 'Table Parts: Rows = Stubs, Columns = Captions',
    tags: ['Parts of Table', 'Stubs', 'Captions', 'Chapter 4']
  },
  {
    id: 'stats-ch4-q24',
    chapterNumber: 4,
    chapterCode: 'kest104',
    chapterTitle: 'Chapter 4: Presentation of Data (आंकड़ों का प्रस्तुतीकरण)',
    questionNo: 24,
    questionType: 'Numerical',
    questionText: 'In a Pie Chart, if a component represents 60.3% of total data, what is its central angle subtended at the center?',
    questionTextHinglish: 'Ek Pie Chart (वृत्त आरेख) mein agar koi category 60.3% hissa occupy karti hai, toh circle ke center par banne wala angle kitna hoga?',
    options: [
      '217.08° (Lagbhag 217°)',
      '60.3°',
      '120.6°',
      '180.0°'
    ],
    optionsHinglish: [
      '217.08° (Lagbhag 217°)',
      '60.3°',
      '120.6°',
      '180.0°'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Ch 4, Page 49-50 Table 4.8',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Circle mein total 360° hota hai jo 100% ke barabar hai. Isliye 1% = 3.6° (360° / 100).\nAngle = Percentage × 3.6° = 60.3 × 3.6° = 217.08° ≈ 217°.',
    formulaOrConcept: 'Central Angle = Percentage × 3.6°',
    tags: ['Pie Diagram', 'Central Angle', 'Numerical', 'Chapter 4']
  },
  {
    id: 'stats-ch4-q25',
    chapterNumber: 4,
    chapterCode: 'kest104',
    chapterTitle: 'Chapter 4: Presentation of Data (आंकड़ों का प्रस्तुतीकरण)',
    questionNo: 25,
    questionType: 'MCQ',
    questionText: 'Which measure of central tendency can be graphically determined from a Histogram (आयतचित्र)?',
    questionTextHinglish: 'Histogram (आयतचित्र) ke tallest rectangle se graphically kaunsi central tendency value pata ki ja sakti hai?',
    options: [
      'Arithmetic Mean (माध्य)',
      'Median (माध्यिका)',
      'Geometric Mean',
      'Mode (बहुलक / Bahulak)'
    ],
    optionsHinglish: [
      'Arithmetic Mean (माध्य)',
      'Median (माध्यिका)',
      'Geometric Mean',
      'Mode (बहुलक / Bahulak)'
    ],
    correctIndex: 3, // D
    ncertReference: 'NCERT Ch 4, Page 51',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Histogram se GRAPHICALLY "MODE" nikala jata hai. Highest bar ke top corners ko adjacent bars se diagonal cross karke perpendicular X-axis par giraate hain jo Mode deta hai.',
    formulaOrConcept: 'Histogram gives MODE graphically',
    tags: ['Histogram', 'Mode', 'Graphic Method', 'Chapter 4']
  },
  {
    id: 'stats-ch4-q26',
    chapterNumber: 4,
    chapterCode: 'kest104',
    chapterTitle: 'Chapter 4: Presentation of Data (आंकड़ों का प्रस्तुतीकरण)',
    questionNo: 26,
    questionType: 'MCQ',
    questionText: 'When class intervals are UNEQUAL in a frequency distribution, how are the heights of histogram rectangles adjusted?',
    questionTextHinglish: 'Jab Histogram mein class intervals unequal (alag-alag width ke) hote hain, toh rectangles ki height kis formula se adjust ki jaati hai?',
    options: [
      'Direct frequency use karke',
      'Frequency Density = (Class Frequency ÷ Class Width) nikal kar',
      'Frequency ka square root lekar',
      'Class mark ko height maan kar'
    ],
    optionsHinglish: [
      'Direct frequency use karke',
      'Frequency Density = (Class Frequency ÷ Class Width) nikal kar',
      'Frequency ka square root lekar',
      'Class mark ko height maan kar'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Ch 4, Page 50',
    difficulty: 'Hard',
    detailedSolutionHinglish: 'Histogram ek 2-Dimensional diagram hai jisme area frequency ke barabar hona chahiye. Agar class width badi hogi toh rectangle chauda ho jayega, isliye height ko adjust karne ke liye Frequency Density = (Class Frequency ÷ Width of Interval) calculate karte hain.',
    formulaOrConcept: 'Height of Rectangle = Frequency Density = f / w',
    tags: ['Histogram', 'Frequency Density', 'Unequal Intervals', 'Chapter 4']
  },
  {
    id: 'stats-ch4-q27',
    chapterNumber: 4,
    chapterCode: 'kest104',
    chapterTitle: 'Chapter 4: Presentation of Data (आंकड़ों का प्रस्तुतीकरण)',
    questionNo: 27,
    questionType: 'MCQ',
    questionText: 'The point of intersection of "Less-than" and "More-than" Ogives gives which value on the X-axis?',
    questionTextHinglish: '"Less-than" Ogive aur "More-than" Ogive ke intersection point (kataan bindu) se X-axis par kaunsi value milti hai?',
    options: [
      'Median (माध्यिका / Madhyika)',
      'Mean (माध्य)',
      'Mode (बहुलक)',
      'Standard Deviation'
    ],
    optionsHinglish: [
      'Median (माध्यिका / Madhyika)',
      'Mean (माध्य)',
      'Mode (बहुलक)',
      'Standard Deviation'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Ch 4, Page 53-54',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Less-than Ogive (upar chadhta hua) aur More-than Ogive (neeche girta hua) jis point par aapas mein cut karte hain, wahan se X-axis par perpendicular girane se MEDIAN (माध्यिका) prapt hoti hai.',
    formulaOrConcept: 'Intersection of Less-than & More-than Ogives = Median',
    tags: ['Ogive', 'Median', 'Graphic Method', 'Chapter 4']
  },
  {
    id: 'stats-ch4-q28',
    chapterNumber: 4,
    chapterCode: 'kest104',
    chapterTitle: 'Chapter 4: Presentation of Data (आंकड़ों का प्रस्तुतीकरण)',
    questionNo: 28,
    questionType: 'MCQ',
    questionText: 'An Arithmetic Line Graph is also commonly known as a/an:',
    questionTextHinglish: 'Arithmetic Line Graph (अंकगणितीय रेखा आरेख) ko dusre kis naam se jaana jata hai?',
    options: [
      'Ogive Curve',
      'Frequency Bar Chart',
      'Time Series Graph (कालिक शृंखला आरेख)',
      'Circular Pie Chart'
    ],
    optionsHinglish: [
      'Ogive Curve',
      'Frequency Bar Chart',
      'Time Series Graph (कालिक शृंखला आरेख)',
      'Circular Pie Chart'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Ch 4, Page 53',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Arithmetic line graph ko Time Series Graph bhi kehte hain kyunki isme X-axis par time (saal, mahine, din) aur Y-axis par variable (exports, imports, production) plot kiya jata hai.',
    formulaOrConcept: 'Arithmetic Line Graph = Time Series Graph',
    tags: ['Time Series Graph', 'Line Graph', 'Chapter 4']
  },
  {
    id: 'stats-ch4-q29',
    chapterNumber: 4,
    chapterCode: 'kest104',
    chapterTitle: 'Chapter 4: Presentation of Data (आंकड़ों का प्रस्तुतीकरण)',
    questionNo: 29,
    questionType: 'Assertion-Reason',
    questionText: 'Assertion (A): A "Less-than" Ogive is an upward-sloping curve that is never decreasing.\nReason (R): Cumulative frequencies accumulate successively as we move to higher upper class limits.',
    questionTextHinglish: 'Assertion (A): "Less-than" Ogive ek aisa curve hai jo humesha upar chadhta hai aur kabhi ghat ta (decrease) nahi hai.\nReason (R): Jaise-jaise upper class limits badhti hain, cumulative frequencies aage judti (accumulate) jaati hain.',
    options: [
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true',
      'Both (A) and (R) are true and (R) is the correct explanation of (A)'
    ],
    optionsHinglish: [
      'Dono sahi hain par explanation galat hai',
      '(A) sahi hai par (R) galat hai',
      '(A) galat hai par (R) sahi hai',
      'Dono (A) aur (R) sahi hain aur (R) bilkul sahi explanation hai'
    ],
    correctIndex: 3, // D
    ncertReference: 'NCERT Ch 4, Page 53',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Dono statements true hain aur (R) bilkul sahi reason hai. Less-than ogive mein har class ki frequency pichli total mein judti jaati hai, isliye curve monotonically increase hota hai aur kabhi neeche nahi girta.',
    formulaOrConcept: 'Less-than Ogive is non-decreasing; More-than Ogive is non-increasing',
    tags: ['Assertion-Reason', 'Ogives', 'Chapter 4']
  },
  {
    id: 'stats-ch4-q30',
    chapterNumber: 4,
    chapterCode: 'kest104',
    chapterTitle: 'Chapter 4: Presentation of Data (आंकड़ों का प्रस्तुतीकरण)',
    questionNo: 30,
    questionType: 'MCQ',
    questionText: 'Why is a Bar Diagram called a ONE-DIMENSIONAL (1D) diagram in statistics?',
    questionTextHinglish: 'Statistics mein Bar Diagram (दंड आरेख) ko ONE-DIMENSIONAL (एक-विमीय) diagram kyun kaha jata hai?',
    options: [
      'Kyunki isko sirf ek hi rang se banaya ja sakta hai',
      'Kyunki sirf bar ki height/length hi data ko show karti hai, bar ki chaudaai (width) ka koi mathematical significance nahi hota',
      'Kyunki yeh sirf ek saal ka data dikha sakta hai',
      'Kyunki isme X-axis nahi hoti'
    ],
    optionsHinglish: [
      'Kyunki isko sirf ek hi rang se banaya ja sakta hai',
      'Kyunki sirf bar ki height/length hi data ko show karti hai, bar ki chaudaai (width) ka koi mathematical significance nahi hota',
      'Kyunki yeh sirf ek saal ka data dikha sakta hai',
      'Kyunki isme X-axis nahi hoti'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Ch 4, Page 45 & 56 (Ex. 1)',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Bar Diagram mein data ki value sirf bar ki lambai (height/length) se pata chalti hai. Bars ki width sirf drawing sundar dikhane ke liye equal rakhi jaati hai, uska calculation se lena dena nahi hota. Jabki Histogram mein Height aur Width dono milkar Area banate hain isliye Histogram 2D hota hai.',
    formulaOrConcept: '1D Diagram: Only 1 dimension (height) matters. 2D Diagram: Area (Height x Width) matters.',
    tags: ['Bar Diagram', '1D vs 2D', 'Chapter 4']
  }
];
