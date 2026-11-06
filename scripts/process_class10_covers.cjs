const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function extractCovers() {
  const sourceImage = 'C:/Users/manojkmr2403/.gemini/antigravity-ide/brain/b6ed1a38-bc99-4c07-b48e-9e7dadb5fff1/.user_uploaded/media_1788865943179.png';
  const publicBookCoversDir = path.join(__dirname, '../public/book-covers');
  if (!fs.existsSync(publicBookCoversDir)) fs.mkdirSync(publicBookCoversDir, { recursive: true });

  const crops = [
    {
      name: 'class10-maths.png',
      region: { left: 148, top: 260, width: 108, height: 152 }
    },
    {
      name: 'class10-science.png',
      region: { left: 252, top: 246, width: 118, height: 154 }
    },
    {
      name: 'class10-contemporary-india.png',
      alias: 'class10-social-science.png',
      region: { left: 194, top: 138, width: 112, height: 152 }
    },
    {
      name: 'class10-democratic-politics.png',
      region: { left: 38, top: 142, width: 88, height: 152 }
    },
    {
      name: 'class10-economic-development.png',
      region: { left: 252, top: 26, width: 116, height: 114 }
    },
    {
      name: 'class10-india-contemporary-world.png',
      region: { left: 68, top: 292, width: 85, height: 105 }
    },
    {
      name: 'class10-first-flight.png',
      alias: 'class10-english.png',
      region: { left: 306, top: 138, width: 92, height: 150 }
    },
    {
      name: 'class10-footprints.png',
      region: { left: 118, top: 142, width: 82, height: 150 }
    },
    {
      name: 'class10-kshitij.png',
      alias: 'class10-hindi.png',
      region: { left: 160, top: 16, width: 100, height: 122 }
    },
    {
      name: 'class10-kritika.png',
      region: { left: 68, top: 30, width: 100, height: 112 }
    }
  ];

  for (const item of crops) {
    const outPath = path.join(publicBookCoversDir, item.name);
    await sharp(sourceImage)
      .extract(item.region)
      .resize(400, 560, { fit: 'fill' })
      .toFile(outPath);
    console.log('Saved:', item.name);

    if (item.alias) {
      const aliasPath = path.join(publicBookCoversDir, item.alias);
      fs.copyFileSync(outPath, aliasPath);
      console.log('Saved alias:', item.alias);
    }
  }

  console.log('All Class 10 book covers successfully extracted and saved!');
}

extractCovers().catch(console.error);
