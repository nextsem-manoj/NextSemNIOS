const fs = require('fs');
const path = require('path');

const artDir = 'C:\\Users\\manojkmr2403\\.gemini\\antigravity-ide\\brain\\30a65b27-3c24-43cf-96ae-d684a5fa1232';
const logoSrc = path.join(artDir, 'study_guide_single_line_1788514685899.jpg');

const docsLogoDir = path.join(__dirname, '..', 'docs', 'logo');
const pubLogoDir = path.join(__dirname, '..', 'public', 'logo');
const pubDir = path.join(__dirname, '..', 'public');

[docsLogoDir, pubLogoDir, pubDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, path.join(docsLogoDir, 'study_guide_single_line_1788514685899.jpg'));
  fs.copyFileSync(logoSrc, path.join(docsLogoDir, 'final-study-guide-logo.jpg'));
  fs.copyFileSync(logoSrc, path.join(pubDir, 'study-guide-logo.jpg'));
  fs.copyFileSync(logoSrc, path.join(pubDir, 'study-guide-by-nextsem-logo.jpg'));
  fs.copyFileSync(logoSrc, path.join(pubDir, 'app-logo.png'));
  fs.copyFileSync(logoSrc, path.join(pubLogoDir, 'study-guide-final-logo.jpg'));
  console.log('Successfully saved final logo to docs/logo/, public/app-logo.png, and public/!');
} else {
  console.error('Source logo file not found:', logoSrc);
}
