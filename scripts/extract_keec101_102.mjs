import fs from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

async function extractFile(pdfPath, outPath) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDoc = await loadingTask.promise;
  console.log(`Loaded ${pdfPath}: ${pdfDoc.numPages} pages.`);
  
  let fullText = '';
  for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');
    fullText += `\n\n--- PAGE ${pageNum} ---\n\n` + pageText;
  }
  fs.writeFileSync(outPath, fullText, 'utf8');
  console.log(`Saved to ${outPath} (${fullText.length} chars)`);
}

async function run() {
  await extractFile('public/pdf/Class 11/11th Indian Economic Dev Micoroeconomics/keec101.pdf', 'scripts/keec101_text.txt');
  await extractFile('public/pdf/Class 11/11th Indian Economic Dev Micoroeconomics/keec102.pdf', 'scripts/keec102_text.txt');
}

run().catch(console.error);
