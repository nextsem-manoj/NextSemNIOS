const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateLogos() {
  const rootDir = path.resolve(__dirname, '..');
  const svgPath = path.join(rootDir, 'docs', 'logo', 'nextsem-logo-ncert-nios-app-icon.svg');
  const markSvgPath = path.join(rootDir, 'docs', 'logo', 'nextsem-logo-ncert-nios-mark.svg');
  const horizontalSvgPath = path.join(rootDir, 'docs', 'logo', 'nextsem-logo-ncert-nios-horizontal.svg');

  if (!fs.existsSync(svgPath)) {
    console.error('Source SVG not found:', svgPath);
    process.exit(1);
  }

  const svgBuffer = fs.readFileSync(svgPath);
  const markSvgBuffer = fs.existsSync(markSvgPath) ? fs.readFileSync(markSvgPath) : svgBuffer;

  console.log('Generating high-resolution logo assets from nextsem-logo-ncert-nios-app-icon.svg...');

  // 1. Google Play Assets
  const playDir = path.join(rootDir, 'google_play_assets');
  if (!fs.existsSync(playDir)) fs.mkdirSync(playDir, { recursive: true });

  await sharp(svgBuffer)
    .resize(512, 512)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(playDir, 'app_icon_512x512.png'));
  console.log('✓ Created google_play_assets/app_icon_512x512.png (512x512)');

  // Generate Feature Graphic 1024x500
  const icon300 = await sharp(svgBuffer).resize(300, 300).png().toBuffer();
  const featureGraphicSvg = Buffer.from(`
    <svg width="1024" height="500" viewBox="0 0 1024 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0c1328" />
          <stop offset="60%" stop-color="#17181c" />
          <stop offset="100%" stop-color="#040810" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#20c997" />
          <stop offset="100%" stop-color="#04AA6D" />
        </linearGradient>
        <filter id="cardGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#04AA6D" flood-opacity="0.35"/>
        </filter>
      </defs>

      <!-- Background Canvas -->
      <rect width="1024" height="500" fill="url(#bgGrad)" />
      
      <!-- Subtle Tech Grid Lines -->
      <circle cx="850" cy="250" r="220" fill="none" stroke="#04AA6D" stroke-width="1.5" stroke-opacity="0.15" />
      <circle cx="850" cy="250" r="320" fill="none" stroke="#04AA6D" stroke-width="1" stroke-opacity="0.08" />

      <!-- Left Text Content -->
      <g transform="translate(80, 160)">
        <rect x="0" y="0" width="230" height="34" rx="17" fill="#04AA6D" fill-opacity="0.15" stroke="#04AA6D" stroke-width="1.5" />
        <text x="115" y="22" text-anchor="middle" fill="#04AA6D" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="900" letter-spacing="2">NEXTSEM ACADEMY</text>
        
        <text x="0" y="85" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" letter-spacing="-1">
          NCERT <tspan fill="#04AA6D">&amp;</tspan> NIOS
        </text>
        <text x="0" y="135" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" letter-spacing="-0.5">
          Solutions Hub
        </text>

        <text x="0" y="180" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="600">
          Complete Free Books • Step-by-Step Solutions • Classes 1–12
        </text>
      </g>
    </svg>
  `);

  const bgBuffer = await sharp(featureGraphicSvg).png().toBuffer();
  await sharp(bgBuffer)
    .composite([{ input: icon300, top: 100, left: 660 }])
    .png({ quality: 100 })
    .toFile(path.join(playDir, 'feature_graphic_1024x500.png'));
  console.log('✓ Created google_play_assets/feature_graphic_1024x500.png (1024x500)');

  // 2. Public Directory Web Assets
  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  const webSizes = [
    { name: 'app-icon-512.png', size: 512 },
    { name: 'app-icon-192.png', size: 192 },
    { name: 'app-logo.png', size: 512 },
    { name: 'image-20.png', size: 512 },
    { name: 'image-20-transparent.png', size: 512 },
    { name: 'logo-ncert-solutions.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon.png', size: 64 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-16x16.png', size: 16 }
  ];

  for (const item of webSizes) {
    await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png({ quality: 100 })
      .toFile(path.join(publicDir, item.name));
    console.log(`✓ Created public/${item.name} (${item.size}x${item.size})`);
  }

  // Copy SVG vectors to public
  fs.writeFileSync(path.join(publicDir, 'app-logo.svg'), svgBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), markSvgBuffer);
  console.log('✓ Updated public/app-logo.svg and public/favicon.svg');

  // 3. Android App Launcher Mipmaps (Capacitor)
  const androidResDir = path.join(rootDir, 'android', 'app', 'src', 'main', 'res');
  if (fs.existsSync(androidResDir)) {
    const mipmaps = [
      { dir: 'mipmap-mdpi', iconSize: 48, fgSize: 108 },
      { dir: 'mipmap-hdpi', iconSize: 72, fgSize: 162 },
      { dir: 'mipmap-xhdpi', iconSize: 96, fgSize: 216 },
      { dir: 'mipmap-xxhdpi', iconSize: 144, fgSize: 324 },
      { dir: 'mipmap-xxxhdpi', iconSize: 192, fgSize: 432 }
    ];

    for (const m of mipmaps) {
      const targetFolder = path.join(androidResDir, m.dir);
      if (!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder, { recursive: true });

      // Regular launcher icon
      await sharp(svgBuffer)
        .resize(m.iconSize, m.iconSize)
        .png({ quality: 100 })
        .toFile(path.join(targetFolder, 'ic_launcher.png'));

      // Round launcher icon
      await sharp(svgBuffer)
        .resize(m.iconSize, m.iconSize)
        .png({ quality: 100 })
        .toFile(path.join(targetFolder, 'ic_launcher_round.png'));

      // Foreground launcher icon
      await sharp(svgBuffer)
        .resize(m.fgSize, m.fgSize)
        .png({ quality: 100 })
        .toFile(path.join(targetFolder, 'ic_launcher_foreground.png'));

      console.log(`✓ Updated Android ${m.dir} icons`);
    }
  }

  console.log('\n✨ ALL FINAL APP, WEBSITE, AND PLAY STORE LOGOS GENERATED SUCCESSFULLY!');
}

generateLogos().catch(err => {
  console.error('Error generating logos:', err);
  process.exit(1);
});
