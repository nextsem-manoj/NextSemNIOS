const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function extract() {
  const filePath = path.join(__dirname, '../public/pdf/Class 12/12th Samkalin Vishwa Rajniti/lhps101.pdf');
  const dataBuffer = fs.readFileSync(filePath);
  
  let pageNum = 0;
  const pager = (pageData) => {
    pageNum++;
    fs.writeFileSync(path.join(__dirname, `../scratch/lhps101_page_${pageNum}.txt`), pageData.getTextContent().then ? '' : pageData.text || '', 'utf8');
    return pageData.text;
  };

  const data = await pdf(dataBuffer, {
    pager: pager
  });

  console.log('Total Pages in lhps101.pdf:', data.numpages);
  fs.writeFileSync(path.join(__dirname, '../scratch/lhps101_full.txt'), data.text, 'utf8');
  console.log('Full extracted text saved to scratch/lhps101_full.txt');
  console.log('Sample text length:', data.text.length);
}

extract().catch(console.error);
