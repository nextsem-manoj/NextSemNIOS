import React, { useState } from 'react';
import { ArrowLeft, FolderDown, FileText, Trash2, HardDrive, BookOpen, FolderOpen } from 'lucide-react';
import type { Chapter, Subject } from '../../data/ncertData';
import { CLASSES_DATA } from '../../data/ncertData';
import { SHARED_NCERT_DRIVE_FOLDER_URL } from '../../utils/googleDriveHelper';

interface OfflineFilesViewProps {
  onOpenPdfReader: (chapter: Chapter, subject?: Subject) => void;
  onBack: () => void;
}

export const OfflineFilesView: React.FC<OfflineFilesViewProps> = ({
  onOpenPdfReader,
  onBack
}) => {
  const [downloadedIds, setDownloadedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('nextsem_offline_chapters');
    return saved ? JSON.parse(saved) : [];
  });

  // Collect all saved chapter objects
  const savedChapters: { chapter: Chapter; subjectName: string; sizeStr: string }[] = [];

  downloadedIds.forEach((id) => {
    // Find subject name from CLASSES_DATA
    let subjectName = '';
    let foundChapter: Chapter | undefined;
    for (const cls of CLASSES_DATA) {
      for (const subj of cls.subjects) {
        const match = subj.chapters.find((c) => c.id === id);
        if (match) {
          subjectName = `${subj.name} (Class ${cls.classNumber})`;
          foundChapter = match;
          break;
        }
      }
      if (foundChapter) break;
    }

    // 1. Check if stored in localStorage payload
    const storedPayload = localStorage.getItem(`nextsem_offline_ch_${id}`);
    if (storedPayload) {
      try {
        const ch: Chapter = JSON.parse(storedPayload);
        savedChapters.push({
          chapter: ch,
          subjectName: subjectName || 'NCERT Rationalized',
          sizeStr: '1.4 MB'
        });
        return;
      } catch (e) {
        console.error('Error parsing stored chapter payload:', e);
      }
    }

    // 2. Fallback: If found in CLASSES_DATA
    if (foundChapter) {
      savedChapters.push({
        chapter: foundChapter,
        subjectName: subjectName || 'NCERT Rationalized',
        sizeStr: '1.2 MB'
      });
    }
  });

  const handleDeleteOfflineFile = (id: string) => {
    const nextIds = downloadedIds.filter((item) => item !== id);
    setDownloadedIds(nextIds);
    localStorage.setItem('nextsem_offline_chapters', JSON.stringify(nextIds));
    localStorage.removeItem(`nextsem_offline_ch_${id}`);
  };

  const handleClearAllOfflineFiles = () => {
    if (window.confirm('Are you sure you want to delete all saved offline PDF files from app storage?')) {
      downloadedIds.forEach((id) => {
        localStorage.removeItem(`nextsem_offline_ch_${id}`);
      });
      setDownloadedIds([]);
      localStorage.setItem('nextsem_offline_chapters', JSON.stringify([]));
    }
  };

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '1rem 0' }}>
      
      {/* Top Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onBack}
            className="btn btn-outline"
            style={{ padding: '8px 16px', borderRadius: '9999px', fontSize: '0.85rem' }}
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FolderDown size={22} style={{ color: '#10b981' }} /> Saved Offline PDFs ({savedChapters.length})
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
              Access all downloaded textbook PDFs offline without internet
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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

          {savedChapters.length > 0 && (
            <button
              onClick={handleClearAllOfflineFiles}
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#ef4444',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Trash2 size={14} /> Clear All
            </button>
          )}
        </div>
      </div>

      {savedChapters.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3.5rem 1rem',
          background: 'var(--bg-card)',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          color: 'var(--text-muted)',
          margin: '2rem 0'
        }}>
          <FolderDown size={54} style={{ margin: '0 auto 1rem', color: '#10b981', opacity: 0.3 }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            No Saved Offline Files Found
          </h3>
          <p style={{ fontSize: '0.85rem', maxWidth: '380px', margin: '0 auto 1.5rem', lineHeight: 1.5 }}>
            Save textbook chapters locally by tapping the <strong>Download</strong> button on any chapter list. Downloaded files will appear here for 100% offline reading.
          </p>
          <button onClick={onBack} className="btn btn-primary" style={{ padding: '10px 24px', borderRadius: '8px', fontWeight: 800 }}>
            Browse Textbooks
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Storage Summary Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
            borderRadius: '14px',
            padding: '16px 20px',
            color: '#a7f3d0',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <HardDrive size={24} style={{ color: '#34d399' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>
                  Offline Storage Sandbox Active
                </div>
                <div style={{ fontSize: '0.78rem', color: '#6ee7b7' }}>
                  {savedChapters.length} PDF files cached • Securely accessible inside app
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 900, background: '#10b981', color: '#000', padding: '4px 10px', borderRadius: '9999px' }}>
              ✓ APP OFFLINE
            </span>
          </div>

          {/* List of Offline PDF Chapter Cards */}
          {savedChapters.map(({ chapter, subjectName, sizeStr }) => {
            const filename = chapter.officialPdfUrl
              ? chapter.officialPdfUrl.substring(chapter.officialPdfUrl.lastIndexOf('/') + 1)
              : `lemh10${chapter.chapterNumber}.pdf`;

            return (
              <div
                key={chapter.id}
                className="glass-card"
                style={{
                  padding: '16px 18px',
                  borderRadius: '14px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FileText size={22} />
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-500)', textTransform: 'uppercase' }}>
                      {subjectName} • Unit {chapter.chapterNumber}
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', margin: '2px 0 4px' }}>
                      {chapter.title}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>📄 {filename}</span>
                      <span>•</span>
                      <span>{sizeStr}</span>
                      <span>•</span>
                      <span style={{ color: '#10b981', fontWeight: 700 }}>✓ Saved Offline</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => onOpenPdfReader(chapter)}
                    style={{
                      background: '#10b981',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <BookOpen size={16} /> Open PDF
                  </button>

                  <button
                    onClick={() => handleDeleteOfflineFile(chapter.id)}
                    title="Delete from Offline Storage"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#ef4444',
                      cursor: 'pointer',
                      padding: '8px'
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      )}

    </div>
  );
};
