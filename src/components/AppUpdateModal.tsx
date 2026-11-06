import React, { useState, useEffect } from 'react';
import { Sparkles, Download, CheckCircle, ExternalLink, X, RefreshCw, Zap } from 'lucide-react';
import { fetchRemoteVersion, getLocalBuildId, saveLocalBuildId, applyUpdateNow } from '../utils/versionCheck';
import type { VersionInfo } from '../utils/versionCheck';

interface AppUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentVersion?: string;
  latestVersion?: string;
}

export const AppUpdateModal: React.FC<AppUpdateModalProps> = ({
  isOpen,
  onClose,
  currentVersion = '1.0.5',
  latestVersion = '1.0.5'
}) => {
  const [checking, setChecking] = useState<boolean>(false);
  const [remoteInfo, setRemoteInfo] = useState<VersionInfo | null>(null);
  const [hasNewWebBuild, setHasNewWebBuild] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;

    const inspect = async () => {
      setChecking(true);
      const info = await fetchRemoteVersion();
      if (info) {
        setRemoteInfo(info);
        const local = getLocalBuildId();
        if (local && local !== info.buildId) {
          setHasNewWebBuild(true);
        }
      }
      setChecking(false);
    };

    inspect();
  }, [isOpen]);

  if (!isOpen) return null;

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=online.nextsem.ncert';
  const playStoreIntent = 'market://details?id=online.nextsem.ncert';

  const handleUpdateClick = () => {
    try {
      window.location.href = playStoreIntent;
      setTimeout(() => {
        window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
      }, 500);
    } catch {
      window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleRecheck = async () => {
    setChecking(true);
    const info = await fetchRemoteVersion();
    if (info) {
      setRemoteInfo(info);
      const local = getLocalBuildId();
      if (local && local !== info.buildId) {
        setHasNewWebBuild(true);
      } else {
        setHasNewWebBuild(false);
      }
    }
    setTimeout(() => {
      setChecking(false);
    }, 600);
  };

  const handleApplyWebUpdate = () => {
    if (remoteInfo) {
      saveLocalBuildId(remoteInfo.buildId);
    }
    applyUpdateNow();
  };

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
      padding: '16px',
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      animation: 'fadeIn 0.2s ease-in-out'
    }}>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '24px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(79, 70, 229, 0.2)',
        width: '100%',
        maxWidth: '440px',
        padding: '24px',
        position: 'relative',
        color: 'var(--text-primary)',
        textAlign: 'center'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'var(--bg-hover)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-muted)',
            borderRadius: '10px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Brand App Icon with Pulsing Halo */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
          margin: '0 auto 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(79, 70, 229, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.25)'
        }}>
          <img
            src="/app-logo.png"
            alt="Nextsem App"
            style={{ width: '48px', height: '48px', objectFit: 'contain' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: hasNewWebBuild ? 'rgba(245, 158, 11, 0.15)' : 'rgba(99, 102, 241, 0.14)',
          border: `1px solid ${hasNewWebBuild ? 'rgba(245, 158, 11, 0.4)' : 'rgba(99, 102, 241, 0.35)'}`,
          color: hasNewWebBuild ? '#f59e0b' : '#818cf8',
          fontSize: '0.74rem',
          fontWeight: 900,
          padding: '4px 12px',
          borderRadius: '9999px',
          marginBottom: '10px',
          letterSpacing: '0.04em'
        }}>
          <Sparkles size={13} />
          {hasNewWebBuild ? 'LIVE CLOUD UPDATE DETECTED' : 'LIVE VERSION CHECK'}
        </div>

        <h2 style={{
          fontSize: '1.35rem',
          fontWeight: 900,
          margin: '0 0 6px',
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)'
        }}>
          {hasNewWebBuild ? 'New Update Ready!' : 'You Are Up To Date!'}
        </h2>

        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          margin: '0 0 16px',
          lineHeight: 1.45
        }}>
          {hasNewWebBuild
            ? 'A fresh update with newest NCERT/NIOS lessons, practice tests, and solutions is ready to apply.'
            : 'All textbook PDFs, question banks, and solutions are synchronized with the latest Nextsem cloud release.'}
        </p>

        {/* Version Compare Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          background: 'var(--bg-hover)',
          borderRadius: '14px',
          border: '1px solid var(--border-color)',
          padding: '10px 14px',
          marginBottom: '18px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Installed</div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              v{remoteInfo ? remoteInfo.version : currentVersion}
            </div>
          </div>
          <div style={{ height: '24px', width: '1px', background: 'var(--border-color)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase' }}>Cloud Release</div>
            <div style={{ fontSize: '0.94rem', fontWeight: 900, color: '#10b981' }}>
              {remoteInfo ? remoteInfo.buildId : `v${latestVersion}`} ✨
            </div>
          </div>
        </div>

        {/* Key Features of New Version */}
        <div style={{
          textAlign: 'left',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '14px',
          padding: '12px 14px',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Platform Synchronization:
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <CheckCircle size={14} style={{ color: '#10b981', flexShrink: 0 }} />
            <span>Instant OTA Live-Update across Mobile &amp; Desktop</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <CheckCircle size={14} style={{ color: '#10b981', flexShrink: 0 }} />
            <span>Real-time Service Worker cache purge &amp; fast revalidation</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <CheckCircle size={14} style={{ color: '#10b981', flexShrink: 0 }} />
            <span>Continuous sync across Firebase, Vercel &amp; Android App</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {hasNewWebBuild ? (
            <button
              onClick={handleApplyWebUpdate}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '12px 18px',
                borderRadius: '12px',
                fontWeight: 900,
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                boxShadow: '0 8px 24px rgba(79, 70, 229, 0.35)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Zap size={18} />
              <span>Apply Live Update Now</span>
            </button>
          ) : (
            <button
              onClick={handleUpdateClick}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '12px 18px',
                borderRadius: '12px',
                fontWeight: 900,
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(79, 70, 229, 0.35)'
              }}
            >
              <Download size={18} />
              <span>Open on Google Play</span>
              <ExternalLink size={15} />
            </button>
          )}

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleRecheck}
              disabled={checking}
              className="btn btn-outline"
              style={{
                flex: 1,
                padding: '9px 14px',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <RefreshCw size={14} className={checking ? 'spin' : ''} />
              <span>{checking ? 'Checking...' : 'Check Again'}</span>
            </button>

            <button
              onClick={onClose}
              className="btn btn-outline"
              style={{
                flex: 1,
                padding: '9px 14px',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-muted)'
              }}
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
