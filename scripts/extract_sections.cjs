const { PDFParse } = require('../node_modules/pdf-parse');
const fs = require('fs');

const buffer = fs.readFileSync('c:/Users/Manoj/nextsemorg/ncert.nextsem.online/public/pdf/Class 09/9th science_NEW/Exploration/iesc1dd/iesc109.pdf');
const parser = new PDFParse({ data: buffer });

parser.getText().then(t => {
    t.pages.forEach((p, idx) => {
        const lines = p.text.split('\n').filter(l => l.trim().length > 0);
        console.log(`=== PAGE ${idx + 1} ===`);
        lines.slice(0, 5).forEach(l => console.log('  ', l.trim()));
        const headings = lines.filter(l => /9\.[0-9]/.test(l));
        if (headings.length > 0) {
            console.log('  -> HEADINGS:', headings);
        }
    });
}).catch(console.error);

