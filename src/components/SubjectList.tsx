import React, { useState } from 'react';
import type { Subject } from '../data/ncertData';
import { ArrowLeft, Sparkles, BookOpen, Bookmark, List, LayoutGrid, Maximize2, ChevronRight } from 'lucide-react';

interface SubjectListProps {
  subjects: Subject[];
  selectedSubject: Subject | null;
  onSelectSubject: (subject: Subject) => void;
  selectedClassNum: number;
  onToggleBookmarkSubject?: (subject: Subject) => void;
  isSubjectBookmarked?: (id: string) => boolean;
  onBack?: () => void;
}

type ViewMode = 'list' | 'tiles' | 'large';

interface SubjectBadgeMeta {
  initials: string;
  gradient: string;
  glowColor: string;
  textColor: string;
}

function getSubjectBadgeMeta(name: string): SubjectBadgeMeta {
  const cleanName = name.toLowerCase();
  
  if (cleanName.includes('math')) {
    return { initials: 'M', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', glowColor: 'rgba(139, 92, 246, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('physic')) {
    return { initials: 'P', gradient: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)', glowColor: 'rgba(249, 115, 22, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('chemist')) {
    return { initials: 'C', gradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)', glowColor: 'rgba(239, 68, 68, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('bio')) {
    return { initials: 'B', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', glowColor: 'rgba(16, 185, 129, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('account')) {
    return { initials: 'A', gradient: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)', glowColor: 'rgba(168, 85, 247, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('business')) {
    return { initials: 'BS', gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)', glowColor: 'rgba(99, 102, 241, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('econom')) {
    return { initials: 'E', gradient: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)', glowColor: 'rgba(244, 63, 94, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('politic')) {
    return { initials: 'PS', gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', glowColor: 'rgba(2, 132, 199, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('histor')) {
    return { initials: 'H', gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)', glowColor: 'rgba(217, 119, 6, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('geograph')) {
    return { initials: 'G', gradient: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)', glowColor: 'rgba(139, 92, 246, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('computer') || cleanName.includes('informatic')) {
    return { initials: 'CS', gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', glowColor: 'rgba(6, 182, 212, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('evs') || cleanName.includes('environment') || cleanName.includes('looking around') || cleanName.includes('आस-पास')) {
    return { initials: 'EVS', gradient: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)', glowColor: 'rgba(13, 148, 136, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('grammar') || cleanName.includes('व्याकरण')) {
    return { initials: 'व्या', gradient: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)', glowColor: 'rgba(225, 29, 72, 0.4)', textColor: '#ffffff' };
  }
  if (cleanName.includes('hindi') || cleanName.includes('rimjhim') || cleanName.includes('malhar') || cleanName.includes('मल्हार') || cleanName.includes('हिंदी') || cleanName.includes('रिमझिम')) {
    return { initials: 'HN', gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', glowColor: 'rgba(236, 72, 153, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('english') || cleanName.includes('marigold') || cleanName.includes('honeycomb')) {
    return { initials: 'EN', gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)', glowColor: 'rgba(245, 158, 11, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('science') || cleanName.includes('विज्ञान')) {
    return { initials: 'SC', gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', glowColor: 'rgba(16, 185, 129, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('sanskrit') || cleanName.includes('संस्कृत') || cleanName.includes('ruchira') || cleanName.includes('deepakam') || cleanName.includes('दीपकम')) {
    return { initials: 'SK', gradient: 'linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)', glowColor: 'rgba(147, 51, 234, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('art') || cleanName.includes('kriti') || cleanName.includes('कृति')) {
    return { initials: 'AR', gradient: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)', glowColor: 'rgba(244, 63, 94, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('physical') || cleanName.includes('khel') || cleanName.includes('खेल') || cleanName.includes('well being')) {
    return { initials: 'PE', gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)', glowColor: 'rgba(5, 150, 105, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('vocation') || cleanName.includes('kaushal') || cleanName.includes('कौशल')) {
    return { initials: 'VE', gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', glowColor: 'rgba(2, 132, 199, 0.35)', textColor: '#ffffff' };
  }
  if (cleanName.includes('urdu') || cleanName.includes('khayal') || cleanName.includes('ख्याल')) {
    return { initials: 'UR', gradient: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', glowColor: 'rgba(124, 58, 237, 0.35)', textColor: '#ffffff' };
  }

  const words = name.trim().split(' ');
  const init = words.length > 1 ? (words[0][0] + words[1][0]).toUpperCase() : words[0][0].toUpperCase();
  return { initials: init, gradient: 'linear-gradient(135deg, #475569 0%, #334155 100%)', glowColor: 'rgba(100, 116, 139, 0.35)', textColor: '#ffffff' };
}

export function getSubjectCoverImage(subject: Subject, classNum?: number): string | undefined {
  if (subject.coverImageUrl) return subject.coverImageUrl;
  const clean = (subject.id + ' ' + subject.name).toLowerCase();
  
  // Class 12 Covers
  if (classNum === 12 || clean.includes('c12-')) {
    if (clean.includes('math')) return '/book-covers/math-p1.png';
    if (clean.includes('physic')) return '/book-covers/physics-p1.png';
    if (clean.includes('chemist')) return '/book-covers/chemistry-p1.png';
    if (clean.includes('bio')) return '/book-covers/biology.png';
    if (clean.includes('account')) return '/book-covers/accountancy-p1.png';
    if (clean.includes('business')) return '/book-covers/class12-business-studies.jpg';
    if (clean.includes('econom')) return '/book-covers/class12-economics.jpg';
    if (clean.includes('geograph')) return '/book-covers/class12-geography.jpg';
    if (clean.includes('politic')) return '/book-covers/class12-political-science.jpg';
    if (clean.includes('english')) return '/book-covers/english-flamingo.png';
    if (clean.includes('computer') || clean.includes('informatic') || subject.id === 'c12-cs') return '/book-covers/cs-textbook.png';
    if (clean.includes('histor')) return '/book-covers/class12-history.jpg';
  }

  // Class 11 Covers
  if (classNum === 11 || clean.includes('c11-')) {
    if (clean.includes('math')) return '/book-covers/class11-maths.jpg';
    if (clean.includes('physic')) return '/book-covers/class11-physics.jpg';
    if (clean.includes('chemist')) return '/book-covers/class11-chemistry.jpg';
    if (clean.includes('bio')) return '/book-covers/class11-biology.jpg';
    if (clean.includes('account')) return '/book-covers/class11-accountancy.jpg';
    if (clean.includes('business')) return '/book-covers/class11-business-studies.jpg';
    if (clean.includes('econom')) return '/book-covers/class11-economics-stats.jpg';
    if (clean.includes('geograph')) return '/book-covers/class11-geography.jpg';
    if (clean.includes('politic')) return '/book-covers/class11-political-science.jpg';
    if (clean.includes('english') || clean.includes('hornbill')) return '/book-covers/class11-english-hornbill.jpg';
    if (clean.includes('computer') || clean.includes('informatic') || subject.id === 'c11-cs' || subject.id === 'c11-computer-science') return '/book-covers/class11-computer-science.jpg';
    if (clean.includes('histor')) return '/book-covers/class11-history.jpg';
  }

  // Class 10 Covers (NCERT Edition)
  if (classNum === 10 || clean.includes('c10-')) {
    if (clean.includes('math')) return '/book-covers/class10-maths.png';
    if (clean.includes('sci')) return '/book-covers/class10-science.png';
    if (clean.includes('social') || clean.includes('contemporary') || clean.includes('history') || clean.includes('civic') || clean.includes('pol') || clean.includes('eco')) return '/book-covers/class10-social-science.png';
    if (clean.includes('english') || clean.includes('first flight') || clean.includes('footprint')) return '/book-covers/class10-english.png';
    if (clean.includes('hindi') || clean.includes('kshitij') || clean.includes('क्षितिज') || clean.includes('kritika') || clean.includes('कृतिका')) return '/book-covers/class10-hindi.png';
  }

  // Class 9 Covers (New NCERT 2026-27 Edition)
  if (classNum === 9 || clean.includes('c9-')) {
    if (clean.includes('math') || clean.includes('ganita')) return '/book-covers/class9-maths-ganita-manjari.png';
    if (clean.includes('sci') || clean.includes('exploration') || clean.includes('विज्ञान')) return '/book-covers/class9-science-exploration.png';
    if (clean.includes('english') || clean.includes('kaveri') || clean.includes('beehive')) return '/book-covers/class9-english-kaveri.png';
    if (clean.includes('hindi') || clean.includes('ganga') || clean.includes('गंगा') || clean.includes('kshitij')) return '/book-covers/class9-hindi-ganga.png';
    if (clean.includes('social') || clean.includes('understanding society') || clean.includes('society')) return '/book-covers/class9-social-science-understanding-society.png';
  }

  // Class 8 Covers (New NCERT Edition)
  if (classNum === 8 || clean.includes('c8-')) {
    if (clean.includes('social') || clean.includes('society') || clean.includes('exploring') || clean.includes('history') || clean.includes('past') || clean.includes('resource')) return '/book-covers/class7-social-science-our-pasts.png';
    if (clean.includes('math') || clean.includes('ganita')) return '/book-covers/class7-math-ganita.png';
    if (clean.includes('sci') || clean.includes('curiosity') || clean.includes('विज्ञान')) return '/book-covers/class7-science-curiosity.png';
    if (clean.includes('english') || clean.includes('honeydew')) return '/book-covers/class7-english-honeycomb.png';
    if (clean.includes('hindi') || clean.includes('vasant') || clean.includes('bharat')) return '/book-covers/class7-hindi-malhar.png';
  }

  // Class 7 Covers (New NCERT 2026-27 NEP Edition)
  if (classNum === 7 || clean.includes('c7-')) {
    if (clean.includes('hindi') || clean.includes('malhar') || clean.includes('मल्हार')) return '/book-covers/class7-hindi-malhar.png';
    if (clean.includes('poorvi') || clean.includes('पूर्वी') || clean.includes('english')) return '/book-covers/class7-english-poorvi.png';
    if (clean.includes('math') || clean.includes('ganita') || clean.includes('गणित')) return '/book-covers/class7-math-ganita.png';
    if (clean.includes('social') || clean.includes('exploring') || clean.includes('society') || clean.includes('samaj') || clean.includes('समाज')) return '/book-covers/class7-social-science-exploring.png';
    if (clean.includes('sanskrit') || clean.includes('deepakam') || clean.includes('दीपकम') || clean.includes('ruchira')) return '/book-covers/class7-sanskrit-deepakam.png';
    if (clean.includes('curiosity') || clean.includes('jigyasa') || (clean.includes('sci') && !clean.includes('social')) || clean.includes('विज्ञान')) return '/book-covers/class7-science-curiosity.png';
    if (clean.includes('art') || clean.includes('kriti') || clean.includes('कृति')) return '/book-covers/class7-arts-kriti.png';
    if (clean.includes('physical') || clean.includes('khel') || clean.includes('खेल') || clean.includes('well being')) return '/book-covers/class7-pe-khelyatra.png';
    if (clean.includes('vocation') || clean.includes('kaushal') || clean.includes('कौशल')) return '/book-covers/class7-vocational-kaushalbodh.png';
    if (clean.includes('urdu') || clean.includes('khayal') || clean.includes('ख्याल')) return '/book-covers/class7-urdu-khayal.png';
  }

  // Class 6 Covers (New NCERT Rationalized Edition)
  if (classNum === 6 || clean.includes('c6-')) {
    if (clean.includes('math') || clean.includes('ganita')) return '/book-covers/class6-math-ganita.jpg';
    if (clean.includes('curiosity') || (clean.includes('sci') && !clean.includes('social')) || clean.includes('विज्ञान') || clean.includes('jigyasa')) return '/book-covers/class6-science-curiosity.jpg';
    if (clean.includes('social') || clean.includes('exploring') || clean.includes('society') || clean.includes('bharat') || clean.includes('भारत')) return '/book-covers/class6-social-science-exploring.jpg';
    if (clean.includes('english') || clean.includes('poorvi') || clean.includes('पूर्वी')) return '/book-covers/class6-english-poorvi.jpg';
    if (clean.includes('hindi') || clean.includes('malhar') || clean.includes('मल्हार')) return '/book-covers/class6-hindi-malhar.jpg';
  }

  // Class 5 Covers (New & Rationalized NCERT Edition)
  if (classNum === 5 || clean.includes('c5-')) {
    if (clean.includes('math') || clean.includes('mela') || clean.includes('गणित')) return 'https://ncert.nic.in/textbook/pdf/eemm1cc.jpg';
    if (clean.includes('santoor') || clean.includes('संतूर')) return 'https://ncert.nic.in/textbook/pdf/eesa1cc.jpg';
    if (clean.includes('marigold') || clean.includes('मैरीगोल्ड')) return '/book-covers/class5-english-marigold.jpg';
    if (clean.includes('english')) return '/book-covers/class5-english-marigold.jpg';
    if (clean.includes('rimjhim') || clean.includes('रिमझिम')) return '/book-covers/class5-hindi-rimjhim.jpg';
    if (clean.includes('veena') || clean.includes('वीणा')) return 'https://ncert.nic.in/textbook/pdf/ehve1cc.jpg';
    if (clean.includes('hindi')) return '/book-covers/class5-hindi-rimjhim.jpg';
    if (clean.includes('wondrous') || clean.includes('अद्भुत')) return 'https://ncert.nic.in/textbook/pdf/eeev1cc.jpg';
    if (clean.includes('evs') || clean.includes('looking around') || clean.includes('आस-पास') || clean.includes('water')) return '/book-covers/class5-evs-looking-around.png';
  }

  // Class 4 Covers (New NCERT Edition)
  if (classNum === 4 || clean.includes('c4-')) {
    if (clean.includes('math') || clean.includes('mela') || clean.includes('गणित')) return 'https://ncert.nic.in/textbook/pdf/demm1cc.jpg';
    if (clean.includes('english') || clean.includes('santoor') || clean.includes('संतूर')) return 'https://ncert.nic.in/textbook/pdf/desa1cc.jpg';
    if (clean.includes('hindi') || clean.includes('veena') || clean.includes('वीणा')) return 'https://ncert.nic.in/textbook/pdf/dhve1cc.jpg';
    if (clean.includes('evs') || clean.includes('wondrous') || clean.includes('संसार') || clean.includes('environment')) return 'https://ncert.nic.in/textbook/pdf/deev1cc.jpg';
  }

  // Class 3 Covers (New NCERT Edition)
  if (classNum === 3 || clean.includes('c3-')) {
    if (clean.includes('math') || clean.includes('mela') || clean.includes('गणित')) return 'https://ncert.nic.in/textbook/pdf/cemm1cc.jpg';
    if (clean.includes('english') || clean.includes('santoor') || clean.includes('संतूर')) return 'https://ncert.nic.in/textbook/pdf/cesa1cc.jpg';
    if (clean.includes('hindi') || clean.includes('veena') || clean.includes('वीणा')) return 'https://ncert.nic.in/textbook/pdf/chve1cc.jpg';
    if (clean.includes('evs') || clean.includes('wondrous') || clean.includes('संसार') || clean.includes('environment')) return 'https://ncert.nic.in/textbook/pdf/ceev1cc.jpg';
  }

  // Class 2 Covers (New NCERT Edition)
  if (classNum === 2 || clean.includes('c2-')) {
    if (clean.includes('math') || clean.includes('joyful') || clean.includes('गणित')) return 'https://ncert.nic.in/textbook/pdf/bejm1cc.jpg';
    if (clean.includes('english') || clean.includes('mridang') || clean.includes('मृदंग')) return 'https://ncert.nic.in/textbook/pdf/bemr1cc.jpg';
    if (clean.includes('hindi') || clean.includes('sarangi') || clean.includes('सारंगी')) return 'https://ncert.nic.in/textbook/pdf/bhsr1cc.jpg';
    if (clean.includes('urdu') || clean.includes('shahnai') || clean.includes('शहनाई')) return 'https://ncert.nic.in/textbook/pdf/bush1cc.jpg';
  }

  // Class 1 Covers (New NCERT Edition)
  if (classNum === 1 || clean.includes('c1-')) {
    if (clean.includes('english') || clean.includes('mridang') || clean.includes('मृदंग')) return 'https://ncert.nic.in/textbook/pdf/aemr1cc.jpg';
    if (clean.includes('math') || clean.includes('joyful') || clean.includes('गणित')) return 'https://ncert.nic.in/textbook/pdf/aejm1cc.jpg';
    if (clean.includes('hindi') || clean.includes('sarangi') || clean.includes('सारंगी')) return 'https://ncert.nic.in/textbook/pdf/ahsr1cc.jpg';
    if (clean.includes('urdu') || clean.includes('shahnai') || clean.includes('शहनाई')) return 'https://ncert.nic.in/textbook/pdf/aush1cc.jpg';
  }

  // Senior Classes & Standard Covers Fallback
  if (clean.includes('math')) return '/book-covers/math-p1.png';
  if (clean.includes('physic')) return '/book-covers/physics-p1.png';
  if (clean.includes('chemist')) return '/book-covers/chemistry-p1.png';
  if (clean.includes('bio')) return '/book-covers/biology.png';
  if (clean.includes('account')) return '/book-covers/accountancy-p1.png';
  if (clean.includes('business')) return '/book-covers/class12-business-studies.jpg';
  if (clean.includes('econom')) return '/book-covers/class12-economics.jpg';
  if (clean.includes('geograph')) return '/book-covers/class12-geography.jpg';
  if (clean.includes('politic')) return '/book-covers/class12-political-science.jpg';
  if (clean.includes('histor')) return '/book-covers/class12-history.jpg';
  if (clean.includes('english')) return '/book-covers/english-flamingo.png';
  if (clean.includes('computer') || clean.includes('informatic') || clean.includes('-cs') || clean.startsWith('cs ')) return '/book-covers/cs-textbook.png';
  if (clean.includes('hindi')) return '/book-covers/class7-hindi-malhar.png';

  return undefined;
}

function getRomanClass(num: number): string {
  const map: Record<number, string> = {
    12: 'XII', 11: 'XI', 10: 'X', 9: 'IX', 8: 'VIII', 7: 'VII',
    6: 'VI', 5: 'V', 4: 'IV', 3: 'III', 2: 'II', 1: 'I'
  };
  return map[num] || String(num);
}

export const SubjectList: React.FC<SubjectListProps> = ({
  subjects,
  selectedSubject,
  onSelectSubject,
  selectedClassNum,
  onToggleBookmarkSubject,
  isSubjectBookmarked,
  onBack
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    const saved = localStorage.getItem('nextsem_subject_view_mode') as ViewMode | null;
    return saved === 'list' || saved === 'tiles' || saved === 'large' ? saved : 'tiles';
  });

  const handleSetViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    localStorage.setItem('nextsem_subject_view_mode', mode);
  };

  return (
    <div style={{
      maxWidth: viewMode === 'large' ? '860px' : '720px',
      margin: '0.5rem auto 2rem',
      padding: '0 8px',
      transition: 'max-width 0.25s ease'
    }}>
      
      {/* Nextsem Card Container */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-card)',
        transition: 'var(--transition)'
      }}>

        {/* Top Header Bar */}
        <div style={{
          background: 'var(--bg-hover)',
          color: 'var(--text-primary)',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-color)',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          {/* Back & Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              type="button"
              onClick={onBack ? onBack : () => window.history.back()}
              title="Back to All Classes"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4f46e5';
                e.currentTarget.style.color = '#4f46e5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <ArrowLeft size={18} />
            </button>

            <div>
              <h1 style={{
                fontSize: '1.18rem',
                fontWeight: 900,
                margin: 0,
                letterSpacing: '-0.01em',
                color: 'var(--text-primary)'
              }}>
                Class {getRomanClass(selectedClassNum)} Subjects
              </h1>
              <span style={{ fontSize: '0.72rem', color: '#6366f1', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                NCERT TEXTBOOKS &amp; SOLUTIONS
              </span>
            </div>
          </div>

          {/* Right Action Controls: Icon-Only View Switcher & Year Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* View Mode Switcher (Icon-Only Buttons) */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              padding: '2px',
              gap: '2px'
            }}>
              {/* List View Icon */}
              <button
                type="button"
                onClick={() => handleSetViewMode('list')}
                title="List View"
                aria-label="List View"
                style={{
                  background: viewMode === 'list' ? '#4f46e5' : 'transparent',
                  color: viewMode === 'list' ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '7px',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <List size={16} />
              </button>

              {/* Tiles Grid View Icon */}
              <button
                type="button"
                onClick={() => handleSetViewMode('tiles')}
                title="Tiles View"
                aria-label="Tiles View"
                style={{
                  background: viewMode === 'tiles' ? '#4f46e5' : 'transparent',
                  color: viewMode === 'tiles' ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '7px',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <LayoutGrid size={15} />
              </button>

              {/* Large Thumbnails Showcase View Icon */}
              <button
                type="button"
                onClick={() => handleSetViewMode('large')}
                title="Large Thumbnails View"
                aria-label="Large Thumbnails View"
                style={{
                  background: viewMode === 'large' ? '#4f46e5' : 'transparent',
                  color: viewMode === 'large' ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '7px',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <Maximize2 size={15} />
              </button>
            </div>

            {/* Session Tag */}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 9px',
              borderRadius: '9999px',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              color: '#818cf8',
              fontSize: '0.7rem',
              fontWeight: 900,
              letterSpacing: '0.03em'
            }}>
              <Sparkles size={11} style={{ color: '#818cf8' }} />
              2026–27
            </span>
          </div>
        </div>

        {/* 1. LIST VIEW (Horizontal Rows) */}
        {viewMode === 'list' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '14px',
            background: 'var(--bg-card)'
          }}>
            {subjects.map((subject) => {
              const isSelected = selectedSubject?.id === subject.id;
              const badge = getSubjectBadgeMeta(subject.name);
              const isBookmarked = isSubjectBookmarked ? isSubjectBookmarked(subject.id) : false;
              const coverImg = getSubjectCoverImage(subject, selectedClassNum);

              return (
                <div
                  key={subject.id}
                  onClick={() => onSelectSubject(subject)}
                  style={{
                    background: isSelected ? 'var(--bg-hover)' : 'var(--bg-card)',
                    border: isSelected ? '2px solid #4f46e5' : '1px solid var(--border-color)',
                    borderRadius: '14px',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 16px rgba(79, 70, 229, 0.25)' : 'var(--shadow-sm)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#4f46e5';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isSelected ? '#4f46e5' : 'var(--border-color)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {/* Left: 3D Book Cover Thumbnail + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                    <div style={{
                      width: '44px',
                      height: '60px',
                      borderRadius: '3px 6px 6px 3px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.35)',
                      borderLeft: '2.5px solid rgba(255, 255, 255, 0.5)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      flexShrink: 0,
                      background: '#0c1322'
                    }}>
                      {coverImg ? (
                        <img src={coverImg} alt={subject.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: badge.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '0.9rem' }}>
                          {badge.initials}
                        </div>
                      )}
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <h3 style={{
                        fontSize: '0.96rem',
                        fontWeight: 900,
                        color: 'var(--text-primary)',
                        margin: '0 0 2px',
                        lineHeight: 1.25,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {subject.name}
                      </h3>
                      <p style={{
                        fontSize: '0.76rem',
                        color: 'var(--text-muted)',
                        margin: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {subject.description || `NCERT Class ${selectedClassNum} Textbook`}
                      </p>
                    </div>
                  </div>

                  {/* Right: Chapter Count Badge & Action */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: '#4f46e5',
                      background: 'rgba(79, 70, 229, 0.1)',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      border: '1px solid rgba(79, 70, 229, 0.25)'
                    }}>
                      {subject.totalChapters} Ch
                    </span>

                    {onToggleBookmarkSubject && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmarkSubject(subject);
                        }}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px', color: isBookmarked ? '#4f46e5' : 'var(--text-muted)' }}
                      >
                        <Bookmark size={15} fill={isBookmarked ? '#4f46e5' : 'none'} />
                      </button>
                    )}

                    <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. TILES VIEW (Standard 2-Column Grid) */}
        {viewMode === 'tiles' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            padding: '16px',
            background: 'var(--bg-card)'
          }}>
            {subjects.map((subject) => {
              const isSelected = selectedSubject?.id === subject.id;
              const badge = getSubjectBadgeMeta(subject.name);
              const isBookmarked = isSubjectBookmarked ? isSubjectBookmarked(subject.id) : false;
              const coverImg = getSubjectCoverImage(subject, selectedClassNum);

              return (
                <button
                  key={subject.id}
                  type="button"
                  onClick={() => onSelectSubject(subject)}
                  style={{
                    background: isSelected ? 'var(--bg-hover)' : 'var(--bg-card)',
                    border: isSelected ? '2px solid #4f46e5' : '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '16px 10px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    userSelect: 'none',
                    boxShadow: isSelected 
                      ? '0 4px 16px rgba(79, 70, 229, 0.25)' 
                      : 'var(--shadow-sm)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = '#4f46e5';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15), 0 0 15px rgba(79, 70, 229, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = isSelected ? '#4f46e5' : 'var(--border-color)';
                    e.currentTarget.style.boxShadow = isSelected ? '0 4px 16px rgba(79, 70, 229, 0.25)' : 'var(--shadow-sm)';
                  }}
                >
                  {/* Bookmark Pin */}
                  {onToggleBookmarkSubject && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmarkSubject(subject);
                      }}
                      style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        padding: '4px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        color: isBookmarked ? '#4f46e5' : 'var(--text-muted)',
                        transition: 'transform 0.15s ease',
                        zIndex: 3
                      }}
                      title={isBookmarked ? "Remove Bookmark" : "Bookmark Subject"}
                    >
                      <Bookmark size={14} fill={isBookmarked ? '#4f46e5' : 'none'} />
                    </span>
                  )}

                  {/* 3D Realistic NCERT Book Cover Thumbnail */}
                  <div style={{
                    width: '68px',
                    height: '92px',
                    position: 'relative',
                    marginBottom: '10px'
                  }}>
                    {coverImg ? (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '4px 8px 8px 4px',
                        overflow: 'hidden',
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)',
                        borderLeft: '3.5px solid rgba(255, 255, 255, 0.5)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                        position: 'relative',
                        background: '#0c1322'
                      }}>
                        <img
                          src={coverImg}
                          alt={subject.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                        {/* Spine shadow groove */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '6px',
                          height: '100%',
                          background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 100%)',
                          pointerEvents: 'none'
                        }} />
                      </div>
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '4px 8px 8px 4px',
                        background: badge.gradient,
                        boxShadow: `0 6px 16px rgba(0, 0, 0, 0.4), 0 0 12px ${badge.glowColor}`,
                        borderLeft: '3.5px solid rgba(255, 255, 255, 0.5)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '5px 4px 6px',
                        textAlign: 'center',
                        position: 'relative',
                        color: '#ffffff',
                        overflow: 'hidden'
                      }}>
                        <div style={{ fontSize: '0.45rem', fontWeight: 900, background: 'rgba(0,0,0,0.45)', padding: '1px 3px', borderRadius: '3px', color: '#fde047' }}>
                          NCERT • {getRomanClass(selectedClassNum)}
                        </div>
                        <div style={{ fontSize: badge.initials.length > 1 ? '1.15rem' : '1.35rem', fontWeight: 900, lineHeight: 1 }}>
                          {badge.initials}
                        </div>
                        <div style={{ fontSize: '0.45rem', fontWeight: 800, color: 'rgba(255,255,255,0.95)' }}>
                          Textbook
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Subject Title */}
                  <h3 style={{
                    fontSize: '0.96rem',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    margin: '0 0 4px',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.25
                  }}>
                    {subject.name}
                  </h3>

                  {/* Subject Chapter Count */}
                  <span style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <BookOpen size={11} style={{ color: '#4f46e5' }} />
                    {subject.totalChapters} Chapters
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* 3. LARGE THUMBNAILS SHOWCASE VIEW */}
        {viewMode === 'large' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            padding: '18px',
            background: 'var(--bg-card)'
          }}>
            {subjects.map((subject) => {
              const isSelected = selectedSubject?.id === subject.id;
              const badge = getSubjectBadgeMeta(subject.name);
              const isBookmarked = isSubjectBookmarked ? isSubjectBookmarked(subject.id) : false;
              const coverImg = getSubjectCoverImage(subject, selectedClassNum);

              return (
                <div
                  key={subject.id}
                  onClick={() => onSelectSubject(subject)}
                  style={{
                    background: isSelected ? 'var(--bg-hover)' : 'var(--bg-card)',
                    border: isSelected ? '2px solid #4f46e5' : '1px solid var(--border-color)',
                    borderRadius: '18px',
                    padding: '20px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 8px 24px rgba(79, 70, 229, 0.3)' : 'var(--shadow-card)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#4f46e5';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = isSelected ? '#4f46e5' : 'var(--border-color)';
                    e.currentTarget.style.boxShadow = isSelected ? '0 8px 24px rgba(79, 70, 229, 0.3)' : 'var(--shadow-card)';
                  }}
                >
                  {/* Bookmark Pin */}
                  {onToggleBookmarkSubject && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmarkSubject(subject);
                      }}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        padding: '4px',
                        cursor: 'pointer',
                        color: isBookmarked ? '#4f46e5' : 'var(--text-muted)'
                      }}
                      title={isBookmarked ? "Remove Bookmark" : "Bookmark Subject"}
                    >
                      <Bookmark size={18} fill={isBookmarked ? '#4f46e5' : 'none'} />
                    </span>
                  )}

                  {/* Large 3D NCERT Book Cover */}
                  <div style={{
                    width: '120px',
                    height: '168px',
                    position: 'relative',
                    marginBottom: '16px',
                    borderRadius: '6px 12px 12px 6px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.5)',
                    borderLeft: '5px solid rgba(255, 255, 255, 0.6)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                    background: '#0c1322'
                  }}>
                    {coverImg ? (
                      <img
                        src={coverImg}
                        alt={subject.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: badge.gradient,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '10px 8px',
                        color: '#ffffff'
                      }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#fde047' }}>NCERT Class {selectedClassNum}</span>
                        <span style={{ fontSize: '2rem', fontWeight: 900 }}>{badge.initials}</span>
                        <span style={{ fontSize: '0.65rem', fontWeight: 800 }}>Textbook</span>
                      </div>
                    )}
                    {/* Spine Shadow */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '10px',
                      height: '100%',
                      background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 100%)',
                      pointerEvents: 'none'
                    }} />
                  </div>

                  {/* Subject Name */}
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    margin: '0 0 6px',
                    lineHeight: 1.2
                  }}>
                    {subject.name}
                  </h3>

                  {/* Subject Description */}
                  <p style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    margin: '0 0 12px',
                    lineHeight: 1.4,
                    maxWidth: '240px'
                  }}>
                    {subject.description}
                  </p>

                  {/* Bottom Action Deck */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: '#4f46e5',
                      background: 'rgba(79, 70, 229, 0.12)',
                      border: '1px solid rgba(79, 70, 229, 0.35)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <BookOpen size={12} />
                      {subject.totalChapters} Chapters
                    </span>

                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      background: '#4f46e5',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      Open Book ❯
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
