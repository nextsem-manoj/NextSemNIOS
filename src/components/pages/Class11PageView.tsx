import React, { useState, useMemo } from 'react';
import type { Subject } from '../../data/ncertData';
import { 
  Sparkles, 
  Search, 
  ArrowLeft, 
  ChevronRight, 
  ExternalLink, 
  FolderOpen, 
  GraduationCap, 
  CheckCircle2, 
  Award,
  Layers
} from 'lucide-react';
import { SHARED_NCERT_DRIVE_FOLDER_URL } from '../../utils/googleDriveHelper';

interface Class11PageViewProps {
  subjects: Subject[];
  onSelectSubject: (subject: Subject, slug?: string) => void;
  onBackToClasses: () => void;
  onOpenTsGrewalStudio?: () => void;
  onOpenEconomicsTest?: () => void;
}

type ViewMode = 'cards' | 'covers' | 'compact';
type StreamFilter = 'all' | 'commerce' | 'science' | 'arts' | 'vocational';

export const Class11PageView: React.FC<Class11PageViewProps> = ({
  subjects,
  onSelectSubject,
  onBackToClasses,
  onOpenTsGrewalStudio: _onOpenTsGrewalStudio,
  onOpenEconomicsTest: _onOpenEconomicsTest
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [activeStream, setActiveStream] = useState<StreamFilter>('all');

  // Stream classification helper
  const getSubjectStream = (subjId: string): 'commerce' | 'science' | 'arts' | 'vocational' => {
    if (subjId.includes('account') || subjId.includes('business') || subjId.includes('commerce')) return 'commerce';
    if (subjId.includes('physics') || subjId.includes('chem') || subjId.includes('bio')) return 'science';
    if (subjId.includes('maths') || subjId.includes('math')) return 'science'; // also commerce
    if (subjId.includes('history') || subjId.includes('pol') || subjId.includes('geo') || subjId.includes('sociology')) return 'arts';
    if (subjId.includes('cs') || subjId.includes('it') || subjId.includes('electronic') || subjId.includes('vocational')) return 'vocational';
    if (subjId.includes('economic') || subjId.includes('stats')) return 'commerce';
    return 'arts';
  };

  // Filter subjects based on search query and stream filter
  const filteredSubjects = useMemo(() => {
    return subjects.filter((s) => {
      const stream = getSubjectStream(s.id);
      const matchesStream = 
        activeStream === 'all' || 
        stream === activeStream ||
        (activeStream === 'commerce' && (s.id.includes('maths') || s.id.includes('economic'))) ||
        (activeStream === 'arts' && s.id.includes('economic'));

      if (!matchesStream) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q)
      );
    });
  }, [subjects, searchQuery, activeStream]);

  // Dedicated authentic book cover mapping for Class 11
  const getSubjectCover = (subjId: string): string => {
    if (subjId.includes('accountancy') || subjId.includes('acc')) return '/book-covers/class11-accountancy.jpg';
    if (subjId.includes('economics') || subjId.includes('stats') || subjId.includes('kest1') || subjId.includes('keec1')) return '/book-covers/class11-economics-stats.jpg';
    if (subjId.includes('business')) return '/book-covers/class11-business-studies.jpg';
    if (subjId.includes('maths') || subjId.includes('math')) return '/book-covers/class11-maths.jpg';
    if (subjId.includes('physics') || subjId.includes('keph')) return '/book-covers/class11-physics.jpg';
    if (subjId.includes('chemistry') || subjId.includes('kech')) return '/book-covers/class11-chemistry.jpg';
    if (subjId.includes('biology') || subjId.includes('kebo')) return '/book-covers/class11-biology.jpg';
    if (subjId.includes('history') || subjId.includes('kehs')) return '/book-covers/class11-history-themes-in-world-history.png';
    if (subjId.includes('pol') || subjId.includes('keps')) return '/book-covers/class11-political-science.jpg';
    if (subjId.includes('geo') || subjId.includes('kegy')) return '/book-covers/class11-geography.jpg';
    if (subjId.includes('english') || subjId.includes('kehb')) return '/book-covers/class11-english-hornbill.jpg';
    if (subjId.includes('cs') || subjId.includes('it') || subjId.includes('kecs')) return '/book-covers/class11-computer-science.jpg';
    return '/book-covers/class11-accountancy.jpg';
  };

  // Official NCERT book code per subject
  const getOfficialBookCode = (subjId: string): string => {
    if (subjId.includes('accountancy')) return 'keac1, keac2';
    if (subjId.includes('economics')) return 'kest1, keec1';
    if (subjId.includes('business')) return 'kebs1';
    if (subjId.includes('maths')) return 'kemh1';
    if (subjId.includes('physics')) return 'keph1, keph2';
    if (subjId.includes('chemistry')) return 'kech1, kech2';
    if (subjId.includes('biology')) return 'kebo1';
    if (subjId.includes('history')) return 'kehs1';
    if (subjId.includes('pol')) return 'keps1, keps2';
    if (subjId.includes('geo')) return 'kegy1, kegy2';
    if (subjId.includes('english')) return 'kehb1, kesp1';
    if (subjId.includes('cs') || subjId.includes('it')) return 'kecs1 / 802';
    return 'ncert11';
  };

  const getSubjectSlug = (subjId: string): string => {
    return subjId.replace(/^c11-/, '');
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '16px 14px 48px' }}>
      
      {/* Top Breadcrumb & Back Strip */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
        <button
          type="button"
          onClick={onBackToClasses}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-card)',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            padding: '7px 14px',
            fontSize: '0.82rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#3b82f6';
            e.currentTarget.style.borderColor = '#3b82f6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--border-color)';
          }}
        >
          <ArrowLeft size={16} /> Back to All Classes (1–12)
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#3b82f6',
            background: 'rgba(59, 130, 246, 0.12)',
            padding: '4px 10px',
            borderRadius: '20px',
            border: '1px solid rgba(59, 130, 246, 0.25)'
          }}>
            URL: /class11
          </span>
          <a
            href={SHARED_NCERT_DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)'
            }}
          >
            <FolderOpen size={14} className="text-amber-500" />
            Class 11 Drive
          </a>
        </div>
      </div>

      {/* Hero Showcase Card */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(4, 170, 109, 0.08) 100%)',
        border: '1px solid rgba(59, 130, 246, 0.25)',
        borderRadius: '24px',
        padding: '24px 20px',
        marginBottom: '24px',
        boxShadow: 'var(--shadow-card)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-40px',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(35px)'
        }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.74rem', fontWeight: 800, color: '#3b82f6', marginBottom: '10px' }}>
              <GraduationCap size={15} />
              SENIOR SECONDARY STAGE • CLASS XI (कक्षा 11)
            </div>
            <h1 style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 8px 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              NCERT Class 11th Textbooks, Solutions &amp; Question Papers
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0 0 16px 0', lineHeight: 1.6, maxWidth: '800px' }}>
              Complete rationalized curriculum under NEP 2026-27 by <strong>Er. Manoj Kumar</strong>. Comprehensive coverage across Commerce (Accountancy T.S. Grewal, Economics, Business Studies), Science (Physics, Chemistry, Maths, Biology), and Arts/Humanities (World History, Political Science, Geography) with official book codes, verified numerical steps, and interactive studios.
            </p>

            {/* Quick Metrics Bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card)', padding: '6px 12px', borderRadius: '10px', border: '1px solid var(--border-color)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <CheckCircle2 size={15} className="text-emerald-500" />
                All 3 Senior Secondary Streams
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card)', padding: '6px 12px', borderRadius: '10px', border: '1px solid var(--border-color)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <Layers size={15} className="text-blue-500" />
                Authentic NCERT Book Covers
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card)', padding: '6px 12px', borderRadius: '10px', border: '1px solid var(--border-color)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <Award size={15} className="text-amber-500" />
                T.S. Grewal &amp; Numerical Labs
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card)', padding: '6px 12px', borderRadius: '10px', border: '1px solid var(--border-color)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <Sparkles size={15} className="text-rose-500" />
                Interactive Solutions
              </div>
            </div>
          </div>

          {/* Quick Direct Actions Box */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '16px',
            minWidth: '270px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '10px' }}>
              ⚡ Featured Class 11 Studios
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="/ts-grewal-class11.html"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)'
                }}
              >
                <span>📊 T.S. Grewal Accountancy Studio</span>
                <ChevronRight size={16} />
              </a>

              <a
                href="/class11-economics-ch1-ch2-printable-question-paper.html"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  background: 'var(--bg-card-hover)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textAlign: 'left'
                }}
              >
                <span>📝 Economics Exam Paper Suite</span>
                <ChevronRight size={16} />
              </a>

              <a
                href="/class11-maths-permutations-combinations-ch6-difficult-questions.html"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  background: 'var(--bg-card-hover)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textAlign: 'left'
                }}
              >
                <span>📐 Permutations &amp; Combinations</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stream Tabs & Search Strip */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '18px',
        padding: '14px 18px',
        marginBottom: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Stream Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {(['all', 'commerce', 'science', 'arts', 'vocational'] as StreamFilter[]).map((st) => {
            const labels: Record<StreamFilter, string> = {
              all: `All Subjects (${subjects.length})`,
              commerce: '💼 Commerce',
              science: '🔬 Science (PCM/PCB)',
              arts: '🏛️ Arts / Humanities',
              vocational: '💻 Skill & IT'
            };
            const isActive = activeStream === st;
            return (
              <button
                key={st}
                type="button"
                onClick={() => setActiveStream(st)}
                style={{
                  background: isActive ? '#2563eb' : 'var(--bg-card-hover)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? '1px solid #2563eb' : '1px solid var(--border-color)',
                  padding: '7px 14px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 3px 10px rgba(37, 99, 235, 0.3)' : 'none'
                }}
              >
                {labels[st]}
              </button>
            );
          })}
        </div>

        {/* Search & View Mode Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 280px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            padding: '7px 12px',
            minWidth: '220px',
            flex: '1 1 220px',
            maxWidth: '340px'
          }}>
            <Search size={15} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search subject, code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontSize: '0.82rem',
                width: '100%',
                fontWeight: 600
              }}
            />
          </div>

          <div style={{ display: 'flex', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '3px' }}>
            {(['cards', 'covers', 'compact'] as ViewMode[]).map((vm) => (
              <button
                key={vm}
                type="button"
                onClick={() => setViewMode(vm)}
                style={{
                  background: viewMode === vm ? '#2563eb' : 'transparent',
                  color: viewMode === vm ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '5px 10px',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {vm}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Subjects Grid */}
      {viewMode === 'cards' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: '18px'
        }}>
          {filteredSubjects.map((subj) => {
            const coverImg = getSubjectCover(subj.id);
            const bookCode = getOfficialBookCode(subj.id);
            const stream = getSubjectStream(subj.id);

            return (
              <div
                key={subj.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '18px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '14px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '90px',
                    height: '125px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: '#000000',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                  }}>
                    <img
                      src={coverImg}
                      alt={subj.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/book-covers/accountancy-p1.png';
                      }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      marginBottom: '6px',
                      background: stream === 'commerce' ? 'rgba(37,99,235,0.15)' : stream === 'science' ? 'rgba(4,170,109,0.15)' : 'rgba(245,158,11,0.15)',
                      color: stream === 'commerce' ? '#60a5fa' : stream === 'science' ? '#34d399' : '#fbbf24',
                      border: `1px solid ${stream === 'commerce' ? 'rgba(59,130,246,0.3)' : stream === 'science' ? 'rgba(4,170,109,0.3)' : 'rgba(245,158,11,0.3)'}`
                    }}>
                      {stream}
                    </span>

                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                      {subj.name}
                    </h3>

                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontFamily: 'monospace',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#06b6d4',
                      background: 'rgba(6, 182, 212, 0.1)',
                      padding: '2px 6px',
                      borderRadius: '6px',
                      marginBottom: '8px'
                    }}>
                      Code: {bookCode}
                    </div>

                    <p style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {subj.description}
                    </p>
                  </div>
                </div>

                <div style={{
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <button
                    type="button"
                    onClick={() => onSelectSubject(subj, getSubjectSlug(subj.id))}
                    style={{
                      flex: 1,
                      padding: '9px 12px',
                      borderRadius: '9px',
                      background: '#2563eb',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
                    }}
                  >
                    <span>Read In App »</span>
                    <ChevronRight size={15} />
                  </button>

                  <a
                    href={`https://ncert.nic.in/textbook.php?${bookCode.split(',')[0].trim()}=0-${subj.totalChapters || 10}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '9px 12px',
                      borderRadius: '9px',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    title="Open on official NCERT CDN"
                  >
                    <ExternalLink size={14} />
                    <span>NCERT</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Covers View (Visual Book Shelf) */}
      {viewMode === 'covers' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
          gap: '20px'
        }}>
          {filteredSubjects.map((subj) => {
            const coverImg = getSubjectCover(subj.id);
            return (
              <div
                key={subj.id}
                onClick={() => onSelectSubject(subj, getSubjectSlug(subj.id))}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '130px',
                  height: '180px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '10px',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.45)',
                  background: '#000000'
                }}>
                  <img
                    src={coverImg}
                    alt={subj.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/book-covers/accountancy-p1.png';
                    }}
                  />
                </div>
                <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>
                  {subj.name}
                </h4>
                <span style={{ fontSize: '0.72rem', color: '#06b6d4', fontWeight: 700 }}>
                  {getOfficialBookCode(subj.id)}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Compact View */}
      {viewMode === 'compact' && (
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          {filteredSubjects.map((subj, idx) => (
            <div
              key={subj.id}
              onClick={() => onSelectSubject(subj, getSubjectSlug(subj.id))}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderBottom: idx === filteredSubjects.length - 1 ? 'none' : '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-card-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'rgba(37, 99, 235, 0.15)',
                  color: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}>
                  {idx + 1}
                </span>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {subj.name}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    Code: {getOfficialBookCode(subj.id)} • {subj.totalChapters || 10} Units
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3b82f6' }}>Open Subject »</span>
                <ChevronRight size={16} style={{ color: '#3b82f6' }} />
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
