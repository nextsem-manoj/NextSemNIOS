import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Server } from 'lucide-react';

interface PrivacyPolicyViewProps {
  onBack: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onBack }) => {
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '1rem 0' }}>
      
      {/* Header with Back Pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
        <button
          onClick={onBack}
          className="btn btn-outline"
          style={{ padding: '8px 16px', borderRadius: '9999px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} /> Back
        </button>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
          Privacy Policy
        </h2>
      </div>

      {/* Hero Banner */}
      <div style={{
        background: 'var(--primary-gradient)',
        borderRadius: '16px',
        padding: '24px 20px',
        color: '#ffffff',
        marginBottom: '1.5rem',
        boxShadow: '0 8px 24px rgba(10, 37, 64, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <ShieldCheck size={28} style={{ color: '#d4af37' }} />
          <span style={{ fontWeight: 800, fontSize: '1.3rem' }}>StudyGuide by Nextsem Student Privacy Commitment</span>
        </div>
        <p style={{ fontSize: '0.88rem', opacity: 0.9, lineHeight: 1.5 }}>
          Your privacy is paramount. StudyGuide by Nextsem is designed to operate safely, securely, and transparently under NEP 2020 student protection guidelines.
        </p>
      </div>

      {/* Policy Details */}
      <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
            <EyeOff size={18} style={{ color: '#10b981' }} /> 1. Zero Personal Data Tracking
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We do NOT collect, sell, or rent student personal data, phone numbers, contacts, or location tracking. StudyGuide by Nextsem can be used anonymously without mandatory account registration.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
            <Server size={18} style={{ color: '#3b82f6' }} /> 2. Local Storage & Offline Caching
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Downloaded NCERT chapters, active class selections, bookmarks, and dark mode preferences are stored locally on your device using Web Storage / IndexedDB. This data remains on your phone and is never uploaded to remote servers.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
            <Lock size={18} style={{ color: '#d4af37' }} /> 3. Official NCERT & CBSE Content Attribution
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            All textbook PDFs, rationalized syllabus documents, and exam resources are sourced strictly from official NCERT (National Council of Educational Research and Training) publication guidelines for educational use.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Last updated: August 2026 • Contact: support@nextsem.online
        </div>

      </div>

    </div>
  );
};
