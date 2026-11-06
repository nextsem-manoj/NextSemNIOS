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
  Layers,
  FileText
} from 'lucide-react';
import { SHARED_NCERT_DRIVE_FOLDER_URL } from '../../utils/googleDriveHelper';

interface Class9PageViewProps {
  subjects: Subject[];
  onSelectSubject: (subject: Subject, slug?: string) => void;
  onBackToClasses: () => void;
  onOpenMathsExamSuite?: () => void;
  onOpenEuclidLab?: () => void;
  onOpenHindiGrammarStudio?: () => void;
}

type ViewMode = 'cards' | 'covers' | 'compact';

export const Class9PageView: React.FC<Class9PageViewProps> = ({
  subjects,
  onSelectSubject,
  onBackToClasses,
  onOpenMathsExamSuite: _onOpenMathsExamSuite,
  onOpenEuclidLab: _onOpenEuclidLab,
  onOpenHindiGrammarStudio: _onOpenHindiGrammarStudio
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('cards');

  // Filter subjects based on search query
  const filteredSubjects = useMemo(() => {
    if (!searchQuery.trim()) return subjects;
    const q = searchQuery.toLowerCase();
    return subjects.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q)
    );
  }, [subjects, searchQuery]);

  // Map subject ID to clean URL slug
  const getSubjectSlug = (subjId: string): string => {
    if (subjId === 'c9-maths') return 'maths';
    if (subjId === 'c9-science') return 'science';
    if (subjId === 'c9-english') return 'english';
    if (subjId === 'c9-hindi') return 'hindi';
    if (subjId === 'c9-social-science') return 'social-science';
    if (subjId === 'c9-hindi-grammar') return 'hindi-grammar';
    return subjId.replace(/^c9-/, '');
  };

  // Dedicated authentic book cover mapping
  const getSubjectCover = (subjId: string): string => {
    if (subjId === 'c9-maths') return '/book-covers/class9-maths-ganita-manjari.png';
    if (subjId === 'c9-science') return '/book-covers/class9-science-exploration.png';
    if (subjId === 'c9-english') return '/book-covers/class9-english-kaveri.png';
    if (subjId === 'c9-hindi') return '/book-covers/class9-hindi-ganga.png';
    if (subjId === 'c9-social-science') return '/book-covers/class9-social-science-understanding-society.png';
    if (subjId === 'c9-hindi-grammar') return '/book-covers/class9-hindi-ganga.png';
    return '/book-covers/class9-maths-ganita-manjari.png';
  };

  // Official NCERT book code per subject
  const getOfficialBookCode = (subjId: string): string => {
    if (subjId === 'c9-maths') return 'iemh1';
    if (subjId === 'c9-science') return 'iesc1';
    if (subjId === 'c9-english') return 'iebe1';
    if (subjId === 'c9-hindi') return 'ihga1';
    if (subjId === 'c9-social-science') return 'iess1–4';
    if (subjId === 'c9-hindi-grammar') return 'ihgv1';
    return 'ncert9';
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
            e.currentTarget.style.color = '#4f46e5';
            e.currentTarget.style.borderColor = '#4f46e5';
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
            color: '#6366f1',
            background: 'rgba(99, 102, 241, 0.12)',
            padding: '4px 10px',
            borderRadius: '20px',
            border: '1px solid rgba(99, 102, 241, 0.25)'
          }}>
            URL: /class9
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
            Class 9 Drive
          </a>
        </div>
      </div>

      {/* Hero Showcase Card */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
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
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.74rem', fontWeight: 800, color: '#6366f1', marginBottom: '10px' }}>
              <GraduationCap size={15} />
              SECONDARY STAGE • CLASS IX (कक्षा 9)
            </div>
            <h1 style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 8px 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              NCERT Class 9th Textbooks, Solutions &amp; Question Papers
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0 0 16px 0', lineHeight: 1.6, maxWidth: '780px' }}>
              Complete rationalized curriculum under NEP 2020. Featuring authentic NCERT textbooks (Ganita Manjari, Exploration, Ganga, Kaveri), verified step-by-step solutions, offline PDFs, and interactive question suites.
            </p>

            {/* Quick Metrics Bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card)', padding: '6px 12px', borderRadius: '10px', border: '1px solid var(--border-color)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <CheckCircle2 size={15} className="text-emerald-500" />
                6 Core Subjects
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card)', padding: '6px 12px', borderRadius: '10px', border: '1px solid var(--border-color)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <Layers size={15} className="text-indigo-500" />
                Authentic NCERT Covers
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card)', padding: '6px 12px', borderRadius: '10px', border: '1px solid var(--border-color)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <Award size={15} className="text-amber-500" />
                40-Marks Exam Papers
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card)', padding: '6px 12px', borderRadius: '10px', border: '1px solid var(--border-color)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                <Sparkles size={15} className="text-rose-500" />
                Interactive Labs
              </div>
            </div>
          </div>

          {/* Quick Direct Actions Box */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '16px',
            minWidth: '260px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '10px' }}>
              ⚡ Featured Class 9 Studios
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                type="button"
                onClick={() => {
                  const mathsSubj = subjects.find(s => s.id === 'c9-maths');
                  if (mathsSubj) onSelectSubject(mathsSubj, 'maths');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.35)'
                }}
              >
                <span>📐 Class 9 Maths (/class9/maths)</span>
                <ChevronRight size={16} />
              </button>

              <a
                href="/class9-maths-ch4-ch5-question-paper-40-marks.html"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <span>📝 Ch 4–5 Exam Paper (40 Marks)</span>
                <ExternalLink size={14} className="text-indigo-400" />
              </a>

              <a
                href="/hindi-class9-grammar-complete-mastery.html"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <span>✍️ Hindi Grammar Mastery Studio</span>
                <ExternalLink size={14} className="text-rose-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Layout Controls Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '20px'
      }}>
        {/* Search Input */}
        <div style={{ position: 'relative', flex: '1 1 320px', maxWidth: '520px' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search Class 9 subjects, books, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px 10px 42px',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              fontSize: '0.86rem',
              fontWeight: 600,
              outline: 'none',
              boxShadow: 'var(--shadow-sm)'
            }}
          />
        </div>

        {/* View Mode Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'var(--bg-card)',
          padding: '4px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <button
            type="button"
            onClick={() => setViewMode('cards')}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: 'none',
              background: viewMode === 'cards' ? 'var(--accent-primary, #4f46e5)' : 'transparent',
              color: viewMode === 'cards' ? '#ffffff' : 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Detailed Cards
          </button>
          <button
            type="button"
            onClick={() => setViewMode('covers')}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: 'none',
              background: viewMode === 'covers' ? 'var(--accent-primary, #4f46e5)' : 'transparent',
              color: viewMode === 'covers' ? '#ffffff' : 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Book Covers
          </button>
          <button
            type="button"
            onClick={() => setViewMode('compact')}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: 'none',
              background: viewMode === 'compact' ? 'var(--accent-primary, #4f46e5)' : 'transparent',
              color: viewMode === 'compact' ? '#ffffff' : 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Compact List
          </button>
        </div>
      </div>

      {/* Grid of Class 9 Subjects with Authentic Covers */}
      {viewMode === 'cards' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '18px'
        }}>
          {filteredSubjects.map((subj) => {
            const coverUrl = getSubjectCover(subj.id);
            const slug = getSubjectSlug(subj.id);
            const isMaths = subj.id === 'c9-maths';

            return (
              <div
                key={subj.id}
                onClick={() => onSelectSubject(subj, slug)}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '20px',
                  border: isMaths ? '2px solid rgba(99, 102, 241, 0.45)' : '1px solid var(--border-color)',
                  boxShadow: isMaths ? '0 10px 25px -5px rgba(79, 70, 229, 0.18)' : 'var(--shadow-card)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#4f46e5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = isMaths ? 'rgba(99, 102, 241, 0.45)' : 'var(--border-color)';
                }}
              >
                {/* Top Banner with Authentic Thumbnail & Metadata */}
                <div style={{
                  padding: '16px 18px',
                  display: 'flex',
                  gap: '16px',
                  background: 'linear-gradient(180deg, var(--bg-hover) 0%, var(--bg-card) 100%)',
                  borderBottom: '1px solid var(--border-color)'
                }}>
                  {/* Book Cover Thumbnail */}
                  <div style={{
                    width: '78px',
                    height: '108px',
                    flexShrink: 0,
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 18px rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: '#18181b',
                    position: 'relative'
                  }}>
                    <img
                      src={coverUrl}
                      alt={subj.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        // Fallback in case of missing cover image
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)',
                      padding: '4px 2px',
                      textAlign: 'center',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      letterSpacing: '0.04em'
                    }}>
                      CLASS IX
                    </div>
                  </div>

                  {/* Subject Title & Details */}
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'rgba(99, 102, 241, 0.12)',
                        color: '#6366f1',
                        border: '1px solid rgba(99, 102, 241, 0.2)'
                      }}>
                        {getOfficialBookCode(subj.id)}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {subj.totalChapters} Chapters
                      </span>
                    </div>

                    <h2 style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      margin: '0 0 4px 0',
                      lineHeight: 1.3
                    }}>
                      {subj.name}
                    </h2>

                    <div style={{
                      fontSize: '0.72rem',
                      color: '#4f46e5',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span>/class9/{slug}</span>
                      <ChevronRight size={13} />
                    </div>
                  </div>
                </div>

                {/* Description Body */}
                <div style={{ padding: '14px 18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    margin: '0 0 14px 0',
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {subj.description}
                  </p>

                  {/* Action Button Strip */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--border-color)'
                  }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                      NCERT Rationalized
                    </span>

                    <button
                      type="button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: isMaths ? 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)' : 'var(--bg-hover)',
                        color: isMaths ? '#ffffff' : 'var(--text-primary)',
                        border: isMaths ? 'none' : '1px solid var(--border-color)',
                        borderRadius: '10px',
                        padding: '6px 14px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span>Open {slug.charAt(0).toUpperCase() + slug.slice(1)}</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* View Mode: Book Covers Gallery */}
      {viewMode === 'covers' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {filteredSubjects.map((subj) => {
            const coverUrl = getSubjectCover(subj.id);
            const slug = getSubjectSlug(subj.id);

            return (
              <div
                key={subj.id}
                onClick={() => onSelectSubject(subj, slug)}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '18px',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textAlign: 'center',
                  padding: '14px',
                  transition: 'all 0.2s ease',
                  boxShadow: 'var(--shadow-sm)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#4f46e5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div style={{
                  width: '100%',
                  aspectRatio: '0.72',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '12px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: '#18181b'
                }}>
                  <img
                    src={coverUrl}
                    alt={subj.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--text-primary)' }}>
                  {subj.name}
                </h3>
                <div style={{ fontSize: '0.74rem', color: '#4f46e5', fontWeight: 700 }}>
                  /class9/{slug}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* View Mode: Compact List */}
      {viewMode === 'compact' && (
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '18px',
          border: '1px solid var(--border-color)',
          overflow: 'hidden'
        }}>
          {filteredSubjects.map((subj, index) => {
            const coverUrl = getSubjectCover(subj.id);
            const slug = getSubjectSlug(subj.id);

            return (
              <div
                key={subj.id}
                onClick={() => onSelectSubject(subj, slug)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderBottom: index < filteredSubjects.length - 1 ? '1px solid var(--border-color)' : 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src={coverUrl}
                    alt=""
                    style={{ width: '42px', height: '58px', objectFit: 'cover', borderRadius: '6px', boxShadow: 'var(--shadow-sm)' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 2px 0' }}>
                      {subj.name}
                    </h3>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Code: {getOfficialBookCode(subj.id)} • {subj.totalChapters} Chapters
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#4f46e5', fontWeight: 700 }}>
                    /class9/{slug}
                  </span>
                  <ChevronRight size={18} style={{ color: 'var(--text-muted)' }} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Offline PDFs & NCERT NIC Portal Access */}
      <div style={{
        marginTop: '36px',
        padding: '20px',
        background: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <FileText size={18} className="text-indigo-500" />
              <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                Direct NCERT Textbook Cloud &amp; Local PDF Repositories
              </h3>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
              All Class 9 chapters are available offline in high resolution with NCERT NIC official CDN backups.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <a
              href="https://ncert.nic.in/textbook.php?iemh1=0-12"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                fontSize: '0.78rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <ExternalLink size={14} /> Official NCERT Portal (iemh1)
            </a>

            <a
              href={SHARED_NCERT_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                fontSize: '0.78rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)'
              }}
            >
              <FolderOpen size={14} /> Open Class 9 Google Drive
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
