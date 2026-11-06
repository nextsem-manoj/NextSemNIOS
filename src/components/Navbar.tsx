import React from 'react';
import { Menu, ArrowLeft, Search, X, FileText, Calculator, HelpCircle, Sun, Moon, GraduationCap, Globe } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface NavbarProps {
  onHomeClick: () => void;
  onOpenDrawer: () => void;
  onOpenAcademyClasses?: () => void;
  onOpenSolutionsPage?: () => void;
  activeView?: string;
  onOpenAccountancy?: () => void;
  onOpenQuizzes?: () => void;
  breadcrumbs?: BreadcrumbItem[];
  pageHeading?: string;
  onGoBack?: () => void;
  canGoBack?: boolean;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
  searchPlaceholder?: string;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onHomeClick,
  onOpenDrawer,
  onOpenAcademyClasses,
  onOpenSolutionsPage,
  activeView = 'DASHBOARD',
  onOpenAccountancy,
  onOpenQuizzes,
  onGoBack,
  canGoBack = false,
  searchTerm = '',
  onSearchChange,
  searchPlaceholder = 'Search class (e.g. 10, 12)...',
  isDarkMode = true,
  onToggleTheme
}) => {
  const isAcademyClassesActive = activeView === 'ACADEMY_CLASSES';
  const isSolutionsActive = activeView === 'NCERT_SOLUTIONS';
  const isAccountancyActive = activeView === 'TS_GREWAL_ACCOUNTING_EQUATION';

  return (
    <header
      className="main-navbar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 'calc(62px + env(safe-area-inset-top, 0px))',
        minHeight: 'calc(62px + env(safe-area-inset-top, 0px))',
        paddingTop: 'env(safe-area-inset-top, 0px)',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-secondary)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
        userSelect: 'none'
      }}
    >
      <div 
        className="container navbar-inner" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '10px',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 12px'
        }}
      >
        {/* Left Section: Menu Toggle (or Back Button) + Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {/* Smart Drawer Menu or Back Button */}
          <button
            type="button"
            onClick={canGoBack && onGoBack ? onGoBack : onOpenDrawer}
            title={canGoBack ? "Go Back" : "Open Menu"}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              background: 'var(--bg-hover)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
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
            {canGoBack ? <ArrowLeft size={18} /> : <Menu size={18} />}
          </button>

          {/* Brand Logo & Tagline */}
          <div
            onClick={onHomeClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            {/* Logo Emblem */}
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#050b14',
                border: '1.5px solid #00e676',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0, 230, 118, 0.25)',
                transition: 'var(--transition)',
                flexShrink: 0
              }}
            >
              <img
                src="/studyguide-by-nextsem-logo.jpg"
                alt="StudyGuide by Nextsem Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Typography Header */}
            <div className="brand-logo-text" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1.15 }}>
              <span style={{ fontWeight: 900, fontSize: '1.14rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                StudyGuide
              </span>
              <span style={{ color: 'var(--accent-primary, #4f46e5)', fontSize: '0.64rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '1px' }}>
                by Nextsem
              </span>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Quick Links */}
        <div 
          className="desktop-nav-links"
          style={{ 
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 12px',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {onOpenAcademyClasses && (
              <button
                type="button"
                onClick={onOpenAcademyClasses}
                className="nav-link-btn"
                style={{
                  color: isAcademyClassesActive ? '#10b981' : 'var(--text-muted)',
                  background: isAcademyClassesActive ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                  border: isAcademyClassesActive ? '1px solid #10b981' : '1px solid transparent'
                }}
              >
                <GraduationCap size={14} style={{ color: '#10b981' }} />
                <span>Academy Classes</span>
              </button>
            )}

            {onOpenSolutionsPage && (
              <button
                type="button"
                onClick={onOpenSolutionsPage}
                className="nav-link-btn"
                style={{
                  color: isSolutionsActive ? '#4f46e5' : 'var(--text-muted)',
                  background: isSolutionsActive ? 'rgba(79, 70, 229, 0.12)' : 'transparent',
                  border: isSolutionsActive ? '1px solid #4f46e5' : '1px solid transparent'
                }}
              >
                <FileText size={14} style={{ color: '#4f46e5' }} />
                <span>NCERT Solutions</span>
              </button>
            )}

            {onOpenAccountancy && (
              <button
                type="button"
                onClick={onOpenAccountancy}
                className="nav-link-btn"
                style={{
                  color: isAccountancyActive ? '#0284c7' : 'var(--text-muted)',
                  background: isAccountancyActive ? 'rgba(2, 132, 199, 0.12)' : 'transparent',
                  border: isAccountancyActive ? '1px solid #0284c7' : '1px solid transparent'
                }}
              >
                <Calculator size={14} style={{ color: '#0284c7' }} />
                <span>T.S. Grewal</span>
              </button>
            )}

            {onOpenQuizzes && (
              <button
                type="button"
                onClick={onOpenQuizzes}
                className="nav-link-btn"
              >
                <HelpCircle size={14} style={{ color: '#f59e0b' }} />
                <span>Quizzes</span>
              </button>
            )}
          </div>
        </div>

        {/* Nextsem Flagship Portal Button */}
          <a
            href="https://nextsem.online"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Nextsem Academy Flagship Portal"
            className="nav-link-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 11px',
              borderRadius: '9px',
              fontSize: '0.74rem',
              fontWeight: 800,
              background: 'rgba(4, 170, 109, 0.12)',
              color: '#04AA6D',
              border: '1px solid rgba(4, 170, 109, 0.35)',
              textDecoration: 'none',
              transition: 'all 0.15s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <Globe size={13} style={{ color: '#04AA6D' }} />
            <span className="hub-text">Nextsem Hub</span>
            <span style={{ fontSize: '0.68rem', opacity: 0.8 }}>❯</span>
          </a>

          {/* Right Section: Compact Search Input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {onSearchChange && (
            <div
              className="navbar-search-box"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '5px 10px',
                boxShadow: 'var(--shadow-sm)',
                width: '190px',
                maxWidth: '42vw',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#4f46e5';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(79, 70, 229, 0.2)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <Search size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  width: '100%',
                  minWidth: 0
                }}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  title="Clear search"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <X size={13} />
                </button>
              )}
            </div>
          )}

          {onToggleTheme && (
            <button
              type="button"
              onClick={onToggleTheme}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isDarkMode ? '#f59e0b' : '#6366f1',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
            >
              {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
