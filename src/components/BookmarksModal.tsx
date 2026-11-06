import React from 'react';
import type { QuestionSolution } from '../data/ncertData';
import { X, Bookmark, Trash2 } from 'lucide-react';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: QuestionSolution[];
  onRemoveBookmark: (id: string) => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  bookmarks,
  onRemoveBookmark,
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 150,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '720px',
        maxHeight: '85vh',
        overflowY: 'auto',
        padding: '24px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-card)',
        position: 'relative'
      }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'var(--bg-hover)',
            border: '1px solid var(--border-color)',
            borderRadius: '9999px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-primary)'
          }}
        >
          <X size={16} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
          <div style={{
            background: 'rgba(79, 70, 229, 0.08)',
            color: '#4f46e5',
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(79, 70, 229, 0.3)'
          }}>
            <Bookmark size={20} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)' }}>Saved NCERT Solutions</h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {bookmarks.length} Bookmarked questions for quick revision
            </p>
          </div>
        </div>

        {bookmarks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
            <Bookmark size={44} style={{ margin: '0 auto 1rem', opacity: 0.3, color: '#4f46e5' }} />
            <h4 style={{ color: 'var(--text-primary)' }}>No bookmarked solutions yet</h4>
            <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>
              Click the "Save" button on any NCERT question solution to bookmark it here for instant revision.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {bookmarks.map((sol) => (
              <div key={sol.id} style={{
                background: 'var(--bg-hover)',
                padding: '16px',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="badge badge-primary">{sol.questionNo}</span>
                  <button
                    onClick={() => onRemoveBookmark(sol.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#ef4444',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>

                <div style={{ fontWeight: 800, fontSize: '0.92rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  Q. {sol.questionText}
                </div>

                <div style={{ fontSize: '0.86rem', color: '#4f46e5', fontWeight: 800 }}>
                  Answer: {sol.finalAnswer}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
