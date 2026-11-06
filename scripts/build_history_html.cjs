const fs = require("fs");
const data = JSON.parse(fs.readFileSync("src/data/history_ch1_pages11_12_full.json", "utf8"));
﻿let html = '';
html += `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Class 11 History Theme 1: Writing & City Life (Pages 11 & 12 Worksheet) | Nextsem Academy</title>
  <meta name="description" content="NCERT Class 11 History Theme 1 Pages 11 & 12 Mastery Worksheet: Geography, Agriculture, Significance of Urbanism, Division of Labour, Warka Head & Bronze Technology.">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏛️</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
  <style>
    :root {
      --bg-body: #070d1a; --bg-card: #0f1a30; --bg-card-hover: #162444; --border-card: rgba(56, 189, 248, 0.2);
      --accent-amber: #f59e0b; --accent-emerald: #10b981; --accent-sky: #38bdf8; --accent-purple: #a855f7;
      --accent-rose: #f43f5e; --text-main: #f8fafc; --text-muted: #94a3b8; --highlight-bg: rgba(56, 189, 248, 0.12);
    }
    body.light-theme {
      --bg-body: #f8fafc; --bg-card: #ffffff; --bg-card-hover: #f1f5f9; --border-card: #cbd5e1;
      --accent-amber: #d97706; --accent-emerald: #059669; --accent-sky: #0284c7; --accent-purple: #7c3aed;
      --accent-rose: #e11d48; --text-main: #0f172a; --text-muted: #475569; --highlight-bg: rgba(2, 132, 199, 0.08);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background-color: var(--bg-body); color: var(--text-main); font-family: 'Plus Jakarta Sans', system-ui, sans-serif; line-height: 1.7; padding-bottom: 80px; transition: background 0.3s, color 0.3s; }
    .bg-glow { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: radial-gradient(circle at 50% 10%, rgba(245, 158, 11, 0.1) 0%, transparent 60%), radial-gradient(circle at 85% 60%, rgba(56, 189, 248, 0.08) 0%, transparent 50%), radial-gradient(circle at 15% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%); pointer-events: none; z-index: 0; }
    .top-nav { position: sticky; top: 0; background: rgba(7, 13, 26, 0.94); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border-card); padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; z-index: 100; transition: background 0.3s; }
    body.light-theme .top-nav { background: rgba(255, 255, 255, 0.94); border-bottom: 1px solid #e2e8f0; }
    .brand-group { display: flex; align-items: center; gap: 12px; text-decoration: none; }
    .brand-logo { width: 42px; height: 42px; border-radius: 10px; background: linear-gradient(135deg, #f59e0b, #d97706); display: flex; align-items: center; justify-content: center; font-size: 22px; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35); }
    .brand-title-wrap { display: flex; flex-direction: column; }
    .brand-title { font-size: 17px; font-weight: 800; color: var(--text-main); line-height: 1.2; }
    .brand-subtitle { font-size: 10px; font-weight: 700; color: var(--accent-amber); letter-spacing: 1px; text-transform: uppercase; }
    .desktop-breadcrumb { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; background: rgba(255,255,255,0.04); padding: 6px 14px; border-radius: 999px; border: 1px solid var(--border-card); overflow-x: auto; white-space: nowrap; }
    body.light-theme .desktop-breadcrumb { background: #f1f5f9; border-color: #cbd5e1; }
    .desktop-breadcrumb a { color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
    .desktop-breadcrumb a:hover { color: var(--accent-sky); }
    .desktop-breadcrumb .crumb-sep { color: var(--text-muted); font-size: 10px; opacity: 0.6; }
    .desktop-breadcrumb .crumb-active { color: var(--accent-amber); font-weight: 700; }
    .nav-actions { display: flex; align-items: center; gap: 10px; }
    .btn-icon { background: var(--bg-card); border: 1px solid var(--border-card); color: var(--text-main); padding: 7px 14px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s ease; text-decoration: none; }
    .btn-icon:hover { background: var(--bg-card-hover); border-color: var(--accent-amber); transform: translateY(-1px); }
    .btn-primary { background: linear-gradient(135deg, #f59e0b, #d97706); border: none; color: #ffffff; font-weight: 700; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35); }
    .container { max-width: 1060px; margin: 0 auto; padding: 24px 20px; position: relative; z-index: 1; }
    .worksheet-hero { background: linear-gradient(135deg, rgba(245, 158, 11, 0.14) 0%, rgba(56, 189, 248, 0.08) 100%); border: 1px solid var(--border-card); border-radius: 18px; padding: 28px 24px; margin-bottom: 24px; position: relative; overflow: hidden; }
    .hero-tag { display: inline-flex; align-items: center; gap: 6px; background: rgba(245, 158, 11, 0.18); color: var(--accent-amber); border: 1px solid rgba(245, 158, 11, 0.35); font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
    .hero-title { font-size: 28px; font-weight: 900; line-height: 1.25; margin-bottom: 8px; background: linear-gradient(90deg, #f8fafc, #fcd34d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    body.light-theme .hero-title { background: linear-gradient(90deg, #0f172a, #b45309); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero-subtitle { font-size: 14.5px; color: var(--text-muted); max-width: 880px; line-height: 1.6; }
    .ncert-source-badge { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-top: 16px; font-size: 12.5px; color: var(--text-muted); }
    .source-chip { background: rgba(255, 255, 255, 0.06); border: 1px solid var(--border-card); padding: 4px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 6px; font-family: 'JetBrains Mono', monospace; }
    body.light-theme .source-chip { background: #f1f5f9; border-color: #cbd5e1; }
    .printable-header { display: none; border: 2px solid #000; padding: 14px; margin-bottom: 20px; background: #fff; color: #000; }
    .printable-header-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 13px; }
    .tab-bar { display: flex; gap: 8px; border-bottom: 1px solid var(--border-card); margin-bottom: 24px; overflow-x: auto; padding-bottom: 6px; }
    .tab-btn { background: transparent; border: none; color: var(--text-muted); font-size: 14px; font-weight: 700; padding: 10px 18px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s; white-space: nowrap; }
    .tab-btn:hover { color: var(--text-main); background: var(--bg-card); }
    .tab-btn.active { color: var(--accent-amber); background: rgba(245, 158, 11, 0.12); border-bottom: 2px solid var(--accent-amber); }
    .section-card { background: var(--bg-card); border: 1px solid var(--border-card); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25); }
    body.light-theme .section-card { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
    .section-heading { font-size: 19px; font-weight: 800; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; color: var(--accent-amber); border-bottom: 1px solid var(--border-card); padding-bottom: 10px; }
    .concept-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 16px; }
    .concept-box { background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-card); border-radius: 12px; padding: 18px; position: relative; }
    body.light-theme .concept-box { background: #f8fafc; border-color: #e2e8f0; }
    .concept-box-title { font-size: 15px; font-weight: 800; color: var(--accent-sky); margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
    .concept-box-desc { font-size: 13.5px; color: var(--text-muted); line-height: 1.6; }
    .concept-box-desc strong { color: var(--text-main); }
    .blank-item { background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-card); border-radius: 12px; padding: 18px; margin-bottom: 16px; transition: all 0.2s; }
    body.light-theme .blank-item { background: #ffffff; border-color: #e2e8f0; }
    .blank-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; font-size: 12.5px; }
    .blank-num { background: rgba(245, 158, 11, 0.15); color: var(--accent-amber); font-weight: 800; padding: 3px 10px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; }
    .blank-page-tag { color: var(--text-muted); font-family: 'JetBrains Mono', monospace; }
    .blank-sentence { font-size: 15px; line-height: 1.8; margin-bottom: 14px; font-weight: 500; }
    .blank-slot { display: inline-block; min-width: 140px; border-bottom: 2px dashed var(--accent-amber); padding: 0 8px; font-weight: 700; color: var(--accent-amber); text-align: center; transition: all 0.2s; }
    .blank-slot.correct { border-bottom-color: var(--accent-emerald); color: var(--accent-emerald); background: rgba(16, 185, 129, 0.12); border-radius: 4px; }
    .blank-slot.incorrect { border-bottom-color: var(--accent-rose); color: var(--accent-rose); background: rgba(244, 63, 94, 0.12); border-radius: 4px; }
    .blank-options { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
    .opt-btn { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-card); color: var(--text-main); font-size: 13.5px; font-weight: 600; padding: 6px 14px; border-radius: 8px; cursor: pointer; transition: all 0.2s; }
    body.light-theme .opt-btn { background: #f1f5f9; border-color: #cbd5e1; }
    .opt-btn:hover:not(:disabled) { border-color: var(--accent-sky); background: var(--highlight-bg); transform: translateY(-1px); }
    .opt-btn.chosen-correct { background: var(--accent-emerald) !important; border-color: var(--accent-emerald) !important; color: #fff !important; }
    .opt-btn.chosen-wrong { background: var(--accent-rose) !important; border-color: var(--accent-rose) !important; color: #fff !important; }
    .opt-btn:disabled { cursor: default; opacity: 0.85; }
    .blank-explanation { margin-top: 10px; padding: 10px 14px; background: rgba(56, 189, 248, 0.08); border-left: 3px solid var(--accent-sky); border-radius: 0 8px 8px 0; font-size: 13px; color: var(--text-muted); display: none; }
    body.light-theme .blank-explanation { background: #f0f9ff; }
    .specialist-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; margin-top: 14px; }
    .specialist-card { background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-card); border-radius: 12px; padding: 14px; cursor: pointer; transition: all 0.2s; }
    .specialist-card:hover { border-color: var(--accent-amber); background: rgba(245, 158, 11, 0.05); transform: translateY(-2px); }
    .specialist-role { font-size: 14px; font-weight: 800; color: var(--text-main); display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
    .specialist-origin { font-size: 11.5px; color: var(--accent-sky); font-family: 'JetBrains Mono', monospace; margin-bottom: 8px; }
    .specialist-desc { font-size: 12.5px; color: var(--text-muted); line-height: 1.5; }
    .score-bar { background: var(--bg-card); border: 1px solid var(--border-card); border-radius: 12px; padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-weight: 700; font-size: 14px; position: sticky; top: 65px; z-index: 90; backdrop-filter: blur(10px); }
    .model-qa-card { background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 12px; padding: 16px; margin-bottom: 16px; }
    body.light-theme .model-qa-card { background: #f8fafc; border-color: #e2e8f0; }
    .qa-title { font-size: 15px; font-weight: 700; color: var(--text-main); margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px; }
    .qa-points { list-style-type: none; padding-left: 0; font-size: 13.5px; color: var(--text-muted); line-height: 1.6; }
    .qa-points li { margin-bottom: 6px; position: relative; padding-left: 20px; }
    .qa-points li::before { content: "✓"; position: absolute; left: 0; color: var(--accent-emerald); font-weight: 700; }
    .marking-pill { font-size: 11px; background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); padding: 2px 8px; border-radius: 999px; font-weight: 700; }
    @media (max-width: 768px) { .top-nav { padding: 8px 14px; } .desktop-breadcrumb { display: none; } .hero-title { font-size: 22px; } .section-card { padding: 18px 14px; } .score-bar { top: 58px; } }
    @media print {
      body { background: #ffffff !important; color: #000000 !important; font-size: 12pt; padding-bottom: 0; }
      .bg-glow, .top-nav, .tab-bar, .score-bar, .nav-actions, .opt-btn, .btn-icon, .btn-primary, .blank-explanation { display: none !important; }
      .printable-header { display: block !important; }
      .container { max-width: 100% !important; padding: 0 !important; }
      .worksheet-hero { background: none !important; border: 1px solid #000 !important; padding: 12px !important; margin-bottom: 14px !important; }
      .hero-title { color: #000 !important; -webkit-text-fill-color: initial !important; font-size: 18pt !important; }
      .section-card { background: none !important; border: 1px solid #999 !important; box-shadow: none !important; padding: 12px !important; margin-bottom: 16px !important; page-break-inside: avoid; }
      .section-heading { color: #000 !important; border-bottom: 1px solid #000 !important; font-size: 14pt !important; }
      .blank-item { background: none !important; border-bottom: 1px dotted #666 !important; border-left: none !important; border-right: none !important; border-top: none !important; padding: 8px 0 !important; page-break-inside: avoid; }
      .blank-slot { border-bottom: 1.5px solid #000 !important; min-width: 120px !important; color: transparent !important; }
      .model-qa-card { background: none !important; border: 1px solid #ccc !important; page-break-inside: avoid; }
      .qa-points { color: #222 !important; }
      .concept-grid, .specialist-grid { display: block !important; }
      .concept-box, .specialist-card { border: 1px solid #ccc !important; margin-bottom: 8px !important; page-break-inside: avoid; }
    }
  </style>
</head>
<body>
`;
html += `
  <div class="bg-glow"></div>
  <header class="top-nav">
    <div style="display:flex; align-items:center; gap:16px;">
      <a href="/" class="brand-group">
        <div class="brand-logo">🏛️</div>
        <div class="brand-title-wrap">
          <span class="brand-title">Study Guide</span>
          <span class="brand-subtitle">NextSem Academy</span>
        </div>
      </a>
      <nav class="desktop-breadcrumb" aria-label="Breadcrumb Trail">
        <a href="/">Home</a>
        <span class="crumb-sep">❯</span>
        <a href="/?view=classes">NCERT Books</a>
        <span class="crumb-sep">❯</span>
        <a href="/?class=11">Class 11</a>
        <span class="crumb-sep">❯</span>
        <a href="/?class=11&subject=c11-history">History</a>
        <span class="crumb-sep">❯</span>
        <a href="/?class=11&subject=c11-history&book=kehs1">Themes in World History</a>
        <span class="crumb-sep">❯</span>
        <span class="crumb-active">Pages 11 &amp; 12 Worksheet</span>
      </nav>
    </div>
    <div class="nav-actions">
      <button class="btn-icon" id="themeToggleBtn" onclick="toggleTheme()" title="Toggle Dark/Light Mode">
        <span id="themeIcon">🌙</span> <span id="themeText">Theme</span>
      </button>
      <button class="btn-icon" onclick="window.print()" title="Print or Save A4 PDF">🖨️ Print A4</button>
      <a href="https://ncert.nic.in/textbook/pdf/kehs101.pdf" target="_blank" rel="noopener" class="btn-icon btn-primary" title="Open Official NCERT PDF">📖 NCERT PDF</a>
    </div>
  </header>

  <main class="container">
    <div class="printable-header">
      <div style="text-align:center; margin-bottom:10px;">
        <h2 style="font-size:16pt;">NEXTSEM ACADEMY — STUDENT WORKSHEET</h2>
        <p style="font-size:11pt;">Class 11 History • Theme 1: Writing and City Life (Mesopotamia) • Pages 11 &amp; 12</p>
      </div>
      <div class="printable-header-grid">
        <div><strong>Student Name:</strong> ______________________</div>
        <div><strong>Roll Number:</strong> ______________________</div>
        <div><strong>Class &amp; Section:</strong> 11 — __________</div>
        <div><strong>Date:</strong> ______________________</div>
        <div><strong>Marks Obtained:</strong> _____ / 40</div>
        <div><strong>Teacher Signature:</strong> _________________</div>
      </div>
    </div>

    <section class="worksheet-hero">
      <div class="hero-tag">🎯 NCERT Core Competency Worksheet</div>
      <h1 class="hero-title">Writing &amp; City Life: Pages 11 &amp; 12 Worksheet</h1>
      <p class="hero-subtitle">
        Deep-dive interactive mastery sheet covering the fertile southern desert, Euphrates irrigation mechanics, 
        agricultural productivity, the true definition of urbanism, division of labour, the Warka Head specialist chain, 
        and Bronze Age metallurgy.
      </p>
      <div class="ncert-source-badge">
        <span class="source-chip">📄 Source: NCERT Class 11 History (kehs101.pdf)</span>
        <span class="source-chip">📍 Pages: 11 &amp; 12</span>
        <span class="source-chip">🏛️ Theme: Writing &amp; City Life</span>
        <span class="source-chip">🌟 CBSE &amp; NEP 2020 Standard</span>
      </div>
    </section>

    <nav class="tab-bar" aria-label="Worksheet Sections">
      <button class="tab-btn active" onclick="switchTab('blanks')">✏️ Fill-in-the-Blanks (20)</button>
      <button class="tab-btn" onclick="switchTab('notes')">📖 Visual Notes &amp; Concepts</button>
      <button class="tab-btn" onclick="switchTab('warka')">🗿 The Warka Head Studio</button>
      <button class="tab-btn" onclick="switchTab('mcq')">🎯 Concept MCQs (10)</button>
      <button class="tab-btn" onclick="switchTab('ar')">⚖️ Assertion &amp; Reason (4)</button>
      <button class="tab-btn" onclick="switchTab('subjective')">✍️ High-Yield Questions</button>
    </nav>
`;
html += `
    <section id="tab_blanks">
      <div class="score-bar">
        <div style="display:flex; align-items:center; gap:8px;">
          <span>📊 Progress:</span>
          <span id="blanksAnsweredText" style="color:var(--accent-sky);">0</span> / <span>20 Answered</span>
        </div>
        <div>
          <span>⭐ Score:</span>
          <span id="blanksScoreText" style="color:var(--accent-emerald); font-size:16px;">0</span> / <span>20</span>
        </div>
        <button class="btn-icon" onclick="resetBlanks()" style="padding:4px 10px; font-size:12px;">🔄 Reset</button>
      </div>
      <div class="section-card">
        <div class="section-heading"><span>✏️ Part A: 20 Sentence Mastery Fill-in-the-Blanks (Pages 11 &amp; 12)</span></div>
        <p style="color:var(--text-muted); font-size:13.5px; margin-bottom:18px;">
          Every sentence is derived directly from NCERT textbook pages 11 &amp; 12. Click the correct option pill below each sentence to fill the blank. Instant feedback, color cues, and full NCERT citations will appear.
        </p>
        <div id="blanksListContainer"></div>
      </div>
    </section>

    <section id="tab_notes" style="display:none;">
      <div class="section-card">
        <div class="section-heading"><span>📖 NCERT Concept Digest (Pages 11 &amp; 12)</span></div>
        <div class="concept-grid">
          <div class="concept-box">
            <div class="concept-box-title">🌊 1. Silt &amp; Euphrates Irrigation (Page 11)</div>
            <div class="concept-box-desc">
              The southern zone of Mesopotamia is a <strong>desert</strong>. However, the Euphrates and Tigris rise in the northern mountains and carry heavy loads of <strong>silt (fine mud)</strong>. When they flood, this fertile silt is deposited. The Euphrates splits into multiple natural channels that functioned as <strong>irrigation canals</strong>, watering fields of wheat, barley, peas, and lentils.
            </div>
          </div>
          <div class="concept-box">
            <div class="concept-box-title">🌾 2. Agricultural Productivity &amp; Pastoral Steppe (Page 11)</div>
            <div class="concept-box-desc">
              Of all ancient systems (including the Roman Empire), southern Mesopotamian agriculture was the <strong>most productive</strong>, despite having insufficient rainfall! Simultaneously, sheep and goats grazed on the <strong>steppe</strong> and mountain slopes, yielding abundant meat, milk, and wool, while rivers provided fish and date-palms gave fruit.
            </div>
          </div>
          <div class="concept-box">
            <div class="concept-box-title">🏙️ 3. Significance of Urbanism (Page 12)</div>
            <div class="concept-box-desc">
              Cities are <strong>not merely dense populations</strong>. An urban economy becomes viable when it expands into spheres beyond food production—namely <strong>trade, manufactures, and services</strong>. City people cease to be self-sufficient and enter into permanent mutual interdependence with others.
            </div>
          </div>
          <div class="concept-box">
            <div class="concept-box-title">⚙️ 4. Division of Labour (Page 12)</div>
            <div class="concept-box-desc">
              <strong>"The division of labour is a mark of urban life."</strong> For example, a stone seal carver requires bronze tools (which he cannot make) and coloured stones (which he does not know where to obtain). His specialized skill is fine carving, not smithing or prospecting.
            </div>
          </div>
          <div class="concept-box">
            <div class="concept-box-title">📋 5. Social Organisation &amp; Records (Page 12)</div>
            <div class="concept-box-desc">
              Because raw materials (fuel, metal, stones, wood) came from varied distant places, urban manufacturing demanded <strong>organized trade, storage, and coordinated deliveries</strong>. This necessitated a hierarchy where some give commands that others obey, and ultimately led to the keeping of <strong>written administrative records</strong>.
            </div>
          </div>
          <div class="concept-box">
            <div class="concept-box-title">🛡️ 6. Bronze Age Metallurgy (Page 12)</div>
            <div class="concept-box-desc">
              Early cities emerged in the <strong>Bronze Age (c. 3000 BCE)</strong>. Bronze is an alloy of <strong>copper and tin</strong>. Metal tools were essential for accurate carpentry, drilling beads, carving stone seals, cutting shell, and forging weapons (like spear tips).
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tab_warka" style="display:none;">
      <div class="section-card">
        <div class="section-heading"><span>🗿 The Warka Head: Multi-Specialist Urban Supply Chain</span></div>
        <p style="color:var(--text-muted); font-size:14px; margin-bottom:16px;">
          Sculpted in <strong>white marble at Uruk before 3000 BCE</strong>, the Warka Head is admired for the delicate modelling of the woman’s mouth, chin, and cheeks. Because southern Mesopotamia had no stone or metal, this single sculpture required an extensive division of labour. <strong>Click on any specialist card below to explore their contribution:</strong>
        </p>
        <div class="specialist-grid" id="specialistGrid"></div>
        <div id="specialistDetailBox" style="margin-top:20px; padding:18px; border-radius:12px; background:rgba(245, 158, 11, 0.08); border:1px solid rgba(245, 158, 11, 0.3); display:none;">
          <h4 id="detailTitle" style="color:var(--accent-amber); font-size:16px; margin-bottom:6px;"></h4>
          <p id="detailText" style="font-size:13.5px; color:var(--text-main); line-height:1.6;"></p>
        </div>
      </div>
    </section>

    <section id="tab_mcq" style="display:none;">
      <div class="section-card">
        <div class="section-heading"><span>🎯 Part C: 10 Conceptual Multiple Choice Questions</span></div>
        <p style="color:var(--text-muted); font-size:13.5px; margin-bottom:18px;">
          Test your analytical comprehension of Pages 11 &amp; 12 according to the latest CBSE &amp; NEP 2020 exam patterns.
        </p>
        <div id="mcqContainer"></div>
      </div>
    </section>

    <section id="tab_ar" style="display:none;">
      <div class="section-card">
        <div class="section-heading"><span>⚖️ Part D: Assertion &amp; Reason Questions</span></div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid var(--border-card); border-radius:10px; padding:12px 16px; margin-bottom:16px; font-size:13px; color:var(--text-muted);">
          <strong>Directions:</strong><br>
          (A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).<br>
          (B) Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).<br>
          (C) Assertion (A) is true but Reason (R) is false.<br>
          (D) Assertion (A) is false but Reason (R) is true.
        </div>
        <div id="arContainer"></div>
      </div>
    </section>

    <section id="tab_subjective" style="display:none;">
      <div class="section-card">
        <div class="section-heading"><span>✍️ Part E: High-Yield Analytical Questions &amp; Marking Schemes</span></div>
        <div class="model-qa-card">
          <div class="qa-title">
            <span>Q1. Why do historians say that it was NOT natural fertility and high food production alone that caused the rise of cities? (3 Marks)</span>
            <span class="marking-pill">NCERT Textual</span>
          </div>
          <ul class="qa-points">
            <li><strong>Biological base vs Urban mechanism:</strong> While rural fertility generated agricultural surplus, a city cannot exist solely on food grain.</li>
            <li><strong>Emergence of non-food spheres:</strong> Urban life begins when an economy expands into crafts, manufactures, metallurgy, stone-carving, trade, and transportation.</li>
            <li><strong>Need for coordination:</strong> Without organized storage, long-distance trade networks, and administrative command systems, rural surpluses cannot sustain urban populations.</li>
          </ul>
        </div>
        <div class="model-qa-card">
          <div class="qa-title">
            <span>Q2. Explain with an example why "division of labour is a mark of urban life". (3 Marks)</span>
            <span class="marking-pill">Page 12 Core</span>
          </div>
          <ul class="qa-points">
            <li><strong>End of self-sufficiency:</strong> Unlike self-contained village farmers, urban craft specialists perform only a single specialized phase of production.</li>
            <li><strong>The Stone Seal Carver Example:</strong> The carver of a cylinder seal specializes in fine engraving. He does not mine stone, nor can he forge bronze tools; he depends on the merchant for coloured stones and the smith for bronze tools.</li>
            <li><strong>The Bronze Smith:</strong> The toolmaker cannot extract copper or tin from mountains himself, and requires continuous supplies of charcoal from fuel gatherers. Thus, mutual interdependence binds city society together.</li>
          </ul>
        </div>
        <div class="model-qa-card">
          <div class="qa-title">
            <span>Q3. What was the significance of "The Warka Head" found at Uruk? (4 Marks)</span>
            <span class="marking-pill">Page 12 Box</span>
          </div>
          <ul class="qa-points">
            <li><strong>Chronology &amp; Provenance:</strong> Sculpted in white marble at the southern city of Uruk before 3000 BCE.</li>
            <li><strong>Artistic Excellence:</strong> World-renowned for delicate, realistic modeling of the woman’s mouth, chin, and cheeks, with a groove on the head for an ornament.</li>
            <li><strong>Complex Inlays:</strong> Eyebrows and eyes were inlaid with three distinct imported materials: lapis lazuli (blue), shell (white), and bitumen (black).</li>
            <li><strong>Proof of Long-Distance Trade &amp; Division of Labour:</strong> Southern Mesopotamia lacked marble, lapis lazuli, and metals; creating this head proved that an organized urban hierarchy coordinated long-distance procurement, smelting, transport, and multiple master artisans.</li>
          </ul>
        </div>
        <div class="model-qa-card">
          <div class="qa-title">
            <span>Q4. Discuss NCERT Activity 2: "Would city life have been possible without the use of metals?" (4 Marks)</span>
            <span class="marking-pill">Activity 2</span>
          </div>
          <ul class="qa-points">
            <li><strong>No, city life was practically impossible without metals:</strong></li>
            <li><strong>Precision Crafts:</strong> Metal tools (bronze) were indispensable for accurate carpentry (building carts, boats, palace doors) and drilling fine stone beads.</li>
            <li><strong>Urban Seal Engraving:</strong> Intricate cylinder seals required sharp, hardened bronze burins and gouges to engrave cuneiform and royal iconography into hard stones.</li>
            <li><strong>Agricultural Infrastructure:</strong> Large-scale irrigation canal excavation, sluice maintenance, and timber cutting required heavy-duty metal implements.</li>
            <li><strong>Military &amp; Defense:</strong> Cities needed defensive fortifications and bronze-tipped spears/weapons to protect accumulated grain surpluses and wealth from raids.</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
`;
html += `
  <script>
    const blanksData = ${JSON.stringify(data.blanksData)};
    const specialists = ${JSON.stringify(data.specialists)};
    const mcqData = ${JSON.stringify(data.mcqData)};
    const arData = ${JSON.stringify(data.arData)};

    function playSound(type) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        if (type === 'correct') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(587.33, ctx.currentTime);
          osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
          osc.start();
          osc.stop(ctx.currentTime + 0.35);
        } else if (type === 'wrong') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, ctx.currentTime);
          osc.frequency.setValueAtTime(164.81, ctx.currentTime + 0.12);
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
          osc.start();
          osc.stop(ctx.currentTime + 0.3);
        }
      } catch (e) {}
    }

    function initTheme() {
      const saved = localStorage.getItem('nextsem_theme') || 'dark';
      if (saved === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeIcon').innerText = '☀️';
        document.getElementById('themeText').innerText = 'Light';
      } else {
        document.body.classList.remove('light-theme');
        document.getElementById('themeIcon').innerText = '🌙';
        document.getElementById('themeText').innerText = 'Dark';
      }
    }

    function toggleTheme() {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('nextsem_theme', isLight ? 'light' : 'dark');
      document.getElementById('themeIcon').innerText = isLight ? '☀️' : '🌙';
      document.getElementById('themeText').innerText = isLight ? 'Light' : 'Dark';
    }

    function switchTab(tabId) {
      const tabs = ['blanks', 'notes', 'warka', 'mcq', 'ar', 'subjective'];
      tabs.forEach(t => {
        const el = document.getElementById('tab_' + t);
        if (el) el.style.display = (t === tabId) ? 'block' : 'none';
      });
      const btns = document.querySelectorAll('.tab-btn');
      btns.forEach((b, idx) => {
        if (tabs[idx] === tabId) b.classList.add('active');
        else b.classList.remove('active');
      });
    }

    let userBlanks = {};

    function renderBlanks() {
      const container = document.getElementById('blanksListContainer');
      container.innerHTML = '';
      blanksData.forEach((item, index) => {
        const answered = userBlanks[item.id];
        const isCorrect = answered === item.correct;
        const div = document.createElement('div');
        div.className = 'blank-item';
        div.id = 'blank_card_' + item.id;
        let slotClass = 'blank-slot';
        let slotContent = '__________';
        if (answered) {
          slotContent = answered;
          slotClass += isCorrect ? ' correct' : ' incorrect';
        }
        const optionsHtml = item.options.map(opt => {
          let btnClass = 'opt-btn';
          if (answered) {
            if (opt === item.correct) btnClass += ' chosen-correct';
            else if (opt === answered) btnClass += ' chosen-wrong';
          }
          const disabledAttr = answered ? 'disabled' : '';
          return '<button class="' + btnClass + '" ' + disabledAttr + ' onclick="handleAnswerBlank(' + item.id + ', \\'' + opt.replace(/'/g, "\\\\'") + '\\')">' + opt + '</button>';
        }).join('');

        div.innerHTML = 
          '<div class="blank-header">' +
            '<span class="blank-num">Q' + (index + 1) + '</span>' +
            '<span class="blank-page-tag">NCERT ' + item.page + '</span>' +
          '</div>' +
          '<div class="blank-sentence">' +
            item.prefix + '<span class="' + slotClass + '" id="slot_' + item.id + '">' + slotContent + '</span>' + item.suffix +
          '</div>' +
          '<div class="blank-options">' + optionsHtml + '</div>' +
          '<div class="blank-explanation" id="exp_' + item.id + '" style="display:' + (answered ? 'block' : 'none') + '">' +
            '💡 ' + item.explanation +
          '</div>';
        container.appendChild(div);
      });
      updateBlanksStats();
    }

    function handleAnswerBlank(id, chosen) {
      if (userBlanks[id]) return;
      userBlanks[id] = chosen;
      const item = blanksData.find(b => b.id === id);
      if (chosen === item.correct) playSound('correct');
      else playSound('wrong');
      renderBlanks();

      const totalAnswered = Object.keys(userBlanks).length;
      if (totalAnswered === blanksData.length) {
        let correctCount = 0;
        blanksData.forEach(b => { if (userBlanks[b.id] === b.correct) correctCount++; });
        if (correctCount >= 16 && typeof confetti === 'function') {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
      }
    }

    function updateBlanksStats() {
      const totalAnswered = Object.keys(userBlanks).length;
      let correctCount = 0;
      blanksData.forEach(b => {
        if (userBlanks[b.id] === b.correct) correctCount++;
      });
      document.getElementById('blanksAnsweredText').innerText = totalAnswered;
      document.getElementById('blanksScoreText').innerText = correctCount;
    }

    function resetBlanks() {
      if (confirm('Reset all answers in this worksheet?')) {
        userBlanks = {};
        renderBlanks();
      }
    }

    function renderSpecialists() {
      const container = document.getElementById('specialistGrid');
      container.innerHTML = specialists.map((s, i) => 
        '<div class="specialist-card" onclick="showSpecialistDetail(' + i + ')">' +
          '<div class="specialist-role">' + s.role + '</div>' +
          '<div class="specialist-origin">📍 ' + s.origin + '</div>' +
          '<div class="specialist-desc">' + s.desc + '</div>' +
        '</div>'
      ).join('');
    }

    function showSpecialistDetail(index) {
      const s = specialists[index];
      const box = document.getElementById('specialistDetailBox');
      document.getElementById('detailTitle').innerHTML = s.role + ' <span style="font-size:12px; color:var(--text-muted);">(' + s.origin + ')</span>';
      document.getElementById('detailText').innerText = s.detail;
      box.style.display = 'block';
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    let userMcq = {};

    function renderMcq() {
      const container = document.getElementById('mcqContainer');
      container.innerHTML = mcqData.map((item, qIdx) => {
        const selected = userMcq[qIdx];
        const isAnswered = selected !== undefined;
        return (
          '<div class="blank-item" id="mcq_card_' + qIdx + '">' +
            '<div style="font-weight:700; font-size:14.5px; margin-bottom:12px; color:var(--text-main); line-height:1.6;">' + item.q + '</div>' +
            '<div style="display:flex; flex-direction:column; gap:8px;">' +
              item.options.map((opt, optIdx) => {
                let btnStyle = 'background:rgba(255,255,255,0.03); border:1px solid var(--border-card); color:var(--text-main); padding:10px 14px; border-radius:8px; font-size:13.5px; text-align:left; cursor:pointer;';
                if (isAnswered) {
                  if (optIdx === item.correct) btnStyle += ' background:var(--accent-emerald); border-color:var(--accent-emerald); color:#fff; font-weight:700;';
                  else if (optIdx === selected) btnStyle += ' background:var(--accent-rose); border-color:var(--accent-rose); color:#fff;';
                }
                const disabled = isAnswered ? 'disabled' : '';
                return '<button style="' + btnStyle + '" ' + disabled + ' onclick="handleMcqAnswer(' + qIdx + ', ' + optIdx + ')">' + String.fromCharCode(65 + optIdx) + '. ' + opt + '</button>';
              }).join('') +
            '</div>' +
            '<div class="blank-explanation" style="display:' + (isAnswered ? 'block' : 'none') + '; margin-top:12px;">' +
              '💡 <strong>Explanation:</strong> ' + item.exp +
            '</div>' +
          '</div>'
        );
      }).join('');
    }

    function handleMcqAnswer(qIdx, optIdx) {
      if (userMcq[qIdx] !== undefined) return;
      userMcq[qIdx] = optIdx;
      if (optIdx === mcqData[qIdx].correct) playSound('correct');
      else playSound('wrong');
      renderMcq();
    }

    let userAr = {};

    function renderAr() {
      const container = document.getElementById('arContainer');
      container.innerHTML = arData.map((item, idx) => {
        const selected = userAr[idx];
        const isAnswered = selected !== undefined;
        return (
          '<div class="blank-item" id="ar_card_' + idx + '">' +
            '<div style="font-size:14px; margin-bottom:8px; line-height:1.6;"><strong>' + item.a + '</strong></div>' +
            '<div style="font-size:14px; margin-bottom:14px; line-height:1.6; color:var(--text-muted);"><strong>' + item.r + '</strong></div>' +
            '<div style="display:flex; flex-wrap:wrap; gap:8px;">' +
              ['A', 'B', 'C', 'D'].map(choice => {
                let btnClass = 'opt-btn';
                if (isAnswered) {
                  if (choice === item.correct) btnClass += ' chosen-correct';
                  else if (choice === selected) btnClass += ' chosen-wrong';
                }
                const disabled = isAnswered ? 'disabled' : '';
                return '<button class="' + btnClass + '" ' + disabled + ' onclick="handleArAnswer(' + idx + ', \\'' + choice + '\\')">Option ' + choice + '</button>';
              }).join('') +
            '</div>' +
            '<div class="blank-explanation" style="display:' + (isAnswered ? 'block' : 'none') + '; margin-top:12px;">' +
              '💡 <strong>Analysis:</strong> ' + item.exp +
            '</div>' +
          '</div>'
        );
      }).join('');
    }

    function handleArAnswer(idx, choice) {
      if (userAr[idx] !== undefined) return;
      userAr[idx] = choice;
      if (choice === arData[idx].correct) playSound('correct');
      else playSound('wrong');
      renderAr();
    }

    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      renderBlanks();
      renderSpecialists();
      renderMcq();
      renderAr();
    });
  </script>
</body>
</html>`;

fs.writeFileSync('public/history-class11-ch1-writing-and-city-life-pages11-12-worksheet.html', html, 'utf8');
console.log('Successfully generated public/history-class11-ch1-writing-and-city-life-pages11-12-worksheet.html, size:', html.length);
