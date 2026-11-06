const fs = require('fs');
const path = require('path');

const artDir = 'C:\\Users\\manojkmr2403\\.gemini\\antigravity-ide\\brain\\30a65b27-3c24-43cf-96ae-d684a5fa1232';
const pubDir = path.join(__dirname, '..', 'public');

const img1 = path.join(artDir, 'study_guide_large_logo_1788514657426.jpg');
const img2 = path.join(artDir, 'study_guide_single_line_1788514685899.jpg');

if (fs.existsSync(img1)) {
  fs.copyFileSync(img1, path.join(pubDir, 'study-guide-large-logo.jpg'));
  fs.copyFileSync(img1, path.join(pubDir, 'study-guide-by-nextsem-logo.jpg'));
  console.log('Copied Study Guide Large Logo Option 1');
}

if (fs.existsSync(img2)) {
  fs.copyFileSync(img2, path.join(pubDir, 'study-guide-with-badge.jpg'));
  console.log('Copied Study Guide Large Logo Option 2 (with NCERT & NIOS badge)');
}
