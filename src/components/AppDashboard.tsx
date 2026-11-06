import React from 'react';
import { 
  ArrowRight, 
  FolderOpen,
  CheckCircle2,
  BookOpen,
  Zap,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { SHARED_NCERT_DRIVE_FOLDER_URL } from '../utils/googleDriveHelper';

interface AppDashboardProps {
  selectedClass?: number;
  onSelectClass?: (classNum: number) => void;
  onSelectCategory: (categoryKey: string) => void;
}

export const AppDashboard: React.FC<AppDashboardProps> = ({ 
  onSelectCategory 
}) => {

  const primaryCards = [
    {
      id: 'ncert-books',
      title: 'NCERT Books & Solutions',
      subtitle: 'Classes KG–12 • Complete Academic Vault',
      description: 'Rationalized (2026–27) textbooks, Pre-Primary Balvatika (Nursery, LKG, UKG), step-by-step solved exercises & formula vault.',
      image: '/icon-ncert-official-3d.png',
      badge: 'Classes KG–12 • Rationalized',
      badgeBg: 'rgba(79, 70, 229, 0.12)',
      badgeColor: '#4f46e5',
      borderColor: 'rgba(79, 70, 229, 0.35)',
      cardClass: 'glossy-card-ncert',
      btnClass: 'glossy-action-btn-ncert',
      haloColor: 'rgba(99, 102, 241, 0.35)',
      actionKey: 'ncert-books',
      actionLabel: 'Browse NCERT Classes KG–12',
      features: [
        { label: 'KG & Classes 1–12', icon: BookOpen },
        { label: 'Solved Q&A', icon: Zap },
        { label: 'Quiz & Labs', icon: Sparkles }
      ]
    },
    {
      id: 'nios-books',
      title: 'NIOS Textbooks & Practice',
      subtitle: 'Secondary & Sr. Secondary Official Hub',
      description: 'Official NIOS open schooling modules, interactive paragraph fill-ups with hints, and numerical mastery studios.',
      image: '/icon-nios-official-3d.png',
      badge: 'NIOS 10th & 12th • Official',
      badgeBg: 'rgba(245, 158, 11, 0.12)',
      badgeColor: '#d97706',
      borderColor: 'rgba(245, 158, 11, 0.35)',
      cardClass: 'glossy-card-nios',
      btnClass: 'glossy-action-btn-nios',
      haloColor: 'rgba(245, 158, 11, 0.35)',
      actionKey: 'nios-books',
      actionLabel: 'Open Official NIOS Hub',
      features: [
        { label: 'Modules 10 & 12', icon: Layers },
        { label: 'Fill-in-Blanks', icon: GraduationCap },
        { label: 'Numerical Lab', icon: Zap }
      ]
    }
  ];

  return (
    <div style={{
      maxWidth: '820px',
      margin: '0 auto',
      padding: '0.5rem 0.5rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      
      {/* 🌟 Sub-Header Info Strip */}
      <section style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '18px',
        padding: '0.85rem 1.15rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        boxShadow: 'var(--shadow-card)',
        transition: 'var(--transition)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            background: 'rgba(79, 70, 229, 0.12)',
            color: '#4f46e5',
            padding: '7px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(79, 70, 229, 0.3)'
          }}>
            <CheckCircle2 size={17} />
          </span>
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Official NCERT &amp; NIOS Textbooks &amp; Solutions
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              Rationalized Edition (2026–27) • KG to Class 12 • 100% Free Open Access by StudyGuide by Nextsem
            </div>
          </div>
        </div>

        {/* Google Drive Link */}
        <a 
          href={SHARED_NCERT_DRIVE_FOLDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'rgba(79, 70, 229, 0.1)',
            border: '1px solid rgba(79, 70, 229, 0.3)',
            color: '#4f46e5',
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#4f46e5';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <FolderOpen size={14} />
          <span>Drive Cloud ↗</span>
        </a>
      </section>

      {/* 📱 Symmetrical 2-Column Glossy Modern Dashboard Cards Grid */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '16px'
      }}>
        {primaryCards.map((card) => (
          <div
            key={card.id}
            onClick={() => onSelectCategory(card.actionKey)}
            className={`nextsem-dashboard-card ${card.cardClass}`}
            style={{
              padding: '1.45rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            {/* Top Badge Tag with status dot */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '6px' }}>
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 900,
                background: card.badgeBg,
                color: card.badgeColor,
                border: `1px solid ${card.borderColor}`,
                padding: '3px 10px',
                borderRadius: '9999px',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: card.badgeColor,
                  display: 'inline-block'
                }} />
                {card.badge}
              </span>
            </div>

            {/* Centered Floating 3D Official Artwork with Glowing Ambient Halo */}
            <div style={{
              height: '102px',
              width: '102px',
              margin: '6px 0 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Soft Ambient Radial Halo matching board branding */}
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: card.haloColor,
                filter: 'blur(18px)',
                opacity: 0.85,
                zIndex: 0
              }} />
              <img 
                src={card.image} 
                alt={card.title}
                className="glossy-3d-emblem"
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35))'
                }}
              />
            </div>

            {/* Title & Subtitle */}
            <h2 style={{
              fontSize: '1.2rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              margin: '0 0 4px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em'
            }}>
              {card.title}
            </h2>
            <div style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              fontWeight: 700,
              marginBottom: '10px'
            }}>
              {card.subtitle}
            </div>

            {/* Concise Description */}
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.45,
              margin: '0 0 14px',
              maxWidth: '320px'
            }}>
              {card.description}
            </p>

            {/* Interactive Feature Chips */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              flexWrap: 'wrap',
              marginBottom: '16px'
            }}>
              {card.features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <span 
                    key={idx}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--text-secondary)',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      padding: '3px 8px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <IconComponent size={12} color={card.badgeColor} />
                    <span>{feat.label}</span>
                  </span>
                );
              })}
            </div>

            {/* Glossy High Click-Appeal Action Button */}
            <div style={{ marginTop: 'auto', width: '100%' }}>
              <button 
                className={`glossy-action-btn ${card.btnClass}`}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCategory(card.actionKey);
                }}
              >
                <span>{card.actionLabel}</span>
                <ArrowRight size={15} className="btn-arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 🛡️ Modern Quick Trust & Feature Badges */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '10px',
        marginTop: '4px'
      }}>
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '14px',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{
            background: 'rgba(16, 185, 129, 0.12)',
            color: '#10b981',
            padding: '6px',
            borderRadius: '8px',
            display: 'flex'
          }}>
            <CheckCircle2 size={16} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>100% Free Open Access</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Complete books, solutions &amp; notes</div>
          </div>
        </div>

        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '14px',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{
            background: 'rgba(79, 70, 229, 0.12)',
            color: '#4f46e5',
            padding: '6px',
            borderRadius: '8px',
            display: 'flex'
          }}>
            <Zap size={16} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>1-Click Offline PDF</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Direct CDN &amp; Google Drive access</div>
          </div>
        </div>

        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '14px',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{
            background: 'rgba(245, 158, 11, 0.12)',
            color: '#d97706',
            padding: '6px',
            borderRadius: '8px',
            display: 'flex'
          }}>
            <Sparkles size={16} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>Interactive Practice</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Fill-ups, MCQs &amp; numerical labs</div>
          </div>
        </div>
      </section>

    </div>
  );
};
