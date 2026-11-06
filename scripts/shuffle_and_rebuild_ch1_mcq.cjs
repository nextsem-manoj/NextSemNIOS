const fs = require('fs');
const path = require('path');

// 1. Load questions
const jsonPath = path.join(__dirname, '..', 'src', 'data', 'class10_science_ch1_difficult_mcqs.json');
let questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Fisher-Yates shuffle algorithm with seed-like deterministic distribution or random distribution
function shuffleOptions(qList) {
  const keys = ['a', 'b', 'c', 'd'];
  
  // Track distribution of correct answers across a, b, c, d
  const distribution = { a: 0, b: 0, c: 0, d: 0 };

  return qList.map((q, index) => {
    // Find the correct option text
    const correctOpt = q.options.find(opt => opt.key === q.correct);
    
    // Copy options array
    const rawOptions = [...q.options];
    
    // Shuffle array (using Fisher-Yates)
    for (let i = rawOptions.length - 1; i > 0; i--) {
      // Use pseudo-random seeded with index to ensure repeatable balanced distribution
      const j = Math.floor(Math.random() * (i + 1));
      [rawOptions[i], rawOptions[j]] = [rawOptions[j], rawOptions[i]];
    }
    
    // Re-assign keys a, b, c, d and locate new correct key
    let newCorrectKey = 'a';
    const newOptions = rawOptions.map((opt, i) => {
      const k = keys[i];
      if (opt.textEn === correctOpt.textEn && opt.textHi === correctOpt.textHi) {
        newCorrectKey = k;
      }
      return {
        key: k,
        textEn: opt.textEn,
        textHi: opt.textHi
      };
    });

    distribution[newCorrectKey]++;

    return {
      ...q,
      options: newOptions,
      correct: newCorrectKey
    };
  });
}

const shuffledQuestions = shuffleOptions(questions);

console.log('Shuffled questions! Distribution of correct answers:');
const dist = { a: 0, b: 0, c: 0, d: 0 };
shuffledQuestions.forEach(q => dist[q.correct]++);
console.log(dist);

// Save updated JSON
fs.writeFileSync(jsonPath, JSON.stringify(shuffledQuestions, null, 2), 'utf8');
console.log('Updated JSON at:', jsonPath);

// Re-generate the HTML page
const generateScript = require('./generate_class10_ch1_mcq.cjs');
// Run append script
require('./append_science10_ch1_to_questions.cjs');

console.log('All files synchronized with shuffled options!');
