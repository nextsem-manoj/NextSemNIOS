import type { ClassStageInfo, Subject, Chapter, QuestionSolution } from '../data/ncertData';
import { savePdfBlobToDB, deletePdfBlobFromDB } from './pdfStorage';

export interface CustomUploadedChapter extends Chapter {
  classNum: number;
  subjectId: string;
  uploadedAt: string;
  hasCustomBlob: boolean;
  fileSizeFormatted?: string;
}

const STORAGE_KEY = 'nextsem_custom_chapters';

// Retrieve all custom chapters from LocalStorage
export function getCustomChapters(): CustomUploadedChapter[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse custom chapters:', err);
    return [];
  }
}

// Save or Update a custom uploaded chapter
export async function saveCustomChapter(
  classNum: number,
  subjectId: string,
  chapter: {
    chapterNumber: number;
    title: string;
    nepHighlights?: string;
    summaryTextbook?: string;
    officialPdfUrl?: string;
    googleDriveFileId?: string;
    officialBookCode?: string;
    exerciseSolutions?: QuestionSolution[];
  },
  pdfBlob?: Blob | null
): Promise<CustomUploadedChapter> {
  const chapterId = `custom-c${classNum}-${subjectId}-ch${chapter.chapterNumber}-${Date.now()}`;
  
  let hasBlob = false;
  let fileSizeFormatted = '';

  if (pdfBlob) {
    await savePdfBlobToDB(chapterId, pdfBlob);
    hasBlob = true;
    const sizeKB = (pdfBlob.size / 1024).toFixed(1);
    fileSizeFormatted = pdfBlob.size > 1024 * 1024 
      ? `${(pdfBlob.size / (1024 * 1024)).toFixed(2)} MB`
      : `${sizeKB} KB`;
  }

  const newChapter: CustomUploadedChapter = {
    id: chapterId,
    chapterNumber: chapter.chapterNumber,
    title: chapter.title,
    nepHighlights: chapter.nepHighlights || '2026–27 Rationalized Syllabus • Official Curriculum',
    summaryTextbook: chapter.summaryTextbook || 'Uploaded textbook chapter with complete exercises and notes.',
    officialPdfUrl: chapter.officialPdfUrl || '',
    googleDriveFileId: chapter.googleDriveFileId || '',
    officialBookCode: chapter.officialBookCode || `custom-${subjectId}-${chapter.chapterNumber}`,
    exerciseSolutions: chapter.exerciseSolutions || [],
    competencyQuestions: [],
    quiz: [],
    classNum,
    subjectId,
    uploadedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    hasCustomBlob: hasBlob,
    fileSizeFormatted
  };

  const existing = getCustomChapters();
  const updated = [newChapter, ...existing.filter(c => c.id !== chapterId)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return newChapter;
}

// Delete a custom uploaded chapter
export async function deleteCustomChapter(chapterId: string): Promise<void> {
  await deletePdfBlobFromDB(chapterId);
  const existing = getCustomChapters();
  const filtered = existing.filter(c => c.id !== chapterId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

// Merge base CLASSES_DATA with custom uploaded chapters
export function getMergedClassesData(baseData: ClassStageInfo[]): ClassStageInfo[] {
  const customChapters = getCustomChapters();
  if (customChapters.length === 0) return baseData;

  // Deep clone base data to avoid mutating raw constants
  const merged: ClassStageInfo[] = JSON.parse(JSON.stringify(baseData));

  customChapters.forEach((customCh: CustomUploadedChapter) => {
    const classTarget = merged.find((c: ClassStageInfo) => c.classNumber === customCh.classNum);
    if (!classTarget) return;

    let subjectTarget = classTarget.subjects.find((s: Subject) => s.id === customCh.subjectId);
    if (!subjectTarget) {
      // If subject doesn't exist yet, create a default subject card for it
      subjectTarget = {
        id: customCh.subjectId,
        name: customCh.subjectId.charAt(0).toUpperCase() + customCh.subjectId.slice(1),
        iconName: 'BookOpen',
        color: '#0a2240',
        totalChapters: 0,
        description: 'Uploaded textbook chapters and NCERT solutions',
        chapters: []
      };
      classTarget.subjects.push(subjectTarget);
    }

    // Check if chapter already exists or append
    const existingChIdx = subjectTarget.chapters.findIndex((ch: Chapter) => ch.chapterNumber === customCh.chapterNumber || ch.id === customCh.id);
    if (existingChIdx >= 0) {
      subjectTarget.chapters[existingChIdx] = customCh;
    } else {
      subjectTarget.chapters.push(customCh);
      subjectTarget.chapters.sort((a: Chapter, b: Chapter) => a.chapterNumber - b.chapterNumber);
    }
    subjectTarget.totalChapters = subjectTarget.chapters.length;
  });

  return merged;
}
