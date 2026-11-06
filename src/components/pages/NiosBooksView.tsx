import React, { useState, useMemo } from 'react';
import { ArrowLeft, BookOpen, ExternalLink, ArrowRight, Search, Sparkles } from 'lucide-react';

interface NiosBooksViewProps {
  onBack: () => void;
  onOpenPdfReader?: (chapterUrl: string, title: string) => void;
}

type NiosStageFilter = 'ALL' | 'SENIOR' | 'SECONDARY';

interface NiosCourseItem {
  code: string;
  title: string;
  standard: string;
  stageGroup: 'SENIOR' | 'SECONDARY';
  modules: string;
  chaptersCount: string;
  icon: string;
  coverGradient: string;
  badge: string;
  badgeColor: string;
  pdfUrl: string;
  directLink?: string;
  actionLinks?: {
    label: string;
    url: string;
    bg: string;
    border: string;
    color: string;
  }[];
}

const Nios3DBookCover: React.FC<{
  code: string;
  title: string;
  standard: string;
  icon: string;
  coverGradient: string;
  badgeColor: string;
}> = ({ code, title, standard, icon, coverGradient }) => {
  const isSecondary = standard.includes('Class 10') || standard.includes('Secondary');
  const cleanTitle = title.split('•')[0].replace(/\(\d+\)/, '').trim();

  return (
    <div
      style={{
        width: '92px',
        height: '118px',
        borderRadius: '3px 8px 8px 3px',
        background: coverGradient,
        boxShadow: '0 8px 18px rgba(0, 0, 0, 0.45), inset 4px 0 8px rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.22)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '7px 8px',
        color: '#ffffff',
        overflow: 'hidden',
        userSelect: 'none',
        flexShrink: 0
      }}
    >
      {/* 3D Book Spine Left Shadow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '6px',
          background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(255,255,255,0.18) 50%, rgba(0,0,0,0.3) 100%)',
          borderRight: '1px solid rgba(255,255,255,0.12)'
        }}
      />

      {/* Top Header: NIOS Emblem */}
      <div style={{ paddingLeft: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.55rem', fontWeight: 900, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#fde68a' }}>
          NIOS
        </span>
        <span style={{ fontSize: '0.5rem', fontWeight: 800, background: 'rgba(0,0,0,0.35)', padding: '1px 4px', borderRadius: '3px', color: '#ffffff' }}>
          {isSecondary ? '10th' : '12th'}
        </span>
      </div>

      {/* Center Icon & Title */}
      <div style={{ paddingLeft: '6px', textAlign: 'center', margin: 'auto 0' }}>
        <div style={{ fontSize: '1.55rem', lineHeight: 1, filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.4))' }}>
          {icon}
        </div>
        <div style={{
          fontSize: '0.68rem',
          fontWeight: 900,
          lineHeight: 1.15,
          marginTop: '4px',
          color: '#ffffff',
          textShadow: '0 1px 3px rgba(0,0,0,0.7)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {cleanTitle}
        </div>
      </div>

      {/* Bottom Code Tag */}
      <div style={{ paddingLeft: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{
          fontSize: '0.52rem',
          fontWeight: 800,
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '1px 5px',
          borderRadius: '3px',
          color: '#e2e8f0',
          letterSpacing: '0.3px',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          {code.replace('NIOS-', '')}
        </span>
      </div>
    </div>
  );
};

export const NiosBooksView: React.FC<NiosBooksViewProps> = ({ onBack }) => {
  const [stageFilter, setStageFilter] = useState<NiosStageFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const niosCourses: NiosCourseItem[] = [
    // ── 1. SENIOR SECONDARY (CLASS 12) ──
    {
      code: 'NIOS-CHEM-313',
      title: 'Chemistry (313) • Lesson 26 Hydrocarbons',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Organic Chemistry: Alkanes, Alkenes, Alkynes & Benzene SEAr (24-Page Coverage)',
      chaptersCount: '32 Chapters',
      icon: '🧪',
      coverGradient: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #064e3b 100%)',
      badge: 'Interactive Lab & Test',
      badgeColor: '#10b981',
      pdfUrl: '/nios_313_l26.pdf',
      directLink: '/?view=hydrocarbons-test',
      actionLinks: [
        {
          label: '🧪 Lesson 26: Hydrocarbons 20-Q Lab & Timed Test',
          url: '/?view=hydrocarbons-test',
          bg: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.4)',
          color: '#10b981'
        },
        {
          label: '📄 Lesson 26: Official 24-Page Textbook PDF',
          url: '/nios_313_l26.pdf',
          bg: 'rgba(79, 70, 229, 0.1)',
          border: 'rgba(79, 70, 229, 0.35)',
          color: '#4f46e5'
        }
      ]
    },
    {
      code: 'NIOS-PHY-312',
      title: 'Physics (312)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Mechanics, Thermal Physics, Wave Optics, Electrostatics, Magnetism & Semiconductors',
      chaptersCount: '30 Chapters',
      icon: '⚡',
      coverGradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #172554 100%)',
      badge: 'Sr. Secondary Core',
      badgeColor: '#3b82f6',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/physics-(312)-syllabus.aspx',
      directLink: '/physics-ch6-electromagnetic-induction-notes-and-numericals.html',
      actionLinks: [
        {
          label: '⚡ Ch 6: Electromagnetic Induction Numericals Lab',
          url: '/physics-ch6-electromagnetic-induction-notes-and-numericals.html',
          bg: 'rgba(59, 130, 246, 0.12)',
          border: 'rgba(59, 130, 246, 0.35)',
          color: '#3b82f6'
        },
        {
          label: '🔌 Ch 7: Alternating Current Fill-in-the-Blanks',
          url: '/physics-ch7-alternating-current-fill-in-the-blanks.html',
          bg: 'rgba(168, 85, 247, 0.12)',
          border: 'rgba(168, 85, 247, 0.35)',
          color: '#a855f7'
        }
      ]
    },
    {
      code: 'NIOS-MATH-311',
      title: 'Mathematics (311)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Sets & Relations, Trigonometry, Calculus, Vectors & 3D, Matrices, Linear Programming',
      chaptersCount: '38 Chapters',
      icon: '📐',
      coverGradient: 'linear-gradient(135deg, #075985 0%, #0284c7 50%, #082f49 100%)',
      badge: 'Sr. Secondary Core',
      badgeColor: '#0284c7',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/mathematics-(311)-syllabus.aspx',
      directLink: '/class11-maths-permutations-combinations-ch6-difficult-questions.html',
      actionLinks: [
        {
          label: '📐 Permutations & Combinations Challenging Numericals',
          url: '/class11-maths-permutations-combinations-ch6-difficult-questions.html',
          bg: 'rgba(2, 132, 199, 0.12)',
          border: 'rgba(2, 132, 199, 0.35)',
          color: '#0284c7'
        },
        {
          label: '🌐 Open Official NIOS 311 Modules Portal ↗',
          url: 'https://nios.ac.in/online-course-material/sr-secondary-courses/mathematics-(311)-syllabus.aspx',
          bg: 'rgba(79, 70, 229, 0.1)',
          border: 'rgba(79, 70, 229, 0.35)',
          color: '#4f46e5'
        }
      ]
    },
    {
      code: 'NIOS-BIO-314',
      title: 'Biology (314)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Diversity, Cell Biology, Plant & Animal Physiology, Genetics, Biotechnology & Ecology',
      chaptersCount: '31 Chapters',
      icon: '🦠',
      coverGradient: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #022c22 100%)',
      badge: 'Sr. Secondary Core',
      badgeColor: '#059669',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/biology-(314)-syllabus.aspx',
      directLink: '/class12-biology-ch8-microbes-kids-edition.html',
      actionLinks: [
        {
          label: '🦠 Ch 8: Microbes in Human Welfare Visual Lab',
          url: '/class12-biology-ch8-microbes-kids-edition.html',
          bg: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.35)',
          color: '#10b981'
        }
      ]
    },
    {
      code: 'NIOS-ACC-320',
      title: 'Accountancy (320)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Financial Accounting Principles, Partnership Accounts, Company Accounts, Cash Flow Analysis',
      chaptersCount: '32 Chapters',
      icon: '📒',
      coverGradient: 'linear-gradient(135deg, #78350f 0%, #d97706 50%, #451a03 100%)',
      badge: 'Commerce Core',
      badgeColor: '#d97706',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/accountancy-(320)-syllabus.aspx',
      directLink: '/?view=ts-grewal',
      actionLinks: [
        {
          label: '💼 Accounting Equation & Transaction Recording Matrix',
          url: '/?view=ts-grewal',
          bg: 'rgba(245, 158, 11, 0.12)',
          border: 'rgba(245, 158, 11, 0.35)',
          color: '#d97706'
        },
        {
          label: '📒 Ch 3: Recording Transactions 10 Sets Numericals',
          url: '/financial-accounting-ch3-notes-and-numericals.html',
          bg: 'rgba(79, 70, 229, 0.1)',
          border: 'rgba(79, 70, 229, 0.35)',
          color: '#4f46e5'
        }
      ]
    },
    {
      code: 'NIOS-BST-319',
      title: 'Business Studies (319)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Principles of Management, Business Finance, Marketing Management & Consumer Protection',
      chaptersCount: '28 Chapters',
      icon: '🏬',
      coverGradient: 'linear-gradient(135deg, #831843 0%, #db2777 50%, #500724 100%)',
      badge: 'Commerce Core',
      badgeColor: '#db2777',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/business-studies-(319)-syllabus.aspx',
      directLink: 'https://nios.ac.in/online-course-material/sr-secondary-courses/business-studies-(319)-syllabus.aspx',
      actionLinks: [
        {
          label: '🏢 Open Official NIOS 319 Portal ↗',
          url: 'https://nios.ac.in/online-course-material/sr-secondary-courses/business-studies-(319)-syllabus.aspx',
          bg: 'rgba(219, 39, 119, 0.1)',
          border: 'rgba(219, 39, 119, 0.35)',
          color: '#db2777'
        }
      ]
    },
    {
      code: 'NIOS-ECON-318',
      title: 'Economics (318)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Microeconomics, Macroeconomics, Money & Banking, Indian Economic Development',
      chaptersCount: '30 Chapters',
      icon: '💰',
      coverGradient: 'linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #3b0764 100%)',
      badge: 'Commerce & Arts',
      badgeColor: '#7c3aed',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/economics-(318)-syllabus.aspx',
      directLink: '/?view=stats-test',
      actionLinks: [
        {
          label: '📊 Statistics for Economics Competency Test Suite',
          url: '/?view=stats-test',
          bg: 'rgba(124, 58, 237, 0.12)',
          border: 'rgba(124, 58, 237, 0.35)',
          color: '#7c3aed'
        }
      ]
    },
    {
      code: 'NIOS-CS-330',
      title: 'Computer Science (330)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Computer Fundamentals, C++ OOP, Data Structures, Relational DBMS & Networking',
      chaptersCount: '28 Units',
      icon: '💻',
      coverGradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #0f172a 100%)',
      badge: 'Practical & Coding',
      badgeColor: '#2563eb',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/computer-science-(330)-syllabus.aspx'
    },
    {
      code: 'NIOS-DATA-336',
      title: 'Data Entry Operations (336)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Advanced Word Processing, Excel Formulas, MS Access Database & PowerPoint',
      chaptersCount: '10 Units',
      icon: '⌨️',
      coverGradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #0f172a 100%)',
      badge: 'Practical Course',
      badgeColor: '#4338ca',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/data-entry-operations-(336)-syllabus.aspx',
      directLink: 'https://nios.ac.in/online-course-material/sr-secondary-courses/data-entry-operations-(336)-syllabus.aspx',
      actionLinks: [
        {
          label: '🖥️ Open Official NIOS 336 Portal ↗',
          url: 'https://nios.ac.in/online-course-material/sr-secondary-courses/data-entry-operations-(336)-syllabus.aspx',
          bg: 'rgba(79, 70, 229, 0.1)',
          border: 'rgba(79, 70, 229, 0.35)',
          color: '#4f46e5'
        }
      ]
    },
    {
      code: 'NIOS-HIST-315',
      title: 'History (315)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Ancient Civilizations, Medieval World, Colonialism & National Liberation Movement',
      chaptersCount: '32 Chapters',
      icon: '📜',
      coverGradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #431407 100%)',
      badge: 'Humanities Core',
      badgeColor: '#ea580c',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/history-(315)-syllabus.aspx',
      directLink: '/?view=history-test',
      actionLinks: [
        {
          label: '📜 History Line-by-Line MCQ Competency Test',
          url: '/?view=history-test',
          bg: 'rgba(234, 88, 12, 0.12)',
          border: 'rgba(234, 88, 12, 0.35)',
          color: '#ea580c'
        }
      ]
    },
    {
      code: 'NIOS-POL-317',
      title: 'Political Science (317)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Individual & State, Indian Constitution, Democratic Organs, Global Politics & UN',
      chaptersCount: '32 Chapters',
      icon: '🏛️',
      coverGradient: 'linear-gradient(135deg, #134e4a 0%, #0d9488 50%, #042f2e 100%)',
      badge: 'Humanities Core',
      badgeColor: '#047857',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/political-science-(317)-syllabus.aspx',
      directLink: 'https://nios.ac.in/online-course-material/sr-secondary-courses/political-science-(317)-syllabus.aspx',
      actionLinks: [
        {
          label: '🏛️ Open Official NIOS 317 Portal ↗',
          url: 'https://nios.ac.in/online-course-material/sr-secondary-courses/political-science-(317)-syllabus.aspx',
          bg: 'rgba(4, 120, 87, 0.1)',
          border: 'rgba(4, 120, 87, 0.35)',
          color: '#047857'
        }
      ]
    },
    {
      code: 'NIOS-ENG-302',
      title: 'English (302)',
      standard: 'Senior Secondary (Class 12)',
      stageGroup: 'SENIOR',
      modules: 'Reading Comprehension, Advanced Writing, English for Office & Literature',
      chaptersCount: '30 Chapters',
      icon: '📖',
      coverGradient: 'linear-gradient(135deg, #312e81 0%, #4f46e5 50%, #1e1b4b 100%)',
      badge: 'Language Core',
      badgeColor: '#4f46e5',
      pdfUrl: 'https://nios.ac.in/online-course-material/sr-secondary-courses/english-(302)-syllabus.aspx',
      directLink: 'https://nios.ac.in/online-course-material/sr-secondary-courses/english-(302)-syllabus.aspx',
      actionLinks: [
        {
          label: '📖 Open Official NIOS 302 Modules ↗',
          url: 'https://nios.ac.in/online-course-material/sr-secondary-courses/english-(302)-syllabus.aspx',
          bg: 'rgba(79, 70, 229, 0.1)',
          border: 'rgba(79, 70, 229, 0.35)',
          color: '#4f46e5'
        }
      ]
    },

    // ── 2. SECONDARY (CLASS 10) ──
    {
      code: 'NIOS-MATH-211',
      title: 'Mathematics (211)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'Modules 1 to 6 (Algebra, Commercial Math, Geometry, Mensuration, Trigonometry, Statistics)',
      chaptersCount: '26 Chapters',
      icon: '🔢',
      coverGradient: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #172554 100%)',
      badge: 'Secondary Core',
      badgeColor: '#1e40af',
      pdfUrl: 'https://nios.ac.in/online-course-material/secondary-courses/mathematics-(211)-syllabus.aspx',
      directLink: '/nios-math-ch1-number-systems-fill-in-the-blanks.html',
      actionLinks: [
        {
          label: '🔢 Ch 1: Number Systems Fill-in-the-Blanks',
          url: '/nios-math-ch1-number-systems-fill-in-the-blanks.html',
          bg: 'rgba(245, 158, 11, 0.12)',
          border: 'rgba(245, 158, 11, 0.35)',
          color: '#d97706'
        },
        {
          label: '🧮 Ch 1: Pure Numericals Calculation Lab',
          url: '/nios-math-ch1-numericals-only-fill-in-the-blanks.html',
          bg: 'rgba(79, 70, 229, 0.12)',
          border: 'rgba(79, 70, 229, 0.35)',
          color: '#4f46e5'
        }
      ]
    },
    {
      code: 'NIOS-SCI-212',
      title: 'Science and Technology (212)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'Physics, Chemistry, Life Sciences, Energy & Natural Resources',
      chaptersCount: '32 Chapters',
      icon: '🔬',
      coverGradient: 'linear-gradient(135deg, #065f46 0%, #10b981 50%, #022c22 100%)',
      badge: 'Secondary Core',
      badgeColor: '#10b981',
      pdfUrl: 'https://nios.ac.in/online-course-material/secondary-courses/science-and-technology-(212)-syllabus.aspx',
      actionLinks: [
        {
          label: '🔬 Open Official NIOS Science Modules Portal ↗',
          url: 'https://nios.ac.in/online-course-material/secondary-courses/science-and-technology-(212)-syllabus.aspx',
          bg: 'rgba(79, 70, 229, 0.1)',
          border: 'rgba(79, 70, 229, 0.35)',
          color: '#4f46e5'
        }
      ]
    },
    {
      code: 'NIOS-SOC-213',
      title: 'Social Science (213)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'Ancient & Medieval India, Heritage, Governance & Contemporary Society',
      chaptersCount: '27 Chapters',
      icon: '📜',
      coverGradient: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #431407 100%)',
      badge: 'Secondary Core',
      badgeColor: '#9a3412',
      pdfUrl: 'https://nios.ac.in/online-course-material/secondary-courses/social-science-(213)-syllabus.aspx'
    },
    {
      code: 'NIOS-DATA-229',
      title: 'Data Entry Operations (229)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'Basics of Computer, Word Processing, Spreadsheets & PowerPoint',
      chaptersCount: '9 Practical Units',
      icon: '💻',
      coverGradient: 'linear-gradient(135deg, #312e81 0%, #4f46e5 50%, #1e1b4b 100%)',
      badge: 'Practical Course',
      badgeColor: '#3730a3',
      pdfUrl: 'https://nios.ac.in/online-course-material/secondary-courses/data-entry-operations-(229)-syllabus.aspx'
    },
    {
      code: 'NIOS-ECON-214',
      title: 'Economics (214)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'Understanding the Economy, Production, Money & Banking, Consumer Rights',
      chaptersCount: '24 Chapters',
      icon: '💰',
      coverGradient: 'linear-gradient(135deg, #581c87 0%, #9333ea 50%, #3b0764 100%)',
      badge: 'Secondary Subject',
      badgeColor: '#7c3aed',
      pdfUrl: 'https://nios.ac.in/online-course-material/secondary-courses/economics-(214)-syllabus.aspx',
      directLink: 'https://nios.ac.in/online-course-material/secondary-courses/economics-(214)-syllabus.aspx',
      actionLinks: [
        {
          label: '💰 Open Official NIOS 214 Portal ↗',
          url: 'https://nios.ac.in/online-course-material/secondary-courses/economics-(214)-syllabus.aspx',
          bg: 'rgba(124, 58, 237, 0.1)',
          border: 'rgba(124, 58, 237, 0.35)',
          color: '#7c3aed'
        }
      ]
    },
    {
      code: 'NIOS-BST-215',
      title: 'Business Studies (215)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'Introduction to Business, Business Activities, Trade & Support Services',
      chaptersCount: '22 Chapters',
      icon: '🏬',
      coverGradient: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #451a03 100%)',
      badge: 'Secondary Subject',
      badgeColor: '#b45309',
      pdfUrl: 'https://nios.ac.in/online-course-material/secondary-courses/business-studies-(215)-syllabus.aspx',
      directLink: 'https://nios.ac.in/online-course-material/secondary-courses/business-studies-(215)-syllabus.aspx',
      actionLinks: [
        {
          label: '🏬 Open Official NIOS 215 Portal ↗',
          url: 'https://nios.ac.in/online-course-material/secondary-courses/business-studies-(215)-syllabus.aspx',
          bg: 'rgba(245, 158, 11, 0.1)',
          border: 'rgba(245, 158, 11, 0.35)',
          color: '#d97706'
        }
      ]
    },
    {
      code: 'NIOS-HSCI-216',
      title: 'Home Science (216)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'Food & Nutrition, Resource Management, Human Development, Textiles',
      chaptersCount: '22 Chapters',
      icon: '🏡',
      coverGradient: 'linear-gradient(135deg, #881337 0%, #e11d48 50%, #4c0519 100%)',
      badge: 'Secondary Subject',
      badgeColor: '#e11d48',
      pdfUrl: 'https://nios.ac.in/online-course-material/secondary-courses/home-science-(216)-syllabus.aspx',
      directLink: 'https://nios.ac.in/online-course-material/secondary-courses/home-science-(216)-syllabus.aspx',
      actionLinks: [
        {
          label: '🏡 Open Official NIOS 216 Portal ↗',
          url: 'https://nios.ac.in/online-course-material/secondary-courses/home-science-(216)-syllabus.aspx',
          bg: 'rgba(225, 29, 72, 0.1)',
          border: 'rgba(225, 29, 72, 0.35)',
          color: '#e11d48'
        }
      ]
    },
    {
      code: 'NIOS-ENG-202',
      title: 'English (202)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'Reading Comprehension, Writing Skills, Grammar & Selected Literature',
      chaptersCount: '27 Chapters • Lesson 1 Practice Active',
      icon: '📖',
      coverGradient: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #0f172a 100%)',
      badge: 'Language Core',
      badgeColor: '#4f46e5',
      pdfUrl: '/pdf/NIOS/Secondary/L_1.pdf',
      directLink: '/nios-class10-english-202-lesson1-snake-bite-questions.html',
      actionLinks: [
        {
          label: '🐍 Lesson 1: Snake Bite (Complete Question Bank & Quiz)',
          url: '/nios-class10-english-202-lesson1-snake-bite-questions.html',
          bg: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.4)',
          color: '#10b981'
        },
        {
          label: '📄 View Official Lesson 1 PDF (L_1.pdf)',
          url: '/pdf/NIOS/Secondary/L_1.pdf',
          bg: 'rgba(56, 189, 248, 0.1)',
          border: 'rgba(56, 189, 248, 0.35)',
          color: '#38bdf8'
        },
        {
          label: '📖 Open Official NIOS 202 Portal ↗',
          url: 'https://nios.ac.in/online-course-material/secondary-courses/english-(202)-syllabus.aspx',
          bg: 'rgba(79, 70, 229, 0.1)',
          border: 'rgba(79, 70, 229, 0.35)',
          color: '#4f46e5'
        }
      ]
    },
    {
      code: 'NIOS-HIN-201',
      title: 'Hindi (201)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'गद्य खंड, पद्य खंड, व्यावहारिक व्याकरण एवं पत्र लेखन',
      chaptersCount: '22 पाठ',
      icon: '📚',
      coverGradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #022c22 100%)',
      badge: 'Language Core',
      badgeColor: '#059669',
      pdfUrl: 'https://nios.ac.in/online-course-material/secondary-courses/hindi-(201)-syllabus.aspx',
      directLink: 'https://nios.ac.in/online-course-material/secondary-courses/hindi-(201)-syllabus.aspx',
      actionLinks: [
        {
          label: '📚 Open Official NIOS 201 Portal ↗',
          url: 'https://nios.ac.in/online-course-material/secondary-courses/hindi-(201)-syllabus.aspx',
          bg: 'rgba(16, 185, 129, 0.1)',
          border: 'rgba(16, 185, 129, 0.35)',
          color: '#10b981'
        }
      ]
    },
    {
      code: 'NIOS-ACC-224',
      title: 'Accountancy (224)',
      standard: 'Secondary (Class 10)',
      stageGroup: 'SECONDARY',
      modules: 'Basic Accounting Principles, Journal, Ledger, Trial Balance & Statements',
      chaptersCount: '24 Chapters',
      icon: '📊',
      coverGradient: 'linear-gradient(135deg, #713f12 0%, #ca8a04 50%, #422006 100%)',
      badge: 'Secondary Subject',
      badgeColor: '#b45309',
      pdfUrl: 'https://nios.ac.in/online-course-material/secondary-courses/accountancy-(224)-syllabus.aspx',
      directLink: '/journal-to-ledger-posting.html',
      actionLinks: [
        {
          label: '📊 Journal to Ledger Posting Interactive Practice',
          url: '/journal-to-ledger-posting.html',
          bg: 'rgba(245, 158, 11, 0.12)',
          border: 'rgba(245, 158, 11, 0.35)',
          color: '#d97706'
        },
        {
          label: '💼 Open Official NIOS 224 Portal ↗',
          url: 'https://nios.ac.in/online-course-material/secondary-courses/accountancy-(224)-syllabus.aspx',
          bg: 'rgba(245, 158, 11, 0.1)',
          border: 'rgba(245, 158, 11, 0.35)',
          color: '#b45309'
        }
      ]
    }
  ];

  const filteredCourses = useMemo(() => {
    return niosCourses.filter((course) => {
      if (stageFilter !== 'ALL' && course.stageGroup !== stageFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = course.title.toLowerCase().includes(q);
        const matchCode = course.code.toLowerCase().includes(q);
        const matchStandard = course.standard.toLowerCase().includes(q);
        const matchModules = course.modules.toLowerCase().includes(q);
        return matchTitle || matchCode || matchStandard || matchModules;
      }
      return true;
    });
  }, [stageFilter, searchQuery]);

  return (
    <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0.25rem 0.5rem 3rem', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
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
        boxShadow: 'var(--shadow-card)',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            onClick={onBack}
            title="Go Back"
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
              e.currentTarget.style.borderColor = '#d97706';
              e.currentTarget.style.color = '#d97706';
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
              NIOS Textbooks &amp; Practice
            </h1>
            <span style={{ fontSize: '0.72rem', color: '#d97706', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              NIOS OPEN SCHOOLING • SECONDARY &amp; SR. SECONDARY
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 9px',
            borderRadius: '9999px',
            background: 'rgba(245, 158, 11, 0.14)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            color: '#d97706',
            fontSize: '0.7rem',
            fontWeight: 900,
            letterSpacing: '0.03em'
          }}>
            <Sparkles size={11} style={{ color: '#d97706' }} />
            2026–27
          </span>
        </div>
      </div>

      {/* ── Stage Filter Navigation Pills (Matching NCERT Design) ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '6px',
        padding: '0 2px'
      }}>
        {[
          { id: 'ALL', label: 'All NIOS Courses (10th & 12th)' },
          { id: 'SENIOR', label: 'Senior Secondary (12th)' },
          { id: 'SECONDARY', label: 'Secondary (10th)' }
        ].map((tab) => {
          const isActive = stageFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setStageFilter(tab.id as NiosStageFilter)}
              style={{
                background: isActive ? 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)' : 'var(--bg-card)',
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                border: isActive ? '1px solid #4f46e5' : '1px solid var(--border-color)',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: '0.82rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: isActive ? '0 4px 12px rgba(79, 70, 229, 0.3)' : 'none'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Search Input ── */}
      <div style={{ position: 'relative' }}>
        <Search
          size={16}
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)'
          }}
        />
        <input
          type="text"
          placeholder="Search NIOS courses by code, subject title, or module topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '9px 12px 9px 36px',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            outline: 'none',
            boxShadow: 'var(--shadow-sm)'
          }}
        />
      </div>

      {/* ── Course Cards Grid ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '16px'
      }}>
        {filteredCourses.map((course) => (
          <div
            key={course.code}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-card)',
              transition: 'var(--transition)'
            }}
          >
            {/* Top 3D Book Showcase Area */}
            <div style={{
              height: '140px',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-hover) 100%)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '10px'
            }}>
              <Nios3DBookCover
                code={course.code}
                title={course.title}
                standard={course.standard}
                icon={course.icon}
                coverGradient={course.coverGradient}
                badgeColor={course.badgeColor}
              />
              <span style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: course.badgeColor,
                color: '#ffffff',
                fontSize: '0.68rem',
                fontWeight: 900,
                padding: '3px 8px',
                borderRadius: '6px',
                letterSpacing: '0.02em',
                boxShadow: '0 2px 6px rgba(0,0,0,0.25)'
              }}>
                {course.badge}
              </span>
            </div>

            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px' }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 800 }}>
                  {course.code} • {course.standard}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 900, margin: '4px 0 6px', color: 'var(--text-primary)' }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
                  {course.modules}
                </p>
              </div>

              {/* Main Book Actions */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={course.directLink}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    padding: '9px 12px',
                    borderRadius: '10px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <BookOpen size={15} />
                  <span>Open Course Module</span>
                </a>
                <a
                  href={course.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    padding: '9px 12px',
                    borderRadius: '10px',
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title="Official NIOS Portal PDF"
                >
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Action Deck: Notes, Quizzes & Interactive Fill-ups below PDF */}
              {course.actionLinks && course.actionLinks.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--border-color)', paddingTop: '10px', marginTop: '2px' }}>
                  {course.actionLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      style={{
                        background: link.bg,
                        border: `1px solid ${link.border}`,
                        color: link.color,
                        borderRadius: '8px',
                        padding: '8px 12px',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '6px',
                        textDecoration: 'none',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Sparkles size={13} />
                        {link.label}
                      </span>
                      <ArrowRight size={13} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
