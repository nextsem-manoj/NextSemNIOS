const fs = require('fs');

function krutiToUnicode(text) {
  if (!text) return '';
  let str = text;

  // Modified characters & ligatures
  str = str.replace(/ñ/g, "्");
  str = str.replace(/Q\+/g, "फ़");
  str = str.replace(/sas/g, "स्र");
  str = str.replace(/J/g, "श्र");
  str = str.replace(/K/g, "ज्ञ");
  str = str.replace(/C/g, "ऋ");

  // Compound glyphs
  const glyphMap = {
    "à": "द्ग", "á": "द्घ", "â": "द्द", "ã": "द्ध", "ä": "द्न", "å": "द्ब", "æ": "द्भू", "ç": "द्म",
    "è": "द्य", "é": "द्र", "ê": "द्व", "ë": "ट्ट", "ì": "ट्ठ", "í": "ड्ड", "î": "ड्ढ", "ï": "ड्र",
    "ð": "ढ्र", "ò": "ष्ट", "ó": "ष्ठ", "ô": "श्व", "õ": "ह्ण", "ö": "ह्न", "÷": "ह्य", "ø": "ह्र",
    "ù": "ह्म", "ú": "ह्व", "û": "ञ्ज", "ü": "ङ्ग", "ý": "ङ्क", "þ": "ङ्ख", "ÿ": "ङ्घ",
    "¡": "ँ", "¢": "ं", "£": "ः", "¤": "़", "¥": "ऽ", "¦": "ऽ", "§": "्", "¨": "्", "©": "्", "ª": "्",
    "«": "त्र", "¬": "त्र", "®": "र्", "¯": "ं", "°": "०", "±": "±", "²": "²", "³": "³", "´": "´", "µ": "µ",
    "¶": "“", "·": "”", "¸": "‘", "¹": "’", "º": "•", "»": "–", "¼": "—", "½": "½", "¾": "¾", "¿": "¿",
    "À": "अ", "Á": "आ", "Â": "इ", "Ã": "ई", "Ä": "उ", "Å": "ऊ", "Æ": "ऋ", "Ç": "ए", "È": "ऐ", "É": "ओ", "Ê": "औ",
    "vkS": "औ", "vks": "ओ", "vk": "आ", "v": "अ", "bZ": "ई", "b": "इ", "m": "उ", "Å": "ऊ", ",s": "ऐ", ",": "ए", "_": "ऋ"
  };

  for (const [k, v] of Object.entries(glyphMap)) {
    str = str.split(k).join(v);
  }

  // Pre-i matra shift: 'f' followed by characters
  // Match 'f' and move matra 'ि' after the consonant / conjunct
  str = str.replace(/f([dD\[xX\?pPNtT\>VBM<\.rRFnèuUIcHE;jyYo'\"lsg{«K]+)/g, "$1ि");
  str = str.replace(/f([a-zA-Z\~\|\`\_\[\]\?\>\<\{\}\"\:\;\<\>\,\.\/\'\\\=\+\-\*\&])/g, "$1ि");

  // Reph Z (र्)
  str = str.replace(/([a-zA-Z0-9\u0900-\u097F]+)Z/g, "र्$1");

  const singleMap = {
    "D": "क्", "d": "क", "[k": "ख", "[": "ख्", "X": "ग्", "x": "ग", "?k": "घ", "?": "घ्", "³": "ङ",
    "P": "च्", "p": "च", "N": "छ", "T": "ज्", "t": "ज", ">": "झ", "¥": "ञ",
    "V": "ट", "B": "ठ", "M": "ड", "<": "ढ", ".": "ण",
    "R": "त्", "r": "त", "Fk": "थ", "F": "थ्", "n": "द", "èk": "ध", "è": "ध्", "U": "न्", "u": "न",
    "I+k": "फ़", "I": "प्", "i": "प", "c": "ब", "C": "ब्", "Hk": "भ", "H": "भ्", "E": "म्", "e": "म",
    ";": "य", "j": "र", "Y": "ल्", "y": "ल", "O": "व्", "o": "व",
    "'k": "श", "'": "श्", "\"k": "ष", "\"": "ष्", "S": "स्", "l": "स", "g": "ह",
    "{k": "क्ष", "{": "क्ष्", "«": "त्र", "K": "ज्ञ",
    "k": "ा", "h": "ी", "q": "ु", "w": "ू", "`": "ृ", "s": "े", "S": "ै", "a": "ं", "%": "ः", "W": "ॉ"
  };

  for (const [k, v] of Object.entries(singleMap)) {
    str = str.split(k).join(v);
  }

  // Clean common residual artifacts
  str = str.replace(/osQ/g, "के");
  str = str.replace(/oQ/g, "क");
  str = str.replace(/osQ/g, "के");
  str = str.replace(/iz/g, "प्र");
  str = str.replace(/Ñ/g, "कृ");
  str = str.replace(/LFk/g, "स्थ");
  str = str.replace(/LF/g, "स्थ्");
  str = str.replace(/nks/g, "दो");

  return str;
}

async function extractPages() {
  const { PDFParse } = await import('pdf-parse');
  const buffer = fs.readFileSync('public/pdf/Class 12/12th Bharatiya Itihas ke kuchh Vishay-II/lhhs203.pdf');
  const parser = new PDFParse({ data: buffer });
  await parser.load();
  const res = await parser.getText();
  
  const pagesData = [];
  for (let i = 0; i < res.pages.length; i++) {
    const raw = res.pages[i].text;
    const hindi = krutiToUnicode(raw);
    pagesData.push({
      pageIndex: i + 1,
      raw: raw,
      decoded: hindi
    });
  }

  fs.writeFileSync('scripts/lhhs203_extracted.json', JSON.stringify(pagesData, null, 2), 'utf8');
  console.log(`Extracted ${pagesData.length} pages to scripts/lhhs203_extracted.json`);
  await parser.destroy();
}

extractPages().catch(console.error);
