import React, { useState, useMemo } from 'react';
import type { QuizQuestion } from '../data/ncertData';
import { Award, CheckCircle2, XCircle, RotateCcw, Sparkles, HelpCircle, Shuffle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PracticeQuizProps {
  quizQuestions: QuizQuestion[];
  chapterTitle: string;
}

interface ShuffledQuizQuestion extends QuizQuestion {
  shuffledOptions: string[];
  shuffledCorrectIndex: number;
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const PracticeQuiz: React.FC<PracticeQuizProps> = ({
  quizQuestions,
  chapterTitle,
}) => {
  const [shuffleSeed, setShuffleSeed] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  // Prepared questions with shuffled options
  const preparedQuestions: ShuffledQuizQuestion[] = useMemo(() => {
    if (!quizQuestions || quizQuestions.length === 0) return [];
    return quizQuestions.map(q => {
      const order = shuffleArray(q.options.map((_, idx) => idx));
      const shuffledOptions = order.map(idx => q.options[idx]);
      const shuffledCorrectIndex = order.indexOf(q.correctIndex);
      return {
        ...q,
        shuffledOptions,
        shuffledCorrectIndex
      };
    });
  }, [quizQuestions, shuffleSeed]);

  if (!quizQuestions || quizQuestions.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
        <HelpCircle size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>Practice Quiz coming soon for {chapterTitle}!</h3>
        <p style={{ fontSize: '0.9rem' }}>We are updating competency-based MCQs daily according to NEP 2020 guidelines.</p>
      </div>
    );
  }

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let correctCount = 0;
    preparedQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.shuffledCorrectIndex) {
        correctCount++;
      }
    });

    if (correctCount === preparedQuestions.length && correctCount > 0) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const handleReshuffle = () => {
    setShuffleSeed(prev => prev + 1);
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = preparedQuestions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.shuffledCorrectIndex ? acc + 1 : acc;
  }, 0);

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <div style={{
        background: 'var(--primary-gradient)',
        color: '#ffffff',
        padding: '20px',
        borderRadius: 'var(--radius-lg)',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={22} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>NEP 2020 MCQ Practice Test</h3>
          </div>
          <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '4px' }}>
            Chapter: {chapterTitle} | {preparedQuestions.length} Questions (Dynamic Option Shuffling Active)
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={handleReshuffle}
            title="Reshuffle Options"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-md)',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Shuffle size={14} />
            <span>Shuffle Options</span>
          </button>

          {submitted && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              fontWeight: 800,
              fontSize: '1.1rem',
              backdropFilter: 'blur(8px)'
            }}>
              Score: {score} / {preparedQuestions.length}
            </div>
          )}
        </div>
      </div>

      {/* Questions list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {preparedQuestions.map((q, qIdx) => {
          const selectedOpt = selectedAnswers[qIdx];
          const isCorrect = selectedOpt === q.shuffledCorrectIndex;

          return (
            <div
              key={q.id}
              className="glass-card"
              style={{
                padding: '20px',
                border: submitted
                  ? isCorrect
                    ? '2px solid #10b981'
                    : '2px solid #ef4444'
                  : '1px solid var(--border-color)'
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px' }}>
                {qIdx + 1}. {q.question}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {q.shuffledOptions.map((opt, oIdx) => {
                  const isSelectedOption = selectedOpt === oIdx;
                  const isCorrectOption = q.shuffledCorrectIndex === oIdx;

                  let optionBg = 'var(--bg-primary)';
                  let optionBorder = '1px solid var(--border-color)';

                  if (submitted) {
                    if (isCorrectOption) {
                      optionBg = 'rgba(16, 185, 129, 0.12)';
                      optionBorder = '1px solid #10b981';
                    } else if (isSelectedOption && !isCorrect) {
                      optionBg = 'rgba(239, 68, 68, 0.12)';
                      optionBorder = '1px solid #ef4444';
                    }
                  } else if (isSelectedOption) {
                    optionBg = 'rgba(79, 70, 229, 0.12)';
                    optionBorder = '1px solid var(--primary-500)';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-md)',
                        background: optionBg,
                        border: optionBorder,
                        color: 'var(--text-primary)',
                        textAlign: 'left',
                        fontWeight: isSelectedOption ? 700 : 500,
                        fontSize: '0.9rem',
                        cursor: submitted ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'var(--transition)'
                      }}
                    >
                      <span>{opt}</span>
                      {submitted && isCorrectOption && <CheckCircle2 size={18} style={{ color: '#10b981' }} />}
                      {submitted && isSelectedOption && !isCorrectOption && <XCircle size={18} style={{ color: '#ef4444' }} />}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div style={{
                  marginTop: '14px',
                  padding: '12px 16px',
                  background: 'rgba(79, 70, 229, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--primary-500)',
                  fontSize: '0.88rem'
                }}>
                  <strong style={{ color: 'var(--primary-600)' }}>Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action buttons */}
      <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        {submitted ? (
          <button
            onClick={handleReset}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <RotateCcw size={16} />
            <span>Retake Quiz</span>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Sparkles size={16} />
            <span>Submit Answers</span>
          </button>
        )}
      </div>
    </div>
  );
};
