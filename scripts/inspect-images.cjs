const path = require('path');
const sharp = require('sharp');

async function inspectImages() {
  const publicDir = path.resolve(__dirname, '..', 'public');
  const files = [
    'icon-ncert-books-3d.png',
    'icon-ncert-notes-3d.png',
    'icon-nios-books-3d.png',
    'icon-nios-notes-3d.png'
  ];

  for (const f of files) {
    const filePath = path.join(publicDir, f);
    const { data, info } = await sharp(filePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    
    // Check top-left pixel (0,0)
    const r0 = data[0], g0 = data[1], b0 = data[2], a0 = data[3];
    // Check top-right pixel (width-1, 0)
    const idxTR = (info.width - 1) * 4;
    const rTR = data[idxTR], gTR = data[idxTR + 1], bTR = data[idxTR + 2], aTR = data[idxTR + 3];

    console.log(`${f} (${info.width}x${info.height}):`);
    console.log(`  Top-Left (0,0): rgba(${r0}, ${g0}, ${b0}, ${a0})`);
    console.log(`  Top-Right: rgba(${rTR}, ${gTR}, ${bTR}, ${aTR})`);
  }
}

inspectImages();
