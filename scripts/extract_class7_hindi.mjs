import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = path.join(__dirname, '..', 'scratch', 'class7_hindi.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;
  
  console.log(`Total Pages: ${pdf.numPages}`);
  let fullText = '';
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');
    fullText += `\n\n--- PAGE ${i} ---\n\n` + pageText;
  }
  
  const outPath = path.join(__dirname, '..', 'scratch', 'class7_hindi_text.txt');
  fs.writeFileSync(outPath, fullText, 'utf8');
  console.log(`Saved text to ${outPath}, length: ${fullText.length}`);
}

run().catch(console.error);
