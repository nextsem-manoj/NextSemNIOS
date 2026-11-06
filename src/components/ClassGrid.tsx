import React, { useState, useMemo, useEffect } from 'react';
import { ALL_CLASSES_SUMMARY } from '../data/ncertData';
import { 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

export type AcademicSection = 'PRIMARY' | 'SECONDARY' | 'SENIOR';

interface ClassGridProps {
  selectedClass: number;
  onSelectClass: (classNum: number) => void;
  onBack?: () => void;
  onOpenAdmin?: () => void;
  searchQuery?: string;
  onOpenKgHub?: (level?: 'nursery' | 'lkg' | 'ukg' | 'all') => void;
  initialSection?: AcademicSection | null;
  onSelectSectionChange?: (section: AcademicSection | null) => void;
  onOpenNios?: () => void;
}

interface ClassBrandMeta {
  roman: string;
  gradient: string;
  glowColor: string;
  stageTag: string;
  stageGroup: AcademicSection;
  subjectCount: number;
  popularLabel?: string;
  streams?: string[];
}

interface SectionDefinition {
  id: AcademicSection;
  title: string;
  subtitle: string;
  rangeLabel: string;
  icon: string;
  gradient: string;
  glowColor: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  borderColor: string;
  description: string;
  classNumbers: number[];
  highlights: string[];
}

const SECTIONS_CONFIG: Record<AcademicSection, SectionDefinition> = {
  PRIMARY: {
    id: 'PRIMARY',
    title: 'Primary Section',
    subtitle: 'Classes 1 to 5 • Foundational & Preparatory',
    rangeLabel: 'Classes 1–5 & Balvatika',
    icon: '🎒',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    badge: 'Classes 1–5 • Foundational',
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeColor: '#10b981',
    borderColor: 'rgba(16, 185, 129, 0.4)',
    description: 'Foundational literacy & numeracy under NEP 2020: Math Mela, Santoor English, Veena Hindi, Joyful Mathematics & Sarangi.',
    classNumbers: [5, 4, 3, 2, 1],
    highlights: [
      'Class 5: Math Mela, Santoor, Veena & EVS',
      'Class 4: Preparatory Mathematics & English',
      'Class 3: Santoor & Joyful Mathematics',
      'Class 2 & 1: Sarangi, Mridang & Joyful Maths',
      'Pre-Primary: Balvatika 1, 2 & 3 (Nursery, LKG, UKG)'
    ]
  },
  SECONDARY: {
    id: 'SECONDARY',
    title: 'Secondary Section',
    subtitle: 'Classes 6 to 10 • Middle School & Board Prep',
    rangeLabel: 'Classes 6, 7, 8, 9, 10',
    icon: '🏫',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    badge: 'Classes 6–10 • Middle & Board',
    badgeBg: 'rgba(245, 158, 11, 0.12)',
    badgeColor: '#f59e0b',
    borderColor: 'rgba(245, 158, 11, 0.4)',
    description: 'Middle school conceptual mastery up to CBSE AISSE Class 10 Board exams: Curiosity Science, Ganita Prakash & Social Science.',
    classNumbers: [10, 9, 8, 7, 6],
    highlights: [
      'Class 10: CBSE AISSE Board Exam Solutions',
      'Class 9: Ganita Manjusha, Science & Hindi Grammar',
      'Class 8: Curiosity Science & Ganita Prakash',
      'Class 7: Exploring Society & Poorvi English',
      'Class 6: Middle Stage Curiosity & Malhar Hindi'
    ]
  },
  SENIOR: {
    id: 'SENIOR',
    title: 'Senior Secondary Section',
    subtitle: 'Classes 11 & 12 • Senior Board & NIOS Hub',
    rangeLabel: 'Classes 11 & 12 + NIOS',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
    glowColor: 'rgba(79, 70, 229, 0.35)',
    badge: 'Classes 11–12 • Senior Board',
    badgeBg: 'rgba(79, 70, 229, 0.12)',
    badgeColor: '#4f46e5',
    borderColor: 'rgba(79, 70, 229, 0.4)',
    description: 'Senior Secondary streams for CBSE Board & Entrance exams: Science (Medical / Non-Med), Commerce, Humanities & NIOS 12th.',
    classNumbers: [12, 11],
    highlights: [
      'Class 12: CBSE AISSCE Board 2026–27 (14 Subjects)',
      'Class 11: T.S. Grewal Accountancy & Physics Solutions',
      'Science Stream: Physics, Chemistry, Biology, Maths',
      'Commerce Stream: Accountancy, Business Studies, Economics',
      'Official NIOS Senior Secondary (12th) Modules'
    ]
  }
};

const NEXTSEM_CLASS_PALETTE: Record<number, ClassBrandMeta> = {
  12: { 
    roman: 'XII',  
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)', 
    glowColor: 'rgba(79, 70, 229, 0.4)', 
    stageTag: 'CBSE Board 2026–27', 
    stageGroup: 'SENIOR',
    subjectCount: 14,
    popularLabel: '🔥 High Demand',
    streams: ['Science', 'Commerce', 'Arts']
  },
  11: { 
    roman: 'XI',   
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', 
    glowColor: 'rgba(2, 132, 199, 0.4)', 
    stageTag: 'Senior Secondary', 
    stageGroup: 'SENIOR',
    subjectCount: 14,
    streams: ['Science', 'Commerce', 'Humanities']
  },
  10: { 
    roman: 'X',    
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
    glowColor: 'rgba(245, 158, 11, 0.4)', 
    stageTag: 'CBSE AISSE Board', 
    stageGroup: 'SECONDARY',
    subjectCount: 9,
    popularLabel: '🏆 Top Rated',
    streams: ['Maths', 'Science', 'SST', 'Hindi', 'English']
  },
  9:  { 
    roman: 'IX',   
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', 
    glowColor: 'rgba(139, 92, 246, 0.4)', 
    stageTag: 'Secondary Stage', 
    stageGroup: 'SECONDARY',
    subjectCount: 10,
    streams: ['Maths', 'Science', 'Hindi Grammar', 'English', 'SST']
  },
  8:  { 
    roman: 'VIII', 
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', 
    glowColor: 'rgba(236, 72, 153, 0.4)', 
    stageTag: 'Middle School', 
    stageGroup: 'SECONDARY',
    subjectCount: 7,
    streams: ['Maths', 'Science', 'Social Science', 'Hindi', 'English']
  },
  7:  { 
    roman: 'VII',  
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', 
    glowColor: 'rgba(6, 182, 212, 0.4)', 
    stageTag: 'Middle School', 
    stageGroup: 'SECONDARY',
    subjectCount: 7,
    streams: ['Maths', 'Science', 'Social Science', 'Hindi', 'English']
  },
  6:  { 
    roman: 'VI',   
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', 
    glowColor: 'rgba(59, 130, 246, 0.4)', 
    stageTag: 'Middle Stage Entry', 
    stageGroup: 'SECONDARY',
    subjectCount: 7,
    streams: ['Maths', 'Science', 'Social Science', 'Hindi', 'English']
  },
  5:  { 
    roman: 'V',    
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)', 
    glowColor: 'rgba(20, 184, 166, 0.4)', 
    stageTag: 'Preparatory Stage', 
    stageGroup: 'PRIMARY',
    subjectCount: 4,
    streams: ['Math Mela', 'Santoor', 'Veena', 'EVS']
  },
  4:  { 
    roman: 'IV',   
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)', 
    glowColor: 'rgba(99, 102, 241, 0.4)', 
    stageTag: 'Preparatory Stage', 
    stageGroup: 'PRIMARY',
    subjectCount: 4,
    streams: ['Maths', 'English', 'Hindi', 'EVS']
  },
  3:  { 
    roman: 'III',  
    gradient: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)', 
    glowColor: 'rgba(2, 132, 199, 0.4)', 
    stageTag: 'Preparatory Stage', 
    stageGroup: 'PRIMARY',
    subjectCount: 4,
    streams: ['Santoor', 'Joyful Maths', 'Veena', 'EVS']
  },
  2:  { 
    roman: 'II',   
    gradient: 'linear-gradient(135deg, #eab308 0%, #a16207 100%)', 
    glowColor: 'rgba(234, 179, 8, 0.4)', 
    stageTag: 'Foundational Stage', 
    stageGroup: 'PRIMARY',
    subjectCount: 4,
    streams: ['Joyful Maths', 'Mridang', 'Sarangi', 'Urdu']
  },
  1:  { 
    roman: 'I',    
    gradient: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)', 
    glowColor: 'rgba(168, 85, 247, 0.4)', 
    stageTag: 'Foundational Stage', 
    stageGroup: 'PRIMARY',
    subjectCount: 4,
    streams: ['Joyful Maths', 'Mridang', 'Sarangi', 'Urdu']
  },
};

function getSectionFromClass(clsNum: number): AcademicSection {
  if (clsNum >= 11) return 'SENIOR';
  if (clsNum >= 6) return 'SECONDARY';
  return 'PRIMARY';
}

function getInitialSectionFromUrl(): AcademicSection | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const sec = params.get('section')?.toLowerCase();
  if (sec === 'primary') return 'PRIMARY';
  if (sec === 'secondary') return 'SECONDARY';
  if (sec === 'senior' || sec === 'senior-secondary' || sec === 'seniorsecondary') return 'SENIOR';
  
  const cls = params.get('class');
  if (cls) {
    return getSectionFromClass(Number(cls));
  }
  return null;
}

export const ClassGrid: React.FC<ClassGridProps> = ({
  selectedClass,
  onSelectClass,
  onBack,
  onOpenAdmin,
  searchQuery = '',
  onOpenKgHub,
  initialSection = null,
  onSelectSectionChange,
  onOpenNios
}) => {
  // Section state: null = Show Section Gateway Selector; 'PRIMARY' | 'SECONDARY' | 'SENIOR' = Show classes inside that section
  const [selectedSection, setSelectedSection] = useState<AcademicSection | null>(() => {
    return initialSection || getInitialSectionFromUrl();
  });

  const [showPrePrimaryKg, setShowPrePrimaryKg] = useState<boolean>(false);

  useEffect(() => {
    if (initialSection) {
      setSelectedSection(initialSection);
    }
  }, [initialSection]);

  const handleSelectSection = (sec: AcademicSection | null) => {
    setSelectedSection(sec);
    if (onSelectSectionChange) {
      onSelectSectionChange(sec);
    }

    // Sync section in URL search params smoothly
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (sec) {
        url.searchParams.set('section', sec === 'SENIOR' ? 'senior-secondary' : sec.toLowerCase());
      } else {
        url.searchParams.delete('section');
      }
      window.history.replaceState({}, '', url.toString());
    }
  };

  // If a search query is typed in navbar, filter matching classes
  const matchingClasses = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];

    return [...ALL_CLASSES_SUMMARY].filter((item) => {
      const meta = NEXTSEM_CLASS_PALETTE[item.classNum];
      const matchNum = String(item.classNum).includes(q);
      const matchRoman = meta?.roman.toLowerCase().includes(q);
      const matchTag = meta?.stageTag.toLowerCase().includes(q);
      const matchName = item.name.toLowerCase().includes(q);
      const matchStream = meta?.streams?.some(st => st.toLowerCase().includes(q));
      return matchNum || matchRoman || matchTag || matchName || !!matchStream;
    });
  }, [searchQuery]);

  // Classes filtered by the active section
  const sectionClasses = useMemo(() => {
    if (!selectedSection) return [];
    const config = SECTIONS_CONFIG[selectedSection];
    return ALL_CLASSES_SUMMARY
      .filter(item => config.classNumbers.includes(item.classNum))
      .sort((a, b) => b.classNum - a.classNum); // Sorted descending for natural senior-to-junior hierarchy
  }, [selectedSection]);

  const handleOpenKg = (level: 'nursery' | 'lkg' | 'ukg' | 'all' = 'all') => {
    if (onOpenKgHub) {
      onOpenKgHub(level);
    } else {
      window.open('/kids-kg.html', '_blank');
    }
  };

  return (
    <div style={{
      maxWidth: '920px',
      margin: '0 auto',
      padding: '0.5rem 0.75rem 2.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>

      {/* ── SEARCH OVERRIDE: When a user types in navbar search, show immediate results across sections ── */}
      {searchQuery.trim() !== '' ? (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-card)',
            padding: '10px 16px',
            borderRadius: '14px',
            border: '1px solid var(--border-color)'
          }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Search Results for: &ldquo;<span style={{ color: '#4f46e5' }}>{searchQuery}</span>&rdquo; ({matchingClasses.length} found)
            </span>
            <button
              onClick={() => handleSelectSection(null)}
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Clear Search
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '12px'
          }}>
            {matchingClasses.map((item) => {
              const meta = NEXTSEM_CLASS_PALETTE[item.classNum];
              return (
                <div
                  key={item.classNum}
                  onClick={() => onSelectClass(item.classNum)}
                  className="nextsem-dashboard-card"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: '18px',
                    padding: '16px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-card)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: meta?.gradient || '#4f46e5',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    marginBottom: '8px'
                  }}>
                    {meta?.roman || item.classNum}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 900, margin: '0 0 4px', color: 'var(--text-primary)' }}>
                    Class {meta?.roman || item.classNum}
                  </h3>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                    {meta?.stageTag || 'NCERT Textbook'}
                  </div>
                  <div style={{
                    marginTop: 'auto',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: '#4f46e5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>Open Class {item.classNum}</span>
                    <ChevronRight size={13} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : selectedSection === null ? (
        
        /* ═══════════════════════════════════════════════════════════════════════
           🎯 STATE 1: SECTION SELECTOR (Primary, Secondary, Senior Secondary)
           ═══════════════════════════════════════════════════════════════════════ */
        <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {onBack && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <button
                type="button"
                onClick={onBack}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                <ArrowLeft size={13} />
                <span>Back</span>
              </button>
            </div>
          )}

          {/* Section Gateway Heading */}
          <div style={{
            textAlign: 'center',
            padding: '10px 10px 4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '9999px',
              background: 'rgba(79, 70, 229, 0.12)',
              border: '1px solid rgba(79, 70, 229, 0.3)',
              color: 'var(--accent-primary, #4f46e5)',
              fontSize: '0.74rem',
              fontWeight: 900,
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              <Sparkles size={13} />
              <span>Step 1 • Select Your Academic Section</span>
            </div>

            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              Choose Your Section to Begin
            </h1>

            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: 0,
              lineHeight: 1.45
            }}>
              Select your academic section below to browse official rationalized NCERT textbooks, bilingual line-by-line solutions, formula vaults and notes.
            </p>
          </div>

          {/* 3 Primary Section Gateway Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginTop: '4px'
          }}>
            {(['PRIMARY', 'SECONDARY', 'SENIOR'] as AcademicSection[]).map((secKey) => {
              const sec = SECTIONS_CONFIG[secKey];
              return (
                <div
                  key={sec.id}
                  onClick={() => handleSelectSection(sec.id)}
                  className="nextsem-dashboard-card"
                  style={{
                    background: 'var(--bg-card)',
                    border: `1.5px solid ${sec.borderColor}`,
                    borderRadius: '24px',
                    padding: '20px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 14px 30px ${sec.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  }}
                >
                  {/* Subtle Top Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    background: sec.gradient,
                    opacity: 0.15,
                    filter: 'blur(25px)',
                    pointerEvents: 'none'
                  }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    
                    {/* Top Row: Icon Emblem & Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: sec.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                        boxShadow: `0 6px 16px ${sec.glowColor}`,
                        border: '1.5px solid rgba(255, 255, 255, 0.3)'
                      }}>
                        {sec.icon}
                      </div>

                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 900,
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        background: sec.badgeBg,
                        color: sec.badgeColor,
                        border: `1px solid ${sec.borderColor}`,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}>
                        {sec.rangeLabel}
                      </span>
                    </div>

                    {/* Section Titles */}
                    <div>
                      <h2 style={{
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: 'var(--text-primary)',
                        margin: '0 0 3px',
                        letterSpacing: '-0.01em'
                      }}>
                        {sec.title}
                      </h2>
                      <div style={{
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        color: sec.badgeColor
                      }}>
                        {sec.subtitle}
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                      margin: 0
                    }}>
                      {sec.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '6px 0 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '10px'
                    }}>
                      {sec.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)'
                        }}>
                          <CheckCircle2 size={13} style={{ color: sec.badgeColor, flexShrink: 0 }} />
                          <span style={{ lineHeight: 1.3 }}>{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* 1-Tap Action Button */}
                  <div style={{
                    marginTop: '16px',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.84rem',
                    fontWeight: 900,
                    color: sec.badgeColor
                  }}>
                    <span>Explore {sec.title.split(' ')[0]} Section</span>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '8px',
                      background: sec.badgeBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ChevronRight size={15} />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </section>

      ) : (

        /* ═══════════════════════════════════════════════════════════════════════
           📚 STATE 2: ACTIVE SECTION VIEW (Classes Inside the Selected Section)
           ═══════════════════════════════════════════════════════════════════════ */
        <section style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {/* Active Section Top Interactive Navigation Bar */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1.5px solid var(--border-color)',
            borderRadius: '18px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {/* Left: Back to All Sections Button */}
            <button
              onClick={() => handleSelectSection(null)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--bg-hover)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                padding: '6px 12px',
                borderRadius: '10px',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              title="Return to 3-Section Selector"
            >
              <ArrowLeft size={14} />
              <span>All Sections</span>
            </button>

            {/* Middle: 3-Segment Section Switcher Pills */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--bg-secondary)',
              padding: '3px',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              gap: '3px'
            }}>
              {(['PRIMARY', 'SECONDARY', 'SENIOR'] as AcademicSection[]).map((tabKey) => {
                const isTabActive = selectedSection === tabKey;
                const sec = SECTIONS_CONFIG[tabKey];
                return (
                  <button
                    key={tabKey}
                    onClick={() => handleSelectSection(tabKey)}
                    style={{
                      background: isTabActive ? sec.gradient : 'transparent',
                      color: isTabActive ? '#ffffff' : 'var(--text-muted)',
                      border: 'none',
                      padding: '5px 11px',
                      borderRadius: '8px',
                      fontSize: '0.73rem',
                      fontWeight: isTabActive ? 900 : 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'all 0.15s ease',
                      boxShadow: isTabActive ? `0 2px 8px ${sec.glowColor}` : 'none'
                    }}
                  >
                    <span>{sec.icon}</span>
                    <span>{sec.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Section Active Pill */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.74rem',
              fontWeight: 800,
              color: SECTIONS_CONFIG[selectedSection].badgeColor
            }}>
              <span>{SECTIONS_CONFIG[selectedSection].rangeLabel}</span>
            </div>
          </div>

          {/* Active Section Banner Header */}
          <div style={{
            background: 'var(--bg-card)',
            border: `1.5px solid ${SECTIONS_CONFIG[selectedSection].borderColor}`,
            borderRadius: '20px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '13px',
                background: SECTIONS_CONFIG[selectedSection].gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                boxShadow: `0 4px 12px ${SECTIONS_CONFIG[selectedSection].glowColor}`,
                color: '#fff',
                flexShrink: 0
              }}>
                {SECTIONS_CONFIG[selectedSection].icon}
              </div>

              <div>
                <h2 style={{
                  fontSize: '1.18rem',
                  fontWeight: 900,
                  margin: '0 0 2px',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  {SECTIONS_CONFIG[selectedSection].title}
                </h2>
                <p style={{
                  fontSize: '0.76rem',
                  color: 'var(--text-secondary)',
                  margin: 0,
                  lineHeight: 1.35
                }}>
                  {SECTIONS_CONFIG[selectedSection].description}
                </p>
              </div>
            </div>

            {/* Section Specific Action (e.g. Pre-Primary toggle in Primary, NIOS in Senior) */}
            {selectedSection === 'PRIMARY' && (
              <button
                onClick={() => setShowPrePrimaryKg(!showPrePrimaryKg)}
                style={{
                  background: showPrePrimaryKg ? 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)' : 'rgba(245, 158, 11, 0.12)',
                  color: showPrePrimaryKg ? '#ffffff' : '#d97706',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>👶 Balvatika / KG ({showPrePrimaryKg ? 'Hide' : 'Show'})</span>
              </button>
            )}

            {selectedSection === 'SENIOR' && onOpenNios && (
              <button
                onClick={onOpenNios}
                style={{
                  background: 'rgba(245, 158, 11, 0.12)',
                  color: '#d97706',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span>📑 NIOS Senior Secondary (12th)</span>
                <ChevronRight size={13} />
              </button>
            )}
          </div>

          {/* 🧸 Dedicated Pre-Primary / Balvatika section if toggled in Primary */}
          {selectedSection === 'PRIMARY' && showPrePrimaryKg && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(244, 63, 94, 0.06) 50%, rgba(99, 102, 241, 0.08) 100%)',
              border: '1.5px solid rgba(245, 158, 11, 0.4)',
              borderRadius: '20px',
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  👶 Early Childhood Balvatika Hub (Pre-Primary)
                </span>
                <button
                  onClick={() => handleOpenKg('all')}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#f59e0b',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Open Full Canvas ↗
                </button>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '10px'
              }}>
                <div
                  onClick={() => handleOpenKg('nursery')}
                  className="nextsem-dashboard-card"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid rgba(251, 113, 133, 0.35)',
                    borderRadius: '14px',
                    padding: '10px 12px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '0.66rem', fontWeight: 900, color: '#e11d48' }}>NURSERY • उम्र 3–4</div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 900, color: 'var(--text-primary)' }}>Balvatika 1</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Finger tracing strokes &amp; motor skills</div>
                </div>

                <div
                  onClick={() => handleOpenKg('lkg')}
                  className="nextsem-dashboard-card"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    borderRadius: '14px',
                    padding: '10px 12px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '0.66rem', fontWeight: 900, color: '#d97706' }}>LKG • उम्र 4–5</div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 900, color: 'var(--text-primary)' }}>Balvatika 2</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Alphabet phonics &amp; number counting 1–10</div>
                </div>

                <div
                  onClick={() => handleOpenKg('ukg')}
                  className="nextsem-dashboard-card"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    borderRadius: '14px',
                    padding: '10px 12px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '0.66rem', fontWeight: 900, color: '#059669' }}>UKG • उम्र 5–6</div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 900, color: 'var(--text-primary)' }}>Balvatika 3</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>3-Letter sight words &amp; school prep</div>
                </div>
              </div>
            </div>
          )}

          {/* 📱 Modern 3-Column Luxury Class Cards Grid for the Active Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px'
          }}>
            {sectionClasses.map((item) => {
              const isSelected = selectedClass === item.classNum;
              const meta = NEXTSEM_CLASS_PALETTE[item.classNum];

              return (
                <div
                  key={item.classNum}
                  onClick={() => onSelectClass(item.classNum)}
                  className="nextsem-dashboard-card"
                  style={{
                    background: isSelected ? 'var(--bg-hover)' : 'var(--bg-card)',
                    border: isSelected ? '2px solid #4f46e5' : '1.5px solid var(--border-color)',
                    borderRadius: '20px',
                    padding: '16px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    userSelect: 'none',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isSelected 
                      ? '0 6px 20px rgba(79, 70, 229, 0.25)' 
                      : 'var(--shadow-card)'
                  }}
                >
                  {/* Top Tag Row */}
                  <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{
                      fontSize: '0.62rem',
                      fontWeight: 900,
                      color: '#4f46e5',
                      background: 'rgba(79, 70, 229, 0.12)',
                      border: '1px solid rgba(79, 70, 229, 0.3)',
                      padding: '2px 7px',
                      borderRadius: '9999px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase'
                    }}>
                      {meta?.stageTag || `Class ${item.classNum}`}
                    </span>

                    {meta?.popularLabel && (
                      <span style={{
                        fontSize: '0.6rem',
                        fontWeight: 800,
                        color: '#f59e0b',
                        letterSpacing: '0.02em'
                      }}>
                        {meta.popularLabel}
                      </span>
                    )}
                  </div>

                  {/* 3D Squircle Jewel Badge */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: meta?.gradient || '#4f46e5',
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 6px 16px ${meta?.glowColor || 'rgba(79, 70, 229, 0.3)'}`,
                      margin: '4px 0 10px',
                      border: '1.5px solid rgba(255, 255, 255, 0.3)',
                      position: 'relative'
                    }}
                  >
                    <span style={{ fontSize: '1.35rem', fontWeight: 900, lineHeight: 1, color: '#ffffff' }}>
                      {meta?.roman || item.classNum}
                    </span>
                    <span style={{ fontSize: '0.64rem', fontWeight: 800, color: '#ffffff', opacity: 0.95, marginTop: '2px' }}>
                      Class {item.classNum}
                    </span>
                  </div>

                  {/* Class Title Header */}
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                    margin: '0 0 4px',
                    lineHeight: 1.2
                  }}>
                    Class {meta?.roman || item.classNum}
                  </h3>

                  {/* Subject Count */}
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    fontWeight: 700,
                    marginBottom: '8px'
                  }}>
                    📚 {meta?.subjectCount || 5} Textbooks &amp; Solutions
                  </div>

                  {/* Streams or Subjects Pills */}
                  {meta?.streams && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      marginBottom: '10px'
                    }}>
                      <span style={{
                        fontSize: '0.64rem',
                        fontWeight: 600,
                        background: 'var(--bg-hover)',
                        color: 'var(--text-secondary)',
                        padding: '2px 6px',
                        borderRadius: '6px',
                        border: '1px solid var(--border-color)'
                      }}>
                        {meta.streams.slice(0, 3).join(' • ')}
                      </span>
                    </div>
                  )}

                  {/* Open Class Action Button */}
                  <div style={{
                    marginTop: 'auto',
                    width: '100%',
                    paddingTop: '8px',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: '#4f46e5'
                  }}>
                    <span>Open Class {meta?.roman || item.classNum} Subjects</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>

        </section>
      )}

      {/* 🛡️ Bottom Administrator Portal Link */}
      {onOpenAdmin && (
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '14px',
          padding: '12px 16px',
          textAlign: 'center',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          marginTop: '6px'
        }}>
          <button
            type="button"
            onClick={onOpenAdmin}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <ShieldCheck size={15} style={{ color: '#4f46e5' }} />
            <span>Administrator Portal • Upload &amp; Sync Class PDFs →</span>
          </button>
        </div>
      )}

    </div>
  );
};
