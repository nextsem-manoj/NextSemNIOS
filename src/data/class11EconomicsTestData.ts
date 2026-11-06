export interface TestQuestion {
  id: string;
  chapterNumber: number;
  chapterCode: string;
  chapterTitle: string;
  questionNo: number;
  questionType: 'MCQ' | 'Assertion-Reason' | 'Case-Based' | 'Match-Following';
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

export const CLASS_11_ECONOMICS_TEST_QUESTIONS: TestQuestion[] = [
  // =========================================================================
  // CHAPTER 1: INDIAN ECONOMY ON THE EVE OF INDEPENDENCE (keec101)
  // स्वतंत्रता की पूर्व संध्या पर भारतीय अर्थव्यवस्था
  // =========================================================================
  {
    id: 'eco-ch1-q1',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 1,
    questionType: 'MCQ',
    questionText: 'What was the primary economic objective of British colonial rule in India for nearly two centuries?',
    questionTextHinglish: 'Lagbhag 200 saal ke British colonial rule ka India ke prati primary economic objective (mukhya uddeshya) kya tha?',
    options: [
      'To build a modern industrial powerhouse in South Asia',
      'To reduce India to a mere supplier of raw materials for Britain and a consumer of British finished products',
      'To achieve equitable distribution of agricultural land among rural farmers',
      'To establish a world-class educational and healthcare network'
    ],
    optionsHinglish: [
      'South Asia mein India ko modern industrial powerhouse banana',
      'India ko Britain ki factories ke liye raw material supplier aur British manufactured goods ka consumer banana',
      'Gaon ke kisanon ke beech zameen ka baraabar distribution karna',
      'World-class educational aur health infrastructure khada karna'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 4',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'NCERT clearly batata hai: "The sole purpose of the British colonial rule in India was to reduce the country to being a raw material supplier for Great Britain’s own rapidly expanding modern industrial base." Is exploitative policy ne India ki traditional industries ko barbad karke use captive market bana diya.',
    formulaOrConcept: 'Colonial Exploitation: India as Raw Material Exporter + Finished Goods Importer',
    tags: ['Colonial Rule', 'De-industrialisation', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q2',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 2,
    questionType: 'MCQ',
    questionText: 'Which exquisite variety of cotton textile had its origin in Bengal (around Dhaka), whose finest grade was famously known as "malmal khas" or "malmal shahi"?',
    questionTextHinglish: 'Pre-independence Bengal (Dhaka) ka kaun sa world-famous cotton textile tha jiska sabse shreshth variety "malmal khas" ya "malmal shahi" kehlata tha?',
    options: [
      'Daccai Muslin (मलमल)',
      'Calico Textile',
      'Chintz Fabric',
      'Bandhani Silk'
    ],
    optionsHinglish: [
      'Daccai Muslin (ढाकाई मलमल)',
      'Calico Textile',
      'Chintz Fabric',
      'Bandhani Silk'
    ],
    correctIndex: 0,
    ncertReference: 'NCERT Ch 1, Page 4 (Box 1.1)',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Box 1.1 ke mutabiq, Bengal (Dacca/Dhaka) ka "Daccai Muslin" poori duniya mein mashhoor tha. Iski sabse finest variety ko "malmal khas" ya "malmal shahi" kaha jaata tha kyunki yeh royal kings aur nawabs pehna karte the.',
    formulaOrConcept: 'Daccai Muslin (Malmal Khas): Royal Cotton Textile Craftsmanship of Bengal',
    tags: ['Handicrafts', 'Muslin', 'Bengal Textiles', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q3',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 3,
    questionType: 'MCQ',
    questionText: 'Among the individual estimators who attempted to calculate India’s national income and per capita income during the colonial period, whose estimates were considered the most significant?',
    questionTextHinglish: 'Colonial period mein jin economists ne India ki National Income aur Per Capita Income calculate karne ki koshish ki, unme kiske estimates sabse zyada significant aur scientific maane gaye?',
    options: [
      'Dadabhai Naoroji',
      'William Digby',
      'Findlay Shirras',
      'V.K.R.V. Rao'
    ],
    optionsHinglish: [
      'Dadabhai Naoroji',
      'William Digby',
      'Findlay Shirras',
      'Dr. V.K.R.V. Rao'
    ],
    correctIndex: 3,
    ncertReference: 'NCERT Ch 1, Page 5',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Colonial government ne official national income calculate nahi ki. Kai logon ne koshish ki—Dadabhai Naoroji, William Digby, Findlay Shirras, V.K.R.V. Rao aur R.C. Desai. Inme se Dr. V.K.R.V. Rao ke estimates ko sabse accurate aur scientifically significant maana gaya.',
    formulaOrConcept: 'National Income Estimators: V.K.R.V. Rao estimates were considered most significant',
    tags: ['National Income', 'VKRV Rao', 'Per Capita Income', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q4',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 4,
    questionType: 'MCQ',
    questionText: 'During the first half of the twentieth century under British rule, what was India’s annual growth rate of aggregate real output and per capita output?',
    questionTextHinglish: 'Twentieth century ke first half mein British rule ke dauraan India ki annual real output growth aur per capita output growth kitni thi?',
    options: [
      'Real output growth was over 5%, per capita output was 3%',
      'Real output growth was less than 2%, per capita output was a meagre 0.5%',
      'Real output growth was 3.5%, per capita output was 1.5%',
      'Real output growth was negative (-1%), per capita output was 0%'
    ],
    optionsHinglish: [
      'Real output growth 5% se zyada aur per capita 3% thi',
      'Aggregate real output growth 2% se kam aur per capita output sirf 0.5% (aadha percent) thi',
      'Real output growth 3.5% aur per capita 1.5% thi',
      'Real output growth negative (-1%) thi'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 5',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'NCERT text ke mutabiq: "Most studies found that the country’s growth of aggregate real output during the first half of the twentieth century was less than two per cent coupled with a meagre half per cent (0.5%) growth in per capita output per year." Yeh Indian economy ke deep stagnation ko dikhata hai.',
    formulaOrConcept: 'Colonial Growth: Real Output < 2% per year; Per Capita Output ≈ 0.5% per year',
    tags: ['Stagnation', 'Growth Rates', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q5',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 5,
    questionType: 'MCQ',
    questionText: 'What was the primary reason for agricultural stagnation under the Zamindari settlement system in the Bengal Presidency?',
    questionTextHinglish: 'Bengal Presidency mein Zamindari land settlement system ke tehat kheti (agriculture) ke pichhadne aur sthir rehne ki mukhya wajah kya thi?',
    options: [
      'Cultivators refused to adopt modern tractors and tube-wells',
      'Zamindars were only interested in extracting maximum rent regardless of the farmers’ plight, bound by rigid revenue deposit deadlines',
      'The government banned the sale of agricultural crops in open markets',
      'Excess rainfall continuously destroyed all food crops across eastern India'
    ],
    optionsHinglish: [
      'Kisanon ne modern tractors lene se inkar kar diya tha',
      'Zamindars sirf lagan (rent) wasoolne mein lage the aur British revenue deposit ki fixed dates ki wajah se unpar kadi shartein thi',
      'British sarkar ne kisanon ke anaaj bechne par ban laga diya tha',
      'Lagataar baadh ki wajah se har saal fasal barbad ho jaati thi'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 6',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Zamindari system mein kheti ka profit seedhe zamindars ke paas jaata tha, kisanon ke paas nahi. Zamindars ne zameen par koi investment nahi kiya. Sath hi British terms ke mutabiq fixed date par revenue jama karna zaroori tha, varna zamindar apne rights kho deta tha.',
    formulaOrConcept: 'Zamindari System: Rent Extraction Without Farm Investment + Rigid Revenue Settlement Dates',
    tags: ['Zamindari System', 'Agriculture', 'Revenue Settlement', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q6',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 6,
    questionType: 'MCQ',
    questionText: 'Commercialisation of Indian agriculture under British colonial rule primarily led to which unfortunate outcome?',
    questionTextHinglish: 'British rule ke dauraan agriculture ke commercialisation (व्यावसायीकरण) ka sabse durbhagyapoorna parinaam kya nikla?',
    options: [
      'Farmers became exceptionally wealthy by exporting organic foods',
      'Farmers shifted from food crops to cash crops (like indigo and cotton) needed by British factories, leaving them vulnerable to food famines',
      'All agricultural land was converted into tea plantations',
      'India stopped importing British cloth entirely'
    ],
    optionsHinglish: [
      'Kisan organic foods export karke ameer ban gaye',
      'Kisan food crops (anaaj) chhodkar cash crops (neel, kapaas) ugane lage jisse unki food security khatam hui aur aakaal (famines) badhe',
      'Saari zameen par sirf chai ke baagan ban gaye',
      'India ne British kapde khareedna bilkul band kar diya'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 6-7',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Commercialisation ne kisanon ki haalat sudhaarne ke bajay bigad di. Food grains (gehun, chawal) ke bajay kisan cash crops (cotton, jute, indigo) ugane lage jo Britain ki factories mein raw material bante the. Isse aam kisan food shortages aur devastating famines ka shikar ho gaye.',
    formulaOrConcept: 'Commercialisation of Agriculture: Forced Cash Crops for British Mills → Severe Food Insecurity',
    tags: ['Commercialisation', 'Cash Crops', 'Famines', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q7',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 7,
    questionType: 'MCQ',
    questionText: 'What was the two-fold motive behind the systematic de-industrialisation effected by the British in pre-independent India?',
    questionTextHinglish: 'British colonial government dwara India ki traditional handicraft industries ko planned tareeqe se barbad (de-industrialise) karne ke peeche kaun sa two-fold motive (dohra uddeshya) tha?',
    options: [
      'To promote heavy engineering in India and stop environmental pollution',
      'To make India an exporter of raw materials to Britain, and a sprawling consumer market for Britain’s finished industrial goods',
      'To develop modern electronics factories and encourage Indian software exports',
      'To relocate all Indian weavers into government administrative offices'
    ],
    optionsHinglish: [
      'India mein heavy engineering ko badhana aur pollution rokna',
      'First: India ko raw materials ka exporter banana; Second: India ko Britain ke finished goods ka bada market banana',
      'India mein modern electronic factories kholna',
      'Indian karigaron ko sarkari administrative jobs dena'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 7',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'NCERT page 7 par dohra motive saaf likha hai: (1) India ko raw materials (cotton, jute, silk) ka cheap exporter banana jo British industries ke kaam aaye, aur (2) India ko British manufactured goods ka bada consumer market banana taaki British factories ka munafa badhta rahe.',
    formulaOrConcept: 'De-Industrialisation Motive: 1. Raw Material Source + 2. Captive Consumer Market',
    tags: ['De-industrialisation', 'Handicrafts', 'Colonial Motive', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q8',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 8,
    questionType: 'MCQ',
    questionText: 'In the second half of the 19th century, which two textile mill industries took root in India, and how were they geographically and ownership-wise divided?',
    questionTextHinglish: '19th century ke second half mein India mein kaun si do modern textile industries shuru hui, aur unka geographical location tatha ownership kiske paas tha?',
    options: [
      'Woollen mills in Kashmir (Indians) and Silk mills in Mysore (British)',
      'Cotton textile mills in Maharashtra/Gujarat (dominated by Indians) and Jute mills in Bengal (dominated by foreigners)',
      'Jute mills in Gujarat (Indians) and Cotton mills in Bengal (British)',
      'Synthetic nylon mills in Punjab and Rayon mills in Kerala'
    ],
    optionsHinglish: [
      'Kashmir mein woollen mills aur Mysore mein silk mills',
      'Western India (Maharashtra aur Gujarat) mein Cotton mills (Indians ke paas) aur Bengal mein Jute mills (Foreigners/British ke paas)',
      'Gujarat mein Jute mills aur Bengal mein Cotton mills',
      'Punjab mein Synthetic mills aur Kerala mein Rayon mills'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 7',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Modern industries ki shuruat cotton aur jute se hui. Cotton textile mills western parts (Maharashtra aur Gujarat) mein thi jinhe mukhya roop se Indian entrepreneurs ne lead kiya. Jabki Jute mills Bengal mein concentrated thi jinpar British/foreign capitalists ka control tha.',
    formulaOrConcept: 'Early Modern Industry: Cotton Mills (Western India, Indian-led) vs Jute Mills (Bengal, Foreign-led)',
    tags: ['Cotton Mills', 'Jute Mills', 'Early Industry', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q9',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 9,
    questionType: 'MCQ',
    questionText: 'In which year was the Tata Iron and Steel Company (TISCO) incorporated in India?',
    questionTextHinglish: 'Tata Iron and Steel Company (TISCO) ki sthapna (incorporation) kis saal hui thi?',
    options: [
      '1854',
      '1907',
      '1921',
      '1947'
    ],
    optionsHinglish: [
      '1854',
      '1907 (Jamshedpur)',
      '1921',
      '1947'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 7',
    difficulty: 'Easy',
    detailedSolutionHinglish: '20th century ki shuruat mein iron and steel industry shuru hui. Tata Iron and Steel Company (TISCO) ko 1907 mein incorporate kiya gaya tha (Jamshedpur mein). Dusre vishwayuddh ke baad cement, sugar aur paper industries aayi.',
    formulaOrConcept: 'TISCO Incorporation Year = 1907 (Pioneer in Indian Heavy Industry)',
    tags: ['TISCO', 'Steel Industry', '1907', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q10',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 10,
    questionType: 'MCQ',
    questionText: 'Which strategic artificial waterway was opened in 1869, drastically reducing the maritime distance between Britain and India and tightening British control over Indian trade?',
    questionTextHinglish: '1869 mein kaun sa artificial waterway (nahar) khola gaya jisme Britain aur India ke beech samundri doori ko kam kar diya aur British trade monopoly ko aur mazboot banaya?',
    options: [
      'Panama Canal',
      'Suez Canal (स्वेज नहर)',
      'Kiel Canal',
      'Erie Canal'
    ],
    optionsHinglish: [
      'Panama Canal',
      'Suez Canal (स्वेज नहर)',
      'Kiel Canal',
      'Erie Canal'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 8-9 (Box 1.3)',
    difficulty: 'Easy',
    detailedSolutionHinglish: '1869 mein Suez Canal ke khulne se ships ko Africa ke chaaron taraf (Cape of Good Hope) ghoom kar nahi aana pada. Isne Mediterranean Sea ko Red Sea se connect kiya, transportation cost ghata di aur Britishers ke liye Indian raw materials le jaana behad aasaan kar diya.',
    formulaOrConcept: 'Suez Canal (1869): Direct Maritime Highway between Britain and India',
    tags: ['Suez Canal', 'Foreign Trade', '1869', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q11',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 11,
    questionType: 'MCQ',
    questionText: 'Throughout the colonial period, India generated a large export surplus. How was this surplus utilised, resulting in the "Drain of Indian Wealth"?',
    questionTextHinglish: 'Colonial period mein India ka export surplus (niryat aadhikya) bahot bada tha. Lekin is surplus ka istemal kis kaam mein kiya gaya jisse "Drain of Indian Wealth" (dhan ki nikasi) hui?',
    options: [
      'It was used to import gold and silver coins directly for Indian citizens',
      'It was used to pay administrative expenses of the colonial office in Britain, British war expenses, and invisible service imports',
      'It was invested in establishing free public universities and hospitals across India',
      'It was distributed as cash subsidies to Indian handicraft weavers'
    ],
    optionsHinglish: [
      'Isko India mein sona aur chandi import karke kisanon ko baantne mein lagaya gaya',
      'Britain mein sthit colonial office ke kharche, British sarkar dwara lade gaye yuddhon ke kharche aur invisible items ki payment mein uda diya gaya',
      'India mein free universities aur hospitals kholne mein invest kiya gaya',
      'Handicraft weavers ko cash subsidies dene mein lagaya gaya'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 8-9',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Export surplus se India ko koi gold ya silver nahi mila. Ulta, is surplus ka use Britain ke colonial government office ke maintenance, British sarkar dwara ladi gayi ladaiyon ke expenses, aur invisible transport/insurance services ke payment ke liye kiya gaya. Isise Bharat ka dhan Britain chala gaya (Drain of Wealth).',
    formulaOrConcept: 'Drain of Wealth: Export Surplus Diverted to British War & Administrative Expenses',
    tags: ['Drain of Wealth', 'Foreign Trade', 'Export Surplus', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q12',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 12,
    questionType: 'MCQ',
    questionText: 'Which year is regarded as the defining "Year of the Great Divide" in Indian demographic transition, marking the permanent shift from the first stage to the second stage?',
    questionTextHinglish: 'Indian demographic history mein kaun sa saal "Year of the Great Divide" (महान विभाजन का वर्ष) kehlata hai, jahan se India first stage se second stage of demographic transition mein gaya?',
    options: [
      '1881',
      '1901',
      '1921',
      '1951'
    ],
    optionsHinglish: [
      '1881 (First Census)',
      '1901',
      '1921 (Year of Great Divide)',
      '1951'
    ],
    correctIndex: 2,
    ncertReference: 'NCERT Ch 1, Page 10',
    difficulty: 'Easy',
    detailedSolutionHinglish: '1921 se pehle India demographic transition ke first stage mein tha (high birth rate + high death rate, population kabhi badhti thi kabhi aakaal se ghatti thi). 1921 ke baad death rate girna shuru hui aur population continuously badhne lagi. Isliye 1921 ko "Year of the Great Divide" kaha jaata hai.',
    formulaOrConcept: '1921: Year of Great Divide in Demographic Transition (Stage 1 to Stage 2)',
    tags: ['Demography', '1921', 'Great Divide', 'Census', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q13',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 13,
    questionType: 'MCQ',
    questionText: 'What were the official social and demographic figures for overall literacy, female literacy, Infant Mortality Rate (IMR), and Life Expectancy around independence?',
    questionTextHinglish: 'Independence ke samay overall literacy, female literacy, Infant Mortality Rate (IMR) aur Life Expectancy ke NCERT figures kya the?',
    options: [
      'Literacy 50%, Female literacy 30%, IMR 50/1000, Life expectancy 60 years',
      'Literacy < 16%, Female literacy ~7%, IMR 218/1000, Life expectancy 32 years',
      'Literacy 25%, Female literacy 15%, IMR 100/1000, Life expectancy 45 years',
      'Literacy < 10%, Female literacy 2%, IMR 350/1000, Life expectancy 20 years'
    ],
    optionsHinglish: [
      'Literacy 50%, Female literacy 30%, IMR 50/1000, Life expectancy 60 years',
      'Literacy < 16%, Female literacy lagbhag 7%, IMR 218 per 1000, Life expectancy sirf 32 saal',
      'Literacy 25%, Female literacy 15%, IMR 100/1000, Life expectancy 45 years',
      'Literacy < 10%, Female literacy 2%, IMR 350/1000, Life expectancy 20 years'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 10',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'NCERT exact data: Overall literacy rate 16% se kam tha, female literacy sirf 7% thi. Infant mortality rate bahot alarmed tha—218 per thousand (aaj lagbhag 28 hai). Aur Life Expectancy sirf 32 saal thi (aaj lagbhag 70 saal hai).',
    formulaOrConcept: 'Eve of Independence: Literacy < 16% (Female 7%), IMR = 218/1000, Life Expectancy = 32 Years',
    tags: ['Demography', 'Literacy Rate', 'IMR', 'Life Expectancy', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q14',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 14,
    questionType: 'MCQ',
    questionText: 'Under the colonial occupational structure, what percentage of India’s working workforce was dependent on agriculture, manufacturing, and services respectively?',
    questionTextHinglish: 'Colonial period ke dauraan occupational structure (व्यवसायिक संरचना) ke mutabiq agriculture, manufacturing aur services sectors mein kitne percent log kaam karte the?',
    options: [
      'Agriculture: 50%, Manufacturing: 25%, Services: 25%',
      'Agriculture: 70–75%, Manufacturing: 10%, Services: 15–20%',
      'Agriculture: 90%, Manufacturing: 5%, Services: 5%',
      'Agriculture: 60%, Manufacturing: 20%, Services: 20%'
    ],
    optionsHinglish: [
      'Agriculture: 50%, Manufacturing: 25%, Services: 25%',
      'Agriculture: 70–75%, Manufacturing: 10%, Services: 15–20%',
      'Agriculture: 90%, Manufacturing: 5%, Services: 5%',
      'Agriculture: 60%, Manufacturing: 20%, Services: 20%'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 1, Page 10-11',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Colonial occupational structure mein 70-75% working population agriculture par dependent thi, manufacturing sector mein sirf 10% log the, aur services sector mein 15-20% workforce thi. Madras, Bombay aur Bengal mein manufacturing thoda badha tha jabki Orissa, Rajasthan aur Punjab mein agriculture badha tha.',
    formulaOrConcept: 'Colonial Workforce Share: Agriculture (70-75%) | Industry (10%) | Services (15-20%)',
    tags: ['Occupational Structure', 'Workforce', 'Chapter 1']
  },
  {
    id: 'eco-ch1-q15',
    chapterNumber: 1,
    chapterCode: 'keec101',
    chapterTitle: 'Chapter 1: Indian Economy on the Eve of Independence (1947)',
    questionNo: 15,
    questionType: 'MCQ',
    questionText: 'In which year did the British introduce the railways in India, and what was its dual impact on the Indian economy?',
    questionTextHinglish: 'Britishers ne India mein Railways kab introduce kiya, aur iska Indian economy par kaun sa dohra (dual) prabhav pada?',
    options: [
      '1850; It broke geographic/cultural travel barriers, but fostered commercialisation of agriculture which ruined village self-sufficiency',
      '1907; It established free travel for all farmers and eliminated all village debt',
      '1947; It replaced all roads and water canals completely',
      '1881; It connected all Indian schools with London'
    ],
    optionsHinglish: [
      '1850 (First bridge Bombay-Thane 1854); Isne long distance travel ko aasan banaya, par agriculture ke commercialisation ko badhakar village self-sufficiency ko khatam kiya',
      '1907; Isne sabhi kisanon ko free travel diya aur sara karz maaf kiya',
      '1947; Isne sabhi roads ko replace kar diya',
      '1881; Isne schools ko direct London se joda'
    ],
    correctIndex: 0,
    ncertReference: 'NCERT Ch 1, Page 11-12',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Britishers ne 1850 mein railways shuru ki (First bridge Bombay-Thane 1854). Iska dohra prabhav tha: Ek taraf log door-door travel karke cultural barriers tod sake, dusri taraf raw materials aasani se ports pahunchne lage aur cash crops ki commercialisation se gaon ki aatmnirbharta (self-sufficiency) toot gayi.',
    formulaOrConcept: 'Railways (1850): Cultural Travel Integration vs Erosion of Village Economic Self-Sufficiency',
    tags: ['Railways', '1850', 'Infrastructure', 'Chapter 1']
  },

  // =========================================================================
  // CHAPTER 2: INDIAN ECONOMY 1950–1990 (keec102)
  // भारतीय अर्थव्यवस्था 1950-1990
  // =========================================================================
  {
    id: 'eco-ch2-q16',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 16,
    questionType: 'MCQ',
    questionText: 'Why did Jawaharlal Nehru and independent India’s early leadership choose a Mixed Economic System instead of pure Soviet-style Socialism?',
    questionTextHinglish: 'Jawaharlal Nehru aur early Indian leadership ne Soviet Union jaise pure Socialism ke bajay Mixed Economy (मिश्रित अर्थव्यवस्था) ko kyun chuna?',
    options: [
      'Because the United Nations legally prohibited socialist economies',
      'Because in a democracy, the government could not abolish private property of citizens, so they combined socialist public planning with private property and democracy',
      'Because India did not have any government officers to run public factories',
      'Because pure capitalism was universally popular among all freedom fighters'
    ],
    optionsHinglish: [
      'Kyunki UN ne socialist systems par ban laga diya tha',
      'Kyunki ek democratic desh mein sarkar private property ko zabt nahi kar sakti thi, isliye socialism ke best features ko private property aur democracy ke sath combine kiya gaya',
      'Kyunki sarkar ke paas factory chalane ke liye koi afsar nahi the',
      'Kyunki azaadi ke ladne wale sabhi log pure capitalism chahte the'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 17-18',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Soviet Union mein saare farms aur factories sarkar ki thi aur koi private property nahi thi. Ek loktantrik (democracy) desh hone ke naate India mein citizens ki private property cheenna sambhav nahi tha. Isliye Nehru ji ne ek aisa model chuna jisme public sector commanding role mein rahe par private sector aur democracy bhi safe rahe.',
    formulaOrConcept: 'Democratic Socialism / Mixed Economy: Strong Public Sector + Private Enterprise + Democracy',
    tags: ['Mixed Economy', 'Nehru', 'Economic Systems', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q17',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 17,
    questionType: 'MCQ',
    questionText: 'In a capitalist (market) economy, how is the core question "For whom to produce" resolved?',
    questionTextHinglish: 'Ek Capitalist / Market economy mein "Kiske liye produce karein" (For whom to produce) ka faisla kis aadhar par hota hai?',
    options: [
      'On the basis of human biological needs of the poorest citizens',
      'On the basis of Purchasing Power — the ability to buy goods backed by money in pocket',
      'By lucky draw lottery conducted by the central government',
      'Equally distributed to all families regardless of income'
    ],
    optionsHinglish: [
      'Sabse gareeb nagrikon ki zarooraton ke aadhar par',
      'Purchasing Power (kharidne ki kshamta) ke aadhar par — jiske jeb mein paisa hai usi ke liye goods banenge',
      'Central government ke lucky draw lottery se',
      'Bina aamdani dekhe sabhi parivaron mein barabar baant kar'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 18 (Box 2.1)',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Capitalist society mein goods need (zaroorat) ke basis par nahi balki Purchasing Power ke basis par distribute hote hain. Example: Gareebon ke liye low-cost housing ki zaroorat hai par unke paas paise nahi hain, isliye market forces use produce nahi karengi. Isiliye Nehru ji ko pure capitalism pasand nahi aaya.',
    formulaOrConcept: 'Market Economy: Distribution Driven by Purchasing Power (Ability to Pay), Not Human Need',
    tags: ['Capitalism', 'Purchasing Power', 'Central Problems', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q18',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 18,
    questionType: 'MCQ',
    questionText: 'When was the Planning Commission of India established, and who served as its ex-officio Chairperson?',
    questionTextHinglish: 'Planning Commission of India (योजना आयोग) ki sthapna kab hui thi aur iske Chairperson kaun hote the?',
    options: [
      '1947, President of India',
      '1950, Prime Minister of India',
      '1956, Finance Minister of India',
      '1991, Governor of Reserve Bank of India'
    ],
    optionsHinglish: [
      '1947, President of India',
      '1950, Prime Minister of India',
      '1956, Finance Minister of India',
      '1991, Governor of RBI'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 19',
    difficulty: 'Easy',
    detailedSolutionHinglish: '1950 mein Planning Commission set up kiya gaya jiske Chairperson Prime Minister the. India ne Five Year Plans ka concept former Soviet Union se borrow kiya tha. Har plan 5 saal ka hota tha jabki long-term 20-year plan ko "perspective plan" kaha jaata tha.',
    formulaOrConcept: 'Planning Commission (1950): Chairperson = Prime Minister | Five Year Plan Strategy',
    tags: ['Planning Commission', '1950', 'Five Year Plans', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q19',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 19,
    questionType: 'MCQ',
    questionText: 'Who is widely regarded as the "Architect of Indian Planning", whose statistical models formed the bedrock of the landmark Second Five Year Plan?',
    questionTextHinglish: 'Kise "Architect of Indian Planning" (भारतीय योजना का वास्तुकार) kaha jaata hai, jinki statistical model par Second Five Year Plan aadharit tha?',
    options: [
      'Dr. Manmohan Singh',
      'Prasanta Chandra Mahalanobis (P.C. Mahalanobis)',
      'Dadabhai Naoroji',
      'Amartya Sen'
    ],
    optionsHinglish: [
      'Dr. Manmohan Singh',
      'Prof. Prasanta Chandra Mahalanobis (P.C. Mahalanobis)',
      'Dadabhai Naoroji',
      'Prof. Amartya Sen'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 20 (Box 2.3)',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Prof. P.C. Mahalanobis ko Architect of Indian Planning kaha jaata hai. Unhone Calcutta mein Indian Statistical Institute (ISI) establish kiya aur world-renowned statistical journal "Sankhya" shuru kiya. Second Five Year Plan unhi ke heavy industry-led model par based tha.',
    formulaOrConcept: 'P.C. Mahalanobis: Architect of Indian Planning | Founder of ISI & Sankhya | 2nd Plan',
    tags: ['Mahalanobis', 'Second Five Year Plan', 'ISI', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q20',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 20,
    questionType: 'MCQ',
    questionText: 'What were the four common broad goals pursued across India’s Five Year Plans between 1950 and 1990?',
    questionTextHinglish: '1950 se 1990 ke dauraan India ke Five Year Plans ke chaar mukhya goals (उद्देश्य) kaun se the?',
    options: [
      'Inflation, Privatisation, Globalisation, and Colonisation',
      'Growth, Modernisation, Self-reliance, and Equity',
      'Urbanisation, Foreign borrowing, High taxation, and Import expansion',
      'Military expansion, Free trade, Complete capitalism, and Gold storage'
    ],
    optionsHinglish: [
      'Inflation, Privatisation, Globalisation aur Colonisation',
      'Growth (संवृद्धि), Modernisation (आधुनिकीकरण), Self-reliance (आत्मनिर्भरता) aur Equity (समानता)',
      'Urbanisation, Foreign borrowing, High taxation aur Import expansion',
      'Military expansion, Free trade, Complete capitalism aur Gold storage'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 19-22',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'NCERT page 19 ke mutabiq chaar core goals the: (1) Growth (GDP increase karna), (2) Modernisation (nayee technology aur progressive social outlook jaise mahilaon ke rights), (3) Self-reliance (food aur goods ke liye videshon par depend na rehna), aur (4) Equity (prosperity ka faayda gareebon tak pahunchna).',
    formulaOrConcept: '4 Core Planning Goals: Growth + Modernisation + Self-Reliance + Equity',
    tags: ['Goals of Planning', 'Growth', 'Modernisation', 'Equity', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q21',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 21,
    questionType: 'MCQ',
    questionText: 'Under the planning goals, "Modernisation" refers not only to adopting new production technologies but also to which crucial social dimension?',
    questionTextHinglish: 'Planning goals ke anusaar "Modernisation" ka matlab sirf nayi machinery apnana nahi hai, balki iska kaun sa mahatvapurna samajik pehlu (social dimension) hai?',
    options: [
      'Wearing western clothes in public institutions',
      'Progressive changes in social outlook, such as recognizing equal rights and talents of women in the workplace',
      'Banning regional languages in schools',
      'Replacing physical books with imported televisions'
    ],
    optionsHinglish: [
      'Offices mein western kapde pehanna',
      'Social outlook mein badlav, jaise workplace (banks, schools, factories) mein mahilaon ko barabar rights aur aadar dena',
      'Schools mein regional bhashaon par ban lagana',
      'Kitabon ki jagah imported TV lagana'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 21',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'NCERT clearly highlights: "Modernisation does not refer only to the use of new technology but also to changes in social outlook such as the recognition that women should have the same rights as men." Ek modern society mahilaon ke talent ko banks, factories aur institutions mein utilize karti hai.',
    formulaOrConcept: 'Modernisation = Technological Upgrade + Progressive Social Outlook (Gender Equality)',
    tags: ['Modernisation', 'Social Outlook', 'Gender Equality', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q22',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 22,
    questionType: 'MCQ',
    questionText: 'What peculiar structural change took place in the Indian economy between 1950 and 1990 compared to developed nations?',
    questionTextHinglish: '1950 se 1990 ke dauraan developed nations ki tulna mein Indian economy mein kaun sa ajeeb (peculiar) structural change dekha gaya?',
    options: [
      'Agriculture share in GDP increased to 80%',
      'Service sector share in GDP surged to 40.59% (surpassing agriculture and industry), while agriculture still employed nearly 65% of the workforce',
      'Manufacturing sector completely vanished from the country',
      'The country had zero services sector employment'
    ],
    optionsHinglish: [
      'GDP mein agriculture ka share 80% tak badh gaya',
      'GDP mein Service sector ka share 40.59% ho gaya (agriculture aur industry se zyada), jabki kheti mein abhi bhi lagbhag 65% log lage hue the',
      'Manufacturing sector poori tarah band ho gaya',
      'Services sector mein koi naukri bachi hi nahi thi'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 21 (Box 2.4) & Page 27',
    difficulty: 'Hard',
    detailedSolutionHinglish: 'Aam taur par vikas ke sath pehle Industry badhti hai fir Services. Lekin India mein agriculture ka GDP share to 50%+ se girkar 34.9% ho gaya aur Services seedhe 40.59% par chali gayi. Par problem yeh rahi ki Industry aur Services ne extra labour absorb nahi kiya, aur 1990 tak bhi lagbhag 65% janta kheti par hi tiki rahi.',
    formulaOrConcept: 'Peculiar Structural Shift: Services GDP Share (40.59%) > Industry/Agri, but 65% Workforce in Agri',
    tags: ['Structural Change', 'GDP Composition', 'Service Sector', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q23',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 23,
    questionType: 'MCQ',
    questionText: 'What immediate benefit was achieved by the abolition of intermediaries (zamindars and jagirdars) in independent India’s land reforms?',
    questionTextHinglish: 'Azaad Bharat ke land reforms mein intermediaries (zamindars aur jagirdars) ke unmoonal (abolition) se kya immediate faayda hua?',
    options: [
      'All farmers were given free imported seeds from America',
      'Nearly 200 lakh (20 million) tenants were freed from exploitation and came into direct contact with the government as land owners',
      'All agricultural land was gifted to municipal corporations',
      'Food prices instantly increased by 500%'
    ],
    optionsHinglish: [
      'Sabhi kisanon ko America se free seeds mili',
      'Lagbhag 200 lakh (2 crore) tenants zamindars ke shoshan se mukt hue aur direct sarkar ke sampark mein aakar malik bane',
      'Saari zameen municipal corporations ko de di gayi',
      'Anaaj ke daam 500% badha diye gaye'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 23',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Intermediaries ke abolition ka sabse bada result yeh raha ki lagbhag 200 lakh tenants seedhe government ke contact mein aaye aur zamindaron ka shoshan khatam hua. Zameen ki malkiyat (ownership) milne se kisanon ko output badhane ka incentive mila.',
    formulaOrConcept: 'Abolition of Intermediaries: 200 Lakh Tenants Brought in Direct Contact with Government',
    tags: ['Land Reforms', 'Intermediaries', 'Agriculture', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q24',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 24,
    questionType: 'MCQ',
    questionText: 'Why were land reform policies, particularly land ceiling, exceptionally successful in Kerala and West Bengal while lagging in other states?',
    questionTextHinglish: 'Land ceiling aur land reform policies Kerala aur West Bengal mein itni safal kyun rahi jabki baaki states mein pichhad gayi?',
    options: [
      'Because Kerala and West Bengal had zero landlords in their territory',
      'Because these two states had state governments genuinely committed to the policy of "land to the tiller", while big landlords in other states used court delays and family registration loopholes',
      'Because agriculture was completely automated using computers in these two states',
      'Because British officers personally oversaw land distribution in those two states'
    ],
    optionsHinglish: [
      'Kyunki in states mein koi zamindar tha hi nahi',
      'Kyunki in dono states ki governments "land to the tiller" (kisan ko zameen) policy ke prati strongly committed thi, jabki baaki jagah landlords ne court delays aur benami relative transfers se zameen bacha li',
      'Kyunki wahan saari kheti computers se hone lagi thi',
      'Kyunki British officers ne khud zameen baanti thi'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 24',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'NCERT ke mutabiq: "Land reforms were successful in Kerala and West Bengal because these states had governments committed to the policy of land to the tiller." Doosre states mein big landlords ne courts mein case daalkar delay kiya aur us dauraan zameen apne rishtedaaron ke naam karke bachaa li.',
    formulaOrConcept: 'Land to the Tiller: Political Commitment in Kerala & West Bengal vs Loopholes in Other States',
    tags: ['Land Reforms', 'Kerala', 'West Bengal', 'Land Ceiling', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q25',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 25,
    questionType: 'MCQ',
    questionText: 'The stagnation in Indian agriculture was decisively broken by the Green Revolution. This transformation was primarily driven by:',
    questionTextHinglish: 'Indian agriculture ke lambe samay se chale aa rahe stagnation ko Green Revolution (हरित क्रांति) ne toda. Yeh kranti mukhya roop se kiske upyog par aadharit thi?',
    options: [
      'Wooden ploughs and organic manure',
      'High Yielding Variety (HYV) seeds (especially for wheat and rice) along with chemical fertilisers, pesticides, and assured irrigation',
      'Importing genetically modified animals from Europe',
      'Banning the sale of agricultural crops to cities'
    ],
    optionsHinglish: [
      'Lakdi ke hal aur gobar ki khaad',
      'High Yielding Variety (HYV) beej (khas kar gehun aur chawal) jinke sath fertilizers, pesticides aur regular paani ki zaroorat thi',
      'Europe se genetically modified janwar lana',
      'Shehron mein anaaj bechne par rok lagana'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 24',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Green revolution ka matlab tha food grains (khas kar wheat aur rice) ke production mein zabardast badhotari jo High Yielding Variety (HYV) seeds ke use se aayi. Iske liye chemical fertilisers, keetnashak aur irrigation ka sahi proportion zaroori tha.',
    formulaOrConcept: 'Green Revolution Formula: HYV Seeds + Fertilizers + Pesticides + Reliable Irrigation',
    tags: ['Green Revolution', 'HYV Seeds', 'Wheat & Rice', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q26',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 26,
    questionType: 'MCQ',
    questionText: 'What is defined as "Marketed Surplus" (विपणित अधिशेष) in agricultural economics?',
    questionTextHinglish: 'Agricultural economics mein "Marketed Surplus" (विपणित अधिशेष) kise kaha jaata hai?',
    options: [
      'The entire agricultural crop destroyed by pests during harvesting',
      'The portion of agricultural harvest sold in the market by farmers after retaining sufficient food for their family’s own consumption',
      'The quantity of imported wheat stored in central shipping docks',
      'The seeds kept aside for the next agricultural year'
    ],
    optionsHinglish: [
      'Keedon dwara barbad ki gayi saari fasal',
      'Kisan dwara apne parivar ke khane ke liye rakhne ke baad baazar mein bechi gayi fasal ka hissa (Marketed Surplus = Output - Self Consumption)',
      'Videsh se mangaya gaya gehun jo bandargah par rakha ho',
      'Agle saal bo-ne ke liye bachaye gaye beej'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 24-25',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Agar kisan saara anaaj khud hi khaa le to economy par koi asar nahi padega. Marketed Surplus fasal ka woh portion hai jo kisan market mein bechta hai. Is surplus ki wajah se food prices kam hui aur sarkar buffer stock build kar saki.',
    formulaOrConcept: 'Marketed Surplus = Total Agricultural Production - Self-Consumption by Farmer',
    tags: ['Marketed Surplus', 'Buffer Stock', 'Food Prices', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q27',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 27,
    questionType: 'MCQ',
    questionText: 'Under the Industrial Policy Resolution of 1956 (IPR 1956), what mechanism was strictly used to control private industries and promote regional equality?',
    questionTextHinglish: 'Industrial Policy Resolution 1956 (IPR 1956) ke tehat private industries ko control karne aur pichhde ilaqon mein industry lagane ke liye kaun sa mechanism use kiya gaya?',
    options: [
      'Direct auction of private companies to foreign buyers',
      'The System of Industrial Licensing (License-Permit Raj), giving concessions in backward areas',
      'Complete abolition of income tax for city factories',
      'Mandatory military training for all private business managers'
    ],
    optionsHinglish: [
      'Private companies ko foreign buyers ko bechna',
      'Industrial Licensing system (License-Permit Raj), jisme pichhde ilaqon (backward regions) mein factory kholne par aasan license aur tax concessions milte the',
      'City factories ke liye income tax khatam karna',
      'Sabhi managers ko military training dena'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 29',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'IPR 1956 ne industries ko 3 categories mein baanta (State exclusive, State-led + Private supplement, aur Private). Private units ko license lena zaroori tha. Economically backward areas mein factory kholne par aasani se license, tax benefits aur sasti bijli di jaati thi taaki regional equality badhe.',
    formulaOrConcept: 'IPR 1956: 3-Tier Classification + Industrial Licensing for Regional Balance',
    tags: ['IPR 1956', 'Industrial Licensing', 'Regional Balance', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q28',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 28,
    questionType: 'MCQ',
    questionText: 'In 1955, which committee highlighted the critical role of Small-Scale Industries (SSI) for rural development, and what is the primary economic rationale for supporting SSI?',
    questionTextHinglish: '1955 mein kis committee ne rural development ke liye Small-Scale Industries (SSI) ki ahemiyat batayi aur SSI ko support karne ka main economic reason kya hai?',
    options: [
      'Narasimham Committee; SSIs produce space satellites',
      'Karve Committee (Village and Small-Scale Industries Committee); SSIs are more labour-intensive and generate massive employment',
      'Kelkar Committee; SSIs operate without raw materials',
      'Rangarajan Committee; SSIs have zero manufacturing costs'
    ],
    optionsHinglish: [
      'Narasimham Committee',
      'Karve Committee (1955); SSIs labour-intensive hoti hain aur kam capital mein zyada employment create karti hain',
      'Kelkar Committee',
      'Rangarajan Committee'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 29-30',
    difficulty: 'Easy',
    detailedSolutionHinglish: '1955 mein Karve Committee (Village and Small-Scale Industries Committee) ne bataya ki small-scale industries labour-intensive hoti hain aur unhe protect karne ke liye kai products reserve kiye gaye. 1950 mein SSI asset limit ₹5 lakh thi jo badhkar ₹1 crore ho gayi.',
    formulaOrConcept: 'Karve Committee (1955): Small-Scale Industries (Labor-Intensive Employment Generation)',
    tags: ['Karve Committee', 'SSI', 'Employment', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q29',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 29,
    questionType: 'MCQ',
    questionText: 'What was the core objective of the inward-looking trade strategy of "Import Substitution", and what two policy tools were used to enforce it?',
    questionTextHinglish: 'India ki "Import Substitution" (आयात प्रतिस्थापन) trade policy ka mukhya uddeshya kya tha aur isko laagu karne ke liye kaun se do tools use kiye gaye?',
    options: [
      'To import as many foreign luxury cars as possible using foreign currency loans',
      'To replace imported goods with domestic production, using Tariffs (import taxes) and Quotas (quantity restrictions) to protect domestic firms',
      'To export all domestic foodgrains while importing all steel',
      'To eliminate all import duties and open 100% free international trade'
    ],
    optionsHinglish: [
      'Videsh se mehengi gaadiyan import karna',
      'Imports ko domestic production se replace karna, aur domestic industries ko protect karne ke liye Tariffs (aayat shulk) aur Quotas (aayat maatra seema) lagana',
      'Saara anaaj export karke bahar se loha mangana',
      'Sabhi customs duties khatam karke free trade karna'
    ],
    correctIndex: 1,
    ncertReference: 'NCERT Ch 2, Page 30',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Import Substitution ka matlab tha jo cheezein bahar se mangayi jaati hain unhe desh ke andar hi banaya jaaye (inward-looking trade). Iske do weapons the: (1) Tariffs: Imported goods par tax lagakar unhe mehenga karna, (2) Quotas: Fix karna ki kisi product ki kitni maximum quantity hi import ho sakti hai.',
    formulaOrConcept: 'Import Substitution Policy = Domestic Production Replacement + Tariffs & Quotas',
    tags: ['Import Substitution', 'Tariffs', 'Quotas', 'Trade Policy', 'Chapter 2']
  },
  {
    id: 'eco-ch2-q30',
    chapterNumber: 2,
    chapterCode: 'keec102',
    chapterTitle: 'Chapter 2: Indian Economy 1950–1990',
    questionNo: 30,
    questionType: 'MCQ',
    questionText: 'Which major criticism was directed against the economic policies followed between 1950 and 1990, paving the way for the 1991 New Economic Policy?',
    questionTextHinglish: '1950 se 1990 ke beech laagu policies par kaun sa sabse bada criticism (aalochana) hua jiske chalte 1991 mein New Economic Policy laani padi?',
    options: [
      'Public sector expanded into non-essential areas (like Modern Bread and hotels) incurring huge losses, while License Raj created monopoly lobbying and captive markets with no quality incentives',
      'The government refused to build any dams or power stations',
      'India had zero universities or colleges for science students',
      'All private companies were banned from operating in the entire country'
    ],
    optionsHinglish: [
      'Public sector non-essential cheezon (Modern Bread, hotels) mein ghuskar ghata khata raha, License Raj ne lobbying badhayi aur Indian producers ke paas quality behtar karne ka koi incentive nahi tha',
      'Sarkar ne koi dam ya power plant nahi banaya',
      'Desh mein ek bhi college ya university nahi thi',
      'Sabhi private companies ko poore desh se ban kar diya gaya tha'
    ],
    correctIndex: 0,
    ncertReference: 'NCERT Ch 2, Page 31-33',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Do bade shortfalls the: (1) Public sector un jagahon par bhi ghus gaya jahan private sector aaram se kaam kar sakta tha (jaise Modern Bread, telephone wait times, hotels) aur losses drain ban gaye; (2) License Raj ki wajah se bade industrialists ne naye logon ko aane nahi diya aur captive market hone ki wajah se low-quality goods beche. Isliye 1991 mein economic reforms laane pade.',
    formulaOrConcept: '1950-90 Pitfalls: PSU Inefficiencies (Modern Bread) + License Raj Lobbying + Lack of Global Competition',
    tags: ['Economic Reforms', '1991 Policy', 'License Raj', 'PSU Criticism', 'Chapter 2']
  }
];
