import React, { useState, useMemo } from 'react';
import { ALL_CLASSES_SUMMARY } from '../../data/ncertData';
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Search, 
  BookOpen, 
  ChevronRight
} from 'lucide-react';

interface NcertNotesViewProps {
  onBack: () => void;
  onOpenTsGrewal?: () => void;
  searchQuery?: string;
}

interface ClassBrandMeta {
  roman: string;
  gradient: string;
  glowColor: string;
  stageTag: string;
  stageGroup: 'SENIOR' | 'SECONDARY' | 'MIDDLE' | 'PRIMARY';
  popularLabel?: string;
  streams?: string[];
  notesCount: number;
}

// Nextsem Signature Luxury Jewel Palette (Clean contrast in both Light & Dark modes - matching ClassGrid.tsx)
const NEXTSEM_CLASS_PALETTE: Record<number, ClassBrandMeta> = {
  12: { 
    roman: 'XII',  
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)', 
    glowColor: 'rgba(79, 70, 229, 0.4)', 
    stageTag: 'CBSE Board 2026–27', 
    stageGroup: 'SENIOR',
    popularLabel: '🔥 High Demand',
    streams: ['Science', 'Commerce', 'Arts'],
    notesCount: 5
  },
  11: { 
    roman: 'XI',   
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', 
    glowColor: 'rgba(2, 132, 199, 0.4)', 
    stageTag: 'Senior Secondary', 
    stageGroup: 'SENIOR',
    popularLabel: '💼 Commerce & T.S. Grewal',
    streams: ['Commerce', 'Science', 'Humanities'],
    notesCount: 4
  },
  10: { 
    roman: 'X',    
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
    glowColor: 'rgba(245, 158, 11, 0.4)', 
    stageTag: 'CBSE AISSE Board', 
    stageGroup: 'SECONDARY',
    popularLabel: '🏆 Top Rated',
    streams: ['Maths', 'Science', 'SST'],
    notesCount: 3
  },
  9:  { 
    roman: 'IX',   
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', 
    glowColor: 'rgba(139, 92, 246, 0.4)', 
    stageTag: 'Secondary Stage', 
    stageGroup: 'SECONDARY',
    streams: ['Maths', 'Science', 'English'],
    notesCount: 2
  },
  8:  { 
    roman: 'VIII', 
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', 
    glowColor: 'rgba(236, 72, 153, 0.4)', 
    stageTag: 'Middle School', 
    stageGroup: 'MIDDLE',
    notesCount: 2
  },
  7:  { 
    roman: 'VII',  
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', 
    glowColor: 'rgba(6, 182, 212, 0.4)', 
    stageTag: 'Middle School', 
    stageGroup: 'MIDDLE',
    notesCount: 2
  },
  6:  { 
    roman: 'VI',   
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', 
    glowColor: 'rgba(59, 130, 246, 0.4)', 
    stageTag: 'Middle Stage Entry', 
    stageGroup: 'MIDDLE',
    notesCount: 2
  },
  5:  { 
    roman: 'V',    
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)', 
    glowColor: 'rgba(20, 184, 166, 0.4)', 
    stageTag: 'Preparatory Stage', 
    stageGroup: 'PRIMARY',
    notesCount: 1
  },
  4:  { 
    roman: 'IV',   
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)', 
    glowColor: 'rgba(99, 102, 241, 0.4)', 
    stageTag: 'Preparatory Stage', 
    stageGroup: 'PRIMARY',
    notesCount: 1
  },
  3:  { 
    roman: 'III',  
    gradient: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)', 
    glowColor: 'rgba(2, 132, 199, 0.4)', 
    stageTag: 'Preparatory Stage', 
    stageGroup: 'PRIMARY',
    notesCount: 1
  },
  2:  { 
    roman: 'II',   
    gradient: 'linear-gradient(135deg, #eab308 0%, #a16207 100%)', 
    glowColor: 'rgba(234, 179, 8, 0.4)', 
    stageTag: 'Foundational Stage', 
    stageGroup: 'PRIMARY',
    notesCount: 1
  },
  1:  { 
    roman: 'I',    
    gradient: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)', 
    glowColor: 'rgba(168, 85, 247, 0.4)', 
    stageTag: 'Foundational Stage', 
    stageGroup: 'PRIMARY',
    notesCount: 1
  }
};

type StageFilter = 'ALL' | 'SENIOR' | 'SECONDARY' | 'MIDDLE' | 'PRIMARY';

interface NoteItem {
  id: string;
  classNum: number;
  subject: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  link: string;
  isHot?: boolean;
  isFeatured?: boolean;
  actionType?: 'TS_GREWAL' | 'LINK';
  quickLinks?: { label: string; action?: () => void; link?: string }[];
}

export const NcertNotesView: React.FC<NcertNotesViewProps> = ({ 
  onBack, 
  onOpenTsGrewal,
  searchQuery = ''
}) => {
  const [selectedClassNum, setSelectedClassNum] = useState<number | null>(null);
  const [stageFilter, setStageFilter] = useState<StageFilter>('ALL');
  const [localSearch, setLocalSearch] = useState<string>('');

  const effectiveSearch = (localSearch || searchQuery).toLowerCase().trim();

  // Comprehensive Notes & Solved Studio Registry Organized by Class
  const allNotes: NoteItem[] = useMemo(() => [
    // ── Class 11 Notes & Solved Studios ──
    {
      id: 'ts-grewal-hub',
      classNum: 11,
      subject: 'Accountancy (Financial Accounting)',
      title: 'T.S. Grewal: Double Entry Book Keeping (Class 11 Master Solutions)',
      subtitle: 'Complete 18 Chapters solutions, Two-Column Cash Book (Q5 Solved with Contra Entries & Balancing), Accounting Equation (Q1–Q5), Golden Rules, GST & Final Accounts 10 Master Adjustments.',
      badge: 'T.S. Grewal • 18 Chapters & Q5 Solved',
      badgeBg: 'rgba(2, 132, 199, 0.2)',
      badgeColor: '#0284c7',
      link: '/?view=ts-grewal',
      isHot: true,
      isFeatured: true,
      actionType: 'TS_GREWAL',
      quickLinks: [
        { label: '📑 Q5 Two-Column Cash Book (Pg 10.44)' },
        { label: '📊 Accounting Equation (Q1–Q5)' },
        { label: '📚 18 Chapters Index' },
        { label: '⚡ Cash Book Simulator' }
      ]
    },
    {
      id: 'acc-cash-book-studio',
      classNum: 11,
      subject: 'Accountancy',
      title: 'Financial Accounting: Cash Book Numericals Studio & Simulator',
      subtitle: 'Single column, Two-column (Cash & Bank with Contra), Overdrafts & Imprest Petty Cash calculation bank with live ledger math validation.',
      badge: 'Cash Book Studio',
      badgeBg: 'rgba(21, 128, 61, 0.2)',
      badgeColor: '#22c55e',
      link: '/financial-accounting-cash-book-numericals-studio.html',
      isHot: true,
      actionType: 'TS_GREWAL'
    },
    {
      id: 'stitch-accountancy',
      classNum: 11,
      subject: 'Accountancy & Ledger',
      title: 'Stitch Accountancy & Ledger Studio',
      subtitle: 'Interactive T-Account Posting Simulator, Journal Entries, Trial Balance, and Balance Sheet Equation Workspace.',
      badge: 'Accountancy Studio',
      badgeBg: 'rgba(180, 83, 9, 0.2)',
      badgeColor: '#f59e0b',
      link: '/stitch-accountancy-studio.html',
      actionType: 'TS_GREWAL'
    },
    {
      id: 'math-permutations',
      classNum: 11,
      subject: 'Mathematics',
      title: 'Math Permutations & Combinations Reader',
      subtitle: 'High-fidelity digital reader with factorial derivations, combinatorics theorems, and problem set step-by-step solutions.',
      badge: 'KaTeX Step Reader',
      badgeBg: 'rgba(55, 48, 163, 0.2)',
      badgeColor: '#818cf8',
      link: '/stitch-math-permutations-reader.html'
    },
    {
      id: 'navyug-class11-accountancy-exam',
      classNum: 11,
      subject: 'Accountancy',
      title: 'Navyug School Class 11 Accountancy Mid-Term Solved Exam (80 Marks)',
      subtitle: 'Complete 13-question mid-term solved paper with click-to-reveal solutions, accounting equations, journals, ledger T-accounts, sales book, two-column cash book, and BRS.',
      badge: '80 Marks Solved Paper',
      badgeBg: 'rgba(245, 158, 11, 0.2)',
      badgeColor: '#f59e0b',
      link: '/navyug-class11-accountancy-exam-solutions.html',
      isHot: true
    },

    // ── Class 12 Notes & Solved Studios ──
    {
      id: 'phy-emi-ch6',
      classNum: 12,
      subject: 'Physics',
      title: 'EMI: 10 Master Numericals & Concept Notes',
      subtitle: 'Class 12 Physics Chapter 6 (leph106.pdf) complete formula cheat sheet, Faraday-Lenz derivations and master calculation bank.',
      badge: 'Formula Vault',
      badgeBg: 'rgba(15, 118, 110, 0.2)',
      badgeColor: '#14b8a6',
      link: '/physics-ch6-electromagnetic-induction-notes-and-numericals.html',
      isHot: true
    },
    {
      id: 'phy-ac-tiers',
      classNum: 12,
      subject: 'Physics',
      title: 'Alternating Current (6 Difficulty Tiers)',
      subtitle: 'Comprehensive 7.1 to 7.9 problem bank arranged systematically from foundational phasor diagrams to Olympiad impedance tiers.',
      badge: '6 Tiers Bank',
      badgeBg: 'rgba(154, 52, 18, 0.2)',
      badgeColor: '#f97316',
      link: '/physics-ch7-numericals-easy-to-difficult.html'
    },
    {
      id: 'stitch-dual-pane',
      classNum: 12,
      subject: 'Physics & Math',
      title: 'Stitch Dual-Pane Study Studio',
      subtitle: 'Synchronized Textbook Reading Pane alongside Real-Time Step-by-Step KaTeX Solution Explanations for Class 12 board preparation.',
      badge: 'Dual-Pane Studio',
      badgeBg: 'rgba(20, 83, 45, 0.2)',
      badgeColor: '#4ade80',
      link: '/stitch-dual-pane-studio.html',
      isHot: true
    },
    {
      id: 'stitch-numericals-lab',
      classNum: 12,
      subject: 'Physics & Chemistry',
      title: 'Stitch Numericals Lab & Calculation Validator',
      subtitle: 'Interactive physics and chemistry numerical calculation sandbox with immediate numerical tolerance validation.',
      badge: 'Numericals Lab',
      badgeBg: 'rgba(30, 64, 175, 0.2)',
      badgeColor: '#60a5fa',
      link: '/stitch-numericals-lab.html'
    },
    {
      id: 'c12-acc-partnership',
      classNum: 12,
      subject: 'Accountancy',
      title: 'Class 12 Company Accounts & Partnership Solved Worksheets',
      subtitle: 'Goodwill valuation, forfeiture and reissue of shares, and cash flow statement step-by-step master problems.',
      badge: 'Ledger Studio',
      badgeBg: 'rgba(2, 132, 199, 0.2)',
      badgeColor: '#0284c7',
      link: '/stitch-accountancy-studio.html'
    },

    // ── Class 10 Notes & Solved Studios ──
    {
      id: 'science-10-ch1-difficult-mcq',
      classNum: 10,
      subject: 'Science',
      title: 'Class 10 Science Ch 1: Chemical Reactions (25 Difficult MCQs)',
      subtitle: 'Higher Order Thinking Skills (HOTS) & Competency test covering experimental activities, redox stoichiometry, and photolysis yield.',
      badge: '25 HOTS MCQs',
      badgeBg: 'rgba(30, 64, 175, 0.2)',
      badgeColor: '#60a5fa',
      link: '/class10-science-ch1-chemical-reactions-difficult-mcq.html',
      isHot: true
    },
    {
      id: 'math-10-real-num',
      classNum: 10,
      subject: 'Mathematics',
      title: 'Class 10 Mathematics: Real Numbers & Polynomials Formula Vault',
      subtitle: 'Fundamental Theorem of Arithmetic, irrationality proofs, quadratic polynomials relations, and exemplar solutions.',
      badge: 'Formula Vault',
      badgeBg: 'rgba(245, 158, 11, 0.2)',
      badgeColor: '#f59e0b',
      link: '/stitch-numericals-lab.html'
    },
    {
      id: 'sst-10-notes',
      classNum: 10,
      subject: 'Social Science',
      title: 'Class 10 Social Science: Economics & Nationalism Step Notes',
      subtitle: 'Sectors of the Indian Economy, Globalization, and Rise of Nationalism comprehensive revision cards.',
      badge: 'Revision Sheet',
      badgeBg: 'rgba(16, 185, 129, 0.2)',
      badgeColor: '#10b981',
      link: 'https://ncert.nic.in/textbook.php?jess1=0-5'
    },

    // ── Class 9 Notes & Solved Studios ──
    {
      id: 'math-9-ch1-ganita-manjari-num',
      classNum: 9,
      subject: 'Mathematics',
      title: 'Class 9 Ganita Manjari Ch 1: Coordinate Geometry Numericals',
      subtitle: '17 master calculation problems on Baudhāyana-Pythagoras distance formula, reflections, midpoint, trisection & circle radius.',
      badge: '17 Step Numericals',
      badgeBg: 'rgba(15, 118, 110, 0.2)',
      badgeColor: '#14b8a6',
      link: '/class9-ganita-manjari-ch1-coordinate-geometry-numericals.html',
      isHot: true
    },
    {
      id: 'sci-9-matter',
      classNum: 9,
      subject: 'Science',
      title: 'Class 9 Science: Matter in Our Surroundings & Motion Formulas',
      subtitle: 'State transitions, latent heat, acceleration equations, and graphical motion analysis step problems.',
      badge: 'Formula Sheet',
      badgeBg: 'rgba(139, 92, 246, 0.2)',
      badgeColor: '#8b5cf6',
      link: '/stitch-numericals-lab.html'
    },
    {
      id: 'physics-class9-motion-force-numericals',
      classNum: 9,
      subject: 'Physics',
      title: 'Class 9 Physics: Motion & Force Master Problem Bank',
      subtitle: '25 high-yield numericals and conceptual questions on Distance, Speed, Velocity, Average Speed, Acceleration, and Newton’s Laws (F=ma) with click-to-reveal solutions.',
      badge: '25 Problems Bank',
      badgeBg: 'rgba(6, 182, 212, 0.2)',
      badgeColor: '#06b6d4',
      link: '/class9-physics-motion-force-numericals-questions.html',
      isHot: true
    },
    {
      id: 'science-class9-ch6-how-forces-affect-motion',
      classNum: 9,
      subject: 'Science',
      title: 'Class 9 Science Ch 6: How Forces Affect Motion (Notes & 20 MCQs)',
      subtitle: 'New NCERT Exploration Chapter 6 (iesc106.pdf): Balanced/unbalanced forces, friction, Galileo inertia, Newton 1st, 2nd (F=ma), 3rd law and 20 bilingual MCQs.',
      badge: 'Notes + 20 MCQs',
      badgeBg: 'rgba(16, 185, 129, 0.2)',
      badgeColor: '#10b981',
      link: '/science-class9-ch6-how-forces-affect-motion-notes-mcq.html',
      isHot: true
    },

    // ── Middle & Primary Stage Notes ──
    {
      id: 'mid-8-science-math',
      classNum: 8,
      subject: 'Science & Mathematics',
      title: 'Class 8 Ganita Prakash & Science Curiosity Step Worksheets',
      subtitle: 'Rational numbers, linear equations, cell structure, and light reflection foundational master questions.',
      badge: 'Middle School',
      badgeBg: 'rgba(16, 185, 129, 0.2)',
      badgeColor: '#10b981',
      link: '/stitch-numericals-lab.html'
    },
    {
      id: 'science-class7-ch9-life-processes',
      classNum: 7,
      subject: 'Science',
      title: 'Class 7 Science Ch 9: Life Processes in Animals Notes',
      subtitle: 'New NCERT Curiosity Chapter 9 (gecu109.pdf): Complete digestive enzymes, villi absorption, glucose respiration equation, breathing mechanisms and gills.',
      badge: 'Curiosity Ch 9 Notes',
      badgeBg: 'rgba(52, 211, 153, 0.2)',
      badgeColor: '#34d399',
      link: '/curiosity-class7-ch9-life-processes-notes.html',
      isHot: true
    },
    {
      id: 'science-class7-ch7-heat-transfer',
      classNum: 7,
      subject: 'Science',
      title: 'Class 7 Science Ch 7: Heat Transfer in Nature (20 Exam MCQs)',
      subtitle: 'New NCERT Curiosity Chapter 7 (gecu107.pdf): Conduction, Convection, Radiation, Sea & Land Breeze, Infiltration, Aquifers & Ice Stupas.',
      badge: '20 Bilingual MCQs',
      badgeBg: 'rgba(16, 185, 129, 0.2)',
      badgeColor: '#10b981',
      link: '/curiosity-class7-ch7-heat-transfer-mcq.html',
      isHot: true
    },
    {
      id: 'mid-7-science-math',
      classNum: 7,
      subject: 'Science & Mathematics',
      title: 'Class 7 Mathematics & Science Interactive Formula Vault',
      subtitle: 'Integers, fractions & decimals, heat transfer, and acids-bases step-by-step solutions.',
      badge: 'Middle School',
      badgeBg: 'rgba(6, 182, 212, 0.2)',
      badgeColor: '#06b6d4',
      link: '/stitch-numericals-lab.html'
    },
    {
      id: 'mid-6-science-math',
      classNum: 6,
      subject: 'Science & Mathematics',
      title: 'Class 6 Curiosity & Ganita Prakash Entry Notes',
      subtitle: 'Knowing our numbers, playing with numbers, components of food, and sorting materials revision.',
      badge: 'Middle Stage Entry',
      badgeBg: 'rgba(59, 130, 246, 0.2)',
      badgeColor: '#3b82f6',
      link: '/stitch-numericals-lab.html'
    }
  ], []);

  // Sorted list of classes for the main Class Grid (matching ClassGrid.tsx)
  const sortedClasses = useMemo(() => {
    return [...ALL_CLASSES_SUMMARY]
      .sort((a, b) => b.classNum - a.classNum)
      .filter((item) => {
        const meta = NEXTSEM_CLASS_PALETTE[item.classNum];
        // Stage filter
        if (stageFilter !== 'ALL' && meta && meta.stageGroup !== stageFilter) {
          return false;
        }
        // Search filter
        if (effectiveSearch) {
          const matchNum = String(item.classNum).includes(effectiveSearch);
          const matchRoman = meta?.roman.toLowerCase().includes(effectiveSearch);
          const matchTag = meta?.stageTag.toLowerCase().includes(effectiveSearch);
          const matchName = item.name.toLowerCase().includes(effectiveSearch);
          const hasMatchingNote = allNotes.some(n => 
            n.classNum === item.classNum && 
            (n.title.toLowerCase().includes(effectiveSearch) || n.subtitle.toLowerCase().includes(effectiveSearch) || n.subject.toLowerCase().includes(effectiveSearch))
          );
          return matchNum || matchRoman || matchTag || matchName || hasMatchingNote;
        }
        return true;
      });
  }, [stageFilter, effectiveSearch, allNotes]);

  // Notes matching current search or selected class
  const searchResults = useMemo(() => {
    if (!effectiveSearch) return [];
    return allNotes.filter((item) => {
      const meta = NEXTSEM_CLASS_PALETTE[item.classNum];
      const matchTitle = item.title.toLowerCase().includes(effectiveSearch);
      const matchSub = item.subtitle.toLowerCase().includes(effectiveSearch);
      const matchSubj = item.subject.toLowerCase().includes(effectiveSearch);
      const matchBadge = item.badge.toLowerCase().includes(effectiveSearch);
      const matchClass = `class ${item.classNum}`.includes(effectiveSearch) || `class ${meta?.roman}`.toLowerCase().includes(effectiveSearch);
      return matchTitle || matchSub || matchSubj || matchBadge || matchClass;
    });
  }, [allNotes, effectiveSearch]);

  const activeClassNotes = useMemo(() => {
    if (selectedClassNum === null) return [];
    return allNotes.filter(n => n.classNum === selectedClassNum);
  }, [allNotes, selectedClassNum]);

  const handleLaunchItem = (item: NoteItem, e: React.MouseEvent) => {
    if (item.actionType === 'TS_GREWAL' && onOpenTsGrewal) {
      e.preventDefault();
      onOpenTsGrewal();
      return;
    }
  };

  return (
    <div style={{
      maxWidth: '780px',
      margin: '0 auto',
      padding: '0.25rem 0.5rem 2.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      
      {/* ── Top Header Navigation Bar ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.4rem 0.2rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => {
              if (selectedClassNum !== null) {
                setSelectedClassNum(null);
              } else {
                onBack();
              }
            }}
            className="btn btn-outline"
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ArrowLeft size={15} /> {selectedClassNum !== null ? 'All Classes' : 'Dashboard'}
          </button>
          <div>
            <h1 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              {selectedClassNum !== null 
                ? `Class ${NEXTSEM_CLASS_PALETTE[selectedClassNum]?.roman || selectedClassNum} Notes & Solved Studios`
                : 'NCERT Notes & Solved Studios'
              }
            </h1>
            <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: 0 }}>
              {selectedClassNum !== null 
                ? `${NEXTSEM_CLASS_PALETTE[selectedClassNum]?.stageTag} • Verified Step-by-Step Solutions`
                : 'Step Solutions, Formula Vaults & Calculation Labs'
              }
            </p>
          </div>
        </div>

        <span style={{
          background: 'rgba(79, 70, 229, 0.08)',
          border: '1px solid rgba(79, 70, 229, 0.35)',
          color: '#4f46e5',
          fontSize: '0.74rem',
          fontWeight: 800,
          padding: '4px 10px',
          borderRadius: '9999px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <Sparkles size={13} />
          Step Solutions
        </span>
      </div>

      {/* ── Pedagogical Stage Filter Navigation Pills (Identical to ClassGrid.tsx) ── */}
      {selectedClassNum === null && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '6px',
          padding: '0 2px'
        }}>
          {[
            { id: 'ALL', label: 'All Classes (1–12)' },
            { id: 'SENIOR', label: 'Senior (12–11)' },
            { id: 'SECONDARY', label: 'Secondary (10–9)' },
            { id: 'MIDDLE', label: 'Middle (8–6)' },
            { id: 'PRIMARY', label: 'Primary (5–1)' }
          ].map((tab) => {
            const isActive = stageFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStageFilter(tab.id as StageFilter)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? '1px solid #4f46e5' : '1px solid var(--border-color)',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  fontSize: '0.78rem',
                  fontWeight: isActive ? 900 : 700,
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  boxShadow: isActive ? '0 2px 10px rgba(79, 70, 229, 0.35)' : 'var(--shadow-sm)'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* ── Search Input ── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Search 
          size={16} 
          style={{ 
            position: 'absolute', 
            left: '14px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            color: 'var(--text-muted)' 
          }} 
        />
        <input
          type="text"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder="Search by topic, chapter, subject, or 'T.S. Grewal', 'Cash Book'..."
          style={{
            width: '100%',
            padding: '9px 14px 9px 38px',
            background: 'var(--bg-card)',
            border: '1.5px solid var(--border-color)',
            borderRadius: '12px',
            color: 'var(--text-primary)',
            fontSize: '0.82rem',
            fontWeight: 600,
            outline: 'none',
            boxShadow: 'var(--shadow-sm)'
          }}
        />
        {localSearch && (
          <button
            onClick={() => setLocalSearch('')}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* ── CASE 1: SEARCH RESULTS ACTIVE ── */}
      {effectiveSearch ? (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>
            Found {searchResults.length} matching note{searchResults.length !== 1 ? 's' : ''} for "{effectiveSearch}":
          </div>
          {searchResults.length === 0 ? (
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '2.5rem 1rem',
              textAlign: 'center',
              color: 'var(--text-muted)'
            }}>
              <p style={{ fontWeight: 800, fontSize: '0.95rem', margin: '0 0 6px', color: 'var(--text-primary)' }}>
                No notes found matching "{effectiveSearch}"
              </p>
              <p style={{ fontSize: '0.8rem', margin: 0 }}>
                Try searching for "Cash Book", "T.S. Grewal", "Physics", or clear your search.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '12px'
            }}>
              {searchResults.map((item) => renderNoteCard(item, onOpenTsGrewal, handleLaunchItem))}
            </div>
          )}
        </section>
      ) : selectedClassNum !== null ? (
        /* ── CASE 2: CLASS DETAIL VIEW (DRILL-DOWN INTO SELECTED CLASS) ── */
        <section style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Class Hero Header Card */}
          {(() => {
            const meta = NEXTSEM_CLASS_PALETTE[selectedClassNum] || {
              roman: String(selectedClassNum),
              gradient: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
              glowColor: 'rgba(79, 70, 229, 0.4)',
              stageTag: 'NCERT Stage',
              stageGroup: 'SENIOR',
              notesCount: 2
            };
            return (
              <div style={{
                background: 'var(--bg-card)',
                border: '1.5px solid var(--border-color)',
                borderRadius: '18px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                boxShadow: 'var(--shadow-card)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: meta.gradient,
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 14px ${meta.glowColor}`,
                      border: '1.5px solid rgba(255, 255, 255, 0.3)',
                      flexShrink: 0
                    }}
                  >
                    <span style={{ fontSize: '1.2rem', fontWeight: 900, lineHeight: 1, color: '#ffffff' }}>
                      {meta.roman}
                    </span>
                    <span style={{ fontSize: '0.58rem', fontWeight: 800, color: '#ffffff', opacity: 0.95, marginTop: '2px' }}>
                      Class {selectedClassNum}
                    </span>
                  </div>

                  <div>
                    <h2 style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 2px' }}>
                      Class {meta.roman} Notes &amp; Solved Studios
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '0.64rem',
                        fontWeight: 900,
                        color: '#4f46e5',
                        background: 'rgba(79, 70, 229, 0.08)',
                        border: '1px solid rgba(79, 70, 229, 0.3)',
                        padding: '2px 7px',
                        borderRadius: '9999px',
                        textTransform: 'uppercase'
                      }}>
                        {meta.stageTag}
                      </span>
                      {meta.streams && (
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                          • {meta.streams.join(' • ')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedClassNum(null)}
                  style={{
                    background: 'var(--bg-hover)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  Switch Class
                </button>
              </div>
            );
          })()}

          {/* Notes Grid for This Selected Class */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '12px'
          }}>
            {activeClassNotes.length > 0 ? (
              activeClassNotes.map((item) => renderNoteCard(item, onOpenTsGrewal, handleLaunchItem))
            ) : (
              <div style={{
                gridColumn: '1 / -1',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '2rem 1rem',
                textAlign: 'center',
                color: 'var(--text-muted)'
              }}>
                <BookOpen size={28} style={{ color: '#4f46e5', margin: '0 auto 8px', display: 'block' }} />
                <p style={{ fontWeight: 800, fontSize: '0.95rem', margin: '0 0 4px', color: 'var(--text-primary)' }}>
                  Class {NEXTSEM_CLASS_PALETTE[selectedClassNum]?.roman} Curriculum Notes &amp; Formula Sheets
                </p>
                <p style={{ fontSize: '0.78rem', margin: 0 }}>
                  Subject formula notes and solved step exercises available in the main textbooks section.
                </p>
              </div>
            )}
          </div>

        </section>
      ) : (
        /* ── CASE 3: MAIN 3-COLUMN LUXURY CLASS CARDS GRID (IDENTICAL TO ClassGrid.tsx) ── */
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '12px'
        }}>
          {sortedClasses.map((item) => {
            const isSelected = selectedClassNum === item.classNum;
            const meta = NEXTSEM_CLASS_PALETTE[item.classNum] || {
              roman: String(item.classNum),
              gradient: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
              glowColor: 'rgba(79, 70, 229, 0.4)',
              stageTag: 'NCERT Stage',
              stageGroup: 'SECONDARY',
              notesCount: 2
            };

            const classNoteList = allNotes.filter(n => n.classNum === item.classNum);
            const displayCount = classNoteList.length > 0 ? classNoteList.length : meta.notesCount;

            return (
              <div
                key={item.classNum}
                onClick={() => setSelectedClassNum(item.classNum)}
                className="nextsem-dashboard-card"
                style={{
                  background: isSelected ? 'var(--bg-hover)' : 'var(--bg-card)',
                  border: isSelected ? '2px solid #4f46e5' : '1.5px solid var(--border-color)',
                  borderRadius: '18px',
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  userSelect: 'none',
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isSelected 
                    ? '0 6px 20px rgba(79, 70, 229, 0.25)' 
                    : 'var(--shadow-card)'
                }}
              >
                {/* Top Row: Tag / Popular Badge */}
                <div style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}>
                  <span style={{
                    fontSize: '0.62rem',
                    fontWeight: 900,
                    color: '#4f46e5',
                    background: 'rgba(79, 70, 229, 0.08)',
                    border: '1px solid rgba(79, 70, 229, 0.3)',
                    padding: '2px 7px',
                    borderRadius: '9999px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {meta.stageTag}
                  </span>

                  {meta.popularLabel && (
                    <span style={{
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      color: '#f59e0b',
                      letterSpacing: '0.02em'
                    }}>
                      {meta.popularLabel}
                    </span>
                  )}
                </div>

                {/* 3D Squircle Jewel Badge */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: meta.gradient,
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 6px 16px ${meta.glowColor}`,
                    margin: '4px 0 10px',
                    border: '1.5px solid rgba(255, 255, 255, 0.3)',
                    position: 'relative',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <span style={{ fontSize: '1.35rem', fontWeight: 900, lineHeight: 1, color: '#ffffff' }}>
                    {meta.roman}
                  </span>
                  <span style={{ fontSize: '0.64rem', fontWeight: 800, color: '#ffffff', opacity: 0.95, marginTop: '2px' }}>
                    Class {item.classNum}
                  </span>
                </div>

                {/* Class Title Header */}
                <h2 style={{
                  fontSize: '1.05rem',
                  fontWeight: 900,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  margin: '0 0 4px',
                  lineHeight: 1.2
                }}>
                  Class {meta.roman}
                </h2>

                {/* Notes Count & Stream Pills */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  margin: '4px 0 10px',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <BookOpen size={12} style={{ color: '#4f46e5' }} />
                    {displayCount} Solved Notes
                  </span>

                  {meta.streams && (
                    <span style={{
                      fontSize: '0.64rem',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                      background: 'var(--bg-hover)',
                      padding: '2px 6px',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color)'
                    }}>
                      {meta.streams.join(' • ')}
                    </span>
                  )}
                </div>

                {/* Action Button Strip */}
                <div style={{
                  marginTop: 'auto',
                  width: '100%',
                  paddingTop: '8px',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#4f46e5'
                }}>
                  <span>Open Class Notes</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* ── Bottom Information Card ── */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '14px 18px',
        textAlign: 'center',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left' }}>
          <CheckCircle2 size={18} style={{ color: '#4f46e5' }} />
          <div>
            <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              100% Free NCERT &amp; CBSE Exam Companion
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Rationalized curriculum 2026–2027 by Nextsem Academy
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          style={{
            background: 'var(--bg-hover)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            fontSize: '0.76rem',
            fontWeight: 800,
            padding: '6px 12px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Return to Dashboard
        </button>
      </div>

    </div>
  );
};

// Helper function to render a note card
function renderNoteCard(
  item: NoteItem,
  onOpenTsGrewal?: () => void,
  handleLaunchItem?: (item: NoteItem, e: React.MouseEvent) => void
) {
  const isFeaturedGrewal = item.id === 'ts-grewal-hub';

  if (isFeaturedGrewal) {
    return (
      <div
        key={item.id}
        onClick={(e) => handleLaunchItem && handleLaunchItem(item, e)}
        style={{
          gridColumn: '1 / -1',
          background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          borderRadius: '16px',
          overflow: 'hidden',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(2, 132, 199, 0.35)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          color: '#ffffff'
        }}
      >
        {/* Upper Card Header matching user screenshot */}
        <div style={{ padding: '16px 18px 14px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(0, 0, 0, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '4px 10px',
            borderRadius: '9999px',
            fontSize: '0.7rem',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '10px',
            letterSpacing: '0.02em',
            textTransform: 'uppercase'
          }}>
            <span>T.S. GREWAL • FINANCIAL ACCOUNTING (18 CHAPTERS &amp; SOLUTIONS)</span>
            <BookOpen size={12} style={{ color: '#ffffff' }} />
          </div>

          <h3 style={{
            fontSize: '1.35rem',
            fontWeight: 900,
            color: '#ffffff',
            margin: '0 0 6px',
            letterSpacing: '-0.01em',
            lineHeight: 1.2
          }}>
            ACCOUNTANCY (FINANCIAL ACCOUNTING)
          </h3>

          <p style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.45,
            margin: 0
          }}>
            {item.subtitle}
          </p>
        </div>

        {/* Sub-row strip matching user screenshot */}
        <div style={{
          background: '#0c1322',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          <span style={{
            fontSize: '0.88rem',
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '0.01em'
          }}>
            T.S. GREWAL: DOUBLE ENTRY BOOK KEEPING (XI)
          </span>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 900,
            color: '#38bdf8',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            Explore →
          </span>
        </div>

        {/* Quick Jump Action Pills */}
        {item.quickLinks && (
          <div style={{
            background: '#060a12',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {item.quickLinks.map((ql, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenTsGrewal) onOpenTsGrewal();
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: '#e2e8f0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                {ql.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      key={item.id}
      href={item.link}
      onClick={(e) => handleLaunchItem && handleLaunchItem(item, e)}
      className="nextsem-dashboard-card"
      style={{
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: '16px',
        padding: '14px 16px',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.2s ease',
        position: 'relative'
      }}
    >
      <div>
        {/* Card Top Row: Badge & Subject Tag */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '8px',
          gap: '6px'
        }}>
          <span style={{
            fontSize: '0.68rem',
            fontWeight: 800,
            background: item.badgeBg,
            color: item.badgeColor,
            border: `1px solid ${item.badgeColor}40`,
            padding: '2px 8px',
            borderRadius: '9999px',
            letterSpacing: '0.02em'
          }}>
            {item.badge}
          </span>
          <span style={{
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            fontWeight: 700
          }}>
            {item.subject}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '0.98rem',
          fontWeight: 900,
          color: 'var(--text-primary)',
          margin: '4px 0 6px',
          lineHeight: 1.3
        }}>
          {item.title}
        </h3>

        {/* Subtitle */}
        <p style={{
          fontSize: '0.78rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.45,
          margin: 0
        }}>
          {item.subtitle}
        </p>
      </div>

      {/* Card Bottom Row: Verified Badge & Launch Action */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '12px',
        paddingTop: '8px',
        borderTop: '1px solid var(--border-color)'
      }}>
        <span style={{
          fontSize: '0.72rem',
          color: '#4f46e5',
          fontWeight: 800,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <CheckCircle2 size={13} /> Verified Solutions
        </span>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '3px',
          color: '#4f46e5',
          fontSize: '0.76rem',
          fontWeight: 800
        }}>
          <span>Launch</span>
          <ArrowUpRight size={13} />
        </div>
      </div>
    </a>
  );
}
