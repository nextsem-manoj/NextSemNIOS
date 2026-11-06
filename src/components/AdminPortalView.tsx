import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, 
  UploadCloud, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ShieldCheck, 
  LogOut, 
  Layers, 
  BookOpen, 
  Search,
  RefreshCw,
  ExternalLink,
  ArrowLeft,
  Calendar,
  Clock,
  FolderOpen
} from 'lucide-react';
import { ALL_CLASSES_SUMMARY, CLASSES_DATA } from '../data/ncertData';
import { 
  getCustomChapters, 
  saveCustomChapter, 
  deleteCustomChapter,
  type CustomUploadedChapter 
} from '../utils/customChaptersStorage';
import { extractDriveId, getDrivePreviewUrl, SHARED_NCERT_DRIVE_FOLDER_URL } from '../utils/googleDriveHelper';

interface AdminPortalViewProps {
  onBackToApp: () => void;
  onNavigateToChapter?: (classNum: number, subjectId: string) => void;
}

const ADMIN_STORAGE_KEY = 'nextsem_admin_auth_session';
const DEFAULT_ADMIN_PASSKEY = 'admin123'; // Default master passkey

export interface ScheduleClassItem {
  classNum: number;
  classLabel: string;
  subjectId: string;
  subjectName: string;
  bookCode?: string;
  color: string;
  iconText: string;
  details: string;
  isExternalHub?: boolean;
  externalUrl?: string;
}

export interface ScheduleSlot {
  slotNumber: number;
  timeWindow: string;
  startHour: number; // 24-hr
  startMinute: number;
  endHour: number;
  endMinute: number;
  title: string;
  description: string;
  classes: ScheduleClassItem[];
}

export const MONDAY_TEACHING_SCHEDULE: ScheduleSlot[] = [
  {
    slotNumber: 1,
    timeWindow: '3:00 PM – 4:00 PM',
    startHour: 15,
    startMinute: 0,
    endHour: 16,
    endMinute: 0,
    title: 'Foundational & Preparatory Mathematics',
    description: 'Class 5 Maths (Math Mela), Class 3 Maths (Maths Mela), Class 2 Maths (Joyful-Mathematics)',
    classes: [
      {
        classNum: 5,
        classLabel: 'Class 5',
        subjectId: 'c5-maths',
        subjectName: 'Mathematics (Math Mela / गणित मेला)',
        bookCode: 'eemm1',
        color: '#14b8a6',
        iconText: '5️⃣',
        details: '15 Chapters: We the Travellers, Fractions, Angles, Shapes, Weight, Racing Seconds.'
      },
      {
        classNum: 3,
        classLabel: 'Class 3',
        subjectId: 'c3-maths',
        subjectName: 'Mathematics (Maths Mela / गणित मेला)',
        bookCode: 'cemm1',
        color: '#0284c7',
        iconText: '3️⃣',
        details: '14 Chapters: What’s in a Name, Toy Joy, Double Century, Fun with Shapes.'
      },
      {
        classNum: 2,
        classLabel: 'Class 2',
        subjectId: 'c2-maths',
        subjectName: 'Mathematics (Joyful-Mathematics / आनंदमय गणित)',
        bookCode: 'bejm1',
        color: '#8b5cf6',
        iconText: '2️⃣',
        details: '11 Chapters: A Day at the Beach, Shapes Around Us, Fun with Numbers, Data Handling.'
      }
    ]
  },
  {
    slotNumber: 2,
    timeWindow: '4:00 PM – 5:00 PM',
    startHour: 16,
    startMinute: 0,
    endHour: 17,
    endMinute: 0,
    title: 'Middle Stage Mathematics (Classes 6, 7 & 8)',
    description: 'Class 6 Maths (Ganita Prakash), Class 7 Maths, Class 8 Maths',
    classes: [
      {
        classNum: 6,
        classLabel: 'Class 6',
        subjectId: 'c6-maths',
        subjectName: 'Mathematics (गणित प्रकाश - Ganita Prakash)',
        bookCode: 'fegp1',
        color: '#4f46e5',
        iconText: '6️⃣',
        details: '10 Chapters: Patterns in Mathematics, Lines & Angles, Number Play, Fractions.'
      },
      {
        classNum: 7,
        classLabel: 'Class 7',
        subjectId: 'c7-maths',
        subjectName: 'Mathematics (गणित - Ganita)',
        bookCode: 'gegp1',
        color: '#059669',
        iconText: '7️⃣',
        details: 'Integers, Fractions & Decimals, Data Handling, Simple Equations, Lines & Angles.'
      },
      {
        classNum: 8,
        classLabel: 'Class 8',
        subjectId: 'c8-maths',
        subjectName: 'Mathematics (गणित - Ganita)',
        bookCode: 'hegp1',
        color: '#d97706',
        iconText: '8️⃣',
        details: 'Rational Numbers, Linear Equations, Understanding Quadrilaterals, Data Handling.'
      }
    ]
  },
  {
    slotNumber: 3,
    timeWindow: '5:00 PM – 6:00 PM',
    startHour: 17,
    startMinute: 0,
    endHour: 18,
    endMinute: 0,
    title: 'Secondary Stage Mathematics (Classes 9 & 10)',
    description: 'Class 9 Maths (Ganita Manjari), Class 10 Maths (Real Numbers, Triangles, Trigonometry)',
    classes: [
      {
        classNum: 9,
        classLabel: 'Class 9',
        subjectId: 'c9-maths',
        subjectName: 'Mathematics (Ganita Manjari)',
        bookCode: 'iemh1',
        color: '#0284c7',
        iconText: '9️⃣',
        details: '12 Chapters: Number Systems, Polynomials, Coordinate Geometry, Lines & Angles, Circles.'
      },
      {
        classNum: 10,
        classLabel: 'Class 10',
        subjectId: 'c10-maths',
        subjectName: 'Mathematics (Secondary Board)',
        bookCode: 'jemh1',
        color: '#4f46e5',
        iconText: '🔟',
        details: '14 Chapters: Real Numbers, Polynomials, Quadratic Equations, Trigonometry & Coordinate Geometry.'
      }
    ]
  },
  {
    slotNumber: 4,
    timeWindow: '6:00 PM – 7:00 PM',
    startHour: 18,
    startMinute: 0,
    endHour: 19,
    endMinute: 0,
    title: 'Senior Secondary Commerce — Class 11 Accountancy',
    description: 'Financial Accounting Part 1 & 2 (NEP 2026–27)',
    classes: [
      {
        classNum: 11,
        classLabel: 'Class 11',
        subjectId: 'c11-accountancy',
        subjectName: 'Accountancy (Financial Accounting)',
        bookCode: 'keac1',
        color: '#2563eb',
        iconText: '📊',
        details: '11 Chapters: Double Entry Bookkeeping, Journal, Ledger, BRS, Depreciation, Final Accounts.'
      }
    ]
  },
  {
    slotNumber: 5,
    timeWindow: '7:00 PM – 8:00 PM',
    startHour: 19,
    startMinute: 0,
    endHour: 20,
    endMinute: 0,
    title: 'Senior Secondary Humanities — Class 12 History',
    description: 'Themes in Indian History Parts 1, 2 & 3 (भारतीय इतिहास के कुछ विषय)',
    classes: [
      {
        classNum: 12,
        classLabel: 'Class 12',
        subjectId: 'c12-history',
        subjectName: 'History (Themes in Indian History / भारतीय इतिहास के कुछ विषय)',
        bookCode: 'lehs1',
        color: '#d97706',
        iconText: '🏛️',
        details: '12 Chapters: Harappan Civilisation, Early States, Kinship, Bhakti-Sufi, Vijayanagara, 1857 Revolt.'
      }
    ]
  },
  {
    slotNumber: 6,
    timeWindow: '8:00 PM – 9:30 PM',
    startHour: 20,
    startMinute: 0,
    endHour: 21,
    endMinute: 30,
    title: 'Senior Secondary Science — Class 12 Physics & NIOS Physics',
    description: 'Class 12 Physics (Electrostatics, Optics, Modern Physics) + NIOS Senior Secondary Physics (312)',
    classes: [
      {
        classNum: 12,
        classLabel: 'Class 12',
        subjectId: 'c12-physics',
        subjectName: 'Physics (NCERT Parts 1 & 2)',
        bookCode: 'leph1',
        color: '#7c3aed',
        iconText: '⚡',
        details: '14 Chapters: Electric Charges, Electrostatic Potential, Current Electricity, Magnetism, Optics.'
      },
      {
        classNum: 12,
        classLabel: 'NIOS 12th',
        subjectId: 'nios-physics',
        subjectName: 'NIOS Senior Secondary Physics (312)',
        bookCode: 'nios312',
        color: '#f59e0b',
        iconText: '⚛️',
        details: 'Units: Motion, Force, Energy, Thermal Physics, Wave Optics, Modern Physics & Electronics.'
      }
    ]
  },
  {
    slotNumber: 7,
    timeWindow: '9:30 PM – 11:00 PM',
    startHour: 21,
    startMinute: 30,
    endHour: 23,
    endMinute: 0,
    title: 'Higher Education — BCA 1st Semester CS & Mathematics',
    description: 'BCS-011 / BCS-111 Computer Basics & PC Software + BCS-012 Mathematics',
    classes: [
      {
        classNum: 1,
        classLabel: 'BCA Sem 1',
        subjectId: 'bcs-111',
        subjectName: 'BCS-111 / BCS-011: Computer Basics and PC Software',
        bookCode: 'BCS111',
        color: '#04aa6d',
        iconText: '💻',
        details: 'Units: Hardware Architecture, OS, Windows CLI, Word Processing, Spreadsheets, Multimedia & Networking.',
        isExternalHub: true,
        externalUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/semester-1'
      },
      {
        classNum: 1,
        classLabel: 'BCA Sem 1',
        subjectId: 'bcs-012',
        subjectName: 'BCS-012: Basic Mathematics',
        bookCode: 'BCS012',
        color: '#06b6d4',
        iconText: '📐',
        details: 'Determinants, Matrices, Mathematical Induction, Calculus, Vectors & 3D Analytical Geometry.',
        isExternalHub: true,
        externalUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/semester-1'
      }
    ]
  }
];

export const AdminPortalView: React.FC<AdminPortalViewProps> = ({
  onBackToApp,
  onNavigateToChapter
}) => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
    }
    return false;
  });
  const [passkeyInput, setPasskeyInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');

  // Active Admin Tab: 'SCHEDULE' | 'UPLOAD' | 'MANAGE'
  const [activeTab, setActiveTab] = useState<'SCHEDULE' | 'UPLOAD' | 'MANAGE'>('SCHEDULE');

  // Real-time Clock & Simulation State
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [simulatedSlot, setSimulatedSlot] = useState<number | null>(null);

  // Upload Form State & References
  const uploadFormRef = useRef<HTMLDivElement>(null);
  const [selectedClass, setSelectedClass] = useState<number>(12);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('c12-physics');
  const [customSubjectName, setCustomSubjectName] = useState<string>('');
  const [chapterNumber, setChapterNumber] = useState<number>(1);
  const [chapterTitle, setChapterTitle] = useState<string>('');
  const [nepHighlights, setNepHighlights] = useState<string>('2026–27 Official Rationalized Syllabus • Free Textbook PDF');
  const [chapterNotes, setChapterNotes] = useState<string>('');
  const [googleDriveInput, setGoogleDriveInput] = useState<string>('');
  const [isPreviewDriveOpen, setIsPreviewDriveOpen] = useState<boolean>(false);
  const [officialPdfUrl, setOfficialPdfUrl] = useState<string>('');
  const [selectedPdfFile, setSelectedPdfFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState<string>('');
  const [uploadErrorMsg, setUploadErrorMsg] = useState<string>('');

  // Management State
  const [customChapters, setCustomChapters] = useState<CustomUploadedChapter[]>([]);
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Load custom chapters
  const refreshChaptersList = () => {
    setCustomChapters(getCustomChapters());
  };

  useEffect(() => {
    refreshChaptersList();
  }, []);

  // Update clock every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  // Update default subject options when selectedClass changes
  const currentClassSubjects = CLASSES_DATA.find(c => c.classNumber === selectedClass)?.subjects || [];

  useEffect(() => {
    if (selectedSubjectId === 'custom') return;
    if (currentClassSubjects.length > 0) {
      if (!currentClassSubjects.some(s => s.id === selectedSubjectId)) {
        setSelectedSubjectId(currentClassSubjects[0].id);
      }
    } else {
      setSelectedSubjectId('custom');
    }
  }, [selectedClass]);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkeyInput === DEFAULT_ADMIN_PASSKEY || passkeyInput === 'nextsem2026' || passkeyInput === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem(ADMIN_STORAGE_KEY, 'true');
      setAuthError('');
      refreshChaptersList();
    } else {
      setAuthError('Incorrect passkey. Please enter the valid administrator passkey (default: admin123).');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(ADMIN_STORAGE_KEY);
    setPasskeyInput('');
  };

  // Handle PDF file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
        setUploadErrorMsg('Please select a valid .pdf file.');
        setSelectedPdfFile(null);
        return;
      }
      setSelectedPdfFile(file);
      setUploadErrorMsg('');
      if (!chapterTitle) {
        // Auto-fill chapter title from filename if empty
        const cleanTitle = file.name.replace(/\.pdf$/i, '').replace(/[-_]/g, ' ');
        setChapterTitle(cleanTitle);
      }
    }
  };

  // Pre-fill Upload Form from Schedule Slot & Scroll Directly
  const handlePreFillUpload = (classNum: number, subjectId: string, customName?: string) => {
    setSelectedClass(classNum);
    const targetSubjects = CLASSES_DATA.find(c => c.classNumber === classNum)?.subjects || [];
    const existsInClass = targetSubjects.some(s => s.id === subjectId);
    if (existsInClass) {
      setSelectedSubjectId(subjectId);
      setCustomSubjectName('');
    } else {
      setSelectedSubjectId('custom');
      setCustomSubjectName(customName || subjectId);
    }
    setActiveTab('UPLOAD');
    setTimeout(() => {
      if (uploadFormRef.current) {
        uploadFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  // Handle Upload Form Submit (with newncert.nextsem@gmail.com Google Drive integration)
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadErrorMsg('');
    setUploadSuccessMsg('');

    if (!chapterTitle.trim()) {
      setUploadErrorMsg('Please provide a Chapter Title.');
      return;
    }

    const finalSubjectId = selectedSubjectId === 'custom' 
      ? customSubjectName.trim().toLowerCase().replace(/\s+/g, '-')
      : selectedSubjectId;

    if (!finalSubjectId) {
      setUploadErrorMsg('Please choose or enter a valid Subject.');
      return;
    }

    const driveFileId = extractDriveId(googleDriveInput);
    if (!driveFileId && !officialPdfUrl.trim() && !selectedPdfFile) {
      setUploadErrorMsg('Please provide a Google Drive share link or File ID from the newncert.nextsem@gmail.com account.');
      return;
    }

    const finalPdfUrl = driveFileId 
      ? getDrivePreviewUrl(driveFileId)
      : officialPdfUrl.trim();

    setIsUploading(true);
    try {
      await saveCustomChapter(
        selectedClass,
        finalSubjectId,
        {
          chapterNumber: Number(chapterNumber),
          title: chapterTitle.trim(),
          nepHighlights: nepHighlights.trim(),
          summaryTextbook: chapterNotes.trim() || 'Uploaded textbook chapter with complete exercises, lecture notes, and practice solutions.',
          officialPdfUrl: finalPdfUrl,
          googleDriveFileId: driveFileId || undefined
        },
        selectedPdfFile
      );

      setUploadSuccessMsg(`Successfully saved Class ${selectedClass} • Chapter ${chapterNumber}: "${chapterTitle}" from newncert.nextsem@gmail.com Google Drive!`);
      // Reset form
      setChapterTitle('');
      setChapterNotes('');
      setSelectedPdfFile(null);
      setGoogleDriveInput('');
      setOfficialPdfUrl('');
      setChapterNumber(prev => prev + 1);
      refreshChaptersList();
    } catch (err) {
      console.error(err);
      setUploadErrorMsg('Failed to save chapter PDF & notes. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  // Handle Delete Chapter
  const handleDelete = async (chapterId: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        await deleteCustomChapter(chapterId);
        refreshChaptersList();
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  // Slot active check
  const checkSlotStatus = (slot: ScheduleSlot): { isActive: boolean; isPast: boolean; isUpcoming: boolean } => {
    if (simulatedSlot !== null) {
      return {
        isActive: simulatedSlot === slot.slotNumber,
        isPast: slot.slotNumber < simulatedSlot,
        isUpcoming: slot.slotNumber > simulatedSlot
      };
    }
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const currentTotal = hours * 60 + minutes;
    const startTotal = slot.startHour * 60 + slot.startMinute;
    const endTotal = slot.endHour * 60 + slot.endMinute;

    const isActive = currentTotal >= startTotal && currentTotal < endTotal;
    const isPast = currentTotal >= endTotal;
    const isUpcoming = currentTotal < startTotal;

    return { isActive, isPast, isUpcoming };
  };

  const filteredChapters = customChapters.filter(ch => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      ch.title.toLowerCase().includes(q) ||
      ch.subjectId.toLowerCase().includes(q) ||
      ch.classNum.toString().includes(q) ||
      (ch.officialBookCode && ch.officialBookCode.toLowerCase().includes(q))
    );
  });

  const currentDriveId = extractDriveId(googleDriveInput);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1.5rem 1rem 4rem',
      minHeight: '85vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Top Banner / Breadcrumb Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '1.5rem',
        padding: '14px 18px',
        background: 'linear-gradient(135deg, #071322 0%, #0c2340 100%)',
        borderRadius: '16px',
        border: '1.5px solid rgba(193, 166, 72, 0.4)',
        boxShadow: '0 8px 24px rgba(6, 18, 36, 0.4)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            type="button"
            onClick={onBackToApp}
            title="Return to Student Portal"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(193, 166, 72, 0.5)',
              borderRadius: '10px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            <ArrowLeft size={20} />
          </button>

          {/* Logo Emblem */}
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1.5px solid #00e676',
            boxShadow: '0 0 12px rgba(0, 230, 118, 0.3)',
            flexShrink: 0,
            background: '#050b14',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/studyguide-by-nextsem-logo.jpg" 
              alt="StudyGuide by Nextsem Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '1.35rem', fontWeight: 900, margin: 0, letterSpacing: '-0.01em', color: '#ffffff' }}>
                StudyGuide <span style={{ color: '#00e676' }}>by Nextsem</span>
              </h1>
              <span style={{
                background: 'rgba(193, 166, 72, 0.2)',
                border: '1px solid #c1a648',
                color: '#fef08a',
                fontSize: '0.72rem',
                fontWeight: 900,
                padding: '2px 8px',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Sparkles size={11} /> Admin & Teaching Hub
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '3px 0 0' }}>
              Monday Master Timetable • Class-wise PDF Upload • Chapter Notes & Exercises
            </p>
          </div>
        </div>

        {isAuthenticated && (
          <button
            type="button"
            onClick={handleLogout}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              padding: '7px 14px',
              borderRadius: '10px',
              fontSize: '0.82rem',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            <LogOut size={15} /> Log Out
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 1. LOGIN SCREEN (If not authenticated) */}
      {/* ========================================================================= */}
      {!isAuthenticated ? (
        <div style={{
          maxWidth: '440px',
          margin: '2rem auto',
          background: 'var(--bg-card, #ffffff)',
          border: '1.5px solid var(--border-card, var(--border-color))',
          borderRadius: '24px',
          padding: '36px 28px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-card, 0 8px 30px rgba(0, 0, 0, 0.1))'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(193, 166, 72, 0.2) 0%, rgba(10, 34, 64, 0.08) 100%)',
            border: '1.5px solid #c1a648',
            color: '#c1a648',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 18px'
          }}>
            <Lock size={30} />
          </div>

          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-main, var(--text-primary))', margin: '0 0 6px' }}>
            Administrator Login
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted, #64748b)', margin: '0 0 24px' }}>
            Enter your admin master passkey to access teaching timetable, live slot links, and curriculum upload tools.
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative', textAlign: 'left' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', display: 'block', marginBottom: '6px' }}>
                Admin Master Passkey:
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={passkeyInput}
                onChange={(e) => setPasskeyInput(e.target.value)}
                placeholder="Enter passkey (e.g. admin123)"
                style={{
                  width: '100%',
                  padding: '12px 42px 12px 14px',
                  borderRadius: '12px',
                  border: '1.5px solid var(--border-card, var(--border-color))',
                  background: 'var(--bg-prob, var(--bg-hover))',
                  color: 'var(--text-main, var(--text-primary))',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  bottom: '10px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted, #64748b)',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            {authError && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid #ef4444',
                color: '#dc2626',
                padding: '10px 14px',
                borderRadius: '10px',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textAlign: 'left'
              }}>
                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #04aa6d 0%, #00e676 100%)',
                color: '#061224',
                padding: '12px',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: 900,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(4, 170, 109, 0.35)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <ShieldCheck size={18} />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <div style={{ marginTop: '20px', fontSize: '0.78rem', color: 'var(--text-muted, #64748b)' }}>
            <span>Default Master Key: </span>
            <code style={{ background: 'rgba(4, 170, 109, 0.15)', color: '#04aa6d', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>admin123</code>
          </div>
        </div>
      ) : (

        /* ========================================================================= */
        /* 2. AUTHENTICATED ADMIN DASHBOARD */
        /* ========================================================================= */
        <div>
          {/* Admin Navigation Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '1.5rem',
            background: 'var(--bg-card, #ffffff)',
            padding: '6px',
            borderRadius: '14px',
            border: '1.5px solid var(--border-card, var(--border-color))',
            flexWrap: 'wrap'
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('SCHEDULE')}
              style={{
                flex: '1 1 200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px 14px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === 'SCHEDULE'
                  ? 'linear-gradient(135deg, #04aa6d 0%, #00e676 100%)'
                  : 'transparent',
                color: activeTab === 'SCHEDULE' ? '#041c14' : 'var(--text-main, var(--text-primary))',
                fontWeight: 900,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'SCHEDULE' ? '0 3px 10px rgba(4, 170, 109, 0.25)' : 'none'
              }}
            >
              <Calendar size={18} />
              <span>Monday Offline Schedule (7 Slots)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('UPLOAD')}
              style={{
                flex: '1 1 200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px 14px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === 'UPLOAD'
                  ? 'linear-gradient(135deg, #d4af37 0%, #c1a648 100%)'
                  : 'transparent',
                color: activeTab === 'UPLOAD' ? '#061224' : 'var(--text-main, var(--text-primary))',
                fontWeight: 900,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'UPLOAD' ? '0 3px 10px rgba(193, 166, 72, 0.25)' : 'none'
              }}
            >
              <UploadCloud size={18} />
              <span>Add Chapterwise PDF & Notes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('MANAGE')}
              style={{
                flex: '1 1 200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px 14px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === 'MANAGE'
                  ? 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)'
                  : 'transparent',
                color: activeTab === 'MANAGE' ? '#ffffff' : 'var(--text-main, var(--text-primary))',
                fontWeight: 900,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'MANAGE' ? '0 3px 10px rgba(37, 99, 235, 0.25)' : 'none'
              }}
            >
              <Layers size={18} />
              <span>Manage Chapters ({customChapters.length})</span>
            </button>

            <a
              href="/bilingual-pdf-merger.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '1 1 200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px 14px',
                borderRadius: '10px',
                border: '1.5px solid rgba(16, 185, 129, 0.4)',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                fontWeight: 900,
                fontSize: '0.9rem',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Sparkles size={16} />
              <span>Bilingual PDF Merger Studio ↗</span>
            </a>
          </div>

          {/* ========================================================================= */}
          {/* TAB 1: MONDAY OFFLINE TEACHING SCHEDULE (7 SLOTS) */}
          {/* ========================================================================= */}
          {activeTab === 'SCHEDULE' && (
            <div>
              {/* Header Box with Live Time & Simulated Slot Selector */}
              <div style={{
                background: 'linear-gradient(135deg, #0b1a2f 0%, #071322 100%)',
                border: '1.5px solid rgba(4, 170, 109, 0.3)',
                borderRadius: '20px',
                padding: '20px 24px',
                marginBottom: '1.5rem',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(4, 170, 109, 0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={20} color="#00e676" />
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: '#ffffff' }}>
                        Monday Offline Class Timetable & Rapid Portal Linker
                      </h2>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: '6px 0 0' }}>
                      Click <strong style={{ color: '#00e676' }}>"Open on Vercel"</strong> to launch the exact class on the live production site, or click <strong style={{ color: '#fef08a' }}>"+ Add PDF & Notes"</strong> to upload materials directly.
                    </p>
                  </div>

                  {/* Slot Simulation / Manual Preview Bar */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.12)'
                  }}>
                    <span style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 700 }}>
                      Active Slot Test:
                    </span>
                    <select
                      value={simulatedSlot === null ? 'live' : simulatedSlot}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSimulatedSlot(val === 'live' ? null : Number(val));
                      }}
                      style={{
                        background: '#041c14',
                        color: '#00e676',
                        border: '1px solid #00e676',
                        padding: '4px 8px',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="live">⚡ Live Clock Mode ({currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})</option>
                      <option value={1}>Slot 1: 3–4 PM (5th, 3rd, 2nd Maths)</option>
                      <option value={2}>Slot 2: 4–5 PM (6th, 7th, 8th Maths)</option>
                      <option value={3}>Slot 3: 5–6 PM (9th, 10th Maths)</option>
                      <option value={4}>Slot 4: 6–7 PM (11th Accountancy)</option>
                      <option value={5}>Slot 5: 7–8 PM (12th History)</option>
                      <option value={6}>Slot 6: 8–9:30 PM (12th & NIOS Physics)</option>
                      <option value={7}>Slot 7: 9:30–11 PM (BCA 1st Sem CS/Maths)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 7 Slots List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {MONDAY_TEACHING_SCHEDULE.map((slot) => {
                  const status = checkSlotStatus(slot);

                  return (
                    <div
                      key={slot.slotNumber}
                      style={{
                        background: status.isActive 
                          ? 'linear-gradient(135deg, rgba(4, 170, 109, 0.08) 0%, rgba(6, 18, 36, 0.02) 100%)'
                          : 'var(--bg-card, #ffffff)',
                        border: status.isActive
                          ? '2px solid #04aa6d'
                          : '1.5px solid var(--border-card, #e2d5ad)',
                        borderRadius: '20px',
                        padding: '22px 20px',
                        boxShadow: status.isActive 
                          ? '0 8px 30px rgba(4, 170, 109, 0.15)'
                          : 'var(--shadow-card, 0 4px 16px rgba(10, 34, 64, 0.05))',
                        position: 'relative',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {/* Slot Header */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '10px',
                        marginBottom: '16px',
                        paddingBottom: '12px',
                        borderBottom: '1px solid var(--border-card, #e2d5ad)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                          <span style={{
                            background: status.isActive ? '#04aa6d' : 'var(--bg-prob, #0a2240)',
                            color: status.isActive ? '#041c14' : '#ffffff',
                            padding: '6px 14px',
                            borderRadius: '10px',
                            fontSize: '0.85rem',
                            fontWeight: 900,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}>
                            <Clock size={15} /> Slot {slot.slotNumber} • {slot.timeWindow}
                          </span>

                          <h3 style={{
                            fontSize: '1.15rem',
                            fontWeight: 900,
                            margin: 0,
                            color: 'var(--text-main, #0a2240)'
                          }}>
                            {slot.title}
                          </h3>
                        </div>

                        {status.isActive && (
                          <span style={{
                            background: 'rgba(4, 170, 109, 0.18)',
                            border: '1.5px solid #04aa6d',
                            color: '#04aa6d',
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            fontSize: '0.78rem',
                            fontWeight: 900,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            animation: 'pulse 2s infinite'
                          }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#04aa6d' }} />
                            ACTIVE CLASS NOW
                          </span>
                        )}
                      </div>

                      {/* Classes / Subjects Grid for this Slot */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '14px'
                      }}>
                        {slot.classes.map((clsItem, idx) => {
                          const liveVercelUrl = `https://ncert-alpha.vercel.app/?class=${clsItem.classNum}&subject=${clsItem.subjectId}`;

                          return (
                            <div
                              key={idx}
                              style={{
                                background: 'var(--bg-prob, var(--bg-hover))',
                                border: '1px solid var(--border-card, var(--border-color))',
                                borderRadius: '14px',
                                padding: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: '12px'
                              }}
                            >
                              {/* Subject Info */}
                              <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                  <span style={{ fontSize: '1.25rem' }}>{clsItem.iconText}</span>
                                  <span style={{
                                    background: clsItem.color,
                                    color: '#ffffff',
                                    padding: '2px 8px',
                                    borderRadius: '6px',
                                    fontSize: '0.72rem',
                                    fontWeight: 900
                                  }}>
                                    {clsItem.classLabel}
                                  </span>
                                  {clsItem.bookCode && (
                                    <span style={{
                                      background: 'var(--bg-hover, rgba(255, 255, 255, 0.08))',
                                      color: 'var(--text-muted, #64748b)',
                                      padding: '2px 6px',
                                      borderRadius: '4px',
                                      fontSize: '0.68rem',
                                      fontWeight: 800
                                    }}>
                                      {clsItem.bookCode}
                                    </span>
                                  )}
                                </div>

                                <h4 style={{
                                  fontSize: '0.98rem',
                                  fontWeight: 900,
                                  color: 'var(--text-main, var(--text-primary))',
                                  margin: '0 0 6px',
                                  lineHeight: 1.3
                                }}>
                                  {clsItem.subjectName}
                                </h4>

                                <p style={{
                                  fontSize: '0.78rem',
                                  color: 'var(--text-muted, #64748b)',
                                  margin: 0,
                                  lineHeight: 1.4
                                }}>
                                  {clsItem.details}
                                </p>
                              </div>

                              {/* Action Buttons for this Class */}
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                flexWrap: 'wrap',
                                paddingTop: '10px',
                                borderTop: '1px solid var(--border-color, rgba(255, 255, 255, 0.08))'
                              }}>
                                {/* 1. Open in App */}
                                {onNavigateToChapter && (
                                  <button
                                    type="button"
                                    onClick={() => onNavigateToChapter(clsItem.classNum, clsItem.subjectId)}
                                    title="Open directly in this app"
                                    style={{
                                      flex: '1 1 120px',
                                      background: 'var(--bg-card, #ffffff)',
                                      border: '1.5px solid var(--border-card, var(--border-color))',
                                      color: 'var(--text-main, var(--text-primary))',
                                      padding: '7px 10px',
                                      borderRadius: '8px',
                                      fontSize: '0.76rem',
                                      fontWeight: 800,
                                      cursor: 'pointer',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      gap: '5px'
                                    }}
                                  >
                                    <BookOpen size={13} />
                                    <span>In-App View</span>
                                  </button>
                                )}

                                {/* 2. Open on Vercel Live */}
                                <a
                                  href={clsItem.externalUrl || liveVercelUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  title="Open on live Vercel mirror"
                                  style={{
                                    flex: '1 1 120px',
                                    background: 'linear-gradient(135deg, #0a2240 0%, #1e3a5f 100%)',
                                    border: '1px solid #1e3a5f',
                                    color: '#ffffff',
                                    padding: '7px 10px',
                                    borderRadius: '8px',
                                    fontSize: '0.76rem',
                                    fontWeight: 800,
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '5px'
                                  }}
                                >
                                  <ExternalLink size={13} />
                                  <span>Open on Vercel</span>
                                </a>

                                {/* 3. Add Chapter PDF & Notes */}
                                <button
                                  type="button"
                                  onClick={() => handlePreFillUpload(clsItem.classNum, clsItem.subjectId, clsItem.subjectName)}
                                  title="Add chapter PDF and notes for this class"
                                  style={{
                                    flex: '1 1 100%',
                                    background: 'linear-gradient(135deg, rgba(4, 170, 109, 0.12) 0%, rgba(4, 170, 109, 0.04) 100%)',
                                    border: '1.5px solid #04aa6d',
                                    color: '#04aa6d',
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                    fontSize: '0.8rem',
                                    fontWeight: 900,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px'
                                  }}
                                >
                                  <UploadCloud size={14} />
                                  <span>+ Add Chapter PDF & Notes</span>
                                </button>

                                {/* 4. Class 5 Maths Chapter 6 Interactive Worksheet Direct Launcher */}
                                {clsItem.subjectId === 'c5-maths' && (
                                  <a
                                    href="/maths-class5-ch6-dairy-farm-worksheet.html"
                                    title="Launch Class 5 Maths Chapter 6: Dairy Farm & Multiples Interactive Worksheet"
                                    style={{
                                      flex: '1 1 100%',
                                      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)',
                                      border: '1.5px solid #14b8a6',
                                      color: '#14b8a6',
                                      padding: '9px 12px',
                                      borderRadius: '8px',
                                      fontSize: '0.8rem',
                                      fontWeight: 900,
                                      textDecoration: 'none',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      gap: '6px',
                                      boxShadow: '0 4px 12px rgba(20, 184, 166, 0.2)'
                                    }}
                                  >
                                    <span>🥛 Ch 6: Dairy Farm &amp; Multiples Interactive Worksheet (Bilingual)</span>
                                  </a>
                                )}

                                {/* 5. Class 3 Maths Chapter 6 Interactive Worksheet Direct Launcher */}
                                {clsItem.subjectId === 'c3-maths' && (
                                  <a
                                    href="/maths-class3-ch6-house-of-hundreds-worksheet.html"
                                    title="Launch Class 3 Maths Chapter 6: House of Hundreds – I Interactive Worksheet"
                                    style={{
                                      flex: '1 1 100%',
                                      background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                                      border: '1.5px solid #0284c7',
                                      color: '#38bdf8',
                                      padding: '9px 12px',
                                      borderRadius: '8px',
                                      fontSize: '0.8rem',
                                      fontWeight: 900,
                                      textDecoration: 'none',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      gap: '6px',
                                      boxShadow: '0 4px 12px rgba(2, 132, 199, 0.2)'
                                    }}
                                  >
                                    <span>🏛️ Ch 6: House of Hundreds – I Interactive Worksheet (Bilingual)</span>
                                  </a>
                                )}

                                {/* 6. Class 2 Maths Chapter 6 Interactive Worksheet Direct Launcher */}
                                {clsItem.subjectId === 'c2-maths' && (
                                  <a
                                    href="/maths-class2-ch6-festival-decoration-worksheet.html"
                                    title="Launch Class 2 Maths Chapter 6: Decoration for Festival Interactive Worksheet"
                                    style={{
                                      flex: '1 1 100%',
                                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%)',
                                      border: '1.5px solid #8b5cf6',
                                      color: '#c4b5fd',
                                      padding: '9px 12px',
                                      borderRadius: '8px',
                                      fontSize: '0.8rem',
                                      fontWeight: 900,
                                      textDecoration: 'none',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      gap: '6px',
                                      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)'
                                    }}
                                  >
                                    <span>🪔 Ch 6: Decoration for Festival Interactive Worksheet (Bilingual)</span>
                                  </a>
                                )}

                                {/* 7. Class 6 Maths & Science Chapter 6 Interactive Worksheets */}
                                {clsItem.subjectId === 'c6-maths' && (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                                    <a
                                      href="/maths-class6-ch6-perimeter-and-area-worksheet.html"
                                      title="Launch Class 6 Maths Chapter 6: Perimeter and Area Interactive Workbook"
                                      style={{
                                        flex: '1 1 100%',
                                        background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                                        border: '1.5px solid #0284c7',
                                        color: '#38bdf8',
                                        padding: '9px 12px',
                                        borderRadius: '8px',
                                        fontSize: '0.8rem',
                                        fontWeight: 900,
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        boxShadow: '0 4px 12px rgba(2, 132, 199, 0.2)'
                                      }}
                                    >
                                      <span>📐 Ch 6: Perimeter &amp; Area (परिमाप और क्षेत्रफल) Interactive Workbook (Bilingual)</span>
                                    </a>
                                    <a
                                      href="/science-class6-ch6-materials-around-us-worksheet.html"
                                      title="Launch Class 6 Science Chapter 6: Materials Around Us Interactive Workbook"
                                      style={{
                                        flex: '1 1 100%',
                                        background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)',
                                        border: '1.5px solid #14b8a6',
                                        color: '#2dd4bf',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        fontSize: '0.78rem',
                                        fontWeight: 800,
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        boxShadow: '0 4px 12px rgba(20, 184, 166, 0.15)'
                                      }}
                                    >
                                      <span>🧪 Class 6 Science Ch 6: Materials Around Us Interactive Worksheet</span>
                                    </a>
                                  </div>
                                )}

                                {/* 8. Class 8 Maths Chapter 7 Interactive Launcher */}
                                {clsItem.subjectId === 'c8-maths' && (
                                  <a
                                    href="/maths-class8-ch7-proportional-reasoning-page165-solutions.html"
                                    title="Launch Class 8 Maths Chapter 7 Page 165 Solved"
                                    style={{
                                      flex: '1 1 100%',
                                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.1) 100%)',
                                      border: '1.5px solid #f59e0b',
                                      color: '#fbbf24',
                                      padding: '9px 12px',
                                      borderRadius: '8px',
                                      fontSize: '0.8rem',
                                      fontWeight: 900,
                                      textDecoration: 'none',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      gap: '6px',
                                      boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)'
                                    }}
                                  >
                                    <span>☕ Ch 7: Proportional Reasoning (Page 165 Solved)</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: UPLOAD NEW PDF & CHAPTER NOTES */}
          {/* ========================================================================= */}
          {activeTab === 'UPLOAD' && (
            <div 
              ref={uploadFormRef}
              style={{
                background: 'var(--bg-card, #ffffff)',
                border: '1.5px solid var(--border-card, #e2d5ad)',
                borderRadius: '24px',
                padding: '28px 24px',
                boxShadow: 'var(--shadow-card, 0 8px 30px rgba(10, 34, 64, 0.08))'
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-main, #0a2240)', margin: '0 0 4px' }}>
                  Upload Class & Subject PDF with Chapter Notes
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted, #64748b)', margin: 0 }}>
                  Upload a PDF file or link official NCERT PDFs. Include lecture notes, formulas, or solutions to appear under the in-app reader.
                </p>
              </div>

              {uploadSuccessMsg && (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1.5px solid #10b981',
                  color: '#059669',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px'
                }}>
                  <CheckCircle2 size={20} />
                  <span>{uploadSuccessMsg}</span>
                </div>
              )}

              {uploadErrorMsg && (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1.5px solid #ef4444',
                  color: '#dc2626',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px'
                }}>
                  <AlertCircle size={20} />
                  <span>{uploadErrorMsg}</span>
                </div>
              )}

              <form onSubmit={handleUploadSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
                
                {/* 1. Class Selection */}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', display: 'block', marginBottom: '6px' }}>
                    1. Select Class:
                  </label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--border-card, var(--border-color))',
                      background: 'var(--bg-prob, var(--bg-hover))',
                      color: 'var(--text-main, var(--text-primary))',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      outline: 'none'
                    }}
                  >
                    {[...ALL_CLASSES_SUMMARY].sort((a, b) => b.classNum - a.classNum).map((cls) => (
                      <option key={cls.classNum} value={cls.classNum}>
                        {cls.name} • {cls.stage}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Subject Selection */}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', display: 'block', marginBottom: '6px' }}>
                    2. Select Subject:
                  </label>
                  <select
                    value={selectedSubjectId}
                    onChange={(e) => setSelectedSubjectId(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--border-card, var(--border-color))',
                      background: 'var(--bg-prob, var(--bg-hover))',
                      color: 'var(--text-main, var(--text-primary))',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      outline: 'none'
                    }}
                  >
                    {currentClassSubjects.map((sub) => (
                      <option key={sub.id} value={sub.id}>
                        {sub.name} ({sub.chapters.length} existing chapters)
                      </option>
                    ))}
                    <option value="custom">+ Create New Custom Subject...</option>
                  </select>
                </div>

                {/* 2b. Custom Subject Name (if chosen) */}
                {selectedSubjectId === 'custom' && (
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', display: 'block', marginBottom: '6px' }}>
                      Enter Custom Subject Name:
                    </label>
                    <input
                      type="text"
                      value={customSubjectName}
                      onChange={(e) => setCustomSubjectName(e.target.value)}
                      placeholder="e.g. Computer Science, Applied Mathematics, Economics"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--border-card, var(--border-color))',
                        background: 'var(--bg-prob, var(--bg-hover))',
                        color: 'var(--text-main, var(--text-primary))',
                        fontSize: '0.92rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                )}

                {/* 3. Chapter Number */}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', display: 'block', marginBottom: '6px' }}>
                    3. Chapter Number:
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={chapterNumber}
                    onChange={(e) => setChapterNumber(Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--border-card, var(--border-color))',
                      background: 'var(--bg-prob, var(--bg-hover))',
                      color: 'var(--text-main, var(--text-primary))',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* 4. Chapter Title */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', display: 'block', marginBottom: '6px' }}>
                    4. Chapter Title:
                  </label>
                  <input
                    type="text"
                    value={chapterTitle}
                    onChange={(e) => setChapterTitle(e.target.value)}
                    placeholder="e.g. Electric Charges & Fields (विद्युत आवेश तथा क्षेत्र)"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--border-card, var(--border-color))',
                      background: 'var(--bg-prob, var(--bg-hover))',
                      color: 'var(--text-main, var(--text-primary))',
                      fontSize: '0.92rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* 5. Google Drive Integration Card (Dedicated to newncert.nextsem@gmail.com) */}
                <div style={{
                  gridColumn: '1 / -1',
                  background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.08) 0%, rgba(52, 168, 83, 0.08) 100%)',
                  border: '1.5px solid rgba(66, 133, 244, 0.4)',
                  borderRadius: '16px',
                  padding: '18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  {/* Header with Account Pill & Drive Links */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'var(--bg-card, #ffffff)',
                        border: '1px solid var(--border-color, #e2e8f0)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--shadow-sm)'
                      }}>
                        <span style={{ fontSize: '1.3rem' }}>📁</span>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: '0.96rem', fontWeight: 900, margin: 0, color: 'var(--text-main, var(--text-primary))' }}>
                            5. Upload PDF via Google Drive Account
                          </h3>
                          <span style={{
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                            color: '#93c5fd',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            border: '1px solid rgba(147, 197, 253, 0.4)'
                          }}>
                            newncert.nextsem@gmail.com
                          </span>
                        </div>
                        <p style={{ fontSize: '0.76rem', color: 'var(--text-muted, #64748b)', margin: '2px 0 0' }}>
                          Upload your chapter PDF to Google Drive under <strong>newncert.nextsem@gmail.com</strong>, copy the share link or file ID, and paste below.
                        </p>
                      </div>
                    </div>

                    {/* Direct Action Link to newncert.nextsem@gmail.com Drive */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <a
                        href="https://accounts.google.com/AccountChooser?Email=newncert.nextsem@gmail.com&continue=https://drive.google.com/drive/my-drive"
                        target="_blank"
                        rel="noreferrer"
                        title="Open Google Drive for newncert.nextsem@gmail.com"
                        style={{
                          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                          color: '#ffffff',
                          padding: '7px 12px',
                          borderRadius: '8px',
                          fontSize: '0.76rem',
                          fontWeight: 800,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
                        }}
                      >
                        <ExternalLink size={13} />
                        <span>Open Drive (newncert.nextsem@gmail.com)</span>
                      </a>

                      <a
                        href={SHARED_NCERT_DRIVE_FOLDER_URL}
                        target="_blank"
                        rel="noreferrer"
                        title="Open Shared NCERT Drive Storage"
                        style={{
                          background: 'var(--bg-hover, #f1f5f9)',
                          border: '1px solid var(--border-color, #e2e8f0)',
                          color: 'var(--text-main, var(--text-primary))',
                          padding: '7px 12px',
                          borderRadius: '8px',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <FolderOpen size={13} />
                        <span>NCERT Cloud Folder</span>
                      </a>
                    </div>
                  </div>

                  {/* Input Field for Google Drive URL or File ID */}
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', display: 'block', marginBottom: '6px' }}>
                      Google Drive PDF Share Link or File ID (Account: newncert.nextsem@gmail.com):
                    </label>
                    <input
                      type="text"
                      value={googleDriveInput}
                      onChange={(e) => {
                        setGoogleDriveInput(e.target.value);
                        if (uploadErrorMsg) setUploadErrorMsg('');
                      }}
                      placeholder="e.g. https://drive.google.com/file/d/1A2B3C.../view?usp=sharing or raw File ID"
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        border: currentDriveId ? '1.5px solid #10b981' : '1.5px solid var(--border-card, #e2d5ad)',
                        background: 'var(--bg-prob, #f8fafc)',
                        color: 'var(--text-main, #0a2240)',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box',
                        outline: 'none',
                        transition: 'all 0.2s ease'
                      }}
                    />

                    {/* Live Validation Feedback */}
                    {currentDriveId ? (
                      <div style={{
                        marginTop: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '8px',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid #10b981',
                        padding: '6px 12px',
                        borderRadius: '8px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#059669', fontWeight: 800 }}>
                          <CheckCircle2 size={15} />
                          <span>Verified Google Drive File ID: <code>{currentDriveId}</code> (newncert.nextsem@gmail.com)</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsPreviewDriveOpen(!isPreviewDriveOpen)}
                          style={{
                            background: '#10b981',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            cursor: 'pointer'
                          }}
                        >
                          {isPreviewDriveOpen ? 'Hide Preview' : '👁️ Live Preview PDF'}
                        </button>
                      </div>
                    ) : googleDriveInput.trim() ? (
                      <div style={{ marginTop: '6px', fontSize: '0.76rem', color: '#f59e0b', fontWeight: 700 }}>
                        ⚠️ Paste a valid Google Drive share link (e.g. https://drive.google.com/file/d/&lt;ID&gt;/view) or raw File ID from newncert.nextsem@gmail.com.
                      </div>
                    ) : null}

                    {/* Embedded Preview if toggled */}
                    {isPreviewDriveOpen && currentDriveId && (
                      <div style={{ marginTop: '12px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color, #e2e8f0)', height: '360px' }}>
                        <iframe
                          src={getDrivePreviewUrl(currentDriveId)}
                          title="Google Drive PDF Preview"
                          style={{ width: '100%', height: '100%', border: 'none' }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Optional Fallback Options: Official URL or Local PDF */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', paddingTop: '10px', borderTop: '1px dashed var(--border-color, #e2e8f0)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '1 1 280px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted, #64748b)', whiteSpace: 'nowrap' }}>
                        Or Official NCERT URL:
                      </label>
                      <input
                        type="url"
                        value={officialPdfUrl}
                        onChange={(e) => setOfficialPdfUrl(e.target.value)}
                        placeholder="https://ncert.nic.in/textbook/pdf/leph101.pdf"
                        style={{
                          width: '100%',
                          padding: '6px 10px',
                          borderRadius: '8px',
                          border: '1px solid var(--border-card, #e2d5ad)',
                          background: 'var(--bg-prob, #f8fafc)',
                          color: 'var(--text-main, #0a2240)',
                          fontSize: '0.8rem',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <label style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--text-main, var(--text-primary))',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: 'var(--bg-card, #ffffff)',
                        border: '1px solid var(--border-card, #e2d5ad)',
                        padding: '6px 10px',
                        borderRadius: '8px'
                      }}>
                        <UploadCloud size={13} />
                        <span>{selectedPdfFile ? selectedPdfFile.name : 'Optional Local PDF Backup'}</span>
                        <input
                          type="file"
                          accept="application/pdf,.pdf"
                          onChange={handleFileChange}
                          style={{ display: 'none' }}
                        />
                      </label>
                      {selectedPdfFile && (
                        <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>
                          ({(selectedPdfFile.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 7. NEP 2026-27 Highlights */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', display: 'block', marginBottom: '6px' }}>
                    7. NEP 2026–27 Syllabus Highlights & Focus Areas:
                  </label>
                  <input
                    type="text"
                    value={nepHighlights}
                    onChange={(e) => setNepHighlights(e.target.value)}
                    placeholder="Key concepts, experiments, formulas covered in this chapter"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--border-card, var(--border-color))',
                      background: 'var(--bg-prob, var(--bg-hover))',
                      color: 'var(--text-main, var(--text-primary))',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* 8. Comprehensive Chapter Notes & Formulas Bank */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', display: 'block', marginBottom: '6px' }}>
                    8. Chapter Notes, Key Formulas & Practice Solutions (Text / Markdown):
                  </label>
                  <textarea
                    rows={6}
                    value={chapterNotes}
                    onChange={(e) => setChapterNotes(e.target.value)}
                    placeholder="Type or paste chapter notes, key definitions, derivations, formulas, and homework questions here..."
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid var(--border-card, var(--border-color))',
                      background: 'var(--bg-prob, var(--bg-hover))',
                      color: 'var(--text-main, var(--text-primary))',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                  <button
                    type="submit"
                    disabled={isUploading}
                    style={{
                      background: 'linear-gradient(135deg, #04aa6d 0%, #00e676 100%)',
                      color: '#061224',
                      padding: '14px 28px',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: 900,
                      border: 'none',
                      cursor: isUploading ? 'not-allowed' : 'pointer',
                      boxShadow: '0 4px 16px rgba(4, 170, 109, 0.35)',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      opacity: isUploading ? 0.7 : 1
                    }}
                  >
                    {isUploading ? (
                      <>
                        <RefreshCw size={20} className="animate-spin" />
                        <span>Saving PDF & Notes...</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud size={20} />
                        <span>Save & Publish Chapter to App</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: MANAGE UPLOADED CHAPTERS */}
          {/* ========================================================================= */}
          {activeTab === 'MANAGE' && (
            <div style={{
              background: 'var(--bg-card, #ffffff)',
              border: '1.5px solid var(--border-card, var(--border-color))',
              borderRadius: '24px',
              padding: '28px 24px',
              boxShadow: 'var(--shadow-card, 0 8px 30px rgba(0, 0, 0, 0.08))'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-main, var(--text-primary))', margin: '0 0 4px' }}>
                    Manage Uploaded Chapters ({customChapters.length})
                  </h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted, #64748b)', margin: 0 }}>
                    Custom chapters saved in local browser database (IndexedDB). Available instantly for offline reading.
                  </p>
                </div>

                {/* Search Bar */}
                <div style={{
                  position: 'relative',
                  width: '280px'
                }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '11px', color: 'var(--text-muted, #64748b)' }} />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Search chapters, class, subject..."
                    style={{
                      width: '100%',
                      padding: '8px 12px 8px 36px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--border-card, var(--border-color))',
                      background: 'var(--bg-prob, var(--bg-hover))',
                      color: 'var(--text-main, var(--text-primary))',
                      fontSize: '0.85rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {filteredChapters.length === 0 ? (
                <div style={{
                  padding: '48px 20px',
                  textAlign: 'center',
                  background: 'var(--bg-prob, var(--bg-hover))',
                  borderRadius: '16px',
                  border: '1.5px dashed var(--border-card, var(--border-color))'
                }}>
                  <Layers size={40} style={{ color: 'var(--text-muted, #64748b)', margin: '0 auto 12px', opacity: 0.5 }} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main, var(--text-primary))', margin: '0 0 6px' }}>
                    No Custom Chapters Found
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted, #64748b)', margin: '0 0 16px' }}>
                    {searchFilter ? 'No chapters match your search query.' : 'You haven’t uploaded any custom chapter PDFs yet.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('UPLOAD')}
                    style={{
                      background: 'linear-gradient(135deg, #04aa6d 0%, #00e676 100%)',
                      color: '#061224',
                      padding: '10px 20px',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Upload Your First PDF
                  </button>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                  {filteredChapters.map((ch) => (
                    <div
                      key={ch.id}
                      style={{
                        background: 'var(--bg-prob, var(--bg-hover))',
                        border: '1.5px solid var(--border-card, var(--border-color))',
                        borderRadius: '16px',
                        padding: '18px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '12px',
                        boxShadow: 'var(--shadow-sm, 0 2px 8px rgba(0,0,0,0.04))'
                      }}
                    >
                      <div>
                        {/* Header Badges */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{
                            background: '#04aa6d',
                            color: '#041c14',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontSize: '0.72rem',
                            fontWeight: 900
                          }}>
                            Class {ch.classNum}
                          </span>

                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted, #64748b)' }}>
                            {ch.uploadedAt}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--text-main, var(--text-primary))', margin: '0 0 6px', lineHeight: 1.3 }}>
                          Ch {ch.chapterNumber}: {ch.title}
                        </h3>

                        <div style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 800, marginBottom: '6px' }}>
                          Subject: {ch.subjectId}
                        </div>

                        {ch.googleDriveFileId && (
                          <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            background: 'rgba(66, 133, 244, 0.1)',
                            border: '1px solid rgba(66, 133, 244, 0.3)',
                            color: '#3b82f6',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            marginBottom: '6px',
                            marginRight: '6px'
                          }}>
                            <span>☁️ Drive (newncert.nextsem@gmail.com)</span>
                          </div>
                        )}

                        {ch.fileSizeFormatted && (
                          <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700, marginBottom: '6px' }}>
                            💾 Local PDF: {ch.fileSizeFormatted}
                          </div>
                        )}

                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted, #64748b)', margin: '0 0 12px', lineHeight: 1.4 }}>
                          {ch.nepHighlights}
                        </p>
                      </div>

                      {/* Card Footer Actions */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--border-card, var(--border-color))'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          {/* Navigate to Chapter in App */}
                          {onNavigateToChapter && (
                            <button
                              type="button"
                              onClick={() => onNavigateToChapter(ch.classNum, ch.subjectId)}
                              title="Open in Student App"
                              style={{
                                background: 'var(--bg-hover, rgba(10, 34, 64, 0.08))',
                                border: '1px solid var(--border-card, var(--border-color))',
                                color: 'var(--text-main, var(--text-primary))',
                                padding: '5px 10px',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              <BookOpen size={13} />
                              <span>View in App</span>
                            </button>
                          )}

                          {ch.googleDriveFileId && (
                            <a
                              href={`https://drive.google.com/file/d/${ch.googleDriveFileId}/view`}
                              target="_blank"
                              rel="noreferrer"
                              title="Open in newncert.nextsem@gmail.com Google Drive"
                              style={{
                                background: 'rgba(66, 133, 244, 0.12)',
                                border: '1px solid rgba(66, 133, 244, 0.3)',
                                color: '#3b82f6',
                                padding: '5px 8px',
                                borderRadius: '8px',
                                fontSize: '0.74rem',
                                fontWeight: 800,
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              <ExternalLink size={12} />
                              <span>Drive</span>
                            </a>
                          )}

                          {ch.officialPdfUrl && (
                            <a
                              href={ch.officialPdfUrl}
                              target="_blank"
                              rel="noreferrer"
                              title="Open PDF Preview"
                              style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#0284c7',
                                padding: '4px',
                                cursor: 'pointer',
                                display: 'inline-flex'
                              }}
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>

                        {/* Delete Chapter Action */}
                        <button
                          type="button"
                          onClick={() => handleDelete(ch.id, ch.title)}
                          title="Delete Custom Chapter"
                          style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            color: '#ef4444',
                            padding: '6px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      )}

    </div>
  );
};
