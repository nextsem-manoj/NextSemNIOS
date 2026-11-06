import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  Trophy, 
  Award, 
  Compass, 
  Zap, 
  CheckCircle2, 
  Search, 
  ArrowRight, 
  FlaskConical, 
  Calculator, 
  ShieldCheck, 
  Calendar,
  School, 
  ChevronRight, 
  Smile 
} from 'lucide-react';

interface NextsemAcademyClassesViewProps {
  onBack: () => void;
  onSelectClass: (classNum: number) => void;
  onOpenInteractive?: (studioKey: string, classNum?: number) => void;
  onOpenNcertSolutions?: () => void;
  onOpenScheduleBuilder?: () => void;
}

type StageFilter = 'ALL' | 'SENIOR' | 'SECONDARY' | 'MIDDLE' | 'PRIMARY' | 'NIOS' | 'STUDIOS';

interface ClassAcademyDetail {
  classNum: number;
  roman: string;
  title: string;
  stageTag: string;
  stageGroup: 'SENIOR' | 'SECONDARY' | 'MIDDLE' | 'PRIMARY';
  gradient: string;
  glowColor: string;
  popularLabel?: string;
  streams?: string[];
  keySubjects: { name: string; code?: string; icon: string }[];
  nepFocus: string;
  studiosAvailable?: { label: string; key: string }[];
  recommendedBook: string;
  totalChaptersApprox: number;
}

const ACADEMY_CLASSES_DATA: Record<number, ClassAcademyDetail> = {
  12: {
    classNum: 12,
    roman: 'XII',
    title: 'Class 12 • Senior Secondary Board',
    stageTag: 'CBSE Board & Competitive Foundation',
    stageGroup: 'SENIOR',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
    glowColor: 'rgba(79, 70, 229, 0.4)',
    popularLabel: '🔥 Board Exams 2026–27',
    streams: ['Science (PCM/PCB)', 'Commerce', 'Humanities / Arts'],
    keySubjects: [
      { name: 'Physics', code: 'leph1/2', icon: '⚡' },
      { name: 'Chemistry', code: 'lech1/2', icon: '🧪' },
      { name: 'Mathematics', code: 'lemh1/2', icon: '📐' },
      { name: 'Biology', code: 'lebo1', icon: '🧬' },
      { name: 'Accountancy', code: 'leac1/2', icon: '📊' },
      { name: 'Business Studies', code: 'lebs1/2', icon: '📈' },
      { name: 'Economics', code: 'leec1/2', icon: '💹' },
      { name: 'History', code: 'lehs1/2/3', icon: '🏛️' },
      { name: 'Political Science', code: 'leps1/2', icon: '🗳️' }
    ],
    nepFocus: 'Deep Conceptual Derivations, Competency-Based Questions (50%+ Weightage) & Board Solutions',
    studiosAvailable: [
      { label: 'Physics Ch 1 & 2 All Derivations Studio (32 Proofs)', key: 'physics-derivations' },
      { label: 'History Bhakti-Sufi & Vijaynagar Studio', key: 'history' }
    ],
    recommendedBook: 'Physics (leph1), Chemistry (lech1), Accountancy (leac1)',
    totalChaptersApprox: 98
  },
  11: {
    classNum: 11,
    roman: 'XI',
    title: 'Class 11 • Senior Secondary Foundation',
    stageTag: 'Senior Secondary Core Foundation',
    stageGroup: 'SENIOR',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    glowColor: 'rgba(2, 132, 199, 0.4)',
    popularLabel: '💎 Core Career Foundation',
    streams: ['Science', 'Commerce', 'Humanities'],
    keySubjects: [
      { name: 'Physics', code: 'keph1/2', icon: '⚡' },
      { name: 'Chemistry', code: 'kech1/2', icon: '🧪' },
      { name: 'Mathematics', code: 'kemh1', icon: '📐' },
      { name: 'Accountancy (T.S. Grewal & NCERT)', code: 'keac1/2', icon: '📊' },
      { name: 'Statistics for Economics', code: 'kest1', icon: '📈' },
      { name: 'Microeconomics', code: 'keec1', icon: '💹' },
      { name: 'Business Studies', code: 'kebs1', icon: '💼' },
      { name: 'Themes in World History', code: 'kehs1', icon: '🏛️' }
    ],
    nepFocus: 'Numerical Mastery, Practical Accounting Worksheets, Foundation Theory for Competitive Exams',
    studiosAvailable: [
      { label: 'T.S. Grewal Accounting Equation & Cash Book Studio', key: 'ts-grewal' },
      { label: 'Class 11 Statistics & Economics Mega Test', key: 'stats' }
    ],
    recommendedBook: 'T.S. Grewal Double Entry Book Keeping & NCERT Financial Accounting',
    totalChaptersApprox: 92
  },
  10: {
    classNum: 10,
    roman: 'X',
    title: 'Class 10 • Secondary AISSE Board',
    stageTag: 'Secondary Stage CBSE Board',
    stageGroup: 'SECONDARY',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    popularLabel: '🏆 AISSE Board Exam',
    streams: ['All Streams Common Foundation'],
    keySubjects: [
      { name: 'Mathematics Standard & Basic', code: 'jemh1', icon: '📐' },
      { name: 'Science (Physics/Chem/Bio)', code: 'jesc1', icon: '🔬' },
      { name: 'Social Science (His/Geo/Civ/Eco)', code: 'jess1-4', icon: '🌍' },
      { name: 'English First Flight & Footprints', code: 'jeff1/2', icon: '📖' },
      { name: 'Hindi Kshitij & Kritika', code: 'jhks1', icon: '✍️' }
    ],
    nepFocus: 'Step-by-step NCERT textbook exercise solutions, formula sheets & board practice tests',
    studiosAvailable: [
      { label: 'Trigonometry & Circle Theorem Interactive Studio', key: 'class10-trig' },
      { label: 'Chemical Reactions & Life Processes Question Bank', key: 'science-ch1' }
    ],
    recommendedBook: 'Mathematics (jemh1) & Science (jesc1)',
    totalChaptersApprox: 64
  },
  9: {
    classNum: 9,
    roman: 'IX',
    title: 'Class 9 • Secondary Stage Gateway',
    stageTag: 'Secondary Stage Entry & Foundations',
    stageGroup: 'SECONDARY',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    popularLabel: '⭐ High Engagement',
    streams: ['Secondary Core Curriculum'],
    keySubjects: [
      { name: 'Mathematics / Ganita Manjari', code: 'iemh1', icon: '📐' },
      { name: 'Science (Motion, Force & Tissues)', code: 'iesc1', icon: '🔬' },
      { name: 'Social Science (India & Contemporary World)', code: 'iess1-4', icon: '🌏' },
      { name: 'English Beehive & Moments', code: 'iebe1', icon: '📚' },
      { name: 'Hindi Grammar Complete Mastery', code: 'ihks1', icon: '📝' }
    ],
    nepFocus: 'Postulate Proofs, Numerical Motion Labs, Complete Hindi Grammar Rules & Visual Diagrams',
    studiosAvailable: [
      { label: 'Introduction to Euclid Geometry & Circle Postulates Lab', key: 'euclid' },
      { label: 'Hindi Grammar Complete Mastery Studio (संधि, समास, उपसर्ग)', key: 'grammar' },
      { label: 'Maths Ch 4 & 5 Assessment (40 Marks Suite)', key: 'maths-ch4-5' }
    ],
    recommendedBook: 'Ganita Manjari & Science (iesc1)',
    totalChaptersApprox: 58
  },
  8: {
    classNum: 8,
    roman: 'VIII',
    title: 'Class 8 • Middle School Senior Grade',
    stageTag: 'Middle School Stage',
    stageGroup: 'MIDDLE',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    popularLabel: '✨ NEP 2026 Rationalized',
    streams: ['Middle School Foundation'],
    keySubjects: [
      { name: 'Mathematics (Ganita Prakash)', code: 'hemh1', icon: '📐' },
      { name: 'Science (Curiosity)', code: 'hesc1', icon: '🔬' },
      { name: 'Social Science (Exploring Society)', code: 'hess1', icon: '🌍' },
      { name: 'English (Poorvi / Honeydew)', code: 'hefl1', icon: '📖' },
      { name: 'Hindi (Malhar / Vasant)', code: 'hhvs1', icon: '✍️' }
    ],
    nepFocus: 'Algebraic Identities, Rational Numbers, Cell Biology & Topic Diagnostic Checks',
    studiosAvailable: [
      { label: 'Class 6–8 Doubt & Topic Diagnostic Studio', key: 'doubt-studio' }
    ],
    recommendedBook: 'Ganita Prakash & Curiosity Grade 8',
    totalChaptersApprox: 52
  },
  7: {
    classNum: 7,
    roman: 'VII',
    title: 'Class 7 • Middle School Core Grade',
    stageTag: 'Middle School Stage',
    stageGroup: 'MIDDLE',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    popularLabel: '💡 Interactive Worksheets',
    streams: ['Middle School Foundation'],
    keySubjects: [
      { name: 'Mathematics (Ganita Prakash)', code: 'gemh1', icon: '📐' },
      { name: 'Science (Curiosity)', code: 'gesc1', icon: '🔬' },
      { name: 'Social Science (Exploring Society: India & Beyond)', code: 'gess1', icon: '🗺️' },
      { name: 'English (Poorvi)', code: 'gepv1', icon: '📖' },
      { name: 'Hindi (Malhar)', code: 'ghml1', icon: '✍️' }
    ],
    nepFocus: 'Heat Transfer, Life Processes, Fractions & Number Play Interactive MCQs',
    studiosAvailable: [
      { label: 'English Poorvi Unit 1: Learning Together (36 MCQs)', key: 'poorvi-7' },
      { label: 'Class 6–8 Doubt & Topic Diagnostic Studio', key: 'doubt-studio' }
    ],
    recommendedBook: 'Curiosity Grade 7 & Poorvi',
    totalChaptersApprox: 48
  },
  6: {
    classNum: 6,
    roman: 'VI',
    title: 'Class 6 • Middle Stage Entry',
    stageTag: 'Middle School Stage Entry',
    stageGroup: 'MIDDLE',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    popularLabel: '🚀 NEP 2024 New Series',
    streams: ['Middle School Foundation'],
    keySubjects: [
      { name: 'Ganita Prakash (New Maths)', code: 'femh1', icon: '📐' },
      { name: 'Curiosity (New Science)', code: 'fesc1', icon: '🔬' },
      { name: 'Exploring Society: India and Beyond', code: 'fess1', icon: '🌍' },
      { name: 'Poorvi (New English)', code: 'fepv1', icon: '📚' },
      { name: 'Malhar (New Hindi)', code: 'fhml1', icon: '✍️' }
    ],
    nepFocus: 'Data Handling Workbooks, Interactive Bar Graphs & Neem Baba MCQ Suites',
    studiosAvailable: [
      { label: 'Ganita Prakash Ch 4 Data Handling Interactive Workbook', key: 'data-handling-6' },
      { label: 'English Poorvi Unit 3 Ch 7 Neem Baba 30-MCQ Suite', key: 'poorvi-6' },
      { label: 'Class 6–8 Doubt & Topic Diagnostic Studio', key: 'doubt-studio' }
    ],
    recommendedBook: 'Ganita Prakash & Curiosity (New NCERT)',
    totalChaptersApprox: 45
  },
  5: {
    classNum: 5,
    roman: 'V',
    title: 'Class 5 • Preparatory Graduation',
    stageTag: 'Preparatory Stage Final Year',
    stageGroup: 'PRIMARY',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
    glowColor: 'rgba(20, 184, 166, 0.4)',
    popularLabel: '🌱 Preparatory Stage',
    streams: ['Primary Foundation'],
    keySubjects: [
      { name: 'Maths / Tarang', code: 'eemh1', icon: '📐' },
      { name: 'Our Wondrous World (EVS)', code: 'eeev1', icon: '🌿' },
      { name: 'Santoor (English)', code: 'eesn1', icon: '📖' },
      { name: 'Veena (Hindi)', code: 'eevn1', icon: '✍️' }
    ],
    nepFocus: 'Activity-Based Fill in Blanks, Water Cycle, Sensory Exploration & Stories',
    studiosAvailable: [
      { label: 'Santoor Ch 6 What a Tank Interactive Worksheet', key: 'santoor-5' },
      { label: 'EVS Super Senses Interactive Fill-in-Blanks', key: 'evs-5' }
    ],
    recommendedBook: 'Our Wondrous World & Santoor',
    totalChaptersApprox: 36
  },
  4: {
    classNum: 4,
    roman: 'IV',
    title: 'Class 4 • Preparatory Stage',
    stageTag: 'Preparatory Stage',
    stageGroup: 'PRIMARY',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    streams: ['Primary Foundation'],
    keySubjects: [
      { name: 'Mathematics (Tarang / Math-Magic)', code: 'demh1', icon: '📐' },
      { name: 'Environmental Studies (Hamari Duniya)', code: 'deev1', icon: '🌱' },
      { name: 'Santoor (English)', code: 'desn1', icon: '📖' },
      { name: 'Veena (Hindi)', code: 'devn1', icon: '✍️' }
    ],
    nepFocus: 'Fun Measuring Activities, Animal Habitats & Joyful Reading Passages',
    recommendedBook: 'Santoor 4 & Hamari Duniya',
    totalChaptersApprox: 32
  },
  3: {
    classNum: 3,
    roman: 'III',
    title: 'Class 3 • Preparatory Stage Entry',
    stageTag: 'Preparatory Stage Entry',
    stageGroup: 'PRIMARY',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)',
    glowColor: 'rgba(2, 132, 199, 0.4)',
    popularLabel: '🎨 NEP New Books',
    streams: ['Primary Foundation'],
    keySubjects: [
      { name: 'Mathematics Mela', code: 'cemh1', icon: '🎪' },
      { name: 'Our Wondrous World (EVS)', code: 'ceev1', icon: '🌍' },
      { name: 'Santoor (English)', code: 'cesn1', icon: '📖' },
      { name: 'Veena (Hindi)', code: 'cevn1', icon: '✍️' }
    ],
    nepFocus: 'Foundational Numeracy, Nature Observations & Rhymes',
    recommendedBook: 'Mathematics Mela & Santoor Grade 3',
    totalChaptersApprox: 30
  },
  2: {
    classNum: 2,
    roman: 'II',
    title: 'Class 2 • Foundational Stage',
    stageTag: 'Foundational Stage',
    stageGroup: 'PRIMARY',
    gradient: 'linear-gradient(135deg, #eab308 0%, #a16207 100%)',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    streams: ['Foundational Play & Learn'],
    keySubjects: [
      { name: 'Joyful Mathematics', code: 'bemh1', icon: '🎲' },
      { name: 'Mridang (English)', code: 'bemr1', icon: '🪘' },
      { name: 'Sarangi (Hindi)', code: 'besr1', icon: '🪕' }
    ],
    nepFocus: 'Picture Comprehension, Number Stories & Early Literacy',
    recommendedBook: 'Joyful Mathematics & Mridang 2',
    totalChaptersApprox: 24
  },
  1: {
    classNum: 1,
    roman: 'I',
    title: 'Class 1 • Foundational Stage Entry',
    stageTag: 'Foundational Stage Entry',
    stageGroup: 'PRIMARY',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    popularLabel: '🧸 Play & Learn',
    streams: ['Foundational Play & Learn'],
    keySubjects: [
      { name: 'Joyful Mathematics / Anandmay Ganit', code: 'aemh1', icon: '🎲' },
      { name: 'Mridang (English)', code: 'aemr1', icon: '🪘' },
      { name: 'Sarangi (Hindi)', code: 'aesr1', icon: '🪕' }
    ],
    nepFocus: 'Phonics, Counting Shapes, Joyful Songs & Color Identification',
    recommendedBook: 'Joyful Mathematics Grade 1',
    totalChaptersApprox: 22
  }
};

const INTERACTIVE_STUDIOS_LIST = [
  {
    title: 'Class 12 Physics Ch 1 & 2 All Derivations Studio',
    classTag: 'Class 12 Physics',
    description: 'All 32 complete CBSE board derivations with step-by-step vector diagrams, formula callouts, and CBSE marking rubrics.',
    icon: Zap,
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
    badge: '32 Derivations',
    actionKey: 'physics-derivations',
    classNum: 12
  },
  {
    title: 'T.S. Grewal Accounting Equation & 2-Column Cash Book',
    classTag: 'Class 11 Accountancy',
    description: 'Interactive T-shape ledger posting studio with real-time debit/credit balancing, hints, and error alerts.',
    icon: Calculator,
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    badge: 'Dual-Pane Studio',
    actionKey: 'ts-grewal',
    classNum: 11
  },
  {
    title: 'Middle School Doubt & Topic Diagnostic Studio',
    classTag: 'Classes 6th, 7th & 8th',
    description: 'Instant Google OAuth login, subject enrollment in Mathematics & Science, and chapter-by-chapter diagnostic quizzes.',
    icon: Sparkles,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    badge: 'Google Auth Portal',
    actionKey: 'doubt-studio',
    classNum: 7
  },
  {
    title: 'Hindi Grammar Complete Mastery Studio',
    classTag: 'Class 9 Hindi',
    description: 'Interactive संधि, समास, उपसर्ग, प्रत्यय & अलंकार practice suite with instant rule explanations.',
    icon: Award,
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    badge: 'Complete Vyakaran',
    actionKey: 'grammar',
    classNum: 9
  },
  {
    title: 'Euclid Geometry & Circle Theorems Interactive Lab',
    classTag: 'Class 9 Mathematics',
    description: 'Interactive geometric proofs of 12 circle theorems and 5 Euclid postulates with visual angle measurement.',
    icon: Compass,
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    badge: '12 Theorem Proofs',
    actionKey: 'euclid',
    classNum: 9
  },
  {
    title: 'NIOS Senior Secondary Chemistry (313) Studio',
    classTag: 'NIOS Sr. Secondary',
    description: 'Official NIOS open schooling Chemistry Lesson 26 Hydrocarbons interactive competency paper with guided hints.',
    icon: FlaskConical,
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    badge: 'Lesson 26 Mastery',
    actionKey: 'hydrocarbons',
    classNum: 12
  }
];

export const NextsemAcademyClassesView: React.FC<NextsemAcademyClassesViewProps> = ({
  onBack,
  onSelectClass,
  onOpenInteractive,
  onOpenNcertSolutions,
  onOpenScheduleBuilder
}) => {
  const [stageFilter, setStageFilter] = useState<StageFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedClass, setExpandedClass] = useState<number | null>(12);

  // Filtered classes calculation
  const filteredClasses = useMemo(() => {
    return Object.values(ACADEMY_CLASSES_DATA)
      .sort((a, b) => b.classNum - a.classNum)
      .filter((cls) => {
        // Stage filter
        if (stageFilter === 'SENIOR' && cls.stageGroup !== 'SENIOR') return false;
        if (stageFilter === 'SECONDARY' && cls.stageGroup !== 'SECONDARY') return false;
        if (stageFilter === 'MIDDLE' && cls.stageGroup !== 'MIDDLE') return false;
        if (stageFilter === 'PRIMARY' && cls.stageGroup !== 'PRIMARY') return false;
        if (stageFilter === 'NIOS' || stageFilter === 'STUDIOS') return true; // Handled separately or included

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchNum = String(cls.classNum).includes(q);
          const matchTitle = cls.title.toLowerCase().includes(q);
          const matchRoman = cls.roman.toLowerCase().includes(q);
          const matchSubject = cls.keySubjects.some((s) => s.name.toLowerCase().includes(q) || (s.code && s.code.toLowerCase().includes(q)));
          const matchStream = cls.streams?.some((st) => st.toLowerCase().includes(q));
          const matchFocus = cls.nepFocus.toLowerCase().includes(q);
          return matchNum || matchTitle || matchRoman || matchSubject || matchStream || matchFocus;
        }

        return true;
      });
  }, [stageFilter, searchQuery]);

  return (
    <div style={{
      maxWidth: '1020px',
      margin: '0 auto',
      padding: '0.5rem 0.75rem 3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '22px'
    }}>

      {/* ── 1. Top Bar Navigation Strip ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <button
          type="button"
          onClick={onBack}
          className="btn btn-outline"
          style={{
            borderRadius: '9999px',
            padding: '7px 16px',
            fontSize: '0.82rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ArrowLeft size={15} /> Back to Dashboard
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          {onOpenScheduleBuilder && (
            <button
              type="button"
              onClick={onOpenScheduleBuilder}
              style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '6px 14px',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 10px rgba(56, 189, 248, 0.35)',
                transition: 'all 0.15s ease'
              }}
            >
              <Calendar size={13} />
              <span>Timetable &amp; Lesson Planner</span>
            </button>
          )}

          <span style={{
            fontSize: '0.78rem',
            fontWeight: 800,
            color: '#10b981',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            padding: '5px 12px',
            borderRadius: '9999px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Sparkles size={13} /> Nextsem Academy Official Hub
          </span>

          <span style={{
            fontSize: '0.76rem',
            fontWeight: 700,
            color: 'var(--text-muted)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            padding: '5px 10px',
            borderRadius: '9999px'
          }}>
            Classes 1 to 12 • NEP 2026–27
          </span>
        </div>
      </div>

      {/* ── 2. Hero Grand Showcase Banner ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1c2d 0%, #051424 50%, #091a30 100%)',
        border: '1px solid rgba(16, 185, 129, 0.35)',
        borderRadius: '24px',
        padding: '2rem 1.5rem',
        color: '#ffffff',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(16, 185, 129, 0.12)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient Glow Orbs */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.18)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '10%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'rgba(79, 70, 229, 0.2)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Badge & Lead Author Tag */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <span style={{
              background: '#04AA6D',
              color: '#00351f',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: 900,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <CheckCircle2 size={13} /> NEXTSEM ACADEMY
            </span>

            <span style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#e2e8f0',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: 700
            }}>
              Lead Academic Architect: <strong>Er. Manoj Kumar</strong>
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(1.5rem, 3.8vw, 2.2rem)',
            fontWeight: 900,
            lineHeight: 1.18,
            margin: 0,
            letterSpacing: '-0.02em',
            color: '#ffffff'
          }}>
            Nextsem Academy Classes &amp; Academic Curriculum
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(0.88rem, 2vw, 1rem)',
            lineHeight: 1.55,
            color: '#cbd5e1',
            margin: 0,
            maxWidth: '780px'
          }}>
            Explore India&apos;s most student-focused, rationalized curriculum ecosystem. Covering Classes 1 to 12 across 
            <strong> Science, Commerce &amp; Humanities</strong> with official NCERT book vaults, verified line-by-line solutions, 
            and hands-on interactive derivation &amp; accounting studios.
          </p>

          {/* 4 Pillars Metric Deck */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '10px',
            marginTop: '8px'
          }}>
            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '14px',
              padding: '12px 14px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#10b981' }}>12 Classes</div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600 }}>Primary to Senior Secondary</div>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '14px',
              padding: '12px 14px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#38bdf8' }}>100+ Books</div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600 }}>NEP 2026–27 Rationalized</div>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '14px',
              padding: '12px 14px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fbbf24' }}>8+ Studios</div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600 }}>Interactive Derivations &amp; Labs</div>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '14px',
              padding: '12px 14px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#a855f7' }}>100% Free</div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600 }}>Zero Paywalls • Direct Cloud</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. Quick Search & Pedagogical Filter Strip ── */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '14px',
          padding: '8px 14px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Search size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search classes, subjects (e.g. Physics, Accountancy, Ganita, Ch 12)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '0.88rem',
              fontWeight: 600,
              width: '100%'
            }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 700
              }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Pedagogical Stage Switcher Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          overflowX: 'auto',
          padding: '2px 0 6px',
          scrollbarWidth: 'none'
        }}>
          {[
            { id: 'ALL', label: 'All Classes (1–12)', icon: School },
            { id: 'SENIOR', label: 'Senior (11–12)', icon: Trophy },
            { id: 'SECONDARY', label: 'Secondary (9–10)', icon: Award },
            { id: 'MIDDLE', label: 'Middle (6–8)', icon: Compass },
            { id: 'PRIMARY', label: 'Primary (1–5)', icon: Smile },
            { id: 'STUDIOS', label: 'Interactive Studios', icon: Zap }
          ].map((tab) => {
            const isActive = stageFilter === tab.id;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStageFilter(tab.id as StageFilter)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: isActive ? 800 : 600,
                  border: isActive ? '1px solid #10b981' : '1px solid var(--border-color)',
                  background: isActive ? 'linear-gradient(135deg, #10b981 0%, #04aa6d 100%)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 3px 12px rgba(16, 185, 129, 0.35)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <TabIcon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── 4. Special Interactive Studios Section (If STUDIOS selected or at top) ── */}
      {stageFilter === 'STUDIOS' && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              Nextsem Academy Interactive Studios &amp; Labs
            </h2>
            <span style={{ fontSize: '0.76rem', color: '#10b981', fontWeight: 700 }}>
              {INTERACTIVE_STUDIOS_LIST.length} Studios Active
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '14px'
          }}>
            {INTERACTIVE_STUDIOS_LIST.map((studio, idx) => {
              const StudioIcon = studio.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#4f46e5',
                        background: 'rgba(79, 70, 229, 0.1)',
                        padding: '3px 8px',
                        borderRadius: '6px'
                      }}>
                        {studio.classTag}
                      </span>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: '#10b981',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '3px 8px',
                        borderRadius: '9999px'
                      }}>
                        {studio.badge}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: studio.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        flexShrink: 0
                      }}>
                        <StudioIcon size={20} />
                      </div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                        {studio.title}
                      </h3>
                    </div>

                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                      {studio.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenInteractive) onOpenInteractive(studio.actionKey, studio.classNum);
                      else onSelectClass(studio.classNum);
                    }}
                    style={{
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      color: '#10b981',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span>Launch Interactive Studio</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── 5. Main Class Directory Deck ── */}
      {stageFilter !== 'STUDIOS' && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              Classes &amp; Course Catalog ({filteredClasses.length} Available)
            </h2>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Select any class to inspect books &amp; solutions
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredClasses.map((cls) => {
              const isExpanded = expandedClass === cls.classNum;

              return (
                <div
                  key={cls.classNum}
                  style={{
                    background: 'var(--bg-card)',
                    border: isExpanded ? `1.5px solid #10b981` : '1px solid var(--border-color)',
                    borderRadius: '18px',
                    padding: '16px 18px',
                    boxShadow: isExpanded ? '0 8px 30px rgba(16, 185, 129, 0.15)' : 'var(--shadow-card)',
                    transition: 'var(--transition)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  {/* Card Header Row */}
                  <div
                    onClick={() => setExpandedClass(isExpanded ? null : cls.classNum)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {/* Roman Numeral Badge */}
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: cls.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '1.1rem',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        boxShadow: `0 4px 14px ${cls.glowColor}`,
                        flexShrink: 0
                      }}>
                        {cls.roman}
                      </div>

                      {/* Class Title & Stage Tag */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                            {cls.title}
                          </span>
                          {cls.popularLabel && (
                            <span style={{
                              fontSize: '0.68rem',
                              fontWeight: 800,
                              background: 'rgba(245, 158, 11, 0.14)',
                              color: '#d97706',
                              padding: '2px 8px',
                              borderRadius: '9999px',
                              border: '1px solid rgba(245, 158, 11, 0.3)'
                            }}>
                              {cls.popularLabel}
                            </span>
                          )}
                        </div>

                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                          {cls.stageTag} • Approx {cls.totalChaptersApprox} Chapters Available
                        </span>
                      </div>
                    </div>

                    {/* Toggle / Quick Action */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectClass(cls.classNum);
                        }}
                        style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #04aa6d 100%)',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '7px 14px',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 10px rgba(16, 185, 129, 0.3)'
                        }}
                      >
                        <span>Open Class {cls.classNum}</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Streams Chips Row (if any) */}
                  {cls.streams && cls.streams.length > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                        STREAMS:
                      </span>
                      {cls.streams.map((stream, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            background: 'var(--bg-hover)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-secondary)',
                            padding: '2px 8px',
                            borderRadius: '6px'
                          }}
                        >
                          {stream}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Key Subjects Badges Strip */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    flexWrap: 'wrap',
                    paddingTop: '4px'
                  }}>
                    {cls.keySubjects.map((subj, subIdx) => (
                      <span
                        key={subIdx}
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          background: 'var(--bg-hover)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                          padding: '4px 9px',
                          borderRadius: '8px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <span>{subj.icon}</span>
                        <span>{subj.name}</span>
                        {subj.code && (
                          <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                            ({subj.code})
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Detail Panel */}
                  {isExpanded && (
                    <div style={{
                      marginTop: '6px',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      animation: 'fadeIn 0.2s ease-in-out'
                    }}>
                      {/* NEP Focus callout */}
                      <div style={{
                        background: 'rgba(79, 70, 229, 0.08)',
                        border: '1px solid rgba(79, 70, 229, 0.2)',
                        borderRadius: '10px',
                        padding: '8px 12px',
                        fontSize: '0.78rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.45
                      }}>
                        <strong style={{ color: '#4f46e5' }}>🎯 NEP 2026–27 Focus: </strong>
                        {cls.nepFocus}
                      </div>

                      {/* Associated Studios (if available) */}
                      {cls.studiosAvailable && cls.studiosAvailable.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#10b981' }}>
                            ⚡ ACTIVE INTERACTIVE STUDIOS FOR CLASS {cls.classNum}:
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            {cls.studiosAvailable.map((st, stIdx) => (
                              <button
                                key={stIdx}
                                type="button"
                                onClick={() => {
                                  if (onOpenInteractive) onOpenInteractive(st.key, cls.classNum);
                                  else onSelectClass(cls.classNum);
                                }}
                                style={{
                                  background: 'var(--bg-hover)',
                                  border: '1px solid rgba(16, 185, 129, 0.25)',
                                  color: 'var(--text-primary)',
                                  padding: '7px 12px',
                                  borderRadius: '8px',
                                  fontSize: '0.78rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  textAlign: 'left'
                                }}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <Zap size={14} style={{ color: '#10b981' }} />
                                  <span>{st.label}</span>
                                </span>
                                <ArrowRight size={14} style={{ color: '#10b981' }} />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons Footer */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        flexWrap: 'wrap',
                        gap: '8px',
                        paddingTop: '6px'
                      }}>
                        {onOpenNcertSolutions && (
                          <button
                            type="button"
                            onClick={onOpenNcertSolutions}
                            style={{
                              background: 'transparent',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-secondary)',
                              padding: '6px 14px',
                              borderRadius: '8px',
                              fontSize: '0.76rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Browse Verified Solutions
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => onSelectClass(cls.classNum)}
                          style={{
                            background: '#10b981',
                            color: '#ffffff',
                            border: 'none',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontSize: '0.76rem',
                            fontWeight: 800,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px'
                          }}
                        >
                          <BookOpen size={14} />
                          <span>View Class {cls.classNum} Curriculum</span>
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </section>
      )}

      {/* ── 6. Pedagogical Features & Quality Standards ── */}
      <section style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        padding: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: 'var(--shadow-card)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} style={{ color: '#10b981' }} />
            <h2 style={{ fontSize: '1.18rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
              Nextsem Academy Pedagogical Standards
            </h2>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
            Every class and unit is engineered according to India&apos;s National Education Policy (NEP 2020) &amp; NCF.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '14px'
        }}>
          <div style={{
            background: 'var(--bg-hover)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>📚</span>
              <span>100% Rationalized NCERT Textbooks</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
              Strictly updated for the 2026–2027 academic session. No obsolete topics; line-by-line coverage with official NCERT CDN &amp; Cloud Drive backups.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-hover)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>⚡</span>
              <span>Step-by-Step Verified Solutions</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
              Every exercise problem solved with standard CBSE rubrics, clear formulas, step marks, and key takeaways for quick exam revision.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-hover)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>🌐</span>
              <span>Dual-Language &amp; Bilingual (English &amp; हिंदी)</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
              Both English and Hindi medium students can study with ease using live bilingual toggles and question paper modes.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-hover)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>🚀</span>
              <span>Zero-Interruption Reading</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
              No blocking ad popups, no interstitial modals on downloads, and lightning-fast local hydration with offline storage.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Founder Note & Faculty Statement ── */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(79, 70, 229, 0.08) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.25)',
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '680px' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Nextsem Mission Statement
          </span>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
            Empowering Every Student with World-Class Free Education
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
            &ldquo;High-quality academic curriculum should never be locked behind expensive coaching paywalls. Nextsem Academy brings together 
            authentic NCERT textbooks, solved numericals, and state-of-the-art interactive labs for every learner across India.&rdquo;
          </p>
          <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', marginTop: '2px' }}>
            — Er. Manoj Kumar, Founder &amp; Lead Academic Architect
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSelectClass(12)}
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #04aa6d 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            padding: '10px 18px',
            fontSize: '0.82rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 16px rgba(16, 185, 129, 0.35)',
            whiteSpace: 'nowrap'
          }}
        >
          <span>Start Learning Now</span>
          <ArrowRight size={15} />
        </button>
      </section>

    </div>
  );
};
