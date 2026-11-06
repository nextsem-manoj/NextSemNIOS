/**
 * ═════════════════════════════════════════════════════════════════════════════
 * NextSem StudyGuide • NCERT & NIOS Learning Platform Status & Task Assistant
 * Author: Er. Manoj Kumar
 *
 * Usage:
 *   npm run status
 *   npm run task
 *   node scripts/project-status.cjs
 * ═════════════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

// Terminal ANSI colors
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  red: '\x1b[31m',
  white: '\x1b[37m',
  emerald: '\x1b[38;5;35m',
  gold: '\x1b[38;5;220m',
  sky: '\x1b[38;5;39m',
};

const ROOT_DIR = path.resolve(__dirname, '..');
const ROADMAP_FILE = path.join(ROOT_DIR, 'docs', 'roadmap', 'task.md');
const DATA_DIR = path.join(ROOT_DIR, 'src', 'data');
const INTERACTIVE_DIR = path.join(ROOT_DIR, 'src', 'components', 'interactive');

function printHeader() {
  console.log(`\n${C.emerald}${C.bold}╔════════════════════════════════════════════════════════════════════════════════╗${C.reset}`);
  console.log(`${C.emerald}${C.bold}║       🚀 STUDYGUIDE BY NEXTSEM — NCERT & NIOS PLATFORM STATUS & ROADMAP       ║${C.reset}`);
  console.log(`${C.emerald}${C.bold}║       Classes 1–12 • NIOS Senior Secondary • NEP 2020 Rationalized             ║${C.reset}`);
  console.log(`${C.emerald}${C.bold}║       Author & Lead: Er. Manoj Kumar                                           ║${C.reset}`);
  console.log(`${C.emerald}${C.bold}╚════════════════════════════════════════════════════════════════════════════════╝${C.reset}\n`);
}

function analyzeDataMetrics() {
  let totalDataFiles = 0;
  let totalInteractiveComponents = 0;
  let totalStandaloneStudios = 0;
  let dataSizeBytes = 0;

  if (fs.existsSync(DATA_DIR)) {
    const files = fs.readdirSync(DATA_DIR);
    totalDataFiles = files.length;
    files.forEach(f => {
      try {
        const stat = fs.statSync(path.join(DATA_DIR, f));
        dataSizeBytes += stat.size;
      } catch (_) {}
    });
  }

  if (fs.existsSync(INTERACTIVE_DIR)) {
    totalInteractiveComponents = fs.readdirSync(INTERACTIVE_DIR).filter(f => f.endsWith('.tsx')).length;
  }

  // Count standalone interactive HTML studios in public/
  try {
    const pubDir = path.join(ROOT_DIR, 'public');
    if (fs.existsSync(pubDir)) {
      const pubFiles = fs.readdirSync(pubDir);
      totalStandaloneStudios = pubFiles.filter(f => f.endsWith('.html') && (f.includes('studio') || f.includes('interactive') || f.includes('blanks') || f.includes('mcq') || f.includes('solutions') || f.includes('worksheet') || f.includes('lab') || f.includes('quiz'))).length;
    }
  } catch (_) {}

  return {
    totalDataFiles,
    totalInteractiveComponents,
    totalStandaloneStudios,
    dataSizeMb: (dataSizeBytes / (1024 * 1024)).toFixed(2)
  };
}

function parseRoadmap() {
  if (!fs.existsSync(ROADMAP_FILE)) {
    return null;
  }

  const content = fs.readFileSync(ROADMAP_FILE, 'utf8');
  const lines = content.split('\n');

  let currentMilestone = 'Phase 3 — Bilingual Question Banks & In-App Practice';
  let immediateNext = 'Expand Chapter-Specific Question Banks with bilingual MCQs & numerical studios';
  const completedItems = [];
  const pendingItems = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.includes('**Current Milestone**:')) {
      currentMilestone = line.split('**Current Milestone**:')[1].trim();
    }
    if (line.includes('👉 **') || line.includes('👉 Step')) {
      immediateNext = line.replace(/👉/g, '').replace(/\*\*/g, '').trim();
    }
    if (line.startsWith('- `[x]`')) {
      completedItems.push(line.replace('- `[x]`', '').replace(/`/g, '').trim());
    } else if (line.startsWith('- `[ ]`')) {
      pendingItems.push(line.replace('- `[ ]`', '').replace(/`/g, '').trim());
    }
  }

  return {
    currentMilestone,
    immediateNext,
    completedCount: completedItems.length,
    pendingCount: pendingItems.length,
    completedItems,
    pendingItems
  };
}

function checkPort(port, host = 'localhost', timeout = 400) {
  return new Promise((resolve) => {
    const req = http.request({ host, port, path: '/', method: 'GET', timeout }, (res) => {
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
    req.end();
  });
}

async function displayStatus() {
  printHeader();

  const metrics = analyzeDataMetrics();
  const roadmap = parseRoadmap();

  console.log(`${C.gold}${C.bold}📊 PLATFORM REPOSITORY METRICS:${C.reset}`);
  console.log(`  ├─ 📚 Classes Supported:        ${C.green}Class 1 to Class 12 + NIOS Senior Secondary${C.reset}`);
  console.log(`  ├─ 💾 Curriculum Data Files:    ${C.cyan}${metrics.totalDataFiles} files (${metrics.dataSizeMb} MB)${C.reset}`);
  console.log(`  ├─ 🧪 Interactive TSX Suites:   ${C.cyan}${metrics.totalInteractiveComponents} active React suites${C.reset}`);
  console.log(`  └─ 🔬 Standalone HTML Studios:  ${C.cyan}${metrics.totalStandaloneStudios} labs & numerical studios${C.reset}\n`);

  if (roadmap) {
    console.log(`${C.sky}${C.bold}📌 ACTIVE ROADMAP & SPRINT MILESTONES (docs/roadmap/task.md):${C.reset}`);
    console.log(`  ├─ 🎯 Current Active Milestone: ${C.yellow}${C.bold}${roadmap.currentMilestone}${C.reset}`);
    console.log(`  ├─ ✅ Completed Deliverables:   ${C.green}${roadmap.completedCount} items completed${C.reset}`);
    console.log(`  └─ ⏳ In-Progress / Backlog:     ${C.yellow}${roadmap.pendingCount} pending items${C.reset}\n`);

    if (roadmap.pendingItems.length > 0) {
      console.log(`${C.yellow}${C.bold}📋 UPCOMING HIGH-PRIORITY TASKS:${C.reset}`);
      roadmap.pendingItems.slice(0, 5).forEach((item, idx) => {
        console.log(`  ${idx + 1}. [ ] ${item}`);
      });
      console.log('');
    }
  }

  // Check dev server
  const isDevRunning = await checkPort(3002);

  console.log(`${C.blue}${C.bold}🌐 PLATFORM ACCESS ENDPOINTS:${C.reset}`);
  console.log(`  ├─ 🚀 Production (Firebase):    ${C.emerald}https://nextsem-ncert-2403.web.app/${C.reset}`);
  console.log(`  ├─ 🌐 Production (Vercel):      ${C.emerald}https://ncert-alpha.vercel.app/${C.reset}`);
  console.log(`  ├─ 💻 Local Dev Server (3002):  ${isDevRunning ? `${C.green}http://localhost:3002/ (LIVE 🟢)` : `${C.dim}http://localhost:3002/ (Stopped ⚪ - run 'npm run dev')${C.reset}`}`);
  console.log(`  └─ 📱 PC Network IP Access:     ${isDevRunning ? `${C.green}http://192.168.29.170:3002/ (LIVE 🟢)` : `${C.dim}http://192.168.29.170:3002/${C.reset}`}\n`);

  console.log(`${C.magenta}${C.bold}🛡️ PERMANENT PROJECT RULES REMINDER:${C.reset}`);
  console.log(`  • Bilingual Standard: All questions/exercises must provide English + Hindi (द्विभाषी).`);
  console.log(`  • In-App Placement: Embed MCQs & notes directly under in-app chapter PDF (PdfReaderView).`);
  console.log(`  • Clean Front Page: Keep Home dashboard 100% clean (Books & Solutions gateways only).`);
  console.log(`  • AdMob Non-Blocking: No blocking interstitials on study material downloads.`);
  console.log(`  • Non-Interactive Deploy: Deploy via 'npm run deploy' without interactive prompts.\n`);

  console.log(`${C.emerald}${C.bold}════════════════════════════════════════════════════════════════════════════════${C.reset}`);
  console.log(`${C.gold}${C.bold}👉 IMMEDIATE NEXT ACTION (AUTO-SUGGESTION):${C.reset}`);
  console.log(`   ${roadmap ? roadmap.immediateNext : 'Implement next chapter question bank & verification'}`);
  console.log(`${C.emerald}${C.bold}════════════════════════════════════════════════════════════════════════════════${C.reset}\n`);
}

displayStatus().catch((err) => {
  console.error('Error generating status report:', err);
});
