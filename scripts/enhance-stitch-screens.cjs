const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

const stitchHtmlFiles = [
  'stitch-study-matrix.html',
  'stitch-dual-pane-studio.html',
  'stitch-numericals-lab.html',
  'stitch-bilingual-mcq-quiz.html',
  'stitch-accountancy-studio.html',
  'stitch-chapter-explorer.html',
  'stitch-academy-study-matrix.html',
  'stitch-math-permutations-reader.html',
  'stitch-physics-ch6-solutions-viewer.html'
];

function enhanceFile(filename) {
  const filePath = path.join(publicDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`File ${filename} not found, skipping.`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any google usercontent logo with /app-logo.png
  content = content.replace(/src="https:\/\/lh3\.googleusercontent\.com\/aida\/AEtjO1WZSsg[^"]+"/g, 'src="/app-logo.png"');
  content = content.replace(/src="https:\/\/lh3\.googleusercontent\.com\/aida\/[^"]*"/g, (match) => {
    // Keep user avatars if avatar, else if it's the logo replace
    if (match.includes('Logo') || match.includes('logo')) {
      return 'src="/app-logo.png"';
    }
    return match;
  });

  // Ensure title tag has NextSem prefix
  if (!content.includes('<title>')) {
    const titleMatch = filename.replace('.html', '').replace('stitch-', '').replace(/-/g, ' ').toUpperCase();
    content = content.replace('<head>', `<head>\n<title>NextSem Online | ${titleMatch}</title>`);
  }

  // Inject KaTeX support if not already present
  if (!content.includes('katex.min.css')) {
    const katexTags = `
    <!-- KaTeX for high-performance math typesetting -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body);"></script>
    `;
    content = content.replace('</head>', `${katexTags}\n</head>`);
  }

  // Ensure Home link in breadcrumb has href="/"
  content = content.replace(/<span class="text-cyan-link">Home<\/span>/g, '<a href="/" class="text-cyan-link hover:underline">Home</a>');
  content = content.replace(/<span class="text-on-surface-variant">Class 12<\/span>/g, '<a href="/?class=12" class="text-on-surface-variant hover:text-text-primary hover:underline">Class 12</a>');
  content = content.replace(/<span class="text-on-surface-variant">Class 11<\/span>/g, '<a href="/?class=11" class="text-on-surface-variant hover:text-text-primary hover:underline">Class 11</a>');
  content = content.replace(/<span class="text-on-surface-variant">Physics<\/span>/g, '<a href="/?class=12&subject=physics" class="text-on-surface-variant hover:text-text-primary hover:underline">Physics</a>');
  content = content.replace(/<span class="text-on-surface-variant">Mathematics<\/span>/g, '<a href="/?class=11&subject=mathematics" class="text-on-surface-variant hover:text-text-primary hover:underline">Mathematics</a>');
  content = content.replace(/<span class="text-on-surface-variant">Accountancy<\/span>/g, '<a href="/?class=12&subject=accountancy" class="text-on-surface-variant hover:text-text-primary hover:underline">Accountancy</a>');

  // If there is a back button without onclick or href, link to "/"
  content = content.replace(/id="btn-back-hub"/g, 'id="btn-back-hub" onclick="window.location.href=\'/\'"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[Enhanced] ${filename}`);
}

stitchHtmlFiles.forEach(enhanceFile);
console.log('All Stitch screens enhanced successfully!');
