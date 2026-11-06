import React, { useState, useMemo } from 'react';
import { ArrowLeft, Calculator, CheckCircle2, ArrowUpRight, Search } from 'lucide-react';

interface NiosNotesViewProps {
  onBack: () => void;
}

type NiosStageFilter = 'ALL' | 'SENIOR' | 'SECONDARY';

export const NiosNotesView: React.FC<NiosNotesViewProps> = ({ onBack }) => {
  const [stageFilter, setStageFilter] = useState<NiosStageFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const niosNotesList = [
    // ── SENIOR SECONDARY (CLASS 12) ──
    {
      id: 'nios-chem-313-l26',
      title: 'NIOS Chem 313: Lesson 26 Hydrocarbons Test & Lab',
      subtitle: '20 high-yield questions on Wurtz reaction, Saytzeff rule, Markovnikov/peroxide addition, Ozonolysis & Benzene SEAr.',
      badge: '24-Page Coverage 🧪',
      badgeColor: '#10b981',
      link: '/?view=hydrocarbons-test',
      isHot: true,
      tag: 'Chemistry (313)',
      stageGroup: 'SENIOR'
    },
    {
      id: 'nios-phy-ch6-emi',
      title: 'NIOS Physics 312: Ch 6 Electromagnetic Induction Numericals',
      subtitle: 'Magnetic flux, Faraday laws, Lenz law, self & mutual inductance calculation worksheet with instant step-by-step solutions.',
      badge: 'Formula & Numericals',
      badgeColor: '#3b82f6',
      link: '/physics-ch6-electromagnetic-induction-notes-and-numericals.html',
      isHot: true,
      tag: 'Physics (312)',
      stageGroup: 'SENIOR'
    },
    {
      id: 'nios-phy-ch7-ac',
      title: 'NIOS Physics 312: Ch 7 Alternating Current Fill-in-the-Blanks',
      subtitle: 'Peak vs RMS current, inductive/capacitive reactance, LCR resonance & transformer efficiency practice.',
      badge: 'Interactive Theory',
      badgeColor: '#8b5cf6',
      link: '/physics-ch7-alternating-current-fill-in-the-blanks.html',
      tag: 'Physics (312)',
      stageGroup: 'SENIOR'
    },
    {
      id: 'nios-math-311-perm',
      title: 'NIOS Math 311: Permutations & Combinations Challenge',
      subtitle: 'Ch 6 Fundamental principle of counting, circular permutations, and combinatorial geometry Olympiad-level questions.',
      badge: 'Advanced Math',
      badgeColor: '#0284c7',
      link: '/class11-maths-permutations-combinations-ch6-difficult-questions.html',
      tag: 'Math (311)',
      stageGroup: 'SENIOR'
    },
    {
      id: 'nios-bio-314-microbes',
      title: 'NIOS Biology 314: Microbes in Human Welfare Visual Studio',
      subtitle: 'Household food processing, industrial fermenters, sewage treatment, biogas & biofertilizers visual note cards.',
      badge: 'Visual Notes',
      badgeColor: '#059669',
      link: '/class12-biology-ch8-microbes-kids-edition.html',
      tag: 'Biology (314)',
      stageGroup: 'SENIOR'
    },
    {
      id: 'nios-acc-320-grewal',
      title: 'NIOS Accountancy 320: Accounting Equation Studio',
      subtitle: 'T.S. Grewal style real-time balance sheet equation verification and transaction accounting impact simulator.',
      badge: 'Interactive Studio',
      badgeColor: '#d97706',
      link: '/?view=ts-grewal',
      isHot: true,
      tag: 'Accountancy (320)',
      stageGroup: 'SENIOR'
    },
    {
      id: 'nios-acc-320-ch3',
      title: 'NIOS Accountancy 320: Ch 3 Recording Transactions 10 Sets',
      subtitle: 'Rules of debit & credit, source documents, cash memo, invoice & journal entry rigorous numericals.',
      badge: '10 Sets Numericals',
      badgeColor: '#b45309',
      link: '/financial-accounting-ch3-notes-and-numericals.html',
      tag: 'Accountancy (320)',
      stageGroup: 'SENIOR'
    },
    {
      id: 'nios-econ-318-stats',
      title: 'NIOS Economics 318: Statistics Competency Test',
      subtitle: 'Measures of central tendency, dispersion, index numbers, and correlation analysis competency quiz.',
      badge: 'Test Suite',
      badgeColor: '#7c3aed',
      link: '/?view=stats-test',
      tag: 'Economics (318)',
      stageGroup: 'SENIOR'
    },
    {
      id: 'nios-hist-315-line',
      title: 'NIOS History 315: Line-by-Line MCQ Competency Test',
      subtitle: 'Ancient Harappan civilization, Vedic age, Mauryan Empire, and Mughal architecture high-yield questions.',
      badge: 'Line-by-Line MCQ',
      badgeColor: '#ea580c',
      link: '/?view=history-test',
      tag: 'History (315)',
      stageGroup: 'SENIOR'
    },

    // ── SECONDARY (CLASS 10) ──
    {
      id: 'nios-math-num-ch1',
      title: 'NIOS Math 211: केवल संख्यात्मक प्रश्न',
      subtitle: 'Chapter 1 Number Systems: 10 Sets on p/q conversion, rationalization, and surds calculation with tolerance validation.',
      badge: '100% Pure Numericals',
      badgeColor: '#14532d',
      link: '/nios-math-ch1-numericals-only-fill-in-the-blanks.html',
      isHot: true,
      tag: 'Math (211)',
      stageGroup: 'SECONDARY'
    },
    {
      id: 'nios-math-fill-ch1',
      title: 'NIOS Math 211: 39-Page Fill-in-the-Blanks',
      subtitle: 'Complete textbook paragraph practice covering Pages 1 to 39 with alphabet anchors, hidden hints, and verified solutions.',
      badge: 'Interactive Theory',
      badgeColor: '#1e40af',
      link: '/nios-math-ch1-number-systems-fill-in-the-blanks.html',
      tag: 'Math (211)',
      stageGroup: 'SECONDARY'
    },

    {
      id: 'nios-acc-224-ledger',
      title: 'NIOS Accountancy 224: Journal to Ledger Posting Studio',
      subtitle: 'Interactive ledger account balancing, debit/credit posting mechanics and trial balance extract verification.',
      badge: 'Accounting Lab',
      badgeColor: '#d97706',
      link: '/journal-to-ledger-posting.html',
      tag: 'Accountancy (224)',
      stageGroup: 'SECONDARY'
    }
  ];

  const filteredNotes = useMemo(() => {
    return niosNotesList.filter(item => {
      if (stageFilter !== 'ALL' && item.stageGroup !== stageFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchSub = item.subtitle.toLowerCase().includes(q);
        const matchTag = item.tag.toLowerCase().includes(q);
        return matchTitle || matchSub || matchTag;
      }
      return true;
    });
  }, [stageFilter, searchQuery]);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0.25rem 0.5rem 3rem', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
      {/* ── Header Bar ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 0.5rem',
        borderBottom: '1px solid var(--border-color)',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onBack}
            className="btn btn-outline"
            style={{
              borderRadius: '10px',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            title="Go Back"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              NIOS Notes &amp; Practice Worksheets
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              Secondary (10th) &amp; Senior Secondary (12th) Paragraph Practice, Formula Sheets &amp; Pure Numericals
            </p>
          </div>
        </div>

        <span style={{
          background: 'rgba(55, 48, 163, 0.15)',
          border: '1px solid rgba(55, 48, 163, 0.4)',
          color: '#818cf8',
          fontSize: '0.78rem',
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <Calculator size={14} />
          Interactive Lab
        </span>
      </div>

      {/* ── Stage Filter Navigation Pills (Matching NCERT Design) ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '6px',
        padding: '0 2px'
      }}>
        {[
          { id: 'ALL', label: 'All NIOS Notes (10th & 12th)' },
          { id: 'SENIOR', label: 'Senior Secondary (12th)' },
          { id: 'SECONDARY', label: 'Secondary (10th)' }
        ].map((tab) => {
          const isActive = stageFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setStageFilter(tab.id as NiosStageFilter)}
              style={{
                background: isActive ? 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)' : 'var(--bg-card)',
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                border: isActive ? '1px solid #4f46e5' : '1px solid var(--border-color)',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: '0.8rem',
                fontWeight: isActive ? 900 : 700,
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                boxShadow: isActive ? '0 2px 10px rgba(79, 70, 229, 0.3)' : 'var(--shadow-sm)'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Search Bar ── */}
      <div style={{ position: 'relative' }}>
        <Search size={17} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          type="text"
          placeholder="Search NIOS worksheets by topic, subject or code (e.g. 211, 313, Chemistry, Numericals)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 16px 10px 40px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            outline: 'none',
            boxShadow: 'var(--shadow-sm)'
          }}
        />
      </div>

      {/* ── Cards List ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
        {filteredNotes.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="nextsem-dashboard-card"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '14px',
              padding: '16px',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)',
              transition: 'all 0.2s ease'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  background: item.badgeColor,
                  color: '#ffffff',
                  padding: '2px 8px',
                  borderRadius: '6px'
                }}>
                  {item.badge}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                  {item.tag}
                </span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: '4px 0 8px', lineHeight: 1.3 }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
                {item.subtitle}
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '14px',
              paddingTop: '10px',
              borderTop: '1px solid var(--border-color)'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={13} /> Self-Grading Ready
              </span>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--primary-500)', fontSize: '0.8rem', fontWeight: 800 }}>
                <span>Start Practice</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};
