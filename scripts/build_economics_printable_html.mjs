import fs from 'fs';
import { CLASS_11_ECONOMICS_TEST_QUESTIONS } from './temp/class11EconomicsTestData.js';

const outputPath = 'public/class11-economics-ch1-ch2-printable-question-paper.html';

// Group questions by chapter
const ch1Questions = CLASS_11_ECONOMICS_TEST_QUESTIONS.filter(q => q.chapterNumber === 1);
const ch2Questions = CLASS_11_ECONOMICS_TEST_QUESTIONS.filter(q => q.chapterNumber === 2);

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Class 11 Economics Chapters 1 & 2 Printable Question Paper & Solutions | StudyGuide by Nextsem</title>
  <meta name="description" content="CBSE / NCERT Class 11 Economics (Indian Economic Development) Chapters 1 & 2 Official 30 Master MCQs printable question paper with answer key, detailed solutions, and OMR sheet (keec101 & keec102).">
  <link rel="icon" type="image/svg+xml" href="/app-logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@400;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
  <style>
    :root {
      --bg-page: #060c18;
      --bg-card: #0c1527;
      --bg-card-elevated: #111e38;
      --border-color: rgba(255, 255, 255, 0.1);
      --border-subtle: rgba(255, 255, 255, 0.06);
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-sub: #cbd5e1;
      --accent-emerald: #10b981;
      --accent-emerald-light: #34d399;
      --accent-blue: #3b82f6;
      --accent-amber: #f59e0b;
      --accent-purple: #8b5cf6;
      --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --header-shadow: 0 4px 20px rgba(0,0,0,0.5);
    }

    [data-theme="light"] {
      --bg-page: #f8fafc;
      --bg-card: #ffffff;
      --bg-card-elevated: #f1f5f9;
      --border-color: rgba(0, 0, 0, 0.12);
      --border-subtle: rgba(0, 0, 0, 0.06);
      --text-main: #0f172a;
      --text-muted: #64748b;
      --text-sub: #334155;
      --header-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-page);
      color: var(--text-main);
      font-family: var(--font-sans);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      transition: background-color 0.2s ease, color 0.2s ease;
    }

    /* Sticky Desktop Top Navbar */
    .top-nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(6, 12, 24, 0.94);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-color);
      padding: 0.65rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      box-shadow: var(--header-shadow);
    }
    [data-theme="light"] .top-nav { background: rgba(255, 255, 255, 0.94); }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      text-decoration: none;
      color: inherit;
      flex-shrink: 0;
    }
    .brand-logo-emblem {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #10b981 0%, #047857 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 900;
      font-size: 1.3rem;
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
    }
    .brand-text { display: flex; flex-direction: column; }
    .brand-title {
      font-size: 1.15rem;
      font-weight: 900;
      letter-spacing: -0.02em;
      line-height: 1.1;
      background: linear-gradient(90deg, #10b981, #34d399);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .brand-subtitle {
      font-size: 0.65rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    /* Complete Desktop Breadcrumbs */
    .breadcrumb-trail {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.82rem;
      color: var(--text-muted);
      overflow-x: auto;
      white-space: nowrap;
      margin-left: 0.75rem;
    }
    .breadcrumb-trail a {
      color: var(--text-muted);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.15s ease;
    }
    .breadcrumb-trail a:hover { color: var(--accent-emerald); }
    .breadcrumb-trail .sep { opacity: 0.5; font-size: 0.7rem; }
    .breadcrumb-trail .active { color: var(--accent-emerald); font-weight: 800; }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      flex-shrink: 0;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      padding: 0.5rem 0.95rem;
      font-size: 0.82rem;
      font-weight: 800;
      border-radius: 8px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .btn-emerald {
      background: linear-gradient(135deg, #10b981, #059669);
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
    }
    .btn-emerald:hover {
      background: linear-gradient(135deg, #059669, #047857);
      transform: translateY(-1px);
    }
    .btn-outline {
      background: rgba(255, 255, 255, 0.05);
      border-color: var(--border-color);
      color: var(--text-main);
    }
    [data-theme="light"] .btn-outline { background: #f1f5f9; }
    .btn-outline:hover {
      border-color: var(--accent-emerald);
      color: var(--accent-emerald);
    }
    .theme-toggle-btn {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      background: var(--bg-card);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.05rem;
      transition: all 0.2s ease;
    }

    /* Container */
    .container {
      max-width: 980px;
      margin: 0 auto;
      padding: 1.5rem 1rem 4rem;
    }

    /* Digital Hero Deck */
    .digital-hero {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.06) 100%);
      border: 1.5px solid rgba(16, 185, 129, 0.3);
      border-radius: 16px;
      padding: 1.5rem 1.75rem;
      margin-bottom: 1.5rem;
      position: relative;
    }
    .hero-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 0.75rem;
    }
    .hero-badge {
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge-class { background: rgba(16, 185, 129, 0.18); color: var(--accent-emerald); border: 1px solid rgba(16, 185, 129, 0.35); }
    .badge-marks { background: rgba(245, 158, 11, 0.18); color: var(--accent-amber); border: 1px solid rgba(245, 158, 11, 0.35); }
    .badge-time { background: rgba(59, 130, 246, 0.18); color: var(--accent-blue); border: 1px solid rgba(59, 130, 246, 0.35); }
    .badge-code { background: rgba(139, 92, 246, 0.18); color: var(--accent-purple); border: 1px solid rgba(139, 92, 246, 0.35); font-family: var(--font-mono); }

    .hero-title {
      font-size: 1.5rem;
      font-weight: 900;
      line-height: 1.3;
      margin-bottom: 0.5rem;
      color: var(--text-main);
    }
    .hero-subtitle {
      font-size: 0.88rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    /* Print Controls Bar */
    .print-controls-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 0.9rem 1.25rem;
      margin-bottom: 1.75rem;
    }
    .filter-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }
    .filter-label {
      font-size: 0.78rem;
      font-weight: 800;
      color: var(--text-muted);
      text-transform: uppercase;
      margin-right: 0.25rem;
    }
    .pill-btn {
      background: var(--bg-card-elevated);
      border: 1px solid var(--border-color);
      color: var(--text-sub);
      font-size: 0.76rem;
      font-weight: 700;
      padding: 0.4rem 0.85rem;
      border-radius: 9999px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .pill-btn:hover {
      border-color: var(--accent-emerald);
      color: var(--text-main);
    }
    .pill-btn.active {
      background: rgba(16, 185, 129, 0.18);
      border-color: var(--accent-emerald);
      color: var(--accent-emerald);
      font-weight: 800;
    }

    /* Official School Print Header (Displayed only on print or paper preview) */
    .school-exam-header {
      display: none;
      border: 2px solid #000000;
      padding: 14px 18px;
      margin-bottom: 20px;
      background: #ffffff;
      color: #000000;
      text-align: center;
    }
    .seh-school {
      font-size: 14pt;
      font-weight: 900;
      letter-spacing: 0.05em;
      margin-bottom: 2px;
    }
    .seh-board {
      font-size: 10pt;
      font-weight: 700;
      color: #333333;
      margin-bottom: 4px;
    }
    .seh-exam {
      font-size: 11pt;
      font-weight: 800;
      text-decoration: underline;
      margin-bottom: 6px;
    }
    .seh-syllabus {
      font-size: 9.5pt;
      color: #222222;
      margin-bottom: 10px;
    }
    .seh-meta-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 8px;
      border-top: 1.5px solid #000000;
      border-bottom: 1.5px solid #000000;
      padding: 8px 4px;
      font-size: 9pt;
      text-align: left;
      margin-bottom: 8px;
    }
    .seh-instructions {
      font-size: 8.5pt;
      text-align: left;
      line-height: 1.35;
      color: #111111;
    }

    /* Section Separator */
    .section-banner {
      background: var(--bg-card);
      border: 1.5px solid var(--border-color);
      border-left: 4px solid var(--accent-emerald);
      border-radius: 10px;
      padding: 0.85rem 1.25rem;
      margin: 2rem 0 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .section-title {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--text-main);
    }
    .section-marks {
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--accent-emerald);
      background: rgba(16, 185, 129, 0.12);
      padding: 2px 10px;
      border-radius: 9999px;
    }

    /* Question Card */
    .question-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.25rem;
      margin-bottom: 1.25rem;
      page-break-inside: avoid;
      transition: border-color 0.15s ease;
    }
    .question-card:hover {
      border-color: rgba(16, 185, 129, 0.4);
    }
    .q-top-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.65rem;
    }
    .q-num-pill {
      font-size: 0.72rem;
      font-weight: 800;
      color: var(--accent-emerald);
      background: rgba(16, 185, 129, 0.14);
      padding: 2px 8px;
      border-radius: 6px;
      font-family: var(--font-mono);
    }
    .q-ref-pill {
      font-size: 0.72rem;
      color: var(--text-muted);
      font-family: var(--font-mono);
    }
    .q-text-en {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--text-main);
      line-height: 1.45;
      margin-bottom: 0.4rem;
    }
    .q-text-hi {
      font-size: 0.88rem;
      color: var(--text-sub);
      line-height: 1.45;
      margin-bottom: 0.85rem;
      padding-left: 0.5rem;
      border-left: 2px solid rgba(16, 185, 129, 0.35);
    }

    /* Options Grid */
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.65rem;
      margin-bottom: 0.75rem;
    }
    @media (max-width: 640px) {
      .options-grid { grid-template-columns: 1fr; }
    }
    .option-item {
      display: flex;
      align-items: flex-start;
      gap: 0.55rem;
      background: var(--bg-card-elevated);
      border: 1px solid var(--border-subtle);
      border-radius: 8px;
      padding: 0.6rem 0.8rem;
      font-size: 0.84rem;
      color: var(--text-main);
      line-height: 1.35;
    }
    .option-item.correct-opt {
      border-color: #10b981;
      background: rgba(16, 185, 129, 0.12);
      font-weight: 700;
    }
    .opt-circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1.5px solid var(--text-muted);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.68rem;
      font-weight: 800;
      flex-shrink: 0;
      margin-top: 2px;
      color: var(--text-sub);
    }
    .option-item.correct-opt .opt-circle {
      border-color: #10b981;
      background: #10b981;
      color: #ffffff;
    }

    /* Solution Box (Teacher / Answer Key Mode) */
    .solution-box {
      margin-top: 0.85rem;
      background: rgba(16, 185, 129, 0.06);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: 8px;
      padding: 0.75rem 1rem;
      font-size: 0.82rem;
      line-height: 1.5;
    }
    .solution-header {
      font-size: 0.75rem;
      font-weight: 800;
      color: #10b981;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.35rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .solution-text {
      color: var(--text-sub);
      margin-bottom: 0.4rem;
    }
    .concept-tag {
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--accent-emerald-light);
      background: rgba(16, 185, 129, 0.15);
      padding: 2px 8px;
      border-radius: 4px;
      display: inline-block;
    }

    /* OMR Response Grid */
    .omr-sheet-wrap {
      background: var(--bg-card);
      border: 1.5px solid var(--border-color);
      border-radius: 12px;
      padding: 1.5rem;
      margin: 2.5rem 0 1.5rem;
      page-break-inside: avoid;
    }
    .omr-title {
      font-size: 1.15rem;
      font-weight: 900;
      text-align: center;
      margin-bottom: 0.3rem;
      color: var(--text-main);
    }
    .omr-subtitle {
      font-size: 0.78rem;
      text-align: center;
      color: var(--text-muted);
      margin-bottom: 1.25rem;
    }
    .omr-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem 1.5rem;
    }
    @media (max-width: 640px) {
      .omr-grid { grid-template-columns: 1fr; }
    }
    .omr-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.35rem 0.5rem;
      border-bottom: 1px dashed var(--border-color);
      font-size: 0.82rem;
    }
    .omr-q-num {
      font-weight: 800;
      width: 44px;
      font-family: var(--font-mono);
      color: var(--text-muted);
    }
    .omr-bubbles {
      display: flex;
      gap: 0.5rem;
    }
    .omr-bubble {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1.5px solid var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.68rem;
      font-weight: 800;
      color: var(--text-muted);
      cursor: pointer;
    }
    .omr-bubble.filled {
      background: #10b981;
      border-color: #10b981;
      color: #ffffff;
    }

    /* Signature Block */
    .sign-block {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 1.75rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
      text-align: center;
      font-size: 0.8rem;
      color: var(--text-muted);
    }
    .sign-line {
      margin-top: 2rem;
      border-top: 1px solid var(--text-muted);
      padding-top: 4px;
      font-weight: 700;
    }

    /* Print Stylesheet (Pure A4 Paper Mastery) */
    @media print {
      body {
        background: #ffffff !important;
        color: #000000 !important;
        font-family: 'Times New Roman', Times, serif !important;
        font-size: 10pt !important;
        line-height: 1.35 !important;
      }
      .top-nav, .digital-hero, .print-controls-bar, .theme-toggle-btn, .btn, .no-print {
        display: none !important;
      }
      .container {
        max-width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      .school-exam-header {
        display: block !important;
        margin-bottom: 12px !important;
        border: 2px solid #000000 !important;
      }
      .section-banner {
        background: none !important;
        border: 1px solid #000000 !important;
        border-left: 4px solid #000000 !important;
        color: #000000 !important;
        padding: 6px 10px !important;
        margin: 12px 0 8px !important;
      }
      .section-title, .section-marks {
        color: #000000 !important;
        background: none !important;
      }
      .question-card {
        background: #ffffff !important;
        border: 1px solid #cccccc !important;
        color: #000000 !important;
        box-shadow: none !important;
        margin-bottom: 8px !important;
        padding: 8px 10px !important;
        page-break-inside: avoid !important;
      }
      .q-num-pill {
        border: 1px solid #000000 !important;
        background: none !important;
        color: #000000 !important;
        font-weight: bold !important;
      }
      .q-ref-pill {
        color: #333333 !important;
        font-size: 8.5pt !important;
      }
      .q-text-en {
        color: #000000 !important;
        font-size: 10pt !important;
        font-weight: bold !important;
      }
      .q-text-hi {
        color: #222222 !important;
        font-size: 9pt !important;
        border-left: 2px solid #888888 !important;
        margin-bottom: 6px !important;
      }
      .options-grid {
        gap: 4px !important;
        margin-bottom: 4px !important;
      }
      .option-item {
        background: #ffffff !important;
        border: 1px solid #999999 !important;
        color: #000000 !important;
        padding: 4px 6px !important;
        font-size: 9pt !important;
      }
      .opt-circle {
        border: 1px solid #000000 !important;
        color: #000000 !important;
      }
      /* If in Student Paper Mode, hide solutions */
      body.hide-solutions-print .solution-box {
        display: none !important;
      }
      /* If in Teacher / Solutions Mode, show solutions */
      body.show-solutions-print .solution-box {
        display: block !important;
        background: #fbfbfb !important;
        border: 1px solid #888888 !important;
        color: #000000 !important;
        padding: 6px 8px !important;
        font-size: 8.5pt !important;
      }
      body.show-solutions-print .option-item.correct-opt {
        border: 1.5px solid #000000 !important;
        font-weight: bold !important;
        background: #f0f0f0 !important;
      }
      body.show-solutions-print .solution-header {
        color: #000000 !important;
        font-weight: bold !important;
      }
      body.show-solutions-print .solution-text {
        color: #111111 !important;
      }
      body.show-solutions-print .concept-tag {
        border: 1px solid #000000 !important;
        color: #000000 !important;
        background: none !important;
      }
      .omr-sheet-wrap {
        border: 1.5px solid #000000 !important;
        background: #ffffff !important;
        color: #000000 !important;
        padding: 10px !important;
        margin-top: 14px !important;
        page-break-before: auto !important;
      }
      .omr-title { color: #000000 !important; }
      .omr-subtitle { color: #333333 !important; }
      .omr-row { border-bottom: 1px dashed #666666 !important; }
      .omr-q-num { color: #000000 !important; }
      .omr-bubble { border: 1.5px solid #000000 !important; color: #000000 !important; }
      .sign-block { border-top: 1px solid #000000 !important; color: #000000 !important; }
      .sign-line { border-top: 1px solid #000000 !important; color: #000000 !important; }
    }
  </style>
</head>
<body class="hide-solutions-print">

  <!-- Top Sticky Navigation Bar -->
  <nav class="top-nav" aria-label="Print Navigation">
    <div style="display: flex; align-items: center; gap: 0.5rem; overflow: hidden;">
      <a href="/" class="brand-group" title="NextSem Academy">
        <div class="brand-logo-emblem">Σ</div>
        <div class="brand-text">
          <span class="brand-title">StudyGuide</span>
          <span class="brand-subtitle">by Nextsem</span>
        </div>
      </a>

      <!-- Desktop Breadcrumbs -->
      <div class="breadcrumb-trail">
        <a href="/">Home</a>
        <span class="sep">❯</span>
        <a href="/?view=classes">Classes</a>
        <span class="sep">❯</span>
        <a href="/?class=11">Class 11</a>
        <span class="sep">❯</span>
        <a href="/?class=11&subject=c11-economics-stats">Economics</a>
        <span class="sep">❯</span>
        <a href="/?view=class11-economics-test">Interactive Test</a>
        <span class="sep">❯</span>
        <span class="active">PDF Printable Paper</span>
      </div>
    </div>

    <div class="nav-actions">
      <a href="/?view=class11-economics-test" class="btn btn-outline" title="Return to Interactive App Test">
        <span>⚡ Interactive Mode</span>
      </a>
      <button class="btn btn-emerald" onclick="handlePrint()" title="Print this paper or save as PDF">
        <span>🖨️ Print / Save PDF</span>
      </button>
      <button class="theme-toggle-btn" onclick="toggleTheme()" id="theme-btn" title="Toggle Dark/Light Mode">
        🌙
      </button>
    </div>
  </nav>

  <div class="container">

    <!-- Digital Interactive Header Deck -->
    <header class="digital-hero">
      <div class="hero-badge-row">
        <span class="hero-badge badge-class">CBSE / NCERT Class 11 Economics</span>
        <span class="hero-badge badge-marks">Total Marks: 30</span>
        <span class="hero-badge badge-time">Time: 60 Mins</span>
        <span class="hero-badge badge-code">keec101 & keec102</span>
      </div>
      <h1 class="hero-title">Indian Economic Development: Chapters 1 & 2 Master Question Paper</h1>
      <p class="hero-subtitle">
        Authentic assessment paper based strictly on NCERT Class 11 Textbook: <strong>Chapter 1 (Eve of Independence)</strong> & <strong>Chapter 2 (1950–1990 Planning, Land Reforms, Green Revolution & IPR 1956)</strong>. Ready for offline student testing, school exams, and teacher evaluation.
      </p>
    </header>

    <!-- Interactive Print Settings Bar -->
    <div class="print-controls-bar">
      <div class="filter-group">
        <span class="filter-label">Print Format:</span>
        <button class="pill-btn active" id="btn-mode-student" onclick="setPrintMode('student')">
          📝 Student Paper (No Solutions)
        </button>
        <button class="pill-btn" id="btn-mode-teacher" onclick="setPrintMode('teacher')">
          📖 Teacher Key (With Solutions)
        </button>
      </div>

      <div class="filter-group">
        <span class="filter-label">Language:</span>
        <button class="pill-btn active" id="btn-lang-both" onclick="setLanguage('both')">
          Bilingual (Eng + Hinglish)
        </button>
        <button class="pill-btn" id="btn-lang-en" onclick="setLanguage('en')">
          English Only
        </button>
        <button class="pill-btn" id="btn-lang-hi" onclick="setLanguage('hi')">
          Hinglish Only
        </button>
      </div>

      <div class="filter-group">
        <span class="filter-label">Filter:</span>
        <button class="pill-btn active" id="btn-filter-all" onclick="filterSections('all')">
          All (30 Qs)
        </button>
        <button class="pill-btn" id="btn-filter-ch1" onclick="filterSections('ch1')">
          Section A: Ch 1 (15 Qs)
        </button>
        <button class="pill-btn" id="btn-filter-ch2" onclick="filterSections('ch2')">
          Section B: Ch 2 (15 Qs)
        </button>
      </div>
    </div>

    <!-- Official School Exam Paper Header (Visible on Print) -->
    <div class="school-exam-header" id="school-header">
      <div class="seh-school">NEXTSEM ACADEMY • SENIOR SECONDARY MODEL EXAMINATION (2026-27)</div>
      <div class="seh-board">CENTRAL BOARD OF SECONDARY EDUCATION / NCERT CURRICULUM ASSESSMENT</div>
      <div class="seh-exam">CLASS XI • ECONOMICS (INDIAN ECONOMIC DEVELOPMENT) • UNIT TEST</div>
      <div class="seh-syllabus">
        <strong>Prescribed Syllabus:</strong> Unit 1: Development Policies & Experience (1947–1990) • Chapter 1: Indian Economy on the Eve of Independence (keec101) & Chapter 2: Indian Economy 1950–1990 (keec102)
      </div>
      <div class="seh-meta-grid">
        <div><strong>Student Name:</strong> __________________________________________</div>
        <div><strong>Roll No:</strong> __________________</div>
        <div><strong>Date:</strong> __________________</div>
        <div><strong>Class & Section:</strong> Class 11 - _____</div>
        <div><strong>Time Allowed:</strong> 60 Minutes</div>
        <div><strong>Maximum Marks:</strong> 30 Marks</div>
      </div>
      <div class="seh-instructions">
        <strong>General Instructions:</strong><br>
        1. All 30 Multiple Choice Questions are compulsory. Each question carries 1 Mark.<br>
        2. <strong>Section A (Q1 to Q15):</strong> Indian Economy on the Eve of Independence (Agricultural stagnation, Handicrafts, Trade, Demographics & Railways).<br>
        3. <strong>Section B (Q16 to Q30):</strong> Indian Economy 1950–1990 (Planning Commission, 5-Year Goals, Land Reforms, Green Revolution & IPR 1956).<br>
        4. Select exactly one correct alternative and blacken/shade the corresponding bubble in the OMR response sheet at the end.
      </div>
    </div>

    <!-- SECTION A: CHAPTER 1 -->
    <div id="section-a-wrap">
      <div class="section-banner">
        <div>
          <span style="font-size: 0.72rem; font-weight: 800; color: var(--accent-emerald); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 2px;">
            Unit 1 • Part A
          </span>
          <h2 class="section-title">SECTION A: Indian Economy on the Eve of Independence (1947)</h2>
        </div>
        <span class="section-marks">15 Questions • 15 Marks</span>
      </div>

      <div class="questions-list">
        ${ch1Questions.map((q, idx) => {
          const qNum = idx + 1;
          return `
          <article class="question-card" id="card-${q.id}">
            <div class="q-top-meta">
              <span class="q-num-pill">Q.${qNum < 10 ? '0' + qNum : qNum} [1 Mark]</span>
              <span class="q-ref-pill">${escapeHtml(q.ncertReference)} • ${escapeHtml(q.difficulty)}</span>
            </div>
            <p class="q-text-en lang-en-el">${escapeHtml(q.questionText)}</p>
            <p class="q-text-hi lang-hi-el">🇮🇳 ${escapeHtml(q.questionTextHinglish)}</p>

            <div class="options-grid">
              ${q.options.map((opt, oIdx) => {
                const optLetter = String.fromCharCode(65 + oIdx);
                const isCorrect = oIdx === q.correctIndex;
                const optHinglish = q.optionsHinglish ? q.optionsHinglish[oIdx] : '';
                return `
                <div class="option-item ${isCorrect ? 'correct-opt' : ''}">
                  <span class="opt-circle">${optLetter}</span>
                  <div>
                    <span class="lang-en-el">${escapeHtml(opt)}</span>
                    ${optHinglish ? `<span class="lang-hi-el" style="display: block; font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(optHinglish)}</span>` : ''}
                  </div>
                </div>
                `;
              }).join('')}
            </div>

            <!-- Solution Block (Toggled) -->
            <div class="solution-block solution-box">
              <div class="solution-header">
                <span>✓ Correct Answer: Option ${String.fromCharCode(65 + q.correctIndex)}</span>
                <span style="font-weight: normal; opacity: 0.8;">• NCERT Explanation</span>
              </div>
              <p class="solution-text">${escapeHtml(q.detailedSolutionHinglish)}</p>
              ${q.formulaOrConcept ? `<span class="concept-tag">📌 ${escapeHtml(q.formulaOrConcept)}</span>` : ''}
            </div>
          </article>
          `;
        }).join('')}
      </div>
    </div>

    <!-- SECTION B: CHAPTER 2 -->
    <div id="section-b-wrap">
      <div class="section-banner" style="border-left-color: var(--accent-blue);">
        <div>
          <span style="font-size: 0.72rem; font-weight: 800; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 2px;">
            Unit 1 • Part B
          </span>
          <h2 class="section-title">SECTION B: Indian Economy (1950–1990)</h2>
        </div>
        <span class="section-marks" style="color: var(--accent-blue); background: rgba(59, 130, 246, 0.12);">15 Questions • 15 Marks</span>
      </div>

      <div class="questions-list">
        ${ch2Questions.map((q, idx) => {
          const qNum = 15 + idx + 1;
          return `
          <article class="question-card" id="card-${q.id}">
            <div class="q-top-meta">
              <span class="q-num-pill" style="color: var(--accent-blue); background: rgba(59, 130, 246, 0.14);">Q.${qNum} [1 Mark]</span>
              <span class="q-ref-pill">${escapeHtml(q.ncertReference)} • ${escapeHtml(q.difficulty)}</span>
            </div>
            <p class="q-text-en lang-en-el">${escapeHtml(q.questionText)}</p>
            <p class="q-text-hi lang-hi-el" style="border-left-color: rgba(59, 130, 246, 0.35);">🇮🇳 ${escapeHtml(q.questionTextHinglish)}</p>

            <div class="options-grid">
              ${q.options.map((opt, oIdx) => {
                const optLetter = String.fromCharCode(65 + oIdx);
                const isCorrect = oIdx === q.correctIndex;
                const optHinglish = q.optionsHinglish ? q.optionsHinglish[oIdx] : '';
                return `
                <div class="option-item ${isCorrect ? 'correct-opt' : ''}">
                  <span class="opt-circle">${optLetter}</span>
                  <div>
                    <span class="lang-en-el">${escapeHtml(opt)}</span>
                    ${optHinglish ? `<span class="lang-hi-el" style="display: block; font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(optHinglish)}</span>` : ''}
                  </div>
                </div>
                `;
              }).join('')}
            </div>

            <!-- Solution Block (Toggled) -->
            <div class="solution-block solution-box" style="border-color: rgba(59, 130, 246, 0.25); background: rgba(59, 130, 246, 0.05);">
              <div class="solution-header" style="color: var(--accent-blue);">
                <span>✓ Correct Answer: Option ${String.fromCharCode(65 + q.correctIndex)}</span>
                <span style="font-weight: normal; opacity: 0.8;">• NCERT Explanation</span>
              </div>
              <p class="solution-text">${escapeHtml(q.detailedSolutionHinglish)}</p>
              ${q.formulaOrConcept ? `<span class="concept-tag" style="color: #60a5fa; background: rgba(59, 130, 246, 0.15);">📌 ${escapeHtml(q.formulaOrConcept)}</span>` : ''}
            </div>
          </article>
          `;
        }).join('')}
      </div>
    </div>

    <!-- OMR Response Sheet (For Student Test Practice) -->
    <section class="omr-sheet-wrap" id="omr-section">
      <h3 class="omr-title">OFFICIAL OMR CANDIDATE RESPONSE SHEET</h3>
      <p class="omr-subtitle">Darken completely the appropriate circle for each question (e.g. ⬤). Use Blue/Black Ballpoint pen only.</p>

      <div class="omr-grid">
        ${Array.from({ length: 30 }, (_, i) => {
          const qNum = i + 1;
          const correctLetter = String.fromCharCode(65 + CLASS_11_ECONOMICS_TEST_QUESTIONS[i].correctIndex);
          return `
          <div class="omr-row" data-q="${qNum}">
            <span class="omr-q-num">Q.${qNum < 10 ? '0' + qNum : qNum}</span>
            <div class="omr-bubbles">
              <span class="omr-bubble" onclick="toggleBubble(this)">A</span>
              <span class="omr-bubble" onclick="toggleBubble(this)">B</span>
              <span class="omr-bubble" onclick="toggleBubble(this)">C</span>
              <span class="omr-bubble" onclick="toggleBubble(this)">D</span>
            </div>
            <span class="teacher-key-omr" style="display: none; font-size: 0.72rem; font-weight: 800; color: #10b981;">[${correctLetter}]</span>
          </div>
          `;
        }).join('')}
      </div>

      <div class="sign-block">
        <div>
          <div class="sign-line">Candidate Signature</div>
        </div>
        <div>
          <div class="sign-line">Invigilator Signature</div>
        </div>
        <div>
          <div class="sign-line">Marks Awarded: _____ / 30</div>
        </div>
      </div>
    </section>

  </div>

  <script>
    // Theme toggle
    function toggleTheme() {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      document.getElementById('theme-btn').textContent = next === 'dark' ? '🌙' : '☀️';
    }

    // Initialize theme from storage
    (function initTheme() {
      const saved = localStorage.getItem('theme');
      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
        document.getElementById('theme-btn').textContent = saved === 'dark' ? '🌙' : '☀️';
      }
    })();

    // Print Mode (Student vs Teacher)
    function setPrintMode(mode) {
      const body = document.body;
      const btnStudent = document.getElementById('btn-mode-student');
      const btnTeacher = document.getElementById('btn-mode-teacher');
      const teacherKeyEls = document.querySelectorAll('.teacher-key-omr');

      if (mode === 'student') {
        body.classList.remove('show-solutions-print');
        body.classList.add('hide-solutions-print');
        btnStudent.classList.add('active');
        btnTeacher.classList.remove('active');
        teacherKeyEls.forEach(el => el.style.display = 'none');
      } else {
        body.classList.remove('hide-solutions-print');
        body.classList.add('show-solutions-print');
        btnTeacher.classList.add('active');
        btnStudent.classList.remove('active');
        teacherKeyEls.forEach(el => el.style.display = 'inline-block');
      }
    }

    // Language Filter
    function setLanguage(lang) {
      const enEls = document.querySelectorAll('.lang-en-el');
      const hiEls = document.querySelectorAll('.lang-hi-el');
      const btnBoth = document.getElementById('btn-lang-both');
      const btnEn = document.getElementById('btn-lang-en');
      const btnHi = document.getElementById('btn-lang-hi');

      [btnBoth, btnEn, btnHi].forEach(b => b.classList.remove('active'));

      if (lang === 'en') {
        btnEn.classList.add('active');
        enEls.forEach(el => el.style.display = 'block');
        hiEls.forEach(el => el.style.display = 'none');
      } else if (lang === 'hi') {
        btnHi.classList.add('active');
        enEls.forEach(el => el.style.display = 'none');
        hiEls.forEach(el => el.style.display = 'block');
      } else {
        btnBoth.classList.add('active');
        enEls.forEach(el => el.style.display = 'block');
        hiEls.forEach(el => el.style.display = 'block');
      }
    }

    // Section Filter
    function filterSections(sec) {
      const secA = document.getElementById('section-a-wrap');
      const secB = document.getElementById('section-b-wrap');
      const btnAll = document.getElementById('btn-filter-all');
      const btnCh1 = document.getElementById('btn-filter-ch1');
      const btnCh2 = document.getElementById('btn-filter-ch2');

      [btnAll, btnCh1, btnCh2].forEach(b => b.classList.remove('active'));

      if (sec === 'ch1') {
        btnCh1.classList.add('active');
        secA.style.display = 'block';
        secB.style.display = 'none';
      } else if (sec === 'ch2') {
        btnCh2.classList.add('active');
        secA.style.display = 'none';
        secB.style.display = 'block';
      } else {
        btnAll.classList.add('active');
        secA.style.display = 'block';
        secB.style.display = 'block';
      }
    }

    // Toggle OMR Bubble
    function toggleBubble(el) {
      const parent = el.parentElement;
      const wasFilled = el.classList.contains('filled');
      parent.querySelectorAll('.omr-bubble').forEach(b => b.classList.remove('filled'));
      if (!wasFilled) {
        el.classList.add('filled');
      }
    }

    // Print Handler
    function handlePrint() {
      window.print();
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(outputPath, html, 'utf8');
console.log(`✅ Successfully generated printable HTML at ${outputPath} (${html.length} bytes)`);
