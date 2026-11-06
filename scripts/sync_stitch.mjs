import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = process.env.STITCH_API_KEY || "AQ.Ab8RN6JdcpEOz5xPg2hkW5zux8Bmk4rl2Lmu00bUzndpj53Buw";
const PROJECT_ID = process.env.STITCH_PROJECT_ID || "7911947677603152331";
const MCP_ENDPOINT = "https://stitch.googleapis.com/mcp";

async function fetchStitchScreens() {
  console.log(`[Stitch Sync] Connecting to Stitch MCP for Project ${PROJECT_ID}...`);
  
  const res = await fetch(MCP_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Date.now(),
      method: "tools/call",
      params: {
        name: "list_screens",
        arguments: { projectId: PROJECT_ID }
      }
    })
  });

  if (!res.ok) {
    throw new Error(`Stitch MCP HTTP error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  if (data.error) {
    throw new Error(`Stitch MCP error: ${JSON.stringify(data.error)}`);
  }

  const screens = data.result?.structuredContent?.screens || [];
  console.log(`[Stitch Sync] Found ${screens.length} screens in project.`);
  return screens;
}

async function syncScreens() {
  const screensDir = path.join(__dirname, "temp", "stitch_screens");
  fs.mkdirSync(screensDir, { recursive: true });

  const screens = await fetchStitchScreens();
  let updatedCount = 0;

  for (const screen of screens) {
    const rawTitle = screen.title || "untitled";
    const safeName = rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") + ".html";
    const destPath = path.join(screensDir, safeName);

    const downloadUrl = screen.htmlCode?.downloadUrl;
    if (!downloadUrl) {
      console.warn(`[Stitch Sync] No downloadUrl for screen: ${screen.title}`);
      continue;
    }

    console.log(`[Stitch Sync] Fetching "${screen.title}" (${safeName})...`);
    const htmlRes = await fetch(downloadUrl);
    if (!htmlRes.ok) {
      console.warn(`[Stitch Sync] Failed downloading ${screen.title}: ${htmlRes.statusText}`);
      continue;
    }

    const htmlContent = await htmlRes.text();
    fs.writeFileSync(destPath, htmlContent, "utf-8");
    console.log(`[Stitch Sync] Saved: ${destPath} (${(htmlContent.length / 1024).toFixed(1)} KB)`);
    updatedCount++;
  }

  // Sync to dist if dist exists
  const publicStudio = path.join(__dirname, "..", "public", "middle-school-doubt-diagnostic-studio.html");
  const distStudio = path.join(__dirname, "..", "dist", "middle-school-doubt-diagnostic-studio.html");
  if (fs.existsSync(publicStudio) && fs.existsSync(path.join(__dirname, "..", "dist"))) {
    fs.copyFileSync(publicStudio, distStudio);
    console.log(`[Stitch Sync] Synchronized to dist directory.`);
  }

  console.log(`\n✅ [Stitch Sync] Successfully synchronized ${updatedCount} screens from Stitch!`);
}

syncScreens().catch(err => {
  console.error("❌ [Stitch Sync Error]:", err.message);
  process.exit(1);
});
