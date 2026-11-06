const fs = require('fs');

const pages = JSON.parse(fs.readFileSync('scripts/vijayanagara_structured_pages.json', 'utf8'));

const totalMcqs = pages.reduce((acc, p) => acc + p.mcqs.length, 0);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Class 12 History Ch 7: An Imperial Capital: Vijayanagara — Page-by-Page English & Hindi Notes & MCQs (lhhs203.pdf)</title>
  <meta name="description" content="NCERT Class 12 History Chapter 7: An Imperial Capital: Vijayanagara (lhhs203.pdf). Complete 26-page revision notes in English & Hindi with interactive self-testing MCQs, archaeological evidence, and historical accounts." />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏛️</text></svg>" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>

  <style>
    :root {
      --bg: #070d1e;
      --surface: #0c1733;
      --card: #112044;
      --card-hover: #162956;
      --border: rgba(255, 255, 255, 0.09);
      --border-accent: rgba(245, 158, 11, 0.35);
      --gold: #f59e0b;
      --gold-glow: rgba(245, 158, 11, 0.2);
      --cyan: #38bdf8;
      --cyan-glow: rgba(56, 189, 248, 0.2);
      --emerald: #10b981;
      --emerald-glow: rgba(16, 185, 129, 0.2);
      --red: #f43f5e;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      --font-en: 'Plus Jakarta Sans', system-ui, sans-serif;
      --font-hi: 'Noto Sans Devanagari', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    body.light-theme {
      --bg: #f8fafc;
      --surface: #f1f5f9;
      --card: #ffffff;
      --card-hover: #f8fafc;
      --border: #cbd5e1;
      --border-accent: rgba(217, 119, 6, 0.4);
      --gold: #d97706;
      --gold-glow: rgba(217, 119, 6, 0.15);
      --cyan: #0284c7;
      --cyan-glow: rgba(2, 132, 199, 0.15);
      --emerald: #059669;
      --text-main: #0f172a;
      --text-muted: #475569;
      --text-dim: #94a3b8;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font-en);
      background-color: var(--bg);
      color: var(--text-main);
      line-height: 1.68;
      padding-bottom: 120px;
      transition: background-color 0.25s ease, color 0.25s ease;
    }

    /* Top Sticky Navigation */
    .top-bar {
      position: sticky;
      top: 0;
      z-index: 200;
      background: rgba(7, 13, 30, 0.94);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border);
      padding: 12px 24px;
    }
    body.light-theme .top-bar { background: rgba(248, 250, 252, 0.94); }

    .top-bar-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .brand-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand-badge {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: #031024;
      font-weight: 900;
      font-size: 0.72rem;
      padding: 4px 10px;
      border-radius: 6px;
      letter-spacing: 0.05em;
    }
    .brand-name {
      font-weight: 800;
      font-size: 1.02rem;
      color: var(--text-main);
    }
    .brand-sub {
      font-size: 0.74rem;
      color: var(--text-muted);
    }

    .top-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    /* Lang Toggle Pill Group */
    .lang-pill-group {
      display: flex;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 3px;
      gap: 2px;
    }
    .lang-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 5px 12px;
      font-size: 0.75rem;
      font-weight: 800;
      border-radius: 7px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .lang-btn.active {
      background: var(--gold);
      color: #031024;
      font-weight: 900;
      box-shadow: 0 2px 8px var(--gold-glow);
    }

    .btn-action {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 7px 13px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .btn-action:hover {
      border-color: var(--gold);
      transform: translateY(-1px);
    }
    .score-pill {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid var(--gold);
      color: var(--gold);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
    }

    /* Hero Banner */
    .hero {
      max-width: 1200px;
      margin: 24px auto 16px;
      padding: 0 20px;
    }
    .hero-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }
    .hero-tag {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--cyan);
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .hero-tag.gold {
      color: var(--gold);
      border-color: rgba(245, 158, 11, 0.35);
    }
    .hero-tag.emerald {
      color: var(--emerald);
      border-color: rgba(16, 185, 129, 0.35);
    }
    .hero h1 {
      font-size: clamp(1.5rem, 3.8vw, 2.3rem);
      font-weight: 900;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #ffffff 40%, var(--gold) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    body.light-theme .hero h1 {
      background: linear-gradient(135deg, #0f172a 40%, #d97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-sub {
      color: var(--text-muted);
      font-size: 0.95rem;
      max-width: 920px;
      margin-bottom: 20px;
      line-height: 1.65;
    }

    /* Quick stats grid */
    .paper-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }
    .info-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 14px;
      text-align: center;
      transition: all 0.2s;
    }
    .info-card:hover {
      border-color: var(--gold);
      transform: translateY(-2px);
    }
    .info-card .val {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--gold);
      font-family: var(--font-mono);
    }
    .info-card .lbl {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--text-dim);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 4px;
    }

    /* Page Navigation Bar */
    .page-nav-bar {
      max-width: 1200px;
      margin: 0 auto 24px;
      padding: 0 20px;
    }
    .page-nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      flex-wrap: wrap;
      gap: 10px;
    }
    .page-nav-header h3 {
      font-size: 0.9rem;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .page-pills-container {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
    }
    .page-pill {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 7px 12px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 800;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 4px;
      font-family: var(--font-mono);
    }
    .page-pill:hover {
      border-color: var(--gold);
      color: var(--text-main);
    }
    .page-pill.active {
      background: var(--gold);
      color: #031024;
      border-color: var(--gold);
      font-weight: 900;
    }

    /* Main Container */
    .main-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    /* Page Card */
    .page-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 28px;
      position: relative;
      transition: all 0.2s ease;
      box-shadow: 0 6px 24px rgba(0,0,0,0.25);
    }
    .page-card:hover {
      border-color: var(--border-accent);
    }
    .page-top-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 16px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--border);
    }
    .page-badge-lg {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.1));
      border: 1px solid var(--gold);
      color: var(--gold);
      font-weight: 900;
      font-size: 0.82rem;
      padding: 5px 12px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
    }
    .book-page-ref {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--text-dim);
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 4px 10px;
      border-radius: 6px;
    }
    .page-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 14px;
      line-height: 1.5;
    }
    .topics-tag-list {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
    .topic-tag {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--cyan);
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.25);
      padding: 3px 9px;
      border-radius: 6px;
    }

    /* Notes Box */
    .notes-box {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 22px 24px;
      margin-bottom: 24px;
    }
    .notes-box-title {
      font-size: 0.84rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--gold);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .notes-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .notes-list li {
      font-size: 0.94rem;
      color: var(--text-main);
      line-height: 1.7;
      position: relative;
      padding-left: 14px;
    }
    .notes-list li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--gold);
      font-weight: 900;
    }
    .notes-list li strong {
      color: #fff;
    }
    body.light-theme .notes-list li strong {
      color: #0f172a;
    }

    /* Language specific elements */
    .lang-en { display: block; }
    .lang-hi { display: block; }

    body.view-en .lang-hi { display: none !important; }
    body.view-hi .lang-en { display: none !important; }

    /* MCQ Section on Page */
    .mcq-section {
      background: rgba(7, 13, 30, 0.5);
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: 14px;
      padding: 22px;
      margin-top: 14px;
    }
    body.light-theme .mcq-section {
      background: #f8fafc;
      border-color: #cbd5e1;
    }
    .mcq-head-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.74rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--cyan);
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid var(--cyan);
      padding: 3px 10px;
      border-radius: 6px;
      margin-bottom: 14px;
    }
    .q-text {
      font-size: 0.96rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 14px;
      line-height: 1.6;
    }
    .q-text.lang-hi {
      font-family: var(--font-hi);
      color: var(--text-muted);
      font-weight: 600;
    }
    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 16px;
    }
    @media (min-width: 640px) {
      .options-grid.two-col {
        grid-template-columns: 1fr 1fr;
      }
    }
    .opt-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 12px 16px;
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--text-main);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      transition: all 0.2s;
      text-align: left;
    }
    .opt-btn:hover {
      background: var(--card-hover);
      border-color: var(--gold);
      transform: translateX(3px);
    }
    .opt-btn.correct {
      background: rgba(16, 185, 129, 0.2) !important;
      border-color: var(--emerald) !important;
      color: #34d399 !important;
      font-weight: 700;
    }
    .opt-btn.wrong {
      background: rgba(244, 63, 94, 0.18) !important;
      border-color: var(--red) !important;
      color: #fb7185 !important;
    }
    .feedback-badge {
      font-size: 0.75rem;
      font-weight: 900;
      padding: 3px 8px;
      border-radius: 6px;
      display: none;
      white-space: nowrap;
    }
    .opt-btn.correct .feedback-badge {
      display: inline-block;
      background: var(--emerald);
      color: #031024;
    }
    .opt-btn.wrong .feedback-badge {
      display: inline-block;
      background: var(--red);
      color: #fff;
    }

    /* Rationale Tray */
    .rationale-tray {
      display: none;
      background: rgba(16, 185, 129, 0.08);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 10px;
      padding: 14px 16px;
      margin-top: 12px;
      animation: fadeIn 0.25s ease-out;
    }
    .rationale-tray.revealed { display: block; }
    .rat-title {
      font-size: 0.76rem;
      font-weight: 900;
      color: var(--emerald);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }
    .rat-text {
      font-size: 0.88rem;
      color: var(--text-main);
      line-height: 1.65;
    }
    .rat-text.lang-hi {
      font-family: var(--font-hi);
      margin-top: 6px;
      color: var(--text-muted);
    }

    /* Floating Navigation Dock */
    .floating-dock {
      position: fixed;
      bottom: 24px;
      right: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 100;
    }
    .dock-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 18px rgba(0,0,0,0.5);
      transition: all 0.2s;
    }
    .dock-btn:hover {
      background: var(--gold);
      color: #031024;
      transform: translateY(-2px);
    }

    /* Footer */
    footer {
      max-width: 1200px;
      margin: 60px auto 0;
      padding: 24px 20px;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--text-dim);
      font-size: 0.82rem;
    }
    footer a { color: var(--gold); text-decoration: none; font-weight: 700; }
    footer a:hover { text-decoration: underline; }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 640px) {
      .top-bar { padding: 10px 16px; }
      .page-card { padding: 20px 16px; }
      .hero h1 { font-size: 1.45rem; }
    }
  </style>
</head>
<body class="view-en">

  <!-- Top Sticky Header -->
  <header class="top-bar">
    <div class="top-bar-inner">
      <div class="brand-title">
        <span class="brand-badge">NCERT CLASS 12</span>
        <div>
          <div class="brand-name">History • Ch 7: An Imperial Capital: Vijayanagara</div>
          <div class="brand-sub">lhhs203.pdf • Complete 26 Pages Revision Suite • 1 Page at a Time</div>
        </div>
      </div>
      <div class="top-controls">
        <!-- Language Selector -->
        <div class="lang-pill-group">
          <button class="lang-btn active" id="lang-btn-en" onclick="setLanguage('en')">English</button>
          <button class="lang-btn" id="lang-btn-hi" onclick="setLanguage('hi')">हिन्दी</button>
          <button class="lang-btn" id="lang-btn-both" onclick="setLanguage('both')">Both</button>
        </div>

        <div class="score-pill" id="score-counter">
          <span>🎯 0 / ${totalMcqs}</span>
        </div>
        <button class="btn-action" onclick="showAllPages()">
          <span>📖</span> All
        </button>
        <button class="btn-action" onclick="toggleAllAnswers(true)">
          <span>👁️</span> Reveal
        </button>
        <button class="btn-action" onclick="toggleTheme()">
          <span id="theme-indicator">🌙</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="hero">
    <div class="hero-meta">
      <span class="hero-tag">Themes in Indian History - Part II</span>
      <span class="hero-tag gold">Theme 7 • An Imperial Capital: Vijayanagara</span>
      <span class="hero-tag emerald">100% NCERT Verified</span>
    </div>

    <h1 class="lang-en">Theme 7: An Imperial Capital: Vijayanagara (c. 14th to 17th Century)</h1>
    <h1 class="lang-hi">अध्याय 7: एक साम्राज्य की राजधानी : विजयनगर (लगभग चौदहवीं से सत्रहवीं सदी तक)</h1>

    <p class="hero-sub lang-en">
      Comprehensive <strong>Page-by-Page revision notes</strong> and targeted <strong>Self-Testing MCQs</strong> for all 26 pages of NCERT textbook file <strong>lhhs203.pdf</strong> (Book pages 170 to 195). Covers archaeological discoveries, architectural layouts, trade, warfare, and foreign travelers' chronicles.
    </p>
    <p class="hero-sub lang-hi">
      NCERT पाठ्यपुस्तक <strong>lhhs203.pdf</strong> के संपूर्ण 26 पृष्ठों का <strong>1-पृष्ठ-दर-पृष्ठ (Page-by-Page)</strong> सारगर्भित नोट्स, महत्वपूर्ण संकल्पनाएं, पुरातात्विक साक्ष्य, विदेशी यात्रियों के वृत्तांत और प्रत्येक पृष्ठ पर आधारित बहुविकल्पीय प्रश्न (MCQs)।
    </p>

    <div class="paper-info-grid">
      <div class="info-card">
        <div class="val">26</div>
        <div class="lbl">Total Pages</div>
      </div>
      <div class="info-card">
        <div class="val">170–195</div>
        <div class="lbl">Book Pages</div>
      </div>
      <div class="info-card">
        <div class="val">1336–1565</div>
        <div class="lbl">Golden Era</div>
      </div>
      <div class="info-card">
        <div class="val">${totalMcqs}</div>
        <div class="lbl">Targeted MCQs</div>
      </div>
      <div class="info-card">
        <div class="val">1986</div>
        <div class="lbl">UNESCO Site</div>
      </div>
    </div>
  </section>

  <!-- Page Navigation Pills -->
  <div class="page-nav-bar">
    <div class="page-nav-header">
      <h3>
        <span class="lang-en">📑 Jump to Page:</span>
        <span class="lang-hi">📑 पृष्ठ चुनें:</span>
      </h3>
      <div style="display:flex; gap:8px;">
        <button class="btn-action" onclick="prevPage()">◀ Prev</button>
        <button class="btn-action" onclick="nextPage()">Next ▶</button>
      </div>
    </div>
    <div class="page-pills-container">
      ${pages.map((p, idx) => `
        <button class="page-pill ${idx === 0 ? 'active' : ''}" id="pill-${p.pageNum}" onclick="selectPage(${p.pageNum})">
          Pg ${p.pageNum}
        </button>
      `).join('')}
    </div>
  </div>

  <!-- Main Container -->
  <main class="main-container" id="pages-container">
    ${pages.map((p, pIdx) => `
      <article class="page-card" id="page-card-${p.pageNum}" style="${pIdx === 0 ? '' : 'display:none;'}">
        <div class="page-top-meta">
          <div class="page-badge-lg">
            <span>📄 PDF Page ${p.pageNum} of 26</span>
          </div>
          <div class="book-page-ref">
            <span>📖 NCERT Textbook Page: <strong>${p.bookPg}</strong></span>
          </div>
        </div>

        <h2 class="page-title lang-en">${p.titleEn}</h2>
        <h2 class="page-title lang-hi">${p.titleHi}</h2>

        <div class="topics-tag-list lang-en">
          ${p.topicsEn.map(t => `<span class="topic-tag">🏷️ ${t}</span>`).join('')}
        </div>
        <div class="topics-tag-list lang-hi">
          ${p.topicsHi.map(t => `<span class="topic-tag">🏷️ ${t}</span>`).join('')}
        </div>

        <!-- Notes in English -->
        <div class="notes-box lang-en">
          <div class="notes-box-title">
            <span>📌 Page ${p.pageNum} Key Notes & Concepts (English):</span>
          </div>
          <ul class="notes-list">
            ${p.notesEn.map(n => `<li>${n.replace(/^[•\s]*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`).join('')}
          </ul>
        </div>

        <!-- Notes in Hindi -->
        <div class="notes-box lang-hi">
          <div class="notes-box-title">
            <span>📌 पृष्ठ ${p.pageNum} महत्वपूर्ण नोट्स एवं मुख्य बिंदु (हिन्दी):</span>
          </div>
          <ul class="notes-list">
            ${p.notesHi.map(n => `<li>${n.replace(/^[•\s]*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`).join('')}
          </ul>
        </div>

        <!-- Targeted MCQs for this Page -->
        ${p.mcqs.map((mcq, mIdx) => {
          const qId = `q_${p.pageNum}_${mIdx}`;
          return `
            <div class="mcq-section" id="${qId}">
              <div class="mcq-head-tag">
                <span>🎯 Page ${p.pageNum} • MCQ ${mIdx + 1}</span>
              </div>
              <div class="q-text lang-en">${mcq.qEn}</div>
              <div class="q-text lang-hi">${mcq.qHi}</div>

              <!-- English Options -->
              <div class="options-grid lang-en ${mcq.optionsEn.length === 4 ? 'two-col' : ''}">
                ${mcq.optionsEn.map((opt, oIdx) => `
                  <button class="opt-btn" onclick="checkOption(this, ${oIdx === mcq.correct}, '${qId}', 'en')">
                    <span>${opt}</span>
                    <span class="feedback-badge">${oIdx === mcq.correct ? '✓ Correct' : '✗ Incorrect'}</span>
                  </button>
                `).join('')}
              </div>

              <!-- Hindi Options -->
              <div class="options-grid lang-hi ${mcq.optionsHi.length === 4 ? 'two-col' : ''}">
                ${mcq.optionsHi.map((opt, oIdx) => `
                  <button class="opt-btn" onclick="checkOption(this, ${oIdx === mcq.correct}, '${qId}', 'hi')">
                    <span>${opt}</span>
                    <span class="feedback-badge">${oIdx === mcq.correct ? '✓ सही' : '✗ गलत'}</span>
                  </button>
                `).join('')}
              </div>

              <div class="rationale-tray" id="rat-${qId}">
                <div class="rat-title">✓ Explanation / Rationale</div>
                <div class="rat-text lang-en">${mcq.expEn}</div>
                <div class="rat-text lang-hi">${mcq.expHi}</div>
              </div>
            </div>
          `;
        }).join('')}
      </article>
    `).join('')}
  </main>

  <!-- Floating Quick Dock -->
  <div class="floating-dock">
    <button class="dock-btn" title="Previous Page" onclick="prevPage()">◀</button>
    <button class="dock-btn" title="Next Page" onclick="nextPage()">▶</button>
    <button class="dock-btn" title="Back to Top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑</button>
  </div>

  <!-- Footer -->
  <footer>
    <p>
      NCERT Class 12 History (Themes in Indian History - II) • Theme 7: An Imperial Capital: Vijayanagara (lhhs203.pdf)<br>
      Complete 26-Page Revision Suite prepared by <a href="/">NextSem Academy</a> • All Rights Reserved.
    </p>
  </footer>

  <!-- Interactive JavaScript -->
  <script>
    let currentPage = 1;
    const totalPages = 26;
    const answeredQuestions = {};

    function setLanguage(lang) {
      document.body.classList.remove('view-en', 'view-hi', 'view-both');
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));

      if (lang === 'en') {
        document.body.classList.add('view-en');
        document.getElementById('lang-btn-en').classList.add('active');
      } else if (lang === 'hi') {
        document.body.classList.add('view-hi');
        document.getElementById('lang-btn-hi').classList.add('active');
      } else {
        document.body.classList.add('view-both');
        document.getElementById('lang-btn-both').classList.add('active');
      }
      localStorage.setItem('vijayanagara_quiz_lang', lang);
    }

    function selectPage(pg) {
      currentPage = pg;
      for (let i = 1; i <= totalPages; i++) {
        const card = document.getElementById('page-card-' + i);
        const pill = document.getElementById('pill-' + i);
        if (card) card.style.display = (i === pg) ? 'block' : 'none';
        if (pill) {
          if (i === pg) pill.classList.add('active');
          else pill.classList.remove('active');
        }
      }
      const activePill = document.getElementById('pill-' + pg);
      if (activePill) {
        activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }

    function nextPage() {
      if (currentPage < totalPages) selectPage(currentPage + 1);
    }

    function prevPage() {
      if (currentPage > 1) selectPage(currentPage - 1);
    }

    function showAllPages() {
      for (let i = 1; i <= totalPages; i++) {
        const card = document.getElementById('page-card-' + i);
        if (card) card.style.display = 'block';
      }
    }

    function checkOption(btn, isCorrect, qId, lang) {
      const section = document.getElementById(qId);
      const allBtns = section.querySelectorAll('.opt-btn');
      allBtns.forEach(b => b.classList.remove('correct', 'wrong'));

      if (isCorrect) {
        btn.classList.add('correct');
        answeredQuestions[qId] = true;
        if (typeof confetti === 'function') {
          confetti({ particleCount: 35, spread: 55, origin: { y: 0.8 } });
        }
      } else {
        btn.classList.add('wrong');
        answeredQuestions[qId] = false;
      }

      // Reveal rationale
      const rat = document.getElementById('rat-' + qId);
      if (rat) rat.classList.add('revealed');

      updateScore();
    }

    function updateScore() {
      let score = 0;
      Object.keys(answeredQuestions).forEach(k => {
        if (answeredQuestions[k]) score++;
      });
      const el = document.getElementById('score-counter');
      if (el) el.innerHTML = '<span>🎯 ' + score + ' / ${totalMcqs}</span>';
    }

    function toggleAllAnswers(show) {
      document.querySelectorAll('.rationale-tray').forEach(t => {
        if (show) t.classList.add('revealed');
        else t.classList.remove('revealed');
      });
    }

    function toggleTheme() {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      document.getElementById('theme-indicator').textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('vijayanagara_quiz_theme', isLight ? 'light' : 'dark');
    }

    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('vijayanagara_quiz_theme');
      if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('theme-indicator').textContent = '☀️';
      }

      const savedLang = localStorage.getItem('vijayanagara_quiz_lang') || 'en';
      setLanguage(savedLang);
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('public/history-class12-ch7-vijayanagara-page-by-page-notes-mcq.html', html, 'utf8');
console.log('Successfully generated public/history-class12-ch7-vijayanagara-page-by-page-notes-mcq.html with bilingual English/Hindi support!');
