#!/usr/bin/env node
/**
 * ═════════════════════════════════════════════════════════════════════════════
 * 👁️ LIVE FILE WATCHER & CONTINUOUS MULTI-APP DEPLOYER
 * Author: Er. Manoj Kumar
 *
 * Watches workspace source files. When changes are saved, automatically
 * rebuilds and synchronizes across all apps and platforms.
 * ═════════════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('👁️ StudyGuide Continuous Multi-App Deployer is watching src/ and public/ for changes...');
console.log('   Whenever you save a file, it will automatically build & deploy to all apps!\n');

let debounceTimer = null;
const DEBOUNCE_MS = 10000; // 10-second debounce to let consecutive edits settle

function triggerSync() {
  console.log('\n⚡ Changes detected! Running universal multi-app deployment...');
  try {
    execSync('node scripts/deploy_all.mjs', { stdio: 'inherit', cwd: process.cwd() });
    console.log('\n👁️ Still watching for next changes...\n');
  } catch (err) {
    console.error('❌ Deployment error during auto-sync:', err.message);
  }
}

function handleChange(eventType, filename) {
  if (!filename) return;
  // Ignore git, dist, node_modules, temp files
  if (
    filename.startsWith('.git') ||
    filename.startsWith('dist') ||
    filename.startsWith('node_modules') ||
    filename.startsWith('pdf') ||
    filename.endsWith('.tmp') ||
    filename.endsWith('version.json') ||
    filename.endsWith('sw.js')
  ) {
    return;
  }

  console.log(`[Watch] File modified: ${filename}`);
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(triggerSync, DEBOUNCE_MS);
}

const watchDirs = [
  path.join(process.cwd(), 'src'),
  path.join(process.cwd(), 'public')
];

for (const dir of watchDirs) {
  if (fs.existsSync(dir)) {
    fs.watch(dir, { recursive: true }, handleChange);
  }
}

