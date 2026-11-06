const fs = require('fs');

// Fisher-Yates shuffle
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createItem(id, ch, chName, qHi, qEn, opts, exp, ref) {
  const shuffledOpts = shuffle(opts);
  const correctIdx = shuffledOpts.findIndex(o => o.isCorrect);
  const prefixes = ['(A)', '(B)', '(C)', '(D)'];

  return {
    id,
    ch,
    chName,
    qHi,
    qEn,
    optionsHi: shuffledOpts.map((o, i) => `${prefixes[i]} ${o.hi}`),
    optionsEn: shuffledOpts.map((o, i) => `${prefixes[i]} ${o.en}`),
    correct: correctIdx,
    exp,
    ref
  };
}

const rawList = [];

// =========================================================================
// THEME 1: BRICKS, BEADS AND BONES: THE HARAPPAN CIVILISATION (Q1 to Q20)
// =========================================================================
rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा सभ्यता की कृषि प्रौद्योगिकी के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:\n1. अफ़गानिस्तान में शोर्तुघई नामक पुरास्थल से नहरों के अवशेष मिले हैं, लेकिन पंजाब और सिंध में ऐसे साक्ष्य नहीं मिले।\n2. बनावली (हरियाणा) तथा चोलिस्तान के स्थलों से मिट्टी के बने हल के प्रतिरूप (मॉडल) मिले हैं।\n3. कालीबंगा (राजस्थान) में जुते हुए खेत का साक्ष्य मिला है जिसमें दो खांचे समकोण पर एक-दूसरे को काटते थे।\n4. धोलावीरा (गुजरात) में मिले विशाल जलाशयों का उपयोग संभवतः कृषि के लिए जल संचयन हेतु किया जाता था।\nउपर्युक्त कथनों में से कौन-से सही हैं?",
  qEn: "Consider the following statements regarding Harappan agricultural technology:\n1. Traces of canals have been found at Shortughai in Afghanistan, but not in Punjab or Sindh.\n2. Terracotta models of the plough have been found at Banawali (Haryana) and Cholistan.\n3. A ploughed field with two sets of furrows crossing at right angles was discovered at Kalibangan (Rajasthan).\n4. Water reservoirs found at Dholavira (Gujarat) may have been used for agricultural water storage.\nWhich of the statements given above are correct?",
  opts: [
    { hi: "1, 2, 3 और 4 (सभी चारों)", en: "1, 2, 3 and 4 (All four)", isCorrect: true },
    { hi: "केवल 1, 2 और 3", en: "1, 2 and 3 only", isCorrect: false },
    { hi: "केवल 2 और 3", en: "2 and 3 only", isCorrect: false },
    { hi: "केवल 1 और 4", en: "1 and 4 only", isCorrect: false }
  ],
  exp: "सभी चारों कथन पूर्णतः सही हैं। शोर्तुघई (अफ़गानिस्तान) से नहरें, बनावली/चोलिस्तान से पकी मिट्टी के हल, कालीबंगा से समकोण पर जुते खेत (दोहरी फसल) और धोलावीरा से पत्थरों के जलाशय मिले हैं। (NCERT Page 3-4)",
  ref: "NCERT Class 12 History, Theme 1, Pages 3–4"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "कथन (A): हड़प्पा सभ्यता के शहरों में जल-निकासी प्रणाली यह दर्शाती है कि नगरों के निर्माण से पूर्व पूरी बस्ती की सुनियोजित योजना बनाई गई थी।\nकारण (R): सड़कों और गलियों को लगभग एक 'ग्रिड' पद्धति में बनाया गया था जो एक-दूसरे को समकोण पर काटती थीं, और पहले नालियों के साथ गलियाँ बनीं और फिर उनके अगल-बगल आवासों का निर्माण हुआ।",
  qEn: "Assertion (A): The drainage system in Harappan cities demonstrates that settlements were thoroughly pre-planned before construction.\nReason (R): Streets and drains were laid out first along an approximate 'grid' pattern intersecting at right angles, and then houses were built alongside them.",
  opts: [
    { hi: "(A) और (R) दोनों सही हैं, और (R), (A) का सही स्पष्टीकरण है", en: "Both (A) and (R) are true, and (R) is the correct explanation of (A)", isCorrect: true },
    { hi: "(A) और (R) दोनों सही हैं, लेकिन (R), (A) का सही स्पष्टीकरण नहीं है", en: "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", isCorrect: false },
    { hi: "(A) सही है, लेकिन (R) गलत है", en: "(A) is true, but (R) is false", isCorrect: false },
    { hi: "(A) गलत है, लेकिन (R) सही है", en: "(A) is false, but (R) is true", isCorrect: false }
  ],
  exp: "दोनों कथन सत्य हैं और कारण (R) अभिकथन (A) की सटीक व्याख्या करता है। मैके ने लिखा था कि 'यह निश्चित रूप से अब तक खोजी गई सबसे संपूर्ण प्राचीन जल-निकासी प्रणाली है।' (NCERT Page 6)",
  ref: "NCERT Class 12 History, Theme 1, Page 6"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "मोहनजोदड़ो के गृह स्थापत्य (Domestic Architecture) के संदर्भ में निम्नलिखित में से कौन-सा कथन असत्य है?",
  qEn: "Which of the following statements regarding the domestic architecture of Mohenjodaro is INCORRECT?",
  opts: [
    { hi: "भूमि तल पर बनी दीवारों में बड़ी-बड़ी खिड़कियाँ मुख्य सड़क की ओर खुलती थीं ताकि अत्यधिक वेंटिलेशन मिले", en: "The ground floor walls had large windows opening directly onto the main street for maximum ventilation", isCorrect: true },
    { hi: "आवासीय भवन एक आंगन पर केंद्रित थे जिसके चारों ओर कमरे बने होते थे", en: "Houses were centered on a courtyard with rooms on all sides", isCorrect: false },
    { hi: "हड़प्पावासी निजता (Privacy) को अत्यधिक महत्व देते थे, इसलिए भूतल की दीवारों में खिड़कियाँ नहीं होती थीं", en: "Harappans valued privacy, so there were no windows in walls at ground level", isCorrect: false },
    { hi: "मुख्य प्रवेश द्वार से घर के आंतरिक भाग या आंगन का सीधा दृश्य नहीं दिखता था", en: "The main entrance did not give a direct view of the interior or the courtyard", isCorrect: false }
  ],
  exp: "कथन असत्य है क्योंकि हड़प्पावासी निजता (गोपनीयता) का अत्यधिक ध्यान रखते थे; इसीलिए भूमि तल पर बनी दीवारों में कोई खिड़की नहीं होती थी। (NCERT Page 6-7)",
  ref: "NCERT Class 12 History, Theme 1, Pages 6–7"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा सभ्यता में मनका निर्माण (Bead-making) उद्योग के संदर्भ में कौन-सा युग्म सही सुमेलित नहीं है?",
  qEn: "In the context of Harappan bead-making craft, which of the following pairs is INCORRECTLY matched?",
  opts: [
    { hi: "विशेष छेद करने वाले उपकरण (Drills) — केवल कालीबंगा और रोपड़ से मिले", en: "Specialized drilling tools — found only at Kalibangan and Ropar", isCorrect: true },
    { hi: "कार्नेलियन का सुंदर लाल रंग — पीले कच्चे माल को आग में पकाकर प्राप्त करना", en: "Deep red carnelian colour — obtained by firing yellowish raw material", isCorrect: false },
    { hi: "सेलखड़ी (Steatite) — अत्यंत कोमल पत्थर जिसके चूर्ण के लेप से सांचे में ढालकर मनके बनाना", en: "Steatite — a very soft stone whose paste was molded into beads", isCorrect: false },
    { hi: "शिल्प उत्पादन का प्रमुख केंद्र — चन्हुदड़ो और लोथल", en: "Specialized craft production centres — Chanhudaro and Lothal", isCorrect: false }
  ],
  exp: "विशेष छेद करने वाले उपकरण चन्हुदड़ो, लोथल और धोलावीरा से मिले हैं, कालीबंगा या रोपड़ से नहीं। (NCERT Page 11)",
  ref: "NCERT Class 12 History, Theme 1, Page 11"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "मेसोपोटामियाई पुरालेखों में उल्लिखित स्थलों और उनके संभावित भौगोलिक क्षेत्रों के संदर्भ में कौन-सा सुमेलन सही है?\n1. मगान (Magan) — ओमान प्रायद्वीप (जहाँ के तांबे में निकल के अंश मिलते हैं)\n2. मेलुहा (Meluhha) — हड़प्पा क्षेत्र (नाविकों का देश)\n3. दिलमुन (Dilmun) — बहरीन द्वीप (फारस की खाड़ी का व्यापारिक पड़ाव)",
  qEn: "Which of the following geographical identifications from Mesopotamian cuneiform texts are correct?\n1. Magan — Oman peninsula (whose copper contains traces of nickel)\n2. Meluhha — Harappan region (land of seafarers)\n3. Dilmun — Bahrain island (trading post in the Persian Gulf)",
  opts: [
    { hi: "1, 2 और 3 (सभी तीनों)", en: "1, 2 and 3 (All three)", isCorrect: true },
    { hi: "केवल 1 और 2", en: "1 and 2 only", isCorrect: false },
    { hi: "केवल 2 और 3", en: "2 and 3 only", isCorrect: false },
    { hi: "केवल 1 और 3", en: "1 and 3 only", isCorrect: false }
  ],
  exp: "तीनों सुमेलन पूर्णतः सत्य हैं। मेसोपोटामियाई लेखों में मगान (ओमान), मेलुहा (हड़प्पा क्षेत्र) और दिलमुन (बहरीन) का स्पष्ट उल्लेख है। (NCERT Page 13-14)",
  ref: "NCERT Class 12 History, Theme 1, Pages 13–14"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा सभ्यता की बाट (Weight) प्रणाली के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. बाट आमतौर पर 'चर्ट' नामक पत्थर से बनाए जाते थे और सामान्यतः घनाकार होते थे।\n2. निचले मानदंड द्विआधारी (Binary) प्रणाली (1, 2, 4, 8, 16, 32... 12800 तक) का अनुसरण करते थे।\n3. उच्चतर मानदंड दशमलव (Decimal) प्रणाली पर आधारित थे।\n4. छोटे बाटों का उपयोग संभवतः आभूषणों और मनकों को तौलने के लिए किया जाता था।\nउपर्युक्त में से कौन-से कथन सत्य हैं?",
  qEn: "Consider the following statements regarding the Harappan weight system:\n1. Weights were generally made of chert and were cubical with no markings.\n2. Lower denominations followed the binary system (1, 2, 4, 8, 16, 32... up to 12,800).\n3. Higher denominations followed the decimal system.\n4. Smaller weights were likely used for weighing jewellery and beads.\nWhich of the statements given above are correct?",
  opts: [
    { hi: "1, 2, 3 और 4 (सभी चारों)", en: "1, 2, 3 and 4 (All four)", isCorrect: true },
    { hi: "केवल 1 और 2", en: "1 and 2 only", isCorrect: false },
    { hi: "केवल 2, 3 और 4", en: "2, 3 and 4 only", isCorrect: false },
    { hi: "केवल 1, 3 और 4", en: "1, 3 and 4 only", isCorrect: false }
  ],
  exp: "चारों कथन पूर्णतः सत्य हैं। चर्ट से बने घनाकार बाटों में निचले मानदंड द्विआधारी (1, 2, 4, 8, 16, 32... 12,800) और उच्चतर मानदंड दशमलव प्रणाली पर आधारित थे। (NCERT Page 15)",
  ref: "NCERT Class 12 History, Theme 1, Page 15"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा सभ्यता के शवाधानों (Burials) के अध्ययन से पुरातत्वविदों ने सामाजिक भिन्नताओं के बारे में क्या निष्कर्ष निकाला है?",
  qEn: "What primary conclusion did archaeologists draw regarding social differences from studying Harappan burials?",
  opts: [
    { hi: "हड़प्पावासी मृतकों के साथ बहुमूल्य वस्तुएं दफनाने में विश्वास नहीं करते थे, इसलिए मिस्र के पिरामिडों जैसी अपार धन-संपदा यहाँ कब्रों में नहीं मिलती", en: "Harappans generally did not believe in burying precious valuables with the dead, unlike Egyptian pyramid burials", isCorrect: true },
    { hi: "सभी हड़प्पाई कब्रों में सोने के मुकुट और तलवारें नियमित रूप से मिलती हैं", en: "All Harappan graves regularly contained gold crowns and swords", isCorrect: false },
    { hi: "केवल पुरुषों की कब्रों में ही मिट्टी के बर्तन रखे जाते थे, महिलाओं की कब्रों में नहीं", en: "Pottery was deposited only in male graves and never in female graves", isCorrect: false },
    { hi: "हड़प्पा सभ्यता में शवों को दफनाने की कोई प्रथा नहीं थी, केवल दाह संस्कार होता था", en: "Harappans practiced only cremation with no earth burials whatsoever", isCorrect: false }
  ],
  exp: "हड़प्पा स्थलों की कब्रों में मिट्टी के बर्तन, तांबे का दर्पण और साधारण आभूषण मिले हैं, लेकिन मिस्र के पिरामिडों की तरह अपार धन-संपत्ति नहीं मिलती। (NCERT Page 9)",
  ref: "NCERT Class 12 History, Theme 1, Page 9"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "पुरातत्वविदों द्वारा सामाजिक-आर्थिक भिन्नताओं की पहचान हेतु पुरावस्तुओं को 'उपयोगी' (Utilitarian) और 'विलासिता' (Luxury) में वर्गीकृत किया जाता है। हड़प्पा संदर्भ में 'फैयांस' (Faience) के छोटे पात्रों को विलासिता की श्रेणी में क्यों रखा गया है?",
  qEn: "Archaeologists classify artifacts into 'utilitarian' and 'luxuries'. Why were small pots of faience categorized as luxury items in Harappan contexts?",
  opts: [
    { hi: "क्योंकि घिसी हुई रेत या बालू, रंग और गोंद के मिश्रण को पकाकर इसे बनाना अत्यंत कठिन, दुर्लभ और महंगा था", en: "Because they were made of ground sand, gum, and colour, being extremely difficult, rare, and costly to manufacture", isCorrect: true },
    { hi: "क्योंकि यह केवल सोने और चांदी से बनता था", en: "Because it was manufactured exclusively from solid gold and silver", isCorrect: false },
    { hi: "क्योंकि यह केवल मेसोपोटामिया से आयातित लकड़ी थी", en: "Because it was perishable cedar wood imported from Mesopotamia", isCorrect: false },
    { hi: "क्योंकि इसका उपयोग केवल पुरोहित-राजा के स्नान हेतु होता था", en: "Because it was used solely for the ritual bath of the priest-king", isCorrect: false }
  ],
  exp: "फैयांस को तैयार करना तकनीकी रूप से अत्यंत जटिल था। इससे बने सुगंधित द्रव्यों के छोटे पात्र दुर्लभ और कीमती माने जाते थे। (NCERT Page 10)",
  ref: "NCERT Class 12 History, Theme 1, Page 10"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा सभ्यता के प्रमुख पुरातात्विक स्थलों और उनकी भौगोलिक स्थिति का कौन सा युग्म सही सुमेलित नहीं है?",
  qEn: "Which of the following pairs matching a Harappan archaeological site with its geographical location is INCORRECT?",
  opts: [
    { hi: "राखीगढ़ी — राजस्थान", en: "Rakhigarhi — Rajasthan", isCorrect: true },
    { hi: "धोलावीरा और लोथल — गुजरात", en: "Dholavira and Lothal — Gujarat", isCorrect: false },
    { hi: "कालीबंगा — राजस्थान", en: "Kalibangan — Rajasthan", isCorrect: false },
    { hi: "बनावली और मिताथल — हरियाणा", en: "Banawali and Mitathal — Haryana", isCorrect: false }
  ],
  exp: "राखीगढ़ी हरियाणा के हिसार जिले में स्थित है, राजस्थान में नहीं। कालीबंगा राजस्थान के हनुमानगढ़ जिले में स्थित है। (NCERT Page 2)",
  ref: "NCERT Class 12 History, Theme 1, Page 2"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा सभ्यता के सुदूर क्षेत्रों से कच्चा माल प्राप्त करने के मार्गों के संदर्भ में कौन-सा मिलान सही है?\n1. शंख — नागेश्वर और बालाकोट\n2. लापिस लाजुली (लाजवर्द मणि) — शोर्तुघई (अफ़गानिस्तान)\n3. कार्नेलियन — भरूच (गुजरात)\n4. तांबा — खेतड़ी (राजस्थान)\n5. सोना — दक्षिण भारत (कर्नाटक)",
  qEn: "Which of the following source-procurement mappings for Harappan raw materials are correct?\n1. Shell — Nageshwar and Balakot\n2. Lapis Lazuli — Shortughai (Afghanistan)\n3. Carnelian — Bharuch (Gujarat)\n4. Copper — Khetri (Rajasthan)\n5. Gold — South India (Karnataka)",
  opts: [
    { hi: "1, 2, 3, 4 और 5 (सभी पांचों)", en: "1, 2, 3, 4 and 5 (All five)", isCorrect: true },
    { hi: "केवल 1, 2 और 4", en: "1, 2 and 4 only", isCorrect: false },
    { hi: "केवल 2, 3, 4 और 5", en: "2, 3, 4 and 5 only", isCorrect: false },
    { hi: "केवल 1, 3 और 5", en: "1, 3 and 5 only", isCorrect: false }
  ],
  exp: "सभी पांचों मिलान शत-प्रतिशत सही हैं। शोर्तुघई लाजवर्द के सबसे अच्छे स्रोत के पास था, खेतड़ी से तांबा और दक्षिण भारत से सोना आता था। (NCERT Page 11-12)",
  ref: "NCERT Class 12 History, Theme 1, Pages 11–12"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा लिपि के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:\n1. सबसे लंबे अभिलेख में लगभग 26 चिह्न हैं।\n2. लिपि दाईं ओर चौड़ी और बाईं ओर संकुचित है, जो दर्शाता है कि लिखने वाले ने दाईं ओर से लिखना शुरू किया।\n3. यह लिपि केवल मुहरों पर ही पाई गई है, अन्य किसी वस्तु पर नहीं।\nउपर्युक्त में से कौन-सा/से कथन असत्य है/हैं?",
  qEn: "Consider the following statements regarding the Harappan script:\n1. The longest inscription contains about 26 signs.\n2. Writing is spaced wider on the right and cramped on the left, proving it was written right-to-left.\n3. This script has been found exclusively on seals and on no other objects.\nWhich of the statements given above is/are INCORRECT?",
  opts: [
    { hi: "केवल 3", en: "3 only", isCorrect: true },
    { hi: "केवल 1 और 2", en: "1 and 2 only", isCorrect: false },
    { hi: "केवल 2 और 3", en: "2 and 3 only", isCorrect: false },
    { hi: "1, 2 और 3", en: "1, 2 and 3", isCorrect: false }
  ],
  exp: "कथन 3 असत्य है क्योंकि हड़प्पाई लिपि केवल मुहरों पर ही नहीं, बल्कि तांबे के औजारों, मर्तबानों, अस्थि छड़ों और धोलावीरा के काष्ठ सूचना-पट्ट पर भी मिली है। (NCERT Page 15)",
  ref: "NCERT Class 12 History, Theme 1, Page 15"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "धोलावीरा (गुजरात) की नगर योजना मोहनजोदड़ो और हड़प्पा से किस विशिष्ट रूप में भिन्न थी?",
  qEn: "How was the settlement layout of Dholavira (Gujarat) distinctly different from Mohenjodaro and Harappa?",
  opts: [
    { hi: "धोलावीरा दो के बजाय तीन स्पष्ट भागों (दुर्ग, मध्यम नगर और निचला नगर) में विभाजित था और पूरी बस्ती पत्थर की दीवारों से घिरी थी", en: "Dholavira was divided into three distinct sections (Citadel, Middle Town, Lower Town), all fortified with massive stone walls", isCorrect: true },
    { hi: "धोलावीरा में कोई दुर्ग या किलेबंदी नहीं थी", en: "Dholavira had no citadel or fortifications whatsoever", isCorrect: false },
    { hi: "धोलावीरा की सभी इमारतें लकड़ी और घास-फूस की बनी थीं", en: "All houses in Dholavira were made solely of perishable wood and thatch", isCorrect: false },
    { hi: "धोलावीरा में कोई जल निकास नाली नहीं पाई गई", en: "No drainage channels were found in Dholavira", isCorrect: false }
  ],
  exp: "धोलावीरा तीन भागों (दुर्ग, मध्यम शहर, निचला शहर) में विभाजित था। इसके परकोटे ईंटों के बजाय तराशे गए पत्थरों से बने थे। (NCERT Page 5)",
  ref: "NCERT Class 12 History, Theme 1, Page 5"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "आर.ई.एम. व्हीलर ने 1947 में ऋग्वेद के किस श्लोक और मोहनजोदड़ो की 'डेडमैन लेन' से मिले कंकालों के आधार पर हड़प्पा के पतन हेतु 'आर्य आक्रमण' का सिद्धांत प्रस्तुत किया था?",
  qEn: "Based on which Rigvedic deity and human skeletons found at Deadman Lane did R.E.M. Wheeler propose the theory of an Aryan massacre in 1947?",
  opts: [
    { hi: "इंद्र (पुरंदर — पुरों/किलों का विध्वंसक)", en: "Indra (Purandara — destroyer of forts)", isCorrect: true },
    { hi: "अग्नि (हविष्य वाहक)", en: "Agni (carrier of offerings)", isCorrect: false },
    { hi: "वरुण (ऋत के संरक्षक)", en: "Varuna (guardian of cosmic order)", isCorrect: false },
    { hi: "सोम (दिव्य वनस्पति)", en: "Soma (divine plant deity)", isCorrect: false }
  ],
  exp: "व्हीलर ने ऋग्वेद में इंद्र को 'पुरंदर' कहे जाने के आधार पर तर्क दिया था। बाद में जॉर्ज डेल्स ने सिद्ध किया कि ये कंकाल एक ही काल के नहीं हैं और किसी नरसंहार का प्रमाण नहीं हैं। (NCERT Page 18)",
  ref: "NCERT Class 12 History, Theme 1, Page 18"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "भारतीय पुरातत्व के इतिहास में पुरातात्विक उत्खननों के संबंध में निम्नलिखित का सही कालानुक्रम क्या है?\n1. कनिंघम को पहली हड़प्पाई मुहर प्राप्त होना\n2. जॉन मार्शल द्वारा सिंधु सभ्यता की विश्वव्यापी घोषणा\n3. आर.ई.एम. व्हीलर द्वारा टीले के स्तर-विन्यास (Stratigraphy) का नियम लागू करना\n4. एस.आर. राव द्वारा लोथल में उत्खनन प्रारंभ करना",
  qEn: "What is the correct chronological sequence of the following archaeological milestones in Indus Valley research?\n1. Alexander Cunningham receiving the first Harappan seal\n2. John Marshall announcing the discovery to the world\n3. R.E.M. Wheeler introducing stratigraphy at Harappa\n4. S.R. Rao commencing excavations at Lothal",
  opts: [
    { hi: "1 ➔ 2 ➔ 3 ➔ 4", en: "1 ➔ 2 ➔ 3 ➔ 4", isCorrect: true },
    { hi: "2 ➔ 1 ➔ 3 ➔ 4", en: "2 ➔ 1 ➔ 3 ➔ 4", isCorrect: false },
    { hi: "1 ➔ 3 ➔ 2 ➔ 4", en: "1 ➔ 3 ➔ 2 ➔ 4", isCorrect: false },
    { hi: "4 ➔ 1 ➔ 2 ➔ 3", en: "4 ➔ 1 ➔ 2 ➔ 3", isCorrect: false }
  ],
  exp: "कनिंघम रिपोर्ट (1875) ➔ जॉन मार्शल की घोषणा (1924) ➔ व्हीलर की स्ट्रैटिग्राफी (1944) ➔ एस.आर. राव द्वारा लोथल उत्खनन (1955)। (NCERT Page 23)",
  ref: "NCERT Class 12 History, Theme 1, Page 23"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा सभ्यता के राजनीतिक संगठन (शासन व्यवस्था) के संबंध में पुरातत्वविदों द्वारा प्रस्तुत निम्नलिखित मतों पर विचार कीजिए:\n1. हड़प्पाई समाज में कोई शासक नहीं था और सभी की सामाजिक स्थिति समान थी।\n2. यहाँ कोई एक शासक नहीं बल्कि कई शासक थे (जैसे मोहनजोदड़ो का अलग राजा, हड़प्पा का अलग राजा)।\n3. यह एक विशाल एकल राज्य था, जैसा कि मुहरों, बाटों, ईंटों और सुनियोजित बस्तियों की एकरूपता से संकेत मिलता है।\nवर्तमान पुरातात्विक साक्ष्यों के अनुसार सबसे तर्कसंगत मत कौन-सा माना जाता है?",
  qEn: "Consider the following archaeological hypotheses regarding Harappan political authority:\n1. There were no rulers and everyone enjoyed equal status.\n2. There were several rulers (separate kings for Mohenjodaro, Harappa, etc.).\n3. It was a single unified state, evidenced by uniformity in seals, weights, bricks, and planned settlements.\nWhich hypothesis is considered most plausible based on material uniformity?",
  opts: [
    { hi: "मत 3 (एकल राज्य सिद्धांत)", en: "Hypothesis 3 (Single Unified State)", isCorrect: true },
    { hi: "मत 1 (पूर्ण साम्यवाद)", en: "Hypothesis 1 (Rulerless egalitarian society)", isCorrect: false },
    { hi: "मत 2 (स्वतंत्र नगर-राज्य)", en: "Hypothesis 2 (Fragmented City-States)", isCorrect: false },
    { hi: "कोई भी मत साक्ष्य आधारित नहीं है", en: "None of the hypotheses has material backing", isCorrect: false }
  ],
  exp: "पूरी सभ्यता में पुरावस्तुओं (मुहरों, बाटों, ईंटों के अनुपात 4:2:1) की अद्वितीय एकरूपता एकल राज्य वाले मत (मत 3) को सबसे अधिक स्वीकार्य बनाती है। (NCERT Page 16)",
  ref: "NCERT Class 12 History, Theme 1, Page 16"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा स्थलों से मिले अनाजों के दानों के आधार पर, निम्नलिखित में से कौन-सी फसल हड़प्पा सभ्यता में तुलनात्मक रूप से अत्यंत 'दुर्लभ' (Rare) पाई गई है?",
  qEn: "Based on archaeo-botanical remains found at Harappan sites, which of the following food grains was comparatively very RARE?",
  opts: [
    { hi: "चावल (Rice)", en: "Rice", isCorrect: true },
    { hi: "गेहूं (Wheat)", en: "Wheat", isCorrect: false },
    { hi: "जौ (Barley)", en: "Barley", isCorrect: false },
    { hi: "सफेद चना (Chickpea)", en: "Chickpea", isCorrect: false }
  ],
  exp: "हड़प्पा स्थलों से गेहूं, जौ, दाल, सफेद चना और तिल मिले हैं। गुजरात से बाजरा मिला है। चावल के दाने तुलनात्मक रूप से बहुत दुर्लभ पाए गए हैं। (NCERT Page 2)",
  ref: "NCERT Class 12 History, Theme 1, Page 2"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा की मुहरों पर अंकित 'एकश्रृंगी' (Unicorn) और अन्य काल्पनिक पशु आकृतियों के संदर्भ में मार्शल ने धार्मिक व्याख्या करते हुए इसे किस देवता के प्रारंभिक रूप से जोड़ने का प्रयास किया था?",
  qEn: "In interpreting Harappan seals depicting a horned figure seated yogic style surrounded by animals, John Marshall associated it with an early prototype of which Hindu deity?",
  opts: [
    { hi: "आद्य-शिव (Proto-Shiva / रुद्र)", en: "Proto-Shiva (Rudra)", isCorrect: true },
    { hi: "भगवान विष्णु", en: "Lord Vishnu", isCorrect: false },
    { hi: "देवराज इंद्र", en: "Devaraja Indra", isCorrect: false },
    { hi: "प्रजापति ब्रह्मा", en: "Prajapati Brahma", isCorrect: false }
  ],
  exp: "योग मुद्रा में जानवरों (हाथी, बाघ, गैंडा, भैंसा) से घिरे व्यक्ति को जॉन मार्शल ने 'आद्य-शिव' (Proto-Shiva) की संज्ञा दी। (NCERT Page 22)",
  ref: "NCERT Class 12 History, Theme 1, Page 22"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "हड़प्पा सभ्यता के लगभग 1800 ईसा पूर्व में पतन के बाद विकसित होने वाली 'उत्तर हड़प्पा संस्कृतियों' (Late Harappan) में क्या परिवर्तन देखा गया?",
  qEn: "What major transformation characterized the Late Harappan cultures that developed after c. 1800 BCE?",
  opts: [
    { hi: "विशिष्ट पुरावस्तुओं (बाट, मुहरें, मनके) का लोप हो गया, लेखन समाप्त हुआ और लोग ग्रामीण जीवन शैली में लौट गए", en: "Distinctive artifacts (weights, seals, beads) disappeared, writing ceased, and populations shifted to rural lifestyles", isCorrect: true },
    { hi: "इमारतें बहुमंजिला संगमरमर की बनने लगीं", en: "Buildings evolved into multi-storeyed marble palaces", isCorrect: false },
    { hi: "मेसोपोटामिया के साथ व्यापार में दस गुना वृद्धि हुई", en: "Maritime trade with Mesopotamia increased tenfold", isCorrect: false },
    { hi: "लोहे के हथियारों का व्यापक प्रयोग शुरू हुआ", en: "Widespread adoption of iron swords and weapons began immediately", isCorrect: false }
  ],
  exp: "1800 ई.पू. के बाद विशिष्ट पुरावस्तुएं (बाट, मुहरें, मनके) गायब हो गईं, लंबी दूरी का व्यापार समाप्त हुआ और आवास निर्माण तकनीक में भारी गिरावट आई। (NCERT Page 17)",
  ref: "NCERT Class 12 History, Theme 1, Page 17"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "लोथल में मिली 'गोदी' (Dockyard) की संरचना किस सामग्री से निर्मित एक विशाल ईंटों का घेरा थी?",
  qEn: "The famous tidal dockyard discovered at Lothal was a monumental basin constructed using:",
  opts: [
    { hi: "पकी हुई ईंटें (Burnt Bricks)", en: "Burnt Bricks", isCorrect: true },
    { hi: "कच्ची मिट्टी के ब्लॉक", en: "Sun-dried mud blocks", isCorrect: false },
    { hi: "ग्रेनाइट प्रस्तर खंड", en: "Rough granite boulders", isCorrect: false },
    { hi: "लकड़ी के लट्ठे", en: "Teak wood palisades", isCorrect: false }
  ],
  exp: "लोथल में पकी ईंटों से बना एक विशाल जल-घेरा मिला है, जिसे पुरातत्वविदों ने 'गोदी' (Dockyard) माना है। (NCERT Page 14)",
  ref: "NCERT Class 12 History, Theme 1, Page 14"
});

rawList.push({
  ch: 1, chName: "विषय 1: ईंटें, मनके तथा अस्थियाँ: हड़प्पा सभ्यता (Bricks, Beads and Bones)",
  qHi: "कनिंघम के पुरातात्विक उपागम के संदर्भ में कौन-सा कथन उनके पूर्वाग्रह को सटीक रूप से व्यक्त करता है?",
  qEn: "Which statement accurately describes Alexander Cunningham's epistemological bias in investigating Indian archaeology?",
  opts: [
    { hi: "वे मुख्य रूप से 4थी से 7वीं सदी ईस्वी के चीनी बौद्ध यात्रियों के यात्रा-वृत्तांतों द्वारा छोड़े गए सुरागों पर निर्भर थे", en: "He relied primarily on itineraries left by 4th-7th century CE Chinese Buddhist pilgrims to guide his excavations", isCorrect: true },
    { hi: "वे केवल हड़प्पा लिपि को पढ़ने में रुचि रखते थे", en: "He was solely interested in deciphering the Harappan script", isCorrect: false },
    { hi: "वे रेडियोकार्बन डेटिंग के जनक थे", en: "He was the pioneer of radiocarbon C-14 dating", isCorrect: false },
    { hi: "वे केवल दक्षिण भारत के स्मारकों का सर्वेक्षण करते थे", en: "He surveyed exclusively South Indian megaliths", isCorrect: false }
  ],
  exp: "कनिंघम की मुख्य रुचि आरंभिक ऐतिहासिक काल में थी। उन्होंने चीनी बौद्ध तीर्थयात्रियों के वृत्तांतों को अपने अन्वेषण का मुख्य आधार बनाया। (NCERT Page 19)",
  ref: "NCERT Class 12 History, Theme 1, Page 19"
});

// ===============================================================================================
// THEME 2: KINGS, FARMERS AND TOWNS: EARLY STATES AND ECONOMIES (Q21 to Q40)
// ===============================================================================================
rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "जेम्स प्रिंसेप द्वारा प्राचीन लिपियों (Brahmi & Kharosthi) के विगूढ़न (Decipherment) के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. खरोष्ठी लिपि का विगूढ़न हिंद-यूनानी (Indo-Greek) राजाओं के द्विभाषी सिक्कों (यूनानी और खरोष्ठी) की तुलना करके किया गया।\n2. ब्राह्मी लिपि को पढ़ने में विद्वानों ने आरंभ में यह मान लिया था कि प्राचीन अभिलेख संस्कृत भाषा में लिखे गए हैं, जबकि वे प्राकृत में थे।\n3. प्रिंसेप ने पाया कि अधिकांश अभिलेखों में 'पियदस्सी' (मनोहर मुखाकृति वाले राजा) की उपाधि सम्राट अशोक के लिए प्रयुक्त थी।\nउपर्युक्त कथनों में से कौन-से सही हैं?",
  qEn: "Consider the following statements regarding the decipherment of ancient scripts by James Prinsep:\n1. Kharosthi was deciphered by comparing bilingual Indo-Greek coins containing Greek and Kharosthi names.\n2. In deciphering Brahmi, European scholars initially assumed inscriptions were in Sanskrit, whereas they were in Prakrit.\n3. Prinsep established that 'Piyadassi' (pleasant to behold) referred directly to Emperor Ashoka.\nWhich of the statements given above are correct?",
  opts: [
    { hi: "1, 2 और 3 (सभी तीनों)", en: "1, 2 and 3 (All three)", isCorrect: true },
    { hi: "केवल 1 और 2", en: "1 and 2 only", isCorrect: false },
    { hi: "केवल 2 और 3", en: "2 and 3 only", isCorrect: false },
    { hi: "केवल 1 और 3", en: "1 and 3 only", isCorrect: false }
  ],
  exp: "तीनों कथन शत-प्रतिशत सही हैं। खरोष्ठी का विगूढ़न इंडो-ग्रीक सिक्कों से हुआ, ब्राह्मी को आधुनिक देवनागरी/बंगाली से पीछे की ओर जोड़कर पढ़ा गया, और 'पियदस्सी' का तादात्म्य अशोक से स्थापित हुआ। (NCERT Page 28, 45-46)",
  ref: "NCERT Class 12 History, Theme 2, Pages 28 & 45–46"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "छठी शताब्दी ईसा पूर्व में सोलह महाजनपदों के राजनीतिक स्वरूप के संदर्भ में निम्नलिखित में से कौन-सा कथन असत्य है?",
  qEn: "Which of the following statements regarding the political structure of the sixteen Mahajanapadas in the 6th century BCE is INCORRECT?",
  opts: [
    { hi: "सभी सोलह महाजनपदों पर केवल एक निरंकुश आनुवंशिक राजा का शासन था और गणराज्यों का कोई अस्तित्व नहीं था", en: "All sixteen Mahajanapadas were ruled exclusively by absolute hereditary monarchs with zero existence of oligarchic republics", isCorrect: true },
    { hi: "वज्जि जैसे कुछ राज्यों में शासन 'गण' या 'संघ' के रूप में था, जहाँ कई लोग मिलकर शासन करते थे और प्रत्येक व्यक्ति राजा कहलाता था", en: "In states like Vajji, governance was in the form of Ganas or Sanghas where power was shared among a group of rajas", isCorrect: false },
    { hi: "महावीर और बुद्ध दोनों ही ऐसे गणों/संघों से संबंधित थे", en: "Both Mahavira and Gautama Buddha belonged to such oligarchic ganas", isCorrect: false },
    { hi: "ब्राह्मणों ने धर्मसूत्रों की रचना कर शासकों और वर्णों के लिए नियम तय किए थे", en: "Brahmanas composed Dharmasutras prescribing legal norms for rulers and varnas", isCorrect: false }
  ],
  exp: "कथन (A) असत्य है क्योंकि सभी महाजनपदों में राजतंत्र नहीं था। वज्जि जैसे कई महाजनपद 'गण' या 'संघ' (कुलीनतंत्र / Oligarchy) थे जहाँ शक्ति का सामूहिक प्रयोग होता था। (NCERT Page 30)",
  ref: "NCERT Class 12 History, Theme 2, Page 30"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "छठी से चौथी शताब्दी ईसा पूर्व के दौरान मगध के सर्वाधिक शक्तिशाली महाजनपद बनने के पीछे निम्नलिखित में से कौन-से भौगोलिक और सामरिक कारक उत्तरदायी थे?\n1. गंगा और सोन नदियों के कारण अत्यंत उपजाऊ कृषि क्षेत्र\n2. आधुनिक झारखंड में लोहे की समृद्ध खदानें, जिनसे मजबूत हथियार व उपकरण बने\n3. जंगलों में सेना के लिए जंगली हाथियों की प्रचुर उपलब्धता\n4. गंगा और उसकी उपनदियों द्वारा सुलभ और सस्ता जल-परिवहन",
  qEn: "Which geographical and strategic factors contributed to Magadha becoming the most powerful Mahajanapada between the 6th and 4th centuries BCE?\n1. Highly fertile agricultural plains fed by the Ganga and Son rivers\n2. Rich iron-ore deposits in modern Jharkhand for weapons and agricultural tools\n3. Abundant availability of elephants in nearby forests for military cavalry\n4. Cheap and convenient riverine communication via the Ganga and tributaries",
  opts: [
    { hi: "1, 2, 3 और 4 (सभी चारों)", en: "1, 2, 3 and 4 (All four)", isCorrect: true },
    { hi: "केवल 1, 2 और 3", en: "1, 2 and 3 only", isCorrect: false },
    { hi: "केवल 2 और 4", en: "2 and 4 only", isCorrect: false },
    { hi: "केवल 1, 3 और 4", en: "1, 3 and 4 only", isCorrect: false }
  ],
  exp: "चारों कारक मगध के उत्कर्ष के लिए उत्तरदायी थे: उपजाऊ भूमि, लोहे की खदानें, सेना हेतु हाथी तथा नदी संचार मार्ग। (NCERT Page 31)",
  ref: "NCERT Class 12 History, Theme 2, Page 31"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "अशोक के अभिलेखों की भाषा और लिपियों के भौगोलिक वितरण के संबंध में कौन सा मिलान सही है?\n1. पश्चिमोत्तर भारत और अफ़गानिस्तान — अरामी और यूनानी लिपियाँ\n2. पाकिस्तान के पश्चिमोत्तर क्षेत्र — खरोष्ठी लिपि (प्राकृत भाषा)\n3. भारत के अधिकांश अन्य भाग — ब्राह्मी लिपि (प्राकृत भाषा)",
  qEn: "Which of the following mappings regarding the geographical distribution of scripts in Ashokan inscriptions are correct?\n1. Northwest India and Afghanistan — Aramaic and Greek scripts\n2. Northwestern regions of Pakistan — Kharosthi script in Prakrit\n3. Rest of the Indian subcontinent — Brahmi script in Prakrit",
  opts: [
    { hi: "1, 2 और 3 (सभी तीनों)", en: "1, 2 and 3 (All three)", isCorrect: true },
    { hi: "केवल 1 और 2", en: "1 and 2 only", isCorrect: false },
    { hi: "केवल 2 और 3", en: "2 and 3 only", isCorrect: false },
    { hi: "केवल 1 और 3", en: "1 and 3 only", isCorrect: false }
  ],
  exp: "तीनों मिलान सही हैं। पश्चिमोत्तर (कंधार आदि) में यूनानी और अरामी लिपियाँ, पाकिस्तान में खरोष्ठी तथा भारत के शेष भागों में ब्राह्मी लिपि का प्रयोग हुआ था। (NCERT Page 32)",
  ref: "NCERT Class 12 History, Theme 2, Page 32"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "मेगस्थनीज द्वारा उल्लिखित मौर्य सैन्य प्रशासन की 6 उपसमितियों और उनके कार्यों का कौन-सा युग्म सही सुमेलित नहीं है?",
  qEn: "Which of the following pairs matching Megasthenes' six military subcommittees with their functions is INCORRECT?",
  opts: [
    { hi: "तीसरी उपसमिति — हाथियों का प्रबंध करना", en: "Third subcommittee — Managing war elephants", isCorrect: true },
    { hi: "पहली उपसमिति — नौसेना का संचालन", en: "First subcommittee — Managing the navy", isCorrect: false },
    { hi: "दूसरी उपसमिति — यातायात और खान-पान (रसद) का प्रबंध", en: "Second subcommittee — Transport and provisions", isCorrect: false },
    { hi: "चौथी उपसमिति — अश्वारोहियों (घुड़सवारों) का प्रबंध", en: "Fourth subcommittee — Managing cavalry", isCorrect: false }
  ],
  exp: "तीसरी उपसमिति पैदल सैनिकों (foot soldiers) का प्रबंध करती थी, जबकि छठी उपसमिति हाथियों का प्रबंध करती थी। (NCERT Page 34)",
  ref: "NCERT Class 12 History, Theme 2, Page 34"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "कुषाण शासकों द्वारा अपनी विशाल मूर्तियों को मंदिरों (जैसे मथुरा के पास माट के देवकुल) में स्थापित कराने का मुख्य राजनीतिक उद्देश्य क्या था?",
  qEn: "What was the primary political objective of Kushana rulers installing colossal statues of themselves in shrines (such as Mat near Mathura)?",
  opts: [
    { hi: "स्वयं को देवताओं के तुल्य प्रस्तुत कर दैवीय राजत्व (Divine Kingship) का दावा करना", en: "To project themselves as equal to gods and claim divine kingship", isCorrect: true },
    { hi: "जनता को मूर्तिकला सिखाने की कार्यशाला खोलना", en: "To establish public sculpture training workshops", isCorrect: false },
    { hi: "बौद्ध धर्म का पूर्ण बहिष्कार करना", en: "To enforce a complete boycott of Buddhism", isCorrect: false },
    { hi: "विदेशी आक्रमणकारियों को डराना", en: "To scare foreign invaders through large statues", isCorrect: false }
  ],
  exp: "कुषाण राजाओं ने स्वयं को देवताओं के समकक्ष प्रस्तुत करने के लिए विशाल मूर्तियां स्थापित कराईं और 'देवपुत्र' (देवता का पुत्र) की उपाधि धारण की। (NCERT Page 36)",
  ref: "NCERT Class 12 History, Theme 2, Page 36"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "गुजरात की सुदर्शन झील के ऐतिहासिक विकास के संबंध में निम्नलिखित का सही कालानुक्रम क्या है?\n1. मौर्य सम्राट चंद्रगुप्त मौर्य के प्रांतीय राज्यपाल द्वारा मूल झील का निर्माण\n2. सम्राट अशोक के शासनकाल में यवनराज तुषास्फ द्वारा नहरों का निकास\n3. शक महाक्षत्रप रुद्रदामन द्वारा बिना प्रजा पर कर लगाए बांध का जीर्णोद्धार (150 ईस्वी)\n4. गुप्त शासक स्कंदगुप्त के काल में चक्रपालित द्वारा पुनः बांध का पुनर्निर्माण (5वीं सदी ईस्वी)",
  qEn: "What is the correct chronological sequence in the multi-century history of Gujarat's Sudarshana Lake?\n1. Original construction under Chandragupta Maurya\n2. Canals built under Ashoka by Tushaspha\n3. Dam repaired by Saka ruler Rudradaman without extra tax (150 CE)\n4. Rebuilt under Gupta emperor Skandagupta by Chakrapalita (5th century CE)",
  opts: [
    { hi: "1 ➔ 2 ➔ 3 ➔ 4", en: "1 ➔ 2 ➔ 3 ➔ 4", isCorrect: true },
    { hi: "2 ➔ 1 ➔ 3 ➔ 4", en: "2 ➔ 1 ➔ 3 ➔ 4", isCorrect: false },
    { hi: "1 ➔ 3 ➔ 2 ➔ 4", en: "1 ➔ 3 ➔ 2 ➔ 4", isCorrect: false },
    { hi: "3 ➔ 1 ➔ 2 ➔ 4", en: "3 ➔ 1 ➔ 2 ➔ 4", isCorrect: false }
  ],
  exp: "सुदर्शन झील का इतिहास: चंद्रगुप्त मौर्य ➔ अशोक ➔ रुद्रदामन (150 ई.) ➔ स्कंदगुप्त (456 ई.)। जूनागढ़ अभिलेख इसका प्रमाण है। (NCERT Page 38)",
  ref: "NCERT Class 12 History, Theme 2, Page 38"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "कथन (A): चंद्रगुप्त द्वितीय की पुत्री प्रभावती गुप्त ने वाकाटक साम्राज्य में एक स्वतंत्र शासक के रूप में भूमिदान दिया था।\nकारण (R): यद्यपि धर्मशास्त्रों के अनुसार स्त्रियों को भूमि जैसी अचल संपत्ति पर स्वतंत्र अधिकार नहीं था, लेकिन रानी होने के कारण उनकी सामाजिक व राजनीतिक स्थिति सामान्य स्त्रियों से भिन्न थी।",
  qEn: "Assertion (A): Prabhavati Gupta, daughter of Chandragupta II, granted land independently as a Vakataka ruler.\nReason (R): Although Dharmashastras barred women from independent ownership of immovable property, being a queen her political status superseded patriarchal norms.",
  opts: [
    { hi: "(A) और (R) दोनों सही हैं, और (R), (A) का सही स्पष्टीकरण है", en: "Both (A) and (R) are true, and (R) is the correct explanation of (A)", isCorrect: true },
    { hi: "(A) और (R) दोनों सही हैं, लेकिन (R), (A) का सही स्पष्टीकरण नहीं है", en: "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", isCorrect: false },
    { hi: "(A) सही है, लेकिन (R) गलत है", en: "(A) is true, but (R) is false", isCorrect: false },
    { hi: "(A) गलत है, लेकिन (R) सही है", en: "(A) is false, but (R) is true", isCorrect: false }
  ],
  exp: "दोनों कथन सत्य हैं और (R), (A) की सटीक व्याख्या करता है। प्रभावती गुप्त के दनगून ताम्रपत्र से ज्ञात होता है कि उन्होंने ग्राम दान दिया, जो दर्शाता है कि राजसी महिलाओं पर सामान्य शास्त्र नियम लागू नहीं होते थे। (NCERT Page 40-41)",
  ref: "NCERT Class 12 History, Theme 2, Pages 40–41"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "आरंभिक ऐतिहासिक काल में भूमिदान (Land Grants) के बढ़ते प्रचलन के पीछे इतिहासकारों द्वारा कौन-से दो परस्पर विरोधी दृष्टिकोण प्रस्तुत किए जाते हैं?",
  qEn: "Which two divergent historical perspectives explain the widespread emergence of land grants in the early centuries CE?",
  opts: [
    { hi: "एक मत के अनुसार यह दुर्बल होते सामंतवादी राज्य का सूचक था, जबकि दूसरे मत के अनुसार यह नए क्षेत्रों में कृषि के विस्तार की रणनीति थी", en: "One view sees it as weakening state authority (feudalism), while the other sees it as a strategy to extend agriculture into virgin tracts", isCorrect: true },
    { hi: "यह केवल विदेशी आक्रमणकारियों को रिश्वत देने का माध्यम था", en: "It was purely a mechanism to bribe foreign invaders", isCorrect: false },
    { hi: "यह सभी किसानों को दास बनाने का षड्यंत्र था", en: "It was an imperial conspiracy to enslave all peasant classes", isCorrect: false },
    { hi: "यह नगरों को समाप्त कर केवल वन स्थापित करने की योजना थी", en: "It was designed to de-urbanize towns into forests", isCorrect: false }
  ],
  exp: "इतिहासकारों में मतभेद है: कुछ का मानना है कि राजा सामंतों के सामने कमजोर हो रहे थे इसलिए भूमिदान दिया; दूसरों का मानना है कि राजा कृषि का विस्तार करने और नए समर्थक जुटाने के लिए भूमिदान दे रहे थे। (NCERT Page 41)",
  ref: "NCERT Class 12 History, Theme 2, Page 41"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "प्राचीन भारतीय मुद्राशास्त्र (Numismatics) के विकास के संबंध में कौन-सा कथन सत्य है?",
  qEn: "Which of the following statements regarding the evolution of ancient Indian numismatics is TRUE?",
  opts: [
    { hi: "आहत सिक्के (Punch-marked) चांदी और तांबे के थे, सर्वप्रथम हिंद-यूनानियों ने राजाओं के नाम वाले सिक्के जारी किए, और कुषाणों ने सोने के सिक्के जारी किए", en: "Punch-marked coins were silver/copper, Indo-Greeks first issued coins with royal names/images, and Kushanas issued gold coins", isCorrect: true },
    { hi: "गुप्त काल में सोने के सिक्के पूरी तरह बंद हो गए थे", en: "Gold coins were completely discontinued during the Gupta era", isCorrect: false },
    { hi: "भारत में कागजी मुद्रा का प्रयोग पहली शताब्दी ईसा पूर्व से शुरू हो गया था", en: "Paper currency was in widespread circulation by the 1st century BCE", isCorrect: false },
    { hi: "यौधेय गणराज्य ने कभी कोई सिक्का जारी नहीं किया", en: "The Yaudheya republic never issued any coins", isCorrect: false }
  ],
  exp: "आहत सिक्के छठी शताब्दी ई.पू. में आए; हिंद-यूनानियों ने पहली बार राजाओं के नाम/चित्र उत्कीर्ण किए; कुषाणों ने प्रथम शताब्दी ई. में सोने के सिक्के जारी किए; गुप्तों ने सर्वाधिक शुद्ध सोने के सिक्के जारी किए। (NCERT Page 43-44)",
  ref: "NCERT Class 12 History, Theme 2, Pages 43–44"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "छठी शताब्दी ईस्वी के बाद सोने के सिक्कों के प्रचलन में आई कमी के संबंध में इतिहासकार आर.एस. शर्मा का क्या तर्क है?",
  qEn: "What argument was proposed by historian R.S. Sharma regarding the decline in the circulation of gold coins after the 6th century CE?",
  opts: [
    { hi: "रोमन साम्राज्य के पतन के कारण दूरगामी विदेशी व्यापार में गिरावट आई, जिससे भारतीय अर्थव्यवस्था में सिक्कों की आवश्यकता कम हुई", en: "The collapse of the Western Roman Empire caused decline in long-distance maritime trade, reducing need for gold coins", isCorrect: true },
    { hi: "भारत में सोने की सभी खदानें पूरी तरह समाप्त हो गई थीं", en: "All gold mines in the Indian subcontinent were exhausted", isCorrect: false },
    { hi: "राजाओं ने सोने के सिक्कों को समुद्र में विसर्जित कर दिया था", en: "Monarchs disposed of gold coin hoards into the Indian Ocean", isCorrect: false },
    { hi: "सिक्कों के स्थान पर केवल वस्तु विनिमय को अनिवार्य कानून बना दिया गया था", en: "Barter system was made statutorily mandatory by imperial decree", isCorrect: false }
  ],
  exp: "कुछ इतिहासकारों (जैसे आर.एस. शर्मा) का मत है कि रोमन साम्राज्य के पतन से सुदूर व्यापार को आघात पहुंचा, जिससे सिक्कों का प्रचलन घटा। अन्य इतिहासकारों का मत है कि इस काल में नए नगरों और आंतरिक व्यापार का विस्तार हुआ। (NCERT Page 44)",
  ref: "NCERT Class 12 History, Theme 2, Page 44"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "प्राचीन व्यापारिक श्रेणियों (Guilds / Shrenis) के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:\n1. श्रेणियां कच्चे माल की खरीद, उत्पादन के नियमन और तैयार माल की बिक्री का प्रबंध करती थीं।\n2. ये श्रेणियां बैंकों की तरह कार्य करती थीं जहाँ लोग धन जमा करते थे और उसके ब्याज से धार्मिक कार्य होते थे।\n3. मंदसौर अभिलेख एक ऐसी रेशम बुनकर श्रेणी का विवरण देता है जिसने सूर्य मंदिर का निर्माण कराया।\nउपर्युक्त में से कौन-से कथन सही हैं?",
  qEn: "Consider the following statements regarding ancient merchant and craft guilds (Shrenis):\n1. Guilds procured raw materials, regulated production, and marketed finished goods.\n2. They functioned as banks accepting public deposits and funding religious endowments from interest.\n3. The Mandasor inscription documents a silk weavers' guild that constructed a grand Sun temple.\nWhich of the statements given above are correct?",
  opts: [
    { hi: "1, 2 और 3 (सभी तीनों)", en: "1, 2 and 3 (All three)", isCorrect: true },
    { hi: "केवल 1 और 2", en: "1 and 2 only", isCorrect: false },
    { hi: "केवल 2 और 3", en: "2 and 3 only", isCorrect: false },
    { hi: "केवल 1 और 3", en: "1 and 3 only", isCorrect: false }
  ],
  exp: "तीनों कथन सत्य हैं। श्रेणियां अत्यंत शक्तिशाली स्वायत्त संस्थाएं थीं जो उत्पादन, व्यापार, बैंकिंग और धार्मिक संरक्षण के कार्य करती थीं। (NCERT Page 41-42)",
  ref: "NCERT Class 12 History, Theme 2, Pages 41–42"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "प्रथम शताब्दी ईस्वी के ग्रंथ 'पेरिप्लस ऑफ द एरिथ्रियन सी' के अनुसार भारत से किन प्रमुख वस्तुओं का निर्यात रोमन साम्राज्य को होता था?",
  qEn: "According to the 1st century CE 'Periplus of the Erythraean Sea', which primary commodities were exported from India to the Roman world?",
  opts: [
    { hi: "काली मिर्च (गोल मिर्च), उत्तम रेशम, मलमल, हाथीदांत और बहुमूल्य रत्न", en: "Black pepper, fine silk, muslin, ivory, and precious gemstones", isCorrect: true },
    { hi: "शराब, टिन, सीसा और तांबा", en: "Wine, tin, lead, and crude copper", isCorrect: false },
    { hi: "गेहूं, जौ और जैतून का तेल", en: "Wheat, barley, and Mediterranean olive oil", isCorrect: false },
    { hi: "घोड़े और ऊनी कालीन", en: "Arabian war horses and woollen carpets", isCorrect: false }
  ],
  exp: "पेरिप्लस के अनुसार भारत से काली मिर्च, रेशम, मलमल, हाथीदांत, मोती और कीमती पत्थर निर्यात होते थे, जबकि शराब, तांबा, टिन और रोमन सोने के सिक्के आयात होते थे। (NCERT Page 43)",
  ref: "NCERT Class 12 History, Theme 2, Page 43"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "'गंदतिंदु जातक' (Gandatindu Jataka) कथा प्राचीन भारत में किस सामाजिक-आर्थिक स्थिति का जीवंत चित्रण करती है?",
  qEn: "The 'Gandatindu Jataka' tale vividly illustrates which socio-economic condition of ancient India?",
  opts: [
    { hi: "एक दुष्ट राजा के अत्याचारी शासन में किसानों और आम प्रजा की दयनीय दुर्दशा और करों से त्रस्त होकर जंगलों में भागना", en: "The plight of peasants under a wicked, rapacious king where villagers fled to forests to escape extortionate taxes", isCorrect: true },
    { hi: "व्यापारियों द्वारा सोने के सिक्कों का विशाल दान", en: "Merchants making massive endowments of gold coins", isCorrect: false },
    { hi: "अशोक द्वारा कलिंग युद्ध के बाद पश्चाताप", en: "Ashoka's remorse after the Kalinga war", isCorrect: false },
    { hi: "नालंदा विश्वविद्यालय में छात्रों का जीवन", en: "Students' routine life at Nalanda University", isCorrect: false }
  ],
  exp: "गंदतिंदु जातक कथा में बताया गया है कि एक दुष्ट राजा के कर-संग्राहक दिन में किसानों को लूटते थे और डाकू रात में; त्रस्त होकर किसान अपने गाँव छोड़कर जंगलों में भाग गए। (NCERT Page 38)",
  ref: "NCERT Class 12 History, Theme 2, Page 38"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "गंगा और कावेरी घाटियों में कृषि उत्पादन में क्रांतिकारी वृद्धि के लिए कौन-सी दो तकनीकी नवाचार मुख्य रूप से जिम्मेदार थीं?",
  qEn: "Which two technological innovations were primarily responsible for the revolutionary increase in agricultural output in the Ganga and Kaveri valleys?",
  opts: [
    { hi: "लोहे के फाल वाले हलों का प्रयोग तथा धान की रोपाई (Transplantation)", en: "Adoption of iron-tipped ploughshares and paddy transplantation", isCorrect: true },
    { hi: "ट्रैक्टर और नलकूपों का उपयोग", en: "Mechanized tractors and deep tube-wells", isCorrect: false },
    { hi: "रासायनिक कीटनाशकों का छिड़काव", en: "Application of synthetic chemical pesticides", isCorrect: false },
    { hi: "केवल सीढ़ीदार खेती का विस्तार", en: "Terrace cultivation exclusively on mountain slopes", isCorrect: false }
  ],
  exp: "लोहे के फाल वाले हल से भारी उपजाऊ मिट्टी को जोतना संभव हुआ, तथा धान की रोपाई (transplantation) से पैदावार में नाटकीय वृद्धि हुई। (NCERT Page 38-39)",
  ref: "NCERT Class 12 History, Theme 2, Pages 38–39"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "तमिलकम (प्राचीन तमिल क्षेत्र) के सरदारों (चोल, चेर, पांड्य) के संदर्भ में कौन-सा कथन सत्य है?",
  qEn: "Which of the following statements regarding the early chieftains (Cholas, Cheras, Pandyas) of Tamilakam is TRUE?",
  opts: [
    { hi: "वे नियमित कर नहीं वसूलते थे, बल्कि वे भेंट स्वीकार करते थे और युद्ध से प्राप्त धन को अपने समर्थकों, कवियों और चारणों में बांटते थे", en: "They did not levy regular taxes, but accepted voluntary gifts and redistributed war booty among bards and supporters", isCorrect: true },
    { hi: "वे केवल सोने के सिक्के बनाकर विदेशी व्यापार करते थे", en: "They engaged exclusively in foreign trade without domestic agriculture", isCorrect: false },
    { hi: "उनके पास एक लाख स्थायी सैनिकों की खड़ी सेना थी", en: "They maintained a permanent standing army of 100,000 soldiers", isCorrect: false },
    { hi: "वे धर्मशास्त्रों के अनुसार केवल क्षत्रिय राजा थे", en: "They were classified strictly as Vedic Kshatriya kings", isCorrect: false }
  ],
  exp: "तमिलकम के सरदार (वेन्दार्) नियमित कर नहीं वसूलते थे, बल्कि वे ऐच्छिक भेंट लेते थे और युद्ध से मिले लूट के माल को कवियों, गायकों और संबंधियों में वितरित करते थे। (NCERT Page 35)",
  ref: "NCERT Class 12 History, Theme 2, Page 35"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "अभिलेखों के साक्ष्य की सीमाओं के संदर्भ में निम्नलिखित में से कौन-सा कथन सत्य है?",
  qEn: "In the context of the limitations of epigraphic evidence, which of the following statements is TRUE?",
  opts: [
    { hi: "अभिलेख सदैव उन लोगों के दृष्टिकोण को व्यक्त करते हैं जिन्होंने उन्हें बनवाया था, तथा इनमें आम जनता के सुख-दुख और दैनिक संघर्ष प्रायः दर्ज नहीं होते", en: "Inscriptions invariably reflect the perspective of the patrons who commissioned them, leaving routine subaltern struggles unrecorded", isCorrect: true },
    { hi: "अभिलेखों में कभी कोई अक्षर गायब नहीं होता और सब कुछ आसानी से पढ़ा जा सकता है", en: "All letters on inscriptions are completely intact and effortlessly legible", isCorrect: false },
    { hi: "अभिलेखों में राजाओं की पराजयों का विस्तृत और निष्पक्ष विवरण मिलता है", en: "Inscriptions provide detailed, objective accounts of imperial defeats", isCorrect: false },
    { hi: "अभिलेख केवल आधुनिक काल में ही नष्ट हुए हैं", en: "Inscriptions were damaged only in the contemporary modern era", isCorrect: false }
  ],
  exp: "अभिलेखों की मूलभूत सीमा यह है कि वे प्रायः संरक्षकों की प्रशंसा में लिखे जाते थे, उनमें राजनीतिक पराजयों का उल्लेख नहीं होता था और आम लोगों का दैनिक जीवन उनमें नहीं झलकता था। (NCERT Page 47-48)",
  ref: "NCERT Class 12 History, Theme 2, Pages 47–48"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "निम्नलिखित प्राचीन शासकों और उनके राजवंश का कौन सा मिलान सही है?\n1. बिंबिसार और अजातशत्रु — हर्यंक वंश (मगध)\n2. चंद्रगुप्त और अशोक — मौर्य वंश\n3. कनिष्क — कुषाण वंश\n4. गौतमी-पुत्त सिरी-सातकणि — सातवाहन वंश\n5. समुद्रगुप्त और चंद्रगुप्त द्वितीय — गुप्त वंश",
  qEn: "Which of the following pairings of ancient rulers with their ruling dynasties are correct?\n1. Bimbisara and Ajatasattu — Haryanka Dynasty (Magadha)\n2. Chandragupta and Ashoka — Mauryan Dynasty\n3. Kanishka — Kushana Dynasty\n4. Gotami-puta Siri-Satakani — Satavahana Dynasty\n5. Samudragupta and Chandragupta II — Gupta Dynasty",
  opts: [
    { hi: "1, 2, 3, 4 और 5 (सभी पांचों)", en: "1, 2, 3, 4 and 5 (All five)", isCorrect: true },
    { hi: "केवल 2, 3 और 5", en: "2, 3 and 5 only", isCorrect: false },
    { hi: "केवल 1, 2 और 4", en: "1, 2 and 4 only", isCorrect: false },
    { hi: "केवल 3, 4 और 5", en: "3, 4 and 5 only", isCorrect: false }
  ],
  exp: "सभी पांचों राजवंश और शासक पूर्णतः सही सुमेलित हैं। (NCERT Page 31–44)",
  ref: "NCERT Class 12 History, Theme 2, Pages 31–44"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "इलाहाबाद स्तंभ पर उत्कीर्ण 'प्रयाग प्रशस्ति' के रचयिता हरिषेण ने समुद्रगुप्त के विजय अभियानों के अंतर्गत दक्षिणापथ के कितने राजाओं को पराजित कर उन्हें मुक्त करने (ग्रहण-मोक्षानुग्रह) का उल्लेख किया है?",
  qEn: "In the Prayag Prashasti, how many kings of Dakshinapatha (South India) are mentioned as having been defeated and then reinstated by Samudragupta?",
  opts: [
    { hi: "12 राजा (Twelve Kings)", en: "Twelve Kings", isCorrect: true },
    { hi: "9 राजा", en: "Nine Kings", isCorrect: false },
    { hi: "18 राजा", en: "Eighteen Kings", isCorrect: false },
    { hi: "5 राजा", en: "Five Kings", isCorrect: false }
  ],
  exp: "प्रयाग प्रशस्ति के अनुसार समुद्रगुप्त ने आर्यावर्त के 9 राजाओं का पूर्ण उन्मूलन किया, जबकि दक्षिणापथ के 12 राजाओं को हराकर उनका राज्य वापस लौटा दिया (मोक्षानुग्रह नीति)। (NCERT Page 37)",
  ref: "NCERT Class 12 History, Theme 2, Page 37"
});

rawList.push({
  ch: 2, chName: "विषय 2: राजा, किसान और नगर (Kings, Farmers and Towns)",
  qHi: "प्राचीन भारत में 'गहपति' (Gahapati) शब्द का प्रयोग सामान्यतः किसके लिए किया जाता था?",
  qEn: "In ancient Pali and Sanskrit texts, the term 'Gahapati' was generally used to designate:",
  opts: [
    { hi: "घर का मुखिया, जो घर में रहने वाली महिलाओं, बच्चों, दासों और भूमि का स्वामी होता था तथा समृद्ध किसान", en: "The master of a household who controlled resources, land, women, children, and slaves, often a wealthy peasant", isCorrect: true },
    { hi: "केवल शाही सेना का सेनापति", en: "Exclusively the commander-in-chief of the imperial army", isCorrect: false },
    { hi: "विदेशी राजदूत", en: "A foreign diplomatic envoy", isCorrect: false },
    { hi: "बौद्ध मठ का मुख्य भिक्षु", en: "The chief abbot of a Buddhist monastery", isCorrect: false }
  ],
  exp: "गहपति घर का मुखिया होता था और घर में रहने वाले सभी लोगों और संसाधनों (भूमि, पशु) पर नियंत्रण रखता था। पाली ग्रंथों में इसका प्रयोग समृद्ध किसानों और व्यापारियों हेतु भी हुआ है। (NCERT Page 39)",
  ref: "NCERT Class 12 History, Theme 2, Page 39"
});

// ===============================================================================================
// THEME 3: KINSHIP, CASTE AND CLASS: EARLY SOCIETIES (Q41 to Q60)
// ===============================================================================================
rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "1919 में प्रारंभ हुई महाभारत के समालोचनात्मक संस्करण (Critical Edition) परियोजना के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:\n1. वी.एस. सुकथांकर के नेतृत्व में देश के विभिन्न भागों से विभिन्न लिपियों में लिखी गई पांडुलिपियों को एकत्र किया गया।\n2. केवल उन्हीं श्लोकों का चयन किया गया जो लगभग सभी पांडुलिपियों में समान रूप से पाए गए।\n3. यह संस्करण 13,000 पृष्ठों में प्रकाशित हुआ और इसे पूरा करने में 47 वर्ष लगे।\n4. क्षेत्रीय प्रभेदों और अंतरों को पाद-टिप्पणियों (Footnotes) में दर्ज किया गया।\nउपर्युक्त कथनों में से कौन-से सही हैं?",
  qEn: "Consider the following statements regarding the Critical Edition of the Mahabharata initiated in 1919:\n1. Under V.S. Sukthankar, manuscripts written in diverse scripts from across the subcontinent were collated.\n2. Only verses common to almost all manuscript traditions were selected for the main text.\n3. The final edition ran into 13,000 pages and took 47 years to complete.\n4. Regional variations were documented in extensive footnotes and appendices.\nWhich of the statements given above are correct?",
  opts: [
    { hi: "1, 2, 3 और 4 (सभी चारों)", en: "1, 2, 3 and 4 (All four)", isCorrect: true },
    { hi: "केवल 1 और 3", en: "1 and 3 only", isCorrect: false },
    { hi: "केवल 2, 3 और 4", en: "2, 3 and 4 only", isCorrect: false },
    { hi: "केवल 1, 2 और 4", en: "1, 2 and 4 only", isCorrect: false }
  ],
  exp: "सभी चारों कथन पूर्णतः सत्य हैं। इस परियोजना ने यह सिद्ध किया कि एक साझा मूल पाठ के साथ-साथ उपमहाद्वीप में विशाल क्षेत्रीय विविधताएं भी विद्यमान थीं। (NCERT Page 53-54)",
  ref: "NCERT Class 12 History, Theme 3, Pages 53–54"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "सातवाहन राजवंश के वैवाहिक नियमों के संदर्भ में कौन-सा विरोधाभास ब्राह्मणीय धर्मशास्त्रों के नियमों के विरुद्ध था?",
  qEn: "Which matrimonial practice of the Satavahana rulers directly violated the Brahmanical rules of gotra exogamy?",
  opts: [
    { hi: "सातवाहन रानियाँ विवाह के बाद भी पिता के गोत्र (गौतम व वसिष्ठ) को बनाए रखती थीं और वे सजातीय गोत्र में विवाह (अंतर्विवाह) करती थीं", en: "Satavahana queens retained paternal gotras (Gotama and Vasistha) after marriage and married within the same gotra (endogamy)", isCorrect: true },
    { hi: "सातवाहन राजा केवल विदेशी रानियों से विवाह करते थे", en: "Satavahana kings married exclusively foreign Roman princesses", isCorrect: false },
    { hi: "वे विवाह संस्था को नहीं मानते थे", en: "They rejected the institution of marriage altogether", isCorrect: false },
    { hi: "वे केवल संन्यासियों से संबंध रखते थे", en: "They formed alliances exclusively with ascetic monks", isCorrect: false }
  ],
  exp: "धर्मशास्त्रों के अनुसार पत्नी को पति का गोत्र अपनाना चाहिए और सगोत्र विवाह वर्जित था। परंतु सातवाहन रानियों ने पिता का गोत्र बनाए रखा और सगोत्र विवाह किया, जो दक्षिण भारत में प्रचलित अंतर्विवाह प्रथा थी। (NCERT Page 59)",
  ref: "NCERT Class 12 History, Theme 3, Page 59"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "धर्मशास्त्रों के अनुसार राजा को अनिवार्य रूप से 'क्षत्रिय' होना चाहिए था। ऐतिहासिक साक्ष्यों के अनुसार निम्नलिखित में से किस राजवंश के शासक ब्राह्मण वर्ण के थे?",
  qEn: "According to the Shastras, only Kshatriyas could be kings. According to historical evidence, which of the following dynasties were Brahmanas?",
  opts: [
    { hi: "शुंग और कण्व राजवंश", en: "Shunga and Kanva Dynasties", isCorrect: true },
    { hi: "मौर्य राजवंश", en: "Mauryan Dynasty", isCorrect: false },
    { hi: "कुषाण राजवंश", en: "Kushana Dynasty", isCorrect: false },
    { hi: "शक्य और लिच्छवि गणराज्य", en: "Sakya and Licchavi Republics", isCorrect: false }
  ],
  exp: "मौर्यों के पतन के बाद मगध पर शासन करने वाले पुष्यमित्र शुंग और उनके उत्तराधिकारी कण्व ब्राह्मण वर्ण के थे। सातवाहन राजा भी स्वयं को 'एक अनूठा ब्राह्मण' कहते थे। (NCERT Page 62)",
  ref: "NCERT Class 12 History, Theme 3, Page 62"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "जाति (Jati) और वर्ण (Varna) के बीच मूलभूत अंतर के संबंध में कौन-सा कथन सत्य है?",
  qEn: "Which statement correctly distinguishes between 'Jati' and 'Varna' in early Indian social history?",
  opts: [
    { hi: "वर्ण केवल चार थे, जबकि जातियों की संख्या की कोई निश्चित सीमा नहीं थी और नए व्यावसायिक समूहों को जाति का दर्जा दिया जाता था", en: "Varnas were strictly four, whereas Jatis had no fixed number and occupational groups were assimilated as Jatis", isCorrect: true },
    { hi: "वर्ण कर्म पर आधारित थे जबकि जातियां राज्य के आदेश से बनती थीं", en: "Varnas were based purely on merit while Jatis were created by state decree", isCorrect: false },
    { hi: "जातियां केवल क्षत्रियों के लिए थीं", en: "Jatis existed exclusively for the warrior Kshatriya class", isCorrect: false },
    { hi: "वर्ण और जाति में कोई अंतर नहीं था, दोनों एक ही शब्द थे", en: "Varna and Jati were identical, completely interchangeable terms", isCorrect: false }
  ],
  exp: "वर्ण व्यवस्था में केवल 4 वर्ण थे। इसके विपरीत जातियों की कोई निश्चित संख्या नहीं थी। जब भी ब्राह्मणीय व्यवस्था का सामना ऐसे समुदायों से हुआ जो 4 वर्णों में नहीं आते थे (जैसे निषाद, स्वर्णकार), उन्हें जातियों में वर्गीकृत कर दिया गया। (NCERT Page 63)",
  ref: "NCERT Class 12 History, Theme 3, Page 63"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "मध्य प्रदेश के मंदसौर अभिलेख में उल्लिखित लाट (गुजरात) से दशपुर आने वाली रेशम बुनकरों की श्रेणी के सदस्यों के विषय में क्या अनोखी बात दर्ज है?",
  qEn: "What remarkable detail is documented in the Mandasor inscription regarding the members of the silk weavers' guild from Lata?",
  opts: [
    { hi: "वे केवल बुनाई ही नहीं करते थे, बल्कि उनमें से कई सदस्य संगीत, खगोलशास्त्र, युद्धकला और धार्मिक कथाओं के भी मर्मज्ञ थे", en: "They did not just weave silk, but were also proficient in astronomy, music, martial arts, and religious discourses", isCorrect: true },
    { hi: "वे सभी राज्य के मुख्य न्यायाधीश बन गए थे", en: "All guild members were appointed chief judges of the imperial court", isCorrect: false },
    { hi: "उन्होंने कपड़े बनाना छोड़कर केवल युद्ध में भाग लिया", en: "They renounced textile production entirely to become professional mercenaries", isCorrect: false },
    { hi: "वे बौद्ध भिक्षु बन गए थे", en: "The entire guild converted en masse to ascetic Buddhism", isCorrect: false }
  ],
  exp: "मंदसौर अभिलेख दर्शाता है कि श्रेणी के सदस्य केवल एक शिल्प तक सीमित नहीं थे; उनमें कुछ खगोलविद, कुछ कथावाचक, कुछ धनुर्धर और कुछ धार्मिक विद्वान थे। (NCERT Page 64)",
  ref: "NCERT Class 12 History, Theme 3, Page 64"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "मनुस्मृति के अनुसार पैतृक संपत्ति के बंटवारे के संबंध में पुत्रियों की क्या कानूनी स्थिति थी?",
  qEn: "According to Manusmriti, what was the legal status of daughters regarding the inheritance of paternal estate?",
  opts: [
    { hi: "पुत्रियों को माता-पिता की मृत्यु के बाद पैतृक संपत्ति में हिस्सेदारी का कोई अधिकार नहीं था, उनका अधिकार केवल विवाह पर मिले 'स्त्रीधन' पर था", en: "Daughters had no legal claim on the paternal family estate; their right was limited to 'Stridhana' received at marriage", isCorrect: true },
    { hi: "पुत्रियों को पुत्रों से दोगुना हिस्सा मिलता था", en: "Daughters received double the inheritance share compared to sons", isCorrect: false },
    { hi: "पूरी संपत्ति केवल सबसे छोटी पुत्री को मिलती थी", en: "The entire family estate passed exclusively to the youngest daughter", isCorrect: false },
    { hi: "पुत्रियों को पिता के ऋण चुकाने के लिए बेच दिया जाता था", en: "Daughters were auctioned off to repay paternal debts", isCorrect: false }
  ],
  exp: "मनुस्मृति के अनुसार माता-पिता की मृत्यु के बाद पैतृक संपत्ति पुत्रों में समान बांटी जाती थी (ज्येष्ठ को विशेष भाग)। स्त्रियों को इसमें हिस्सेदारी का अधिकार नहीं था, यद्यपि विवाह के समय मिले स्त्रीधन पर उनका हक था। (NCERT Page 66-67)",
  ref: "NCERT Class 12 History, Theme 3, Pages 66–67"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "बौद्ध ग्रंथ 'मज्झिम निकाय' में अवंतिपुत्त और कच्चान के बीच संवाद में सामाजिक व्यवस्था के किस पक्ष को चुनौती दी गई है?",
  qEn: "In the Majjhima Nikaya dialogue between King Avantiputta and Kachchana, which social premise is fundamentally challenged?",
  opts: [
    { hi: "जन्म के आधार पर ब्राह्मणों की स्वाभाविक श्रेष्ठता के दावे को, यह सिद्ध करते हुए कि आर्थिक संपन्नता होने पर सभी वर्ण समान हो जाते हैं", en: "The claim of innate Brahmanical superiority by birth, proving that wealth levels all four Varnas equally", isCorrect: true },
    { hi: "राजाओं के कर वसूलने के अधिकार को", en: "The statutory right of monarchs to collect agricultural taxes", isCorrect: false },
    { hi: "अहिंसा के सिद्धांत को", en: "The universal validity of non-violence", isCorrect: false },
    { hi: "मठों में स्त्रियों के प्रवेश को", en: "The ordination of women into monastic orders", isCorrect: false }
  ],
  exp: "कच्चान ने तर्क दिया कि यदि कोई शूद्र धनी हो, तो वह अन्य वर्णों को अपनी सेवा में रख सकता है। अतः वर्ण-व्यवस्था जन्मजात श्रेष्ठता पर नहीं बल्कि सांसारिक संपत्ति और शक्ति पर आधारित है। (NCERT Page 68)",
  ref: "NCERT Class 12 History, Theme 3, Page 68"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "बौद्ध ग्रंथ 'सुत्त पिटक' में प्रस्तुत 'महासम्मत' (The Great Chosen One) की कथा राज्य की उत्पत्ति के किस आधुनिक राजनीतिक सिद्धांत से मेल खाती है?",
  qEn: "The story of 'Mahasammata' in the Buddhist Sutta Pitaka closely aligns with which modern political concept regarding state origin?",
  opts: [
    { hi: "सामाजिक समझौते का सिद्धांत (Social Contract Theory)", en: "Social Contract Theory", isCorrect: true },
    { hi: "राजा के दैवीय अधिकार का सिद्धांत (Divine Right Theory)", en: "Divine Right of Kings", isCorrect: false },
    { hi: "शक्ति और हिंसा का सिद्धांत (Force Theory)", en: "Force and Subjugation Theory", isCorrect: false },
    { hi: "वर्ग-विहीन साम्यवाद का सिद्धांत", en: "Classless Communist Utopia", isCorrect: false }
  ],
  exp: "सुत्त पिटक दर्शाता है कि राजा दैवीय इच्छा से नहीं, बल्कि अराजकता समाप्त करने के लिए जनता द्वारा किए गए समझौते (चावल के 1/6 भाग के बदले सुरक्षा) से चुना गया था। (NCERT Page 69)",
  ref: "NCERT Class 12 History, Theme 3, Page 69"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "महाभारत के रचनाकाल और विकास के चरणों के संबंध में कौन सा कालखंड उपदेशात्मक अंशों (जैसे भगवद्गीता) और मनुस्मृति से मिलते-जुलते श्लोकों के जोड़े जाने का काल माना जाता है?",
  qEn: "Which time bracket is considered by historians as the phase when didactic sections (like Bhagavad Gita) and normative verses were added to the Mahabharata?",
  opts: [
    { hi: "लगभग 200 ईसा पूर्व से 400 ईस्वी", en: "c. 200 BCE to 400 CE", isCorrect: true },
    { hi: "लगभग 1000 ईसा पूर्व से 800 ईसा पूर्व", en: "c. 1000 BCE to 800 BCE", isCorrect: false },
    { hi: "लगभग 600 ईस्वी से 1000 ईस्वी", en: "c. 600 CE to 1000 CE", isCorrect: false },
    { hi: "केवल 20वीं शताब्दी में", en: "Exclusively in the 20th century", isCorrect: false }
  ],
  exp: "लगभग 200 ई.पू. से 400 ई. के मध्य महाभारत में उपदेशात्मक प्रकरण (जैसे गीता, शांतिपर्व) और मनुस्मृति से मिलते-जुलते सामाजिक नियम जोड़े गए, जिससे यह 1,00,000 श्लोकों का विशाल महाकाव्य बन गया। (NCERT Page 72)",
  ref: "NCERT Class 12 History, Theme 3, Page 72"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "पुरातत्वविद बी.बी. लाल द्वारा 1951-52 में हस्तिनापुर के उत्खनन के दौरान मिले दूसरे स्तर (Period II: लगभग 1000 से 700 ई.पू.) से कौन-से विशिष्ट पुरातात्विक साक्ष्य मिले?",
  qEn: "During B.B. Lal's excavations at Hastinapura (1951–52), what material evidence was recovered from Period II (c. 1000 to 700 BCE)?",
  opts: [
    { hi: "चित्रित धूसर मृदभांड (PGW), सरकंडे की छाप वाली मिट्टी से पुती दीवारें और कीचड़ के घर", en: "Painted Grey Ware (PGW), mud-plastered walls with reed impressions, and wattle-and-daub houses", isCorrect: true },
    { hi: "चार मंजिला पक्के संगमरमर के राजमहल", en: "Four-storeyed burnt marble palaces", isCorrect: false },
    { hi: "रोमन सोने के सिक्कों के विशाल भंडार", en: "Massive hoards of Roman gold denarii", isCorrect: false },
    { hi: "लोहे की विशाल तोपें और बारूद", en: "Heavy iron cannons and gunpowder barrels", isCorrect: false }
  ],
  exp: "दूसरे स्तर (1000-700 ई.पू.) में घरों की कोई निश्चित योजना नहीं थी, दीवारें कच्ची मिट्टी और सरकंडों की बनी थीं जिन पर मिट्टी का लेप था, और यहाँ चित्रित धूसर मृदभांड (PGW) मिले। (NCERT Page 73-74)",
  ref: "NCERT Class 12 History, Theme 3, Pages 73–74"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "द्रौपदी के पांचों पांडवों से विवाह (बहुपति प्रथा - Polyandry) पर टिप्पणी करते हुए इतिहासकारों ने हिमालयी क्षेत्रों में इस प्रथा के जीवित रहने का क्या व्यावहारिक कारण बताया है?",
  qEn: "Commenting on polyandry in the context of Draupadi's marriage, what practical reason do historians cite for its prevalence in Himalayan regions?",
  opts: [
    { hi: "युद्धों के कारण स्त्रियों की कमी तथा पारिवारिक कृषि भूमि को विखंडन से बचाना", en: "Scarcity of women caused by warfare and the economic need to prevent fragmentation of family land", isCorrect: true },
    { hi: "स्त्रियों को पुरुषों पर शासन करने का अधिकार देना", en: "Empowering women to politically rule over all men", isCorrect: false },
    { hi: "वैदिक यज्ञों में 5 पतियों का होना अनिवार्य होना", en: "Vedic sacrifices mandating five husbands per ritual", isCorrect: false },
    { hi: "महाभारत के युद्ध को टालने की पूर्व-शर्त", en: "A diplomatic precondition to prevent the Kurukshetra war", isCorrect: false }
  ],
  exp: "इतिहासकार मानते हैं कि युद्धों और कन्या हत्या के कारण स्त्रियों की कमी तथा पारिवारिक कृषि भूमि को भाइयों के बीच बंटने से बचाने के लिए हिमालयी क्षेत्रों (जैसे किन्नौर, जौनसार-बावर) में बहुपति प्रथा प्रचलित रही। (NCERT Page 75)",
  ref: "NCERT Class 12 History, Theme 3, Page 75"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "आधुनिक प्रसिद्ध लेखिका महाश्वेता देवी ने महाभारत की किस घटना पर आधारित एक मार्मिक लघु कथा लिखी, जिसमें उपेक्षित वनवासी निषादों के दृष्टिकोण को प्रस्तुत किया गया है?",
  qEn: "Renowned writer Mahasweta Devi authored a poignant short story highlighting the subaltern perspective of forest Nishadas based on which episode of the Mahabharata?",
  opts: [
    { hi: "लाक्षागृह दहन (जहाँ पांडवों के जीवित बचने के बाद एक निषादी और उसके 5 पुत्र आग में जलकर मर गए)", en: "The burning of the Lac Palace (Lakshagriha), where a Nishada mother and her five sons perished", isCorrect: true },
    { hi: "कुरुक्षेत्र का अंतिम युद्ध", en: "The final duel at Kurukshetra", isCorrect: false },
    { hi: "द्रौपदी का चीरहरण", en: "The disrobing of Draupadi in the dice hall", isCorrect: false },
    { hi: "अभिमन्यु वध", en: "The killing of Abhimanyu in the Chakravyuha", isCorrect: false }
  ],
  exp: "महाश्वेता देवी ने 'लाक्षागृह' की घटना पर लिखा कि कैसे कुंती ने अपनी और पुत्रों की जान बचाने के लिए एक अनाम निषादी और उसके 5 पुत्रों को शराब पिलाकर लाक्षागृह में जलने छोड़ दिया ताकि लोग समझें कि पांडव मर गए हैं। (NCERT Page 77)",
  ref: "NCERT Class 12 History, Theme 3, Page 77"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "चीनी यात्री ह्वेनसांग (Xuan Zang) ने 7वीं शताब्दी ईस्वी में भारतीय समाज के विषय में क्या दर्ज किया था?",
  qEn: "What did Chinese pilgrim Xuan Zang document regarding marginalized groups in 7th century CE Indian society?",
  opts: [
    { hi: "वधिकों, सफाईकर्मियों और जल्लादों को नगर के बाहर अलग बस्तियों में रहने के लिए बाध्य किया जाता था", en: "Executioners, scavengers, and butchers were forced to dwell in isolated settlements strictly outside city walls", isCorrect: true },
    { hi: "भारत में जाति व्यवस्था पूरी तरह समाप्त हो चुकी थी", en: "The caste system had been completely eradicated across the subcontinent", isCorrect: false },
    { hi: "शूद्रों को सभी विश्वविद्यालयों का कुलपति बनाया जाता था", en: "Shudras were appointed chancellors of all Buddhist universities", isCorrect: false },
    { hi: "ब्राह्मण केवल कृषि कार्य करते थे", en: "Brahmanas engaged exclusively in manual agriculture", isCorrect: false }
  ],
  exp: "ह्वेनसांग ने लिखा कि मैला ढोने वालों, सफाईकर्मियों और जल्लादों को नगर से बाहर रहना पड़ता था। जब वे नगर में प्रवेश करते थे तो उन्हें रास्ता अलग रखना पड़ता था। (NCERT Page 66)",
  ref: "NCERT Class 12 History, Theme 3, Page 66"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "तमिल संगम साहित्य के काव्य संग्रह 'पुरनानूरू' (Purananuru) में किस सामाजिक मूल्य की भूरि-भूरि प्रशंसा की गई है?",
  qEn: "In the Tamil Sangam anthology 'Purananuru', which social virtue is celebrated and praised above all?",
  opts: [
    { hi: "सरदारों द्वारा अपनी संपदा को चारणों, कवियों और आश्रितों में उदारतापूर्वक बांटना (दानशीलता)", en: "Chieftains generously sharing and distributing their wealth among bards, poets, and dependents", isCorrect: true },
    { hi: "अपार धन को भूमिगत तहखानों में छिपाकर रखना", en: "Hoarding immense private gold hoards in subterranean vaults", isCorrect: false },
    { hi: "कवियों को बंदी बनाकर कारागार में डालना", en: "Imprisoning bards and executing wanderers", isCorrect: false },
    { hi: "केवल ब्राह्मणों को ही भोजन कराना", en: "Feeding exclusively Vedic priests while starving soldiers", isCorrect: false }
  ],
  exp: "संगम कविताओं में उन सरदारों की स्तुति की गई है जो उदार थे और अपने संसाधन चारणों व आश्रितों में बांटते थे। संपत्ति संचय करने वाले कंजूसों की निंदा की गई है। (NCERT Page 68-69)",
  ref: "NCERT Class 12 History, Theme 3, Pages 68–69"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "द्रोणाचार्य द्वारा एकलव्य से उसका दाहिना अंगूठा मांगना किस सामाजिक व्यवस्था को बनाए रखने का प्रयास था?",
  qEn: "Dronacharya demanding Eklavya's right thumb represented a systemic effort to preserve which social boundary?",
  opts: [
    { hi: "युद्ध-विद्या और धनुर्विद्या पर उच्च-वर्गीय क्षत्रियों के विशेषाधिकार और एकाधिकार को बनाए रखना", en: "Preserving elite martial and archery monopoly strictly for the high-born Kshatriya aristocracy", isCorrect: true },
    { hi: "धनुष-बाण का मूल्य कम करना", en: "Reducing the market cost of bows and arrows", isCorrect: false },
    { hi: "एकलव्य को सेनापति बनाना", en: "Appointing Eklavya supreme general of Hastinapura", isCorrect: false },
    { hi: "निषादों को कर से मुक्ति देना", en: "Granting tax exemptions to forest dwellers", isCorrect: false }
  ],
  exp: "द्रोण ने अर्जुन को अद्वितीय धनुर्धर बनाने की प्रतिज्ञा की थी और वर्णाश्रम धर्म के अनुसार वनवासी निषादों को उच्च अस्त्र-शस्त्र की विद्या से दूर रखना चाहते थे। (NCERT Page 64)",
  ref: "NCERT Class 12 History, Theme 3, Page 64"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "विवाह के संदर्भ में निम्नलिखित का सही मिलान क्या है?\n1. अंतर्विवाह (Endogamy) — गोत्र या जाति समूह के भीतर विवाह\n2. बहिर्विवाह (Exogamy) — गोत्र से बाहर विवाह\n3. बहुपत्नी प्रथा (Polygyny) — एक पुरुष की अनेक पत्नियां होना\n4. बहुपति प्रथा (Polyandry) — एक स्त्री के अनेक पति होना",
  qEn: "Which of the following pairings of marriage types are correct?\n1. Endogamy — Marriage within the kin group/caste\n2. Exogamy — Marriage outside the gotra/clan\n3. Polygyny — A man having several wives\n4. Polyandry — A woman having several husbands",
  opts: [
    { hi: "1, 2, 3 और 4 (सभी चारों)", en: "1, 2, 3 and 4 (All four)", isCorrect: true },
    { hi: "केवल 1 और 2", en: "1 and 2 only", isCorrect: false },
    { hi: "केवल 3 और 4", en: "3 and 4 only", isCorrect: false },
    { hi: "केवल 1, 2 और 3", en: "1, 2 and 3 only", isCorrect: false }
  ],
  exp: "चारों परिभाषाएं पूर्णतः सत्य हैं। (NCERT Page 56)",
  ref: "NCERT Class 12 History, Theme 3, Page 56"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "महाभारत के मूल रूप 'जय' (Jaya) में कुल कितने श्लोक थे?",
  qEn: "In the earliest core formulation of the epic known as 'Jaya', approximately how many verses were present?",
  opts: [
    { hi: "लगभग 8,800 श्लोक", en: "About 8,800 verses", isCorrect: true },
    { hi: "लगभग 24,000 श्लोक", en: "About 24,000 verses", isCorrect: false },
    { hi: "लगभग 1,00,000 श्लोक", en: "About 100,000 verses", isCorrect: false },
    { hi: "केवल 500 श्लोक", en: "Only 500 verses", isCorrect: false }
  ],
  exp: "महाभारत का प्रारंभिक रूप 'जय' था (लगभग 8,800 श्लोक)। इसके बाद यह 24,000 श्लोकों का 'भारत' बना और अंततः उपाख्यानों के जुड़ने से 1,00,000 श्लोकों का 'महाभारत' कहलाया। (NCERT Page 71)",
  ref: "NCERT Class 12 History, Theme 3, Page 71"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "महाभारत की भाषा के संदर्भ में कौन-सा कथन सत्य है?",
  qEn: "Which of the following statements regarding the language of the Mahabharata is TRUE?",
  opts: [
    { hi: "महाभारत की संस्कृत वेदों या प्रशस्तियों की संस्कृत की तुलना में बहुत सरल और सुगम थी, ताकि इसे आम लोग समझ सकें", en: "The Sanskrit used in the Mahabharata is far simpler and more accessible than the complex Sanskrit of the Vedas or court Prashastis", isCorrect: true },
    { hi: "महाभारत केवल प्राचीन ग्रीक भाषा में लिखा गया था", en: "The Mahabharata was composed exclusively in ancient Greek", isCorrect: false },
    { hi: "यह वेदों की वैदिक संस्कृत से भी कठिन और दुर्गम थी", en: "It was written in an obscure archaic Vedic dialect harder than the Rigveda", isCorrect: false },
    { hi: "इसकी कोई मूल भाषा कभी नहीं थी", en: "It possessed no original textual language", isCorrect: false }
  ],
  exp: "महाभारत की संस्कृत वेदों या राजकवियों की प्रशस्तियों की जटिल संस्कृत से कहीं अधिक सरल है, इसलिए इसे समाज के व्यापक वर्ग आसानी से सुन और समझ सकते थे। (NCERT Page 70)",
  ref: "NCERT Class 12 History, Theme 3, Page 70"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "प्राचीन भारत में 'म्लेच्छ' (Mlechchhas) शब्द ब्राह्मणीय ग्रंथों द्वारा किसके लिए प्रयुक्त किया जाता था?",
  qEn: "In ancient Brahmanical texts, the derogatory term 'Mlechchha' was applied to:",
  opts: [
    { hi: "मध्य एशिया से आए उन विदेशी लोगों के लिए जो प्राकृत या संस्कृत नहीं बोलते थे और ब्राह्मणीय आचार-व्यवहार से अपरिचित थे (जैसे शक शासक)", en: "Foreign peoples originating from Central Asia who did not speak Sanskrit/Prakrit and lived outside Vedic norms (like Shakas)", isCorrect: true },
    { hi: "केवल वैदिक पुरोहितों के लिए", en: "Exclusively for Vedic officiating priests", isCorrect: false },
    { hi: "समस्त क्षत्रिय राजाओं के लिए", en: "For all ruling Kshatriya warrior kings", isCorrect: false },
    { hi: "हस्तिनापुर के नागरिकों के लिए", en: "Citizens dwelling in Hastinapura", isCorrect: false }
  ],
  exp: "संस्कृत ग्रंथों में मध्य एशिया से आए शकों और अन्य विदेशी आक्रमणकारियों को 'म्लेच्छ' (बर्बर/अपवित्र बोली बोलने वाले) कहा गया। हालांकि शक शासक रुद्रदामन ने संस्कृत में जूनागढ़ अभिलेख खुदवाया। (NCERT Page 62)",
  ref: "NCERT Class 12 History, Theme 3, Page 62"
});

rawList.push({
  ch: 3, chName: "विषय 3: बंधुत्व, जाति तथा वर्ग: आरंभिक समाज (Kinship, Caste and Class)",
  qHi: "महाभारत के अनुसार कुरु वंश में पांडवों और कौरवों के बीच संघर्ष का मूल कारण क्या था?",
  qEn: "According to the Mahabharata narrative, what was the root cause of the conflict between the Kauravas and the Pandavas?",
  opts: [
    { hi: "पितृवंशिक उत्तराधिकार और भूमि (सिंहासन) पर दावे को लेकर प्रतिद्वंद्विता", en: "Rivalry over patrilineal succession and sovereign claim to royal land and throne", isCorrect: true },
    { hi: "वैदिक यज्ञों में आहुति देने का विवाद", en: "A dispute over who would offer ghee in Vedic sacrifices", isCorrect: false },
    { hi: "विदेशी आक्रमणकारियों से मित्रता की शर्त", en: "Alliances with foreign Roman emperors", isCorrect: false },
    { hi: "सोने की खदानों के स्वामित्व का प्रश्न", en: "Ownership disputes over Karnataka gold mines", isCorrect: false }
  ],
  exp: "महाभारत की मूल कथा बंधुओं के दो दलों (कौरव और पांडव) के बीच भूमि और सत्ता को लेकर हुए संघर्ष का चित्रण करती है, जो पितृवंशिक उत्तराधिकार की भावना से प्रेरित थी। (NCERT Page 55)",
  ref: "NCERT Class 12 History, Theme 3, Page 55"
});

// ===============================================================================================
// THEME 4: THINKERS, BELIEFS AND BUILDINGS: CULTURAL DEVELOPMENTS (Q61 to Q80)
// ===============================================================================================
rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "ईसा पूर्व प्रथम सहस्राब्दी में समकालीन वैश्विक दार्शनिक चिंतन के संदर्भ में कौन-सा सुमेलन सही है?\n1. जरथुश्त्र — ईरान\n2. खुंग जी (कन्फ्यूशियस) — चीन\n3. सुकरात, प्लेटो और अरस्तू — यूनान (ग्रीस)\n4. महावीर और गौतम बुद्ध — भारत",
  qEn: "Which of the following pairings of mid-first millennium BCE philosophers with their regions are correct?\n1. Zarathustra — Iran\n2. Kong Zi (Confucius) — China\n3. Socrates, Plato, and Aristotle — Greece\n4. Mahavira and Gautama Buddha — India",
  opts: [
    { hi: "1, 2, 3 और 4 (सभी चारों)", en: "1, 2, 3 and 4 (All four)", isCorrect: true },
    { hi: "केवल 1 और 4", en: "1 and 4 only", isCorrect: false },
    { hi: "केवल 2 और 3", en: "2 and 3 only", isCorrect: false },
    { hi: "केवल 3 और 4", en: "3 and 4 only", isCorrect: false }
  ],
  exp: "सभी चारों मिलान शत-प्रतिशत सही हैं। इस काल में विश्व भर में दार्शनिकों ने जीवन, ब्रह्मांड और मृत्यु के रहस्यों को समझने का प्रयास किया। (NCERT Page 83)",
  ref: "NCERT Class 12 History, Theme 4, Page 83"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "वैदिक परंपरा में उपनिषदों के चिंतन के संदर्भ में कौन-सा कथन सत्य है?",
  qEn: "In the Vedic intellectual tradition, which of the following statements regarding Upanishadic thought is TRUE?",
  opts: [
    { hi: "उपनिषदों में यज्ञों के कर्मकांड के स्थान पर जीवन के अर्थ, मृत्यु के बाद जीवन की संभावना और 'आत्मन' तथा 'ब्रह्म' के सत्य पर बल दिया गया", en: "Upanishads prioritized inquiries into the meaning of existence, life after death, and the ultimate reality of Atman and Brahman over ritual sacrifices", isCorrect: true },
    { hi: "उपनिषदों में केवल पशुबलि को अनिवार्य घोषित किया गया था", en: "Upanishads strictly mandated animal slaughter in all public rituals", isCorrect: false },
    { hi: "उपनिषद बौद्ध भिक्षुओं द्वारा लिखे गए ग्रंथ थे", en: "Upanishads were composed by Buddhist monks in Sri Lanka", isCorrect: false },
    { hi: "उपनिषदों ने कर्म के सिद्धांत को पूर्णतः नकार दिया था", en: "Upanishads completely rejected the concept of Karma and rebirth", isCorrect: false }
  ],
  exp: "उपनिषदों के विचारकों ने कर्मकांडीय यज्ञों से आगे बढ़कर यह जानना चाहा कि क्या मृत्यु के बाद कोई जीवन है, और आत्मन तथा ब्रह्म का क्या संबंध है। (NCERT Page 84)",
  ref: "NCERT Class 12 History, Theme 4, Page 84"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "अजीवक (Ajivika) और लोकायत (Lokayata) दर्शन के प्रवर्तकों और उनके विचारों का कौन सा मिलान सही है?\n1. मक्खलि गोसाल — आजीवक परंपरा (नियतिवाद: सब कुछ पहले से तय है, मानव प्रयास से कुछ नहीं बदलता)\n2. अजित केसकंबलिन — लोकायत/भौतिकवादी परंपरा (दान या कर्मकांड से कोई पुण्य नहीं, मनुष्य 4 तत्वों से बना है और मृत्यु के बाद कुछ नहीं बचता)",
  qEn: "Which of the following matches regarding rival non-Vedic philosophical traditions are correct?\n1. Makkhali Gosala — Ajivika tradition (Fatalism / Niyati: everything is predestined, human effort cannot alter fate)\n2. Ajita Kesakambalin — Lokayata/Materialist tradition (Denial of afterlife/karma: human body is composed of four elements that return to dust)",
  opts: [
    { hi: "1 और 2 दोनों सही हैं", en: "Both 1 and 2 are correct", isCorrect: true },
    { hi: "केवल 1 सही है", en: "1 only", isCorrect: false },
    { hi: "केवल 2 सही है", en: "2 only", isCorrect: false },
    { hi: "न तो 1 और न ही 2", en: "Neither 1 nor 2", isCorrect: false }
  ],
  exp: "दोनों मिलान पूर्णतः सत्य हैं। मक्खलि गोसाल नियतिवादी थे जबकि अजित केसकंबलिन घोर भौतिकवादी थे। दोनों ही वैदिक कर्मकांड के विरोधी थे। (NCERT Page 86)",
  ref: "NCERT Class 12 History, Theme 4, Page 86"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "जैन धर्म के अनुसार कर्म के चक्र से मुक्ति और मोक्ष की प्राप्ति के लिए क्या अनिवार्य माना गया है?",
  qEn: "According to Jaina philosophy, what is indispensable for liberating the soul from the cycle of Karma and attaining Kaivalya?",
  opts: [
    { hi: "कठोर तपस्या, कायाक्लेश और संसार का परित्याग (त्याग व भिक्षु जीवन)", en: "Severe ascetic penance, self-mortification, and complete renunciation of worldly life", isCorrect: true },
    { hi: "राजमहल में रहकर सुखी जीवन जीना", en: "Living a comfortable royal householder life in a palace", isCorrect: false },
    { hi: "नियमित पशुबलि देना", en: "Performing frequent animal sacrifices to planetary gods", isCorrect: false },
    { hi: "केवल धन का दान करना", en: "Merely donating money to merchant guilds", isCorrect: false }
  ],
  exp: "जैन धर्म में कर्म के बंधन से मुक्ति के लिए त्याग और तपस्या की आवश्यकता है; यह संसार के त्याग द्वारा ही संभव है। अतः मुक्ति के लिए भिक्षु जीवन अनिवार्य नियम माना गया। (NCERT Page 88)",
  ref: "NCERT Class 12 History, Theme 4, Page 88"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "जैन धर्म के प्रचार और प्रभाव के संबंध में कौन-सा कथन सत्य है?",
  qEn: "Which statement accurately describes the historical spread and literary contribution of Jainism in India?",
  opts: [
    { hi: "जैन विद्वानों ने प्राकृत, संस्कृत और तमिल जैसी कई भाषाओं में विपुल साहित्य की रचना की और पांडुलिपियों को मंदिरों के पुस्तकालयों में सुरक्षित रखा", en: "Jaina scholars produced voluminous literature in Prakrit, Sanskrit, and Tamil, preserving manuscripts in temple libraries", isCorrect: true },
    { hi: "जैन धर्म कभी भारत के बाहर या दक्षिण भारत में नहीं फैला", en: "Jainism never spread to southern India", isCorrect: false },
    { hi: "जैन धर्म में कभी कोई मूर्ति नहीं बनाई गई", en: "No stone images were ever sculpted in Jaina worship", isCorrect: false },
    { hi: "जैन धर्म केवल राजाओं तक ही सीमित था", en: "Jainism was strictly confined to reigning monarchs", isCorrect: false }
  ],
  exp: "जैन धर्म पूरे भारत में फैला (कर्नाटक, गुजरात, राजस्थान, तमिलनाडु)। जैन विद्वानों ने प्राकृत, संस्कृत व तमिल में उच्च कोटि का साहित्य लिखा और मंदिर पुस्तकालयों में पांडुलिपियों को सहेजा। (NCERT Page 88-89)",
  ref: "NCERT Class 12 History, Theme 4, Pages 88–89"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "बुद्ध के जीवन से जुड़े 'चार दृश्यों' का सही क्रम क्या है जिन्होंने उन्हें संसार त्यागने के लिए प्रेरित किया?",
  qEn: "What is the correct sequence of the 'Four Sights' witnessed by Siddhartha that prompted him to renounce palace life?",
  opts: [
    { hi: "वृद्ध व्यक्ति ➔ बीमार व्यक्ति ➔ मृत व्यक्ति (शव) ➔ संन्यासी", en: "An old man ➔ A sick man ➔ A dead body (corpse) ➔ A peaceful homeless mendicant", isCorrect: true },
    { hi: "संन्यासी ➔ बीमार व्यक्ति ➔ वृद्ध व्यक्ति ➔ शव", en: "A mendicant ➔ A sick man ➔ An old man ➔ A corpse", isCorrect: false },
    { hi: "शव ➔ वृद्ध व्यक्ति ➔ संन्यासी ➔ बीमार व्यक्ति", en: "A corpse ➔ An old man ➔ A mendicant ➔ A sick man", isCorrect: false },
    { hi: "बीमार व्यक्ति ➔ शव ➔ वृद्ध व्यक्ति ➔ संन्यासी", en: "A sick man ➔ A corpse ➔ An old man ➔ A mendicant", isCorrect: false }
  ],
  exp: "सिद्धार्थ ने महल से बाहर निकलते समय क्रमशः एक बूढ़ा व्यक्ति, एक बीमार व्यक्ति, एक शव और अंत में एक शांत संन्यासी देखा, जिसने उन्हें गृह-त्याग की प्रेरणा दी। (NCERT Page 90)",
  ref: "NCERT Class 12 History, Theme 4, Page 90"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "बौद्ध धर्म के अष्टांगिक मार्ग (Eightfold Path) का उद्देश्य क्या है?",
  qEn: "What is the fundamental objective of the Noble Eightfold Path (Ashtangika Marga) taught by the Buddha?",
  opts: [
    { hi: "अतिशय भोग और घोर तपस्या के बीच का मध्यम मार्ग अपनाकर तृष्णा व दुखों का अंत (निर्वाण)", en: "Overcoming craving and sorrow to attain Nibbana by following the Middle Path between luxury and mortification", isCorrect: true },
    { hi: "स्वर्ग में राजा इंद्र के समान सुख भोगना", en: "Attaining sensual paradise in the court of Indra", isCorrect: false },
    { hi: "शत्रुओं पर सैन्य विजय प्राप्त करना", en: "Securing military conquests over neighboring kingdoms", isCorrect: false },
    { hi: "वेदों के मंत्रों का शुद्ध उच्चारण सीखना", en: "Mastering the phonetics of Vedic chants", isCorrect: false }
  ],
  exp: "बुद्ध ने मध्यम मार्ग का उपदेश दिया। सम्यक दृष्टि, संकल्प, वाक, कर्म, आजीव, व्यायाम, स्मृति और समाधि के पालन से तृष्णा का अंत और निर्वाण संभव होता है। (NCERT Page 91)",
  ref: "NCERT Class 12 History, Theme 4, Page 91"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "बौद्ध त्रिपिटक (Three Pitakas) के विषय-वस्तु के संबंध में कौन सा मिलान सही है?\n1. विनय पिटक — संघ के भिक्षुओं व भिक्षुणियों के नियम और आचार-संहिता\n2. सुत्त पिटक — बुद्ध की शिक्षाएं और सिद्धांत (धम्म)\n3. अभिधम्म पिटक — दार्शनिक और आध्यात्मिक विषयों का विश्लेषण",
  qEn: "Which of the following mappings regarding the Buddhist Tripitakas are correct?\n1. Vinaya Pitaka — Rules and regulations for monks and nuns in the Sangha\n2. Sutta Pitaka — Buddha's core discourses, parables, and ethical teachings\n3. Abhidhamma Pitaka — Philosophical and psychological analysis",
  opts: [
    { hi: "1, 2 और 3 (सभी तीनों)", en: "1, 2 and 3 (All three)", isCorrect: true },
    { hi: "केवल 1 और 2", en: "1 and 2 only", isCorrect: false },
    { hi: "केवल 2 और 3", en: "2 and 3 only", isCorrect: false },
    { hi: "केवल 1 और 3", en: "1 and 3 only", isCorrect: false }
  ],
  exp: "तीनों पिटक पूर्णतः सही सुमेलित हैं: विनय (नियम), सुत्त (उपदेश) और अभिधम्म (दार्शनिक व्याख्या)। (NCERT Page 90)",
  ref: "NCERT Class 12 History, Theme 4, Page 90"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "बौद्ध ग्रंथ 'अशोकावदान' (Ashokavadana) के अनुसार सम्राट अशोक ने स्तूप निर्माण को बढ़ावा देने के लिए क्या किया?",
  qEn: "According to the Buddhist text 'Ashokavadana', what major initiative was undertaken by Emperor Ashoka regarding stupas?",
  opts: [
    { hi: "बुद्ध के अवशेषों के हिस्से हर महत्वपूर्ण शहर में बांटकर उनके ऊपर स्तूप बनवाने का आदेश दिया", en: "He distributed Buddha's bodily relics to all major towns and ordered stupas to be erected over them", isCorrect: true },
    { hi: "सभी प्राचीन स्तूपों को तुड़वा दिया", en: "He ordered all pre-existing stupas to be demolished", isCorrect: false },
    { hi: "केवल पाटलिपुत्र में ही एक स्तूप बनवाया", en: "He restricted stupa construction exclusively to Pataliputra", isCorrect: false },
    { hi: "स्तूपों में केवल सोने के सिक्के रखने का नियम बनाया", en: "He mandated that only Roman gold coins be buried in stupas", isCorrect: false }
  ],
  exp: "अशोकावदान के अनुसार अशोक ने बुद्ध के अवशेषों को अनेक शहरों में वितरित किया और सांची, सारनाथ, भरहुत आदि स्थलों पर भव्य स्तूप बनवाए। (NCERT Page 96)",
  ref: "NCERT Class 12 History, Theme 4, Page 96"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "स्तूप की वास्तुकला में 'तोरण' (Torana) का क्या कार्य और स्वरूप था?",
  qEn: "In the architectural design of a Buddhist stupa, what was the function and form of the 'Torana'?",
  opts: [
    { hi: "यह चारों दिशाओं में स्थित अलंकृत और नक्काशीदार भव्य प्रवेश द्वार था, जिससे होकर श्रद्धालु प्रदक्षिणा पथ में प्रवेश करते थे", en: "It was an ornate, sculpted monumental gateway positioned at the four cardinal directions leading to the circumambulatory path", isCorrect: true },
    { hi: "यह स्तूप के नीचे बनी गुप्त तिजोरी थी", en: "It was a subterranean secret vault for royal jewels", isCorrect: false },
    { hi: "यह भिक्षुओं के सोने का कमरा था", en: "It was the sleeping cell of resident monks", isCorrect: false },
    { hi: "यह पानी भरने की नाली थी", en: "It was an underground drainage channel", isCorrect: false }
  ],
  exp: "तोरण चार मुख्य दिशाओं में स्थित अलंकृत द्वार होते थे जिन पर जातक कथाएं और शुभ प्रतीक उकेरे होते थे। भक्त पूर्वी तोरण से प्रवेश कर घड़ी की सुई की दिशा में प्रदक्षिणा करते थे। (NCERT Page 97)",
  ref: "NCERT Class 12 History, Theme 4, Page 97"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "1881 में पुरातात्विक सर्वेक्षण के एच.एच. कोल (H.H. Cole) ने स्मारकों के संरक्षण के संबंध में कौन-सा साहसिक और दूरदर्शी विचार व्यक्त किया था?",
  qEn: "In 1881, which far-sighted preservation philosophy was articulated by H.H. Cole regarding Indian historical monuments?",
  opts: [
    { hi: "'देश को प्राचीन कलाकृतियों की लूट की खुली छूट देना आत्मघाती नीति है... मूल स्मारकों को संग्रहालयों में ले जाने के बजाय वहीं (In-situ) संरक्षित किया जाना चाहिए'", en: "'It seems to me a suicidal policy to allow the country to be looted of original works of art... monuments should be preserved in situ'", isCorrect: true },
    { hi: "सभी भारतीय मूर्तियों को लंदन के ब्रिटिश संग्रहालय में जमा कर देना चाहिए", en: "All ancient Indian sculptures should be immediately shipped to the British Museum in London", isCorrect: false },
    { hi: "प्राचीन टीलों पर आधुनिक कारखाने बनाए जाने चाहिए", en: "Ancient earthen mounds should be cleared to erect modern factories", isCorrect: false },
    { hi: "पुरातत्व केवल औपनिवेशिक अधिकारियों का व्यक्तिगत मनोरंजन है", en: "Archaeological recovery was merely personal leisure for colonial officers", isCorrect: false }
  ],
  exp: "कोल ने लिखा था कि मूल कलाकृतियों को उखाड़कर ले जाना आत्मघाती है; उन्हें मूल स्थान पर ही संरक्षित किया जाना चाहिए। दुर्भाग्य से यह नीति अमरावती में लागू नहीं हुई, लेकिन सांची को इसने बचा लिया। (NCERT Page 99)",
  ref: "NCERT Class 12 History, Theme 4, Page 99"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "सांची स्तूप के तोरणों पर उकेरी गई 'गजलक्ष्मी' (Gajalakshmi) की प्रतिमा को विद्वानों ने किस रूप में व्याख्यायित किया है?",
  qEn: "How do art historians interpret the motif of Gajalakshmi (a woman being showered with water by two elephants) carved at Sanchi?",
  opts: [
    { hi: "सौभाग्य और समृद्धि की देवी लक्ष्मी के रूप में, अथवा बुद्ध की माता मायादेवी के रूप में", en: "As the goddess of good fortune (Lakshmi) or symbolically associated with the Buddha's mother, Maya", isCorrect: true },
    { hi: "एक यूनानी रानी के रूप में", en: "As a Hellenistic Roman empress", isCorrect: false },
    { hi: "एक भिक्षुणी के रूप में", en: "As an ordinary ordination candidate nun", isCorrect: false },
    { hi: "किसी युद्ध की विजय के प्रतीक के रूप में", en: "As a trophy commemorating imperial naval war", isCorrect: false }
  ],
  exp: "हाथियों द्वारा जल से सिंचित की जाने वाली महिला की मूर्ति को सौभाग्य की देवी (गजलक्ष्मी) अथवा बुद्ध की माता मायादेवी के रूप में देखा गया है। (NCERT Page 102)",
  ref: "NCERT Class 12 History, Theme 4, Page 102"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "महायान बौद्ध धर्म में 'बोधिसत्व' (Bodhisattva) की क्या भूमिका मानी गई है?",
  qEn: "What is the spiritual role of a 'Bodhisattva' in Mahayana Buddhist doctrine?",
  opts: [
    { hi: "वे परम करुणामय प्राणी हैं जो अपने पुण्यों से दूसरों की सहायता करते हैं और सभी जीवों के उद्धार हेतु स्वयं के निर्वाण को टाल देते हैं", en: "Deeply compassionate beings who accumulate spiritual merit to help others, postponing their own Nibbana to alleviate cosmic suffering", isCorrect: true },
    { hi: "वे केवल राजाओं को युद्ध में विजय दिलाने वाले सेनापति होते हैं", en: "Fierce military generals who assist emperors in expanding territory", isCorrect: false },
    { hi: "वे केवल बौद्ध मठों का हिसाब-किताब रखने वाले कोषाध्यक्ष होते हैं", en: "Monastic treasurers in charge of maintaining financial registers", isCorrect: false },
    { hi: "वे वेदों का प्रचार करने वाले पुरोहित होते हैं", en: "Vedic ritualists who chant fire hymns at stupas", isCorrect: false }
  ],
  exp: "बोधिसत्व वे करुणामय व्यक्ति थे जिन्होंने परम ज्ञान प्राप्त किया लेकिन संपूर्ण मानवता के दुखों को दूर करने के लिए अपने निर्वाण को टाल दिया। (NCERT Page 103)",
  ref: "NCERT Class 12 History, Theme 4, Page 103"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "पौराणिक हिंदू धर्म के अंतर्गत 'वैष्णव मत' (Vaishnavism) की उस केंद्रीय अवधारणा का क्या नाम है जिसके अनुसार ईश्वर संसार की रक्षा हेतु विभिन्न रूपों में अवतरित होता है?",
  qEn: "In Puranic Hinduism, what is the core theological doctrine of Vaishnavism wherein the deity incarnates in diverse forms to restore righteousness?",
  opts: [
    { hi: "अवतारवाद (Ten Avatars / Incarnations)", en: "Avataravada (Doctrine of Incarnations)", isCorrect: true },
    { hi: "मायावाद", en: "Mayavada", isCorrect: false },
    { hi: "अद्वैतवाद", en: "Advaitavada", isCorrect: false },
    { hi: "शून्यवाद", en: "Shunyavada", isCorrect: false }
  ],
  exp: "वैष्णव परंपरा में 10 अवतारों की मान्यता विकसित हुई (जैसे वराह, नृसिंह, राम, कृष्ण)। मान्यता थी कि जब भी अधर्म बढ़ता है, ईश्वर धर्म की रक्षा हेतु अवतार लेते हैं। (NCERT Page 104)",
  ref: "NCERT Class 12 History, Theme 4, Page 104"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "आरंभिक मंदिर वास्तुकला के विकास का सही क्रम क्या है?\n1. सपाट छत वाला एक चौकोर कमरा (गर्भगृह) और आगे छोटा स्तंभयुक्त बरामदा\n2. गर्भगृह के चारों ओर प्रदक्षिणा पथ का निर्माण\n3. गर्भगृह के ऊपर ऊँचे शिखर का निर्माण (जैसे देवगढ़ का दशावतार मंदिर)\n4. विशाल सभा भवन (मंडप), ऊँचे प्रवेश द्वार (गोपुरम) और चारदीवारी",
  qEn: "What is the correct evolutionary sequence of early Hindu temple architecture?\n1. A flat-roofed square sanctum (Garbhagriha) with a shallow portico\n2. Addition of a covered circumambulatory path around the sanctum\n3. Construction of a tall spire (Shikhara) over the sanctum\n4. Elaborate assembly halls (Mandapas), monumental gateways (Gopurams), and perimeter walls",
  opts: [
    { hi: "1 ➔ 2 ➔ 3 ➔ 4", en: "1 ➔ 2 ➔ 3 ➔ 4", isCorrect: true },
    { hi: "2 ➔ 1 ➔ 4 ➔ 3", en: "2 ➔ 1 ➔ 4 ➔ 3", isCorrect: false },
    { hi: "3 ➔ 1 ➔ 2 ➔ 4", en: "3 ➔ 1 ➔ 2 ➔ 4", isCorrect: false },
    { hi: "4 ➔ 3 ➔ 2 ➔ 1", en: "4 ➔ 3 ➔ 2 ➔ 1", isCorrect: false }
  ],
  exp: "मंदिर स्थापत्य का विकास: सांची का मंदिर 17 (सपाट छत) ➔ नचना कुठारा (प्रदक्षिणा पथ) ➔ देवगढ़ (शिखर निर्माण) ➔ महाबलीपुरम व खजुराहो (भव्य मंडप व गोपुरम)। (NCERT Page 105-106)",
  ref: "NCERT Class 12 History, Theme 4, Pages 105–106"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "एलोरा (महाराष्ट्र) के विश्वप्रसिद्ध एकाश्म कैलाशनाथ मंदिर (Kailashnatha Temple) के निर्माण की सबसे विस्मयकारी विशेषता क्या है?",
  qEn: "What is the most astonishing engineering feat in the construction of the monolithic Kailashnatha temple at Ellora?",
  opts: [
    { hi: "यह पत्थरों को जोड़कर नहीं बल्कि पूरी एक ठोस बेसाल्ट पहाड़ी को ऊपर से नीचे की ओर काटकर तराशा गया था", en: "It was not constructed with assembled stones, but carved top-to-bottom out of a single living basalt rock cliff", isCorrect: true },
    { hi: "यह पूरी तरह लोहे और तांबे की चादरों से बना है", en: "It was constructed entirely out of welded copper and iron sheets", isCorrect: false },
    { hi: "इसे केवल एक दिन में तैयार किया गया था", en: "It was miraculously erected in a single day", isCorrect: false },
    { hi: "यह पानी के भीतर तैरता हुआ मंदिर है", en: "It is an underwater floating architectural marvel", isCorrect: false }
  ],
  exp: "कैलाशनाथ मंदिर (गुफा 16) पूरी पहाड़ी को ऊपर से नीचे काटकर तराशा गया है। निर्माण के अंत में मुख्य शिल्पी ने विस्मय में कहा था: 'हे ईश्वर! यह मैंने कैसे बना दिया!' (NCERT Page 108)",
  ref: "NCERT Class 12 History, Theme 4, Page 108"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "बिहार में स्थित 'लोमश ऋषि गुफा' (Lomas Rishi Cave) किस वास्तुशिल्प का अनुपम उदाहरण है?",
  qEn: "The famous 'Lomas Rishi Cave' in Barabar hills (Bihar) is an unparalleled ancient example of:",
  opts: [
    { hi: "चट्टानों को काटकर बनाई गई कृत्रिम गुफा (Rock-cut Cave), जिसमें लकड़ी के मेहराबों की नकल की गई है", en: "A rock-cut artificial cave whose entrance facade imitates contemporary wooden barrel vaults", isCorrect: true },
    { hi: "ईंटों का बना बौद्ध स्तूप", en: "A brick-built hemispherical Buddhist stupa", isCorrect: false },
    { hi: "लोहे का विजय स्तंभ", en: "An un-corroded iron victory pillar", isCorrect: false },
    { hi: "मुगल कालीन बाग", en: "A formal Charbagh Persian pleasure garden", isCorrect: false }
  ],
  exp: "तीसरी शताब्दी ई.पू. में अशोक द्वारा आजीवक संप्रदाय के लिए बनवाई गई बाराबर की लोमश ऋषि गुफा में चट्टान को काटकर काष्ठ स्थापत्य की हूबहू नकल की गई है। (NCERT Page 107)",
  ref: "NCERT Class 12 History, Theme 4, Page 107"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "आरंभिक यूरोपीय कला इतिहासकारों ने पश्चिमोत्तर भारत की 'गांधार मूर्तिकला' (Gandhara Art) को भारतीय कला का सर्वश्रेष्ठ नमूना क्यों घोषित किया था?",
  qEn: "Why did early European art critics judge 'Gandhara Art' to be the absolute pinnacle of ancient Indian artistic achievement?",
  opts: [
    { hi: "क्योंकि वे यूनानी-रोमन शास्त्रीय कला से परिचित थे और गांधार मूर्तियों में यूनानी मूर्तिकला का प्रत्यक्ष प्रभाव (जैसे वस्त्रों की सिलवटें) दिखाई देता था", en: "Because they were steeped in Greco-Roman classical art and found direct Hellenistic aesthetic influence in Gandharan Buddha statues", isCorrect: true },
    { hi: "क्योंकि वे भारतीय देवी-देवताओं की पूजा करते थे", en: "Because European officers worshipped Indian deities", isCorrect: false },
    { hi: "क्योंकि गांधार की मूर्तियां शुद्ध सोने से बनी थीं", en: "Because Gandharan sculptures were made entirely of solid gold", isCorrect: false },
    { hi: "क्योंकि उस पर केवल चीनी प्रभाव था", en: "Because it exhibited pure ancient Chinese influence", isCorrect: false }
  ],
  exp: "यूरोपीय विद्वान यूनानी कला को सर्वश्रेष्ठ मानते थे। जब उन्हें पश्चिमोत्तर में यूनानी शैली से प्रभावित बुद्ध मूर्तियां मिलीं, तो उन्होंने इसे भारतीय कला का शिखर मान लिया। (NCERT Page 109)",
  ref: "NCERT Class 12 History, Theme 4, Page 109"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "बौद्ध परंपरा में 'चैत्य' (Chaitya) और 'विहार' (Vihara) के बीच क्या अंतर है?",
  qEn: "In Buddhist architecture, what is the precise distinction between a 'Chaitya' and a 'Vihara'?",
  opts: [
    { hi: "चैत्य पूजा और प्रार्थना का स्थान था (जिसमें स्तूप होता था), जबकि विहार भिक्षुओं के रहने का निवास स्थान था", en: "A Chaitya was a prayer and worship hall (housing a votive stupa), while a Vihara was a residential monastery for monks", isCorrect: true },
    { hi: "चैत्य राजा का महल था और विहार सैनिकों की छावनी", en: "A Chaitya was the royal palace while a Vihara was a military barrack", isCorrect: false },
    { hi: "चैत्य में केवल भोजन पकता था और विहार में बाजार लगता था", en: "A Chaitya was an alms kitchen and a Vihara was a commercial market", isCorrect: false },
    { hi: "दोनों शब्दों में कोई अंतर नहीं था", en: "Both words designated identical stone structures", isCorrect: false }
  ],
  exp: "चैत्य (चिता से संबंधित) वह पवित्र स्थल था जहाँ पूजा और ध्यान होता था, जबकि विहार बौद्ध भिक्षु-भिक्षुणियों के रहने का आवासीय मठ होता था। (NCERT Page 95)",
  ref: "NCERT Class 12 History, Theme 4, Page 95"
});

rawList.push({
  ch: 4, chName: "विषय 4: विचारक, विश्वास और इमारतें (Thinkers, Beliefs and Buildings)",
  qHi: "सांची के स्तूप की खोज 1818 में हुई थी। उस समय इसके तीन तोरण द्वार खड़े थे और एक ज़मीन पर गिरा हुआ था। इस महान स्तूप को अपने मूल स्थान पर ही अक्षुण्ण बनाए रखने में सबसे निर्णायक योगदान किसका रहा?",
  qEn: "When Sanchi was discovered in 1818, three of its four gateways were intact. Whose visionary patronage was most decisive in preserving it in situ?",
  opts: [
    { hi: "भोपाल की बेगमों (शाहजेहाँ बेगम और सुल्तान जहाँ बेगम) की दूरदर्शिता और वित्तीय संरक्षण", en: "The visionary leadership and financial patronage of the Begums of Bhopal", isCorrect: true },
    { hi: "ईस्ट इंडिया कंपनी द्वारा इसे अपनी राजधानी बनाना", en: "The East India Company establishing its imperial capital at Sanchi", isCorrect: false },
    { hi: "स्थानीय रेलवे ठेकेदारों द्वारा इसका पत्थरों के रूप में उपयोग", en: "Local railway contractors utilizing its stones for ballast", isCorrect: false },
    { hi: "नेपोलियन बोनापार्ट द्वारा की गई सुरक्षा संधि", en: "A security treaty signed by Napoleon Bonaparte", isCorrect: false }
  ],
  exp: "भोपाल की बेगमों ने मूल तोरणों को पेरिस या लंदन ले जाने से रोका, प्लास्टर ऑफ पेरिस के सांचे बनवाए और जॉन मार्शल के संरक्षण कार्य को पूरा वित्तपोषण दिया। (NCERT Page 83)",
  ref: "NCERT Class 12 History, Theme 4, Page 83"
});

// Process all 80 items with option shuffling
const processedMcqs = rawList.map((item, index) => {
  return createItem(index + 1, item.ch, item.chName, item.qHi, item.qEn, item.opts, item.exp, item.ref);
});

// Verify correct index distribution
const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
processedMcqs.forEach(m => dist[m.correct]++);
console.log('Shuffled distribution of correct answers across (A, B, C, D):', dist);

fs.writeFileSync('scripts/history_part1_mcqs.json', JSON.stringify(processedMcqs, null, 2), 'utf8');

// Build the HTML template
const html = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Class 12 History (Part I) • सम्पूर्ण 4 अध्याय • 80 Advanced MCQs (Themes in Indian History - I)</title>
  <meta name="description" content="NCERT Class 12 History Part 1 (Themes in Indian History - I). 80 Advanced Hard Bilingual MCQs with statement-based analysis, assertion-reasoning, randomized options, and exact NCERT citations." />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏛️</text></svg>" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>

  <style>
    :root {
      --bg: #070d1e;
      --surface: #0c1733;
      --card: #112044;
      --card-hover: #162956;
      --border: rgba(255, 255, 255, 0.09);
      --border-accent: rgba(245, 158, 11, 0.35);
      --gold: #f59e0b;
      --cyan: #38bdf8;
      --emerald: #10b981;
      --red: #f43f5e;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      --font-en: 'Plus Jakarta Sans', system-ui, sans-serif;
      --font-hi: 'Noto Sans Devanagari', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    body.light-theme {
      --bg: #f8fafc;
      --surface: #f1f5f9;
      --card: #ffffff;
      --card-hover: #f8fafc;
      --border: #cbd5e1;
      --border-accent: rgba(217, 119, 6, 0.4);
      --gold: #d97706;
      --cyan: #0284c7;
      --emerald: #059669;
      --text-main: #0f172a;
      --text-muted: #475569;
      --text-dim: #94a3b8;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font-en);
      background-color: var(--bg);
      color: var(--text-main);
      line-height: 1.68;
      padding-bottom: 120px;
      transition: background-color 0.25s ease, color 0.25s ease;
    }

    .top-bar {
      position: sticky;
      top: 0;
      z-index: 200;
      background: rgba(7, 13, 30, 0.94);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border);
      padding: 12px 24px;
    }
    body.light-theme .top-bar { background: rgba(248, 250, 252, 0.94); }

    .top-bar-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .brand-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand-badge {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: #031024;
      font-weight: 900;
      font-size: 0.72rem;
      padding: 4px 10px;
      border-radius: 6px;
      letter-spacing: 0.05em;
    }
    .brand-name {
      font-weight: 800;
      font-size: 1.02rem;
      color: var(--text-main);
      font-family: var(--font-hi);
    }
    .brand-sub {
      font-size: 0.74rem;
      color: var(--text-muted);
    }

    .top-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .btn-action {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 7px 13px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .btn-action:hover {
      border-color: var(--gold);
      transform: translateY(-1px);
    }
    .score-pill {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid var(--gold);
      color: var(--gold);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
    }

    .hero {
      max-width: 1200px;
      margin: 24px auto 16px;
      padding: 0 20px;
    }
    .hero-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }
    .hero-tag {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--cyan);
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .hero-tag.gold { color: var(--gold); border-color: rgba(245, 158, 11, 0.35); }
    .hero-tag.emerald { color: var(--emerald); border-color: rgba(16, 185, 129, 0.35); }
    .hero h1 {
      font-size: clamp(1.5rem, 3.8vw, 2.3rem);
      font-weight: 900;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
      font-family: var(--font-hi);
      background: linear-gradient(135deg, #ffffff 40%, var(--gold) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    body.light-theme .hero h1 {
      background: linear-gradient(135deg, #0f172a 40%, #d97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-sub {
      color: var(--text-muted);
      font-size: 0.95rem;
      max-width: 950px;
      margin-bottom: 20px;
      font-family: var(--font-hi);
      line-height: 1.65;
    }

    .paper-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }
    .info-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 14px;
      text-align: center;
      transition: all 0.2s;
    }
    .info-card:hover { border-color: var(--gold); transform: translateY(-2px); }
    .info-card .val {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--gold);
      font-family: var(--font-mono);
    }
    .info-card .lbl {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--text-dim);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 4px;
    }

    .filter-bar {
      max-width: 1200px;
      margin: 0 auto 20px;
      padding: 0 20px;
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
    }
    .filter-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 800;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
      font-family: var(--font-hi);
    }
    .filter-btn:hover { border-color: var(--gold); color: var(--text-main); }
    .filter-btn.active {
      background: var(--gold);
      color: #031024;
      border-color: var(--gold);
      font-weight: 900;
    }

    .main-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .mcq-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      position: relative;
      transition: all 0.2s ease;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    }
    .mcq-card:hover { border-color: var(--border-accent); }
    .mcq-top-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }
    .mcq-badge {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid var(--gold);
      color: var(--gold);
      font-weight: 900;
      font-size: 0.78rem;
      padding: 4px 10px;
      border-radius: 6px;
      font-family: var(--font-mono);
    }
    .mcq-ch-badge {
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--cyan);
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 3px 9px;
      border-radius: 6px;
      font-family: var(--font-hi);
    }

    .q-text-hi {
      font-size: 1.08rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 8px;
      font-family: var(--font-hi);
      line-height: 1.65;
      white-space: pre-line;
    }
    .q-text-en {
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--text-muted);
      margin-bottom: 18px;
      line-height: 1.55;
      white-space: pre-line;
    }

    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 16px;
    }
    @media (min-width: 640px) {
      .options-grid { grid-template-columns: 1fr 1fr; }
    }
    .opt-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 12px 16px;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-main);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      transition: all 0.2s;
      text-align: left;
      font-family: var(--font-hi);
    }
    .opt-btn:hover {
      background: var(--card-hover);
      border-color: var(--gold);
      transform: translateX(3px);
    }
    .opt-btn.correct {
      background: rgba(16, 185, 129, 0.2) !important;
      border-color: var(--emerald) !important;
      color: #34d399 !important;
      font-weight: 700;
    }
    .opt-btn.wrong {
      background: rgba(244, 63, 94, 0.18) !important;
      border-color: var(--red) !important;
      color: #fb7185 !important;
    }
    .feedback-badge {
      font-size: 0.75rem;
      font-weight: 900;
      padding: 3px 8px;
      border-radius: 6px;
      display: none;
      white-space: nowrap;
    }
    .opt-btn.correct .feedback-badge { display: inline-block; background: var(--emerald); color: #031024; }
    .opt-btn.wrong .feedback-badge { display: inline-block; background: var(--red); color: #fff; }

    .rationale-tray {
      display: none;
      background: rgba(16, 185, 129, 0.08);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: 12px;
      padding: 16px 18px;
      margin-top: 14px;
      animation: fadeIn 0.25s ease-out;
    }
    .rationale-tray.revealed { display: block; }
    .rat-title {
      font-size: 0.76rem;
      font-weight: 900;
      color: var(--emerald);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 6px;
      font-family: var(--font-hi);
    }
    .rat-text { font-size: 0.94rem; color: var(--text-main); line-height: 1.68; margin-bottom: 8px; font-family: var(--font-hi); }
    .rat-cite { font-size: 0.76rem; color: var(--gold); font-weight: 700; font-family: var(--font-mono); }

    .floating-dock {
      position: fixed;
      bottom: 24px;
      right: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 100;
    }
    .dock-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 18px rgba(0,0,0,0.5);
      transition: all 0.2s;
    }
    .dock-btn:hover { background: var(--gold); color: #031024; transform: translateY(-2px); }

    footer {
      max-width: 1200px;
      margin: 60px auto 0;
      padding: 24px 20px;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--text-dim);
      font-size: 0.82rem;
    }
    footer a { color: var(--gold); text-decoration: none; font-weight: 700; }
    footer a:hover { text-decoration: underline; }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

    @media (max-width: 640px) {
      .top-bar { padding: 10px 16px; }
      .mcq-card { padding: 18px 16px; }
      .hero h1 { font-size: 1.45rem; }
    }
  </style>
</head>
<body>
  <header class="top-bar">
    <div class="top-bar-inner">
      <div class="brand-title">
        <span class="brand-badge">NCERT CLASS 12</span>
        <div>
          <div class="brand-name">भारतीय इतिहास के कुछ विषय - भाग I (Themes in Indian History - I)</div>
          <div class="brand-sub">80 Advanced MCQs • Shuffled Options • Multi-Statement & Assertion-Reason</div>
        </div>
      </div>
      <div class="top-controls">
        <div class="score-pill" id="score-counter">
          <span>🎯 Score: 0 / 80</span>
        </div>
        <button class="btn-action" onclick="revealAllAnswers()"><span>👁️</span> Reveal All</button>
        <button class="btn-action" onclick="resetQuiz()"><span>🔄</span> Reset</button>
        <button class="btn-action" onclick="toggleTheme()"><span id="theme-indicator">🌙</span></button>
      </div>
    </div>
  </header>

  <section class="hero">
    <div class="hero-meta">
      <span class="hero-tag">कक्षा 12 इतिहास (भाग I)</span>
      <span class="hero-tag gold">उच्च-स्तरीय विश्लेषणात्मक प्रश्न</span>
      <span class="hero-tag emerald">100% NCERT Verified</span>
    </div>
    <h1>भारतीय इतिहास के कुछ विषय - भाग I (80 कठिन विश्लेषणात्मक प्रश्न)</h1>
    <p class="hero-sub">
      NCERT कक्षा 12 इतिहास भाग-1 के चारों अध्यायों के 20-20 सबसे चुनौतीपूर्ण प्रश्न। सभी प्रश्नों में विकल्पों का स्थान (A, B, C, D) यादृच्छिक (Randomly Shuffled) है। बहु-कथन परीक्षण (Multi-Statement), अभिकथन-कारण (Assertion-Reasoning) और सूक्ष्म पुरातात्विक साक्ष्यों पर आधारित।
    </p>

    <div class="paper-info-grid">
      <div class="info-card"><div class="val">80</div><div class="lbl">कुल कठिन प्रश्न</div></div>
      <div class="info-card"><div class="val">Shuffled</div><div class="lbl">विकल्प शफल्ड (A-D)</div></div>
      <div class="info-card"><div class="val">CBSE / CUET</div><div class="lbl">उन्नत स्तर</div></div>
      <div class="info-card"><div class="val">द्विभाषी</div><div class="lbl">Hindi & English</div></div>
    </div>
  </section>

  <!-- Chapter Switcher Tabs -->
  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterChapter('all', this)">⭐ सभी 80 प्रश्न (All 80)</button>
    <button class="filter-btn" onclick="filterChapter(1, this)">🏛️ विषय 1: हड़प्पा सभ्यता (Q1-20)</button>
    <button class="filter-btn" onclick="filterChapter(2, this)">👑 विषय 2: आरंभिक राज्य व नगर (Q21-40)</button>
    <button class="filter-btn" onclick="filterChapter(3, this)">📜 विषय 3: बंधुत्व, जाति व वर्ग (Q41-60)</button>
    <button class="filter-btn" onclick="filterChapter(4, this)">🛕 विषय 4: विचारक व इमारतें (Q61-80)</button>
  </div>

  <main class="main-container" id="questions-container">
    ${processedMcqs.map((m, idx) => `
      <article class="mcq-card" data-chapter="${m.ch}" id="mcq-card-${idx + 1}">
        <div class="mcq-top-meta">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="mcq-badge">Q${idx + 1} of 80</span>
            <span class="mcq-ch-badge">${m.chName}</span>
          </div>
          <span style="font-size:0.75rem; color:var(--text-dim); font-family:var(--font-mono);">Ch ${m.ch} • Q${((idx) % 20) + 1}</span>
        </div>

        <h3 class="q-text-hi">${m.qHi}</h3>
        <p class="q-text-en">${m.qEn}</p>

        <div class="options-grid">
          ${m.optionsHi.map((optHi, oIdx) => `
            <button class="opt-btn" onclick="checkOption(this, ${oIdx === m.correct}, ${idx + 1})">
              <span>${optHi} <br><span style="font-size:0.8rem; color:var(--text-muted); font-family:var(--font-en); font-weight:normal;">${m.optionsEn[oIdx]}</span></span>
              <span class="feedback-badge">${oIdx === m.correct ? '✓ सही (Correct)' : '✗ गलत'}</span>
            </button>
          `).join('')}
        </div>

        <div class="rationale-tray" id="rat-${idx + 1}">
          <div class="rat-title"><span>✓ उत्तर एवं NCERT व्याख्या:</span></div>
          <p class="rat-text">${m.exp}</p>
          <div class="rat-cite">स्रोत: ${m.ref}</div>
        </div>
      </article>
    `).join('')}
  </main>

  <div class="floating-dock">
    <button class="dock-btn" title="Back to Top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑</button>
  </div>

  <footer>
    <p>
      NCERT Class 12 History (Themes in Indian History - I) • सम्पूर्ण 4 अध्याय • 80 उन्नत बहुविकल्पीय प्रश्न<br>
      Study Suite by <a href="/">NextSem Academy</a> • All Rights Reserved.
    </p>
  </footer>

  <script>
    const answeredMap = {};
    const totalCount = 80;

    function checkOption(btn, isCorrect, qId) {
      const card = document.getElementById('mcq-card-' + qId);
      const allBtns = card.querySelectorAll('.opt-btn');
      allBtns.forEach(b => b.classList.remove('correct', 'wrong'));

      if (isCorrect) {
        btn.classList.add('correct');
        answeredMap[qId] = true;
        if (typeof confetti === 'function') {
          confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
        }
      } else {
        btn.classList.add('wrong');
        answeredMap[qId] = false;
      }

      const rat = document.getElementById('rat-' + qId);
      if (rat) rat.classList.add('revealed');
      updateScore();
    }

    function updateScore() {
      let score = 0;
      Object.keys(answeredMap).forEach(k => { if (answeredMap[k]) score++; });
      document.getElementById('score-counter').innerHTML = '<span>🎯 Score: ' + score + ' / ' + totalCount + '</span>';
    }

    function revealAllAnswers() {
      document.querySelectorAll('.rationale-tray').forEach(t => t.classList.add('revealed'));
    }

    function resetQuiz() {
      Object.keys(answeredMap).forEach(k => delete answeredMap[k]);
      document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('correct', 'wrong'));
      document.querySelectorAll('.rationale-tray').forEach(t => t.classList.remove('revealed'));
      updateScore();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function filterChapter(ch, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.mcq-card').forEach(card => {
        if (ch === 'all' || card.getAttribute('data-chapter') == ch) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      window.scrollTo({ top: 260, behavior: 'smooth' });
    }

    function toggleTheme() {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      document.getElementById('theme-indicator').textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('history_part1_theme', isLight ? 'light' : 'dark');
    }

    window.addEventListener('DOMContentLoaded', () => {
      const saved = localStorage.getItem('history_part1_theme');
      if (saved === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('theme-indicator').textContent = '☀️';
      }
    });
  </script>
</body>
</html>`;

fs.writeFileSync('public/history-class12-part1-all-chapters-80-mcqs.html', html, 'utf8');
console.log('Successfully regenerated public/history-class12-part1-all-chapters-80-mcqs.html with shuffled and advanced questions!');
