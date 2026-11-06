import React from 'react';
import {
  X,
  Globe,
  Moon,
  Sun,
  Smartphone,
  Bookmark,
  FolderDown,
  ShieldCheck,
  Share2,
  MessageSquare,
  Star,
  ChevronRight,
  RefreshCw,
  Sparkles,
  GraduationCap,
  Calendar,
  Layers,
  Smile
} from 'lucide-react';

export type ThemePreference = 'system' | 'dark' | 'light';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  themePreference?: ThemePreference;
  setThemePreference?: (pref: ThemePreference) => void;
  currentBoard?: 'NCERT' | 'NIOS';
  onSelectBoard?: (board: 'NCERT' | 'NIOS') => void;
  onNavigate: (pageKey: 'INBUILT_READER' | 'SHARE_APP' | 'FEEDBACK' | 'PRIVACY_POLICY' | 'RATE_US' | 'BOOKMARKS' | 'OFFLINE_FILES' | 'NCERT_SOLUTIONS' | 'TS_GREWAL_ACCOUNTING_EQUATION' | 'ADMIN' | 'NIOS_BOOKS' | 'DOUBT_STUDIO' | 'ACADEMY_CLASSES' | 'SCHEDULE_BUILDER' | 'BILINGUAL_PDF_MERGER' | 'KIDS_FOUNDATIONAL_HUB') => void;
  totalBookmarksCount?: number;
  totalOfflineCount?: number;
  onCheckUpdates?: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  darkMode,
  setDarkMode,
  themePreference = 'system',
  setThemePreference,
  currentBoard = 'NCERT',
  onSelectBoard,
  onNavigate,
  totalBookmarksCount = 0,
  totalOfflineCount = 0,
  onCheckUpdates
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 300,
      display: 'flex',
      userSelect: 'none'
    }}>
      {/* Dim Backdrop with Blur */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          animation: 'fadeIn 0.2s ease-in-out'
        }}
      />

      {/* Off-Canvas Drawer Container */}
      <div style={{
        position: 'relative',
        width: '340px',
        maxWidth: '86vw',
        height: '100%',
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '8px 0 32px rgba(0, 0, 0, 0.45)',
        zIndex: 310,
        overflowY: 'auto'
      }}>

        {/* 1. Header with Nextsem Emblem & Brand Tagline */}
        <div style={{
          padding: 'calc(16px + env(safe-area-inset-top, 0px)) 18px 16px',
          borderBottom: '1px solid var(--border-color)',
          background: 'var(--bg-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {/* Logo Squircle Frame */}
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '11px',
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
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1.15 }}>
              <span style={{ fontWeight: 900, fontSize: '1.14rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                StudyGuide
              </span>
              <span style={{ color: 'var(--accent-primary, #4f46e5)', fontSize: '0.64rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '1px' }}>
                by Nextsem
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--bg-hover)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#4f46e5';
              e.currentTarget.style.borderColor = '#4f46e5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* 1B. Nextsem Flagship Universe Portal Link */}
        <div style={{ padding: '10px 16px 4px' }}>
          <a
            href="https://nextsem.online"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '11px 13px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(4, 170, 109, 0.14) 0%, rgba(20, 184, 166, 0.08) 100%)',
              border: '1px solid rgba(4, 170, 109, 0.35)',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              transition: 'all 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#04AA6D',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(4, 170, 109, 0.4)'
              }}>
                <Globe size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  Nextsem Academy Hub
                </div>
                <div style={{ fontSize: '0.67rem', color: '#04AA6D', fontWeight: 700 }}>
                  College Degrees, Tech Jobs &amp; Coding
                </div>
              </div>
            </div>
            <span style={{ color: '#04AA6D', fontSize: '0.9rem', fontWeight: 800 }}>❯</span>
          </a>
        </div>

        {/* 2. Theme Segmented Switcher (System / Dark / Light) */}
        <div style={{ padding: '14px 16px 6px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-card)',
            padding: '3px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            gap: '2px'
          }}>
            {/* System Auto Button */}
            <button
              type="button"
              onClick={() => {
                if (setThemePreference) setThemePreference('system');
                else {
                  const sysDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  setDarkMode(sysDark);
                }
              }}
              title="System Default Theme (Auto adapt to device)"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                padding: '7px 0',
                borderRadius: '9px',
                border: 'none',
                background: themePreference === 'system' ? 'var(--bg-hover)' : 'transparent',
                color: themePreference === 'system' ? '#818cf8' : 'var(--text-muted)',
                fontSize: '0.74rem',
                fontWeight: themePreference === 'system' ? 800 : 600,
                boxShadow: themePreference === 'system' ? '0 1px 4px rgba(0, 0, 0, 0.15)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Smartphone size={13} style={{ color: themePreference === 'system' ? '#818cf8' : 'inherit' }} />
              <span>Auto ({darkMode ? 'Dark' : 'Light'})</span>
            </button>

            {/* Dark Theme Button */}
            <button
              type="button"
              onClick={() => {
                if (setThemePreference) setThemePreference('dark');
                setDarkMode(true);
              }}
              title="Dark Theme"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                padding: '7px 0',
                borderRadius: '9px',
                border: 'none',
                background: themePreference === 'dark' ? '#0c1328' : 'transparent',
                color: themePreference === 'dark' ? '#ffffff' : 'var(--text-muted)',
                fontSize: '0.74rem',
                fontWeight: themePreference === 'dark' ? 800 : 600,
                boxShadow: themePreference === 'dark' ? '0 0 10px rgba(4, 170, 109, 0.25)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Moon size={13} style={{ color: themePreference === 'dark' ? '#10b981' : 'inherit' }} />
              <span>Dark</span>
            </button>

            {/* Light Theme Button */}
            <button
              type="button"
              onClick={() => {
                if (setThemePreference) setThemePreference('light');
                setDarkMode(false);
              }}
              title="Light Theme"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                padding: '7px 0',
                borderRadius: '9px',
                border: 'none',
                background: themePreference === 'light' ? '#ffffff' : 'transparent',
                color: themePreference === 'light' ? '#0f172a' : 'var(--text-muted)',
                fontSize: '0.74rem',
                fontWeight: themePreference === 'light' ? 800 : 600,
                boxShadow: themePreference === 'light' ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Sun size={13} style={{ color: themePreference === 'light' ? '#f59e0b' : 'inherit' }} />
              <span>Light</span>
            </button>
          </div>
        </div>

        {/* 2.5 Curriculum Board Switcher (NCERT vs NIOS) */}
        <div style={{ padding: '4px 16px 8px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-card)',
            padding: '3px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <button
              type="button"
              onClick={() => {
                if (onSelectBoard) onSelectBoard('NCERT');
                else onNavigate('NCERT_SOLUTIONS');
              }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '7px 0',
                borderRadius: '9px',
                border: 'none',
                background: currentBoard !== 'NIOS' ? 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)' : 'transparent',
                color: currentBoard !== 'NIOS' ? '#ffffff' : 'var(--text-muted)',
                fontSize: '0.76rem',
                fontWeight: currentBoard !== 'NIOS' ? 800 : 600,
                boxShadow: currentBoard !== 'NIOS' ? '0 2px 10px rgba(79, 70, 229, 0.3)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span>🏛️ NCERT (1–12)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (onSelectBoard) onSelectBoard('NIOS');
                else onNavigate('NIOS_BOOKS');
              }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '7px 0',
                borderRadius: '9px',
                border: 'none',
                background: currentBoard === 'NIOS' ? 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' : 'transparent',
                color: currentBoard === 'NIOS' ? '#ffffff' : 'var(--text-muted)',
                fontSize: '0.76rem',
                fontWeight: currentBoard === 'NIOS' ? 800 : 600,
                boxShadow: currentBoard === 'NIOS' ? '0 2px 10px rgba(217, 119, 6, 0.3)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span>🎓 NIOS Board</span>
            </button>
          </div>
        </div>

        {/* 3. Navigation Links List */}
        <div style={{ padding: '8px 12px 18px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>

          {/* Section 1: Academy Academic Curriculum */}
          <div>
            <div style={sectionLabelStyle}>Academic Ecosystem</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <NavItem
                icon={<GraduationCap size={17} />}
                iconColor="#10b981"
                iconBg="rgba(16, 185, 129, 0.16)"
                title="Nextsem Academy Classes"
                subtitle="Classes 1 to 12 • Science, Commerce &amp; Arts"
                badge="EXPLORE"
                badgeColor="#10b981"
                badgeBg="rgba(16, 185, 129, 0.16)"
                highlight
                onClick={() => {
                  onClose();
                  onNavigate('ACADEMY_CLASSES');
                }}
              />

              <NavItem
                icon={<Calendar size={17} />}
                iconColor="#38bdf8"
                iconBg="rgba(56, 189, 248, 0.16)"
                title="Timetable &amp; Lesson Planner"
                subtitle="Day-wise &amp; time-wise schedule CMS"
                badge="BUILDER"
                badgeColor="#38bdf8"
                badgeBg="rgba(56, 189, 248, 0.16)"
                onClick={() => {
                  onClose();
                  onNavigate('SCHEDULE_BUILDER');
                }}
              />

              <NavItem
                icon={<Smile size={17} />}
                iconColor="#f59e0b"
                iconBg="rgba(245, 158, 11, 0.16)"
                title="Kids Foundational Hub"
                subtitle="Nursery, LKG, UKG • English, Maths & Hindi"
                badge="KG • PLAY"
                badgeColor="#f59e0b"
                badgeBg="rgba(245, 158, 11, 0.16)"
                highlight
                onClick={() => {
                  onClose();
                  onNavigate('KIDS_FOUNDATIONAL_HUB');
                }}
              />
            </div>
          </div>

          {/* Section 2: Library & Offline Files */}
          <div>
            <div style={sectionLabelStyle}>Your Library &amp; Storage</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              
              <NavItem
                icon={<Bookmark size={17} />}
                iconColor="#ec4899"
                iconBg="rgba(236, 72, 153, 0.12)"
                title="Saved Bookmarks"
                subtitle="Marked subjects, chapters &amp; formulas"
                badge={totalBookmarksCount > 0 ? `${totalBookmarksCount} SAVED` : undefined}
                badgeColor="#ec4899"
                badgeBg="rgba(236, 72, 153, 0.16)"
                onClick={() => {
                  onClose();
                  onNavigate('BOOKMARKS');
                }}
              />

              <NavItem
                icon={<Sparkles size={17} />}
                iconColor="#f59e0b"
                iconBg="rgba(245, 158, 11, 0.16)"
                title="Class 6–8 Doubt Studio"
                subtitle="Chapterwise topic doubts &amp; diagnostic checks"
                badge="NEW"
                badgeColor="#f59e0b"
                badgeBg="rgba(245, 158, 11, 0.16)"
                highlight
                onClick={() => {
                  onClose();
                  onNavigate('DOUBT_STUDIO');
                }}
              />

              <NavItem
                icon={<FolderDown size={17} />}
                iconColor="#10b981"
                iconBg="rgba(16, 185, 129, 0.12)"
                title="Offline Downloaded Files"
                subtitle="Cached chapter notes &amp; textbooks"
                badge={totalOfflineCount > 0 ? `${totalOfflineCount} READY` : 'STORAGE'}
                badgeColor="#10b981"
                badgeBg="rgba(16, 185, 129, 0.16)"
                onClick={() => {
                  onClose();
                  onNavigate('OFFLINE_FILES');
                }}
              />

            </div>
          </div>

          {/* Section 3: Administration */}
          <div>
            <div style={sectionLabelStyle}>Administration &amp; Storage</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              
              <NavItem
                icon={<ShieldCheck size={17} />}
                iconColor="#4f46e5"
                iconBg="rgba(79, 70, 229, 0.16)"
                title="Admin PDF Upload Portal"
                subtitle="Upload textbook chapters &amp; verify cloud sync"
                badge="SECURE"
                badgeColor="#4f46e5"
                badgeBg="rgba(79, 70, 229, 0.16)"
                highlight
                onClick={() => {
                  onClose();
                  onNavigate('ADMIN');
                }}
              />

              <NavItem
                icon={<Layers size={17} />}
                iconColor="#10b981"
                iconBg="rgba(16, 185, 129, 0.16)"
                title="Bilingual PDF Merger Studio"
                subtitle="Merge English &amp; Hindi Medium chapter PDFs"
                badge="STUDIO"
                badgeColor="#10b981"
                badgeBg="rgba(16, 185, 129, 0.16)"
                highlight
                onClick={() => {
                  onClose();
                  onNavigate('BILINGUAL_PDF_MERGER');
                }}
              />

            </div>
          </div>

          {/* Section 4: Community & Settings */}
          <div>
            <div style={sectionLabelStyle}>Community &amp; Support</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              
              <NavItem
                icon={<Share2 size={17} />}
                iconColor="#38bdf8"
                iconBg="rgba(56, 189, 248, 0.12)"
                title="Share with Classmates"
                subtitle="Invite study peers on WhatsApp &amp; Telegram"
                onClick={() => {
                  onClose();
                  onNavigate('SHARE_APP');
                }}
              />

              <NavItem
                icon={<MessageSquare size={17} />}
                iconColor="#10b981"
                iconBg="rgba(16, 185, 129, 0.12)"
                title="Feedback &amp; Support"
                subtitle="Direct teacher support by Er. Manoj Kumar"
                onClick={() => {
                  onClose();
                  onNavigate('FEEDBACK');
                }}
              />

              <NavItem
                icon={<ShieldCheck size={17} />}
                iconColor="#94a3b8"
                iconBg="rgba(148, 163, 184, 0.12)"
                title="Privacy &amp; Terms Policy"
                subtitle="Student safety &amp; data compliance"
                onClick={() => {
                  onClose();
                  onNavigate('PRIVACY_POLICY');
                }}
              />

              <NavItem
                icon={<Star size={17} />}
                iconColor="#f59e0b"
                iconBg="rgba(245, 158, 11, 0.12)"
                title="Rate Us on Google Play"
                subtitle="Support 100% free open school education"
                badge="5.0 ★"
                badgeColor="#f59e0b"
                badgeBg="rgba(245, 158, 11, 0.18)"
                onClick={() => {
                  onClose();
                  onNavigate('RATE_US');
                }}
              />

              <NavItem
                icon={<RefreshCw size={17} />}
                iconColor="#818cf8"
                iconBg="rgba(99, 102, 241, 0.14)"
                title="Check for App Updates"
                subtitle="Google Play Store release • v1.2.2"
                badge="NEW"
                badgeColor="#818cf8"
                badgeBg="rgba(99, 102, 241, 0.16)"
                onClick={() => {
                  onClose();
                  if (onCheckUpdates) onCheckUpdates();
                }}
              />

            </div>
          </div>

        </div>

        {/* 4. Drawer Footer */}
        <div style={{
          padding: '12px 16px',
          borderTop: '1px solid var(--border-color)',
          background: 'var(--bg-card)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            color: 'var(--text-muted)',
            letterSpacing: '0.04em'
          }}>
            Nextsem NCERT v2.4.0 • 2026–27 NEP Edition
          </div>
        </div>

      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  title: string;
  subtitle: string;
  badge?: string;
  badgeColor?: string;
  badgeBg?: string;
  highlight?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  iconColor,
  iconBg,
  title,
  subtitle,
  badge,
  badgeColor = '#4f46e5',
  badgeBg = 'rgba(79, 70, 229, 0.12)',
  highlight = false,
  onClick
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        padding: '9px 10px',
        borderRadius: '10px',
        border: highlight ? '1px solid rgba(79, 70, 229, 0.4)' : '1px solid transparent',
        background: highlight ? 'rgba(79, 70, 229, 0.08)' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        transition: 'all 0.18s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = highlight ? 'rgba(79, 70, 229, 0.2)' : 'var(--bg-hover)';
        e.currentTarget.style.borderColor = highlight ? '#4f46e5' : 'var(--border-color)';
        e.currentTarget.style.transform = 'translateX(3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = highlight ? 'rgba(79, 70, 229, 0.08)' : 'transparent';
        e.currentTarget.style.borderColor = highlight ? 'rgba(79, 70, 229, 0.4)' : '1px solid transparent';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
        {/* Icon Container */}
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: iconBg,
          color: iconColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          {icon}
        </div>

        {/* Text Details */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
          <span style={{
            fontSize: '0.84rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {title}
          </span>
          <span style={{
            fontSize: '0.68rem',
            fontWeight: 600,
            color: 'var(--text-muted)',
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginTop: '1px'
          }}>
            {subtitle}
          </span>
        </div>
      </div>

      {/* Right Accessory: Badge + Chevron */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
        {badge && (
          <span style={{
            fontSize: '0.62rem',
            fontWeight: 800,
            color: badgeColor,
            background: badgeBg,
            border: `1px solid ${badgeColor}33`,
            padding: '2px 6px',
            borderRadius: '9999px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase'
          }}>
            {badge}
          </span>
        )}
        <ChevronRight size={14} style={{ color: 'var(--text-muted)', opacity: 0.7 }} />
      </div>
    </button>
  );
};

const sectionLabelStyle: React.CSSProperties = {
  fontSize: '0.66rem',
  fontWeight: 900,
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  padding: '6px 8px 4px',
  opacity: 0.85
};
