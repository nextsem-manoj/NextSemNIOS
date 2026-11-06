import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 Created directory: ${path.relative(ROOT, dirPath)}`);
  }
}

function safeMove(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️ Source not found: ${src}`);
    return;
  }
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  fs.unlinkSync(src);
  console.log(`🚚 Moved: ${path.relative(ROOT, src)} -> ${path.relative(ROOT, dest)}`);
}

function safeCopy(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️ Source not found: ${src}`);
    return;
  }
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  console.log(`📋 Copied: ${path.relative(ROOT, src)} -> ${path.relative(ROOT, dest)}`);
}

function safeRemove(target) {
  if (!fs.existsSync(target)) return;
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`🗑️ Removed directory: ${path.relative(ROOT, target)}`);
  } else {
    fs.unlinkSync(target);
    console.log(`🗑️ Removed file: ${path.relative(ROOT, target)}`);
  }
}

function moveDirContents(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  ensureDir(destDir);
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      moveDirContents(srcPath, destPath);
    } else {
      safeMove(srcPath, destPath);
    }
  }
  safeRemove(srcDir);
}

console.log('🚀 Starting StudyGuide Repository Organization...');

// 1. Move scratch scripts in root to scratch/
const rootEntries = fs.readdirSync(ROOT);
for (const file of rootEntries) {
  if (file.startsWith('scratch_') && file.endsWith('.mjs')) {
    safeMove(path.join(ROOT, file), path.join(ROOT, 'scratch', file));
  }
}

// 2. Move text dumps in root to scratch/extracted_dumps/
const DUMPS_DIR = path.join(ROOT, 'scratch', 'extracted_dumps');
ensureDir(DUMPS_DIR);
const dumpPatterns = [
  '_positions_dump.txt',
  'positions_dump.txt',
  '_text.txt',
  '_text_all.txt',
  'extracted_pdf_text.txt',
  'fepr103_extracted.txt',
  'iemh105_extracted.txt',
  'navyug_paper_extracted.txt',
  'scratch_khhs104_text.txt',
  'scratch_lhhs202_text.txt',
  'scratch_toc.txt',
  'pdf_text.txt',
  'pdf_text_all.txt'
];

for (const file of rootEntries) {
  if (file.endsWith('.txt')) {
    const isDump = dumpPatterns.some(p => file === p || file.endsWith(p));
    if (isDump) {
      safeMove(path.join(ROOT, file), path.join(DUMPS_DIR, file));
    }
  }
}

// Also move text dumps from public/ to scratch/extracted_dumps/
['class2_ch6_text.txt', 'class3_ch6_text.txt'].forEach(f => {
  const p = path.join(ROOT, 'public', f);
  if (fs.existsSync(p)) safeMove(p, path.join(DUMPS_DIR, f));
});

// 3. Move test assets in public/ to scratch/test_assets/
const TEST_ASSETS_DIR = path.join(ROOT, 'scratch', 'test_assets');
ensureDir(TEST_ASSETS_DIR);
['upload-test-1.png', 'upload-test-2.png', 'upload-test-3.png', 'annotated_page22_answers.png'].forEach(f => {
  const p = path.join(ROOT, 'public', f);
  if (fs.existsSync(p)) safeMove(p, path.join(TEST_ASSETS_DIR, f));
});

// 4. Remove duplicate HTML, outdated JS/CSS from root (already in public/)
for (const file of rootEntries) {
  if (file.endsWith('.html') && file !== 'index.html') {
    const pubFile = path.join(ROOT, 'public', file);
    if (fs.existsSync(pubFile)) {
      safeRemove(path.join(ROOT, file));
    }
  }
}

// Outdated loose files in root
['questions.js', 'style.css', 'app.js', 'image.png'].forEach(f => {
  const rootP = path.join(ROOT, f);
  const pubP = path.join(ROOT, 'public', f);
  if (fs.existsSync(rootP) && fs.existsSync(pubP)) {
    safeRemove(rootP);
  }
});

// Remove unused Firebase boilerplate index.html inside public/
const pubIndex = path.join(ROOT, 'public', 'index.html');
if (fs.existsSync(pubIndex)) {
  const content = fs.readFileSync(pubIndex, 'utf8');
  if (content.includes('Welcome to Firebase Hosting')) {
    safeRemove(pubIndex);
  }
}

// 5. Organize loose PDFs in root
const ARCHIVE_DIR = path.join(ROOT, 'scratch', 'archive');
ensureDir(ARCHIVE_DIR);

// Class 12 Biology
if (fs.existsSync(path.join(ROOT, 'lebo108.pdf'))) {
  safeMove(
    path.join(ROOT, 'lebo108.pdf'),
    path.join(ROOT, 'public', 'pdf', 'Class 12', '12th Biology', 'lebo108.pdf')
  );
}

// Class 7 Science / Curiosity
if (fs.existsSync(path.join(ROOT, 'downloaded_drive_file.pdf'))) {
  safeMove(
    path.join(ROOT, 'downloaded_drive_file.pdf'),
    path.join(ROOT, 'public', 'pdf', 'Class 07', 'Curiosity 7th NEW NCERT', 'curiosity_ch1_seeds_a_lakh_varieties.pdf')
  );
}

// Class 2 Joyful Mathematics (bejm106.pdf) in public/ root
if (fs.existsSync(path.join(ROOT, 'public', 'bejm106.pdf'))) {
  safeMove(
    path.join(ROOT, 'public', 'bejm106.pdf'),
    path.join(ROOT, 'public', 'pdf', 'Class 02', 'Joyful Mathematics 2nd', 'bejm106.pdf')
  );
}

// NIOS Chemistry 313
const NIOS_CHEM_DIR = path.join(ROOT, 'public', 'pdf', 'NIOS', 'Senior Secondary', 'Chemistry (313)');
ensureDir(NIOS_CHEM_DIR);
if (fs.existsSync(path.join(ROOT, 'nios_313_l26.pdf'))) {
  safeMove(path.join(ROOT, 'nios_313_l26.pdf'), path.join(NIOS_CHEM_DIR, 'nios_313_l26.pdf'));
}
if (fs.existsSync(path.join(ROOT, 'public', 'nios-qp'))) {
  safeRemove(path.join(ROOT, 'public', 'nios-qp'));
}

// Redundant/archive PDFs in root
if (fs.existsSync(path.join(ROOT, '11th history hindi med.zip'))) {
  safeMove(path.join(ROOT, '11th history hindi med.zip'), path.join(ARCHIVE_DIR, '11th history hindi med.zip'));
}
if (fs.existsSync(path.join(ROOT, '11th_badalti paramparayein_khhs104.pdf'))) {
  safeRemove(path.join(ROOT, '11th_badalti paramparayein_khhs104.pdf'));
}
if (fs.existsSync(path.join(ROOT, 'lhhs201.pdf'))) {
  safeRemove(path.join(ROOT, 'lhhs201.pdf'));
}

// 6. Organize root folders
// Class 3 Maths Test -> public/assessments/Class-03/Mathematics/
const CLASS_3_MATHS_DIR = path.join(ROOT, 'Class 3 Maths Test');
if (fs.existsSync(CLASS_3_MATHS_DIR)) {
  const destAssess3 = path.join(ROOT, 'public', 'assessments', 'Class-03', 'Mathematics');
  moveDirContents(CLASS_3_MATHS_DIR, destAssess3);
}

// English Grammar -> public/assessments/English-Grammar/Tenses & public/pdf/Eng grammar/Source-Worksheets/
const ENG_GRAMMAR_DIR = path.join(ROOT, 'English Grammar');
if (fs.existsSync(ENG_GRAMMAR_DIR)) {
  const srcWorksheets = path.join(ROOT, 'public', 'pdf', 'Eng grammar', 'Source-Worksheets');
  ensureDir(srcWorksheets);
  const engEntries = fs.readdirSync(ENG_GRAMMAR_DIR);
  for (const entry of engEntries) {
    const srcPath = path.join(ENG_GRAMMAR_DIR, entry);
    if (entry.startsWith('t') || entry.startsWith('T') || entry.includes('iesc106')) {
      safeMove(srcPath, path.join(srcWorksheets, entry));
    } else {
      safeMove(srcPath, path.join(ROOT, 'public', 'assessments', 'English-Grammar', 'Tenses', entry));
    }
  }
  safeRemove(ENG_GRAMMAR_DIR);
}

// Ts Grewal notes -> public/pdf/Class 11/11th Financial Accounting-I/TS-Grewal-Solutions/
const TS_GREWAL_DIR = path.join(ROOT, 'Ts Grewal notes from httpsgoncert.comother-booksTS-GrewalClass-11');
if (fs.existsSync(TS_GREWAL_DIR)) {
  const destTs = path.join(ROOT, 'public', 'pdf', 'Class 11', '11th Financial Accounting-I', 'TS-Grewal-Solutions');
  moveDirContents(TS_GREWAL_DIR, destTs);
}

// Root accountancy folder (already exists in public/accountancy)
const ROOT_ACC_DIR = path.join(ROOT, 'accountancy');
if (fs.existsSync(ROOT_ACC_DIR)) {
  safeRemove(ROOT_ACC_DIR);
}

// NIOS QP
const NIOS_QP_DIR = path.join(ROOT, 'NIOS QP');
if (fs.existsSync(NIOS_QP_DIR)) {
  if (fs.existsSync(path.join(NIOS_QP_DIR, 'NIOS_313_Chemistry_Guided_Question_Paper.html'))) {
    safeMove(
      path.join(NIOS_QP_DIR, 'NIOS_313_Chemistry_Guided_Question_Paper.html'),
      path.join(ROOT, 'public', 'NIOS_313_Chemistry_Guided_Question_Paper.html')
    );
  }
  if (fs.existsSync(path.join(NIOS_QP_DIR, 'NIOS_313_Chemistry_Guided_Question_Paper.md'))) {
    safeMove(
      path.join(NIOS_QP_DIR, 'NIOS_313_Chemistry_Guided_Question_Paper.md'),
      path.join(ROOT, 'docs', 'NIOS_313_Chemistry_Guided_Question_Paper.md')
    );
  }
  if (fs.existsSync(path.join(NIOS_QP_DIR, 'sqp313echem12.pdf'))) {
    safeMove(
      path.join(NIOS_QP_DIR, 'sqp313echem12.pdf'),
      path.join(NIOS_CHEM_DIR, 'sqp313echem12.pdf')
    );
  }
  safeRemove(NIOS_QP_DIR);
}

// navyug_pages -> docs/source_materials/navyug_pages
const NAVYUG_DIR = path.join(ROOT, 'navyug_pages');
if (fs.existsSync(NAVYUG_DIR)) {
  const destNavyug = path.join(ROOT, 'docs', 'source_materials', 'navyug_pages');
  moveDirContents(NAVYUG_DIR, destNavyug);
}

// app ideas images -> docs/app_ideas_images
const APP_IDEAS_DIR = path.join(ROOT, 'app ideas images');
if (fs.existsSync(APP_IDEAS_DIR)) {
  const destAppIdeas = path.join(ROOT, 'docs', 'app_ideas_images');
  moveDirContents(APP_IDEAS_DIR, destAppIdeas);
}

// stitch_import -> scratch/stitch_import
const STITCH_DIR = path.join(ROOT, 'stitch_import');
if (fs.existsSync(STITCH_DIR)) {
  const destStitch = path.join(ROOT, 'scratch', 'stitch_import');
  moveDirContents(STITCH_DIR, destStitch);
}

// 7. Organize Markdown files in root
// Delete typo duplicate
const typoCmd = path.join(ROOT, 'windows commmands.md');
if (fs.existsSync(typoCmd)) safeRemove(typoCmd);

// Move windows command docs to docs/windows_commands/
const WIN_CMD_DOCS_DIR = path.join(ROOT, 'docs', 'windows_commands');
ensureDir(WIN_CMD_DOCS_DIR);
['windows_commands.md', 'WINDOWS_COMMANDS_100.md'].forEach(f => {
  const p = path.join(ROOT, f);
  if (fs.existsSync(p)) safeMove(p, path.join(WIN_CMD_DOCS_DIR, f));
});

console.log('✅ StudyGuide Repository Organization Completed Successfully!');
