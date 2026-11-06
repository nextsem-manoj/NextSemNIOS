import React from 'react';
import { Home, ChevronRight, MapPin } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbAddressBarProps {
  breadcrumbs: BreadcrumbItem[];
}

export const BreadcrumbAddressBar: React.FC<BreadcrumbAddressBarProps> = ({ breadcrumbs }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb Address Bar"
      style={{
        position: 'sticky',
        top: 'calc(62px + env(safe-area-inset-top, 0px))',
        zIndex: 85,
        background: 'var(--bg-secondary)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        userSelect: 'none',
        transition: 'background-color 0.25s ease, border-color 0.25s ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '6px 14px',
          minHeight: '36px'
        }}
      >
        {/* Scrollable Breadcrumbs Address Trail */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            flex: 1,
            paddingRight: '4px'
          }}
        >
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            const isFirst = idx === 0;

            return (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <ChevronRight
                    size={13}
                    style={{
                      color: 'var(--text-muted)',
                      opacity: 0.7,
                      flexShrink: 0,
                      margin: '0 1px'
                    }}
                  />
                )}

                {crumb.onClick && !isLast ? (
                  <button
                    type="button"
                    onClick={crumb.onClick}
                    title={`Navigate to ${crumb.label}`}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--accent-primary, #4f46e5)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: '3px 7px',
                      borderRadius: '6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      textDecoration: 'none',
                      flexShrink: 0,
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-primary-hover, #4338ca)';
                      e.currentTarget.style.background = 'var(--accent-primary-light, rgba(79, 70, 229, 0.12))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--accent-primary, #4f46e5)';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {isFirst && <Home size={13} style={{ color: 'var(--accent-primary, #4f46e5)', flexShrink: 0 }} />}
                    <span>{crumb.label}</span>
                  </button>
                ) : (
                  <span
                    style={{
                      color: isLast ? 'var(--text-primary)' : 'var(--text-muted)',
                      fontSize: '0.78rem',
                      fontWeight: isLast ? 800 : 600,
                      padding: isLast ? '3px 9px' : '3px 6px',
                      borderRadius: '6px',
                      background: isLast ? 'var(--accent-primary-light, rgba(79, 70, 229, 0.12))' : 'transparent',
                      border: isLast ? '1px solid var(--border-glow, rgba(79, 70, 229, 0.28))' : '1px solid transparent',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      flexShrink: 0
                    }}
                  >
                    {isFirst && <Home size={13} style={{ flexShrink: 0 }} />}
                    {isLast && !isFirst && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#10b981',
                          boxShadow: '0 0 6px #10b981',
                          display: 'inline-block',
                          flexShrink: 0
                        }}
                      />
                    )}
                    <span>{crumb.label}</span>
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Location Hint Tag (Desktop/Tablet) */}
        {breadcrumbs.length > 1 && (
          <div
            className="desktop-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: 'var(--text-muted)',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              flexShrink: 0,
              paddingLeft: '8px'
            }}
          >
            <MapPin size={11} style={{ color: '#10b981' }} />
            <span>Path</span>
          </div>
        )}
      </div>
    </nav>
  );
};
