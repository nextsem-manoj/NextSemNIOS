const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const coversDir = path.join(__dirname, '..', 'public', 'book-covers');
if (!fs.existsSync(coversDir)) {
  fs.mkdirSync(coversDir, { recursive: true });
}

const covers = [
  {
    name: 'class7-hindi-malhar.png',
    title: 'मल्हार',
    subTitle: 'कक्षा 7 के लिए हिंदी की पाठ्यपुस्तक',
    enTitle: 'MALHAR • CLASS VII',
    code: 'ghin1',
    themeColor: '#db2777',
    gradientTop: '#f43f5e',
    gradientBottom: '#831843',
    iconEmoji: '🪶',
    artSvg: `<circle cx="200" cy="330" r="110" fill="rgba(255,255,255,0.08)"/>
             <path d="M140 370 Q 200 240, 260 370 Q 200 340, 140 370" fill="#fbcfe8" opacity="0.85"/>
             <circle cx="200" cy="270" r="28" fill="#f472b6"/>
             <path d="M120 420 Q 200 380, 280 420" stroke="#fbcfe8" stroke-width="6" fill="none"/>`
  },
  {
    name: 'class7-math-ganita.png',
    title: 'गणित',
    subTitle: 'कक्षा 7 के लिए पाठ्यपुस्तक',
    enTitle: 'MATHEMATICS • CLASS VII',
    code: 'gemh1',
    themeColor: '#2563eb',
    gradientTop: '#3b82f6',
    gradientBottom: '#1e3a8a',
    iconEmoji: '📐',
    artSvg: `<polygon points="200,240 280,390 120,390" fill="none" stroke="#93c5fd" stroke-width="8"/>
             <circle cx="200" cy="320" r="45" fill="none" stroke="#60a5fa" stroke-width="6"/>
             <line x1="120" y1="390" x2="280" y2="240" stroke="#bfdbfe" stroke-width="4" stroke-dasharray="8 8"/>`
  },
  {
    name: 'class7-science-curiosity.png',
    title: 'विज्ञान',
    subTitle: 'कक्षा 7 के लिए पाठ्यपुस्तक',
    enTitle: 'SCIENCE • CLASS VII',
    code: 'gesc1',
    themeColor: '#059669',
    gradientTop: '#10b981',
    gradientBottom: '#064e3b',
    iconEmoji: '🔬',
    artSvg: `<ellipse cx="200" cy="320" rx="90" ry="36" fill="none" stroke="#6ee7b7" stroke-width="6" transform="rotate(-30 200 320)"/>
             <ellipse cx="200" cy="320" rx="90" ry="36" fill="none" stroke="#a7f3d0" stroke-width="6" transform="rotate(30 200 320)"/>
             <circle cx="200" cy="320" r="24" fill="#34d399"/>`
  },
  {
    name: 'class7-english-honeycomb.png',
    title: 'HONEYCOMB',
    subTitle: 'Textbook in English for Class VII',
    enTitle: 'ENGLISH • CLASS VII',
    code: 'gehc1',
    themeColor: '#d97706',
    gradientTop: '#f59e0b',
    gradientBottom: '#78350f',
    iconEmoji: '🐝',
    artSvg: `<path d="M200 240 L250 270 L250 330 L200 360 L150 330 L150 270 Z" fill="none" stroke="#fde68a" stroke-width="8"/>
             <path d="M260 340 L310 370 L310 430 L260 460 L210 430 L210 370 Z" fill="none" stroke="#fcd34d" stroke-width="6" opacity="0.6"/>
             <path d="M140 340 L190 370 L190 430 L140 460 L90 430 L90 370 Z" fill="none" stroke="#fcd34d" stroke-width="6" opacity="0.6"/>
             <circle cx="200" cy="300" r="18" fill="#fbbf24"/>`
  },
  {
    name: 'class7-social-science-our-pasts.png',
    title: 'हमारे अतीत - II',
    subTitle: 'कक्षा 7 के लिए इतिहास की पाठ्यपुस्तक',
    enTitle: 'OUR PASTS - II • CLASS VII',
    code: 'gess1',
    themeColor: '#c2410c',
    gradientTop: '#ea580c',
    gradientBottom: '#7c2d12',
    iconEmoji: '🏛️',
    artSvg: `<path d="M120 400 L280 400 L280 380 L120 380 Z" fill="#fed7aa"/>
             <rect x="140" y="270" width="20" height="110" fill="#ffedd5"/>
             <rect x="190" y="270" width="20" height="110" fill="#ffedd5"/>
             <rect x="240" y="270" width="20" height="110" fill="#ffedd5"/>
             <path d="M110 270 L290 270 L200 200 Z" fill="#fdba74"/>`
  },
  {
    name: 'class7-sanskrit-ruchira.png',
    title: 'रुचिरा',
    subTitle: 'द्वितीयो भागः • सप्तमवर्गाय संस्कृतपाठ्यपुस्तकम्',
    enTitle: 'RUCHIRA PART II • CLASS VII',
    code: 'gesk1',
    themeColor: '#9333ea',
    gradientTop: '#a855f7',
    gradientBottom: '#581c87',
    iconEmoji: '📜',
    artSvg: `<path d="M130 260 Q200 230 270 260 L270 380 Q200 350 130 380 Z" fill="none" stroke="#e9d5ff" stroke-width="8"/>
             <circle cx="200" cy="310" r="32" fill="#d8b4fe" opacity="0.7"/>
             <path d="M150 300 Q200 280 250 300 M150 330 Q200 310 250 330" stroke="#fae8ff" stroke-width="4"/>`
  },
  {
    name: 'class5-evs-looking-around.png',
    title: 'आस-पास',
    subTitle: 'कक्षा 5 के लिए पर्यावरण अध्ययन',
    enTitle: 'LOOKING AROUND • CLASS V',
    code: 'ehap1',
    themeColor: '#0d9488',
    gradientTop: '#14b8a6',
    gradientBottom: '#134e4a',
    iconEmoji: '🌿',
    artSvg: `<circle cx="200" cy="320" r="80" fill="rgba(255,255,255,0.1)"/>
             <path d="M200 230 C150 270 150 370 200 390 C250 370 250 270 200 230 Z" fill="#5eead4" opacity="0.8"/>
             <line x1="200" y1="240" x2="200" y2="380" stroke="#115e59" stroke-width="4"/>`
  }
];

async function generateCovers() {
  for (const c of covers) {
    const svg = `
    <svg width="400" height="560" viewBox="0 0 400 560" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c.gradientTop}" />
          <stop offset="100%" stop-color="${c.gradientBottom}" />
        </linearGradient>
        <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.4)" />
          <stop offset="40%" stop-color="rgba(255,255,255,0.1)" />
          <stop offset="100%" stop-color="rgba(0,0,0,0.3)" />
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.35"/>
        </filter>
      </defs>

      <!-- Main Book Background -->
      <rect x="0" y="0" width="400" height="560" rx="14" fill="url(#bgGrad)"/>

      <!-- Texture Overlay -->
      <rect x="0" y="0" width="400" height="560" rx="14" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>

      <!-- NCERT Top Header Band -->
      <rect x="20" y="24" width="360" height="42" rx="8" fill="rgba(0,0,0,0.35)"/>
      <text x="35" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#ffffff" letter-spacing="1">एनसीईआरटी • NCERT</text>
      <text x="365" y="50" text-anchor="end" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#fde68a">${c.code.toUpperCase()}</text>

      <!-- Decorative Art Section -->
      <g filter="url(#shadow)">
        ${c.artSvg}
      </g>

      <!-- Main Book Title Box -->
      <rect x="24" y="400" width="352" height="120" rx="12" fill="rgba(12, 19, 40, 0.88)" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>

      <!-- Main Title -->
      <text x="200" y="445" text-anchor="middle" font-family="system-ui, 'Noto Sans Devanagari', sans-serif" font-size="34" font-weight="900" fill="#ffffff">${c.title}</text>
      
      <!-- Subtitle -->
      <text x="200" y="475" text-anchor="middle" font-family="system-ui, 'Noto Sans Devanagari', sans-serif" font-size="13" font-weight="700" fill="#cbd5e1">${c.subTitle}</text>
      
      <!-- English Tag -->
      <text x="200" y="500" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fcd34d" letter-spacing="1.2">${c.enTitle}</text>

      <!-- 3D Book Spine Left Edge -->
      <rect x="0" y="0" width="22" height="560" rx="14" fill="url(#spineGrad)"/>
      <line x1="22" y1="0" x2="22" y2="560" stroke="rgba(0,0,0,0.35)" stroke-width="2"/>
    </svg>
    `;

    const destPath = path.join(coversDir, c.name);
    await sharp(Buffer.from(svg))
      .png({ quality: 95 })
      .toFile(destPath);
    console.log(`Generated: ${destPath}`);
  }
}

generateCovers().catch(console.error);
