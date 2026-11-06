import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroBannerProps {
  activeStageTab: string;
  setActiveStageTab: (stage: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  activeStageTab,
  setActiveStageTab,
}) => {
  const stages = [
    { name: 'All Stages', filter: 'ALL' },
    { name: 'Foundational (Class 1-2)', filter: 'Foundational' },
    { name: 'Preparatory (Class 3-5)', filter: 'Preparatory' },
    { name: 'Middle (Class 6-8)', filter: 'Middle' },
    { name: 'Secondary (Class 9-10)', filter: 'Secondary' },
    { name: 'Senior Secondary (Class 11-12)', filter: 'Senior Secondary' },
  ];

  return (
    <section style={{
      background: 'var(--hero-gradient)',
      padding: '2.5rem 0 1.5rem',
      borderBottom: '1px solid var(--border-color)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main Title & NEP Announcement Badge */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }} className="badge badge-nep">
            <Sparkles size={14} />
            <span>NEP 2020 &amp; NCF Aligned Syllabus (2026–2027 Edition)</span>
          </div>

          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1.25, marginBottom: '1rem', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
            Latest NCERT Books &amp; <span style={{ color: '#4f46e5' }}>Step-by-Step Solutions</span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Master NCERT exercises, Competency-Based Questions (CBQs), and Chapter summaries with StudyGuide by Nextsem. Designed for top academic performance in School &amp; Board Exams.
          </p>

          {/* Key Feature Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} style={{ color: '#4f46e5' }} />
              <span>30% Rationalized Content</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} style={{ color: '#4f46e5' }} />
              <span>Competency Based Questions (CBQs)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} style={{ color: '#4f46e5' }} />
              <span>Interactive Chapter Practice Quizzes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} style={{ color: '#4f46e5' }} />
              <span>100% Free &amp; Printable</span>
            </div>
          </div>
        </div>

        {/* NEP 5+3+3+4 Stage Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '8px',
          WebkitOverflowScrolling: 'touch',
          maxWidth: '100%'
        }}>
          {stages.map((stg) => {
            const isActive = activeStageTab === stg.filter;
            return (
              <button
                key={stg.filter}
                onClick={() => setActiveStageTab(stg.filter)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: isActive ? '1px solid #4f46e5' : '1px solid var(--border-color)',
                  background: isActive ? 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'var(--transition)',
                  boxShadow: isActive ? '0 2px 10px rgba(79, 70, 229, 0.3)' : 'none'
                }}
              >
                {stg.name}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
