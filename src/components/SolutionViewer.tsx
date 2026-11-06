import React, { useState } from 'react';
import type { QuestionSolution } from '../data/ncertData';
import { Bookmark, Check, Copy, Sparkles, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface SolutionViewerProps {
  solutions: QuestionSolution[];
  onToggleBookmark: (solution: QuestionSolution) => void;
  isBookmarked: (id: string) => boolean;
}

export const SolutionViewer: React.FC<SolutionViewerProps> = ({
  solutions,
  onToggleBookmark,
  isBookmarked,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (sol: QuestionSolution) => {
    const textToCopy = `Question: ${sol.questionText}\n\nSolution Steps:\n${sol.stepByStepSolution.join('\n')}\n\nFinal Answer: ${sol.finalAnswer}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(sol.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!solutions || solutions.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
        <HelpCircle size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
        <h3>No solutions available yet for this section.</h3>
        <p style={{ fontSize: '0.9rem' }}>Check back soon as Nextsem Academy updates rationalized solutions daily.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '1.25rem' }}>
      {solutions.map((sol) => {
        const bookmarked = isBookmarked(sol.id);
        const isCopied = copiedId === sol.id;

        return (
          <div
            key={sol.id}
            className="glass-card"
            style={{
              padding: '22px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              position: 'relative'
            }}
          >
            {/* Header: Question No & Badges */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge badge-primary" style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
                  {sol.questionNo}
                </span>
                <span className={`badge ${sol.difficulty === 'Easy' ? 'badge-nep' : sol.difficulty === 'Medium' ? 'badge-amber' : 'badge-primary'}`}>
                  {sol.difficulty}
                </span>
                {sol.type === 'Competency' && (
                  <span className="badge badge-nep">
                    <Sparkles size={12} /> NEP CBQ
                  </span>
                )}
              </div>

              {/* Action Buttons: Bookmark & Copy */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  className="btn btn-outline"
                  onClick={() => handleCopy(sol)}
                  style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                  title="Copy Solution text"
                >
                  {isCopied ? <Check size={14} style={{ color: '#4f46e5' }} /> : <Copy size={14} />}
                  <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                </button>

                <button
                  className="btn btn-outline"
                  onClick={() => onToggleBookmark(sol)}
                  style={{
                    padding: '6px 12px',
                    fontSize: '0.78rem',
                    borderColor: bookmarked ? '#4f46e5' : 'var(--border-color)',
                    color: bookmarked ? '#4f46e5' : 'var(--text-primary)',
                    background: bookmarked ? 'rgba(79, 70, 229, 0.08)' : 'var(--bg-hover)'
                  }}
                  title="Save to bookmarks"
                >
                  <Bookmark size={14} fill={bookmarked ? 'currentColor' : 'none'} />
                  <span>{bookmarked ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </div>

            {/* Question Text */}
            <div style={{
              fontSize: '1.02rem',
              fontWeight: 800,
              lineHeight: 1.5,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              padding: '12px 16px',
              background: 'var(--bg-hover)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid #4f46e5'
            }}>
              Q. {sol.questionText}
            </div>

            {/* Given Data & Formula (If present) */}
            {(sol.givenData || sol.formula) && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                {sol.givenData && (
                  <div style={{ background: 'var(--bg-primary)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>GIVEN DATA</span>
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>{sol.givenData}</span>
                  </div>
                )}
                {sol.formula && (
                  <div style={{ background: 'var(--bg-primary)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4f46e5', display: 'block', textTransform: 'uppercase' }}>KEY FORMULA / METHOD</span>
                    <span style={{ fontSize: '0.86rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-primary)' }}>{sol.formula}</span>
                  </div>
                )}
              </div>
            )}

            {/* Step-by-Step Solution Breakdown */}
            <div style={{ margin: '16px 0' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)', display: 'block', marginBottom: '10px' }}>
                Step-by-step Solution:
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {sol.stepByStepSolution.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', lineHeight: 1.55 }}>
                    <ArrowRight size={15} style={{ color: '#4f46e5', flexShrink: 0, marginTop: '3px' }} />
                    <div style={{ color: 'var(--text-primary)' }}>{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Answer Highlight Box */}
            <div style={{
              background: 'rgba(79, 70, 229, 0.06)',
              border: '1px solid rgba(79, 70, 229, 0.25)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              margin: '16px 0 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <CheckCircle2 size={20} style={{ color: '#4f46e5', flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#4f46e5', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Final Answer
                </span>
                <span style={{ fontSize: '0.96rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  {sol.finalAnswer}
                </span>
              </div>
            </div>

            {/* NEP 2020 Competency Note & Key Takeaway */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)', paddingTop: '10px', borderTop: '1px dashed var(--border-color)' }}>
              {sol.keyTakeaway && (
                <div>💡 <strong>Key Takeaway:</strong> {sol.keyTakeaway}</div>
              )}
              {sol.nepCompetencyNote && (
                <div style={{ color: '#4f46e5' }}>🎯 <strong>NEP Application:</strong> {sol.nepCompetencyNote}</div>
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
};
