import React from 'react';
import { Wrench, Sparkles, X } from 'lucide-react';

interface WorkInProgressModalProps {
  isOpen: boolean;
  categoryName: string;
  onClose: () => void;
}

export const WorkInProgressModal: React.FC<WorkInProgressModalProps> = ({
  isOpen,
  categoryName,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(6px)',
          animation: 'fadeIn 0.2s ease'
        }}
      />

      {/* Modal Dialog */}
      <div
        className="glass-card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
          background: 'var(--bg-card)',
          borderRadius: '24px',
          border: '1px solid var(--border-color)',
          padding: '28px 24px',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          zIndex: 510,
          animation: 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <X size={20} />
        </button>

        {/* Animated Icon Badge */}
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          boxShadow: '0 8px 24px rgba(245, 158, 11, 0.35)'
        }}>
          <Wrench size={32} />
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(245, 158, 11, 0.12)',
          color: '#f59e0b',
          fontSize: '0.78rem',
          fontWeight: 800,
          padding: '4px 12px',
          borderRadius: '9999px',
          marginBottom: '12px'
        }}>
          <Sparkles size={14} /> Work in Progress
        </div>

        <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
          {categoryName}
        </h3>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '10px 0 20px', lineHeight: 1.5 }}>
          Nextsem Academy is currently digitizing & updating rationalized NEP 2025-2026 content for this section. Please check back soon!
        </p>

        <button
          onClick={onClose}
          className="btn"
          style={{
            width: '100%',
            background: 'var(--gold-gradient)',
            color: '#071428',
            fontWeight: 900,
            fontSize: '0.95rem',
            padding: '12px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(212, 175, 55, 0.3)'
          }}
        >
          Got it, Back to App
        </button>
      </div>
    </div>
  );
};
