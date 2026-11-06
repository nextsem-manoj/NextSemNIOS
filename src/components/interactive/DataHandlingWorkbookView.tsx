import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Trophy,
  Printer,
  Eye,
  EyeOff,
  Sun,
  Moon
} from 'lucide-react';
import {
  CHAPTER_INFO,
  CONCEPTS_DATA,
  EXERCISES_DATA,
  COMPETENCY_QUIZ,
  TOPIC_CHECKPOINTS_DATA
} from '../../data/class6DataHandlingWorkbookData';
import type { Chapter } from '../../data/ncertData';

interface DataHandlingWorkbookViewProps {
  chapter?: Chapter;
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigateClass?: (classNum: number) => void;
  onNavigateSubject?: () => void;
}

type TabType = 'CONCEPTS' | 'WHILE_READING' | 'TALLY_LAB' | 'PICTO_STUDIO' | 'BAR_STUDIO' | 'EXERCISES' | 'QUIZ' | 'WORKSHEET';
type LangMode = 'bilingual' | 'en' | 'hi';

export const DataHandlingWorkbookView: React.FC<DataHandlingWorkbookViewProps> = ({
  chapter: _chapter,
  onBack,
  onNavigateHome,
  onNavigateClass,
  onNavigateSubject
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('WHILE_READING');
  const [lang, setLang] = useState<LangMode>('bilingual');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [exerciseInputs, setExerciseInputs] = useState<Record<string, string>>({});
  const [exerciseFeedback, setExerciseFeedback] = useState<Record<string, 'correct' | 'wrong' | null>>({});

  // While-Reading Checkpoints State
  const [checkpointTopicFilter, setCheckpointTopicFilter] = useState<string>('all');
  const [checkpointAnswers, setCheckpointAnswers] = useState<Record<string, number>>({});
  const [checkpointRevealedHints, setCheckpointRevealedHints] = useState<Record<string, boolean>>({});
  const [checkpointRevealedExplanations, setCheckpointRevealedExplanations] = useState<Record<string, boolean>>({});

  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('nextsem_dark_mode') !== 'false';
  });

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem('nextsem_dark_mode', String(nextTheme));
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
    if (nextTheme) {
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
  };

  // Interactive Tally Lab State
  const [tallyItems, setTallyItems] = useState<Array<{ nameEn: string; nameHi: string; count: number; color: string }>>([
    { nameEn: 'Jalebi', nameHi: 'जलेबी', count: 6, color: '#f59e0b' },
    { nameEn: 'Gulab Jamun', nameHi: 'गुलाब जामुन', count: 9, color: '#ec4899' },
    { nameEn: 'Gujiya', nameHi: 'गुजिया', count: 13, color: '#10b981' },
    { nameEn: 'Barfi', nameHi: 'बर्फी', count: 3, color: '#38bdf8' },
    { nameEn: 'Rasgulla', nameHi: 'रसगुल्ला', count: 7, color: '#a855f7' }
  ]);

  const addTally = (index: number) => {
    setTallyItems(prev => {
      const next = [...prev];
      next[index].count += 1;
      return next;
    });
  };

  const removeTally = (index: number) => {
    setTallyItems(prev => {
      const next = [...prev];
      if (next[index].count > 0) next[index].count -= 1;
      return next;
    });
  };

  const resetTallies = () => {
    setTallyItems([
      { nameEn: 'Jalebi', nameHi: 'जलेबी', count: 0, color: '#f59e0b' },
      { nameEn: 'Gulab Jamun', nameHi: 'गुलाब जामुन', count: 0, color: '#ec4899' },
      { nameEn: 'Gujiya', nameHi: 'गुजिया', count: 0, color: '#10b981' },
      { nameEn: 'Barfi', nameHi: 'बर्फी', count: 0, color: '#38bdf8' },
      { nameEn: 'Rasgulla', nameHi: 'रसगुल्ला', count: 0, color: '#a855f7' }
    ]);
  };

  // Helper to render tally marks
  const renderTallyMarks = (count: number) => {
    const bundles = Math.floor(count / 5);
    const remainder = count % 5;
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {Array.from({ length: bundles }).map((_, i) => (
          <span
            key={`b-${i}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              padding: '2px 8px',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '1.15rem',
              fontWeight: 900,
              letterSpacing: '2px',
              color: '#38bdf8'
            }}
          >
            卌
          </span>
        ))}
        {remainder > 0 && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              padding: '2px 8px',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '1.15rem',
              fontWeight: 900,
              letterSpacing: '2px',
              color: '#10b981'
            }}
          >
            {'|'.repeat(remainder)}
          </span>
        )}
        {count === 0 && <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>- (0)</span>}
      </div>
    );
  };

  // Interactive Pictograph Studio State
  const [pictoScale, setPictoScale] = useState<number>(100);
  const [pictoDataset, setPictoDataset] = useState<'KITES' | 'DOGS' | 'TRACTORS'>('KITES');

  const pictoDataPresets = {
    KITES: {
      nameEn: 'Magan Bhai Kite Sales (Magan Bhai Ki Patang Bikri)',
      nameHi: 'मगन भाई की पतंग बिक्री (जामनगर)',
      icon: '🪁',
      defaultScale: 100,
      items: [
        { labelEn: 'Chaman', labelHi: 'चमन', value: 250 },
        { labelEn: 'Rani', labelHi: 'रानी', value: 300 },
        { labelEn: 'Rukhsana', labelHi: 'रुखसाना', value: 100 },
        { labelEn: 'Jasmeet', labelHi: 'जसमीत', value: 450 },
        { labelEn: 'Jetha Lal', labelHi: 'जेठालाल', value: 250 },
        { labelEn: 'Poonam Ben', labelHi: 'पूनम बेन', value: 700 }
      ]
    },
    DOGS: {
      nameEn: 'Mudhol Hounds in Karnataka Villages',
      nameHi: 'कर्नाटक के गाँवों में मुधोल हाउंड्स श्वान',
      icon: '🐕',
      defaultScale: 6,
      items: [
        { labelEn: 'Village A', labelHi: 'गाँव A', value: 18 },
        { labelEn: 'Village B', labelHi: 'गाँव B', value: 36 },
        { labelEn: 'Village C', labelHi: 'गाँव C', value: 12 },
        { labelEn: 'Village D', labelHi: 'गाँव D', value: 48 },
        { labelEn: 'Village E', labelHi: 'गाँव E', value: 18 },
        { labelEn: 'Village F', labelHi: 'गाँव F', value: 24 }
      ]
    },
    TRACTORS: {
      nameEn: 'Tractors in Five Villages',
      nameHi: 'पाँच गाँवों में ट्रैक्टरों की संख्या',
      icon: '🚜',
      defaultScale: 1,
      items: [
        { labelEn: 'Village A', labelHi: 'गाँव A', value: 6 },
        { labelEn: 'Village B', labelHi: 'गाँव B', value: 5 },
        { labelEn: 'Village C', labelHi: 'गाँव C', value: 8 },
        { labelEn: 'Village D', labelHi: 'गाँव D', value: 3 },
        { labelEn: 'Village E', labelHi: 'गाँव E', value: 6 }
      ]
    }
  };

  const currentPicto = pictoDataPresets[pictoDataset];

  // Interactive Bar Graph Studio State
  const [barOrientation, setBarOrientation] = useState<'vertical' | 'horizontal'>('vertical');
  const [barDataset, setBarDataset] = useState<'TRAFFIC' | 'BUDGET' | 'ACTIVITIES' | 'MOUNTAINS'>('TRAFFIC');

  const barDataPresets = {
    TRAFFIC: {
      titleEn: 'Delhi Crossing Traffic (Vehicles/Hour)',
      titleHi: 'दिल्ली चौराहा ट्रैफिक (वाहन प्रति घंटा)',
      unitEn: 'Vehicles',
      unitHi: 'वाहन',
      scaleUnit: 100,
      data: [
        { labelEn: '6-7 AM', labelHi: '6-7 बजे', value: 150, color: '#38bdf8' },
        { labelEn: '7-8 AM (Peak)', labelHi: '7-8 बजे (चरम)', value: 1200, color: '#f43f5e' },
        { labelEn: '8-9 AM', labelHi: '8-9 बजे', value: 1000, color: '#f59e0b' },
        { labelEn: '9-10 AM', labelHi: '9-10 बजे', value: 800, color: '#10b981' },
        { labelEn: '10-11 AM', labelHi: '10-11 बजे', value: 700, color: '#8b5cf6' },
        { labelEn: '11-12 Noon', labelHi: '11-12 दोपहर', value: 600, color: '#06b6d4' }
      ]
    },
    BUDGET: {
      titleEn: 'Imran Family Monthly Expenditure (₹)',
      titleHi: 'इमरान के परिवार का मासिक व्यय (₹)',
      unitEn: 'Rupees (₹)',
      unitHi: 'रुपये (₹)',
      scaleUnit: 200,
      data: [
        { labelEn: 'Food', labelHi: 'भोजन', value: 3400, color: '#10b981' },
        { labelEn: 'House Rent', labelHi: 'किराया', value: 3000, color: '#38bdf8' },
        { labelEn: 'Misc', labelHi: 'विविध', value: 1200, color: '#f59e0b' },
        { labelEn: 'Education', labelHi: 'शिक्षा', value: 800, color: '#ec4899' },
        { labelEn: 'Transport', labelHi: 'परिवहन', value: 600, color: '#8b5cf6' },
        { labelEn: 'Electricity', labelHi: 'बिजली', value: 400, color: '#f97316' }
      ]
    },
    ACTIVITIES: {
      titleEn: '120 Students Free Time Preferred Activities',
      titleHi: '120 विद्यार्थियों की खाली समय में पसंदीदा गतिविधियाँ',
      unitEn: 'Students',
      unitHi: 'विद्यार्थी',
      scaleUnit: 5,
      data: [
        { labelEn: 'Playing', labelHi: 'खेलना', value: 45, color: '#10b981' },
        { labelEn: 'Story Books', labelHi: 'कहानी पढ़ना', value: 30, color: '#38bdf8' },
        { labelEn: 'Watching TV', labelHi: 'टीवी देखना', value: 20, color: '#f59e0b' },
        { labelEn: 'Painting', labelHi: 'चित्रकला', value: 15, color: '#ec4899' },
        { labelEn: 'Music', labelHi: 'संगीत', value: 10, color: '#8b5cf6' }
      ]
    },
    MOUNTAINS: {
      titleEn: 'World’s 7 Highest Mountain Peaks (Meters)',
      titleHi: 'विश्व के 7 सर्वोच्च पर्वत शिखर (मीटर में)',
      unitEn: 'Meters',
      unitHi: 'मीटर',
      scaleUnit: 1000,
      data: [
        { labelEn: 'Everest (Asia)', labelHi: 'एवरेस्ट (एशिया)', value: 8848, color: '#f43f5e' },
        { labelEn: 'Aconcagua (S.Am)', labelHi: 'एकांकागुआ (द.अम)', value: 6962, color: '#f59e0b' },
        { labelEn: 'Denali (N.Am)', labelHi: 'देनाली (उ.अम)', value: 6194, color: '#10b981' },
        { labelEn: 'Kilimanjaro (Afr)', labelHi: 'किलिमंजारो (अफ्रि)', value: 5895, color: '#38bdf8' },
        { labelEn: 'Elbrus (Europe)', labelHi: 'एल्ब्रस (यूरोप)', value: 5642, color: '#8b5cf6' },
        { labelEn: 'Vinson (Antarc)', labelHi: 'विंसन (अंटार्क)', value: 4892, color: '#06b6d4' },
        { labelEn: 'Kosciuszko (Aus)', labelHi: 'कोज़िअस्को (ऑस)', value: 2228, color: '#14b8a6' }
      ]
    }
  };

  const currentBar = barDataPresets[barDataset];
  const maxBarValue = Math.max(...currentBar.data.map(d => d.value));

  // Interactive Quiz State
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const handleSelectQuizOption = (qId: number, optionIndex: number) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const toggleQuizExplanation = (qId: number) => {
    setShowExplanation(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const calculateScore = () => {
    let score = 0;
    COMPETENCY_QUIZ.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswerIndex) {
        score += 1;
      }
    });
    setQuizScore(score);
    if (score >= 15) {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowExplanation({});
    setQuizScore(null);
  };

  const handleCheckExercise = (id: string, correctVal?: string) => {
    if (!correctVal) return;
    const input = (exerciseInputs[id] || '').trim().toLowerCase();
    const target = correctVal.trim().toLowerCase();
    const isCorrect = input === target || target.includes(input);
    setExerciseFeedback(prev => ({ ...prev, [id]: isCorrect ? 'correct' : 'wrong' }));
  };

  const toggleSolution = (id: string) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-body, #060c18)',
        color: 'var(--text-main, #f8fafc)',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        paddingBottom: '80px'
      }}
    >
      {/* Top Sticky Desktop Complete Breadcrumb Navbar */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 60,
          backgroundColor: isDark ? 'rgba(6, 12, 24, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        {/* Breadcrumb Path */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => (onNavigateHome ? onNavigateHome() : onBack())}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#38bdf8',
              cursor: 'pointer',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            🏠 Home
          </button>
          <span style={{ color: 'var(--text-muted, #94a3b8)' }}>❯</span>
          <button
            onClick={() => (onNavigateClass ? onNavigateClass(6) : onBack())}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#38bdf8',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Class 6
          </button>
          <span style={{ color: 'var(--text-muted, #94a3b8)' }}>❯</span>
          <button
            onClick={() => (onNavigateSubject ? onNavigateSubject() : onBack())}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#38bdf8',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Ganita Prakash
          </button>
          <span style={{ color: 'var(--text-muted, #94a3b8)' }}>❯</span>
          <span style={{ color: '#10b981', fontWeight: 800 }}>Ch 4: Data Handling</span>
        </div>

        {/* Right Controls: Language, Theme, & Print */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Language Switcher */}
          <div
            style={{
              display: 'flex',
              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              padding: '2px',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <button
              onClick={() => setLang('bilingual')}
              style={{
                background: lang === 'bilingual' ? '#3b82f6' : 'transparent',
                color: lang === 'bilingual' ? '#fff' : 'var(--text-muted)',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              द्विभाषी
            </button>
            <button
              onClick={() => setLang('en')}
              style={{
                background: lang === 'en' ? '#3b82f6' : 'transparent',
                color: lang === 'en' ? '#fff' : 'var(--text-muted)',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              style={{
                background: lang === 'hi' ? '#3b82f6' : 'transparent',
                color: lang === 'hi' ? '#fff' : 'var(--text-muted)',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              हिन्दी
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              padding: '6px 10px',
              cursor: 'pointer',
              color: isDark ? '#f59e0b' : '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Print Button */}
          <button
            onClick={triggerPrint}
            title="Print or Save PDF"
            style={{
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.5)',
              borderRadius: '8px',
              padding: '6px 12px',
              cursor: 'pointer',
              color: '#10b981',
              fontWeight: 700,
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Printer size={15} />
            <span>Print PDF</span>
          </button>

          {/* Return to Chapter Button */}
          <button
            onClick={onBack}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              padding: '6px 12px',
              cursor: 'pointer',
              color: '#f8fafc',
              fontSize: '0.8rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ArrowLeft size={15} />
            <span>Back</span>
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 16px' }}>
        {/* Hero Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(16, 185, 129, 0.1) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '20px',
            padding: '28px 24px',
            marginBottom: '24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(56, 189, 248, 0.2)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: 800,
              padding: '4px 14px',
              borderRadius: '9999px',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            <span>NCERT Class 6 Mathematics • Ganita Prakash</span>
          </div>

          <h1
            style={{
              fontSize: '2.1rem',
              fontWeight: 900,
              color: '#ffffff',
              margin: '0 0 10px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}
          >
            Chapter 4: Data Handling and Presentation
          </h1>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#10b981',
              margin: '0 0 16px'
            }}
          >
            अध्याय 4: आँकड़ों का प्रबंधन एवं प्रस्तुतीकरण (Interactive Workbook)
          </h2>

          <p
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              color: 'var(--text-muted, #94a3b8)',
              fontSize: '0.92rem',
              lineHeight: 1.6
            }}
          >
            {lang === 'hi'
              ? CHAPTER_INFO.nepHighlights.hi
              : lang === 'en'
              ? CHAPTER_INFO.nepHighlights.en
              : `${CHAPTER_INFO.nepHighlights.en} | ${CHAPTER_INFO.nepHighlights.hi}`}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '8px',
            marginBottom: '24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {[
            { id: 'CONCEPTS', labelEn: '🌟 Concept Mind Map', labelHi: '🌟 अवधारणा सार' },
            { id: 'WHILE_READING', labelEn: '📖 While-Reading Questions', labelHi: '📖 पढ़ते-पढ़ते प्रश्नोत्तरी' },
            { id: 'TALLY_LAB', labelEn: '✏️ Interactive Tally Lab', labelHi: '✏️ मिलान चिह्न लैब' },
            { id: 'PICTO_STUDIO', labelEn: '🖼️ Pictograph Studio', labelHi: '🖼️ चित्रालेख स्टूडियो' },
            { id: 'BAR_STUDIO', labelEn: '📊 Bar Graph Studio', labelHi: '📊 दंड आलेख स्टूडियो' },
            { id: 'EXERCISES', labelEn: '📖 NCERT Exercises (4.1-4.5)', labelHi: '📖 पाठ्यपुस्तक अभ्यास' },
            { id: 'QUIZ', labelEn: '🎯 20-Q Competency Test', labelHi: '🎯 क्षमता परीक्षा' },
            { id: 'WORKSHEET', labelEn: '🖨️ Printable Worksheet', labelHi: '🖨️ कार्यपत्रक' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              style={{
                background: activeTab === tab.id ? 'linear-gradient(135deg, #0284c7, #0369a1)' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === tab.id ? '#ffffff' : 'var(--text-muted, #94a3b8)',
                border: activeTab === tab.id ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '10px 16px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {lang === 'hi' ? tab.labelHi : tab.labelEn}
            </button>
          ))}
        </div>

        {/* TAB 1: CONCEPTS MIND MAP */}
        {activeTab === 'CONCEPTS' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                {lang === 'hi' ? 'अध्याय अवधारणाएँ एवं मुख्य नियम' : 'Core Concepts & Analytical Guidelines'}
              </h3>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                  background: 'rgba(56, 189, 248, 0.15)',
                  padding: '4px 10px',
                  borderRadius: '6px'
                }}
              >
                5 Pillar Mastery Framework
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '18px' }}>
              {CONCEPTS_DATA.map((concept, idx) => (
                <div
                  key={concept.id}
                  style={{
                    background: 'var(--bg-card, #0c1328)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    borderRadius: '16px',
                    padding: '20px',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: '#10b981',
                          background: 'rgba(16, 185, 129, 0.15)',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        {concept.badge}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pillar #{idx + 1}</span>
                    </div>

                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', margin: '0 0 10px' }}>
                      {lang === 'hi' ? concept.title.hi : concept.title.en}
                    </h4>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                      {lang === 'hi' ? concept.summary.hi : concept.summary.en}
                    </p>

                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', marginBottom: '6px' }}>
                        {lang === 'hi' ? 'मुख्य बिंदु' : 'Key Highlights'}
                      </div>
                      <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.84rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                        {concept.keyPoints.map((pt, pIdx) => (
                          <li key={pIdx} style={{ marginBottom: '6px' }}>
                            {lang === 'hi' ? pt.hi : pt.en}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {concept.formulaOrRule && (
                      <div
                        style={{
                          background: 'rgba(245, 158, 11, 0.1)',
                          borderLeft: '3px solid #f59e0b',
                          padding: '8px 12px',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          color: '#fde68a',
                          marginBottom: '10px'
                        }}
                      >
                        <strong>Rule: </strong> {lang === 'hi' ? concept.formulaOrRule.hi : concept.formulaOrRule.en}
                      </div>
                    )}

                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '10px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        color: '#94a3b8'
                      }}
                    >
                      💡 {lang === 'hi' ? concept.example.hi : concept.example.en}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 1.5: WHILE-READING TOPIC-BY-TOPIC CHECKPOINTS */}
        {activeTab === 'WHILE_READING' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Header & Stats Banner */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(56, 189, 248, 0.08) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      background: '#10b981',
                      color: '#060c18',
                      fontWeight: 900,
                      fontSize: '0.75rem',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase'
                    }}
                  >
                    16 Topics • Pages 74–106
                  </span>
                  <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700 }}>
                    {lang === 'hi' ? 'पाठ्यपुस्तक पढ़ते-पढ़ते लाइव प्रश्नोत्तरी' : 'Live While-Reading Self-Assessment'}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px' }}>
                  {lang === 'hi'
                    ? 'अध्याय 4: प्रत्येक विषय पर पढ़ते समय हल करने योग्य प्रश्न'
                    : 'Class 6 Maths Chapter 4: While-Reading Topic Questions'}
                </h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted, #94a3b8)', maxWidth: '700px', lineHeight: 1.5 }}>
                  {lang === 'hi'
                    ? 'जैसे-जैसे आप गणित प्रकाश का पृष्ठ 74 से 106 पढ़ते हैं, प्रत्येक विषय के बाद इन प्रश्नों को हल करें। तुरंत उत्तर जांचें, संकेत देखें और पाठ्यपुस्तक के वास्तविक संदर्भ को समझें!'
                    : 'As you read through Pages 74 to 106 in Ganita Prakash, pause at each topic to test your comprehension. Instant feedback, hints, and line-by-line textbook references!'}
                </p>
              </div>

              {/* Progress and Score Box */}
              <div
                style={{
                  background: 'var(--bg-card, #0c1328)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  padding: '12px 18px',
                  textAlign: 'right',
                  minWidth: '180px'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {lang === 'hi' ? 'आपकी प्रगति (हल किए गए प्रश्न)' : 'Reading Progress (Solved)'}
                </div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#10b981' }}>
                  {Object.keys(checkpointAnswers).length} / 32{' '}
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    ({Math.round((Object.keys(checkpointAnswers).length / 32) * 100)}%)
                  </span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '9999px',
                    marginTop: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: `${(Object.keys(checkpointAnswers).length / 32) * 100}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #10b981, #38bdf8)',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Topic Filter Pills */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                paddingBottom: '8px',
                scrollbarWidth: 'thin'
              }}
            >
              <button
                onClick={() => setCheckpointTopicFilter('all')}
                style={{
                  background: checkpointTopicFilter === 'all' ? '#10b981' : 'rgba(255, 255, 255, 0.06)',
                  color: checkpointTopicFilter === 'all' ? '#060c18' : 'var(--text-muted, #94a3b8)',
                  border: checkpointTopicFilter === 'all' ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {lang === 'hi' ? 'सभी 16 विषय (पृष्ठ 74–106)' : 'All 16 Topics (Pages 74–106)'}
              </button>
              {TOPIC_CHECKPOINTS_DATA.map((chk, idx) => (
                <button
                  key={chk.id}
                  onClick={() => setCheckpointTopicFilter(chk.id)}
                  style={{
                    background: checkpointTopicFilter === chk.id ? '#38bdf8' : 'rgba(255, 255, 255, 0.05)',
                    color: checkpointTopicFilter === chk.id ? '#060c18' : 'var(--text-muted, #94a3b8)',
                    border: checkpointTopicFilter === chk.id ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  #{idx + 1} {chk.pageReference}
                </button>
              ))}
            </div>

            {/* Checkpoints List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {TOPIC_CHECKPOINTS_DATA.filter(
                chk => checkpointTopicFilter === 'all' || chk.id === checkpointTopicFilter
              ).map((chk, chkIdx) => (
                <div
                  key={chk.id}
                  style={{
                    background: 'var(--bg-card, #0c1328)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
                  }}
                >
                  {/* Checkpoint Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '12px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingBottom: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          color: '#ffffff',
                          fontWeight: 900,
                          fontSize: '0.8rem',
                          padding: '4px 10px',
                          borderRadius: '6px'
                        }}
                      >
                        {chk.topicSection} • {chk.pageReference}
                      </span>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                        {lang === 'hi' ? chk.subtopicTitle.hi : chk.subtopicTitle.en}
                      </h4>
                    </div>
                    {lang === 'bilingual' && (
                      <div style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 700 }}>
                        {chk.subtopicTitle.hi}
                      </div>
                    )}
                  </div>

                  {/* While Reading Context Callout */}
                  <div
                    style={{
                      background: 'rgba(56, 189, 248, 0.08)',
                      borderLeft: '4px solid #38bdf8',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      marginBottom: '20px',
                      fontSize: '0.86rem',
                      lineHeight: 1.6
                    }}
                  >
                    <div style={{ fontWeight: 800, color: '#38bdf8', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>📖</span>
                      <span>
                        {lang === 'hi'
                          ? `पाठ्यपुस्तक में ${chk.pageReference} पढ़ते समय क्या ध्यान दें:`
                          : `What to look for while reading ${chk.pageReference}:`}
                      </span>
                    </div>
                    <p style={{ margin: 0, color: '#e2e8f0' }}>
                      {lang === 'hi' ? chk.whileReadingSummary.hi : chk.whileReadingSummary.en}
                    </p>
                    {lang === 'bilingual' && (
                      <p style={{ margin: '6px 0 0', color: '#94a3b8', fontSize: '0.82rem' }}>
                        {chk.whileReadingSummary.hi}
                      </p>
                    )}
                  </div>

                  {/* Checkpoint Questions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {chk.questions.map((q, qIndex) => {
                      const selectedOpt = checkpointAnswers[q.qId];
                      const isAnswered = selectedOpt !== undefined;
                      const isCorrect = isAnswered && selectedOpt === q.correctAnswer;
                      const isHintOpen = !!checkpointRevealedHints[q.qId];
                      const isExpOpen = !!checkpointRevealedExplanations[q.qId];

                      // Badge styling by question type
                      const typeConfig = {
                        MCQ: { labelEn: '🎯 Multiple Choice Question', labelHi: '🎯 बहुविकल्पीय प्रश्न', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)' },
                        PAUSE_AND_SOLVE: { labelEn: '⏸️ Pause & Solve in Notebook', labelHi: '⏸️ रुकें और नोटबुक में हल करें', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
                        TRUE_FALSE: { labelEn: '⚖️ True or False', labelHi: '⚖️ सत्य या असत्य', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' },
                        SPOT_THE_TRAP: { labelEn: '⚠️ Spot the Common Misconception', labelHi: '⚠️ सावधान! सामान्य गलती पहचानें', color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.15)' }
                      }[q.type] || { labelEn: 'Question', labelHi: 'प्रश्न', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)' };

                      return (
                        <div
                          key={q.qId}
                          style={{
                            background: isAnswered
                              ? isCorrect
                                ? 'rgba(16, 185, 129, 0.06)'
                                : 'rgba(239, 68, 68, 0.06)'
                              : 'rgba(255, 255, 255, 0.03)',
                            border: isAnswered
                              ? isCorrect
                                ? '1px solid rgba(16, 185, 129, 0.4)'
                                : '1px solid rgba(239, 68, 68, 0.4)'
                              : '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            padding: '16px 20px',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {/* Question Meta Row */}
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              gap: '8px',
                              marginBottom: '10px'
                            }}
                          >
                            <span
                              style={{
                                color: typeConfig.color,
                                background: typeConfig.bg,
                                border: `1px solid ${typeConfig.color}40`,
                                padding: '3px 8px',
                                borderRadius: '6px',
                                fontSize: '0.72rem',
                                fontWeight: 800
                              }}
                            >
                              {lang === 'hi' ? typeConfig.labelHi : typeConfig.labelEn}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
                              Q{qIndex + 1} of Topic #{chkIdx + 1}
                            </span>
                          </div>

                          {/* Reading Connection Line */}
                          <div
                            style={{
                              fontSize: '0.78rem',
                              color: '#38bdf8',
                              background: 'rgba(56, 189, 248, 0.08)',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              marginBottom: '10px',
                              display: 'inline-block'
                            }}
                          >
                            <strong>📍 {lang === 'hi' ? 'सीधा पाठ्यपुस्तक संदर्भ: ' : 'Textbook Reference: '}</strong>
                            {lang === 'hi' ? q.readingConnection.hi : q.readingConnection.en}
                          </div>

                          {/* Question Text */}
                          <div style={{ marginBottom: '14px' }}>
                            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.5 }}>
                              {lang === 'hi' ? q.question.hi : q.question.en}
                            </div>
                            {lang === 'bilingual' && (
                              <div style={{ fontSize: '0.92rem', color: '#38bdf8', marginTop: '4px', fontWeight: 600, lineHeight: 1.5 }}>
                                {q.question.hi}
                              </div>
                            )}
                          </div>

                          {/* Options Grid */}
                          {q.options && q.options.length > 0 && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px', marginBottom: '12px' }}>
                              {q.options.map((opt, optIdx) => {
                                const isThisSelected = selectedOpt === optIdx;
                                const isThisCorrect = optIdx === q.correctAnswer;
                                let optBg = 'rgba(255, 255, 255, 0.04)';
                                let optBorder = '1px solid rgba(255, 255, 255, 0.12)';
                                let optColor = '#e2e8f0';

                                if (isAnswered) {
                                  if (isThisSelected) {
                                    if (isCorrect) {
                                      optBg = 'rgba(16, 185, 129, 0.25)';
                                      optBorder = '2px solid #10b981';
                                      optColor = '#10b981';
                                    } else {
                                      optBg = 'rgba(239, 68, 68, 0.25)';
                                      optBorder = '2px solid #ef4444';
                                      optColor = '#f87171';
                                    }
                                  } else if (isThisCorrect && isExpOpen) {
                                    optBg = 'rgba(16, 185, 129, 0.15)';
                                    optBorder = '1px solid #10b981';
                                    optColor = '#34d399';
                                  }
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => {
                                      const isFirstCorrect = checkpointAnswers[q.qId] === undefined && optIdx === q.correctAnswer;
                                      setCheckpointAnswers(prev => ({ ...prev, [q.qId]: optIdx }));
                                      if (isFirstCorrect) {
                                        confetti({ particleCount: 30, spread: 55, origin: { y: 0.8 } });
                                      }
                                    }}
                                    style={{
                                      background: optBg,
                                      border: optBorder,
                                      color: optColor,
                                      borderRadius: '8px',
                                      padding: '10px 14px',
                                      fontSize: '0.86rem',
                                      textAlign: 'left',
                                      cursor: 'pointer',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '10px',
                                      transition: 'all 0.15s ease'
                                    }}
                                  >
                                    <span
                                      style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: isThisSelected
                                          ? isCorrect
                                            ? '#10b981'
                                            : '#ef4444'
                                          : 'rgba(255, 255, 255, 0.1)',
                                        color: isThisSelected ? '#ffffff' : '#94a3b8',
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        flexShrink: 0
                                      }}
                                    >
                                      {String.fromCharCode(65 + optIdx)}
                                    </span>
                                    <div style={{ flex: 1 }}>
                                      <div>{lang === 'hi' ? opt.hi : opt.en}</div>
                                      {lang === 'bilingual' && (
                                        <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>
                                          {opt.hi}
                                        </div>
                                      )}
                                    </div>
                                    {isThisSelected && (
                                      <span>
                                        {isCorrect ? '✅' : '❌'}
                                      </span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {/* Feedback Banner if answered */}
                          {isAnswered && (
                            <div
                              style={{
                                padding: '8px 14px',
                                borderRadius: '8px',
                                fontSize: '0.84rem',
                                fontWeight: 700,
                                marginBottom: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: isCorrect ? 'rgba(16, 185, 129, 0.18)' : 'rgba(239, 68, 68, 0.18)',
                                color: isCorrect ? '#34d399' : '#f87171',
                                border: isCorrect ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)'
                              }}
                            >
                              <span>
                                {isCorrect
                                  ? lang === 'hi'
                                    ? '🎉 शाबाश! आपका उत्तर बिल्कुल सही है।'
                                    : '🎉 Excellent! That is the correct answer.'
                                  : lang === 'hi'
                                  ? '❌ सही नहीं है। पुनः प्रयास करें या नीचे संकेत देखें।'
                                  : '❌ Not quite. Try again or check the hint below.'}
                              </span>
                              <button
                                onClick={() => {
                                  setCheckpointAnswers(prev => {
                                    const next = { ...prev };
                                    delete next[q.qId];
                                    return next;
                                  });
                                }}
                                style={{
                                  background: 'transparent',
                                  border: 'none',
                                  color: 'inherit',
                                  fontSize: '0.75rem',
                                  textDecoration: 'underline',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '4px'
                                }}
                              >
                                <RotateCcw size={12} />
                                <span>{lang === 'hi' ? 'पुनः प्रयास करें' : 'Reset'}</span>
                              </button>
                            </div>
                          )}

                          {/* Action Buttons: Hint & Explanation */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <button
                              onClick={() => {
                                setCheckpointRevealedHints(prev => ({
                                  ...prev,
                                  [q.qId]: !prev[q.qId]
                                }));
                              }}
                              style={{
                                background: isHintOpen ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                color: isHintOpen ? '#fbbf24' : 'var(--text-muted, #94a3b8)',
                                border: isHintOpen ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '6px',
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              <span>💡</span>
                              <span>
                                {isHintOpen
                                  ? lang === 'hi'
                                    ? 'संकेत छिपाएँ'
                                    : 'Hide Hint'
                                  : lang === 'hi'
                                  ? 'संकेत देखें'
                                  : 'Need a Hint?'}
                              </span>
                            </button>

                            <button
                              onClick={() => {
                                setCheckpointRevealedExplanations(prev => ({
                                  ...prev,
                                  [q.qId]: !prev[q.qId]
                                }));
                              }}
                              style={{
                                background: isExpOpen ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                color: isExpOpen ? '#38bdf8' : 'var(--text-muted, #94a3b8)',
                                border: isExpOpen ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '6px',
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              <span>📝</span>
                              <span>
                                {isExpOpen
                                  ? lang === 'hi'
                                    ? 'व्याख्या छिपाएँ'
                                    : 'Hide Explanation'
                                  : lang === 'hi'
                                  ? 'विस्तृत हल व व्याख्या'
                                  : 'Show Explanation'}
                              </span>
                            </button>
                          </div>

                          {/* Collapsible Hint */}
                          {isHintOpen && (
                            <div
                              style={{
                                marginTop: '10px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderLeft: '3px solid #f59e0b',
                                borderRadius: '6px',
                                padding: '10px 14px',
                                fontSize: '0.82rem',
                                color: '#fef3c7',
                                lineHeight: 1.5
                              }}
                            >
                              <strong>💡 {lang === 'hi' ? 'संकेत: ' : 'Thinking Hint: '}</strong>
                              {lang === 'hi' ? q.hint.hi : q.hint.en}
                              {lang === 'bilingual' && (
                                <div style={{ color: '#fde68a', fontSize: '0.78rem', marginTop: '4px' }}>
                                  {q.hint.hi}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Collapsible Explanation */}
                          {isExpOpen && (
                            <div
                              style={{
                                marginTop: '10px',
                                background: 'rgba(16, 185, 129, 0.08)',
                                borderLeft: '3px solid #10b981',
                                borderRadius: '6px',
                                padding: '10px 14px',
                                fontSize: '0.82rem',
                                color: '#d1fae5',
                                lineHeight: 1.5
                              }}
                            >
                              <strong>📝 {lang === 'hi' ? 'अवधारणा व्याख्या: ' : 'Conceptual Reason: '}</strong>
                              {lang === 'hi' ? q.explanation.hi : q.explanation.en}
                              {lang === 'bilingual' && (
                                <div style={{ color: '#a7f3d0', fontSize: '0.78rem', marginTop: '4px' }}>
                                  {q.explanation.hi}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE TALLY LAB */}
        {activeTab === 'TALLY_LAB' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                background: 'var(--bg-card, #0c1328)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px' }}>
                    {lang === 'hi' ? 'श्री नीलेश मिठाई वितरण: लाइव मिलान चिह्न लैब' : 'Shri Nilesh Sweets Distribution: Live Tally Counter'}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    {lang === 'hi'
                      ? 'प्रत्येक मिठाई पर क्लिक करके गिनती बढ़ाएं। 5वीं गिनती पर रेखा स्वतः तिरछी कटकर (卌) बंडल बन जाएगी।'
                      : 'Click the "+" button to add votes. Every 5th vote bundles automatically into a tally mark (卌).'}
                  </p>
                </div>
                <button
                  onClick={resetTallies}
                  style={{
                    background: 'rgba(244, 63, 94, 0.15)',
                    border: '1px solid rgba(244, 63, 94, 0.4)',
                    color: '#f43f5e',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <RotateCcw size={14} />
                  <span>Reset All</span>
                </button>
              </div>

              {/* Tally Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <th style={{ padding: '12px 14px', color: '#38bdf8', fontSize: '0.85rem' }}>
                        {lang === 'hi' ? 'मिठाई का नाम' : 'Sweet Item'}
                      </th>
                      <th style={{ padding: '12px 14px', color: '#10b981', fontSize: '0.85rem' }}>
                        {lang === 'hi' ? 'लाइव मिलान चिह्न (Tally Marks)' : 'Live Tally Marks (5s Bundles)'}
                      </th>
                      <th style={{ padding: '12px 14px', color: '#f59e0b', fontSize: '0.85rem', width: '130px' }}>
                        {lang === 'hi' ? 'बारंबारता (Count)' : 'Frequency (Count)'}
                      </th>
                      <th style={{ padding: '12px 14px', textAlign: 'center', width: '120px' }}>
                        {lang === 'hi' ? 'काउंटर' : 'Action'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tallyItems.map((item, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <td style={{ padding: '12px 14px', fontWeight: 700, color: '#f8fafc' }}>
                          <span style={{ color: item.color, marginRight: '8px' }}>●</span>
                          {lang === 'hi' ? item.nameHi : item.nameEn}
                        </td>
                        <td style={{ padding: '12px 14px' }}>
                          {renderTallyMarks(item.count)}
                        </td>
                        <td style={{ padding: '12px 14px', fontWeight: 800, fontSize: '1.1rem', color: item.color }}>
                          {item.count}
                        </td>
                        <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                          <div style={{ display: 'inline-flex', gap: '6px' }}>
                            <button
                              onClick={() => removeTally(idx)}
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '6px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#f8fafc',
                                fontWeight: 800,
                                cursor: 'pointer'
                              }}
                            >
                              -
                            </button>
                            <button
                              onClick={() => addTally(idx)}
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '6px',
                                border: '1px solid rgba(16, 185, 129, 0.5)',
                                background: 'rgba(16, 185, 129, 0.25)',
                                color: '#10b981',
                                fontWeight: 800,
                                cursor: 'pointer'
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ background: 'rgba(56, 189, 248, 0.08)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 800, color: '#38bdf8' }}>
                        {lang === 'hi' ? 'कुल विद्यार्थी (Total Count)' : 'Total Students Surveyed'}
                      </td>
                      <td style={{ padding: '12px 14px' }}>
                        {renderTallyMarks(tallyItems.reduce((acc, curr) => acc + curr.count, 0))}
                      </td>
                      <td colSpan={2} style={{ padding: '12px 14px', fontWeight: 900, fontSize: '1.2rem', color: '#38bdf8' }}>
                        {tallyItems.reduce((acc, curr) => acc + curr.count, 0)} {lang === 'hi' ? 'विद्यार्थी' : 'Students'}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Tally Concept Tip */}
              <div
                style={{
                  marginTop: '18px',
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: '10px',
                  padding: '14px',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: '#bae6fd'
                }}
              >
                <strong>💡 NCERT Question Reflection (Page 77): </strong>
                {lang === 'hi'
                  ? 'क्या यह सारणी यह जानने के लिए पर्याप्त है कि किस विद्यार्थी को कौन सी मिठाई देनी है? उत्तर: नहीं! यह सारणी केवल यह बताती है कि कुल कितनी मिठाइयाँ खरीदनी हैं। प्रत्येक विद्यार्थी को सही मिठाई देने के लिए नाम के साथ पसंद की अलग सूची बनानी होगी।'
                  : 'Is this frequency table sufficient to distribute sweets to each specific student? Answer: No! It only tells how many sweets of each type to buy. To distribute correctly, you must maintain a nominal roll with each student’s individual choice.'}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PICTOGRAPH STUDIO */}
        {activeTab === 'PICTO_STUDIO' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                background: 'var(--bg-card, #0c1328)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Presets and Scale Selector */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px' }}>
                    {lang === 'hi' ? 'चित्रालेख प्रयोगशाला (Pictograph Studio)' : 'Interactive Pictograph Studio & Scaler'}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    {lang === 'hi' ? currentPicto.nameHi : currentPicto.nameEn}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      setPictoDataset('KITES');
                      setPictoScale(100);
                    }}
                    style={{
                      background: pictoDataset === 'KITES' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    🪁 Kites (100)
                  </button>
                  <button
                    onClick={() => {
                      setPictoDataset('DOGS');
                      setPictoScale(6);
                    }}
                    style={{
                      background: pictoDataset === 'DOGS' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    🐕 Mudhol Dogs (6)
                  </button>
                  <button
                    onClick={() => {
                      setPictoDataset('TRACTORS');
                      setPictoScale(1);
                    }}
                    style={{
                      background: pictoDataset === 'TRACTORS' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    🚜 Tractors (1)
                  </button>
                </div>
              </div>

              {/* Dynamic Scale Controller */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.4rem' }}>{currentPicto.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f8fafc' }}>
                      {lang === 'hi' ? 'सक्रिय पैमाना (Key / Scale)' : 'Current Key / Scale'}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>
                      1 {currentPicto.icon} = {pictoScale} {lang === 'hi' ? 'इकाइयाँ' : 'units'}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {lang === 'hi' ? 'पैमाना बदलें:' : 'Adjust Scale:'}
                  </span>
                  {[1, 5, 6, 10, 50, 100].map(sVal => (
                    <button
                      key={sVal}
                      onClick={() => setPictoScale(sVal)}
                      style={{
                        background: pictoScale === sVal ? '#10b981' : 'rgba(255, 255, 255, 0.06)',
                        color: pictoScale === sVal ? '#000' : '#f8fafc',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                    >
                      {sVal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rendered Pictograph Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <th style={{ padding: '12px 14px', color: '#38bdf8', fontSize: '0.85rem', width: '200px' }}>
                        {lang === 'hi' ? 'श्रेणी / नाम' : 'Category / Person'}
                      </th>
                      <th style={{ padding: '12px 14px', color: '#f59e0b', fontSize: '0.85rem', width: '120px' }}>
                        {lang === 'hi' ? 'वास्तविक मान' : 'Actual Value'}
                      </th>
                      <th style={{ padding: '12px 14px', color: '#10b981', fontSize: '0.85rem' }}>
                        {lang === 'hi' ? 'चित्रालेख प्रदर्शन' : 'Pictograph Display'} (1 {currentPicto.icon} = {pictoScale})
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPicto.items.map((item, idx) => {
                      const fullSymbols = Math.floor(item.value / pictoScale);
                      const remainder = item.value % pictoScale;
                      const hasHalf = remainder >= pictoScale * 0.4 && remainder <= pictoScale * 0.6;
                      const hasOddFraction = remainder > 0 && !hasHalf;

                      return (
                        <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <td style={{ padding: '12px 14px', fontWeight: 700, color: '#f8fafc' }}>
                            {lang === 'hi' ? item.labelHi : item.labelEn}
                          </td>
                          <td style={{ padding: '12px 14px', fontWeight: 800, color: '#f59e0b' }}>
                            {item.value}
                          </td>
                          <td style={{ padding: '12px 14px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                              {Array.from({ length: fullSymbols }).map((_, sIdx) => (
                                <span
                                  key={sIdx}
                                  title={`1 symbol = ${pictoScale}`}
                                  style={{
                                    fontSize: '1.4rem',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                                    cursor: 'default'
                                  }}
                                >
                                  {currentPicto.icon}
                                </span>
                              ))}

                              {hasHalf && (
                                <span
                                  title={`Half symbol = ~${Math.round(pictoScale / 2)}`}
                                  style={{
                                    fontSize: '1.4rem',
                                    opacity: 0.6,
                                    transform: 'scale(0.85)',
                                    display: 'inline-block',
                                    borderBottom: '2px dashed #f59e0b',
                                    borderRadius: '4px'
                                  }}
                                >
                                  {currentPicto.icon}½
                                </span>
                              )}

                              {hasOddFraction && (
                                <span
                                  style={{
                                    fontSize: '0.72rem',
                                    color: '#f43f5e',
                                    background: 'rgba(244, 63, 94, 0.15)',
                                    border: '1px solid rgba(244, 63, 94, 0.3)',
                                    padding: '2px 6px',
                                    borderRadius: '4px'
                                  }}
                                >
                                  +{remainder} (fractional challenge!)
                                </span>
                              )}

                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '6px' }}>
                                ({fullSymbols} {hasHalf ? '+ ½' : ''} symbols)
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Critical Thinking Note */}
              <div
                style={{
                  marginTop: '18px',
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '10px',
                  padding: '14px',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: '#fef08a'
                }}
              >
                <strong>🧠 NEP 2020 Conceptual Inquiry (Page 83): </strong>
                {lang === 'hi'
                  ? 'यदि कक्षा में 33 या 27 विद्यार्थी उपस्थित हों, तो 1 प्रतीक = 10 लेने पर क्या समस्या आएगी? उत्तर: 3 या 7 छात्रों को दर्शाने के लिए प्रतीक को 3/10 या 7/10 में काटना सटीक रूप से संभव नहीं है। यही कारण है कि बड़े या विषम आँकड़ों के लिए दंड आलेख (Bar Graph) अधिक विश्वसनीय होता है।'
                  : 'What challenge arises if a class has 33 or 27 students when scale is 1 symbol = 10? Answer: Drawing 3/10 or 7/10 of a symbol accurately is impossible. This fundamental limitation makes Bar Graphs far superior for detailed, large-scale data!'}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: BAR GRAPH STUDIO */}
        {activeTab === 'BAR_STUDIO' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                background: 'var(--bg-card, #0c1328)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Presets and Controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px' }}>
                    {lang === 'hi' ? 'दंड आलेख स्टूडियो (Bar Graph Studio)' : 'Interactive Bar Graph Studio'}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    {lang === 'hi' ? currentBar.titleHi : currentBar.titleEn}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setBarDataset('TRAFFIC')}
                    style={{
                      background: barDataset === 'TRAFFIC' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    🚗 Traffic (1200)
                  </button>
                  <button
                    onClick={() => setBarDataset('BUDGET')}
                    style={{
                      background: barDataset === 'BUDGET' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    💰 Budget (₹3400)
                  </button>
                  <button
                    onClick={() => setBarDataset('ACTIVITIES')}
                    style={{
                      background: barDataset === 'ACTIVITIES' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    🎨 Activities (120)
                  </button>
                  <button
                    onClick={() => setBarDataset('MOUNTAINS')}
                    style={{
                      background: barDataset === 'MOUNTAINS' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    🏔️ 7 Summits
                  </button>
                </div>
              </div>

              {/* Orientation Switcher */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}
              >
                <span style={{ fontSize: '0.82rem', color: '#bae6fd', fontWeight: 600 }}>
                  {lang === 'hi'
                    ? 'दंड का प्रकार (स्तंभ vs क्षैतिज):'
                    : 'Bar Orientation (Vertical Column vs Horizontal):'}
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setBarOrientation('vertical')}
                    style={{
                      background: barOrientation === 'vertical' ? '#10b981' : 'rgba(255, 255, 255, 0.08)',
                      color: barOrientation === 'vertical' ? '#000' : '#fff',
                      border: 'none',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    ⬆️ Column Graph (Vertical)
                  </button>
                  <button
                    onClick={() => setBarOrientation('horizontal')}
                    style={{
                      background: barOrientation === 'horizontal' ? '#10b981' : 'rgba(255, 255, 255, 0.08)',
                      color: barOrientation === 'horizontal' ? '#000' : '#fff',
                      border: 'none',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    ➡️ Bar Graph (Horizontal)
                  </button>
                </div>
              </div>

              {/* Graph Container */}
              {barOrientation === 'vertical' ? (
                // Vertical Column Graph
                <div
                  style={{
                    background: 'rgba(6, 12, 24, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '24px 16px 12px',
                    position: 'relative'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700, marginBottom: '12px' }}>
                    ▲ Y-Axis: {lang === 'hi' ? currentBar.unitHi : currentBar.unitEn} (Max: {maxBarValue})
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-around',
                      height: '280px',
                      borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                      borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
                      padding: '0 10px',
                      gap: '12px'
                    }}
                  >
                    {currentBar.data.map((bar, bIdx) => {
                      const heightPercent = Math.max(6, Math.round((bar.value / maxBarValue) * 100));
                      return (
                        <div
                          key={bIdx}
                          style={{
                            flex: 1,
                            maxWidth: '75px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'flex-end'
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 800,
                              color: bar.color,
                              marginBottom: '6px'
                            }}
                          >
                            {bar.value}
                          </span>
                          <div
                            style={{
                              width: '100%',
                              height: `${heightPercent}%`,
                              background: `linear-gradient(180deg, ${bar.color}, rgba(0, 0, 0, 0.4))`,
                              border: `1.5px solid ${bar.color}`,
                              borderBottom: 'none',
                              borderTopLeftRadius: '6px',
                              borderTopRightRadius: '6px',
                              boxShadow: `0 4px 14px ${bar.color}40`,
                              transition: 'height 0.4s ease'
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* X-Axis Labels */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      padding: '10px 10px 0',
                      gap: '12px'
                    }}
                  >
                    {currentBar.data.map((bar, bIdx) => (
                      <div
                        key={bIdx}
                        style={{
                          flex: 1,
                          maxWidth: '75px',
                          textAlign: 'center',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#e2e8f0',
                          wordBreak: 'break-word',
                          lineHeight: 1.2
                        }}
                      >
                        {lang === 'hi' ? bar.labelHi : bar.labelEn}
                      </div>
                    ))}
                  </div>

                  <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', marginTop: '12px' }}>
                    ► X-Axis: {lang === 'hi' ? 'श्रेणियाँ / समय / मद' : 'Categories / Time / Items'} (Uniform Width & Equal Gaps)
                  </div>
                </div>
              ) : (
                // Horizontal Bar Graph
                <div
                  style={{
                    background: 'rgba(6, 12, 24, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}
                >
                  {currentBar.data.map((bar, bIdx) => {
                    const widthPercent = Math.max(5, Math.round((bar.value / maxBarValue) * 100));
                    return (
                      <div key={bIdx}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                          <span style={{ color: '#f8fafc' }}>{lang === 'hi' ? bar.labelHi : bar.labelEn}</span>
                          <span style={{ color: bar.color }}>
                            {bar.value} {lang === 'hi' ? currentBar.unitHi : currentBar.unitEn}
                          </span>
                        </div>
                        <div
                          style={{
                            height: '24px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            borderRadius: '6px',
                            overflow: 'hidden'
                          }}
                        >
                          <div
                            style={{
                              height: '100%',
                              width: `${widthPercent}%`,
                              background: `linear-gradient(90deg, ${bar.color}, ${bar.color}88)`,
                              borderRadius: '6px',
                              boxShadow: `0 2px 8px ${bar.color}50`,
                              transition: 'width 0.4s ease'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Aesthetic Lesson */}
              <div
                style={{
                  marginTop: '18px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '10px',
                  padding: '14px',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: '#a7f3d0'
                }}
              >
                <strong>🎨 NCERT Section 4.5 Aesthetics Rule (Page 103): </strong>
                {lang === 'hi'
                  ? 'पर्वत की ऊँचाई या मानव कद ज़मीन से ऊपर की ओर बढ़ते हैं, इसलिए इनके लिए ऊर्ध्वाधर स्तंभ आलेख (Vertical Columns) सबसे उपयुक्त हैं। इसके विपरीत, नदियों की लंबाई या यात्रा की दूरी ज़मीन पर समानांतर होती है, इसलिए उनके लिए क्षैतिज दंड (Horizontal Bars) स्वाभाविक और सटीक होते हैं।'
                  : 'Mountain peaks and human heights grow upwards from the surface of the earth, so vertical column graphs feel intuitive and evocative. Conversely, rivers flow horizontally across land, so horizontal bars naturally represent their geographic span!'}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: NCERT EXERCISES & SOLUTIONS */}
        {activeTab === 'EXERCISES' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                {lang === 'hi' ? 'पाठ्यपुस्तक अभ्यास एवं सम्पूर्ण चरणबद्ध हल' : 'NCERT Textbook Exercises & Step-by-Step Solutions'}
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 700 }}>
                {EXERCISES_DATA.length} Complete Problem Sets (Pages 75–103)
              </span>
            </div>

            {EXERCISES_DATA.map(ex => (
              <div
                key={ex.id}
                style={{
                  background: 'var(--bg-card, #0c1328)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: '16px',
                  padding: '22px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        background: '#0284c7',
                        color: '#fff',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {ex.section}
                    </span>
                    <span
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: '#94a3b8',
                        fontSize: '0.72rem',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      Page {ex.pageNumber}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b' }}>
                    {ex.questionNumber}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#ffffff', margin: '0 0 8px' }}>
                  {lang === 'hi' ? ex.title.hi : ex.title.en}
                </h4>

                {ex.context && (
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '14px' }}>
                    {lang === 'hi' ? ex.context.hi : ex.context.en}
                  </p>
                )}

                {/* Optional Table Data */}
                {ex.tableData && (
                  <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                      <thead>
                        <tr style={{ background: 'rgba(255, 255, 255, 0.06)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                          {ex.tableData.headers.map((h, hIdx) => (
                            <th key={hIdx} style={{ padding: '8px 12px', color: '#38bdf8' }}>
                              {lang === 'hi' ? h.hi : h.en}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {ex.tableData.rows.map((r, rIdx) => (
                          <tr key={rIdx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                            <td style={{ padding: '8px 12px', fontWeight: 700, color: '#f8fafc' }}>
                              {lang === 'hi' ? r.label.hi : r.label.en}
                            </td>
                            {r.values.map((v, vIdx) => (
                              <td key={vIdx} style={{ padding: '8px 12px', color: '#e2e8f0' }}>
                                {v}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Sub-Questions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {ex.subQuestions.map(sq => {
                    const subId = `${ex.id}-${sq.part}`;
                    const feedback = exerciseFeedback[subId];

                    return (
                      <div
                        key={sq.part}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '10px',
                          padding: '14px'
                        }}
                      >
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
                          <span style={{ color: '#38bdf8', marginRight: '6px' }}>({sq.part})</span>
                          {lang === 'hi' ? sq.question.hi : sq.question.en}
                        </div>

                        {/* Interactive Input or Fill-in */}
                        {sq.correctValue && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
                            <input
                              type="text"
                              placeholder={lang === 'hi' ? 'उत्तर दर्ज करें...' : 'Type answer...'}
                              value={exerciseInputs[subId] || ''}
                              onChange={e =>
                                setExerciseInputs(prev => ({ ...prev, [subId]: e.target.value }))
                              }
                              style={{
                                background: 'rgba(6, 12, 24, 0.9)',
                                border: feedback === 'correct' ? '1px solid #10b981' : feedback === 'wrong' ? '1px solid #f43f5e' : '1px solid rgba(255, 255, 255, 0.2)',
                                color: '#f8fafc',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                fontSize: '0.85rem',
                                width: '180px'
                              }}
                            />
                            <button
                              onClick={() => handleCheckExercise(subId, sq.correctValue)}
                              style={{
                                background: 'rgba(56, 189, 248, 0.2)',
                                border: '1px solid rgba(56, 189, 248, 0.4)',
                                color: '#38bdf8',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              Check
                            </button>
                            {feedback === 'correct' && (
                              <span style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 800 }}>
                                ✓ {lang === 'hi' ? 'बिल्कुल सही!' : 'Correct!'}
                              </span>
                            )}
                            {feedback === 'wrong' && (
                              <span style={{ color: '#f43f5e', fontSize: '0.8rem', fontWeight: 700 }}>
                                ✗ {lang === 'hi' ? 'पुनः प्रयास करें या हल देखें' : 'Try again or view solution'}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Reveal Solution Button */}
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                          <button
                            onClick={() => toggleSolution(subId)}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: '#10b981',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: 0
                            }}
                          >
                            {revealedSolutions[subId] ? <EyeOff size={13} /> : <Eye size={13} />}
                            <span>
                              {revealedSolutions[subId]
                                ? (lang === 'hi' ? 'हल छिपाएँ' : 'Hide Solution')
                                : (lang === 'hi' ? 'NCERT हल देखें' : 'View Official Solution')}
                            </span>
                          </button>
                        </div>

                        {/* Solution Block */}
                        {revealedSolutions[subId] && (
                          <div
                            style={{
                              marginTop: '10px',
                              background: 'rgba(16, 185, 129, 0.1)',
                              borderLeft: '3px solid #10b981',
                              padding: '10px 14px',
                              borderRadius: '4px',
                              fontSize: '0.85rem',
                              color: '#a7f3d0',
                              lineHeight: 1.5
                            }}
                          >
                            <strong>Ans: </strong> {lang === 'hi' ? sq.answer.hi : sq.answer.en}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 6: COMPETENCY TEST (20 QUESTIONS) */}
        {activeTab === 'QUIZ' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Quiz Banner & Filter */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(56, 189, 248, 0.1) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: '16px',
                padding: '22px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 4px' }}>
                  {lang === 'hi' ? 'NEP 2020 क्षमता आधारित परीक्षा (20 प्रश्न)' : 'NEP 2020 Competency Assessment (20 Questions)'}
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0 }}>
                  {lang === 'hi'
                    ? 'सभी प्रश्नों के उत्तर दें और "स्कोर देखें" पर क्लिक करके तत्काल परिणाम प्राप्त करें।'
                    : 'Select your answers and click "Submit & Check Score" for instant feedback and celebration!'}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {quizScore !== null ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        background: quizScore >= 15 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                        border: quizScore >= 15 ? '1px solid #10b981' : '1px solid #f59e0b',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        fontWeight: 900,
                        fontSize: '1rem',
                        color: quizScore >= 15 ? '#10b981' : '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Trophy size={16} />
                      <span>{quizScore} / {COMPETENCY_QUIZ.length} Marks</span>
                    </div>
                    <button
                      onClick={resetQuiz}
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#f8fafc',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Retry
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={calculateScore}
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
                    }}
                  >
                    <CheckCircle2 size={16} />
                    <span>Submit & Check Score</span>
                  </button>
                )}
              </div>
            </div>

            {/* Questions List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {COMPETENCY_QUIZ.map((q, idx) => {
                const selected = userAnswers[q.id];
                const isCorrect = selected === q.correctAnswerIndex;

                return (
                  <div
                    key={q.id}
                    style={{
                      background: 'var(--bg-card, #0c1328)',
                      border: quizScore !== null ? (isCorrect ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid rgba(244, 63, 94, 0.5)') : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '14px',
                      padding: '18px 20px',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: '#38bdf8',
                          background: 'rgba(56, 189, 248, 0.15)',
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        Q{idx + 1} • {q.category}
                      </span>
                      {quizScore !== null && (
                        <span style={{ fontSize: '0.78rem', fontWeight: 800, color: isCorrect ? '#10b981' : '#f43f5e' }}>
                          {isCorrect ? '✓ Correct (+1)' : '✗ Incorrect (0)'}
                        </span>
                      )}
                    </div>

                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', margin: '0 0 14px', lineHeight: 1.5 }}>
                      {lang === 'hi' ? q.question.hi : q.question.en}
                    </h4>

                    {/* Options */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px', marginBottom: '12px' }}>
                      {q.options.map((opt, oIdx) => {
                        const isThisSelected = selected === oIdx;
                        let optBorder = '1px solid rgba(255, 255, 255, 0.12)';
                        let optBg = 'rgba(255, 255, 255, 0.03)';
                        let optColor = '#e2e8f0';

                        if (isThisSelected) {
                          optBorder = '1.5px solid #38bdf8';
                          optBg = 'rgba(56, 189, 248, 0.18)';
                          optColor = '#38bdf8';
                        }

                        if (quizScore !== null) {
                          if (oIdx === q.correctAnswerIndex) {
                            optBorder = '1.5px solid #10b981';
                            optBg = 'rgba(16, 185, 129, 0.2)';
                            optColor = '#10b981';
                          } else if (isThisSelected && !isCorrect) {
                            optBorder = '1.5px solid #f43f5e';
                            optBg = 'rgba(244, 63, 94, 0.2)';
                            optColor = '#f43f5e';
                          }
                        }

                        return (
                          <div
                            key={oIdx}
                            onClick={() => handleSelectQuizOption(q.id, oIdx)}
                            style={{
                              border: optBorder,
                              background: optBg,
                              color: optColor,
                              padding: '10px 14px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '0.85rem',
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <span
                              style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                border: `1px solid ${optColor}`,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.72rem',
                                flexShrink: 0
                              }}
                            >
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span>{lang === 'hi' ? opt.hi : opt.en}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Hint / Explanation Toggle */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <button
                        onClick={() => toggleQuizExplanation(q.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#38bdf8',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <HelpCircle size={13} />
                        <span>{showExplanation[q.id] ? 'Hide Hint & Explanation' : 'Hint & Explanation'}</span>
                      </button>
                    </div>

                    {showExplanation[q.id] && (
                      <div
                        style={{
                          marginTop: '10px',
                          background: 'rgba(56, 189, 248, 0.08)',
                          borderLeft: '3px solid #38bdf8',
                          padding: '10px 12px',
                          borderRadius: '4px',
                          fontSize: '0.82rem',
                          color: '#bae6fd'
                        }}
                      >
                        <div>
                          <strong>Hint: </strong> {lang === 'hi' ? q.hint.hi : q.hint.en}
                        </div>
                        <div style={{ marginTop: '4px' }}>
                          <strong>Explanation: </strong> {lang === 'hi' ? q.explanation.hi : q.explanation.en}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 7: PRINTABLE WORKSHEET */}
        {activeTab === 'WORKSHEET' && (
          <div
            style={{
              background: '#ffffff',
              color: '#0f172a',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Worksheet Header */}
            <div style={{ textAlign: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '16px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, margin: '0 0 6px', color: '#0f172a' }}>
                NCERT CLASS 6 MATHEMATICS • GANITA PRAKASH
              </h2>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 8px', color: '#0369a1' }}>
                Chapter 4: Data Handling and Presentation — Student Practice Worksheet
              </h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569' }}>
                Name: _______________________________ | Roll No: __________ | Date: ____________ | Score: _____ / 30
              </p>
            </div>

            {/* Section A: Definitions */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '10px', color: '#0f172a' }}>
                SECTION A: Conceptual Short Answer Questions (6 Marks)
              </h4>
              <ol style={{ paddingLeft: '20px', fontSize: '0.88rem', lineHeight: 1.8 }}>
                <li>Define Data. Give one real-life example of data collected in your school.</li>
                <li>Write the tally mark representation for the numbers: (a) 7, (b) 13, (c) 18.</li>
                <li>What is the main limitation of presenting large numerical data using a pictograph?</li>
              </ol>
            </div>

            {/* Section B: Tally & Frequency Table */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '10px', color: '#0f172a' }}>
                SECTION B: Frequency Distribution Table (8 Marks)
              </h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '10px' }}>
                A die was rolled 25 times and the following outcomes were recorded:
                <br />
                <strong>3, 5, 2, 1, 6, 4, 3, 2, 5, 5, 1, 4, 6, 2, 3, 3, 5, 4, 1, 2, 6, 5, 3, 4, 2</strong>
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9' }}>
                    <th style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>Die Outcome</th>
                    <th style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>Tally Marks</th>
                    <th style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>Frequency (No. of Times)</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <tr key={num}>
                      <td style={{ border: '1px solid #cbd5e1', padding: '6px 10px', fontWeight: 700 }}>Number {num}</td>
                      <td style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>&nbsp;</td>
                      <td style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section C: Bar Graph Drawing */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '10px', color: '#0f172a' }}>
                SECTION C: Bar Graph Drawing & Interpretation (10 Marks)
              </h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '8px' }}>
                Draw a neat vertical bar graph for the following monthly expenditure of a family. Take scale: <strong>1 unit length = ₹500</strong>.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #cbd5e1', fontSize: '0.85rem', marginBottom: '16px' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9' }}>
                    <th style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>Item</th>
                    <th style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>Food</th>
                    <th style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>Rent</th>
                    <th style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>Education</th>
                    <th style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>Transport</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: '1px solid #cbd5e1', padding: '6px 10px', fontWeight: 700 }}>Expenditure (₹)</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>₹3500</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>₹3000</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>₹1500</td>
                    <td style={{ border: '1px solid #cbd5e1', padding: '6px 10px' }}>₹1000</td>
                  </tr>
                </tbody>
              </table>
              <div
                style={{
                  height: '140px',
                  border: '1px dashed #94a3b8',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64748b',
                  fontSize: '0.8rem'
                }}
              >
                [Space for Student Graph Drawing]
              </div>
            </div>

            {/* Section D: Aesthetic Reasoning */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '10px', color: '#0f172a' }}>
                SECTION D: Critical Thinking & Aesthetics (6 Marks)
              </h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                Why does using triangles to represent mountain heights in an infographic accidentally mislead the viewer? Explain using the Equal Width Principle.
              </p>
              <div style={{ minHeight: '60px', borderBottom: '1px dotted #94a3b8' }} />
            </div>

            {/* Print Button inside Worksheet */}
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button
                onClick={triggerPrint}
                style={{
                  background: '#0284c7',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                🖨️ Click to Print Student Worksheet
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
