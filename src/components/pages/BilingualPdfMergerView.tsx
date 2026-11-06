import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Download,
  Eye,
  RefreshCw,
  ExternalLink,
  X,
  Sliders
} from 'lucide-react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import confetti from 'canvas-confetti';

interface BilingualPdfMergerViewProps {
  onBack: () => void;
  onOpenPdfReader?: (pdfUrl: string, title: string) => void;
}

type MergeStrategy = 'alternating' | 'side-by-side' | 'en-first' | 'hi-first';

export const BilingualPdfMergerView: React.FC<BilingualPdfMergerViewProps> = ({
  onBack,
  onOpenPdfReader: _onOpenPdfReader
}) => {
  // English Document State
  const [enFileName, setEnFileName] = useState<string | null>(null);
  const [enBytes, setEnBytes] = useState<ArrayBuffer | null>(null);
  const [enPageCount, setEnPageCount] = useState<number>(0);
  const [enFileSize, setEnFileSize] = useState<string>('');

  // Hindi Document State
  const [hiFileName, setHiFileName] = useState<string | null>(null);
  const [hiBytes, setHiBytes] = useState<ArrayBuffer | null>(null);
  const [hiPageCount, setHiPageCount] = useState<number>(0);
  const [hiFileSize, setHiFileSize] = useState<string>('');

  // Settings
  const [strategy, setStrategy] = useState<MergeStrategy>('alternating');
  const [addHeaderStamp, setAddHeaderStamp] = useState<boolean>(true);
  const [outputFilename, setOutputFilename] = useState<string>('NCERT_Bilingual_Chapter_Merged.pdf');

  // Process State
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [progressStatus, setProgressStatus] = useState<string>('');
  const [mergedBlobUrl, setMergedBlobUrl] = useState<string | null>(null);
  const [mergedStats, setMergedStats] = useState<{ pages: number; sizeMb: string } | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  // Hidden File Inputs
  const enFileInputRef = useRef<HTMLInputElement>(null);
  const hiFileInputRef = useRef<HTMLInputElement>(null);

  // Drag over states
  const [enDragOver, setEnDragOver] = useState<boolean>(false);
  const [hiDragOver, setHiDragOver] = useState<boolean>(false);

  // Format File Size
  const formatBytes = (bytes: number): string => {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Process English PDF
  const handleProcessEnPdf = async (buffer: ArrayBuffer, name: string) => {
    try {
      const doc = await PDFDocument.load(buffer);
      setEnBytes(buffer);
      setEnFileName(name);
      setEnPageCount(doc.getPageCount());
      setEnFileSize(formatBytes(buffer.byteLength));
      const base = name.replace(/\.pdf$/i, '');
      setOutputFilename(`${base}_Bilingual_EN_HI.pdf`);
    } catch (err: any) {
      alert('Could not parse English PDF: ' + (err?.message || err));
    }
  };

  // Process Hindi PDF
  const handleProcessHiPdf = async (buffer: ArrayBuffer, name: string) => {
    try {
      const doc = await PDFDocument.load(buffer);
      setHiBytes(buffer);
      setHiFileName(name);
      setHiPageCount(doc.getPageCount());
      setHiFileSize(formatBytes(buffer.byteLength));
    } catch (err: any) {
      alert('Could not parse Hindi PDF: ' + (err?.message || err));
    }
  };

  // 1-Click NCERT Sample Loader
  const handleLoadSample = async (chNum: number) => {
    setIsProcessing(true);
    setProgressPercent(20);
    setProgressStatus('Fetching authentic NCERT Chapter PDFs...');
    try {
      const enUrl = chNum === 1
        ? '/pdf/Class 10/Science 10th/jesc101.pdf'
        : '/pdf/Class 10/Science 10th/jesc102.pdf';
      const hiUrl = chNum === 1
        ? '/pdf/Class 10/Vigyan 10th/jhsc101.pdf'
        : '/pdf/Class 10/Vigyan 10th/jhsc102.pdf';

      const [resEn, resHi] = await Promise.all([fetch(enUrl), fetch(hiUrl)]);
      if (!resEn.ok || !resHi.ok) throw new Error('Could not fetch sample chapter PDFs');

      const [bEn, bHi] = await Promise.all([resEn.arrayBuffer(), resHi.arrayBuffer()]);

      await handleProcessEnPdf(
        bEn,
        chNum === 1
          ? 'Class10_Science_Ch1_Chemical_Reactions_EN.pdf'
          : 'Class10_Science_Ch2_Acids_Bases_Salts_EN.pdf'
      );
      await handleProcessHiPdf(
        bHi,
        chNum === 1
          ? 'Class10_Vigyan_Ch1_Rasayanik_Abhikriyae_HI.pdf'
          : 'Class10_Vigyan_Ch2_Amla_Ksharak_Lavan_HI.pdf'
      );

      setProgressPercent(100);
      setTimeout(() => setIsProcessing(false), 300);
    } catch (err: any) {
      alert('Failed to load sample: ' + (err?.message || err));
      setIsProcessing(false);
    }
  };

  // Execute Merge Operation
  const handleExecuteMerge = async () => {
    if (!enBytes || !hiBytes) return;

    setIsProcessing(true);
    setMergedStats(null);
    setProgressPercent(10);
    setProgressStatus('Loading English and Hindi documents into synthesis engine...');

    try {
      const docEn = await PDFDocument.load(enBytes);
      const docHi = await PDFDocument.load(hiBytes);

      const enCount = docEn.getPageCount();
      const hiCount = docHi.getPageCount();

      const mergedDoc = await PDFDocument.create();
      const font = addHeaderStamp ? await mergedDoc.embedFont(StandardFonts.HelveticaBold) : null;

      setProgressPercent(25);
      setProgressStatus(`Assembling pages in ${strategy} format...`);

      if (strategy === 'alternating') {
        const maxPages = Math.max(enCount, hiCount);
        for (let i = 0; i < maxPages; i++) {
          const currentPct = Math.min(85, Math.floor(25 + (i / maxPages) * 60));
          setProgressPercent(currentPct);
          setProgressStatus(`Merging pair ${i + 1} of ${maxPages}...`);

          if (i < enCount) {
            const [copiedEn] = await mergedDoc.copyPages(docEn, [i]);
            if (addHeaderStamp && font) {
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
                x: 12,
                y: height - 13,
                size: 8,
                font: font,
                color: rgb(0.22, 0.82, 0.99)
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
                y: height - 18,
                width: width,
                height: 18,
                color: rgb(0.18, 0.08, 0.02),
                opacity: 0.9
              });
              copiedHi.drawText(`NCERT Bilingual Edition • Hindi Medium (Page ${i + 1}/${hiCount})`, {
                x: 12,
                y: height - 13,
                size: 8,
                font: font,
                color: rgb(0.99, 0.72, 0.22)
              });
            }
            mergedDoc.addPage(copiedHi);
          }
        }
      } else if (strategy === 'side-by-side') {
        const maxPages = Math.max(enCount, hiCount);
        for (let i = 0; i < maxPages; i++) {
          const currentPct = Math.min(85, Math.floor(25 + (i / maxPages) * 60));
          setProgressPercent(currentPct);
          setProgressStatus(`Synthesizing 2-up sheet ${i + 1} of ${maxPages}...`);

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
        }
      } else if (strategy === 'en-first') {
        setProgressPercent(40);
        setProgressStatus('Appending all English pages...');
        const enIndices = Array.from({ length: enCount }, (_, i) => i);
        const copiedEn = await mergedDoc.copyPages(docEn, enIndices);
        copiedEn.forEach((p) => mergedDoc.addPage(p));

        setProgressPercent(75);
        setProgressStatus('Appending all Hindi pages...');
        const hiIndices = Array.from({ length: hiCount }, (_, i) => i);
        const copiedHi = await mergedDoc.copyPages(docHi, hiIndices);
        copiedHi.forEach((p) => mergedDoc.addPage(p));
      } else if (strategy === 'hi-first') {
        setProgressPercent(40);
        setProgressStatus('Appending all Hindi pages...');
        const hiIndices = Array.from({ length: hiCount }, (_, i) => i);
        const copiedHi = await mergedDoc.copyPages(docHi, hiIndices);
        copiedHi.forEach((p) => mergedDoc.addPage(p));

        setProgressPercent(75);
        setProgressStatus('Appending all English pages...');
        const enIndices = Array.from({ length: enCount }, (_, i) => i);
        const copiedEn = await mergedDoc.copyPages(docEn, enIndices);
        copiedEn.forEach((p) => mergedDoc.addPage(p));
      }

      setProgressPercent(90);
      setProgressStatus('Compressing binary stream & creating download link...');
      const bytes = await mergedDoc.save();

      if (mergedBlobUrl) URL.revokeObjectURL(mergedBlobUrl);
      const blob = new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      setMergedBlobUrl(url);
      setMergedStats({
        pages: mergedDoc.getPageCount(),
        sizeMb: (bytes.length / (1024 * 1024)).toFixed(2)
      });

      setProgressPercent(100);
      setProgressStatus('Bilingual Synthesis Complete!');

      setTimeout(() => {
        setIsProcessing(false);
        try {
          confetti({
            particleCount: 75,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch (_) {}
      }, 350);
    } catch (err: any) {
      console.error(err);
      alert('Error during merge: ' + (err?.message || err));
      setIsProcessing(false);
    }
  };

  // Download Trigger
  const handleDownload = () => {
    if (!mergedBlobUrl) return;
    const a = document.createElement('a');
    a.href = mergedBlobUrl;
    a.download = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const isReadyToMerge = enBytes !== null && hiBytes !== null;
  const estimatedPages = strategy === 'side-by-side'
    ? Math.max(enPageCount, hiPageCount)
    : enPageCount + hiPageCount;

  return (
    <div className="min-h-screen bg-[#060c18] text-slate-100 flex flex-col justify-between">
      
      {/* 1. Header with Breadcrumbs */}
      <div className="bg-[#0c1328] border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all flex items-center gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center font-extrabold text-white text-xs shadow-md">
                NS
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>द्विभाषी PDF विलय स्टूडियो</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    BILINGUAL MERGER
                  </span>
                </h1>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  Merge English and Hindi medium NCERT chapter PDFs into a single unified book
                </p>
              </div>
            </div>
          </div>

          {/* Standalone HTML Page Quick Link */}
          <a
            href="/bilingual-pdf-merger.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-all"
          >
            <span>Open Standalone Web App</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Top Navbar Breadcrumb Navigation (PERMANENT RULE) */}
        <div className="bg-[#090f1f] border-t border-slate-800/80 px-4 sm:px-6 py-1.5">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400 overflow-x-auto whitespace-nowrap">
            <button onClick={onBack} className="hover:text-emerald-400 font-medium text-slate-300">
              🏠 Home
            </button>
            <span className="text-slate-600">❯</span>
            <span className="text-slate-300 font-medium">Administration &amp; Storage</span>
            <span className="text-slate-600">❯</span>
            <span className="text-emerald-400 font-bold">द्विभाषी PDF विलय स्टूडियो (Bilingual Chapter Merger)</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        
        {/* Banner with 1-Click Samples */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#0c1328] to-cyan-950/40 border border-slate-800 p-6 sm:p-7 shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Zero Upload Lag • 100% In-Browser Private Synthesis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Upload English &amp; Hindi Medium Chapter PDFs
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Interleave pages or create widescreen side-by-side bilingual sheets for students. Supports all Class 1–12 NCERT, NIOS, and competitive exam textbooks.
              </p>
            </div>

            {/* Quick Demo Buttons */}
            <div className="bg-[#090f1f]/90 border border-slate-800 p-4 rounded-xl flex flex-col gap-2 sm:min-w-[280px]">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>⚡ 1-Click NCERT Demos</span>
              </div>
              <button
                type="button"
                onClick={() => handleLoadSample(1)}
                className="w-full text-left px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-emerald-600/20 hover:border-emerald-500/50 border border-slate-700 text-xs text-slate-200 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="font-bold text-white group-hover:text-emerald-300">Class 10 Science Ch 1</div>
                  <div className="text-[11px] text-slate-400">Chemical Reactions (EN + HI)</div>
                </div>
                <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">➔</span>
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample(2)}
                className="w-full text-left px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-emerald-600/20 hover:border-emerald-500/50 border border-slate-700 text-xs text-slate-200 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="font-bold text-white group-hover:text-emerald-300">Class 10 Science Ch 2</div>
                  <div className="text-[11px] text-slate-400">Acids, Bases &amp; Salts (EN + HI)</div>
                </div>
                <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">➔</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dual Upload Dropzones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Dropzone 1: English Medium */}
          <div className="bg-[#0c1328] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
                  EN
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">1. English Medium Chapter PDF</h3>
                  <p className="text-xs text-slate-400">First source document (अंग्रेज़ी माध्यम)</p>
                </div>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                enBytes ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}>
                {enBytes ? 'READY' : 'WAITING'}
              </span>
            </div>

            <input
              type="file"
              ref={enFileInputRef}
              accept="application/pdf"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => handleProcessEnPdf(reader.result as ArrayBuffer, file.name);
                  reader.readAsArrayBuffer(file);
                }
              }}
            />

            <div
              onClick={() => enFileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setEnDragOver(true); }}
              onDragLeave={() => setEnDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setEnDragOver(false);
                const file = e.dataTransfer.files?.[0];
                if (file && file.type === 'application/pdf') {
                  const reader = new FileReader();
                  reader.onload = () => handleProcessEnPdf(reader.result as ArrayBuffer, file.name);
                  reader.readAsArrayBuffer(file);
                }
              }}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[190px] ${
                enDragOver
                  ? 'border-cyan-400 bg-cyan-950/20'
                  : 'border-slate-700 hover:border-cyan-500/60 bg-[#090f1f]/60'
              }`}
            >
              {!enBytes ? (
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <UploadCloud size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Drag &amp; drop English Chapter PDF here</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      or <span className="text-cyan-400 underline font-semibold">browse file from PC</span>
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Supports NCERT, NIOS or Custom Chapter PDF</p>
                </div>
              ) : (
                <div className="w-full text-left space-y-3" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-start justify-between gap-3 bg-[#0c1328] p-3.5 rounded-lg border border-cyan-500/30">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                        PDF
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-[260px]">
                          {enFileName}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400">
                          <span>{enFileSize}</span>
                          <span>•</span>
                          <span className="text-cyan-300 font-semibold">{enPageCount} Pages</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setEnBytes(null);
                        setEnFileName(null);
                        setEnPageCount(0);
                      }}
                      className="text-slate-400 hover:text-rose-400 p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-md border border-cyan-500/20">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} /> English PDF Verified
                    </span>
                    <button
                      type="button"
                      onClick={() => enFileInputRef.current?.click()}
                      className="text-xs underline hover:text-cyan-300"
                    >
                      Change File
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dropzone 2: Hindi Medium */}
          <div className="bg-[#0c1328] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                  HI
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">2. Hindi Medium Chapter PDF (हिंदी माध्यम)</h3>
                  <p className="text-xs text-slate-400">Corresponding translation PDF (द्वितीय दस्तावेज)</p>
                </div>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                hiBytes ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}>
                {hiBytes ? 'READY' : 'WAITING'}
              </span>
            </div>

            <input
              type="file"
              ref={hiFileInputRef}
              accept="application/pdf"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => handleProcessHiPdf(reader.result as ArrayBuffer, file.name);
                  reader.readAsArrayBuffer(file);
                }
              }}
            />

            <div
              onClick={() => hiFileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setHiDragOver(true); }}
              onDragLeave={() => setHiDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setHiDragOver(false);
                const file = e.dataTransfer.files?.[0];
                if (file && file.type === 'application/pdf') {
                  const reader = new FileReader();
                  reader.onload = () => handleProcessHiPdf(reader.result as ArrayBuffer, file.name);
                  reader.readAsArrayBuffer(file);
                }
              }}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[190px] ${
                hiDragOver
                  ? 'border-amber-400 bg-amber-950/20'
                  : 'border-slate-700 hover:border-amber-500/60 bg-[#090f1f]/60'
              }`}
            >
              {!hiBytes ? (
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <UploadCloud size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Drag &amp; drop Hindi Chapter PDF here</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      या <span className="text-amber-400 underline font-semibold">हिंदी माध्यम फ़ाइल चुनें</span>
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">विज्ञान, गणित, सामाजिक, अर्थशास्त्र अध्याय</p>
                </div>
              ) : (
                <div className="w-full text-left space-y-3" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-start justify-between gap-3 bg-[#0c1328] p-3.5 rounded-lg border border-amber-500/30">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                        PDF
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-[260px]">
                          {hiFileName}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400">
                          <span>{hiFileSize}</span>
                          <span>•</span>
                          <span className="text-amber-300 font-semibold">{hiPageCount} Pages</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setHiBytes(null);
                        setHiFileName(null);
                        setHiPageCount(0);
                      }}
                      className="text-slate-400 hover:text-rose-400 p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-xs text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-md border border-amber-500/20">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} /> Hindi PDF Verified (सत्यापित)
                    </span>
                    <button
                      type="button"
                      onClick={() => hiFileInputRef.current?.click()}
                      className="text-xs underline hover:text-amber-300"
                    >
                      Change File
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* 3. Strategy Configuration */}
        <div className="bg-[#0c1328] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sliders size={18} className="text-emerald-400" />
                <span>Select Merge Mode (विलय प्रारूप का चयन)</span>
              </h3>
              <p className="text-xs text-slate-400">
                Choose how the English and Hindi pages will be sequenced in the single output PDF.
              </p>
            </div>
            {isReadyToMerge && (
              <div className="text-xs px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
                Calculated Output: {estimatedPages} Pages
              </div>
            )}
          </div>

          {/* 4 Strategy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Strategy 1: Alternating */}
            <div
              onClick={() => setStrategy('alternating')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all bg-[#090f1f]/80 ${
                strategy === 'alternating'
                  ? 'border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-emerald-500 text-slate-950">RECOMMENDED</span>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  strategy === 'alternating' ? 'border-emerald-500 bg-emerald-500' : 'border-slate-600'
                }`}>
                  {strategy === 'alternating' && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                </div>
              </div>
              <div className="mt-3">
                <div className="font-bold text-sm text-white">🔀 Alternating (Interleaved)</div>
                <div className="text-[11px] text-emerald-400 font-medium">द्विभाषी पृष्ठ-दर-पृष्ठ</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  EN Page 1 ➔ HI Page 1 ➔ EN Page 2 ➔ HI Page 2... Ideal for page-flip translation while reading.
                </p>
              </div>
            </div>

            {/* Strategy 2: Side-by-Side */}
            <div
              onClick={() => setStrategy('side-by-side')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all bg-[#090f1f]/80 ${
                strategy === 'side-by-side'
                  ? 'border-indigo-500 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/30'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  TABLET &amp; PC
                </span>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  strategy === 'side-by-side' ? 'border-indigo-500 bg-indigo-500' : 'border-slate-600'
                }`}>
                  {strategy === 'side-by-side' && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                </div>
              </div>
              <div className="mt-3">
                <div className="font-bold text-sm text-white">📖 Side-by-Side (2-Up)</div>
                <div className="text-[11px] text-indigo-400 font-medium">आमने-सामने द्विभाषी शीट</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Left side English, Right side Hindi on a single widescreen landscape sheet. Perfect for monitors.
                </p>
              </div>
            </div>

            {/* Strategy 3: English First */}
            <div
              onClick={() => setStrategy('en-first')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all bg-[#090f1f]/80 ${
                strategy === 'en-first'
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  SEQUENTIAL
                </span>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  strategy === 'en-first' ? 'border-cyan-500 bg-cyan-500' : 'border-slate-600'
                }`}>
                  {strategy === 'en-first' && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                </div>
              </div>
              <div className="mt-3">
                <div className="font-bold text-sm text-white">📑 English First, then Hindi</div>
                <div className="text-[11px] text-cyan-400 font-medium">पहले अंग्रेज़ी फिर हिंदी</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Complete English chapter in first half, followed immediately by complete Hindi chapter in second half.
                </p>
              </div>
            </div>

            {/* Strategy 4: Hindi First */}
            <div
              onClick={() => setStrategy('hi-first')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all bg-[#090f1f]/80 ${
                strategy === 'hi-first'
                  ? 'border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  SEQUENTIAL
                </span>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  strategy === 'hi-first' ? 'border-amber-500 bg-amber-500' : 'border-slate-600'
                }`}>
                  {strategy === 'hi-first' && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                </div>
              </div>
              <div className="mt-3">
                <div className="font-bold text-sm text-white">📑 Hindi First, then English</div>
                <div className="text-[11px] text-amber-400 font-medium">पहले हिंदी फिर अंग्रेज़ी</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Complete Hindi chapter in first half, followed immediately by complete English chapter in second half.
                </p>
              </div>
            </div>

          </div>

          {/* Options & Filename */}
          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-[#090f1f]/80 p-3.5 rounded-xl border border-slate-800">
              <input
                type="checkbox"
                id="headerStampReact"
                checked={addHeaderStamp}
                onChange={(e) => setAddHeaderStamp(e.target.checked)}
                className="mt-1 w-4 h-4 rounded accent-emerald-500 cursor-pointer"
              />
              <label htmlFor="headerStampReact" className="cursor-pointer">
                <div className="text-xs font-bold text-white">Add Bilingual Header Stamp (द्विभाषी शीर्षक पट्टी)</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Prints a subtle label at the top of each page stating "English Medium • Page X" or "हिंदी माध्यम • पृष्ठ Y".
                </div>
              </label>
            </div>

            <div className="bg-[#090f1f]/80 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between">
              <label htmlFor="outputFilenameReact" className="text-xs font-bold text-white block mb-1">
                Custom Output Filename
              </label>
              <input
                type="text"
                id="outputFilenameReact"
                value={outputFilename}
                onChange={(e) => setOutputFilename(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-xs text-slate-200 px-3 py-1.5 rounded-lg focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* 4. Action Button & Progress */}
        <div className="space-y-4">
          <button
            type="button"
            disabled={!isReadyToMerge || isProcessing}
            onClick={handleExecuteMerge}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-3"
          >
            <Sparkles size={22} />
            <span>
              {!isReadyToMerge
                ? 'Upload Both English & Hindi PDFs to Merge'
                : isProcessing
                ? 'Synthesizing Bilingual Document...'
                : `⚡ Merge ${enPageCount} English + ${hiPageCount} Hindi Pages Now`}
            </span>
          </button>

          {/* Progress Bar */}
          {isProcessing && (
            <div className="bg-[#0c1328] border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-emerald-400 flex items-center gap-2">
                  <RefreshCw size={14} className="animate-spin" />
                  {progressStatus}
                </span>
                <span className="text-white font-mono font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Result Card */}
          {mergedStats && mergedBlobUrl && !isProcessing && (
            <div className="bg-gradient-to-br from-emerald-950/40 via-[#0c1328] to-slate-900 border-2 border-emerald-500/60 rounded-2xl p-6 shadow-2xl space-y-5 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">Bilingual Chapter PDF Generated!</h3>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950">
                        READY
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {mergedStats.pages} Pages • {mergedStats.sizeMb} MB • Ready for Download &amp; Offline Reading
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                  >
                    <Download size={16} />
                    <span>Download Merged PDF</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreviewModal(true)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
                  >
                    <Eye size={16} />
                    <span>Live Preview</span>
                  </button>
                </div>
              </div>

              {/* Embedded Document Preview Drawer */}
              {showPreviewModal && (
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-bold flex items-center gap-2">
                      <Eye size={14} className="text-cyan-400" />
                      <span>Interactive In-Browser Document Preview</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={mergedBlobUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <span>Open in Tab</span>
                        <ExternalLink size={12} />
                      </a>
                      <button
                        type="button"
                        onClick={() => setShowPreviewModal(false)}
                        className="text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-[650px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-inner">
                    <iframe className="w-full h-full" src={mergedBlobUrl} title="Merged PDF Preview" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

      {/* 5. Footer */}
      <footer className="mt-12 bg-[#0c1328] border-t border-slate-800 text-slate-400 text-xs py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-white">StudyGuide by Nextsem • Bilingual Curriculum Engineering</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Author: Er. Manoj Kumar • Zero-Server In-Memory Processing</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <button onClick={onBack} className="hover:text-emerald-400 transition-colors">
              NCERT Books
            </button>
            <a href="/bilingual-pdf-merger.html" target="_blank" className="hover:text-emerald-400 transition-colors">
              Standalone Studio
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
