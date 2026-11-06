const https = require('https');
const fs = require('fs');
const path = require('path');

const fileId = '1P2wazajXAjZ8tl4HRWDm5yHo-Lax3L0L';
const destPath = path.join(__dirname, '..', 'scratch', 'class7_hindi.pdf');

function downloadFile(url, dest, cb) {
  const file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
      console.log('Redirecting to:', response.headers.location);
      return downloadFile(response.headers.location, dest, cb);
    }
    response.pipe(file);
    file.on('finish', function() {
      file.close(() => {
        const stats = fs.statSync(dest);
        console.log('Downloaded successfully! File size:', stats.size);
        cb(null);
      });
    });
  }).on('error', function(err) {
    fs.unlink(dest, () => {});
    cb(err.message);
  });
}

console.log('Downloading class7_hindi.pdf...');
downloadFile(`https://drive.google.com/uc?export=download&id=${fileId}`, destPath, (err) => {
  if (err) console.error('Download error:', err);
});
