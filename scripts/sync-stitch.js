const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  { name: 'stitch-study-matrix.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjYzN2FhNTYwMWE2MzIxZjlmMmFjNTk0EgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086' },
  { name: 'stitch-dual-pane-studio.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjQ1MWM2NTcwMWVlNWI3OWZmMGUzMWNhEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086' },
  { name: 'stitch-numericals-lab.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjYwOWU0NTcwNzBkZDRkYzJmMTljYmQ4EgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086' },
  { name: 'stitch-bilingual-mcq-quiz.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjQwMmIxYmQwMDMwMTFiMjIzMTJkN2VmEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086' },
  { name: 'stitch-accountancy-studio.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjNiZGNkOTgwMzM4NWJiYTExMjBjYzUwEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086' },
  { name: 'stitch-chapter-explorer.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjNlNmNkYTMwNTc2MDFiMzkyMDliYmJlEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086' },
  { name: 'stitch-academy-study-matrix.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YjgzMGI0NjkwNTIyYTEwODg3MDJkNzdmEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086' },
  { name: 'stitch-nextsem-logo.svg', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0YWY5MzFjNDkwOTI1ZDExZDJlMjAwOTEyEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM2MTI0NjIzNDYxNDk1NDM4OTUy&filename=&opi=89354086' },
  { name: 'stitch-math-permutations-reader.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE0OTVmNDc0NDYwNjM5NDg3N2U3MmIzOTg3EgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzMxNTA4NTYxNDM5NTU5NzU3NQ&filename=&opi=89354086' },
  { name: 'stitch-math-emblem.svg', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YWE0OTI0M2ViNWMwMjA3OTI1NDk2MmRiMWRmEgsSBxDhqbmPrhQYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzMxNTA4NTYxNDM5NTU5NzU3NQ&filename=&opi=89354086' },
  { name: 'stitch-physics-ch6-solutions-viewer.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YWE0ODFkZTBjNGQwMzM4NWJiYTExMjBjYzUwEgsSBxDhqbmPrhQYAZIBIwoKcHJvamVjdF9pZBIVQhM4MDUzNjM0NDU4NjU4MzgzNDc4&filename=&opi=89354086' }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          const file = fs.createWriteStream(dest);
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', reject);
  });
}

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const item of files) {
    const dest = path.join(publicDir, item.name);
    console.log(`[Stitch Sync] Fetching ${item.name}...`);
    try {
      await downloadFile(item.url, dest);
      const stats = fs.statSync(dest);
      console.log(`[Stitch Sync] Saved ${item.name} (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`[Stitch Sync] Failed ${item.name}:`, err.message);
    }
  }
  console.log('[Stitch Sync] Completed all downloads!');
}

run();
