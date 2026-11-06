const fs = require('fs');
const pdf = require('pdf-parse');

async function extract() {
  const dataBuffer = fs.readFileSync('scratch/eeev101.pdf');
  const data = await pdf(dataBuffer);
  
  console.log('Total Pages:', data.numpages);
  console.log('Info:', data.info);
  fs.writeFileSync('scratch/eeev101_extracted.txt', data.text, 'utf8');
  console.log('Extracted text written to scratch/eeev101_extracted.txt');
  console.log('--- PREVIEW (FIRST 2000 CHARS) ---');
  console.log(data.text.substring(0, 2000));
}

extract().catch(console.error);
