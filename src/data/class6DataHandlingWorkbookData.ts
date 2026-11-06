export interface BilingualText {
  en: string;
  hi: string;
}

export interface ConceptItem {
  id: string;
  title: BilingualText;
  summary: BilingualText;
  keyPoints: BilingualText[];
  formulaOrRule?: BilingualText;
  example: BilingualText;
  badge: string;
}

export interface ExerciseQuestion {
  id: string;
  section: string;
  pageNumber: number;
  questionNumber: string;
  title: BilingualText;
  context?: BilingualText;
  tableData?: {
    headers: BilingualText[];
    rows: { label: BilingualText; values: (string | number)[] }[];
  };
  subQuestions: {
    part: string;
    question: BilingualText;
    answer: BilingualText;
    explanation?: BilingualText;
    blankPrefix?: BilingualText;
    blankSuffix?: BilingualText;
    correctValue?: string;
  }[];
}

export interface CompetencyQuizQuestion {
  id: number;
  question: BilingualText;
  options: BilingualText[];
  correctAnswerIndex: number;
  hint: BilingualText;
  explanation: BilingualText;
  category: 'Concept' | 'Tally' | 'Pictograph' | 'BarGraph' | 'Infographics';
}

export const CHAPTER_INFO = {
  classNumber: 6,
  subject: {
    en: 'Mathematics (Ganita Prakash)',
    hi: 'गणित (गणित प्रकाश)'
  },
  chapterNumber: 4,
  code: 'fegp104',
  title: {
    en: 'Data Handling and Presentation',
    hi: 'आँकड़ों का प्रबंधन एवं प्रस्तुतीकरण'
  },
  nepHighlights: {
    en: 'NEP 2020 Real-world data collection, frequency distribution, tally marks, scaled pictographs, vertical and horizontal bar graphs, and critical thinking on aesthetic infographics.',
    hi: 'एनईपी 2020: वास्तविक जीवन के आँकड़े एकत्र करना, बारंबारता बंटन, मिलान चिह्न, पैमाना आधारित चित्रालेख, ऊर्ध्वाधर एवं क्षैतिज दंड आलेख तथा दृश्य सूचना आलेखों का तार्किक विश्लेषण।'
  }
};

export const CONCEPTS_DATA: ConceptItem[] = [
  {
    id: 'concept-1',
    title: {
      en: 'What is Data? (आँकड़े क्या हैं?)',
      hi: 'आँकड़े (Data) की परिभाषा एवं महत्व'
    },
    summary: {
      en: 'Any collection of facts, numbers, measurements, observations, or descriptions that convey meaningful information is called data.',
      hi: 'तथ्यों, संख्याओं, मापों, प्रेक्षणों या विवरणों का कोई भी ऐसा संग्रह जो उनके बारे में सार्थक जानकारी प्रदान करता है, आँकड़ा (Data) कहलाता है।'
    },
    keyPoints: [
      {
        en: 'Data helps us find answers to specific questions, compare groups, and make wise decisions.',
        hi: 'आँकड़े हमें विशेष प्रश्नों के उत्तर खोजने, समूहों की तुलना करने और सही निर्णय लेने में मदद करते हैं।'
      },
      {
        en: 'Raw data is unorganized information that needs systematic structuring before we can understand it.',
        hi: 'अव्यवस्थित रूप में प्राप्त जानकारी को प्राथमिक या कच्चा आँकड़ा (Raw Data) कहते हैं, जिसे समझना आसान नहीं होता।'
      },
      {
        en: 'Not all questions require data collection (e.g. historical facts or general knowledge are already known).',
        hi: 'हर प्रश्न के लिए आँकड़े इकट्ठा करने की आवश्यकता नहीं होती (जैसे ऐतिहासिक तथ्य या सामान्य ज्ञान पहले से ज्ञात होते हैं)।'
      }
    ],
    formulaOrRule: {
      en: 'Data = Facts + Numbers + Measures collected with a definite purpose.',
      hi: 'आँकड़ा = निश्चित उद्देश्य से एकत्र किए गए तथ्य + संख्याएँ + माप।'
    },
    example: {
      en: 'Example: Listing the favourite sports of 31 students in Class 6 (Hockey: 8, Kabaddi: 6, Cricket: 6, Pittu: 5, Football: 4, Badminton: 2).',
      hi: 'उदाहरण: कक्षा 6 के 31 विद्यार्थियों के पसंदीदा खेलों की सूची (हॉकी: 8, कबड्डी: 6, क्रिकेट: 6, पिट्टू: 5, फुटबॉल: 4, बैडमिंटन: 2)।'
    },
    badge: '4.1 Basic Concept'
  },
  {
    id: 'concept-2',
    title: {
      en: 'Tally Marks & Frequency (मिलान चिह्न एवं बारंबारता)',
      hi: 'मिलान चिह्न (Tally Marks) और बारंबारता (Frequency)'
    },
    summary: {
      en: 'Frequency is the number of times a particular observation occurs. Tally marks are quick tally strokes grouped in bundles of five to count accurately.',
      hi: 'बारंबारता (Frequency) वह संख्या है जो दर्शाती है कि कोई प्रेक्षण कितनी बार आया है। मिलान चिह्न (Tally Marks) पाँच-पाँच के समूह बनाकर तेज़ी से गिनने का तरीका है।'
    },
    keyPoints: [
      {
        en: 'First 4 counts are vertical strokes: | (1), || (2), ||| (3), |||| (4).',
        hi: 'पहले 4 गिनतियों के लिए खड़ी रेखाएं खींची जाती हैं: | (1), || (2), ||| (3), |||| (4)।'
      },
      {
        en: 'The 5th count is a diagonal line cutting across the 4 strokes: 卌 (5).',
        hi: '5वीं गिनती के लिए चारों रेखाओं को तिरछी रेखा से काटते हैं: 卌 (5)।'
      },
      {
        en: 'Arranging data in ascending/descending order helps find the smallest, largest, and frequencies quickly.',
        hi: 'आँकड़ों को आरोही (बढ़ते) या अवरोही क्रम में लगाने से न्यूनतम, अधिकतम और बारंबारता तुरंत मिल जाती है।'
      }
    ],
    formulaOrRule: {
      en: 'Count = (Number of 5-bundles × 5) + Remaining single strokes.',
      hi: 'कुल गिनती = (5 वाले समूहों की संख्या × 5) + शेष खुली रेखाएँ।'
    },
    example: {
      en: 'Count of 13 Gujiyas: 卌 卌 ||| = 5 + 5 + 3 = 13 students.',
      hi: '13 गुजिया की गिनती: 卌 卌 ||| = 5 + 5 + 3 = 13 विद्यार्थी।'
    },
    badge: '4.1 Tally Table'
  },
  {
    id: 'concept-3',
    title: {
      en: 'Pictographs & Scaling (चित्रालेख एवं पैमाना)',
      hi: 'चित्रालेख (Pictograph) और पैमाना (Scale/Key)'
    },
    summary: {
      en: 'A pictograph represents numerical data visually using pictures or symbols of objects. A scale or key specifies how many units each symbol represents.',
      hi: 'चित्रालेख आँकड़ों को चित्रों या प्रतीकों के माध्यम से प्रदर्शित करता है। पैमाना (Scale) बताता है कि एक प्रतीक कितनी इकाइयों के बराबर है।'
    },
    keyPoints: [
      {
        en: 'Provides instant visual comparison at a glance without reading complex numbers.',
        hi: 'बिना कठिन संख्याओं को पढ़े केवल एक नज़र में तुलना करने में सक्षम बनाता है।'
      },
      {
        en: 'Scale is essential: 1 symbol can represent 1 item, 5 items, 10 items, or 100 items.',
        hi: 'पैमाना अत्यंत आवश्यक है: 1 प्रतीक = 1 वस्तु, 5 वस्तुएं, 10 वस्तुएं या 100 वस्तुएं हो सकता है।'
      },
      {
        en: 'Limitation: Hard to represent numbers that are not exact multiples of the scale (e.g. 27 or 33 students).',
        hi: 'सीमा: जो संख्याएँ पैमाने के सटीक गुणज नहीं होतीं (जैसे 27 या 33), उन्हें चित्रों में सटीक दिखाना कठिन होता है।'
      }
    ],
    formulaOrRule: {
      en: 'Number of Symbols = Total Value ÷ Scale Value (e.g., 300 kites ÷ 100 = 3 kite symbols).',
      hi: 'प्रतीकों की संख्या = कुल मान ÷ पैमाने का मान (जैसे 300 पतंग ÷ 100 = 3 पतंग के प्रतीक)।'
    },
    example: {
      en: 'Magan Bhai kite sale: 1 🪁 = 100 kites. Poonam Ben bought 700 kites = 7 🪁 symbols.',
      hi: 'मगन भाई की पतंग बिक्री: 1 🪁 = 100 पतंगें। पूनम बेन ने 700 पतंगें खरीदीं = 7 🪁 प्रतीक।'
    },
    badge: '4.2 Pictograph'
  },
  {
    id: 'concept-4',
    title: {
      en: 'Bar Graphs (दंड आलेख / बार ग्राफ)',
      hi: 'दंड आलेख (Bar Graph) के नियम एवं रचना'
    },
    summary: {
      en: 'A bar graph uses rectangular bars of uniform width drawn with equal spaces between them. The height or length of each bar represents the frequency.',
      hi: 'दंड आलेख में समान चौड़ाई के आयताकार दंड (bars) समान दूरी पर बनाए जाते हैं। प्रत्येक दंड की ऊँचाई या लंबाई उसकी बारंबारता दर्शाती है।'
    },
    keyPoints: [
      {
        en: 'Uniform Width & Equal Gaps: All bars must have identical width and equal spacing between adjacent bars.',
        hi: 'समान चौड़ाई एवं समान अंतराल: सभी दंडों की चौड़ाई एक समान और उनके बीच की दूरी बराबर होनी चाहिए।'
      },
      {
        en: 'Column Graph (Vertical): Bars rise upwards. Ideal for vertical attributes like heights and scores.',
        hi: 'स्तंभ आलेख (ऊर्ध्वाधर): दंड ऊपर उठते हैं। ऊँचाई, रन या प्राप्तांकों के लिए सबसे उपयुक्त।'
      },
      {
        en: 'Horizontal Bar Graph: Bars extend sideways. Ideal for ground distances, river lengths, or long category names.',
        hi: 'क्षैतिज दंड आलेख: दंड क्षैतिज रूप से बढ़ते हैं। नदियों की लंबाई, यात्रा दूरी या लंबे नामों के लिए उपयुक्त।'
      },
      {
        en: 'Axes & Scaling: One axis shows categories, the other axis shows frequency numbers starting from 0.',
        hi: 'अक्ष एवं पैमाना: एक अक्ष पर श्रेणियाँ और दूसरे अक्ष पर 0 से शुरू होने वाला संख्या पैमाना होता है।'
      }
    ],
    formulaOrRule: {
      en: 'Bar Height = Frequency Value ÷ Scale Unit Value (e.g. ₹3400 ÷ 200 = 17 units tall).',
      hi: 'दंड की ऊँचाई = मान ÷ पैमाने की इकाई (जैसे ₹3400 ÷ 200 = 17 इकाई ऊँचा)।'
    },
    example: {
      en: 'Vehicular traffic in Delhi: 7-8 AM peak was 1200 vehicles (longest bar = 12 units at 1 unit = 100 vehicles).',
      hi: 'दिल्ली का ट्रैफिक: सुबह 7-8 बजे अधिकतम 1200 वाहन गुजरे (1 इकाई = 100 वाहन, दंड की लंबाई = 12 इकाई)।'
    },
    badge: '4.3 & 4.4 Bar Graph'
  },
  {
    id: 'concept-5',
    title: {
      en: 'Aesthetics & Misleading Infographics (कलात्मक विचार एवं सूचना आलेख)',
      hi: 'सूचना आलेख (Infographics) एवं भ्रामक आलेखों से बचाव'
    },
    summary: {
      en: 'Visual representations should be aesthetically pleasing without distorting scientific accuracy. Fancy drawings can sometimes accidentally mislead viewers.',
      hi: 'आँकड़ों का दृश्य प्रस्तुतीकरण सुंदर होना चाहिए परंतु यथार्थ से भटकाने वाला नहीं। अधिक आकर्षक चित्र कभी-कभी गलत संदेश दे सकते हैं।'
    },
    keyPoints: [
      {
        en: 'Triangular mountain graphs mislead because taller triangles also have wider bases, exaggerating visual area.',
        hi: 'त्रिकोणीय पर्वत आलेख भ्रामक होते हैं क्योंकि ऊँचे त्रिभुज चौड़े भी हो जाते हैं, जिससे उनका क्षेत्रफल अस्वाभाविक रूप से बड़ा दिखता है।'
      },
      {
        en: 'Equal Width Principle: Only comparing height requires keeping the width strictly identical across all categories.',
        hi: 'समान चौड़ाई का सिद्धांत: केवल ऊँचाई की तुलना करते समय सभी दंडों की चौड़ाई एक समान रखी जानी चाहिए।'
      },
      {
        en: 'Orientation Context: Use vertical bars for heights (mountains, trees, human height) and horizontal bars for lengths (rivers, roads).',
        hi: 'दिशा का संदर्भ: ऊँचाई (पहाड़, पेड़, व्यक्ति की लंबाई) के लिए ऊर्ध्वाधर दंड और दूरी/लंबाई (नदियाँ, सड़कें) के लिए क्षैतिज दंड उपयुक्त होते हैं।'
      }
    ],
    formulaOrRule: {
      en: 'Visual Integrity: Area of graphic must be proportional to numerical data, not distorted by shape.',
      hi: 'दृश्य शुद्धता: आलेख का दृश्य आकार हमेशा वास्तविक संख्यात्मक आँकड़ों के अनुपात में होना चाहिए।'
    },
    example: {
      en: 'World’s Tallest Mountains: Mount Everest (8848m, Asia), Aconcagua (6962m, S. America), Denali (6194m, N. America), Kilimanjaro (5895m, Africa), Elbrus (5642m, Europe), Vinson Massif (4892m, Antarctica), Kosciuszko (2228m, Australia).',
      hi: 'विश्व के सर्वोच्च शिखर: एवरेस्ट (8848 मी, एशिया), एकांकागुआ (6962 मी), देनाली (6194 मी), किलिमंजारो (5895 मी), एल्ब्रस (5642 मी), विंसन मैसिफ (4892 मी), कोज़िअस्को (2228 मी)।'
    },
    badge: '4.5 Infographics'
  }
];

export const EXERCISES_DATA: ExerciseQuestion[] = [
  {
    id: 'ex-4-1-p75',
    section: 'Section 4.1',
    pageNumber: 75,
    questionNumber: 'Figure it Out Q1 & Q2',
    title: {
      en: 'Navya and Naresh Class Favorite Games Survey',
      hi: 'नव्या और नरेश की कक्षा के पसंदीदा खेल सर्वेक्षण'
    },
    context: {
      en: 'Navya collected the favourite sports of all 31 students in their class: Kabaddi (6), Satoliya/Pittu (5), Hockey (8), Badminton (2), Football (4), Cricket (6).',
      hi: 'नव्या ने अपनी कक्षा के सभी 31 सहपाठियों के पसंदीदा खेलों की सूची बनाई: कबड्डी (6), सतोलिया/पिट्टू (5), हॉकी (8), बैडमिंटन (2), फुटबॉल (4), क्रिकेट (6)।'
    },
    tableData: {
      headers: [
        { en: 'Sport', hi: 'खेल' },
        { en: 'Tally Marks', hi: 'मिलान चिह्न' },
        { en: 'Number of Students (Frequency)', hi: 'विद्यार्थियों की संख्या (बारंबारता)' }
      ],
      rows: [
        { label: { en: 'Hockey', hi: 'हॉकी' }, values: ['卌 |||', 8] },
        { label: { en: 'Kabaddi', hi: 'कबड्डी' }, values: ['卌 |', 6] },
        { label: { en: 'Cricket', hi: 'क्रिकेट' }, values: ['卌 |', 6] },
        { label: { en: 'Satoliya (Pittu)', hi: 'सतोलिया (पिट्टू)' }, values: ['卌', 5] },
        { label: { en: 'Football', hi: 'फुटबॉल' }, values: ['||||', 4] },
        { label: { en: 'Badminton', hi: 'बैडमिंटन' }, values: ['||', 2] }
      ]
    },
    subQuestions: [
      {
        part: '1',
        question: {
          en: 'What would you do to find the most popular game among Naresh and Navya’s classmates?',
          hi: 'नरेश और नव्या के सहपाठियों में सबसे लोकप्रिय खेल का पता लगाने के लिए आप क्या करेंगे?'
        },
        answer: {
          en: 'Organise the raw list into a frequency distribution table using tally marks for each sport. The sport with the highest frequency is the most popular.',
          hi: 'कच्ची सूची को मिलान चिह्नों का प्रयोग करके एक बारंबारता सारणी में व्यवस्थित करेंगे। जिस खेल की बारंबारता सबसे अधिक होगी, वही सबसे लोकप्रिय खेल होगा।'
        }
      },
      {
        part: '2',
        question: {
          en: 'What is the most popular game in their class?',
          hi: 'उनकी कक्षा में सबसे लोकप्रिय खेल कौन सा है?'
        },
        answer: {
          en: 'Hockey (with the highest frequency of 8 students).',
          hi: 'हॉकी (सर्वाधिक 8 विद्यार्थियों की पसंद के साथ)।'
        },
        correctValue: 'Hockey / हॉकी'
      }
    ]
  },
  {
    id: 'ex-4-1-p75-q4',
    section: 'Section 4.1',
    pageNumber: 75,
    questionNumber: 'Figure it Out Q4',
    title: {
      en: 'Pari’s Questions: Identifying When Data Collection is Needed',
      hi: 'परी के प्रश्न: आँकड़े एकत्र करने की आवश्यकता की पहचान (✓ या ✗)'
    },
    subQuestions: [
      {
        part: 'a',
        question: {
          en: 'What is the most popular TV show among her classmates?',
          hi: 'उसके सहपाठियों में सबसे लोकप्रिय टीवी शो कौन सा है?'
        },
        answer: {
          en: 'Tick (✓) — Requires collecting preferences from each classmate and tallying frequencies.',
          hi: 'सही टिक (✓) — प्रत्येक सहपाठी से पूछकर आँकड़े एकत्र करने और बारंबारता गिनने की आवश्यकता है।'
        },
        correctValue: '✓'
      },
      {
        part: 'b',
        question: {
          en: 'When did India get independence?',
          hi: 'भारत को स्वतंत्रता कब मिली?'
        },
        answer: {
          en: 'Cross (✗) — Fixed historical fact (15 August 1947). No survey or data collection is needed.',
          hi: 'क्रॉस (✗) — यह एक निश्चित ऐतिहासिक तथ्य है (15 अगस्त 1947)। इसके लिए आँकड़े जुटाने की आवश्यकता नहीं है।'
        },
        correctValue: '✗'
      },
      {
        part: 'c',
        question: {
          en: 'How much water is getting wasted in her locality?',
          hi: 'उसके इलाके में कितना पानी बर्बाद हो रहा है?'
        },
        answer: {
          en: 'Tick (✓) — Requires measuring water leakages, household wastage, and recording observations.',
          hi: 'सही टिक (✓) — इसके लिए नलों के रिसाव, बर्बादी का मापन और प्रेक्षण दर्ज करने की आवश्यकता है।'
        },
        correctValue: '✓'
      },
      {
        part: 'd',
        question: {
          en: 'What is the capital of India?',
          hi: 'भारत की राजधानी क्या है?'
        },
        answer: {
          en: 'Cross (✗) — Standard geographical fact (New Delhi). No data collection needed.',
          hi: 'क्रॉस (✗) — यह एक स्थापित भौगोलिक तथ्य है (नई दिल्ली)। इसके लिए आँकड़े इकट्ठा करने की आवश्यकता नहीं है।'
        },
        correctValue: '✗'
      }
    ]
  },
  {
    id: 'ex-4-1-p76',
    section: 'Section 4.1',
    pageNumber: 76,
    questionNumber: 'Figure it Out Q1 & Q2',
    title: {
      en: 'Shri Nilesh New Year Sweets Distribution Table',
      hi: 'श्री नीलेश की कक्षा में नए साल पर मिठाई वितरण सारणी'
    },
    context: {
      en: 'Shri Nilesh recorded sweet preferences: Jalebi (卌 | = 6), Gulab jamun (卌 |||| = 9), Gujiya (卌 卌 ||| = 13), Barfi (||| = 3), Rasgulla (卌 || = 7).',
      hi: 'श्री नीलेश ने मिठाइयों की पसंद दर्ज की: जलेबी (卌 | = 6), गुलाब जामुन (卌 |||| = 9), गुजिया (卌 卌 ||| = 13), बर्फी (||| = 3), रसगुल्ला (卌 || = 7)।'
    },
    subQuestions: [
      {
        part: 'a',
        question: { en: 'How many students chose jalebi?', hi: 'कितने विद्यार्थियों ने जलेबी चुनी?' },
        answer: { en: '6 students.', hi: '6 विद्यार्थी।' },
        correctValue: '6'
      },
      {
        part: 'b',
        question: { en: 'Barfi was chosen by how many students?', hi: 'बर्फी कितने विद्यार्थियों ने चुनी?' },
        answer: { en: '3 students.', hi: '3 विद्यार्थी।' },
        correctValue: '3'
      },
      {
        part: 'c',
        question: { en: 'How many students chose gujiya?', hi: 'कितने विद्यार्थियों ने गुजिया चुनी?' },
        answer: { en: '13 students.', hi: '13 विद्यार्थी।' },
        correctValue: '13'
      },
      {
        part: 'd',
        question: { en: 'Rasgulla was chosen by how many students?', hi: 'रसगुल्ला कितने विद्यार्थियों ने चुना?' },
        answer: { en: '7 students.', hi: '7 विद्यार्थी।' },
        correctValue: '7'
      },
      {
        part: 'e',
        question: { en: 'How many students chose gulab jamun?', hi: 'कितने विद्यार्थियों ने गुलाब जामुन चुना?' },
        answer: { en: '9 students.', hi: '9 विद्यार्थी।' },
        correctValue: '9'
      },
      {
        part: '2',
        question: {
          en: 'Is the frequency table sufficient to distribute each sweet to the correct student? If not, what is the alternative?',
          hi: 'क्या यह सारणी प्रत्येक विद्यार्थी को सही मिठाई बाँटने के लिए पर्याप्त है? यदि नहीं, तो इसका विकल्प क्या है?'
        },
        answer: {
          en: 'No. The table only tells the count of each sweet to purchase, but not which specific student requested which sweet. Alternative: Maintain a list with each student’s name alongside their chosen sweet.',
          hi: 'नहीं। यह सारणी केवल मिठाई खरीदने की संख्या बताती है, लेकिन यह नहीं बताती कि किस छात्र ने कौन सी मिठाई मांगी। विकल्प: प्रत्येक विद्यार्थी के नाम के आगे उसकी चुनी गई मिठाई लिखकर सूची बनाई जाए।'
        }
      }
    ]
  },
  {
    id: 'ex-4-1-p77',
    section: 'Section 4.1',
    pageNumber: 77,
    questionNumber: 'Figure it Out: Shoe Sizes',
    title: {
      en: 'Sushri Sandhya’s Shoe Sizes Data Analysis',
      hi: 'सुश्री संध्या के विद्यार्थियों के जूतों के नाप का विश्लेषण'
    },
    context: {
      en: 'Shoe sizes of 27 students arranged in ascending order: 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7.',
      hi: '27 विद्यार्थियों के जूतों के नाप आरोही क्रम में: 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7।'
    },
    subQuestions: [
      {
        part: 'a',
        question: { en: 'The largest shoe size in the class is: _____', hi: 'कक्षा में सबसे बड़ा जूते का नाप है: _____' },
        answer: { en: '7', hi: '7' },
        correctValue: '7'
      },
      {
        part: 'b',
        question: { en: 'The smallest shoe size in the class is: _____', hi: 'कक्षा में सबसे छोटा जूते का नाप है: _____' },
        answer: { en: '3', hi: '3' },
        correctValue: '3'
      },
      {
        part: 'c',
        question: { en: 'There are _____ students who wear shoe size 5.', hi: 'जूते का नाप 5 पहनने वाले कुल _____ विद्यार्थी हैं।' },
        answer: { en: '10 students.', hi: '10 विद्यार्थी।' },
        correctValue: '10'
      },
      {
        part: 'd',
        question: { en: 'There are _____ students who wear shoe sizes larger than 4.', hi: 'जूते का नाप 4 से बड़ा पहनने वाले कुल _____ विद्यार्थी हैं।' },
        answer: { en: '15 students (10 students of size 5 + 4 of size 6 + 1 of size 7 = 15).', hi: '15 विद्यार्थी (नाप 5 के 10 + नाप 6 के 4 + नाप 7 का 1 = 15)।' },
        correctValue: '15'
      },
      {
        part: '2',
        question: {
          en: 'How did arranging the data in ascending order help to answer these questions?',
          hi: 'आँकड़ों को आरोही क्रम में व्यवस्थित करने से इन प्रश्नों के उत्तर देने में क्या मदद मिली?'
        },
        answer: {
          en: 'Grouping equal numbers together made it easy to identify the minimum at the start, maximum at the end, and count occurrences without missing or repeating any value.',
          hi: 'समान संख्याओं का समूह बन जाने से न्यूनतम मान शुरुआत में और अधिकतम मान अंत में तुरंत मिल गया, तथा बिना किसी गलती के गिनती करना आसान हो गया।'
        }
      }
    ]
  },
  {
    id: 'ex-4-2-p84',
    section: 'Section 4.2',
    pageNumber: 84,
    questionNumber: 'Figure it Out Q1: Library Books',
    title: {
      en: 'Library Books Borrowed Pictograph (Middle School Ginnori)',
      hi: 'पुस्तकालय से पुस्तकें लेने का चित्रालेख (माध्यमिक विद्यालय गिन्नौरी)'
    },
    context: {
      en: 'Key: 1 📖 = 1 Book. Monday: 4, Tuesday: 5, Wednesday: 2, Thursday: 1, Friday: 4, Saturday: 8.',
      hi: 'पैमाना: 1 📖 = 1 पुस्तक। सोमवार: 4, मंगलवार: 5, बुधवार: 2, गुरुवार: 1, शुक्रवार: 4, शनिवार: 8।'
    },
    subQuestions: [
      {
        part: 'a',
        question: { en: 'On which day were the minimum number of books borrowed?', hi: 'किस दिन सबसे कम पुस्तकें उधार ली गईं?' },
        answer: { en: 'Thursday (only 1 book borrowed).', hi: 'गुरुवार (केवल 1 पुस्तक ली गई)।' },
        correctValue: 'Thursday / गुरुवार'
      },
      {
        part: 'b',
        question: { en: 'What was the total number of books borrowed during the week?', hi: 'सप्ताह के दौरान कुल कितनी पुस्तकें उधार ली गईं?' },
        answer: { en: '24 books (4 + 5 + 2 + 1 + 4 + 8 = 24).', hi: '24 पुस्तकें (4 + 5 + 2 + 1 + 4 + 8 = 24)।' },
        correctValue: '24'
      },
      {
        part: 'c',
        question: { en: 'On which day were the maximum number of books borrowed? What may be the reason?', hi: 'किस दिन सबसे अधिक पुस्तकें ली गईं? इसका क्या कारण हो सकता है?' },
        answer: {
          en: 'Saturday (8 books). Reason: Sunday is a holiday, so students borrow extra storybooks to read over the weekend.',
          hi: 'शनिवार (8 पुस्तकें)। कारण: रविवार को अवकाश होता है, इसलिए छात्र सप्ताहांत में पढ़ने के लिए पुस्तकें ले जाते हैं।'
        },
        correctValue: 'Saturday / शनिवार'
      }
    ]
  },
  {
    id: 'ex-4-2-p84-q2',
    section: 'Section 4.2',
    pageNumber: 84,
    questionNumber: 'Figure it Out Q2: Magan Bhai Kites',
    title: {
      en: 'Magan Bhai’s Kite Sales Pictograph (Jamnagar)',
      hi: 'मगन भाई की पतंग बिक्री का चित्रालेख (जामनगर)'
    },
    context: {
      en: 'Kites sold: Chaman: 250, Rani: 300, Rukhsana: 100, Jasmeet: 450, Jetha Lal: 250, Poonam Ben: 700. Scale: 1 🪁 = 100 kites.',
      hi: 'बेची गई पतंगें: चमन: 250, रानी: 300, रुखसाना: 100, जसमीत: 450, जेठालाल: 250, पूनम बेन: 700। पैमाना: 1 🪁 = 100 पतंगें।'
    },
    subQuestions: [
      {
        part: 'a',
        question: { en: 'How many symbols represent the kites that Rani purchased?', hi: 'रानी द्वारा खरीदी गई पतंगों को दर्शाने के लिए कितने प्रतीकों का उपयोग होगा?' },
        answer: { en: '3 symbols (300 ÷ 100 = 3).', hi: '3 प्रतीक (300 ÷ 100 = 3)।' },
        correctValue: '3'
      },
      {
        part: 'b',
        question: { en: 'Who purchased the maximum number of kites?', hi: 'सबसे अधिक पतंगें किसने खरीदीं?' },
        answer: { en: 'Poonam Ben (700 kites = 7 symbols).', hi: 'पूनम बेन (700 पतंगें = 7 प्रतीक)।' },
        correctValue: 'Poonam Ben / पूनम बेन'
      },
      {
        part: 'c',
        question: { en: 'Who purchased more kites, Jasmeet or Chaman?', hi: 'जसमीत या चमन में से किसने अधिक पतंगें खरीदीं?' },
        answer: { en: 'Jasmeet purchased more (450 > 250).', hi: 'जसमीत ने अधिक खरीदीं (450 > 250)।' },
        correctValue: 'Jasmeet / जसमीत'
      },
      {
        part: 'd',
        question: {
          en: 'Rukhsana says Poonam Ben purchased more than double the kites that Rani purchased. Is she correct? Why?',
          hi: 'रुखसाना कहती है कि पूनम बेन ने रानी की तुलना में दोगुने से भी अधिक पतंगें खरीदीं। क्या वह सही है? क्यों?'
        },
        answer: {
          en: 'Yes, she is correct. Double of Rani’s purchase is 2 × 300 = 600 kites. Poonam Ben purchased 700 kites, which is more than 600 (700 = 2 × 300 + 100).',
          hi: 'हाँ, वह सही है। रानी की पतंगों का दोगुना = 2 × 300 = 600 पतंगें। पूनम बेन ने 700 पतंगें खरीदीं, जो 600 से अधिक है।'
        }
      }
    ]
  },
  {
    id: 'ex-4-3-p86',
    section: 'Section 4.3',
    pageNumber: 86,
    questionNumber: 'Figure it Out: Lakhanpal Absenteeism Bar Graph',
    title: {
      en: 'Lakhanpal Absenteeism Bar Graph Analysis',
      hi: 'लखनपाल के अनुपस्थिति दंड आलेख का पठन'
    },
    context: {
      en: 'Absent students across classes: Class 1: 3, Class 2: 5, Class 3: 4, Class 4: 2, Class 5: 0, Class 6: 1, Class 7: 5, Class 8: 7.',
      hi: 'विभिन्न कक्षाओं में अनुपस्थित विद्यार्थी: कक्षा 1: 3, कक्षा 2: 5, कक्षा 3: 4, कक्षा 4: 2, कक्षा 5: 0, कक्षा 6: 1, कक्षा 7: 5, कक्षा 8: 7।'
    },
    subQuestions: [
      {
        part: '1',
        question: { en: 'In Class 2, _____ students were absent that day.', hi: 'कक्षा 2 में उस दिन _____ विद्यार्थी अनुपस्थित थे।' },
        answer: { en: '5 students.', hi: '5 विद्यार्थी।' },
        correctValue: '5'
      },
      {
        part: '2',
        question: { en: 'In which class were the maximum number of students absent?', hi: 'किस कक्षा में सबसे अधिक विद्यार्थी अनुपस्थित थे?' },
        answer: { en: 'Class 8 (7 students absent, tallest bar).', hi: 'कक्षा 8 (7 विद्यार्थी अनुपस्थित, सबसे ऊँचा दंड)।' },
        correctValue: 'Class 8 / कक्षा 8'
      },
      {
        part: '3',
        question: { en: 'Which class had full attendance that day?', hi: 'उस दिन किस कक्षा में पूरी उपस्थिति (0 अनुपस्थित) थी?' },
        answer: { en: 'Class 5 (0 students absent, bar height = 0).', hi: 'कक्षा 5 (0 विद्यार्थी अनुपस्थित, दंड की ऊँचाई = 0)।' },
        correctValue: 'Class 5 / कक्षा 5'
      }
    ]
  },
  {
    id: 'ex-4-3-p88',
    section: 'Section 4.3',
    pageNumber: 88,
    questionNumber: 'Figure it Out: Delhi Traffic Crossing',
    title: {
      en: 'Vehicular Traffic at Delhi Busy Crossing Bar Graph',
      hi: 'दिल्ली के व्यस्त चौराहे पर वाहनों के आवागमन का दंड आलेख'
    },
    context: {
      en: 'Vehicles passing per hour (Scale 1 unit = 100 vehicles): 6–7 AM: 150, 7–8 AM: 1200, 8–9 AM: 1000, 9–10 AM: 800, 10–11 AM: 700, 11 AM–12 Noon: 600.',
      hi: 'प्रति घंटे गुजरने वाले वाहन (पैमाना 1 इकाई = 100 वाहन): 6–7 बजे: 150, 7–8 बजे: 1200, 8–9 बजे: 1000, 9–10 बजे: 800, 10–11 बजे: 700, 11–12 बजे: 600।'
    },
    subQuestions: [
      {
        part: '1',
        question: { en: 'How many total cars/vehicles passed through the crossing between 6 AM and noon?', hi: 'सुबह 6 बजे से दोपहर 12 बजे के बीच चौराहे से कुल कितने वाहन गुजरे?' },
        answer: { en: '4450 vehicles (150 + 1200 + 1000 + 800 + 700 + 600 = 4450).', hi: '4450 वाहन (150 + 1200 + 1000 + 800 + 700 + 600 = 4450)।' },
        correctValue: '4450'
      },
      {
        part: '2',
        question: { en: 'Why was traffic the heaviest between 7–8 AM?', hi: 'सुबह 7 से 8 बजे के बीच यातायात सबसे अधिक क्यों था?' },
        answer: {
          en: 'School buses, office commuters, and business vehicles start their morning journeys during this peak rush hour.',
          hi: 'स्कूल बसें, दफ्तर जाने वाले लोग और कारोबारी सुबह इसी समय अपने गंतव्य के लिए निकलते हैं।'
        }
      },
      {
        part: '3',
        question: { en: 'Why was there so little traffic during 6–7 AM?', hi: 'सुबह 6 से 7 बजे के दौरान इतना कम ट्रैफिक क्यों था?' },
        answer: {
          en: 'Most schools, shops, and offices do not open before 7 AM, so fewer people are on the roads early morning.',
          hi: 'अधिकांश स्कूल, दुकानें और कार्यालय सुबह 7 बजे से पहले नहीं खुलते, इसलिए सड़क पर कम लोग होते हैं।'
        }
      }
    ]
  },
  {
    id: 'ex-4-4-p93',
    section: 'Section 4.4',
    pageNumber: 93,
    questionNumber: 'Imran Family Budget Analysis',
    title: {
      en: 'Imran’s Family Monthly Expenditure Bar Graph',
      hi: 'इमरान के परिवार के मासिक व्यय का दंड आलेख'
    },
    context: {
      en: 'Expenditures (Scale 1 unit = ₹200): House rent: ₹3000 (15 units), Food: ₹3400 (17 units), Education: ₹800 (4 units), Electricity: ₹400 (2 units), Transport: ₹600 (3 units), Misc: ₹1200 (6 units). Total = ₹9400.',
      hi: 'खर्च (पैमाना 1 इकाई = ₹200): मकान किराया: ₹3000 (15 इकाई), भोजन: ₹3400 (17 इकाई), शिक्षा: ₹800 (4 इकाई), बिजली: ₹400 (2 इकाई), परिवहन: ₹600 (3 इकाई), विविध: ₹1200 (6 इकाई)।'
    },
    subQuestions: [
      {
        part: '1',
        question: { en: 'On which item does Imran’s family spend the most and second most?', hi: 'इमरान का परिवार सबसे अधिक और दूसरा सबसे अधिक खर्च किस मद पर करता है?' },
        answer: { en: 'Most on Food (₹3400) and second most on House Rent (₹3000).', hi: 'सबसे अधिक भोजन पर (₹3400) और दूसरा सबसे अधिक मकान किराए पर (₹3000)।' }
      },
      {
        part: '2',
        question: { en: 'Is the cost of electricity about one-half the cost of education?', hi: 'क्या बिजली का खर्च शिक्षा के खर्च का लगभग आधा है?' },
        answer: { en: 'Yes. Electricity = ₹400 and Education = ₹800. Half of 800 is 400 (400 = 800 ÷ 2).', hi: 'हाँ। बिजली = ₹400 तथा शिक्षा = ₹800। 800 का आधा 400 होता है।' },
        correctValue: 'Yes / हाँ'
      },
      {
        part: '3',
        question: { en: 'Is the cost of education less than one-fourth the cost of food?', hi: 'क्या शिक्षा का खर्च भोजन के खर्च के एक-चौथाई से कम है?' },
        answer: { en: 'Yes. One-fourth of Food is ₹3400 ÷ 4 = ₹850. Education is ₹800, which is strictly less than ₹850.', hi: 'हाँ। भोजन का एक-चौथाई = ₹3400 ÷ 4 = ₹850 है। शिक्षा का खर्च ₹800 है, जो ₹850 से कम है।' },
        correctValue: 'Yes / हाँ'
      }
    ]
  },
  {
    id: 'ex-4-4-p94-q2',
    section: 'Section 4.4',
    pageNumber: 94,
    questionNumber: 'Figure it Out Q2: Railway Tickets',
    title: {
      en: 'Pooja’s Bhopal Railway Station Ticket Sales Graph',
      hi: 'पूजा की भोपाल रेलवे स्टेशन टिकट बिक्री आलेख की त्रुटि सुधार'
    },
    context: {
      en: 'Tickets sold: Vidisha: 24 (6 units), Jabalpur: 20 (5 units), Seoni: 16, Indore: 28, Sagar: 16.',
      hi: 'बेचे गए टिकट: विदिशा: 24 (6 इकाई), जबलपुर: 20 (5 इकाई), सिवनी: 16, इंदौर: 28, सागर: 16।'
    },
    subQuestions: [
      {
        part: 'a',
        question: { en: 'The bar for Vidisha is 6 unit lengths for 24 tickets. What is the scale of this graph?', hi: 'विदिशा का दंड 24 टिकटों के लिए 6 इकाई लंबा है। इस आलेख का पैमाना क्या है?' },
        answer: { en: '1 unit length = 4 tickets (24 ÷ 6 = 4).', hi: '1 इकाई लंबाई = 4 टिकट (24 ÷ 6 = 4)।' },
        correctValue: '1 unit = 4 tickets'
      },
      {
        part: 'b',
        question: { en: 'What should be the bar height for Sagar (16 tickets)?', hi: 'सागर (16 टिकट) के लिए दंड की ऊँचाई क्या होगी?' },
        answer: { en: '4 unit lengths (16 ÷ 4 = 4).', hi: '4 इकाई लंबाई (16 ÷ 4 = 4)।' },
        correctValue: '4 units'
      },
      {
        part: 'c',
        question: { en: 'Are the bars for Seoni and Indore correct?', hi: 'क्या सिवनी और इंदौर के दंड सही बने हैं?' },
        answer: { en: 'Seoni (16 tickets = 4 units) is correct. Indore (28 tickets) was drawn incorrectly and should be 7 units tall (28 ÷ 4 = 7).', hi: 'सिवनी (16 टिकट = 4 इकाई) सही है। इंदौर (28 टिकट) गलत बना था, उसे 7 इकाई ऊँचा होना चाहिए (28 ÷ 4 = 7)।' }
      }
    ]
  },
  {
    id: 'ex-4-4-p95-q5',
    section: 'Section 4.4',
    pageNumber: 95,
    questionNumber: 'Figure it Out Q5: Jasprit Bumrah Wickets',
    title: {
      en: 'Faiz’s Jasprit Bumrah Wickets Distribution in 30 Matches',
      hi: 'फैज़ द्वारा जसप्रीत बुमराह के 30 मैचों के विकेटों की सारणी'
    },
    context: {
      en: 'Wickets per match: 0 wkts (2 matches), 1 wkt (4), 2 wkts (6), 3 wkts (8), 4 wkts (3), 5 wkts (5), 6 wkts (1), 7 wkts (1). Total matches = 30.',
      hi: 'प्रति मैच विकेट: 0 विकेट (2 मैच), 1 विकेट (4), 2 विकेट (6), 3 विकेट (8), 4 विकेट (3), 5 विकेट (5), 6 विकेट (1), 7 विकेट (1)। कुल मैच = 30।'
    },
    subQuestions: [
      {
        part: 'a',
        question: { en: 'In how many matches has Bumrah taken 4 wickets?', hi: 'बुमराह ने कितने मैचों में 4 विकेट लिए हैं?' },
        answer: { en: 'In 3 matches.', hi: '3 मैचों में।' },
        correctValue: '3'
      },
      {
        part: 'b',
        question: {
          en: 'Mayank says: "To find total wickets, just add 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28." Is Mayank correct? Why?',
          hi: 'मयंक कहता है: "कुल विकेट जानने के लिए 0 + 1 + 2 + ... + 7 जोड़ लो।" क्या मयंक सही है? क्यों?'
        },
        answer: {
          en: 'No, Mayank is wrong. Adding wicket numbers ignores how many matches each score occurred in. For instance, taking 3 wickets in 8 matches contributes 3 × 8 = 24 wickets, not 3!',
          hi: 'नहीं, मयंक गलत है। केवल विकेटों की संख्या जोड़ने से मैचों की संख्या की अनदेखी हो जाती है। उदाहरण के लिए 8 मैचों में 3-3 विकेट लेने से 3 × 8 = 24 विकेट बनते हैं, केवल 3 नहीं!'
        },
        correctValue: 'No / नहीं'
      },
      {
        part: 'c',
        question: { en: 'What is the correct total number of wickets taken by Bumrah in these 30 matches?', hi: 'इन 30 मैचों में बुमराह द्वारा लिए गए विकेटों की सही कुल संख्या क्या है?' },
        answer: {
          en: 'Total Wickets = (0×2) + (1×4) + (2×6) + (3×8) + (4×3) + (5×5) + (6×1) + (7×1) = 0 + 4 + 12 + 24 + 12 + 25 + 6 + 7 = 90 wickets!',
          hi: 'कुल विकेट = (0×2) + (1×4) + (2×6) + (3×8) + (4×3) + (5×5) + (6×1) + (7×1) = 0 + 4 + 12 + 24 + 12 + 25 + 6 + 7 = 90 विकेट!'
        },
        correctValue: '90'
      }
    ]
  },
  {
    id: 'ex-4-4-p98-q8',
    section: 'Section 4.4',
    pageNumber: 98,
    questionNumber: 'Figure it Out Q8: Mudhol Hounds',
    title: {
      en: 'Mudhol Hounds Breed Conservation in Karnataka Villages',
      hi: 'कर्नाटक के गाँवों में मुधोल हाउंड्स श्वान संरक्षण आँकड़े'
    },
    context: {
      en: 'Dog population in 6 villages: Village A: 18, B: 36, C: 12, D: 48, E: 18, F: 24.',
      hi: '6 गाँवों में कुत्तों की संख्या: गाँव A: 18, B: 36, C: 12, D: 48, E: 18, F: 24।'
    },
    subQuestions: [
      {
        part: 'a',
        question: { en: 'What will be the most useful scale or key to draw this pictograph?', hi: 'इस चित्रालेख को बनाने के लिए सबसे उपयुक्त पैमाना क्या होगा?' },
        answer: { en: '1 symbol = 6 dogs (since 18, 36, 12, 48, 18, 24 are all exact multiples of 6).', hi: '1 प्रतीक = 6 कुत्ते (क्योंकि सभी संख्याएँ 6 की सटीक गुणज हैं)।' },
        correctValue: '1 symbol = 6 dogs'
      },
      {
        part: 'b',
        question: { en: 'How many symbols will represent the dogs in Village B (36 dogs)?', hi: 'गाँव B (36 कुत्ते) को दर्शाने के लिए कितने प्रतीकों की आवश्यकता होगी?' },
        answer: { en: '6 symbols (36 ÷ 6 = 6).', hi: '6 प्रतीक (36 ÷ 6 = 6)।' },
        correctValue: '6'
      },
      {
        part: 'c',
        question: {
          en: 'Kamini says dogs in Village B and D together exceed dogs in the other 4 villages. Is she right?',
          hi: 'कामिनी कहती है कि गाँव B और D के कुल कुत्ते अन्य 4 गाँवों के कुल कुत्तों से अधिक हैं। क्या वह सही है?'
        },
        answer: {
          en: 'Yes! Village B + D = 36 + 48 = 84 dogs. Other 4 villages (A + C + E + F) = 18 + 12 + 18 + 24 = 72 dogs. 84 > 72, so Kamini is correct.',
          hi: 'हाँ! गाँव B + D = 36 + 48 = 84 कुत्ते। अन्य 4 गाँव (A + C + E + F) = 18 + 12 + 18 + 24 = 72 कुत्ते। 84 > 72, अतः कामिनी बिल्कुल सही है।'
        },
        correctValue: 'Yes / हाँ'
      }
    ]
  },
  {
    id: 'ex-4-5-p103',
    section: 'Section 4.5',
    pageNumber: 103,
    questionNumber: 'Figure it Out Q1 & Q2: Vertical vs Horizontal Bars',
    title: {
      en: 'Aesthetic Direction of Bars (Vertical vs Horizontal)',
      hi: 'दंडों की दिशा का चयन: ऊर्ध्वाधर बनाम क्षैतिज दंड'
    },
    subQuestions: [
      {
        part: '1',
        question: {
          en: 'To represent the heights of the tallest students in each class, would you use vertical or horizontal bars? Why?',
          hi: 'प्रत्येक कक्षा के सबसे लंबे छात्रों की ऊँचाई दर्शाने के लिए आप ऊर्ध्वाधर दंड चुनेंगे या क्षैतिज? क्यों?'
        },
        answer: {
          en: 'Vertical bars (Column graph). Height grows upwards from the ground, so vertical bars are more intuitive and visually evocative of human height.',
          hi: 'ऊर्ध्वाधर दंड (स्तंभ आलेख)। ऊँचाई ज़मीन से ऊपर की ओर बढ़ती है, इसलिए खड़े दंड मनुष्य की लंबाई के अधिक स्वाभाविक और दृश्य रूप से उपयुक्त होते हैं।'
        }
      },
      {
        part: '2',
        question: {
          en: 'To compare the lengths of the longest rivers on each continent, would you use vertical or horizontal bars? Why?',
          hi: 'प्रत्येक महाद्वीप की सबसे लंबी नदियों की लंबाई दर्शाने के लिए आप ऊर्ध्वाधर दंड चुनेंगे या क्षैतिज? क्यों?'
        },
        answer: {
          en: 'Horizontal bars. River lengths flow horizontally across the landscape, making horizontal bars geographically intuitive and visually aligned with distances.',
          hi: 'क्षैतिज दंड। नदियाँ ज़मीन पर क्षैतिज रूप से बहती हैं, इसलिए क्षैतिज दंड दूरी और लंबाई की स्वाभाविक तुलना कराते हैं।'
        }
      }
    ]
  }
];

export const COMPETENCY_QUIZ: CompetencyQuizQuestion[] = [
  {
    id: 1,
    category: 'Concept',
    question: {
      en: 'Any collection of facts, numbers, measures, or observations collected to convey information is called:',
      hi: 'जानकारी देने के उद्देश्य से एकत्र किए गए तथ्यों, संख्याओं, मापों या प्रेक्षणों के संग्रह को कहते हैं:'
    },
    options: [
      { en: 'Fraction', hi: 'भिन्न' },
      { en: 'Equation', hi: 'समीकरण' },
      { en: 'Data', hi: 'आँकड़े (Data)' },
      { en: 'Geometry', hi: 'ज्यामिति' }
    ],
    correctAnswerIndex: 2,
    hint: {
      en: 'It starts with "D" and is the central subject of this chapter.',
      hi: 'यह इस अध्याय का मुख्य विषय है और सूचना प्रदान करता है।'
    },
    explanation: {
      en: 'Data is a collection of facts, numbers, measures, or observations that convey information.',
      hi: 'आँकड़ा (Data) तथ्यों, संख्याओं, मापों या प्रेक्षणों का संग्रह है जो सूचना प्रदान करता है।'
    }
  },
  {
    id: 2,
    category: 'Tally',
    question: {
      en: 'Which tally mark representation correctly stands for the number 9?',
      hi: 'संख्या 9 के लिए कौन सा मिलान चिह्न (Tally Mark) सही है?'
    },
    options: [
      { en: '|||| |||| |', hi: '|||| |||| |' },
      { en: '卌 ||||', hi: '卌 ||||' },
      { en: '卌 卌', hi: '卌 卌' },
      { en: '卌 |||', hi: '卌 |||' }
    ],
    correctAnswerIndex: 1,
    hint: {
      en: 'A bundle of 5 followed by 4 single strokes: 5 + 4 = 9.',
      hi: '5 का एक बंडल और 4 अलग रेखाएं: 5 + 4 = 9।'
    },
    explanation: {
      en: 'In tally marking, 5 is shown as a crossed bundle 卌, followed by 4 vertical strokes |||| for 9.',
      hi: 'मिलान चिह्न में 5 को 卌 लिखा जाता है और शेष 4 के लिए |||| आता है, अतः 卌 |||| = 9।'
    }
  },
  {
    id: 3,
    category: 'Concept',
    question: {
      en: 'Which of the following questions requires data collection?',
      hi: 'निम्नलिखित में से किस प्रश्न के उत्तर के लिए आँकड़े एकत्र करने की आवश्यकता होगी?'
    },
    options: [
      { en: 'What is the sum of angles of a triangle?', hi: 'त्रिभुज के कोणों का योग कितना होता है?' },
      { en: 'In which year did India gain independence?', hi: 'भारत किस वर्ष स्वतंत्र हुआ?' },
      { en: 'How many states are currently in India?', hi: 'भारत में वर्तमान में कितने राज्य हैं?' },
      { en: 'What is the most popular sport among students in your school?', hi: 'आपके विद्यालय के विद्यार्थियों का सबसे पसंदीदा खेल कौन सा है?' }
    ],
    correctAnswerIndex: 3,
    hint: {
      en: 'Look for a variable opinion or choice that cannot be looked up in an encyclopedia.',
      hi: 'वह विकल्प चुनें जो लोगों की पसंद पर निर्भर करता है और पहले से किसी पुस्तक में दर्ज नहीं है।'
    },
    explanation: {
      en: 'Students’ sport preferences vary from school to school and must be surveyed and collected freshly.',
      hi: 'विद्यार्थियों की पसंद विद्यालय-दर-विद्यालय बदलती है, अतः इसके लिए सर्वेक्षण करके आँकड़े जुटाने होंगे।'
    }
  },
  {
    id: 4,
    category: 'Pictograph',
    question: {
      en: 'In a pictograph where 1 🚗 = 20 cars, how many car symbols are needed to show 140 cars?',
      hi: 'एक चित्रालेख में यदि 1 🚗 = 20 कारें हैं, तो 140 कारों को दर्शाने के लिए कितने प्रतीकों की आवश्यकता होगी?'
    },
    options: [
      { en: '7 symbols', hi: '7 प्रतीक' },
      { en: '6 symbols', hi: '6 प्रतीक' },
      { en: '14 symbols', hi: '14 प्रतीक' },
      { en: '28 symbols', hi: '28 प्रतीक' }
    ],
    correctAnswerIndex: 0,
    hint: {
      en: 'Divide total cars by scale: 140 ÷ 20.',
      hi: 'कुल कारों को पैमाने से भाग दें: 140 ÷ 20।'
    },
    explanation: {
      en: 'Number of symbols = 140 ÷ 20 = 7 car symbols.',
      hi: 'प्रतीकों की संख्या = 140 ÷ 20 = 7 प्रतीक।'
    }
  },
  {
    id: 5,
    category: 'Pictograph',
    question: {
      en: 'What is the primary limitation of a pictograph?',
      hi: 'चित्रालेख की मुख्य सीमा या कमी क्या है?'
    },
    options: [
      { en: 'They cannot be understood by children', hi: 'इन्हें बच्चे समझ नहीं सकते' },
      { en: 'They cannot be drawn with colors', hi: 'इन्हें रंगों से नहीं बनाया जा सकता' },
      { en: 'Difficult to represent frequencies that are not exact multiples of the scale', hi: 'ऐसी बारंबारता दर्शाना कठिन होता है जो पैमाने की सटीक गुणज न हों' },
      { en: 'They always take less space than tables', hi: 'ये हमेशा सारणियों से कम स्थान लेते हैं' }
    ],
    correctAnswerIndex: 2,
    hint: {
      en: 'Think about drawing 27 students when 1 symbol = 10 students.',
      hi: 'सोचिए यदि 1 प्रतीक = 10 छात्र हों, तो 27 छात्रों को चित्र में कैसे दिखाएंगे।'
    },
    explanation: {
      en: 'When numbers are not multiples of the scale (like 27 or 33), drawing fractional symbols accurately becomes very difficult.',
      hi: 'जब संख्याएँ पैमाने की पूरी गुणज नहीं होतीं (जैसे 27 या 33), तो चित्र के टुकड़े करना और समझना बहुत कठिन हो जाता है।'
    }
  },
  {
    id: 6,
    category: 'BarGraph',
    question: {
      en: 'In a standard bar graph, which statement is strictly TRUE?',
      hi: 'एक मानक दंड आलेख (Bar Graph) के बारे में कौन सा कथन पूर्णतः सत्य है?'
    },
    options: [
      { en: 'Bars must touch each other without any gaps', hi: 'दंड बिना किसी दूरी के एक-दूसरे से सटे होने चाहिए' },
      { en: 'All bars must have uniform width and equal spaces between them', hi: 'सभी दंडों की चौड़ाई एक समान और उनके बीच की दूरी बराबर होनी चाहिए' },
      { en: 'The width of the bar represents the frequency', hi: 'दंड की चौड़ाई बारंबारता को दर्शाती है' },
      { en: 'The scale axis can begin with any random number other than 0', hi: 'पैमाने वाला अक्ष 0 के अलावा किसी भी संख्या से शुरू हो सकता है' }
    ],
    correctAnswerIndex: 1,
    hint: {
      en: 'Bars must be free-standing with uniform width so only height communicates value.',
      hi: 'केवल ऊँचाई से तुलना करने के लिए दंडों की चौड़ाई और दूरी दोनों समान रखी जाती हैं।'
    },
    explanation: {
      en: 'Uniform width and equal spacing guarantee that visual comparison depends solely on bar length/height.',
      hi: 'समान चौड़ाई और समान अंतराल यह सुनिश्चित करते हैं कि तुलना केवल दंड की ऊँचाई/लंबाई के आधार पर हो।'
    }
  },
  {
    id: 7,
    category: 'BarGraph',
    question: {
      en: 'If 1 unit length on a bar graph represents 50 students, a bar of length 7 units represents:',
      hi: 'यदि दंड आलेख पर 1 इकाई लंबाई = 50 विद्यार्थी है, तो 7 इकाई लंबे दंड का मान होगा:'
    },
    options: [
      { en: '57 students', hi: '57 विद्यार्थी' },
      { en: '300 students', hi: '300 विद्यार्थी' },
      { en: '250 students', hi: '250 विद्यार्थी' },
      { en: '350 students', hi: '350 विद्यार्थी' }
    ],
    correctAnswerIndex: 3,
    hint: {
      en: 'Multiply units by scale: 7 × 50.',
      hi: 'इकाई को पैमाने से गुणा करें: 7 × 50।'
    },
    explanation: {
      en: 'Value = 7 units × 50 students/unit = 350 students.',
      hi: 'मान = 7 × 50 = 350 विद्यार्थी।'
    }
  },
  {
    id: 8,
    category: 'Concept',
    question: {
      en: 'Shoe sizes of 5 students are: 4, 3, 5, 4, 6. Arranging in ascending order gives:',
      hi: '5 छात्रों के जूतों का नाप है: 4, 3, 5, 4, 6। इन्हें आरोही (बढ़ते) क्रम में लिखने पर प्राप्त होगा:'
    },
    options: [
      { en: '3, 4, 4, 5, 6', hi: '3, 4, 4, 5, 6' },
      { en: '6, 5, 4, 4, 3', hi: '6, 5, 4, 4, 3' },
      { en: '4, 3, 5, 4, 6', hi: '4, 3, 5, 4, 6' },
      { en: '3, 4, 5, 6', hi: '3, 4, 5, 6' }
    ],
    correctAnswerIndex: 0,
    hint: {
      en: 'Ascending means smallest to largest. Do not drop repeated numbers!',
      hi: 'आरोही का अर्थ है सबसे छोटे से सबसे बड़ा। दोहराए गए नंबर को छोड़ें नहीं!'
    },
    explanation: {
      en: 'Ascending order goes from lowest (3) to highest (6), retaining both 4s: 3, 4, 4, 5, 6.',
      hi: 'आरोही क्रम छोटे से बड़े की ओर जाता है: 3, 4, 4, 5, 6।'
    }
  },
  {
    id: 9,
    category: 'BarGraph',
    question: {
      en: 'In Imran’s family budget, Food is ₹3400 and House Rent is ₹3000. With scale 1 unit = ₹200, the bar for Food is taller than Rent by:',
      hi: 'इमरान के बजट में भोजन ₹3400 और मकान किराया ₹3000 है। यदि पैमाना 1 इकाई = ₹200 है, तो भोजन का दंड किराए के दंड से कितना ऊँचा होगा?'
    },
    options: [
      { en: '4 units', hi: '4 इकाई' },
      { en: '400 units', hi: '400 इकाई' },
      { en: '2 units', hi: '2 इकाई' },
      { en: '1 unit', hi: '1 इकाई' }
    ],
    correctAnswerIndex: 2,
    hint: {
      en: 'Difference in rupees is ₹400. Divide by ₹200.',
      hi: 'रुपयों में अंतर = ₹400। इसे ₹200 से भाग दें।'
    },
    explanation: {
      en: 'Food bar = 3400 ÷ 200 = 17 units. Rent bar = 3000 ÷ 200 = 15 units. Difference = 17 - 15 = 2 units.',
      hi: 'भोजन दंड = 17 इकाई, किराया दंड = 15 इकाई। अंतर = 17 - 15 = 2 इकाई।'
    }
  },
  {
    id: 10,
    category: 'Tally',
    question: {
      en: 'Bumrah took 3 wickets in 8 matches and 5 wickets in 5 matches. Total wickets from these two sets are:',
      hi: 'बुमराह ने 8 मैचों में 3-3 विकेट और 5 मैचों में 5-5 विकेट लिए। इन दोनों सेटों से कुल कितने विकेट हुए?'
    },
    options: [
      { en: '8 wickets', hi: '8 विकेट' },
      { en: '49 wickets', hi: '49 विकेट' },
      { en: '13 wickets', hi: '13 विकेट' },
      { en: '40 wickets', hi: '40 विकेट' }
    ],
    correctAnswerIndex: 1,
    hint: {
      en: '(3 × 8) + (5 × 5) = 24 + 25.',
      hi: '(3 × 8) + (5 × 5) = 24 + 25।'
    },
    explanation: {
      en: 'Total = (3 wickets × 8 matches) + (5 wickets × 5 matches) = 24 + 25 = 49 wickets.',
      hi: 'कुल विकेट = (3 × 8) + (5 × 5) = 24 + 25 = 49 विकेट।'
    }
  },
  {
    id: 11,
    category: 'Infographics',
    question: {
      en: 'Why is using triangular shapes for mountain heights in an infographic potentially misleading?',
      hi: 'सूचना आलेख (Infographics) में पहाड़ों की ऊँचाई दर्शाने के लिए त्रिभुज का उपयोग करना भ्रामक क्यों हो सकता है?'
    },
    options: [
      { en: 'Computers cannot calculate triangle areas', hi: 'कंप्यूटर त्रिभुज का क्षेत्रफल नहीं निकाल सकते' },
      { en: 'Triangles cannot have sharp points', hi: 'त्रिभुज में नुकीले कोने नहीं हो सकते' },
      { en: 'Mountains in nature are always rectangular', hi: 'वास्तविक पहाड़ हमेशा आयताकार होते हैं' },
      { en: 'Taller triangles naturally get wider bases, making their area look disproportionately huge', hi: 'ऊँचे त्रिभुजों का आधार भी चौड़ा हो जाता है, जिससे उनका क्षेत्रफल अस्वाभाविक रूप से बहुत बड़ा दिखता है' }
    ],
    correctAnswerIndex: 3,
    hint: {
      en: 'A shape that grows in two dimensions (height and width) exaggerates the visual size.',
      hi: 'जो आकृति ऊँचाई के साथ चौड़ाई में भी बढ़ती है, उसका दृश्य क्षेत्रफल बहुत अधिक बढ़ जाता है।'
    },
    explanation: {
      en: 'When height doubles, triangle area quadruples (grows with square of scale), giving the false impression that Everest is vastly more massive than Elbrus.',
      hi: 'ऊँचाई बढ़ने से त्रिभुज का आधार भी बढ़ता है, जिससे उसका क्षेत्रफल कई गुना अधिक बड़ा दिखने लगता है जो भ्रामक है।'
    }
  },
  {
    id: 12,
    category: 'Infographics',
    question: {
      en: 'What is the tallest mountain on Earth, and what continent is it in?',
      hi: 'पृथ्वी का सबसे ऊँचा पर्वत कौन सा है और यह किस महाद्वीप में स्थित है?'
    },
    options: [
      { en: 'Mount Everest (8848 m) in Asia', hi: 'माउंट एवरेस्ट (8848 मी) - एशिया' },
      { en: 'Aconcagua (6962 m) in South America', hi: 'एकांकागुआ (6962 मी) - दक्षिण अमेरिका' },
      { en: 'Kilimanjaro (5895 m) in Africa', hi: 'किलिमंजारो (5895 मी) - अफ्रीका' },
      { en: 'Denali (6194 m) in North America', hi: 'देनाली (6194 मी) - उत्तरी अमेरिका' }
    ],
    correctAnswerIndex: 0,
    hint: {
      en: 'Its height is 8848 meters, located in the Himalayas.',
      hi: 'इसकी ऊँचाई 8848 मीटर है और यह हिमालय में स्थित है।'
    },
    explanation: {
      en: 'Mount Everest in Asia is Earth’s highest peak above sea level at 8,848 meters.',
      hi: 'एशिया का माउंट एवरेस्ट 8848 मीटर की ऊँचाई के साथ पृथ्वी का सर्वोच्च पर्वत शिखर है।'
    }
  },
  {
    id: 13,
    category: 'BarGraph',
    question: {
      en: 'Which type of bar graph is aesthetically recommended to depict river lengths?',
      hi: 'नदियों की लंबाई दर्शाने के लिए कलात्मक दृष्टि से किस प्रकार का दंड आलेख अनुशंसित है?'
    },
    options: [
      { en: 'Vertical column graph', hi: 'ऊर्ध्वाधर स्तंभ आलेख (Vertical column graph)' },
      { en: 'Horizontal bar graph', hi: 'क्षैतिज दंड आलेख (Horizontal bar graph)' },
      { en: 'Circular pie chart only', hi: 'केवल वृत्त आलेख' },
      { en: '3D pyramid graph', hi: '3D पिरामिड आलेख' }
    ],
    correctAnswerIndex: 1,
    hint: {
      en: 'Rivers flow horizontally across the Earth’s surface.',
      hi: 'नदियाँ ज़मीन पर क्षैतिज दिशा में बहती हैं।'
    },
    explanation: {
      en: 'River lengths parallel the ground, so horizontal bars naturally mirror how rivers flow across geography.',
      hi: 'नदियाँ धरातल पर क्षैतिज रूप से बहती हैं, इसलिए क्षैतिज दंड उनकी लंबाई को सबसे स्वाभाविक रूप से प्रदर्शित करते हैं।'
    }
  },
  {
    id: 14,
    category: 'Pictograph',
    question: {
      en: 'In the Mudhol Hounds survey, villages had 18, 36, 12, 48, 18, and 24 dogs. Why is 6 the most sensible scale?',
      hi: 'मुधोल हाउंड्स सर्वेक्षण में 18, 36, 12, 48, 18 और 24 कुत्ते थे। पैमाना 6 चुनना सबसे समझदारी क्यों है?'
    },
    options: [
      { en: 'Because there are 6 villages', hi: 'क्योंकि कुल 6 गाँव हैं' },
      { en: '6 is an odd number', hi: '6 एक विषम संख्या है' },
      { en: '6 is the Highest Common Factor (HCF) and all numbers divide cleanly by 6 without fractions', hi: '6 इन सभी संख्याओं का महत्तम समापवर्तक (HCF) है और सभी संख्याएं बिना भिन्न के पूरी कट जाती हैं' },
      { en: 'Because dogs have 6 legs', hi: 'क्योंकि कुत्तों के 6 पैर होते हैं' }
    ],
    correctAnswerIndex: 2,
    hint: {
      en: '18/6=3, 36/6=6, 12/6=2, 48/6=8, 24/6=4. Zero half-symbols needed!',
      hi: 'सभी संख्याएँ 6 के पहाड़े में आती हैं, जिससे कोई भी अधूरा चित्र नहीं बनाना पड़ेगा।'
    },
    explanation: {
      en: 'Since every village count is an exact multiple of 6, choosing scale 1 symbol = 6 dogs allows drawing neat whole symbols for every village.',
      hi: 'चूँकि सभी गाँवों के कुत्तों की संख्या 6 की गुणज है, इसलिए पैमाना 6 लेने पर हर गाँव के लिए पूरे-पूरे प्रतीक बनेंगे।'
    }
  },
  {
    id: 15,
    category: 'BarGraph',
    question: {
      en: 'At Delhi’s busy traffic junction, why did the traffic drop from 1200 vehicles (7–8 AM) to 600 vehicles (11–12 Noon)?',
      hi: 'दिल्ली के व्यस्त चौराहे पर ट्रैफिक सुबह 7-8 बजे (1200 वाहन) से घटकर 11-12 बजे (600 वाहन) क्यों हो गया?'
    },
    options: [
      { en: 'All traffic police went home', hi: 'सभी ट्रैफिक पुलिसकर्मी घर चले गए थे' },
      { en: 'Road was completely closed', hi: 'सड़क पूरी तरह बंद कर दी गई थी' },
      { en: 'Petrol got over in the city', hi: 'शहर में पेट्रोल खत्म हो गया था' },
      { en: 'Peak morning office and school commute finishes by 9–10 AM', hi: 'सुबह स्कूल और दफ्तर जाने की मुख्य भीड़ 9-10 बजे तक समाप्त हो जाती है' }
    ],
    correctAnswerIndex: 3,
    hint: {
      en: 'Rush hour happens early in the morning when everybody is heading to work or school.',
      hi: 'प्रातःकालीन पीक आवर दफ्तर और स्कूल खुलने के समय होता है।'
    },
    explanation: {
      en: 'Vehicular traffic peaks between 7–9 AM as people travel to work/school, and then declines to a steady midday level.',
      hi: 'सुबह 7 से 9 बजे के बीच स्कूल और कार्यालय जाने वालों के कारण सड़कों पर चरम भीड़ होती है, जिसके बाद ट्रैफिक कम हो जाता है।'
    }
  },
  {
    id: 16,
    category: 'Concept',
    question: {
      en: 'In an English newspaper article, which letter is almost always observed with the highest frequency?',
      hi: 'अंग्रेज़ी समाचार पत्र के एक लेख में प्रायः किस अक्षर की बारंबारता सबसे अधिक पाई जाती है?'
    },
    options: [
      { en: 'Letter "e"', hi: 'अक्षर "e"' },
      { en: 'Letter "x"', hi: 'अक्षर "x"' },
      { en: 'Letter "q"', hi: 'अक्षर "q"' },
      { en: 'Letter "z"', hi: 'अक्षर "z"' }
    ],
    correctAnswerIndex: 0,
    hint: {
      en: 'It is the most common vowel in the English language (order: x < c < r < i < e).',
      hi: 'यह अंग्रेज़ी का सबसे आम स्वर है (क्रम: x < c < r < i < e)।'
    },
    explanation: {
      en: 'In English text, the letter "e" occurs far more frequently than consonants like "x" or "z".',
      hi: 'अंग्रेज़ी भाषा में "e" सबसे अधिक बार आने वाला अक्षर है, जबकि "x" अत्यंत कम आता है।'
    }
  },
  {
    id: 17,
    category: 'Pictograph',
    question: {
      en: 'In a school pictograph where 1 👧 = 4 girls, Class 2 has 4 full symbols and 1 half symbol. How many girls are in Class 2?',
      hi: 'एक विद्यालय चित्रालेख में यदि 1 👧 = 4 छात्राएँ हैं, तो कक्षा 2 में 4 पूरे और 1 आधा प्रतीक है। कक्षा 2 में कुल कितनी छात्राएँ हैं?'
    },
    options: [
      { en: '16 girls', hi: '16 छात्राएँ' },
      { en: '18 girls', hi: '18 छात्राएँ' },
      { en: '20 girls', hi: '20 छात्राएँ' },
      { en: '9 girls', hi: '9 छात्राएँ' }
    ],
    correctAnswerIndex: 1,
    hint: {
      en: '(4 × 4) + (half of 4) = 16 + 2.',
      hi: '(4 × 4) + (4 का आधा) = 16 + 2।'
    },
    explanation: {
      en: '4 full symbols = 4 × 4 = 16. 1 half symbol = 4 ÷ 2 = 2. Total = 16 + 2 = 18 girls.',
      hi: '4 पूरे प्रतीक = 4 × 4 = 16। 1 आधा प्रतीक = 4 ÷ 2 = 2। कुल = 16 + 2 = 18 छात्राएँ।'
    }
  },
  {
    id: 18,
    category: 'BarGraph',
    question: {
      en: 'Project Tiger in India tracked tiger numbers: 1400 (2006), 1700 (2010), 2200 (2014), 3000 (2018), 3700 (2022). How much did the tiger population increase between 2006 and 2022?',
      hi: 'भारत के प्रोजेक्ट टाइगर में बाघों की संख्या दर्ज की गई: 1400 (2006), 1700 (2010), 2200 (2014), 3000 (2018), 3700 (2022)। 2006 से 2022 के बीच बाघों की संख्या में कितनी वृद्धि हुई?'
    },
    options: [
      { en: '3700 tigers', hi: '3700 बाघ' },
      { en: '1300 tigers', hi: '1300 बाघ' },
      { en: '2300 tigers', hi: '2300 बाघ' },
      { en: '1400 tigers', hi: '1400 बाघ' }
    ],
    correctAnswerIndex: 2,
    hint: {
      en: 'Subtract 2006 count from 2022 count: 3700 - 1400.',
      hi: '2022 की संख्या में से 2006 की संख्या घटाएं: 3700 - 1400।'
    },
    explanation: {
      en: 'Increase = 3700 - 1400 = 2300 tigers over 16 years.',
      hi: 'वृद्धि = 3700 - 1400 = 2300 बाघ।'
    }
  },
  {
    id: 19,
    category: 'BarGraph',
    question: {
      en: 'In a survey of 120 students about free-time activities, Playing was 45, Reading Story Books was 30, TV was 20, Painting was 15, Music was 10. Which is the most popular activity OTHER THAN playing?',
      hi: '120 छात्रों के खाली समय के सर्वेक्षण में खेल 45, कहानी पढ़ना 30, टीवी 20, चित्रकला 15, संगीत 10 था। खेल के अलावा सबसे लोकप्रिय गतिविधि कौन सी है?'
    },
    options: [
      { en: 'Listening to music (10 students)', hi: 'संगीत सुनना (10 विद्यार्थी)' },
      { en: 'Watching TV (20 students)', hi: 'टीवी देखना (20 विद्यार्थी)' },
      { en: 'Painting (15 students)', hi: 'चित्रकला (15 विद्यार्थी)' },
      { en: 'Reading story books (30 students)', hi: 'कहानी की पुस्तकें पढ़ना (30 विद्यार्थी)' }
    ],
    correctAnswerIndex: 3,
    hint: {
      en: 'Look for the second highest frequency after 45.',
      hi: '45 के बाद दूसरी सबसे बड़ी संख्या देखें।'
    },
    explanation: {
      en: 'Reading story books is preferred by 30 students, making it the most popular activity after playing.',
      hi: 'कहानी की पुस्तकें पढ़ना 30 विद्यार्थियों द्वारा पसंद किया गया, जो खेलने के बाद सबसे अधिक है।'
    }
  },
  {
    id: 20,
    category: 'Concept',
    question: {
      en: 'What is the sum of tally counts: 卌 卌 || + 卌 |||| + ||| ?',
      hi: 'इन मिलान चिह्नों का कुल योग कितना होगा: 卌 卌 || + 卌 |||| + ||| ?'
    },
    options: [
      { en: '24', hi: '24' },
      { en: '22', hi: '22' },
      { en: '26', hi: '26' },
      { en: '20', hi: '20' }
    ],
    correctAnswerIndex: 0,
    hint: {
      en: '(5 + 5 + 2) + (5 + 4) + 3 = 12 + 9 + 3.',
      hi: '(5 + 5 + 2) + (5 + 4) + 3 = 12 + 9 + 3।'
    },
    explanation: {
      en: 'First group = 12, second group = 9, third group = 3. Total = 12 + 9 + 3 = 24.',
      hi: 'पहला समूह = 12, दूसरा समूह = 9, तीसरा समूह = 3। कुल योग = 12 + 9 + 3 = 24।'
    }
  }
];

export interface TopicCheckpointQuestion {
  qId: string;
  type: 'MCQ' | 'PAUSE_AND_SOLVE' | 'TRUE_FALSE' | 'SPOT_THE_TRAP';
  question: BilingualText;
  options?: BilingualText[];
  correctAnswer: string | number;
  hint: BilingualText;
  explanation: BilingualText;
  readingConnection: BilingualText;
}

export interface TopicCheckpoint {
  id: string;
  topicSection: string;
  pageReference: string;
  subtopicTitle: BilingualText;
  whileReadingSummary: BilingualText;
  questions: TopicCheckpointQuestion[];
}

export const TOPIC_CHECKPOINTS_DATA: TopicCheckpoint[] = [
  {
    id: 'chk-1',
    topicSection: 'Section 4.1',
    pageReference: 'Pages 74–76',
    subtopicTitle: {
      en: 'What is Data? Data Collection Need Identification',
      hi: 'आँकड़े क्या हैं? आँकड़े एकत्र करने की आवश्यकता की पहचान'
    },
    whileReadingSummary: {
      en: 'Navya and Naresh wonder how to determine the most popular sport in class. Pari checks whether questions need a fresh survey or are established static facts.',
      hi: 'नव्या और नरेश सोचते हैं कि कक्षा का सबसे लोकप्रिय खेल कैसे पता करें। परी पहचानती है कि किन प्रश्नों के लिए नए आँकड़े जुटाने पड़ते हैं और कौन से पहले से स्थापित तथ्य हैं।'
    },
    questions: [
      {
        qId: 'chk-1-q1',
        type: 'MCQ',
        question: {
          en: 'While reading Pages 74–75: Why could Navya NOT immediately see the most popular game just by looking at her raw list of 31 classmates?',
          hi: 'पृष्ठ 74–75 पढ़ते समय: 31 सहपाठियों की कच्ची सूची देखकर ही नव्या तुरंत सबसे लोकप्रिय खेल क्यों नहीं बता पाई?'
        },
        options: [
          { en: 'Cricket is always the most popular sport in every class', hi: 'क्रिकेट हर कक्षा का हमेशा सबसे लोकप्रिय खेल होता है' },
          { en: 'Some students chose two sports', hi: 'कुछ छात्रों ने दो-दो खेल चुन लिए थे' },
          { en: 'Names and sports were scattered without grouping or frequency counting', hi: 'नाम और खेल बिना समूह या गिनती के बिखरे हुए लिखे थे' },
          { en: 'She forgot to write the names of the students', hi: 'वह छात्रों के नाम लिखना भूल गई थी' }
        ],
        correctAnswer: 2,
        hint: {
          en: 'Raw data is unorganized. Without tallying, individual frequencies cannot be compared at a glance.',
          hi: 'कच्चा आँकड़ा अव्यवस्थित होता है। बिना मिलान चिह्न के बारंबारता की तुलना एक नज़र में नहीं हो सकती।'
        },
        explanation: {
          en: 'In an unorganized list, each response is scattered. One must group identical sports together and tally them into a frequency table to determine the most popular game.',
          hi: 'अव्यवस्थित सूची में प्रत्येक उत्तर बिखरा होता है। समान खेलों को एक साथ रखकर और बारंबारता सारणी बनाकर ही सबसे लोकप्रिय खेल ज्ञात किया जा सकता है।'
        },
        readingConnection: {
          en: 'Connects directly to Page 75 where students wonder: "We can’t yet see the most popular game. How can we get it from this list?".',
          hi: 'पृष्ठ 75 से सीधा संबंध जहाँ बच्चे पूछते हैं: "हम अभी सबसे लोकप्रिय खेल नहीं देख पा रहे हैं। इस सूची से इसे कैसे प्राप्त करें?".'
        }
      },
      {
        qId: 'chk-1-q2',
        type: 'TRUE_FALSE',
        question: {
          en: 'True or False (Page 76): Pari needs to conduct a survey to answer "When did India get independence?".',
          hi: 'सत्य या असत्य (पृष्ठ 76): "भारत को स्वतंत्रता कब मिली?" इसका उत्तर देने के लिए परी को सर्वेक्षण करने की आवश्यकता है।'
        },
        options: [
          { en: 'True (She must ask all classmates their opinion)', hi: 'सत्य (उसे सभी सहपाठियों से राय लेनी होगी)' },
          { en: 'False (It is an established historical fact: 15 August 1947)', hi: 'असत्य (यह एक स्थापित ऐतिहासिक तथ्य है: 15 अगस्त 1947)' }
        ],
        correctAnswer: 1,
        hint: {
          en: 'Historical dates do not change depending on people’s opinions.',
          hi: 'ऐतिहासिक तिथियां लोगों की पसंद या राय से नहीं बदलतीं।'
        },
        explanation: {
          en: 'Fixed historical facts are already known and documented. Data collection is only required when facts, counts, or choices vary and are unknown beforehand.',
          hi: 'निश्चित ऐतिहासिक तथ्य पहले से ज्ञात और प्रलेखित होते हैं। आँकड़े तभी एकत्र किए जाते हैं जब तथ्य, संख्याएँ या प्राथमिकताएँ अज्ञात और परिवर्तनशील हों।'
        },
        readingConnection: {
          en: 'Connects directly to Page 76 Figure it Out Question 4b.',
          hi: 'पृष्ठ 76 के "Figure it Out" प्रश्न 4(b) से सीधा संबंध।'
        }
      }
    ]
  },
  {
    id: 'chk-2',
    topicSection: 'Section 4.1',
    pageReference: 'Pages 76–77',
    subtopicTitle: {
      en: 'Tally Marks & The Nominal Roll Distinction',
      hi: 'मिलान चिह्न (Tally Marks) और व्यक्तिगत नाम सूची का अंतर'
    },
    whileReadingSummary: {
      en: 'Shri Nilesh notes sweet preferences using bundles of 5 (卌). A frequency table tells how many sweets to buy, but not which student chose which sweet.',
      hi: 'श्री नीलेश 5-5 के बंडल (卌) बनाकर मिठाइयों की पसंद दर्ज करते हैं। बारंबारता सारणी यह बताती है कि कितनी मिठाई खरीदनी है, परंतु यह नहीं कि किस छात्र ने कौन सी मिठाई मांगी।'
    },
    questions: [
      {
        qId: 'chk-2-q1',
        type: 'PAUSE_AND_SOLVE',
        question: {
          en: 'Pause & Count (Page 76): Shri Nilesh recorded Gujiya as 卌 卌 ||| and Rasgulla as 卌 ||. How many total sweets of these two types are needed?',
          hi: 'रुकें और गिनें (पृष्ठ 76): श्री नीलेश ने गुजिया के लिए 卌 卌 ||| और रसगुल्ला के लिए 卌 || दर्ज किया। इन दोनों प्रकार की कुल कितनी मिठाइयाँ चाहिए?'
        },
        options: [
          { en: '18 sweets', hi: '18 मिठाइयाँ' },
          { en: '20 sweets (13 Gujiyas + 7 Rasgullas)', hi: '20 मिठाइयाँ (13 गुजिया + 7 रसगुल्ला)' },
          { en: '22 sweets', hi: '22 मिठाइयाँ' },
          { en: '15 sweets', hi: '15 मिठाइयाँ' }
        ],
        correctAnswer: 1,
        hint: {
          en: 'Each bundle 卌 = 5. Gujiya = 5 + 5 + 3 = 13. Rasgulla = 5 + 2 = 7.',
          hi: 'प्रत्येक बंडल 卌 = 5। गुजिया = 5 + 5 + 3 = 13। रसगुल्ला = 5 + 2 = 7।'
        },
        explanation: {
          en: 'Gujiya = (2 × 5) + 3 = 13 students. Rasgulla = (1 × 5) + 2 = 7 students. Total = 13 + 7 = 20 sweets.',
          hi: 'गुजिया = (2 × 5) + 3 = 13 विद्यार्थी। रसगुल्ला = 5 + 2 = 7 विद्यार्थी। कुल = 13 + 7 = 20 मिठाइयाँ।'
        },
        readingConnection: {
          en: 'Directly from Shri Nilesh’s sweet preferences board on Page 76.',
          hi: 'पृष्ठ 76 पर श्री नीलेश के श्यामपट्ट पर लिखी मिठाई सारणी से सीधा संबंधित।'
        }
      },
      {
        qId: 'chk-2-q2',
        type: 'SPOT_THE_TRAP',
        question: {
          en: 'Spot the Trap (Page 77): Is Shri Nilesh’s frequency table sufficient to distribute the sweets to the individual students in class?',
          hi: 'सावधान! (पृष्ठ 77): क्या श्री नीलेश की बारंबारता सारणी कक्षा में व्यक्तिगत छात्रों को सही मिठाई बाँटने के लिए पर्याप्त है?'
        },
        options: [
          { en: 'No, because tally marks cannot be trusted', hi: 'नहीं, क्योंकि मिलान चिह्नों पर भरोसा नहीं किया जा सकता' },
          { en: 'Yes, because every student will take whatever sweet they get', hi: 'हाँ, क्योंकि छात्र जो भी मिठाई मिलेगी ले लेंगे' },
          { en: 'Yes, because the total count equals the total number of students', hi: 'हाँ, क्योंकि कुल संख्या छात्रों की संख्या के बराबर है' },
          { en: 'No, it only gives aggregate counts for buying, not individual students’ choices', hi: 'नहीं, यह केवल खरीदने के लिए कुल संख्या बताती है, व्यक्तिगत छात्रों की पसंद नहीं' }
        ],
        correctAnswer: 3,
        hint: {
          en: 'Knowing you need 6 jalebis does not tell you WHICH 6 students asked for jalebi!',
          hi: 'यह जानना कि 6 जलेबी चाहिए, यह नहीं बताता कि किन 6 छात्रों ने जलेबी मांगी थी!'
        },
        explanation: {
          en: 'A frequency table compresses individual identities into summary counts. To distribute correctly without disputes, a nominal roll associating each student’s name with their selected sweet is required.',
          hi: 'बारंबारता सारणी व्यक्तिगत नामों को संक्षेप में संख्याओं में बदल देती है। सही वितरण के लिए छात्र के नाम के साथ मिठाई की पसंद की अलग सूची आवश्यक है।'
        },
        readingConnection: {
          en: 'Connects directly to Page 77 Question 2: "Is the above table sufficient to distribute each type of sweet to the correct student?".',
          hi: 'पृष्ठ 77 के प्रश्न 2 से सीधा संबंध: "क्या उपरोक्त सारणी प्रत्येक विद्यार्थी को सही मिठाई वितरित करने के लिए पर्याप्त है?".'
        }
      }
    ]
  },
  {
    id: 'chk-3',
    topicSection: 'Section 4.1',
    pageReference: 'Pages 77–78',
    subtopicTitle: {
      en: 'Arranging Raw Data in Ascending Order',
      hi: 'कच्चे आँकड़ों को आरोही (बढ़ते) क्रम में व्यवस्थित करना'
    },
    whileReadingSummary: {
      en: 'Sushri Sandhya sorts 27 shoe sizes in ascending order (3,3,3, 4,4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5, 6,6,6,6, 7) to extract minimum, maximum, and threshold counts effortlessly.',
      hi: 'सुश्री संध्या 27 विद्यार्थियों के जूतों के नाप को आरोही क्रम में व्यवस्थित करती हैं जिससे न्यूनतम, अधिकतम और विशेष नाप वाले छात्रों की गिनती तुरंत हो जाती है।'
    },
    questions: [
      {
        qId: 'chk-3-q1',
        type: 'MCQ',
        question: {
          en: 'While reading Page 77: How many students wear a shoe size larger than 4?',
          hi: 'पृष्ठ 77 पढ़ते समय: कितने विद्यार्थी नाप 4 से बड़ा जूता पहनते हैं?'
        },
        options: [
          { en: '9 students', hi: '9 विद्यार्थी' },
          { en: '10 students', hi: '10 विद्यार्थी' },
          { en: '15 students (10 of size 5 + 4 of size 6 + 1 of size 7)', hi: '15 विद्यार्थी (नाप 5 के 10 + नाप 6 के 4 + नाप 7 का 1)' },
          { en: '14 students', hi: '14 विद्यार्थी' }
        ],
        correctAnswer: 2,
        hint: {
          en: '"Larger than 4" strictly means shoe sizes 5, 6, and 7. Do not count size 4!',
          hi: '"4 से बड़ा" का अर्थ है नाप 5, 6 और 7। नाप 4 को इसमें शामिल न करें!'
        },
        explanation: {
          en: 'Looking at the sorted list: size 5 has 10 students, size 6 has 4 students, size 7 has 1 student. 10 + 4 + 1 = 15 students.',
          hi: 'क्रमबद्ध सूची में: नाप 5 = 10, नाप 6 = 4, नाप 7 = 1। कुल = 10 + 4 + 1 = 15 विद्यार्थी।'
        },
        readingConnection: {
          en: 'Directly checks Page 77 Figure it Out Question 1d.',
          hi: 'पृष्ठ 77 के "Figure it Out" प्रश्न 1(d) की प्रत्यक्ष जाँच।'
        }
      }
    ]
  },
  {
    id: 'chk-4',
    topicSection: 'Section 4.1',
    pageReference: 'Pages 78–79',
    subtopicTitle: {
      en: 'Real-World Frequency: News Article Letter Counts',
      hi: 'वास्तविक जीवन बारंबारता: समाचार पत्र के अक्षरों की गिनती'
    },
    whileReadingSummary: {
      en: 'Counting letters ‘c’, ‘e’, ‘i’, ‘r’, and ‘x’ in an English newspaper article yields the universal ascending frequency order: x < c < r < i < e.',
      hi: 'समाचार पत्र के लेख में ‘c’, ‘e’, ‘i’, ‘r’, ‘x’ अक्षरों की गिनती करने पर लगभग सभी को समान आरोही क्रम प्राप्त होता है: x < c < r < i < e।'
    },
    questions: [
      {
        qId: 'chk-4-q1',
        type: 'MCQ',
        question: {
          en: 'While reading Page 78–79: Why does almost every student get the ascending order "x, c, r, i, e" when counting letters in an English news article?',
          hi: 'पृष्ठ 78–79 पढ़ते समय: अंग्रेज़ी समाचार पत्र के अक्षरों की गिनती में लगभग सभी छात्रों को आरोही क्रम "x, c, r, i, e" क्यों मिलता है?'
        },
        options: [
          { en: 'Because all students used the exact same newspaper article', hi: 'क्योंकि सभी छात्रों ने एक ही समाचार पत्र का उपयोग किया था' },
          { en: 'Because "e" and "i" are high-frequency vowels in English, whereas "x" is very rare', hi: 'क्योंकि अंग्रेज़ी में "e" और "i" सबसे आम स्वर हैं, जबकि "x" बहुत दुर्लभ अक्षर है' },
          { en: 'Because alphabetical order forces this sequence', hi: 'क्योंकि वर्णमाला क्रम इस क्रम को बाध्य करता है' },
          { en: 'It is a mathematical coincidence', hi: 'यह केवल एक गणितीय संयोग है' }
        ],
        correctAnswer: 1,
        hint: {
          en: 'Letter frequency is an intrinsic property of the English language.',
          hi: 'अक्षरों की बारंबारता अंग्रेज़ी भाषा की अंतर्निहित भाषाई विशेषता है।'
        },
        explanation: {
          en: 'In the English language, "e" is statistically the most frequently used letter (~13% of all text), followed by "t", "a", "o", "i", and "n". The letter "x" is one of the rarest (~0.15%). Thus, any news article naturally reflects this frequency pattern.',
          hi: 'अंग्रेज़ी भाषा में "e" सबसे अधिक बार प्रयुक्त होने वाला अक्षर (~13%) है, जबकि "x" सबसे दुर्लभ अक्षरों (~0.15%) में से एक है। इसलिए किसी भी लेख में यह क्रम स्वाभाविक रूप से दिखता है।'
        },
        readingConnection: {
          en: 'Connects directly to Page 78 Question 5c: "Why do you think this is the case?".',
          hi: 'पृष्ठ 78 के प्रश्न 5(c) से सीधा संबंध: "आपके विचार में ऐसा क्यों होता है?".'
        }
      }
    ]
  },
  {
    id: 'chk-5',
    topicSection: 'Section 4.2',
    pageReference: 'Pages 79–81',
    subtopicTitle: {
      en: 'Pictographs & Scaling (चित्रालेख एवं पैमाना)',
      hi: 'चित्रालेख की समझ और पैमाने का उपयोग'
    },
    whileReadingSummary: {
      en: 'Pictographs depict data through symbols. Nand Kishor’s middle school 9-hour sleep survey uses 1 symbol = 10 children, where 2.5 symbols represents 25 children.',
      hi: 'चित्रालेख प्रतीकों से जानकारी देते हैं। नंद किशोर के 9 घंटे की नींद के सर्वेक्षण में 1 प्रतीक = 10 बच्चे हैं, जहाँ 2.5 प्रतीक 25 बच्चों को दर्शाते हैं।'
    },
    questions: [
      {
        qId: 'chk-5-q1',
        type: 'PAUSE_AND_SOLVE',
        question: {
          en: 'Pause & Solve (Page 80): In Nand Kishor’s survey, 4 complete symbols represent children who "Never" slept at least 9 hours. If 1 symbol = 10 children, how many children is that?',
          hi: 'रुकें और हल करें (पृष्ठ 80): नंद किशोर के सर्वेक्षण में 4 पूरे प्रतीक उन बच्चों को दर्शाते हैं जो "कभी नहीं" 9 घंटे सोते। यदि 1 प्रतीक = 10 बच्चे हैं, तो यह कितने बच्चे हैं?'
        },
        options: [
          { en: '25 children', hi: '25 बच्चे' },
          { en: '4 children', hi: '4 बच्चे' },
          { en: '14 children', hi: '14 बच्चे' },
          { en: '40 children (4 × 10 = 40)', hi: '40 बच्चे (4 × 10 = 40)' }
        ],
        correctAnswer: 3,
        hint: {
          en: 'Multiply the count of symbols by the scale value: 4 × 10.',
          hi: 'प्रतीकों की संख्या को पैमाने के मान से गुणा करें: 4 × 10।'
        },
        explanation: {
          en: 'Each symbol stands for 10 children. 4 full symbols = 4 × 10 = 40 children.',
          hi: 'प्रत्येक प्रतीक 10 बच्चों के बराबर है। 4 पूरे प्रतीक = 4 × 10 = 40 बच्चे।'
        },
        readingConnection: {
          en: 'Directly checks Page 80 Solution 3 in the textbook.',
          hi: 'पाठ्यपुस्तक के पृष्ठ 80 के हल 3 की प्रत्यक्ष जाँच।'
        }
      }
    ]
  },
  {
    id: 'chk-6',
    topicSection: 'Section 4.2',
    pageReference: 'Pages 81–83',
    subtopicTitle: {
      en: 'Drawing Pictographs: The Problem of Fractional Symbols',
      hi: 'चित्रालेख रचना: अपूर्ण या आंशिक प्रतीकों की चुनौती'
    },
    whileReadingSummary: {
      en: 'Lakhanpal uses 1 symbol = 1 student, Jarina uses 1 symbol = 5 students, and Sangita uses 1 symbol = 10 students. Representing 33 or 27 students exposes the major limitation of pictographs.',
      hi: 'लखनपाल 1 प्रतीक = 1 छात्र, ज़रीना 1 प्रतीक = 5 छात्र और संगीता 1 प्रतीक = 10 छात्र का पैमाना लेती हैं। 33 या 27 छात्रों को दर्शाने की कोशिश चित्रालेख की मुख्य सीमा को उजागर करती है।'
    },
    questions: [
      {
        qId: 'chk-6-q1',
        type: 'SPOT_THE_TRAP',
        question: {
          en: 'Critical Inquiry (Page 83): If scale is 1 symbol = 10 students, what makes representing 33 or 27 students in a pictograph problematic?',
          hi: 'गंभीर चिंतन (पृष्ठ 83): यदि पैमाना 1 प्रतीक = 10 विद्यार्थी है, तो 33 या 27 विद्यार्थियों को चित्रालेख में दिखाना क्यों समस्याग्रस्त है?'
        },
        options: [
          { en: 'Dividing a symbol into 3/10th or 7/10th accurately is practically impossible to draw and interpret', hi: 'प्रतीक को 3/10 या 7/10 में सटीक रूप से काटना और समझना व्यावहारिक रूप से असंभव है' },
          { en: 'Pictographs cannot represent numbers greater than 20', hi: 'चित्रालेख 20 से बड़ी संख्याओं को नहीं दिखा सकते' },
          { en: 'Only even numbers can be shown in pictographs', hi: 'चित्रालेख में केवल सम संख्याएँ दिखाई जा सकती हैं' },
          { en: 'Calculators do not support pictographs', hi: 'कैलकुलेटर चित्रालेख का समर्थन नहीं करते' }
        ],
        correctAnswer: 0,
        hint: {
          en: 'You can easily draw a half (5/10), but how would you draw 3/10th of a human figure?',
          hi: 'आधा (5/10) तो बनाया जा सकता है, पर किसी चित्र का 3/10 भाग कैसे खींचेंगे और पहचानेंगे?'
        },
        explanation: {
          en: 'Half symbols (like 5 out of 10) are recognizable, but fractional cuts like 3/10 or 7/10 cannot be drawn or read with precision. This is why bar graphs are needed for granular data.',
          hi: 'आधा प्रतीक (10 में से 5) तो पहचाना जा सकता है, लेकिन 3/10 या 7/10 को सटीक बनाना या पढ़ना असंभव होता है। इसीलिए बार ग्राफ की आवश्यकता होती है।'
        },
        readingConnection: {
          en: 'Addresses the exact discussion question on Page 83 Math Talk.',
          hi: 'पृष्ठ 83 के "Math Talk" विचारणीय प्रश्न का समाधान करता है।'
        }
      }
    ]
  },
  {
    id: 'chk-7',
    topicSection: 'Section 4.2',
    pageReference: 'Pages 83–85',
    subtopicTitle: {
      en: 'Real-World Pictographs: Library Books & Kite Sales',
      hi: 'वास्तविक जीवन चित्रालेख: पुस्तकालय पुस्तकें एवं पतंग बिक्री'
    },
    whileReadingSummary: {
      en: 'Ginnori school library books borrowing peaks on Saturday (8 books) for Sunday reading. Magan Bhai sells 700 kites to Poonam Ben (7 symbols), which exceeds double Rani’s 300 kites.',
      hi: 'गिन्नौरी स्कूल पुस्तकालय से पुस्तकें शनिवार को सर्वाधिक (8) ली जाती हैं। मगन भाई पूनम बेन को 700 पतंगें (7 प्रतीक) बेचते हैं जो रानी की 300 पतंगों के दोगुने से अधिक हैं।'
    },
    questions: [
      {
        qId: 'chk-7-q1',
        type: 'MCQ',
        question: {
          en: 'While reading Page 84–85: Magan Bhai sells kites with scale 1 🪁 = 100 kites. How many symbols represent Rani’s purchase of 300 kites?',
          hi: 'पृष्ठ 84–85 पढ़ते समय: मगन भाई 1 🪁 = 100 पतंग के पैमाने से पतंगें बेचते हैं। रानी द्वारा खरीदी गई 300 पतंगों के लिए कितने प्रतीक बनेंगे?'
        },
        options: [
          { en: '300 symbols', hi: '300 प्रतीक' },
          { en: '30 symbols', hi: '30 प्रतीक' },
          { en: '3 symbols (300 ÷ 100 = 3)', hi: '3 प्रतीक (300 ÷ 100 = 3)' },
          { en: '6 symbols', hi: '6 प्रतीक' }
        ],
        correctAnswer: 2,
        hint: {
          en: 'Divide the number of kites by the scale value: 300 ÷ 100.',
          hi: 'पतंगों की संख्या को पैमाने से भाग दें: 300 ÷ 100।'
        },
        explanation: {
          en: 'Number of symbols = Total kites ÷ Scale = 300 ÷ 100 = 3 symbols.',
          hi: 'प्रतीकों की संख्या = 300 ÷ 100 = 3 प्रतीक।'
        },
        readingConnection: {
          en: 'Connects directly to Page 85 Figure it Out Question 2a.',
          hi: 'पृष्ठ 85 के "Figure it Out" प्रश्न 2(a) से सीधा संबंध।'
        }
      }
    ]
  },
  {
    id: 'chk-8',
    topicSection: 'Section 4.3',
    pageReference: 'Pages 85–87',
    subtopicTitle: {
      en: 'Introduction to Bar Graphs: Lakhanpal Absenteeism',
      hi: 'दंड आलेख (Bar Graph) की शुरुआत: लखनपाल का अनुपस्थिति आलेख'
    },
    whileReadingSummary: {
      en: 'Bar graphs use equally-spaced bars of uniform width where bar height equals frequency. Class 5 had 0 absent students (full attendance), while Class 8 had the maximum absent (7).',
      hi: 'दंड आलेख में समान चौड़ाई और समान दूरी वाले दंड होते हैं जहाँ ऊँचाई बारंबारता दर्शाती है। कक्षा 5 में 0 अनुपस्थित (पूर्ण उपस्थिति) और कक्षा 8 में सर्वाधिक (7) अनुपस्थित थे।'
    },
    questions: [
      {
        qId: 'chk-8-q1',
        type: 'MCQ',
        question: {
          en: 'While reading Page 86: How does a bar graph represent a frequency of 0 (such as Class 5 with 0 absences)?',
          hi: 'पृष्ठ 86 पढ़ते समय: दंड आलेख में 0 बारंबारता (जैसे कक्षा 5 में 0 अनुपस्थिति) को कैसे प्रदर्शित किया जाता है?'
        },
        options: [
          { en: 'A cross is drawn across the entire graph', hi: 'पूरे आलेख पर क्रॉस बना दिया जाता है' },
          { en: 'The bar has a height of 0, lying flat along the base line', hi: 'दंड की ऊँचाई 0 होती है, जो आधार रेखा पर सपाट रहती है' },
          { en: 'The category is deleted from the horizontal axis', hi: 'श्रेणी को क्षैतिज अक्ष से हटा दिया जाता है' },
          { en: 'A dotted circle is drawn above the category', hi: 'श्रेणी के ऊपर बिंदुदार वृत्त बनाया जाता है' }
        ],
        correctAnswer: 1,
        hint: {
          en: 'The bar starts at 0 on the vertical scale.',
          hi: 'दंड ऊर्ध्वाधर पैमाने पर 0 पर ही रहता है।'
        },
        explanation: {
          en: 'When frequency is 0, the bar has 0 unit height and stays flat on the axis, clearly indicating that the count is zero without omitting the category label.',
          hi: 'जब बारंबारता 0 होती है, तो दंड की ऊँचाई 0 होती है और वह आधार रेखा पर ही रहता है, जिससे स्पष्ट होता है कि मान शून्य है।'
        },
        readingConnection: {
          en: 'Directly checks Page 86 Figure it Out Question 3 on Class 5 full attendance.',
          hi: 'पृष्ठ 86 पर कक्षा 5 की पूर्ण उपस्थिति वाले प्रश्न 3 की प्रत्यक्ष जाँच।'
        }
      }
    ]
  },
  {
    id: 'chk-9',
    topicSection: 'Section 4.3',
    pageReference: 'Pages 87–88',
    subtopicTitle: {
      en: 'Vehicular Traffic Bar Graph: Rush Hour Analysis',
      hi: 'वाहनों के आवागमन का दंड आलेख: व्यस्ततम समय का विश्लेषण'
    },
    whileReadingSummary: {
      en: 'A busy Delhi intersection was monitored from 6 AM to 12 Noon. Traffic peaked at 7–8 AM (1200 vehicles) and dropped steadily to 600 vehicles by noon, totaling 4450 vehicles.',
      hi: 'दिल्ली के व्यस्त चौराहे पर सुबह 6 से दोपहर 12 बजे तक निगरानी की गई। सुबह 7-8 बजे चरम ट्रैफिक (1200 वाहन) था जो दोपहर तक घटकर 600 वाहन रह गया, कुल 4450 वाहन गुजरे।'
    },
    questions: [
      {
        qId: 'chk-9-q1',
        type: 'PAUSE_AND_SOLVE',
        question: {
          en: 'Pause & Solve (Page 88): What was the total number of vehicles passing during the 2-hour window from 8:00 AM to 10:00 AM?',
          hi: 'रुकें और हल करें (पृष्ठ 88): सुबह 8:00 बजे से 10:00 बजे के 2 घंटे के दौरान कुल कितने वाहन गुजरे?'
        },
        options: [
          { en: '1,000 vehicles', hi: '1,000 वाहन' },
          { en: '2,200 vehicles', hi: '2,200 वाहन' },
          { en: '1,500 vehicles', hi: '1,500 वाहन' },
          { en: '1,800 vehicles (1000 + 800)', hi: '1,800 वाहन (1000 + 800)' }
        ],
        correctAnswer: 3,
        hint: {
          en: 'Check the bar for 8–9 AM (1000) and the bar for 9–10 AM (800).',
          hi: '8-9 बजे का दंड (1000) और 9-10 बजे का दंड (800) जोड़ें।'
        },
        explanation: {
          en: '8–9 AM traffic was 1,000 vehicles and 9–10 AM traffic was 800 vehicles. Total = 1,000 + 800 = 1,800 vehicles.',
          hi: '8-9 बजे 1,000 वाहन और 9-10 बजे 800 वाहन थे। कुल = 1000 + 800 = 1,800 वाहन।'
        },
        readingConnection: {
          en: 'Directly calculated on Page 87 line 481 in textbook text.',
          hi: 'पाठ्यपुस्तक के पृष्ठ 87 पर सीधे दिए गए उदाहरण से संबंधित।'
        }
      }
    ]
  },
  {
    id: 'chk-10',
    topicSection: 'Section 4.3',
    pageReference: 'Pages 88–89',
    subtopicTitle: {
      en: 'Decade Population Growth: Large Scale Management',
      hi: 'दशकों में जनसंख्या वृद्धि: बड़े पैमाने का प्रबंधन'
    },
    whileReadingSummary: {
      en: 'India’s population grew from 36 crores in 1951 to 102 crores in 2001. A scale of 1 unit length = 10 crores makes plotting large census numbers manageable and neat.',
      hi: 'भारत की जनसंख्या 1951 में 36 करोड़ से बढ़कर 2001 में 102 करोड़ हो गई। 1 इकाई = 10 करोड़ का पैमाना इतनी बड़ी संख्याओं को सुंदर और सुगम बनाता है।'
    },
    questions: [
      {
        qId: 'chk-10-q1',
        type: 'MCQ',
        question: {
          en: 'While reading Page 88–89: If 1 unit represents 10 crores, how tall is the bar representing 80 crores?',
          hi: 'पृष्ठ 88–89 पढ़ते समय: यदि 1 इकाई = 10 करोड़ है, तो 80 करोड़ को दर्शाने वाले दंड की ऊँचाई कितनी होगी?'
        },
        options: [
          { en: '8 units (80 ÷ 10 = 8)', hi: '8 इकाई (80 ÷ 10 = 8)' },
          { en: '80 units', hi: '80 इकाई' },
          { en: '4 units', hi: '4 इकाई' },
          { en: '10 units', hi: '10 इकाई' }
        ],
        correctAnswer: 0,
        hint: {
          en: 'Divide the population value by the scale unit: 80 ÷ 10.',
          hi: 'जनसंख्या को पैमाने की इकाई से भाग दें: 80 ÷ 10।'
        },
        explanation: {
          en: 'Bar height = 80 crores ÷ 10 crores/unit = 8 units.',
          hi: 'दंड की ऊँचाई = 80 ÷ 10 = 8 इकाई लंबाई।'
        },
        readingConnection: {
          en: 'Explicitly stated on Page 89 lines 536–537.',
          hi: 'पृष्ठ 89 की पंक्तियों 536–537 में स्पष्ट रूप से उल्लिखित।'
        }
      }
    ]
  },
  {
    id: 'chk-11',
    topicSection: 'Section 4.4',
    pageReference: 'Pages 89–93',
    subtopicTitle: {
      en: 'Drawing a Bar Graph & Imran Family Budget',
      hi: 'दंड आलेख बनाना एवं इमरान के परिवार का बजट'
    },
    whileReadingSummary: {
      en: 'Steps: perpendicular axes, uniform bar width, equal spacing, scale selection. Imran’s family spends ₹3400 on food (17 units) and ₹3000 on rent (15 units) with scale 1 unit = ₹200.',
      hi: 'चरण: परस्पर लंबवत अक्ष, समान चौड़ाई, समान दूरी, पैमाना चयन। इमरान का परिवार 1 इकाई = ₹200 के पैमाने पर भोजन पर ₹3400 (17 इकाई) और किराए पर ₹3000 (15 इकाई) खर्च करता है।'
    },
    questions: [
      {
        qId: 'chk-11-q1',
        type: 'MCQ',
        question: {
          en: 'While reading Page 93: Imran spends ₹800 on Education and ₹400 on Electricity. Is electricity cost about one-half the cost of education?',
          hi: 'पृष्ठ 93 पढ़ते समय: इमरान शिक्षा पर ₹800 और बिजली पर ₹400 खर्च करता है। क्या बिजली का खर्च शिक्षा के खर्च का लगभग आधा है?'
        },
        options: [
          { en: 'No, electricity is more expensive', hi: 'नहीं, बिजली अधिक महँगी है' },
          { en: 'No, it is double', hi: 'नहीं, यह दोगुना है' },
          { en: 'Yes, exactly half (400 = 800 ÷ 2)', hi: 'हाँ, ठीक आधा (400 = 800 ÷ 2)' },
          { en: 'Cannot be determined from the bar graph', hi: 'दंड आलेख से निर्धारित नहीं किया जा सकता' }
        ],
        correctAnswer: 2,
        hint: {
          en: 'Compare the bar heights: 2 units for electricity vs 4 units for education.',
          hi: 'दंडों की ऊँचाई की तुलना करें: बिजली = 2 इकाई, शिक्षा = 4 इकाई।'
        },
        explanation: {
          en: 'Electricity bar is 2 units tall (₹400) and education bar is 4 units tall (₹800). 2 is exactly half of 4, so electricity is half of education.',
          hi: 'बिजली का दंड 2 इकाई (₹400) और शिक्षा का दंड 4 इकाई (₹800) है। 400 ठीक 800 का आधा है।'
        },
        readingConnection: {
          en: 'Checks Page 93 Question 2 in textbook.',
          hi: 'पाठ्यपुस्तक के पृष्ठ 93 के प्रश्न 2 की जाँच करता है।'
        }
      }
    ]
  },
  {
    id: 'chk-12',
    topicSection: 'Section 4.4',
    pageReference: 'Pages 93–94',
    subtopicTitle: {
      en: 'Finding Scale & Fixing Graph Errors: Railway Tickets',
      hi: 'पैमाना ज्ञात करना एवं आलेख की त्रुटि सुधार: रेलवे टिकट'
    },
    whileReadingSummary: {
      en: 'Pooja’s board graph for Bhopal railway tickets shows Vidisha (24 tickets) as 6 units. Therefore, the scale is 1 unit = 4 tickets. Sagar needs 4 units, and Indore (28 tickets) requires 7 units.',
      hi: 'भोपाल रेलवे स्टेशन के टिकटों के आलेख में विदिशा (24 टिकट) 6 इकाई है, अतः पैमाना 1 इकाई = 4 टिकट है। सागर के लिए 4 इकाई और इंदौर (28 टिकट) के लिए 7 इकाई का दंड चाहिए।'
    },
    questions: [
      {
        qId: 'chk-12-q1',
        type: 'PAUSE_AND_SOLVE',
        question: {
          en: 'Pause & Solve (Page 94): If 24 tickets for Vidisha are drawn with a bar of length 6 units, what is the scale of the graph?',
          hi: 'रुकें और हल करें (पृष्ठ 94): यदि विदिशा के 24 टिकटों के लिए 6 इकाई लंबा दंड बना है, तो आलेख का पैमाना क्या है?'
        },
        options: [
          { en: '1 unit length = 6 tickets', hi: '1 इकाई लंबाई = 6 टिकट' },
          { en: '1 unit length = 4 tickets (24 ÷ 6 = 4)', hi: '1 इकाई लंबाई = 4 टिकट (24 ÷ 6 = 4)' },
          { en: '1 unit length = 24 tickets', hi: '1 इकाई लंबाई = 24 टिकट' },
          { en: '1 unit length = 18 tickets', hi: '1 इकाई लंबाई = 18 टिकट' }
        ],
        correctAnswer: 1,
        hint: {
          en: 'Scale = Total value ÷ Number of units on the bar = 24 ÷ 6.',
          hi: 'पैमाना = कुल मान ÷ दंड की इकाइयाँ = 24 ÷ 6।'
        },
        explanation: {
          en: 'Scale is determined by dividing the known category value by its bar length: 24 tickets ÷ 6 units = 4 tickets per unit.',
          hi: 'पैमाना ज्ञात करने के लिए कुल मान को दंड की लंबाई से भाग देते हैं: 24 ÷ 6 = 4 टिकट प्रति इकाई।'
        },
        readingConnection: {
          en: 'Directly checks Page 94 Figure it Out Question 2c.',
          hi: 'पृष्ठ 94 के "Figure it Out" प्रश्न 2(c) की प्रत्यक्ष जाँच।'
        }
      }
    ]
  },
  {
    id: 'chk-13',
    topicSection: 'Section 4.4',
    pageReference: 'Pages 94–96',
    subtopicTitle: {
      en: 'The Weighted Frequency Trap: Jasprit Bumrah Wickets',
      hi: 'भारित बारंबारता का भ्रम: जसप्रीत बुमराह के विकेट'
    },
    whileReadingSummary: {
      en: 'Faiz records Bumrah taking wickets in 30 matches. Mayank tries to sum 0+1+2+...+7=28, which is completely wrong because each wicket score occurred across multiple matches (Total = 90 wickets).',
      hi: 'फैज़ बुमराह के 30 मैचों के विकेट दर्ज करता है। मयनक 0+1+2+...+7=28 जोड़ता है जो गलत है, क्योंकि प्रत्येक विकेट कई मैचों में आया है (सही कुल = 90 विकेट)।'
    },
    questions: [
      {
        qId: 'chk-13-q1',
        type: 'SPOT_THE_TRAP',
        question: {
          en: 'Spot the Trap (Page 96): Why is Mayank completely wrong when he says "Total wickets = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28"?',
          hi: 'सावधान! (पृष्ठ 96): मयंक पूरी तरह से गलत क्यों है जब वह कहता है "कुल विकेट = 0 + 1 + 2 + ... + 7 = 28"?'
        },
        options: [
          { en: 'The sum of 0 to 7 is actually 30', hi: '0 से 7 का योग वास्तव में 30 होता है' },
          { en: 'He forgot to add 8 wickets', hi: 'वह 8 विकेट जोड़ना भूल गया' },
          { en: 'Bumrah never took 0 wickets', hi: 'बुमराह ने कभी 0 विकेट नहीं लिए' },
          { en: 'He summed the wicket category labels instead of multiplying each wicket by its match frequency', hi: 'उसने विकेटों को मैचों की संख्या से गुणा करने के बजाय केवल विकेट श्रेणियों को जोड़ दिया' }
        ],
        correctAnswer: 3,
        hint: {
          en: 'If Bumrah took 3 wickets in 8 different matches, how many wickets did he take in those 8 matches alone? (3 × 8 = 24, not 3!)',
          hi: 'यदि बुमराह ने 8 अलग-अलग मैचों में 3-3 विकेट लिए, तो केवल उन्हीं 8 मैचों में कुल 24 विकेट हुए, 3 नहीं!'
        },
        explanation: {
          en: 'To find the aggregate total of a frequency distribution table, you must multiply each value by its corresponding frequency and sum the products: Total = Σ (Wickets × Matches) = 0 + 4 + 12 + 24 + 12 + 25 + 6 + 7 = 90 wickets.',
          hi: 'बारंबारता सारणी में कुल योग निकालने के लिए प्रत्येक मान को उसकी बारंबारता से गुणा करके जोड़ना पड़ता है: कुल विकेट = 90।'
        },
        readingConnection: {
          en: 'Connects directly to Page 96 Figure it Out Question 5e & 5f.',
          hi: 'पृष्ठ 96 के "Figure it Out" प्रश्न 5(e) और 5(f) से सीधा संबंध।'
        }
      }
    ]
  },
  {
    id: 'chk-14',
    topicSection: 'Section 4.4',
    pageReference: 'Pages 96–100',
    subtopicTitle: {
      en: 'Real-World Surveys: Mudhol Hounds & Project Tiger',
      hi: 'वास्तविक सर्वेक्षण: मुधोल हाउंड्स एवं प्रोजेक्ट टाइगर'
    },
    whileReadingSummary: {
      en: 'Mudhol Hound dog populations (18, 36, 12, 48, 18, 24) are multiples of 6. Project Tiger saw tiger numbers surge from 1400 in 2006 to 3700 in 2022 (a massive increase of 2300 tigers).',
      hi: 'मुधोल हाउंड्स कुत्तों की संख्या 6 की गुणज है। प्रोजेक्ट टाइगर में 2006 (1400) से 2022 (3700) तक बाघों की संख्या में 2300 की भारी वृद्धि दर्ज की गई।'
    },
    questions: [
      {
        qId: 'chk-14-q1',
        type: 'MCQ',
        question: {
          en: 'While reading Page 98: Why is 1 symbol = 6 dogs chosen as the scale for Village A (18), B (36), C (12), D (48), E (18), F (24)?',
          hi: 'पृष्ठ 98 पढ़ते समय: गाँव A (18), B (36), C (12), D (48), E (18), F (24) के लिए 1 प्रतीक = 6 कुत्ते का पैमाना क्यों चुना गया?'
        },
        options: [
          { en: '6 is the Highest Common Factor (HCF) so every village has exact whole symbols without fractional splits', hi: '6 इन सभी का महत्तम समापवर्तक (HCF) है जिससे हर गाँव के लिए बिना कटे पूरे प्रतीक बनते हैं' },
          { en: 'Because there are 6 villages', hi: 'क्योंकि कुल 6 गाँव हैं' },
          { en: 'Because dogs have 6 whiskers', hi: 'क्योंकि कुत्तों की 6 मूंछें होती हैं' },
          { en: 'Any random number could have been chosen', hi: 'कोई भी यादृच्छिक संख्या चुनी जा सकती थी' }
        ],
        correctAnswer: 0,
        hint: {
          en: 'Notice that 18, 36, 12, 48, 18, 24 all divide by 6 with zero remainder.',
          hi: 'ध्यान दें कि 18, 36, 12, 48, 18, 24 सभी 6 से बिना शेषफल के पूरी विभाजित होती हैं।'
        },
        explanation: {
          en: 'Choosing an HCF scale ensures clean integer symbol counts: 3, 6, 2, 8, 3, and 4 symbols, eliminating tricky half or quarter symbols.',
          hi: 'HCF पैमाना चुनने से 3, 6, 2, 8, 3 और 4 पूरे-पूरे प्रतीक बनते हैं और कोई अधूरा चित्र नहीं बनाना पड़ता।'
        },
        readingConnection: {
          en: 'Directly checks Page 98 Figure it Out Question 8a.',
          hi: 'पृष्ठ 98 के प्रश्न 8(a) की प्रत्यक्ष जाँच।'
        }
      }
    ]
  },
  {
    id: 'chk-15',
    topicSection: 'Section 4.5',
    pageReference: 'Pages 100–103',
    subtopicTitle: {
      en: 'Aesthetic Direction of Bars (Vertical vs Horizontal)',
      hi: 'दंडों की कलात्मक दिशा: ऊर्ध्वाधर बनाम क्षैतिज दंड'
    },
    whileReadingSummary: {
      en: 'Bars can be drawn vertically or horizontally. Heights growing upwards from the ground (mountains, humans) require vertical columns; ground distances and river lengths require horizontal bars.',
      hi: 'दंड ऊर्ध्वाधर या क्षैतिज हो सकते हैं। ज़मीन से ऊपर उठने वाली ऊँचाई (पहाड़, मानव कद) के लिए खड़े दंड और धरातल पर दूरी व नदी की लंबाई के लिए क्षैतिज दंड उपयुक्त होते हैं।'
    },
    questions: [
      {
        qId: 'chk-15-q1',
        type: 'MCQ',
        question: {
          en: 'While reading Page 102–103: Why is a horizontal bar graph preferred for showing the lengths of the longest rivers on each continent?',
          hi: 'पृष्ठ 102–103 पढ़ते समय: प्रत्येक महाद्वीप की सबसे लंबी नदियों की लंबाई दिखाने के लिए क्षैतिज दंड आलेख क्यों पसंद किया जाता है?'
        },
        options: [
          { en: 'Rivers only flow from East to West', hi: 'नदियाँ केवल पूर्व से पश्चिम की ओर बहती हैं' },
          { en: 'Vertical bars cannot hold numbers larger than 1000', hi: 'खड़े दंड 1000 से बड़ी संख्याएँ नहीं दिखा सकते' },
          { en: 'River lengths extend horizontally across the Earth’s surface, mirroring horizontal bars naturally', hi: 'नदियाँ पृथ्वी के धरातल पर क्षैतिज रूप से बहती हैं, जो क्षैतिज दंडों से स्वाभाविक रूप से मेल खाती हैं' },
          { en: 'It uses less paper in textbooks', hi: 'पाठ्यपुस्तकों में इससे कम कागज़ खर्च होता है' }
        ],
        correctAnswer: 2,
        hint: {
          en: 'Align the graph orientation with physical reality: rivers flow horizontally across land.',
          hi: 'आलेख की दिशा को भौतिक वास्तविकता से जोड़ें: नदियाँ ज़मीन पर क्षैतिज रूप से बहती हैं।'
        },
        explanation: {
          en: 'Aesthetic and visual coherence means aligning graphic direction with physical phenomena: vertical columns for heights rising upward, and horizontal bars for distances lying flat across terrain.',
          hi: 'कलात्मक सुसंगतता का नियम कहता है कि दृश्य दिशा को भौतिक वास्तविकता से मिलाएँ: ऊँचाई के लिए खड़े स्तंभ और ज़मीन पर फैली दूरी/नदी के लिए क्षैतिज दंड।'
        },
        readingConnection: {
          en: 'Directly checks Page 103 Figure it Out Question 2.',
          hi: 'पृष्ठ 103 के "Figure it Out" प्रश्न 2 की प्रत्यक्ष जाँच।'
        }
      }
    ]
  },
  {
    id: 'chk-16',
    topicSection: 'Section 4.5',
    pageReference: 'Pages 103–106',
    subtopicTitle: {
      en: 'Infographics & Why Triangular Charts Mislead Viewers',
      hi: 'सूचना आलेख (Infographics) एवं त्रिकोणीय आलेख भ्रामक क्यों होते हैं'
    },
    whileReadingSummary: {
      en: 'Fancy visual infographics can distort reality. Replacing equal-width bars with triangles makes taller mountains wider at the base, causing their visual area to grow quadratically and mislead the human eye.',
      hi: 'आकर्षक दृश्य आलेख कभी-कभी वास्तविकता को विकृत कर देते हैं। समान चौड़ाई के स्थान पर त्रिभुज बनाने से ऊँचे पहाड़ों का आधार भी चौड़ा हो जाता है जिससे उनका क्षेत्रफल अस्वाभाविक रूप से बड़ा दिखता है।'
    },
    questions: [
      {
        qId: 'chk-16-q1',
        type: 'SPOT_THE_TRAP',
        question: {
          en: 'While reading Pages 104–105: In the mountain heights infographic, why is using triangular mountains instead of equal-width rectangles scientifically misleading?',
          hi: 'पृष्ठ 104–105 पढ़ते समय: पर्वत शिखरों के आलेख में समान चौड़ाई के आयतों के स्थान पर त्रिभुज बनाना वैज्ञानिक रूप से भ्रामक क्यों है?'
        },
        options: [
          { en: 'Mountains do not look like triangles', hi: 'पर्वत त्रिभुज जैसे नहीं दिखते' },
          { en: 'As triangle height increases, its base width also widens, causing visual area to explode disproportionately', hi: 'त्रिभुज की ऊँचाई बढ़ने से उसका आधार भी चौड़ा हो जाता है, जिससे दृश्य क्षेत्रफल अस्वाभाविक रूप से बढ़ जाता है' },
          { en: 'Everest is actually shorter than Elbrus', hi: 'एवरेस्ट वास्तव में एल्ब्रस से छोटा है' },
          { en: 'Triangles cannot be measured with a ruler', hi: 'त्रिभुज को पैमाने से नहीं नापा जा सकता' }
        ],
        correctAnswer: 1,
        hint: {
          en: 'If height doubles and base doubles, area becomes 4 times as big (Area = 1/2 × base × height)!',
          hi: 'यदि ऊँचाई दोगुनी और आधार भी दोगुना हो जाए, तो क्षेत्रफल 4 गुना बड़ा हो जाता है!'
        },
        explanation: {
          en: 'In a true bar graph, all widths are equal, so height directly mirrors frequency. In a triangular infographic, area grows with the square of the height, giving the false illusion that Everest is colossal compared to Elbrus.',
          hi: 'मानक दंड आलेख में चौड़ाई समान होने से केवल ऊँचाई मान दर्शाती है। त्रिभुज में ऊँचाई बढ़ने पर आधार भी बढ़ जाता है, जिससे क्षेत्रफल वर्गानुपात में बढ़कर भ्रामक दृश्य प्रभाव उत्पन्न करता है।'
        },
        readingConnection: {
          en: 'Connects directly to Page 104 text: "The taller triangles are also wider! The infographic is implying additional information that may be misleading.".',
          hi: 'पृष्ठ 104 के मुख्य पाठ से सीधा संबंध: "ऊँचे त्रिभुज चौड़े भी हैं! यह सूचना आलेख ऐसी अतिरिक्त जानकारी का संकेत दे रहा है जो भ्रामक हो सकती है।".'
        }
      }
    ]
  }
];
