import sharp from 'sharp';
import fs from 'fs';

async function generateGlossy3DBadges() {
  console.log('Generating ultra-glossy 3D emblems for NCERT and NIOS...');

  // 1. Process NCERT clean transparent emblem (crop & clean)
  const ncertInput = await sharp('public/official-ncert-emblem.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const nw = ncertInput.info.width;
  const nh = ncertInput.info.height;
  const nd = ncertInput.data;

  // Dark variant (for light cards) & Light/Gold variant (for dark glossy cards)
  const ncertDarkBuf = Buffer.alloc(nw * nh * 4);
  const ncertWhiteBuf = Buffer.alloc(nw * nh * 4);

  for (let i = 0; i < nw * nh; i++) {
    const r = nd[i * 4];
    const g = nd[i * 4 + 1];
    const b = nd[i * 4 + 2];
    const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

    if (brightness < 165) {
      const alpha = Math.min(255, Math.max(0, Math.round((190 - brightness) / 165 * 255)));
      
      // Dark Navy version
      ncertDarkBuf[i * 4] = 15;
      ncertDarkBuf[i * 4 + 1] = 23;
      ncertDarkBuf[i * 4 + 2] = 42;
      ncertDarkBuf[i * 4 + 3] = alpha;

      // Pure White/Silver version (for glossy dark disc)
      ncertWhiteBuf[i * 4] = 255;
      ncertWhiteBuf[i * 4 + 1] = 255;
      ncertWhiteBuf[i * 4 + 2] = 255;
      ncertWhiteBuf[i * 4 + 3] = alpha;
    }
  }

  await sharp(ncertDarkBuf, { raw: { width: nw, height: nh, channels: 4 } })
    .trim()
    .png()
    .toFile('public/ncert-emblem-clean.png');

  await sharp(ncertWhiteBuf, { raw: { width: nw, height: nh, channels: 4 } })
    .trim()
    .png()
    .toFile('public/ncert-emblem-white.png');

  console.log('Saved clean NCERT emblems.');

  // 2. Process NIOS clean transparent emblem (crop bottom dark strip & trim)
  const niosInput = await sharp('public/official-nios-emblem.png')
    .extract({ left: 0, top: 0, width: 380, height: 302 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const niosW = niosInput.info.width;
  const niosH = niosInput.info.height;
  const niosData = niosInput.data;
  const niosBuf = Buffer.alloc(niosW * niosH * 4);

  for (let i = 0; i < niosW * niosH; i++) {
    const r = niosData[i * 4];
    const g = niosData[i * 4 + 1];
    const b = niosData[i * 4 + 2];

    if (r > 235 && g > 235 && b > 235) {
      // transparent background
      niosBuf[i * 4] = 0;
      niosBuf[i * 4 + 1] = 0;
      niosBuf[i * 4 + 2] = 0;
      niosBuf[i * 4 + 3] = 0;
    } else {
      niosBuf[i * 4] = r;
      niosBuf[i * 4 + 1] = g;
      niosBuf[i * 4 + 2] = b;
      niosBuf[i * 4 + 3] = 255;
    }
  }

  await sharp(niosBuf, { raw: { width: niosW, height: niosH, channels: 4 } })
    .trim()
    .png()
    .toFile('public/nios-emblem-clean.png');

  console.log('Saved clean NIOS emblem.');

  // 3. Composite NCERT Glossy 3D Medallion Badge (512x512)
  const ncertCleanResized = await sharp('public/ncert-emblem-clean.png')
    .resize(230, 290, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const ncert3DSvg = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Outer Ambient Radial Glow -->
      <radialGradient id="ncertHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#6366f1" stop-opacity="0.45"/>
        <stop offset="60%" stop-color="#4f46e5" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#4f46e5" stop-opacity="0"/>
      </radialGradient>

      <!-- Glossy Disc Gradient -->
      <linearGradient id="ncertDiscGrad" x1="15%" y1="10%" x2="85%" y2="90%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.98"/>
        <stop offset="25%" stop-color="#f8fafc" stop-opacity="0.95"/>
        <stop offset="70%" stop-color="#e2e8f0" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#cbd5e1" stop-opacity="0.95"/>
      </linearGradient>

      <!-- Outer Metallic Ring -->
      <linearGradient id="ncertRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#818cf8"/>
        <stop offset="30%" stop-color="#4f46e5"/>
        <stop offset="70%" stop-color="#312e81"/>
        <stop offset="100%" stop-color="#6366f1"/>
      </linearGradient>

      <!-- Glass Specular Reflection Highlight -->
      <linearGradient id="specularGleam" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.75"/>
        <stop offset="45%" stop-color="#ffffff" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>

      <filter id="shadow3D" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#1e1b4b" flood-opacity="0.38"/>
      </filter>

      <clipPath id="discClip">
        <circle cx="256" cy="256" r="190"/>
      </clipPath>
    </defs>

    <!-- Glowing Background Aura -->
    <circle cx="256" cy="256" r="240" fill="url(#ncertHalo)"/>

    <!-- 3D Shadowed Master Disc -->
    <g filter="url(#shadow3D)">
      <!-- Outer Bevel Ring -->
      <circle cx="256" cy="256" r="202" fill="url(#ncertRingGrad)"/>
      <circle cx="256" cy="256" r="196" fill="#ffffff" fill-opacity="0.8"/>
      <circle cx="256" cy="256" r="192" fill="url(#ncertRingGrad)"/>

      <!-- Inner High-Gloss Surface -->
      <circle cx="256" cy="256" r="190" fill="url(#ncertDiscGrad)"/>
    </g>

    <!-- Glass Dome Highlight (Clipped) -->
    <g clip-path="url(#discClip)">
      <!-- Top Specular Crescent Arc -->
      <ellipse cx="256" cy="140" rx="170" ry="100" fill="url(#specularGleam)"/>
      <!-- Subtle Bottom Rim Glow -->
      <ellipse cx="256" cy="420" rx="140" ry="50" fill="#6366f1" fill-opacity="0.12"/>
    </g>

    <!-- Golden NCERT Verification Pill Badge (Top Floating) -->
    <g transform="translate(146, 26)">
      <rect width="220" height="34" rx="17" fill="#4f46e5" filter="url(#shadow3D)"/>
      <rect x="1" y="1" width="218" height="32" rx="16" fill="none" stroke="#a5b4fc" stroke-width="1.5"/>
      <text x="110" y="22" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle" letter-spacing="1.2">OFFICIAL NCERT</text>
    </g>
  </svg>
  `;

  // Composite NCERT SVG with emblem image
  await sharp(Buffer.from(ncert3DSvg))
    .composite([
      {
        input: ncertCleanResized,
        top: 110,
        left: 141
      }
    ])
    .png()
    .toFile('public/icon-ncert-official-3d.png');

  console.log('Saved public/icon-ncert-official-3d.png');

  // 4. Composite NIOS Glossy 3D Medallion Badge (512x512)
  const niosCleanResized = await sharp('public/nios-emblem-clean.png')
    .resize(270, 240, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const nios3DSvg = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Outer Ambient Radial Glow -->
      <radialGradient id="niosHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.45"/>
        <stop offset="50%" stop-color="#2563eb" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
      </radialGradient>

      <!-- Glossy Disc Gradient -->
      <linearGradient id="niosDiscGrad" x1="15%" y1="10%" x2="85%" y2="90%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.98"/>
        <stop offset="25%" stop-color="#fffbeb" stop-opacity="0.95"/>
        <stop offset="70%" stop-color="#f1f5f9" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#e2e8f0" stop-opacity="0.95"/>
      </linearGradient>

      <!-- Outer Metallic Ring (Blue & Amber Gold) -->
      <linearGradient id="niosRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fbbf24"/>
        <stop offset="30%" stop-color="#d97706"/>
        <stop offset="70%" stop-color="#1e40af"/>
        <stop offset="100%" stop-color="#3b82f6"/>
      </linearGradient>

      <!-- Glass Specular Reflection Highlight -->
      <linearGradient id="specularGleamNios" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.75"/>
        <stop offset="45%" stop-color="#ffffff" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>

      <filter id="shadow3DNios" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#1e3a8a" flood-opacity="0.38"/>
      </filter>

      <clipPath id="discClipNios">
        <circle cx="256" cy="256" r="190"/>
      </clipPath>
    </defs>

    <!-- Glowing Background Aura -->
    <circle cx="256" cy="256" r="240" fill="url(#niosHalo)"/>

    <!-- 3D Shadowed Master Disc -->
    <g filter="url(#shadow3DNios)">
      <!-- Outer Bevel Ring -->
      <circle cx="256" cy="256" r="202" fill="url(#niosRingGrad)"/>
      <circle cx="256" cy="256" r="196" fill="#ffffff" fill-opacity="0.8"/>
      <circle cx="256" cy="256" r="192" fill="url(#niosRingGrad)"/>

      <!-- Inner High-Gloss Surface -->
      <circle cx="256" cy="256" r="190" fill="url(#niosDiscGrad)"/>
    </g>

    <!-- Glass Dome Highlight (Clipped) -->
    <g clip-path="url(#discClipNios)">
      <!-- Top Specular Crescent Arc -->
      <ellipse cx="256" cy="140" rx="170" ry="100" fill="url(#specularGleamNios)"/>
      <!-- Subtle Bottom Amber Glow -->
      <ellipse cx="256" cy="420" rx="140" ry="50" fill="#f59e0b" fill-opacity="0.15"/>
    </g>

    <!-- Golden NIOS Verification Pill Badge (Top Floating) -->
    <g transform="translate(156, 26)">
      <rect width="200" height="34" rx="17" fill="#d97706" filter="url(#shadow3DNios)"/>
      <rect x="1" y="1" width="198" height="32" rx="16" fill="none" stroke="#fde68a" stroke-width="1.5"/>
      <text x="100" y="22" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle" letter-spacing="1.2">OFFICIAL NIOS</text>
    </g>
  </svg>
  `;

  // Composite NIOS SVG with emblem image
  await sharp(Buffer.from(nios3DSvg))
    .composite([
      {
        input: niosCleanResized,
        top: 135,
        left: 121
      }
    ])
    .png()
    .toFile('public/icon-nios-official-3d.png');

  console.log('Saved public/icon-nios-official-3d.png');
}

generateGlossy3DBadges().catch(console.error);
