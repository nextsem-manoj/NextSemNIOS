import React from 'react';
import { ArrowLeft, BookOpen, HardDriveDownload, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';

interface InbuiltReaderInfoViewProps {
  onBack: () => void;
}

export const InbuiltReaderInfoView: React.FC<InbuiltReaderInfoViewProps> = ({ onBack }) => {
  // Get downloaded offline chapters
  const offlineIds: string[] = (() => {
    const saved = localStorage.getItem('nextsem_offline_chapters');
    return saved ? JSON.parse(saved) : [];
  })();

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '1rem 0' }}>
      
      {/* Header with Back Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
        <button
          onClick={onBack}
          className="btn btn-outline"
          style={{ padding: '8px 16px', borderRadius: '9999px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} /> Back
        </button>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
          Inbuilt NCERT Reader & Offline Caching
        </h2>
      </div>

      {/* Hero Banner */}
      <div style={{
        background: 'var(--primary-gradient)',
        borderRadius: '16px',
        padding: '24px 20px',
        color: '#ffffff',
        marginBottom: '1.5rem',
        boxShadow: '0 8px 24px rgba(10, 37, 64, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <BookOpen size={28} style={{ color: '#d4af37' }} />
          <span style={{ fontWeight: 800, fontSize: '1.3rem' }}>StudyGuide by Nextsem Reader</span>
        </div>
        <p style={{ fontSize: '0.88rem', opacity: 0.9, lineHeight: 1.5 }}>
          Read rationalized NCERT textbooks seamlessly inside the app. Download any chapter once to read offline anytime without internet access.
        </p>
      </div>

      {/* Features Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
          <HardDriveDownload size={22} style={{ color: '#d4af37', marginBottom: '8px' }} />
          <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>100% Offline Access</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Downloaded chapters are stored locally on your device for zero-data reading.
          </div>
        </div>

        <div className="glass-card" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
          <Eye size={22} style={{ color: '#10b981', marginBottom: '8px' }} />
          <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>Distraction-Free Mode</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Full-screen reader with clean typography, dark mode, and zoom controls.
          </div>
        </div>

        <div className="glass-card" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
          <CheckCircle2 size={22} style={{ color: '#3b82f6', marginBottom: '8px' }} />
          <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>Rationalized Content</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Latest 2025–2026 edition rationalized NCERT syllabus by NCERT & CBSE.
          </div>
        </div>
      </div>

      {/* Downloaded Chapters Manager */}
      <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
            Downloaded Offline Chapters ({offlineIds.length})
          </div>
          <ShieldCheck size={18} style={{ color: '#10b981' }} />
        </div>

        {offlineIds.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            No chapters downloaded yet. Open any subject book and tap "Download" to save chapters offline!
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {offlineIds.map((id) => (
              <div
                key={id}
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'var(--bg-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.85rem'
                }}
              >
                <span style={{ fontWeight: 700 }}>Chapter #{id}</span>
                <span style={{ color: '#10b981', fontWeight: 800 }}>✓ Saved Offline</span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
