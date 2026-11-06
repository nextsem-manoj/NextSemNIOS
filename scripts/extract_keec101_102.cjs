const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function extract() {
  const pdf1Path = path.join(__dirname, '../public/pdf/Class 11/11th Indian Economic Dev Micoroeconomics/keec101.pdf');
  const pdf2Path = path.join(__dirname, '../public/pdf/Class 11/11th Indian Economic Dev Micoroeconomics/keec102.pdf');

  console.log('Extracting keec101.pdf...');
  const buf1 = fs.readFileSync(pdf1Path);
  const data1 = await pdf(buf1);
  console.log('keec101 pages:', data1.numpages, 'length:', data1.text.length);
  fs.writeFileSync(path.join(__dirname, 'keec101_text.txt'), data1.text, 'utf8');

  console.log('Extracting keec102.pdf...');
  const buf2 = fs.readFileSync(pdf2Path);
  const data2 = await pdf(buf2);
  console.log('keec102 pages:', data2.numpages, 'length:', data2.text.length);
  fs.writeFileSync(path.join(__dirname, 'keec102_text.txt'), data2.text, 'utf8');

  console.log('Extraction complete!');
}

extract().catch(console.error);
