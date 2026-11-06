import fs from 'fs';

const outputPath = 'public/class11-economics-ch1-ch2-fill-in-the-blanks-laser-print.html';

const questions = [
  // =========================================================================
  // SECTION A: CHAPTER 1 - INDIAN ECONOMY ON THE EVE OF INDEPENDENCE (keec101)
  // =========================================================================
  {
    qNum: 1,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 4',
    enBefore: 'The primary economic objective of the British colonial rule in India was to reduce the country to a mere ',
    answer: 'raw material',
    enAfter: ' supplier for Britain’s rapidly expanding modern industrial base.',
    hiBefore: 'भारत में ब्रिटिश औपनिवेशिक शासन का प्राथमिक आर्थिक उद्देश्य देश को ब्रिटेन के उद्योगों के लिए केवल एक ',
    hiAfter: ' (कच्चा माल) आपूर्तिकर्ता देश बनाना था।',
    hint: 'Raw Material / कच्चा माल',
    marks: 1
  },
  {
    qNum: 2,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 5',
    enBefore: 'The world-famous variety of fine cotton textile produced in and around Dhaka (Bengal) was popularly known as ',
    answer: 'Daccai Malmal',
    enAfter: ' (or Malmal Khas).',
    hiBefore: 'ढाका (बंगाल) और उसके आसपास निर्मित होने वाली विश्व प्रसिद्ध उत्कृष्ट सूती मलमल को लोकप्रिय रूप से ',
    hiAfter: ' (मलमल खास) कहा जाता था।',
    hint: 'Daccai Malmal / ढाकाई मलमल',
    marks: 1
  },
  {
    qNum: 3,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 5',
    enBefore: 'Among the individual colonial economists who estimated India’s national income, the estimates of ',
    answer: 'Dr. V.K.R.V. Rao',
    enAfter: ' were considered the most statistically significant and reliable.',
    hiBefore: 'औपनिवेशिक काल में भारत की राष्ट्रीय आय का अनुमान लगाने वाले अर्थशास्त्रियों में ',
    hiAfter: ' के अनुमानों को सबसे महत्वपूर्ण और विश्वसनीय माना गया।',
    hint: 'Dr. V.K.R.V. Rao / डॉ. वी.के.आर.वी. राव',
    marks: 1
  },
  {
    qNum: 4,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 6',
    enBefore: 'Under the colonial ',
    answer: 'Zamindari',
    enAfter: ' land revenue settlement system introduced in Bengal Presidency, profits from agriculture went to landlords rather than the actual cultivators.',
    hiBefore: 'बंगाल प्रेसीडेंसी में लागू की गई औपनिवेशिक ',
    hiAfter: ' भू-राजस्व व्यवस्था के तहत कृषि से होने वाला मुनाफा किसानों के बजाय जमींदारों की जेब में जाता था।',
    hint: 'Zamindari / जमींदारी प्रथा',
    marks: 1
  },
  {
    qNum: 5,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 7',
    enBefore: 'The forced commercialisation of agriculture compelled Indian peasants to cultivate non-food commercial crops like ',
    answer: 'Indigo',
    enAfter: ' rather than traditional foodgrains.',
    hiBefore: 'कृषि के जबरन व्यावसायीकरण ने भारतीय किसानों को पारंपरिक खाद्यान्नों के बजाय ',
    hiAfter: ' (नील) जैसी नकदी फसलें उगाने पर मजबूर किया।',
    hint: 'Indigo / नील',
    marks: 1
  },
  {
    qNum: 6,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 8',
    enBefore: 'The systematic destruction of India’s traditional artisan and ',
    answer: 'handicrafts',
    enAfter: ' industries by British tariff policies caused massive rural unemployment and de-industrialisation.',
    hiBefore: 'ब्रिटिश नीतियों द्वारा भारत के विश्व प्रसिद्ध पारंपरिक ',
    hiAfter: ' (हस्तशिल्प) उद्योग के विनाश ने भारी ग्रामीण बेरोजगारी और वि-औद्योगिकीकरण को जन्म दिया।',
    hint: 'Handicrafts / हस्तशिल्प',
    marks: 1
  },
  {
    qNum: 7,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 9',
    enBefore: 'The pioneering Tata Iron and Steel Company (TISCO) was incorporated in the year ',
    answer: '1907',
    enAfter: ' at Jamshedpur (Bihar/Jharkhand).',
    hiBefore: 'आधुनिक उद्योग की अग्रणी कंपनी टाटा आयरन एंड स्टील कंपनी (TISCO) की स्थापना वर्ष ',
    hiAfter: ' में जमशेदपुर में हुई थी।',
    hint: '1907',
    marks: 1
  },
  {
    qNum: 8,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 9',
    enBefore: 'During the colonial period, more than 50% of India’s foreign trade was strictly restricted and monopolised by ',
    answer: 'Great Britain',
    enAfter: ' (Britain).',
    hiBefore: 'औपनिवेशिक काल के दौरान भारत के कुल विदेशी व्यापार का आधे से अधिक हिस्सा केवल ',
    hiAfter: ' (ब्रिटेन) के साथ प्रतिबंधित और एकाधिकार में था।',
    hint: 'Great Britain / ब्रिटेन',
    marks: 1
  },
  {
    qNum: 9,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 10',
    enBefore: 'The opening of the ',
    answer: 'Suez Canal',
    enAfter: ' in the year 1869 drastically shortened the sea route between Britain and India, intensifying trade exploitation.',
    hiBefore: 'वर्ष 1869 में ',
    hiAfter: ' (स्वेज नहर) के खुलने से ब्रिटेन और भारत के बीच समुद्री दूरी कम हो गई और ब्रिटिश व्यापारिक शोषण तेज हो गया।',
    hint: 'Suez Canal / स्वेज नहर',
    marks: 1
  },
  {
    qNum: 10,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 10',
    enBefore: 'The export surplus generated by India during British rule did not bring gold into the country; instead, it financed the ',
    answer: 'administrative and war expenses',
    enAfter: ' of the colonial government (Drain of Wealth).',
    hiBefore: 'ब्रिटिश शासन में भारत द्वारा अर्जित व्यापार अधिशेष से देश में सोना नहीं आया, बल्कि इसका उपयोग औपनिवेशिक सरकार के ',
    hiAfter: ' (प्रशासनिक और युद्ध व्यय) को पूरा करने के लिए किया गया।',
    hint: 'Administrative & War Expenses / प्रशासनिक व युद्ध व्यय',
    marks: 1
  },
  {
    qNum: 11,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 11',
    enBefore: 'The year ',
    answer: '1921',
    enAfter: ' is regarded as the defining "Year of the Great Divide" in Indian demographic history, marking the transition to continuous population growth.',
    hiBefore: 'भारतीय जनसांख्यिकी के इतिहास में वर्ष ',
    hiAfter: ' को "महान विभाजक वर्ष" (Year of the Great Divide) कहा जाता है, जिसके बाद जनसंख्या में निरंतर तीव्र वृद्धि हुई।',
    hint: '1921',
    marks: 1
  },
  {
    qNum: 12,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 11',
    enBefore: 'The first comprehensive official decennial Census in colonial India was conducted in the year ',
    answer: '1881',
    enAfter: '.',
    hiBefore: 'औपनिवेशिक भारत में प्रथम व्यापक आधिकारिक जनगणना वर्ष ',
    hiAfter: ' में आयोजित की गई थी।',
    hint: '1881',
    marks: 1
  },
  {
    qNum: 13,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 11',
    enBefore: 'Under British colonial rule, the overall literacy level of the population was less than 16%, while female literacy was down at an alarming ',
    answer: '7%',
    enAfter: '.',
    hiBefore: 'ब्रिटिश शासन के दौरान भारत की कुल साक्षरता दर 16% से कम थी, जबकि महिला साक्षरता मात्र ',
    hiAfter: ' के चिंताजनक स्तर पर थी।',
    hint: '7%',
    marks: 1
  },
  {
    qNum: 14,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 11',
    enBefore: 'The Infant Mortality Rate in colonial India stood at an alarming ',
    answer: '218',
    enAfter: ' per thousand live births.',
    hiBefore: 'औपनिवेशिक भारत में शिशु मृत्यु दर (Infant Mortality Rate) प्रति हजार जीवित जन्मों पर ',
    hiAfter: ' थी।',
    hint: '218 per 1,000 / 218 प्रति हजार',
    marks: 1
  },
  {
    qNum: 15,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 12',
    enBefore: 'In the colonial occupational structure, the agricultural sector accounted for the largest workforce share of approximately ',
    answer: '70% to 75%',
    enAfter: '.',
    hiBefore: 'औपनिवेशिक व्यावसायिक संरचना में कृषि क्षेत्र कार्यबल के सबसे बड़े हिस्से यानी लगभग ',
    hiAfter: ' को रोजगार प्रदान करता था।',
    hint: '70% to 75% / 70% से 75%',
    marks: 1
  },
  {
    qNum: 16,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 12',
    enBefore: 'The British introduced the Railways system in India in the year ',
    answer: '1850',
    enAfter: ', which broke geographical barriers and accelerated commercialisation of agriculture.',
    hiBefore: 'ब्रिटिश सरकार ने भारत में रेलवे की शुरुआत वर्ष ',
    hiAfter: ' में की थी, जिसने भौगोलिक सीमाओं को तोड़ा और कृषि के व्यावसायीकरण को बढ़ाया।',
    hint: '1850',
    marks: 1
  },
  {
    qNum: 17,
    chapter: 1,
    chapterCode: 'keec101',
    ref: 'NCERT Ch 1, Page 13',
    enBefore: 'The primary purpose behind establishing the expensive electric telegraph in India was to maintain ',
    answer: 'law and order',
    enAfter: ' across the colonial empire.',
    hiBefore: 'औपनिवेशिक सरकार द्वारा भारत में महंगी विद्युत तार (Electric Telegraph) प्रणाली शुरू करने का मुख्य उद्देश्य ',
    hiAfter: ' (कानून और व्यवस्था) को बनाए रखना था।',
    hint: 'Law and Order / कानून और व्यवस्था',
    marks: 1
  },

  // =========================================================================
  // SECTION B: CHAPTER 2 - INDIAN ECONOMY 1950–1990 (keec102)
  // =========================================================================
  {
    qNum: 18,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 17',
    enBefore: 'The Planning Commission of India was established in the year 1950 with Prime Minister ',
    answer: 'Jawaharlal Nehru',
    enAfter: ' serving as its first Chairperson.',
    hiBefore: 'भारत में योजना आयोग (Planning Commission) की स्थापना वर्ष 1950 में हुई जिसके प्रथम अध्यक्ष प्रधानमंत्री ',
    hiAfter: ' थे।',
    hint: 'Jawaharlal Nehru / जवाहरलाल नेहरू',
    marks: 1
  },
  {
    qNum: 19,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 18',
    enBefore: 'In a capitalist market economy, the decision of "for whom to produce" is determined by ',
    answer: 'purchasing power',
    enAfter: ' (ability to buy) rather than biological human need.',
    hiBefore: 'एक पूंजीवादी बाजार अर्थव्यवस्था में "किसके लिए उत्पादन किया जाए" का निर्णय मानवीय जरूरतों के बजाय लोगों की ',
    hiAfter: ' (क्रय शक्ति / खरीदने की क्षमता) द्वारा निर्धारित होता है।',
    hint: 'Purchasing Power / क्रय शक्ति',
    marks: 1
  },
  {
    qNum: 20,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 19',
    enBefore: 'A formal national plan spells out how the scarce national ',
    answer: 'resources',
    enAfter: ' should be allocated over a specified time horizon to achieve stated socio-economic goals.',
    hiBefore: 'एक औपचारिक राष्ट्रीय योजना यह तय करती है कि किसी देश के सीमित ',
    hiAfter: ' (संसाधनों) का उपयोग निर्धारित अवधि में लक्ष्यों की प्राप्ति के लिए कैसे किया जाए।',
    hint: 'Resources / संसाधन',
    marks: 1
  },
  {
    qNum: 21,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 20',
    enBefore: 'The eminent statistician and architect widely regarded as the chief designer of India’s Second Five Year Plan was ',
    answer: 'P.C. Mahalanobis',
    enAfter: '.',
    hiBefore: 'प्रख्यात सांख्यिकीविद् जिन्हें भारत की दूसरी पंचवर्षीय योजना का मुख्य वास्तुकार (Architect) माना जाता है, वे ',
    hiAfter: ' थे।',
    hint: 'P.C. Mahalanobis / पी.सी. महालनोबिस',
    marks: 1
  },
  {
    qNum: 22,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 19-22',
    enBefore: 'The four overarching core goals of India’s Five Year Plans were Growth, Modernisation, ',
    answer: 'Self-reliance',
    enAfter: ', and Equity.',
    hiBefore: 'भारत की पंचवर्षीय योजनाओं के चार प्रमुख दीर्घकालिक लक्ष्य थे: संवृद्धि (Growth), आधुनिकीकरण (Modernisation), ',
    hiAfter: ' (आत्मनिर्भरता) और समानता (Equity)।',
    hint: 'Self-reliance / आत्मनिर्भरता',
    marks: 1
  },
  {
    qNum: 23,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 23',
    enBefore: 'Under post-independence land reforms, the abolition of intermediaries brought nearly ',
    answer: '200 lakh',
    enAfter: ' (20 million) tenant farmers into direct legal contact with the government.',
    hiBefore: 'स्वतंत्रता के बाद भूमि सुधारों में मध्यस्थों (जमींदारों) के उन्मूलन से लगभग ',
    hiAfter: ' (2 करोड़) काश्तकार सीधे सरकार के संपर्क में आकर भूमि के स्वामी बने।',
    hint: '200 Lakh (2 Crore) / 200 लाख',
    marks: 1
  },
  {
    qNum: 24,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 23',
    enBefore: 'Fixing the maximum legal limit of land that can be owned by an individual or family is known as ',
    answer: 'Land Ceiling',
    enAfter: ' (भूमि सीमा निर्धारण).',
    hiBefore: 'किसी व्यक्ति या परिवार द्वारा रखी जाने वाली कृषि भूमि की अधिकतम कानूनी सीमा तय करने की नीति को ',
    hiAfter: ' (भूमि सीमा / Land Ceiling) कहा जाता है।',
    hint: 'Land Ceiling / भूमि सीमा निर्धारण',
    marks: 1
  },
  {
    qNum: 25,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 24',
    enBefore: 'The Green Revolution in India was made possible by the introduction of ',
    answer: 'HYV seeds',
    enAfter: ' (High Yielding Varieties), chemical fertilizers, and assured irrigation.',
    hiBefore: 'भारत में हरित क्रांति की सफलता मुख्य रूप से ',
    hiAfter: ' (उच्च उपज देने वाले बीजों), रासायनिक उर्वरकों और सिंचाई सुविधाओं पर आधारित थी।',
    hint: 'HYV Seeds / अधिक उपज देने वाले बीज',
    marks: 1
  },
  {
    qNum: 26,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 25',
    enBefore: 'The portion of agricultural harvest that is sold in the market by farmers after retaining their own consumption requirement is called ',
    answer: 'Marketed Surplus',
    enAfter: '.',
    hiBefore: 'कृषि उपज का वह भाग जो किसान अपने परिवार के उपभोग के बाद खुले बाजार में बेचते हैं, उसे ',
    hiAfter: ' (विपणित अधिशेष / Marketed Surplus) कहा जाता है।',
    hint: 'Marketed Surplus / विपणित अधिशेष',
    marks: 1
  },
  {
    qNum: 27,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 29',
    enBefore: 'The Village and Small-Scale Industries Committee, commonly known as the ',
    answer: 'Karve Committee',
    enAfter: ', was constituted in 1955 to promote rural employment.',
    hiBefore: 'ग्रामीण औद्योगीकरण और रोजगार को बढ़ावा देने के लिए वर्ष 1955 में गठित समिति को ',
    hiAfter: ' (कार्वे समिति) के नाम से जाना जाता है।',
    hint: 'Karve Committee / कार्वे समिति (1955)',
    marks: 1
  },
  {
    qNum: 28,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 29',
    enBefore: 'In 1950, a Small-Scale Industry unit was defined as one having a maximum capital investment of ',
    answer: '₹5 Lakh',
    enAfter: ', which has progressively risen to ₹1 Crore in modern regulations.',
    hiBefore: 'वर्ष 1950 में एक लघु उद्योग (Small-Scale Industry) इकाई की अधिकतम पूंजी निवेश सीमा ',
    hiAfter: ' तय की गई थी, जो बाद में बढ़कर ₹1 करोड़ हो गई।',
    hint: '₹5 Lakh / ₹5 लाख',
    marks: 1
  },
  {
    qNum: 29,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 28',
    enBefore: 'Under the landmark Industrial Policy Resolution of 1956 (IPR 1956), industries were classified into ',
    answer: 'three',
    enAfter: ' categories (Schedules A, B, and C).',
    hiBefore: 'ऐतिहासिक औद्योगिक नीति संकल्प 1956 (IPR 1956) के तहत उद्योगों को ',
    hiAfter: ' श्रेणियों (अनुसूची A, B और C) में वर्गीकृत किया गया था।',
    hint: 'Three Categories / तीन श्रेणियां',
    marks: 1
  },
  {
    qNum: 30,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 28',
    enBefore: 'Under IPR 1956, ',
    answer: 'Schedule A',
    enAfter: ' comprised 17 core heavy industries which were reserved as the exclusive monopoly of the State.',
    hiBefore: 'औद्योगिक नीति 1956 के तहत ',
    hiAfter: ' (अनुसूची क) में शामिल 17 भारी उद्योगों को पूरी तरह से राज्य (सरकार) के एकाधिकार के लिए आरक्षित रखा गया था।',
    hint: 'Schedule A / अनुसूची A',
    marks: 1
  },
  {
    qNum: 31,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 28',
    enBefore: 'Under the Industrial Licensing policy (Licensing Raj), a private factory required a government license not only to start operations but even to ',
    answer: 'expand output',
    enAfter: ' or produce new goods.',
    hiBefore: 'लाइसेंस राज (औद्योगिक लाइसेंसिंग) के तहत निजी कंपनियों को नया कारखाना खोलने के साथ-साथ अपने ',
    hiAfter: ' (उत्पादन विस्तार) या नई वस्तु बनाने के लिए भी सरकारी लाइसेंस लेना अनिवार्य था।',
    hint: 'Expand Output / उत्पादन विस्तार',
    marks: 1
  },
  {
    qNum: 32,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 30',
    enBefore: 'The trade strategy of replacing foreign imported goods with domestically manufactured goods is called ',
    answer: 'Import Substitution',
    enAfter: '.',
    hiBefore: 'विदेशों से आयातित वस्तुओं के स्थान पर देश में ही उनका उत्पादन करने की अंतर्मुखी व्यापार नीति को ',
    hiAfter: ' (आयात प्रतिस्थापन / Import Substitution) कहा जाता है।',
    hint: 'Import Substitution / आयात प्रतिस्थापन',
    marks: 1
  },
  {
    qNum: 33,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 30',
    enBefore: 'To protect domestic industries under the Import Substitution policy, the government used two major instruments: ',
    answer: 'Tariffs and Quotas',
    enAfter: '.',
    hiBefore: 'आयात प्रतिस्थापन के तहत घरेलू उद्योगों को विदेशी प्रतिस्पर्धा से बचाने के लिए सरकार ने दो प्रमुख हथियार अपनाए: ',
    hiAfter: ' (प्रशुल्क और कोटा / Tariffs & Quotas)।',
    hint: 'Tariffs and Quotas / प्रशुल्क और कोटा',
    marks: 1
  },
  {
    qNum: 34,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 32',
    enBefore: 'A frequent criticism of public sector expansion before 1990 was its entry into non-core consumer goods, such as running hotels and manufacturing ',
    answer: 'Modern Bread',
    enAfter: '.',
    hiBefore: '1990 से पूर्व सार्वजनिक क्षेत्र की एक बड़ी आलोचना यह थी कि सरकार होटल चलाने और ',
    hiAfter: ' (मॉडर्न ब्रेड) जैसी गैर-जरूरी उपभोक्ता वस्तुएं बनाने में भी घुस गई थी।',
    hint: 'Modern Bread / मॉडर्न ब्रेड',
    marks: 1
  },
  {
    qNum: 35,
    chapter: 2,
    chapterCode: 'keec102',
    ref: 'NCERT Ch 2, Page 27',
    enBefore: 'Between 1950 and 1990, the share of the ',
    answer: 'Service',
    enAfter: ' sector in India’s GDP surged to over 40%, yet nearly 65% of the working population remained trapped in agriculture.',
    hiBefore: '1950 से 1990 के बीच भारत की जीडीपी में ',
    hiAfter: ' (सेवा क्षेत्र / Services) का हिस्सा बढ़कर 40% से अधिक हो गया, लेकिन कार्यबल का लगभग 65% हिस्सा अभी भी कृषि में ही लगा रहा।',
    hint: 'Service Sector / सेवा क्षेत्र',
    marks: 1
  }
];

// Split questions
const ch1List = questions.filter(q => q.chapter === 1);
const ch2List = questions.filter(q => q.chapter === 2);

// Alphabetical word bank
const allAnswers = questions.map(q => q.hint).sort((a, b) => a.localeCompare(b));

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Class 11 Economics Chapters 1 & 2 Laser Printable Fill in the Blanks Worksheet | StudyGuide</title>
  <meta name="description" content="CBSE NCERT Class 11 Economics Chapters 1 & 2 (keec101 & keec102) high-contrast Black & White Fill in the Blanks test paper optimized for laser printing with answer key and word bank.">
  <link rel="icon" type="image/svg+xml" href="/app-logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;600;700;800&family=JetBrains+Mono:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    /* ─────────────────────────────────────────────────────────────
       STRICT BLACK & WHITE LASER PRINTER DESIGN SYSTEM (ZERO COLOR TONER)
       Optimized for 600 DPI / 1200 DPI HP, Canon, Brother Laser Printers
       ───────────────────────────────────────────────────────────── */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: #ffffff;
      color: #000000;
      font-family: 'Times New Roman', 'Noto Sans Devanagari', Times, serif;
      font-size: 10.5pt;
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
    }

    /* Web Preview Controls & Navbar (Hidden completely during laser printing) */
    .web-control-bar {
      background: #000000;
      color: #ffffff;
      padding: 10px 18px;
      position: sticky;
      top: 0;
      z-index: 999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      border-bottom: 2px solid #000000;
    }
    .web-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 800;
      font-size: 0.95rem;
      letter-spacing: -0.02em;
    }
    .web-badge {
      background: #ffffff;
      color: #000000;
      padding: 2px 7px;
      border-radius: 4px;
      font-size: 0.68rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .web-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .web-btn {
      background: #ffffff;
      color: #000000;
      border: 1px solid #ffffff;
      padding: 5px 12px;
      border-radius: 6px;
      font-size: 0.76rem;
      font-weight: 800;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .web-btn:hover {
      background: #e2e8f0;
    }
    .web-btn-outline {
      background: transparent;
      color: #ffffff;
      border-color: #ffffff;
    }
    .web-btn-outline:hover {
      background: #ffffff;
      color: #000000;
    }
    .web-btn.active {
      background: #ffffff;
      color: #000000;
      box-shadow: 0 0 0 2px #000000, 0 0 0 4px #ffffff;
    }

    /* Paper Container (Matches Standard A4) */
    .paper-sheet {
      width: 100%;
      max-width: 210mm;
      margin: 20px auto 40px;
      background: #ffffff;
      border: 1px solid #000000;
      padding: 14mm 16mm;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    }

    /* Formal School / Board Header Box */
    .exam-header-box {
      border: 2px solid #000000;
      padding: 10px 14px;
      text-align: center;
      margin-bottom: 14px;
    }
    .school-name {
      font-size: 14pt;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .exam-title {
      font-size: 11pt;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: underline;
      margin-bottom: 3px;
    }
    .syllabus-text {
      font-size: 9pt;
      line-height: 1.35;
      margin-bottom: 8px;
    }
    .candidate-meta-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 6px;
      border-top: 1.5px solid #000000;
      border-bottom: 1.5px solid #000000;
      padding: 6px 2px;
      font-size: 9pt;
      text-align: left;
      margin-bottom: 6px;
    }
    .instructions-block {
      font-size: 8.5pt;
      text-align: left;
      line-height: 1.35;
    }

    /* Word Bank / Clue Box */
    .word-bank-box {
      border: 1.5px solid #000000;
      padding: 8px 12px;
      margin-bottom: 14px;
      font-size: 8.5pt;
      background: #ffffff;
    }
    .word-bank-title {
      font-weight: bold;
      font-size: 9pt;
      text-transform: uppercase;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #000000;
      padding-bottom: 2px;
    }
    .word-bank-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 10px;
      line-height: 1.4;
    }
    .word-chip {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      border: 1px solid #000000;
      padding: 1px 5px;
      border-radius: 2px;
      white-space: nowrap;
    }

    /* Section Banner */
    .section-bar {
      border: 1.5px solid #000000;
      border-left: 6px solid #000000;
      padding: 4px 10px;
      margin: 16px 0 10px;
      font-size: 10pt;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      background: #ffffff;
    }

    /* Questions List */
    .question-item {
      margin-bottom: 11px;
      padding-bottom: 9px;
      border-bottom: 1px dotted #888888;
      page-break-inside: avoid;
    }
    .q-head-line {
      display: flex;
      justify-content: space-between;
      font-size: 8pt;
      font-family: 'JetBrains Mono', monospace;
      font-weight: bold;
      color: #333333;
      margin-bottom: 2px;
    }
    .q-stem-en {
      font-size: 10pt;
      font-weight: 500;
      color: #000000;
      line-height: 1.5;
    }
    .q-stem-hi {
      font-size: 9pt;
      color: #222222;
      line-height: 1.5;
      margin-top: 2px;
      padding-left: 10px;
      border-left: 2px solid #555555;
    }

    /* Laser Blank Line Formatting */
    .laser-line {
      display: inline-block;
      min-width: 140px;
      border-bottom: 1.5px solid #000000;
      margin: 0 4px;
      vertical-align: baseline;
      text-align: center;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 9.5pt;
    }

    /* Hide / Show Solution Mode */
    body.student-mode .solution-text-fill {
      visibility: hidden;
    }
    body.teacher-mode .solution-text-fill {
      visibility: visible;
      text-decoration: underline;
      font-weight: bold;
    }
    body.student-mode .teacher-key-section {
      display: none !important;
    }
    body.teacher-mode .teacher-key-section {
      display: block !important;
    }

    /* Teacher Key Table */
    .teacher-key-section {
      margin-top: 20px;
      border-top: 2px solid #000000;
      padding-top: 14px;
      page-break-before: always;
    }
    .key-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 8.5pt;
      margin-top: 8px;
    }
    .key-table th, .key-table td {
      border: 1px solid #000000;
      padding: 4px 6px;
      text-align: left;
    }
    .key-table th {
      background: #f0f0f0;
      font-weight: bold;
      text-transform: uppercase;
    }

    /* Candidate Evaluation Block */
    .eval-box {
      border: 1.5px solid #000000;
      padding: 10px 14px;
      margin-top: 16px;
      page-break-inside: avoid;
    }
    .eval-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
      text-align: center;
      font-size: 8.5pt;
    }
    .eval-sig-line {
      margin-top: 24px;
      border-top: 1px solid #000000;
      padding-top: 3px;
      font-weight: bold;
    }

    /* ─────────────────────────────────────────────────────────────
       STRICT A4 PRINT STYLESHEET
       ───────────────────────────────────────────────────────────── */
    @page {
      size: A4 portrait;
      margin: 10mm 12mm 12mm 12mm;
    }

    @media print {
      body {
        background: #ffffff !important;
        color: #000000 !important;
        font-family: 'Times New Roman', 'Noto Sans Devanagari', Times, serif !important;
      }
      .web-control-bar, .no-print {
        display: none !important;
      }
      .paper-sheet {
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;
        max-width: 100% !important;
        box-shadow: none !important;
      }
      .question-item {
        page-break-inside: avoid !important;
        border-bottom: 1px dashed #000000 !important;
      }
      .exam-header-box {
        border: 2px solid #000000 !important;
      }
      .section-bar {
        border: 1.5px solid #000000 !important;
        border-left: 6px solid #000000 !important;
      }
      .laser-line {
        border-bottom: 1.5px solid #000000 !important;
      }
      .word-bank-box {
        border: 1.5px solid #000000 !important;
      }
    }
  </style>
</head>
<body class="student-mode">

  <!-- Web Control Toolbar (Hidden when printed to Laser Printer) -->
  <header class="web-control-bar no-print" aria-label="Laser Print Toolbar">
    <div class="web-brand">
      <span>🖨️ LASER PRINTER READY</span>
      <span class="web-badge">Pure Black &amp; White</span>
      <span style="font-size: 0.78rem; opacity: 0.85; margin-left: 6px;">Class 11 Economics • Chapters 1 &amp; 2 (35 Blanks)</span>
    </div>

    <div class="web-actions">
      <button class="web-btn web-btn-outline" onclick="toggleLanguage('both')" id="btn-lang-both">
        Bilingual
      </button>
      <button class="web-btn web-btn-outline" onclick="toggleLanguage('en')" id="btn-lang-en">
        English Only
      </button>
      <button class="web-btn web-btn-outline" onclick="toggleLanguage('hi')" id="btn-lang-hi">
        Hindi Only
      </button>

      <span style="color: #666; font-size: 0.8rem;">|</span>

      <button class="web-btn active" onclick="setMode('student')" id="btn-mode-student" title="Blank lines for student pen/pencil writing">
        📝 Student Blank Test
      </button>
      <button class="web-btn" onclick="setMode('teacher')" id="btn-mode-teacher" title="Filled answers for grading">
        📖 Teacher Answer Key
      </button>

      <span style="color: #666; font-size: 0.8rem;">|</span>

      <button class="web-btn web-btn-outline" onclick="toggleWordBank()" id="btn-word-bank" title="Toggle Word Bank / Clues Box">
        🔤 Clue Box: ON
      </button>

      <button class="web-btn" onclick="window.print()" style="background: #10b981; color: #ffffff; border-color: #10b981; font-weight: 900;">
        🖨️ Print to Laser Printer / PDF
      </button>

      <a href="/class11-economics-ch1-ch2-printable-question-paper.html" class="web-btn web-btn-outline" title="Switch to 4-Option Multiple Choice Paper">
        MCQ Paper ❯
      </a>
    </div>
  </header>

  <!-- Physical A4 Paper Layout -->
  <main class="paper-sheet">

    <!-- Official Examination Paper Header Box -->
    <section class="exam-header-box">
      <div class="school-name">NEXTSEM ACADEMY • SENIOR SECONDARY CURRICULUM ASSESSMENT (2026-27)</div>
      <div class="exam-title">CLASS XI ECONOMICS • UNIT ASSESSMENT: FILL IN THE BLANKS TEST</div>
      <div class="syllabus-text">
        <strong>Prescribed Curriculum:</strong> Unit 1: Development Policies &amp; Experience (1947–1990)<br>
        <strong>Chapter 1:</strong> Indian Economy on the Eve of Independence (NCERT keec101) &bull; 
        <strong>Chapter 2:</strong> Indian Economy 1950–1990 (NCERT keec102)
      </div>

      <div class="candidate-meta-grid">
        <div><strong>Student Name:</strong> _________________________________________</div>
        <div><strong>Roll Number:</strong> _______________</div>
        <div><strong>Date:</strong> _______________</div>
        <div><strong>Class &amp; Section:</strong> Class 11 - _____</div>
        <div><strong>Time Allowed:</strong> 60 Minutes</div>
        <div><strong>Maximum Marks:</strong> 35 Marks</div>
      </div>

      <div class="instructions-block">
        <strong>Instructions for Candidates:</strong><br>
        1. All 35 questions are compulsory. Fill in the exact economic term, year, percentage, or policy tool in the blanks provided.<br>
        2. Write neatly using a <strong>Blue or Black Ballpoint Pen</strong>. Each question carries exactly <strong>1 Mark</strong>.<br>
        3. <strong>Section A (Q1 – Q17):</strong> Chapter 1 — Indian Economy on the Eve of Independence.<br>
        4. <strong>Section B (Q18 – Q35):</strong> Chapter 2 — Indian Economy 1950–1990 (Planning, Agriculture, Industry &amp; Trade).
      </div>
    </section>

    <!-- Optional Word Bank / Clues Box (Can be shown or hidden) -->
    <section class="word-bank-box" id="word-bank-container">
      <div class="word-bank-title">
        <span>HELP BOX / CLUE BANK (WORD LIST FOR REFERENCE)</span>
        <span style="font-weight: normal; font-size: 7.5pt;">[Use appropriate clues to complete the blanks]</span>
      </div>
      <div class="word-bank-grid">
        ${allAnswers.map(ans => `<span class="word-chip">${escapeHtml(ans)}</span>`).join('')}
      </div>
    </section>

    <!-- ─────────────────────────────────────────────────────────────
         SECTION A: CHAPTER 1 (Q1 to Q17)
         ───────────────────────────────────────────────────────────── -->
    <div class="section-bar">
      <span>SECTION A: Indian Economy on the Eve of Independence (1947)</span>
      <span>17 Questions &bull; 17 Marks</span>
    </div>

    <div class="section-questions">
      ${ch1List.map(q => `
      <article class="question-item">
        <div class="q-head-line">
          <span>Q.${q.qNum < 10 ? '0' + q.qNum : q.qNum}. [1 Mark]</span>
          <span>${escapeHtml(q.ref)}</span>
        </div>
        <div class="q-stem-en lang-en">
          ${escapeHtml(q.enBefore)}<span class="laser-line"><span class="solution-text-fill">${escapeHtml(q.answer.toUpperCase())}</span></span>${escapeHtml(q.enAfter)}
        </div>
        <div class="q-stem-hi lang-hi">
          ${escapeHtml(q.hiBefore)}<span class="laser-line"><span class="solution-text-fill">${escapeHtml(q.hint)}</span></span>${escapeHtml(q.hiAfter)}
        </div>
      </article>
      `).join('')}
    </div>

    <!-- ─────────────────────────────────────────────────────────────
         SECTION B: CHAPTER 2 (Q18 to Q35)
         ───────────────────────────────────────────────────────────── -->
    <div class="section-bar" style="margin-top: 22px;">
      <span>SECTION B: Indian Economy (1950–1990) Planning, Agriculture, Industry &amp; Trade</span>
      <span>18 Questions &bull; 18 Marks</span>
    </div>

    <div class="section-questions">
      ${ch2List.map(q => `
      <article class="question-item">
        <div class="q-head-line">
          <span>Q.${q.qNum}. [1 Mark]</span>
          <span>${escapeHtml(q.ref)}</span>
        </div>
        <div class="q-stem-en lang-en">
          ${escapeHtml(q.enBefore)}<span class="laser-line"><span class="solution-text-fill">${escapeHtml(q.answer.toUpperCase())}</span></span>${escapeHtml(q.enAfter)}
        </div>
        <div class="q-stem-hi lang-hi">
          ${escapeHtml(q.hiBefore)}<span class="laser-line"><span class="solution-text-fill">${escapeHtml(q.hint)}</span></span>${escapeHtml(q.hiAfter)}
        </div>
      </article>
      `).join('')}
    </div>

    <!-- Evaluation Box & Signature Lines (For Examiner / School Grading) -->
    <section class="eval-box">
      <div class="eval-grid">
        <div>
          <div><strong>Candidate's Signature</strong></div>
          <div class="eval-sig-line">Signature of Student</div>
        </div>
        <div>
          <div><strong>Invigilator's Verification</strong></div>
          <div class="eval-sig-line">Signature of Invigilator</div>
        </div>
        <div>
          <div><strong>Marks Awarded (Out of 35)</strong></div>
          <div class="eval-sig-line">Marks: ______ / 35</div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────────────────────
         TEACHER'S COMPLETE ANSWER KEY & CITATION MASTER TABLE
         (Visible in Teacher Mode)
         ───────────────────────────────────────────────────────────── -->
    <section class="teacher-key-section">
      <div style="text-align: center; margin-bottom: 8px;">
        <h3 style="font-size: 12pt; text-transform: uppercase; font-weight: bold;">TEACHER'S EVALUATION MASTER KEY &amp; CITATION GUIDE</h3>
        <p style="font-size: 8.5pt; color: #333;">Strictly mapped to NCERT Indian Economic Development Textbooks (keec101 &amp; keec102)</p>
      </div>

      <table class="key-table">
        <thead>
          <tr>
            <th style="width: 6%;">Q.No</th>
            <th style="width: 28%;">Correct Answer (Blank Text)</th>
            <th style="width: 22%;">Hindi Equivalent Term</th>
            <th style="width: 18%;">NCERT Chapter &amp; Page</th>
            <th style="width: 26%;">Key Concept / Significance</th>
          </tr>
        </thead>
        <tbody>
          ${questions.map(q => `
          <tr>
            <td style="text-align: center; font-weight: bold;">${q.qNum}</td>
            <td style="font-weight: bold; text-transform: uppercase;">${escapeHtml(q.answer)}</td>
            <td>${escapeHtml(q.hint)}</td>
            <td style="font-family: monospace;">${escapeHtml(q.ref)}</td>
            <td>${q.chapter === 1 ? 'Ch 1 Eve of Independence' : 'Ch 2 1950–1990 Planning'}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </section>

  </main>

  <script>
    // Mode Switcher (Student Blank Lines vs Teacher Filled Answers)
    function setMode(mode) {
      const btnStudent = document.getElementById('btn-mode-student');
      const btnTeacher = document.getElementById('btn-mode-teacher');

      if (mode === 'student') {
        document.body.classList.remove('teacher-mode');
        document.body.classList.add('student-mode');
        btnStudent.classList.add('active');
        btnTeacher.classList.remove('active');
      } else {
        document.body.classList.remove('student-mode');
        document.body.classList.add('teacher-mode');
        btnTeacher.classList.add('active');
        btnStudent.classList.remove('active');
      }
    }

    // Language Toggle
    function toggleLanguage(lang) {
      const enEls = document.querySelectorAll('.lang-en');
      const hiEls = document.querySelectorAll('.lang-hi');
      const btnBoth = document.getElementById('btn-lang-both');
      const btnEn = document.getElementById('btn-lang-en');
      const btnHi = document.getElementById('btn-lang-hi');

      [btnBoth, btnEn, btnHi].forEach(b => b.classList.remove('active'));

      if (lang === 'en') {
        btnEn.classList.add('active');
        enEls.forEach(el => el.style.display = 'block');
        hiEls.forEach(el => el.style.display = 'none');
      } else if (lang === 'hi') {
        btnHi.classList.add('active');
        enEls.forEach(el => el.style.display = 'none');
        hiEls.forEach(el => el.style.display = 'block');
      } else {
        btnBoth.classList.add('active');
        enEls.forEach(el => el.style.display = 'block');
        hiEls.forEach(el => el.style.display = 'block');
      }
    }

    // Toggle Word Bank
    let isWordBankVisible = true;
    function toggleWordBank() {
      const container = document.getElementById('word-bank-container');
      const btn = document.getElementById('btn-word-bank');
      isWordBankVisible = !isWordBankVisible;
      if (isWordBankVisible) {
        container.style.display = 'block';
        btn.textContent = '🔤 Clue Box: ON';
        btn.classList.remove('active');
      } else {
        container.style.display = 'none';
        btn.textContent = '🔤 Clue Box: OFF';
        btn.classList.add('active');
      }
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(outputPath, html, 'utf8');
console.log(`✅ Successfully generated Laser Printable Fill-in-the-Blanks HTML at ${outputPath} (${html.length} bytes)`);
