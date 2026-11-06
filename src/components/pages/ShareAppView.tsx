import React, { useState } from 'react';
import { ArrowLeft, Share2, Copy, Check, MessageCircle, Send } from 'lucide-react';

interface ShareAppViewProps {
  onBack: () => void;
}

export const ShareAppView: React.FC<ShareAppViewProps> = ({ onBack }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const shareUrl = 'https://nextsem-ncert-2403.web.app';
  const shareText = '📚 Check out StudyGuide by Nextsem! Free NCERT & NIOS textbooks, notes & solutions: ' + shareUrl;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'StudyGuide by Nextsem',
          text: 'Free NCERT & NIOS textbooks, chapter notes & step-by-step solutions by Nextsem!',
          url: shareUrl
        });
      } catch (err) {
        console.log('Share canceled', err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '1rem 0' }}>
      
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
          Share StudyGuide by Nextsem
        </h2>
      </div>

      {/* Hero Card */}
      <div style={{
        background: 'var(--primary-gradient)',
        borderRadius: '20px',
        padding: '28px 20px',
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: '1.5rem',
        boxShadow: '0 8px 24px rgba(10, 37, 64, 0.25)'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'rgba(212, 175, 55, 0.2)',
          border: '1.5px solid #d4af37',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px'
        }}>
          <Share2 size={32} style={{ color: '#d4af37' }} />
        </div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>
          Share with Classmates & Friends
        </h3>
        <p style={{ fontSize: '0.88rem', opacity: 0.9, maxWidth: '440px', margin: '0 auto' }}>
          Help fellow students access free, rationalized NCERT textbooks with offline reading support!
        </p>
      </div>

      {/* Share Actions Card */}
      <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', marginBottom: '1.5rem' }}>
        
        {/* Link Box */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 14px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          background: 'var(--bg-hover)',
          marginBottom: '1.25rem'
        }}>
          <input
            type="text"
            readOnly
            value={shareUrl}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '0.88rem',
              outline: 'none'
            }}
          />
          <button
            onClick={handleCopy}
            className="btn"
            style={{
              background: copied ? '#10b981' : 'var(--gold-gradient)',
              color: copied ? '#ffffff' : '#071428',
              borderRadius: '8px',
              padding: '6px 14px',
              fontWeight: 800,
              fontSize: '0.82rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? ' Copied!' : ' Copy Link'}
          </button>
        </div>

        {/* Social Share Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: '#25D366',
              color: '#ffffff',
              borderRadius: '10px',
              padding: '12px',
              fontWeight: 800,
              fontSize: '0.88rem',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <MessageCircle size={18} /> WhatsApp
          </a>

          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: '#0088cc',
              color: '#ffffff',
              borderRadius: '10px',
              padding: '12px',
              fontWeight: 800,
              fontSize: '0.88rem',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Send size={18} /> Telegram
          </a>
        </div>

        <button
          onClick={handleShareNative}
          className="btn btn-outline"
          style={{
            width: '100%',
            marginTop: '12px',
            padding: '12px',
            borderRadius: '10px',
            fontWeight: 800,
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Share2 size={18} /> Native Share Options
        </button>

      </div>

    </div>
  );
};
