const fs = require('fs');
const path = require('path');

const mcqs = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'class10_science_ch1_difficult_mcqs.json'), 'utf8'));

// Format questions for questions.js
const formattedQuestions = mcqs.map(q => ({
  id: 1000 + q.id,
  chapter: "science10_ch1",
  category: "chemical-reactions",
  categoryLabel: {
    en: q.topic,
    hi: q.topic
  },
  type: "standard",
  questionEn: q.questionEn,
  questionHi: q.questionHi,
  options: q.options,
  correct: q.correct,
  sourceRef: "NCERT Class 10 Science Chapter 1 (HOTS / Competency)",
  explanationEn: q.explanationEn,
  explanationHi: q.explanationHi
}));

const chapterObj = {
  titleEn: "Chemical Reactions and Equations (Difficult HOTS)",
  titleHi: "रासायनिक अभिक्रियाएँ एवं समीकरण (उच्च स्तरीय बहुविकल्पीय प्रश्न)",
  level: "Difficult • HOTS & Lab Activities",
  badgeText: "NCERT Science Class 10 • Chapter 1",
  questions: formattedQuestions,
  categories: [
    { value: "all", labelEn: "All Topics (सभी विषय)", labelHi: "सभी विषय" },
    { value: "chemical-reactions", labelEn: "Chemical Reactions & Equations", labelHi: "रासायनिक अभिक्रियाएँ" }
  ]
};

let questionsJsContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'questions.js'), 'utf8');

// Parse the existing allChaptersData from questions.js
const prefix = "const allChaptersData = ";
const jsonStart = questionsJsContent.indexOf(prefix);
if (jsonStart !== -1) {
  const codeToEval = questionsJsContent.substring(jsonStart) + "\nreturn allChaptersData;";
  const evalFn = new Function(codeToEval);
  const allData = evalFn();
  
  allData["science10_ch1"] = chapterObj;
  
  const newContent = `// Auto-shuffled dataset: Option A is never true; correct answers are distributed across b, c, d\n\nconst allChaptersData = ${JSON.stringify(allData, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'questions.js'), newContent, 'utf8');
  console.log('Successfully updated public/questions.js with science10_ch1!');
} else {
  console.error('Could not find allChaptersData prefix in questions.js');
}
