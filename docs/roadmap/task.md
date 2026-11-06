# 🚀 Nextsem StudyGuide — NCERT & NIOS Learning Platform Roadmap

> **Nextsem EdTech Ecosystem Master Roadmap**
> **Mission**: Build India's most student-friendly, fast, and comprehensive **NCERT & NIOS Textbook, Solutions, Question Bank & Interactive Learning Platform** for Classes 1 to 12. Aligned 100% with **NEP 2020 & NCF**, optimized for responsive web, PWA, and Android app with Google AdMob.
> **Author & Lead**: Er. Manoj Kumar

---

## 📌 Active Status & Immediate Next Step
- **Current Milestone**: Phase 3 — Comprehensive Bilingual Question Banks & In-App Practice Studios
- **Classes Covered**: Class 1 to Class 12 + NIOS Senior Secondary (Chemistry 313, Mathematics, etc.)
- **Active Endpoints**:
  - 🌐 Live Firebase Hosting: https://nextsem-ncert-2403.web.app
  - 🌐 Live Vercel Mirror: https://ncert-alpha.vercel.app
  - 💻 Local Dev Server: http://localhost:3002
  - 📱 Local PC Network IP: http://192.168.29.170:3002
- **Immediate Next Step (Auto-Suggest for Antigravity IDE)**:
  👉 **Expand Chapter-Specific Question Banks**: Generate and integrate line-by-line bilingual MCQs, HOTS, and numerical studios for high-demand Class 12 Physics & Chemistry chapters directly embedded under the in-app chapter PDF reader.

---

## 🏗️ Core Strategic Pillars & Progress

### 🟩 Phase 1: Core Textbook Reader & Cloud Access (COMPLETED ✅)
- `[x]` Comprehensive curriculum catalog for Classes 1 to 12 across Science, Commerce, Humanities, and Primary stages.
- `[x]` Authentic NCERT 3D book cover identification system (`keac1`, `keac2`, `lemh1`, `leph1`, etc.).
- `[x]` Direct official NCERT CDN links (`https://ncert.nic.in/textbook/pdf/...`).
- `[x]` Direct Google Drive Cloud PDF access (`https://drive.google.com/drive/folders/1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4`).
- `[x]` High-performance in-app PDF Reader (`PdfReaderView.tsx`) with dark mode, full-screen, zoom, and marked PDF synchronization.
- `[x]` Complete desktop top navbar breadcrumb navigation trail (`Home ❯ Class ❯ Subject ❯ Book ❯ Chapter`).
- `[x]` Clean front-page gateway architecture (Books & Solutions + NIOS Textbooks entry cards).

### 🟦 Phase 2: Interactive Numerical Studios & Competency Labs (COMPLETED ✅)
- `[x]` Class 12 Physics Ch 1 (All 14 Derivations Studio with CBSE rubrics).
- `[x]` Class 12 Physics Ch 2 (All 18 Derivations Studio with vector diagrams).
- `[x]` Class 9 Maths Ch 5 Euclid Geometry & Circle Theorems Interactive Lab (12 Theorem proofs).
- `[x]` Class 11 T.S. Grewal Two-Column Cash Book Interactive Studio with T-shape account format.
- `[x]` Class 11 Economics Statistics Ch 1–4 Mega Test (30 high-yield competency questions).
- `[x]` Class 12 & 11 History Bhakti–Sufi & Mongols Competency Test with dynamic option shuffling.
- `[x]` NIOS Chemistry 313 Lesson 26 Hydrocarbons Competency Test (20 questions).
- `[x]` Class 6 Mathematics Ganita Prakash Data Handling Interactive Workbook.

### 🟨 Phase 3: Bilingual Question Banks & In-App Practice (IN PROGRESS 🔄)
- `[x]` Bilingual language toggle (English / हिंदी / Bilingual) standard across question suites.
- `[x]` Integration of chapter notes and MCQs directly under in-app chapter PDF view (`PdfReaderView.tsx`).
- `[ ]` Batch generation of Class 10 & 12 Board Exam competency question banks with NEP tags.
- `[ ]` Step-by-step NCERT textbook exercise solutions linked chapter-by-chapter.
- `[ ]` Fill-in-the-blanks interactive pill-selection mode for conceptual reinforcement.

### 🟪 Phase 4: Android App & Offline Experience (IN PROGRESS 🔄)
- `[x]` Capacitor 8 setup for Android (`@capacitor/android`, `@capacitor/core`).
- `[x]` Responsive mobile bottom navigation bar (`MobileBottomNav.tsx`) with theme toggle.
- `[x]` AdMob non-blocking integration architecture (no interstitial blockers on educational downloads).
- `[ ]` Offline caching service worker for recently viewed chapters and notes.
- `[ ]` Google Play Console internal testing release preparation.

### 🟧 Phase 5: Student Personalization, Auth & Middle School Portal (IN PROGRESS 🔄)
- `[x]` Google Stitch design system integration (Project `7911947677603152331`) for Middle School Student Portal (`public/middle-school-doubt-diagnostic-studio.html`).
- `[x]` Genuine Firebase Google OAuth integration (`nextsem-ncert-2403`) with 0ms instant local hydration (`nextsem_student_auth`).
- `[x]` Clean 2-state interface: Login Hero Screen vs Student Dashboard with Classes 6th, 7th & 8th + Mathematics & Science enrollment.
- `[x]` Client-side bookmarks persistence (`BookmarksModal.tsx`).
- `[x]` Dedicated Nextsem Academy Classes & Curriculum Hub (`NextsemAcademyClassesView.tsx`) with pedagogical stage filters (Foundational, Preparatory, Middle, Secondary, Senior Secondary), live search, subject code tags (`keac1`, `leph1`, `jemh1`, etc.), and interactive studio launchers.
- `[x]` WordPress-Style Graphical Day & Time Lesson Planner CMS (`AcademyScheduleBuilderView.tsx`) enabling visual add/edit/duplicate/delete of daily schedule slots, time intervals, subjects, lessons, quizzes, tests, and labs with 0ms `localStorage` persistence, JSON export/import, and student timetable view.
- `[x]` NCERT Classes Curriculum 1-Click Chapter Selector (`https://ncert-alpha.vercel.app/?view=classes` integration) auto-populating lesson titles, subjects, learning objectives, and official PDF links for Classes 1–12 and BCA Semesters 1–6.
- `[x]` Multi-Month Day-wise Interactive Calendar Scheduling for all 9 Academic Months (**April 2026 to December 2026**) with dynamic weekday calculations, prev/next month controls, jump selector, month pill tabs, day-wise slot inspection, and auto-synchronized 3–4 PM Mon–Fri regular lessons, Saturday tests, and Sunday leaves.
- `[ ]` Scoped student progress persistence and chapter completion badges.
- `[ ]` Daily practice streak counter and study time tracking.
- `[ ]` Downloadable bilingual PDF summary revision sheets.

---

## 📜 Key Architectural Standards & Directives
1. **Verbatim Preservation**: User original inputs in markdown documentation must never be deleted or modified.
2. **Clean Front Page**: Interactive labs and tests belong under their respective chapter PDF views, never cluttered on the home page.
3. **Dual URL Verification**: Always provide both `http://localhost:3002/` and `http://192.168.29.170:3002/`.
4. **Bilingual Requirement**: All new question banks and worksheets must provide English and Hindi translations.
5. **Non-Interactive Deploy**: Deployments execute non-interactively to Firebase Hosting project `nextsem-ncert-2403`.
