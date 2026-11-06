// IndexedDB Storage Utility for Storing and Retrieving Offline PDF Blobs locally

const DB_NAME = 'NextsemOfflinePdfsDB';
const STORE_NAME = 'pdf_blobs';

export async function openPdfDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this browser environment.'));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function savePdfBlobToDB(chapterId: string, blob: Blob): Promise<void> {
  try {
    const db = await openPdfDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(blob, chapterId);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to save PDF blob to IndexedDB:', err);
  }
}

export async function getPdfBlobFromDB(chapterId: string): Promise<Blob | null> {
  try {
    const db = await openPdfDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(chapterId);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to get PDF blob from IndexedDB:', err);
    return null;
  }
}

export async function deletePdfBlobFromDB(chapterId: string): Promise<void> {
  try {
    const db = await openPdfDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(chapterId);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to delete PDF blob from IndexedDB:', err);
  }
}
