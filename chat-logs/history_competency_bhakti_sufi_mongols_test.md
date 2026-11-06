# Session Log: History Competency Test Suite (Class 12 Bhakti-Sufi & Class 11 Mongols)

## 📌 Context & Objectives
1. **Source Documents from Google Drive / NCERT PDFs**:
   - `https://drive.google.com/file/d/1UlZsH3Q4MA3u2j2BMh6ysaAxEhxAVVq7/view` $\to$ **Class 12 History Part 2 Theme 6 (`lhhs202.pdf`)**: *Bhakti-Sufi Traditions (धार्मिक विश्वासों में बदलाव और श्रद्धा ग्रंथ)*
   - `https://drive.google.com/file/d/1EzAmpQQI7gZjSKXPH-d0ELsmiWcn8Rqu/view` $\to$ **Class 11 History Theme 5 (`khhs105.pdf`)**: *Nomadic Empires: Genghis Khan & Mongols (यायावर साम्राज्य)*
2. **Key Requirements**:
   - High-yield, competency-based MCQs with Assertion-Reason and Match-the-Following formats.
   - Dual language support (Bilingual English + Hinglish).
   - **Dynamic Option Shuffling & Reshuffling** engine using Fisher-Yates shuffle algorithm on every quiz launch or reset so options do not appear in the same position (A/B/C/D) every time.
   - Dual modes: **Practice Mode** (immediate answer reveal + Hinglish explanation + NCERT citation) and **Timed Exam Mode** (20-minute timer, question palette, final scorecard with confetti).
   - Chapter filter buttons for `All Questions`, `Class 12 Bhakti-Sufi (lhhs202)`, and `Class 11 Mongols (khhs105)`.
   - Print & PDF export support with custom styling.

---

## 🛠️ Files Created & Updated

1. **`src/data/historyCompetencyTestData.ts`**:
   - 15 comprehensive competency-based questions with deep NCERT citations.
   - Balanced default correct answer distribution across all positions.
   - Covers core topics:
     - *Alvars & Nayanars* (Nalayira Divyaprabandham / Tamil Veda, Andal, Karaikkal Ammaiyar, Tevaram).
     - *Virashaiva / Lingayat Movement* (Basavanna, Vachanas, rejection of caste, rebirth & cremation).
     - *Chishti Sufi Silsila* (Shaikh Muinuddin Chishti, Nizamuddin Auliya, Baba Farid, Khanqah, Langar, Sama, Ziyarat).
     - *Bhakti Reformers* (Kabir - Bijak / Ulatbansi, Mirabai & Raidas).
     - *Genghis Khan / Temüjin* (1206 Quriltai title).
     - *Mongol Military & Administrative Innovation* (Decimal units - Tuman 10,000 warriors, Keshik imperial guard, Yasa legal code).
     - *Courier System & Silk Route Security* (Yam communication network, Paiza travel pass, Pax Mongolica).
     - *Yuan Dynasty* (Kublai Khan, capital at Dadu / Beijing, Marco Polo's accounts).

2. **`src/components/interactive/HistoryCompetencyTestView.tsx`**:
   - Interactive React component with dynamic option shuffling state `shuffledQuestions`.
   - Practice vs Timed Exam toggle, language toggle (Hinglish / English), question filter tabs, and full exam report.

3. **`src/App.tsx`**:
   - Integrated `HISTORY_COMPETENCY_TEST` view mode and routing params (`?view=history-test`, `?view=lhhs202`, `?view=khhs105`, `?view=bhakti-test`, `?view=mongol-test`).

4. **`src/components/AppDashboard.tsx`**:
   - Added interactive launcher card for the History Competency Test on the main dashboard.

---

## 🌐 Live Access URLs

- **Localhost**: `http://localhost:3002/?view=history-test`
- **Network / Mobile Access**: `http://192.168.29.171:3002/?view=history-test`
- **Direct Chapter Filter Links**:
  - Class 12 Bhakti-Sufi: `http://localhost:3002/?view=lhhs202`
  - Class 11 Mongols: `http://localhost:3002/?view=khhs105`
