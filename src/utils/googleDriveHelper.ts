/**
 * Google Drive PDF and Folder Integration Utilities for Nextsem NCERT App
 */

export const SHARED_NCERT_DRIVE_FOLDER_ID = '1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4';
export const SHARED_NCERT_DRIVE_FOLDER_URL = `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`;

/**
 * Extracts the Google Drive File or Folder ID from various URL patterns
 */
export function extractDriveId(input: string): string | null {
  if (!input) return null;
  
  // If it's already a raw ID (typically 25-45 alphanumeric characters with dashes/underscores)
  if (/^[a-zA-Z0-9_-]{25,}$/.test(input.trim())) {
    return input.trim();
  }

  // Matches /file/d/{ID} or /folders/{ID} or ?id={ID}
  const fileMatch = input.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch && fileMatch[1]) return fileMatch[1];

  const folderMatch = input.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch && folderMatch[1]) return folderMatch[1];

  const idParamMatch = input.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch && idParamMatch[1]) return idParamMatch[1];

  return null;
}

/**
 * Converts a Google Drive File ID or URL into a clean in-app iframe embed preview URL.
 * Falls back to Google Docs viewer for direct web URLs (e.g. ncert.nic.in).
 */
export function getDrivePreviewUrl(urlOrId: string): string {
  const fileId = extractDriveId(urlOrId);
  if (fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  if (urlOrId.startsWith('http://') || urlOrId.startsWith('https://')) {
    return `https://docs.google.com/viewer?url=${encodeURIComponent(urlOrId)}&embedded=true`;
  }
  return urlOrId;
}

/**
 * Converts a Google Drive File ID or URL into a direct binary download URL
 */
export function getDriveDownloadUrl(urlOrId: string): string {
  const fileId = extractDriveId(urlOrId);
  if (fileId) {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return urlOrId;
}

/**
 * Returns an embeddable Google Drive Folder view
 */
export function getDriveFolderEmbedUrl(folderId: string = SHARED_NCERT_DRIVE_FOLDER_ID): string {
  const cleanId = extractDriveId(folderId) || SHARED_NCERT_DRIVE_FOLDER_ID;
  return `https://drive.google.com/embeddedfolderview?id=${cleanId}#list`;
}

export interface DriveAssetItem {
  id: string;
  name: string;
  type: 'pdf' | 'image' | 'worksheet';
  size?: string;
  chapterNumber?: number;
  previewUrl: string;
  downloadUrl: string;
  directDriveUrl: string;
  thumbnailUrl?: string;
}

export const CLASS_5_MATHS_DRIVE_ASSETS: DriveAssetItem[] = [
  // Textbook Covers & Artwork from Drive
  {
    id: 'c5-maths-cover-mela',
    name: 'Class 5 Maths Mela Official Book Cover (गणित मेला कवर)',
    type: 'image',
    previewUrl: 'https://ncert.nic.in/textbook/pdf/eemm1cc.jpg',
    downloadUrl: 'https://ncert.nic.in/textbook/pdf/eemm1cc.jpg',
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`,
    thumbnailUrl: 'https://ncert.nic.in/textbook/pdf/eemm1cc.jpg'
  },
  {
    id: 'c5-maths-cover-magic',
    name: 'Class 5 Math-Magic Classic Book Cover (गणित का जादू)',
    type: 'image',
    previewUrl: 'https://ncert.nic.in/textbook/pdf/eemh1cc.jpg',
    downloadUrl: 'https://ncert.nic.in/textbook/pdf/eemh1cc.jpg',
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`,
    thumbnailUrl: 'https://ncert.nic.in/textbook/pdf/eemh1cc.jpg'
  },
  // All 15 Chapter PDFs
  {
    id: 'c5-m-ch1',
    chapterNumber: 1,
    name: 'Chapter 1: We the Travellers—I (हम यात्री—भाग 1)',
    type: 'pdf',
    size: '3.4 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch2',
    chapterNumber: 2,
    name: 'Chapter 2: Fractions (भिन्न)',
    type: 'pdf',
    size: '4.1 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch3',
    chapterNumber: 3,
    name: 'Chapter 3: Angles as Turns (कोण और मोड़)',
    type: 'pdf',
    size: '3.8 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch4',
    chapterNumber: 4,
    name: 'Chapter 4: We the Travellers—II (हम यात्री—भाग 2)',
    type: 'pdf',
    size: '3.2 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch5',
    chapterNumber: 5,
    name: 'Chapter 5: Far and Near (दूर और पास)',
    type: 'pdf',
    size: '2.9 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch6',
    chapterNumber: 6,
    name: 'Chapter 6: The Dairy Farm & Multiples (दुग्धशाला और गुणज)',
    type: 'pdf',
    size: '5.2 MB',
    previewUrl: '/maths-class5-ch6-dairy-farm-worksheet.html',
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch7',
    chapterNumber: 7,
    name: 'Chapter 7: Shapes and Patterns (आकृतियाँ और पैटर्न)',
    type: 'pdf',
    size: '4.5 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch8',
    chapterNumber: 8,
    name: 'Chapter 8: Weight and Capacity (भार और धारिता)',
    type: 'pdf',
    size: '3.7 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch9',
    chapterNumber: 9,
    name: 'Chapter 9: Coconut Farm (नारियल का बाग़)',
    type: 'pdf',
    size: '3.1 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch10',
    chapterNumber: 10,
    name: 'Chapter 10: Symmetrical Designs (सममित डिज़ाइन)',
    type: 'pdf',
    size: '4.8 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch11',
    chapterNumber: 11,
    name: 'Chapter 11: Grandmother\'s Quilt (दादी की रजाई)',
    type: 'pdf',
    size: '3.6 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch12',
    chapterNumber: 12,
    name: 'Chapter 12: Racing Seconds (दौड़ते सेकंड)',
    type: 'pdf',
    size: '2.8 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch13',
    chapterNumber: 13,
    name: 'Chapter 13: Animal Jumps (जानवरों की छलाँगें)',
    type: 'pdf',
    size: '3.9 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch14',
    chapterNumber: 14,
    name: 'Chapter 14: Maps and Locations (मानचित्र और स्थान)',
    type: 'pdf',
    size: '4.2 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  },
  {
    id: 'c5-m-ch15',
    chapterNumber: 15,
    name: 'Chapter 15: Data Through Pictures (चित्रों द्वारा आँकड़े)',
    type: 'pdf',
    size: '3.3 MB',
    previewUrl: getDrivePreviewUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    downloadUrl: getDriveDownloadUrl(SHARED_NCERT_DRIVE_FOLDER_ID),
    directDriveUrl: `https://drive.google.com/drive/folders/${SHARED_NCERT_DRIVE_FOLDER_ID}`
  }
];

