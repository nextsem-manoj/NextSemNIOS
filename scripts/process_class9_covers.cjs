const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function extractCovers() {
  const sourceImage = 'C:/Users/manojkmr2403/.gemini/antigravity-ide/brain/b6ed1a38-bc99-4c07-b48e-9e7dadb5fff1/.user_uploaded/media_1788865849664.png';
  const publicBookCoversDir = path.join(__dirname, '../public/book-covers');
  if (!fs.existsSync(publicBookCoversDir)) fs.mkdirSync(publicBookCoversDir, { recursive: true });

  // Let's extract each of the 5 books with precise coordinates
  const crops = [
    {
      name: 'class9-hindi-ganga.png',
      alias: 'class9-kshitij.png',
      region: { left: 4, top: 24, width: 166, height: 236 }
    },
    {
      name: 'class9-english-kaveri.png',
      alias: 'class9-beehive.png',
      region: { left: 175, top: 24, width: 167, height: 236 }
    },
    {
      name: 'class9-maths-ganita-manjari.png',
      alias: 'class9-maths.png',
      region: { left: 348, top: 24, width: 165, height: 236 }
    },
    {
      name: 'class9-science-exploration.png',
      alias: 'class9-science.png',
      region: { left: 80, top: 265, width: 167, height: 236 }
    },
    {
      name: 'class9-social-science-understanding-society.png',
      alias: 'class9-social-science.png',
      region: { left: 252, top: 265, width: 167, height: 236 }
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

  console.log('All 5 Class 9 book covers successfully extracted and saved!');
}

extractCovers().catch(console.error);
