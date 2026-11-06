const fs = require('fs');
const path = require('path');

// Read existing numerical questions
const jsonPath = path.join(__dirname, '..', 'src', 'data', 'class9_ganita_manjari_ch1_numericals.json');
let numericalQuestions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Enrich each question with progressive step hints
const hintsMap = {
  1: [
    { step: 1, titleEn: "Step 1: Distance from X-Axis", titleHi: "चरण 1: x-अक्ष से दूरी", textEn: "The perpendicular distance from x-axis is $|y| = |-9| = 9$.", textHi: "x-अक्ष से लंबवत दूरी $|y| = |-9| = 9$ है।" },
    { step: 2, titleEn: "Step 2: Distance from Y-Axis", titleHi: "चरण 2: y-अक्ष से दूरी", textEn: "The perpendicular distance from y-axis is $|x| = |7| = 7$.", textHi: "y-अक्ष से लंबवत दूरी $|x| = |7| = 7$ है।" },
    { step: 3, titleEn: "Step 3: Calculate Sum", titleHi: "चरण 3: योग ज्ञात करें", textEn: "Add the two distances: $9 + 7 = 16$.", textHi: "दोनों दूरियों को जोड़ें: $9 + 7 = 16$।" }
  ],
  2: [
    { step: 1, titleEn: "Step 1: Check Points Position", titleHi: "चरण 1: बिंदुओं की स्थिति", textEn: "Both endpoints $D_1(7.5, 0)$ and $R_1(11.5, 0)$ lie along the horizontal x-axis ($y = 0$).", textHi: "दोनों बिंदु x-अक्ष ($y = 0$) पर स्थित हैं।" },
    { step: 2, titleEn: "Step 2: Subtract X-Coordinates", titleHi: "चरण 2: x-निर्देशांक घटाएँ", textEn: "Width = $|x_{R_1} - x_{D_1}| = 11.5 - 7.5 = 4\\text{ ft}$.", textHi: "चौड़ाई = $11.5 - 7.5 = 4$ फीट।" }
  ],
  3: [
    { step: 1, titleEn: "Step 1: Check Y-Axis Points", titleHi: "चरण 1: y-अक्ष के बिंदु", textEn: "Points $B_1(0, 1.5)$ and $B_2(0, 4.0)$ lie along the vertical y-axis.", textHi: "बिंदु $B_1$ और $B_2$ y-अक्ष पर हैं।" },
    { step: 2, titleEn: "Step 2: Subtract Y-Coordinates", titleHi: "चरण 2: y-निर्देशांक घटाएँ", textEn: "Width = $|y_{B_2} - y_{B_1}| = 4.0 - 1.5 = 2.5\\text{ ft}$.", textHi: "चौड़ाई = $4.0 - 1.5 = 2.5$ फीट।" }
  ],
  4: [
    { step: 1, titleEn: "Step 1: Calculate Delta X & Delta Y", titleHi: "चरण 1: $\\Delta x$ और $\\Delta y$ निकालें", textEn: "$\\Delta x = 7 - 3 = 4$, $\\Delta y = 1 - 4 = -3$.", textHi: "$\\Delta x = 7 - 3 = 4$, $\\Delta y = 1 - 4 = -3$।" },
    { step: 2, titleEn: "Step 2: Apply Baudhāyana-Pythagoras Formula", titleHi: "चरण 2: बौधायन-पाइथागोरस सूत्र लगाएँ", textEn: "$AD = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.", textHi: "$AD = \\sqrt{16 + 9} = \\sqrt{25} = 5$।" }
  ],
  5: [
    { step: 1, titleEn: "Step 1: Shifts between D(7, 1) and M(9, 6)", titleHi: "चरण 1: D और M में अंतर", textEn: "$\\Delta x = 9 - 7 = 2$, $\\Delta y = 6 - 1 = 5$.", textHi: "$\\Delta x = 2$, $\\Delta y = 5$।" },
    { step: 2, titleEn: "Step 2: Square and Sum", titleHi: "चरण 2: वर्ग करके जोड़ें", textEn: "$DM^2 = 2^2 + 5^2 = 4 + 25 = 29$.", textHi: "$DM^2 = 4 + 25 = 29$।" }
  ],
  6: [
    { step: 1, titleEn: "Step 1: Shifts between M(9, 6) and A(3, 4)", titleHi: "चरण 1: M और A में अंतर", textEn: "$\\Delta x = 9 - 3 = 6$, $\\Delta y = 6 - 4 = 2$.", textHi: "$\\Delta x = 6$, $\\Delta y = 2$।" },
    { step: 2, titleEn: "Step 2: Calculate $MA^2$", titleHi: "चरण 2: $MA^2$ की गणना", textEn: "$MA^2 = 6^2 + 2^2 = 36 + 4 = 40$.", textHi: "$MA^2 = 36 + 4 = 40$।" }
  ],
  7: [
    { step: 1, titleEn: "Step 1: Reflection in Y-Axis Property", titleHi: "चरण 1: y-अक्ष परावर्तन गुण", textEn: "Reflection negates the x-coordinate: $A(3, 4) \\rightarrow A'(-3, 4)$, $D(7, 1) \\rightarrow D'(-7, 1)$.", textHi: "x-निर्देशांक ऋणात्मक होता है: $A'(-3, 4)$ और $D'(-7, 1)$।" },
    { step: 2, titleEn: "Step 2: Distance Invariance", titleHi: "चरण 2: दूरी अपरिवर्तनीयता", textEn: "$A'D' = \\sqrt{(-3 - (-7))^2 + (4 - 1)^2} = \\sqrt{4^2 + 3^2} = 5$.", textHi: "$A'D' = \\sqrt{16 + 9} = 5$ इकाई।" }
  ],
  8: [
    { step: 1, titleEn: "Step 1: Find 4th Vertex of Rectangle", titleHi: "चरण 1: आयत का चौथा शीर्ष खोजें", textEn: "From $(8, 9), (11, 9), (11, 7)$, the 4th foot $P_4$ must be $(8, 7)$.", textHi: "चौथा पैर $P_4(8, 7)$ होगा।" },
    { step: 2, titleEn: "Step 2: Sum Coordinates", titleHi: "चरण 2: निर्देशांकों का योग", textEn: "$x_4 + y_4 = 8 + 7 = 15$. (Floor area $= 3 \\times 2 = 6$).", textHi: "योग = $8 + 7 = 15$।" }
  ],
  9: [
    { step: 1, titleEn: "Step 1: Side Length Squared of Square ABCD", titleHi: "चरण 1: वर्ग की भुजा का वर्ग", textEn: "Side $AB^2 = (2 - (-1))^2 + (1 - 2)^2 = 3^2 + (-1)^2 = 10$.", textHi: "भुजा $AB^2 = 9 + 1 = 10$।" },
    { step: 2, titleEn: "Step 2: Square Area Formula", titleHi: "चरण 2: वर्ग का क्षेत्रफल", textEn: "$\\text{Area} = \\text{side}^2 = 10\\text{ sq units}$.", textHi: "क्षेत्रफल = $10$ वर्ग इकाई।" }
  ],
  10: [
    { step: 1, titleEn: "Step 1: Collinearity Distance", titleHi: "चरण 1: संरेखीय दूरी", textEn: "Distance between $M(-3, -4)$ and $G(6, 8)$: $\\Delta x = 6 - (-3) = 9$, $\\Delta y = 8 - (-4) = 12$.", textHi: "$\\Delta x = 9$, $\\Delta y = 12$।" },
    { step: 2, titleEn: "Step 2: Compute $MG$", titleHi: "चरण 2: $MG$ निकालें", textEn: "$MG = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$.", textHi: "$MG = \\sqrt{225} = 15$।" }
  ],
  11: [
    { step: 1, titleEn: "Step 1: Solve for x_B using Midpoint", titleHi: "चरण 1: x-निर्देशांक निकालें", textEn: "$\\frac{3 + x}{2} = -7 \\implies 3 + x = -14 \\implies x = -17$.", textHi: "$3 + x = -14 \\implies x = -17$।" },
    { step: 2, titleEn: "Step 2: Solve for y_B using Midpoint", titleHi: "चरण 2: y-निर्देशांक निकालें", textEn: "$\\frac{-4 + y}{2} = 1 \\implies -4 + y = 2 \\implies y = 6$.", textHi: "$-4 + y = 2 \\implies y = 6$।" },
    { step: 3, titleEn: "Step 3: Calculate (x + y)", titleHi: "चरण 3: योग (x + y)", textEn: "$x + y = -17 + 6 = -11$.", textHi: "योग = $-17 + 6 = -11$।" }
  ],
  12: [
    { step: 1, titleEn: "Step 1: Find Delta Shifts per Third", titleHi: "चरण 1: प्रति तिहाई विस्थापन", textEn: "$\\Delta x = 16 - 4 = 12 \\implies \\Delta x / 3 = 4$; $\\Delta y = -2 - 7 = -9 \\implies \\Delta y / 3 = -3$.", textHi: "प्रति तिहाई: $\\Delta x = 4$, $\\Delta y = -3$।" },
    { step: 2, titleEn: "Step 2: Find P and Q Coordinates", titleHi: "चरण 2: P और Q के निर्देशांक", textEn: "$P(4+4, 7-3) = P(8, 4)$, $Q(8+4, 4-3) = Q(12, 1)$.", textHi: "$P(8, 4)$ और $Q(12, 1)$।" },
    { step: 3, titleEn: "Step 3: Sum All 4 Values", titleHi: "चरण 3: चारों मानों का योग", textEn: "$8 + 4 + 12 + 1 = 25$.", textHi: "योग = $25$।" }
  ],
  13: [
    { step: 1, titleEn: "Step 1: Circle Centered at Origin Equation", titleHi: "चरण 1: मूलबिंदु पर केंद्र वृत्त समीकरण", textEn: "Equation of circle with center $(0,0)$ is $x^2 + y^2 = r^2$.", textHi: "वृत्त समीकरण: $x^2 + y^2 = r^2$।" },
    { step: 2, titleEn: "Step 2: Calculate Radius Squared", titleHi: "चरण 2: $r^2$ की गणना", textEn: "For $A(1, -8)$: $r^2 = 1^2 + (-8)^2 = 1 + 64 = 65$.", textHi: "$r^2 = 1 + 64 = 65$।" }
  ],
  14: [
    { step: 1, titleEn: "Step 1: Medial Triangle Vector Relation", titleHi: "चरण 1: मध्यबिंदु सदिश संबंध", textEn: "Vertex $B$ between midpoints $D$ and $E$ is given by $B = D + E - F$.", textHi: "शीर्ष $B = D + E - F$।" },
    { step: 2, titleEn: "Step 2: Compute Coordinates of B", titleHi: "चरण 2: B के निर्देशांक", textEn: "$x_B = 5 + 6 - 0 = 11$, $y_B = 1 + 5 - 3 = 3 \\implies B(11, 3)$.", textHi: "$B(11, 3)$।" },
    { step: 3, titleEn: "Step 3: Multiply Coordinates", titleHi: "चरण 3: गुणनफल", textEn: "$x_B \\times y_B = 11 \\times 3 = 33$.", textHi: "गुणनफल = $33$।" }
  ],
  15: [
    { step: 1, titleEn: "Step 1: Vertex C Relation", titleHi: "चरण 1: शीर्ष C का संबंध", textEn: "$C = E + F - D$.", textHi: "$C = E + F - D$।" },
    { step: 2, titleEn: "Step 2: Coordinates of C", titleHi: "चरण 2: C के निर्देशांक", textEn: "$x_C = 6 + 0 - 5 = 1$, $y_C = 5 + 3 - 1 = 7 \\implies C(1, 7)$.", textHi: "$C(1, 7)$।" },
    { step: 3, titleEn: "Step 3: Sum Coordinates", titleHi: "चरण 3: योग", textEn: "$x_C + y_C = 1 + 7 = 8$.", textHi: "योग = $8$।" }
  ],
  16: [
    { step: 1, titleEn: "Step 1: Center Coordinates & Distance", titleHi: "चरण 1: केंद्र और दूरी", textEn: "$A(100, 150)$ and $B(250, 230) \\implies \\Delta x = 150, \\Delta y = 80$.", textHi: "$\\Delta x = 150$, $\\Delta y = 80$।" },
    { step: 2, titleEn: "Step 2: Center Distance Calculation", titleHi: "चरण 2: केंद्रों के बीच दूरी", textEn: "$AB = \\sqrt{150^2 + 80^2} = \\sqrt{22500 + 6400} = \\sqrt{28900} = 170\\text{ px}$.", textHi: "$AB = \\sqrt{28900} = 170$ पिक्सल।" }
  ],
  17: [
    { step: 1, titleEn: "Step 1: Midpoint of Dining Length", titleHi: "चरण 1: लंबाई का मध्यबिंदु", textEn: "$x_c = \\frac{-6 + 12}{2} = \\frac{6}{2} = 3$.", textHi: "$x_c = 3$।" },
    { step: 2, titleEn: "Step 2: Midpoint of Dining Width", titleHi: "चरण 2: चौड़ाई का मध्यबिंदु", textEn: "$y_c = \\frac{0 + (-15)}{2} = -7.5$.", textHi: "$y_c = -7.5$।" },
    { step: 3, titleEn: "Step 3: Sum Coordinates", titleHi: "चरण 3: योग", textEn: "$x_c + y_c = 3 + (-7.5) = -4.5$.", textHi: "योग = $-4.5$।" }
  ]
};

// Merge hints into questions
numericalQuestions = numericalQuestions.map(q => ({
  ...q,
  hints: hintsMap[q.id] || []
}));

// Save updated JSON
fs.writeFileSync(jsonPath, JSON.stringify(numericalQuestions, null, 2), 'utf8');
console.log('Updated JSON with step hints at:', jsonPath);

// Re-generate the HTML Page with Step Hints UI
function buildNumericalsHtml(questions) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Class 9 Ganita Manjari Ch 1: Coordinate Geometry — Step Numericals Hub | NextSem</title>
  <meta name="description" content="Master NCERT Class 9 Ganita Manjari Chapter 1 (Orienting Yourself: The Use of Coordinates) with step-by-step progressive hints, formulas, and KaTeX solutions.">
  <link rel="icon" type="image/png" href="/app-logo.png">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
  
  <!-- KaTeX for crisp mathematical rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

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
      max-width: 920px;
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
      max-width: 920px;
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

    /* Type Filter Bar */
    .type-filter-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      overflow-x: auto;
      padding: 8px 0 12px;
      margin-bottom: 12px;
    }
    .type-btn {
      padding: 6px 12px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-card);
      color: var(--text-muted);
      font-size: 0.74rem;
      font-weight: 700;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.15s;
    }
    .type-btn.active {
      background: var(--brand-sapphire);
      color: #ffffff;
      border-color: var(--brand-sapphire);
    }

    /* Problem Card */
    .num-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 16px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
      transition: all 0.2s ease;
    }
    .num-badge-row {
      display: flex;
      align-items: center;
      justifyContent: space-between;
      margin-bottom: 10px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .num-type-badge {
      font-size: 0.72rem;
      font-weight: 800;
      color: #93c5fd;
      background: rgba(37, 99, 235, 0.15);
      border: 1px solid rgba(37, 99, 235, 0.3);
      padding: 3px 10px;
      border-radius: 6px;
    }
    .num-count {
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--text-muted);
      font-family: var(--font-mono);
    }

    .num-title-en {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 6px;
    }
    .num-question-en {
      font-size: 0.95rem;
      color: var(--text-main);
      margin-bottom: 8px;
      line-height: 1.5;
      white-space: pre-line;
    }
    .num-question-hi {
      font-size: 0.88rem;
      color: var(--text-muted);
      font-family: var(--font-devanagari);
      margin-bottom: 16px;
      line-height: 1.5;
      white-space: pre-line;
    }

    /* Hints Bar & Container */
    .hints-section {
      background: rgba(251, 191, 36, 0.07);
      border: 1px solid rgba(251, 191, 36, 0.25);
      border-radius: 12px;
      padding: 12px 14px;
      margin-bottom: 14px;
    }
    .hints-header {
      display: flex;
      align-items: center;
      justifyContent: space-between;
      margin-bottom: 8px;
    }
    .hints-title {
      font-size: 0.82rem;
      font-weight: 800;
      color: #fbbf24;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .hint-step-buttons {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .btn-hint-step {
      background: rgba(251, 191, 36, 0.15);
      border: 1px solid rgba(251, 191, 36, 0.35);
      color: #fbbf24;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.15s;
    }
    .btn-hint-step:hover, .btn-hint-step.active {
      background: #fbbf24;
      color: #0f172a;
    }
    .hint-content-box {
      font-size: 0.82rem;
      line-height: 1.5;
      color: var(--text-main);
      background: rgba(0, 0, 0, 0.25);
      padding: 10px 12px;
      border-radius: 8px;
      margin-top: 6px;
      display: none;
    }
    .hint-content-box.show { display: block; }

    /* Interactive Input & Check Area */
    .calc-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }
    .calc-input {
      background: rgba(255, 255, 255, 0.05);
      border: 1.5px solid var(--border-card);
      border-radius: 10px;
      padding: 10px 14px;
      color: var(--text-main);
      font-family: var(--font-mono);
      font-size: 1rem;
      font-weight: 700;
      width: 140px;
      outline: none;
      transition: border-color 0.2s;
    }
    .calc-input:focus {
      border-color: var(--brand-sapphire);
    }
    .calc-unit {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--text-muted);
    }
    .btn-submit-calc {
      background: var(--brand-sapphire);
      color: #ffffff;
      border: none;
      padding: 10px 18px;
      border-radius: 10px;
      font-size: 0.85rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.15s;
    }
    .btn-submit-calc:hover {
      background: #1d4ed8;
      transform: translateY(-1px);
    }
    .btn-toggle-solution {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-card);
      color: var(--text-muted);
      padding: 10px 14px;
      border-radius: 10px;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
    }

    /* Result Feedback Banner */
    .result-banner {
      display: none;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 12px;
    }
    .result-banner.correct {
      display: flex;
      align-items: center;
      gap: 6px;
      background: var(--color-correct-bg);
      color: #4ade80;
      border: 1px solid var(--color-correct);
    }
    .result-banner.wrong {
      display: flex;
      align-items: center;
      gap: 6px;
      background: var(--color-wrong-bg);
      color: #f87171;
      border: 1px solid var(--color-wrong);
    }

    /* Solution Box */
    .sol-box {
      display: none;
      background: rgba(30, 58, 138, 0.15);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 12px;
      padding: 16px;
      margin-top: 12px;
      font-size: 0.88rem;
    }
    .sol-box.show { display: block; }
    .sol-header {
      font-weight: 800;
      color: #60a5fa;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .formula-tag {
      background: rgba(0, 0, 0, 0.35);
      padding: 6px 12px;
      border-radius: 8px;
      font-family: var(--font-mono);
      font-size: 0.84rem;
      color: #fbbf24;
      margin: 6px 0 10px;
      display: inline-block;
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

    @media (max-width: 600px) {
      .score-hud { grid-template-columns: repeat(2, 1fr); }
      .num-card { padding: 1rem; }
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
    <a href="/#ncert-books">Class 9</a>
    <span class="sep">❯</span>
    <a href="/#ncert-books">Ganita Manjari</a>
    <span class="sep">❯</span>
    <span class="current">Ch 1: Coordinate Geometry (Numericals Hub)</span>
  </nav>

  <!-- Top Sticky Header -->
  <header class="quiz-header">
    <div class="quiz-header-inner">
      <a href="/" class="btn-nav">← Back to App</a>
      <div style="text-align: center;">
        <div style="font-weight: 800; font-size: 0.95rem;">Class 9 Ganita Manjari • Chapter 1</div>
        <div style="font-size: 0.72rem; color: #60a5fa; font-weight: 700;">Orienting Yourself: The Use of Coordinates (Step Hints)</div>
      </div>
      <div class="lang-pill">
        <button class="lang-btn active" id="btn-lang-both" onclick="setLang('both')">Both</button>
        <button class="lang-btn" id="btn-lang-en" onclick="setLang('en')">EN</button>
        <button class="lang-btn" id="btn-lang-hi" onclick="setLang('hi')">HI</button>
      </div>
    </div>
  </header>

  <main class="container">
    
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%); border-radius: 16px; padding: 1.5rem; margin-top: 1rem; border: 1px solid rgba(255, 255, 255, 0.1);">
      <div style="display: inline-block; background: rgba(255, 255, 255, 0.15); font-size: 0.7rem; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.05em;">
        📐 NEP 2026 / Ganita Manjari Grade 9 — Part I
      </div>
      <h1 style="font-size: 1.4rem; font-weight: 900; margin-bottom: 6px;">Chapter 1: Orienting Yourself — Numerical Problem Bank with Step Hints</h1>
      <p style="font-size: 0.85rem; color: #cbd5e1; max-width: 780px;">
        17 calculation-driven step problems with progressive step hints: Perpendicular distance from axes, Baudhāyana-Pythagoras distance formula, reflection across axes, missing rectangle/square vertices, collinearity summation, midpoint &amp; trisection coordinates, and circle collision geometry.
      </p>
    </div>

    <!-- Score HUD -->
    <div class="score-hud">
      <div class="hud-card">
        <div class="hud-val" id="hud-total">17</div>
        <div class="hud-label">Total Numericals</div>
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

    <!-- Type Category Filter -->
    <div class="type-filter-bar">
      <button class="type-btn active" onclick="filterType('all')">All Problem Types (17)</button>
      <button class="type-btn" onclick="filterType('type-1-axes-distance')">Type 1: Axes &amp; Offsets</button>
      <button class="type-btn" onclick="filterType('type-2-parallel-distances')">Type 2: Parallel Distances</button>
      <button class="type-btn" onclick="filterType('type-3-distance-formula')">Type 3: Distance Formula</button>
      <button class="type-btn" onclick="filterType('type-4-reflection')">Type 4: Reflection</button>
      <button class="type-btn" onclick="filterType('type-5-rectangles-area')">Type 5: Rectangles &amp; Area</button>
      <button class="type-btn" onclick="filterType('type-6-collinearity')">Type 6: Collinearity</button>
      <button class="type-btn" onclick="filterType('type-7-midpoint')">Type 7: Midpoint</button>
      <button class="type-btn" onclick="filterType('type-8-trisection')">Type 8: Trisection</button>
      <button class="type-btn" onclick="filterType('type-9-circle-origin')">Type 9: Circle Radius</button>
      <button class="type-btn" onclick="filterType('type-10-medial-triangle')">Type 10: Medial Triangle</button>
      <button class="type-btn" onclick="filterType('type-11-computer-graphics')">Type 11: Screen Geometry</button>
    </div>

    <!-- Numericals List -->
    <div id="numericals-list"></div>

  </main>

  <script>
    const questions = ${JSON.stringify(questions)};

    let currentLang = 'both';
    let currentTypeFilter = 'all';
    let userAttempts = {};
    let openHints = {};
    let correctCount = 0;
    let attempted = 0;

    function setLang(lang) {
      currentLang = lang;
      document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById('btn-lang-' + lang).classList.add('active');
      renderNumericals();
    }

    function filterType(typeId) {
      currentTypeFilter = typeId;
      document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      renderNumericals();
    }

    function toggleStepHint(qId, stepIndex) {
      const key = qId + '-' + stepIndex;
      openHints[key] = !openHints[key];
      const box = document.getElementById('hintbox-' + key);
      const btn = document.getElementById('hintbtn-' + key);
      if (box && btn) {
        if (openHints[key]) {
          box.classList.add('show');
          btn.classList.add('active');
        } else {
          box.classList.remove('show');
          btn.classList.remove('active');
        }
      }
    }

    function renderNumericals() {
      const listEl = document.getElementById('numericals-list');
      listEl.innerHTML = '';

      const filtered = questions.filter(q => currentTypeFilter === 'all' || q.typeId === currentTypeFilter);

      filtered.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'num-card';
        card.id = 'numcard-' + q.id;

        const attempt = userAttempts[q.id];

        let titleHtml = '';
        if (currentLang === 'both') {
          titleHtml = '<div class="num-title-en">' + q.titleEn + '</div><div class="num-question-en">' + q.questionEn + '</div><div class="num-question-hi">' + q.questionHi + '</div>';
        } else if (currentLang === 'en') {
          titleHtml = '<div class="num-title-en">' + q.titleEn + '</div><div class="num-question-en">' + q.questionEn + '</div>';
        } else {
          titleHtml = '<div class="num-title-en">' + q.titleHi + '</div><div class="num-question-hi" style="color: var(--text-main); font-size: 0.95rem;">' + q.questionHi + '</div>';
        }

        // Generate Step Hints HTML
        let hintsHtml = '';
        if (q.hints && q.hints.length > 0) {
          let hintBtns = '';
          let hintBoxes = '';
          q.hints.forEach((h, hIdx) => {
            const hKey = q.id + '-' + h.step;
            const isOpen = !!openHints[hKey];
            
            let btnLabel = 'Step ' + h.step + ' Hint';
            let hTitle = currentLang === 'hi' ? h.titleHi : h.titleEn;
            let hText = '';
            if (currentLang === 'both') {
              hText = '<div><strong>' + h.titleEn + '</strong><p style=\"margin-top: 3px;\">' + h.textEn + '</p><p style=\"margin-top: 6px; color: #cbd5e1; font-family: var(--font-devanagari);\">' + h.textHi + '</p></div>';
            } else if (currentLang === 'en') {
              hText = '<div><strong>' + h.titleEn + '</strong><p style=\"margin-top: 3px;\">' + h.textEn + '</p></div>';
            } else {
              hText = '<div><strong>' + h.titleHi + '</strong><p style=\"margin-top: 3px;\">' + h.textHi + '</p></div>';
            }

            hintBtns += \`<button class="btn-hint-step \${isOpen ? 'active' : ''}" id="hintbtn-\${hKey}" onclick="toggleStepHint(\${q.id}, \${h.step})">💡 \${btnLabel}</button>\`;
            hintBoxes += \`<div class="hint-content-box \${isOpen ? 'show' : ''}" id="hintbox-\${hKey}">\${hText}</div>\`;
          });

          hintsHtml = \`
            <div class="hints-section">
              <div class="hints-header">
                <span class="hints-title">💡 Progressive Step Hints (Click to Reveal)</span>
                <div class="hint-step-buttons">\${hintBtns}</div>
              </div>
              \${hintBoxes}
            </div>
          \`;
        }

        let feedbackHtml = '';
        if (attempt !== undefined) {
          if (attempt.isCorrect) {
            feedbackHtml = '<div class="result-banner correct" style="display: flex;">✅ Correct Answer! Great Calculation! (' + q.answer + ' ' + q.unit + ')</div>';
          } else {
            feedbackHtml = '<div class="result-banner wrong" style="display: flex;">❌ Incorrect (' + attempt.val + '). Check the progressive hints above or step derivation below!</div>';
          }
        }

        let stepsText = '';
        if (currentLang === 'both' || currentLang === 'en') {
          stepsText += '<p><strong>Step-by-Step Calculation:</strong></p><ul style="margin: 6px 0 10px 18px;">';
          q.stepsEn.forEach(step => stepsText += '<li style="margin-bottom: 4px;">' + step + '</li>');
          stepsText += '</ul>';
        }
        if (currentLang === 'both' || currentLang === 'hi') {
          stepsText += '<p><strong>चरणबद्ध समाधान (हिंदी):</strong></p><ul style="margin: 6px 0 10px 18px; font-family: var(--font-devanagari);">';
          q.stepsHi.forEach(step => stepsText += '<li style="margin-bottom: 4px;">' + step + '</li>');
          stepsText += '</ul>';
        }

        card.innerHTML = \`
          <div class="num-badge-row">
            <span class="num-type-badge">\${q.typeCategory}</span>
            <span class="num-count">Problem \${idx + 1} / \${filtered.length}</span>
          </div>
          \${titleHtml}
          \${hintsHtml}
          
          <div class="calc-row">
            <input type="number" step="any" class="calc-input" id="input-\${q.id}" placeholder="Enter Value" value="\${attempt ? attempt.val : ''}">
            <span class="calc-unit">\${q.unit}</span>
            <button class="btn-submit-calc" onclick="checkAnswer(\${q.id})">Validate Answer</button>
            <button class="btn-toggle-solution" onclick="toggleSolution(\${q.id})">💡 Full Derivation</button>
          </div>

          \${feedbackHtml}

          <div class="sol-box \${attempt ? 'show' : ''}" id="sol-\${q.id}">
            <div class="sol-header">🔍 Mathematical Derivation &amp; Formula</div>
            <div class="formula-tag">$$\${q.formula}$$</div>
            \${stepsText}
          </div>
        \`;

        listEl.appendChild(card);
      });

      if (window.renderMathInElement) {
        renderMathInElement(listEl, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ]
        });
      }
    }

    function checkAnswer(qId) {
      const inputEl = document.getElementById('input-' + qId);
      if (!inputEl) return;
      const userVal = parseFloat(inputEl.value.trim());
      if (isNaN(userVal)) {
        alert('Please enter a valid numeric value first!');
        return;
      }

      const q = questions.find(item => item.id === qId);
      const isCorrect = Math.abs(userVal - q.answer) <= (q.tolerance || 0.001);

      if (userAttempts[qId] === undefined) {
        attempted++;
      }
      userAttempts[qId] = { val: userVal, isCorrect: isCorrect };

      if (isCorrect) {
        correctCount = Object.values(userAttempts).filter(a => a.isCorrect).length;
        if (typeof confetti === 'function') {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
        }
      }

      document.getElementById('hud-attempted').innerText = attempted;
      document.getElementById('hud-correct').innerText = correctCount;
      const acc = Math.round((correctCount / attempted) * 100);
      document.getElementById('hud-accuracy').innerText = acc + '%';

      renderNumericals();
    }

    function toggleSolution(qId) {
      const solEl = document.getElementById('sol-' + qId);
      if (solEl) {
        solEl.classList.toggle('show');
      }
    }

    // Initial render
    window.addEventListener('DOMContentLoaded', () => {
      renderNumericals();
    });
    renderNumericals();
  </script>
</body>
</html>`;
}

const html = buildNumericalsHtml(numericalQuestions);
const htmlDest = path.join(__dirname, '..', 'public', 'class9-ganita-manjari-ch1-coordinate-geometry-numericals.html');
fs.writeFileSync(htmlDest, html, 'utf8');
console.log('Saved interactive Numericals HTML with Step Hints to:', htmlDest);
