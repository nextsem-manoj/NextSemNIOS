import React, { useEffect, useState } from 'react';
import { X, Volume2, Star } from 'lucide-react';

interface AdMobInterstitialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdMobInterstitialModal: React.FC<AdMobInterstitialModalProps> = ({ isOpen, onClose }) => {
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    if (isOpen) {
      setCountdown(5);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 300,
      background: '#0a0d14',
      display: 'flex',
      flexDirection: 'column',
      color: '#ffffff'
    }}>
      {/* Top Header Bar */}
      <div style={{
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(0,0,0,0.4)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', opacity: 0.8 }}>
          <Volume2 size={18} />
          <span>AdMob Sponsored Content</span>
        </div>

        <button
          onClick={onClose}
          style={{
            background: countdown === 0 ? '#ef4444' : 'rgba(255,255,255,0.2)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '9999px',
            padding: '6px 14px',
            fontSize: '0.82rem',
            fontWeight: 800,
            cursor: countdown === 0 ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          {countdown > 0 ? `Skip Ad in ${countdown}s` : <><X size={16} /> Close Ad</>}
        </button>
      </div>

      {/* Ad Video / Creative Frame (Matching image-9.png & image-13.png) */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)'
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '20px',
          background: 'var(--primary-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          marginBottom: '16px',
          boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)'
        }}>
          🛒
        </div>

        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
          Country Delight & PlatinumRx
        </h3>

        <p style={{ fontSize: '0.9rem', opacity: 0.85, maxWidth: '320px', lineHeight: 1.4, marginBottom: '16px' }}>
          WHO-GMP certified substitutes & farm-fresh daily essentials delivered to your doorstep with 0% brokerage.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.88rem', color: '#f59e0b', marginBottom: '24px' }}>
          <Star size={16} fill="#f59e0b" />
          <Star size={16} fill="#f59e0b" />
          <Star size={16} fill="#f59e0b" />
          <Star size={16} fill="#f59e0b" />
          <span style={{ color: '#fff', marginLeft: '6px', fontWeight: 700 }}>4.8 (100k+ Reviews)</span>
        </div>

        <button
          onClick={onClose}
          style={{
            width: '100%',
            maxWidth: '320px',
            padding: '14px 28px',
            borderRadius: '9999px',
            background: 'var(--primary-gradient)',
            color: '#ffffff',
            border: 'none',
            fontWeight: 800,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(16, 185, 129, 0.35)'
          }}
        >
          Install App from Google Play
        </button>
      </div>

      {/* Ad Banner Footer */}
      <div style={{
        padding: '14px 16px',
        background: '#090d16',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>
          AdMob Interstitial Ad #2403
        </div>
        <span style={{ fontSize: '0.75rem', background: '#10b981', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
          Ad
        </span>
      </div>
    </div>
  );
};
