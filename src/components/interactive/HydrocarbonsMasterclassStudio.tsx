import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Zap,
  Flame,
  Crown,
  FlaskConical,
  ArrowRight,
  Scissors,
  Layers
} from 'lucide-react';

interface HydrocarbonsMasterclassStudioProps {
  onStartPractice: (sectionKey?: 'all' | 'alkanes' | 'alkenes' | 'alkynes' | 'benzene') => void;
  onStartExam: () => void;
}

export const HydrocarbonsMasterclassStudio: React.FC<HydrocarbonsMasterclassStudioProps> = ({
  onStartPractice,
  onStartExam
}) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'alkanes' | 'alkenes' | 'alkynes' | 'benzene' | 'distinction'>('intro');

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* 🌟 Masterclass Hero Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-hover) 100%)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        padding: '1.75rem',
        boxShadow: 'var(--shadow)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '200px',
          height: '200px',
          background: 'rgba(56, 189, 248, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(56, 189, 248, 0.15)', color: '#0284c7', padding: '4px 10px', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '8px' }}>
              <Sparkles size={14} />
              <span>NIOS 313 Lesson 26 • Complete Hinglish Masterclass</span>
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
              Hydrocarbons (हाइड्रोकार्बन) — Visual Concept Studio
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, maxWidth: '750px', lineHeight: 1.5 }}>
              Pura chapter 4 pillars mein categorized: Alkanes, Alkenes, Alkynes aur Benzene. Har reaction ko real-life analogies, chemical mechanisms aur exam tricks ke sath samjhein!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onStartPractice('all')}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 18px',
                fontSize: '0.88rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
              }}
            >
              <span>Practice 20 Qs</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onStartExam}
              style={{
                background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 18px',
                fontSize: '0.88rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Timed Exam (20 min)</span>
              <Zap size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 🧭 Interactive Pillar Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '14px',
        padding: '8px',
        overflowX: 'auto'
      }}>
        {[
          { id: 'intro', label: '🎯 Introduction & Basics', icon: BookOpen, color: '#0284c7' },
          { id: 'alkanes', label: '🛢️ Pillar 1: Alkanes', icon: Layers, color: '#10b981' },
          { id: 'alkenes', label: '⚡ Pillar 2: Alkenes', icon: Zap, color: '#f59e0b' },
          { id: 'alkynes', label: '🔥 Pillar 3: Alkynes', icon: Flame, color: '#f43f5e' },
          { id: 'benzene', label: '👑 Pillar 4: Benzene & Arenes', icon: Crown, color: '#a855f7' },
          { id: 'distinction', label: '🧪 Chemical Distinction Table', icon: FlaskConical, color: '#3b82f6' }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              style={{
                background: isActive ? tab.color : 'transparent',
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '0.84rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 📖 TAB CONTENT SECTIONS */}

      {/* 🎯 TAB 0: INTRODUCTION */}
      {activeTab === 'intro' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0284c7', margin: '0 0 10px' }}>
              🎯 Hydrocarbons kya hote hain? (Basic Definition)
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6, margin: '0 0 14px' }}>
              Jo organic compounds sirf aur sirf <strong>Carbon (C)</strong> aur <strong>Hydrogen (H)</strong> se milkar bante hain, unhe <strong>Hydrocarbons</strong> kehte hain. Inhe sabhi organic compounds ka <em>"Parent (Mata-Pita)"</em> maana jata hai kyunki hydrogen ko replace karke alag-alag functional groups (-OH, -CHO, -COOH) lagakar baki saare organic compounds banaye jaate hain.
            </p>

            {/* Real Life Callout Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0284c7', marginBottom: '4px' }}>🔥 Kitchen LPG Cylinder</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Mainly <strong>Propane (C3H8)</strong> aur <strong>Butane (C4H10)</strong> ka liquefied mixture.</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>🚗 Vehicle CNG &amp; Auto</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Mainly <strong>Compressed Methane (CH4)</strong> - 85-95% pure.</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f59e0b', marginBottom: '4px' }}>⛽ Petrol &amp; Diesel</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Octane (C8H18) aur C12-C18 higher alkanes ka crude blend.</div>
              </div>
            </div>
          </div>

          {/* Classification Overview Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '16px' }}>
              <span style={{ background: '#10b981', color: '#000000', fontSize: '0.72rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>PILLAR 1</span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 4px' }}>Alkanes (Paraffins)</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 10px' }}>Single bond (C-C) • Saturated • Formula: CnH2n+2 • sp³ Hybridized (109°28')</p>
              <button onClick={() => setActiveTab('alkanes')} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid #10b981', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 800, cursor: 'pointer' }}>
                Study Alkanes »
              </button>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '16px' }}>
              <span style={{ background: '#f59e0b', color: '#000000', fontSize: '0.72rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>PILLAR 2</span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 4px' }}>Alkenes (Olefins)</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 10px' }}>Double bond (C=C) • Unsaturated • Formula: CnH2n • sp² Hybridized (120°)</p>
              <button onClick={() => setActiveTab('alkenes')} style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid #f59e0b', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 800, cursor: 'pointer' }}>
                Study Alkenes »
              </button>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '16px' }}>
              <span style={{ background: '#f43f5e', color: '#ffffff', fontSize: '0.72rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>PILLAR 3</span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 4px' }}>Alkynes (Acetylenes)</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 10px' }}>Triple bond (C≡C) • Unsaturated • Formula: CnH2n-2 • sp Hybridized (180°)</p>
              <button onClick={() => setActiveTab('alkynes')} style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e', border: '1px solid #f43f5e', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 800, cursor: 'pointer' }}>
                Study Alkynes »
              </button>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '16px' }}>
              <span style={{ background: '#a855f7', color: '#ffffff', fontSize: '0.72rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>PILLAR 4</span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: '8px 0 4px' }}>Benzene &amp; Arenes</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 10px' }}>Aromatic • Planar Hexagonal Ring • Formula: C6H6 • (4n+2)π Hückel Rule</p>
              <button onClick={() => setActiveTab('benzene')} style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', border: '1px solid #a855f7', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 800, cursor: 'pointer' }}>
                Study Benzene »
              </button>
            </div>
          </div>

        </div>
      )}

      {/* 🛢️ TAB 1: ALKANES */}
      {activeTab === 'alkanes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Header & Definition */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ background: '#10b981', color: '#000000', fontSize: '0.75rem', fontWeight: 900, padding: '3px 8px', borderRadius: '4px' }}>26.1 ALKANES (PARAFFINS)</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Alkanes Overview &amp; Why Called "Paraffins"?
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6, margin: '0 0 10px' }}>
              Alkanes <strong>saturated hydrocarbons</strong> hote hain jismein carbon atoms ke beech sirf <strong>single covalent bonds (C-C)</strong> hote hain (Formula: <code style={{ color: '#10b981', background: 'var(--bg-hover)', padding: '2px 6px', borderRadius: '4px' }}>C<sub>n</sub>H<sub>2n+2</sub></code>, Hybridization: <code style={{ color: '#0284c7', background: 'var(--bg-hover)', padding: '2px 6px', borderRadius: '4px' }}>sp³</code>, Tetrahedral 109°28').
            </p>
            <div style={{ background: 'var(--bg-hover)', borderLeft: '3px solid #0284c7', padding: '10px 14px', borderRadius: '6px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              💡 <strong>Origin of Name "Paraffins"</strong>: Latin mein <em>parum</em> = little (kam) aur <em>affins</em> = affinity (reactivity/lagav). Room temperature par ye acids, bases aur oxidizing agents se bohot kam react karte hain, isliye inhein <strong>paraffins</strong> kehte hain!
            </div>
          </div>

          {/* Section 26.1.1: Methods of Preparation Banner */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid #10b981', borderRadius: '12px', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#10b981', margin: '0 0 4px' }}>
                ⚗️ 26.1.1 Methods of Preparation of Alkanes (All 4 Textbook Routes)
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                1. Haloalkanes • 2. Unsaturated Hydrocarbons • 3. Alcohols/Carbonyls • 4. Carboxylic Acids
              </p>
            </div>
            <span style={{ background: '#10b981', color: '#000000', fontSize: '0.72rem', fontWeight: 900, padding: '4px 10px', borderRadius: '6px' }}>
              COMPLETE NIOS 313 SYLLABUS
            </span>
          </div>

          {/* METHOD 1: FROM HALOALKANES (ALKYL HALIDES) */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ background: '#10b981', color: '#000000', fontSize: '0.75rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>METHOD 1</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                From Haloalkanes (Alkyl Halides, R-X) — 3 Sub-Methods
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: '0 0 12px' }}>
              Monohaloalkanes ko alkanes mein convert karne ke 3 direct pathways hain:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              {/* 1(a): Reduction of Haloalkanes */}
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0284c7', marginBottom: '6px' }}>
                  a) By Reduction of Haloalkanes (Halogen atom ko H se replace karna):
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                  Ye reduction 3 alag-alag reducing agents se kiya ja sakta hai:
                </p>

                {/* (i) Zn + dil HCl */}
                <div style={{ background: 'var(--bg-card)', padding: '10px 12px', borderRadius: '8px', marginBottom: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981' }}>
                    (i) Zinc and dilute HCl (Nascent Hydrogen method):
                  </div>
                  <div style={{ fontFamily: 'monospace', color: '#10b981', fontSize: '0.9rem', margin: '4px 0' }}>
                    CH3Br (Bromomethane) + Zn + 2 HCl ──&gt; CH4 (Methane) + ZnCl2 + HBr
                  </div>
                </div>

                {/* (ii) HI in presence of red phosphorus */}
                <div style={{ background: 'var(--bg-card)', padding: '10px 12px', borderRadius: '8px', marginBottom: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981' }}>
                    (ii) HI in the presence of Red Phosphorus (at 423 K / 150°C):
                  </div>
                  <div style={{ fontFamily: 'monospace', color: '#10b981', fontSize: '0.9rem', margin: '4px 0' }}>
                    C2H5I (Iodoethane) + HI ──(Red P / 423 K)──&gt; C2H6 (Ethane) + I2
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    💡 Red Phosphorus evolved Iodine (I2) ko remove karke reaction ko reversible hone se rokta hai (P + I2 → PI3).
                  </div>
                </div>

                {/* (iii) Catalytic Reduction */}
                <div style={{ background: 'var(--bg-card)', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981' }}>
                    (iii) Catalytic Reduction (Hydrogenation with Pt/Pd/Ni):
                  </div>
                  <div style={{ fontFamily: 'monospace', color: '#10b981', fontSize: '0.9rem', margin: '4px 0' }}>
                    CH3Cl (Chloromethane) + H2 ──(Pt catalyst)──&gt; CH4 (Methane) + HCl
                  </div>
                </div>
              </div>

              {/* 1(b): By Grignard's Reagent */}
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f59e0b', marginBottom: '6px' }}>
                  b) By using Grignard's Reagent (RMgX):
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                  Grignard Reagent (<code style={{ color: '#f59e0b' }}>R-Mg-X</code>) alkyl halide ko Magnesium metal ke sath <strong>Dry Ether</strong> mein react karake banta hai:
                </p>
                <div style={{ background: 'var(--bg-card)', padding: '8px 12px', borderRadius: '6px', fontFamily: 'monospace', color: '#f59e0b', fontSize: '0.88rem', marginBottom: '8px' }}>
                  C2H5Br (Bromoethane) + Mg ──(dry ether)──&gt; C2H5MgBr (Ethyl Magnesium Bromide)
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 6px' }}>
                  Grignard reagent kisi bhi <strong>Active Hydrogen</strong> compound (Water, Alcohol, Carboxylic Acid) ke sath react karke turant Alkane banata hai:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px' }}>
                  <div style={{ background: 'var(--bg-card)', padding: '8px 10px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b' }}>Reaction with Alcohol:</div>
                    <div style={{ fontFamily: 'monospace', color: '#10b981', fontSize: '0.82rem', marginTop: '2px' }}>
                      CH3MgBr + C2H5OH ──&gt; CH4 + Mg(OC2H5)Br
                    </div>
                  </div>
                  <div style={{ background: 'var(--bg-card)', padding: '8px 10px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b' }}>Reaction with Water:</div>
                    <div style={{ fontFamily: 'monospace', color: '#10b981', fontSize: '0.82rem', marginTop: '2px' }}>
                      C2H5MgBr + H2O ──&gt; C2H6 + Mg(OH)Br
                    </div>
                  </div>
                </div>
              </div>

              {/* 1(c): Wurtz Reaction */}
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>
                  c) By Wurtz Reaction (Twin Coupling for Higher Symmetrical Alkanes):
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                  Alkyl halide ko Sodium metal ke sath dry ether mein heat karne par double carbon wala higher alkane banta hai:
                </p>
                <div style={{ background: 'var(--bg-card)', padding: '10px 12px', borderRadius: '8px', fontFamily: 'monospace', color: '#10b981', fontSize: '0.9rem', marginBottom: '8px' }}>
                  CH3-Br + 2 Na + Br-CH3 ──(Dry Ether)──&gt; CH3-CH3 (Ethane) + 2 NaBr
                </div>
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', padding: '8px 12px', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  ⚠️ <strong>Exam Trap Alert</strong>: Wurtz reaction se <strong>Methane (CH4) kabhi nahi ban sakta</strong>! Is method se hamesha even number of carbons wale symmetrical alkanes best yield mein bante hain.
                </div>
              </div>

            </div>
          </div>

          {/* METHOD 2: FROM UNSATURATED HYDROCARBONS */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ background: '#f59e0b', color: '#000000', fontSize: '0.75rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>METHOD 2</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                From Unsaturated Hydrocarbons (Catalytic Hydrogenation)
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: '0 0 10px' }}>
              Alkenes (double bond) aur Alkynes (triple bond) mein Hydrogen (H2) add karke Catalyst (<strong style={{ color: '#f59e0b' }}>Ni, Pt ya Pd at 573 K / 300°C</strong>) ki presence mein Alkanes banaye jate hain (Sabatier-Senderens Reaction):
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '10px 14px', fontFamily: 'monospace', color: '#f59e0b', fontSize: '0.9rem' }}>
                CH2=CH2 (Ethene) + H2 ──(Ni or Pt / 573 K)──&gt; CH3-CH3 (Ethane)
              </div>
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '10px 14px', fontFamily: 'monospace', color: '#f59e0b', fontSize: '0.9rem' }}>
                CH≡CH (Ethyne) + 2 H2 ──(Ni or Pt / 573 K)──&gt; CH3-CH3 (Ethane)
              </div>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '3px solid #10b981', padding: '10px 14px', borderRadius: '6px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              🧈 <strong>Real-Life Application (Vegetable Ghee)</strong>: Is reaction ko commercial industry mein <strong>Hydrogenation of Oils</strong> kehte hain — liquid edible vegetable oils (unsaturated fats) ko hydrogenate karke solid Vanaspati Ghee (saturated fat) banaya jata hai!
            </div>
          </div>

          {/* METHOD 3: FROM ALCOHOLS, ALDEHYDES AND KETONES */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ background: '#a855f7', color: '#ffffff', fontSize: '0.75rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>METHOD 3</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                From Alcohols, Aldehydes and Ketones (Reduction with Red P + HI at 423 K)
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: '0 0 10px' }}>
              <strong style={{ color: '#a855f7' }}>Red Phosphorus + HI</strong> ek super-powerful reducing agent hai jo oxygen-bearing functional groups ko directly corresponding alkane mein reduce kar deta hai:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '10px 14px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#a855f7', marginBottom: '2px' }}>1. Alcohols (ROH) ──&gt; Alkane:</div>
                <div style={{ fontFamily: 'monospace', color: '#a855f7', fontSize: '0.88rem' }}>
                  ROH (Alcohol) + 2 HI ──(Red P / 423 K)──&gt; RH (Alkane) + I2 + H2O
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  e.g., C2H5OH (Ethanol) + 2 HI ──&gt; C2H6 (Ethane) + I2 + H2O
                </div>
              </div>

              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '10px 14px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#a855f7', marginBottom: '2px' }}>2. Aldehydes (RCHO) ──&gt; Alkane:</div>
                <div style={{ fontFamily: 'monospace', color: '#a855f7', fontSize: '0.88rem' }}>
                  RCHO (Aldehyde) + 4 HI ──(Red P / 423 K)──&gt; RCH3 (Alkane) + 2 I2 + H2O
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  e.g., CH3CHO (Acetaldehyde) + 4 HI ──&gt; CH3-CH3 (Ethane) + 2 I2 + H2O
                </div>
              </div>

              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '10px 14px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#a855f7', marginBottom: '2px' }}>3. Ketones (RCOR') ──&gt; Alkane:</div>
                <div style={{ fontFamily: 'monospace', color: '#a855f7', fontSize: '0.88rem' }}>
                  RCOR' (Ketone) + 4 HI ──(Red P / 423 K)──&gt; RCH2R' (Alkane) + 2 I2 + H2O
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  e.g., CH3COCH3 (Acetone, 3C) + 4 HI ──&gt; CH3CH2CH3 (Propane, 3C) + 2 I2 + H2O
                </div>
              </div>
            </div>
          </div>

          {/* METHOD 4: FROM CARBOXYLIC ACIDS */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ background: '#0284c7', color: '#ffffff', fontSize: '0.75rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>METHOD 4</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                From Carboxylic Acids (RCOOH) — 3 Distinct Pathways
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: '0 0 12px' }}>
              Carboxylic acids aur unke salts se alkanes banane ke 3 major routes hain:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              {/* Route (i): Soda Lime Decarboxylation */}
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0284c7', marginBottom: '4px' }}>
                  i) Heating with Soda Lime (Decarboxylation — 1 Carbon Less):
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                  Sodium salt of carboxylic acid ko <strong>Soda Lime (NaOH + CaO in 3:1)</strong> ke sath heat karne par parent acid se <strong>1 Carbon kam</strong> wala alkane milta hai:
                </p>
                <div style={{ background: 'var(--bg-card)', padding: '8px 12px', borderRadius: '6px', fontFamily: 'monospace', color: '#0284c7', fontSize: '0.88rem', marginBottom: '6px' }}>
                  RCOONa + NaOH ──(CaO / Δ)──&gt; RH (Alkane) + Na2CO3
                </div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.82rem', padding: '4px 8px' }}>
                  • CH3COONa (Sodium ethanoate, 2C) + NaOH ──(CaO / Δ)──&gt; CH4 (Methane, 1C) + Na2CO3<br />
                  • C2H5COONa (Sodium propanoate, 3C) + NaOH ──(CaO / Δ)──&gt; C2H6 (Ethane, 2C) + Na2CO3
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  💡 CaO ka kaam moisture absorb karna aur reaction mixture ko dry rakhna hai.
                </div>
              </div>

              {/* Route (ii): Reduction with Red P + HI */}
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0284c7', marginBottom: '4px' }}>
                  ii) Direct Reduction of Carboxylic Acid (Red P + 6 HI — Same Carbon Count):
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                  Carboxylic acid ko 6 equivalents HI ke sath Red Phosphorus (423 K) par heat karne par <strong>same number of carbon atoms</strong> wala alkane banta hai:
                </p>
                <div style={{ background: 'var(--bg-card)', padding: '8px 12px', borderRadius: '6px', fontFamily: 'monospace', color: '#0284c7', fontSize: '0.88rem', marginBottom: '6px' }}>
                  RCOOH + 6 HI ──(Red P / 423 K)──&gt; RCH3 + 3 I2 + 2 H2O
                </div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.82rem', padding: '4px 8px' }}>
                  e.g., CH3COOH (Acetic acid, 2C) + 6 HI ──&gt; CH3-CH3 (Ethane, 2C) + 3 I2 + 2 H2O
                </div>
              </div>

              {/* Route (iii): Kolbe's Electrolysis */}
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>
                  iii) Kolbe's Electrolysis (Higher Even Alkanes at Anode):
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                  Sodium ya Potassium carboxylate ke aqueous solution ka electrolysis karne par Anode par free radical dimerization se higher even-carbon alkane banta hai:
                </p>
                
                <div style={{ background: 'var(--bg-card)', padding: '10px 12px', borderRadius: '6px', marginBottom: '8px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f59e0b' }}>Step 1: Ionization in Aqueous Solution:</div>
                  <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.85rem' }}>
                    2 RCOONa ──(aq)──&gt; 2 RCOO⁻ (Anion) + 2 Na⁺ (Cation)
                  </div>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '10px 12px', borderRadius: '6px', marginBottom: '8px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f43f5e' }}>Step 2: At Anode (Oxidation &amp; Radical Coupling):</div>
                  <div style={{ fontFamily: 'monospace', color: '#10b981', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    2 RCOO⁻ ──&gt; 2 [RCOO•] + 2 e⁻ (Acetate radical formed)<br />
                    2 [RCOO•] ──&gt; 2 R• + 2 CO2 ↑ (Decarboxylation)<br />
                    R• + R• ──&gt; R-R (Higher Alkane gas evolved at Anode!)
                  </div>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '10px 12px', borderRadius: '6px', marginBottom: '8px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0284c7' }}>Step 3: At Cathode (Reduction of Water):</div>
                  <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.85rem' }}>
                    2 H2O + 2 e⁻ ──&gt; H2 ↑ (Hydrogen gas at Cathode) + 2 OH⁻<br />
                    2 Na⁺ + 2 OH⁻ ──&gt; 2 NaOH (Solution becomes alkaline / basic, pH &gt; 7)
                  </div>
                </div>

                <div style={{ background: 'var(--bg-card)', border: '1px solid #10b981', padding: '10px 12px', borderRadius: '6px', fontFamily: 'monospace', color: '#10b981', fontSize: '0.88rem', marginBottom: '8px' }}>
                  Overall: 2 CH3COONa + 2 H2O ──(Electrolysis)──&gt; CH3-CH3 (Ethane at Anode) + 2 CO2 (Anode) + H2 (Cathode) + 2 NaOH
                </div>

                <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', padding: '8px 12px', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  📌 <strong>Key Takeaway</strong>: Kolbe's Electrolysis se <strong>only even-carbon symmetrical alkanes</strong> ban sakte hain. Methane (CH4) cannot be prepared!
                </div>
              </div>

            </div>
          </div>

          {/* Chemical Properties: Free Radical Chlorination Mechanism */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#10b981', margin: '0 0 8px' }}>
              ⚡ Chemical Properties: 3-Step Free Radical Chlorination Mechanism
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0 0 12px' }}>
              Alkanes substitution reactions show karte hain. Methane + Chlorine diffused sunlight (hν) mein 3 steps mein react karte hain:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f59e0b', marginBottom: '4px' }}>1. Chain Initiation (शुरुआत)</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.85rem' }}>Cl-Cl ──(hν)──&gt; 2 Cl•</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px' }}>Sunlight se Cl2 ka homolytic fission hota hai aur do chlorine free radicals bante hain.</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0284c7', marginBottom: '4px' }}>2. Chain Propagation (प्रसार)</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.85rem' }}>CH4 + Cl• ──&gt; CH3• + HCl</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.85rem' }}>CH3• + Cl2 ──&gt; CH3Cl + Cl•</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px' }}>Chain continuously chalti rehti hai aur methyl radical banta hai.</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f43f5e', marginBottom: '4px' }}>3. Chain Termination (अंत)</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.85rem' }}>Cl• + Cl• ──&gt; Cl2</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.85rem' }}>CH3• + CH3• ──&gt; CH3-CH3</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px' }}>Free radicals aapas mein combine hokar chain ko khatam kar dete hain.</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <button
              onClick={() => onStartPractice('alkanes')}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.88rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Test Your Alkanes Knowledge (5 Questions) »
            </button>
          </div>

        </div>
      )}

      {/* ⚡ TAB 2: ALKENES */}
      {activeTab === 'alkenes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Saytzeff's Rule */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ background: '#f59e0b', color: '#000000', fontSize: '0.72rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>RULE 1</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Saytzeff's Rule (Zaitsev Rule) — Dehydrohalogenation
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: '0 0 10px' }}>
              Jab alkyl halide ko alcoholic KOH ke sath heat karte hain, toh woh alkene <strong>Major Product (80%)</strong> banta hai jiske double bond par zyada alkyl groups jude hon (more highly substituted alkene):
            </p>

            <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '12px', fontFamily: 'monospace', color: '#f59e0b', fontSize: '0.9rem' }}>
              CH3-CH2-CH(Br)-CH3 ──(alc. KOH)──&gt; CH3-CH=CH-CH3 (But-2-ene, 80% Major) + CH3-CH2-CH=CH2 (But-1-ene, 20% Minor)
            </div>
          </div>

          {/* Markovnikov vs Peroxide Effect */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0284c7', margin: '0 0 10px' }}>
              ⚔️ Markovnikov Addition vs. Anti-Markovnikov (Peroxide Effect)
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0284c7', marginBottom: '6px' }}>Normal Addition (Markovnikov)</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                  Negative part (Br⁻) us double-bonded carbon par jayega jiske paas <strong>kam hydrogen</strong> hain.
                </p>
                <div style={{ fontFamily: 'monospace', color: '#0284c7', fontSize: '0.84rem' }}>
                  CH3-CH=CH2 + HBr ──&gt; CH3-CH(Br)-CH3 (2-Bromopropane)
                </div>
              </div>

              <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f43f5e', marginBottom: '6px' }}>Peroxide Effect (Anti-Markovnikov)</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                  Kewal <strong>HBr + Organic Peroxide</strong> mein Br us carbon par jayega jiske paas <strong>zyada hydrogen</strong> hain.
                </p>
                <div style={{ fontFamily: 'monospace', color: '#f43f5e', fontSize: '0.84rem' }}>
                  CH3-CH=CH2 + HBr ──(Peroxide)──&gt; CH3-CH2-CH2Br (1-Bromopropane)
                </div>
              </div>
            </div>
          </div>

          {/* Ozonolysis - The Scissors */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Scissors size={20} color="#f59e0b" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Ozonolysis — "The Double Bond Scissors"
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0 0 10px' }}>
              O3 double bond ko kaat kar dono carbons par oxygen (=O) laga deta hai:
            </p>

            <div style={{ background: 'var(--bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '12px', fontFamily: 'monospace', color: '#f59e0b', fontSize: '0.9rem' }}>
              CH3-CH=CH2 ──(1. O3 / 2. Zn, H2O)──&gt; CH3CHO (Ethanal) + HCHO (Methanal)
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <button
              onClick={() => onStartPractice('alkenes')}
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.88rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Test Your Alkenes Knowledge (5 Questions) »
            </button>
          </div>

        </div>
      )}

      {/* 🔥 TAB 3: ALKYNES */}
      {activeTab === 'alkynes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Acidity of Terminal Alkynes */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f43f5e', margin: '0 0 8px' }}>
              🔥 Terminal Alkynes Acidic Kyun Hote Hain? (% s-character concept)
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: '0 0 12px' }}>
              Ethyne mein carbon <strong>sp hybridized</strong> hota hai jisme <strong>50% s-character</strong> hota hai (Ethane 25%, Ethene 33.3%). s-orbital nucleus ke bohot paas hota hai, isliye carbon C-H bond ke electron pair ko apni taraf kheench kar H⁺ aasaani se release kar deta hai!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0284c7', marginBottom: '4px' }}>1. Sodium Metal Test</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.82rem' }}>HC≡CH + 2Na ──&gt; Na⁺ ⁻C≡C⁻ Na⁺ + H2 ↑</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>2. Tollens Test (AgNO3)</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.82rem' }}>HC≡CH + 2 [Ag(NH3)2]⁺ ──&gt; Ag-C≡C-Ag ↓ (White ppt)</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f43f5e', marginBottom: '4px' }}>3. Cuprous Chloride (Cu2Cl2)</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-primary)', fontSize: '0.82rem' }}>HC≡CH + Cu2Cl2 ──&gt; Cu-C≡C-Cu ↓ (Red ppt)</div>
              </div>
            </div>
          </div>

          {/* Kucherov Hydration & Benzene Trimerization */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f43f5e', marginBottom: '6px' }}>Kucherov Hydration (HgSO4 / H2SO4)</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                Ethyne se Acetaldehyde banta hai; Propyne se Acetone banta hai:
              </p>
              <div style={{ fontFamily: 'monospace', color: '#f43f5e', fontSize: '0.82rem' }}>
                CH3-C≡CH + H2O ──(Hg²⁺/H⁺)──&gt; CH3-CO-CH3 (Propanone)
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#a855f7', marginBottom: '6px' }}>Cyclic Trimerisation to Benzene</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 8px' }}>
                3 Ethyne molecules Red Hot Iron Tube (873 K) mein Benzene banate hain:
              </p>
              <div style={{ fontFamily: 'monospace', color: '#a855f7', fontSize: '0.82rem' }}>
                3 CH≡CH ──(Red Hot Fe / 873 K)──&gt; C6H6 (Benzene)
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <button
              onClick={() => onStartPractice('alkynes')}
              style={{
                background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.88rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Test Your Alkynes Knowledge (5 Questions) »
            </button>
          </div>

        </div>
      )}

      {/* 👑 TAB 4: BENZENE & ARENES */}
      {activeTab === 'benzene' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Hückel's Rule */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Crown size={20} color="#a855f7" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Hückel's Rule of Aromaticity — (4n + 2)π Rule
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, margin: '0 0 10px' }}>
              Aromatic hone ke 4 golden criteria:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li><strong>1. Cyclic</strong> (Closed ring)</li>
              <li><strong>2. Planar</strong> (Flat, all carbons sp² hybridized with 120° bond angle)</li>
              <li><strong>3. Conjugated</strong> (Continuous overlap of p-orbitals)</li>
              <li><strong>4. (4n + 2)π delocalized electrons</strong>: Benzene (n=1 ⟹ 6π electrons)</li>
              <li><strong>Resonance Energy</strong>: Benzene has extraordinary stability of <strong>150.6 kJ/mol (36 kcal/mol)</strong>!</li>
            </ul>
          </div>

          {/* SEAr Table */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0284c7', margin: '0 0 10px' }}>
              ⚡ Electrophilic Aromatic Substitution (SEAr) Reactions
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10b981' }}>Nitration</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Reagent: conc. HNO3 + conc. H2SO4</div>
                <div style={{ fontFamily: 'monospace', color: '#10b981', fontSize: '0.82rem', marginTop: '4px' }}>Electrophile: NO2⁺ (Nitronium)</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f59e0b' }}>Friedel-Crafts Alkylation</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Reagent: CH3Cl + anh. AlCl3</div>
                <div style={{ fontFamily: 'monospace', color: '#f59e0b', fontSize: '0.82rem', marginTop: '4px' }}>Product: Toluene (C6H5CH3)</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#a855f7' }}>Friedel-Crafts Acylation</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Reagent: CH3COCl + anh. AlCl3</div>
                <div style={{ fontFamily: 'monospace', color: '#a855f7', fontSize: '0.82rem', marginTop: '4px' }}>Product: Acetophenone</div>
              </div>
            </div>
          </div>

          {/* Directive Influence */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#a855f7', margin: '0 0 8px' }}>
              🧭 Directive Influence of Functional Groups
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10b981' }}>Ortho/Para Directors (Activating)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>-OH, -NH2, -OCH3, -CH3, and Halogens (-Cl, -Br)</div>
              </div>
              <div style={{ background: 'var(--bg-hover)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #f43f5e' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f43f5e' }}>Meta Directors (Deactivating)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>-NO2, -CN, -CHO, -COOH, -SO3H</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <button
              onClick={() => onStartPractice('benzene')}
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.88rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Test Your Benzene Knowledge (5 Questions) »
            </button>
          </div>

        </div>
      )}

      {/* 🧪 TAB 5: DISTINCTION TABLE */}
      {activeTab === 'distinction' && (
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0284c7', margin: '0 0 12px' }}>
            🧪 Complete Chemical Distinction Matrix Table
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-hover)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '10px', color: '#0284c7' }}>Chemical Test</th>
                  <th style={{ padding: '10px', color: '#10b981' }}>Ethane (Alkane)</th>
                  <th style={{ padding: '10px', color: '#f59e0b' }}>Ethene (Alkene)</th>
                  <th style={{ padding: '10px', color: '#f43f5e' }}>Ethyne (Alkyne)</th>
                  <th style={{ padding: '10px', color: '#a855f7' }}>Benzene (Arene)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '10px', fontWeight: 700, color: 'var(--text-primary)' }}>Bromine Water (Br2/CCl4)</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No change</td>
                  <td style={{ padding: '10px', color: '#10b981', fontWeight: 700 }}>✅ Colourless</td>
                  <td style={{ padding: '10px', color: '#10b981', fontWeight: 700 }}>✅ Colourless</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No change</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '10px', fontWeight: 700, color: 'var(--text-primary)' }}>Baeyer's Reagent (alk. KMnO4)</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No change</td>
                  <td style={{ padding: '10px', color: '#10b981', fontWeight: 700 }}>✅ Purple to Colourless</td>
                  <td style={{ padding: '10px', color: '#10b981', fontWeight: 700 }}>✅ Purple to Colourless</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No change</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '10px', fontWeight: 700, color: 'var(--text-primary)' }}>Ammoniacal AgNO3 (Tollens)</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No ppt</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No ppt</td>
                  <td style={{ padding: '10px', color: '#f43f5e', fontWeight: 700 }}>✅ White ppt (Ag2C2)</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No ppt</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '10px', fontWeight: 700, color: 'var(--text-primary)' }}>Ammoniacal Cu2Cl2</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No ppt</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No ppt</td>
                  <td style={{ padding: '10px', color: '#f43f5e', fontWeight: 700 }}>✅ Red ppt (Cu2C2)</td>
                  <td style={{ padding: '10px', color: 'var(--text-muted)' }}>❌ No ppt</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', fontWeight: 700, color: 'var(--text-primary)' }}>Combustion / Flame Test</td>
                  <td style={{ padding: '10px', color: 'var(--text-secondary)' }}>Blue non-sooty</td>
                  <td style={{ padding: '10px', color: 'var(--text-secondary)' }}>Luminous</td>
                  <td style={{ padding: '10px', color: 'var(--text-secondary)' }}>Yellow luminous</td>
                  <td style={{ padding: '10px', color: '#a855f7', fontWeight: 700 }}>Heavy black sooty flame</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '1.5rem' }}>
            <button
              onClick={() => onStartPractice('all')}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.9rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Start Practice Mode (20 Questions) »
            </button>
            <button
              onClick={onStartExam}
              style={{
                background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.9rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Start Timed Exam Mode »
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
