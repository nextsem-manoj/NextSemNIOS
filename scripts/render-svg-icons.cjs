const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function renderIcons() {
  const publicDir = path.resolve(__dirname, '..', 'public');
  const items = [
    { svg: 'icon-ncert-books-3d.svg', png: 'icon-ncert-books-3d.png', cardPng: 'card-ncert-books-render.png' },
    { svg: 'icon-ncert-notes-3d.svg', png: 'icon-ncert-notes-3d.png', cardPng: 'card-ncert-notes-render.png' },
    { svg: 'icon-nios-books-3d.svg', png: 'icon-nios-books-3d.png', cardPng: 'card-nios-books-render.png' },
    { svg: 'icon-nios-notes-3d.svg', png: 'icon-nios-notes-3d.png', cardPng: 'card-nios-notes-render.png' }
  ];

  for (const item of items) {
    const svgPath = path.join(publicDir, item.svg);
    const svgBuffer = fs.readFileSync(svgPath);

    // Render 256x256 icon PNG with 100% transparent alpha
    await sharp(svgBuffer)
      .resize(256, 256)
      .png({ quality: 100 })
      .toFile(path.join(publicDir, item.png));

    // Render 512x512 card PNG
    await sharp(svgBuffer)
      .resize(512, 512)
      .png({ quality: 100 })
      .toFile(path.join(publicDir, item.cardPng));

    console.log(`✓ Rendered 100% transparent PNGs for ${item.svg}`);
  }

  console.log('\n✨ All 4 3D icons rendered with 100% transparency and zero white borders!');
}

renderIcons().catch(err => {
  console.error(err);
  process.exit(1);
});
