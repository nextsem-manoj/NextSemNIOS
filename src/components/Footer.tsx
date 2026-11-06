import React from 'react';

interface FooterProps {
  onNavigatePolicy?: (policyKey: 'PRIVACY_POLICY' | 'FEEDBACK' | 'ABOUT') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePolicy }) => {
  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '2.25rem 1rem',
        marginTop: 'auto',
        width: '100%',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        fontWeight: 500,
        userSelect: 'none',
        transition: 'background-color 0.25s ease, border-color 0.25s ease'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <p style={{ color: 'var(--text-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.88rem', margin: 0 }}>
          StudyGuide by Nextsem • NCERT Solutions &amp; Textbooks Hub
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '18px', fontSize: '0.8rem', fontWeight: 700 }}>
          {onNavigatePolicy ? (
            <>
              <button
                type="button"
                onClick={() => onNavigatePolicy('PRIVACY_POLICY')}
                className="footer-nav-link"
                style={footerLinkBtnStyle}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onNavigatePolicy('PRIVACY_POLICY')}
                className="footer-nav-link"
                style={footerLinkBtnStyle}
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => onNavigatePolicy('FEEDBACK')}
                className="footer-nav-link"
                style={footerLinkBtnStyle}
              >
                Contact Support
              </button>
            </>
          ) : (
            <>
              <a href="/privacy" className="footer-nav-link" style={footerLinkStyle}>Privacy Policy</a>
              <a href="/terms" className="footer-nav-link" style={footerLinkStyle}>Terms of Service</a>
              <a href="/contact" className="footer-nav-link" style={footerLinkStyle}>Contact Support</a>
            </>
          )}
        </div>

        <div style={{
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          maxWidth: '850px',
          margin: '6px auto 0',
          paddingTop: '12px',
          borderTop: '1px dashed var(--border-color)'
        }}>
          <strong>Disclaimer:</strong> All NCERT textbooks, chapter PDFs, and curriculum documents are linked for educational reference purposes only and remain the sole intellectual property and copyright of the National Council of Educational Research and Training (<a href="https://ncert.nic.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary, #4f46e5)', textDecoration: 'underline' }}>NCERT</a>). StudyGuide by Nextsem is an independent educational platform providing step-by-step solutions, formula notes, and study aids.
        </div>

        <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', marginTop: '2px' }}>
          © {new Date().getFullYear()} StudyGuide by Nextsem. All NCERT Textbooks &amp; Solutions aligned with NEP 2020 Guidelines.
        </div>
      </div>
    </footer>
  );
};

const footerLinkStyle: React.CSSProperties = {
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  transition: 'color 0.15s ease'
};

const footerLinkBtnStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: 'var(--text-secondary)',
  cursor: 'pointer',
  padding: 0,
  fontSize: '0.8rem',
  fontWeight: 700,
  transition: 'color 0.15s ease'
};

export default Footer;
