export interface HistoryTestQuestion {
  id: string;
  sourceCode: string;
  sourceTitle: string;
  classNumber: number;
  questionNo: number;
  questionType: 'MCQ' | 'Assertion-Reason' | 'Chronology' | 'Match-the-Following' | 'Case-Based';
  questionText: string;
  questionTextHinglish: string;
  options: string[];
  optionsHinglish: string[];
  correctIndex: number;
  ncertReference: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  detailedSolutionHinglish: string;
  keyConcept: string;
  tags: string[];
}

export const HISTORY_COMPETENCY_TEST_QUESTIONS: HistoryTestQuestion[] = [
  // =========================================================================
  // SET 1: BHAKTI & SUFI TRADITIONS (Class 12 History - lhhs202.pdf)
  // भक्ति-सूफी परंपराएँ: धार्मिक विश्वासों में बदलाव और श्रद्धा ग्रंथ
  // =========================================================================
  {
    id: 'bhakti-q1',
    sourceCode: 'lhhs202',
    sourceTitle: 'Class 12 History: Bhakti-Sufi Traditions (lhhs202)',
    classNumber: 12,
    questionNo: 1,
    questionType: 'MCQ',
    questionText: 'The 12 Alvar saints of Tamil Nadu who composed the 4,000 Tamil hymns compiled in the "Nalayira Divyaprabandham" were dedicated devotees of which deity?',
    questionTextHinglish: 'Tamil Nadu ke 12 Alvar sant jinhone 4,000 devotional geeton ka sangrah "Nalayira Divyaprabandham" (jise Tamil Veda bhi kehte hain) banaya, kis bhagwan ke param bhakt the?',
    options: [
      'Lord Shiva (भगवान शिव)',
      'Lord Vishnu (भगवान विष्णु)',
      'Lord Murugan / Kartikeya (भगवान मुरुगन)',
      'Goddess Durga (देवी दुर्गा)'
    ],
    optionsHinglish: [
      'Lord Shiva (भगवान शिव ke bhakt Nayanar the)',
      'Lord Vishnu (भगवान विष्णु ke bhakt Alvar the)',
      'Lord Murugan / Kartikeya',
      'Goddess Durga'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 143-144',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'NCERT ke mutabik: Tamil Nadu mein 6th-9th century mein do mukhya Bhakti traditions thi:\n1. **Alvars**: Vishnu ke bhakt (inme 12 saints the, including Andal aur Nammalvar; inka sacred text "Nalayira Divyaprabandham" tha).\n2. **Nayanars**: Shiva ke bhakt (inme 63 saints the, including Appar, Sambandar, Sundarar aur Karaikkal Ammaiyar; inka text "Tevaram" tha).',
    keyConcept: 'Alvars = Devotees of Vishnu; Nayanars = Devotees of Shiva',
    tags: ['Alvars', 'Vishnu', 'Divyaprabandham', 'Bhakti']
  },
  {
    id: 'bhakti-q2',
    sourceCode: 'lhhs202',
    sourceTitle: 'Class 12 History: Bhakti-Sufi Traditions (lhhs202)',
    classNumber: 12,
    questionNo: 2,
    questionType: 'MCQ',
    questionText: 'Who was the only female Alvar poet-saint whose passionate verses expressing deep love for Lord Ranganatha (Vishnu) are widely sung across South India?',
    questionTextHinglish: '12 Alvar santo mein se ekmatra mahila sant kaun thi jinhone khud ko Vishnu (Ranganatha) ki premika maankar prasiddh Bhakti pad likhe?',
    options: [
      'Karaikkal Ammaiyar (कारैक्काल अम्मैयार)',
      'Akka Mahadevi (अक्क महादेवी)',
      'Andal (आंडाल)',
      'Mirabai (मीराबाई)'
    ],
    optionsHinglish: [
      'Karaikkal Ammaiyar (Yeh Shiva ki Nayanar sant thi)',
      'Akka Mahadevi (Yeh Karnataka ki Virashaiva sant thi)',
      'Andal (आंडाल - Ekmatra Alvar mahila sant)',
      'Mirabai (Yeh Rajasthan ki Krishna bhakt thi)'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 144-145',
    difficulty: 'Medium',
    detailedSolutionHinglish: '**Andal** ekmatra Alvar mahila sant thi jinhone apne aap ko Bhagwan Vishnu ki priyatama maana aur unke pad aaj bhi Tamil Nadu ke mandiron mein gaaye jaate hain. Karaikkal Ammaiyar Nayanar (Shiva bhakt) thi jinhone ghor tapasya ki thi.',
    keyConcept: 'Andal = Female Alvar (Vishnu); Karaikkal Ammaiyar = Female Nayanar (Shiva)',
    tags: ['Andal', 'Women Bhakti Poets', 'Alvars']
  },
  {
    id: 'bhakti-q3',
    sourceCode: 'lhhs202',
    sourceTitle: 'Class 12 History: Bhakti-Sufi Traditions (lhhs202)',
    classNumber: 12,
    questionNo: 3,
    questionType: 'MCQ',
    questionText: 'The Virashaiva / Lingayat movement initiated in 12th-century Karnataka was led by which minister of the Kalachuri court?',
    questionTextHinglish: '12veen sadi mein Karnataka mein Virashaiva (वीरशैव / लिंगायत) movement ki shuruat Kalachuri raja ke kis mantri ne ki thi?',
    options: [
      'Basavanna (बासवन्ना / बसवेश्वर)',
      'Shankaracharya (आदि शंकराचार्य)',
      'Ramanujacharya (रामानुजाचार्य)',
      'Madhavacharya (माधवाचार्य)'
    ],
    optionsHinglish: [
      'Basavanna (बासवन्ना - Kalachuri court ke mantri aur Lingayat founder)',
      'Shankaracharya (Advaita Vedanta ke founder)',
      'Ramanujacharya (Vishishtadvaita ke founder)',
      'Madhavacharya (Dvaita Vedanta ke founder)'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 147-148',
    difficulty: 'Easy',
    detailedSolutionHinglish: '**Basavanna** (1106–1167) ek Brahmana the jo Kalachuri raja ke darbar mein mantri the. Unhone Allama Prabhu aur Akka Mahadevi ke saath milkar Virashaiva (Shiva ke veer) ya Lingayat (Lingam dharan karne wale) andolan chalaya. Inke devotional vachano ko **Vachana** kaha jata hai.',
    keyConcept: 'Virashaiva / Lingayat Movement = Founded by Basavanna in Karnataka (12th C.)',
    tags: ['Basavanna', 'Lingayats', 'Virashaivas', 'Karnataka']
  },
  {
    id: 'bhakti-q4',
    sourceCode: 'lhhs202',
    sourceTitle: 'Class 12 History: Bhakti-Sufi Traditions (lhhs202)',
    classNumber: 12,
    questionNo: 4,
    questionType: 'Assertion-Reason',
    questionText: 'Assertion (A): Lingayats challenged caste hierarchy and the concept of post-death pollution.\nReason (R): Lingayats believe that upon death, the devotee unites eternally with Shiva and does not return to this world through rebirth (punarjanma); hence they bury their dead instead of cremating.',
    questionTextHinglish: 'Assertion (A): Lingayats ne jaati-pratha ke bhedbhav aur janm-maran ke ashhauch (pollution) ko challenge kiya.\nReason (R): Lingayato ka maanna hai ki marne ke baad bhakt Shiva mein leen ho jata hai aur punarjanma nahi hota, isliye woh dah-sanskar karne ke bajay dafnate (bury) hain.',
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
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 148',
    difficulty: 'Hard',
    detailedSolutionHinglish: 'Dono statements 100% correct hain aur (R) sahi reason hai. Lingayat Dharmashastron ke jaati-vidhan, bal-vivah aur punarjanma ko asweekar karte the. Unka vishwas tha ki mrityu ke baad aatma Shiva se mil jaati hai, isliye shradh aur cremation ki jagah mritak ko dafnaya jata hai.',
    keyConcept: 'Lingayat Social Reforms: Rejected Caste, Rebirth & Cremation; Encouraged Widow Remarriage',
    tags: ['Assertion-Reason', 'Lingayats', 'Social Reforms']
  },
  {
    id: 'bhakti-q5',
    sourceCode: 'lhhs202',
    sourceTitle: 'Class 12 History: Bhakti-Sufi Traditions (lhhs202)',
    classNumber: 12,
    questionNo: 5,
    questionType: 'MCQ',
    questionText: 'In Sufism, what is the term used for the hospice/monastery where the Sufi Shaikh lived and taught disciples, and what was the open community kitchen called?',
    questionTextHinglish: 'Sufism mein Sufi sant ke aashram/math ko kya kaha jata tha jahan murshid aur shagird rehte the, aur muft bhojan ke open community kitchen ko kya bolte the?',
    options: [
      'Khanqah (खानक़ाह) and Langar (लंगर)',
      'Ziyarat (ज़ियारत) and Futuh (फ़ुतुह)',
      'Dargah (दरगाह) and Urs (उर्स)',
      'Silsila (सिलसिला) and Sama (समा)'
    ],
    optionsHinglish: [
      'Khanqah (खानक़ाह) aur Langar (लंगर)',
      'Ziyarat (तीर्थयात्रा) aur Futuh (दान/चंदा)',
      'Dargah (मज़ार) aur Urs (बरसी उत्सव)',
      'Silsila (सूफी सिलसिला) aur Sama (कव्वाली/संगीत)'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 153-154',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Sufi terminology:\n- **Khanqah**: Sufi master (Shaikh/Pir) ka aashram/centre jahan log aate the.\n- **Langar**: Unsolicited donations (Futuh) se chalne wala community kitchen.\n- **Ziyarat**: Tomb/Dargah par darshan/pilgrimage.\n- **Sama**: Sufi sangeet/qawwali jisse spiritual ecstasy milti hai.',
    keyConcept: 'Khanqah = Sufi Hospice; Langar = Open Kitchen; Ziyarat = Pilgrimage; Sama = Musical Session',
    tags: ['Sufism', 'Khanqah', 'Langar', 'Terminology']
  },
  {
    id: 'bhakti-q6',
    sourceCode: 'lhhs202',
    sourceTitle: 'Class 12 History: Bhakti-Sufi Traditions (lhhs202)',
    classNumber: 12,
    questionNo: 6,
    questionType: 'Match-the-Following',
    questionText: 'Match the famous Chishti Sufi saint with their primary location/seat:\n1. Shaikh Muinuddin Sijzi -> (A) Ajmer (Rajasthan)\n2. Khwaja Qutbuddin Bakhtiyar Kaki -> (B) Delhi\n3. Shaikh Fariduddin Ganj-i-Shakar -> (C) Ajodhan / Pakpattan\n4. Shaikh Nizamuddin Auliya -> (D) Ghiyaspur, Delhi',
    questionTextHinglish: 'Chishti silsile ke mukhya santo ko unke sthaan (location) se match karo:\n1. Shaikh Muinuddin Chishti -> (A) Ajmer (Gharib Nawaz)\n2. Qutbuddin Bakhtiyar Kaki -> (B) Delhi (Qutb Minar inspired by him)\n3. Baba Fariduddin Ganj-i-Shakar -> (C) Ajodhan (Pakpattan, Punjab)\n4. Nizamuddin Auliya -> (D) Delhi (Sultan-ul-Mashaikh)',
    options: [
      '1-A, 2-B, 3-C, 4-D',
      '1-B, 2-A, 3-D, 4-C',
      '1-C, 2-D, 3-A, 4-B',
      '1-D, 2-C, 3-B, 4-A'
    ],
    optionsHinglish: [
      '1-A, 2-B, 3-C, 4-D (Bilkul sahi match)',
      '1-B, 2-A, 3-D, 4-C',
      '1-C, 2-D, 3-A, 4-B',
      '1-D, 2-C, 3-B, 4-A'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 154 Table',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Chishti order ke 5 mukhya darbarein:\n1. Khwaja Muinuddin Chishti -> Ajmer (1235 CE)\n2. Qutbuddin Bakhtiyar Kaki -> Delhi (1235 CE)\n3. Fariduddin Ganj-i Shakar (Baba Farid) -> Ajodhan (1265 CE)\n4. Nizamuddin Auliya -> Delhi (1325 CE)\n5. Nasiruddin Chiragh-i Dehli -> Delhi (1356 CE).',
    keyConcept: 'Major Chishti Sufi Shrines in India',
    tags: ['Chishti Silsila', 'Sufi Saints', 'Ajmer', 'Delhi']
  },
  {
    id: 'bhakti-q7',
    sourceCode: 'lhhs202',
    sourceTitle: 'Class 12 History: Bhakti-Sufi Traditions (lhhs202)',
    classNumber: 12,
    questionNo: 7,
    questionType: 'MCQ',
    questionText: 'Which Nirguna Bhakti saint-poet used paradoxical expressions called "Ulatbansi" (upside-down sayings) like "the ocean is on fire" or "the cow milks the calf"?',
    questionTextHinglish: 'Kis Nirguna Bhakti sant-kavi ne "Ulatbansi" (उलटबांसी - ulti baatein jaise "samundar mein aag lagi" ya "gay bachhiya ko dudh pilaye") likhkar param-satya ko samjhaya?',
    options: [
      'Mirabai (मीराबाई)',
      'Kabir Das (कबीरदास)',
      'Surdas (सूरदास)',
      'Tulsidas (तुलसीदास)'
    ],
    optionsHinglish: [
      'Mirabai (Saguna Krishna bhakt)',
      'Kabir Das (कबीरदास - Ulatbansi aur Bijak ke rachayita)',
      'Surdas (Sur Sagar ke rachayita)',
      'Tulsidas (Ramcharitmanas ke rachayita)'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Medium',
    detailedSolutionHinglish: '**Kabir Das** ne param-satya (Ultimate Reality) ke anubhav ko darshane ke liye "Ulatbansi" (upside-down poetry) ka prayog kiya. Kabir ke pad Bijak (Kabirpanth), Guru Granth Sahib aur Kabir Granthavali mein sanrakshit hain.',
    keyConcept: 'Kabir\'s Poetry: Bijak, Sakhi, Sabad & Ulatbansi',
    tags: ['Kabir', 'Ulatbansi', 'Nirguna Bhakti']
  },
  {
    id: 'bhakti-q8',
    sourceCode: 'lhhs202',
    sourceTitle: 'Class 12 History: Bhakti-Sufi Traditions (lhhs202)',
    classNumber: 12,
    questionNo: 8,
    questionType: 'MCQ',
    questionText: 'Which Rajput princess and devotee of Krishna broke orthodox palace boundaries and accepted Raidas (a leather-worker from an untouchable caste) as her spiritual preceptor (Guru)?',
    questionTextHinglish: 'Mewar ke raj-parivar se taalluk rakhne wali kaunsi sant-kavayitri thi jinhone jaati-bhed ko thukrakar chamade ka kaam karne wale Sant Raidas (Ravidas) ko apna Guru banaya?',
    options: [
      'Rani Padmini (रानी पद्मिनी)',
      'Mirabai (मीराबाई)',
      'Andal (आंडाल)',
      'Lal Ded (लल्लेश्वरी)'
    ],
    optionsHinglish: [
      'Rani Padmini',
      'Mirabai (मीराबाई - Raidas ko Guru maana aur Krishna bhajan rache)',
      'Andal (Tamil Alvar sant)',
      'Lal Ded (Kashmir ki Shaivite sant)'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 164',
    difficulty: 'Easy',
    detailedSolutionHinglish: '**Mirabai** (15th-16th C.) Marwar ke Merta ki rajkumari thi jinka vivah Sisodia rajkumar Bhoj Raj se hua tha. Unhone raj-mahal ke aish-o-aaram ko chhodkar Sant Raidas (jo chamkar jaati se the) ko Guru chuna, jo darshata hai ki Bhakti parampara ne jaati-bandhanon ko toda.',
    keyConcept: 'Mirabai: Bhakti breaking caste and patriarchal barriers',
    tags: ['Mirabai', 'Raidas', 'Krishna Bhakti']
  },

  // =========================================================================
  // SET 2: NOMADIC EMPIRES: GENGHIS KHAN & MONGOLS (Class 11 History - khhs105.pdf)
  // यायावर साम्राज्य: चंगेज़ ख़ान और मंगोल साम्राज्य
  // =========================================================================
  {
    id: 'mongol-q9',
    sourceCode: 'khhs105',
    sourceTitle: 'Class 11 History: Nomadic Empires (khhs105)',
    classNumber: 11,
    questionNo: 9,
    questionType: 'MCQ',
    questionText: 'What was the original childhood name of Genghis Khan, and in which year was he proclaimed the "Oceanic Khan" (Universal Ruler) at the Quriltai of Mongol chieftains?',
    questionTextHinglish: 'Chinggis Khan (चंगेज़ ख़ान) ke bachpan ka asli naam kya tha, aur use kis saal sardaron ki sabha (Quriltai) mein "Universal Ruler / Genghis Khan" ki upadhi di gayi?',
    options: [
      'Temüjin (तेमुजिन), in 1206 CE',
      'Yesügei (येसूगेई), in 1162 CE',
      'Batu (बातू), in 1227 CE',
      'Kublai (कुबलई), in 1260 CE'
    ],
    optionsHinglish: [
      'Temüjin (तेमुजिन), saal 1206 CE mein (Quriltai sabha mein)',
      'Yesügei (Yeh unke pita ka naam tha)',
      'Batu (Yeh Jochi ka beta aur Golden Horde founder tha)',
      'Kublai (Yeh unka pota tha jisne Yuan dynasty banayi)'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Class 11 History Theme 5 (khhs105), Page 106-107',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Genghis Khan ka janam lagbhag 1162 CE mein Onon nadi ke paas hua tha aur bachpan ka naam **Temüjin** tha. 1206 CE mein unhone saari steppe tribes (Tatars, Kereits, Merkits, Naimans) ko unite karke **Quriltai** (assembly of chieftains) mein "Genghis Khan" (Oceanic / Universal Ruler) ki padvi li.',
    keyConcept: 'Temüjin -> Proclaimed Genghis Khan at Quriltai in 1206 CE',
    tags: ['Genghis Khan', 'Temujin', 'Quriltai', 'Mongol Empire']
  },
  {
    id: 'mongol-q10',
    sourceCode: 'khhs105',
    sourceTitle: 'Class 11 History: Nomadic Empires (khhs105)',
    classNumber: 11,
    questionNo: 10,
    questionType: 'MCQ',
    questionText: 'Genghis Khan reorganized the nomadic Mongol army into strict decimal units to break old clan loyalties. What was the largest military unit comprising 10,000 soldiers called?',
    questionTextHinglish: 'Chinggis Khan ne purani kabilebazi ko khatam karke sena ko decimal system (10, 100, 1000, 10000) mein baanta. 10,000 sainikon ki sabse badi military unit ko kya kaha jata tha?',
    options: [
      'Ulus (उलुस)',
      'Tuman (तुमन)',
      'Keshik (केशिक)',
      'Noyan (नोयान)'
    ],
    optionsHinglish: [
      'Ulus (उलुस - Yeh beto ko di gayi territory/appanage thi)',
      'Tuman (तुमन - 10,000 sainikon ki unit)',
      'Keshik (केशिक - Genghis Khan ki personal bodyguard unit)',
      'Noyan (नोयान - Sena ke commander/aristocrats)'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 11 History Theme 5 (khhs105), Page 111-112',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Mongol sena decimal system par thi: 10 (Arban) -> 100 (Jagun) -> 1000 (Mingghan) -> 10,000 (Tuman). Ek **Tuman** 10,000 sainikon ka dal hota tha jisme alag-alag tribes ke log hote the taaki kabile ki purani vafadari khatam ho sake.',
    keyConcept: 'Decimal Army Organization: 10,000 warriors = 1 Tuman; Imperial Guard = Keshik',
    tags: ['Tuman', 'Mongol Military', 'Decimal System']
  },
  {
    id: 'mongol-q11',
    sourceCode: 'khhs105',
    sourceTitle: 'Class 11 History: Nomadic Empires (khhs105)',
    classNumber: 11,
    questionNo: 11,
    questionType: 'MCQ',
    questionText: 'What was the famous rapid courier and postal communication system devised by Genghis Khan that connected the vast Eurasian empire?',
    questionTextHinglish: 'Chinggis Khan dwara develop kiya gaya woh famous rapid postal network (डाक संचार व्यवस्था) kaunsa tha jisme ghode har station par badal kar tez sandesh bheje jaate the?',
    options: [
      'Yam / Örtöö (याम प्रणाली)',
      'Paiza (पैज़ा)',
      'Quriltai (कुरिलताई)',
      'Qubchur (कुबचुर)'
    ],
    optionsHinglish: [
      'Yam / Örtöö (याम - Fast courier relay stations)',
      'Paiza (पैज़ा - Safe travel passport badge)',
      'Quriltai (सैनिक सभा)',
      'Qubchur (पशुओं पर लगने वाला टैक्स)'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Class 11 History Theme 5 (khhs105), Page 113-114',
    difficulty: 'Easy',
    detailedSolutionHinglish: '**Yam** (Courier system): Isme poore empire mein regular distances par outpost stations the jahan taze ghode aur khana rehta tha. Sandesh-vahak bina ruke hazaaron mile door tak taaza khabarein pahunchate the. Isko chalane ke liye charvahe **Qubchur** tax (apne pashuon ka 1/10th hissa) dete the.',
    keyConcept: 'Yam = Mongol Rapid Courier System; Paiza = Passport for VIP Couriers',
    tags: ['Yam', 'Postal Network', 'Courier System']
  },
  {
    id: 'mongol-q12',
    sourceCode: 'khhs105',
    sourceTitle: 'Class 11 History: Nomadic Empires (khhs105)',
    classNumber: 11,
    questionNo: 12,
    questionType: 'MCQ',
    questionText: 'What was the legal code of laws, customs, and imperial decrees compiled during the reign of Genghis Khan called?',
    questionTextHinglish: 'Chinggis Khan ke samay compilar ki gayi kanooni sanhita (Code of Law) aur aagyaon ko kya kaha jata hai?',
    options: [
      'Sharia (शरिया)',
      'Yasa / Yasaq (यासा / यासाक)',
      'Zend Avesta (ज़ेंद अवेस्ता)',
      'Hammam Code (हम्माम कोड)'
    ],
    optionsHinglish: [
      'Sharia (इस्लामी कानून)',
      'Yasa / Yasaq (यासा - Mongol legal code and decree)',
      'Zend Avesta (पारसी धर्मग्रंथ)',
      'Hammam Code'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 11 History Theme 5 (khhs105), Page 116-117',
    difficulty: 'Medium',
    detailedSolutionHinglish: '**Yasa** (Yasaq) Chinggis Khan dwara banayi gayi aagyaon aur kanoonon ka sangrah tha. Isme sena ke niyam, shikaar ke kanoon, postal communication, chori aur gaddari ki saza, aur dharmik sahishnuta (religious tolerance) ke rules shamil the.',
    keyConcept: 'Yasa = Imperial Legal Code and Customary Decrees of Genghis Khan',
    tags: ['Yasa', 'Legal Code', 'Genghis Khan']
  },
  {
    id: 'mongol-q13',
    sourceCode: 'khhs105',
    sourceTitle: 'Class 11 History: Nomadic Empires (khhs105)',
    classNumber: 11,
    questionNo: 13,
    questionType: 'MCQ',
    questionText: 'Which grandson of Genghis Khan established the Yuan Dynasty in China, moved the imperial capital to Khanbaliq (modern-day Beijing), and hosted the European traveler Marco Polo?',
    questionTextHinglish: 'Chinggis Khan ke kis pote ne China mein Yuan Dynasty sthapit ki, rajdhani Khanbaliq (Beijing) banayi aur Italian traveler Marco Polo ko apne darbar mein aashray diya?',
    options: [
      'Hulagu Khan (हलाकू ख़ान)',
      'Batu Khan (बातू ख़ान)',
      'Kublai Khan (कुबलई ख़ान)',
      'Möngke Khan (मोंगके ख़ान)'
    ],
    optionsHinglish: [
      'Hulagu Khan (Unhone 1258 mein Baghdad par kabza kiya aur Ilkhanate banaya)',
      'Batu Khan (Unhone Russia par raj kiya aur Golden Horde banaya)',
      'Kublai Khan (कुबलई ख़ान - China ke Yuan samrat aur Beijing sthapak)',
      'Möngke Khan (Great Khan 1251-1259)'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Class 11 History Theme 5 (khhs105), Page 114-115',
    difficulty: 'Medium',
    detailedSolutionHinglish: '**Kublai Khan** (Tolui ka beta) ne China par poori tarah vijay prapt karke 1271 mein **Yuan Dynasty** sthapit ki aur Daidu/Khanbaliq (aaj ka Beijing) ko rajdhani banaya. Venice ke yatri Marco Polo lagbhag 17 saal unke darbar mein rahe the.',
    keyConcept: 'Kublai Khan = Founder of Yuan Dynasty in China; Capital at Khanbaliq (Beijing)',
    tags: ['Kublai Khan', 'Yuan Dynasty', 'Marco Polo', 'China']
  },
  {
    id: 'mongol-q14',
    sourceCode: 'khhs105',
    sourceTitle: 'Class 11 History: Nomadic Empires (khhs105)',
    classNumber: 11,
    questionNo: 14,
    questionType: 'MCQ',
    questionText: 'What was the period of relative peace, commercial prosperity, and cross-continental Silk Route security established across Eurasia under Mongol rule known as?',
    questionTextHinglish: '13veen aur 14veen sadi mein Mongol samrajya ke dauran Eurasia mein Silk Route suraksha aur trade-peace ke daur ko itihaaskar kya kehte hain?',
    options: [
      'Pax Romana (पैक्स रोमाना)',
      'Pax Mongolica (पैक्स मंगोलिका)',
      'Pax Britannica (पैक्स ब्रिटानिका)',
      'Pax Sinica (पैक्स सिनिका)'
    ],
    optionsHinglish: [
      'Pax Romana (Roman shanti kal)',
      'Pax Mongolica (पैक्स मंगोलिका - Mongol Shanti aur Trade daur)',
      'Pax Britannica (British daur)',
      'Pax Sinica (Chinese Han daur)'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 11 History Theme 5 (khhs105), Page 114',
    difficulty: 'Easy',
    detailedSolutionHinglish: '**Pax Mongolica** (Mongol Peace): Mongol vijay ke baad Europe se lekar China tak ek hi shasan ke tahat Silk Route par lootmar band ho gayi. Isse trans-continental trade, gunpowder, compass, printing aur medicine ka aadaan-pradaan tezi se hua.',
    keyConcept: 'Pax Mongolica = Silk Route Security & Trans-Eurasian Commercial Integration',
    tags: ['Pax Mongolica', 'Silk Route', 'Eurasian Trade']
  },
  {
    id: 'mongol-q15',
    sourceCode: 'khhs105',
    sourceTitle: 'Class 11 History: Nomadic Empires (khhs105)',
    classNumber: 11,
    questionNo: 15,
    questionType: 'Assertion-Reason',
    questionText: 'Assertion (A): Genghis Khan respected all religions (Buddhism, Christianity, Islam, Shamanism) and exempt religious leaders from taxation.\nReason (R): As nomadic rulers ruling diverse multi-ethnic subjects across China, Persia, and Russia, the Mongols maintained pragmatic religious tolerance to ensure political stability.',
    questionTextHinglish: 'Assertion (A): Chinggis Khan sabhi dharmo (Buddhism, Islam, Christianity, Shamanism) ka aadar karte the aur unke sant-purohiton ko tax-free rakhte the.\nReason (R): Itne bade vishal samrajya mein shanti aur vafadari banaye rakhne ke liye Mongols ne pragmatic religious tolerance ki policy apnayi.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    optionsHinglish: [
      'Dono (A) aur (R) sahi hain aur (R) bilkul sahi explanation hai (A) ka',
      'Dono sahi hain par explanation galat hai',
      '(A) sahi hai lekin (R) galat hai',
      '(A) galat hai lekin (R) sahi hai'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Class 11 History Theme 5 (khhs105), Page 115-116',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Dono statements 100% correct hain. Steppe nomads Shamanism (Tengri / Eternal Blue Sky) ko maante the, par unhone kisi praja par apna dharm nahi thopa. Muslim qazis, Buddhist lamas aur Christian priests sabhi ko aadar aur tax exemptions diye.',
    keyConcept: 'Mongol Religious Pluralism and Tolerance',
    tags: ['Religious Tolerance', 'Assertion-Reason', 'Mongol Policy']
  },

  // =========================================================================
  // SET 3: SANT KABIR DAS JI (Life, Verses, Philosophy & Anthologies)
  // Class 12 History Theme 6 & Classical Bhakti Literature
  // =========================================================================
  {
    id: 'kabir-q1',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 1,
    questionType: 'MCQ',
    questionText: 'Which of the following three major recensions/anthologies preserve the poetic compositions of Kabir?',
    questionTextHinglish: 'Kabir ke dohe aur pado ko mukhya roop se kin 3 sankalano (anthologies) mein surakshit rakha gaya hai?',
    options: [
      'Nalayira Divyaprabandham, Tevaram, and Bijak',
      'Kabir Bijak, Kabir Granthavali, and Adi Granth (Guru Granth Sahib)',
      'Ramcharitmanas, Panchvani, and Sur Sagar',
      'Silsilat al-Arifin, Fawaid al-Fuad, and Bijak'
    ],
    optionsHinglish: [
      'Nalayira Divyaprabandham, Tevaram, and Bijak',
      'Kabir Bijak (Varanasi), Kabir Granthavali (Rajasthan), and Adi Granth (Punjab)',
      'Ramcharitmanas, Panchvani, and Sur Sagar',
      'Silsilat al-Arifin, Fawaid al-Fuad, and Bijak'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Kabir\'s poems have survived in three distinct compilations:\n1. **Kabir Bijak**: Preserved by the Kabirpanth in Varanasi and Uttar Pradesh.\n2. **Kabir Granthavali**: Associated with the Dadupanth in Rajasthan.\n3. **Adi Granth (Guru Granth Sahib)**: Compiled in 1604 by Guru Arjan Dev Ji in Punjab.',
    keyConcept: 'Three Major Compilations: Kabir Bijak, Kabir Granthavali, and Adi Granth',
    tags: ['Kabir', 'Bijak', 'Granthavali', 'Adi Granth']
  },
  {
    id: 'kabir-q2',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 2,
    questionType: 'MCQ',
    questionText: 'Kabir\'s poetry in the "Bijak" is broadly categorized into three distinct compositional forms. What are they?',
    questionTextHinglish: 'Kabir Bijak ko kin 3 mukhya kavyaroopon (compositional forms) mein vibhajit kiya gaya hai?',
    options: [
      'Doha, Chhand, and Soratha',
      'Sakhi, Sabda (Pada), and Ramaini',
      'Vachana, Abhanga, and Kirtan',
      'Ghazal, Masnavi, and Rubai'
    ],
    optionsHinglish: [
      'Doha, Chhand, and Soratha',
      'Sakhi (Witness couplets), Sabda (Lyric songs/Padas), and Ramaini (Chaupai verses)',
      'Vachana, Abhanga, and Kirtan',
      'Ghazal, Masnavi, and Rubai'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161-162',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'The *Bijak* contains three distinct literary forms:\n- **Sakhi** (from Sanskrit *Sakshi* meaning \'witness\'): Two-line aphoristic rhymed couplets (*dohas*).\n- **Sabda** (or Pada): Lyrical devotional songs set to classical ragas for congregational singing.\n- **Ramaini**: Metaphysical and cosmological poems written in *chaupai* meter.',
    keyConcept: 'Poetic Forms in Bijak: Sakhi, Sabda, and Ramaini',
    tags: ['Bijak', 'Sakhi', 'Sabda', 'Ramaini']
  },
  {
    id: 'kabir-q3',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 3,
    questionType: 'MCQ',
    questionText: 'Kabir frequently composed paradoxical verses known as "Ulatbansi". What is the defining nature and purpose of Ulatbansi poetry?',
    questionTextHinglish: 'Kabir dwara rachit "Ulatbansi" (उलटबांसी) kavitaon ka mukhya lakshan aur udeshya kya hai?',
    options: [
      'Devotional hymns describing the romantic sorrow of separation (Viraha)',
      'Inverted/upside-down mystical paradoxes designed to reveal the ineffable nature of ultimate reality',
      'Royal panegyrics written in praise of regional rulers in reverse chronological order',
      'Esoteric astrology formulas recited during eclipses'
    ],
    optionsHinglish: [
      'Viraha ke dukh bhare geet',
      'Inverted mystical paradoxes (Ulatbansi) jo buddhi ko jhankjhor kar param satya ka anubhav karati hain',
      'Rajaon ki prashasti geet',
      'Jyotish sutra'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Medium',
    detailedSolutionHinglish: '*Ulatbansi* (literally "upside-down sayings") are mystical verses reflecting the Nath yogic influence. Examples: *"The lotus blossoms without water or root,"* *"The ocean is caught in a drop,"* and *"The cow is grazing upon the tiger."* They show that ultimate truth cannot be captured in conventional everyday language.',
    keyConcept: 'Ulatbansi = Inverted Mystical Paradoxes reflecting Nath Yogic Traditions',
    tags: ['Ulatbansi', 'Paradox', 'Mysticism', 'Nath']
  },
  {
    id: 'kabir-q4',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 4,
    questionType: 'MCQ',
    questionText: 'How did Kabir define and invoke the name "Rama" in his Nirguna Bhakti verses?',
    questionTextHinglish: 'Kabir ne apne pado mein "Rama" (राम) shabd ka prayog kis roop mein kiya?',
    options: [
      'As the historical prince of Ayodhya and an anthropomorphic avatar of Lord Vishnu',
      'As the formless, omnipresent, non-dual supreme reality (Nirguna Brahman) within every heart',
      'As a tribal solar deity worshipped in North India',
      'As an idol consecrated in Vedic temples'
    ],
    optionsHinglish: [
      'Ayodhya ke rajkumar aur Vishnu ke avatar ke roop mein',
      'Formless, all-pervading supreme divine (Nirguna Brahman) jo har hriday mein virajman hain',
      'Surya devta ke roop mein',
      'Mandir ki murti ke roop mein'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'For Kabir, *Rama* was not the son of Dasharatha or a physical avatar (Saguna). Kabir\'s *Rama* is **Nirguna** (attributeless), omnipresent, transcendent, and resides within the self. Kabir says: *"The musk deer wanders searching the forest, while fragrance is inside its own navel."*',
    keyConcept: 'Kabir\'s Rama = Formless Nirguna Brahman / Universal Divine Spirit',
    tags: ['Nirguna', 'Rama', 'Brahman', 'Philosophy']
  },
  {
    id: 'kabir-q5',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 5,
    questionType: 'MCQ',
    questionText: 'Kabir drew upon diverse religious traditions to describe the Divine. Which of the following correctly pairs the terms used by Kabir with their theological backgrounds?\n1. Allah, Khuda, Hazrat, Pir → Islamic Sufi Tradition\n2. Brahman, Atman, Maya → Vedantic Advaita Tradition\n3. Shabda, Shunya, Anahata → Nath Yogic Tradition',
    questionTextHinglish: 'Kabir ne Ishwar ke varnan ke liye kin shabdon ka prayog kiya?\n1. Allah, Khuda, Pir → Islamic Sufi\n2. Brahman, Atman, Maya → Vedantic Advaita\n3. Shabda, Shunya, Anahata → Nath Yogic Tradition',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      '1, 2, and 3 are all correctly matched'
    ],
    optionsHinglish: [
      'Keval 1 aur 2 sahi hain',
      'Keval 2 aur 3 sahi hain',
      'Keval 1 aur 3 sahi hain',
      '1, 2 aur 3 teeno bilkul sahi matched hain'
    ],
    correctIndex: 3, // D
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161-162',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Kabir drew from all available traditions to demonstrate the oneness of God: Vedantic (*Brahman, Advaita*), Islamic (*Allah, Khuda, Hazrat*), and Yogic (*Shunya, Shabda, Kundalini*). He rejected sectarian divisions.',
    keyConcept: 'Syncretic and Multi-Tradition Vocabulary of Sant Kabir',
    tags: ['Syncretism', 'Advaita', 'Sufism', 'Nath Yoga']
  },
  {
    id: 'kabir-q6',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 6,
    questionType: 'MCQ',
    questionText: 'According to historical consensus and hagiographical records, what was Kabir\'s socio-economic and occupational background in Varanasi?',
    questionTextHinglish: 'Itihaas aur parampara ke anusar, Kabir Varanasi mein kis samajik varg aur vyavasay se jude the?',
    options: [
      'A wealthy Kshatriya merchant from Mathura',
      'A member of the Julaha (Muslim weaver) artisanal community of Varanasi',
      'A temple priest (Pujari) serving at Kashi Vishwanath',
      'A court poet of the Delhi Sultanate'
    ],
    optionsHinglish: [
      'Mathura ke vyapari',
      'Julaha (Muslim weaver) bunkaar parivar se sambandhit',
      'Mandir ke pujari',
      'Sultanate ke darbari kavi'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 160-161',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Kabir belonged to the *Julaha* community of weavers in Varanasi. In the 14th–15th centuries, many indigenous weaving communities converted to Islam while retaining their traditional artisanal craft. Kabir frequently used weaving metaphors in his poetry (e.g. warp, weft, loom, and *Jhini jhini bini chadariya*).',
    keyConcept: 'Kabir\'s Background: Julaha (Weaver) Artisan Community of Varanasi',
    tags: ['Julaha', 'Weaver', 'Varanasi', 'Social History']
  },
  {
    id: 'kabir-q7',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 7,
    questionType: 'MCQ',
    questionText: 'According to popular hagiographical tradition, who was the revered Vaishnava saint of Varanasi who initiated Kabir as his disciple on the steps of the Panchganga Ghat?',
    questionTextHinglish: 'Jan-shruti aur hagiography ke anusar, Kabir ke guru kaun the jinhone Panchganga Ghat par unhe diksha di?',
    options: [
      'Guru Nanak Dev Ji',
      'Swami Ramananda',
      'Chaitanya Mahaprabhu',
      'Vallabhacharya'
    ],
    optionsHinglish: [
      'Guru Nanak Dev Ji',
      'Swami Ramananda (स्वामी रामानंद)',
      'Chaitanya Mahaprabhu',
      'Vallabhacharya'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Tradition recounts that Kabir lay on the steps of Panchganga Ghat in Varanasi. Swami Ramananda accidentally stepped on him in the dark and exclaimed *"Ram! Ram!"*. Kabir took this as his formal initiation (*mantra-diksha*). Ramananda is considered Kabir\'s spiritual master in Vaishnava traditions.',
    keyConcept: 'Swami Ramananda as Guru of Kabir (Panchganga Ghat initiation)',
    tags: ['Ramananda', 'Guru', 'Panchganga Ghat', 'Initiation']
  },
  {
    id: 'kabir-q8',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 8,
    questionType: 'Assertion-Reason',
    questionText: 'Assertion (A): Kabir vehemently denounced religious externalism such as idol worship, holy river ablutions, circumcision, pilgrimages (Tirtha & Hajj), and caste distinctions.\nReason (R): Kabir believed that true liberation (Moksha) is achieved only through inner purity, moral uprightness, love (Prema), and direct meditation on the Divine Name (Nama Simran).',
    questionTextHinglish: 'Assertion (A): Kabir ne murti puja, tirth-yatra, chhuachhut, aur baahya karmakandon ka tivra virodh kiya.\nReason (R): Kabir ka manna tha ki mukti kewal aantarik pavitrata, prem, aur sachhe man se Ishwar ke smaran (Nama Simran) se milti hai.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
      '(A) is true but (R) is false',
      '(A) is false but (R) is true'
    ],
    optionsHinglish: [
      'Dono (A) aur (R) sahi hain aur (R) sahi spashtikaran hai (A) ka',
      'Dono sahi hain lekin explanation sahi nahi hai',
      '(A) sahi hai par (R) galat hai',
      '(A) galat hai par (R) sahi hai'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161-162',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Both statements are completely true. Kabir challenged both Hindu Brahmins and Muslim Qazis/Mullahs for focusing on outward rituals instead of inner devotion. He famously stated: *"Pahan pooje hari mile, to main pooju pahar"* (If worshipping a stone brings God, I will worship a mountain).',
    keyConcept: 'Rejection of Ritualism and Orthodoxy; Focus on Inward Bhakti (Nama Simran)',
    tags: ['Assertion-Reason', 'Critique of Ritualism', 'Nirguna Bhakti']
  },
  {
    id: 'kabir-q9',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 9,
    questionType: 'MCQ',
    questionText: 'What is the linguistic style and dialect used by Kabir in his compositions known as?',
    questionTextHinglish: 'Kabir ki kavyabhasha ko saahitya mein kis naam se jana jata hai?',
    options: [
      'Vedic Sanskrit in classical meter',
      'Courtly Persian in Nasta\'liq script',
      'Sant Bhasha / Sadhukkari (a vernacular blend of Khari Boli, Bhojpuri, Braj, Awadhi, and Rajasthani)',
      'Old classical Tamil in Vatteluttu script'
    ],
    optionsHinglish: [
      'Vedic Sanskrit',
      'Courtly Persian',
      'Sant Bhasha / Sadhukkari (Panchmel Khichdi bhasha jisme Khari Boli, Bhojpuri, Braj, Rajasthani shamil hain)',
      'Old Classical Tamil'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Kabir composed in **Sant Bhasha** or **Sadhukkari** (the dialect of wandering holy mendicants). It was a vibrant vernacular amalgam of Khari Boli, Bhojpuri, Braj Bhasha, Awadhi, Rajasthani, and loanwords from Persian and Arabic, allowing common masses to understand easily.',
    keyConcept: 'Sant Bhasha / Sadhukkari = Spoken Vernacular of the Common Masses',
    tags: ['Sant Bhasha', 'Sadhukkari', 'Linguistics', 'Khari Boli']
  },
  {
    id: 'kabir-q10',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 10,
    questionType: 'MCQ',
    questionText: 'Why did Kabir deliberately choose to travel to Maghar (near Gorakhpur) in his final days to breathe his last?',
    questionTextHinglish: 'Kabir ne apne antim samay mein Maghar jaakar sharir tyagne ka nirnay kyu liya?',
    options: [
      'Maghar was the capital of a wealthy patron ruler who invited him',
      'To challenge the orthodox superstition that dying in Kashi guarantees heaven while dying in Maghar leads to rebirth as a donkey',
      'To escape religious persecution from the Sultan of Delhi',
      'Maghar housed the grandest library of the Kabirpanth'
    ],
    optionsHinglish: [
      'Raja ke nimantran par',
      'Kashi mein marne se swarg aur Maghar mein marne se gadha banne ke andhavishwas ko todne ke liye',
      'Sultan ke darr se',
      'Library dekhne ke liye'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Orthodox belief held that dying in Kashi (Varanasi) granted instant liberation (*Mukti*), whereas dying in Maghar resulted in a wretched rebirth. To demolish this spatial superstition, Kabir moved to Maghar in his old age, asserting that salvation depends entirely on inner devotion, not geography.',
    keyConcept: 'Death at Maghar: Defiance of Orthodoxy and Superstition',
    tags: ['Maghar', 'Varanasi', 'Superstition', 'Salvation']
  },
  {
    id: 'kabir-q11',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 11,
    questionType: 'MCQ',
    questionText: 'According to famous hagiographical legend, what miraculous event occurred when Kabir\'s Hindu and Muslim followers quarreled over his funeral rites at Maghar?',
    questionTextHinglish: 'Maghar mein Kabir ke deh-tyag ke baad jab Hindu aur Muslim shishyon mein daah-sanskar aur dafnane ko lekar vivad hua, tab kya ghatna ghati?',
    options: [
      'An earthquake opened the earth and swallowed the mortal remains',
      'Lifting the shroud covering his body revealed a heap of fragrant flowers, which they divided equally to cremate and bury',
      'His body turned into a marble idol that began chanting',
      'A royal decree mandated a shared temple-mosque structure'
    ],
    optionsHinglish: [
      'Bhookamp aa gaya',
      'Chadar uthane par keval taaze phool mile, jinhe dono pakshon ne aadha-aadha baant liya',
      'Sangmarmar ki murti ban gayi',
      'Royal decree aayi'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'Legend recounts that when disciples lifted the shroud (*chadar*), they found only flowers. Half were cremated by Hindu followers according to Vedic rites, and half were buried by Muslim followers in a *mazar*. Today at Maghar, the Samadhi and Mazar stand side-by-side.',
    keyConcept: 'Legend of Flowers at Maghar: Transcendence of Communal Boundaries',
    tags: ['Legend', 'Maghar', 'Samadhi', 'Mazar']
  },
  {
    id: 'kabir-q12',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 12,
    questionType: 'Match-the-Following',
    questionText: 'Match the famous couplet/metaphor of Kabir in Column I with its spiritual message in Column II:\n(p) "Pothi padhi padhi jag mua, pandit bhaya na koye..." → 1. Transforming inner mind over rotating external rosary beads\n(q) "Mala pherat jug bhaya, phira na man ka pher..." → 2. Supremacy of Love (Prema) over pedantic bookish learning\n(r) "Chalti chakki dekh kar, diya Kabira roye..." → 3. Duality of life and death crushing beings who lose connection with the center\n(s) "Bura jo dekhan main chala, bura na milya koye..." → 4. True self-introspection before criticizing others',
    questionTextHinglish: 'Kabir ke prasiddh dohon ko unke bhed/arth ke sath match karein:\n(p) Pothi padhi padhi jag mua...\n(q) Mala pherat jug bhaya...\n(r) Chalti chakki dekh kar...\n(s) Bura jo dekhan main chala...',
    options: [
      'p-2, q-1, r-3, s-4',
      'p-1, q-2, r-4, s-3',
      'p-2, q-3, r-1, s-4',
      'p-4, q-1, r-2, s-3'
    ],
    optionsHinglish: [
      'p-2, q-1, r-3, s-4',
      'p-1, q-2, r-4, s-3',
      'p-2, q-3, r-1, s-4',
      'p-4, q-1, r-2, s-3'
    ],
    correctIndex: 0, // A
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161-162',
    difficulty: 'Hard',
    detailedSolutionHinglish: '- **p-2**: "Dhai aakhar prem ka, padhe so pandit hoye" (Love exceeds dry scripture).\n- **q-1**: "Kar ka manka daari de, man ka manka pher" (Rotate inner consciousness, not wooden beads).\n- **r-3**: Two millstones grinding grain symbolize birth & death; only those attached to the central pivot (God) survive uncrushed.\n- **s-4**: "Jo dil khoja aapna, mujhse bura na koye" (Self-examination).',
    keyConcept: 'Core Moral and Spiritual Verses of Sant Kabir',
    tags: ['Couplets', 'Dohas', 'Match-the-Following', 'Philosophy']
  },
  {
    id: 'kabir-q13',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 13,
    questionType: 'MCQ',
    questionText: 'How does Kabir personify and critique "Maya" (Illusion / Worldly Delusion) in his celebrated songs?',
    questionTextHinglish: 'Kabir ne apne pado mein "Maya" (माया) ka chitran kis roop mein kiya hai?',
    options: [
      'As an all-powerful benign goddess to be worshipped with temple rituals',
      'As a great deceitful swindler ("Maya maha thagini hum jaani") that ensnares humans in false pride, greed, and duality',
      'As an unalterable cosmic matter that cannot be overcome by devotion',
      'As a royal sovereign governing worldly empires'
    ],
    optionsHinglish: [
      'Pujne yogya devi',
      '"Maya maha thagini hum jaani" - ek chalak moh-jaal jo manushya ko lobh, ahamkar aur jhoothe bhedbhav mein phansaati hai',
      'Ek aparivartaniya tattva',
      'Raja ka pratik'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 162',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'Kabir famously composed: *"Maya maha thagini hum jaani, tirgun phaans liye kar dole, bole madhuri baani"* (Maya is the great deceitful swindler who holds the snare of the three gunas). He warns that attachment to gold, power, and sectarian identity keeps the soul alienated from truth.',
    keyConcept: 'Concept of Maya as Maha Thagini (Cosmic Delusion)',
    tags: ['Maya', 'Thagini', 'Illusion', 'Philosophy']
  },
  {
    id: 'kabir-q14',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 14,
    questionType: 'MCQ',
    questionText: 'Who was responsible for incorporating Kabir\'s devotional hymns into the primary Sikh scripture, the Adi Granth, in 1604 CE?',
    questionTextHinglish: '1604 CE mein Amritsar mein Adi Granth (Guru Granth Sahib) ke sankalan ke samay Kabir ke pado ko kisne shaamil kiya?',
    options: [
      'Guru Nanak Dev Ji',
      'Guru Angad Dev Ji',
      'Guru Arjan Dev Ji (Fifth Sikh Guru)',
      'Guru Gobind Singh Ji'
    ],
    optionsHinglish: [
      'Guru Nanak Dev Ji',
      'Guru Angad Dev Ji',
      'Guru Arjan Dev Ji (5th Sikh Guru)',
      'Guru Gobind Singh Ji'
    ],
    correctIndex: 2, // C
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Easy',
    detailedSolutionHinglish: 'In 1604 CE, the 5th Sikh Guru, **Guru Arjan Dev Ji**, compiled the *Adi Granth* at Harmandir Sahib (Amritsar). He canonized compositions from Bhagats whose spiritual message aligned with the adoration of One Formless God (*Ik Onkar*), making Kabir\'s contributions the largest among non-Sikh Bhagats.',
    keyConcept: 'Guru Arjan Dev Ji and the Adi Granth Canonization (1604 CE)',
    tags: ['Adi Granth', 'Guru Arjan Dev', 'Sikhism', 'Bhagat Bani']
  },
  {
    id: 'kabir-q15',
    sourceCode: 'kabir',
    sourceTitle: 'Sant Kabir Das Ji: Life, Poetry & Philosophy',
    classNumber: 12,
    questionNo: 15,
    questionType: 'MCQ',
    questionText: 'In which regional devotional tradition was the "Panchvani" anthology compiled, anthologizing Kabir\'s verses alongside four other prominent Nirguna saints (Dadu Dayal, Namdev, Raidas, and Hardas)?',
    questionTextHinglish: 'Rajasthan ke kis panth dwara "Panchvani" ka sankalan kiya gaya jisme Kabir ke sath 4 anya Nirguna santon ke pad shamil hain?',
    options: [
      'The Pushtimarg founded by Vallabhacharya',
      'The Dadupanth of Rajasthan',
      'The Gaudiya Vaishnava Sampradaya of Bengal',
      'The Mahanubhava Panth of Maharashtra'
    ],
    optionsHinglish: [
      'Pushtimarg (Vallabhacharya)',
      'Dadupanth of Rajasthan (दादूपंथ)',
      'Gaudiya Vaishnava Sampradaya',
      'Mahanubhava Panth'
    ],
    correctIndex: 1, // B
    ncertReference: 'NCERT Class 12 History Theme 6 (lhhs202), Page 161',
    difficulty: 'Medium',
    detailedSolutionHinglish: 'The *Panchvani* ("Words of the Five") is a manuscript anthology preserved by the **Dadupanth** in Rajasthan. It compiles hymns of five revered Nirguna saints: **Dadu Dayal, Kabir, Namdev, Raidas (Ravidas), and Hardas**.',
    keyConcept: 'Panchvani of the Dadupanth (Rajasthan)',
    tags: ['Panchvani', 'Dadupanth', 'Rajasthan', 'Anthology']
  }
];
