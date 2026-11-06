import React, { useState } from 'react';
import type { Subject, Chapter, QuestionSolution } from '../data/ncertData';
import { SolutionViewer } from './SolutionViewer';
import { PracticeQuiz } from './PracticeQuiz';
import { BookOpen, CheckCircle, Sparkles, HelpCircle, FileText, ArrowLeft } from 'lucide-react';

interface ChapterExplorerProps {
  subject: Subject;
  onBackToSubjects: () => void;
  onToggleBookmark: (solution: QuestionSolution) => void;
  isBookmarked: (id: string) => boolean;
}

export const ChapterExplorer: React.FC<ChapterExplorerProps> = ({
  subject,
  onBackToSubjects,
  onToggleBookmark,
  isBookmarked,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter>(subject.chapters[0] || null);
  const [activeTab, setActiveTab] = useState<'solutions' | 'competency' | 'textbook' | 'quiz'>('solutions');

  if (!subject.chapters || subject.chapters.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <button className="btn btn-outline" onClick={onBackToSubjects} style={{ marginBottom: '1.5rem' }}>
          <ArrowLeft size={16} /> Back to Subjects
        </button>
        <h3>No chapters available yet for {subject.name}</h3>
      </div>
    );
  }

  return (
    <div style={{ margin: '2rem 0' }}>
      
      {/* Top Header with Back Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button className="btn btn-outline" onClick={onBackToSubjects} style={{ padding: '8px 14px' }}>
            <ArrowLeft size={16} /> Subjects
          </button>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{subject.name}</h2>
              <span className="badge badge-primary">{subject.chapters.length} Chapters</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Rationalized NCERT Textbook & Exercise Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Chapter Sidebar + Main Content Reader */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        alignItems: 'start'
      }}>
        
        {/* Sidebar Chapter Selector List */}
        <div className="glass-panel" style={{ borderRadius: 'var(--radius-lg)', padding: '16px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={16} style={{ color: 'var(--primary-500)' }} />
            CHAPTER DIRECTORY
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {subject.chapters.map((ch) => {
              const isSelected = selectedChapter?.id === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapter(ch);
                    setActiveTab('solutions');
                  }}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: isSelected ? '1px solid var(--primary-500)' : '1px solid var(--border-color)',
                    background: isSelected ? 'var(--primary-gradient)' : 'var(--bg-card)',
                    color: isSelected ? '#ffffff' : 'var(--text-primary)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    boxShadow: isSelected ? '0 4px 14px rgba(79, 70, 229, 0.3)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', opacity: isSelected ? 0.9 : 0.6, fontWeight: 700 }}>
                    CHAPTER {ch.chapterNumber}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.92rem', marginTop: '2px', lineHeight: 1.3 }}>
                    {ch.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1 }}>
          {selectedChapter ? (
            <div>
              {/* Selected Chapter Header Card */}
              <div className="glass-card" style={{ padding: '24px', marginBottom: '1.5rem', background: 'var(--bg-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="badge badge-primary">Chapter {selectedChapter.chapterNumber}</span>
                  <span className="badge badge-nep">NEP 2020 Edition</span>
                </div>

                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>
                  {selectedChapter.title}
                </h2>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  🎯 <strong>NEP Syllabus Focus:</strong> {selectedChapter.nepHighlights}
                </p>

                {/* Official NCERT PDF Link & Fallback Mirror Banner */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  background: 'var(--bg-hover)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  marginTop: '14px',
                  border: '1px solid var(--border-color)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      📖 <strong>NCERT Official Server:</strong> {selectedChapter.officialPdfUrl ? 'Direct PDF & Portal Links' : 'ncert.nic.in/textbook.php'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedChapter.officialPdfUrl && (
                      <a
                        href={selectedChapter.officialPdfUrl}
                        className="btn"
                        style={{
                          padding: '6px 14px',
                          fontSize: '0.8rem',
                          borderRadius: '9999px',
                          textDecoration: 'none',
                          background: 'var(--primary-gradient)',
                          color: '#ffffff',
                          fontWeight: 700
                        }}
                      >
                        📄 Download Official NCERT PDF
                      </a>
                    )}
                    <a
                      href="https://ncert.nic.in/textbook.php"
                      className="btn btn-outline"
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.8rem',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        color: 'var(--primary-500)',
                        fontWeight: 700
                      }}
                    >
                      🔗 Official NCERT Site
                    </a>
                    <button
                      onClick={() => setActiveTab('textbook')}
                      className="btn"
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.8rem',
                        borderRadius: '9999px',
                        background: 'var(--nep-gradient)',
                        color: '#ffffff',
                        border: 'none',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      ⚡ In-App Reader (Fallback)
                    </button>
                  </div>
                </div>

                {/* Reader Tabs */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: '18px',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '8px',
                  overflowX: 'auto'
                }}>
                  <button
                    onClick={() => setActiveTab('solutions')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      background: activeTab === 'solutions' ? 'var(--primary-500)' : 'transparent',
                      color: activeTab === 'solutions' ? '#ffffff' : 'var(--text-primary)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <CheckCircle size={16} /> NCERT Solutions ({selectedChapter.exerciseSolutions.length})
                  </button>

                  <button
                    onClick={() => setActiveTab('competency')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      background: activeTab === 'competency' ? '#10b981' : 'transparent',
                      color: activeTab === 'competency' ? '#ffffff' : 'var(--text-primary)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Sparkles size={16} /> NEP CBQs ({selectedChapter.competencyQuestions.length})
                  </button>

                  <button
                    onClick={() => setActiveTab('textbook')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      background: activeTab === 'textbook' ? 'var(--text-primary)' : 'transparent',
                      color: activeTab === 'textbook' ? 'var(--bg-primary)' : 'var(--text-primary)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <FileText size={16} /> Textbook Mirror Reader
                  </button>

                  <button
                    onClick={() => setActiveTab('quiz')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      background: activeTab === 'quiz' ? 'var(--accent-amber)' : 'transparent',
                      color: activeTab === 'quiz' ? '#ffffff' : 'var(--text-primary)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <HelpCircle size={16} /> Practice Quiz
                  </button>
                </div>
              </div>

              {/* Tab Views */}
              {activeTab === 'solutions' && (
                <SolutionViewer
                  solutions={selectedChapter.exerciseSolutions}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={isBookmarked}
                />
              )}

              {activeTab === 'competency' && (
                <SolutionViewer
                  solutions={selectedChapter.competencyQuestions}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={isBookmarked}
                />
              )}

              {activeTab === 'textbook' && (
                <div className="glass-card" style={{ padding: '24px', lineHeight: 1.7 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-500)' }}>
                    📖 Rationalized Textbook Overview & Key Concepts
                  </h3>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>
                    {selectedChapter.summaryTextbook}
                  </div>
                </div>
              )}

              {activeTab === 'quiz' && (
                <PracticeQuiz
                  quizQuestions={selectedChapter.quiz}
                  chapterTitle={selectedChapter.title}
                />
              )}

            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              Select a chapter from the sidebar directory to view solutions.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
