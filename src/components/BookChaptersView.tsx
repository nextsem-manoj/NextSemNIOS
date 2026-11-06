import React, { useState } from 'react';
import { 
  ArrowLeft, Download, Eye, HardDriveDownload, Bookmark, FolderOpen, 
  FileText, ArrowRight 
} from 'lucide-react';
import type { Chapter } from '../data/ncertData';
import { savePdfBlobToDB } from '../utils/pdfStorage';
import { 
  SHARED_NCERT_DRIVE_FOLDER_ID, 
  SHARED_NCERT_DRIVE_FOLDER_URL, 
  getDriveDownloadUrl 
} from '../utils/googleDriveHelper';

export function getOfficialNcertPdfUrl(ch: Chapter, bookTitle?: string): string {
  const titleUpper = (bookTitle || '').toUpperCase();
  const isExemplar = titleUpper.includes('EXEMPLAR');
  const isPart2 = titleUpper.includes('PART-II') || titleUpper.includes('PART 2');

  let subjectPrefix = 'mh';
  if (titleUpper.includes('KALEIDOSCOPE') || ch.id.includes('kaleidoscope') || ch.id.includes('lekl')) {
    subjectPrefix = 'kl';
  } else if (titleUpper.includes('VISTAS') || ch.id.includes('vistas') || ch.id.includes('levt')) {
    subjectPrefix = 'vt';
  } else if (titleUpper.includes('PHYSIC') || ch.id.includes('-p-')) {
    subjectPrefix = 'ph';
  } else if (titleUpper.includes('CHEMIS') || ch.id.includes('-chem-')) {
    subjectPrefix = 'ch';
  } else if (titleUpper.includes('BIOLOG') || ch.id.includes('-bio-')) {
    subjectPrefix = 'bo';
  } else if (titleUpper.includes('COMPUT') || ch.id.includes('-cs-')) {
    subjectPrefix = 'cs';
  } else if (titleUpper.includes('FLAMINGO') || ch.id.includes('-eng-') || titleUpper.includes('ENGLI')) {
    subjectPrefix = 'fl';
  } else if (titleUpper.includes('ACCOUN') || ch.id.includes('-acc-')) {
    subjectPrefix = 'ac';
  } else if (titleUpper.includes('BUSINESS') || ch.id.includes('-bs-')) {
    subjectPrefix = 'bs';
  } else if (titleUpper.includes('ECONOM') || ch.id.includes('-eco-')) {
    subjectPrefix = 'ec';
  }

  if (isExemplar) {
    const code = ch.chapterNumber < 10 ? `0${ch.chapterNumber}` : `${ch.chapterNumber}`;
    if (subjectPrefix === 'ph') {
      return `https://ncert.nic.in/pdf/publication/exemplarproblem/classXII/physics/leep1${code}.pdf`;
    }
    if (subjectPrefix === 'bo') {
      return `https://ncert.nic.in/pdf/publication/exemplarproblem/classXII/biology/leep4${code}.pdf`;
    }
    if (subjectPrefix === 'ch') {
      return `https://ncert.nic.in/pdf/publication/exemplarproblem/classXII/chemistry/leep5${code}.pdf`;
    }
    return `https://ncert.nic.in/pdf/publication/exemplarproblem/classXII/mathematics/leep2${code}.pdf`;
  }

  if (ch.officialPdfUrl) return ch.officialPdfUrl;

  if (ch.officialBookCode) {
    let chNum = ch.chapterNumber;
    if (ch.officialBookCode === 'lemh2' && chNum >= 7) chNum = chNum - 6;
    if (ch.officialBookCode === 'leph2' && chNum >= 9) chNum = chNum - 8;
    if (ch.officialBookCode === 'lech2' && chNum >= 6) chNum = chNum - 5;
    if (ch.officialBookCode === 'leac2' && chNum >= 5) chNum = chNum - 4;
    if (ch.officialBookCode === 'lebs2' && chNum >= 9) chNum = chNum - 8;
    if (ch.officialBookCode === 'leec2' && chNum >= 7) chNum = chNum - 6;
    if (ch.officialBookCode === 'keph2' && chNum >= 8) chNum = chNum - 7;
    if (ch.officialBookCode === 'kech2' && chNum >= 7) chNum = chNum - 6;
    if (ch.officialBookCode === 'keac2' && chNum >= 8) chNum = chNum - 7;
    if (ch.officialBookCode === 'keec2' && chNum >= 7) chNum = chNum - 6;
    if ((ch.officialBookCode === 'lehs2' || ch.officialBookCode === 'lhhs2') && chNum >= 5) chNum = chNum - 4;
    if ((ch.officialBookCode === 'lehs3' || ch.officialBookCode === 'lhhs3') && chNum >= 9) chNum = chNum - 8;

    const code = chNum < 10 ? `0${chNum}` : `${chNum}`;
    return `https://ncert.nic.in/textbook/pdf/${ch.officialBookCode}${code}.pdf`;
  }

  let partNum = '1';
  if (isPart2 || ch.officialBookCode?.includes('2')) {
    partNum = '2';
  } else if (subjectPrefix === 'mh' && ch.chapterNumber >= 7) {
    partNum = '2';
  } else if (subjectPrefix === 'ph' && ch.chapterNumber >= 9) {
    partNum = '2';
  } else if (subjectPrefix === 'ch' && ch.chapterNumber >= 6) {
    partNum = '2';
  } else if (subjectPrefix === 'ac' && ch.chapterNumber >= 5) {
    partNum = '2';
  } else if (subjectPrefix === 'bs' && ch.chapterNumber >= 9) {
    partNum = '2';
  } else if (subjectPrefix === 'ec' && ch.chapterNumber >= 7) {
    partNum = '2';
  }

  let chNum = ch.chapterNumber;
  if (partNum === '2') {
    if (subjectPrefix === 'mh' && chNum >= 7) chNum = chNum - 6;
    if (subjectPrefix === 'ph' && chNum >= 9) chNum = chNum - 8;
    if (subjectPrefix === 'ch' && chNum >= 6) chNum = chNum - 5;
    if (subjectPrefix === 'ac' && chNum >= 5) chNum = chNum - 4;
    if (subjectPrefix === 'bs' && chNum >= 9) chNum = chNum - 8;
    if (subjectPrefix === 'ec' && chNum >= 7) chNum = chNum - 6;
  }

  const code = chNum < 10 ? `0${chNum}` : `${chNum}`;
  return `https://ncert.nic.in/textbook/pdf/le${subjectPrefix}${partNum}${code}.pdf`;
}

interface BookChaptersViewProps {
  bookTitle: string;
  chapters: Chapter[];
  onOpenPdfReader?: (chapter: Chapter) => void;
  onOpenInteractiveEuclid?: (chapter: Chapter) => void;
  onOpenClass6MathsWorkbook?: (chapter: Chapter) => void;
  onOpenStatsTest?: () => void;
  onOpenEconomicsTest?: () => void;
  onOpenClass9MathsTest?: () => void;
  onOpenHindiGrammarStudio?: () => void;
  onOpenHistoryTest?: () => void;
  onOpenHydrocarbonsTest?: () => void;
  onBackToBooks: () => void;
  onToggleBookmarkChapter?: (ch: Chapter) => void;
  isChapterBookmarked?: (id: string) => boolean;
}

export const BookChaptersView: React.FC<BookChaptersViewProps> = ({
  bookTitle,
  chapters,
  onOpenPdfReader,
  onOpenInteractiveEuclid,
  onOpenClass6MathsWorkbook,
  onOpenStatsTest,
  onOpenEconomicsTest,
  onOpenClass9MathsTest,
  onOpenHindiGrammarStudio,
  onOpenHistoryTest,
  onOpenHydrocarbonsTest,
  onBackToBooks,
  onToggleBookmarkChapter,
  isChapterBookmarked
}) => {
  const [downloadedIds, setDownloadedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('nextsem_offline_chapters');
    return saved ? JSON.parse(saved) : [];
  });
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'chapters' | 'artwork'>('chapters');

  const handleDownloadOffline = async (ch: Chapter) => {
    setDownloadingId(ch.id);
    
    // Check if chapter has specific file ID or URL
    const hasSpecificFileId = ch.googleDriveFileId && ch.googleDriveFileId !== SHARED_NCERT_DRIVE_FOLDER_ID;
    const driveDownloadUrl = hasSpecificFileId 
      ? getDriveDownloadUrl(ch.googleDriveFileId!)
      : ch.googleDriveUrl && !ch.googleDriveUrl.includes('folders')
        ? getDriveDownloadUrl(ch.googleDriveUrl)
        : null;

    const exactPdfUrl = driveDownloadUrl || getOfficialNcertPdfUrl(ch, bookTitle);
    const updatedCh = { ...ch, officialPdfUrl: exactPdfUrl, googleDriveUrl: ch.googleDriveUrl || SHARED_NCERT_DRIVE_FOLDER_URL };
    localStorage.setItem(`nextsem_offline_ch_${ch.id}`, JSON.stringify(updatedCh));

    try {
      const res = await fetch(exactPdfUrl, { mode: 'cors' });
      if (res.ok) {
        const blob = await res.blob();
        await savePdfBlobToDB(ch.id, blob);
      }
    } catch (e) {
      console.log('Direct CORS fetch failed on NCERT, triggering browser download:', e);
    }

    // Always trigger direct device download so the user has the file locally
    const link = document.createElement('a');
    link.href = exactPdfUrl;
    link.download = `${ch.officialBookCode || 'ncert'}-${ch.chapterNumber}.pdf`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedIds((prev) => {
      const next = [...new Set([...prev, ch.id])];
      localStorage.setItem('nextsem_offline_chapters', JSON.stringify(next));
      return next;
    });
    setDownloadingId(null);
  };

  const activeBookCode = chapters[0]?.officialBookCode || (() => {
    const titleUpper = (bookTitle || '').toUpperCase();
    const isPart2 = titleUpper.includes('PART-II') || titleUpper.includes('PART 2');
    if (titleUpper.includes('KALEIDOSCOPE')) return 'lekl1';
    if (titleUpper.includes('VISTAS')) return 'levt1';
    if (titleUpper.includes('PHYSIC')) return isPart2 ? 'leph2' : 'leph1';
    if (titleUpper.includes('CHEMIS')) return isPart2 ? 'lech2' : 'lech1';
    if (titleUpper.includes('BIOLOG')) return 'lebo1';
    if (titleUpper.includes('COMPUT')) return 'lecs1';
    if (titleUpper.includes('FLAMINGO') || titleUpper.includes('ENGLI')) return 'lefl1';
    if (titleUpper.includes('ACCOUN')) return isPart2 ? 'leac2' : 'leac1';
    if (titleUpper.includes('BUSINESS')) return isPart2 ? 'lebs2' : 'lebs1';
    if (titleUpper.includes('ECONOM')) return isPart2 ? 'leec2' : 'leec1';
    return isPart2 ? 'lemh2' : 'lemh1';
  })();

  const prelimsPdfUrl = `https://ncert.nic.in/textbook/pdf/${activeBookCode}ps.pdf`;
  const officialPortalUrl = `https://ncert.nic.in/textbook.php?${activeBookCode}=0-${chapters.length}`;
  const coverUrl = activeBookCode ? `https://ncert.nic.in/textbook/pdf/${activeBookCode}cc.jpg` : null;

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0.5rem 0 2rem' }}>

      {/* Book Cover Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e3a8a 100%)',
        borderRadius: '18px',
        padding: '18px 20px',
        color: '#ffffff',
        marginBottom: '1.25rem',
        boxShadow: '0 8px 24px rgba(30, 27, 75, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        {onBackToBooks && (
          <button
            onClick={onBackToBooks}
            title="Back to Books"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              borderRadius: '9999px',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.15s ease'
            }}
          >
            <ArrowLeft size={18} />
          </button>
        )}

        {/* Authentic Book Cover Thumbnail */}
        {coverUrl && (
          <img
            src={coverUrl}
            alt={bookTitle}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            style={{
              width: '54px',
              height: '74px',
              objectFit: 'cover',
              borderRadius: '6px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.4)',
              border: '1.5px solid rgba(255, 255, 255, 0.3)',
              flexShrink: 0
            }}
          />
        )}

        <div style={{ flex: 1, minWidth: '200px' }}>
          <div style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.01em', color: '#ffffff', textTransform: 'uppercase' }}>
            {bookTitle}
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '3px', color: '#cbd5e1' }}>
            Rationalized NEP 2026–2027 Edition • {chapters.length} Chapters Available
          </div>
          <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <a
              href={SHARED_NCERT_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: 'rgba(20, 184, 166, 0.22)',
                border: '1px solid #14b8a6',
                color: '#5eead4',
                borderRadius: '9999px',
                padding: '3px 10px',
                fontSize: '0.72rem',
                fontWeight: 800,
                textDecoration: 'none'
              }}
              title="Official Google Drive Cloud Vault for PDFs"
            >
              <span>☁️</span>
              <span>Google Drive: newncert.nextsem@gmail.com</span>
              <span style={{ fontSize: '0.65rem', opacity: 0.8 }}>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Action Controls Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.25rem',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', fontWeight: 800, flexWrap: 'wrap' }}>
          <a
            href={prelimsPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#4f46e5')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            title="Read Preface & Prelims PDF"
          >
            <span>📖 Preface</span>
          </a>
          <span style={{ color: 'var(--text-muted)' }}>•</span>
          <a
            href={officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#4f46e5')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            title="Open NCERT Official Online Reader (ncert.nic.in)"
          >
            <span>🌐 NCERT Portal ({activeBookCode})</span>
          </a>
          <span style={{ color: 'var(--text-muted)' }}>•</span>
          <a
            href={SHARED_NCERT_DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#14b8a6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            title="Direct Access to Google Drive PDF Folder"
          >
            <FolderOpen size={14} style={{ color: '#14b8a6' }} />
            <span>Drive Folder</span>
          </a>
        </div>

        <button
          onClick={() => {
            if (chapters[0] && onOpenPdfReader) {
              onOpenPdfReader(chapters[0]);
            }
          }}
          className="btn btn-primary"
          style={{
            padding: '8px 18px',
            fontSize: '0.85rem'
          }}
        >
          <HardDriveDownload size={16} /> Read Offline
        </button>
      </div>

      {/* View Switcher: Chapters vs Artwork & Covers */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '1rem',
        padding: '4px',
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px'
      }}>
        <button
          type="button"
          onClick={() => setActiveTab('chapters')}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '9px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: '0.82rem',
            transition: 'all 0.2s ease',
            background: activeTab === 'chapters' ? '#4f46e5' : 'transparent',
            color: activeTab === 'chapters' ? '#ffffff' : 'var(--text-muted)'
          }}
        >
          📚 Chapter PDFs ({chapters.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('artwork')}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '9px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: '0.82rem',
            transition: 'all 0.2s ease',
            background: activeTab === 'artwork' ? '#14b8a6' : 'transparent',
            color: activeTab === 'artwork' ? '#ffffff' : 'var(--text-muted)'
          }}
        >
          🖼️ Drive Artwork &amp; Covers (2)
        </button>
      </div>

      {activeTab === 'artwork' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '2rem' }}>
          {/* Card 1: Math Mela Cover */}
          <div className="glass-card" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '14px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '12px'
          }}>
            <img
              src="https://ncert.nic.in/textbook/pdf/eemm1cc.jpg"
              alt="Class 5 Maths Mela Book Cover"
              style={{
                width: '120px',
                height: '165px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
                border: '2px solid rgba(255,255,255,0.2)'
              }}
            />
            <div>
              <div style={{ fontWeight: 900, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                Maths Mela (गणित मेला)
              </div>
              <div style={{ fontSize: '0.74rem', color: '#14b8a6', fontWeight: 800, marginTop: '2px' }}>
                NEP 2024 Edition • Code: eemm1
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '6px 0 0' }}>
                Official National Curriculum Framework textbook cover artwork from Google Drive cloud repository.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', width: '100%', marginTop: 'auto' }}>
              <a
                href="https://ncert.nic.in/textbook/pdf/eemm1cc.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ flex: 1, fontSize: '0.75rem', padding: '7px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <Eye size={13} /> High-Res
              </a>
              <a
                href={SHARED_NCERT_DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ flex: 1, fontSize: '0.75rem', padding: '7px 8px', background: 'rgba(20, 184, 166, 0.15)', border: '1px solid #14b8a6', color: '#14b8a6', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <FolderOpen size={13} /> In Drive ↗
              </a>
            </div>
          </div>

          {/* Card 2: Math-Magic Classic Cover */}
          <div className="glass-card" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '14px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '12px'
          }}>
            <img
              src="https://ncert.nic.in/textbook/pdf/eemh1cc.jpg"
              alt="Class 5 Math-Magic Classic Book Cover"
              style={{
                width: '120px',
                height: '165px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
                border: '2px solid rgba(255,255,255,0.2)'
              }}
            />
            <div>
              <div style={{ fontWeight: 900, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                Math-Magic (गणित का जादू)
              </div>
              <div style={{ fontSize: '0.74rem', color: '#38bdf8', fontWeight: 800, marginTop: '2px' }}>
                Classic NCERT Edition • Code: eemh1
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '6px 0 0' }}>
                Classic NCERT mathematics textbook cover artwork preserved in Google Drive cloud vault.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', width: '100%', marginTop: 'auto' }}>
              <a
                href="https://ncert.nic.in/textbook/pdf/eemh1cc.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ flex: 1, fontSize: '0.75rem', padding: '7px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <Eye size={13} /> High-Res
              </a>
              <a
                href={SHARED_NCERT_DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ flex: 1, fontSize: '0.75rem', padding: '7px 8px', background: 'rgba(20, 184, 166, 0.15)', border: '1px solid #14b8a6', color: '#14b8a6', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
              >
                <FolderOpen size={13} /> In Drive ↗
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* Chapters Rows List */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2rem' }}>
          {chapters.map((ch) => {
          const pdfUrl = getOfficialNcertPdfUrl(ch, bookTitle);
          const isBookmarked = isChapterBookmarked ? isChapterBookmarked(ch.id) : false;
          const titleUpper = (bookTitle || '').toUpperCase();
          const isPhysics = titleUpper.includes('PHYSIC') || ch.id.includes('-p-') || ch.id.includes('leph');
          const isHistory = titleUpper.includes('HIST') || ch.id.includes('khhs') || ch.id.includes('lhhs') || ch.id.includes('lehs') || ch.id.includes('c12-hist') || ch.id.includes('c11-hist');
          const isAccountancy = titleUpper.includes('ACCOUNT') || ch.id.includes('keac') || ch.id.includes('leac');
          const isScience = ((titleUpper.includes('SCIENCE') && !titleUpper.includes('SOCIAL') && !titleUpper.includes('POLITICAL')) || ch.id.includes('jesc') || ch.id.includes('iesc'));
          const isMaths = titleUpper.includes('MATH') || titleUpper.includes('GANITA') || ch.id.includes('iemh') || ch.id.includes('kemh') || ch.id.includes('hemh');
          const isBiology = titleUpper.includes('BIOLOG') || ch.id.includes('lebo');

          // Specific Chapter Flags
          const isStats11 = (ch.officialBookCode === 'kest1' || ch.id.includes('kest1') || titleUpper.includes('STATISTIC') || (titleUpper.includes('ECONOM') && (titleUpper.includes('XI') || titleUpper.includes('11')))) && ch.chapterNumber <= 4;
          const isEconomics11 = ch.officialBookCode === 'keec1' || ch.id.includes('keec1') || ch.id.includes('ied') || ch.officialPdfUrl?.includes('keec1') || (titleUpper.includes('INDIAN ECONOMIC') && (ch.chapterNumber === 1 || ch.chapterNumber === 2)) || ch.title.toLowerCase().includes('eve of independence') || ch.title.toLowerCase().includes('1950–1990') || ch.title.toLowerCase().includes('1950-1990');
          const isEuclid9 = ch.id === 'c9-m-ch5' || (ch.officialBookCode === 'iemh1' && ch.chapterNumber === 5) || (isMaths && (titleUpper.includes('IX') || titleUpper.includes('9')) && ch.chapterNumber === 5);
          const isLinearEq9 = (ch.officialBookCode === 'iemh1' && ch.chapterNumber === 4) || (isMaths && (titleUpper.includes('IX') || titleUpper.includes('9')) && ch.chapterNumber === 4) || ch.id === 'c9-m-ch4';
          const isCoordGeom9 = ch.id === 'c9-m-ch1' || (ch.officialBookCode === 'iemh1' && ch.chapterNumber === 1) || (isMaths && (titleUpper.includes('IX') || titleUpper.includes('9')) && ch.chapterNumber === 1);
          const isDataHandling6 = (ch.id === 'c6-m-ch4' || (ch.officialBookCode === 'fegp1' && ch.chapterNumber === 4) || ((titleUpper.includes('VI') || titleUpper.includes('CLASS 6') || titleUpper.includes('CLASS VI') || ch.id.startsWith('c6-')) && isMaths && (ch.chapterNumber === 4 || ch.title.toLowerCase().includes('data handling')))) && !ch.id.startsWith('c2-') && !titleUpper.includes('CLASS 2') && !titleUpper.includes('CLASS II');
          const isHistoryBhaktiMongols = (ch.officialBookCode === 'lhhs2' && ch.chapterNumber === 2) || (ch.officialBookCode === 'khhs1' && ch.chapterNumber === 5) || ch.id.includes('lhhs202') || ch.id.includes('khhs105') || (isHistory && (ch.chapterNumber === 6 || ch.chapterNumber === 5));
          const isHydrocarbons26 = ch.id.includes('313') || ch.id.includes('hydrocarbon') || (ch.chapterNumber === 26 && (titleUpper.includes('CHEM') || titleUpper.includes('NIOS')));
          const isHindiGrammar9 = ch.id.startsWith('c9-hg-') || ch.id.includes('grammar') || titleUpper.includes('व्याकरण') || titleUpper.includes('GRAMMAR');

          const isPhysics1 = (isPhysics && ch.chapterNumber === 1) || ch.id.includes('leph101') || ch.id === 'c12-p-ch1';
          const isPhysics2 = (isPhysics && ch.chapterNumber === 2) || ch.id.includes('leph102') || ch.id === 'c12-p-ch2';
          const isPhysics6 = (isPhysics && ch.chapterNumber === 6) || ch.id.includes('leph106');
          const isPhysics7 = (isPhysics && ch.chapterNumber === 7) || ch.id.includes('leph107');
          const isAccountancy3 = (isAccountancy && ch.chapterNumber === 3) || ch.id.includes('keac103');
          const isAccountancy4 = (isAccountancy && ch.chapterNumber === 4) || ch.id.includes('keac104');
          const isAccountancy5 = (isAccountancy && ch.chapterNumber === 5) || ch.id.includes('keac105') || ch.title.toLowerCase().includes('reconciliation');
          const isScience10Ch1 = (ch.id === 'c10-sci-ch1' || ch.id.includes('jesc101') || (isScience && ch.chapterNumber === 1 && (titleUpper.includes('CLASS 10') || titleUpper.includes('CLASS X') || titleUpper.includes('(X)'))));
          const isScience10Ch5 = (ch.id === 'c10-s-ch5' || ch.id.includes('jesc105') || (isScience && ch.chapterNumber === 5 && (titleUpper.includes('CLASS 10') || titleUpper.includes('CLASS X') || titleUpper.includes('(X)'))));
          const isPoliticalScienceCh7 = (ch.id === 'c12-pol-ch7' || ch.id.includes('lhps107') || (ch.officialBookCode === 'lhps1' && ch.chapterNumber === 7));
          const isScience10Ch9 = (ch.id === 'c10-s-ch9' || ch.id.includes('jesc109') || (isScience && ch.chapterNumber === 9 && (titleUpper.includes('CLASS 10') || titleUpper.includes('CLASS X') || titleUpper.includes('(X)') || titleUpper.includes('SCIENCE'))));
          const isSocSci7Ch1 = ch.id === 'c7-soc-ch1' || (ch.officialBookCode === 'gess1' && ch.chapterNumber === 1) || (titleUpper.includes('EXPLORING') && ch.chapterNumber === 1 && (titleUpper.includes('7') || titleUpper.includes('VII')));
          const isSocSci8Ch1 = ch.id === 'c8-soc-ch1' || (ch.officialBookCode === 'hess1' && ch.chapterNumber === 1) || (titleUpper.includes('EXPLORING') && ch.chapterNumber === 1 && (titleUpper.includes('8') || titleUpper.includes('VIII')));
          const isScience9Ch8 = (isScience && ch.chapterNumber === 8 && (titleUpper.includes('9') || titleUpper.includes('IX'))) || ch.id.includes('iesc108');
          const isMaths11Ch6 = (isMaths && ch.chapterNumber === 6 && (titleUpper.includes('11') || titleUpper.includes('XI'))) || ch.id.includes('kemh106');
          const isBiology12Ch8 = (isBiology && ch.chapterNumber === 8 && (titleUpper.includes('12') || titleUpper.includes('XII'))) || ch.id.includes('lebo108');
          const isMaths8Ch4 = (isMaths && ch.chapterNumber === 4 && (titleUpper.includes('8') || titleUpper.includes('VIII') || titleUpper.includes('PRAKASH'))) || ch.id.includes('hemh104');
          const isNiosMath1 = (titleUpper.includes('NIOS') && isMaths && ch.chapterNumber === 1) || ch.id.includes('nios-211-1');
          const isHistoryPart1 = (isHistory && ch.chapterNumber === 1 && (titleUpper.includes('PART-I') || titleUpper.includes('PART 1') || titleUpper.includes('XII') || titleUpper.includes('12'))) || ch.officialBookCode === 'lehs1' || ch.officialBookCode === 'lhhs1';
          const isHistory4 = (isHistory && ch.chapterNumber === 4) || ch.id.includes('lhhs104');
          const isHistory5 = (isHistory && ch.chapterNumber === 5) || ch.id.includes('lhhs201');
          const isHistory6 = (isHistory && ch.chapterNumber === 6) || ch.id.includes('lhhs202') || (ch.officialBookCode === 'lhhs2' && ch.chapterNumber === 2);
          const isHistory7 = (isHistory && ch.chapterNumber === 7) || ch.id.includes('lhhs203') || (ch.officialBookCode === 'lhhs2' && ch.chapterNumber === 3) || ch.title.toLowerCase().includes('vijayanagara') || ch.title.includes('विजयनगर');
          const isHindi7Ch1 = ch.id === 'c7-hin-ch1' || (ch.officialBookCode === 'ghin1' && ch.chapterNumber === 1);
          const isMaths8Ch7 = ch.id === 'c8-m-ch7' || ch.id.includes('hegp107') || ((isMaths || titleUpper.includes('MATH') || titleUpper.includes('GANITA')) && ch.chapterNumber === 7 && (titleUpper.includes('CLASS 8') || titleUpper.includes('CLASS VIII') || ch.id.startsWith('c8-'))) || ch.title.toLowerCase().includes('proportional reasoning');
          const isEvs5Ch1 = ch.id === 'c5-evs-ch1' || (ch.officialBookCode === 'ehap1' && ch.chapterNumber === 1);
          const isMaths6Ch6 = ch.id === 'c6-m-ch6' || ch.id.includes('fegp106') || ((isMaths || titleUpper.includes('MATH') || titleUpper.includes('GANITA')) && ch.chapterNumber === 6 && (titleUpper.includes('CLASS 6') || titleUpper.includes('CLASS VI') || ch.id.startsWith('c6-')));
          const isScience6Ch6 = ch.id === 'c6-sci-ch6' || ch.id.includes('fhcu106') || ch.id.includes('fesc106') || ((isScience || titleUpper.includes('SCIENCE') || titleUpper.includes('JIGYASA') || titleUpper.includes('CURIOSITY')) && ch.chapterNumber === 6 && (titleUpper.includes('CLASS 6') || titleUpper.includes('CLASS VI') || ch.id.startsWith('c6-')));
          const isMaths5Ch6 = ch.id === 'c5-m-ch6' || ch.id.includes('eemm106') || ch.id.includes('eemh106') || ((isMaths || titleUpper.includes('MATH')) && ch.chapterNumber === 6 && (titleUpper.includes('CLASS 5') || titleUpper.includes('CLASS V') || ch.id.startsWith('c5-')));
          const isMaths3Ch6 = ch.id === 'c3-m-ch6' || ch.id.includes('cemm106') || ((isMaths || titleUpper.includes('MATH')) && ch.chapterNumber === 6 && (titleUpper.includes('CLASS 3') || titleUpper.includes('CLASS III') || ch.id.startsWith('c3-')));
          const isMaths2Ch6 = ch.id === 'c2-m-ch6' || ch.id.includes('bejm106') || ((isMaths || titleUpper.includes('MATH')) && ch.chapterNumber === 6 && (titleUpper.includes('CLASS 2') || titleUpper.includes('CLASS II') || ch.id.startsWith('c2-')));
          const isSantoor5Ch6 = ch.id === 'c5-santoor-ch6' || ch.id.includes('eesa106') || (ch.officialBookCode === 'eesa1' && ch.chapterNumber === 6);
          const isCuriosity7Ch6 = ch.id === 'c7-sci-ch6' || ch.id.includes('gecu106') || (ch.officialBookCode === 'gecu1' && ch.chapterNumber === 6) || ch.title.toLowerCase().includes('adolescence');
          const isGanita7Ch6 = ch.id === 'c7-mat-ch6' || ch.id.includes('gegp106') || (ch.officialBookCode === 'gegp1' && ch.chapterNumber === 6) || ch.title.toLowerCase().includes('number play');
          const isScience9Ch3 = ch.id === 'c9-s-ch3' || ch.id.includes('iesc103') || (ch.officialBookCode === 'iesc1' && ch.chapterNumber === 3) || ch.title.toLowerCase().includes('tissues in action');
          const isChemistry = titleUpper.includes('CHEMIS') || ch.id.includes('-chem-') || ch.id.includes('lech') || ch.id.includes('kech');
          const isChemistry12Ch7 = (isChemistry && ch.chapterNumber === 7) || ch.id.includes('lech202') || ch.id === 'c12-chem-ch7';
          const isExploring7Ch2 = ch.id === 'c7-soc-ch2' || ch.id.includes('gees102') || (ch.officialBookCode === 'gees1' && ch.chapterNumber === 2) || (titleUpper.includes('EXPLORING') && ch.chapterNumber === 2) || ch.title.toLowerCase().includes('weather');
          const isExploring7Part2Ch1 = ch.id === 'c7-soc-part2-ch1' || ch.id.includes('gees201') || (ch.officialBookCode === 'gees2' && ch.chapterNumber === 1) || ch.title.toLowerCase().includes('farming') || ch.title.includes('कृषि');
          const isPoorvi7Unit1 = ch.id === 'c7-eng-u1' || ch.id.includes('gepr101') || (ch.officialBookCode === 'gepr1' && ch.chapterNumber === 1) || ch.title.toLowerCase().includes('learning together') || ch.title.toLowerCase().includes('river spoke');
          const isScience9Ch6 = ch.id === 'c9-s-ch6' || ch.id.includes('iesc106') || (ch.officialBookCode === 'iesc1' && ch.chapterNumber === 6) || ch.title.toLowerCase().includes('forces affect motion') || (isScience && ch.chapterNumber === 6 && (titleUpper.includes('9') || titleUpper.includes('IX')));
          const isScience9Ch7 = ch.id === 'c9-s-ch7' || ch.id.includes('iesc107') || (ch.officialBookCode === 'iesc1' && ch.chapterNumber === 7) || (isScience && ch.chapterNumber === 7 && (titleUpper.includes('9') || titleUpper.includes('IX'))) || ch.title.toLowerCase() === 'motion';
          const isCuriosity7Ch9 = ch.id === 'c7-sci-ch9' || ch.id.includes('gecu109') || (ch.officialBookCode === 'gecu1' && ch.chapterNumber === 9) || (isScience && (titleUpper.includes('7') || titleUpper.includes('VII') || titleUpper.includes('CURIOSITY')) && ch.chapterNumber === 9);
          const isCuriosity7Ch7 = ch.id === 'c7-sci-ch7' || ch.id.includes('gecu107') || (ch.officialBookCode === 'gecu1' && ch.chapterNumber === 7) || ch.title.toLowerCase().includes('heat transfer');
          const isClass1 = ch.id.startsWith('c1-') || ch.officialBookCode === 'aemr1' || ch.officialBookCode === 'aejm1' || ch.officialBookCode === 'ahsr1' || titleUpper.includes('CLASS 1') || titleUpper.includes('CLASS I') || titleUpper.includes('MRIDANG') || titleUpper.includes('SARANGI') || titleUpper.includes('JOYFUL');

          // Extract unit information if present in title for Class 1
          const unitMatch = ch.title.match(/\((Unit\s*\d+[^)]*|इकाई\s*\d+[^)]*)\)/i);
          const unitBadgeText = unitMatch
            ? unitMatch[1].toUpperCase()
            : `UNIT ${ch.chapterNumber}`;
          const displayTitleText = ch.title
            .replace(/\((Unit\s*\d+[^)]*|इकाई\s*\d+[^)]*)\)/i, '')
            .replace(/^अध्याय\s*\d+[:\s]+/, '')
            .replace(/^Chapter\s*\d+[:\s]+/i, '')
            .trim();

          return (
            <div
              key={ch.id}
              className="glass-card"
              style={{
                padding: '16px 18px',
                borderRadius: '14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              {/* Animation styles for bookmark */}
              <style>{`
                @keyframes bookmarkPop {
                  0% { transform: scale(0.8) rotate(-12deg); }
                  50% { transform: scale(1.35) rotate(6deg); }
                  100% { transform: scale(1) rotate(0deg); }
                }
                .animated-bookmark-btn:hover {
                  transform: scale(1.1);
                  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);
                }
                .animated-bookmark-btn:active {
                  transform: scale(0.92);
                }
              `}</style>

              {isClass1 ? (
                /* Class 1 Specialized Layout: Unit Name, Animated Bookmark & 3 Action Buttons */
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, minWidth: 0 }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: 'var(--accent-primary, #4f46e5)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        background: 'rgba(79, 70, 229, 0.1)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        display: 'inline-block',
                        width: 'fit-content'
                      }}>
                        {unitBadgeText}
                      </span>
                      <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', wordBreak: 'break-word' }}>
                        {displayTitleText}
                      </span>
                    </span>
                    {onToggleBookmarkChapter && (
                      <button
                        onClick={() => onToggleBookmarkChapter(ch)}
                        className="animated-bookmark-btn"
                        style={{
                          background: isBookmarked ? 'rgba(79, 70, 229, 0.18)' : 'rgba(255, 255, 255, 0.05)',
                          border: isBookmarked ? '1.5px solid #4f46e5' : '1px solid var(--border-color)',
                          cursor: 'pointer',
                          padding: '8px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                        title={isBookmarked ? "Remove Bookmark" : "Bookmark Unit"}
                      >
                        <Bookmark
                          size={19}
                          style={{
                            color: isBookmarked ? '#4f46e5' : 'var(--text-muted)',
                            transition: 'transform 0.3s ease, color 0.3s ease',
                            animation: isBookmarked ? 'bookmarkPop 0.4s ease' : 'none'
                          }}
                          fill={isBookmarked ? '#4f46e5' : 'none'}
                        />
                      </button>
                    )}
                  </div>

                  {/* 3 Action Buttons below: Download, Online, and Worksheet */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {downloadedIds.includes(ch.id) ? (
                      <button
                        onClick={() => {
                          if (onOpenPdfReader) onOpenPdfReader(ch);
                        }}
                        className="btn btn-primary"
                        title="Downloaded for Offline Viewing"
                        style={{ padding: '8px 8px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
                      >
                        <HardDriveDownload size={14} /> <span>Saved</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDownloadOffline(ch)}
                        disabled={downloadingId === ch.id}
                        className="btn"
                        style={{
                          background: 'rgba(79, 70, 229, 0.12)',
                          border: '1px solid rgba(79, 70, 229, 0.4)',
                          color: '#4f46e5',
                          padding: '8px 8px',
                          fontWeight: 800,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          opacity: downloadingId === ch.id ? 0.7 : 1
                        }}
                      >
                        <Download size={14} /> <span>{downloadingId === ch.id ? '...' : 'Download'}</span>
                      </button>
                    )}

                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{
                        padding: '8px 8px',
                        fontSize: '0.78rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px'
                      }}
                    >
                      <Eye size={14} /> <span>Online</span>
                    </a>

                    <button
                      onClick={() => {
                        if (onOpenPdfReader) onOpenPdfReader(ch);
                      }}
                      className="btn"
                      style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
                        border: '1px solid #10b981',
                        color: '#10b981',
                        padding: '8px 8px',
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        borderRadius: '8px'
                      }}
                      title="Open Practice Worksheet & Exercises"
                    >
                      <FileText size={14} /> <span>Worksheet</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Standard layout for other classes */
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-primary)', letterSpacing: '0.03em', textTransform: 'uppercase' }}>अध्याय {ch.chapterNumber}</span>
                      <span>{ch.title.replace(/^अध्याय\s*\d+[:\s]+/, '').replace(/^Chapter\s*\d+[:\s]+/i, '')}</span>
                    </span>
                    {onToggleBookmarkChapter && (
                      <button
                        onClick={() => onToggleBookmarkChapter(ch)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}
                        title={isBookmarked ? "Remove Bookmark" : "Bookmark Chapter"}
                      >
                        <Bookmark size={18} style={{ color: isBookmarked ? '#4f46e5' : 'var(--text-muted)' }} fill={isBookmarked ? '#4f46e5' : 'none'} />
                      </button>
                    )}
                  </div>

                  {/* Action Buttons: 1. Download from Google Drive, 2. Google Drive Cloud Link, 3. Online */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {downloadedIds.includes(ch.id) ? (
                      <button
                        onClick={() => {
                          if (onOpenPdfReader) {
                            onOpenPdfReader(ch);
                          }
                        }}
                        className="btn btn-primary"
                        title="Downloaded for Offline Viewing"
                        style={{
                          padding: '8px 10px',
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px'
                        }}
                      >
                        <HardDriveDownload size={14} /> <span>Saved</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDownloadOffline(ch)}
                        disabled={downloadingId === ch.id}
                        className="btn"
                        style={{
                          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.18) 0%, rgba(16, 185, 129, 0.08) 100%)',
                          border: '1.5px solid #14b8a6',
                          color: '#14b8a6',
                          padding: '8px 10px',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          opacity: downloadingId === ch.id ? 0.7 : 1
                        }}
                        title="Download Chapter PDF from Google Drive (newncert.nextsem@gmail.com)"
                      >
                        <Download size={14} /> <span>{downloadingId === ch.id ? 'Saving...' : 'Drive PDF'}</span>
                      </button>
                    )}

                    <a
                      href={ch.googleDriveFileId ? `https://drive.google.com/file/d/${ch.googleDriveFileId}/view` : SHARED_NCERT_DRIVE_FOLDER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-main, var(--text-primary))',
                        padding: '8px 10px',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        textDecoration: 'none'
                      }}
                      title="Direct Google Drive Folder Access (newncert.nextsem@gmail.com)"
                    >
                      <FolderOpen size={14} style={{ color: '#14b8a6' }} /> <span>Drive</span>
                    </a>

                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{
                        padding: '8px 10px',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px'
                      }}
                      title="Read on official NCERT CDN"
                    >
                      <Eye size={14} /> <span>Online</span>
                    </a>
                  </div>
                </div>
              )}

              {/* 🌟 Interactive Action Deck: Notes, Quizzes, Fill-ups & Labs */}
              {/* Class 9 Hindi Grammar Masterclass Studio */}
              {isHindiGrammar9 && (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div
                    onClick={() => {
                      if (onOpenHindiGrammarStudio) onOpenHindiGrammarStudio();
                      else window.location.href = '/hindi-class9-grammar-complete-mastery.html';
                    }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.12) 0%, rgba(190, 18, 60, 0.08) 100%)',
                      border: '1.5px solid #e11d48',
                      borderRadius: '12px',
                      padding: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 16px rgba(225, 29, 72, 0.2)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f43f5e', background: 'rgba(225, 29, 72, 0.18)', padding: '2px 8px', borderRadius: '4px' }}>
                          कक्षा 9 • हिंदी व्याकरण मास्टरक्लास
                        </span>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                          Live Interactive Studio ⚡
                        </span>
                      </div>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                        🌟 {ch.title} — संपूर्ण व्याकरण अध्ययन, लाइव समास एक्सप्लोरर व 40 अभ्यास प्रश्न
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                        उपसर्ग-प्रत्यय, 6 प्रकार के समास (विग्रह सहित), 8 प्रकार के वाक्य भेद, अलंकार (शब्दालंकार व अर्थालंकार) + 20 MCQs और 20 रिक्त स्थान पूर्ति।
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#e11d48', fontSize: '0.82rem', fontWeight: 800, marginTop: '12px' }}>
                      <span>Launch Grammar Studio (लाइव व्याकरण अभ्यास)</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              )}

              {/* Class 11 History Ch 1 Pages 11 & 12 Worksheet */}
              {(ch.id === 'c11-hist-ch1' || ch.id.includes('kehs101') || (ch.chapterNumber === 1 && bookTitle.toLowerCase().includes('history'))) && (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/history-class11-ch1-writing-and-city-life-pages11-12-worksheet.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.08) 100%)',
                      border: '1.5px solid #f59e0b',
                      color: '#f59e0b',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    <span>🏛️ Theme 1 (Pages 11 &amp; 12): Interactive Worksheet &amp; A4 Print Sheet</span>
                  </a>
                </div>
              )}

              {/* Class 12 Chemistry Part 2 / Unit 6 Haloalkanes & Haloarenes (lech201) CBSE Board PYQ Paper */}
              {(ch.id === 'c12-chem-ch6' || ch.officialPdfUrl?.includes('lech201') || ch.title.toLowerCase().includes('haloalkane')) && (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div
                    style={{
                      background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.12) 0%, rgba(251, 146, 60, 0.08) 100%)',
                      border: '1.5px solid #f43f5e',
                      borderRadius: '12px',
                      padding: '14px',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 16px rgba(244, 63, 94, 0.2)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f43f5e', background: 'rgba(244, 63, 94, 0.18)', padding: '2px 8px', borderRadius: '4px' }}>
                          Class 12 Chemistry • lech201
                        </span>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                          CBSE Board PYQs (2015–2023) ⚡
                        </span>
                      </div>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                        ⚛️ Haloalkanes &amp; Haloarenes: 4-Page CBSE Board Pre-Board Question Paper &amp; Marking Scheme
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                        50 Marks • 90 Mins: Section A (Nomenclature &amp; Reasoning), Section B (Preparations &amp; Named Reactions: Darzens, Finkelstein, Swarts, Sandmeyer), Section C (Mechanisms: S<sub>N</sub>1 vs S<sub>N</sub>2, Dow's process, Saytzeff, Grignard), Section D (Conversions) &amp; Complete Teacher Marking Scheme.
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f43f5e', fontSize: '0.82rem', fontWeight: 800 }}>
                        <span>A4 Physical Board Exam Paper Format</span>
                        <ArrowRight size={14} />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <a
                          href="/class12-chemistry-ch1-haloalkanes-board-test-paper.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
                            color: '#ffffff',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            fontSize: '0.74rem',
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
                  </div>
                </div>
              )}

              {/* Class 9 Science Ch 6 & 7 (iesc106 / iesc107) Motion & Force Hindi 4-Page Test & Answer Key */}
              {(isScience9Ch6 || isScience9Ch7) && (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div
                    style={{
                      background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)',
                      border: '1.5px solid #06b6d4',
                      borderRadius: '12px',
                      padding: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 16px rgba(6, 182, 212, 0.2)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#06b6d4', background: 'rgba(6, 182, 212, 0.18)', padding: '2px 8px', borderRadius: '4px' }}>
                          Class 9 Science • Ch 6 &amp; 7 (iesc106 / iesc107)
                        </span>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                          हिंदी माध्यम 4-पृष्ठ टेस्ट + बड़े फॉन्ट ⚡
                        </span>
                      </div>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                        🚀 गति, बल तथा गति के नियम: 4-पृष्ठ इकाई मूल्यांकन टेस्ट पेपर एवं उत्तर कुंजी (50 अंक)
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                        बड़ा फॉन्ट आकार, विस्तृत आंकिक कार्यक्षेत्र, स्पष्ट s-t एवं v-t ग्राफिकल विश्लेषण, न्यूटन के गति नियम, F = ma समस्याएं तथा 8-पृष्ठ संपूर्ण शिक्षक समाधान पैक।
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#06b6d4', fontSize: '0.82rem', fontWeight: 800 }}>
                        <span>A4 भौतिक परीक्षा प्रारूप (4-Page Booklet)</span>
                        <ArrowRight size={14} />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <a
                          href="/pdf/Test-Templates/Class_9_Science_Motion_and_Force_Test_Hindi.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            background: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
                            color: '#ffffff',
                            borderRadius: '6px',
                            padding: '5px 12px',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            boxShadow: '0 2px 8px rgba(6, 182, 212, 0.35)'
                          }}
                          title="4-पृष्ठ हिंदी टेस्ट पेपर PDF डाउनलोड करें"
                        >
                          📥 4-Page Test PDF
                        </a>
                        <a
                          href="/class9-science-motion-force-test-hindi.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid #06b6d4',
                            color: '#06b6d4',
                            borderRadius: '6px',
                            padding: '5px 10px',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px'
                          }}
                          title="इंटरैक्टिव वेब ऐप एवं उत्तर कुंजी"
                        >
                          📖 Interactive App
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isMaths6Ch6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/maths-class6-ch6-perimeter-and-area-worksheet.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                      border: '1.5px solid #0284c7',
                      color: '#38bdf8',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)'
                    }}
                  >
                    <span>📐 Ch 6: Perimeter &amp; Area (परिमाप और क्षेत्रफल) Interactive Workbook &amp; A4 Print</span>
                  </a>
                </div>
              ) : isScience6Ch6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/science-class6-ch6-materials-around-us-worksheet.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.18) 0%, rgba(16, 185, 129, 0.1) 100%)',
                      border: '1.5px solid #14b8a6',
                      color: '#14b8a6',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(20, 184, 166, 0.25)'
                    }}
                  >
                    <span>🧪 Ch 6: हमारे आस-पास की सामग्री (Materials Around Us) Interactive Worksheet &amp; A4 Print</span>
                  </a>
                </div>
              ) : isMaths5Ch6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/maths-class5-ch6-dairy-farm-worksheet.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.18) 0%, rgba(16, 185, 129, 0.1) 100%)',
                      border: '1.5px solid #14b8a6',
                      color: '#14b8a6',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(20, 184, 166, 0.25)'
                    }}
                  >
                    <span>🥛 Ch 6: Dairy Farm &amp; Multiples Interactive Worksheet &amp; A4 Print (Bilingual)</span>
                  </a>
                </div>
              ) : isMaths3Ch6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/maths-class3-ch6-house-of-hundreds-worksheet.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                      border: '1.5px solid #0284c7',
                      color: '#38bdf8',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)'
                    }}
                  >
                    <span>🏛️ Ch 6: House of Hundreds – I Interactive Worksheet &amp; A4 Print (Bilingual)</span>
                  </a>
                </div>
              ) : isMaths2Ch6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/maths-class2-ch6-festival-decoration-worksheet.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%)',
                      border: '1.5px solid #8b5cf6',
                      color: '#c4b5fd',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(139, 92, 246, 0.25)'
                    }}
                  >
                    <span>🪔 Ch 6: Decoration for Festival Interactive Worksheet &amp; A4 Print (Bilingual)</span>
                  </a>
                </div>
              ) : isSantoor5Ch6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/santoor-class5-ch6-what-a-tank-worksheet.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(4, 170, 109, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%)',
                      border: '1.5px solid #04AA6D',
                      color: '#10b981',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(4, 170, 109, 0.2)'
                    }}
                  >
                    <span>💧 Ch 6: Interactive Worksheet &amp; A5 Print Sheet</span>
                  </a>
                </div>
              ) : isCuriosity7Ch6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/curiosity-class7-ch6-adolescence-worksheet.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(56, 189, 248, 0.1) 100%)',
                      border: '1.5px solid #10b981',
                      color: '#10b981',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)'
                    }}
                  >
                    <span>🧬 Ch 6: Adolescence Interactive Worksheet &amp; A5 Sheet (Bilingual)</span>
                  </a>
                  <a
                    href="/science-class7-midterm-practice-paper-solutions.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.1) 100%)',
                      border: '1.5px solid #f59e0b',
                      color: '#fbbf24',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    <span>📑 DOE Class 7 Science Mid-Term Practice Paper 2026-27 (Solved with Hidden Answers)</span>
                  </a>
                </div>
              ) : isMaths8Ch7 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/maths-class8-ch7-proportional-reasoning-page165-solutions.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.1) 100%)',
                      border: '1.5px solid #f59e0b',
                      color: '#fbbf24',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    <span>☕ Ch 7: Proportional Reasoning - Page 165 Solved (Filter Coffee &amp; Figure it Out Q1-3)</span>
                  </a>
                </div>
              ) : isGanita7Ch6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/ganita-class7-ch6-number-play-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(245, 158, 11, 0.12) 100%)',
                      border: '1.5px solid #38bdf8',
                      color: '#38bdf8',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(56, 189, 248, 0.25)'
                    }}
                  >
                    <span>🎯 Ch 6: 20 Exam MCQs &amp; Interactive Practice (Bilingual)</span>
                  </a>
                </div>
              ) : isScience9Ch3 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/science-class9-ch3-tissues-in-action-difficult-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(239, 68, 68, 0.15) 100%)',
                      border: '1.5px solid #10b981',
                      color: '#10b981',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)'
                    }}
                  >
                    <span>🔬 Ch 3: 20 HOTS Difficult MCQs &amp; Solutions (Bilingual)</span>
                  </a>
                </div>
              ) : isEconomics11 ? (
                <div
                  onClick={() => {
                    if (onOpenEconomicsTest) onOpenEconomicsTest();
                    else window.location.href = '/?view=class11-economics-test';
                  }}
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    borderRadius: '12px',
                    padding: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#10b981';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.35)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                        Class 11 Economics • keec1
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>IN Hinglish + English</span>
                    </div>
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                      Indian Economic Dev: Ch 1 &amp; 2 Mega Test
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                      30 high-yield questions on Eve of Independence &amp; 1950–1990 Planning, Land Reforms, Green Revolution &amp; IPR 1956 with detailed Hinglish solutions.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.8rem', fontWeight: 800 }}>
                      <span>Start Practice / Timed Exam</span>
                      <ArrowRight size={14} />
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
                          padding: '3px 8px',
                          fontSize: '0.72rem',
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
                          padding: '3px 8px',
                          fontSize: '0.72rem',
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
              ) : isStats11 ? (
                <div
                  onClick={() => {
                    if (onOpenStatsTest) onOpenStatsTest();
                    else window.location.href = '/?view=class11-stats-test';
                  }}
                  style={{
                    background: 'rgba(4, 170, 109, 0.08)',
                    border: '1px solid rgba(4, 170, 109, 0.35)',
                    borderRadius: '12px',
                    padding: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#04AA6D';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(4, 170, 109, 0.35)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#04AA6D', background: 'rgba(4, 170, 109, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                        Class 11 Economics • kest1dd
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>IN Hinglish + English</span>
                    </div>
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                      Statistics: Chapters 1–4 Mega Test
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                      30 high-yield questions on Intro, Data Collection, Organisation &amp; Presentation with detailed Hinglish solutions.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#04AA6D', fontSize: '0.8rem', fontWeight: 800 }}>
                      <span>Start Practice / Timed Exam</span>
                      <ArrowRight size={14} />
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
                        padding: '3px 8px',
                        fontSize: '0.72rem',
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
              ) : isDataHandling6 ? (
                <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div
                    onClick={() => {
                      if (onOpenClass6MathsWorkbook) onOpenClass6MathsWorkbook(ch);
                      else window.location.href = "/maths-class6-ch4-data-handling-workbook.html";
                    }}
                    style={{
                      background: "linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(16, 185, 129, 0.1) 100%)",
                      border: "1px solid rgba(56, 189, 248, 0.45)",
                      borderRadius: "12px",
                      padding: "14px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#0ea5e9";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.45)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#0284c7", background: "rgba(56, 189, 248, 0.18)", padding: "2px 8px", borderRadius: "4px" }}>
                          Class 6 Maths • Chapter 4
                        </span>
                        <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#059669", background: "rgba(16, 185, 129, 0.15)", padding: "2px 8px", borderRadius: "4px" }}>
                          NEP Interactive Workbook
                        </span>
                      </div>
                      <h4 style={{ fontSize: "0.96rem", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 4px" }}>
                        Data Handling &amp; Presentation Workbook (आँकड़ों का प्रबंधन)
                      </h4>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.4 }}>
                        Live Tally Marks simulator, Pictograph Scaler, Bar Graph Studio, complete NCERT 4.1–4.5 solutions, and 20-Q Competency Test.
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0284c7", fontSize: "0.8rem", fontWeight: 800, marginTop: "12px" }}>
                      <span>Launch Interactive Workbook</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ) : isEuclid9 ? (
                <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div
                    onClick={() => {
                      if (onOpenClass9MathsTest) onOpenClass9MathsTest();
                      else window.location.href = "/class9-maths-ch4-ch5-question-paper-40-marks.html";
                    }}
                    style={{
                      background: "linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(59, 130, 246, 0.08) 100%)",
                      border: "1px solid rgba(56, 189, 248, 0.45)",
                      borderRadius: "12px",
                      padding: "14px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#0ea5e9";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.45)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#0284c7", background: "rgba(56, 189, 248, 0.18)", padding: "2px 8px", borderRadius: "4px" }}>
                          Class 9 Maths ? Ch 4 & 5
                        </span>
                        <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#059669", background: "rgba(16, 185, 129, 0.15)", padding: "2px 8px", borderRadius: "4px" }}>
                          40 Marks Blueprint Exam
                        </span>
                      </div>
                      <h4 style={{ fontSize: "0.96rem", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 4px" }}>
                        Linear Equations & Euclid Geometry Test
                      </h4>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.4 }}>
                        Comprehensive 40-mark paper (20 questions, Sections A?E) with 90-min timer, instant rubric scoring & full NCERT step solutions.
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0284c7", fontSize: "0.8rem", fontWeight: 800, marginTop: "12px" }}>
                      <span>Start 40-Mark Assessment</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      if (onOpenInteractiveEuclid) onOpenInteractiveEuclid(ch);
                      else window.location.href = "/maths-class9-ch5-euclid-geometry-interactive.html";
                    }}
                    style={{
                      background: "rgba(79, 70, 229, 0.08)",
                      border: "1px solid rgba(79, 70, 229, 0.35)",
                      borderRadius: "12px",
                      padding: "14px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#4f46e5";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(79, 70, 229, 0.35)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#4f46e5", background: "rgba(79, 70, 229, 0.15)", padding: "2px 8px", borderRadius: "4px" }}>
                          Class 9 Mathematics ? Chapter 5
                        </span>
                        <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>12 Theorems Proofs</span>
                      </div>
                      <h4 style={{ fontSize: "0.96rem", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 4px" }}>
                        Euclid & Circle Geometry Lab
                      </h4>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.4 }}>
                        Interactive visual animations, drag-to-measure angles & step-by-step geometric proofs for all 12 theorems.
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#4f46e5", fontSize: "0.8rem", fontWeight: 800, marginTop: "12px" }}>
                      <span>Launch Geometry Lab</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ) : isLinearEq9 ? (
                <div
                  onClick={() => {
                    if (onOpenClass9MathsTest) onOpenClass9MathsTest();
                    else window.location.href = "/class9-maths-ch4-ch5-question-paper-40-marks.html";
                  }}
                  style={{
                    background: "linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(59, 130, 246, 0.08) 100%)",
                    border: "1px solid rgba(56, 189, 248, 0.45)",
                    borderRadius: "12px",
                    padding: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginTop: "10px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0ea5e9";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.45)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#0284c7", background: "rgba(56, 189, 248, 0.18)", padding: "2px 8px", borderRadius: "4px" }}>
                        Class 9 Maths ? Ch 4 & 5
                      </span>
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#059669", background: "rgba(16, 185, 129, 0.15)", padding: "2px 8px", borderRadius: "4px" }}>
                        40 Marks Blueprint Exam
                      </span>
                    </div>
                    <h4 style={{ fontSize: "0.96rem", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 4px" }}>
                      Linear Equations & Euclid Geometry Test
                    </h4>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.4 }}>
                      Comprehensive 40-mark paper (20 questions, Sections A?E) with 90-min timer, instant rubric scoring & full NCERT step solutions.
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0284c7", fontSize: "0.8rem", fontWeight: 800, marginTop: "12px" }}>
                    <span>Start 40-Mark Assessment</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ) : isHistoryBhaktiMongols ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div
                    onClick={() => {
                      if (onOpenHistoryTest) onOpenHistoryTest();
                      else window.location.href = '/?view=history-competency-test';
                    }}
                    style={{
                      background: 'rgba(234, 88, 12, 0.08)',
                      border: '1px solid rgba(234, 88, 12, 0.35)',
                      borderRadius: '12px',
                      padding: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#ea580c';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(234, 88, 12, 0.35)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#ea580c', background: 'rgba(234, 88, 12, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                          Class 12 &amp; 11 History • lhhs202 &amp; khhs105
                        </span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Dynamic Shuffling 🔀</span>
                      </div>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                        History: Bhakti–Sufi &amp; Mongols Test
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                        15 competency-based questions on Alvars, Nayanars, Chishti Silsila &amp; Genghis Khan’s Yasa / Yam military system.
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ea580c', fontSize: '0.8rem', fontWeight: 800, marginTop: '12px' }}>
                      <span>Start History Competency Test</span>
                      <ArrowRight size={14} />
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isHydrocarbons26 ? (
                <div
                  onClick={() => {
                    if (onOpenHydrocarbonsTest) onOpenHydrocarbonsTest();
                    else window.location.href = '/?view=hydrocarbons-test';
                  }}
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    borderRadius: '12px',
                    padding: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#059669';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.35)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#059669', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                        NIOS Chemistry 313 • Lesson 26
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>24-Page Coverage 🧪</span>
                    </div>
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                      Hydrocarbons: Alkanes, Alkenes, Alkynes &amp; Benzene
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                      20 high-yield questions on Wurtz reaction, Saytzeff rule, Markovnikov/peroxide addition, Ozonolysis &amp; Benzene SEAr.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8rem', fontWeight: 800, marginTop: '12px' }}>
                    <span>Start Hydrocarbons Test</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ) : isPhysics1 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/physics-class12-ch1-all-derivations-studio.html?class=12&subject=c12-physics&book=part-1"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(2, 132, 199, 0.12)',
                      border: '1px solid rgba(2, 132, 199, 0.45)',
                      color: '#0284c7',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>⚡ Ch 1: All 14 Derivations Master Studio</span>
                  </a>
                </div>
              ) : isPhysics2 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/physics-class12-ch2-all-derivations-studio.html?class=12&subject=c12-physics&book=part-1"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(6, 182, 212, 0.12)',
                      border: '1px solid rgba(6, 182, 212, 0.45)',
                      color: '#0284c7',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>⚡ Ch 2: All 18 Derivations Master Studio</span>
                  </a>
                </div>
              ) : isPhysics6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/physics-ch6-electromagnetic-induction-notes-and-numericals.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isPhysics7 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/physics-ch7-alternating-current-fill-in-the-blanks.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isAccountancy3 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/navyug-class11-accountancy-exam-solutions.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.12) 100%)',
                      border: '1.5px solid #f59e0b',
                      color: '#f59e0b',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    <span>📑 Navyug School Mid-Term Exam (80 Marks) Complete Solved Paper</span>
                  </a>
                  <a
                    href="/accountancy/accounting-equation-full-problems-notes-solutions.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      color: '#059669',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isAccountancy4 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/navyug-class11-accountancy-exam-solutions.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.12) 100%)',
                      border: '1.5px solid #f59e0b',
                      color: '#f59e0b',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    <span>📑 Navyug School Mid-Term Exam (80 Marks) Complete Solved Paper</span>
                  </a>
                  <a
                    href="/financial-accounting-cash-book-numericals-studio.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      color: '#059669',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isAccountancy5 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/navyug-class11-accountancy-exam-solutions.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.12) 100%)',
                      border: '1.5px solid #f59e0b',
                      color: '#f59e0b',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    <span>📑 Navyug School Mid-Term Exam (80 Marks) Complete Solved Paper</span>
                  </a>
                  <a
                    href="/Lesson_Bank_Reconciliation_Statement.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(6, 182, 212, 0.22) 100%)',
                      border: '1.5px solid #10b981',
                      color: '#34d399',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.86rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)'
                    }}
                  >
                    <span>📖 Ch 5: Bank Reconciliation Statement Master Lesson (Bilingual)</span>
                  </a>
                  <a
                    href="/financial-accounting-ch5-bank-reconciliation-statement-studio.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
                      border: '1.5px solid rgba(16, 185, 129, 0.45)',
                      color: '#10b981',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.86rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.15)'
                    }}
                  >
                    <span>🏦 Ch 5: Bank Reconciliation Statement (BRS) Studio &amp; Numericals</span>
                  </a>
                </div>
              ) : isSocSci7Ch1 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class7-social-science-ch1-geographical-diversity-notes.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(12, 19, 40, 0.4) 100%)',
                      border: '1.5px solid rgba(6, 182, 212, 0.45)',
                      color: '#06b6d4',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.86rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(6, 182, 212, 0.15)'
                    }}
                  >
                    <span>🗺️ Ch 1: Complete Line-by-Line Notes &amp; Solved NCERT Studio</span>
                  </a>

                  <button
                    onClick={() => {
                      if (onOpenPdfReader) onOpenPdfReader(ch);
                    }}
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>📖 Open Inbuilt Notes &amp; Solved Exercises Viewer</span>
                  </button>
                </div>
              ) : isSocSci8Ch1 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class8-social-science-ch1-exploring-society-notes.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(12, 19, 40, 0.4) 100%)',
                      border: '1.5px solid rgba(6, 182, 212, 0.45)',
                      color: '#06b6d4',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.86rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(6, 182, 212, 0.15)'
                    }}
                  >
                    <span>🌍 Ch 1: Exploring Society Line-by-Line Notes &amp; Solved Exercises Studio</span>
                  </a>

                  <button
                    onClick={() => {
                      if (onOpenPdfReader) onOpenPdfReader(ch);
                    }}
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>📖 Open Inbuilt Notes &amp; Solved Exercises Viewer</span>
                  </button>
                </div>
              ) : isExploring7Ch2 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class7-social-science-ch2-understanding-weather-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
                      border: '1.5px solid rgba(2, 132, 199, 0.45)',
                      color: '#0284c7',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.86rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(2, 132, 199, 0.15)'
                    }}
                  >
                    <span>🌤️ Ch 2: Understanding Weather — 25 Bilingual MCQs Practice Quiz</span>
                  </a>
                  <button
                    onClick={() => {
                      if (onOpenPdfReader) onOpenPdfReader(ch);
                    }}
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>📖 Open Inbuilt Chapter PDF Viewer</span>
                  </button>
                </div>
              ) : isPoorvi7Unit1 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/english-class7-poorvi-unit1-learning-together-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(16, 185, 129, 0.15) 100%)',
                      border: '1.5px solid #38bdf8',
                      color: '#0284c7',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.86rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(56, 189, 248, 0.25)'
                    }}
                  >
                    <span>🌊 Unit 1: 36 Bilingual MCQs &amp; Blanks Studio (gepr101)</span>
                  </a>
                  <a
                    href="/class6-7-english-comprehension-passage.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.12) 100%)',
                      border: '1.5px solid #f59e0b',
                      color: '#d97706',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.2)'
                    }}
                  >
                    <span>🌳 Reading Comprehension: The Mighty Banyan Tree Studio</span>
                  </a>
                  <a
                    href="/class6-7-easy-mcq-practice.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(5, 150, 105, 0.12) 100%)',
                      border: '1.5px solid #10b981',
                      color: '#059669',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    <span>📝 English Grammar: 30 Easy MCQs Practice (Bilingual)</span>
                  </a>
                  <button
                    onClick={() => {
                      if (onOpenPdfReader) onOpenPdfReader(ch);
                    }}
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>📖 Open Inbuilt Chapter PDF Viewer</span>
                  </button>
                </div>
              ) : isExploring7Ch2 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class7-social-science-ch2-understanding-weather-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.18) 0%, rgba(56, 189, 248, 0.12) 100%)',
                      border: '1.5px solid #0284c7',
                      color: '#0284c7',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)'
                    }}
                  >
                    <span>🌤️ Ch 2: 25 Weather Elements &amp; IMD Bilingual MCQs (gees102)</span>
                  </a>
                  <button
                    onClick={() => {
                      if (onOpenPdfReader) onOpenPdfReader(ch);
                    }}
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>📖 Open Inbuilt Chapter PDF Viewer</span>
                  </button>
                </div>
              ) : isExploring7Part2Ch1 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class7-social-science-ch1-the-story-of-indian-farming-notes-quiz.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(5, 150, 105, 0.12) 100%)',
                      border: '1.5px solid #10b981',
                      color: '#059669',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)'
                    }}
                  >
                    <span>🌾 Part 2 Ch 1: Farming Notes &amp; 25 Bilingual MCQs (gees201)</span>
                  </a>
                  <button
                    onClick={() => {
                      if (onOpenPdfReader) onOpenPdfReader(ch);
                    }}
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      color: '#10b981',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>📖 Open Inbuilt Chapter PDF Viewer</span>
                  </button>
                </div>
              ) : isHindi7Ch1 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.18) 0%, rgba(244, 63, 94, 0.12) 100%)',
                      border: '1.5px solid #ec4899',
                      color: '#db2777',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(236, 72, 153, 0.25)'
                    }}
                  >
                    <span>🪶 Ch 1: माँ, कह एक कहानी (सम्पूर्ण अभ्यास एवं रिक्त स्थान)</span>
                  </a>
                  <button
                    onClick={() => {
                      if (onOpenPdfReader) onOpenPdfReader(ch);
                    }}
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>📖 Open Inbuilt Chapter PDF Viewer</span>
                  </button>
                </div>
              ) : isScience10Ch1 ? (
                <div style={{ marginTop: '10px' }}>
                  <a
                    href="/class10-science-ch1-chemical-reactions-difficult-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(234, 88, 12, 0.1)',
                      border: '1px solid rgba(234, 88, 12, 0.35)',
                      color: '#ea580c',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isScience10Ch9 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class10-science-ch9-light-reflection-refraction-notes-numericals.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
                      border: '1.5px solid rgba(6, 182, 212, 0.45)',
                      color: '#06b6d4',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.86rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(6, 182, 212, 0.15)'
                    }}
                  >
                    <span>🔬 Unit 9: Light Notes, CBSE PYQs &amp; Numericals Studio</span>
                  </a>

                  <button
                    onClick={() => {
                      if (onOpenPdfReader) onOpenPdfReader(ch);
                    }}
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>📖 Open Inbuilt Notes &amp; Solved Exercises Viewer</span>
                  </button>
                </div>
              ) : isScience9Ch6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/science-class9-ch6-how-forces-affect-motion-notes-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(5, 150, 105, 0.12) 100%)',
                      border: '1.5px solid #10b981',
                      color: '#10b981',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)'
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
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(6, 182, 212, 0.25)'
                    }}
                  >
                    <span>🚀 Physics Motion &amp; Force Studio — 25 High-Yield Numericals &amp; Problems</span>
                  </a>
                </div>
              ) : isScience9Ch7 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class9-physics-motion-force-numericals-questions.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.18) 0%, rgba(14, 165, 233, 0.12) 100%)',
                      border: '1.5px solid #06b6d4',
                      color: '#06b6d4',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(6, 182, 212, 0.25)'
                    }}
                  >
                    <span>🚀 Motion Master Studio — Distance, Speed, Velocity, Acceleration &amp; Numericals</span>
                  </a>
                </div>
              ) : isCuriosity7Ch7 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/curiosity-class7-ch7-heat-transfer-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(245, 158, 11, 0.12) 100%)',
                      border: '1.5px solid #10b981',
                      color: '#10b981',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)'
                    }}
                  >
                    <span>🔥 Ch 7: Heat Transfer in Nature — 20 Interactive Exam MCQs &amp; Solutions (Bilingual)</span>
                  </a>
                </div>
              ) : isCuriosity7Ch9 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/curiosity-class7-ch9-life-processes-notes.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.18) 0%, rgba(16, 185, 129, 0.12) 100%)',
                      border: '1.5px solid #34d399',
                      color: '#34d399',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(52, 211, 153, 0.25)'
                    }}
                  >
                    <span>🌿 Ch 9: Life Processes in Animals (Digestion &amp; Respiration) Notes</span>
                  </a>
                </div>
              ) : isScience9Ch8 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/chapter-8-journey-inside-the-atom-notes-and-practice.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isMaths11Ch6 ? (
                <div style={{ marginTop: '10px' }}>
                  <a
                    href="/class11-maths-permutations-combinations-ch6-difficult-questions.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isBiology12Ch8 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class12-biology-ch8-microbes-kids-edition.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      color: '#059669',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isMaths8Ch4 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/ganita-prakash-ch4-data-handling-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(234, 88, 12, 0.1)',
                      border: '1px solid rgba(234, 88, 12, 0.35)',
                      color: '#ea580c',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isCoordGeom9 ? (
                <div style={{ marginTop: '10px' }}>
                  <a
                    href="/class9-ganita-manjari-ch1-coordinate-geometry-numericals.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.1)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isNiosMath1 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/nios-math-ch1-number-systems-fill-in-the-blanks.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.35)',
                      color: '#d97706',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isHindi7Ch1 ? (
                <div style={{ marginTop: '10px' }}>
                  <a
                    href="/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(236, 72, 153, 0.12)',
                      border: '1px solid rgba(236, 72, 153, 0.4)',
                      color: '#ec4899',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>🪶 पाठ १: माँ, कह एक कहानी — कविता व अभ्यास Fill in the Blanks</span>
                  </a>
                </div>
              ) : isEvs5Ch1 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/evs-ch1-super-senses-fill-in-the-blanks.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(20, 184, 166, 0.12)',
                      border: '1px solid rgba(20, 184, 166, 0.4)',
                      color: '#14b8a6',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isHistory4 ? (
                <div style={{ marginTop: '10px' }}>
                  <a
                    href="/history-fill-in-the-blanks.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.12)',
                      border: '1px solid rgba(79, 70, 229, 0.4)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>📜 विषय ४: तीन वर्ग (The Three Orders) — Fill-in-the-Blanks Practice (हिंदी माध्यम)</span>
                  </a>
                </div>
              ) : isHistory5 ? (
                <div style={{ marginTop: '10px' }}>
                  <a
                    href="/history-ch5-travellers-fill-in-the-blanks.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(79, 70, 229, 0.12)',
                      border: '1px solid rgba(79, 70, 229, 0.4)',
                      color: '#4f46e5',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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
              ) : isHistory6 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/ncert-class12-history-ch6-bhakti-sufi-traditions-bilingual-quiz.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(217, 119, 6, 0.15)',
                      border: '1px solid rgba(217, 119, 6, 0.45)',
                      color: '#d97706',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>📜 Ch 6: Bhakti-Sufi Traditions Bilingual Quiz &amp; Summary</span>
                  </a>
                  <a
                    href="/ncert-class12-history-ch6-line-by-line-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(124, 58, 237, 0.12)',
                      border: '1px solid rgba(124, 58, 237, 0.4)',
                      color: '#7c3aed',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>🎯 Ch 6: Line-by-Line 40+ MCQs Practice</span>
                  </a>
                </div>
              ) : isHistory7 ? (
                <div style={{ marginTop: '10px' }}>
                  <a
                    href="/history-class12-ch7-vijayanagara-page-by-page-notes-mcq.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)',
                      border: '1px solid rgba(217, 119, 6, 0.45)',
                      color: '#d97706',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>🏛️ Ch 7: An Imperial Capital Vijayanagara Notes &amp; MCQs</span>
                  </a>
                </div>
              ) : isHistoryPart1 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <a
                    href="/history-class12-part1-all-chapters-80-mcqs.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
                      border: '1px solid rgba(217, 119, 6, 0.4)',
                      color: '#d97706',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>🎯 Part-I (Themes 1–4): All Chapters 80-MCQs Master Test</span>
                  </a>
                  <a
                    href="/cbse-class12-history-pyq-2024-solved-hindi.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(234, 88, 12, 0.18) 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.45)',
                      color: '#fbbf24',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 900,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>📜 CBSE 2024 सम्पूर्ण हल प्रश्न-पत्र (कोड: 61/4/2 हिंदी)</span>
                  </a>
                </div>
              ) : isChemistry12Ch7 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/chemistry-class12-alcohols-phenols-ethers-page3-6.html?class=12&subject=c12-chemistry&book=part-2"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.14) 0%, rgba(168, 85, 247, 0.12) 100%)',
                      border: '1px solid rgba(56, 189, 248, 0.45)',
                      color: '#38bdf8',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(56, 189, 248, 0.12)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>🧪</span>
                      <span><strong>Pages 3–6:</strong> Ethers, IUPAC Tables &amp; 25 Fill-in-the-Blanks Test</span>
                    </span>
                    <span style={{ background: '#38bdf8', color: '#060c18', padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 900 }}>
                      Interactive Studio ➔
                    </span>
                  </a>

                  <a
                    href="/chemistry-class12-alcohols-phenols-ethers-page1-2.html?class=12&subject=c12-chemistry&book=part-2"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      color: '#10b981',
                      borderRadius: '10px',
                      padding: '9px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>🔬</span>
                      <span><strong>Pages 1–2:</strong> Classification &amp; Nomenclature Foundation Practice</span>
                    </span>
                    <span style={{ background: '#10b981', color: '#ffffff', padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 900 }}>
                      Open Practice ➔
                    </span>
                  </a>
                </div>
              ) : isScience10Ch9 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class10-science-ch9-light-reflection-refraction-mcq-quiz.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.16) 0%, rgba(2, 132, 199, 0.14) 100%)',
                      border: '1px solid rgba(6, 182, 212, 0.45)',
                      color: '#38bdf8',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(6, 182, 212, 0.12)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>⚡</span>
                      <span><strong>20 High-Yield MCQs:</strong> Light Reflection &amp; Refraction</span>
                    </span>
                    <span style={{ background: '#06b6d4', color: '#060c18', padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 900 }}>
                      Start Quiz ➔
                    </span>
                  </a>

                  <a
                    href="/class10-science-ch9-light-reflection-refraction-notes-numericals.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      color: '#10b981',
                      borderRadius: '10px',
                      padding: '9px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>📖</span>
                      <span>Complete Notes, Ray Rules &amp; Solved Numericals Studio</span>
                    </span>
                    <span style={{ background: '#10b981', color: '#ffffff', padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 900 }}>
                      Open Studio ➔
                    </span>
                  </a>
                </div>
              ) : isScience10Ch5 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class10-science-ch5-life-processes-mcq-quiz.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.14) 100%)',
                      border: '1px solid rgba(16, 185, 129, 0.45)',
                      color: '#34d399',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.12)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>🌿</span>
                      <span><strong>20 High-Yield MCQs:</strong> Life Processes (जैव प्रक्रम)</span>
                    </span>
                    <span style={{ background: '#10b981', color: '#060c18', padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 900 }}>
                      Start Quiz ➔
                    </span>
                  </a>
                </div>
              ) : isPoliticalScienceCh7 ? (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="/class12-pol-ch7-globalisation-mcq-quiz.html"
                    className="btn"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.16) 0%, rgba(79, 70, 229, 0.14) 100%)',
                      border: '1px solid rgba(99, 102, 241, 0.45)',
                      color: '#a5b4fc',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(99, 102, 241, 0.12)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>🌐</span>
                      <span><strong>20 MCQs:</strong> वैश्वीकरण (Globalisation) — Ch 7</span>
                    </span>
                    <span style={{ background: '#6366f1', color: '#ffffff', padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 900 }}>
                      Start Quiz ➔
                    </span>
                  </a>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      )}

    </div>
  );
};
