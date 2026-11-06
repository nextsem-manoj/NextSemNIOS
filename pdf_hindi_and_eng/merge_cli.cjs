#!/usr/bin/env node

/**
 * Nextsem Bilingual PDF Chapter Merger CLI
 * Merges English and Hindi medium NCERT PDFs into a single unified bilingual PDF.
 * 
 * Usage:
 *   node merge_cli.cjs <path_to_english.pdf> <path_to_hindi.pdf> [output.pdf] [strategy]
 * 
 * Strategies:
 *   - alternating  (Default: EN 1, HI 1, EN 2, HI 2...)
 *   - side-by-side (2-up sheet: Left EN, Right HI)
 *   - en-first     (All EN pages then all HI pages)
 *   - hi-first     (All HI pages then all EN pages)
 */

const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log(`
==============================================================
   StudyGuide by Nextsem • Bilingual Chapter PDF Merger CLI
==============================================================
Usage:
  node merge_cli.cjs <english_pdf> <hindi_pdf> [output_pdf] [strategy]

Options for strategy:
  - alternating   : Interleave page-by-page (EN 1, HI 1, EN 2, HI 2...) [DEFAULT]
  - side-by-side  : 2-Up widescreen landscape sheets (Left EN | Right HI)
  - en-first      : Entire English chapter first, then Hindi chapter
  - hi-first      : Entire Hindi chapter first, then English chapter

Example:
  node merge_cli.cjs "Class 10 Science Ch1 EN.pdf" "Class 10 Vigyan Ch1 HI.pdf" "Ch1_Bilingual.pdf" alternating
==============================================================
    `);
    
    // Check if default files exist in parent public/pdf for demonstration
    const defaultEn = path.join(__dirname, '../public/pdf/Class 10/Science 10th/jesc101.pdf');
    const defaultHi = path.join(__dirname, '../public/pdf/Class 10/Vigyan 10th/jhsc101.pdf');
    
    if (fs.existsSync(defaultEn) && fs.existsSync(defaultHi)) {
      console.log('⚡ Running automatic demo with Class 10 Science Ch 1 (jesc101 + jhsc101)...');
      await executeMerge(
        defaultEn,
        defaultHi,
        path.join(__dirname, 'Class10_Science_Ch1_Bilingual_Merged.pdf'),
        'alternating'
      );
    }
    return;
  }

  const enPath = path.resolve(args[0]);
  const hiPath = path.resolve(args[1]);
  const outPath = args[2] ? path.resolve(args[2]) : path.join(__dirname, 'Bilingual_Chapter_Merged.pdf');
  const strategy = args[3] || 'alternating';

  await executeMerge(enPath, hiPath, outPath, strategy);
}

async function executeMerge(enPath, hiPath, outPath, strategy) {
  if (!fs.existsSync(enPath)) {
    console.error(`[Error] English PDF not found: ${enPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(hiPath)) {
    console.error(`[Error] Hindi PDF not found: ${hiPath}`);
    process.exit(1);
  }

  console.log(`[1/4] Reading English PDF: ${path.basename(enPath)}`);
  const enBytes = fs.readFileSync(enPath);
  console.log(`[2/4] Reading Hindi PDF: ${path.basename(hiPath)}`);
  const hiBytes = fs.readFileSync(hiPath);

  const docEn = await PDFDocument.load(enBytes);
  const docHi = await PDFDocument.load(hiBytes);

  const enCount = docEn.getPageCount();
  const hiCount = docHi.getPageCount();
  console.log(`[3/4] English Pages: ${enCount} | Hindi Pages: ${hiCount} | Strategy: ${strategy}`);

  const mergedDoc = await PDFDocument.create();
  const font = await mergedDoc.embedFont(StandardFonts.HelveticaBold);

  if (strategy === 'alternating') {
    const maxPages = Math.max(enCount, hiCount);
    for (let i = 0; i < maxPages; i++) {
      if (i < enCount) {
        const [copiedEn] = await mergedDoc.copyPages(docEn, [i]);
        const { width, height } = copiedEn.getSize();
        copiedEn.drawRectangle({
          x: 0,
          y: height - 18,
          width: width,
          height: 18,
          color: rgb(0.04, 0.08, 0.18),
          opacity: 0.9
        });
        copiedEn.drawText(`NCERT Bilingual Edition • English Medium (Page ${i + 1}/${enCount})`, {
          x: 14,
          y: height - 13,
          size: 8,
          font: font,
          color: rgb(0.22, 0.82, 0.99)
        });
        mergedDoc.addPage(copiedEn);
      }
      if (i < hiCount) {
        const [copiedHi] = await mergedDoc.copyPages(docHi, [i]);
        const { width, height } = copiedHi.getSize();
        copiedHi.drawRectangle({
          x: 0,
          y: height - 18,
          width: width,
          height: 18,
          color: rgb(0.18, 0.08, 0.02),
          opacity: 0.9
        });
        copiedHi.drawText(`NCERT Bilingual Edition • Hindi Medium (Page ${i + 1}/${hiCount})`, {
          x: 14,
          y: height - 13,
          size: 8,
          font: font,
          color: rgb(0.99, 0.72, 0.22)
        });
        mergedDoc.addPage(copiedHi);
      }
    }
  } else if (strategy === 'side-by-side') {
    const maxPages = Math.max(enCount, hiCount);
    for (let i = 0; i < maxPages; i++) {
      let widthEn = 595.28, heightEn = 841.89;
      let widthHi = 595.28, heightHi = 841.89;

      let embeddedEn = null;
      if (i < enCount) {
        const pageEn = docEn.getPage(i);
        const size = pageEn.getSize();
        widthEn = size.width;
        heightEn = size.height;
        embeddedEn = await mergedDoc.embedPage(pageEn);
      }

      let embeddedHi = null;
      if (i < hiCount) {
        const pageHi = docHi.getPage(i);
        const size = pageHi.getSize();
        widthHi = size.width;
        heightHi = size.height;
        embeddedHi = await mergedDoc.embedPage(pageHi);
      }

      const sheetHeight = Math.max(heightEn, heightHi);
      const sheetWidth = widthEn + widthHi;
      const newPage = mergedDoc.addPage([sheetWidth, sheetHeight]);

      if (embeddedEn) {
        newPage.drawPage(embeddedEn, {
          x: 0,
          y: (sheetHeight - heightEn) / 2,
          width: widthEn,
          height: heightEn
        });
      }
      if (embeddedHi) {
        newPage.drawPage(embeddedHi, {
          x: widthEn,
          y: (sheetHeight - heightHi) / 2,
          width: widthHi,
          height: heightHi
        });
      }

      newPage.drawRectangle({
        x: 0,
        y: sheetHeight - 20,
        width: sheetWidth,
        height: 20,
        color: rgb(0.04, 0.06, 0.12),
        opacity: 0.95
      });
      newPage.drawText(`📘 English Medium (Page ${i + 1}/${enCount})`, {
        x: 20,
        y: sheetHeight - 14,
        size: 9,
        font: font,
        color: rgb(0.22, 0.82, 0.99)
      });
      newPage.drawText(`📙 हिंदी माध्यम (पृष्ठ ${i + 1}/${hiCount})`, {
        x: widthEn + 20,
        y: sheetHeight - 14,
        size: 9,
        font: font,
        color: rgb(0.99, 0.72, 0.22)
      });
    }
  } else if (strategy === 'en-first') {
    const enIndices = Array.from({ length: enCount }, (_, i) => i);
    const copiedEn = await mergedDoc.copyPages(docEn, enIndices);
    copiedEn.forEach((p) => mergedDoc.addPage(p));

    const hiIndices = Array.from({ length: hiCount }, (_, i) => i);
    const copiedHi = await mergedDoc.copyPages(docHi, hiIndices);
    copiedHi.forEach((p) => mergedDoc.addPage(p));
  } else if (strategy === 'hi-first') {
    const hiIndices = Array.from({ length: hiCount }, (_, i) => i);
    const copiedHi = await mergedDoc.copyPages(docHi, hiIndices);
    copiedHi.forEach((p) => mergedDoc.addPage(p));

    const enIndices = Array.from({ length: enCount }, (_, i) => i);
    const copiedEn = await mergedDoc.copyPages(docEn, enIndices);
    copiedEn.forEach((p) => mergedDoc.addPage(p));
  }

  console.log('[4/4] Writing output merged PDF...');
  const mergedBytes = await mergedDoc.save();
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, mergedBytes);

  console.log(`
==============================================================
   SUCCESSFULLY MERGED BILINGUAL CHAPTER PDF!
==============================================================
- Output File : ${outPath}
- Total Pages : ${mergedDoc.getPageCount()}
- File Size   : ${(mergedBytes.length / (1024 * 1024)).toFixed(2)} MB
- Strategy    : ${strategy}
==============================================================
  `);
}

main().catch((err) => {
  console.error('[Fatal Error]', err);
  process.exit(1);
});
