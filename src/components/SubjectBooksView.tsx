import React, { useState } from 'react';
import { ArrowLeft, Bookmark, FolderOpen, List, LayoutGrid, Maximize2, Sparkles, BookOpen } from 'lucide-react';
import type { Subject } from '../data/ncertData';
import { SHARED_NCERT_DRIVE_FOLDER_URL } from '../utils/googleDriveHelper';

type ViewMode = 'list' | 'tiles' | 'large';

interface SubjectBooksViewProps {
  subject: Subject;
  allClassSubjects: Subject[];
  onSelectSubject: (subj: Subject) => void;
  onSelectBookPart: (partId: string, partTitle: string, bookCode: string) => void;
  onBackToSubjects: () => void;
  onToggleBookmarkSubject?: (subj: Subject) => void;
  isSubjectBookmarked?: (id: string) => boolean;
  onOpenHindiGrammarStudio?: () => void;
}

export const SubjectBooksView: React.FC<SubjectBooksViewProps> = ({
  subject,
  allClassSubjects,
  onSelectSubject,
  onSelectBookPart,
  onBackToSubjects,
  onToggleBookmarkSubject,
  isSubjectBookmarked,
  onOpenHindiGrammarStudio
}) => {
  const isBookmarked = isSubjectBookmarked ? isSubjectBookmarked(subject.id) : false;
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    const saved = localStorage.getItem('nextsem_books_view_mode') as ViewMode | null;
    return saved === 'list' || saved === 'tiles' || saved === 'large' ? saved : 'tiles';
  });

  const handleSetViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    localStorage.setItem('nextsem_books_view_mode', mode);
  };

  const getCoverImage = (subjId: string, partId: string): string | undefined => {
    if (subjId === 'c12-maths') {
      if (partId === 'part-1') return '/book-covers/math-p1.png';
      if (partId === 'part-2') return '/book-covers/math-p2.png';
      if (partId === 'exemplar') return '/book-covers/math-exemplar.png';
    }
    if (subjId === 'c12-english') {
      if (partId === 'part-1') return '/book-covers/english-flamingo.png';
      if (partId === 'part-2') return '/book-covers/english-vistas.png';
      if (partId === 'part-3') return '/book-covers/english-kaleidoscope.png';
    }
    if (subjId === 'c12-physics') {
      if (partId === 'part-1') return '/book-covers/physics-p1.png';
      if (partId === 'part-2') return '/book-covers/physics-p1.png';
    }
    if (subjId === 'c12-chemistry') {
      if (partId === 'part-1') return '/book-covers/chemistry-p1.png';
      if (partId === 'part-2') return '/book-covers/chemistry-p1.png';
    }
    if (subjId === 'c12-biology') {
      return '/book-covers/biology.png';
    }
    if (subjId === 'c12-accountancy' || subjId === 'c11-accountancy') {
      if (partId === 'part-1' || partId === 'part-2') return '/book-covers/accountancy-p1.png';
    }
    if (subjId === 'c12-cs') {
      return '/book-covers/cs-textbook.png';
    }
    if (subjId === 'c12-history') {
      return '/book-covers/class12-history.jpg';
    }
    if (subjId === 'c7-hindi') {
      return '/book-covers/class7-hindi-malhar.png';
    }
    if (subjId === 'c7-english') {
      return '/book-covers/class7-english-poorvi.png';
    }
    if (subjId === 'c7-maths') {
      if (partId === 'part-2') return '/book-covers/class7-math-ganita-p2.jpg';
      return '/book-covers/class7-math-ganita.png';
    }
    if (subjId === 'c7-social-science') {
      if (partId === 'part-2') return '/book-covers/class7-social-science-exploring-p2.jpg';
      return '/book-covers/class7-social-science-exploring.png';
    }
    if (subjId === 'c7-sanskrit') {
      return '/book-covers/class7-sanskrit-deepakam.png';
    }
    if (subjId === 'c7-science') {
      return '/book-covers/class7-science-curiosity.png';
    }
    if (subjId === 'c7-arts') {
      return '/book-covers/class7-arts-kriti.png';
    }
    if (subjId === 'c7-physical-education') {
      return '/book-covers/class7-pe-khelyatra.png';
    }
    if (subjId === 'c7-vocational') {
      return '/book-covers/class7-vocational-kaushalbodh.png';
    }
    if (subjId === 'c7-urdu') {
      return '/book-covers/class7-urdu-khayal.png';
    }
    if (subjId === 'c5-evs') {
      return '/book-covers/class5-evs-looking-around.png';
    }

    // Class 9 NCERT Authentic Covers
    if (subjId === 'c9-maths') {
      if (partId === 'part-1') return '/book-covers/class9-maths-ganita-manjari.png';
      return '/book-covers/class9-maths.png';
    }
    if (subjId === 'c9-science') {
      return '/book-covers/class9-science-exploration.png';
    }
    if (subjId === 'c9-english') {
      return '/book-covers/class9-english-kaveri.png';
    }
    if (subjId === 'c9-hindi') {
      return '/book-covers/class9-hindi-ganga.png';
    }
    if (subjId === 'c9-social-science') {
      return '/book-covers/class9-social-science-understanding-society.png';
    }
    if (subjId === 'c9-hindi-grammar') {
      return '/book-covers/class9-hindi-ganga.png';
    }
    // Class 1 NCERT Covers
    if (subjId === 'c1-english') return 'https://ncert.nic.in/textbook/pdf/aemr1cc.jpg';
    if (subjId === 'c1-maths') return 'https://ncert.nic.in/textbook/pdf/aejm1cc.jpg';
    if (subjId === 'c1-hindi') return 'https://ncert.nic.in/textbook/pdf/ahsr1cc.jpg';
    if (subjId === 'c1-urdu') return 'https://ncert.nic.in/textbook/pdf/aush1cc.jpg';

    // Class 2 NCERT Covers
    if (subjId === 'c2-maths') return 'https://ncert.nic.in/textbook/pdf/bejm1cc.jpg';
    if (subjId === 'c2-english') return 'https://ncert.nic.in/textbook/pdf/bemr1cc.jpg';
    if (subjId === 'c2-hindi') return 'https://ncert.nic.in/textbook/pdf/bhsr1cc.jpg';
    if (subjId === 'c2-urdu') return 'https://ncert.nic.in/textbook/pdf/bush1cc.jpg';

    // Class 3 NCERT Covers
    if (subjId === 'c3-maths') return 'https://ncert.nic.in/textbook/pdf/cemm1cc.jpg';
    if (subjId === 'c3-english') return 'https://ncert.nic.in/textbook/pdf/cesa1cc.jpg';
    if (subjId === 'c3-hindi') return 'https://ncert.nic.in/textbook/pdf/chve1cc.jpg';
    if (subjId === 'c3-evs') return 'https://ncert.nic.in/textbook/pdf/ceev1cc.jpg';

    // Class 4 NCERT Covers
    if (subjId === 'c4-maths') return 'https://ncert.nic.in/textbook/pdf/demm1cc.jpg';
    if (subjId === 'c4-english') return 'https://ncert.nic.in/textbook/pdf/desa1cc.jpg';
    if (subjId === 'c4-hindi') return 'https://ncert.nic.in/textbook/pdf/dhve1cc.jpg';
    if (subjId === 'c4-evs') return 'https://ncert.nic.in/textbook/pdf/deev1cc.jpg';

    // Class 5 NCERT Covers
    if (subjId === 'c5-maths') return 'https://ncert.nic.in/textbook/pdf/eemm1cc.jpg';
    if (subjId === 'c5-santoor') return 'https://ncert.nic.in/textbook/pdf/eesa1cc.jpg';
    if (subjId === 'c5-english') return 'https://ncert.nic.in/textbook/pdf/ehmg1cc.jpg';
    if (subjId === 'c5-hindi') return 'https://ncert.nic.in/textbook/pdf/hhrj1cc.jpg';
    if (subjId === 'c5-evs') return 'https://ncert.nic.in/textbook/pdf/ehap1cc.jpg';

    return undefined;
  };

  const getBookParts = (subjId: string) => {
    if (subjId === 'c12-maths' || subjId === 'c12-physics' || subjId === 'c12-chemistry') {
      return [
        {
          id: 'part-1',
          title: `${subject.name.toUpperCase()} PART-I (XII)`,
          bookCode: 'part-1',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #1e3a8a 100%)',
          textColor: '#ffffff',
          tag: 'Part I • NCERT Textbook'
        },
        {
          id: 'part-2',
          title: `${subject.name.toUpperCase()} PART-II (XII)`,
          bookCode: 'part-2',
          coverBg: 'linear-gradient(135deg, #6366f1 0%, #312e81 100%)',
          textColor: '#ffffff',
          tag: 'Part II • NCERT Textbook'
        },
        {
          id: 'exemplar',
          title: `${subject.name.toUpperCase()} EXEMPLAR (XII)`,
          bookCode: 'exemplar',
          coverBg: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
          textColor: '#ffffff',
          tag: 'Exemplar • NCERT Problems'
        }
      ];
    }

    if (subjId === 'c12-english') {
      return [
        {
          id: 'part-1',
          title: `FLAMINGO (TEXTBOOK)`,
          bookCode: 'flamingo',
          coverBg: 'linear-gradient(135deg, #e11d48 0%, #881337 100%)',
          textColor: '#ffffff',
          tag: 'Flamingo • NCERT lefl1'
        },
        {
          id: 'part-2',
          title: `VISTAS (SUPPLEMENTARY)`,
          bookCode: 'vistas',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #0c4a6e 100%)',
          textColor: '#ffffff',
          tag: 'Vistas • NCERT levt1'
        },
        {
          id: 'part-3',
          title: `KALEIDOSCOPE (ELECTIVE)`,
          bookCode: 'kaleidoscope',
          coverBg: 'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)',
          textColor: '#ffffff',
          tag: 'Kaleidoscope • NCERT lekl1'
        }
      ];
    }

    if (subjId === 'c11-accountancy') {
      return [
        {
          id: 'part-1',
          title: `FINANCIAL ACCOUNTING - I (XI)`,
          bookCode: 'part-1',
          coverBg: 'linear-gradient(135deg, #4f46e5 0%, #1e1b4b 100%)',
          textColor: '#ffffff',
          tag: 'Part I • NCERT keac1=0-7 (Ch 1–7)'
        },
        {
          id: 'part-2',
          title: `FINANCIAL ACCOUNTING - II (XI)`,
          bookCode: 'part-2',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #082f49 100%)',
          textColor: '#ffffff',
          tag: 'Part II • NCERT keac2=0-4 (Ch 8–11)'
        },
        {
          id: 'ts-grewal',
          title: `T.S. GREWAL: DOUBLE ENTRY BOOK KEEPING (XI)`,
          bookCode: 'ts-grewal',
          coverBg: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
          textColor: '#ffffff',
          tag: 'T.S. Grewal • Financial Accounting (18 Chapters & Solutions)'
        },
        {
          id: 'navyug-midterm-paper',
          title: `NAVYUG SCHOOL MID-TERM EXAM 2026 (80 MARKS)`,
          bookCode: 'navyug-midterm',
          coverBg: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
          textColor: '#ffffff',
          tag: 'Mid-Term Exam (80 Marks) • 13 Solved Questions with Hidden Steps'
        }
      ];
    }

    if (subjId === 'c12-accountancy') {
      return [
        {
          id: 'part-1',
          title: `ACCOUNTANCY PART-I (XII)`,
          bookCode: 'part-1',
          coverBg: 'linear-gradient(135deg, #4f46e5 0%, #1e1b4b 100%)',
          textColor: '#ffffff',
          tag: 'Part I • Partnership Accounts (leac1=0-4)'
        },
        {
          id: 'part-2',
          title: `ACCOUNTANCY PART-II (XII)`,
          bookCode: 'part-2',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #082f49 100%)',
          textColor: '#ffffff',
          tag: 'Part II • Company Accounts (leac2=0-6)'
        }
      ];
    }

    if (subjId === 'c12-history') {
      return [
        {
          id: 'part-1',
          title: `THEMES IN INDIAN HISTORY PART-I (XII)`,
          bookCode: 'part-1',
          coverBg: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)',
          textColor: '#ffffff',
          tag: 'Part I • NCERT lehs1 / lhhs1 (Themes 1–4)'
        },
        {
          id: 'part-2',
          title: `THEMES IN INDIAN HISTORY PART-II (XII)`,
          bookCode: 'part-2',
          coverBg: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
          textColor: '#ffffff',
          tag: 'Part II • NCERT lehs2 / lhhs2 (Themes 5–8)'
        },
        {
          id: 'part-3',
          title: `THEMES IN INDIAN HISTORY PART-III (XII)`,
          bookCode: 'part-3',
          coverBg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'Part III • NCERT lehs3 / lhhs3 (Themes 9–12)'
        }
      ];
    }

    if (subjId === 'c12-bs' || subjId === 'c11-bs') {
      const clsLabel = subjId.startsWith('c11') ? 'XI' : 'XII';
      return [
        {
          id: 'part-1',
          title: `BUSINESS STUDIES PART-I (${clsLabel})`,
          bookCode: 'part-1',
          coverBg: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
          textColor: '#ffffff',
          tag: 'Principles & Functions of Management'
        },
        {
          id: 'part-2',
          title: `BUSINESS STUDIES PART-II (${clsLabel})`,
          bookCode: 'part-2',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #082f49 100%)',
          textColor: '#ffffff',
          tag: 'Business Finance & Marketing'
        }
      ];
    }

    if (subjId === 'c12-biology') {
      return [
        {
          id: 'part-1',
          title: `BIOLOGY TEXTBOOK (XII)`,
          bookCode: 'part-1',
          coverBg: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Textbook • lebo1 (13 Chapters)'
        },
        {
          id: 'exemplar',
          title: `BIOLOGY EXEMPLAR (XII)`,
          bookCode: 'exemplar',
          coverBg: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
          textColor: '#ffffff',
          tag: 'Exemplar Problems • leep4 (13 Units)'
        }
      ];
    }

    if (subjId === 'c9-social-science') {
      return [
        {
          id: 'part-1',
          title: `INDIA & CONTEMPORARY WORLD - I (HISTORY)`,
          bookCode: 'iess1',
          coverBg: 'linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)',
          textColor: '#ffffff',
          tag: 'History • NCERT iess1'
        },
        {
          id: 'part-2',
          title: `CONTEMPORARY INDIA - I (GEOGRAPHY)`,
          bookCode: 'iess2',
          coverBg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'Geography • NCERT iess2'
        },
        {
          id: 'part-3',
          title: `DEMOCRATIC POLITICS - I (CIVICS)`,
          bookCode: 'iess3',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #0c4a6e 100%)',
          textColor: '#ffffff',
          tag: 'Civics • NCERT iess3'
        },
        {
          id: 'part-4',
          title: `ECONOMICS (CLASS IX)`,
          bookCode: 'iess4',
          coverBg: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
          textColor: '#ffffff',
          tag: 'Economics • NCERT iess4'
        }
      ];
    }

    if (subjId === 'c9-maths') {
      return [
        {
          id: 'part-1',
          title: `GANITA MANJARI (गणित मंजरी - CLASS IX)`,
          bookCode: 'iemh1',
          coverBg: 'linear-gradient(135deg, #4f46e5 0%, #312e81 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Rationalised Textbook • iemh1 (12 Chapters)'
        },
        {
          id: 'class9-maths-40marks',
          title: `CH 4 & CH 5 MASTER EXAM SUITE (40 MARKS)`,
          bookCode: 'class9-maths-40marks',
          coverBg: 'linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)',
          textColor: '#ffffff',
          tag: '30 High-Yield MCQs • Graphical & Numerical Problem Solving'
        },
        {
          id: 'euclid-interactive',
          title: `EUCLID'S GEOMETRY INTERACTIVE LAB`,
          bookCode: 'euclid-lab',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          textColor: '#ffffff',
          tag: '5 Postulates & Axioms • Interactive Geometric Studio'
        },
        {
          id: 'circle-theorems-lab',
          title: `CIRCLES & THEOREMS INTERACTIVE LAB`,
          bookCode: 'circle-lab',
          coverBg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'Ch 5 Circles • Theorem 1–11 Visual Demonstrations'
        },
        {
          id: 'coord-geometry-studio',
          title: `COORDINATE GEOMETRY STEP-BY-STEP NUMERICALS`,
          bookCode: 'coord-studio',
          coverBg: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
          textColor: '#ffffff',
          tag: 'Cartesian Coordinate System • Plotting & Distance Numericals'
        }
      ];
    }

    if (subjId === 'c9-science') {
      return [
        {
          id: 'part-1',
          title: `EXPLORATION (SCIENCE TEXTBOOK - CLASS IX)`,
          bookCode: 'iesc1',
          coverBg: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Exploration • iesc1 (12 Chapters)'
        },
        {
          id: 'motion-force-numericals',
          title: `MOTION & FORCE MASTER NUMERICALS & PROBLEMS`,
          bookCode: 'motion-numericals',
          coverBg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
          textColor: '#ffffff',
          tag: '25 Problems • Distance, Speed, Accel & Newton’s F=ma'
        },
        {
          id: 'ch6-how-forces-affect-motion',
          title: `CHAPTER 6: HOW FORCES AFFECT MOTION (NOTES & MCQS)`,
          bookCode: 'forces-motion-notes',
          coverBg: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
          textColor: '#ffffff',
          tag: 'Complete Chapter Notes • 20 Bilingual MCQs & Solutions'
        }
      ];
    }

    if (subjId === 'c9-hindi-grammar') {
      return [
        {
          id: 'part-1',
          title: `HINDI GRAMMAR MASTERCLASS (कक्षा 9 हिंदी व्याकरण)`,
          bookCode: 'ihgv1',
          coverBg: 'linear-gradient(135deg, #e11d48 0%, #9f1239 100%)',
          textColor: '#ffffff',
          tag: '4 मुख्य स्तंभ • उपसर्ग, प्रत्यय, 6 समास, वाक्य भेद व अलंकार'
        },
        {
          id: 'grammar-mastery-studio',
          title: `HINDI GRAMMAR INTERACTIVE STUDIO (लाइव व्याकरण स्टूडियो)`,
          bookCode: 'grammar-studio',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          textColor: '#ffffff',
          tag: 'लाइव समास अन्वेषक • 20 MCQs टेस्ट व 20 रिक्त स्थान पूर्ति'
        }
      ];
    }

    if (subjId === 'c9-hindi') {
      return [
        {
          id: 'part-1',
          title: `गंगा / GANGA (NCERT TEXTBOOK - IX)`,
          bookCode: 'ihga1',
          coverBg: 'linear-gradient(135deg, #e11d48 0%, #881337 100%)',
          textColor: '#ffffff',
          tag: 'गद्य एवं काव्य खंड • 12 संपूर्ण अध्याय'
        },
        {
          id: 'grammar-mastery-studio',
          title: `कक्षा 9 हिंदी व्याकरण महा-अध्याय (GRAMMAR STUDIO)`,
          bookCode: 'grammar-studio',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          textColor: '#ffffff',
          tag: 'उपसर्ग-प्रत्यय, समास, वाक्य भेद, अलंकार व 20 MCQs'
        }
      ];
    }

    if (subjId === 'c12-geography') {
      return [
        {
          id: 'solved-paper-64-3-1',
          title: `CBSE CLASS 12 GEOGRAPHY BOARD PAPER (64/3/1)`,
          bookCode: 'paper-64-3-1',
          coverBg: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'Official Board Paper 64/3/1 • Solved with Hidden Answers'
        },
        {
          id: 'part-1',
          title: `FUNDAMENTALS OF HUMAN GEOGRAPHY (CLASS XII)`,
          bookCode: 'legy1',
          coverBg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'Part I: Human Geography • NCERT legy1'
        },
        {
          id: 'part-2',
          title: `INDIA: PEOPLE AND ECONOMY (CLASS XII)`,
          bookCode: 'legy2',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #082f49 100%)',
          textColor: '#ffffff',
          tag: 'Part II: India Economy • NCERT legy2'
        }
      ];
    }

    if (subjId === 'c11-economics' || subjId === 'c11-economics-stats') {
      return [
        {
          id: 'part-1',
          title: 'STATISTICS FOR ECONOMICS (XI)',
          bookCode: 'kest1',
          coverBg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'Part I: Statistics • NCERT kest1'
        },
        {
          id: 'part-2',
          title: 'INDIAN ECONOMIC DEVELOPMENT (XI)',
          bookCode: 'keec1',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #082f49 100%)',
          textColor: '#ffffff',
          tag: 'Part II: Indian Economy • NCERT keec1'
        }
      ];
    }

    if (subjId === 'c12-economics') {
      return [
        {
          id: 'part-1',
          title: 'INTRODUCTORY MACROECONOMICS (XII)',
          bookCode: 'leec1',
          coverBg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'Part I: Macroeconomics • NCERT leec1'
        },
        {
          id: 'part-2',
          title: 'INDIAN ECONOMIC DEVELOPMENT (XII)',
          bookCode: 'leec2',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #082f49 100%)',
          textColor: '#ffffff',
          tag: 'Part II: Indian Economy • NCERT leec2'
        }
      ];
    }

    if (subjId === 'c5-maths') {
      return [
        {
          id: 'part-1',
          title: `MATH MELA (गणित मेला - CLASS V)`,
          bookCode: 'eemm1',
          coverBg: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Math Mela • eemm1 (15 Chapters)'
        }
      ];
    }

    if (subjId === 'c5-evs') {
      return [
        {
          id: 'part-1',
          title: `OUR WONDROUS WORLD (हमारा अद्भुत संसार - CLASS V)`,
          bookCode: 'eeev1',
          coverBg: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Our Wondrous World • eeev1 (10 Chapters)'
        }
      ];
    }

    if (subjId === 'c5-english' || subjId === 'c5-santoor') {
      return [
        {
          id: 'part-1',
          title: `SANTOOR (संतूर - ENGLISH CLASS V)`,
          bookCode: 'eesa1',
          coverBg: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Santoor • eesa1 (10 Chapters)'
        }
      ];
    }

    if (subjId === 'c5-hindi') {
      return [
        {
          id: 'part-1',
          title: `VEENA (वीणा - हिंदी कक्षा 5)`,
          bookCode: 'ehve1',
          coverBg: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Veena • ehve1 (12 पाठ)'
        }
      ];
    }

    if (subjId === 'c7-english') {
      return [
        {
          id: 'part-1',
          title: `POORVI (पूर्वी - CLASS VII)`,
          bookCode: 'gepr1',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Poorvi • gepr1 (Unit 1 to 5)'
        },
        {
          id: 'part-2',
          title: `THE MIGHTY BANYAN TREE (COMPREHENSION STUDIO)`,
          bookCode: 'passage',
          coverBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          textColor: '#ffffff',
          tag: 'Interactive Passage • Bilingual MCQs & Answers'
        },
        {
          id: 'part-3',
          title: `ENGLISH GRAMMAR (30 EASY MCQS)`,
          bookCode: 'grammar',
          coverBg: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
          textColor: '#ffffff',
          tag: '30 Grammar MCQs • Live Fisher-Yates Shuffle'
        }
      ];
    }

    if (subjId === 'c7-maths') {
      return [
        {
          id: 'part-1',
          title: `GANITA PRAKASH PART-I (गणित प्रकाश भाग-1)`,
          bookCode: 'gegp1',
          coverBg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Ganita Prakash Part-I • gegp1 (Ch 1–8)'
        },
        {
          id: 'part-2',
          title: `GANITA PRAKASH PART-II (गणित प्रकाश भाग-2)`,
          bookCode: 'gegp2',
          coverBg: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Ganita Prakash Part-II • gegp2 (Ch 9–15)'
        },
        {
          id: 'part-3',
          title: `CHAPTER 6: NUMBER PLAY (20 EXAM MCQS)`,
          bookCode: 'number-play',
          coverBg: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
          textColor: '#ffffff',
          tag: 'Magic Squares, Parity & 20 Bilingual MCQs'
        }
      ];
    }

    if (subjId === 'c7-science') {
      return [
        {
          id: 'part-1',
          title: `CURIOSITY (विज्ञान / जिज्ञासा - CLASS VII)`,
          bookCode: 'gecu1',
          coverBg: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Curiosity • gecu1 (12 Chapters)'
        },
        {
          id: 'part-2',
          title: `CHAPTER 6: ADOLESCENCE (WORKSHEET & A5 SHEET)`,
          bookCode: 'adolescence',
          coverBg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'Interactive Worksheet & Bilingual Questions'
        },
        {
          id: 'part-3',
          title: `CHAPTER 9: LIFE PROCESSES IN ANIMALS (NOTES)`,
          bookCode: 'life-processes-notes',
          coverBg: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
          textColor: '#ffffff',
          tag: 'Complete Notes • Digestion, Villi, Respiration & Breathing'
        }
      ];
    }

    if (subjId === 'c7-social-science') {
      return [
        {
          id: 'part-1',
          title: `EXPLORING SOCIETY INDIA & BEYOND PART-I`,
          bookCode: 'gees1',
          coverBg: 'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Exploring Society Part-I • gees1 (Ch 1–12)'
        },
        {
          id: 'part-2',
          title: `EXPLORING SOCIETY INDIA & BEYOND PART-II`,
          bookCode: 'gees2',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Exploring Society Part-II • gees2 (Ch 13–20)'
        },
        {
          id: 'part-3',
          title: `CHAPTER 2: UNDERSTANDING THE WEATHER (25 MCQS)`,
          bookCode: 'weather-mcqs',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #1e40af 100%)',
          textColor: '#ffffff',
          tag: '25 Bilingual MCQs • Weather Elements & AWS'
        }
      ];
    }

    if (subjId === 'c7-hindi') {
      return [
        {
          id: 'part-1',
          title: `MALHAR (मल्हार - कक्षा 7)`,
          bookCode: 'ghml1',
          coverBg: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Malhar • ghml1 (10 Chapters)'
        },
        {
          id: 'part-2',
          title: `माँ, कह एक कहानी (अभ्यास एवं रिक्त स्थान)`,
          bookCode: 'maa-kah-ek-kahani',
          coverBg: 'linear-gradient(135deg, #f43f5e 0%, #9f1239 100%)',
          textColor: '#ffffff',
          tag: 'संवादपरक कविता • सम्पूर्ण समाधान एवं क्विज़'
        }
      ];
    }

    if (subjId === 'c7-sanskrit') {
      return [
        {
          id: 'part-1',
          title: `DEEPAKAM (दीपकम - कक्षा 7)`,
          bookCode: 'gsde1',
          coverBg: 'linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Deepakam • gsde1 (15 Chapters)'
        }
      ];
    }

    if (subjId === 'c7-arts') {
      return [
        {
          id: 'part-1',
          title: `KRITI (कृति - कला शिक्षा CLASS VII)`,
          bookCode: 'gekr1',
          coverBg: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Kriti Art Education • gekr1 (20 Units)'
        }
      ];
    }

    if (subjId === 'c7-physical-education') {
      return [
        {
          id: 'part-1',
          title: `KHEL YATRA (खेल यात्रा - PHYSICAL EDUCATION CLASS VII)`,
          bookCode: 'geky1',
          coverBg: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Physical Education & Well Being • geky1 (6 Chapters)'
        }
      ];
    }

    if (subjId === 'c7-vocational') {
      return [
        {
          id: 'part-1',
          title: `KAUSHAL BODH (कौशल बोध - VOCATIONAL EDUCATION CLASS VII)`,
          bookCode: 'gekb1',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Vocational Education • gekb1 (7 Chapters)'
        }
      ];
    }

    if (subjId === 'c7-urdu') {
      return [
        {
          id: 'part-1',
          title: `KHAYAL (ख्याल - URDU CLASS VII)`,
          bookCode: 'guky1',
          coverBg: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
          textColor: '#ffffff',
          tag: 'New NCERT Khayal Urdu • guky1 (14 Chapters)'
        }
      ];
    }

    // ── Class 1 NCERT Textbooks ──
    if (subjId === 'c1-english') {
      return [
        {
          id: 'part-1',
          title: `MRIDANG (मृदंग - ENGLISH CLASS I)`,
          bookCode: 'aemr1',
          coverBg: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Mridang • aemr1 (9 Chapters)'
        }
      ];
    }
    if (subjId === 'c1-maths') {
      return [
        {
          id: 'part-1',
          title: `JOYFUL-MATHEMATICS (आनंदमय गणित - CLASS I)`,
          bookCode: 'aejm1',
          coverBg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Joyful-Mathematics • aejm1 (13 Chapters)'
        }
      ];
    }
    if (subjId === 'c1-hindi') {
      return [
        {
          id: 'part-1',
          title: `SARANGI (सारंगी - हिंदी कक्षा 1)`,
          bookCode: 'ahsr1',
          coverBg: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Sarangi • ahsr1 (19 पाठ)'
        }
      ];
    }
    if (subjId === 'c1-urdu') {
      return [
        {
          id: 'part-1',
          title: `SHAHNAI (शहनाई - URDU CLASS I)`,
          bookCode: 'aush1',
          coverBg: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Shahnai • aush1 (18 Sabaq)'
        }
      ];
    }

    // ── Class 2 NCERT Textbooks ──
    if (subjId === 'c2-maths') {
      return [
        {
          id: 'part-1',
          title: `JOYFUL-MATHEMATICS (आनंदमय गणित - CLASS II)`,
          bookCode: 'bejm1',
          coverBg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Joyful-Mathematics • bejm1 (11 Chapters)'
        }
      ];
    }
    if (subjId === 'c2-english') {
      return [
        {
          id: 'part-1',
          title: `MRIDANG (मृदंग - ENGLISH CLASS II)`,
          bookCode: 'bemr1',
          coverBg: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Mridang • bemr1 (13 Chapters)'
        }
      ];
    }
    if (subjId === 'c2-hindi') {
      return [
        {
          id: 'part-1',
          title: `SARANGI (सारंगी - हिंदी कक्षा 2)`,
          bookCode: 'bhsr1',
          coverBg: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Sarangi • bhsr1 (26 पाठ)'
        }
      ];
    }
    if (subjId === 'c2-urdu') {
      return [
        {
          id: 'part-1',
          title: `SHAHNAI (शहनाई - URDU CLASS II)`,
          bookCode: 'bush1',
          coverBg: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Shahnai • bush1 (19 Sabaq)'
        }
      ];
    }

    // ── Class 3 NCERT Textbooks ──
    if (subjId === 'c3-maths') {
      return [
        {
          id: 'part-1',
          title: `MATHS MELA (गणित मेला - CLASS III)`,
          bookCode: 'cemm1',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Maths Mela • cemm1 (14 Chapters)'
        }
      ];
    }
    if (subjId === 'c3-english') {
      return [
        {
          id: 'part-1',
          title: `SANTOOR (संतूर - ENGLISH CLASS III)`,
          bookCode: 'cesa1',
          coverBg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Santoor • cesa1 (12 Chapters)'
        }
      ];
    }
    if (subjId === 'c3-hindi') {
      return [
        {
          id: 'part-1',
          title: `VEENA (वीणा - हिंदी कक्षा 3)`,
          bookCode: 'chve1',
          coverBg: 'linear-gradient(135deg, #e11d48 0%, #9f1239 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Veena • chve1 (18 पाठ)'
        }
      ];
    }
    if (subjId === 'c3-evs') {
      return [
        {
          id: 'part-1',
          title: `OUR WONDROUS WORLD (हमारा अद्भुत संसार - EVS CLASS III)`,
          bookCode: 'ceev1',
          coverBg: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Our Wondrous World • ceev1 (12 Chapters)'
        }
      ];
    }

    // ── Class 4 NCERT Textbooks ──
    if (subjId === 'c4-maths') {
      return [
        {
          id: 'part-1',
          title: `MATHS MELA (गणित मेला - CLASS IV)`,
          bookCode: 'demm1',
          coverBg: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Maths Mela • demm1 (14 Chapters)'
        }
      ];
    }
    if (subjId === 'c4-english') {
      return [
        {
          id: 'part-1',
          title: `SANTOOR (संतूर - ENGLISH CLASS IV)`,
          bookCode: 'desa1',
          coverBg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Santoor • desa1 (12 Chapters)'
        }
      ];
    }
    if (subjId === 'c4-hindi') {
      return [
        {
          id: 'part-1',
          title: `VEENA (वीणा - हिंदी कक्षा 4)`,
          bookCode: 'dhve1',
          coverBg: 'linear-gradient(135deg, #e11d48 0%, #9f1239 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Veena • dhve1 (13 पाठ)'
        }
      ];
    }
    if (subjId === 'c4-evs') {
      return [
        {
          id: 'part-1',
          title: `OUR WONDROUS WORLD (हमारा अद्भुत संसार - EVS CLASS IV)`,
          bookCode: 'deev1',
          coverBg: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
          textColor: '#ffffff',
          tag: 'NCERT Our Wondrous World • deev1 (10 Chapters)'
        }
      ];
    }

    return [
      {
        id: 'part-1',
        title: `${subject.name.toUpperCase()} TEXTBOOK`,
        bookCode: 'part-1',
        coverBg: 'linear-gradient(135deg, #4f46e5 0%, #1e1b4b 100%)',
        textColor: '#ffffff',
        tag: 'Textbook'
      }
    ];
  };

  const bookParts = getBookParts(subject.id);

  const handleBookClick = (book: typeof bookParts[0]) => {
    if (book.id === 'solved-paper-64-3-1') {
      window.location.href = '/cbse-class12-geography-64-3-1-paper-solutions.html';
      return;
    }
    if (book.bookCode === 'passage') {
      window.location.href = '/class6-7-english-comprehension-passage.html';
      return;
    }
    if (book.bookCode === 'grammar') {
      window.location.href = '/class6-7-easy-mcq-practice.html';
      return;
    }
    if (book.bookCode === 'number-play') {
      window.location.href = '/ganita-class7-ch6-number-play-mcq.html';
      return;
    }
    if (book.bookCode === 'adolescence') {
      window.location.href = '/curiosity-class7-ch6-adolescence-worksheet.html';
      return;
    }
    if (book.bookCode === 'weather-mcqs') {
      window.location.href = '/class7-social-science-ch2-understanding-weather-mcq.html';
      return;
    }
    if (book.bookCode === 'maa-kah-ek-kahani') {
      window.location.href = '/hindi-class7-ch1-maa-kah-ek-kahani-fill-in-the-blanks.html';
      return;
    }
    if (book.bookCode === 'navyug-midterm') {
      window.location.href = '/navyug-class11-accountancy-exam-solutions.html';
      return;
    }
    if (book.id === 'class9-maths-40marks' || book.bookCode === 'class9-maths-40marks') {
      window.location.href = '/class9-maths-ch4-ch5-question-paper-40-marks.html';
      return;
    }
    if (book.id === 'circle-theorems-lab' || book.bookCode === 'circle-lab') {
      window.location.href = '/maths-class9-ch5-circle-theorems-interactive-lab.html';
      return;
    }
    if (book.id === 'coord-geometry-studio' || book.bookCode === 'coord-studio') {
      window.location.href = '/class9-ganita-manjari-ch1-coordinate-geometry-numericals.html';
      return;
    }
    if (book.bookCode === 'motion-numericals') {
      window.location.href = '/class9-physics-motion-force-numericals-questions.html';
      return;
    }
    if (book.bookCode === 'forces-motion-notes') {
      window.location.href = '/science-class9-ch6-how-forces-affect-motion-notes-mcq.html';
      return;
    }
    if (book.bookCode === 'life-processes-notes') {
      window.location.href = '/curiosity-class7-ch9-life-processes-notes.html';
      return;
    }
    if (book.bookCode === 'grammar-studio' || book.id === 'grammar-mastery-studio') {
      if (onOpenHindiGrammarStudio) onOpenHindiGrammarStudio();
      else window.location.href = '/hindi-class9-grammar-complete-mastery.html';
      return;
    }
    onSelectBookPart(book.id, book.title, book.bookCode);
  };

  return (
    <div style={{
      maxWidth: viewMode === 'large' ? '860px' : '720px',
      margin: '0.5rem auto 2rem',
      padding: '0 8px',
      transition: 'max-width 0.25s ease'
    }}>
      
      {/* Top Header Bar Matching docs/image.png */}
      <div style={{
        background: 'var(--bg-hover)',
        color: 'var(--text-primary)',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        marginBottom: '1.25rem',
        boxShadow: 'var(--shadow-card)',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {/* Left: Back & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            onClick={onBackToSubjects}
            title="Back to All Subjects"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4f46e5';
              e.currentTarget.style.color = '#4f46e5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <ArrowLeft size={18} />
          </button>

          <div>
            <h1 style={{
              fontSize: '1.18rem',
              fontWeight: 900,
              margin: 0,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)'
            }}>
              {subject.name} Textbooks
            </h1>
            <span style={{ fontSize: '0.72rem', color: '#6366f1', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              NCERT TEXTBOOKS &amp; SOLUTIONS
            </span>
          </div>
        </div>

        {/* Right Action Controls: View Switcher Pill & 2026-27 Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* View Mode Switcher Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.35)',
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            padding: '2px',
            gap: '2px'
          }}>
            <button
              type="button"
              onClick={() => handleSetViewMode('list')}
              title="List View"
              aria-label="List View"
              style={{
                background: viewMode === 'list' ? '#4f46e5' : 'transparent',
                color: viewMode === 'list' ? '#ffffff' : 'var(--text-muted)',
                border: 'none',
                borderRadius: '7px',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <List size={16} />
            </button>
            <button
              type="button"
              onClick={() => handleSetViewMode('tiles')}
              title="Tiles View"
              aria-label="Tiles View"
              style={{
                background: viewMode === 'tiles' ? '#4f46e5' : 'transparent',
                color: viewMode === 'tiles' ? '#ffffff' : 'var(--text-muted)',
                border: 'none',
                borderRadius: '7px',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <LayoutGrid size={15} />
            </button>
            <button
              type="button"
              onClick={() => handleSetViewMode('large')}
              title="Large View"
              aria-label="Large View"
              style={{
                background: viewMode === 'large' ? '#4f46e5' : 'transparent',
                color: viewMode === 'large' ? '#ffffff' : 'var(--text-muted)',
                border: 'none',
                borderRadius: '7px',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Maximize2 size={15} />
            </button>
          </div>

          {/* 2026-27 Badge Pill */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 9px',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            color: '#818cf8',
            fontSize: '0.7rem',
            fontWeight: 900,
            letterSpacing: '0.03em'
          }}>
            <Sparkles size={11} style={{ color: '#818cf8' }} />
            2026–27
          </span>

          {/* Bookmark Subject Button */}
          {onToggleBookmarkSubject && (
            <button
              onClick={() => onToggleBookmarkSubject(subject)}
              title={isBookmarked ? "Bookmarked Subject" : "Bookmark Subject"}
              style={{
                background: isBookmarked ? 'rgba(79, 70, 229, 0.2)' : 'var(--bg-card)',
                border: isBookmarked ? '1px solid #4f46e5' : '1px solid var(--border-color)',
                color: isBookmarked ? '#4f46e5' : 'var(--text-muted)',
                borderRadius: '10px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Bookmark size={16} fill={isBookmarked ? '#4f46e5' : 'none'} />
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Subject Selection Tabs */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '8px',
        marginBottom: '1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {allClassSubjects.map((s) => {
          const isSelected = s.id === subject.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelectSubject(s)}
              style={{
                padding: '7px 16px',
                borderRadius: '8px',
                border: isSelected ? '1px solid #4f46e5' : '1px solid rgba(255, 255, 255, 0.08)',
                background: isSelected ? 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)' : 'rgba(255, 255, 255, 0.04)',
                color: isSelected ? '#ffffff' : '#94a3b8',
                fontWeight: 800,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              {s.name}
            </button>
          );
        })}
      </div>

      {/* 1. LIST VIEW */}
      {viewMode === 'list' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {bookParts.map((book) => {
            const coverImg = getCoverImage(subject.id, book.id);
            return (
              <div
                key={book.id}
                onClick={() => handleBookClick(book)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '14px',
                  padding: '10px 14px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  gap: '12px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4f46e5';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(79, 70, 229, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                  <div style={{
                    width: '42px',
                    height: '54px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: book.coverBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative'
                  }}>
                    {coverImg ? (
                      <img src={coverImg} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <BookOpen size={20} color="#ffffff" />
                    )}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 900,
                        color: '#4f46e5',
                        background: 'rgba(79, 70, 229, 0.12)',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}>
                        {book.bookCode.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                        {book.tag}
                      </span>
                    </div>
                    <div style={{
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {book.title}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn"
                  style={{
                    background: 'rgba(79, 70, 229, 0.12)',
                    border: '1px solid rgba(79, 70, 229, 0.35)',
                    color: '#4f46e5',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    flexShrink: 0,
                    cursor: 'pointer'
                  }}
                >
                  Explore →
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. TILES GRID VIEW (Standard default) */}
      {viewMode === 'tiles' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px'
        }}>
          {bookParts.map((book) => {
            const coverImg = getCoverImage(subject.id, book.id);
            return (
              <div
                key={book.id}
                onClick={() => handleBookClick(book)}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#121d27',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#4f46e5';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.5), 0 0 20px rgba(79, 70, 229, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
                }}
              >
                {/* Book Cover Banner */}
                <div style={{
                  height: '190px',
                  background: book.coverBg,
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  borderLeft: '4px solid rgba(255, 255, 255, 0.4)'
                }}>
                  {/* Spine shadow groove */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 100%)',
                    zIndex: 3,
                    pointerEvents: 'none'
                  }} />

                  {coverImg ? (
                    <>
                      <img
                        src={coverImg}
                        alt={book.title}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.88) 100%)'
                      }} />
                      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{
                          fontSize: '0.68rem',
                          fontWeight: 900,
                          background: 'rgba(0,0,0,0.75)',
                          color: '#4f46e5',
                          border: '1px solid rgba(79, 70, 229, 0.4)',
                          padding: '3px 8px',
                          borderRadius: '9999px',
                          backdropFilter: 'blur(4px)',
                          textTransform: 'uppercase'
                        }}>
                          {book.tag}
                        </span>
                        <span style={{
                          fontSize: '0.62rem',
                          fontWeight: 900,
                          color: '#fde047',
                          background: 'rgba(0,0,0,0.6)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          textTransform: 'uppercase'
                        }}>
                          NCERT
                        </span>
                      </div>

                      <div style={{ position: 'relative', zIndex: 2, fontWeight: 900, fontSize: '1.05rem', color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                        {book.title}
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{
                          fontSize: '0.68rem',
                          fontWeight: 900,
                          background: 'rgba(0,0,0,0.5)',
                          color: '#4f46e5',
                          border: '1px solid rgba(79, 70, 229, 0.4)',
                          padding: '3px 8px',
                          borderRadius: '9999px',
                          textTransform: 'uppercase'
                        }}>
                          {book.tag}
                        </span>
                        <span style={{
                          fontSize: '0.62rem',
                          fontWeight: 900,
                          color: '#fde047',
                          background: 'rgba(0,0,0,0.5)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          textTransform: 'uppercase'
                        }}>
                          NCERT • {book.bookCode.toUpperCase()}
                        </span>
                      </div>

                      <div style={{ fontWeight: 900, fontSize: '1.25rem', color: '#ffffff', lineHeight: 1.15, textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
                        {book.title}
                      </div>
                    </>
                  )}
                </div>

                {/* Book Title Label */}
                <div style={{
                  padding: '14px 16px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  color: '#ffffff',
                  background: '#121d27',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>{book.title}</span>
                  <span style={{ color: '#4f46e5', fontSize: '0.78rem', fontWeight: 800 }}>Explore →</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 3. LARGE SHOWCASE VIEW */}
      {viewMode === 'large' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {bookParts.map((book) => {
            const coverImg = getCoverImage(subject.id, book.id);
            return (
              <div
                key={book.id}
                onClick={() => handleBookClick(book)}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4f46e5';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(79, 70, 229, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                }}
              >
                <div style={{
                  height: '220px',
                  background: book.coverBg,
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {coverImg && (
                    <img
                      src={coverImg}
                      alt={book.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  )}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.92) 100%)'
                  }} />

                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      background: 'rgba(0,0,0,0.75)',
                      color: '#4f46e5',
                      border: '1px solid rgba(79, 70, 229, 0.4)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backdropFilter: 'blur(4px)',
                      textTransform: 'uppercase'
                    }}>
                      {book.tag}
                    </span>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 900,
                      color: '#fde047',
                      background: 'rgba(0,0,0,0.7)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      textTransform: 'uppercase'
                    }}>
                      Official NCERT Edition
                    </span>
                  </div>

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                      {book.title}
                    </h2>
                  </div>
                </div>

                <div style={{
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-card)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      color: '#4f46e5',
                      background: 'rgba(79, 70, 229, 0.12)',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}>
                      Code: {book.bookCode.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Complete Solved Chapters &amp; Notes
                    </span>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      padding: '8px 18px',
                      fontSize: '0.84rem',
                      fontWeight: 800,
                      borderRadius: '10px'
                    }}
                  >
                    Open Textbook →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick Direct Cloud Drive PDF Access Card */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a
          href={SHARED_NCERT_DRIVE_FOLDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(79, 70, 229, 0.1)',
            border: '1px solid rgba(79, 70, 229, 0.3)',
            color: '#4f46e5',
            padding: '10px 20px',
            borderRadius: '9999px',
            fontWeight: 800,
            fontSize: '0.84rem',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#4f46e5';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(79, 70, 229, 0.1)';
            e.currentTarget.style.color = '#4f46e5';
          }}
        >
          <FolderOpen size={16} />
          <span>Access All NCERT Books on Google Drive ↗</span>
        </a>
      </div>

    </div>
  );
};
