import React from 'react';
import {
  Home,
  GraduationCap,
  Bookmark,
  FileText,
  BookOpen,
  Layers,
  Zap,
  Landmark,
  FlaskConical,
  Sparkles,
  Sun,
  Moon,
  Calendar
} from 'lucide-react';

interface MobileBottomNavProps {
  viewMode: string;
  selectedClass: number;
  selectedSubjectName?: string | null;
  selectedChapterNumber?: number | null;
  selectedBookTitle?: string | null;
  onNavigateHome: () => void;
  onOpenClassSelector: () => void;
  onNavigateNios?: () => void;
  onNavigateCurrentLevel?: () => void;
  bookmarksCount: number;
  openBookmarks: () => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  viewMode,
  selectedClass,
  selectedSubjectName,
  selectedChapterNumber,
  selectedBookTitle,
  onNavigateHome,
  onOpenClassSelector,
  onNavigateNios,
  onNavigateCurrentLevel,
  bookmarksCount,
  openBookmarks,
  isDarkMode = true,
  onToggleTheme,
}) => {
  const isDashboard = viewMode === 'DASHBOARD';
  const isClasses = viewMode === 'CLASSES';
  const isClassSubjects = viewMode === 'CLASS_SUBJECTS';
  const isSubjectBooks = viewMode === 'SUBJECT_BOOKS';
  const isBookChapters = viewMode === 'BOOK_CHAPTERS';
  const isPdfReader = viewMode === 'PDF_READER';
  const isBookmarks = viewMode === 'BOOKMARKS';

  // Interactive Test & Lab Modes
  const isHindiGrammarStudio = viewMode === 'HINDI_GRAMMAR_STUDIO';
  const isStatsTest = viewMode === 'CLASS_11_STATS_TEST';
  const isEconomicsTest = viewMode === 'CLASS_11_ECONOMICS_TEST';
  const isHistoryTest = viewMode === 'HISTORY_COMPETENCY_TEST';
  const isHydrocarbonsTest = viewMode === 'HYDROCARBONS_TEST';
  const isEuclidLab = viewMode === 'EUCLID_INTERACTIVE';
  const isNotes = viewMode === 'NCERT_NOTES' || viewMode === 'NCERT_SOLUTIONS';
  const isNios = viewMode === 'NIOS_BOOKS' || viewMode === 'NIOS_NOTES';

  // Determine active dynamic label and icon (for chapters, units, labs, tests)
  const getDynamicContentTab = () => {
    if (isPdfReader) {
      return {
        label: selectedChapterNumber ? `Unit ${selectedChapterNumber}` : 'In-App PDF',
        icon: FileText,
        color: 'var(--accent-primary, #4f46e5)'
      };
    }
    if (isBookChapters) {
      return {
        label: selectedBookTitle ? (selectedBookTitle.length > 10 ? `${selectedBookTitle.slice(0, 9)}…` : selectedBookTitle) : 'Chapters',
        icon: BookOpen,
        color: 'var(--accent-primary, #4f46e5)'
      };
    }
    if (isSubjectBooks) {
      return {
        label: selectedSubjectName ? (selectedSubjectName.length > 10 ? `${selectedSubjectName.slice(0, 9)}…` : selectedSubjectName) : 'Books',
        icon: Layers,
        color: 'var(--accent-primary, #4f46e5)'
      };
    }
    if (isHindiGrammarStudio) {
      return {
        label: 'व्याकरण Studio',
        icon: Sparkles,
        color: '#e11d48'
      };
    }
    if (isStatsTest) {
      return {
        label: 'Stats Test',
        icon: Zap,
        color: '#04AA6D'
      };
    }
    if (isEconomicsTest) {
      return {
        label: 'Eco Test',
        icon: Zap,
        color: '#10b981'
      };
    }
    if (isHistoryTest) {
      return {
        label: 'History Test',
        icon: Landmark,
        color: '#ea580c'
      };
    }
    if (isHydrocarbonsTest) {
      return {
        label: 'Hydrocarbons',
        icon: FlaskConical,
        color: '#059669'
      };
    }
    if (isEuclidLab) {
      return {
        label: 'Geometry Lab',
        icon: Sparkles,
        color: 'var(--accent-primary, #4f46e5)'
      };
    }
    if (isNotes) {
      return {
        label: 'Solutions',
        icon: FileText,
        color: 'var(--accent-primary, #4f46e5)'
      };
    }
    if (viewMode === 'ACADEMY_CLASSES') {
      return {
        label: 'Academy Classes',
        icon: GraduationCap,
        color: '#10b981'
      };
    }
    if (viewMode === 'SCHEDULE_BUILDER') {
      return {
        label: 'Timetable CMS',
        icon: Calendar,
        color: '#38bdf8'
      };
    }
    return null;
  };

  const dynamicTab = getDynamicContentTab();

  // Active state flags
  const isHomeActive = (isClasses || isDashboard) && !dynamicTab;
  const isClassActive = isClassSubjects && !dynamicTab;
  const isNiosActive = isNios && !dynamicTab;
  const isBookmarksActive = isBookmarks;

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile Bottom Navigation"
      style={{
        display: 'flex',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 'calc(62px + env(safe-area-inset-bottom, 0px))',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        background: 'var(--bg-secondary)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-color)',
        zIndex: 120,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: '4px',
        paddingRight: '4px',
        boxShadow: 'var(--shadow-lg)',
        userSelect: 'none',
        transition: 'background-color 0.25s ease, border-color 0.25s ease'
      }}
    >
      {/* 1. NCERT Home Dashboard Tab */}
      <button
        type="button"
        className={`mobile-nav-btn ${isHomeActive ? 'active' : ''}`}
        onClick={onNavigateHome}
        aria-label="NCERT Home"
        aria-current={isHomeActive ? 'page' : undefined}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: isHomeActive ? 'var(--accent-primary-light, rgba(79, 70, 229, 0.12))' : 'transparent',
          border: isHomeActive ? '1.5px solid var(--border-glow, rgba(79, 70, 229, 0.35))' : '1.5px solid transparent',
          color: isHomeActive ? 'var(--accent-primary, #4f46e5)' : 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: isHomeActive ? 800 : 600,
          cursor: 'pointer',
          padding: '5px 8px',
          borderRadius: '12px',
          minHeight: '46px',
          minWidth: '48px',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <Home size={18} strokeWidth={isHomeActive ? 2.5 : 2} />
        <span>NCERT</span>
      </button>

      {/* 2. Class Selector Tab */}
      <button
        type="button"
        className={`mobile-nav-btn ${isClassActive ? 'active' : ''}`}
        onClick={onOpenClassSelector}
        aria-label={`Class ${selectedClass}`}
        aria-current={isClassActive ? 'page' : undefined}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: isClassActive ? 'var(--accent-primary-light, rgba(79, 70, 229, 0.12))' : 'transparent',
          border: isClassActive ? '1.5px solid var(--border-glow, rgba(79, 70, 229, 0.35))' : '1.5px solid transparent',
          color: isClassActive ? 'var(--accent-primary, #4f46e5)' : 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: isClassActive ? 800 : 600,
          cursor: 'pointer',
          padding: '5px 8px',
          borderRadius: '12px',
          minHeight: '46px',
          minWidth: '52px',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <GraduationCap size={18} strokeWidth={isClassActive ? 2.5 : 2} />
        <span>Class {selectedClass}</span>
      </button>

      {/* 3. Dynamic Active Study Tab (When inside Chapter, PDF Unit, Lab or Test) */}
      {dynamicTab && (
        <button
          type="button"
          className="mobile-nav-btn active"
          onClick={onNavigateCurrentLevel}
          aria-label={dynamicTab.label}
          aria-current="page"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            background: 'var(--accent-primary-light, rgba(79, 70, 229, 0.14))',
            border: '1.5px solid var(--border-glow, rgba(79, 70, 229, 0.4))',
            color: dynamicTab.color || 'var(--accent-primary, #4f46e5)',
            fontSize: '0.72rem',
            fontWeight: 800,
            cursor: 'pointer',
            padding: '5px 8px',
            borderRadius: '12px',
            minHeight: '46px',
            minWidth: '54px',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <dynamicTab.icon size={18} strokeWidth={2.5} />
          <span style={{ maxWidth: '64px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {dynamicTab.label}
          </span>
        </button>
      )}

      {/* 4. NIOS Study Hub Tab */}
      <button
        type="button"
        className={`mobile-nav-btn ${isNiosActive ? 'active' : ''}`}
        onClick={onNavigateNios}
        aria-label="NIOS Study Hub"
        aria-current={isNiosActive ? 'page' : undefined}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: isNiosActive ? 'rgba(245, 158, 11, 0.14)' : 'transparent',
          border: isNiosActive ? '1.5px solid rgba(245, 158, 11, 0.4)' : '1.5px solid transparent',
          color: isNiosActive ? '#d97706' : 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: isNiosActive ? 800 : 600,
          cursor: 'pointer',
          padding: '5px 8px',
          borderRadius: '12px',
          minHeight: '46px',
          minWidth: '48px',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <BookOpen size={18} strokeWidth={isNiosActive ? 2.5 : 2} />
        <span>NIOS</span>
      </button>

      {/* 5. Bookmarks & Saved Solutions Tab */}
      <button
        type="button"
        className={`mobile-nav-btn ${isBookmarksActive ? 'active' : ''}`}
        onClick={openBookmarks}
        aria-label="Saved Bookmarks"
        aria-current={isBookmarksActive ? 'page' : undefined}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          background: isBookmarksActive ? 'var(--accent-primary-light, rgba(79, 70, 229, 0.12))' : 'transparent',
          border: isBookmarksActive ? '1.5px solid var(--border-glow, rgba(79, 70, 229, 0.35))' : '1.5px solid transparent',
          color: isBookmarksActive ? 'var(--accent-primary, #4f46e5)' : 'var(--text-muted)',
          fontSize: '0.72rem',
          fontWeight: isBookmarksActive ? 800 : 600,
          cursor: 'pointer',
          padding: '5px 8px',
          borderRadius: '12px',
          minHeight: '46px',
          minWidth: '50px',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{ position: 'relative', display: 'inline-flex' }}>
          <Bookmark size={18} strokeWidth={isBookmarksActive ? 2.5 : 2} />
          {bookmarksCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-8px',
                background: 'var(--accent-primary, #4f46e5)',
                color: '#ffffff',
                borderRadius: '9999px',
                minWidth: '15px',
                height: '15px',
                padding: '0 3px',
                fontSize: '0.6rem',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
              }}
            >
              {bookmarksCount}
            </span>
          )}
        </div>
        <span>Saved</span>
      </button>

      {/* 6. Theme Toggle Tab (Light / Dark Mode) */}
      {onToggleTheme && (
        <button
          type="button"
          className="mobile-nav-btn"
          onClick={onToggleTheme}
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            background: 'transparent',
            border: '1.5px solid transparent',
            color: isDarkMode ? '#fbbf24' : '#0284c7',
            fontSize: '0.72rem',
            fontWeight: 700,
            cursor: 'pointer',
            padding: '5px 8px',
            borderRadius: '12px',
            minHeight: '46px',
            minWidth: '48px',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {isDarkMode ? (
            <Sun size={18} strokeWidth={2.5} color="#fbbf24" />
          ) : (
            <Moon size={18} strokeWidth={2.5} color="#0284c7" />
          )}
          <span style={{ color: 'var(--text-muted)' }}>{isDarkMode ? 'Light' : 'Dark'}</span>
        </button>
      )}
    </nav>
  );
};

export default MobileBottomNav;
