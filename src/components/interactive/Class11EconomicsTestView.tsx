import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  CLASS_11_ECONOMICS_TEST_QUESTIONS,
  type TestQuestion
} from '../../data/class11EconomicsTestData';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Clock,
  Printer,
  ChevronRight,
  ChevronLeft,
  Zap,
  Bookmark,
  Shuffle,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Class11EconomicsTestViewProps {
  onBackToDashboard: () => void;
}

interface PreparedQuestion extends TestQuestion {
  shuffledOrder: number[]; // e.g. [2, 0, 3, 1] -> index in original array
  currentOptions: string[];
  currentOptionsHinglish: string[];
  currentCorrectIndex: number;
}

// Fisher-Yates shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const Class11EconomicsTestView: React.FC<Class11EconomicsTestViewProps> = ({
  onBackToDashboard
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'hinglish' | 'english'>('hinglish');
  const [activeMode, setActiveMode] = useState<'practice' | 'exam'>('practice');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [shuffleSeed, setShuffleSeed] = useState<number>(1);
  const [isQuestionOrderShuffled, setIsQuestionOrderShuffled] = useState(false);

  // Active raw questions based on chapter filter
  const rawQuestions = useMemo(() => {
    return selectedChapter === 'all'
      ? CLASS_11_ECONOMICS_TEST_QUESTIONS
      : CLASS_11_ECONOMICS_TEST_QUESTIONS.filter(q => q.chapterNumber === selectedChapter);
  }, [selectedChapter]);

  // Prepared questions with dynamically shuffled options
  const preparedQuestions: PreparedQuestion[] = useMemo(() => {
    let list = [...rawQuestions];
    if (isQuestionOrderShuffled) {
      list = shuffleArray(list);
    }

    return list.map(q => {
      // Create a shuffled permutation of [0, 1, 2, 3]
      const order = shuffleArray([0, 1, 2, 3]);
      const currentOptions = order.map(idx => q.options[idx]);
      const currentOptionsHinglish = order.map(idx => q.optionsHinglish[idx]);
      const currentCorrectIndex = order.indexOf(q.correctIndex);

      return {
        ...q,
        shuffledOrder: order,
        currentOptions,
        currentOptionsHinglish,
        currentCorrectIndex
      };
    });
  }, [rawQuestions, shuffleSeed, isQuestionOrderShuffled]);

  // Active question index
  const [currentIndex, setCurrentIndex] = useState(0);

  // User responses { questionId: selectedShuffledOptionIndex }
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  
  // Exam submission state
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  
  // Timer for Exam Mode (in seconds)
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('class11_economics_test_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setUserAnswers({});
    setIsExamSubmitted(false);
  }, [selectedChapter]);

  // Trigger reshuffle
  const handleReshuffle = useCallback(() => {
    setShuffleSeed(prev => prev + 1);
    setUserAnswers({});
    setIsExamSubmitted(false);
    if (activeMode === 'exam') {
      setTimeLeft(1200);
      setIsTimerRunning(true);
    }
    setCurrentIndex(0);
  }, [activeMode]);

  // Exam submission handler
  const handleExamSubmit = useCallback(() => {
    setIsExamSubmitted(true);
    setIsTimerRunning(false);
    
    // Confetti if good score (>= 70%)
    let correctCount = 0;
    preparedQuestions.forEach(q => {
      if (userAnswers[q.id] === q.currentCorrectIndex) {
        correctCount++;
      }
    });

    const percent = preparedQuestions.length > 0 ? Math.round((correctCount / preparedQuestions.length) * 100) : 0;
    if (percent >= 70) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  }, [preparedQuestions, userAnswers]);

  // Timer logic in Exam Mode
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (activeMode === 'exam' && isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleExamSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeMode, isTimerRunning, timeLeft, handleExamSubmit]);

  // Switch between Practice and Exam modes
  const handleModeChange = (newMode: 'practice' | 'exam') => {
    setActiveMode(newMode);
    setUserAnswers({});
    setIsExamSubmitted(false);
    setCurrentIndex(0);
    if (newMode === 'exam') {
      setTimeLeft(1200);
      setIsTimerRunning(true);
    } else {
      setIsTimerRunning(false);
    }
  };

  // Toggle Bookmark
  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('class11_economics_test_bookmarks', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Option selection
  const handleSelectOption = (optionIndex: number) => {
    if (activeMode === 'exam' && isExamSubmitted) return;
    const currentQ = preparedQuestions[currentIndex];
    if (!currentQ) return;

    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  // Calculations for scores
  const scoreStats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    preparedQuestions.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans !== undefined) {
        if (ans === q.currentCorrectIndex) correct++;
        else wrong++;
      }
    });
    const totalAnswered = correct + wrong;
    const percentage = preparedQuestions.length > 0 ? Math.round((correct / preparedQuestions.length) * 100) : 0;
    return { correct, wrong, totalAnswered, percentage };
  }, [preparedQuestions, userAnswers]);

  // Active question
  const currentQ = preparedQuestions[currentIndex];

  // Format time (mm:ss)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      paddingBottom: '80px'
    }}>
      {/* ── Top Breadcrumbs Bar (Mandatory Rule) ── */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', flexWrap: 'wrap' }}>
          <button
            onClick={onBackToDashboard}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: 0,
              fontSize: '0.82rem'
            }}
          >
            🏠 Home
          </button>
          <span style={{ color: 'var(--text-muted)' }}>❯</span>
          <span style={{ color: 'var(--text-muted)' }}>Class 11</span>
          <span style={{ color: 'var(--text-muted)' }}>❯</span>
          <span style={{ color: '#04AA6D', fontWeight: 700 }}>Economics (IED • keec1dd)</span>
          <span style={{ color: 'var(--text-muted)' }}>❯</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>Ch 1 &amp; 2 Mega Test</span>
        </div>

        <button
          onClick={onBackToDashboard}
          style={{
            background: 'var(--bg-hover)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            padding: '6px 14px',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ArrowLeft size={14} /> Back to Chapters
        </button>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 16px' }}>
        {/* ── Header Title & Subtitle Card ── */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(4, 170, 109, 0.12) 0%, rgba(16, 185, 129, 0.05) 100%)',
          border: '1px solid rgba(4, 170, 109, 0.35)',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '20px',
          boxShadow: 'var(--shadow-card)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(4, 170, 109, 0.2)', border: '1px solid rgba(4, 170, 109, 0.4)', borderRadius: '9999px', padding: '4px 12px', fontSize: '0.72rem', fontWeight: 800, color: '#04AA6D', marginBottom: '8px' }}>
                <Sparkles size={12} /> NCERT Class 11 • Indian Economic Development
              </div>
              <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: '0 0 6px 0', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                Economics Chapters 1 &amp; 2 Assessment Test
              </h1>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Based directly on NCERT Official PDFs: <strong>keec101</strong> (Eve of Independence 1947) &amp; <strong>keec102</strong> (Indian Economy 1950–1990). Complete bilingual explanations with key concepts and page references.
              </p>
            </div>

            {/* Quick Controls: Language Toggle & Print */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {/* Language Selector */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '3px',
                display: 'flex',
                gap: '2px'
              }}>
                <button
                  onClick={() => setSelectedLanguage('hinglish')}
                  style={{
                    background: selectedLanguage === 'hinglish' ? '#04AA6D' : 'transparent',
                    color: selectedLanguage === 'hinglish' ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '7px',
                    padding: '5px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  🗣️ Hinglish
                </button>
                <button
                  onClick={() => setSelectedLanguage('english')}
                  style={{
                    background: selectedLanguage === 'english' ? '#04AA6D' : 'transparent',
                    color: selectedLanguage === 'english' ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '7px',
                    padding: '5px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  🇬🇧 English
                </button>
              </div>

              {/* PDF Printable Question Paper Button */}
              <a
                href="/class11-economics-ch1-ch2-printable-question-paper.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)',
                  border: '1.5px solid #10b981',
                  borderRadius: '10px',
                  color: '#ffffff',
                  padding: '7px 14px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
                }}
                title="Open Official A4 Printable Question Paper (No Answers / With Solutions & OMR Sheet)"
              >
                <Printer size={15} /> PDF Printable Paper
              </a>

              {/* B&W Laser Fill in the Blanks Worksheet Button */}
              <a
                href="/class11-economics-ch1-ch2-fill-in-the-blanks-laser-print.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(37, 99, 235, 0.12) 100%)',
                  border: '1.5px solid #38bdf8',
                  borderRadius: '10px',
                  color: '#ffffff',
                  padding: '7px 14px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(56, 189, 248, 0.2)'
                }}
                title="Open Black & White Fill in the Blanks Test for Laser Printer (Pure Monochrome)"
              >
                <span>📝 Laser Blanks (B&amp;W)</span>
              </a>
            </div>
          </div>

          {/* ── Filter Bar: Chapter Filter & Mode Switcher ── */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '14px'
          }}>
            {/* Chapter Filter Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                Chapter:
              </span>
              <button
                onClick={() => setSelectedChapter('all')}
                style={{
                  background: selectedChapter === 'all' ? '#04AA6D' : 'var(--bg-secondary)',
                  color: selectedChapter === 'all' ? '#ffffff' : 'var(--text-primary)',
                  border: `1px solid ${selectedChapter === 'all' ? '#04AA6D' : 'var(--border-color)'}`,
                  borderRadius: '8px',
                  padding: '5px 12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                All Chapters ({CLASS_11_ECONOMICS_TEST_QUESTIONS.length})
              </button>
              <button
                onClick={() => setSelectedChapter(1)}
                style={{
                  background: selectedChapter === 1 ? '#04AA6D' : 'var(--bg-secondary)',
                  color: selectedChapter === 1 ? '#ffffff' : 'var(--text-primary)',
                  border: `1px solid ${selectedChapter === 1 ? '#04AA6D' : 'var(--border-color)'}`,
                  borderRadius: '8px',
                  padding: '5px 12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Ch 1: Eve of Independence (15)
              </button>
              <button
                onClick={() => setSelectedChapter(2)}
                style={{
                  background: selectedChapter === 2 ? '#04AA6D' : 'var(--bg-secondary)',
                  color: selectedChapter === 2 ? '#ffffff' : 'var(--text-primary)',
                  border: `1px solid ${selectedChapter === 2 ? '#04AA6D' : 'var(--border-color)'}`,
                  borderRadius: '8px',
                  padding: '5px 12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Ch 2: Indian Economy 1950–90 (15)
              </button>
            </div>

            {/* Mode Switcher: Practice vs Exam */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '3px',
                display: 'flex',
                gap: '2px'
              }}>
                <button
                  onClick={() => handleModeChange('practice')}
                  style={{
                    background: activeMode === 'practice' ? '#2563eb' : 'transparent',
                    color: activeMode === 'practice' ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '7px',
                    padding: '5px 14px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Zap size={13} /> Practice Mode
                </button>
                <button
                  onClick={() => handleModeChange('exam')}
                  style={{
                    background: activeMode === 'exam' ? '#dc2626' : 'transparent',
                    color: activeMode === 'exam' ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '7px',
                    padding: '5px 14px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Clock size={13} /> Exam Mode (20m)
                </button>
              </div>

              {/* Shuffle Order Toggle */}
              <button
                onClick={() => setIsQuestionOrderShuffled(prev => !prev)}
                style={{
                  background: isQuestionOrderShuffled ? 'rgba(4, 170, 109, 0.2)' : 'var(--bg-secondary)',
                  border: `1px solid ${isQuestionOrderShuffled ? '#04AA6D' : 'var(--border-color)'}`,
                  borderRadius: '8px',
                  color: isQuestionOrderShuffled ? '#04AA6D' : 'var(--text-primary)',
                  padding: '6px 10px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                title="Shuffle Question Order"
              >
                <Shuffle size={13} /> {isQuestionOrderShuffled ? 'Shuffled' : 'Order'}
              </button>
            </div>
          </div>
        </div>

        {/* ── Main Layout: 2 Columns (Question Card + Question Palette) ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 300px',
          gap: '20px',
          alignItems: 'start'
        }}>
          {/* ── Left Column: Question Card & Detailed Solutions ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {currentQ ? (
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: 'var(--shadow-card)',
                position: 'relative'
              }}>
                {/* Question Header Meta */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      background: '#04AA6D',
                      color: '#ffffff',
                      borderRadius: '8px',
                      padding: '3px 10px',
                      fontSize: '0.75rem',
                      fontWeight: 900
                    }}>
                      Question {currentIndex + 1} of {preparedQuestions.length}
                    </span>
                    <span style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      padding: '2px 8px',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)'
                    }}>
                      {currentQ.chapterCode.toUpperCase()} • Ch {currentQ.chapterNumber}
                    </span>
                    <span style={{
                      background: currentQ.difficulty === 'Easy' ? 'rgba(16, 185, 129, 0.15)' : currentQ.difficulty === 'Medium' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                      color: currentQ.difficulty === 'Easy' ? '#10b981' : currentQ.difficulty === 'Medium' ? '#f59e0b' : '#ef4444',
                      borderRadius: '6px',
                      padding: '2px 8px',
                      fontSize: '0.68rem',
                      fontWeight: 800
                    }}>
                      {currentQ.difficulty}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(currentQ.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: bookmarkedIds.includes(currentQ.id) ? '#f59e0b' : 'var(--text-muted)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}
                  >
                    <Bookmark size={15} fill={bookmarkedIds.includes(currentQ.id) ? '#f59e0b' : 'none'} />
                    <span>{bookmarkedIds.includes(currentQ.id) ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>
                </div>

                {/* Question Statement */}
                <div style={{ marginBottom: '22px' }}>
                  <h2 style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    lineHeight: 1.5,
                    color: 'var(--text-primary)',
                    margin: '0 0 10px 0'
                  }}>
                    {selectedLanguage === 'hinglish' ? currentQ.questionTextHinglish : currentQ.questionText}
                  </h2>
                  {selectedLanguage === 'hinglish' && (
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      fontStyle: 'italic',
                      margin: 0,
                      lineHeight: 1.4
                    }}>
                      🇬🇧 En: {currentQ.questionText}
                    </p>
                  )}
                </div>

                {/* Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {currentQ.shuffledOrder.map((_origIdx, slotIdx) => {
                    const isSelected = userAnswers[currentQ.id] === slotIdx;
                    const isCorrect = slotIdx === currentQ.currentCorrectIndex;
                    const showFeedback = (activeMode === 'practice' && userAnswers[currentQ.id] !== undefined) ||
                                         (activeMode === 'exam' && isExamSubmitted);

                    let borderStyle = '1px solid var(--border-color)';
                    let bgStyle = 'var(--bg-secondary)';
                    let colorStyle = 'var(--text-primary)';
                    let icon = null;

                    if (showFeedback) {
                      if (isCorrect) {
                        borderStyle = '2px solid #04AA6D';
                        bgStyle = 'rgba(4, 170, 109, 0.15)';
                        colorStyle = '#04AA6D';
                        icon = <CheckCircle2 size={18} color="#04AA6D" />;
                      } else if (isSelected) {
                        borderStyle = '2px solid #ef4444';
                        bgStyle = 'rgba(239, 68, 68, 0.15)';
                        colorStyle = '#ef4444';
                        icon = <XCircle size={18} color="#ef4444" />;
                      }
                    } else if (isSelected) {
                      borderStyle = '2px solid #2563eb';
                      bgStyle = 'rgba(37, 99, 235, 0.15)';
                      colorStyle = '#3b82f6';
                    }

                    const optLabel = String.fromCharCode(65 + slotIdx); // A, B, C, D
                    const optText = selectedLanguage === 'hinglish'
                      ? currentQ.currentOptionsHinglish[slotIdx]
                      : currentQ.currentOptions[slotIdx];

                    return (
                      <button
                        key={slotIdx}
                        onClick={() => handleSelectOption(slotIdx)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '14px 16px',
                          borderRadius: '12px',
                          border: borderStyle,
                          background: bgStyle,
                          color: colorStyle,
                          fontSize: '0.9rem',
                          fontWeight: isSelected || (showFeedback && isCorrect) ? 700 : 500,
                          cursor: (activeMode === 'exam' && isExamSubmitted) ? 'default' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            background: isSelected ? 'currentColor' : 'rgba(255, 255, 255, 0.08)',
                            color: isSelected ? 'var(--bg-primary)' : 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.78rem',
                            fontWeight: 900,
                            flexShrink: 0
                          }}>
                            {optLabel}
                          </span>
                          <span>{optText}</span>
                        </div>
                        {icon}
                      </button>
                    );
                  })}
                </div>

                {/* ── Practice Mode: Instant In-Depth Explanation ── */}
                {activeMode === 'practice' && userAnswers[currentQ.id] !== undefined && (
                  <div style={{
                    marginTop: '22px',
                    padding: '18px',
                    borderRadius: '14px',
                    background: userAnswers[currentQ.id] === currentQ.currentCorrectIndex
                      ? 'rgba(4, 170, 109, 0.08)'
                      : 'rgba(239, 68, 68, 0.08)',
                    border: userAnswers[currentQ.id] === currentQ.currentCorrectIndex
                      ? '1px solid rgba(4, 170, 109, 0.3)'
                      : '1px solid rgba(239, 68, 68, 0.3)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 900, color: userAnswers[currentQ.id] === currentQ.currentCorrectIndex ? '#04AA6D' : '#ef4444' }}>
                        {userAnswers[currentQ.id] === currentQ.currentCorrectIndex ? '✅ Correct Answer!' : '❌ Incorrect Selection'}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        • Correct Option: <strong>{String.fromCharCode(65 + currentQ.currentCorrectIndex)}</strong>
                      </span>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-primary)', margin: '0 0 10px 0', lineHeight: 1.5 }}>
                      {currentQ.detailedSolutionHinglish}
                    </p>

                    {currentQ.formulaOrConcept && (
                      <div style={{
                        background: 'rgba(0, 0, 0, 0.25)',
                        borderLeft: '3px solid #04AA6D',
                        padding: '8px 12px',
                        borderRadius: '0 8px 8px 0',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: '#10b981',
                        marginBottom: '8px'
                      }}>
                        💡 Key Concept: {currentQ.formulaOrConcept}
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', paddingTop: '6px' }}>
                      <span>📖 Verified: {currentQ.ncertReference}</span>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {currentQ.tags.map(t => (
                          <span key={t} style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '2px 6px', borderRadius: '4px' }}>
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Navigation Buttons: Previous / Next ── */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '22px',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '16px'
                }}>
                  <button
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: currentIndex === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
                      padding: '8px 16px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      opacity: currentIndex === 0 ? 0.5 : 1
                    }}
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>

                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Question {currentIndex + 1} of {preparedQuestions.length}
                  </div>

                  {currentIndex < preparedQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentIndex(prev => Math.min(preparedQuestions.length - 1, prev + 1))}
                      style={{
                        background: '#04AA6D',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#ffffff',
                        padding: '8px 18px',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  ) : activeMode === 'exam' && !isExamSubmitted ? (
                    <button
                      onClick={handleExamSubmit}
                      style={{
                        background: '#dc2626',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#ffffff',
                        padding: '8px 18px',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      Submit Exam
                    </button>
                  ) : (
                    <button
                      onClick={handleReshuffle}
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        color: '#04AA6D',
                        padding: '8px 16px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <RotateCcw size={14} /> Retake Test
                    </button>
                  )}
                </div>
              </div>
            ) : null}

            {/* ── Exam Mode: Submission Results Banner ── */}
            {activeMode === 'exam' && isExamSubmitted && (
              <div style={{
                background: scoreStats.percentage >= 70
                  ? 'linear-gradient(135deg, rgba(4, 170, 109, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.05) 100%)',
                border: scoreStats.percentage >= 70
                  ? '1.5px solid #04AA6D'
                  : '1.5px solid #ef4444',
                borderRadius: '20px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-card)'
              }}>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: scoreStats.percentage >= 70 ? '#10b981' : '#f87171', marginBottom: '6px' }}>
                  {scoreStats.percentage}%
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
                  {scoreStats.percentage >= 70 ? '🎉 Outstanding Performance! Exam Passed' : '⚠️ Keep Practicing! Needs Review'}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: '0 0 16px 0' }}>
                  You scored <strong>{scoreStats.correct}</strong> out of <strong>{preparedQuestions.length}</strong> marks ({scoreStats.wrong} incorrect).
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <button
                    onClick={handleReshuffle}
                    style={{
                      background: '#04AA6D',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#ffffff',
                      padding: '8px 16px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <RotateCcw size={14} /> Try Another Attempt
                  </button>
                  <button
                    onClick={() => setActiveMode('practice')}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      padding: '8px 16px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Review All Solutions
                  </button>
                  <a
                    href="/class11-economics-ch1-ch2-printable-question-paper.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#ffffff',
                      padding: '8px 16px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none'
                    }}
                  >
                    <Printer size={14} /> Print Paper &amp; Key
                  </a>
                  <a
                    href="/class11-economics-ch1-ch2-fill-in-the-blanks-laser-print.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#ffffff',
                      padding: '8px 16px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>📝 Laser Blanks (B&amp;W)</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ── Right Column: Timer, Scorecard & Question Palette ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Exam Mode Timer Card */}
            {activeMode === 'exam' && (
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '18px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={20} color={timeLeft <= 300 ? '#ef4444' : '#04AA6D'} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>TIME REMAINING</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: timeLeft <= 300 ? '#ef4444' : 'var(--text-primary)' }}>
                      {formatTime(timeLeft)}
                    </div>
                  </div>
                </div>

                {!isExamSubmitted && (
                  <button
                    onClick={handleExamSubmit}
                    style={{
                      background: '#dc2626',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#ffffff',
                      padding: '6px 12px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    Submit Now
                  </button>
                )}
              </div>
            )}

            {/* Score Summary Card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '18px',
              boxShadow: 'var(--shadow-card)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>Progress</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#04AA6D' }}>
                  {scoreStats.totalAnswered} / {preparedQuestions.length} Answered
                </span>
              </div>

              {/* Progress bar */}
              <div style={{ width: '100%', height: '6px', background: 'var(--bg-hover)', borderRadius: '3px', overflow: 'hidden', marginBottom: '14px' }}>
                <div style={{
                  width: `${(scoreStats.totalAnswered / Math.max(1, preparedQuestions.length)) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #04AA6D, #10b981)',
                  transition: 'width 0.3s ease'
                }} />
              </div>

              {/* Score counts */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={{ background: 'rgba(4, 170, 109, 0.1)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#04AA6D' }}>{scoreStats.correct}</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)' }}>Correct</div>
                </div>
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ef4444' }}>{scoreStats.wrong}</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)' }}>Wrong</div>
                </div>
              </div>
            </div>

            {/* Question Palette Grid */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '18px',
              boxShadow: 'var(--shadow-card)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Question Palette ({preparedQuestions.length})
                </h3>
                <button
                  onClick={handleReshuffle}
                  title="Reshuffle Options"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#04AA6D',
                    cursor: 'pointer',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Shuffle size={12} />
                  <span>Shuffle</span>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                {preparedQuestions.map((q, idx) => {
                  const isCurrent = currentIndex === idx;
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isCorrect = userAnswers[q.id] === q.currentCorrectIndex;

                  let btnBg = 'var(--bg-hover)';
                  let btnBorder = 'var(--border-color)';
                  let btnColor = 'var(--text-primary)';

                  if (isCurrent) {
                    btnBorder = '#04AA6D';
                    btnColor = '#04AA6D';
                  }

                  if (activeMode === 'practice' && isAnswered) {
                    btnBg = isCorrect ? 'rgba(4, 170, 109, 0.2)' : 'rgba(239, 68, 68, 0.2)';
                    btnBorder = isCorrect ? '#04AA6D' : '#ef4444';
                    btnColor = isCorrect ? '#10b981' : '#f87171';
                  } else if (activeMode === 'exam') {
                    if (isExamSubmitted && isAnswered) {
                      btnBg = isCorrect ? 'rgba(4, 170, 109, 0.2)' : 'rgba(239, 68, 68, 0.2)';
                      btnBorder = isCorrect ? '#04AA6D' : '#ef4444';
                      btnColor = isCorrect ? '#10b981' : '#f87171';
                    } else if (isAnswered) {
                      btnBg = 'rgba(4, 170, 109, 0.15)';
                      btnBorder = '#04AA6D';
                      btnColor = 'var(--text-primary)';
                    }
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      style={{
                        height: '34px',
                        background: btnBg,
                        border: `1.5px solid ${btnBorder}`,
                        borderRadius: '8px',
                        color: btnColor,
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Palette Legend */}
              <div style={{ marginTop: '14px', borderTop: '1px solid var(--border-color)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#04AA6D' }} />
                  <span>Answered / Correct</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '3px', border: '1.5px solid #04AA6D' }} />
                  <span>Current Question</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: 'var(--bg-hover)', border: '1px solid var(--border-color)' }} />
                  <span>Unanswered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
