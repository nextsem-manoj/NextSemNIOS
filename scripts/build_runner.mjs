import { build } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'os';
import path from 'path';
import fs from 'fs';

async function runBuild() {
  console.log('Building StudyGuide production client...');
  const tmpDist = path.join(os.tmpdir(), 'ncert-dist');
  await build({
    configFile: false,
    root: process.cwd(),
    cacheDir: path.join(os.tmpdir(), 'ncert-vite-cache'),
    plugins: [react()],
    build: {
      outDir: tmpDist,
      emptyOutDir: true,
      chunkSizeWarningLimit: 3000
    }
  });

  const targetDist = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(targetDist)) {
    fs.mkdirSync(targetDist, { recursive: true });
  }
  fs.cpSync(tmpDist, targetDist, { recursive: true });

  // Guarantee all latest public assets and HTML files are synchronized to dist (excluding heavy raw PDFs)
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, targetDist, {
      recursive: true,
      filter: (src) => {
        const rel = path.relative(publicDir, src);
        return !rel.startsWith('pdf') && !rel.startsWith('pdf\\');
      }
    });
  }

  // ═════════════════════════════════════════════════════════════════════════
  // 🚀 AUTOMATED VERSIONING & MULTI-APP CACHE BUSTING ENGINE
  // ═════════════════════════════════════════════════════════════════════════
  const buildTime = Date.now();
  const buildIso = new Date().toISOString();
  const buildId = `sg-${buildTime}`;
  const versionInfo = {
    version: '1.0.5',
    buildId,
    buildTime,
    timestamp: buildIso,
    appName: 'StudyGuide by Nextsem'
  };

  const versionJsonContent = JSON.stringify(versionInfo, null, 2);
  fs.writeFileSync(path.join(targetDist, 'version.json'), versionJsonContent, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'version.json'), versionJsonContent, 'utf8');

  // Inject fresh BUILD_VERSION into public/sw.js and dist/sw.js
  const swTemplatePath = path.join(publicDir, 'sw.js');
  if (fs.existsSync(swTemplatePath)) {
    let swContent = fs.readFileSync(swTemplatePath, 'utf8');
    if (swContent.includes('BUILD_VERSION =')) {
      swContent = swContent.replace(
        /const BUILD_VERSION = ['"][^'"]*['"];?/,
        `const BUILD_VERSION = '${buildId}';`
      );
    } else {
      swContent = `// Auto-generated build stamp for cache busting\nconst BUILD_VERSION = '${buildId}';\n` + swContent;
    }
    fs.writeFileSync(path.join(publicDir, 'sw.js'), swContent, 'utf8');
    fs.writeFileSync(path.join(targetDist, 'sw.js'), swContent, 'utf8');
  }

  console.log(`✅ Version stamped: ${buildId} (${buildIso})`);
  console.log('✅ StudyGuide Client build verified & synchronized to dist/ successfully!');
}

runBuild().catch((err) => {
  console.error(err);
  process.exit(1);
});
