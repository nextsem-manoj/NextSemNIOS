import fs from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

async function run() {
  const data = new Uint8Array(fs.readFileSync('scratch/eeev101.pdf'));
  
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDoc = await loadingTask.promise;
  
  console.log(`PDF Loaded: ${pdfDoc.numPages} pages.`);
  let fullText = '';
  
  for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');
    fullText += `\n\n--- PAGE ${pageNum} ---\n\n` + pageText;
  }
  
  fs.writeFileSync('scratch/eeev101_text.txt', fullText, 'utf8');
  console.log('Saved extracted text to scratch/eeev101_text.txt');
  console.log('--- PREVIEW FIRST 1500 CHARACTERS ---');
  console.log(fullText.substring(0, 1500));
}

run().catch(console.error);
