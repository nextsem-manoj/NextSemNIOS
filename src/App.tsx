import { useState, useEffect } from 'react';
import { CLASSES_DATA } from './data/ncertData';
import type { Subject, Chapter, QuestionSolution } from './data/ncertData';
import { Navbar } from './components/Navbar';
import { BreadcrumbAddressBar } from './components/BreadcrumbAddressBar';
import { AppDashboard } from './components/AppDashboard';
import { NavigationDrawer } from './components/NavigationDrawer';
import { ClassGrid, type AcademicSection } from './components/ClassGrid';
import { SubjectList } from './components/SubjectList';
import { SubjectBooksView } from './components/SubjectBooksView';
import { BookChaptersView } from './components/BookChaptersView';
import { PdfReaderView } from './components/PdfReaderView';
import { BookmarksModal } from './components/BookmarksModal';
import { SolutionViewer } from './components/SolutionViewer';
import { AdminPortalView } from './components/AdminPortalView';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { getMergedClassesData } from './utils/customChaptersStorage';

// Dedicated Drawer Pages
import { InbuiltReaderInfoView } from './components/pages/InbuiltReaderInfoView';
import { ShareAppView } from './components/pages/ShareAppView';
import { FeedbackView } from './components/pages/FeedbackView';
import { PrivacyPolicyView } from './components/pages/PrivacyPolicyView';
import { RateAppView } from './components/pages/RateAppView';
import { BookmarkedItemsView } from './components/pages/BookmarkedItemsView';
import { OfflineFilesView } from './components/pages/OfflineFilesView';
import { NcertSolutionsView } from './components/pages/NcertSolutionsView';
import { TsGrewalAccountingEquationView } from './components/pages/TsGrewalAccountingEquationView';
import { NiosBooksView } from './components/pages/NiosBooksView';
import { NiosNotesView } from './components/pages/NiosNotesView';
import { NcertNotesView } from './components/pages/NcertNotesView';
import { WorkInProgressModal } from './components/WorkInProgressModal';
import { QuizzesModal } from './components/QuizzesModal';
import { AppUpdateModal } from './components/AppUpdateModal';
import { AutoUpdateBanner } from './components/AutoUpdateBanner';
import { EuclidGeometryInteractiveView } from './components/interactive/EuclidGeometryInteractiveView';
import { DataHandlingWorkbookView } from './components/interactive/DataHandlingWorkbookView';
import { Class11StatsTestView } from './components/interactive/Class11StatsTestView';
import { Class11EconomicsTestView } from './components/interactive/Class11EconomicsTestView';
import { HistoryCompetencyTestView } from './components/interactive/HistoryCompetencyTestView';
import { HydrocarbonsTestView } from './components/interactive/HydrocarbonsTestView';
import { HindiGrammarMasteryView } from './components/interactive/HindiGrammarMasteryView';
import { NextsemAcademyClassesView } from './components/pages/NextsemAcademyClassesView';
import { AcademyScheduleBuilderView } from './components/pages/AcademyScheduleBuilderView';
import { Class9PageView } from './components/pages/Class9PageView';
import { Class11PageView } from './components/pages/Class11PageView';
import { BilingualPdfMergerView } from './components/pages/BilingualPdfMergerView';
import { KidsFoundationalWorksheetView } from './components/pages/KidsFoundationalWorksheetView';
import { Search } from 'lucide-react';

// App View Modes including dedicated drawer pages and Admin portal
type ViewMode = 'DASHBOARD' | 'CLASSES' | 'CLASS_SUBJECTS' | 'CLASS_9_HUB' | 'CLASS_11_HUB' | 'SUBJECT_BOOKS' | 'BOOK_CHAPTERS' | 'PDF_READER' | 'HINDI_GRAMMAR_STUDIO' | 'NCERT_SOLUTIONS' | 'NCERT_NOTES' | 'NIOS_BOOKS' | 'NIOS_NOTES' | 'INBUILT_READER' | 'SHARE_APP' | 'FEEDBACK' | 'PRIVACY_POLICY' | 'RATE_US' | 'BOOKMARKS' | 'OFFLINE_FILES' | 'TS_GREWAL_ACCOUNTING_EQUATION' | 'EUCLID_INTERACTIVE' | 'CLASS_6_MATHS_WORKBOOK' | 'CLASS_11_STATS_TEST' | 'CLASS_11_ECONOMICS_TEST' | 'HISTORY_COMPETENCY_TEST' | 'HYDROCARBONS_TEST' | 'CHEMISTRY_CH7_PAGES_1_2' | 'CHEMISTRY_CH7_PAGES_3_6' | 'POLITICAL_SCIENCE_CH1_QUOTA1' | 'POLITICAL_SCIENCE_CH1_FILL_BLANKS' | 'POORVI_CH7_NEEM_BABA' | 'POORVI_7_UNIT1_LEARNING_TOGETHER' | 'CLASS_9_MATHS_TEST' | 'HISTORY_CH1_PAGES_11_12' | 'DOUBT_STUDIO' | 'ACADEMY_CLASSES' | 'SCHEDULE_BUILDER' | 'ADMIN' | 'BILINGUAL_PDF_MERGER' | 'KIDS_FOUNDATIONAL_HUB';

function getInitialStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname.toLowerCase();
  const classParam = params.get('class');
  const subjectParam = params.get('subject');
  const bookParam = params.get('book');
  const chapterParam = params.get('chapter');
  const viewParam = params.get('view');

  const classesData = getMergedClassesData(CLASSES_DATA);

  let initialClass = classParam ? Number(classParam) : 12;
  const classInfo = classesData.find(c => c.classNumber === initialClass) || classesData.find(c => c.classNumber === 12)!;
  
  let initialSubject: Subject | null = null;
  if (subjectParam) {
    initialSubject = classInfo.subjects.find((s: Subject) => s.id === subjectParam || s.id.toLowerCase() === subjectParam.toLowerCase()) || null;
    if (!initialSubject) {
      for (const c of classesData) {
        const found = c.subjects.find((s: Subject) => s.id === subjectParam || s.id.toLowerCase() === subjectParam.toLowerCase());
        if (found) {
          initialSubject = found;
          initialClass = c.classNumber;
          break;
        }
      }
    }
  }

  let initialBookPartId = bookParam || 'part-1';
  let initialBookTitle = initialSubject ? initialSubject.name : `Class ${initialClass} Textbook`;
  if (initialSubject) {
    const clsRoman = initialClass === 12 ? 'XII' : initialClass === 11 ? 'XI' : initialClass === 10 ? 'X' : initialClass === 9 ? 'IX' : initialClass === 8 ? 'VIII' : initialClass === 7 ? 'VII' : initialClass === 6 ? 'VI' : initialClass === 5 ? 'V' : initialClass === 3 ? 'III' : String(initialClass);
    if (initialBookPartId === 'part-2') {
      initialBookTitle = `${initialSubject.name.toUpperCase()} PART-II (${clsRoman})`;
    } else if (initialBookPartId === 'part-3') {
      initialBookTitle = `${initialSubject.name.toUpperCase()} PART-III (${clsRoman})`;
    } else if (initialBookPartId === 'exemplar') {
      initialBookTitle = `${initialSubject.name.toUpperCase()} EXEMPLAR (${clsRoman})`;
    } else if (initialClass === 12 || initialClass === 11) {
      initialBookTitle = `${initialSubject.name.toUpperCase()} PART-I (${clsRoman})`;
    } else {
      initialBookTitle = `${initialSubject.name.toUpperCase()} (${clsRoman})`;
    }
  }

  let initialChapter: Chapter | null = null;
  if (initialSubject && chapterParam) {
    initialChapter = initialSubject.chapters.find(ch => ch.chapterNumber === Number(chapterParam)) || null;
  }

  let initialViewMode: ViewMode = 'CLASSES';
  const normalizedPath = pathname.replace(/\/$/, '');

  if (normalizedPath === '/class11' || normalizedPath === '/class-11' || pathname === '/class11.html' || (classParam === '11' && !subjectParam && !viewParam)) {
    initialViewMode = 'CLASS_11_HUB';
    initialClass = 11;
    initialSubject = null;
  } else if (normalizedPath === '/class9' || normalizedPath === '/class-9' || (classParam === '9' && !subjectParam && !viewParam)) {
    initialViewMode = 'CLASS_9_HUB';
    initialClass = 9;
    initialSubject = null;
  } else if (normalizedPath === '/class9/maths' || normalizedPath === '/class9/math' || (classParam === '9' && (subjectParam === 'c9-maths' || subjectParam === 'maths' || subjectParam === 'math'))) {
    initialClass = 9;
    const c9Info = classesData.find(c => c.classNumber === 9);
    initialSubject = c9Info?.subjects.find((s: Subject) => s.id === 'c9-maths') || null;
    initialBookPartId = bookParam || 'part-1';
    initialBookTitle = 'Mathematics (Ganita Manjari)';
    initialViewMode = initialChapter ? 'PDF_READER' : 'SUBJECT_BOOKS';
  } else if (normalizedPath === '/class9/science' || (classParam === '9' && (subjectParam === 'c9-science' || subjectParam === 'science'))) {
    initialClass = 9;
    const c9Info = classesData.find(c => c.classNumber === 9);
    initialSubject = c9Info?.subjects.find((s: Subject) => s.id === 'c9-science') || null;
    initialBookPartId = bookParam || 'part-1';
    initialBookTitle = 'Science Exploration (Class IX)';
    initialViewMode = initialChapter ? 'PDF_READER' : 'SUBJECT_BOOKS';
  } else if (normalizedPath === '/class9/english' || (classParam === '9' && (subjectParam === 'c9-english' || subjectParam === 'english'))) {
    initialClass = 9;
    const c9Info = classesData.find(c => c.classNumber === 9);
    initialSubject = c9Info?.subjects.find((s: Subject) => s.id === 'c9-english') || null;
    initialBookPartId = bookParam || 'part-1';
    initialBookTitle = 'English Kaveri (Class IX)';
    initialViewMode = initialChapter ? 'PDF_READER' : 'SUBJECT_BOOKS';
  } else if (normalizedPath === '/class9/hindi' || (classParam === '9' && (subjectParam === 'c9-hindi' || subjectParam === 'hindi'))) {
    initialClass = 9;
    const c9Info = classesData.find(c => c.classNumber === 9);
    initialSubject = c9Info?.subjects.find((s: Subject) => s.id === 'c9-hindi') || null;
    initialBookPartId = bookParam || 'part-1';
    initialBookTitle = 'गंगा / Ganga (Class IX)';
    initialViewMode = initialChapter ? 'PDF_READER' : 'SUBJECT_BOOKS';
  } else if (normalizedPath === '/class9/social-science' || normalizedPath === '/class9/sst' || (classParam === '9' && (subjectParam === 'c9-social-science' || subjectParam === 'social-science' || subjectParam === 'sst'))) {
    initialClass = 9;
    const c9Info = classesData.find(c => c.classNumber === 9);
    initialSubject = c9Info?.subjects.find((s: Subject) => s.id === 'c9-social-science') || null;
    initialBookPartId = bookParam || 'part-1';
    initialBookTitle = 'Social Science (Class IX)';
    initialViewMode = initialChapter ? 'PDF_READER' : 'SUBJECT_BOOKS';
  } else if (normalizedPath === '/class9/hindi-grammar' || normalizedPath === '/class9/grammar' || (classParam === '9' && (subjectParam === 'c9-hindi-grammar' || subjectParam === 'hindi-grammar'))) {
    initialClass = 9;
    const c9Info = classesData.find(c => c.classNumber === 9);
    initialSubject = c9Info?.subjects.find((s: Subject) => s.id === 'c9-hindi-grammar') || null;
    initialBookTitle = 'हिंदी व्याकरण मास्टरक्लास (IX)';
    initialViewMode = 'HINDI_GRAMMAR_STUDIO';
  } else if (pathname.includes('santoor-class5-ch6-what-a-tank-worksheet')) {
    window.location.replace('/santoor-class5-ch6-what-a-tank-worksheet.html');
  } else if (pathname.includes('curiosity-class7-ch6-adolescence-worksheet')) {
    window.location.replace('/curiosity-class7-ch6-adolescence-worksheet.html');
  } else if (pathname.includes('curiosity-class7-ch7-heat-transfer-mcq')) {
    window.location.replace('/curiosity-class7-ch7-heat-transfer-mcq.html');
  } else if (pathname.includes('ganita-class7-ch6-number-play-mcq')) {
    window.location.replace('/ganita-class7-ch6-number-play-mcq.html');
  } else if (pathname.includes('science-class9-ch3-tissues-in-action-difficult-mcq')) {
    window.location.replace('/science-class9-ch3-tissues-in-action-difficult-mcq.html');
  } else if (pathname.includes('class6-7-easy-mcq-practice')) {
    window.location.replace('/class6-7-easy-mcq-practice.html');
  } else if (pathname.includes('class6-7-english-comprehension-passage')) {
    window.location.replace('/class6-7-english-comprehension-passage.html');
  } else if (pathname.includes('history-class11-ch1-writing-and-city-life-pages11-12-worksheet') || viewParam === 'history-ch1-pages11-12' || viewParam === 'history-pages11-12' || viewParam === 'kehs101-11-12' || viewParam === 'mesopotamia-worksheet') {
    initialViewMode = 'HISTORY_CH1_PAGES_11_12';
    initialClass = 11;
    const c11Info = classesData.find(c => c.classNumber === 11);
    initialSubject = c11Info?.subjects.find((s: Subject) => s.id === 'c11-history') || null;
    initialBookTitle = 'Themes in World History (XI)';
  } else 
  if (pathname.includes('chemistry-class12-alcohols-phenols-ethers-page1-2') || viewParam === 'chemistry-ch7-pages1-2' || viewParam === 'chemistry-1-2') {
    initialViewMode = 'CHEMISTRY_CH7_PAGES_1_2';
    initialClass = 12;
    initialSubject = classInfo.subjects.find((s: Subject) => s.id === 'c12-chemistry') || null;
    initialBookPartId = 'part-2';
    initialBookTitle = 'CHEMISTRY PART-II (XII)';
  } else if (pathname.includes('chemistry-class12-alcohols-phenols-ethers-page3-6') || viewParam === 'chemistry-ch7-pages3-6' || viewParam === 'chemistry-3-6') {
    initialViewMode = 'CHEMISTRY_CH7_PAGES_3_6';
    initialClass = 12;
    initialSubject = classInfo.subjects.find((s: Subject) => s.id === 'c12-chemistry') || null;
    initialBookPartId = 'part-2';
  } else if (pathname.includes('political-science-class12-ch1-fill-in-the-blanks') || viewParam === 'polscience-ch1-blanks' || viewParam === 'polscience-blanks' || viewParam === 'samkalin-vishwa-rajniti-blanks') {
    initialViewMode = 'POLITICAL_SCIENCE_CH1_FILL_BLANKS';
    initialClass = 12;
    initialBookTitle = 'समकालीन विश्व राजनीति (XII)';
  } else if (pathname.includes('political-science-class12-samkalin-vishwa-rajniti-ch1-quota1') || viewParam === 'samkalin-vishwa-rajniti-ch1-quota1' || viewParam === 'polscience-ch1-quota1') {
    initialViewMode = 'POLITICAL_SCIENCE_CH1_QUOTA1';
    initialClass = 12;
    initialBookTitle = 'समकालीन विश्व राजनीति (XII)';
  } else if (pathname.includes('english-class6-poorvi-unit3-ch7-neem-baba-mcq') || viewParam === 'poorvi-ch7-neem-baba' || viewParam === 'neem-baba' || viewParam === 'neem') {
    initialViewMode = 'POORVI_CH7_NEEM_BABA';
    initialClass = 6;
    initialBookTitle = 'Poorvi English (VI)';
  } else if (pathname.includes('english-class7-poorvi-unit1-learning-together-mcq') || viewParam === 'poorvi-7-unit1' || viewParam === 'gepr101' || viewParam === 'learning-together') {
    initialViewMode = 'POORVI_7_UNIT1_LEARNING_TOGETHER';
    initialClass = 7;
    initialBookTitle = 'Poorvi English (VII)';
  } else if (viewParam === 'dashboard') initialViewMode = 'DASHBOARD';
  else if (viewParam === 'ncert-notes') initialViewMode = 'NCERT_NOTES';
  else if (viewParam === 'nios-books') initialViewMode = 'NIOS_BOOKS';
  else if (viewParam === 'nios-notes') initialViewMode = 'NIOS_NOTES';
  else if (viewParam === 'bilingual-pdf-merger' || viewParam === 'pdf-merge' || viewParam === 'bilingual-merger' || pathname.includes('bilingual-pdf-merger') || pathname === '/merge' || pathname.startsWith('/merge')) initialViewMode = 'BILINGUAL_PDF_MERGER';
  else if (viewParam === 'kids-kg' || viewParam === 'kids' || viewParam === 'kids-foundational-hub' || viewParam === 'foundational' || pathname === '/kids-kg' || pathname.startsWith('/kids-kg') || pathname === '/kids' || pathname.startsWith('/kids') || pathname.includes('kids-foundational-worksheet')) initialViewMode = 'KIDS_FOUNDATIONAL_HUB';
  else if (viewParam === 'admin' || viewParam === 'ADMIN') initialViewMode = 'ADMIN';
  else if (viewParam === 'offline') initialViewMode = 'OFFLINE_FILES';
  else if (viewParam === 'bookmarks') initialViewMode = 'BOOKMARKS';
  else if (viewParam === 'inbuilt-reader') initialViewMode = 'INBUILT_READER';
  else if (viewParam === 'share') initialViewMode = 'SHARE_APP';
  else if (viewParam === 'feedback') initialViewMode = 'FEEDBACK';
  else if (viewParam === 'privacy') initialViewMode = 'PRIVACY_POLICY';
  else if (viewParam === 'rate') initialViewMode = 'RATE_US';
  else if (viewParam === 'ts-grewal' || viewParam === 'ts-grewal-accounting-equation' || viewParam === 'accounting-equation') initialViewMode = 'TS_GREWAL_ACCOUNTING_EQUATION';
  else if (viewParam === 'euclid' || viewParam === 'euclid-interactive' || (chapterParam === '5' && classParam === '9' && params.get('interactive') === 'true')) initialViewMode = 'EUCLID_INTERACTIVE';
  else if (viewParam === 'class11-stats' || viewParam === 'stats-test' || viewParam === 'class11-stats-test' || (classParam === '11' && (subjectParam === 'c11-stats' || subjectParam === 'kest1dd') && params.get('test') === 'true')) initialViewMode = 'CLASS_11_STATS_TEST';
  else if (
    viewParam === 'class11-economics' ||
    viewParam === 'class11-economics-test' ||
    viewParam === 'economics-test' ||
    viewParam === 'keec1-test' ||
    viewParam === 'keec101' ||
    viewParam === 'keec102' ||
    (classParam === '11' && (subjectParam === 'c11-economics' || subjectParam === 'c11-economics-stats' || subjectParam === 'keec1') && (params.get('test') === 'true' || params.get('economics-test') === 'true'))
  ) {
    initialViewMode = 'CLASS_11_ECONOMICS_TEST';
    initialClass = 11;
  }
  else if (viewParam === 'history-test' || viewParam === 'bhakti-test' || viewParam === 'mongol-test' || viewParam === 'lhhs202' || viewParam === 'khhs105' || viewParam === 'kabir' || viewParam === 'kabir-das' || viewParam === 'kabir-test' || viewParam === 'kabirdas') initialViewMode = 'HISTORY_COMPETENCY_TEST';
  else if (
    viewParam === 'class9-maths-test' ||
    viewParam === 'maths-ch4-5-test' ||
    viewParam === 'class9-maths-40marks' ||
    viewParam === 'maths9-test' ||
    (classParam === '9' && (chapterParam === '4' || chapterParam === '5') && params.get('test') === 'true')
  ) {
    initialViewMode = 'CLASS_9_MATHS_TEST';
    initialClass = 9;
  }
  else if (
    viewParam === 'class6-maths-workbook' ||
    viewParam === 'data-handling' ||
    viewParam === 'data-handling-workbook' ||
    viewParam === 'fegp104' ||
    (classParam === '6' && (chapterParam === '4' || params.get('chapter') === '4') && (params.get('workbook') === 'true' || params.get('interactive') === 'true'))
  ) {
    initialViewMode = 'CLASS_6_MATHS_WORKBOOK';
    initialClass = 6;
    initialBookTitle = 'Ganita Prakash (VI)';
  }
  else if (
    pathname.includes('hindi-class9-grammar') ||
    viewParam === 'hindi-grammar' ||
    viewParam === 'vyakaran' ||
    viewParam === 'grammar' ||
    viewParam === 'hindi-grammar-studio' ||
    (classParam === '9' && (subjectParam === 'c9-hindi-grammar' || subjectParam === 'hindi-grammar') && (params.get('studio') === 'true' || params.get('interactive') === 'true'))
  ) {
    initialViewMode = 'HINDI_GRAMMAR_STUDIO';
    initialClass = 9;
    const c9Info = classesData.find(c => c.classNumber === 9);
    initialSubject = c9Info?.subjects.find((s: Subject) => s.id === 'c9-hindi-grammar') || null;
    initialBookTitle = 'हिंदी व्याकरण मास्टरक्लास (IX)';
  }
  else if (viewParam === 'hydrocarbons' || viewParam === 'hydrocarbons-test' || viewParam === 'nios-313' || viewParam === 'nios-chemistry' || viewParam === 'nios-l26' || viewParam === 'l26' || viewParam === 'hydrocarbon') initialViewMode = 'HYDROCARBONS_TEST';
  else if (
    pathname.includes('middle-school-doubt-diagnostic-studio') ||
    viewParam === 'doubt-studio' ||
    viewParam === 'doubts' ||
    viewParam === 'doubt' ||
    viewParam === 'diagnostic-studio'
  ) {
    initialViewMode = 'DOUBT_STUDIO';
    if (classParam && [6, 7, 8].includes(Number(classParam))) {
      initialClass = Number(classParam);
    }
  }
  else if (
    pathname.includes('nextsem-academy-classes') ||
    pathname.includes('academy-classes') ||
    viewParam === 'academy-classes' ||
    viewParam === 'nextsem-classes' ||
    viewParam === 'nextsem-academy-classes' ||
    viewParam === 'classes-hub'
  ) {
    initialViewMode = 'ACADEMY_CLASSES';
  }
  else if (
    pathname.includes('schedule') ||
    pathname.includes('timetable') ||
    viewParam === 'schedule' ||
    viewParam === 'schedule-builder' ||
    viewParam === 'timetable' ||
    viewParam === 'planner'
  ) {
    initialViewMode = 'SCHEDULE_BUILDER';
  }
  // Specific Subject & Class routing takes precedence over generic view=classes
  else if (initialChapter) initialViewMode = 'PDF_READER';
  else if (initialSubject) initialViewMode = 'BOOK_CHAPTERS';
  else if (classParam) initialViewMode = 'CLASS_SUBJECTS';
  else if (viewParam === 'classes') initialViewMode = 'CLASSES';

  return {
    initialClass,
    initialSubject,
    initialBookPartId,
    initialBookTitle,
    initialChapter,
    initialViewMode
  };
}

export function App() {
  const initialState = getInitialStateFromUrl();

  // Modals & Drawers state
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [isQuizzesOpen, setIsQuizzesOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [wipCategoryName, setWipCategoryName] = useState<string | null>(null);

  // Theme state: support 'system' | 'dark' | 'light' with dynamic OS adaptivity
  const [themePreference, setThemePreference] = useState<'system' | 'dark' | 'light'>(() => {
    const saved = localStorage.getItem('nextsem_theme_preference') as 'system' | 'dark' | 'light' | null;
    if (saved === 'system' || saved === 'dark' || saved === 'light') return saved;
    const legacyDark = localStorage.getItem('nextsem_dark_mode');
    if (legacyDark !== null) return legacyDark === 'true' ? 'dark' : 'light';
    return 'system';
  });

  const [systemIsDark, setSystemIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const darkMode = themePreference === 'system' ? systemIsDark : themePreference === 'dark';

  const setDarkMode = (val: boolean | ((prev: boolean) => boolean)) => {
    const nextVal = typeof val === 'function' ? val(darkMode) : val;
    setThemePreference(nextVal ? 'dark' : 'light');
  };

  // App Update Modal State
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);

  // Curriculum Board State: NCERT vs NIOS
  const [currentBoard, setCurrentBoard] = useState<'NCERT' | 'NIOS'>(() => {
    const saved = localStorage.getItem('nextsem_current_board') as 'NCERT' | 'NIOS' | null;
    return saved === 'NIOS' ? 'NIOS' : 'NCERT';
  });

  const handleSelectBoard = (board: 'NCERT' | 'NIOS') => {
    setCurrentBoard(board);
    localStorage.setItem('nextsem_current_board', board);
    if (board === 'NIOS') {
      navigateTo({ viewMode: 'NIOS_BOOKS' });
    } else {
      navigateTo({ viewMode: 'CLASSES' });
    }
  };

  // Navigation & Selection State
  const [selectedClass, setSelectedClass] = useState<number>(initialState.initialClass);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(initialState.initialSubject);
  const [selectedBookPartId, setSelectedBookPartId] = useState<string>(initialState.initialBookPartId);
  const [selectedBookTitle, setSelectedBookTitle] = useState<string>(initialState.initialBookTitle);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(initialState.initialChapter);
  const [selectedKgLevel, setSelectedKgLevel] = useState<'nursery' | 'lkg' | 'ukg' | 'all'>('all');
  const [activeSection, setActiveSection] = useState<AcademicSection | null>(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    const sec = params.get('section')?.toLowerCase();
    if (sec === 'primary') return 'PRIMARY';
    if (sec === 'secondary') return 'SECONDARY';
    if (sec === 'senior' || sec === 'senior-secondary' || sec === 'seniorsecondary') return 'SENIOR';
    if (params.get('class')) {
      const c = Number(params.get('class'));
      if (c >= 11) return 'SENIOR';
      if (c >= 6) return 'SECONDARY';
      return 'PRIMARY';
    }
    return null;
  });
  const [viewMode, setViewMode] = useState<ViewMode>(initialState.initialViewMode);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Bookmarks state
  const [bookmarks, setBookmarks] = useState<QuestionSolution[]>(() => {
    const saved = localStorage.getItem('nextsem_ncert_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  // Bookmarked Subjects & Chapters State
  const [bookmarkedSubjectIds, setBookmarkedSubjectIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('nextsem_bookmarked_subjects');
    return saved ? JSON.parse(saved) : [];
  });

  const [bookmarkedChapterIds, setBookmarkedChapterIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('nextsem_bookmarked_chapters');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('nextsem_bookmarked_subjects', JSON.stringify(bookmarkedSubjectIds));
  }, [bookmarkedSubjectIds]);

  useEffect(() => {
    localStorage.setItem('nextsem_bookmarked_chapters', JSON.stringify(bookmarkedChapterIds));
  }, [bookmarkedChapterIds]);

  // Synchronize Dark / Light Theme globally across document and localStorage
  useEffect(() => {
    localStorage.setItem('nextsem_dark_mode', String(darkMode));
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light-theme');
      document.body.classList.add('dark');
      document.body.classList.remove('light-theme');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-theme');
      document.body.classList.remove('dark');
      document.body.classList.add('light-theme');
    }
  }, [darkMode]);

  const handleToggleBookmarkSubject = (subj: Subject) => {
    setBookmarkedSubjectIds(prev =>
      prev.includes(subj.id) ? prev.filter(id => id !== subj.id) : [...prev, subj.id]
    );
  };

  const handleToggleBookmarkChapter = (ch: Chapter) => {
    setBookmarkedChapterIds(prev =>
      prev.includes(ch.id) ? prev.filter(id => id !== ch.id) : [...prev, ch.id]
    );
  };

  const isSubjectBookmarked = (id: string) => bookmarkedSubjectIds.includes(id);
  const isChapterBookmarked = (id: string) => bookmarkedChapterIds.includes(id);

  // Keep Browser URL in sync with App State
  useEffect(() => {
    if (viewMode === 'CLASS_11_HUB') {
      window.history.replaceState(null, '', '/class11');
      return;
    }
    if (viewMode === 'CLASS_9_HUB') {
      window.history.replaceState(null, '', '/class9');
      return;
    }

    if (selectedClass === 9 && selectedSubject) {
      let slug = 'maths';
      if (selectedSubject.id === 'c9-maths') slug = 'maths';
      else if (selectedSubject.id === 'c9-science') slug = 'science';
      else if (selectedSubject.id === 'c9-english') slug = 'english';
      else if (selectedSubject.id === 'c9-hindi') slug = 'hindi';
      else if (selectedSubject.id === 'c9-social-science') slug = 'social-science';
      else if (selectedSubject.id === 'c9-hindi-grammar') slug = 'hindi-grammar';
      else slug = selectedSubject.id.replace(/^c9-/, '');

      if (viewMode === 'PDF_READER' && selectedChapter) {
        window.history.replaceState(null, '', `/class9/${slug}?chapter=${selectedChapter.chapterNumber}`);
      } else {
        window.history.replaceState(null, '', `/class9/${slug}`);
      }
      return;
    }

    const params = new URLSearchParams();

    if (viewMode === 'PDF_READER' && selectedSubject && selectedChapter) {
      params.set('class', String(selectedClass));
      params.set('subject', selectedSubject.id);
      params.set('book', selectedBookPartId);
      params.set('chapter', String(selectedChapter.chapterNumber));
    } else if (viewMode === 'BOOK_CHAPTERS' && selectedSubject) {
      params.set('class', String(selectedClass));
      params.set('subject', selectedSubject.id);
      params.set('book', selectedBookPartId);
    } else if (viewMode === 'SUBJECT_BOOKS' && selectedSubject) {
      params.set('class', String(selectedClass));
      params.set('subject', selectedSubject.id);
    } else if (viewMode === 'CLASS_SUBJECTS') {
      params.set('class', String(selectedClass));
    } else if (viewMode === 'CLASSES') {
      params.set('view', 'classes');
    } else if (viewMode === 'NCERT_NOTES') {
      params.set('view', 'ncert-notes');
    } else if (viewMode === 'NIOS_BOOKS') {
      params.set('view', 'nios-books');
    } else if (viewMode === 'NIOS_NOTES') {
      params.set('view', 'nios-notes');
    } else if (viewMode === 'OFFLINE_FILES') {
      params.set('view', 'offline');
    } else if (viewMode === 'BOOKMARKS') {
      params.set('view', 'bookmarks');
    } else if (viewMode === 'INBUILT_READER') {
      params.set('view', 'inbuilt-reader');
    } else if (viewMode === 'SHARE_APP') {
      params.set('view', 'share');
    } else if (viewMode === 'FEEDBACK') {
      params.set('view', 'feedback');
    } else if (viewMode === 'PRIVACY_POLICY') {
      params.set('view', 'privacy');
    } else if (viewMode === 'RATE_US') {
      params.set('view', 'rate');
    } else if (viewMode === 'CLASS_9_MATHS_TEST') {
      params.set('view', 'class9-maths-test');
    } else if (viewMode === 'HISTORY_CH1_PAGES_11_12') {
      params.set('view', 'history-ch1-pages11-12');
    }

    const queryString = params.toString();
    const newUrl = queryString ? `?${queryString}` : window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  }, [viewMode, selectedClass, selectedSubject, selectedBookPartId, selectedChapter]);

  // Navigation History Manager
  interface NavigationSnapshot {
    viewMode: ViewMode;
    selectedClass: number;
    selectedSubject: Subject | null;
    selectedBookPartId: string;
    selectedBookTitle: string;
    selectedChapter: Chapter | null;
  }

  const [navHistory, setNavHistory] = useState<NavigationSnapshot[]>([]);

  const navigateTo = (newLocation: {
    viewMode: ViewMode;
    selectedClass?: number;
    selectedSubject?: Subject | null;
    selectedBookPartId?: string;
    selectedBookTitle?: string;
    selectedChapter?: Chapter | null;
  }) => {
    const snapshot: NavigationSnapshot = {
      viewMode,
      selectedClass,
      selectedSubject,
      selectedBookPartId,
      selectedBookTitle,
      selectedChapter
    };

    setNavHistory((prev) => {
      const updated = [...prev, snapshot];
      return updated.slice(-20);
    });

    if (newLocation.selectedClass !== undefined) setSelectedClass(newLocation.selectedClass);
    if (newLocation.selectedSubject !== undefined) setSelectedSubject(newLocation.selectedSubject);
    if (newLocation.selectedBookPartId !== undefined) setSelectedBookPartId(newLocation.selectedBookPartId);
    if (newLocation.selectedBookTitle !== undefined) setSelectedBookTitle(newLocation.selectedBookTitle);
    if (newLocation.selectedChapter !== undefined) setSelectedChapter(newLocation.selectedChapter);
    setViewMode(newLocation.viewMode);

    window.history.pushState({ appNav: true, time: Date.now() }, '');
  };

  const handleGoBack = () => {
    if (navHistory.length === 0) {
      if (viewMode === 'BOOK_CHAPTERS' && selectedClass <= 5) {
        navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass });
        return;
      }
      if (viewMode !== 'CLASSES') {
        setViewMode('CLASSES');
      }
      return;
    }

    setNavHistory((prev) => {
      const stackCopy = [...prev];
      const previousLocation = stackCopy.pop();
      if (previousLocation) {
        setViewMode(previousLocation.viewMode);
        setSelectedClass(previousLocation.selectedClass);
        setSelectedSubject(previousLocation.selectedSubject);
        setSelectedBookPartId(previousLocation.selectedBookPartId);
        setSelectedBookTitle(previousLocation.selectedBookTitle);
        setSelectedChapter(previousLocation.selectedChapter);
      }
      return stackCopy;
    });
  };

  useEffect(() => {
    const onPopState = () => {
      handleGoBack();
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [navHistory, viewMode, selectedClass, selectedSubject, selectedBookPartId, selectedBookTitle, selectedChapter]);

  // Apply dark mode class to root document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('nextsem_dark_mode', String(darkMode));
  }, [darkMode]);

  // Dynamic document title update based on active view and route
  useEffect(() => {
    let title = 'StudyGuide by Nextsem — NCERT & NIOS Solutions Hub';
    if (viewMode === 'CLASS_SUBJECTS') {
      title = `Class ${selectedClass} NCERT Textbooks & Solutions | StudyGuide by Nextsem`;
    } else if (viewMode === 'SUBJECT_BOOKS' && selectedSubject) {
      title = `Class ${selectedClass} ${selectedSubject.name} — NCERT Books | StudyGuide by Nextsem`;
    } else if (viewMode === 'BOOK_CHAPTERS' && selectedBookTitle) {
      title = `${selectedBookTitle} — NCERT Chapters & Solutions | StudyGuide by Nextsem`;
    } else if (viewMode === 'PDF_READER' && selectedChapter) {
      title = `Unit ${selectedChapter.chapterNumber}: ${selectedChapter.title} | StudyGuide by Nextsem`;
    } else if (viewMode === 'CLASSES') {
      title = 'NCERT Classes 1 to 12 Textbooks & Solutions | StudyGuide by Nextsem';
    } else if (viewMode === 'NCERT_SOLUTIONS') {
      title = 'NCERT Solutions for Classes 1–12 | StudyGuide by Nextsem';
    } else if (viewMode === 'NIOS_BOOKS') {
      title = 'Official NIOS Textbooks & Modules | StudyGuide by Nextsem';
    } else if (viewMode === 'POORVI_CH7_NEEM_BABA') {
      title = 'Class 6 English Poorvi Unit 3 Ch 7: Neem Baba (MCQs & Solutions) | StudyGuide by Nextsem';
    } else if (viewMode === 'POORVI_7_UNIT1_LEARNING_TOGETHER') {
      title = 'Class 7 English Poorvi Unit 1: Learning Together (36 Bilingual MCQs & Blanks) | StudyGuide by Nextsem';
    } else if (viewMode === 'CHEMISTRY_CH7_PAGES_1_2') {
      title = 'Class 12 Chemistry Ch 7: Alcohols, Phenols & Ethers (Pages 1-2) | StudyGuide by Nextsem';
    } else if (viewMode === 'CHEMISTRY_CH7_PAGES_3_6') {
      title = 'Class 12 Chemistry Ch 7: Alcohols, Phenols & Ethers (Pages 3-6) | StudyGuide by Nextsem';
    } else if (viewMode === 'EUCLID_INTERACTIVE') {
      title = "Class 9 Maths: Introduction to Euclid's Geometry | StudyGuide by Nextsem";
    } else if (viewMode === 'CLASS_9_MATHS_TEST') {
      title = 'Class 9 Maths: Ch 4 & 5 Assessment (40 Marks) | StudyGuide by Nextsem';
    } else if (viewMode === 'TS_GREWAL_ACCOUNTING_EQUATION') {
      title = 'T.S. Grewal: Accounting Equation (Ch 5 Solutions) | StudyGuide by Nextsem';
    } else if (viewMode === 'HISTORY_CH1_PAGES_11_12') {
      title = 'Class 11 History Theme 1: Writing & City Life (Pages 11 & 12 Worksheet) | StudyGuide by Nextsem';
    } else if (viewMode === 'ACADEMY_CLASSES') {
      title = 'Nextsem Academy Classes & Curriculum (Class 1 to 12) | StudyGuide by Nextsem';
    } else if (viewMode === 'SCHEDULE_BUILDER') {
      title = 'Timetable & Lesson Planner (WordPress Style CMS) | StudyGuide by Nextsem';
    }
    document.title = title;
  }, [viewMode, selectedClass, selectedSubject, selectedBookTitle, selectedChapter]);

  // Persist bookmarks
  useEffect(() => {
    localStorage.setItem('nextsem_ncert_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleToggleBookmark = (solution: QuestionSolution) => {
    setBookmarks((prev) => {
      const exists = prev.some((item) => item.id === solution.id);
      if (exists) {
        return prev.filter((item) => item.id !== solution.id);
      } else {
        return [...prev, solution];
      }
    });
  };

  const isBookmarked = (id: string) => {
    return bookmarks.some((item) => item.id === id);
  };

  const activeClassesData = getMergedClassesData(CLASSES_DATA);
  const currentClassInfo = activeClassesData.find((c) => c.classNumber === selectedClass) || activeClassesData[0];

  // Search filtering
  const searchResults: QuestionSolution[] = [];
  if (searchTerm.trim().length >= 2) {
    activeClassesData.forEach((cls) => {
      cls.subjects.forEach((subj: Subject) => {
        subj.chapters.forEach((ch: Chapter) => {
          [...ch.exerciseSolutions, ...ch.competencyQuestions].forEach((sol) => {
            if (
              sol.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
              sol.finalAnswer.toLowerCase().includes(searchTerm.toLowerCase()) ||
              sol.questionNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (sol.formula && sol.formula.toLowerCase().includes(searchTerm.toLowerCase()))
            ) {
              searchResults.push(sol);
            }
          });
        });
      });
    });
  }

  const getPageHeading = (): string => {
    switch (viewMode) {
      case 'DASHBOARD':
        return 'StudyGuide by Nextsem';
      case 'CLASSES':
        return 'Select Class & Curriculum';
      case 'CLASS_SUBJECTS':
        return `Class ${selectedClass} Books`;
      case 'SUBJECT_BOOKS':
        return selectedSubject ? `${selectedSubject.name}` : `Class ${selectedClass} Books`;
      case 'BOOK_CHAPTERS':
        return selectedBookTitle || 'Book Chapters';
      case 'PDF_READER':
        return 'NCERT PDF Reader';
      case 'NCERT_SOLUTIONS':
        return 'NCERT Solutions';
      case 'NCERT_NOTES':
        return 'NCERT Notes & Solutions';
      case 'NIOS_BOOKS':
        return 'NIOS Official Textbooks';
      case 'NIOS_NOTES':
        return 'NIOS Notes & Practice';
      case 'TS_GREWAL_ACCOUNTING_EQUATION':
        return 'TS Grewal Accountancy';
      case 'CLASS_9_MATHS_TEST':
        return 'Class 9 Maths: Ch 4 & 5 Assessment (40 Marks)';
      case 'HISTORY_CH1_PAGES_11_12':
        return 'Class 11 History Theme 1 (Pages 11 & 12 Worksheet)';
      case 'INBUILT_READER':
        return 'Fast PDF Reader';
      case 'SHARE_APP':
        return 'Share App';
      case 'FEEDBACK':
        return 'Feedback & Support';
      case 'PRIVACY_POLICY':
        return 'Privacy Policy';
      case 'RATE_US':
        return 'Rate App';
      case 'BOOKMARKS':
        return 'Saved Bookmarks';
      case 'OFFLINE_FILES':
        return 'Offline Files';
      case 'ADMIN':
        return 'Admin PDF Portal';
      case 'ACADEMY_CLASSES':
        return 'Nextsem Academy Classes';
      case 'SCHEDULE_BUILDER':
        return 'Timetable & Lesson Planner';
      default:
        return 'NCERT helpguide';
    }
  };

  const getBreadcrumbs = (): Array<{ label: string; onClick?: () => void }> => {
    const crumbs: Array<{ label: string; onClick?: () => void }> = [
      { label: 'Home', onClick: () => navigateTo({ viewMode: 'CLASSES' }) }
    ];

    if (viewMode === 'SCHEDULE_BUILDER') {
      crumbs.push({ label: 'Nextsem Academy Classes', onClick: () => navigateTo({ viewMode: 'ACADEMY_CLASSES' }) });
      crumbs.push({ label: 'Timetable & Lesson Planner' });
    } else if (viewMode === 'ACADEMY_CLASSES') {
      crumbs.push({ label: 'Nextsem Academy Classes' });
    } else if (viewMode === 'CLASSES') {
      if (activeSection === 'PRIMARY') {
        crumbs.push({ label: 'All Sections', onClick: () => setActiveSection(null) });
        crumbs.push({ label: 'Primary (Classes 1–5)' });
      } else if (activeSection === 'SECONDARY') {
        crumbs.push({ label: 'All Sections', onClick: () => setActiveSection(null) });
        crumbs.push({ label: 'Secondary (Classes 6–10)' });
      } else if (activeSection === 'SENIOR') {
        crumbs.push({ label: 'All Sections', onClick: () => setActiveSection(null) });
        crumbs.push({ label: 'Senior Secondary (Classes 11–12)' });
      } else {
        crumbs.push({ label: 'Sections (Primary, Secondary, Senior)' });
      }
    } else if (viewMode === 'NCERT_NOTES') {
      crumbs.push({ label: 'NCERT Notes & Solutions' });
    } else if (viewMode === 'NIOS_BOOKS') {
      crumbs.push({ label: 'NIOS Books' });
    } else if (viewMode === 'NIOS_NOTES') {
      crumbs.push({ label: 'NIOS Notes & Practice' });
    } else if (viewMode === 'CLASS_SUBJECTS' || viewMode === 'CLASS_9_HUB' || viewMode === 'CLASS_11_HUB') {
      crumbs.push({ label: `Class ${selectedClass}` });
    } else if (viewMode === 'SUBJECT_BOOKS') {
      crumbs.push({ label: `Class ${selectedClass}`, onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass }) });
      crumbs.push({ label: selectedSubject ? selectedSubject.name : 'Subjects' });
    } else if (viewMode === 'BOOK_CHAPTERS') {
      crumbs.push({ label: `Class ${selectedClass}`, onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass }) });
      if (selectedSubject) {
        if (selectedClass <= 5) {
          crumbs.push({ label: selectedSubject.name });
        } else {
          crumbs.push({ label: selectedSubject.name, onClick: () => navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject }) });
          crumbs.push({ label: selectedBookTitle || 'Chapters' });
        }
      } else {
        crumbs.push({ label: selectedBookTitle || 'Chapters' });
      }
    } else if (viewMode === 'PDF_READER') {
      crumbs.push({ label: `Class ${selectedClass}`, onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass }) });
      if (selectedSubject) {
        if (selectedClass <= 5) {
          crumbs.push({
            label: selectedSubject.name,
            onClick: () => navigateTo({
              viewMode: 'BOOK_CHAPTERS',
              selectedSubject,
              selectedBookPartId: 'part-1',
              selectedBookTitle: selectedSubject.name
            })
          });
        } else {
          crumbs.push({ label: selectedSubject.name, onClick: () => navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject }) });
          crumbs.push({ label: selectedBookTitle || 'Book', onClick: () => navigateTo({ viewMode: 'BOOK_CHAPTERS', selectedBookPartId, selectedBookTitle }) });
        }
      }
      crumbs.push({ label: selectedChapter ? `Ch ${selectedChapter.chapterNumber}: ${selectedChapter.title}` : 'PDF Reader' });
    } else if (viewMode === 'NCERT_SOLUTIONS') {
      crumbs.push({ label: 'NCERT Solutions (Class 1–12)' });
    } else if (viewMode === 'EUCLID_INTERACTIVE') {
      crumbs.push({ label: 'Class 9', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 9 }) });
      crumbs.push({
        label: 'Mathematics',
        onClick: () => {
          const c9m = activeClassesData.find((c) => c.classNumber === 9)?.subjects.find((s) => s.id === 'c9-maths');
          if (c9m) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c9m, selectedClass: 9 });
        }
      });
      crumbs.push({ label: "Introduction to Euclid's Geometry (Lab & Postulates)" });
    } else if (viewMode === 'CLASS_9_MATHS_TEST') {
      crumbs.push({ label: 'Class 9', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 9 }) });
      crumbs.push({
        label: 'Mathematics',
        onClick: () => {
          const c9m = activeClassesData.find((c) => c.classNumber === 9)?.subjects.find((s) => s.id === 'c9-maths');
          if (c9m) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c9m, selectedClass: 9 });
        }
      });
      crumbs.push({ label: 'Ch 4 & 5 Assessment (40 Marks)' });
    } else if (viewMode === 'HINDI_GRAMMAR_STUDIO') {
      crumbs.push({ label: 'Class 9', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 9 }) });
      crumbs.push({
        label: 'हिंदी व्याकरण',
        onClick: () => {
          const c9hg = activeClassesData.find((c) => c.classNumber === 9)?.subjects.find((s) => s.id === 'c9-hindi-grammar');
          if (c9hg) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c9hg, selectedClass: 9 });
          else navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 9 });
        }
      });
      crumbs.push({ label: 'व्याकरण मास्टरक्लास (लाइव अभ्यास)' });
    } else if (viewMode === 'HISTORY_CH1_PAGES_11_12') {
      crumbs.push({ label: 'Class 11', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 11 }) });
      crumbs.push({
        label: 'History',
        onClick: () => {
          const c11Hist = activeClassesData.find((c) => c.classNumber === 11)?.subjects.find((s) => s.id === 'c11-history');
          if (c11Hist) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c11Hist, selectedClass: 11 });
        }
      });
      crumbs.push({
        label: 'Themes in World History (XI)',
        onClick: () => navigateTo({ viewMode: 'BOOK_CHAPTERS', selectedBookPartId: 'part-1', selectedBookTitle: 'Themes in World History (XI)' })
      });
      crumbs.push({ label: 'Theme 1 (Pages 11 & 12 Worksheet)' });
    } else if (viewMode === 'CLASS_11_STATS_TEST') {
      crumbs.push({ label: 'Class 11', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 11 }) });
      crumbs.push({
        label: 'Economics',
        onClick: () => {
          const c11Eco = activeClassesData.find((c) => c.classNumber === 11)?.subjects.find((s) => s.id === 'c11-economics' || s.id === 'c11-economics-stats');
          if (c11Eco) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c11Eco, selectedClass: 11 });
          else navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 11 });
        }
      });
      crumbs.push({ label: 'Statistics for Economics: Ch 1–4 Mega Test' });
    } else if (viewMode === 'CLASS_11_ECONOMICS_TEST') {
      crumbs.push({ label: 'Class 11', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 11 }) });
      crumbs.push({
        label: 'Economics',
        onClick: () => {
          const c11Eco = activeClassesData.find((c) => c.classNumber === 11)?.subjects.find((s) => s.id === 'c11-economics' || s.id === 'c11-economics-stats');
          if (c11Eco) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c11Eco, selectedClass: 11 });
          else navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 11 });
        }
      });
      crumbs.push({ label: 'Indian Economic Development: Ch 1 & 2 Test Suite' });
    } else if (viewMode === 'TS_GREWAL_ACCOUNTING_EQUATION') {
      crumbs.push({ label: 'Class 11', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 11 }) });
      crumbs.push({
        label: 'Accountancy',
        onClick: () => {
          const c11Acc = activeClassesData.find((c) => c.classNumber === 11)?.subjects.find((s) => s.id === 'c11-accountancy');
          if (c11Acc) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c11Acc, selectedClass: 11 });
        }
      });
      crumbs.push({ label: "T.S. Grewal: Accounting Equation (Ch 5)" });
    } else if (viewMode === 'HYDROCARBONS_TEST') {
      crumbs.push({ label: 'NIOS Practice Hub', onClick: () => navigateTo({ viewMode: 'NIOS_BOOKS' }) });
      crumbs.push({ label: 'Class 12 Chemistry (313)' });
      crumbs.push({ label: 'Lesson 26: Hydrocarbons (35 MCQs)' });
    } else if (viewMode === 'CHEMISTRY_CH7_PAGES_1_2') {
      crumbs.push({ label: 'Class 12', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 12 }) });
      crumbs.push({
        label: 'Chemistry',
        onClick: () => {
          const c12c = activeClassesData.find((c) => c.classNumber === 12)?.subjects.find((s) => s.id === 'c12-chemistry');
          if (c12c) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c12c, selectedClass: 12 });
        }
      });
      crumbs.push({
        label: 'CHEMISTRY PART-II (XII)',
        onClick: () => navigateTo({ viewMode: 'BOOK_CHAPTERS', selectedBookPartId: 'part-2', selectedBookTitle: 'CHEMISTRY PART-II (XII)' })
      });
      crumbs.push({ label: 'Unit 7 (Pages 1 & 2): Classification & Nomenclature' });
    } else if (viewMode === 'CHEMISTRY_CH7_PAGES_3_6') {
      crumbs.push({ label: 'Class 12', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 12 }) });
      crumbs.push({
        label: 'Chemistry',
        onClick: () => {
          const c12c = activeClassesData.find((c) => c.classNumber === 12)?.subjects.find((s) => s.id === 'c12-chemistry');
          if (c12c) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: c12c, selectedClass: 12 });
        }
      });
      crumbs.push({
        label: 'CHEMISTRY PART-II (XII)',
        onClick: () => navigateTo({ viewMode: 'BOOK_CHAPTERS', selectedBookPartId: 'part-2', selectedBookTitle: 'CHEMISTRY PART-II (XII)' })
      });
      crumbs.push({ label: 'Unit 7 (Pages 3–6): Ethers, IUPAC & 3D Geometry' });
    } else if (viewMode === 'POLITICAL_SCIENCE_CH1_FILL_BLANKS') {
      crumbs.push({ label: 'Class 12', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 12 }) });
      crumbs.push({ label: 'समकालीन विश्व राजनीति' });
      crumbs.push({ label: 'अध्याय 1: दो ध्रुवीयता का अंत' });
      crumbs.push({ label: 'रिक्त स्थान भरो (संकेत सहित)' });
    } else if (viewMode === 'POLITICAL_SCIENCE_CH1_QUOTA1') {
      crumbs.push({ label: 'Class 12', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 12 }) });
      crumbs.push({ label: 'समकालीन विश्व राजनीति' });
      crumbs.push({ label: 'अध्याय 1: दो ध्रुवीयता का अंत' });
      crumbs.push({ label: 'कोटा 1 (पृष्ठ 1-5)' });
    } else if (viewMode === 'POORVI_CH7_NEEM_BABA') {
      crumbs.push({ label: 'Class 6', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 6 }) });
      crumbs.push({ label: 'Poorvi English' });
      crumbs.push({ label: 'Unit 3: Nurturing Nature' });
      crumbs.push({ label: 'Ch 7: Neem Baba (6 Options • Unpredictable MCQs)' });
    } else if (viewMode === 'POORVI_7_UNIT1_LEARNING_TOGETHER') {
      crumbs.push({ label: 'Class 7', onClick: () => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 7 }) });
      crumbs.push({ label: 'Poorvi English' });
      crumbs.push({ label: 'Unit 1: Learning Together (36 Bilingual MCQs & Blanks)' });
    } else if (viewMode === 'BOOKMARKS') {
      crumbs.push({ label: 'Saved Bookmarks' });
    } else if (viewMode === 'OFFLINE_FILES') {
      crumbs.push({ label: 'Offline Downloaded Files' });
    } else if (viewMode === 'INBUILT_READER') {
      crumbs.push({ label: 'Fast PDF Reader' });
    } else if (viewMode === 'PRIVACY_POLICY') {
      crumbs.push({ label: 'Privacy Policy' });
    } else if (viewMode === 'FEEDBACK') {
      crumbs.push({ label: 'Feedback & Support' });
    } else if (viewMode === 'RATE_US') {
      crumbs.push({ label: 'Rate App' });
    } else if (viewMode === 'BILINGUAL_PDF_MERGER') {
      crumbs.push({ label: 'Administration & Storage', onClick: () => navigateTo({ viewMode: 'ADMIN' }) });
      crumbs.push({ label: 'द्विभाषी PDF विलय स्टूडियो (Bilingual Chapter Merger)' });
    } else if (viewMode === 'KIDS_FOUNDATIONAL_HUB') {
      crumbs.push({ label: 'Classes KG–12', onClick: () => navigateTo({ viewMode: 'CLASSES' }) });
      crumbs.push({ label: 'Kindergarten & Balvatika (Nursery, LKG, UKG)' });
    }

    return crumbs;
  };

  const getSearchPlaceholder = (): string => {
    if (viewMode === 'CLASSES') return 'Search class (e.g. KG, Nursery, 10, 12)...';
    if (viewMode === 'CLASS_SUBJECTS' || viewMode === 'SUBJECT_BOOKS') return 'Search subjects...';
    if (viewMode === 'BOOK_CHAPTERS') return 'Search chapters...';
    return 'Search solutions, formulas...';
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--background)', color: 'var(--foreground)' }}>
      
      {/* Header Navigation with Active View State, Desktop Breadcrumbs & Search Input */}
      <Navbar
        onHomeClick={() => navigateTo({ viewMode: 'CLASSES' })}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenAcademyClasses={() => navigateTo({ viewMode: 'ACADEMY_CLASSES' })}
        onOpenSolutionsPage={() => navigateTo({ viewMode: 'NCERT_SOLUTIONS' })}
        activeView={viewMode}
        onOpenAccountancy={() => navigateTo({ viewMode: 'TS_GREWAL_ACCOUNTING_EQUATION' })}
        onOpenQuizzes={() => setIsQuizzesOpen(true)}
        breadcrumbs={getBreadcrumbs()}
        pageHeading={getPageHeading()}
        onGoBack={handleGoBack}
        canGoBack={viewMode !== 'CLASSES' && viewMode !== 'DASHBOARD'}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        searchPlaceholder={getSearchPlaceholder()}
        isDarkMode={darkMode}
        onToggleTheme={() => setDarkMode(prev => !prev)}
      />

      {/* Complete Breadcrumb Address Bar on All Pages Just Below Navbar */}
      <BreadcrumbAddressBar breadcrumbs={getBreadcrumbs()} />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        
        {searchTerm.trim().length >= 2 && viewMode !== 'CLASSES' ? (
          /* Global Search Results Overlay view */
          <div className="container" style={{ margin: '2rem auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                  Search Results for "{searchTerm}"
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Found {searchResults.length} matching NCERT exercise questions & formulas
                </p>
              </div>
              <button className="btn btn-outline" onClick={() => setSearchTerm('')}>
                Clear Search
              </button>
            </div>

            {searchResults.length > 0 ? (
              <SolutionViewer
                solutions={searchResults}
                onToggleBookmark={handleToggleBookmark}
                isBookmarked={isBookmarked}
              />
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                <Search size={48} style={{ margin: '0 auto 1rem', opacity: 0.4 }} />
                <h3>No matching NCERT solutions found for "{searchTerm}"</h3>
                <p style={{ fontSize: '0.9rem' }}>Try searching for keywords like "Prime factor", "Coulomb", "Magnesium", or "140".</p>
              </div>
            )}
          </div>
        ) : (
          <div className="container" id="class-grid-section" style={{ paddingTop: '0.75rem', paddingBottom: '1.5rem' }}>
            
            {/* Page 1: Dashboard First View */}
            {viewMode === 'DASHBOARD' && (
              <AppDashboard 
                selectedClass={selectedClass}
                onSelectClass={(clsNum) => {
                  navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
                }}
                onSelectCategory={(cat) => {
                  if (cat === 'ncert-books') {
                    navigateTo({ viewMode: 'CLASSES' });
                  } else if (cat === 'ncert-notes') {
                    navigateTo({ viewMode: 'NCERT_NOTES' });
                  } else if (cat === 'nios-books') {
                    navigateTo({ viewMode: 'NIOS_BOOKS' });
                  } else if (cat === 'nios-notes') {
                    navigateTo({ viewMode: 'NIOS_NOTES' });
                  } else if (cat === 'ncert-solutions') {
                    navigateTo({ viewMode: 'NCERT_SOLUTIONS' });
                  } else if (cat === 'class11-stats-test') {
                    navigateTo({ viewMode: 'CLASS_11_STATS_TEST', selectedClass: 11 });
                  } else if (cat === 'class11-economics-test' || cat === 'economics-test') {
                    navigateTo({ viewMode: 'CLASS_11_ECONOMICS_TEST', selectedClass: 11 });
                  } else if (cat === 'history-competency-test') {
                    navigateTo({ viewMode: 'HISTORY_COMPETENCY_TEST', selectedClass: 12 });
                  } else if (cat === 'hydrocarbons-test' || cat === 'nios-hydrocarbons') {
                    navigateTo({ viewMode: 'HYDROCARBONS_TEST', selectedClass: 12 });
                  } else if (cat === 'euclid-interactive') {
                    navigateTo({ viewMode: 'EUCLID_INTERACTIVE', selectedClass: 9 });
                  } else if (cat === 'class9-maths-test' || cat === 'maths-ch4-5-test') {
                    navigateTo({ viewMode: 'CLASS_9_MATHS_TEST', selectedClass: 9 });
                  } else if (cat === 'history-ch1-pages11-12' || cat === 'mesopotamia-worksheet') {
                    navigateTo({ viewMode: 'HISTORY_CH1_PAGES_11_12', selectedClass: 11 });
                  } else {
                    navigateTo({ viewMode: 'CLASS_SUBJECTS' });
                  }
                }} 
              />
            )}

            {/* Page 2: Class Selection Grid */}
            {viewMode === 'CLASSES' && (
              <div>
                <ClassGrid
                  selectedClass={selectedClass}
                  onSelectClass={(clsNum) => {
                    const inferredSec = clsNum >= 11 ? 'SENIOR' : clsNum >= 6 ? 'SECONDARY' : 'PRIMARY';
                    setActiveSection(inferredSec);
                    navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
                  }}
                  initialSection={activeSection}
                  onSelectSectionChange={(sec) => setActiveSection(sec)}
                  onOpenNios={() => navigateTo({ viewMode: 'NIOS_BOOKS' })}
                  onOpenKgHub={(lvl) => {
                    setSelectedKgLevel(lvl || 'all');
                    navigateTo({ viewMode: 'KIDS_FOUNDATIONAL_HUB' });
                  }}
                  onBack={handleGoBack}
                  onOpenAdmin={() => navigateTo({ viewMode: 'ADMIN' })}
                  searchQuery={searchTerm}
                />
              </div>
            )}

            {/* Page 3: Class Subjects Selection Grid */}
            {(viewMode === 'CLASS_SUBJECTS' || viewMode === 'CLASS_9_HUB' || viewMode === 'CLASS_11_HUB') && (
              <div>
                {selectedClass === 11 ? (
                  <Class11PageView
                    subjects={currentClassInfo.subjects}
                    onSelectSubject={(subj) => {
                      navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: subj });
                    }}
                    onBackToClasses={handleGoBack}
                  />
                ) : selectedClass === 9 ? (
                  <Class9PageView
                    subjects={currentClassInfo.subjects}
                    onSelectSubject={(subj) => {
                      navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: subj });
                    }}
                    onBackToClasses={handleGoBack}
                  />
                ) : (
                  <SubjectList
                    subjects={currentClassInfo.subjects}
                    selectedSubject={selectedSubject}
                    onSelectSubject={(subj) => {
                      if (selectedClass <= 5) {
                        navigateTo({
                          viewMode: 'BOOK_CHAPTERS',
                          selectedSubject: subj,
                          selectedBookPartId: 'part-1',
                          selectedBookTitle: subj.name
                        });
                      } else {
                        navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: subj });
                      }
                    }}
                    selectedClassNum={selectedClass}
                    onToggleBookmarkSubject={handleToggleBookmarkSubject}
                    isSubjectBookmarked={isSubjectBookmarked}
                    onBack={handleGoBack}
                  />
                )}
              </div>
            )}

            {/* Page 4: Subject Book Parts Grid */}
            {viewMode === 'SUBJECT_BOOKS' && selectedSubject && (
              <SubjectBooksView
                subject={selectedSubject}
                allClassSubjects={currentClassInfo.subjects}
                onSelectSubject={(subj) => setSelectedSubject(subj)}
                onSelectBookPart={(partId, partTitle) => {
                  if (partId === 'ts-grewal') {
                    navigateTo({ viewMode: 'TS_GREWAL_ACCOUNTING_EQUATION', selectedClass: 11 });
                  } else {
                    navigateTo({ viewMode: 'BOOK_CHAPTERS', selectedBookPartId: partId, selectedBookTitle: partTitle });
                  }
                }}
                onOpenHindiGrammarStudio={() => {
                  navigateTo({ viewMode: 'HINDI_GRAMMAR_STUDIO', selectedClass: 9 });
                }}
                onBackToSubjects={handleGoBack}
                onToggleBookmarkSubject={handleToggleBookmarkSubject}
                isSubjectBookmarked={isSubjectBookmarked}
              />
            )}

            {/* Page 5: Book Chapter Downloads & Reader List */}
            {viewMode === 'BOOK_CHAPTERS' && selectedSubject && (() => {
              const displayChapters = selectedSubject.chapters.filter((ch) => {
                if (selectedSubject.id === 'c12-english') {
                  if (selectedBookPartId === 'part-1') return ch.officialBookCode === 'lefl1' || (!ch.id.includes('vistas') && !ch.id.includes('kaleidoscope'));
                  if (selectedBookPartId === 'part-2') return ch.officialBookCode === 'levt1' || ch.id.includes('vistas');
                  if (selectedBookPartId === 'part-3') return ch.officialBookCode === 'lekl1' || ch.id.includes('kaleidoscope');
                }
                if (selectedSubject.id === 'c12-history') {
                  if (selectedBookPartId === 'part-1') return ch.officialBookCode === 'lehs1' || ch.officialBookCode === 'lhhs1' || ch.chapterNumber <= 4;
                  if (selectedBookPartId === 'part-2') return ch.officialBookCode === 'lehs2' || ch.officialBookCode === 'lhhs2' || (ch.chapterNumber >= 5 && ch.chapterNumber <= 8);
                  if (selectedBookPartId === 'part-3') return ch.officialBookCode === 'lehs3' || ch.officialBookCode === 'lhhs3' || ch.chapterNumber >= 9;
                }
                if (selectedSubject.id === 'c9-social-science') {
                  if (selectedBookPartId === 'part-1') return ch.officialBookCode === 'iess1' || ch.id.includes('his');
                  if (selectedBookPartId === 'part-2') return ch.officialBookCode === 'iess2' || ch.id.includes('geo');
                  if (selectedBookPartId === 'part-3') return ch.officialBookCode === 'iess3' || ch.id.includes('civ');
                  if (selectedBookPartId === 'part-4') return ch.officialBookCode === 'iess4' || ch.id.includes('eco');
                }
                if (selectedSubject.id === 'c11-economics-stats' || selectedSubject.id === 'c11-economics') {
                  if (selectedBookPartId === 'part-1') return ch.officialBookCode === 'kest1' || ch.id.includes('stats');
                  if (selectedBookPartId === 'part-2') return ch.officialBookCode === 'keec1' || ch.id.includes('ied');
                }
                if (selectedBookPartId === 'exemplar') {
                  return true;
                }
                if (selectedClass <= 5) {
                  return true;
                }
                if (selectedBookPartId === 'part-1') {
                  if (ch.officialBookCode) return ch.officialBookCode.endsWith('1');
                  return selectedSubject.id.includes('p') ? ch.chapterNumber <= 8 : ch.chapterNumber <= 6;
                }
                if (selectedBookPartId === 'part-2') {
                  if (ch.officialBookCode) return ch.officialBookCode.endsWith('2');
                  return selectedSubject.id.includes('p') ? ch.chapterNumber >= 9 : ch.chapterNumber >= 7;
                }
                return true;
              });

              return (
                <BookChaptersView
                  bookTitle={selectedBookTitle}
                  chapters={displayChapters}
                  onOpenPdfReader={(ch) => {
                    navigateTo({ viewMode: 'PDF_READER', selectedChapter: ch });
                  }}
                  onOpenInteractiveEuclid={(ch) => {
                    navigateTo({ viewMode: 'EUCLID_INTERACTIVE', selectedChapter: ch });
                  }}
                  onOpenClass6MathsWorkbook={(ch) => {
                    navigateTo({ viewMode: 'CLASS_6_MATHS_WORKBOOK', selectedChapter: ch, selectedClass: 6 });
                  }}
                  onOpenClass9MathsTest={() => {
                    navigateTo({ viewMode: 'CLASS_9_MATHS_TEST', selectedClass: 9 });
                  }}
                  onOpenHindiGrammarStudio={() => {
                    navigateTo({ viewMode: 'HINDI_GRAMMAR_STUDIO', selectedClass: 9 });
                  }}
                  onOpenStatsTest={() => {
                    navigateTo({ viewMode: 'CLASS_11_STATS_TEST', selectedClass: 11 });
                  }}
                  onOpenEconomicsTest={() => {
                    navigateTo({ viewMode: 'CLASS_11_ECONOMICS_TEST', selectedClass: 11 });
                  }}
                  onOpenHistoryTest={() => {
                    navigateTo({ viewMode: 'HISTORY_COMPETENCY_TEST', selectedClass: 12 });
                  }}
                  onOpenHydrocarbonsTest={() => {
                    navigateTo({ viewMode: 'HYDROCARBONS_TEST', selectedClass: 12 });
                  }}
                  onBackToBooks={() => {
                    if (selectedClass <= 5) {
                      navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass });
                    } else {
                      handleGoBack();
                    }
                  }}
                  onToggleBookmarkChapter={handleToggleBookmarkChapter}
                  isChapterBookmarked={isChapterBookmarked}
                />
              );
            })()}

            {/* Page 5.5: Interactive Animated Euclid Geometry Lab */}
            {viewMode === 'EUCLID_INTERACTIVE' && (
              <EuclidGeometryInteractiveView
                chapter={selectedChapter || undefined}
                onBack={handleGoBack}
              />
            )}

            {/* Page 5.6: Interactive Class 6 Maths Chapter 4 Data Handling Workbook */}
            {viewMode === 'CLASS_6_MATHS_WORKBOOK' && (
              <DataHandlingWorkbookView
                chapter={selectedChapter || undefined}
                onBack={handleGoBack}
                onNavigateHome={() => navigateTo({ viewMode: 'DASHBOARD' })}
                onNavigateClass={(c) => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: c })}
                onNavigateSubject={() => {
                  if (selectedSubject) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject });
                  else navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 6 });
                }}
              />
            )}

            {/* Page 5.7: Interactive Class 9 Hindi Grammar Mastery Studio */}
            {viewMode === 'HINDI_GRAMMAR_STUDIO' && (
              <HindiGrammarMasteryView
                chapter={selectedChapter || undefined}
                onBack={handleGoBack}
              />
            )}

            {/* Page 6: Fullscreen Interactive In-App PDF Reader */}
            {viewMode === 'PDF_READER' && selectedChapter && (
              <PdfReaderView
                chapter={selectedChapter}
                bookTitle={selectedBookTitle}
                onBackToChapters={handleGoBack}
                onToggleBookmark={handleToggleBookmark}
                isBookmarked={isBookmarked}
                onOpenStatsTest={() => {
                  navigateTo({ viewMode: 'CLASS_11_STATS_TEST', selectedClass: 11 });
                }}
                onOpenEconomicsTest={() => {
                  navigateTo({ viewMode: 'CLASS_11_ECONOMICS_TEST', selectedClass: 11 });
                }}
                onOpenHistoryTest={() => {
                  navigateTo({ viewMode: 'HISTORY_COMPETENCY_TEST', selectedClass: 12 });
                }}
                onOpenHydrocarbonsTest={() => {
                  navigateTo({ viewMode: 'HYDROCARBONS_TEST', selectedClass: 12 });
                }}
                onOpenInteractiveEuclid={(ch) => {
                  navigateTo({ viewMode: 'EUCLID_INTERACTIVE', selectedChapter: ch });
                }}
                onOpenClass6MathsWorkbook={() => {
                  navigateTo({ viewMode: 'CLASS_6_MATHS_WORKBOOK', selectedChapter, selectedClass: 6 });
                }}
                onOpenClass9MathsTest={() => {
                  navigateTo({ viewMode: 'CLASS_9_MATHS_TEST', selectedClass: 9 });
                }}
                onOpenHindiGrammarStudio={() => {
                  navigateTo({ viewMode: 'HINDI_GRAMMAR_STUDIO', selectedClass: 9 });
                }}
              />
            )}

            {/* Dedicated Drawer Pages */}
            {viewMode === 'BOOKMARKS' && (
              <BookmarkedItemsView
                bookmarkedSubjectIds={bookmarkedSubjectIds}
                bookmarkedChapterIds={bookmarkedChapterIds}
                onToggleBookmarkSubject={handleToggleBookmarkSubject}
                onToggleBookmarkChapter={handleToggleBookmarkChapter}
                onSelectSubject={(subj) => {
                  if (selectedClass <= 5) {
                    navigateTo({
                      viewMode: 'BOOK_CHAPTERS',
                      selectedSubject: subj,
                      selectedBookPartId: 'part-1',
                      selectedBookTitle: subj.name
                    });
                  } else {
                    navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject: subj });
                  }
                }}
                onSelectChapter={(subj, ch) => {
                  navigateTo({ viewMode: 'PDF_READER', selectedSubject: subj, selectedChapter: ch });
                }}
                onBack={handleGoBack}
              />
            )}

            {viewMode === 'NCERT_SOLUTIONS' && (
              <NcertSolutionsView
                onBack={handleGoBack}
                onToggleBookmark={handleToggleBookmark}
                isBookmarked={isBookmarked}
                onOpenTsGrewal={() => navigateTo({ viewMode: 'TS_GREWAL_ACCOUNTING_EQUATION' })}
              />
            )}

            {viewMode === 'NCERT_NOTES' && (
              <NcertNotesView
                onBack={handleGoBack}
                onOpenTsGrewal={() => navigateTo({ viewMode: 'TS_GREWAL_ACCOUNTING_EQUATION' })}
                searchQuery={searchTerm}
              />
            )}

            {viewMode === 'NIOS_BOOKS' && (
              <NiosBooksView
                onBack={handleGoBack}
              />
            )}

            {viewMode === 'NIOS_NOTES' && (
              <NiosNotesView
                onBack={handleGoBack}
              />
            )}

            {viewMode === 'OFFLINE_FILES' && (
              <OfflineFilesView
                onOpenPdfReader={(ch) => {
                  navigateTo({ viewMode: 'PDF_READER', selectedChapter: ch });
                }}
                onBack={handleGoBack}
              />
            )}

            {viewMode === 'INBUILT_READER' && (
              <InbuiltReaderInfoView onBack={handleGoBack} />
            )}

            {viewMode === 'SHARE_APP' && (
              <ShareAppView onBack={handleGoBack} />
            )}

            {viewMode === 'FEEDBACK' && (
              <FeedbackView onBack={handleGoBack} />
            )}

            {viewMode === 'PRIVACY_POLICY' && (
              <PrivacyPolicyView onBack={handleGoBack} />
            )}

            {viewMode === 'RATE_US' && (
              <RateAppView onBack={handleGoBack} />
            )}

            {viewMode === 'TS_GREWAL_ACCOUNTING_EQUATION' && (
              <TsGrewalAccountingEquationView onBack={handleGoBack} />
            )}

            {viewMode === 'EUCLID_INTERACTIVE' && (
              <EuclidGeometryInteractiveView onBack={handleGoBack} />
            )}

            {viewMode === 'CLASS_6_MATHS_WORKBOOK' && (
              <DataHandlingWorkbookView
                chapter={selectedChapter || undefined}
                onBack={handleGoBack}
                onNavigateHome={() => navigateTo({ viewMode: 'DASHBOARD' })}
                onNavigateClass={(c) => navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: c })}
                onNavigateSubject={() => {
                  if (selectedSubject) navigateTo({ viewMode: 'SUBJECT_BOOKS', selectedSubject });
                  else navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 6 });
                }}
              />
            )}

            {viewMode === 'CLASS_9_MATHS_TEST' && (
              <div style={{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                <iframe
                  src="/class9-maths-ch4-ch5-question-paper-40-marks.html"
                  title="Class 9 Mathematics - Chapters 4 & 5 Assessment (40 Marks)"
                  style={{ width: '100%', height: '88vh', border: 'none', background: '#0a0f1d' }}
                />
              </div>
            )}

            {viewMode === 'CLASS_11_STATS_TEST' && (
              <Class11StatsTestView onBackToDashboard={handleGoBack} />
            )}

            {viewMode === 'CLASS_11_ECONOMICS_TEST' && (
              <Class11EconomicsTestView onBackToDashboard={handleGoBack} />
            )}

            {viewMode === 'HISTORY_COMPETENCY_TEST' && (
              <HistoryCompetencyTestView onBackToDashboard={handleGoBack} />
            )}

            {viewMode === 'HYDROCARBONS_TEST' && (
              <HydrocarbonsTestView onBackToDashboard={handleGoBack} />
            )}

            {viewMode === 'DOUBT_STUDIO' && (
              <div style={{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(56, 189, 248, 0.35)' }}>
                <iframe
                  src="/middle-school-doubt-diagnostic-studio.html"
                  title="Class 6th, 7th & 8th Doubt & Topic Diagnostic Studio"
                  style={{ width: '100%', height: '88vh', border: 'none', background: '#060c18' }}
                />
              </div>
            )}

            {viewMode === 'HISTORY_CH1_PAGES_11_12' && (
              <div style={{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(245, 158, 11, 0.35)' }}>
                <iframe
                  src="/history-class11-ch1-writing-and-city-life-pages11-12-worksheet.html"
                  title="Class 11 History Theme 1: Writing & City Life (Pages 11 & 12 Worksheet)"
                  style={{ width: '100%', height: '88vh', border: 'none', background: '#070d1a' }}
                />
              </div>
            )}

            {viewMode === 'CHEMISTRY_CH7_PAGES_1_2' && (
              <div style={{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <iframe
                  src="/chemistry-class12-alcohols-phenols-ethers-page1-2.html"
                  title="Class 12 Chemistry Unit 7 (Pages 1 & 2)"
                  style={{ width: '100%', height: '88vh', border: 'none', background: '#060c18' }}
                />
              </div>
            )}

            {viewMode === 'CHEMISTRY_CH7_PAGES_3_6' && (
              <div style={{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                <iframe
                  src="/chemistry-class12-alcohols-phenols-ethers-page3-6.html"
                  title="Class 12 Chemistry Unit 7 (Pages 3 to 6)"
                  style={{ width: '100%', height: '88vh', border: 'none', background: '#060c18' }}
                />
              </div>
            )}

            {viewMode === 'POLITICAL_SCIENCE_CH1_FILL_BLANKS' && (
              <div style={{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(4, 170, 109, 0.35)' }}>
                <iframe
                  src="/political-science-class12-ch1-fill-in-the-blanks.html"
                  title="कक्षा 12 समकालीन विश्व राजनीति - अध्याय 1: दो ध्रुवीयता का अंत (रिक्त स्थान भरो + संकेत)"
                  style={{ width: '100%', height: '88vh', border: 'none', background: '#060c18' }}
                />
              </div>
            )}

            {viewMode === 'POLITICAL_SCIENCE_CH1_QUOTA1' && (
              <div style={{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(4, 170, 109, 0.35)' }}>
                <iframe
                  src="/political-science-class12-samkalin-vishwa-rajniti-ch1-quota1.html"
                  title="कक्षा 12 समकालीन विश्व राजनीति - अध्याय 1: दो ध्रुवीयता का अंत (कोटा 1: पृष्ठ 1-5)"
                  style={{ width: '100%', height: '88vh', border: 'none', background: '#060c18' }}
                />
              </div>
            )}

            {viewMode === 'POORVI_CH7_NEEM_BABA' && (
              <div style={{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(16, 185, 129, 0.35)' }}>
                <iframe
                  src="/english-class6-poorvi-unit3-ch7-neem-baba-mcq.html"
                  title="Class 6 English Poorvi Unit 3 Chapter 7: Neem Baba (30 MCQs • 6 Options • Unpredictable Shuffle)"
                  style={{ width: '100%', height: '88vh', border: 'none', background: '#060c18' }}
                />
              </div>
            )}

            {viewMode === 'POORVI_7_UNIT1_LEARNING_TOGETHER' && (
              <div style={{ width: '100%', minHeight: '88vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(56, 189, 248, 0.35)' }}>
                <iframe
                  src="/english-class7-poorvi-unit1-learning-together-mcq.html"
                  title="Class 7 English Poorvi Unit 1: Learning Together (36 Bilingual MCQs & Blanks)"
                  style={{ width: '100%', height: '88vh', border: 'none', background: '#060c18' }}
                />
              </div>
            )}

            {viewMode === 'DOUBT_STUDIO' && (
              <div style={{ width: '100%', minHeight: '92vh', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', border: '1px solid rgba(56, 189, 248, 0.35)' }}>
                <iframe
                  src={`/middle-school-doubt-diagnostic-studio.html${selectedClass ? `?class=${selectedClass}` : ''}`}
                  title="Class 6th, 7th & 8th Doubt & Topic Diagnostic Studio • NCERT StudyGuide"
                  style={{ width: '100%', height: '92vh', border: 'none', background: '#060c18' }}
                />
              </div>
            )}

            {/* Page: Nextsem Academy Classes */}
            {viewMode === 'ACADEMY_CLASSES' && (
              <NextsemAcademyClassesView
                onBack={handleGoBack}
                onSelectClass={(clsNum) => {
                  navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
                }}
                onOpenInteractive={(studioKey, clsNum) => {
                  if (studioKey === 'doubt-studio') {
                    navigateTo({ viewMode: 'DOUBT_STUDIO', selectedClass: clsNum || 7 });
                  } else if (studioKey === 'ts-grewal') {
                    navigateTo({ viewMode: 'TS_GREWAL_ACCOUNTING_EQUATION', selectedClass: 11 });
                  } else if (studioKey === 'grammar') {
                    navigateTo({ viewMode: 'HINDI_GRAMMAR_STUDIO', selectedClass: 9 });
                  } else if (studioKey === 'euclid') {
                    navigateTo({ viewMode: 'EUCLID_INTERACTIVE', selectedClass: 9 });
                  } else if (studioKey === 'stats') {
                    navigateTo({ viewMode: 'CLASS_11_STATS_TEST', selectedClass: 11 });
                  } else if (studioKey === 'history') {
                    navigateTo({ viewMode: 'HISTORY_COMPETENCY_TEST', selectedClass: 12 });
                  } else if (studioKey === 'hydrocarbons') {
                    navigateTo({ viewMode: 'HYDROCARBONS_TEST', selectedClass: 12 });
                  } else if (studioKey === 'physics-derivations') {
                    const c12Physics = activeClassesData.find((c) => c.classNumber === 12)?.subjects.find((s) => s.id === 'c12-physics');
                    if (c12Physics) {
                      navigateTo({ viewMode: 'BOOK_CHAPTERS', selectedClass: 12, selectedSubject: c12Physics, selectedBookPartId: 'part-1', selectedBookTitle: 'Physics Part-I' });
                    } else {
                      navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: 12 });
                    }
                  } else {
                    navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum || 12 });
                  }
                }}
                onOpenNcertSolutions={() => navigateTo({ viewMode: 'NCERT_SOLUTIONS' })}
                onOpenScheduleBuilder={() => navigateTo({ viewMode: 'SCHEDULE_BUILDER' })}
              />
            )}

            {/* Page: Academy Schedule & Timetable Builder (WordPress Style CMS) */}
            {viewMode === 'SCHEDULE_BUILDER' && (
              <AcademyScheduleBuilderView
                onBack={handleGoBack}
                onNavigateToClass={(clsNum) => {
                  if (typeof clsNum === 'number') {
                    navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: clsNum, selectedSubject: null });
                  } else {
                    const str = String(clsNum).toLowerCase();
                    if (str.includes('practical') || str.includes('lab') || str.includes('bcsl')) {
                      window.open('https://ignou-study-notes-by-nextsem.web.app/bca/practical/', '_blank');
                    } else {
                      window.open('https://ignou-study-notes-by-nextsem.web.app/bca/', '_blank');
                    }
                  }
                }}
                onOpenInteractiveStudio={(studioKey) => {
                  if (studioKey && studioKey.startsWith('http')) {
                    window.open(studioKey, '_blank');
                  } else if (studioKey.includes('practical') || studioKey.includes('bca')) {
                    window.open('https://ignou-study-notes-by-nextsem.web.app/bca/practical/', '_blank');
                  } else if (studioKey === 'doubt-studio') navigateTo({ viewMode: 'DOUBT_STUDIO' });
                  else if (studioKey === 'ts-grewal') navigateTo({ viewMode: 'TS_GREWAL_ACCOUNTING_EQUATION', selectedClass: 11 });
                  else if (studioKey === 'grammar') navigateTo({ viewMode: 'HINDI_GRAMMAR_STUDIO', selectedClass: 9 });
                  else if (studioKey === 'euclid') navigateTo({ viewMode: 'EUCLID_INTERACTIVE', selectedClass: 9 });
                  else if (studioKey === 'stats') navigateTo({ viewMode: 'CLASS_11_STATS_TEST', selectedClass: 11 });
                  else if (studioKey === 'history') navigateTo({ viewMode: 'HISTORY_COMPETENCY_TEST', selectedClass: 12 });
                  else if (studioKey === 'hydrocarbons') navigateTo({ viewMode: 'HYDROCARBONS_TEST', selectedClass: 12 });
                }}
              />
            )}

            {/* Page: Admin Portal */}
            {viewMode === 'ADMIN' && (
              <AdminPortalView
                onBackToApp={handleGoBack}
                onNavigateToChapter={(classNum, subjectId) => {
                  if (subjectId === 'nios-physics' || subjectId.startsWith('nios-')) {
                    navigateTo({ viewMode: 'NIOS_BOOKS' });
                    return;
                  }
                  const targetClass = activeClassesData.find((c) => c.classNumber === classNum);
                  const targetSubject = targetClass?.subjects.find((s: Subject) => s.id === subjectId) || null;
                  if (targetSubject && targetSubject.chapters && targetSubject.chapters.length > 0) {
                    navigateTo({ viewMode: 'BOOK_CHAPTERS', selectedClass: classNum, selectedSubject: targetSubject });
                  } else {
                    navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: classNum, selectedSubject: targetSubject });
                  }
                }}
              />
            )}

            {/* Page: Bilingual PDF Merger Studio */}
            {viewMode === 'BILINGUAL_PDF_MERGER' && (
              <BilingualPdfMergerView
                onBack={handleGoBack}
                onOpenPdfReader={() => {
                  navigateTo({ viewMode: 'PDF_READER' });
                }}
              />
            )}

            {/* Page: Kids Foundational Learning Hub (KG • Nursery) */}
            {viewMode === 'KIDS_FOUNDATIONAL_HUB' && (
              <KidsFoundationalWorksheetView
                initialLevel={selectedKgLevel}
                onBack={handleGoBack}
                onOpenClass={(cls) => {
                  navigateTo({ viewMode: 'CLASS_SUBJECTS', selectedClass: cls });
                }}
              />
            )}

          </div>
        )}

      </main>

      {/* Footer */}
      <Footer onNavigatePolicy={(key) => navigateTo({ viewMode: key as ViewMode })} />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        viewMode={viewMode}
        selectedClass={selectedClass}
        selectedSubjectName={selectedSubject?.name}
        selectedChapterNumber={selectedChapter?.chapterNumber}
        selectedBookTitle={selectedBookTitle}
        onNavigateHome={() => {
          navigateTo({ viewMode: 'CLASSES', selectedSubject: null, selectedChapter: null });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenClassSelector={() => navigateTo({ viewMode: 'CLASSES' })}
        onNavigateNios={() => {
          navigateTo({ viewMode: 'NIOS_BOOKS', selectedSubject: null, selectedChapter: null });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateCurrentLevel={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        bookmarksCount={bookmarks.length + bookmarkedSubjectIds.length + bookmarkedChapterIds.length}
        openBookmarks={() => navigateTo({ viewMode: 'BOOKMARKS' })}
        isDarkMode={darkMode}
        onToggleTheme={() => setDarkMode(prev => !prev)}
      />

      {/* Modals & Navigation Drawers */}
      <QuizzesModal
        isOpen={isQuizzesOpen}
        onClose={() => setIsQuizzesOpen(false)}
        isDarkMode={darkMode}
      />

      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarks}
        onRemoveBookmark={(id) => handleToggleBookmark({ id } as QuestionSolution)}
      />

      <WorkInProgressModal
        isOpen={!!wipCategoryName}
        categoryName={wipCategoryName || ''}
        onClose={() => setWipCategoryName(null)}
      />

      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        themePreference={themePreference}
        setThemePreference={setThemePreference}
        currentBoard={currentBoard}
        onSelectBoard={handleSelectBoard}
        onCheckUpdates={() => setIsUpdateModalOpen(true)}
        onNavigate={(pageKey) => navigateTo({ viewMode: pageKey })}
        totalBookmarksCount={bookmarkedSubjectIds.length + bookmarkedChapterIds.length}
        totalOfflineCount={(() => {
          const saved = localStorage.getItem('nextsem_offline_chapters');
          return saved ? JSON.parse(saved).length : 0;
        })()}
      />

      <AutoUpdateBanner />

      <AppUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
      />

    </div>
  );
}

export default App;
