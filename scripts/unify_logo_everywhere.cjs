const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const standardLogoMarkup = `<a href="/" class="nav-brand" style="display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: inherit; flex-shrink: 0;">
          <div style="width: 38px; height: 38px; border-radius: 9px; background: rgba(255, 255, 255, 0.05); border: 1.5px solid rgba(255, 255, 255, 0.15); display: flex; align-items: center; justify-content: center; padding: 3px; flex-shrink: 0; box-shadow: 0 2px 6px rgba(0,0,0,0.12);">
            <img src="/image-20.png" alt="Nextsem Logo" style="height: 28px; width: auto; object-fit: contain;">
          </div>
          <div style="display: flex; flex-direction: column; text-align: left; line-height: 1.15;">
            <span style="font-weight: 900; font-size: 1.12rem; letter-spacing: -0.02em; color: var(--text-main, #f8fafc);">Study Guide</span>
            <span style="color: #4f46e5; font-size: 0.62rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 1px;">NextSem Academy</span>
          </div>
        </a>`;

let modifiedCount = 0;

files.forEach(file => {
  if (file === '404.html' || file === 'index.html' || file.startsWith('stitch-')) return;

  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Update favicon
  content = content.replace(/<link\s+rel="icon"[^>]*>/i, '<link rel="icon" type="image/png" href="/image-20.png">');

  // 2. Replace known brand navbar containers
  // Pattern A: <a href="/" class="nav-brand"...>...</a>
  content = content.replace(/<a\s+href="\/?"\s+class="(?:nav-brand|brand-badge)"[^>]*>[\s\S]*?<\/a>/gi, standardLogoMarkup);

  // Pattern B: custom inline style Nextsem logo boxes like in history-fill-in-the-blanks.html
  content = content.replace(/<a\s+href="\/?"\s+style="display:\s*flex;\s*align-items:\s*center;\s*gap:\s*8px;[^"]*"[^>]*>\s*<div\s+style="width:\s*30px;\s*height:\s*30px;[^"]*">[\s\S]*?<\/div>\s*<span>Nextsem<\/span>\s*<\/a>/gi, standardLogoMarkup);

  // Pattern C: in physics-ch7-numericals-easy-to-difficult.html
  content = content.replace(/<a\s+href="\/?"\s+style="display:\s*flex;\s*align-items:\s*center;\s*gap:\s*8px;[^"]*"[^>]*>\s*<img\s+src="\/image-20\.png"[^>]*>\s*<span>Nextsem<\/span>\s*<\/a>/gi, standardLogoMarkup);

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[UPDATED] ${file}`);
    modifiedCount++;
  } else {
    console.log(`[SKIPPED / ALREADY UP TO DATE] ${file}`);
  }
});

console.log(`\nSuccessfully processed and unified logos in ${modifiedCount} files.`);
