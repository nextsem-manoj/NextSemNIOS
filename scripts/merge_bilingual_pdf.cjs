const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

/**
 * Merge two PDFs (English and Hindi) using specified mode
 * @param {string} enPdfPath - Path to English PDF
 * @param {string} hiPdfPath - Path to Hindi PDF
 * @param {string} outputPath - Path to output merged PDF
 * @param {Object} options - Configuration options
 * @param {'alternating' | 'side-by-side' | 'en-first' | 'hi-first'} options.mode
 * @param {boolean} options.addHeaderStamp
 * @param {string} options.headerTitle
 */
async function mergeBilingualPdfs(enPdfPath, hiPdfPath, outputPath, options = {}) {
  const {
    mode = 'alternating',
    addHeaderStamp = false,
    headerTitle = 'NCERT Bilingual Edition'
  } = options;

  console.log(`[Bilingual Merger] Reading English PDF: ${enPdfPath}`);
  const enBytes = fs.readFileSync(enPdfPath);
  console.log(`[Bilingual Merger] Reading Hindi PDF: ${hiPdfPath}`);
  const hiBytes = fs.readFileSync(hiPdfPath);

  const docEn = await PDFDocument.load(enBytes);
  const docHi = await PDFDocument.load(hiBytes);

  const enCount = docEn.getPageCount();
  const hiCount = docHi.getPageCount();
  console.log(`[Bilingual Merger] EN Pages: ${enCount}, HI Pages: ${hiCount}, Mode: ${mode}`);

  const mergedDoc = await PDFDocument.create();
  const font = addHeaderStamp ? await mergedDoc.embedFont(StandardFonts.HelveticaBold) : null;

  if (mode === 'alternating') {
    const maxPages = Math.max(enCount, hiCount);
    for (let i = 0; i < maxPages; i++) {
      if (i < enCount) {
        const [copiedEn] = await mergedDoc.copyPages(docEn, [i]);
        if (addHeaderStamp && font) {
          const { width, height } = copiedEn.getSize();
          copiedEn.drawRectangle({
            x: 0,
            y: height - 20,
            width: width,
            height: 20,
            color: rgb(0.05, 0.1, 0.22),
            opacity: 0.85
          });
          copiedEn.drawText(`${headerTitle} • English Medium (Page ${i + 1}/${enCount})`, {
            x: 14,
            y: height - 14,
            size: 8.5,
            font: font,
            color: rgb(0.2, 0.8, 1)
          });
        }
        mergedDoc.addPage(copiedEn);
      }
      if (i < hiCount) {
        const [copiedHi] = await mergedDoc.copyPages(docHi, [i]);
        if (addHeaderStamp && font) {
          const { width, height } = copiedHi.getSize();
          copiedHi.drawRectangle({
            x: 0,
            y: height - 20,
            width: width,
            height: 20,
            color: rgb(0.18, 0.08, 0.02),
            opacity: 0.85
          });
          copiedHi.drawText(`${headerTitle} • Hindi Medium (Page ${i + 1}/${hiCount})`, {
            x: 14,
            y: height - 14,
            size: 8.5,
            font: font,
            color: rgb(1, 0.7, 0.2)
          });
        }
        mergedDoc.addPage(copiedHi);
      }
    }
  } else if (mode === 'side-by-side') {
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

      if (addHeaderStamp && font) {
        newPage.drawRectangle({
          x: 0,
          y: sheetHeight - 20,
          width: sheetWidth,
          height: 20,
          color: rgb(0.04, 0.06, 0.12),
          opacity: 0.9
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
    }
  } else if (mode === 'en-first') {
    const enIndices = Array.from({ length: enCount }, (_, i) => i);
    const copiedEn = await mergedDoc.copyPages(docEn, enIndices);
    copiedEn.forEach((p) => mergedDoc.addPage(p));

    const hiIndices = Array.from({ length: hiCount }, (_, i) => i);
    const copiedHi = await mergedDoc.copyPages(docHi, hiIndices);
    copiedHi.forEach((p) => mergedDoc.addPage(p));
  } else if (mode === 'hi-first') {
    const hiIndices = Array.from({ length: hiCount }, (_, i) => i);
    const copiedHi = await mergedDoc.copyPages(docHi, hiIndices);
    copiedHi.forEach((p) => mergedDoc.addPage(p));

    const enIndices = Array.from({ length: enCount }, (_, i) => i);
    const copiedEn = await mergedDoc.copyPages(docEn, enIndices);
    copiedEn.forEach((p) => mergedDoc.addPage(p));
  }

  const mergedPdfBytes = await mergedDoc.save();
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, mergedPdfBytes);
  console.log(`[Bilingual Merger] Successfully generated ${outputPath} (${(mergedPdfBytes.length / 1024 / 1024).toFixed(2)} MB, ${mergedDoc.getPageCount()} pages)`);
  return {
    pageCount: mergedDoc.getPageCount(),
    fileSizeMb: (mergedPdfBytes.length / 1024 / 1024).toFixed(2),
    outputPath
  };
}

module.exports = { mergeBilingualPdfs };

// Direct CLI Execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const enPdf = args[0] || path.join(__dirname, '../public/pdf/Class 10/Science 10th/jesc101.pdf');
  const hiPdf = args[1] || path.join(__dirname, '../public/pdf/Class 10/Vigyan 10th/jhsc101.pdf');
  const outPdf = args[2] || path.join(__dirname, '../pdf_hindi_and_eng/Class10_Science_Ch1_Bilingual_Merged.pdf');
  const mode = args[3] || 'alternating';

  mergeBilingualPdfs(enPdf, hiPdf, outPdf, { mode, addHeaderStamp: true })
    .then((res) => {
      console.log('Done!', res);
    })
    .catch((err) => {
      console.error('Error merging:', err);
      process.exit(1);
    });
}
