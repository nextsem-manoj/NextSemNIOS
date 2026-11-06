import React, { useState } from 'react';
import {
  Sparkles,
  Printer,
  Maximize2,
  Volume2,
  CheckCircle2,
  Share2,
  ExternalLink,
  Calendar,
  Download
} from 'lucide-react';

interface KidsFoundationalWorksheetViewProps {
  onBack: () => void;
  onOpenClass?: (classNumber: number) => void;
  initialLevel?: 'nursery' | 'lkg' | 'ukg' | 'all';
}

export const KidsFoundationalWorksheetView: React.FC<KidsFoundationalWorksheetViewProps> = ({
  onBack,
  onOpenClass: _onOpenClass,
  initialLevel = 'all'
}) => {
  const [activeLevel, setActiveLevel] = useState<'nursery' | 'lkg' | 'ukg' | 'all'>(initialLevel);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    const url = window.location.origin + '/kids-kg';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.open('/kids-kg.html#print', '_blank');
  };

  const handleOpenFullscreen = () => {
    window.open('/kids-kg.html', '_blank');
  };

  return (
    <div className="min-h-screen bg-amber-50/50 dark:bg-[#070d1e] text-slate-800 dark:text-slate-100 transition-colors pb-16">
      
      {/* 1. TOP NAVBAR BREADCRUMBS (PERMANENT RULE) */}
      <div className="bg-white/95 dark:bg-[#0c1427]/95 border-b border-amber-200 dark:border-slate-800 sticky top-0 z-30 backdrop-blur-md px-4 sm:px-6 py-2.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Breadcrumb Navigation Trail */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
            <button
              onClick={onBack}
              className="hover:text-amber-600 dark:hover:text-amber-400 font-semibold flex items-center gap-1 transition-colors"
            >
              <span>🏠 Home</span>
            </button>
            <span>❯</span>
            <button
              onClick={onBack}
              className="hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors"
            >
              Classrooms &amp; Hubs
            </button>
            <span>❯</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">
              👶 Kids Foundational Hub (KG • Nursery)
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="/kids-1month-worksheets.html"
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
              title="Open 32-Day 1-Month Daily Worksheets"
            >
              <Calendar size={13} />
              <span className="hidden sm:inline">1-Month Daily Plan</span>
            </a>

            <button
              onClick={handleOpenFullscreen}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
              title="Open standalone fullscreen app"
            >
              <Maximize2 size={13} />
              <span className="hidden sm:inline">Fullscreen App</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
              title="Print A4 activity sheet"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print Sheet</span>
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              title="Share Worksheet Link"
            >
              {copiedLink ? <CheckCircle2 size={13} className="text-emerald-500" /> : <Share2 size={13} />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">

        {/* 2. PLAYFUL HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-400 via-pink-400 to-indigo-500 text-white p-6 sm:p-8 shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider text-amber-950">
                <span>🌟 Early Childhood Education • उम्र 3 से 7 वर्ष</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading">
                Kids Kingdom: Play, Learn &amp; Read! 🎈
              </h1>
              <p className="text-sm sm:text-base text-amber-50 leading-relaxed font-medium">
                Interactive foundational learning for toddlers, LKG, UKG and Class 1! Tap cards to hear crystal-clear audio phonics, count colourful playful objects, read 3-letter sight words, master Hindi Swar &amp; Vyanjan, and practice letter tracing on the digital chalkboard.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <span className="px-2.5 py-1 rounded-lg bg-black/20 text-xs font-bold flex items-center gap-1">
                  <Volume2 size={14} className="text-amber-200" /> Phonics Audio Speech
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/20 text-xs font-bold flex items-center gap-1">
                  <Sparkles size={14} className="text-amber-200" /> Star Confetti Rewards
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/20 text-xs font-bold flex items-center gap-1">
                  <Printer size={14} className="text-amber-200" /> Printable Worksheets
                </span>
              </div>
            </div>

            {/* Mascot Buddy Card */}
            <div className="bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 p-4 rounded-3xl shadow-2xl border-4 border-amber-300 dark:border-amber-500/30 flex flex-col items-center text-center max-w-[220px]">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-300 to-rose-300 flex items-center justify-center text-4xl shadow-inner mb-2 animate-bounce">
                🦁
              </div>
              <span className="font-extrabold text-sm text-amber-600 dark:text-amber-400">Sheru Mascot</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                "Welcome to the fun playground! Let's play and learn together!"
              </p>
              <button
                onClick={handleOpenFullscreen}
                className="mt-3 w-full py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition-transform hover:scale-105"
              >
                Start Learning 🚀
              </button>
            </div>
          </div>
        </div>

        {/* 2.2 INTERACTIVE KG CLASS LEVEL SWITCHER (NURSERY, LKG, UKG) */}
        <div className="bg-white/95 dark:bg-slate-900/95 border-2 border-amber-300 dark:border-amber-500/30 rounded-2xl p-3 sm:p-4 shadow-md space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🧸</span>
              <div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                  KG Class Level Selector (उम्र के अनुसार चुनें)
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                  Select your child's age group to inspect level-specific learning targets
                </span>
              </div>
            </div>

            {/* Level Filter Buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', label: '🌟 All Kindergarten', sub: 'उम्र 3–6' },
                { id: 'nursery', label: '🍼 Nursery (Balvatika 1)', sub: 'उम्र 3–4' },
                { id: 'lkg', label: '🎨 LKG (Balvatika 2)', sub: 'उम्र 4–5' },
                { id: 'ukg', label: '🚀 UKG (Balvatika 3)', sub: 'उम्र 5–6' }
              ].map((lvl) => {
                const isSelected = activeLevel === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setActiveLevel(lvl.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md scale-105'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>{lvl.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Level Specific Focus Strip */}
          <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 text-xs">
            {activeLevel === 'nursery' && (
              <div className="flex items-center justify-between gap-2 flex-wrap text-slate-700 dark:text-slate-300">
                <span className="font-bold text-rose-600 dark:text-rose-400">🍼 Nursery (Balvatika 1 • उम्र 3–4 वर्ष):</span>
                <span>Pre-writing finger tracing lines, letter sounds discovery, rhymes, primary colors &amp; motor skills play.</span>
                <span className="font-extrabold text-amber-600 dark:text-amber-400">Target: Sensory &amp; Sound Joy</span>
              </div>
            )}
            {activeLevel === 'lkg' && (
              <div className="flex items-center justify-between gap-2 flex-wrap text-slate-700 dark:text-slate-300">
                <span className="font-bold text-amber-600 dark:text-amber-400">🎨 LKG (Balvatika 2 • उम्र 4–5 वर्ष):</span>
                <span>Alphabet A–Z audio phonics, numbers 1–10 visual counting sense, हिंदी स्वर (अ से अः) &amp; picture matching.</span>
                <span className="font-extrabold text-amber-600 dark:text-amber-400">Target: Phonics &amp; Quantity Sense</span>
              </div>
            )}
            {activeLevel === 'ukg' && (
              <div className="flex items-center justify-between gap-2 flex-wrap text-slate-700 dark:text-slate-300">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">🚀 UKG (Balvatika 3 • उम्र 5–6 वर्ष):</span>
                <span>3-Letter CVC sight words (cat, dog, pen), numbers 1–20, हिंदी व्यंजन (क से ज्ञ) &amp; rainbow chalkboard tracing.</span>
                <span className="font-extrabold text-amber-600 dark:text-amber-400">Target: Sight Words &amp; School Readiness</span>
              </div>
            )}
            {activeLevel === 'all' && (
              <div className="flex items-center justify-between gap-2 flex-wrap text-slate-700 dark:text-slate-300">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">🌟 All Kindergarten (उम्र 3–6 वर्ष):</span>
                <span>Complete NEP 2020 Foundational Stage ecosystem covering Nursery, LKG &amp; UKG with speech phonics &amp; 32-day plan.</span>
                <span className="font-extrabold text-amber-600 dark:text-amber-400">32 Days • 3 Subjects • Verified PDFs</span>
              </div>
            )}
          </div>
        </div>

        {/* 2.5 1-MONTH DAILY WORKSHEET (23 OCT - 23 NOV 2026) DOWNLOAD HUB */}
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-white via-amber-50/40 to-pink-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-[#0f172a] border-3 border-amber-300 dark:border-amber-500/30 shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200 dark:border-slate-700 pb-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 font-extrabold text-[10px] uppercase tracking-wider mb-1">
                📅 1-MONTH DAILY CURRICULUM
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-heading">
                32-Day Foundational Subject Workbooks (23 Oct to 23 Nov 2026)
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Download verified 6-page A4 PDF workbooks or practice day-by-day with interactive audio &amp; tracing lines!
              </p>
            </div>

            <a
              href="/kids-1month-worksheets.html"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-pink-500 to-indigo-500 text-white font-bold text-xs shadow-md flex items-center gap-1.5 hover:scale-105 transition-all flex-shrink-0"
            >
              <Calendar size={13} />
              <span>Open 32-Day Sheet Viewer 🚀</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* English PDF Download Card */}
            <div className="p-4 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/20 border-2 border-cyan-300 dark:border-cyan-800 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔤</span>
                  <div>
                    <h3 className="font-bold text-sm text-cyan-900 dark:text-cyan-200">English 1-Month PDF</h3>
                    <span className="text-[10px] text-cyan-700 dark:text-cyan-300 font-medium">32 Days • A-Z, Phonics &amp; Sight Words</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Letters A to Z, phonics chants, 3-letter sight words, weekly milestones &amp; completion star certificate.
                </p>
              </div>

              <a
                href="/pdf/kids/English_1Month_Worksheet_23Oct_to_23Nov_2026.pdf"
                download="English_1Month_Worksheet_23Oct_to_23Nov_2026.pdf"
                className="w-full py-2 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-transform hover:scale-105"
              >
                <Download size={13} />
                <span>Download English PDF (6 Pages)</span>
              </a>
            </div>

            {/* Maths PDF Download Card */}
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔢</span>
                  <div>
                    <h3 className="font-bold text-sm text-amber-900 dark:text-amber-200">Maths 1-Month PDF</h3>
                    <span className="text-[10px] text-amber-700 dark:text-amber-300 font-medium">32 Days • Numbers 1-20 &amp; Shapes</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Numbers 1 to 20, visual counting sense, 2D shapes, primary colors, and Junior Maths Champion Certificate.
                </p>
              </div>

              <a
                href="/pdf/kids/Maths_1Month_Worksheet_23Oct_to_23Nov_2026.pdf"
                download="Maths_1Month_Worksheet_23Oct_to_23Nov_2026.pdf"
                className="w-full py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-transform hover:scale-105"
              >
                <Download size={13} />
                <span>Download Maths PDF (6 Pages)</span>
              </a>
            </div>

            {/* Hindi PDF Download Card */}
            <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-800 flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇮🇳</span>
                  <div>
                    <h3 className="font-bold text-sm text-rose-900 dark:text-rose-200">हिंदी वर्णमाला 1-Month PDF</h3>
                    <span className="text-[10px] text-rose-700 dark:text-rose-300 font-medium">32 Days • स्वर, व्यंजन व सरल शब्द</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  स्वर (अ-अः), व्यंजन (क-म), 2 व 3 अक्षर वाले आसान शब्द (घर, जल, कमल) व बाल वीर प्रमाण-पत्र।
                </p>
              </div>

              <a
                href="/pdf/kids/Hindi_1Month_Worksheet_23Oct_to_23Nov_2026.pdf"
                download="Hindi_1Month_Worksheet_23Oct_to_23Nov_2026.pdf"
                className="w-full py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-transform hover:scale-105"
              >
                <Download size={13} />
                <span>Download Hindi PDF (6 Pages)</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. FOUR FOUNDATIONAL PILLARS OVERVIEW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Pillar 1: English */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-cyan-300 dark:border-cyan-500/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xl font-bold mb-3">
                🔤
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">English Alphabets &amp; Words</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                26 Phonics Flashcards (A-Z) with real speech, 18 3-letter CVC sight words (Cat, Sun, Pen), and Letter Sound Quiz.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-cyan-600 dark:text-cyan-400">
              <span>26 Letters + Words</span>
              <span>🔊 Voice Guided</span>
            </div>
          </div>

          {/* Pillar 2: Maths */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-amber-300 dark:border-amber-500/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl font-bold mb-3">
                🔢
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Maths &amp; Counting Fun</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Numbers 1 to 20 with countable visual items, interactive "How Many?" randomized game, 2D shapes, and primary colors.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
              <span>Numbers 1-20</span>
              <span>🎯 How Many? Game</span>
            </div>
          </div>

          {/* Pillar 3: Hindi */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-rose-300 dark:border-rose-500/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xl font-bold mb-3">
                🇮🇳
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">हिंदी वर्णमाला व शब्द</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                स्वर (अ से अः), मुख्य व्यंजन (क से ज्ञ), 2 व 3 अक्षर वाले आसान शब्द (घर, जल, कमल), और हिंदी ध्वनि पहचान क्विज।
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-rose-600 dark:text-rose-400">
              <span>स्वर + व्यंजन</span>
              <span>📚 2-3 अक्षर शब्द</span>
            </div>
          </div>

          {/* Pillar 4: Tracing Pad */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-purple-300 dark:border-purple-500/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl font-bold mb-3">
                ✏️
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Magic Chalk Tracing Pad</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Digital blackboard with rainbow chalk, letter templates (A, B, C, 1, 2, 3, अ, क), undo and clear buttons for motor skills.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400">
              <span>Rainbow Chalk</span>
              <span>🎨 Tracing Motor Skills</span>
            </div>
          </div>

        </div>

        {/* 4. EMBEDDED INTERACTIVE APP FRAME */}
        <div className="rounded-3xl overflow-hidden border-4 border-amber-300 dark:border-amber-500/30 bg-white dark:bg-slate-900 shadow-2xl">
          
          {/* Header of the embed container */}
          <div className="bg-amber-100/90 dark:bg-slate-800 px-4 py-3 border-b border-amber-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 ml-1">
                Live Interactive Worksheet Screen
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/kids-kg.html"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 text-xs font-bold flex items-center gap-1.5 hover:bg-amber-500 hover:text-white transition-all shadow-sm"
              >
                <ExternalLink size={12} />
                <span>Open in New Tab</span>
              </a>
              <button
                onClick={handlePrint}
                className="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Printer size={12} />
                <span>Print Worksheet</span>
              </button>
            </div>
          </div>

          {/* Responsive Iframe Container */}
          <div className="relative w-full h-[850px] sm:h-[900px] bg-slate-50 dark:bg-slate-950">
            <iframe
              src="/kids-kg.html"
              title="Kids Foundational Interactive Worksheet"
              className="w-full h-full border-0"
              allow="autoplay; microphone; clipboard-write"
              loading="lazy"
            />
          </div>
        </div>

        {/* 5. PARENTS & TEACHERS GUIDE NOTES */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Parents &amp; Teachers Quick Activity Guide (अभिभावक व शिक्षक मार्गदर्शिका)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Recommended 15-minute daily playful routine for 3 to 7-year-olds
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/40 space-y-1.5">
              <h4 className="font-bold text-cyan-800 dark:text-cyan-300">Day 1-2: Phonics &amp; Sound Discovery</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Let your child tap each letter card. Encourage them to repeat: "A says Ah, Apple!", "B says Buh, Ball!". Tap the Sound Quiz button to test their recall.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 space-y-1.5">
              <h4 className="font-bold text-amber-800 dark:text-amber-300">Day 3-4: Counting &amp; Quantity Sense</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Play the "How Many?" game. Count the cute toys or fruits together out loud. When they select the right number, applaud the celebratory star bursts!
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 space-y-1.5">
              <h4 className="font-bold text-rose-800 dark:text-rose-300">Day 5: Hindi Varnamala &amp; Chalk Tracing</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Practice identifying Hindi vowels (अ, आ, इ, ई) and simple consonants (क, ख, ग). Switch to the Magic Chalk Pad to practice finger and stylus letter drawing.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
