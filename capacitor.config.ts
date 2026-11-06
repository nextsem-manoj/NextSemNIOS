import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'online.nextsem.ncert',
  appName: 'StudyGuide by Nextsem',
  webDir: 'dist',
  server: {
    // Live hosted production target ensures any web or content update is instantly
    // accessible on all installed Android apps without needing to rebuild or reinstall APKs.
    // When offline, Android WebView utilizes Service Worker & Cache Storage fallback.
    url: process.env.CAP_LOCAL_DEV === 'true'
      ? 'http://192.168.29.170:3002'
      : 'https://nextsem-ncert-2403.web.app',
    cleartext: true,
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
