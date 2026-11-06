/**
 * ═════════════════════════════════════════════════════════════════════════════
 * StudyGuide Live Auto-Update Engine
 * Author: Er. Manoj Kumar
 *
 * Ensures all web clients, installed PWAs, and Android App instances instantly
 * detect when a new build or content change has been deployed and update seamlessly.
 * ═════════════════════════════════════════════════════════════════════════════
 */

export interface VersionInfo {
  version: string;
  buildId: string;
  buildTime: number;
  timestamp: string;
  appName: string;
}

const LOCAL_VERSION_KEY = 'nextsem_active_build_id';

export async function fetchRemoteVersion(): Promise<VersionInfo | null> {
  try {
    const response = await fetch(`/version.json?t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (err) {
    return null;
  }
}

export function getLocalBuildId(): string | null {
  try {
    return localStorage.getItem(LOCAL_VERSION_KEY);
  } catch {
    return null;
  }
}

export function saveLocalBuildId(buildId: string): void {
  try {
    localStorage.setItem(LOCAL_VERSION_KEY, buildId);
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Triggers full client refresh and forces service worker cache purge
 */
export async function applyUpdateNow(): Promise<void> {
  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg && reg.waiting) {
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      } else if (reg) {
        await reg.update();
      }
    }
  } catch {
    // Ignore and proceed to reload
  }
  window.location.reload();
}

