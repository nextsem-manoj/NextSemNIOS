# 📚 Bilingual Chapter PDF Merger Studio (द्विभाषी PDF विलय स्टूडियो)

> **StudyGuide by Nextsem** • Author: **Er. Manoj Kumar**

This directory provides both a **rich visual web interface** and a **command-line CLI tool** to upload an English Medium NCERT chapter PDF and Hindi Medium NCERT chapter PDF and merge them into a single unified bilingual study textbook.

---

## 🚀 2 Ways to Use This Tool

### 1. Visual Web Interface (In-Browser Studio)
- Open in Google Chrome via local dev server:
  - **Localhost**: [http://localhost:3002/bilingual-pdf-merger.html](http://localhost:3002/bilingual-pdf-merger.html)
  - **Network IP**: [http://192.168.29.170:3002/bilingual-pdf-merger.html](http://192.168.29.170:3002/bilingual-pdf-merger.html)
- Or simply open [`index.html`](./index.html) in any web browser directly!

#### Features in the Web Interface:
- **Dual Drag-and-Drop Dropzones**: Easily drop English chapter PDF and Hindi chapter PDF.
- **1-Click NCERT Sample Demos**: Test right away with Class 10 Science Ch 1 (Chemical Reactions) & Ch 2 (Acids, Bases & Salts).
- **4 Smart Merge Modes**:
  1. **Alternating / Interleaved (Recommended)**: EN Page 1 ➔ HI Page 1 ➔ EN Page 2 ➔ HI Page 2...
  2. **Side-by-Side 2-Up Landscape**: Left side English, Right side Hindi on a single widescreen landscape sheet.
  3. **Sequential (English First, then Hindi)**: Full English chapter followed by Hindi chapter.
  4. **Sequential (Hindi First, then English)**: Full Hindi chapter followed by English chapter.
- **Bilingual Header Stamps**: Subtle header banner showing medium and page numbers.
- **Live In-Browser Document Preview**: Read the merged PDF directly in browser before downloading.
- **Instant Client-Side Engine**: 100% private, runs in-memory using `pdf-lib` with zero upload lag.

---

### 2. Command Line Interface (CLI)
You can also merge any two PDFs directly from your terminal:

```bash
# Basic Usage:
node merge_cli.cjs <path_to_english.pdf> <path_to_hindi.pdf> [output.pdf] [strategy]

# Example (Alternating Mode):
node merge_cli.cjs "Science_Ch1_EN.pdf" "Vigyan_Ch1_HI.pdf" "Ch1_Bilingual.pdf" alternating

# Example (Side-by-Side Landscape Mode):
node merge_cli.cjs "Science_Ch1_EN.pdf" "Vigyan_Ch1_HI.pdf" "Ch1_SideBySide.pdf" side-by-side
```

---

## 📁 Directory Structure
```
pdf_hindi_and_eng/
├── index.html                           # Standalone browser interface (works offline)
├── merge_cli.cjs                        # Command line node tool
├── README.md                            # Documentation and guide
├── js/
│   ├── pdf-lib.min.js                   # Local PDF-Lib engine
│   └── confetti.browser.js              # Celebration confetti animation
└── Class10_Science_Ch1_Bilingual_Merged.pdf  # Sample generated bilingual PDF
```
