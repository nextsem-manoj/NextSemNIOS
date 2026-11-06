import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  CLASS_11_STATS_TEST_QUESTIONS,
  type TestQuestion
} from '../../data/class11StatsTestData';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Clock,
  Printer,
  ChevronRight,
  ChevronLeft,
  Filter,
  Zap,
  Bookmark,
  BarChart3,
  GraduationCap,
  Shuffle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Class11StatsTestViewProps {
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

export const Class11StatsTestView: React.FC<Class11StatsTestViewProps> = ({
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
      ? CLASS_11_STATS_TEST_QUESTIONS
      : CLASS_11_STATS_TEST_QUESTIONS.filter(q => q.chapterNumber === selectedChapter);
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
    // Recompute whenever filter, seed, or question order shuffle toggle changes
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
      const saved = localStorage.getItem('class11_stats_test_bookmarks');
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

  // Exam timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (activeMode === 'exam' && isTimerRunning && !isExamSubmitted && timeLeft > 0) {
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
  }, [activeMode, isTimerRunning, isExamSubmitted, timeLeft, handleExamSubmit]);

  // Start exam mode
  const startExam = () => {
    handleReshuffle();
    setActiveMode('exam');
    setIsExamSubmitted(false);
    setTimeLeft(1200);
    setIsTimerRunning(true);
    setCurrentIndex(0);
  };

  // Switch mode handler
  const handleModeChange = (mode: 'practice' | 'exam') => {
    setActiveMode(mode);
    if (mode === 'exam') {
      startExam();
    } else {
      setIsTimerRunning(false);
      setIsExamSubmitted(false);
    }
  };

  const currentQ = preparedQuestions[currentIndex] || preparedQuestions[0];

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (activeMode === 'exam' && isExamSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleBookmarkToggle = (qId: string) => {
    setBookmarkedIds(prev => {
      const updated = prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId];
      try {
        localStorage.setItem('class11_stats_test_bookmarks', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleResetTest = () => {
    setUserAnswers({});
    setIsExamSubmitted(false);
    if (activeMode === 'exam') {
      setTimeLeft(1200);
      setIsTimerRunning(true);
    }
    setCurrentIndex(0);
  };

  // Score calculations
  const totalAnswered = Object.keys(userAnswers).length;
  const correctCount = preparedQuestions.reduce((acc, q) => {
    return userAnswers[q.id] === q.currentCorrectIndex ? acc + 1 : acc;
  }, 0);
  const scorePercent = preparedQuestions.length > 0 ? Math.round((correctCount / preparedQuestions.length) * 100) : 0;

  // Format time (MM:SS)
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      {/* Top Banner Navigation */}
      <div style={{
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-color)',
        padding: '1rem 1.25rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Breadcrumb Trail */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={onBackToDashboard}
              style={{ background: 'none', border: 'none', color: '#04AA6D', cursor: 'pointer', fontWeight: 600, padding: 0 }}
            >
              Home
            </button>
            <span>❯</span>
            <span>Class 11</span>
            <span>❯</span>
            <span>Statistics for Economics (kest1dd)</span>
            <span>❯</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Chapters 1-4 NCERT Mega Test</span>
          </div>

          {/* Title Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                background: 'rgba(4, 170, 109, 0.12)',
                border: '1px solid #04AA6D',
                borderRadius: '12px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#04AA6D'
              }}>
                <GraduationCap size={28} />
              </div>
              <div>
                <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em' }}>
                  Class 11 Statistics for Economics (kest1dd)
                </h1>
                <p style={{ margin: '4px 0 0', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Full NCERT 4-Chapter Test Bank • Dynamic Option Shuffling • Hinglish &amp; English
                </p>
              </div>
            </div>

            {/* Quick Actions (Reshuffle, Language & Print) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {/* Reshuffle Options Button */}
              <button
                onClick={handleReshuffle}
                title="Shuffle all options randomly"
                style={{
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  color: '#ffffff',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  borderRadius: '8px',
                  padding: '7px 14px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(2, 132, 199, 0.3)'
                }}
              >
                <Shuffle size={15} />
                <span>Reshuffle Options</span>
              </button>

              {/* Language Switcher */}
              <div style={{
                background: 'var(--bg-hover)',
                borderRadius: '8px',
                padding: '3px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                gap: '4px'
              }}>
                <button
                  onClick={() => setSelectedLanguage('hinglish')}
                  style={{
                    background: selectedLanguage === 'hinglish' ? '#04AA6D' : 'transparent',
                    color: selectedLanguage === 'hinglish' ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇮🇳 Hinglish
                </button>
                <button
                  onClick={() => setSelectedLanguage('english')}
                  style={{
                    background: selectedLanguage === 'english' ? '#04AA6D' : 'transparent',
                    color: selectedLanguage === 'english' ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇬🇧 English
                </button>
              </div>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="btn btn-outline"
                style={{
                  borderRadius: '8px',
                  padding: '7px 14px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Printer size={16} />
                <span>Print Test</span>
              </button>

              {/* 4-Page A4 Numerical Question Paper */}
              <a
                href="/class11-statistics-ch1-ch2-ch3-numerical-test-paper.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)',
                  border: '1.5px solid #10b981',
                  borderRadius: '8px',
                  color: '#ffffff',
                  padding: '7px 14px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
                }}
                title="Open Official 4-Page A4 Numerical Test Paper (Chapters 1, 2, 3) with Full Solutions & Graph Canvas"
              >
                <Printer size={15} />
                <span>4-Page Numerical Paper (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '1.5rem auto 0', padding: '0 1rem' }}>
        {/* Controls Toolbar: Mode Switcher & Chapter Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          background: '#0c1328',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '14px 18px',
          marginBottom: '1.5rem'
        }}>
          {/* Mode Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600, marginRight: '4px' }}>
              Mode:
            </span>
            <button
              onClick={() => handleModeChange('practice')}
              style={{
                background: activeMode === 'practice' ? 'linear-gradient(135deg, #04AA6D 0%, #038a58 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                border: activeMode === 'practice' ? '1px solid #04AA6D' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '7px 14px',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={16} />
              <span>Practice &amp; Learn</span>
            </button>

            <button
              onClick={() => handleModeChange('exam')}
              style={{
                background: activeMode === 'exam' ? 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                border: activeMode === 'exam' ? '1px solid #e11d48' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '7px 14px',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Clock size={16} />
              <span>Timed Exam Mode</span>
            </button>
          </div>

          {/* Chapter Filter Pill Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', maxWidth: '100%', paddingBottom: '2px' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={14} />
              <span>Filter:</span>
            </span>

            {[
              { id: 'all', label: 'All 4 Chapters (30 Qs)' },
              { id: 1, label: 'Ch 1: Introduction' },
              { id: 2, label: 'Ch 2: Collection' },
              { id: 3, label: 'Ch 3: Organisation' },
              { id: 4, label: 'Ch 4: Presentation' },
            ].map(tab => (
              <button
                key={String(tab.id)}
                onClick={() => setSelectedChapter(tab.id as number | 'all')}
                style={{
                  background: selectedChapter === tab.id ? '#04AA6D' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedChapter === tab.id ? '#ffffff' : '#cbd5e1',
                  border: selectedChapter === tab.id ? '1px solid #04AA6D' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  padding: '5px 10px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Shuffle questions order toggle */}
          <button
            onClick={() => {
              setIsQuestionOrderShuffled(prev => !prev);
              handleReshuffle();
            }}
            style={{
              background: isQuestionOrderShuffled ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              color: isQuestionOrderShuffled ? '#38bdf8' : '#94a3b8',
              border: `1px solid ${isQuestionOrderShuffled ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: '6px',
              padding: '5px 10px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Shuffle size={13} />
            <span>Random Question Order: {isQuestionOrderShuffled ? 'ON' : 'OFF'}</span>
          </button>

          {/* Live Timer in Exam Mode */}
          {activeMode === 'exam' && (
            <div style={{
              background: timeLeft < 300 ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.08)',
              border: timeLeft < 300 ? '1px solid #e11d48' : '1px solid rgba(255, 255, 255, 0.15)',
              padding: '6px 14px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 800,
              fontSize: '1rem',
              color: timeLeft < 300 ? '#fb7185' : '#ffffff'
            }}>
              <Clock size={18} />
              <span>{formatTime(timeLeft)}</span>
            </div>
          )}
        </div>

        {/* Main Grid: Left side Question Canvas, Right side Progress / Nav Card */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '1.5rem' }}>
          
          {/* LEFT: Current Question Canvas */}
          <div>
            {currentQ && (
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: 'var(--shadow-card)'
              }}>
                {/* Question Header & Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      background: '#04AA6D',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 800
                    }}>
                      Question {currentIndex + 1} of {preparedQuestions.length}
                    </span>

                    <span style={{
                      background: 'var(--bg-hover)',
                      color: 'var(--text-muted)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      border: '1px solid var(--border-color)'
                    }}>
                      {currentQ.chapterTitle}
                    </span>

                    <span style={{
                      background: currentQ.difficulty === 'Hard' ? 'rgba(225, 29, 72, 0.15)' : currentQ.difficulty === 'Medium' ? 'rgba(234, 179, 8, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                      color: currentQ.difficulty === 'Hard' ? '#f43f5e' : currentQ.difficulty === 'Medium' ? '#facc15' : '#34d399',
                      border: `1px solid ${currentQ.difficulty === 'Hard' ? 'rgba(225, 29, 72, 0.3)' : currentQ.difficulty === 'Medium' ? 'rgba(234, 179, 8, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      {currentQ.difficulty}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => handleBookmarkToggle(currentQ.id)}
                      title={bookmarkedIds.includes(currentQ.id) ? 'Remove Bookmark' : 'Bookmark Question'}
                      style={{
                        background: bookmarkedIds.includes(currentQ.id) ? 'rgba(234, 179, 8, 0.2)' : 'var(--bg-hover)',
                        border: '1px solid var(--border-color)',
                        color: bookmarkedIds.includes(currentQ.id) ? '#facc15' : 'var(--text-muted)',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                    >
                      <Bookmark size={16} fill={bookmarkedIds.includes(currentQ.id) ? '#facc15' : 'none'} />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.5, color: 'var(--text-primary)', margin: 0 }}>
                    {selectedLanguage === 'hinglish' ? currentQ.questionTextHinglish : currentQ.questionText}
                  </h2>
                  {selectedLanguage === 'hinglish' && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '6px', fontStyle: 'italic' }}>
                      En: {currentQ.questionText}
                    </p>
                  )}
                </div>

                {/* Shuffled Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {(selectedLanguage === 'hinglish' ? currentQ.currentOptionsHinglish : currentQ.currentOptions).map((optionText, optIdx) => {
                    const isSelected = userAnswers[currentQ.id] === optIdx;
                    const isCorrect = currentQ.currentCorrectIndex === optIdx;
                    const hasAnswered = userAnswers[currentQ.id] !== undefined;

                    let optionBg = 'var(--bg-hover)';
                    let optionBorder = 'var(--border-color)';
                    let textColor = 'var(--text-primary)';

                    if (activeMode === 'practice') {
                      if (hasAnswered) {
                        if (isCorrect) {
                          optionBg = 'rgba(4, 170, 109, 0.2)';
                          optionBorder = '#04AA6D';
                          textColor = '#4ade80';
                        } else if (isSelected) {
                          optionBg = 'rgba(225, 29, 72, 0.2)';
                          optionBorder = '#e11d48';
                          textColor = '#f87171';
                        }
                      } else if (isSelected) {
                        optionBg = 'rgba(4, 170, 109, 0.15)';
                        optionBorder = '#04AA6D';
                      }
                    } else {
                      // Exam Mode
                      if (isExamSubmitted) {
                        if (isCorrect) {
                          optionBg = 'rgba(4, 170, 109, 0.2)';
                          optionBorder = '#04AA6D';
                          textColor = '#4ade80';
                        } else if (isSelected) {
                          optionBg = 'rgba(225, 29, 72, 0.2)';
                          optionBorder = '#e11d48';
                          textColor = '#f87171';
                        }
                      } else if (isSelected) {
                        optionBg = 'rgba(4, 170, 109, 0.2)';
                        optionBorder = '#04AA6D';
                      }
                    }

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelectOption(currentQ.id, optIdx)}
                        style={{
                          background: optionBg,
                          border: `1.5px solid ${optionBorder}`,
                          borderRadius: '12px',
                          padding: '14px 18px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: (activeMode === 'exam' && isExamSubmitted) ? 'default' : 'pointer',
                          transition: 'all 0.2s ease',
                          userSelect: 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: isSelected ? '#04AA6D' : 'rgba(255, 255, 255, 0.08)',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            flexShrink: 0
                          }}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span style={{ fontSize: '0.98rem', fontWeight: isSelected ? 700 : 500, color: textColor }}>
                            {optionText}
                          </span>
                        </div>

                        {/* Status Icon */}
                        {((activeMode === 'practice' && hasAnswered) || (activeMode === 'exam' && isExamSubmitted)) && (
                          <div>
                            {isCorrect && <CheckCircle2 size={22} color="#04AA6D" />}
                            {isSelected && !isCorrect && <XCircle size={22} color="#e11d48" />}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Practice Mode or Exam Review: Detailed Explanation Card */}
                {((activeMode === 'practice' && userAnswers[currentQ.id] !== undefined) || (activeMode === 'exam' && isExamSubmitted)) && (
                  <div style={{
                    marginTop: '1.5rem',
                    background: 'rgba(4, 170, 109, 0.08)',
                    border: '1px solid rgba(4, 170, 109, 0.3)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#04AA6D', fontWeight: 800, fontSize: '0.95rem' }}>
                        <Zap size={18} />
                        <span>NCERT Concept &amp; Hinglish Explanation</span>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8', background: 'rgba(255, 255, 255, 0.06)', padding: '2px 8px', borderRadius: '4px' }}>
                        📖 {currentQ.ncertReference}
                      </span>
                    </div>

                    <p style={{ margin: '8px 0 0', fontSize: '0.92rem', lineHeight: 1.6, color: '#e2e8f0' }}>
                      {currentQ.detailedSolutionHinglish}
                    </p>

                    {currentQ.formulaOrConcept && (
                      <div style={{
                        marginTop: '10px',
                        background: 'rgba(0, 0, 0, 0.3)',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '0.84rem',
                        color: '#38bdf8',
                        fontFamily: 'monospace'
                      }}>
                        💡 <strong>Formula / Rule:</strong> {currentQ.formulaOrConcept}
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation Buttons (Prev / Next) */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: currentIndex === 0 ? '#64748b' : '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <ChevronLeft size={18} />
                    <span>Previous</span>
                  </button>

                  {activeMode === 'exam' && !isExamSubmitted ? (
                    <button
                      onClick={handleExamSubmit}
                      style={{
                        background: '#e11d48',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '8px 20px',
                        fontSize: '0.88rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(225, 29, 72, 0.4)'
                      }}
                    >
                      Submit Exam ({totalAnswered}/{preparedQuestions.length})
                    </button>
                  ) : (
                    <button
                      onClick={handleResetTest}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <RotateCcw size={14} />
                      <span>Reset</span>
                    </button>
                  )}

                  <button
                    onClick={() => setCurrentIndex(prev => Math.min(preparedQuestions.length - 1, prev + 1))}
                    disabled={currentIndex === preparedQuestions.length - 1}
                    style={{
                      background: currentIndex === preparedQuestions.length - 1 ? 'rgba(255, 255, 255, 0.06)' : '#04AA6D',
                      color: currentIndex === preparedQuestions.length - 1 ? '#64748b' : '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 18px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: currentIndex === preparedQuestions.length - 1 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>Next</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Progress & Question Palette Sidebar */}
          <div>
            {/* Scorecard Box in Exam/Practice */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '1.5rem',
              boxShadow: 'var(--shadow-card)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#04AA6D', fontWeight: 800, marginBottom: '12px' }}>
                <BarChart3 size={20} />
                <h3 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-primary)' }}>Test Performance</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>{totalAnswered}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Answered</div>
                </div>

                <div style={{ background: 'rgba(4, 170, 109, 0.1)', border: '1px solid rgba(4, 170, 109, 0.25)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#04AA6D' }}>
                    {activeMode === 'exam' && !isExamSubmitted ? '—' : `${scorePercent}%`}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Accuracy</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', height: '8px', background: 'var(--bg-hover)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  width: `${(totalAnswered / preparedQuestions.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #04AA6D, #10b981)',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            {/* Question Palette Grid */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: 'var(--shadow-card)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                  Question Palette ({preparedQuestions.length})
                </h3>
                <button
                  onClick={handleReshuffle}
                  title="Reshuffle Options"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary-500)',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
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
                    btnBg = isCorrect ? 'rgba(4, 170, 109, 0.2)' : 'rgba(225, 29, 72, 0.2)';
                    btnBorder = isCorrect ? '#04AA6D' : '#e11d48';
                    btnColor = isCorrect ? '#10b981' : '#f87171';
                  } else if (activeMode === 'exam') {
                    if (isExamSubmitted && isAnswered) {
                      btnBg = isCorrect ? 'rgba(4, 170, 109, 0.2)' : 'rgba(225, 29, 72, 0.2)';
                      btnBorder = isCorrect ? '#04AA6D' : '#e11d48';
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
                        height: '36px',
                        background: btnBg,
                        border: `1.5px solid ${btnBorder}`,
                        borderRadius: '8px',
                        color: btnColor,
                        fontSize: '0.85rem',
                        fontWeight: 700,
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

              {/* Legend */}
              <div style={{ marginTop: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#04AA6D' }} />
                  <span>Answered / Correct</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '3px', border: '1.5px solid #04AA6D' }} />
                  <span>Current Question</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--bg-hover)', border: '1px solid var(--border-color)' }} />
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
