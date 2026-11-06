#!/usr/bin/env node
/**
 * ═════════════════════════════════════════════════════════════════════════════
 * 🌐 NEXTSEM ECOSYSTEM MULTI-APP SYNC & REPOSITORY MANAGER
 * Author: Er. Manoj Kumar
 *
 * Inspects, commits, and pushes changes across all Nextsem apps:
 *   - ncert.nextsem.online (StudyGuide NCERT & NIOS)
 *   - nextsem.online (Nextsem Academy & Flutter Hub)
 *   - CS-Guide (BCA Practical & CS Hub)
 *   - bca (BCA Coding Exercises)
 * ═════════════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  emerald: '\x1b[38;5;35m',
  gold: '\x1b[38;5;220m',
  sky: '\x1b[38;5;39m',
  red: '\x1b[31m',
  dim: '\x1b[2m'
};

const BASE_DIR = path.resolve(__dirname, '..', '..');

const APPS = [
  { id: 'ncert', name: 'StudyGuide NCERT/NIOS', dir: path.join(BASE_DIR, 'ncert.nextsem.online') },
  { id: 'nextsem', name: 'Nextsem.online Hub', dir: path.join(BASE_DIR, 'nextsem.online') },
  { id: 'cs-guide', name: 'CS-Guide BCA Portal', dir: path.join(BASE_DIR, 'CS-Guide') },
  { id: 'bca', name: 'BCA Practicals Hub', dir: path.join(BASE_DIR, 'bca') }
];

function runGit(cmd, cwd) {
  try {
    return execSync(`git ${cmd}`, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch (_) {
    return null;
  }
}

function showStatus() {
  console.log(`\n${C.emerald}${C.bold}╔════════════════════════════════════════════════════════════════════════════════╗${C.reset}`);
  console.log(`${C.emerald}${C.bold}║    🌐 NEXTSEM ECOSYSTEM — MULTI-APP SYNCHRONIZATION STATUS                     ║${C.reset}`);
  console.log(`${C.emerald}${C.bold}║    Author & Lead: Er. Manoj Kumar                                              ║${C.reset}`);
  console.log(`${C.emerald}${C.bold}╚════════════════════════════════════════════════════════════════════════════════╝${C.reset}\n`);

  for (const app of APPS) {
    if (!fs.existsSync(app.dir) || !fs.existsSync(path.join(app.dir, '.git'))) {
      console.log(`${C.red}✖ [${app.name}] Directory not found or not a git repository.${C.reset}`);
      continue;
    }

    const branch = runGit('rev-parse --abbrev-ref HEAD', app.dir) || 'unknown';
    const status = runGit('status --porcelain', app.dir);
    const uncommitted = status ? status.split('\n').filter(Boolean).length : 0;
    const lastCommit = runGit('log -1 --format="%h - %s (%cr)"', app.dir) || 'No commits';

    const upstream = runGit('rev-parse --abbrev-ref --symbolic-full-name @{u}', app.dir);
    let sync = 'synced';
    if (upstream) {
      const ahead = runGit(`rev-list --count ${upstream}..HEAD`, app.dir) || '0';
      const behind = runGit(`rev-list --count HEAD..${upstream}`, app.dir) || '0';
      if (parseInt(ahead, 10) > 0) sync = `${C.yellow}↑ ahead by ${ahead} (needs push)${C.reset}`;
      else if (parseInt(behind, 10) > 0) sync = `${C.cyan}↓ behind by ${behind} (needs pull)${C.reset}`;
      else sync = `${C.green}✔ in sync with remote${C.reset}`;
    }

    console.log(`${C.bold}📁 ${app.name} (${path.basename(app.dir)})${C.reset}`);
    console.log(`   ├─ Branch:      ${C.sky}${branch}${C.reset}`);
    console.log(`   ├─ Git Status:  ${uncommitted > 0 ? `${C.yellow}⚠ ${uncommitted} uncommitted changes${C.reset}` : `${C.green}✔ Clean tree${C.reset}`}`);
    console.log(`   ├─ Remote Sync: ${sync}`);
    console.log(`   └─ Last Commit: ${C.dim}${lastCommit}${C.reset}\n`);
  }
}

function pushAll(commitMessage = 'feat(ecosystem): sync updates across all nextsem apps') {
  console.log(`\n${C.cyan}${C.bold}🚀 COMMITTING AND PUSHING ALL MODIFIED NEXTSEM ECOSYSTEM APPS...${C.reset}\n`);

  for (const app of APPS) {
    if (!fs.existsSync(app.dir) || !fs.existsSync(path.join(app.dir, '.git'))) continue;

    console.log(`\n${C.bold}▶ Processing ${app.name}...${C.reset}`);
    const status = runGit('status --porcelain', app.dir);
    if (status && status.length > 0) {
      console.log(`  ${C.yellow}Staging and committing uncommitted changes...${C.reset}`);
      execSync('git add -A', { cwd: app.dir, stdio: 'inherit' });
      execSync(`git commit -m "${commitMessage}"`, { cwd: app.dir, stdio: 'inherit' });
    }

    try {
      execSync('git push origin HEAD', { cwd: app.dir, stdio: 'inherit' });
      console.log(`  ${C.green}✔ Pushed successfully!${C.reset}`);
    } catch (err) {
      console.warn(`  ${C.yellow}⚠ Push notice: ${err.message}${C.reset}`);
    }
  }
  console.log(`\n${C.emerald}${C.bold}🎉 All ecosystem apps processed and synchronized!${C.reset}\n`);
}

const args = process.argv.slice(2);
if (args.includes('--push')) {
  pushAll();
} else {
  showStatus();
}

