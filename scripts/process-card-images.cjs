const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processImages() {
  const artifactDir = 'C:\\Users\\manojkmr2403\\.gemini\\antigravity-ide\\brain\\1d2d977f-193f-46e1-bd71-25d67b979037';
  const publicDir = path.resolve(__dirname, '..', 'public');

  const files = [
    {
      src: path.join(artifactDir, 'ncert_books_3d_icon_1788693198333.jpg'),
      iconName: 'icon-ncert-books-3d.png',
      cardName: 'card-ncert-books-render.png'
    },
    {
      src: path.join(artifactDir, 'ncert_notes_3d_icon_1788693212702.jpg'),
      iconName: 'icon-ncert-notes-3d.png',
      cardName: 'card-ncert-notes-render.png'
    },
    {
      src: path.join(artifactDir, 'nios_books_3d_icon_1788693231356.jpg'),
      iconName: 'icon-nios-books-3d.png',
      cardName: 'card-nios-books-render.png'
    },
    {
      src: path.join(artifactDir, 'nios_notes_3d_icon_1788693249033.jpg'),
      iconName: 'icon-nios-notes-3d.png',
      cardName: 'card-nios-notes-render.png'
    }
  ];

  for (const item of files) {
    if (!fs.existsSync(item.src)) {
      console.error('File not found:', item.src);
      continue;
    }

    // Read image and make black background transparent
    const { data, info } = await sharp(item.src)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const width = info.width;
    const height = info.height;
    const channels = info.channels; // 4: r, g, b, a

    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = (r + g + b) / 3;

      // Smooth alpha mask for dark background
      if (brightness < 10) {
        data[i + 3] = 0; // Fully transparent
      } else if (brightness < 28) {
        // Feather edge
        data[i + 3] = Math.floor(((brightness - 10) / 18) * 255);
      }
    }

    const transparentBuffer = await sharp(data, {
      raw: { width, height, channels: 4 }
    })
      .trim() // Trim any transparent excess
      .png({ quality: 100 })
      .toBuffer();

    // Resize to 256x256 for icon
    await sharp(transparentBuffer)
      .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 100 })
      .toFile(path.join(publicDir, item.iconName));

    // Save 512x512 for high-res card
    await sharp(transparentBuffer)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 100 })
      .toFile(path.join(publicDir, item.cardName));

    console.log(`✓ Processed transparent assets: ${item.iconName} & ${item.cardName}`);
  }

  console.log('\n✨ All 4 theme-adaptive 3D icons processed and saved to public/ with 100% transparent backgrounds!');
}

processImages().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
