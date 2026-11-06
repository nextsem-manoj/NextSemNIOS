import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Award, 
  RotateCcw, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Chapter } from '../../data/ncertData';

interface HindiGrammarMasteryViewProps {
  chapter?: Chapter;
  onBack: () => void;
  onNavigateChapter?: (chapterNumber: number) => void;
}

interface SamasItem {
  word: string;
  vigrah: string;
  bhed: string;
  purvaPad: string;
  uttarPad: string;
  pradhanta: string;
  explanation: string;
  categoryBadge: string;
}

const SAMAS_DATABASE: Record<string, SamasItem> = {
  'नीलकंठ': {
    word: 'नीलकंठ',
    vigrah: 'नीला है कंठ जिसका अर्थात् शिव',
    bhed: 'बहुव्रीहि समास',
    purvaPad: 'नील (विशेषण)',
    uttarPad: 'कंठ (संज्ञा)',
    pradhanta: 'अन्य पद प्रधान (भगवान शिव)',
    explanation: 'दोनों पद मिलकर तीसरे विशेष अर्थ (भगवान शिव) की ओर संकेत कर रहे हैं। यदि विग्रह "नीला है जो कंठ" किया जाए, तो यह कर्मधारय समास बनेगा।',
    categoryBadge: 'बहुव्रीहि समास'
  },
  'यथाशक्ति': {
    word: 'यथाशक्ति',
    vigrah: 'शक्ति के अनुसार',
    bhed: 'अव्ययीभाव समास',
    purvaPad: 'यथा (अव्यय/उपसर्ग)',
    uttarPad: 'शक्ति (संज्ञा)',
    pradhanta: 'पूर्व पद प्रधान',
    explanation: 'पहला पद \'यथा\' एक अव्यय है और पूरा समस्त पद भी क्रियाविशेषण अव्यय की भाँति कार्य करता है।',
    categoryBadge: 'अव्ययीभाव समास'
  },
  'राजपुत्र': {
    word: 'राजपुत्र',
    vigrah: 'राजा का पुत्र',
    bhed: 'तत्पुरुष समास (संबंध तत्पुरुष)',
    purvaPad: 'राज (राजा)',
    uttarPad: 'पुत्र',
    pradhanta: 'उत्तर पद प्रधान',
    explanation: 'विग्रह करने पर संबंध कारक की विभक्ति \'का\' निकलती है, जिसका समस्त पद में लोप हो गया है।',
    categoryBadge: 'तत्पुरुष समास'
  },
  'चौराहा': {
    word: 'चौराहा',
    vigrah: 'चार राहों (रास्तों) का समाहार/समूह',
    bhed: 'द्विगु समास',
    purvaPad: 'चौ (चार - संख्यावाचक)',
    uttarPad: 'राहा (मार्ग)',
    pradhanta: 'उत्तर पद प्रधान (समूह बोधक)',
    explanation: 'पहला पद \'चौ\' संख्यावाची विशेषण है और समस्त पद किसी समूह का बोध करा रहा है।',
    categoryBadge: 'द्विगु समास'
  },
  'माता-पिता': {
    word: 'माता-पिता',
    vigrah: 'माता और पिता',
    bhed: 'द्वंद्व समास',
    purvaPad: 'माता',
    uttarPad: 'पिता',
    pradhanta: 'दोनों पद प्रधान (समान महत्त्व)',
    explanation: 'दोनों पद स्वतंत्र और समान महत्त्व के हैं। विग्रह करने पर योजक शब्द \'और\' प्रयुक्त होता है।',
    categoryBadge: 'द्वंद्व समास'
  },
  'पीतांबर': {
    word: 'पीतांबर',
    vigrah: 'पीला है जो अंबर (वस्त्र) / पीला है अंबर जिसका (श्रीकृष्ण)',
    bhed: 'कर्मधारय अथवा बहुव्रीहि समास',
    purvaPad: 'पीत (पीला - विशेषण)',
    uttarPad: 'अंबर (वस्त्र - विशेष्य)',
    pradhanta: 'कर्मधारय में उत्तर पद, बहुव्रीहि में अन्य पद प्रधान',
    explanation: 'विग्रह "पीला है जो अंबर" करने पर कर्मधारय (विशेषण-विशेष्य) तथा "पीले हैं वस्त्र जिसके अर्थात् श्रीकृष्ण" करने पर बहुव्रीहि समास होता है।',
    categoryBadge: 'कर्मधारय / बहुव्रीहि'
  },
  'रोगमुक्त': {
    word: 'रोगमुक्त',
    vigrah: 'रोग से मुक्त',
    bhed: 'तत्पुरुष समास (अपादान तत्पुरुष)',
    purvaPad: 'रोग',
    uttarPad: 'मुक्त',
    pradhanta: 'उत्तर पद प्रधान',
    explanation: 'विग्रह करने पर अलग होने के अर्थ में अपादान कारक की विभक्ति \'से\' आती है।',
    categoryBadge: 'तत्पुरुष समास'
  },
  'दशानन': {
    word: 'दशानन',
    vigrah: 'दस हैं आनन (मुख) जिसके अर्थात् रावण',
    bhed: 'बहुव्रीहि समास',
    purvaPad: 'दश (दस)',
    uttarPad: 'आनन (मुख)',
    pradhanta: 'अन्य पद प्रधान (राक्षसराज रावण)',
    explanation: 'पहला पद संख्यावाची होने पर भी समस्त पद समूह का नहीं, बल्कि तीसरे विशिष्ट व्यक्ति (रावण) का बोध कराता है, अतः बहुव्रीहि समास है।',
    categoryBadge: 'बहुव्रीहि समास'
  },
  'त्रिफला': {
    word: 'त्रिफला',
    vigrah: 'तीन फलों का समाहार/समूह',
    bhed: 'द्विगु समास',
    purvaPad: 'त्रि (तीन - संख्यावाची)',
    uttarPad: 'फल',
    pradhanta: 'उत्तर पद प्रधान (समूह बोधक)',
    explanation: 'पूर्व पद संख्यावाची विशेषण है और समस्त पद तीन दिव्य फलों (हरड़, बहेड़ा, आँवला) के समूह को दर्शाता है।',
    categoryBadge: 'द्विगु समास'
  },
  'देशभक्ति': {
    word: 'देशभक्ति',
    vigrah: 'देश के लिए भक्ति',
    bhed: 'तत्पुरुष समास (संप्रदान तत्पुरुष)',
    purvaPad: 'देश',
    uttarPad: 'भक्ति',
    pradhanta: 'उत्तर पद प्रधान',
    explanation: 'विग्रह करने पर संप्रदान कारक की विभक्ति \'के लिए\' निकलती है।',
    categoryBadge: 'तत्पुरुष समास'
  }
};

const GRAMMAR_MCQS = [
  {
    id: 1,
    question: "'अत्यंत' शब्द में कौन सा उपसर्ग जुड़ा है?",
    options: ['अत', 'अति', 'अत्य', 'आ'],
    correct: 1,
    explanation: "अति + अंत = अत्यंत (यण् संधि के नियम से इ + अ = य्)।"
  },
  {
    id: 2,
    question: "'सामाजिक' शब्द में मूल शब्द और प्रत्यय क्या है?",
    options: ['समाज + इक', 'समाज + क', 'समा + जिक', 'समाजिक + ई'],
    correct: 0,
    explanation: "मूल शब्द 'समाज' तथा प्रत्यय 'इक' है। 'इक' लगने से पहले वर्ण में वृद्धि (अ -> आ) होती है।"
  },
  {
    id: 3,
    question: "'दशानन' में कौन सा समास है?",
    options: ['कर्मधारय', 'बहुव्रीहि', 'तत्पुरुष', 'द्विगु'],
    correct: 1,
    explanation: "दस हैं आनन जिसके अर्थात् रावण। तीसरे पद की प्रधानता के कारण यह बहुव्रीहि समास है।"
  },
  {
    id: 4,
    question: "'यथाशक्ति' शब्द का सही समास विग्रह क्या है?",
    options: ['जैसी शक्ति', 'शक्ति के अनुसार', 'शक्ति और यथा', 'पूरी शक्ति'],
    correct: 1,
    explanation: "यथाशक्ति का विग्रह 'शक्ति के अनुसार' होता है और यह अव्ययीभाव समास है।"
  },
  {
    id: 5,
    question: "'पीतांबर' का विग्रह यदि 'पीला है जो अंबर' किया जाए, तो यह कौन सा समास होगा?",
    options: ['बहुव्रीहि', 'कर्मधारय', 'तत्पुरुष', 'द्वंद्व'],
    correct: 1,
    explanation: "विशेषण 'पीला' और विशेष्य 'अंबर' का संबंध होने के कारण यहाँ कर्मधारय समास है।"
  },
  {
    id: 6,
    question: '"यदि तुम कठिन परिश्रम करोगे तो प्रथम आओगे।" यह किस प्रकार का वाक्य है?',
    options: ['विधानवाचक', 'इच्छावाचक', 'संकेतवाचक', 'संदेहवाचक'],
    correct: 2,
    explanation: "एक क्रिया का होना दूसरी क्रिया की शर्त पर निर्भर करता है, अतः यह संकेतवाचक वाक्य है।"
  },
  {
    id: 7,
    question: '"शायद आज धूप निकले।" यह वाक्य किस श्रेणी में आता है?',
    options: ['संदेहवाचक', 'आज्ञावाचक', 'संकेतवाचक', 'विधानवाचक'],
    correct: 0,
    explanation: "'शायद' शब्द से कार्य के होने में संभावना या अनिर्णय का बोध होता है, अतः संदेहवाचक है।"
  },
  {
    id: 8,
    question: '"भगवान आपका कल्याण करे।" यह वाक्य किस भेद का उदाहरण है?',
    options: ['आज्ञावाचक', 'इच्छावाचक', 'विस्मयादिवाचक', 'विधानवाचक'],
    correct: 1,
    explanation: "आशीर्वाद, मंगलकामना या इच्छा प्रकट करने वाले वाक्य इच्छावाचक कहलाते हैं।"
  },
  {
    id: 9,
    question: '"काली घटा का घमंड घटा" में कौन सा अलंकार है?',
    options: ['अनुप्रास', 'यमक', 'श्लेष', 'उपमा'],
    correct: 1,
    explanation: "'घटा' शब्द दो बार आया है और दोनों बार अर्थ अलग है (काले बादल तथा कम होना), अतः यमक अलंकार है।"
  },
  {
    id: 10,
    question: '"पीपर पात सरिस मन डोला" में वाचक शब्द कौन सा है?',
    options: ['पीपर', 'पात', 'सरिस', 'डोला'],
    correct: 2,
    explanation: "'सरिस' समानता प्रकट करने वाला वाचक शब्द है (उपमा अलंकार)।"
  },
  {
    id: 11,
    question: '"मैया मैं तो चंद्र-खिलौना लैहों" में कौन सा अलंकार है?',
    options: ['उपमा', 'रूपक', 'उत्प्रेक्षा', 'मानवीकरण'],
    correct: 1,
    explanation: "उपमेय (खिलौना) पर उपमान (चंद्रमा) का अभेद आरोप है, अतः रूपक अलंकार है।"
  },
  {
    id: 12,
    question: '"मेघ आए बड़े बन-ठन के सँवर के" में कौन सा अलंकार है?',
    options: ['मानवीकरण', 'अतिशयोक्ति', 'श्लेष', 'यमक'],
    correct: 0,
    explanation: "जड़ प्रकृति (मेघ) पर मानव की तरह सजने-संवरने का आरोप होने से मानवीकरण अलंकार है।"
  },
  {
    id: 13,
    question: '"सिर फट गया उसका वहीं, मानो अरुण रंग का घड़ा हो" में कौन सा अलंकार है?',
    options: ['उपमा', 'रूपक', 'उत्प्रेक्षा', 'अतिशयोक्ति'],
    correct: 2,
    explanation: "'मानो' वाचक शब्द के माध्यम से उपमेय में उपमान की संभावना व्यक्त की गई है (उत्प्रेक्षा अलंकार)।"
  },
  {
    id: 14,
    question: "'त्रिफला' में कौन सा समास है?",
    options: ['द्विगु', 'द्वंद्व', 'कर्मधारय', 'तत्पुरुष'],
    correct: 0,
    explanation: "'त्रि' पूर्व पद संख्यावाची होने के कारण तीन फलों का समाहार द्विगु समास है।"
  },
  {
    id: 15,
    question: "'रोगमुक्त' का समास विग्रह क्या होगा?",
    options: ['रोग और मुक्त', 'रोग से मुक्त', 'रोग का मुक्त', 'रोग में मुक्त'],
    correct: 1,
    explanation: "रोग से मुक्त (अपादान तत्पुरुष समास - अलग होने के अर्थ में 'से' कारक विभक्ति)।"
  },
  {
    id: 16,
    question: "'अनादर' शब्द में कौन सा उपसर्ग प्रयुक्त है?",
    options: ['अन', 'अन्', 'अ', 'अना'],
    correct: 1,
    explanation: "स्वर से आरंभ होने वाले शब्दों में 'अन्' हलंत उपसर्ग लगता है (अन् + आदर = अनादर)।"
  },
  {
    id: 17,
    question: "'लिखावट' में कौन सा प्रत्यय है?",
    options: ['आवट', 'वट', 'ट', 'आठ'],
    correct: 0,
    explanation: "लिख् (धातु) + आवट = लिखावट (भाववाचक कृत् प्रत्यय)।"
  },
  {
    id: 18,
    question: "'रात-दिन' में कौन सा समास है?",
    options: ['अव्ययीभाव', 'द्वंद्व', 'द्विगु', 'बहुव्रीहि'],
    correct: 1,
    explanation: "दोनों पद समान महत्त्व के हैं (रात और दिन), अतः द्वंद्व समास है।"
  },
  {
    id: 19,
    question: '"अरे! तुम इतनी जल्दी आ गए!" यह वाक्य है:',
    options: ['प्रश्नवाचक', 'विस्मयादिवाचक', 'आज्ञावाचक', 'विधानवाचक'],
    correct: 1,
    explanation: "'अरे!' विस्मय, आश्चर्य का सूचक है, अतः यह विस्मयादिवाचक वाक्य है।"
  },
  {
    id: 20,
    question: '"तरनि तनूजा तट तमाल तरुवर बहु छाए" में कौन सा अलंकार है?',
    options: ['यमक', 'अनुप्रास', 'श्लेष', 'रूपक'],
    correct: 1,
    explanation: "'त' वर्ण की बार-बार आवृत्ति होने से यहाँ अनुप्रास अलंकार है।"
  }
];

const BLANKS_DATABASE = [
  {
    id: 1,
    sentence: "'अत्यंत' शब्द में मूल शब्द 'अंत' है तथा _______ उपसर्ग जुड़ा हुआ है।",
    correct: 'अति',
    options: ['अति', 'अत', 'अत्य', 'अन'],
    hint: 'अति + अंत = अत्यंत'
  },
  {
    id: 2,
    sentence: "'दुर्गुण' शब्द में मूल शब्द 'गुण' के आगे _______ उपसर्ग लगा है।",
    correct: 'दुर्',
    options: ['दुर्', 'दुस', 'दूर', 'दु'],
    hint: 'कठिन या बुरा अर्थ देने वाला संस्कृत उपसर्ग'
  },
  {
    id: 3,
    sentence: "'धार्मिक' शब्द में 'धर्म' मूल शब्द के साथ _______ प्रत्यय जुड़ा है।",
    correct: 'इक',
    options: ['इक', 'ईक', 'क', 'मिक'],
    hint: 'धर्म + इक = धार्मिक'
  },
  {
    id: 4,
    sentence: 'जो प्रत्यय क्रिया या धातु के अंत में जुड़कर नए शब्द बनाते हैं, उन्हें _______ प्रत्यय कहते हैं।',
    correct: 'कृत्',
    options: ['कृत्', 'तद्धित', 'उपसर्ग', 'संधि'],
    hint: 'इनसे बने शब्द कृदंत कहलाते हैं'
  },
  {
    id: 5,
    sentence: "'अपनापन' शब्द में 'अपना' सर्वनाम के साथ _______ भाववाचक तद्धित प्रत्यय जुड़ा है।",
    correct: 'पन',
    options: ['पन', 'ता', 'त्व', 'ई'],
    hint: 'अपना + पन = अपनापन'
  },
  {
    id: 6,
    sentence: 'जिस समास में पहला पद प्रधान तथा अव्यय होता है, उसे _______ समास कहते हैं।',
    correct: 'अव्ययीभाव',
    options: ['अव्ययीभाव', 'तत्पुरुष', 'द्विगु', 'कर्मधारय'],
    hint: 'जैसे: यथाशक्ति, आजन्म, प्रतिदिन'
  },
  {
    id: 7,
    sentence: "'चौराहा' (चार राहों का समाहार) में पहला पद संख्यावाची होने के कारण _______ समास है।",
    correct: 'द्विगु',
    options: ['द्विगु', 'द्वंद्व', 'तत्पुरुष', 'बहुव्रीहि'],
    hint: 'संख्यावाची विशेषण + समूह'
  },
  {
    id: 8,
    sentence: "जिस समस्त पद में दोनों पद प्रधान होते हैं तथा विग्रह में 'और/या' लगता है, उसे _______ समास कहते हैं।",
    correct: 'द्वंद्व',
    options: ['द्वंद्व', 'द्विगु', 'कर्मधारय', 'बहुव्रीहि'],
    hint: 'जैसे: माता-पिता, सुख-दुःख'
  },
  {
    id: 9,
    sentence: "'नीलकंठ' का विग्रह 'नीला है कंठ जिसका अर्थात् शिव' करने पर यह _______ समास बनता है।",
    correct: 'बहुव्रीहि',
    options: ['बहुव्रीहि', 'कर्मधारय', 'तत्पुरुष', 'द्विगु'],
    hint: 'तीसरा अन्य पद प्रधान'
  },
  {
    id: 10,
    sentence: "'राजपुत्र' (राजा का पुत्र) में संबंध कारक की विभक्ति का लोप होने के कारण _______ समास है।",
    correct: 'तत्पुरुष',
    options: ['तत्पुरुष', 'अव्ययीभाव', 'द्वंद्व', 'कर्मधारय'],
    hint: 'कारक विभक्ति का लोप'
  },
  {
    id: 11,
    sentence: 'जिस वाक्य से किसी कार्य के होने या सामान्य कथन की सीधी सूचना मिले, उसे _______ वाक्य कहते हैं।',
    correct: 'विधानवाचक',
    options: ['विधानवाचक', 'निषेधवाचक', 'आज्ञावाचक', 'इच्छावाचक'],
    hint: 'जैसे: सूर्य पूर्व में उगता है'
  },
  {
    id: 12,
    sentence: '"तुम अभी इसी समय बाहर चले जाओ।" यह वाक्य _______ भेद के अंतर्गत आता है।',
    correct: 'आज्ञावाचक',
    options: ['आज्ञावाचक', 'इच्छावाचक', 'विधानवाचक', 'संदेहवाचक'],
    hint: 'आदेश या निर्देश'
  },
  {
    id: 13,
    sentence: '"शायद आज शाम को तेज आँधी आए।" में \'शायद\' शब्द _______ का बोध कराता है।',
    correct: 'संदेहवाचक',
    options: ['संदेहवाचक', 'संकेतवाचक', 'विधानवाचक', 'इच्छावाचक'],
    hint: 'संभावना या अनिश्चय'
  },
  {
    id: 14,
    sentence: '"ईश्वर करे आप परीक्षा में सर्वोत्तम अंक प्राप्त करें!" यह _______ वाक्य है।',
    correct: 'इच्छावाचक',
    options: ['इच्छावाचक', 'आज्ञावाचक', 'विधानवाचक', 'संकेतवाचक'],
    hint: 'शुभकामना या आशीर्वाद'
  },
  {
    id: 15,
    sentence: '"यदि समय पर वर्षा होगी, तो फसल भी अच्छी होगी।" यह _______ वाक्य का उदाहरण है।',
    correct: 'संकेतवाचक',
    options: ['संकेतवाचक', 'संदेहवाचक', 'विधानवाचक', 'निषेधवाचक'],
    hint: 'कार्य-कारण शर्त (यदि-तो)'
  },
  {
    id: 16,
    sentence: '"चारु चंद्र की चंचल किरणें" में \'च\' वर्ण की बार-बार आवृत्ति होने से _______ अलंकार है।',
    correct: 'अनुप्रास',
    options: ['अनुप्रास', 'यमक', 'श्लेष', 'उपमा'],
    hint: 'एक ही वर्ण की आवृत्ति'
  },
  {
    id: 17,
    sentence: '"कनक कनक ते सौ गुनी" में \'कनक\' शब्द दो बार आया है और दोनों के अर्थ अलग हैं, अतः यहाँ _______ अलंकार है।',
    correct: 'यमक',
    options: ['यमक', 'अनुप्रास', 'श्लेष', 'रूपक'],
    hint: 'शब्द की आवृत्ति व भिन्न अर्थ'
  },
  {
    id: 18,
    sentence: '"पीपर पात सरिस मन डोला" में \'सरिस\' शब्द उपमा अलंकार का _______ कहलाता है।',
    correct: 'वाचक शब्द',
    options: ['वाचक शब्द', 'उपमेय', 'उपमान', 'साधारण धर्म'],
    hint: 'समानता सूचक शब्द'
  },
  {
    id: 19,
    sentence: "जहाँ उपमेय में उपमान की संभावना व्यक्त हो तथा 'मानो, जानो, मनु, जनु' शब्द आएँ, वहाँ _______ अलंकार होता है।",
    correct: 'उत्प्रेक्षा',
    options: ['उत्प्रेक्षा', 'उपमा', 'रूपक', 'अतिशयोक्ति'],
    hint: 'संभावना की कल्पना'
  },
  {
    id: 20,
    sentence: '"मेघ आए बड़े बन-ठन के सँवर के" में प्राकृतिक बादलों पर मानव की भाँति सजने-संवरने का आरोप होने से _______ अलंकार है।',
    correct: 'मानवीकरण',
    options: ['मानवीकरण', 'अतिशयोक्ति', 'यमक', 'श्लेष'],
    hint: 'प्रकृति पर मानवीय चेष्टा का आरोप'
  }
];

export const HindiGrammarMasteryView: React.FC<HindiGrammarMasteryViewProps> = ({
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<'prefix' | 'samas' | 'sentences' | 'alankar' | 'quiz' | 'blanks'>('prefix');
  const [selectedSamasKey, setSelectedSamasKey] = useState<string>('नीलकंठ');
  
  // MCQ state
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showScore, setShowScore] = useState<boolean>(false);

  // Blanks state
  const [blankSelections, setBlankSelections] = useState<Record<number, string>>({});

  const activeSamas = SAMAS_DATABASE[selectedSamasKey] || SAMAS_DATABASE['नीलकंठ'];

  const handleSelectAnswer = (qId: number, optIdx: number) => {
    if (userAnswers[qId] !== undefined) return;
    const nextAnswers = { ...userAnswers, [qId]: optIdx };
    setUserAnswers(nextAnswers);

    if (Object.keys(nextAnswers).length === GRAMMAR_MCQS.length) {
      setShowScore(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleSelectBlank = (bId: number, val: string) => {
    setBlankSelections(prev => ({ ...prev, [bId]: val }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowScore(false);
  };

  const handleResetBlanks = () => {
    setBlankSelections({});
  };

  const calculateScore = () => {
    let score = 0;
    GRAMMAR_MCQS.forEach(q => {
      if (userAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div style={{
      maxWidth: '1060px',
      margin: '0 auto',
      padding: '16px 12px 80px',
      color: 'var(--text-main, #f8fafc)'
    }}>
      {/* ── Top Header Bar ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '20px',
        padding: '12px 16px',
        background: 'var(--bg-card, rgba(13, 21, 39, 0.8))',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border-color, rgba(56, 189, 248, 0.2))',
        borderRadius: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onBack}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-color, rgba(255, 255, 255, 0.15))',
              borderRadius: '10px',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 700
            }}
          >
            <ArrowLeft size={16} />
            <span>वापस (Back)</span>
          </button>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                background: 'linear-gradient(135deg, #e11d48, #be123c)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '6px',
                textTransform: 'uppercase'
              }}>
                CBSE कक्षा 9
              </span>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#38bdf8' }}>
                हिंदी व्याकरण महा-अध्याय
              </span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted, #94a3b8)', margin: '2px 0 0' }}>
              कक्षा 9 • 4 मुख्य स्तंभ, 20 MCQs व रिक्त स्थान पूर्ति
            </p>
          </div>
        </div>

        <a
          href="/hindi-class9-grammar-complete-mastery.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(16, 185, 129, 0.15))',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            borderRadius: '10px',
            color: '#38bdf8',
            fontSize: '13px',
            fontWeight: 700,
            textDecoration: 'none'
          }}
        >
          <span>पूर्ण स्क्रीन स्टूडियो (Fullscreen)</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* ── Hero Banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.15) 0%, rgba(56, 189, 248, 0.12) 100%)',
        border: '1px solid rgba(225, 29, 72, 0.3)',
        borderRadius: '20px',
        padding: '28px 20px',
        textAlign: 'center',
        marginBottom: '24px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(225, 29, 72, 0.2)',
          border: '1px solid rgba(225, 29, 72, 0.4)',
          color: '#fb7185',
          fontSize: '12px',
          fontWeight: 800,
          padding: '4px 12px',
          borderRadius: '9999px',
          marginBottom: '10px'
        }}>
          <Sparkles size={14} />
          <span>NCERT & CBSE Board 2026–27 Master Curriculum</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(1.4rem, 4vw, 2rem)',
          fontWeight: 900,
          margin: '0 0 8px',
          letterSpacing: '-0.5px'
        }}>
          कक्षा 9 हिंदी व्याकरण संपूर्ण अध्ययन (Mastery Studio)
        </h1>
        <p style={{
          fontSize: '14px',
          color: 'var(--text-muted, #94a3b8)',
          maxWidth: '740px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          उपसर्ग-प्रत्यय, 6 समास व विग्रह, अर्थ की दृष्टि से वाक्य के 8 भेद, शब्दालंकार व अर्थालंकार एवं 20 अभ्यास प्रश्नोत्तरी।
        </p>
      </div>

      {/* ── Module Tabs Navigation ── */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        {[
          { id: 'prefix', label: '🌟 1. उपसर्ग व प्रत्यय' },
          { id: 'samas', label: '🏛️ 2. समास Studio' },
          { id: 'sentences', label: '📜 3. वाक्य भेद (8 प्रकार)' },
          { id: 'alankar', label: '✨ 4. अलंकार Studio' },
          { id: 'quiz', label: '🎯 5. 20 MCQs टेस्ट' },
          { id: 'blanks', label: '📝 6. रिक्त स्थान (20 Blanks)' }
        ].map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                background: isActive ? 'linear-gradient(135deg, #0284c7, #0369a1)' : 'var(--bg-card, rgba(255, 255, 255, 0.05))',
                border: isActive ? '1px solid #38bdf8' : '1px solid var(--border-color, rgba(255, 255, 255, 0.1))',
                color: isActive ? '#ffffff' : 'var(--text-muted, #94a3b8)',
                padding: '10px 16px',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 4px 14px rgba(2, 132, 199, 0.4)' : 'none'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Tab 1: उपसर्ग एवं प्रत्यय ── */}
      {activeTab === 'prefix' && (
        <div style={{
          background: 'var(--bg-card, rgba(13, 21, 39, 0.9))',
          border: '1px solid var(--border-color, rgba(56, 189, 248, 0.2))',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>
              🌟 स्तंभ 1: शब्द निर्माण — उपसर्ग एवं प्रत्यय
            </span>
          </div>
          <p style={{ color: 'var(--text-muted, #94a3b8)', fontSize: '14px', marginBottom: '20px', lineHeight: 1.7 }}>
            शब्दांश जो मूल शब्द के <strong>प्रारंभ (आगे)</strong> में जुड़ते हैं उन्हें <strong>उपसर्ग</strong> तथा जो <strong>अंत (पीछे)</strong> में जुड़ते हैं उन्हें <strong>प्रत्यय</strong> कहते हैं:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {/* उपसर्ग */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '14px',
              padding: '18px'
            }}>
              <span style={{
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#fcd34d',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                fontSize: '11px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                उपसर्ग (Prefix)
              </span>
              <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '8px' }}>
                शब्द के आगे जुड़ना
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted, #94a3b8)', lineHeight: 1.8 }}>
                • <strong>अति</strong> + अंत = अत्यंत<br />
                • <strong>प्रति</strong> + एक = प्रत्येक<br />
                • <strong>दुर्</strong> + गुण = दुर्गुण<br />
                • <strong>निर्</strong> + धन = निर्धन<br />
                • <strong>बे</strong> + ईमान = बेईमान
              </p>
            </div>

            {/* कृत् प्रत्यय */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '14px',
              padding: '18px'
            }}>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                fontSize: '11px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                कृत् प्रत्यय (Primary Suffix)
              </span>
              <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '8px' }}>
                क्रिया / धातु के पीछे जुड़ना
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted, #94a3b8)', lineHeight: 1.8 }}>
                • <strong>पढ़्</strong> + आक = पढ़ाकू<br />
                • <strong>लिख्</strong> + आवट = लिखावट<br />
                • <strong>हँस्</strong> + ई = हँसी<br />
                • <strong>घूम्</strong> + अक्कड़ = घुमक्कड़
              </p>
            </div>

            {/* तद्धित प्रत्यय */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '14px',
              padding: '18px'
            }}>
              <span style={{
                background: 'rgba(168, 85, 247, 0.15)',
                color: '#c084fc',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                fontSize: '11px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                तद्धित प्रत्यय (Secondary Suffix)
              </span>
              <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '8px' }}>
                संज्ञा / सर्वनाम / विशेषण के पीछे जुड़ना
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted, #94a3b8)', lineHeight: 1.8 }}>
                • <strong>समाज</strong> + इक = सामाजिक<br />
                • <strong>मानव</strong> + ता = मानवता<br />
                • <strong>अपना</strong> + पन = अपनापन<br />
                • <strong>भारत</strong> + ईय = भारतीय
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Tab 2: समास Studio ── */}
      {activeTab === 'samas' && (
        <div style={{
          background: 'var(--bg-card, rgba(13, 21, 39, 0.9))',
          border: '1px solid var(--border-color, rgba(56, 189, 248, 0.2))',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>
              🏛️ स्तंभ 2: समास विग्रह एवं भेद अन्वेषक (Interactive Samas Explorer)
            </span>
          </div>
          <p style={{ color: 'var(--text-muted, #94a3b8)', fontSize: '14px', marginBottom: '16px' }}>
            नीचे दिए गए किसी भी शब्द पर क्लिक करें और उसका तुरंत <strong>समास विग्रह, पूर्व/उत्तर पद एवं समास भेद</strong> देखें:
          </p>

          {/* Word Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px'
          }}>
            {Object.keys(SAMAS_DATABASE).map(key => {
              const isSelected = selectedSamasKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSamasKey(key)}
                  style={{
                    background: isSelected ? '#38bdf8' : 'rgba(255, 255, 255, 0.05)',
                    color: isSelected ? '#000000' : 'inherit',
                    border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.15)',
                    fontSize: '13px',
                    fontWeight: 800,
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {key}
                </button>
              );
            })}
          </div>

          {/* Result Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(56, 189, 248, 0.12))',
            border: '1px solid #10b981',
            borderRadius: '16px',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#38bdf8', margin: 0 }}>
                {activeSamas.word}
              </h3>
              <span style={{
                background: 'rgba(16, 185, 129, 0.2)',
                color: '#34d399',
                border: '1px solid #10b981',
                borderRadius: '8px',
                padding: '3px 10px',
                fontSize: '12px',
                fontWeight: 800
              }}>
                {activeSamas.categoryBadge}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '16px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>समास विग्रह:</span>
                <p style={{ margin: '4px 0 0', fontWeight: 800, fontSize: '14px', color: '#fcd34d' }}>{activeSamas.vigrah}</p>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>समास भेद:</span>
                <p style={{ margin: '4px 0 0', fontWeight: 800, fontSize: '14px', color: '#34d399' }}>{activeSamas.bhed}</p>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>पूर्व व उत्तर पद:</span>
                <p style={{ margin: '4px 0 0', fontSize: '13px' }}>{activeSamas.purvaPad} + {activeSamas.uttarPad}</p>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>पद प्रधानता:</span>
                <p style={{ margin: '4px 0 0', fontSize: '13px' }}>{activeSamas.pradhanta}</p>
              </div>
            </div>

            <div style={{ fontSize: '13px', color: 'var(--text-muted, #94a3b8)', lineHeight: 1.6, background: 'rgba(0,0,0,0.2)', padding: '10px 14px', borderRadius: '10px' }}>
              💡 <strong>व्याकरणिक रहस्य:</strong> {activeSamas.explanation}
            </div>
          </div>
        </div>
      )}

      {/* ── Tab 3: वाक्य भेद ── */}
      {activeTab === 'sentences' && (
        <div style={{
          background: 'var(--bg-card, rgba(13, 21, 39, 0.9))',
          border: '1px solid var(--border-color, rgba(56, 189, 248, 0.2))',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>
              📜 स्तंभ 3: अर्थ की दृष्टि से वाक्य के 8 भेद एवं रूपांतरण
            </span>
          </div>
          <p style={{ color: 'var(--text-muted, #94a3b8)', fontSize: '14px', marginBottom: '20px' }}>
            कक्षा 9 के अनुसार अर्थ के आधार पर वाक्य के 8 भेद होते हैं। नीचे दिए गए उदाहरणों व पहचान चिह्नों को देखें:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px'
          }}>
            {[
              { num: '1', title: 'विधानवाचक (Assertive)', example: 'सूर्य पूर्व में उदय होता है।', badge: 'सीधी सूचना' },
              { num: '2', title: 'निषेधवाचक (Negative)', example: 'मैं आज बाजार नहीं जाऊँगा।', badge: 'न / नहीं' },
              { num: '3', title: 'आज्ञावाचक (Imperative)', example: 'तुम कमरे से बाहर जाओ और दरवाजा बंद करो।', badge: 'आदेश / अनुरोध' },
              { num: '4', title: 'प्रश्नवाचक (Interrogative)', example: 'क्या आपने अपना गृहकार्य पूरा कर लिया?', badge: 'क्या / क्यों' },
              { num: '5', title: 'विस्मयादिवाचक (Exclamatory)', example: 'वाह! कितना मनमोहक और सुंदर दृश्य है।', badge: 'वाह / अरे!' },
              { num: '6', title: 'इच्छावाचक (Optative)', example: 'आपकी यात्रा मंगलमय और सुखद हो!', badge: 'शुभकामना / इच्छा' },
              { num: '7', title: 'संदेहवाचक (Doubt)', example: 'शायद आज शाम को तेज वर्षा होगी।', badge: 'शायद / संभावना' },
              { num: '8', title: 'संकेतवाचक (Conditional)', example: 'यदि कठिन परिश्रम करोगे, तो अवश्य सफल होगे।', badge: 'यदि... तो शर्त' }
            ].map(item => (
              <div
                key={item.num}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 800, fontSize: '14px', color: '#38bdf8' }}>
                    {item.title}
                  </span>
                  <span style={{
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    fontSize: '11px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 700
                  }}>
                    {item.badge}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted, #94a3b8)', margin: 0, lineHeight: 1.5 }}>
                  {item.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Tab 4: अलंकार Studio ── */}
      {activeTab === 'alankar' && (
        <div style={{
          background: 'var(--bg-card, rgba(13, 21, 39, 0.9))',
          border: '1px solid var(--border-color, rgba(56, 189, 248, 0.2))',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>
              ✨ स्तंभ 4: अलंकार — काव्य सौंदर्य एवं पहचान की ट्रिक्स
            </span>
          </div>
          <p style={{ color: 'var(--text-muted, #94a3b8)', fontSize: '14px', marginBottom: '20px' }}>
            काव्य की शोभा बढ़ाने वाले धर्मों को अलंकार कहते हैं। कक्षा 9 में शब्दालंकार एवं अर्थालंकार के प्रमुख भेद:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px'
          }}>
            {[
              {
                name: 'अनुप्रास अलंकार',
                type: 'शब्दालंकार',
                trick: 'एक ही वर्ण की बार-बार आवृत्ति',
                example: '"चारु चंद्र की चंचल किरणें, खेल रही हैं जल-थल में।"'
              },
              {
                name: 'यमक अलंकार',
                type: 'शब्दालंकार',
                trick: 'शब्द दो बार आए, दोनों बार भिन्न अर्थ',
                example: '"काली घटा का घमंड घटा।" (घटा = बादल / घटा = कम होना)'
              },
              {
                name: 'श्लेष अलंकार',
                type: 'शब्दालंकार',
                trick: 'एक शब्द में अनेक अर्थ चिपके हों',
                example: '"रहिमन पानी राखिए, बिन पानी सब सून।" (पानी = चमक / मान / जल)'
              },
              {
                name: 'उपमा अलंकार',
                type: 'अर्थालंकार',
                trick: 'वाचक शब्द: सा, सी, से, सम, सरिस',
                example: '"पीपर पात सरिस मन डोला।" (मन की पीपल के पत्ते से तुलना)'
              },
              {
                name: 'रूपक अलंकार',
                type: 'अर्थालंकार',
                trick: 'उपमेय पर उपमान का अभेद आरोप',
                example: '"मैया मैं तो चंद्र-खिलौना लैहों।" (चंद्रमा रूपी खिलौना)'
              },
              {
                name: 'उत्प्रेक्षा अलंकार',
                type: 'अर्थालंकार',
                trick: 'वाचक शब्द: मानो, जनु, मनहुँ, जानहु',
                example: '"सिर फट गया उसका वहीं, मानो अरुण रंग का घड़ा हो।"'
              },
              {
                name: 'अतिशयोक्ति अलंकार',
                type: 'अर्थालंकार',
                trick: 'अत्यधिक बढ़ा-चढ़ाकर वर्णन',
                example: '"हनुमान की पूँछ में लगन न पाई आग। लंका सिगरी जल गई..."'
              },
              {
                name: 'मानवीकरण अलंकार',
                type: 'अर्थालंकार',
                trick: 'प्रकृति पर मानवीय चेष्टा का आरोप',
                example: '"मेघ आए बड़े बन-ठन के सँवर के।"'
              }
            ].map(item => (
              <div
                key={item.name}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 800, fontSize: '15px', color: '#fcd34d' }}>
                    {item.name}
                  </span>
                  <span style={{
                    background: 'rgba(245, 158, 11, 0.15)',
                    color: '#fcd34d',
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    fontWeight: 700
                  }}>
                    {item.type}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#38bdf8', fontWeight: 700, marginBottom: '6px' }}>
                  ⚡ {item.trick}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted, #94a3b8)', margin: 0, fontStyle: 'italic' }}>
                  {item.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Tab 5: 20 MCQs Test ── */}
      {activeTab === 'quiz' && (
        <div style={{
          background: 'var(--bg-card, rgba(13, 21, 39, 0.9))',
          border: '1px solid var(--border-color, rgba(56, 189, 248, 0.2))',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>
                🎯 20 Master अभ्यास प्रश्नोत्तरी (Interactive Test)
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted, #94a3b8)', margin: '4px 0 0' }}>
                कक्षा 9 परीक्षा पैटर्न के 20 उच्च-स्तरीय बहुविकल्पीय प्रश्न। उत्तर चुनते ही तुरंत फीडबैक देखें।
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                fontSize: '13px',
                fontWeight: 800,
                padding: '6px 14px',
                borderRadius: '8px'
              }}>
                हल किए: {Object.keys(userAnswers).length} / {GRAMMAR_MCQS.length}
              </span>

              <button
                onClick={handleResetQuiz}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  color: 'inherit',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 700
                }}
              >
                <RotateCcw size={14} />
                <span>पुनः प्रयास (Reset)</span>
              </button>
            </div>
          </div>

          {/* Score Alert */}
          {showScore && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(56, 189, 248, 0.2))',
              border: '2px solid #10b981',
              borderRadius: '16px',
              padding: '18px 24px',
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <Award size={36} color="#34d399" style={{ margin: '0 auto 8px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 900, margin: '0 0 6px', color: '#34d399' }}>
                बधाई! आपने टेस्ट पूरा कर लिया 🎉
              </h3>
              <p style={{ fontSize: '15px', fontWeight: 800, margin: 0 }}>
                आपका स्कोर: {calculateScore()} / {GRAMMAR_MCQS.length} (
                {Math.round((calculateScore() / GRAMMAR_MCQS.length) * 100)}%)
              </p>
            </div>
          )}

          {/* MCQs List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {GRAMMAR_MCQS.map((q, idx) => {
              const selectedOpt = userAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;

              return (
                <div
                  key={q.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-color, rgba(255, 255, 255, 0.1))',
                    borderRadius: '16px',
                    padding: '18px'
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '12px', lineHeight: 1.6 }}>
                    <span style={{ color: '#38bdf8', marginRight: '6px' }}>प्र. {idx + 1}.</span>
                    {q.question}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', marginBottom: '10px' }}>
                    {q.options.map((opt, optIdx) => {
                      let bg = 'rgba(255, 255, 255, 0.04)';
                      let borderColor = 'rgba(255, 255, 255, 0.12)';
                      let textColor = 'inherit';

                      if (isAnswered) {
                        if (optIdx === q.correct) {
                          bg = 'rgba(16, 185, 129, 0.25)';
                          borderColor = '#10b981';
                          textColor = '#34d399';
                        } else if (selectedOpt === optIdx) {
                          bg = 'rgba(244, 63, 94, 0.25)';
                          borderColor = '#f43f5e';
                          textColor = '#fb7185';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isAnswered}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          style={{
                            background: bg,
                            border: `1px solid ${borderColor}`,
                            color: textColor,
                            borderRadius: '10px',
                            padding: '10px 14px',
                            textAlign: 'left',
                            fontSize: '13px',
                            fontWeight: isAnswered && optIdx === q.correct ? 800 : 600,
                            cursor: isAnswered ? 'default' : 'pointer',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <span style={{ opacity: 0.6 }}>{String.fromCharCode(65 + optIdx)}.</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderLeft: '3px solid #38bdf8',
                      borderRadius: '0 8px 8px 0',
                      padding: '10px 14px',
                      fontSize: '13px',
                      color: 'var(--text-muted, #94a3b8)',
                      lineHeight: 1.6
                    }}>
                      💡 <strong>व्याख्या:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Tab 6: रिक्त स्थान पूर्ति (Blanks) ── */}
      {activeTab === 'blanks' && (
        <div style={{
          background: 'var(--bg-card, rgba(13, 21, 39, 0.9))',
          border: '1px solid var(--border-color, rgba(56, 189, 248, 0.2))',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>
                📝 रिक्त स्थान पूर्ति अभ्यास (20 Interactive Blanks)
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted, #94a3b8)', margin: '4px 0 0' }}>
                दिए गए विकल्पों में से सही शब्द पर क्लिक करके रिक्त स्थान भरें:
              </p>
            </div>

            <button
              onClick={handleResetBlanks}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                color: 'inherit',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 700
              }}
            >
              <RotateCcw size={14} />
              <span>सभी रिक्त स्थान रीसेट (Reset)</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {BLANKS_DATABASE.map((b, idx) => {
              const selected = blankSelections[b.id];
              const isCorrect = selected === b.correct;
              const isFilled = selected !== undefined;

              const parts = b.sentence.split('_______');

              return (
                <div
                  key={b.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-color, rgba(255, 255, 255, 0.1))',
                    borderRadius: '16px',
                    padding: '18px'
                  }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.8, marginBottom: '12px' }}>
                    <span style={{ color: '#38bdf8', marginRight: '6px' }}>{idx + 1}.</span>
                    {parts[0]}
                    <span style={{
                      display: 'inline-block',
                      minWidth: '80px',
                      textAlign: 'center',
                      padding: '2px 10px',
                      margin: '0 4px',
                      borderBottom: isFilled ? (isCorrect ? '2px solid #10b981' : '2px solid #f43f5e') : '2px dashed #38bdf8',
                      background: isFilled ? (isCorrect ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)') : 'rgba(56, 189, 248, 0.08)',
                      color: isFilled ? (isCorrect ? '#34d399' : '#fb7185') : '#fcd34d',
                      fontWeight: 800,
                      borderRadius: '4px'
                    }}>
                      {selected || '_______'}
                    </span>
                    {parts[1]}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {b.options.map(opt => {
                      const isChosen = selected === opt;
                      let bg = 'rgba(255, 255, 255, 0.05)';
                      let border = '1px solid rgba(255, 255, 255, 0.15)';
                      let col = 'inherit';

                      if (isChosen) {
                        if (opt === b.correct) {
                          bg = 'rgba(16, 185, 129, 0.25)';
                          border = '1px solid #10b981';
                          col = '#34d399';
                        } else {
                          bg = 'rgba(244, 63, 94, 0.25)';
                          border = '1px solid #f43f5e';
                          col = '#fb7185';
                        }
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelectBlank(b.id, opt)}
                          style={{
                            background: bg,
                            border: border,
                            color: col,
                            fontSize: '13px',
                            fontWeight: 700,
                            padding: '6px 14px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
