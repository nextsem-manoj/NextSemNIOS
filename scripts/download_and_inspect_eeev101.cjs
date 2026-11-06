const https = require('https');
const fs = require('fs');

const driveId = '1M44YVvmWpjRSdmuW8LZjkll0wU8zFo9f';
const driveUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 303 || res.statusCode === 307 || res.statusCode === 301) {
        console.log('Redirecting to:', res.headers.location);
        return resolve(downloadFile(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', reject);
  });
}

async function run() {
  const dest = 'scratch/eeev101.pdf';
  if (!fs.existsSync('scratch')) fs.mkdirSync('scratch');
  console.log('Downloading eeev101.pdf...');
  try {
    await downloadFile(driveUrl, dest);
    console.log('Downloaded successfully! File size:', fs.statSync(dest).size);
  } catch (e) {
    console.log('Drive download failed, trying official NCERT URL...');
    try {
      await downloadFile('https://ncert.nic.in/textbook/pdf/eeev101.pdf', dest);
      console.log('Downloaded from NCERT! File size:', fs.statSync(dest).size);
    } catch (err) {
      console.error('Both downloads failed:', err);
    }
  }
}

run();
