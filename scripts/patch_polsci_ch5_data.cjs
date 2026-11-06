const fs = require('fs');
const path = require('path');

const ncertDataPath = path.join(__dirname, '../src/data/ncertData.ts');
let fileContent = fs.readFileSync(ncertDataPath, 'utf8');

const regex = /id:\s*'c12-pol-ch5'[\s\S]*?quiz:\s*\[\]\s*\},/;

const replacement = `id: 'c12-pol-ch5',
            chapterNumber: 5,
            title: 'समकालीन विश्व में सुरक्षा (Security in the Contemporary World)',
            officialBookCode: 'lhps1',
            officialPdfUrl: '/pdf/Class 12/12th Samkalin Vishwa Rajniti/lhps105.pdf',
            nepHighlights: 'पारंपरिक बनाम अपारंपरिक सुरक्षा, आतंकवाद, परमाणु प्रसार, मानव सुरक्षा, सहयोगी सुरक्षा एवं भारत की सुरक्षा नीति।',
            summaryTextbook: 'सुरक्षा की पारंपरिक अवधारणा (सैन्य खतरे) से अपारंपरिक अवधारणाओं (आतंकवाद, पर्यावरण, महामारी, मानव तस्करी) की ओर वैश्विक बदलाव। सहयोगी सुरक्षा के सिद्धांत और भारत की सुरक्षा नीति का विश्लेषण।',
            exerciseSolutions: [
              {
                id: 'c12-pol-ch5-q1',
                questionNo: 'NCERT Q1',
                questionText: 'सुरक्षा की पारंपरिक और अपारंपरिक धारणा में क्या मुख्य अंतर है? (What is the key difference between traditional and non-traditional notions of security?)',
                difficulty: 'Medium',
                type: 'Exercise',
                stepByStepSolution: [
                  '1. खतरे का स्रोत (Source of Threat): पारंपरिक सुरक्षा में खतरा मुख्य रूप से किसी बाहरी संप्रभु राष्ट्र के सैन्य आक्रमण से होता है। जबकि अपारंपरिक सुरक्षा में खतरे सीमाओं के पार से आते हैं—जैसे आतंकवाद, भुखमरी, वैश्विक निर्धनता, महामारियाँ (COVID/HIV) और जलवायु परिवर्तन।',
                  '2. सुरक्षा का केंद्र बिंदु (Referent Object): पारंपरिक सुरक्षा का केंद्रबिंदु \\'राज्य\\' (State) तथा उसकी सीमा व संप्रभुता होती है। अपारंपरिक सुरक्षा का केंद्रबिंदु \\'व्यक्ति\\' (मानव सुरक्षा) तथा समस्त मानव जाति (वैश्विक सुरक्षा) होती है।',
                  '3. समाधान के उपाय (Methods): पारंपरिक सुरक्षा में सैन्य शक्ति, शक्ति संतुलन, गठबंधन और युद्ध की तैयारी मुख्य उपाय हैं। अपारंपरिक सुरक्षा में अंतरराष्ट्रीय सहयोग, संयुक्त राष्ट्र, विश्व स्वास्थ्य संगठन जैसी संस्थाएँ, मानवाधिकार और कूटनीति मुख्य साधन हैं।'
                ],
                finalAnswer: 'पारंपरिक सुरक्षा राज्य-केंद्रित एवं सैन्य खतरों से संबंधित है; जबकि अपारंपरिक सुरक्षा मानव-केंद्रित एवं बहुआयामी वैश्विक खतरों से संबंधित है।',
                keyTakeaway: 'Traditional security focuses on state survival via military means, whereas non-traditional security prioritizes human well-being and transnational cooperation.'
              },
              {
                id: 'c12-pol-ch5-q2',
                questionNo: 'NCERT Q2',
                questionText: '\\'शक्ति संतुलन\\' (Balance of Power) से आप क्या समझते हैं? कोई देश इसे कैसे कायम रखता है?',
                difficulty: 'Medium',
                type: 'Exercise',
                stepByStepSolution: [
                  '1. शक्ति संतुलन की अवधारणा: शक्ति संतुलन का अभिप्राय यह है कि कोई भी पड़ोसी राष्ट्र या प्रतिद्वंद्वी इतना अधिक शक्तिशाली न हो जाए कि वह भविष्य में अन्य राष्ट्रों की संप्रभुता या स्वतंत्रता को कुचल सके।',
                  '2. सैन्य विस्तार व आधुनिकीकरण: राष्ट्र अपनी थलसेना, नौसेना एवं वायुसेना को आधुनिक शस्त्रों, मिसाइल प्रणालियों और तकनीक से सशक्त बनाए रखते हैं।',
                  '3. आर्थिक सुदृढ़ता: आधुनिक सैन्य शक्ति का आधार मजबूत अर्थव्यवस्था है; आर्थिक रूप से संपन्न देश ही लंबे समय तक रक्षा अनुसंधान और हथियार उत्पादन को वहन कर सकता है।',
                  '4. गठबंधन निर्माण (Alliance Building): समान सुरक्षा हितों वाले मित्र राष्ट्रों के साथ रणनीतिक व सैन्य समझौते करना ताकि आक्रमण की स्थिति में संयुक्त रूप से जवाब दिया जा सके।'
                ],
                finalAnswer: 'शक्ति संतुलन पड़ोसी देशों के बीच सैन्य, आर्थिक और तकनीकी सामर्थ्य का ऐसा संतुलन है जिससे कोई एक देश प्रभुत्व स्थापित न कर सके।',
                keyTakeaway: 'Balance of power is maintained through military modernization, robust economic growth, and diplomatic alliance formation.'
              },
              {
                id: 'c12-pol-ch5-q3',
                questionNo: 'NCERT Q3',
                questionText: 'सैन्य खतरे की स्थिति में किसी देश की सरकार के पास कौन-से तीन बुनियादी विकल्प होते हैं? (Three choices in war)',
                difficulty: 'Easy',
                type: 'Exercise',
                stepByStepSolution: [
                  '1. आत्मसमर्पण करना (Surrender): युद्ध में होने वाले जान-माल के भारी नुकसान से बचने के लिए बिना लड़े शत्रु की मांगें स्वीकार कर लेना (हालाँकि कोई भी स्वाभिमानी राष्ट्र इसे औपचारिक नीति नहीं बनाता)।',
                  '2. अपरोध की नीति (Deterrence): शत्रु को यह आभास करा देना कि युद्ध करने की स्थिति में उसे ऐसा असहनीय और विनाशकारी नुकसान उठाना पड़ेगा जिसकी भरपाई संभव नहीं होगी, जिससे वह आक्रमण का विचार ही त्याग दे।',
                  '3. रक्षा करना (Defence): यदि युद्ध छिड़ ही जाए तो अपनी पूर्ण सैन्य शक्ति से आक्रमणकारी का मुकाबला करना और उसके सैन्य उद्देश्यों को पराजित करना ताकि अपनी सीमाओं की रक्षा हो सके।'
                ],
                finalAnswer: 'युद्ध के समय तीन विकल्प होते हैं: आत्मसमर्पण (Surrender), अपरोध (Deterrence) और रक्षा (Defence)।',
                keyTakeaway: 'Deterrence aims at preventing war altogether; Defence aims at limiting or defeating the aggressor once war begins.'
              },
              {
                id: 'c12-pol-ch5-q4',
                questionNo: 'NCERT Q4',
                questionText: 'भारत की सुरक्षा नीति के चार प्रमुख घटकों का संक्षिप्त विवरण दीजिए। (Four Pillars of India\\'s Security Strategy)',
                difficulty: 'Hard',
                type: 'Exercise',
                stepByStepSolution: [
                  '1. पहला घटक - सैन्य क्षमता सुदृढ़ करना: पड़ोसी देशों (चीन और पाकिस्तान) के साथ हुए युद्धों को देखते हुए भारत ने आधुनिक सेना तैयार की तथा 1974 व 1998 में परमाणु परीक्षण कर विश्वसनीय निवारक क्षमता हासिल की।',
                  '2. दूसरा घटक - अंतरराष्ट्रीय नियमों और संस्थाओं का समर्थन: जवाहरलाल नेहरू के नेतृत्व में गुटनिरपेक्षता (NAM) को बढ़ावा दिया, सार्वभौमिक निःशस्त्रीकरण की वकालत की तथा संयुक्त राष्ट्र (UN) के शांति अभियानों में सक्रिय योगदान दिया।',
                  '3. तीसरा घटक - आंतरिक सुरक्षा और लोकतांत्रिक एकता: पूर्वोत्तर (मिजोरम, नागालैंड), पंजाब और कश्मीर में अलगाववादी आंदोलनों को लोकतांत्रिक ढांचे के अंतर्गत संवाद व समझौते द्वारा हल कर राष्ट्रीय एकता को सुरक्षित रखा।',
                  '4. चौथा घटक - तीव्र एवं समावेशी आर्थिक विकास: देश को निर्धनता, भुखमरी और असमानता से उबारने के लिए आर्थिक सुधार करना, क्योंकि आर्थिक रूप से कमजोर राष्ट्र सच्चे अर्थों में सुरक्षित नहीं हो सकता।'
                ],
                finalAnswer: 'भारत की सुरक्षा नीति सैन्य मजबूती, अंतरराष्ट्रीय सहयोग, आंतरिक एकता और तीव्र आर्थिक विकास के चार स्तंभों पर टिकी है।',
                keyTakeaway: 'India combines hard power (military deterrence) with soft power (international multilateralism) and domestic economic resilience.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c12-pol-ch5-cq1',
                questionNo: 'NEP Case-Study 1',
                questionText: 'केस स्टडी: 11 सितंबर 2001 (9/11) को अमेरिका पर हुए आतंकवादी हमले ने वैश्विक सुरक्षा की किस पारंपरिक धारणा को पूरी तरह बदल दिया?',
                difficulty: 'Medium',
                type: 'Competency',
                stepByStepSolution: [
                  '1. 9/11 से पूर्व शक्तिशाली पश्चिमी देश यह मानते थे कि उनकी विशाल सेनाएं, भौगोलिक दूरी और आधुनिक मिसाइलें उन्हें बाहरी हमलों से पूर्णतः सुरक्षित रखती हैं।',
                  '2. 9/11 हमले ने सिद्ध किया कि गैर-राज्यीय कर्ता (Non-State Actors / Terrorist Networks) सामान्य यात्री विमानों को हथियार बनाकर दुनिया के सबसे शक्तिशाली देश को उसकी ही धरती पर भारी नुकसान पहुँचा सकते हैं।',
                  '3. इसके परिणामस्वरूप सुरक्षा की अपारंपरिक धारणा में \\'अंतरराष्ट्रीय आतंकवाद\\' सबसे बड़ा वैश्विक खतरा बनकर उभरा, जिसके विरुद्ध अंतरराष्ट्रीय खुफिया सहयोग और कड़े वित्तीय प्रतिबंध आवश्यक हो गए।'
                ],
                finalAnswer: '9/11 ने साबित किया कि पारंपरिक सेना और परमाणु हथियार आतंकवाद जैसे असममित अपारंपरिक खतरों से अकेले सुरक्षा प्रदान नहीं कर सकते।',
                keyTakeaway: 'Terrorism shifted security doctrine from interstate military warfare to non-state transnational asymmetric threat management.'
              },
              {
                id: 'c12-pol-ch5-cq2',
                questionNo: 'CBSE HOTS 2',
                questionText: 'अभिकथन (A): भारत ने 1968 की परमाणु अप्रसार संधि (NPT) पर हस्ताक्षर करने से इनकार कर दिया। कारण (R): यह संधि उन देशों को परमाणु अधिकार देती है जिन्होंने 1 जनवरी 1967 से पूर्व परीक्षण कर लिया था और अन्य पर पूर्ण प्रतिबंध लगाती है।',
                difficulty: 'Medium',
                type: 'Competency',
                stepByStepSolution: [
                  '1. विश्लेषण: भारत सदैव सार्वभौमिक और भेदभाव-रहित निःशस्त्रीकरण का समर्थक रहा है।',
                  '2. NPT संधि विश्व को परमाणु \\'सम्पन्न\\' (P-5 देश) और परमाणु \\'विहीन\\' देशों में बाँटती है, जो समानता के सिद्धांत के विरुद्ध है।',
                  '3. अतः दोनों कथन सत्य हैं तथा कारण (R), अभिकथन (A) की सही व्याख्या करता है।'
                ],
                finalAnswer: 'सही उत्तर: (A) और (R) दोनों सत्य हैं और (R), (A) की सही व्याख्या करता है।',
                keyTakeaway: 'India opposes discriminatory nuclear cartels (like NPT) while committing to a No-First-Use (NFU) credible minimum deterrence.'
              }
            ],
            quiz: [
              {
                id: 'c12-pol-ch5-qz1',
                question: 'सुरक्षा का सबसे बुनियादी अर्थ क्या है? (What is the fundamental meaning of security?)',
                options: [
                  'अत्यधिक हथियारों का भंडारण',
                  'खतरों से आज़ादी (Freedom from threats)',
                  'अन्य देशों पर सैन्य विजय',
                  'किसी भी संधि पर हस्ताक्षर न करना'
                ],
                correctIndex: 1,
                explanation: 'सुरक्षा का बुनियादी अर्थ खतरों से मुक्ति है, विशेषकर उन खतरों से जो संप्रभुता और जीवन को नष्ट कर सकते हैं।'
              },
              {
                id: 'c12-pol-ch5-qz2',
                question: 'युद्ध की आशंका को रोकने के लिए अपनी सैन्य क्षमता दिखाकर शत्रु को हमला न करने के लिए विवश करना क्या कहलाता है?',
                options: [
                  'अपरोध (Deterrence)',
                  'आत्मसमर्पण (Surrender)',
                  'रक्षा (Defence)',
                  'तुष्टिकरण (Appeasement)'
                ],
                correctIndex: 0,
                explanation: 'अपरोध (Deterrence) का उद्देश्य युद्ध शुरू होने से पहले ही शत्रु को यह समझाना है कि आक्रमण की कीमत असहनीय होगी।'
              },
              {
                id: 'c12-pol-ch5-qz3',
                question: 'जैविक हथियार संधि (BWC) किस वर्ष में सम्पन्न हुई थी?',
                options: [
                  '1968',
                  '1972',
                  '1992',
                  '1998'
                ],
                correctIndex: 1,
                explanation: 'BWC पर 1972 में हस्ताक्षर हुए जिसमें जैविक हथियारों के उत्पादन और भंडारण पर पूर्ण प्रतिबंध लगाया गया।'
              },
              {
                id: 'c12-pol-ch5-qz4',
                question: 'रासायनिक हथियार संधि (CWC) किस वर्ष हस्ताक्षरित हुई?',
                options: [
                  '1972',
                  '1985',
                  '1992',
                  '2001'
                ],
                correctIndex: 2,
                explanation: 'CWC 1992 में सम्पन्न हुई और 181 से अधिक राष्ट्रों ने रासायनिक हथियारों को प्रतिबंधित करने का संकल्प लिया।'
              },
              {
                id: 'c12-pol-ch5-qz5',
                question: 'मानव सुरक्षा (Human Security) की अवधारणा में मुख्य रूप से किसकी रक्षा पर बल दिया जाता है?',
                options: [
                  'केवल राज्य और उसकी सीमाओं की',
                  'व्यक्तियों और मानव समुदाय की (Individuals and Humanity)',
                  'राजनीतिक दलों की',
                  'बहुराष्ट्रीय निगमों की'
                ],
                correctIndex: 1,
                explanation: 'मानव सुरक्षा का केंद्र बिंदु राज्य के स्थान पर आम व्यक्ति होता है; इसमें अभाव से मुक्ति (Freedom from want) व भय से मुक्ति शामिल है।'
              },
              {
                id: 'c12-pol-ch5-qz6',
                question: 'भारत ने अपना दूसरा सफल पोखरण परमाणु परीक्षण किस वर्ष किया था?',
                options: [
                  '1974',
                  '1991',
                  '1998',
                  '2004'
                ],
                correctIndex: 2,
                explanation: 'मई 1998 में भारत ने 5 सफल भूमिगत परमाणु परीक्षण कर अपनी न्यूनतम विश्वसनीय परमाणु निवारक क्षमता स्थापित की।'
              }
            ]
          },`;

if (regex.test(fileContent)) {
  fileContent = fileContent.replace(regex, replacement);
  fs.writeFileSync(ncertDataPath, fileContent, 'utf8');
  console.log('✅ Successfully patched c12-pol-ch5 in src/data/ncertData.ts using regex');
} else {
  console.log('⚠️ Regex did not match');
}
