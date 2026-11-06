import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  HYDROCARBONS_TEST_QUESTIONS,
  type HydrocarbonTestQuestion
} from '../../data/hydrocarbonsTestData';
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  Clock,
  Printer,
  ChevronRight,
  ChevronLeft,
  Filter,
  Bookmark,
  BarChart3,
  FlaskConical,
  Shuffle,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HydrocarbonsMasterclassStudio } from './HydrocarbonsMasterclassStudio';

interface HydrocarbonsTestViewProps {
  onBackToDashboard: () => void;
}

interface PreparedHydrocarbonQuestion extends HydrocarbonTestQuestion {
  shuffledOrder: number[];
  currentOptions: string[];
  currentOptionsHinglish: string[];
  currentCorrectIndex: number;
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const HydrocarbonsTestView: React.FC<HydrocarbonsTestViewProps> = ({
  onBackToDashboard
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'hinglish' | 'english'>('hinglish');
  const [activeMode, setActiveMode] = useState<'learn' | 'practice' | 'exam'>('learn');
  const [selectedSection, setSelectedSection] = useState<'all' | 'alkanes' | 'alkenes' | 'alkynes' | 'benzene'>('all');
  const [shuffleSeed, setShuffleSeed] = useState<number>(1);
  const [isQuestionOrderShuffled, setIsQuestionOrderShuffled] = useState(false);

  // Active raw questions based on section filter
  const rawQuestions = useMemo(() => {
    return selectedSection === 'all'
      ? HYDROCARBONS_TEST_QUESTIONS
      : HYDROCARBONS_TEST_QUESTIONS.filter(q => q.sectionCode === selectedSection || q.sectionCode === 'general');
  }, [selectedSection]);

  // Prepared questions with dynamically shuffled options
  const preparedQuestions: PreparedHydrocarbonQuestion[] = useMemo(() => {
    let list = [...rawQuestions];
    if (isQuestionOrderShuffled) {
      list = shuffleArray(list);
    }

    return list.map(q => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hydrocarbons_test_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    setCurrentIndex(0);
    setUserAnswers({});
    setIsExamSubmitted(false);
  }, [selectedSection]);

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

  const handleExamSubmit = useCallback(() => {
    setIsExamSubmitted(true);
    setIsTimerRunning(false);
    
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

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (activeMode === 'exam' && isExamSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleToggleBookmark = (questionId: string) => {
    setBookmarkedIds(prev => {
      const next = prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId];
      try {
        localStorage.setItem('hydrocarbons_test_bookmarks', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleModeChange = (mode: 'learn' | 'practice' | 'exam') => {
    setActiveMode(mode);
    setIsExamSubmitted(false);
    if (mode === 'exam') {
      setTimeLeft(1200);
      setIsTimerRunning(true);
    } else {
      setIsTimerRunning(false);
    }
  };

  const currentQ = preparedQuestions[currentIndex] || preparedQuestions[0];
  const isAnswered = currentQ && userAnswers[currentQ.id] !== undefined;

  const scoreStats = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    preparedQuestions.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans === undefined) {
        unattempted++;
      } else if (ans === q.currentCorrectIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const total = preparedQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    return { correct, incorrect, unattempted, total, percentage };
  }, [preparedQuestions, userAnswers]);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remaining.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--text-primary)', paddingBottom: '3rem' }}>
      
      {/* 🌟 Header Bar */}
      <div style={{
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-color)',
        padding: '1rem 1.25rem 1.25rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Top Breadcrumb & Back */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
            <button
              onClick={onBackToDashboard}
              style={{
                background: 'none',
                border: 'none',
                color: '#10b981',
                fontWeight: 700,
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              ← Back to Dashboard
            </button>
            <span>/</span>
            <span>NIOS Senior Secondary 313</span>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Lesson 26: Hydrocarbons</span>
          </div>

          {/* Title Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10b981',
                borderRadius: '12px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981'
              }}>
                <FlaskConical size={28} />
              </div>
              <div>
                <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em' }}>
                  NIOS Chemistry 313: Lesson 26 Hydrocarbons High-Yield Test
                </h1>
                <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Complete 24-Page Coverage (Alkanes, Alkenes, Alkynes &amp; Benzene) • Dynamic Option Shuffling • Hinglish
                </p>
              </div>
            </div>

            {/* Quick Actions (Reshuffle, Language & Print) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
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
                    background: selectedLanguage === 'hinglish' ? '#10b981' : 'transparent',
                    color: selectedLanguage === 'hinglish' ? '#000000' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇮🇳 Hinglish
                </button>
                <button
                  onClick={() => setSelectedLanguage('english')}
                  style={{
                    background: selectedLanguage === 'english' ? '#10b981' : 'transparent',
                    color: selectedLanguage === 'english' ? '#000000' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🇬🇧 English
                </button>
              </div>

              <button
                onClick={() => window.print()}
                className="btn btn-outline"
                style={{
                  borderRadius: '8px',
                  padding: '7px 12px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Printer size={15} />
                <span>Print Test</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: '1200px', margin: '1.5rem auto 0', padding: '0 1rem' }}>
        
        {/* Controls Toolbar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '14px 18px',
          marginBottom: '1.5rem'
        }}>
          {/* Mode Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginRight: '4px' }}>
              Mode:
            </span>
            <button
              onClick={() => handleModeChange('learn')}
              style={{
                background: activeMode === 'learn' ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' : 'var(--bg-hover)',
                color: activeMode === 'learn' ? '#ffffff' : 'var(--text-primary)',
                border: activeMode === 'learn' ? '1px solid #38bdf8' : '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '7px 14px',
                fontSize: '0.84rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: activeMode === 'learn' ? '0 0 12px rgba(56, 189, 248, 0.4)' : 'none'
              }}
            >
              <BookOpen size={16} />
              <span>📖 Learn Masterclass</span>
            </button>

            <button
              onClick={() => handleModeChange('practice')}
              style={{
                background: activeMode === 'practice' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'var(--bg-hover)',
                color: activeMode === 'practice' ? '#000000' : 'var(--text-primary)',
                border: activeMode === 'practice' ? '1px solid #10b981' : '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '7px 14px',
                fontSize: '0.84rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={16} />
              <span>Practice (20 Qs)</span>
            </button>

            <button
              onClick={() => handleModeChange('exam')}
              style={{
                background: activeMode === 'exam' ? 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)' : 'var(--bg-hover)',
                color: activeMode === 'exam' ? '#ffffff' : 'var(--text-primary)',
                border: activeMode === 'exam' ? '1px solid #e11d48' : '1px solid var(--border-color)',
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
              <span>Timed Exam</span>
            </button>
          </div>

          {/* Section Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', maxWidth: '100%', paddingBottom: '2px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={14} />
              <span>Topic:</span>
            </span>

            {[
              { id: 'all', label: 'All 20 Qs' },
              { id: 'alkanes', label: '1. Alkanes (Wurtz/Kolbe)' },
              { id: 'alkenes', label: '2. Alkenes (Markovnikov/Ozonolysis)' },
              { id: 'alkynes', label: '3. Alkynes (Acidity & Benzene)' },
              { id: 'benzene', label: '4. Benzene & Arenes (SEAr)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedSection(tab.id as 'all' | 'alkanes' | 'alkenes' | 'alkynes' | 'benzene')}
                style={{
                  background: selectedSection === tab.id ? '#10b981' : 'var(--bg-hover)',
                  color: selectedSection === tab.id ? '#000000' : 'var(--text-secondary)',
                  border: selectedSection === tab.id ? '1px solid #10b981' : '1px solid var(--border-color)',
                  borderRadius: '6px',
                  padding: '5px 10px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Randomize Question Order Toggle */}
          <button
            onClick={() => {
              setIsQuestionOrderShuffled(prev => !prev);
              setCurrentIndex(0);
            }}
            style={{
              background: isQuestionOrderShuffled ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-hover)',
              color: isQuestionOrderShuffled ? '#10b981' : 'var(--text-muted)',
              border: isQuestionOrderShuffled ? '1px solid #10b981' : '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Shuffle size={14} />
            <span>Randomize Qs: {isQuestionOrderShuffled ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        {/* Exam Timer & Score Bar */}
        {activeMode === 'exam' && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.12) 0%, rgba(12, 19, 40, 0.8) 100%)',
            border: '1px solid rgba(225, 29, 72, 0.3)',
            borderRadius: '12px',
            padding: '12px 18px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={22} color="#f43f5e" />
              <div>
                <span style={{ fontSize: '0.75rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Time Remaining
                </span>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#f43f5e', fontFamily: 'monospace' }}>
                  {formatTimer(timeLeft)}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Answered</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                  {Object.keys(userAnswers).length} / {preparedQuestions.length}
                </div>
              </div>

              {!isExamSubmitted ? (
                <button
                  onClick={handleExamSubmit}
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 18px',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  Submit Exam
                </button>
              ) : (
                <button
                  onClick={handleReshuffle}
                  style={{
                    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 18px',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  Retake Exam
                </button>
              )}
            </div>
          </div>
        )}

        {/* Conditional View: Learn Masterclass Studio vs Quiz Question Engine */}
        {activeMode === 'learn' ? (
          <HydrocarbonsMasterclassStudio
            onStartPractice={(sec) => {
              if (sec) setSelectedSection(sec);
              setActiveMode('practice');
            }}
            onStartExam={() => {
              setActiveMode('exam');
              setTimeLeft(1200);
              setIsTimerRunning(true);
            }}
          />
        ) : (
          /* 2-Column Quiz Layout */
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '1.5rem', alignItems: 'start' }}>
            
            {/* Left Column: Active Question Card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow)'
            }}>
            {currentQ ? (
              <div>
                {/* Question Header Meta */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      background: '#10b981',
                      color: '#000000',
                      fontSize: '0.75rem',
                      fontWeight: 900,
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      Q{currentIndex + 1} of {preparedQuestions.length}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-hover)', padding: '3px 8px', borderRadius: '6px' }}>
                      {currentQ.sectionTitle}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '2px 6px', borderRadius: '4px' }}>
                      {currentQ.questionType}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => handleToggleBookmark(currentQ.id)}
                      title="Bookmark Question"
                      style={{
                        background: bookmarkedIds.includes(currentQ.id) ? 'rgba(245, 158, 11, 0.2)' : 'var(--bg-hover)',
                        border: bookmarkedIds.includes(currentQ.id) ? '1px solid #f59e0b' : '1px solid var(--border-color)',
                        color: bookmarkedIds.includes(currentQ.id) ? '#f59e0b' : 'var(--text-muted)',
                        borderRadius: '6px',
                        padding: '5px 8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.75rem'
                      }}
                    >
                      <Bookmark size={14} />
                      <span>{bookmarkedIds.includes(currentQ.id) ? 'Bookmarked' : 'Bookmark'}</span>
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <h3 style={{
                  fontSize: '1.08rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                  margin: '0 0 1.25rem',
                  whiteSpace: 'pre-line'
                }}>
                  {selectedLanguage === 'hinglish' ? currentQ.questionTextHinglish : currentQ.questionText}
                </h3>

                {/* Shuffled Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.5rem' }}>
                  {currentQ.currentOptions.map((opt, idx) => {
                    const optionLetter = ['A', 'B', 'C', 'D'][idx];
                    const isSelected = userAnswers[currentQ.id] === idx;
                    const isOptionCorrect = idx === currentQ.currentCorrectIndex;
                    
                    let bg = 'var(--bg-hover)';
                    let borderColor = 'var(--border-color)';
                    let textColor = 'var(--text-primary)';

                    if (activeMode === 'practice') {
                      if (isAnswered) {
                        if (isOptionCorrect) {
                          bg = 'rgba(16, 185, 129, 0.15)';
                          borderColor = '#10b981';
                          textColor = '#10b981';
                        } else if (isSelected) {
                          bg = 'rgba(225, 29, 72, 0.15)';
                          borderColor = '#e11d48';
                          textColor = '#e11d48';
                        }
                      } else if (isSelected) {
                        bg = 'rgba(16, 185, 129, 0.15)';
                        borderColor = '#10b981';
                        textColor = 'var(--text-primary)';
                      }
                    } else if (activeMode === 'exam') {
                      if (isExamSubmitted) {
                        if (isOptionCorrect) {
                          bg = 'rgba(16, 185, 129, 0.15)';
                          borderColor = '#10b981';
                          textColor = '#10b981';
                        } else if (isSelected) {
                          bg = 'rgba(225, 29, 72, 0.15)';
                          borderColor = '#e11d48';
                          textColor = '#e11d48';
                        }
                      } else if (isSelected) {
                        bg = 'rgba(16, 185, 129, 0.15)';
                        borderColor = '#10b981';
                        textColor = 'var(--text-primary)';
                      }
                    }

                    return (
                      <div
                        key={idx}
                        onClick={() => handleSelectOption(currentQ.id, idx)}
                        style={{
                          background: bg,
                          border: `1.5px solid ${borderColor}`,
                          borderRadius: '10px',
                          padding: '12px 14px',
                          cursor: (activeMode === 'exam' && isExamSubmitted) ? 'default' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span style={{
                          background: isSelected ? '#10b981' : 'var(--bg-card)',
                          color: isSelected ? '#000000' : 'var(--text-primary)',
                          border: isSelected ? 'none' : '1px solid var(--border-color)',
                          width: '26px',
                          height: '26px',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 900,
                          flexShrink: 0
                        }}>
                          {optionLetter}
                        </span>

                        <span style={{ fontSize: '0.92rem', color: textColor, fontWeight: isSelected ? 700 : 500, flex: 1 }}>
                          {selectedLanguage === 'hinglish' ? currentQ.currentOptionsHinglish[idx] : opt}
                        </span>

                        {activeMode === 'practice' && isAnswered && (
                          isOptionCorrect ? (
                            <CheckCircle2 size={18} color="#10b981" />
                          ) : isSelected ? (
                            <XCircle size={18} color="#e11d48" />
                          ) : null
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Practice Mode Detailed Explanation & Citations */}
                {activeMode === 'practice' && isAnswered && (
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    marginTop: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: 800, fontSize: '0.9rem', marginBottom: '6px' }}>
                      <Sparkles size={16} />
                      <span>Detailed Chemistry Explanation &amp; Mechanism</span>
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.55, margin: '0 0 10px', whiteSpace: 'pre-line' }}>
                      {currentQ.detailedSolutionHinglish}
                    </p>

                    <div style={{
                      background: 'var(--bg-hover)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      fontSize: '0.8rem',
                      color: '#10b981',
                      fontFamily: 'monospace',
                      marginBottom: '8px',
                      borderLeft: '3px solid #10b981'
                    }}>
                      🔑 {currentQ.keyReactionOrConcept}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      <span>📖 {currentQ.niosReference}</span>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {currentQ.tags.map((t, i) => (
                          <span key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '1px 6px', borderRadius: '4px' }}>
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    style={{
                      background: 'var(--bg-hover)',
                      color: currentIndex === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={() => setCurrentIndex(prev => Math.min(preparedQuestions.length - 1, prev + 1))}
                    disabled={currentIndex === preparedQuestions.length - 1}
                    style={{
                      background: currentIndex === preparedQuestions.length - 1 ? 'var(--bg-hover)' : '#10b981',
                      color: currentIndex === preparedQuestions.length - 1 ? 'var(--text-muted)' : '#000000',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      cursor: currentIndex === preparedQuestions.length - 1 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>Next Question</span>
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>
            ) : null}
          </div>

          {/* Right Column: Question Palette & Score Breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Scorecard Widget */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <BarChart3 size={18} color="#10b981" />
                <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Test Progress &amp; Score
                </h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center', marginBottom: '12px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '8px' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#10b981' }}>{scoreStats.correct}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Correct</div>
                </div>
                <div style={{ background: 'rgba(225, 29, 72, 0.1)', border: '1px solid rgba(225, 29, 72, 0.3)', borderRadius: '8px', padding: '8px' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#f43f5e' }}>{scoreStats.incorrect}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Wrong</div>
                </div>
                <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '8px' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--text-primary)' }}>{scoreStats.unattempted}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Pending</div>
                </div>
              </div>

              <div style={{ background: 'var(--bg-hover)', borderRadius: '6px', height: '8px', overflow: 'hidden', marginBottom: '6px' }}>
                <div style={{
                  width: `${scoreStats.percentage}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #10b981, #059669)',
                  transition: 'width 0.3s ease'
                }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                <span>Accuracy</span>
                <span style={{ color: '#10b981', fontWeight: 800 }}>{scoreStats.percentage}%</span>
              </div>
            </div>

            {/* Question Palette Matrix */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '16px'
            }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 10px' }}>
                Question Palette ({preparedQuestions.length})
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                {preparedQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isQAnswered = userAnswers[q.id] !== undefined;
                  const isQCorrect = isQAnswered && userAnswers[q.id] === q.currentCorrectIndex;

                  let bg = 'var(--bg-hover)';
                  let color = 'var(--text-muted)';
                  let border = '1px solid var(--border-color)';

                  if (isCurrent) {
                    border = '2px solid #10b981';
                  }

                  if (activeMode === 'practice' && isQAnswered) {
                    if (isQCorrect) {
                      bg = '#10b981';
                      color = '#000000';
                    } else {
                      bg = '#e11d48';
                      color = '#ffffff';
                    }
                  } else if (activeMode === 'exam') {
                    if (isExamSubmitted) {
                      if (isQCorrect) {
                        bg = '#10b981';
                        color = '#000000';
                      } else {
                        bg = '#e11d48';
                        color = '#ffffff';
                      }
                    } else if (isQAnswered) {
                      bg = '#0284c7';
                      color = '#ffffff';
                    }
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      style={{
                        background: bg,
                        color: color,
                        border: border,
                        borderRadius: '6px',
                        padding: '6px 0',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick NIOS Lesson Study Cheat Sheet */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '14px',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: 800, marginBottom: '8px' }}>
                <BookOpen size={16} />
                <span>Quick Formulas &amp; Rules</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li><strong>Wurtz Reaction</strong>: 2 R-X + 2Na → R-R + 2NaX (Cannot form CH4)</li>
                <li><strong>Saytzeff Rule</strong>: More substituted alkene is major product</li>
                <li><strong>Markovnikov</strong>: Negative part goes to carbon with fewer hydrogens</li>
                <li><strong>Peroxide (HBr only)</strong>: Anti-Markovnikov free-radical addition</li>
                <li><strong>Acidity</strong>: Ethyne has 50% s-character in sp hybridized carbon</li>
                <li><strong>Hückel Rule</strong>: (4n + 2)π delocalized aromatic electrons</li>
              </ul>
            </div>

          </div>

        </div>
        )}

      </div>

    </div>
  );
};
