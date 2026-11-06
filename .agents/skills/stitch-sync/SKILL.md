---
name: stitch-sync
description: Synchronize screens, HTML, and design systems from Google Stitch MCP (Project ID 7911947677603152331) to local studio files and schedule periodic syncs.
---

# Google Stitch Auto-Sync Skill

This skill documents how to automatically query Google Stitch via Model Context Protocol (MCP), fetch updated UI screens, download raw HTML/Tailwind templates, and keep local studio pages synchronized.

## Configuration & Credentials
- **Stitch MCP Endpoint**: `https://stitch.googleapis.com/mcp`
- **Default Project ID**: `7911947677603152331`
- **MCP Header**: `X-Goog-Api-Key: AQ.Ab8RN6JdcpEOz5xPg2hkW5zux8Bmk4rl2Lmu00bUzndpj53Buw`
- **Local Target**: `public/middle-school-doubt-diagnostic-studio.html`
- **Downloaded Screens Cache**: `scripts/temp/stitch_screens/`

## Sync Commands
Run any of the following to pull the latest screens from Stitch:
```bash
# Via npm script
npm run sync:stitch

# Direct node script
node scripts/sync_stitch.mjs
```

## How It Works Line-by-Line
1. **MCP Tool Call (`list_screens`)**:
   Sends a JSON-RPC 2.0 `tools/call` request to `https://stitch.googleapis.com/mcp` with arguments `{"projectId": "7911947677603152331"}`.
2. **Screen Enumeration**:
   Retrieves all current project screens (e.g. `Login`, `Select Class`, `Select Subject`, `Profile & Achievements`, including Light & Dark variants).
3. **Asset Download**:
   Fetches the compiled HTML for each screen from `htmlCode.downloadUrl` and saves it into `scripts/temp/stitch_screens/`.
4. **Local Sync**:
   Updates the working files in `public/` and `dist/`.

## Periodic / Scheduled Sync Workflow
- Whenever the user requests to sync after N minutes or at regular intervals:
  Use the `schedule` tool:
  - **One-shot timer**: `DurationSeconds="300"`, `Prompt="Run npm run sync:stitch to fetch the newest screens from Google Stitch project 7911947677603152331."`
  - **Recurring cron**: `CronExpression="*/5 * * * *"` to trigger sync every 5 minutes.
