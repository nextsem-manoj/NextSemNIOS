import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Download, FileText, ShieldCheck, CheckCircle2, FolderOpen, Eye, Info, Sparkles, ArrowRight } from 'lucide-react';
import type { Chapter, QuestionSolution } from '../data/ncertData';
import { getPdfBlobFromDB } from '../utils/pdfStorage';
import { getOfficialNcertPdfUrl } from './BookChaptersView';
import { getDrivePreviewUrl, getDriveDownloadUrl, SHARED_NCERT_DRIVE_FOLDER_URL } from '../utils/googleDriveHelper';

interface PdfReaderViewProps {
  chapter: Chapter;
  bookTitle?: string;
  onBackToChapters: () => void;
  onToggleBookmark?: (solution: QuestionSolution) => void;
  isBookmarked?: (id: string) => boolean;
  onOpenStatsTest?: () => void;
  onOpenEconomicsTest?: () => void;
  onOpenHistoryTest?: () => void;
  onOpenHydrocarbonsTest?: () => void;
  onOpenInteractiveEuclid?: (chapter: Chapter) => void;
  onOpenClass9MathsTest?: () => void;
  onOpenClass6MathsWorkbook?: () => void;
  onOpenHindiGrammarStudio?: () => void;
}

export const PdfReaderView: React.FC<PdfReaderViewProps> = ({
  chapter,
  bookTitle,
  onBackToChapters,
  onOpenStatsTest,
  onOpenEconomicsTest,
  onOpenHistoryTest,
  onOpenHydrocarbonsTest,
  onOpenInteractiveEuclid,
  onOpenClass9MathsTest,
  onOpenClass6MathsWorkbook,
  onOpenHindiGrammarStudio
}) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  const rawPdfUrl = chapter.officialPdfUrl || getOfficialNcertPdfUrl(chapter, bookTitle);
  const filename = rawPdfUrl.substring(rawPdfUrl.lastIndexOf('/') + 1);

  const titleUpper = (bookTitle || '').toUpperCase();
  const isPhysics = titleUpper.includes('PHYSIC') || chapter.id.includes('-p-') || chapter.id.includes('leph');
  const isHistory = titleUpper.includes('HIST') || chapter.id.includes('khhs') || chapter.id.includes('lhhs') || chapter.id.includes('kehs') || chapter.id.includes('lehs') || chapter.id.includes('c12-hist');
  const isHistory11Ch1 = chapter.id === 'c11-hist-ch1' || chapter.id.includes('kehs101') || filename.includes('kehs101') || rawPdfUrl.includes('kehs101') || ((isHistory || titleUpper.includes('HIST')) && chapter.chapterNumber === 1 && (titleUpper.includes('11') || titleUpper.includes('XI') || titleUpper.includes('WORLD HISTORY')));
  const isAccountancy = titleUpper.includes('ACCOUNT') || chapter.id.includes('keac') || chapter.id.includes('leac');
  const isScience = titleUpper.includes('SCIENCE') || chapter.id.includes('jesc') || chapter.id.includes('iesc');
  const isMaths = titleUpper.includes('MATH') || titleUpper.includes('GANITA') || chapter.id.includes('iemh') || chapter.id.includes('kemh') || chapter.id.includes('hemh');
  const isBiology = titleUpper.includes('BIOLOG') || chapter.id.includes('lebo');

  const isStats11 = (chapter.officialBookCode === 'kest1' || chapter.id.includes('kest1') || titleUpper.includes('STATISTIC') || (titleUpper.includes('ECONOM') && (titleUpper.includes('XI') || titleUpper.includes('11')))) && chapter.chapterNumber <= 4;
  const isEconomics11 = chapter.officialBookCode === 'keec1' || chapter.id.includes('keec1') || chapter.id.includes('ied') || filename.includes('keec101') || filename.includes('keec102') || rawPdfUrl.includes('keec101') || rawPdfUrl.includes('keec102') || (titleUpper.includes('INDIAN ECONOMIC') && (chapter.chapterNumber === 1 || chapter.chapterNumber === 2)) || chapter.title.toLowerCase().includes('eve of independence') || chapter.title.toLowerCase().includes('1950–1990') || chapter.title.toLowerCase().includes('1950-1990');
  const isEuclid9 = chapter.id === 'c9-m-ch5' || (chapter.officialBookCode === 'iemh1' && chapter.chapterNumber === 5) || (isMaths && (titleUpper.includes('IX') || titleUpper.includes('9')) && chapter.chapterNumber === 5);
  const isLinearEq9 = (chapter.officialBookCode === 'iemh1' && chapter.chapterNumber === 4) || (isMaths && (titleUpper.includes('IX') || titleUpper.includes('9')) && chapter.chapterNumber === 4) || chapter.id === 'c9-m-ch4';
  const isCoordGeom9 = chapter.id === 'c9-m-ch1' || (chapter.officialBookCode === 'iemh1' && chapter.chapterNumber === 1) || (isMaths && (titleUpper.includes('IX') || titleUpper.includes('9')) && chapter.chapterNumber === 1);
  const isDataHandling6 = chapter.id === 'c6-m-ch4' || (chapter.officialBookCode === 'fegp1' && chapter.chapterNumber === 4) || filename.includes('fegp104') || rawPdfUrl.includes('fegp104') || (isMaths && (titleUpper.includes('VI') || titleUpper.includes('6')) && chapter.chapterNumber === 4);
  const isHistoryBhaktiMongols = (chapter.officialBookCode === 'lhhs2' && chapter.chapterNumber === 2) || (chapter.officialBookCode === 'khhs1' && chapter.chapterNumber === 5) || chapter.id.includes('lhhs202') || chapter.id.includes('khhs105') || (isHistory && (chapter.chapterNumber === 6 || chapter.chapterNumber === 5));
  const isHydrocarbons26 = chapter.id.includes('313') || chapter.id.includes('hydrocarbon') || (chapter.chapterNumber === 26 && (titleUpper.includes('CHEM') || titleUpper.includes('NIOS')));
  const isHindiGrammar9 = chapter.id.startsWith('c9-hg-') || chapter.id.includes('grammar') || titleUpper.includes('व्याकरण') || titleUpper.includes('GRAMMAR');

  const isPhysics1 = (isPhysics && chapter.chapterNumber === 1) || chapter.id.includes('leph101') || chapter.id === 'c12-p-ch1';
  const isPhysics2 = (isPhysics && chapter.chapterNumber === 2) || chapter.id.includes('leph102') || chapter.id === 'c12-p-ch2';
  const isPhysics6 = (isPhysics && chapter.chapterNumber === 6) || chapter.id.includes('leph106');
  const isPhysics7 = (isPhysics && chapter.chapterNumber === 7) || chapter.id.includes('leph107');
  const isAccountancy3 = (isAccountancy && chapter.chapterNumber === 3) || chapter.id.includes('keac103');
  const isAccountancy4 = (isAccountancy && chapter.chapterNumber === 4) || chapter.id.includes('keac104');
  const isAccountancy5 = (isAccountancy && chapter.chapterNumber === 5) || chapter.id.includes('keac105') || filename.includes('keac105') || rawPdfUrl.includes('keac105') || chapter.title.toLowerCase().includes('reconciliation');
  const isAccountancy6 = (isAccountancy && chapter.chapterNumber === 6) || chapter.id.includes('keac106') || filename.includes('keac106') || rawPdfUrl.includes('keac106') || filename.includes('Rectification') || chapter.title.toLowerCase().includes('rectification') || chapter.title.toLowerCase().includes('trial balance');
  const isScience10Ch1 = (isScience && chapter.chapterNumber === 1 && (titleUpper.includes('10') || titleUpper.includes('X'))) || chapter.id.includes('jesc101');
  const isScience10Ch5 = (isScience && chapter.chapterNumber === 5 && (titleUpper.includes('10') || titleUpper.includes('X'))) || chapter.id.includes('jesc105');
  const isScience10Ch9 = (isScience && chapter.chapterNumber === 9 && (titleUpper.includes('10') || titleUpper.includes('X'))) || chapter.id.includes('jesc109');
  const isScience9Ch8 = (isScience && chapter.chapterNumber === 8 && (titleUpper.includes('9') || titleUpper.includes('IX'))) || chapter.id.includes('iesc108');
  const isMaths11Ch6 = (isMaths && chapter.chapterNumber === 6 && (titleUpper.includes('11') || titleUpper.includes('XI'))) || chapter.id.includes('kemh106');
  const isBiology12Ch8 = (isBiology && chapter.chapterNumber === 8 && (titleUpper.includes('12') || titleUpper.includes('XII'))) || chapter.id.includes('lebo108');
  const isMaths8Ch4 = (isMaths && chapter.chapterNumber === 4 && (titleUpper.includes('8') || titleUpper.includes('VIII') || titleUpper.includes('PRAKASH'))) || chapter.id.includes('hemh104');
  const isNiosMath1 = (titleUpper.includes('NIOS') && isMaths && chapter.chapterNumber === 1) || chapter.id.includes('nios-211-1');
  const isHistoryPart1 = (isHistory && (titleUpper.includes('PART-I') || titleUpper.includes('भाग-1') || (chapter.chapterNumber >= 1 && chapter.chapterNumber <= 4))) || chapter.id.includes('lhhs1') || chapter.id.includes('lehs1');
  const isHistory4 = (isHistory && chapter.chapterNumber === 4) || chapter.id.includes('lhhs104') || chapter.id.includes('lehs104');
  const isHistory5 = (isHistory && chapter.chapterNumber === 5) || chapter.id.includes('lhhs201') || chapter.id.includes('lehs201');
  const isHistory6 = (isHistory && chapter.chapterNumber === 6) || chapter.id.includes('lhhs202') || chapter.id.includes('lehs202');
  const isHistory7 = (isHistory && chapter.chapterNumber === 7) || chapter.id.includes('lhhs203') || chapter.id.includes('lehs203');
  const isHindi7Ch1 = chapter.id === 'c7-hin-ch1' || (chapter.officialBookCode === 'ghin1' && chapter.chapterNumber === 1);
  const isEvs5Ch1 = chapter.id === 'c5-evs-ch1' || (chapter.officialBookCode === 'ehap1' && chapter.chapterNumber === 1);
  const isSantoor5Ch1 = chapter.id === 'c5-santoor-ch1' || chapter.id.includes('eesa101') || (chapter.officialBookCode === 'eesa1' && chapter.chapterNumber === 1);
  const isSantoor5Ch2 = chapter.id === 'c5-santoor-ch2' || chapter.id.includes('eesa102') || (chapter.officialBookCode === 'eesa1' && chapter.chapterNumber === 2);
  const isSantoor5Ch3 = chapter.id === 'c5-santoor-ch3' || chapter.id.includes('eesa103') || (chapter.officialBookCode === 'eesa1' && chapter.chapterNumber === 3);
  const isSantoor5Ch4 = chapter.id === 'c5-santoor-ch4' || chapter.id.includes('eesa104') || (chapter.officialBookCode === 'eesa1' && chapter.chapterNumber === 4);
  const isMaths5Ch6 = chapter.id === 'c5-m-ch6' || chapter.id.includes('eemm106') || chapter.id.includes('eemh106') || filename.includes('eemm106') || filename.includes('eemh106') || ((isMaths || titleUpper.includes('MATH')) && chapter.chapterNumber === 6 && (titleUpper.includes('CLASS 5') || titleUpper.includes('CLASS V') || chapter.id.startsWith('c5-')));
  const isSantoor5Ch6 = chapter.id === 'c5-santoor-ch6' || chapter.id.includes('eesa106') || (chapter.officialBookCode === 'eesa1' && chapter.chapterNumber === 6);
  const isCuriosity7Ch6 = chapter.id === 'c7-sci-ch6' || chapter.id.includes('gecu106') || filename.includes('gecu106') || (chapter.officialBookCode === 'gecu1' && chapter.chapterNumber === 6) || chapter.title.toLowerCase().includes('adolescence');
  const isGanita7Ch6 = chapter.id === 'c7-mat-ch6' || chapter.id.includes('gegp106') || filename.includes('gegp106') || (chapter.officialBookCode === 'gegp1' && chapter.chapterNumber === 6) || chapter.title.toLowerCase().includes('number play');
  const isScience9Ch3 = chapter.id === 'c9-s-ch3' || chapter.id.includes('iesc103') || filename.includes('iesc103') || (chapter.officialBookCode === 'iesc1' && chapter.chapterNumber === 3) || chapter.title.toLowerCase().includes('tissues in action');
  const isChemistry = titleUpper.includes('CHEMIS') || chapter.id.includes('-chem-') || chapter.id.includes('lech') || chapter.id.includes('kech');
  const isChemistry12Ch7 = (isChemistry && chapter.chapterNumber === 7) || chapter.id.includes('lech202') || chapter.id === 'c12-chem-ch7';
  const isChemistry12Ch6 = (isChemistry && (chapter.chapterNumber === 6 || chapter.chapterNumber === 1)) || chapter.id.includes('lech201') || chapter.id === 'c12-chem-ch6' || filename.includes('lech201') || rawPdfUrl.includes('lech201') || chapter.title.toLowerCase().includes('haloalkane');
  const isExploring7Ch2 = chapter.id === 'c7-soc-ch2' || chapter.id.includes('gees102') || filename.includes('gees102') || (chapter.officialBookCode === 'gees1' && chapter.chapterNumber === 2) || (titleUpper.includes('EXPLORING') && chapter.chapterNumber === 2) || chapter.title.toLowerCase().includes('weather');
  const isExploring7Part2Ch1 = chapter.id === 'c7-soc-part2-ch1' || chapter.id.includes('gees201') || filename.includes('gees201') || rawPdfUrl.includes('gees201') || (chapter.officialBookCode === 'gees2' && chapter.chapterNumber === 1) || chapter.title.toLowerCase().includes('farming') || chapter.title.includes('कृषि');
  const isPoorvi7Unit1 = chapter.id === 'c7-eng-u1' || chapter.id.includes('gepr101') || filename.includes('gepr101') || (chapter.officialBookCode === 'gepr1' && chapter.chapterNumber === 1) || chapter.title.toLowerCase().includes('learning together') || chapter.title.toLowerCase().includes('river spoke');
  const isScience9Ch6 = chapter.id === 'c9-s-ch6' || chapter.id.includes('iesc106') || filename.includes('iesc106') || rawPdfUrl.includes('iesc106') || (chapter.officialBookCode === 'iesc1' && chapter.chapterNumber === 6) || chapter.title.toLowerCase().includes('forces affect motion') || (isScience && chapter.chapterNumber === 6 && (titleUpper.includes('9') || titleUpper.includes('IX')));
  const isScience9Ch7 = chapter.id === 'c9-s-ch7' || chapter.id.includes('iesc107') || filename.includes('iesc107') || rawPdfUrl.includes('iesc107') || (chapter.officialBookCode === 'iesc1' && chapter.chapterNumber === 7) || (isScience && chapter.chapterNumber === 7 && (titleUpper.includes('9') || titleUpper.includes('IX'))) || chapter.title.toLowerCase() === 'motion';
  const isCuriosity7Ch9 = chapter.id === 'c7-sci-ch9' || chapter.id.includes('gecu109') || filename.includes('gecu109') || rawPdfUrl.includes('gecu109') || (chapter.officialBookCode === 'gecu1' && chapter.chapterNumber === 9) || (isScience && (titleUpper.includes('7') || titleUpper.includes('VII') || titleUpper.includes('CURIOSITY')) && chapter.chapterNumber === 9);
  const isCuriosity7Ch7 = chapter.id === 'c7-sci-ch7' || chapter.id.includes('gecu107') || filename.includes('gecu107') || rawPdfUrl.includes('gecu107') || (chapter.officialBookCode === 'gecu1' && chapter.chapterNumber === 7) || chapter.title.toLowerCase().includes('heat transfer');
  const isMaths10Ch8 = chapter.id.includes('jemh108') || filename.includes('jemh108') || rawPdfUrl.includes('jemh108') || ((isMaths || titleUpper.includes('MATH')) && chapter.chapterNumber === 8 && (titleUpper.includes('10') || titleUpper.includes('X'))) || chapter.title.toLowerCase().includes('trigonometry');
  const isMaths4Ch6 = chapter.id.includes('demm106') || filename.includes('demm106') || rawPdfUrl.includes('demm106') || ((isMaths || titleUpper.includes('MATH')) && chapter.chapterNumber === 6 && (titleUpper.includes('4') || titleUpper.includes('IV') || chapter.id.startsWith('c4-')));
  const isGanita7Ch5 = chapter.id.includes('gegp105') || filename.includes('gegp105') || rawPdfUrl.includes('gegp105') || ((isMaths || titleUpper.includes('GANITA')) && chapter.chapterNumber === 5 && (titleUpper.includes('7') || titleUpper.includes('VII') || chapter.id.startsWith('c7-')));
  const isMaths3Ch6 = chapter.id.includes('cemm106') || filename.includes('cemm106') || rawPdfUrl.includes('cemm106') || ((isMaths || titleUpper.includes('MATH')) && chapter.chapterNumber === 6 && (titleUpper.includes('3') || titleUpper.includes('III') || chapter.id.startsWith('c3-')));
  const isPolSci12Ch5 = chapter.id === 'c12-pol-ch5' || chapter.id.includes('lhps105') || filename.includes('lhps105') || rawPdfUrl.includes('lhps105') || ((chapter.title.includes('सुरक्षा') || chapter.title.toLowerCase().includes('security')) && (titleUpper.includes('POLITICAL') || titleUpper.includes('राजनीति') || chapter.id.startsWith('c12-pol')));

  useEffect(() => {
    let isMounted = true;
    let createdUrl: string | null = null;

    async function loadLocalBlob() {
      try {
        const blob = await getPdfBlobFromDB(chapter.id);
        if (blob && isMounted) {
          createdUrl = URL.createObjectURL(blob);
          setBlobUrl(createdUrl);
        }
      } catch (err) {
        console.error('Error loading PDF blob from local IndexedDB:', err);
      }
    }

    loadLocalBlob();

    return () => {
      isMounted = false;
      if (createdUrl) {
        URL.revokeObjectURL(createdUrl);
      }
    };
  }, [chapter.id]);

  const [viewMode, setViewMode] = useState<'EMBED' | 'HUB'>('EMBED');
  const [viewerEngine, setViewerEngine] = useState<'DOCS' | 'DIRECT' | 'DRIVE'>('DOCS');

  const driveEmbedUrl = getDrivePreviewUrl(rawPdfUrl);
  const driveDownloadUrl = getDriveDownloadUrl(rawPdfUrl);
  const activePdfSrc = blobUrl || rawPdfUrl;

  const currentEmbedSrc = blobUrl
    ? blobUrl
    : viewerEngine === 'DIRECT'
    ? `${rawPdfUrl}#toolbar=1&navpanes=0`
    : viewerEngine === 'DRIVE'
    ? driveEmbedUrl
    : `https://docs.google.com/viewer?url=${encodeURIComponent(rawPdfUrl)}&embedded=true`;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 250,
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* Top Mobile PDF Reader App Bar */}
      <div style={{
        padding: 'calc(10px + env(safe-area-inset-top, 0px)) 16px 10px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 260,
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onBackToChapters}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '50%'
            }}
            title="Back to Chapters"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Unit {chapter.chapterNumber} • {chapter.title}
              <span style={{ fontSize: '0.65rem', background: blobUrl ? '#04AA6D' : '#4f46e5', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 900 }}>
                {blobUrl ? 'LOCAL OFFLINE' : 'DRIVE READY'}
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              NCERT Textbook PDF ({filename})
            </div>
          </div>
        </div>

        {/* Top Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setViewMode(viewMode === 'EMBED' ? 'HUB' : 'EMBED')}
            style={{
              background: viewMode === 'EMBED' ? 'rgba(79, 70, 229, 0.08)' : 'var(--bg-hover)',
              border: viewMode === 'EMBED' ? '1px solid #4f46e5' : '1px solid var(--border-color)',
              color: viewMode === 'EMBED' ? '#4f46e5' : 'var(--text-secondary)',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {viewMode === 'EMBED' ? <Info size={14} /> : <Eye size={14} />}
            <span>{viewMode === 'EMBED' ? 'Details & Download' : 'In-App Reader'}</span>
          </button>

          <a
            href={SHARED_NCERT_DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: '#d97706',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            title="Open NCERT Google Drive Folder"
          >
            <FolderOpen size={14} />
            <span>Drive Folder ↗</span>
          </a>
        </div>
      </div>

      {/* 🚀 Quick Action & Instant Fallback Bar */}
      {viewMode === 'EMBED' && (
        <div style={{
          background: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-color)',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          flexWrap: 'wrap',
          gap: '8px',
          zIndex: 255
        }}>
          {/* Engine Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.72rem' }}>Viewer:</span>
            <div style={{ display: 'inline-flex', background: 'var(--bg-primary)', borderRadius: '8px', padding: '2px', border: '1px solid var(--border-color)' }}>
              <button
                onClick={() => setViewerEngine('DOCS')}
                style={{
                  background: viewerEngine === 'DOCS' ? 'var(--accent-primary, #4f46e5)' : 'transparent',
                  color: viewerEngine === 'DOCS' ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '3px 8px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Google Docs
              </button>
              <button
                onClick={() => setViewerEngine('DIRECT')}
                style={{
                  background: viewerEngine === 'DIRECT' ? 'var(--accent-primary, #4f46e5)' : 'transparent',
                  color: viewerEngine === 'DIRECT' ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '3px 8px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Direct Stream
              </button>
              <button
                onClick={() => setViewerEngine('DRIVE')}
                style={{
                  background: viewerEngine === 'DRIVE' ? 'var(--accent-primary, #4f46e5)' : 'transparent',
                  color: viewerEngine === 'DRIVE' ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '3px 8px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Drive Hub
              </button>
            </div>
          </div>

          {/* Instant 1-Click Open & Download Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href={activePdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#04AA6D',
                color: '#ffffff',
                padding: '4px 10px',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '0.74rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 2px 6px rgba(4, 170, 109, 0.25)'
              }}
              title="Open PDF directly in browser"
            >
              <ExternalLink size={13} />
              <span>Open PDF Direct ↗</span>
            </a>

            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = driveDownloadUrl;
                link.download = filename;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              style={{
                background: 'rgba(79, 70, 229, 0.1)',
                border: '1px solid rgba(79, 70, 229, 0.35)',
                color: '#4f46e5',
                padding: '4px 10px',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '0.74rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Download size={13} />
              <span>Download</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Reader View */}
      {viewMode === 'EMBED' ? (
        <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%', background: 'var(--bg-primary)' }}>
          <iframe
            src={currentEmbedSrc}
            title={`Unit ${chapter.chapterNumber} - ${chapter.title}`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              background: 'var(--bg-primary)'
            }}
            allow="autoplay"
          />

          {/* Interactive Test Suite Dock under PDF Frame in EMBED mode */}
          {/* Floating Action Pills on EMBED view */}
          {isMaths5Ch6 && (
            <a
              href="/maths-class5-ch6-dairy-farm-worksheet.html"
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #071927 0%, #0d273a 100%)',
                border: '1.5px solid #14b8a6',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(20, 184, 166, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%',
                textDecoration: 'none'
              }}
            >
              <div style={{ background: '#14b8a6', color: '#000', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13 }}>🥛</div>
              <div style={{ color: '#fff', fontSize: '0.86rem', fontWeight: 700, whiteSpace: 'nowrap' }}>Ch 6 Worksheet: Dairy Farm &amp; Multiples (Bilingual)</div>
              <div style={{ color: '#14b8a6', fontWeight: 800, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 4 }}>Open Worksheet <ArrowRight size={12} /></div>
            </a>
          )}
          {isHistory11Ch1 && (
            <a
              href="/history-class11-ch1-writing-and-city-life-pages11-12-worksheet.html"
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0f1a30 0%, #070d1a 100%)',
                border: '1.5px solid #f59e0b',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(245, 158, 11, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%',
                textDecoration: 'none'
              }}
            >
              <div style={{ background: '#f59e0b', color: '#000', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13 }}>🏛️</div>
              <div style={{ color: '#fff', fontSize: '0.86rem', fontWeight: 700, whiteSpace: 'nowrap' }}>Pages 11 &amp; 12 Worksheet (Interactive &amp; Print)</div>
              <div style={{ color: '#f59e0b', fontWeight: 800, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 4 }}>Open <ArrowRight size={12} /></div>
            </a>
          )}
          {isHindiGrammar9 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #1e0912 100%)',
                border: '1.5px solid #e11d48',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(225, 29, 72, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                if (onOpenHindiGrammarStudio) onOpenHindiGrammarStudio();
                else window.location.href = '/hindi-class9-grammar-complete-mastery.html';
              }}
            >
              <Sparkles size={16} color="#fb7185" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🌟 हिंदी व्याकरण मास्टरक्लास (लाइव समास एक्सप्लोरर व 40 प्रश्न)
              </span>
              <span style={{ background: '#e11d48', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Launch Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isEconomics11 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #062e26 0%, #031c17 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                if (onOpenEconomicsTest) onOpenEconomicsTest();
                else window.location.href = '/?view=class11-economics-test';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Indian Economic Dev Ch 1 &amp; 2 Mega Test (30 MCQs in Hinglish)
              </span>
              <span style={{ background: '#10b981', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Test <ArrowRight size={12} />
              </span>
            </div>
          ) : isStats11 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #04AA6D',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(4, 170, 109, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                if (onOpenStatsTest) onOpenStatsTest();
                else window.location.href = '/?view=class11-stats-test';
              }}
            >
              <Sparkles size={16} color="#04AA6D" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Statistics Ch 1–4 Mega Test (30 MCQs in Hinglish)
              </span>
              <span style={{ background: '#04AA6D', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Test <ArrowRight size={12} />
              </span>
            </div>
          ) : isChemistry12Ch6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #1e0912 0%, #2e0d1b 100%)',
                border: '1.5px solid #f43f5e',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(244, 63, 94, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/class12-chemistry-ch1-haloalkanes-board-test-paper.html';
              }}
            >
              <Sparkles size={16} color="#f43f5e" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🖨️ Haloalkanes 4-Page CBSE Board Exam Paper &amp; Marking Scheme (50 Marks)
              </span>
              <span style={{ background: '#f43f5e', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Board Paper <ArrowRight size={12} />
              </span>
            </div>
          ) : (isScience9Ch6 || isScience9Ch7) ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #041628 0%, #082846 100%)',
                border: '1.5px solid #06b6d4',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(6, 182, 212, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/class9-science-motion-force-test-hindi.html';
              }}
            >
              <Sparkles size={16} color="#06b6d4" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🚀 गति एवं बल: 4-पृष्ठ हिंदी टेस्ट पेपर व उत्तर कुंजी (50 अंक)
              </span>
              <span style={{ background: '#0284c7', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Hindi Test <ArrowRight size={12} />
              </span>
            </div>
          ) : isLinearEq9 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #0ea5e9',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(14, 165, 233, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                if (onOpenClass9MathsTest) onOpenClass9MathsTest();
                else window.location.href = '/class9-maths-ch4-ch5-question-paper-40-marks.html';
              }}
            >
              <Sparkles size={16} color="#38bdf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Class 9 Maths: Chapters 4 &amp; 5 Assessment (40 Marks)
              </span>
              <span style={{ background: '#0284c7', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Exam <ArrowRight size={12} />
              </span>
            </div>
          ) : isEuclid9 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #4f46e5',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(79, 70, 229, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                if (onOpenInteractiveEuclid) onOpenInteractiveEuclid(chapter);
                else window.location.href = '/maths-class9-ch5-euclid-geometry-interactive.html';
              }}
            >
              <Sparkles size={16} color="#818cf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Euclid &amp; Circle Geometry Lab (12 Theorems Proofs)
              </span>
              <span style={{ background: '#4f46e5', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Launch Lab <ArrowRight size={12} />
              </span>
            </div>
          ) : isDataHandling6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #0284c7',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(2, 132, 199, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                if (onOpenClass6MathsWorkbook) onOpenClass6MathsWorkbook();
                else window.location.href = '/maths-class6-ch4-data-handling-workbook.html';
              }}
            >
              <Sparkles size={16} color="#38bdf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📊 Data Handling Interactive Workbook &amp; Studio
              </span>
              <span style={{ background: '#0284c7', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Launch Workbook <ArrowRight size={12} />
              </span>
            </div>
          ) : isHistoryBhaktiMongols ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #ea580c',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(234, 88, 12, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                if (onOpenHistoryTest) onOpenHistoryTest();
                else window.location.href = '/?view=history-competency-test';
              }}
            >
              <Sparkles size={16} color="#f97316" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                History: Bhakti–Sufi &amp; Mongols Competency Test
              </span>
              <span style={{ background: '#ea580c', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Test <ArrowRight size={12} />
              </span>
            </div>
          ) : isHydrocarbons26 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                if (onOpenHydrocarbonsTest) onOpenHydrocarbonsTest();
                else window.location.href = '/?view=hydrocarbons-test';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Hydrocarbons: Alkanes, Alkenes &amp; Benzene Test
              </span>
              <span style={{ background: '#10b981', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Test <ArrowRight size={12} />
              </span>
            </div>
          ) : isPhysics6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #4f46e5',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(79, 70, 229, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/physics-ch6-electromagnetic-induction-notes-and-numericals.html';
              }}
            >
              <Sparkles size={16} color="#818cf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                ⚡ Ch 6: EMI Notes &amp; Solved Numericals Studio
              </span>
              <span style={{ background: '#4f46e5', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Notes <ArrowRight size={12} />
              </span>
            </div>
          ) : isPhysics7 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #4f46e5',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(79, 70, 229, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/physics-ch7-alternating-current-fill-in-the-blanks.html';
              }}
            >
              <Sparkles size={16} color="#818cf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                ⚡ Ch 7: AC Page-Wise Fill-ups (Pages 177–200)
              </span>
              <span style={{ background: '#4f46e5', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Fill-ups <ArrowRight size={12} />
              </span>
            </div>
          ) : isAccountancy3 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #059669',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(5, 150, 105, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/accountancy/accounting-equation-full-problems-notes-solutions.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📊 TS Grewal: Accounting Equation Full Solutions
              </span>
              <span style={{ background: '#059669', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                View Solutions <ArrowRight size={12} />
              </span>
            </div>
          ) : isScience10Ch1 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #ea580c',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(234, 88, 12, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/class10-science-ch1-chemical-reactions-difficult-mcq.html';
              }}
            >
              <Sparkles size={16} color="#f97316" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                ⚗️ Ch 1: Chemical Reactions Difficult MCQ Bank
              </span>
              <span style={{ background: '#ea580c', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Quiz <ArrowRight size={12} />
              </span>
            </div>
          ) : isScience9Ch8 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #4f46e5',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(79, 70, 229, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/chapter-8-journey-inside-the-atom-notes-and-practice.html';
              }}
            >
              <Sparkles size={16} color="#818cf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🔬 Ch 8: Journey Inside the Atom Notes &amp; Practice
              </span>
              <span style={{ background: '#4f46e5', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Notes <ArrowRight size={12} />
              </span>
            </div>
          ) : isMaths8Ch4 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #ea580c',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(234, 88, 12, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/ganita-prakash-ch4-data-handling-mcq.html';
              }}
            >
              <Sparkles size={16} color="#f97316" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📊 Ch 4: Data Handling MCQ Quiz Bank
              </span>
              <span style={{ background: '#ea580c', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Quiz <ArrowRight size={12} />
              </span>
            </div>
          ) : isHindi7Ch1 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #ec4899',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(236, 72, 153, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks.html';
              }}
            >
              <Sparkles size={16} color="#f472b6" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🪶 पाठ १: माँ, कह एक कहानी Fill in the Blanks
              </span>
              <span style={{ background: '#ec4899', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start <ArrowRight size={12} />
              </span>
            </div>
          ) : isExploring7Ch2 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #0284c7',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(2, 132, 199, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/class7-social-science-ch2-understanding-weather-mcq.html';
              }}
            >
              <Sparkles size={16} color="#38bdf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🌤️ Ch 2: Understanding Weather — 25 Bilingual MCQs
              </span>
              <span style={{ background: '#0284c7', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Quiz <ArrowRight size={12} />
              </span>
            </div>
          ) : isExploring7Part2Ch1 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #061e14 0%, #0d1a24 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/class7-social-science-ch1-the-story-of-indian-farming-notes-quiz.html';
              }}
            >
              <Sparkles size={16} color="#34d399" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🌾 Ch 1: The Story of Indian Farming — Notes &amp; 25 Bilingual MCQs
              </span>
              <span style={{ background: '#10b981', color: '#041f14', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isPoorvi7Unit1 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #38bdf8',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(56, 189, 248, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/english-class7-poorvi-unit1-learning-together-mcq.html';
              }}
            >
              <Sparkles size={16} color="#38bdf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🌊 Unit 1: 36 Bilingual MCQs &amp; Blanks Studio
              </span>
              <span style={{ background: '#38bdf8', color: '#000000', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Quiz <ArrowRight size={12} />
              </span>
            </div>
          ) : isAccountancy4 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #f59e0b',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(245, 158, 11, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/navyug-class11-accountancy-exam-solutions.html';
              }}
            >
              <Sparkles size={16} color="#f59e0b" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📑 Navyug Mid-Term Exam (80 Marks Solved)
              </span>
              <span style={{ background: '#f59e0b', color: '#000000', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Solutions <ArrowRight size={12} />
              </span>
            </div>
          ) : isAccountancy5 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/financial-accounting-ch5-bank-reconciliation-statement-studio.html';
              }}
            >
              <Sparkles size={16} color="#34d399" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🏦 Ch 5: Bank Reconciliation Statement (BRS) Studio
              </span>
              <span style={{ background: '#059669', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Launch Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isAccountancy6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/lesson-rectification-of-errors-notes.html';
              }}
            >
              <Sparkles size={16} color="#34d399" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                ⚖️ Ch 6 / 16: Trial Balance &amp; Rectification of Errors Easy Notes (Bilingual)
              </span>
              <span style={{ background: '#059669', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Notes &amp; Quiz <ArrowRight size={12} />
              </span>
            </div>
          ) : isEvs5Ch1 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #14b8a6',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(20, 184, 166, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/evs-ch1-super-senses-fill-in-the-blanks.html';
              }}
            >
              <Sparkles size={16} color="#2dd4bf" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🐾 1. Super Senses — Story Fill in the Blanks
              </span>
              <span style={{ background: '#14b8a6', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start <ArrowRight size={12} />
              </span>
            </div>
          ) : isSantoor5Ch1 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #04AA6D',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(4, 170, 109, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/santoor-class5-ch1-papas-spectacles-solutions.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                👓 1. Papa’s Spectacles — Solved Textbook & Interactive Studio
              </span>
              <span style={{ background: '#04AA6D', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isSantoor5Ch2 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #04AA6D',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(4, 170, 109, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/santoor-class5-ch2-gone-with-the-scooter-solutions.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🏑 2. Gone with the Scooter — Solved Textbook & Interactive Studio
              </span>
              <span style={{ background: '#04AA6D', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isSantoor5Ch3 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #04AA6D',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(4, 170, 109, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/santoor-class5-ch3-the-rainbow-solutions.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🌈 3. The Rainbow — Solved Textbook & Interactive Studio
              </span>
              <span style={{ background: '#04AA6D', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isSantoor5Ch4 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #04AA6D',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(4, 170, 109, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/santoor-class5-ch4-the-wise-parrot-solutions.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🦜 4. The Wise Parrot — Solved Textbook &amp; Interactive Studio
              </span>
              <span style={{ background: '#04AA6D', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isSantoor5Ch6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #04AA6D',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(4, 170, 109, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/santoor-class5-ch6-what-a-tank-worksheet.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                💧 6. What a Tank! — Interactive Worksheet &amp; A5 Print Sheet
              </span>
              <span style={{ background: '#04AA6D', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Worksheet <ArrowRight size={12} />
              </span>
            </div>
          ) : isCuriosity7Ch6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/curiosity-class7-ch6-adolescence-worksheet.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🧬 Ch 6: Adolescence — Interactive Worksheet &amp; A5 Print Sheet (Bilingual)
              </span>
              <span style={{ background: '#10b981', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Worksheet <ArrowRight size={12} />
              </span>
            </div>
          ) : isMaths10Ch8 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #151e3f 100%)',
                border: '1.5px solid #38bdf8',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(56, 189, 248, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/class10-maths-ch8-trigonometry-interactive-studio.html';
              }}
            >
              <Sparkles size={16} color="#38bdf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📐 Ch 8: Trigonometry — Formula Studio &amp; Board Exam MCQs (Bilingual)
              </span>
              <span style={{ background: '#38bdf8', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isMaths5Ch6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #064e3b 100%)',
                border: '1.5px solid #04AA6D',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(4, 170, 109, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/maths-class5-ch6-dairy-farm-worksheet.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🥛 Ch 6: Dairy Farm — Interactive Worksheet &amp; Exercises (Bilingual)
              </span>
              <span style={{ background: '#04AA6D', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Worksheet <ArrowRight size={12} />
              </span>
            </div>
          ) : isMaths4Ch6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #064e3b 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/maths-class4-ch6-measuring-fun-worksheet.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📏 Ch 6: Measuring is Fun — Interactive Activity Worksheet (Bilingual)
              </span>
              <span style={{ background: '#10b981', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Activity <ArrowRight size={12} />
              </span>
            </div>
          ) : isGanita7Ch5 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #1e1b4b 100%)',
                border: '1.5px solid #38bdf8',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(56, 189, 248, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/ganita-class7-ch5-parallel-intersecting-lines-mcq.html';
              }}
            >
              <Sparkles size={16} color="#38bdf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📐 Ch 5: Parallel &amp; Intersecting Lines — Geometry MCQs &amp; Lab (Bilingual)
              </span>
              <span style={{ background: '#38bdf8', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Practice MCQs <ArrowRight size={12} />
              </span>
            </div>
          ) : isMaths3Ch6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #064e3b 100%)',
                border: '1.5px solid #04AA6D',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(4, 170, 109, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/maths-class3-ch6-house-of-hundreds-worksheet.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🏠 Ch 6: House of Hundreds — Interactive Activity Worksheet (Bilingual)
              </span>
              <span style={{ background: '#04AA6D', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Worksheet <ArrowRight size={12} />
              </span>
            </div>
          ) : isGanita7Ch6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #38bdf8',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(56, 189, 248, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/ganita-class7-ch6-number-play-mcq.html';
              }}
            >
              <Sparkles size={16} color="#38bdf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🎯 Ch 6: Number Play — 20 High-Yield Exam MCQs &amp; Solutions (Bilingual)
              </span>
              <span style={{ background: '#38bdf8', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Practice MCQs <ArrowRight size={12} />
              </span>
            </div>
          ) : isScience9Ch3 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/science-class9-ch3-tissues-in-action-difficult-mcq.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🔬 Ch 3: Tissues in Action — 20 HOTS Difficult Exam MCQs (Bilingual)
              </span>
              <span style={{ background: '#10b981', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                HOTS MCQs <ArrowRight size={12} />
              </span>
            </div>
          ) : isScience9Ch6 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/science-class9-ch6-how-forces-affect-motion-notes-mcq.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                ⚡ Ch 6: How Forces Affect Motion — Notes &amp; 20 MCQs
              </span>
              <span style={{ background: '#10b981', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Notes &amp; MCQs <ArrowRight size={12} />
              </span>
            </div>
          ) : isScience9Ch7 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #06b6d4',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(6, 182, 212, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/class9-physics-motion-force-numericals-questions.html';
              }}
            >
              <Sparkles size={16} color="#06b6d4" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🚀 Motion Master Studio — Distance, Speed, Accel &amp; Numericals
              </span>
              <span style={{ background: '#06b6d4', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Launch Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isCuriosity7Ch7 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #064e3b 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/curiosity-class7-ch7-heat-transfer-mcq.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🔥 Ch 7: Heat Transfer in Nature — 20 Interactive Exam MCQs &amp; Solutions
              </span>
              <span style={{ background: '#10b981', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start 20 MCQs <ArrowRight size={12} />
              </span>
            </div>
          ) : isCuriosity7Ch9 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #34d399',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(52, 211, 153, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/curiosity-class7-ch9-life-processes-notes.html';
              }}
            >
              <Sparkles size={16} color="#34d399" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🌿 Ch 9: Life Processes in Animals (Digestion &amp; Respiration) Notes
              </span>
              <span style={{ background: '#34d399', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Notes <ArrowRight size={12} />
              </span>
            </div>
          ) : isPolSci12Ch5 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #06152a 0%, #032115 100%)',
                border: '1.5px solid #04AA6D',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(4, 170, 109, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/political-science-class12-ch5-suraksha-interactive-studio.html';
              }}
            >
              <Sparkles size={16} color="#34d399" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🛡️ Ch 5: समकालीन विश्व में सुरक्षा Interactive Studio &amp; Solutions
              </span>
              <span style={{ background: '#04AA6D', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isHistory4 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #4f46e5',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(79, 70, 229, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/history-fill-in-the-blanks.html';
              }}
            >
              <Sparkles size={16} color="#818cf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📜 Ch 4: Thinkers, Beliefs &amp; Buildings Fill-ups
              </span>
              <span style={{ background: '#4f46e5', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start <ArrowRight size={12} />
              </span>
            </div>
          ) : isHistory5 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #4f46e5',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(79, 70, 229, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/history-ch5-travellers-fill-in-the-blanks.html';
              }}
            >
              <Sparkles size={16} color="#818cf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📜 Ch 5: Through the Eyes of Travellers Fill-ups
              </span>
              <span style={{ background: '#4f46e5', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start <ArrowRight size={12} />
              </span>
            </div>
          ) : isChemistry12Ch7 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #38bdf8',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(56, 189, 248, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/chemistry-class12-alcohols-phenols-ethers-page3-6.html?class=12&subject=c12-chemistry&book=part-2';
              }}
            >
              <Sparkles size={16} color="#38bdf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🧪 Unit 7: Pages 3–6 Ethers, IUPAC &amp; 25 Fill-ups Studio
              </span>
              <span style={{ background: '#38bdf8', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Studio <ArrowRight size={12} />
              </span>
            </div>
          ) : isScience10Ch5 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #10b981',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/class10-science-ch5-life-processes-mcq-quiz.html';
              }}
            >
              <Sparkles size={16} color="#10b981" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                🌿 Unit 5: Life Processes 20 High-Yield MCQs Quiz
              </span>
              <span style={{ background: '#10b981', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Quiz <ArrowRight size={12} />
              </span>
            </div>
          ) : isScience10Ch9 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #06b6d4',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(6, 182, 212, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/class10-science-ch9-light-reflection-refraction-mcq-quiz.html';
              }}
            >
              <Sparkles size={16} color="#06b6d4" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                ⚡ Unit 9: Light Reflection &amp; Refraction 20 MCQs Quiz
              </span>
              <span style={{ background: '#06b6d4', color: '#060c18', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Start Quiz <ArrowRight size={12} />
              </span>
            </div>
          ) : isPhysics1 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #0284c7',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(2, 132, 199, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/physics-class12-ch1-all-derivations-studio.html?class=12&subject=c12-physics&book=part-1';
              }}
            >
              <Sparkles size={16} color="#38bdf8" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                ⚡ Ch 1: All 14 Derivations Master Studio
              </span>
              <span style={{ background: '#0284c7', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Derivations <ArrowRight size={12} />
              </span>
            </div>
          ) : isPhysics2 ? (
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 300,
                background: 'linear-gradient(135deg, #0c1328 0%, #070e1e 100%)',
                border: '1.5px solid #06b6d4',
                borderRadius: '9999px',
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(6, 182, 212, 0.45)',
                cursor: 'pointer',
                maxWidth: '92%'
              }}
              onClick={() => {
                window.location.href = '/physics-class12-ch2-all-derivations-studio.html?class=12&subject=c12-physics&book=part-1';
              }}
            >
              <Sparkles size={16} color="#06b6d4" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.84rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                ⚡ Ch 2: All 18 Derivations Master Studio
              </span>
              <span style={{ background: '#0284c7', color: '#ffffff', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                Open Derivations <ArrowRight size={12} />
              </span>
            </div>
          ) : null}
        </div>
      ) : (
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', background: 'var(--bg-primary)' }}>
          <div style={{ maxWidth: '560px', margin: '1rem auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Main PDF Document Hub Card */}
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              padding: '32px 24px',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-card)'
            }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(79, 70, 229, 0.08)',
                color: '#4f46e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                border: '1px solid rgba(79, 70, 229, 0.3)'
              }}>
                <FileText size={36} />
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(79, 70, 229, 0.08)', color: '#4f46e5', padding: '4px 14px', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '12px' }}>
                <CheckCircle2 size={14} /> {blobUrl ? 'Stored in Local IndexedDB' : 'Google Drive Cloud PDF'}
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-primary)', margin: '4px 0 8px' }}>
                Unit {chapter.chapterNumber}: {chapter.title}
              </h2>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 1.75rem' }}>
                Official NCERT Class Textbook Document ({filename})
              </p>

              {/* Direct Open PDF Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => setViewMode('EMBED')}
                  className="btn btn-primary"
                  style={{
                    padding: '14px 24px',
                    borderRadius: '12px',
                    fontWeight: 900,
                    fontSize: '0.98rem'
                  }}
                >
                  <Eye size={20} /> View in Embedded In-App Reader
                </button>

                <button
                  onClick={() => {
                    window.open(activePdfSrc, '_blank', 'noopener,noreferrer');
                  }}
                  className="btn btn-outline"
                  style={{
                    padding: '13px 24px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '0.92rem'
                  }}
                >
                  <ExternalLink size={18} /> Open in Google Drive / Full Screen ↗
                </button>

                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = driveDownloadUrl;
                    link.download = filename;
                    link.click();
                  }}
                  className="btn btn-outline"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '0.9rem'
                  }}
                >
                  <Download size={18} /> Download PDF File to Device
                </button>
              </div>
            </div>

            {/* Interactive Test Suite Cards under PDF Hub */}
            {isEconomics11 && (
              <div
                onClick={() => {
                  if (onOpenEconomicsTest) onOpenEconomicsTest();
                  else window.location.href = '/?view=class11-economics-test';
                }}
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: '16px',
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.15)',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                    Class 11 Economics • keec1
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>IN Hinglish + English</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: '0 0 6px' }}>
                  Indian Economic Development: Chapters 1 &amp; 2 Mega Test
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted, #cbd5e1)', margin: 0, lineHeight: 1.5 }}>
                  30 high-yield questions on Eve of Independence &amp; 1950–1990 Planning, Land Reforms, Green Revolution &amp; IPR 1956 with detailed Hinglish solutions.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.84rem', fontWeight: 800 }}>
                    <span>Start Practice / Timed Exam</span>
                    <ArrowRight size={15} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <a
                      href="/class11-economics-ch1-ch2-printable-question-paper.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        color: '#10b981',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      title="Open A4 PDF Printable Format (MCQ)"
                    >
                      🖨️ MCQ Paper
                    </a>
                    <a
                      href="/class11-economics-ch1-ch2-fill-in-the-blanks-laser-print.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: 'rgba(56, 189, 248, 0.15)',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        color: '#38bdf8',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      title="Open B&W Laser Printable Fill in the Blanks Sheet"
                    >
                      📝 Laser Blanks
                    </a>
                  </div>
                </div>
              </div>
            )}

            {isStats11 && (
              <div
                onClick={() => {
                  if (onOpenStatsTest) onOpenStatsTest();
                  else window.location.href = '/?view=class11-stats-test';
                }}
                style={{
                  background: 'rgba(4, 170, 109, 0.08)',
                  border: '1px solid rgba(4, 170, 109, 0.35)',
                  borderRadius: '16px',
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 16px rgba(4, 170, 109, 0.15)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#04AA6D', background: 'rgba(4, 170, 109, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                    Class 11 Economics • kest1dd
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>IN Hinglish + English</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: '0 0 6px' }}>
                  Statistics: Chapters 1–4 Mega Test
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted, #cbd5e1)', margin: 0, lineHeight: 1.5 }}>
                  30 high-yield questions on Intro, Data Collection, Organisation &amp; Presentation with detailed Hinglish solutions.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#04AA6D', fontSize: '0.84rem', fontWeight: 800 }}>
                    <span>Start Practice / Timed Exam</span>
                    <ArrowRight size={15} />
                  </div>
                  <a
                    href="/class11-statistics-ch1-ch2-ch3-numerical-test-paper.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      color: '#10b981',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    title="Open 4-Page A4 Numerical Question Paper (PDF Printable)"
                  >
                    🖨️ 4-Page PDF Paper
                  </a>
                </div>
              </div>
            )}

            {isChemistry12Ch6 && (
              <div
                onClick={() => {
                  window.location.href = '/class12-chemistry-ch1-haloalkanes-board-test-paper.html';
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.1) 0%, rgba(251, 146, 60, 0.08) 100%)',
                  border: '1.5px solid #f43f5e',
                  borderRadius: '16px',
                  padding: '18px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(244, 63, 94, 0.18)',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f43f5e', background: 'rgba(244, 63, 94, 0.18)', padding: '3px 10px', borderRadius: '6px' }}>
                    Class 12 Chemistry • lech201
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                    CBSE Board PYQs (2015–2023) ⚡
                  </span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: '0 0 6px' }}>
                  ⚛️ Haloalkanes &amp; Haloarenes: 4-Page CBSE Board Pre-Board Question Paper &amp; Marking Scheme
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted, #cbd5e1)', margin: 0, lineHeight: 1.5 }}>
                  50 Marks • 90 Mins: Section A (Nomenclature &amp; Reasoning), Section B (Preparations &amp; Named Reactions: Darzens, Finkelstein, Swarts, Sandmeyer), Section C (Mechanisms: S<sub>N</sub>1 vs S<sub>N</sub>2, Dow's process, Saytzeff, Grignard), Section D (Conversions) &amp; Complete Teacher Marking Scheme.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f43f5e', fontSize: '0.84rem', fontWeight: 800 }}>
                    <span>Physical A4 Board Paper Format (Print / PDF)</span>
                    <ArrowRight size={15} />
                  </div>
                  <a
                    href="/class12-chemistry-ch1-haloalkanes-board-test-paper.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
                      color: '#ffffff',
                      borderRadius: '8px',
                      padding: '6px 14px',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 2px 8px rgba(244, 63, 94, 0.35)'
                    }}
                    title="Open 4-Page A4 Board Exam Paper (Print / PDF)"
                  >
                    🖨️ Open 4-Page Board Paper
                  </a>
                </div>
              </div>
            )}

            {(isScience9Ch6 || isScience9Ch7) && (
              <div
                onClick={() => {
                  window.location.href = '/class9-science-motion-force-test-hindi.html';
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)',
                  border: '1.5px solid #06b6d4',
                  borderRadius: '16px',
                  padding: '18px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(6, 182, 212, 0.2)',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#06b6d4', background: 'rgba(6, 182, 212, 0.18)', padding: '3px 10px', borderRadius: '6px' }}>
                    Class 9 Science • Ch 6 &amp; 7 (iesc106 / iesc107)
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                    हिंदी माध्यम 4-पृष्ठ टेस्ट + बड़े फॉन्ट ⚡
                  </span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: '0 0 6px' }}>
                  🚀 गति, बल तथा गति के नियम: 4-पृष्ठ इकाई मूल्यांकन टेस्ट पेपर एवं उत्तर कुंजी (50 अंक)
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted, #cbd5e1)', margin: 0, lineHeight: 1.5 }}>
                  बड़ा फॉन्ट आकार, विस्तृत आंकिक कार्यक्षेत्र, स्पष्ट s-t एवं v-t ग्राफिकल विश्लेषण, न्यूटन के गति नियम, F = ma समस्याएं तथा 8-पृष्ठ संपूर्ण शिक्षक समाधान पैक।
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#06b6d4', fontSize: '0.84rem', fontWeight: 800 }}>
                    <span>भौतिक A4 परीक्षा प्रारूप (Print / 4-Page PDF)</span>
                    <ArrowRight size={15} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <a
                      href="/pdf/Test-Templates/Class_9_Science_Motion_and_Force_Test_Hindi.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
                        color: '#ffffff',
                        borderRadius: '8px',
                        padding: '6px 14px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: '0 2px 8px rgba(6, 182, 212, 0.35)'
                      }}
                      title="4-पृष्ठ हिंदी टेस्ट पेपर PDF खोलें"
                    >
                      📥 4-Page Test PDF
                    </a>
                    <a
                      href="/class9-science-motion-force-test-hindi.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid #06b6d4',
                        color: '#06b6d4',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                      title="इंटरैक्टिव वेब ऐप एवं उत्तर कुंजी"
                    >
                      📖 Interactive App &amp; Key
                    </a>
                  </div>
                </div>
              </div>
            )}

            {isLinearEq9 && (
              <div
                onClick={() => {
                  if (onOpenClass9MathsTest) onOpenClass9MathsTest();
                  else window.location.href = '/class9-maths-ch4-ch5-question-paper-40-marks.html';
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(59, 130, 246, 0.08) 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.45)',
                  borderRadius: '16px',
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 16px rgba(14, 165, 233, 0.15)',
                  marginBottom: '12px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                    Class 9 Mathematics ? Chapters 4 &amp; 5
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700 }}>40 Marks CBSE Paper</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 6px' }}>
                  Linear Equations &amp; Euclid Geometry Mega Assessment
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: '0 0 14px', lineHeight: 1.5 }}>
                  20 questions across Sections A?E with 90-min timer, instant auto-grading, rubric marks &amp; step-by-step NCERT solutions.
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#0284c7', color: '#ffffff', padding: '8px 16px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 800 }}>
                  <span>Launch 40-Mark Exam</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            )}

            {isHindiGrammar9 && (
              <div
                onClick={() => {
                  if (onOpenHindiGrammarStudio) onOpenHindiGrammarStudio();
                  else window.location.href = '/hindi-class9-grammar-complete-mastery.html';
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.12) 0%, rgba(190, 18, 60, 0.08) 100%)',
                  border: '1.5px solid #e11d48',
                  borderRadius: '16px',
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 20px rgba(225, 29, 72, 0.25)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f43f5e', background: 'rgba(225, 29, 72, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                    Class 9 Hindi Grammar • संपूर्ण व्याकरण
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 800 }}>Live Interactive Studio ⚡</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: '0 0 6px' }}>
                  🌟 {chapter.title} — संपूर्ण व्याकरण मास्टरक्लास (लाइव समास एक्सप्लोरर व 40 प्रश्न)
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted, #cbd5e1)', margin: 0, lineHeight: 1.5 }}>
                  उपसर्ग-प्रत्यय, 6 प्रकार के समास (विग्रह सहित), 8 प्रकार के वाक्य भेद, अलंकार (शब्दालंकार व अर्थालंकार) + 20 MCQs और 20 रिक्त स्थान पूर्ति।
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f43f5e', fontSize: '0.84rem', fontWeight: 800, marginTop: '14px' }}>
                  <span>Launch Grammar Studio (लाइव व्याकरण अभ्यास)</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            )}

            {isEuclid9 && (
              <div
                onClick={() => {
                  if (onOpenInteractiveEuclid) onOpenInteractiveEuclid(chapter);
                  else window.location.href = '/maths-class9-ch5-euclid-geometry-interactive.html';
                }}
                style={{
                  background: 'rgba(79, 70, 229, 0.08)',
                  border: '1px solid rgba(79, 70, 229, 0.35)',
                  borderRadius: '16px',
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 16px rgba(79, 70, 229, 0.15)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#818cf8', background: 'rgba(79, 70, 229, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                    Class 9 Mathematics • Chapter 5
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>12 Theorems Proofs</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: '0 0 6px' }}>
                  Euclid &amp; Circle Geometry Lab
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted, #cbd5e1)', margin: 0, lineHeight: 1.5 }}>
                  Interactive visual animations, drag-to-measure angles &amp; step-by-step geometric proofs for all 12 theorems.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#818cf8', fontSize: '0.84rem', fontWeight: 800, marginTop: '14px' }}>
                  <span>Launch Geometry Lab</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            )}

            {isHistoryBhaktiMongols && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div
                  onClick={() => {
                    if (onOpenHistoryTest) onOpenHistoryTest();
                    else window.location.href = '/?view=history-competency-test';
                  }}
                  style={{
                    background: 'rgba(234, 88, 12, 0.08)',
                    border: '1px solid rgba(234, 88, 12, 0.35)',
                    borderRadius: '16px',
                    padding: '18px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 16px rgba(234, 88, 12, 0.15)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f97316', background: 'rgba(234, 88, 12, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                      Class 12 &amp; 11 History • lhhs202 &amp; khhs105
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Dynamic Shuffling 🔀</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: '0 0 6px' }}>
                    History: Bhakti–Sufi &amp; Mongols Test
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted, #cbd5e1)', margin: 0, lineHeight: 1.5 }}>
                    15 competency-based questions on Alvars, Nayanars, Chishti Silsila &amp; Genghis Khan’s Yasa / Yam military system.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f97316', fontSize: '0.84rem', fontWeight: 800, marginTop: '14px' }}>
                    <span>Start History Competency Test</span>
                    <ArrowRight size={15} />
                  </div>
                </div>

                <a
                  href="/ncert-class12-history-ch6-line-by-line-mcq.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(234, 88, 12, 0.1)',
                    border: '1px solid rgba(234, 88, 12, 0.35)',
                    color: '#ea580c',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📜 Ch 6: Line-by-Line MCQ Quiz Practice</span>
                </a>
              </div>
            )}

            {isHydrocarbons26 && (
              <div
                onClick={() => {
                  if (onOpenHydrocarbonsTest) onOpenHydrocarbonsTest();
                  else window.location.href = '/?view=hydrocarbons-test';
                }}
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: '16px',
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.15)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '3px 10px', borderRadius: '6px' }}>
                    NIOS Chemistry 313 • Lesson 26
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>24-Page Coverage 🧪</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', margin: '0 0 6px' }}>
                  Hydrocarbons: Alkanes, Alkenes, Alkynes &amp; Benzene
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted, #cbd5e1)', margin: 0, lineHeight: 1.5 }}>
                  20 high-yield questions on Wurtz reaction, Saytzeff rule, Markovnikov/peroxide addition, Ozonolysis &amp; Benzene SEAr.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.84rem', fontWeight: 800, marginTop: '14px' }}>
                  <span>Start Hydrocarbons Test</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            )}

            {isPhysics6 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/physics-ch6-electromagnetic-induction-notes-and-numericals.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚡ Ch 6: EMI Notes &amp; Solved Numericals Studio</span>
                </a>
                <a
                  href="/physics-ch6-electromagnetic-induction-numericals-only.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(2, 132, 199, 0.1)',
                    border: '1px solid rgba(2, 132, 199, 0.35)',
                    color: '#0284c7',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🧲 Ch 6: Numericals-Only Calculation Lab</span>
                </a>
              </div>
            )}

            {isPhysics1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/physics-class12-ch1-all-derivations-studio.html?class=12&subject=c12-physics&book=part-1"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(2, 132, 199, 0.12)',
                    border: '1px solid rgba(2, 132, 199, 0.45)',
                    color: '#0284c7',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚡ Ch 1: Complete Derivations Studio (All 14 Derivations)</span>
                </a>
              </div>
            )}

            {isPhysics2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/physics-class12-ch2-all-derivations-studio.html?class=12&subject=c12-physics&book=part-1"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(6, 182, 212, 0.12)',
                    border: '1px solid rgba(6, 182, 212, 0.45)',
                    color: '#0284c7',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚡ Ch 2: Complete Derivations Studio (All 18 Derivations)</span>
                </a>
              </div>
            )}

            {isPhysics7 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/physics-ch7-alternating-current-fill-in-the-blanks.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚡ Ch 7: AC Page-Wise Fill-ups (Pages 177–200)</span>
                </a>
                <a
                  href="/physics-ch7-numericals-easy-to-difficult.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(2, 132, 199, 0.1)',
                    border: '1px solid rgba(2, 132, 199, 0.35)',
                    color: '#0284c7',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚡ Ch 7: Numericals Easy to Difficult Lab</span>
                </a>
              </div>
            )}

            {isAccountancy3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/navyug-class11-accountancy-exam-solutions.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.12) 100%)',
                    border: '1.5px solid #f59e0b',
                    color: '#f59e0b',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📑 Navyug School Mid-Term Exam (80 Marks Complete Solved Paper)</span>
                </a>
                <a
                  href="/accountancy/accounting-equation-full-problems-notes-solutions.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    color: '#059669',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📊 TS Grewal: Accounting Equation Full Problems &amp; Solutions</span>
                </a>
                <a
                  href="/financial-accounting-ch3-notes-and-numericals.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📖 Ch 3: Recording Transactions Notes &amp; Numericals</span>
                </a>
                <a
                  href="/journal-to-ledger-posting.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(2, 132, 199, 0.1)',
                    border: '1px solid rgba(2, 132, 199, 0.35)',
                    color: '#0284c7',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚖️ Interactive Journal to Ledger Posting Tool</span>
                </a>
              </div>
            )}

            {isAccountancy4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/navyug-class11-accountancy-exam-solutions.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.12) 100%)',
                    border: '1.5px solid #f59e0b',
                    color: '#f59e0b',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📑 Navyug School Mid-Term Exam (80 Marks Complete Solved Paper)</span>
                </a>
                <a
                  href="/financial-accounting-cash-book-numericals-studio.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    color: '#059669',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>💰 Ch 4: Cash Book Numericals Studio</span>
                </a>
                <a
                  href="/financial-accounting-ch4-subsidiary-books.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📑 Ch 4: Subsidiary Books Notes &amp; Practice</span>
                </a>
              </div>
            )}

            {isScience10Ch1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/class10-science-ch1-chemical-reactions-difficult-mcq.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(234, 88, 12, 0.1)',
                    border: '1px solid rgba(234, 88, 12, 0.35)',
                    color: '#ea580c',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚗️ Ch 1: Chemical Reactions Difficult MCQ Bank</span>
                </a>
              </div>
            )}

            {isScience9Ch6 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/science-class9-ch6-how-forces-affect-motion-notes-mcq.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(5, 150, 105, 0.12) 100%)',
                    border: '1.5px solid #10b981',
                    color: '#10b981',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚡ Ch 6: How Forces Affect Motion — Complete Notes &amp; 20 MCQs</span>
                </a>
                <a
                  href="/class9-physics-motion-force-numericals-questions.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.18) 0%, rgba(14, 165, 233, 0.12) 100%)',
                    border: '1.5px solid #06b6d4',
                    color: '#06b6d4',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🚀 Physics Motion &amp; Force Studio — 25 High-Yield Numericals &amp; Problems</span>
                </a>
              </div>
            )}

            {isScience9Ch7 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/class9-physics-motion-force-numericals-questions.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.18) 0%, rgba(14, 165, 233, 0.12) 100%)',
                    border: '1.5px solid #06b6d4',
                    color: '#06b6d4',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🚀 Motion Master Studio — Distance, Speed, Velocity, Acceleration &amp; Numericals</span>
                </a>
              </div>
            )}

            {isCuriosity7Ch7 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/curiosity-class7-ch7-heat-transfer-mcq.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(245, 158, 11, 0.12) 100%)',
                    border: '1.5px solid #10b981',
                    color: '#10b981',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <Sparkles size={16} />
                  <span>🔥 Open Chapter 7: Heat Transfer in Nature (20 Exam MCQs &amp; Solutions)</span>
                </a>
              </div>
            )}

            {isCuriosity7Ch9 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/curiosity-class7-ch9-life-processes-notes.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.18) 0%, rgba(16, 185, 129, 0.12) 100%)',
                    border: '1.5px solid #34d399',
                    color: '#34d399',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🌿 Ch 9: Life Processes in Animals (Digestion &amp; Respiration) Notes</span>
                </a>
              </div>
            )}

            {isScience9Ch8 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/chapter-8-journey-inside-the-atom-notes-and-practice.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🔬 Ch 8: Journey Inside the Atom Notes &amp; Practice</span>
                </a>
                <a
                  href="/chapter-8-journey-inside-the-atom-mcq.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(2, 132, 199, 0.1)',
                    border: '1px solid rgba(2, 132, 199, 0.35)',
                    color: '#0284c7',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚛️ Ch 8: Atom MCQ Question Bank</span>
                </a>
              </div>
            )}

            {isMaths11Ch6 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/class11-maths-permutations-combinations-ch6-difficult-questions.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🔢 Ch 6: Permutations &amp; Combinations Difficult Questions</span>
                </a>
              </div>
            )}

            {isBiology12Ch8 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/class12-biology-ch8-microbes-kids-edition.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    color: '#059669',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🧬 Ch 8: Microbes in Human Welfare Visual Edition</span>
                </a>
                <a
                  href="/bio-notes.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🌱 Biology Comprehensive Notes Studio</span>
                </a>
              </div>
            )}

            {isMaths8Ch4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/ganita-prakash-ch4-data-handling-mcq.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(234, 88, 12, 0.1)',
                    border: '1px solid rgba(234, 88, 12, 0.35)',
                    color: '#ea580c',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📊 Ch 4: Data Handling MCQ Quiz Bank</span>
                </a>
                <a
                  href="/ganita-prakash-ch4-data-handling-numericals-only.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📈 Ch 4: Data Handling Numericals Lab</span>
                </a>
              </div>
            )}

            {isCoordGeom9 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/class9-ganita-manjari-ch1-coordinate-geometry-numericals.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📐 Ch 1: Coordinate Geometry Numericals Studio</span>
                </a>
              </div>
            )}

            {isNiosMath1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/nios-math-ch1-number-systems-fill-in-the-blanks.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    color: '#d97706',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🔢 NIOS Math Ch 1: Number Systems Fill-in-the-Blanks</span>
                </a>
                <a
                  href="/nios-math-ch1-numericals-only-fill-in-the-blanks.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.1)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🧮 NIOS Math Ch 1: Numericals Lab</span>
                </a>
              </div>
            )}

            {isHindi7Ch1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(236, 72, 153, 0.12)',
                    border: '1px solid rgba(236, 72, 153, 0.4)',
                    color: '#ec4899',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🪶 पाठ १: माँ, कह एक कहानी Fill in the Blanks</span>
                </a>
              </div>
            )}

            {isExploring7Ch2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/class7-social-science-ch2-understanding-weather-mcq.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(2, 132, 199, 0.12)',
                    border: '1.5px solid rgba(2, 132, 199, 0.45)',
                    color: '#38bdf8',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(2, 132, 199, 0.18)'
                  }}
                >
                  <span>🌤️ Ch 2: Understanding the Weather — 25 Bilingual MCQs Bank (English &amp; हिन्दी)</span>
                </a>
              </div>
            )}

            {isExploring7Part2Ch1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/class7-social-science-ch1-the-story-of-indian-farming-notes-quiz.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.12) 100%)',
                    border: '1.5px solid #10b981',
                    color: '#34d399',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(16, 185, 129, 0.22)'
                  }}
                >
                  <span>🌾 Ch 1: The Story of Indian Farming Master Notes &amp; 25 Bilingual MCQs (English &amp; हिन्दी)</span>
                </a>
              </div>
            )}

            {isPoorvi7Unit1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/english-class7-poorvi-unit1-learning-together-mcq.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(16, 185, 129, 0.15) 100%)',
                    border: '1.5px solid #38bdf8',
                    color: '#38bdf8',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(56, 189, 248, 0.25)'
                  }}
                >
                  <span>🌊 Unit 1: Learning Together — 36 Bilingual MCQs &amp; Blanks Studio (gepr101)</span>
                </a>
                <a
                  href="/class6-7-english-comprehension-passage.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.12) 100%)',
                    border: '1.5px solid #f59e0b',
                    color: '#f59e0b',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(245, 158, 11, 0.25)'
                  }}
                >
                  <span>🌳 Reading Comprehension: The Mighty Banyan Tree Studio (Bilingual)</span>
                </a>
                <a
                  href="/class6-7-easy-mcq-practice.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(5, 150, 105, 0.12) 100%)',
                    border: '1.5px solid #10b981',
                    color: '#10b981',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(16, 185, 129, 0.25)'
                  }}
                >
                  <span>📝 English Grammar: 30 Easy MCQs Practice (Bilingual)</span>
                </a>
              </div>
            )}

            {isAccountancy6 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/lesson-rectification-of-errors-notes.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(6, 182, 212, 0.22) 100%)',
                    border: '1.5px solid #10b981',
                    color: '#34d399',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(16, 185, 129, 0.22)'
                  }}
                >
                  <span>📖 Ch 6 / 16: Trial Balance &amp; Rectification of Errors Master Notes &amp; 15 MCQs (Bilingual / द्विभाषी)</span>
                </a>
              </div>
            )}

            {isAccountancy5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/Lesson_Bank_Reconciliation_Statement.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(6, 182, 212, 0.22) 100%)',
                    border: '1.5px solid #10b981',
                    color: '#34d399',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(16, 185, 129, 0.22)'
                  }}
                >
                  <span>📖 Ch 5: Bank Reconciliation Statement Master Lesson (Bilingual / द्विभाषी)</span>
                </a>
                <a
                  href="/financial-accounting-ch5-bank-reconciliation-statement-studio.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1.5px solid rgba(16, 185, 129, 0.45)',
                    color: '#34d399',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(16, 185, 129, 0.18)'
                  }}
                >
                  <span>🏦 Ch 5: Bank Reconciliation Statement (BRS) Interactive Studio &amp; Numericals</span>
                </a>
              </div>
            )}

            {isEvs5Ch1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/evs-ch1-super-senses-fill-in-the-blanks.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(20, 184, 166, 0.12)',
                    border: '1px solid rgba(20, 184, 166, 0.4)',
                    color: '#14b8a6',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🐾 1. Super Senses — Story Fill in the Blanks with Hints</span>
                </a>
                <a
                  href="/evs-new-ncert-ch1-water-essence-of-life-fill-in-the-blanks.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    color: '#38bdf8',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>💧 New NCERT 2026: Water — The Essence of Life Fill-ups</span>
                </a>
              </div>
            )}

            {isPolSci12Ch5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/political-science-class12-ch5-suraksha-interactive-studio.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(4, 170, 109, 0.14)',
                    border: '1px solid rgba(4, 170, 109, 0.45)',
                    color: '#04AA6D',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <Sparkles size={16} color="#04AA6D" />
                  <span>🛡️ Ch 5: समकालीन विश्व में सुरक्षा Interactive Studio &amp; Solutions</span>
                </a>
              </div>
            )}

            {isHistory4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/history-fill-in-the-blanks.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.12)',
                    border: '1px solid rgba(79, 70, 229, 0.4)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📜 Ch 4: Thinkers, Beliefs &amp; Buildings Paragraph Fill-ups</span>
                </a>
              </div>
            )}

            {isHistory5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/history-ch5-travellers-fill-in-the-blanks.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(79, 70, 229, 0.12)',
                    border: '1px solid rgba(79, 70, 229, 0.4)',
                    color: '#4f46e5',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📜 Ch 5: Through the Eyes of Travellers Paragraph Fill-ups</span>
                </a>
              </div>
            )}

            {isHistoryPart1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/history-class12-part1-all-chapters-80-mcqs.html?class=12&subject=c12-history&book=part-1"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.16) 0%, rgba(245, 158, 11, 0.16) 100%)',
                    border: '1px solid rgba(234, 88, 12, 0.45)',
                    color: '#f97316',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(234, 88, 12, 0.18)'
                  }}
                >
                  <Sparkles size={16} />
                  <span>👑 Part-I (Themes 1–4): 80-MCQs Master Competency Test</span>
                </a>
                <a
                  href="/cbse-class12-history-pyq-2024-solved-hindi.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(234, 88, 12, 0.18) 100%)',
                    border: '1px solid rgba(245, 158, 11, 0.45)',
                    color: '#fbbf24',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 900,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(245, 158, 11, 0.18)'
                  }}
                >
                  <span>📜 CBSE 2024 सम्पूर्ण हल प्रश्न-पत्र (कोड: 61/4/2 हिंदी)</span>
                </a>
              </div>
            )}

            {isHistory6 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/ncert-class12-history-ch6-bhakti-sufi-traditions-bilingual-quiz.html?class=12&subject=c12-history&book=part-2"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(234, 88, 12, 0.12)',
                    border: '1px solid rgba(234, 88, 12, 0.4)',
                    color: '#ea580c',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🛕 Bhakti–Sufi Traditions: Bilingual Interactive Quiz</span>
                </a>
                <a
                  href="/ncert-class12-history-ch6-line-by-line-mcq.html?class=12&subject=c12-history&book=part-2"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    color: '#38bdf8',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>⚡ Bhakti–Sufi Line-by-Line NCERT MCQs</span>
                </a>
              </div>
            )}

            {isHistory7 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/history-class12-ch7-vijayanagara-page-by-page-notes-mcq.html?class=12&subject=c12-history&book=part-2"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(56, 189, 248, 0.14) 100%)',
                    border: '1px solid rgba(16, 185, 129, 0.45)',
                    color: '#10b981',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🏛️ Theme 7 (Vijayanagara): Page-by-Page Notes &amp; MCQs</span>
                </a>
              </div>
            )}

            {isChemistry12Ch7 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/chemistry-class12-alcohols-phenols-ethers-page3-6.html?class=12&subject=c12-chemistry&book=part-2"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.16) 0%, rgba(168, 85, 247, 0.14) 100%)',
                    border: '1px solid rgba(56, 189, 248, 0.45)',
                    color: '#38bdf8',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(56, 189, 248, 0.18)'
                  }}
                >
                  <span>🧪 Unit 7 (Pages 3–6): Ethers, IUPAC &amp; 25 Fill-in-the-Blanks Studio</span>
                </a>
                <a
                  href="/chemistry-class12-alcohols-phenols-ethers-page1-2.html?class=12&subject=c12-chemistry&book=part-2"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    color: '#10b981',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>🔬 Unit 7 (Pages 1–2): Classification &amp; Nomenclature Foundation</span>
                </a>
              </div>
            )}

            {isScience10Ch5 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/class10-science-ch5-life-processes-mcq-quiz.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.14) 100%)',
                    border: '1px solid rgba(16, 185, 129, 0.45)',
                    color: '#34d399',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(16, 185, 129, 0.18)'
                  }}
                >
                  <span>🌿 Unit 5: Life Processes 20 High-Yield MCQs Practice Quiz</span>
                </a>
              </div>
            )}

            {isScience10Ch9 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="/class10-science-ch9-light-reflection-refraction-mcq-quiz.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.16) 0%, rgba(2, 132, 199, 0.14) 100%)',
                    border: '1px solid rgba(6, 182, 212, 0.45)',
                    color: '#38bdf8',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(6, 182, 212, 0.18)'
                  }}
                >
                  <span>⚡ Unit 9: Light Reflection &amp; Refraction 20 MCQs Quiz</span>
                </a>
                <a
                  href="/class10-science-ch9-light-reflection-refraction-notes-numericals.html"
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    color: '#10b981',
                    borderRadius: '12px',
                    padding: '12px 18px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  <span>📖 Complete Topic Notes, Ray Rules &amp; Solved Numericals Studio</span>
                </a>
              </div>
            )}

            {/* NEP Highlights Info Box */}
            <div style={{
              background: 'var(--bg-card)',
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              lineHeight: 1.6
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#4f46e5', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} /> Rationalized NEP Curriculum Focus
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {chapter.nepHighlights}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
