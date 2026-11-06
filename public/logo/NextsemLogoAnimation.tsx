"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NextsemLogoAnimationProps {
  /**
   * Mode: "header" for compact auto-running header logo (default),
   * "intro" for full-width showcase.
   */
  mode?: "header" | "intro";
  href?: string;
  showControls?: boolean;
}

export default function NextsemLogoAnimation({
  mode = "header",
  href = "/",
}: NextsemLogoAnimationProps) {
  const [animStep, setAnimStep] = useState<number>(0);
  const [isFinalLocked, setIsFinalLocked] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [replayKey, setReplayKey] = useState<number>(0);

  const runSequence = () => {
    setAnimStep(0);
    setIsFinalLocked(false);
    setReplayKey((prev) => prev + 1);

    const delay = 160;

    // Step 1 to 7: Trace Nextsem (N ➔ e ➔ x ➔ t ➔ s ➔ e ➔ m)
    for (let i = 1; i <= 7; i++) {
      setTimeout(() => setAnimStep(i), delay * i);
    }

    // Step 8 (1.5s): Collapse/Fade out ext & em, locking into NS emblem!
    setTimeout(() => {
      setIsFinalLocked(true);
    }, delay * 8.5);
  };

  useEffect(() => {
    runSequence();
  }, []);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
      runSequence();
      setTimeout(() => setIsHovered(false), 1800);
    }
  };

  if (mode === "header") {
    return (
      <Link
        href={href}
        onMouseEnter={handleMouseEnter}
        className="inline-flex items-center gap-2 select-none group cursor-pointer"
        title="Nextsem (NS) - Free Full Stack Bootcamp"
      >
        <div key={replayKey} className="relative h-9 flex items-center">
          {/* WHEN LOCKED: Show sleek NS Logo Emblem */}
          {isFinalLocked ? (
            <div className="flex items-center gap-1.5 transition-all duration-500 animate-scale-in">
              <div className="h-8 px-2.5 rounded-lg bg-[#0c1328] border border-[#04AA6D]/50 flex items-center justify-center shadow-[0_0_15px_rgba(4,170,109,0.4)] group-hover:border-[#04AA6D]">
                <svg viewBox="0 0 160 110" className="h-6 w-auto overflow-visible">
                  {/* BOLD N (Green) */}
                  <path
                    d="M 15 95 V 15 L 65 95 V 15"
                    fill="none"
                    stroke="#04AA6D"
                    strokeWidth="22"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* BOLD S (White) */}
                  <path
                    d="M 145 32 C 145 15, 95 15, 95 38 C 95 60, 145 60, 145 82 C 145 95, 95 95, 95 82"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="22"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-[#04AA6D] transition-colors hidden xs:inline">
                Nextsem
              </span>
            </div>
          ) : (
            /* ANIMATION SEQUENCE (N ➔ e ➔ x ➔ t ➔ s ➔ e ➔ m) */
            <svg
              viewBox="0 0 540 130"
              className="h-8 sm:h-9 w-auto overflow-visible drop-shadow-[0_0_20px_rgba(4,170,109,0.5)] transition-all duration-300"
            >
              {/* 1. N */}
              <g className={`transition-all duration-300 ${animStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
                <path d="M 20 115 V 15 L 75 115 V 15" fill="none" stroke="#04AA6D" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* 2. e */}
              <g transform="translate(100, 0)" className={`transition-all duration-300 ${animStep >= 2 ? "opacity-100" : "opacity-0"}`}>
                <path d="M 15 78 H 60 C 60 48, 15 48, 15 78 C 15 115, 60 115, 65 98" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
              </g>

              {/* 3. x */}
              <g transform="translate(175, 0)" className={`transition-all duration-300 ${animStep >= 3 ? "opacity-100" : "opacity-0"}`}>
                <path d="M 15 50 L 60 115 M 60 50 L 15 115" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
              </g>

              {/* 4. t */}
              <g transform="translate(250, 0)" className={`transition-all duration-300 ${animStep >= 4 ? "opacity-100" : "opacity-0"}`}>
                <path d="M 15 62 H 60 M 37 35 V 102 C 37 115, 55 115, 62 110" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
              </g>

              {/* 5. s */}
              <g transform="translate(325, 0)" className={`transition-all duration-300 ${animStep >= 5 ? "opacity-100" : "opacity-0"}`}>
                <path d="M 55 62 C 55 50, 15 50, 15 66 C 15 84, 55 84, 55 100 C 55 115, 15 115, 15 102" fill="none" stroke="#04AA6D" strokeWidth="16" strokeLinecap="round" />
              </g>

              {/* 6. e */}
              <g transform="translate(400, 0)" className={`transition-all duration-300 ${animStep >= 6 ? "opacity-100" : "opacity-0"}`}>
                <path d="M 15 78 H 60 C 60 48, 15 48, 15 78 C 15 115, 60 115, 65 98" fill="none" stroke="#04AA6D" strokeWidth="16" strokeLinecap="round" />
              </g>

              {/* 7. m */}
              <g transform="translate(475, 0)" className={`transition-all duration-300 ${animStep >= 7 ? "opacity-100" : "opacity-0"}`}>
                <path d="M 10 115 V 50 M 10 70 C 10 50, 42 50, 42 70 V 115 M 42 70 C 42 50, 74 50, 74 70 V 115" fill="none" stroke="#04AA6D" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          )}
        </div>

        {/* Version Badge */}
        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-1.5 py-0.5 rounded-md font-black font-mono">
          v29
        </span>
      </Link>
    );
  }

  // Full Showcase Mode
  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="relative w-full min-h-[420px] py-10 bg-[#17181c] border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center overflow-hidden shadow-2xl group cursor-pointer"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#04AA6D]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Pill Badge */}
      <div className="z-10 mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c1328] border border-[#04AA6D]/40 text-[#04AA6D] text-xs font-mono font-bold tracking-widest uppercase shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-ping" />
        <span>Nextsem Animation ➔ Final NS Logo Badge Lock</span>
      </div>

      {/* Main Display Stage */}
      <div key={replayKey} className="z-10 flex flex-col items-center justify-center my-2">
        {isFinalLocked ? (
          <div className="flex flex-col items-center gap-4 animate-scale-in">
            {/* LOCKED NS EMBLEM */}
            <div className="px-6 py-4 bg-[#0c1328] border-2 border-[#04AA6D] rounded-2xl shadow-[0_0_35px_rgba(4,170,109,0.5)]">
              <svg viewBox="0 0 180 120" className="w-[180px] sm:w-[240px] h-auto">
                {/* BOLD N (Green) */}
                <path d="M 20 100 V 20 L 75 100 V 20" fill="none" stroke="#04AA6D" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
                {/* BOLD S (White) */}
                <path d="M 160 38 C 160 20, 105 20, 105 44 C 105 68, 160 68, 160 92 C 160 106, 105 106, 105 92" fill="none" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-mono font-black text-white tracking-widest uppercase">
              FINAL LOGO BADGE: <span className="text-[#04AA6D]">NS</span>
            </span>
          </div>
        ) : (
          <svg viewBox="0 0 560 140" className="w-[320px] sm:w-[500px] md:w-[560px] h-auto overflow-visible">
            <g className={`transition-all duration-300 ${animStep >= 1 ? "opacity-100" : "opacity-0"}`}>
              <path d="M 20 115 V 15 L 75 115 V 15" fill="none" stroke="#04AA6D" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g transform="translate(100, 0)" className={`transition-all duration-300 ${animStep >= 2 ? "opacity-100" : "opacity-0"}`}>
              <path d="M 15 78 H 60 C 60 48, 15 48, 15 78 C 15 115, 60 115, 65 98" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
            </g>
            <g transform="translate(175, 0)" className={`transition-all duration-300 ${animStep >= 3 ? "opacity-100" : "opacity-0"}`}>
              <path d="M 15 50 L 60 115 M 60 50 L 15 115" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
            </g>
            <g transform="translate(250, 0)" className={`transition-all duration-300 ${animStep >= 4 ? "opacity-100" : "opacity-0"}`}>
              <path d="M 15 62 H 60 M 37 35 V 102 C 37 115, 55 115, 62 110" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
            </g>
            <g transform="translate(325, 0)" className={`transition-all duration-300 ${animStep >= 5 ? "opacity-100" : "opacity-0"}`}>
              <path d="M 55 62 C 55 50, 15 50, 15 66 C 15 84, 55 84, 55 100 C 55 115, 15 115, 15 102" fill="none" stroke="#04AA6D" strokeWidth="16" strokeLinecap="round" />
            </g>
            <g transform="translate(400, 0)" className={`transition-all duration-300 ${animStep >= 6 ? "opacity-100" : "opacity-0"}`}>
              <path d="M 15 78 H 60 C 60 48, 15 48, 15 78 C 15 115, 60 115, 65 98" fill="none" stroke="#04AA6D" strokeWidth="16" strokeLinecap="round" />
            </g>
            <g transform="translate(475, 0)" className={`transition-all duration-300 ${animStep >= 7 ? "opacity-100" : "opacity-0"}`}>
              <path d="M 10 115 V 50 M 10 70 C 10 50, 42 50, 42 70 V 115 M 42 70 C 42 50, 74 50, 74 70 V 115" fill="none" stroke="#04AA6D" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        )}
      </div>

      {/* Subtitle */}
      <div className="z-10 mt-6 text-center">
        <h2 className="text-3xl font-black text-white tracking-widest font-mono">
          <span className="text-4xl text-[#04AA6D] font-black">N</span>ext<span className="text-[#04AA6D]">sem</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 font-mono">
          Code Free. Build Anything. <span className="text-[#04AA6D] underline decoration-[#04AA6D]">Zero Paywalls.</span>
        </p>
      </div>

      <style jsx global>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scaleIn 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>
    </div>
  );
}
