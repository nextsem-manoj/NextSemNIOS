# Google Drive Folder Structure & Offline Download Links Update

**Date:** 2026-09-06  
**Conversation Objective:** `/learn download or offline files have incorrect links update links as per https://drive.google.com/drive/folders/1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4 google drive folder structure`

---

## 📋 Summary of Actions Taken

1. **Google Drive Integration Constant Update**:
   - Updated `SHARED_NCERT_DRIVE_FOLDER_ID` in `src/utils/googleDriveHelper.ts` to `1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4`.
   - Updated `SHARED_NCERT_DRIVE_FOLDER_URL` to automatically resolve to `https://drive.google.com/drive/folders/1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4`.
   - Enhanced `getDrivePreviewUrl` with a seamless fallback to Google Docs viewer for direct NCERT web URLs (`https://docs.google.com/viewer?url=...&embedded=true`), ensuring distraction-free in-app iframe rendering without cross-origin frame blocking.

2. **Offline Files Storage & Management (`OfflineFilesView.tsx`)**:
   - Added direct quick link to the centralized Google Drive PDF repository (`SHARED_NCERT_DRIVE_FOLDER_URL`) inside the header of `OfflineFilesView.tsx`.
   - Dynamic subject identification for all downloaded cached chapters across both Class 11 and Class 12 datasets.
   - Fixed empty state action button to gracefully direct users back to textbooks.

3. **Permanent Project Rules Update (`.agents/AGENTS.md`)**:
   - Updated permanent rule **Direct NCERT & Google Drive Cloud PDF Access** to reflect the new target root folder URL: `https://drive.google.com/drive/folders/1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4`.

4. **Verification**:
   - Ran `npx tsc --noEmit` which completed with zero TypeScript compilation errors.
