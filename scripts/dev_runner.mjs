import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'os';
import path from 'path';
import fs from 'fs';

async function start() {
  const server = await createServer({
    configFile: false,
    root: process.cwd(),
    cacheDir: path.join(os.tmpdir(), 'ncert-vite-cache'),
    plugins: [
      react(),
      {
        name: 'universal-html-rewrite',
        configureServer(s) {
          s.middlewares.use((req, _res, next) => {
            if (req.url) {
              const [pathname, search] = req.url.split('?');
              const searchStr = search ? '?' + search : '';
              if (!path.extname(pathname) && pathname !== '/') {
                const htmlCandidate = path.join(process.cwd(), 'public', pathname.replace(/^\//, '') + '.html');
                if (fs.existsSync(htmlCandidate)) {
                  req.url = pathname + '.html' + searchStr;
                }
              }
            }
            next();
          });
        }
      }
    ],
    server: {
      port: 3002,
      host: true,
      allowedHosts: true
    }
  });

  await server.listen();
  console.log('\n🚀 StudyGuide NCERT Dev Server Ready:');
  server.printUrls();
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
