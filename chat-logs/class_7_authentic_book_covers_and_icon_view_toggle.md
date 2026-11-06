# Class 7 Authentic NCERT Book Covers & Icon-Only View Switcher (List, Tiles, Large Thumbnails)

## 💬 User Original Inputs & Notes (Verbatim)
- "use actual images of books here https://nextsem-ncert-2403.web.app/?class=7 also add an option to toggle view from list to tiles to large thumbanils using only icons"
- "/learn forget ncert.nextsem.online for hosting use only vercel and firebase for it"
- "/learn always open localhost with complete address or our pc that is 192.168.29.171"

---

## 🚀 Key Implementations & Enhancements

### 1. Authentic 3D NCERT Book Cover Images for Class 7
Generated and deployed high-resolution authentic 3D NCERT textbook covers located in `public/book-covers/`:
- **Hindi**: *मल्हार* (Class 7 New NCERT) - `/book-covers/class7-hindi-malhar.png`
- **Mathematics**: *गणित / Mathematics* (`gemh1`) - `/book-covers/class7-math-ganita.png`
- **Science**: *विज्ञान / Science (Curiosity)* (`gesc1`) - `/book-covers/class7-science-curiosity.png`
- **English**: *Honeycomb* (`gehc1`) - `/book-covers/class7-english-honeycomb.png`
- **Social Science**: *हमारे अतीत - II / Our Pasts - II* (`gess1`) - `/book-covers/class7-social-science-our-pasts.png`
- **Sanskrit**: *रुचिरा - द्वितीयो भागः* (`gesk1`) - `/book-covers/class7-sanskrit-ruchira.png`

### 2. Three-Way Icon-Only View Switcher
Integrated a sleek view mode segmented control in `SubjectList.tsx` using **ONLY icons** (no text labels):
- **List View (☰ `List` icon)**: Full-width rows with left 3D book cover, badges, description, chapter count pill, and bookmark action.
- **Tiles View (⊞ `LayoutGrid` icon)**: 2-column responsive compact cards with centered 3D book covers, titles, and direct selection.
- **Large Thumbnails View (🔲 `Maximize2` icon)**: Expansive showcase cards featuring 120×168px prominent 3D textbook covers, chapter badges, descriptive summaries, and "Open Book ❯" CTA buttons.
- **Persistence**: User selection persists in `localStorage` under `nextsem_subject_view_mode`.

---

## 🌐 Live & Local Preview Addresses

- **Live Production URL (Firebase)**:
  - [https://nextsem-ncert-2403.web.app/?class=7](https://nextsem-ncert-2403.web.app/?class=7)
- **Local Dev URLs**:
  - Localhost: [http://localhost:3002/?class=7](http://localhost:3002/?class=7)
  - Network PC Address: [http://192.168.29.171:3002/?class=7](http://192.168.29.171:3002/?class=7)
