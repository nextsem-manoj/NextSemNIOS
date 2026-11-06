import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';

interface AdMobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdCompleted: () => void;
  adTitle?: string;
}

export const AdMobModal: React.FC<AdMobModalProps> = ({
  isOpen,
  onClose,
  onAdCompleted,
  adTitle = 'CBSE Class 12 Nextsem Prep & Sample Papers'
}) => {
  const [countdown, setCountdown] = useState<number>(3);
  const [canSkip, setCanSkip] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(3);
      setCanSkip(false);
      return;
    }

    setCountdown(3);
    setCanSkip(false);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanSkip(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSkipOrClose = () => {
    onClose();
    onAdCompleted();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999999,
      background: 'rgba(0, 0, 0, 0.92)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      
      {/* Top AdMob Header Bar */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '20px',
        right: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#ffffff'
      }}>
        {/* Google AdMob Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.12)',
          padding: '6px 14px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          fontSize: '0.78rem',
          fontWeight: 800
        }}>
          <span style={{
            background: '#4285F4',
            color: '#ffffff',
            padding: '1px 6px',
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: 900
          }}>
            Ad
          </span>
          Google AdMob • Interstitial
        </div>

        {/* Skip / Close Button with Countdown Timer */}
        {canSkip ? (
          <button
            onClick={handleSkipOrClose}
            style={{
              background: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 18px',
              fontWeight: 800,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)'
            }}
          >
            Close Ad <X size={16} />
          </button>
        ) : (
          <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            color: '#f59e0b',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.82rem',
            fontWeight: 800
          }}>
            Reward loading in {countdown}s...
          </div>
        )}
      </div>

      {/* Main AdMob Card Body */}
      <div style={{
        maxWidth: '420px',
        width: '100%',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Banner Graphic Header */}
        <div style={{
          height: '180px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              background: 'rgba(0,0,0,0.4)',
              color: '#38bdf8',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.72rem',
              fontWeight: 800,
              backdropFilter: 'blur(4px)'
            }}>
              SPONSORED ADVERTISEMENT
            </span>
            <ShieldCheck size={20} style={{ color: '#ffffff' }} />
          </div>

          <div>
            <div style={{ color: '#ffffff', fontWeight: 900, fontSize: '1.25rem', lineHeight: 1.2 }}>
              {adTitle}
            </div>
            <div style={{ color: '#93c5fd', fontSize: '0.82rem', marginTop: '4px', fontWeight: 700 }}>
              Official Class 12 Question Bank & Mock Test Series 2025-2026
            </div>
          </div>
        </div>

        {/* Ad Body Content */}
        <div style={{ padding: '24px', color: '#cbd5e1' }}>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.5, margin: '0 0 20px' }}>
            Get instant access to 500+ Competency-Based MCQs, Revision Mind Maps, and 100% Solved CBSE Previous Year Papers.
          </p>

          <a
            href="https://nextsem-ncert-2403.web.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSkipOrClose}
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              padding: '14px 20px',
              borderRadius: '14px',
              fontWeight: 900,
              fontSize: '0.95rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)',
              textAlign: 'center'
            }}
          >
            Install Nextsem Learning App ↗ <ExternalLink size={18} />
          </a>
        </div>

        {/* AdMob Footer Policy */}
        <div style={{
          background: 'rgba(0,0,0,0.3)',
          padding: '12px 20px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          color: '#64748b'
        }}>
          <span>Ad Unit: ca-app-pub-3904070831215442/interstitial</span>
          <span>Google AdMob Verified</span>
        </div>
      </div>

    </div>
  );
};
