import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const HAS_DIST = fs.existsSync(path.join(DIST_DIR, 'index.html'));
const PUBLIC_DIR = HAS_DIST ? DIST_DIR : __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = parsedUrl.pathname;

  if (pathname === '/') {
    pathname = '/index.html';
  }

  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  // Fallback to root directory if not found in dist
  if (!fs.existsSync(filePath)) {
    const rootFallback = path.join(__dirname, safePath);
    if (fs.existsSync(rootFallback)) {
      filePath = rootFallback;
    } else if (HAS_DIST && !path.extname(safePath)) {
      // SPA Fallback for client-side routing
      filePath = path.join(DIST_DIR, 'index.html');
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Not Found');
    });
    stream.pipe(res);
  });
});

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3005;
let currentPort = DEFAULT_PORT;

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${currentPort} is in use, trying ${currentPort + 1}...`);
    currentPort += 1;
    server.listen(currentPort);
  } else {
    console.error('Server error:', err);
  }
});

server.listen(currentPort, () => {
  console.log(`Server is running at http://localhost:${currentPort}`);
});

