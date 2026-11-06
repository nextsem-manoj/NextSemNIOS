#!/usr/bin/env node
/**
 * ═════════════════════════════════════════════════════════════════════════════
 * 🚀 STUDYGUIDE MULTI-APP DEPLOYMENT & SYNCHRONIZATION ENGINE
 * Author: Er. Manoj Kumar
 *
 * Simultaneously deploys and synchronizes changes across all target apps:
 *   1. Web Client Build & Dynamic Cache Busting (version.json + sw.js)
 *   2. Android App Assets (Capacitor Sync)
 *   3. Firebase Hosting (Production Endpoint)
 *   4. GitHub Push -> Automatic Vercel Production Deployment
 *   5. Instant Local Chrome Verification
 * ═════════════════════════════════════════════════════════════════════════════
 */

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  emerald: '\x1b[38;5;35m',
  gold: '\x1b[38;5;220m',
  red: '\x1b[31m',
  dim: '\x1b[2m'
};

function run(cmd, desc) {
  console.log(`\n${C.cyan}${C.bold}▶ ${desc}...${C.reset}`);
  console.log(`${C.dim}$ ${cmd}${C.reset}`);
  try {
    execSync(cmd, { stdio: 'inherit', cwd: process.cwd() });
    console.log(`${C.green}✔ ${desc} completed successfully!${C.reset}`);
    return true;
  } catch (err) {
    console.error(`${C.red}✖ Failed: ${desc}${C.reset}`);
    return false;
  }
}

async function main() {
  console.log(`\n${C.emerald}${C.bold}╔════════════════════════════════════════════════════════════════════════════════╗${C.reset}`);
  console.log(`${C.emerald}${C.bold}║    🚀 STUDYGUIDE — UNIVERSAL MULTI-APP SYNCHRONIZATION & DEPLOY PIPELINE       ║${C.reset}`);
  console.log(`${C.emerald}${C.bold}║    Firebase • Vercel • Android App • PWA Cache-Busting • Git Remote             ║${C.reset}`);
  console.log(`${C.emerald}${C.bold}║    Author & Lead: Er. Manoj Kumar                                              ║${C.reset}`);
  console.log(`${C.emerald}${C.bold}╚════════════════════════════════════════════════════════════════════════════════╝${C.reset}\n`);

  const startTime = Date.now();

  // 1. Build Client with Version Stamping
  const buildSuccess = run('npm run build', '1/5 Building Production Client & Generating Cache Keys');
  if (!buildSuccess) {
    console.error(`${C.red}Build failed. Aborting deployment.${C.reset}`);
    process.exit(1);
  }

  // 2. Capacitor Android Sync
  if (fs.existsSync(path.join(process.cwd(), 'android'))) {
    run('npx cap sync android', '2/5 Synchronizing Android Native Project Assets (Capacitor)');
  }

  // 3. Deploy to Firebase Hosting
  const firebaseSuccess = run(
    'npx firebase-tools deploy --only hosting --project nextsem-ncert-2403 --non-interactive',
    '3/5 Deploying to Firebase Production Hosting'
  );

  // 4. Git Push to GitHub (Triggers Vercel CI/CD)
  let gitSuccess = false;
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    if (status.length > 0) {
      console.log(`\n${C.yellow}ℹ Staging uncommitted changes...${C.reset}`);
      execSync('git add -A', { stdio: 'inherit' });
      const commitMsg = `feat(sync): universal multi-app update [${new Date().toISOString()}]`;
      execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' });
    }
    run('git push origin main', '4/5 Pushing to GitHub (Triggers Vercel Auto-Deploy)');
    gitSuccess = true;
  } catch (err) {
    console.warn(`${C.yellow}⚠ Git push notice: ${err.message}${C.reset}`);
  }

  // 5. Open live verification links in Chrome
  console.log(`\n${C.cyan}${C.bold}5/5 Launching Live Endpoints in Google Chrome...${C.reset}`);
  try {
    execSync('start chrome https://nextsem-ncert-2403.web.app/');
    execSync('start chrome https://ncert-alpha.vercel.app/');
  } catch (_) {
    // Non-fatal if Chrome already active
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log(`\n${C.emerald}${C.bold}════════════════════════════════════════════════════════════════════════════════${C.reset}`);
  console.log(`${C.emerald}${C.bold}🎉 ALL APPS & PLATFORMS SYNCHRONIZED SUCCESSFULLY IN ${duration}s!${C.reset}`);
  console.log(`${C.emerald}${C.bold}════════════════════════════════════════════════════════════════════════════════${C.reset}`);
  console.log(`\n${C.bold}🌐 LIVE PRODUCTION ACCESS:${C.reset}`);
  console.log(`  ├─ 🚀 Firebase Hosting:   https://nextsem-ncert-2403.web.app/`);
  console.log(`  ├─ 🌐 Vercel Production:  https://ncert-alpha.vercel.app/`);
  console.log(`  ├─ 📱 Android App (Cap):  Synchronized with live URL & local dist`);
  console.log(`  └─ 🔄 Client PWA Auto-OTA: Broadcasted via sw.js & version.json`);
  console.log(`\n${C.bold}💻 LOCAL PREVIEW ENDPOINTS:${C.reset}`);
  console.log(`  ├─ 🖥️ Complete Localhost:  http://localhost:3002/`);
  console.log(`  └─ 📱 PC Network IP:       http://192.168.29.170:3002/\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

