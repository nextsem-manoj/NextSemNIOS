# 👶 Kids Kingdom: Interactive Foundational Learning Hub (KG • Nursery • Class 1)

Welcome to the **Kids Foundational Learning Suite** developed for early learners (Ages 3 to 7: Toddlers, Nursery, LKG, UKG, and Class 1). This suite provides a playful, high-engagement interactive environment designed to build early literacy, numeracy, and fine-motor tracing skills across English, Maths, and Hindi.

---

## 🚀 Live Working Endpoints

### 💻 Local Development (Active on Port 3002)
- **Standalone Kid-Friendly Worksheet**: [http://localhost:3002/kids-kg.html](http://localhost:3002/kids-kg.html)
- **In-App React Integrated Hub**: [http://localhost:3002/?view=kids-kg](http://localhost:3002/?view=kids-kg)
- **Local Network Mobile URL (WiFi)**: [http://192.168.29.175:3002/kids-kg.html](http://192.168.29.175:3002/kids-kg.html)
- **PC Network IP URL**: [http://192.168.29.170:3002/kids-kg.html](http://192.168.29.170:3002/kids-kg.html)

### 🌐 Production Targets
- **Vercel**: `https://ncert-alpha.vercel.app/kids-kg`
- **Firebase**: `https://nextsem-ncert-2403.web.app/kids-kg`

---

## 🌟 Core Learning Modules & Interactive Features

### 1. 🔤 English Alphabets, Phonics & Sight Words
- **26 Alphabet Cards (A to Z)**: Every card displays uppercase & lowercase (`Aa`, `Bb`), vibrant emoji illustration (`🍎 Apple`, `⚽ Ball`), and phonics hint (`/æ/ sound`).
- **Real Speech Synthesis**: Tapping any letter card plays sweet voice pronunciation using the Web Speech API (`window.speechSynthesis`).
- **18 3-Letter CVC Sight Words**: Short-vowel words grouped by category (`🐱 Cat`, `🐕 Dog`, `☀️ Sun`, `🖊️ Pen`, `🚌 Bus`, `🧁 Cup`, etc.) with spelling letter breaks (`C - A - T = CAT`).
- **Interactive Letter Sound Quiz**: Kids hear a letter sound or word and pick the correct card from 4 choices, earning celebratory star points.

### 2. 🔢 Maths: Numbers 1-20, Counting Game & Shapes
- **Numbers 1 to 20 Flashcards**: Each number card displays the numeral, word name, and an exact count of visual icons (e.g. 5 shows 5 stars, 10 shows 10 balloons).
- **"How Many?" Interactive Counting Game**: Generates random collections of 1 to 10 playful items (`🍎`, `🚗`, `⭐`, `🧁`, `🧸`) and prompts kids to tap the matching number count with instant audio feedback (`playChime` / `playBoing`) and confetti animations.
- **2D Shapes & Primary Colors Explorer**: Circle (🔴), Square (🟦), Triangle (🔺), Star (⭐), Heart (💖) with color and shape recognition cards.

### 3. 🇮🇳 हिंदी वर्णमाला (Hindi Varnamala) व शब्द पहचान
- **स्वर (Vowels - अ से अः)**: 12 cards with authentic Hindi phonics (`अ से अनार`, `आ से आम`, `इ से इमली`, `ई से ईख`, `उ से उल्लू`, etc.).
- **मुख्य व्यंजन (Consonants - क से ज्ञ)**: 29 core consonant cards with visual association (`क से कबूतर`, `ख से खरगोश`, `ग से गमला`).
- **2 व 3 अक्षर वाले आसान शब्द**: चित्र सहित सरल शब्द (`घर 🏠`, `जल 💧`, `फल 🍎`, `कमल 🪷`, `कलम 🖊️`, `सड़क 🛣️`).
- **हिंदी अक्षर पहचान क्विज**: "बताओ कौन सा अक्षर है?" के साथ बहुविकल्पीय प्रश्नोत्तरी और स्टार रिवॉर्ड्स।

### 4. ✏️ Magic Chalk Drawing & Letter Tracing Pad
- **HTML5 Digital Chalkboard**: Slate-textured canvas for finger, mouse, or stylus writing.
- **Rainbow Color Palette**: White chalk, yellow chalk, sky blue, neon pink, lime green, and dynamic rainbow chalk mode.
- **Trace Guides**: Quick guide templates for uppercase letters (`A`, `B`, `C`), numbers (`1`, `2`, `3`), and Hindi akshars (`अ`, `आ`, `क`).
- **Undo & Clear**: Kid-friendly buttons to erase the board or undo the last stroke.

### 5. 🖨️ Printable A4 Worksheet Mode
- Tap the **"Print Sheet"** button anytime to switch into clean, printer-friendly A4 black-and-white tracing and coloring layout.
- Includes letter tracing boxes (`A - B - C - D`), number counting exercises, and Hindi akshar practice without wasting ink.

---

## 📁 File Structure

```
ncert.nextsem.online/
├── basics_for_kids_kg/
│   ├── index.html                  # Standalone full-featured interactive kids worksheet
│   ├── js/
│   │   └── confetti.browser.js     # Standalone offline celebration confetti script
│   └── README.md                   # This comprehensive documentation
├── public/
│   ├── kids-kg.html                # Served directly by Vite dev server & production CDN
│   ├── kids.html                   # Clean alias for /kids route
│   └── kids-foundational-worksheet.html
├── src/
│   ├── components/
│   │   ├── NavigationDrawer.tsx    # "Kids Foundational Hub" menu item under Academic Ecosystem
│   │   └── pages/
│   │       └── KidsFoundationalWorksheetView.tsx # In-app React component with breadcrumbs & iframe
│   └── App.tsx                     # Wired 'KIDS_FOUNDATIONAL_HUB' view mode & URL routing
├── vercel.json                     # Production rewrites for /kids-kg and /kids
└── firebase.json                   # Production rewrites for Firebase Hosting
```

---

## 🏆 Standards & Compliance Checklist

- [x] **Complete Top Breadcrumb Trail**: `🏠 Home ❯ Classrooms & Hubs ❯ 👶 Kids Foundational Hub` with clickable links.
- [x] **Bilingual Support (द्विभाषी)**: English, Hindi, and Hinglish pronunciation guidelines for parents & teachers.
- [x] **Zero Build Errors**: Verified with `tsc -b && vite build` (0 TypeScript / Rollup errors).
- [x] **Responsive & Touch-Friendly**: Full-screen adaptation across mobile smartphones, tablets, and desktop PC viewports.
- [x] **Local & Network IP Links**: Both `localhost:3002` and PC Network IP `192.168.29.170:3002` verified and provided.
