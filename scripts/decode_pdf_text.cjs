const fs = require('fs');

function Convert_to_Unicode(krutidev_text) {
  let array_one = [
    "ñ","Q+","sas","J","K","C",
    "à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ò","ó","ô","õ","ö","÷","ø","ù","ú","û","ü","ý","þ","ÿ",
    "¡","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","®","¯","°","±","²","³","´","µ","¶","·","¸","¹","º","»","¼","½","¾","¿",
    "À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","×","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß",
    "kZ","k`","k~","k","i","h","q","w","`","s","S","a","%","W",
    "vkS","vks","vk","v","bZ","b","m","Å",",s",",","_",
    "D","d","[k","[","X","x","?k","?","³",
    "P","p","N","T","t",">","¥",
    "V","B","M","<",".",
    "R","r","Fk","F","n","èk","è","U","u",
    "I+k","I","c","C","Hk","H","E","e",
    ";","j","Y","y","O","o",
    "'k","'","\"k","\"","S","l","g",
    "{k","{","«","K"
  ];

  let array_two = [
    "्","फ़","स्र","श्र","ज्ञ","ऋ",
    "द्ग","द्घ","द्द","द्ध","द्न","द्ब","द्भू","द्म","द्य","द्र","द्व","ट्ट","ट्ठ","ड्ड","ड्ढ","ड्र","ढ्र","ष्ट","ष्ठ","श्व","ह्ण","ह्न","ह्य","ह्र","ह्म","ह्व","ञ्ज","ङ्ग","ङ्क","ङ्ख","ङ्घ",
    "ँ","ं","ः","़","ऽ","ऽ","्","्","्","्","त्र","त्र","र्","ं","०","±","²","³","´","µ","“","”","‘","’","•","–","—","½","¾","¿",
    "अ","आ","इ","ई","उ","ऊ","ऋ","ए","ऐ","ओ","औ","क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","प",
    "ाZ","ा`","ा~","ा","ि","ी","ु","ू","ृ","े","ै","ं","ः","ॅ",
    "औ","ओ","आ","अ","ई","इ","उ","ऊ","ऐ","ए","ऋ",
    "क्","क","ख","ख्","ग्","ग","घ","घ्","ङ",
    "च्","च","छ","ज्","ज","झ","ञ",
    "ट","ठ","ड","ढ","ण",
    "त्","त","थ","थ्","द","ध","ध्","न्","न",
    "फ़","प्","ब","ब्","भ","भ्","म्","म",
    "य","र","ल्","ल","व्","व",
    "श","श्","ष","ष्","स्","स","ह",
    "क्ष","क्ष्","त्र","ज्ञ"
  ];

  let modified_substring = krutidev_text;

  // Handle 'f' matra (ि) before consonants
  // In KrutiDev, 'f' comes before character.
  // We can do standard replacement:
  for (let i = 0; i < array_one.length; i++) {
    modified_substring = modified_substring.split(array_one[i]).join(array_two[i]);
  }

  // Handle f
  let pos = modified_substring.indexOf('f');
  while (pos !== -1) {
    if (pos + 1 < modified_substring.length) {
      let charAfter = modified_substring.charAt(pos + 1);
      modified_substring = modified_substring.substring(0, pos) + charAfter + 'ि' + modified_substring.substring(pos + 2);
    } else {
      modified_substring = modified_substring.substring(0, pos);
    }
    pos = modified_substring.indexOf('f');
  }

  // Handle Z (reph)
  pos = modified_substring.indexOf('Z');
  while (pos !== -1) {
    if (pos > 0) {
      let charBefore = modified_substring.charAt(pos - 1);
      modified_substring = modified_substring.substring(0, pos - 1) + 'र्' + charBefore + modified_substring.substring(pos + 1);
    } else {
      modified_substring = 'र्' + modified_substring.substring(1);
    }
    pos = modified_substring.indexOf('Z');
  }

  return modified_substring;
}

const raw = fs.readFileSync('scratch/pdf_1UlZs_text.txt', 'utf8');
const result = Convert_to_Unicode(raw);
fs.writeFileSync('scratch/pdf_1UlZs_unicode.txt', result, 'utf8');
console.log('--- CONVERTED UNICODE PREVIEW ---');
console.log(result.substring(0, 1500));
