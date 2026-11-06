import React, { useEffect, useState } from 'react';
import { Sparkles, RefreshCw, X } from 'lucide-react';
import { fetchRemoteVersion, getLocalBuildId, saveLocalBuildId, applyUpdateNow } from '../utils/versionCheck';
import type { VersionInfo } from '../utils/versionCheck';

export const AutoUpdateBanner: React.FC = () => {
  const [updateAvailable, setUpdateAvailable] = useState<boolean>(false);
  const [newVersion, setNewVersion] = useState<VersionInfo | null>(null);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    const check = async () => {
      const remote = await fetchRemoteVersion();
      if (!remote) return;

      const localId = getLocalBuildId();
      if (!localId) {
        // First session: store current build ID
        saveLocalBuildId(remote.buildId);
        return;
      }

      if (localId !== remote.buildId) {
        console.log(`[StudyGuide Auto-Update] Build change detected: ${localId} -> ${remote.buildId}`);
        setNewVersion(remote);
        setUpdateAvailable(true);
      }
    };

    // Initial check after 3 seconds
    const initialTimeout = setTimeout(check, 3000);

    // Periodic check every 45 seconds
    timer = setInterval(check, 45000);

    // Check when user returns to the app
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        check();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  if (!updateAvailable || dismissed || !newVersion) {
    return null;
  }

  const handleApply = () => {
    setIsUpdating(true);
    saveLocalBuildId(newVersion.buildId);
    applyUpdateNow();
  };

  return (
    <aside
      aria-label="App update notification"
      style={{
        position: 'fixed',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        color: '#ffffff',
        padding: '10px 18px',
        borderRadius: '9999px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 0 20px rgba(99, 102, 241, 0.4)',
        border: '1px solid rgba(165, 180, 252, 0.3)',
        fontSize: '13px',
        fontWeight: 600,
        maxWidth: '92vw',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)'
      }}>
        <Sparkles size={14} style={{ color: '#fbbf24' }} />
      </div>

      <span>
        New lessons &amp; features updated!
      </span>

      <button
        onClick={handleApply}
        disabled={isUpdating}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: '#4f46e5',
          color: '#ffffff',
          border: 'none',
          padding: '6px 14px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 700,
          cursor: isUpdating ? 'wait' : 'pointer',
          boxShadow: '0 2px 8px rgba(79, 70, 229, 0.5)',
          transition: 'all 0.15s ease'
        }}
      >
        <RefreshCw size={12} className={isUpdating ? 'spin' : ''} />
        {isUpdating ? 'Updating...' : 'Refresh'}
      </button>

      <button
        onClick={() => setDismissed(true)}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.7)',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center'
        }}
        aria-label="Dismiss notification"
      >
        <X size={14} />
      </button>
    </aside>
  );
};
