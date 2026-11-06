const fs = require('fs');

function convertKrutiDevToUnicode(krutidev_text) {
  let modified_substring = krutidev_text;

  // Array of "Krutidev" characters to be replaced with corresponding "Unicode" characters
  const array_one = [
    "ñ", "Q+", "sas", "J", "K", "C",
    "à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ê", "ë", "ì", "í", "î", "ï", "ð", "ò", "ó", "ô", "õ", "ö", "÷", "ø", "ù", "ú", "û", "ü", "ý", "þ", "ÿ",
    "¡", "¢", "£", "¤", "¥", "¦", "§", "¨", "©", "ª", "«", "¬", "®", "¯", "°", "±", "²", "³", "´", "µ", "¶", "·", "¸", "¹", "º", "»", "¼", "½", "¾", "¿",
    "À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "×", "Ø", "Ù", "Ú", "Û", "Ü", "Ý", "Þ", "ß",
    "kZ", "k`", "k~", "k", "i", "h", "q", "w", "`", "s", "S", "a", "%", "W",
    "vkS", "vks", "vk", "v", "bZ", "b", "m", "Å", ",s", ",", "_",
    "D", "d", "[k", "[", "X", "x", "?k", "?", "³",
    "P", "p", "N", "T", "t", ">", "¥",
    "V", "B", "M", "<", ".",
    "R", "r", "Fk", "F", "n", "èk", "è", "U", "u",
    "I", "i", "I+k", "c", "C", "Hk", "H", "E", "e",
    ";", "j", "Y", "y", "O", "o",
    "\'k", "\'", "\"k", "\"", "S", "l", "g",
    "{k", "{", "«", "K"
  ];

  const array_two = [
    "्", "फ़", "स्र", "श्र", "ज्ञ", "ऋ",
    "द्ग", "द्घ", "द्द", "द्ध", "द्न", "द्ब", "द्भू", "द्म", "द्य", "द्र", "द्व", "ट्ट", "ट्ठ", "ड्ड", "ड्ढ", "ड्र", "ढ्र", "ष्ट", "ष्ठ", "श्व", "ह्ण", "ह्न", "ह्य", "ह्र", "ह्म", "ह्व", "ञ्ज", "ङ्ग", "ङ्क", "ङ्ख", "ङ्घ",
    "ँ", "ं", "ः", "़", "ऽ", "ऽ", "्", "्", "्", "्", "त्र", "त्र", "र्", "ं", "०", "±", "²", "³", "´", "µ", "“", "”", "‘", "’", "•", "–", "—", "½", "¾", "¿",
    "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प",
    "ाZ", "ा`", "ा~", "ा", "ि", "ी", "ु", "ू", "ृ", "े", "ै", "ं", "ः", "ॅ",
    "औ", "ओ", "आ", "अ", "ई", "इ", "उ", "ऊ", "ऐ", "ए", "ऋ",
    "क्", "क", "ख", "ख्", "ग्", "ग", "घ", "घ्", "ङ",
    "च्", "च", "छ", "ज्", "ज", "झ", "ञ",
    "ट", "ठ", "ड", "ढ", "ण",
    "त्", "त", "थ", "थ्", "द", "ध", "ध्", "न्", "न",
    "प्", "ि", "फ़", "ब", "ब्", "भ", "भ्", "म्", "म",
    "य", "र", "ल्", "ल", "व्", "व",
    "श", "श्", "ष", "ष्", "स्", "स", "ह",
    "क्ष", "क्ष्", "त्र", "ज्ञ"
  ];

  // Substitute special glyphs and patterns
  // First handle 'i' (ि matra) which appears before the consonant in Krutidev
  // In Krutidev, "i" is placed before consonant or cluster, e.g. "fd" -> "कि"
  // Let's replace 'f' followed by character(s)
  
  let text_len = modified_substring.length;

  // Let's use standard Krutidev to Unicode conversion logic
  let s = modified_substring;

  // 1. Replace symbols
  s = s.replace(/±/g, "Z+");
  s = s.replace(/Æ/g, "र्ऋ");

  // Matra 'i' handling
  // In KrutiDev, 'f' comes before consonant: f[consonant] -> [consonant]ि
  // Match 'f' followed by half consonant + full consonant etc.
  s = s.replace(/f([a-zA-Z\~\|\`\_\[\]\?\>\<\{\}\"\:\;\<\>\,\.\/\'\\\=\+\-\*\&])/g, "$1ि");
  // Multi half chars
  s = s.replace(/ि([Dk|Xk|Pk|Tk|Rk|Fk|èk|Uk|Ik|Ck|Hk|Ek|Yk|Ok|\'k|\"k|Sk])/g, "$1");

  // Let's run full standard Kruti regex replacements
  return s;
}

// Let's write a comprehensive script to convert and output the whole chapter into clean Hindi text!
