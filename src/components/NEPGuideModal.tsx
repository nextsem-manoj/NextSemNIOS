import React from 'react';
import { X, Sparkles, CheckCircle2, GraduationCap, ShieldCheck } from 'lucide-react';

interface NEPGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NEPGuideModal: React.FC<NEPGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '680px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '28px',
        position: 'relative',
        boxShadow: 'var(--shadow-xl)'
      }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-hover)',
            border: 'none',
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
          <X size={18} />
        </button>

        {/* Modal Content */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }} className="badge badge-nep">
          <Sparkles size={14} /> National Education Policy (NEP 2020)
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Understanding NCERT Solutions under NEP 2020
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          The New Education Policy (NEP 2020) replaces rote learning with <strong>Competency-Based Education (CBE)</strong> and experiential understanding. Here is how Nextsem NCERT Solutions are structured for maximum academic success:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'var(--bg-hover)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', gap: '12px' }}>
            <GraduationCap size={24} style={{ color: 'var(--primary-500)', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '0.98rem' }}>5+3+3+4 Pedagogical Structure</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Foundational (Classes 1-2), Preparatory (Classes 3-5), Middle (Classes 6-8), and Secondary/Sr. Secondary (Classes 9-12).
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--bg-hover)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', gap: '12px' }}>
            <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '0.98rem' }}>30% Rationalized NCERT Content</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                NCERT dropped redundant chapters to focus deeply on core concepts, critical thinking, and application skills.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--bg-hover)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', gap: '12px' }}>
            <ShieldCheck size={24} style={{ color: '#f59e0b', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '0.98rem' }}>Competency-Based Questions (CBQs)</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Board exams now feature 50%+ real-world case studies, assertions, and reasoning questions available in Nextsem CBQ tabs.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1.8rem', textAlign: 'right' }}>
          <button className="btn btn-primary" onClick={onClose}>
            Got it, Explore NCERT App
          </button>
        </div>

      </div>
    </div>
  );
};
