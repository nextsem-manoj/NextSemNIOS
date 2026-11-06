import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Download, Copy, Check, Search, Bookmark, FileText } from 'lucide-react';
import { CLASSES_DATA, type QuestionSolution } from '../../data/ncertData';

interface NcertSolutionsViewProps {
  onBack: () => void;
  onToggleBookmark: (solution: QuestionSolution) => void;
  isBookmarked: (id: string) => boolean;
  onOpenTsGrewal?: () => void;
}

export const NcertSolutionsView: React.FC<NcertSolutionsViewProps> = ({
  onBack,
  onToggleBookmark,
  isBookmarked,
  onOpenTsGrewal
}) => {
  const [selectedClassNum, setSelectedClassNum] = useState<number>(12);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('c12-physics');
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentClassData = CLASSES_DATA.find(c => c.classNumber === selectedClassNum) || CLASSES_DATA[0];
  const currentSubject = currentClassData.subjects.find(s => s.id === selectedSubjectId) || currentClassData.subjects[0];

  const currentChapter = selectedChapterId
    ? currentSubject.chapters.find(ch => ch.id === selectedChapterId) || currentSubject.chapters[0]
    : currentSubject.chapters[0];

  const handleCopy = (sol: QuestionSolution) => {
    const textToCopy = `Question: ${sol.questionText}\n\nSolution Steps:\n${sol.stepByStepSolution.join('\n')}\n\nFinal Answer: ${sol.finalAnswer}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(sol.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter solutions based on search query
  const filteredSolutions = (currentChapter.exerciseSolutions || []).filter(s =>
    s.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.finalAnswer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem 0' }}>

      {/* Top Bar with Back Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <button
          onClick={onBack}
          className="btn btn-outline"
          style={{ borderRadius: '9999px', padding: '8px 18px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </button>

        <div style={{
          fontSize: '0.82rem',
          fontWeight: 800,
          color: '#4f46e5',
          background: 'rgba(79, 70, 229, 0.08)',
          padding: '6px 14px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Sparkles size={14} /> Rationalized NEP 2026–2027 Solutions
        </div>
      </div>

      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
        borderRadius: '20px',
        padding: '26px 22px',
        color: '#ffffff',
        marginBottom: '1.5rem',
        boxShadow: '0 8px 30px rgba(79, 70, 229, 0.35)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileText size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', color: '#ffffff' }}>
              Official NCERT Textbook Solutions
            </h1>
            <p style={{ fontSize: '0.88rem', margin: '4px 0 0', opacity: 0.95, color: '#ffffff' }}>
              Step-by-Step Verified Solutions for Class 1 to 12 • Nextsem Academy
            </p>
          </div>
        </div>
      </div>

      {/* Class Selection Tabs */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Select Class
        </div>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
          {CLASSES_DATA.map((cls) => (
            <button
              key={cls.classNumber}
              onClick={() => {
                setSelectedClassNum(cls.classNumber);
                setSelectedSubjectId(cls.subjects[0]?.id || '');
                setSelectedChapterId(null);
              }}
              className="btn"
              style={{
                background: selectedClassNum === cls.classNumber ? '#4f46e5' : 'var(--bg-card)',
                color: selectedClassNum === cls.classNumber ? '#ffffff' : 'var(--text-primary)',
                border: selectedClassNum === cls.classNumber ? '1px solid #4f46e5' : '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '8px 16px',
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Class {cls.classNumber}
            </button>
          ))}
        </div>
      </div>

      {/* Subject Selector Pills */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Select Subject
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {currentClassData.subjects.map((subj) => (
            <button
              key={subj.id}
              onClick={() => {
                setSelectedSubjectId(subj.id);
                setSelectedChapterId(null);
              }}
              className="btn"
              style={{
                background: selectedSubjectId === subj.id ? '#4f46e5' : 'var(--bg-card)',
                color: selectedSubjectId === subj.id ? '#ffffff' : 'var(--text-primary)',
                border: selectedSubjectId === subj.id ? '1px solid #4f46e5' : '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '8px 16px',
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
                boxShadow: selectedSubjectId === subj.id ? '0 4px 12px rgba(79, 70, 229, 0.3)' : 'none'
              }}
            >
              {subj.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Banner for TS Grewal 2025-2026 when Accountancy is selected */}
      {selectedSubjectId === 'c11-accountancy' && onOpenTsGrewal && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(30, 58, 138, 0.25) 100%)',
          border: '1.5px solid rgba(59, 130, 246, 0.4)',
          borderRadius: '14px',
          padding: '14px 18px',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ background: '#2563eb', color: '#ffffff', fontSize: '0.72rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px' }}>
                2025–2026 EDITION
              </span>
              <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                T.S. Grewal: Accounting Equation (Q1–Q5)
              </span>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Full tabular solutions with equations, loss/drawings analysis, and complete Balance Sheet.
            </p>
          </div>
          <button
            onClick={onOpenTsGrewal}
            className="btn"
            style={{
              background: '#2563eb',
              color: '#ffffff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            Open Dedicated Page →
          </button>
        </div>
      )}

      {/* Chapter Selection Dropdown / Selector Bar */}
      <div style={{
        background: 'var(--bg-card)',
        padding: '16px',
        borderRadius: '14px',
        border: '1px solid var(--border-color)',
        marginBottom: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            Select Chapter:
          </div>
          <div style={{ fontSize: '0.82rem', color: '#7c3aed', fontWeight: 800 }}>
            {currentSubject.chapters.length} Chapters Available
          </div>
        </div>

        <select
          value={currentChapter.id}
          onChange={(e) => setSelectedChapterId(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontWeight: 800,
            fontSize: '0.9rem',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          {currentSubject.chapters.map((ch) => (
            <option key={ch.id} value={ch.id}>
              Unit {ch.chapterNumber}: {ch.title}
            </option>
          ))}
        </select>

        {/* Search Bar for Chapter Solutions */}
        <div style={{ position: 'relative', marginTop: '4px' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search within this chapter's solutions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px 10px 42px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-body)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Solutions Cards Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
            Unit {currentChapter.chapterNumber}: {currentChapter.title} — Solutions
          </h3>

          <button
            onClick={() => {
              window.open(currentChapter.officialPdfUrl || '#', '_blank');
            }}
            className="btn"
            style={{
              background: '#10b981',
              color: '#ffffff',
              borderRadius: '8px',
              padding: '6px 14px',
              fontWeight: 800,
              fontSize: '0.8rem',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Download size={15} /> Download PDF
          </button>
        </div>

        {filteredSolutions.length > 0 ? (
          filteredSolutions.map((sol) => {
            const isBooked = isBookmarked(sol.id);
            const isCopied = copiedId === sol.id;

            return (
              <div
                key={sol.id}
                className="glass-card"
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                {/* Question Header Bar */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      background: 'rgba(124, 58, 237, 0.15)',
                      color: '#7c3aed',
                      fontWeight: 900,
                      fontSize: '0.82rem',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}>
                      {sol.questionNo}
                    </span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                      Rationalized Exercise
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleCopy(sol)}
                      className="btn btn-outline"
                      style={{ padding: '6px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}
                      title="Copy Solution"
                    >
                      {isCopied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                    </button>
                    <button
                      onClick={() => onToggleBookmark(sol)}
                      className="btn btn-outline"
                      style={{ padding: '6px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}
                      title={isBooked ? "Remove Bookmark" : "Bookmark Solution"}
                    >
                      <Bookmark size={14} style={{ color: isBooked ? '#ec4899' : 'var(--text-muted)' }} fill={isBooked ? '#ec4899' : 'none'} />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {sol.questionText}
                </div>

                {/* Formula / Concept Tag */}
                {sol.formula && (
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--primary-500)',
                    fontFamily: 'monospace'
                  }}>
                    Formula: {sol.formula}
                  </div>
                )}

                {/* Step by Step Breakdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase' }}>
                    Step-by-Step Solution:
                  </div>
                  {sol.stepByStepSolution.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        paddingLeft: '12px',
                        borderLeft: '2px solid var(--border-color)'
                      }}
                    >
                      {step}
                    </div>
                  ))}
                </div>

                {/* Final Answer */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.15) 100%)',
                  border: '1px solid #10b981',
                  borderRadius: '10px',
                  padding: '14px 16px'
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase' }}>
                    Final Answer:
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 900, color: 'var(--text-primary)', marginTop: '4px' }}>
                    {sol.finalAnswer}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <FileText size={48} style={{ color: '#7c3aed', margin: '0 auto 1rem', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              Step-by-Step Textbook Solutions Loaded
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              Solutions for Class {selectedClassNum} {currentSubject.name} Unit {currentChapter.chapterNumber} are available for offline viewing & PDF download.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};
