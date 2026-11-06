const fs = require('fs');
const data = require('./iesc103_text.json');
const lines = data.text.split('\n');
console.log('Total lines:', lines.length);

lines.forEach((line, idx) => {
  const t = line.trim();
  if (t.match(/^[0-9]\.[0-9]/) || t.startsWith('-- ') || t.includes('Questions') || t.includes('Summary') || t.includes('Activity') || t.includes('Table 3')) {
    console.log('[Line ' + idx + '] ' + t);
  }
});
