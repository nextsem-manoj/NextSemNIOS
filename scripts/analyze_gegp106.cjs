const fs = require('fs');
const data = require('./gegp106_text.json');
const lines = data.text.split('\n');
console.log('Total lines:', lines.length);

lines.forEach((line, idx) => {
  const t = line.trim();
  if (t.startsWith('6.') || t.includes('Figure it Out') || t.startsWith('-- ') || t.includes('Summary') || t.includes('Divisibility') || t.includes('Palindrom') || t.includes('Digital Root') || t.includes('Magic') || t.includes('Cryptarithm') || t.includes('Letters for Digits')) {
    console.log(`[Line ${idx}] ${t}`);
  }
});
