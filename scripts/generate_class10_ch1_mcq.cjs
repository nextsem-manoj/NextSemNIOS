const fs = require('fs');
const path = require('path');

const jsonDest = path.join(__dirname, '..', 'src', 'data', 'class10_science_ch1_difficult_mcqs.json');
let questions = JSON.parse(fs.readFileSync(jsonDest, 'utf8'));

// Fisher-Yates shuffle algorithm for options
function shuffleQuestionsOptions(qList) {
  const keys = ['a', 'b', 'c', 'd'];
  return qList.map((q) => {
    const correctOpt = q.options.find(opt => opt.key === q.correct) || q.options[0];
    const rawOptions = [...q.options];
    for (let i = rawOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rawOptions[i], rawOptions[j]] = [rawOptions[j], rawOptions[i]];
    }
    let newCorrectKey = 'a';
    const newOptions = rawOptions.map((opt, i) => {
      const k = keys[i];
      if (opt.textEn === correctOpt.textEn && opt.textHi === correctOpt.textHi) {
        newCorrectKey = k;
      }
      return {
        key: k,
        textEn: opt.textEn,
        textHi: opt.textHi
      };
    });
    return {
      ...q,
      options: newOptions,
      correct: newCorrectKey
    };
  });
}

// Generate Standalone HTML Page
function buildHtmlPage(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Class 10 Science Ch 1: Chemical Reactions and Equations — 25 Difficult HOTS MCQs | NextSem</title>
  <meta name="description" content="Master NCERT Class 10 Science Chapter 1 (Chemical Reactions and Equations / रासायनिक अभिक्रियाएँ एवं समीकरण) with 25 Difficult Level HOTS & Competency MCQs, instant explanations, and KaTeX equations.">
  <link rel="icon" type="image/png" href="/app-logo.png">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  
  <!-- Confetti -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>

  <style>
    :root {
      --bg-body: #0a122a;
      --bg-card: #131d38;
      --bg-card-hover: #1c2748;
      --border-card: rgba(255, 255, 255, 0.08);
      --border-accent: #2563eb;
      
      --brand-blue: #1e40af;
      --brand-sapphire: #2563eb;
      --brand-emerald: #15803d;
      --brand-amber: #b45309;
      --brand-indigo: #4338ca;
      
      --color-correct: #16a34a;
      --color-correct-bg: rgba(22, 163, 74, 0.15);
      --color-wrong: #dc2626;
      --color-wrong-bg: rgba(220, 38, 38, 0.15);
      
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      
      --font-main: 'Plus Jakarta Sans', system-ui, sans-serif;
      --font-devanagari: 'Noto Sans Devanagari', 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    body.light-theme {
      --bg-body: #f8fafc;
      --bg-card: #ffffff;
      --bg-card-hover: #f1f5f9;
      --border-card: #e2e8f0;
      --border-accent: #1e40af;
      --text-main: #0f172a;
      --text-muted: #475569;
      --text-dim: #64748b;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg-body);
      color: var(--text-main);
      font-family: var(--font-main);
      min-height: 100vh;
      line-height: 1.6;
      display: flex;
      flex-direction: column;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 1rem 1rem 3rem;
      width: 100%;
    }

    /* Desktop Top Navbar Breadcrumb (Project Rule) */
    .top-breadcrumb-bar {
      background: #0f172a;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 6px;
      color: #94a3b8;
      overflow-x: auto;
      white-space: nowrap;
    }
    .top-breadcrumb-bar a {
      color: #93c5fd;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.15s;
    }
    .top-breadcrumb-bar a:hover {
      color: #ffffff;
      text-decoration: underline;
    }
    .top-breadcrumb-bar .sep {
      color: #64748b;
      font-size: 0.75rem;
    }
    .top-breadcrumb-bar .current {
      color: #f8fafc;
      font-weight: 700;
    }

    /* Header Bar */
    .quiz-header {
      background: rgba(10, 18, 42, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-card);
      position: sticky;
      top: 0;
      z-index: 50;
      padding: 0.75rem 1rem;
    }
    body.light-theme .quiz-header {
      background: rgba(255, 255, 255, 0.95);
    }
    .quiz-header-inner {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justifyContent: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }
    .btn-nav {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid var(--border-card);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
    }
    body.light-theme .btn-nav {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Score HUD */
    .score-hud {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin: 1.25rem 0;
    }
    .hud-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 12px;
      padding: 10px;
      text-align: center;
    }
    .hud-val {
      font-size: 1.25rem;
      font-weight: 900;
      font-family: var(--font-mono);
    }
    .hud-label {
      font-size: 0.68rem;
      text-transform: uppercase;
      color: var(--text-muted);
      font-weight: 700;
      letter-spacing: 0.05em;
    }

    /* Question Card */
    .q-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 16px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
      transition: all 0.2s ease;
    }
    .q-badge-row {
      display: flex;
      align-items: center;
      justifyContent: space-between;
      margin-bottom: 12px;
      gap: 8px;
      flex-wrap: wrap;
    }
    .q-topic {
      font-size: 0.72rem;
      font-weight: 800;
      color: #93c5fd;
      background: rgba(37, 99, 235, 0.15);
      border: 1px solid rgba(37, 99, 235, 0.3);
      padding: 3px 10px;
      border-radius: 6px;
    }
    .q-num {
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--text-muted);
      font-family: var(--font-mono);
    }

    .q-title-en {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 6px;
      line-height: 1.45;
      white-space: pre-line;
    }
    .q-title-hi {
      font-size: 0.95rem;
      color: var(--text-muted);
      font-family: var(--font-devanagari);
      margin-bottom: 16px;
      line-height: 1.5;
      white-space: pre-line;
    }

    /* Option Grid */
    .opt-grid {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 14px;
    }
    .opt-btn {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border-card);
      border-radius: 12px;
      padding: 12px 14px;
      text-align: left;
      cursor: pointer;
      display: flex;
      gap: 12px;
      align-items: flex-start;
      transition: all 0.15s ease;
      color: var(--text-main);
      width: 100%;
    }
    body.light-theme .opt-btn {
      background: #f8fafc;
      border-color: #e2e8f0;
    }
    .opt-btn:hover:not(:disabled) {
      background: var(--bg-card-hover);
      border-color: var(--brand-sapphire);
      transform: translateX(2px);
    }
    .opt-key {
      font-family: var(--font-mono);
      font-weight: 800;
      font-size: 0.8rem;
      background: rgba(255, 255, 255, 0.08);
      width: 26px;
      height: 26px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justifyContent: center;
      flex-shrink: 0;
      margin-top: 1px;
    }
    body.light-theme .opt-key {
      background: #e2e8f0;
    }

    .opt-btn.correct {
      background: var(--color-correct-bg) !important;
      border-color: var(--color-correct) !important;
      color: #ffffff !important;
    }
    .opt-btn.correct .opt-key {
      background: var(--color-correct) !important;
      color: #ffffff !important;
    }
    .opt-btn.wrong {
      background: var(--color-wrong-bg) !important;
      border-color: var(--color-wrong) !important;
      opacity: 0.85;
    }
    .opt-btn.wrong .opt-key {
      background: var(--color-wrong) !important;
      color: #ffffff !important;
    }

    /* Explanation Box */
    .exp-box {
      display: none;
      background: rgba(37, 99, 235, 0.08);
      border: 1px solid rgba(37, 99, 235, 0.25);
      border-radius: 12px;
      padding: 14px;
      margin-top: 12px;
      font-size: 0.86rem;
      line-height: 1.55;
    }
    .exp-box.show { display: block; }
    .exp-title {
      font-weight: 800;
      color: #60a5fa;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Language Switcher */
    .lang-pill {
      display: inline-flex;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border-card);
      border-radius: 8px;
      padding: 2px;
    }
    .lang-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.74rem;
      font-weight: 700;
      cursor: pointer;
    }
    .lang-btn.active {
      background: var(--brand-sapphire);
      color: #ffffff;
    }

    .btn-shuffle {
      background: rgba(37, 99, 235, 0.15);
      border: 1px solid rgba(37, 99, 235, 0.35);
      color: #93c5fd;
      padding: 5px 10px;
      border-radius: 8px;
      font-size: 0.74rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: all 0.2s;
    }
    .btn-shuffle:hover {
      background: rgba(37, 99, 235, 0.3);
      color: #ffffff;
    }

    @media (max-width: 600px) {
      .score-hud { grid-template-columns: repeat(2, 1fr); }
      .q-card { padding: 1rem; }
    }
  </style>
</head>
<body>

  <!-- Desktop Breadcrumb Navigation -->
  <nav class="top-breadcrumb-bar" aria-label="Breadcrumb">
    <a href="/">Home</a>
    <span class="sep">❯</span>
    <a href="/#ncert-books">NCERT Books</a>
    <span class="sep">❯</span>
    <a href="/#ncert-books">Class 10</a>
    <span class="sep">❯</span>
    <a href="/#ncert-books">Science</a>
    <span class="sep">❯</span>
    <span class="current">Ch 1: Chemical Reactions (Difficult MCQs)</span>
  </nav>

  <!-- Top Sticky Header -->
  <header class="quiz-header">
    <div class="quiz-header-inner">
      <a href="/" class="btn-nav">← Back to App</a>
      <div style="text-align: center;">
        <div style="font-weight: 800; font-size: 0.95rem;">Class 10 Science • Chapter 1</div>
        <div style="font-size: 0.72rem; color: #60a5fa; font-weight: 700;">Chemical Reactions (25 Difficult Level MCQs)</div>
      </div>
      <div class="header-actions">
        <button class="btn-shuffle" onclick="shuffleCurrentOptions()" title="Shuffle and randomize all options">
          <span>🔀</span> Shuffle Options
        </button>
        <div class="lang-pill">
          <button class="lang-btn active" id="btn-lang-both" onclick="setLang('both')">Both</button>
          <button class="lang-btn" id="btn-lang-en" onclick="setLang('en')">EN</button>
          <button class="lang-btn" id="btn-lang-hi" onclick="setLang('hi')">HI</button>
        </div>
      </div>
    </div>
  </header>

  <main class="container">
    
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%); border-radius: 16px; padding: 1.5rem; margin-top: 1rem; border: 1px solid rgba(255, 255, 255, 0.1);">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
        <div style="display: inline-block; background: rgba(255, 255, 255, 0.15); font-size: 0.7rem; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.05em;">
          🔥 High-Difficulty HOTS / Competency Test
        </div>
        <div style="color: #93c5fd; font-size: 0.75rem; font-weight: 700; background: rgba(0,0,0,0.25); padding: 3px 8px; border-radius: 6px;">
          Options Auto-Shuffled (Balanced A, B, C, D)
        </div>
      </div>
      <h1 style="font-size: 1.4rem; font-weight: 900; margin-bottom: 6px;">NCERT Class 10 Science — Chapter 1: Chemical Reactions and Equations</h1>
      <p style="font-size: 0.85rem; color: #cbd5e1; max-width: 760px;">
        Designed strictly from NCERT Chapter 1 text & lab activities. Contains 25 challenging questions covering experimental activities, redox stoichiometry, water electrolysis ratios, precipitation, photolysis yield, and multi-statement assertions with step-by-step scientific rationale.
      </p>
    </div>

    <!-- Score HUD -->
    <div class="score-hud">
      <div class="hud-card">
        <div class="hud-val" id="hud-total">25</div>
        <div class="hud-label">Total Questions</div>
      </div>
      <div class="hud-card">
        <div class="hud-val" id="hud-attempted" style="color: #60a5fa;">0</div>
        <div class="hud-label">Attempted</div>
      </div>
      <div class="hud-card">
        <div class="hud-val" id="hud-correct" style="color: #16a34a;">0</div>
        <div class="hud-label">Correct</div>
      </div>
      <div class="hud-card">
        <div class="hud-val" id="hud-accuracy" style="color: #fbbf24;">0%</div>
        <div class="hud-label">Accuracy</div>
      </div>
    </div>

    <!-- Questions Container -->
    <div id="questions-list"></div>

  </main>

  <script>
    let questions = ${JSON.stringify(data)};

    let currentLang = 'both';
    let userAnswers = {};
    let correctCount = 0;
    let attempted = 0;

    function shuffleCurrentOptions() {
      const keys = ['a', 'b', 'c', 'd'];
      userAnswers = {};
      correctCount = 0;
      attempted = 0;
      document.getElementById('hud-attempted').innerText = 0;
      document.getElementById('hud-correct').innerText = 0;
      document.getElementById('hud-accuracy').innerText = '0%';

      questions = questions.map(q => {
        const correctOpt = q.options.find(opt => opt.key === q.correct) || q.options[0];
        const rawOptions = [...q.options];
        for (let i = rawOptions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [rawOptions[i], rawOptions[j]] = [rawOptions[j], rawOptions[i]];
        }
        let newCorrectKey = 'a';
        const newOptions = rawOptions.map((opt, i) => {
          const k = keys[i];
          if (opt.textEn === correctOpt.textEn && opt.textHi === correctOpt.textHi) {
            newCorrectKey = k;
          }
          return {
            key: k,
            textEn: opt.textEn,
            textHi: opt.textHi
          };
        });
        return {
          ...q,
          options: newOptions,
          correct: newCorrectKey
        };
      });

      renderQuestions();
    }

    function setLang(lang) {
      currentLang = lang;
      document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById('btn-lang-' + lang).classList.add('active');
      renderQuestions();
    }

    function renderQuestions() {
      const listEl = document.getElementById('questions-list');
      listEl.innerHTML = '';

      questions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'q-card';
        card.id = 'qcard-' + q.id;

        const isAnswered = userAnswers[q.id] !== undefined;
        const selectedOpt = userAnswers[q.id];

        let titleHtml = '';
        if (currentLang === 'both') {
          titleHtml = '<div class="q-title-en">' + q.questionEn + '</div><div class="q-title-hi">' + q.questionHi + '</div>';
        } else if (currentLang === 'en') {
          titleHtml = '<div class="q-title-en">' + q.questionEn + '</div>';
        } else {
          titleHtml = '<div class="q-title-hi" style="color: var(--text-main); font-weight: 700; font-size: 1rem;">' + q.questionHi + '</div>';
        }

        let optionsHtml = '';
        q.options.forEach(opt => {
          let btnClass = 'opt-btn';
          if (isAnswered) {
            if (opt.key === q.correct) {
              btnClass += ' correct';
            } else if (opt.key === selectedOpt) {
              btnClass += ' wrong';
            }
          }

          let optText = '';
          if (currentLang === 'both') {
            optText = '<div><div>' + opt.textEn + '</div><div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-devanagari); margin-top: 3px;">' + opt.textHi + '</div></div>';
          } else if (currentLang === 'en') {
            optText = '<div>' + opt.textEn + '</div>';
          } else {
            optText = '<div>' + opt.textHi + '</div>';
          }

          optionsHtml += \`
            <button class="\${btnClass}" onclick="selectOption(\${q.id}, '\${opt.key}')" \${isAnswered ? 'disabled' : ''}>
              <span class="opt-key">\${opt.key.toUpperCase()}</span>
              \${optText}
            </button>
          \`;
        });

        let expHtml = '';
        let expText = '';
        if (currentLang === 'both') {
          expText = '<p><strong>English:</strong> ' + q.explanationEn + '</p><p style="margin-top: 6px;"><strong>हिंदी:</strong> ' + q.explanationHi + '</p>';
        } else if (currentLang === 'en') {
          expText = '<p>' + q.explanationEn + '</p>';
        } else {
          expText = '<p>' + q.explanationHi + '</p>';
        }

        expHtml = \`
          <div class="exp-box \${isAnswered ? 'show' : ''}" id="exp-\${q.id}">
            <div class="exp-title">💡 Explanation & Scientific Rationale</div>
            \${expText}
          </div>
        \`;

        card.innerHTML = \`
          <div class="q-badge-row">
            <span class="q-topic">\${q.topic}</span>
            <span class="q-num">Q \${idx + 1} / \${questions.length}</span>
          </div>
          \${titleHtml}
          <div class="opt-grid">\${optionsHtml}</div>
          \${expHtml}
        \`;

        listEl.appendChild(card);
      });
    }

    function selectOption(qId, selectedKey) {
      if (userAnswers[qId] !== undefined) return;
      userAnswers[qId] = selectedKey;
      attempted++;

      const q = questions.find(item => item.id === qId);
      if (selectedKey === q.correct) {
        correctCount++;
        if (typeof confetti === 'function') {
          confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
        }
      }

      document.getElementById('hud-attempted').innerText = attempted;
      document.getElementById('hud-correct').innerText = correctCount;
      const acc = Math.round((correctCount / attempted) * 100);
      document.getElementById('hud-accuracy').innerText = acc + '%';

      renderQuestions();
    }

    // Initial render
    renderQuestions();
  </script>
</body>
</html>`;
}

// Perform shuffle
const shuffled = shuffleQuestionsOptions(questions);

// Save shuffled JSON
fs.writeFileSync(jsonDest, JSON.stringify(shuffled, null, 2), 'utf8');
console.log('Saved shuffled JSON data to:', jsonDest);

const html = buildHtmlPage(shuffled);
const htmlDest = path.join(__dirname, '..', 'public', 'class10-science-ch1-chemical-reactions-difficult-mcq.html');
fs.writeFileSync(htmlDest, html, 'utf8');
console.log('Saved interactive HTML test to:', htmlDest);

module.exports = { buildHtmlPage, shuffleQuestionsOptions };
