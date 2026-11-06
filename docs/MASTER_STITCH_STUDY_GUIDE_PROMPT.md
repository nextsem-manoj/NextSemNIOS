# 🎓 MASTER STITCH AI DESIGN PROMPT: StudyGuide by Nextsem

## 💬 User Original Inputs & Notes (Verbatim)
- "make front page with a matrix of images to select from ncert books ncert notes nios books nios notes such that everything is inside a single window"
- "make a single prompt to design all layouts of our app with our theme colours as of nextsem.online so that i cn give it to stitch and through mcp server you can access it and work on it"
- "and make a promt to make our app similar to these screenshots not exactly but matching to it"
- "i prefer this log but add study guide in large font size and keep NS as it is but insmall fonts"
- "use this as final logo and add this inside the promt"

---

## 🌟 Official Brand Logo & Visual Emblem

![StudyGuide by Nextsem Final Official Logo](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/docs/logo/study_guide_single_line_1788514685899.jpg)

### Logo Visual Specifications:
- **Frame:** Rounded obsidian slate squircle with frosted glassmorphism edge lighting and soft outer drop glow.
- **Header Element:** Compact isometric neon green (`#00e676` / `#04AA6D`) interconnected 'NS' ribbon monogram with small clean 'NextSem' typography underneath.
- **Primary Centerpiece:** **STUDY GUIDE** in prominent, bold, high-contrast crisp white (`#ffffff`) modern sans-serif typography.
- **Luminescent Divider:** Vibrant horizontal neon cyan/emerald glowing divider line (`#00dce6` / `#00e676`).
- **Curriculum Sub-Badge:** Pill badge reading `NCERT & NIOS` in dark slate with subtle cyan rim.

---

## 📋 Master Copy-Paste Prompt for Stitch AI & Frontend Agents

```markdown
# 🚀 PROMPT: Design NextSem Study Guide (NCERT & NIOS Academic Suite)

## 1. BRAND IDENTITY & THEME SPECIFICATIONS
- **Application Name:** StudyGuide by Nextsem
- **Official Brand Logo:** Squircle emblem with compact isometric neon green (#00e676 / #04AA6D) 'NS' ribbon monogram at the top, followed by prominent large bold white 'STUDY GUIDE' typography in the center, and a bottom pill badge 'NCERT & NIOS'.
- **Theme Palette (Obsidian Scholar & NextSem Green):**
  - Void Canvas Base: `#051424`
  - Sunken Well / Inputs: `#010f1f`
  - Elevated Glass Cards: `#0d1c2d` (Hover: `#122131`)
  - Primary Brand Green: `#04AA6D` / `#00e676` (Primary action buttons, verified solution badges)
  - Electric Cyan: `#00dce6` / `#38bdf8` (Live sync links, KaTeX formula callouts, active tabs)
  - Axiom Gold: `#fbbf24` / `#f59e0b` (Exemplar tags, revision highlights, important theorems)
- **Typography:**
  - Display & Section Titles: Space Grotesk (700 / 600 weight)
  - Body Prose & Textbook Reading: Manrope / Inter (400 / 500 weight)
  - Mathematical Steps, Page Counters & Monospace Meta: JetBrains Mono (500 / 600 weight)
- **Desktop Breadcrumb Navigation Rule (Mandatory):**
  On all desktop screens (≥ 1024px), render the complete interactive breadcrumb trail in the top header bar from Home to active chapter: `Home ❯ Class 12 ❯ Mathematics ❯ Part-I (XII) ❯ Ch 1: Relations & Functions`. Every ancestor node must be clickable.

---

## 2. APPLICATION WORKFLOW & 5 CORE SCREENS

### SCREEN 1: Main Category Hub & Visual Matrix
- **Header:** Top glass bar with official 'StudyGuide by Nextsem' logo on the left, Google Drive Cloud Sync status pill (`Drive: Connected`), Search trigger, Notification bell, and Profile avatar.
- **Hero & Search:** Fast search bar with keyboard shortcut (`Ctrl + K`) for 2,400+ NCERT & NIOS chapters.
- **Category Matrix (2-Column Grid on Mobile, 4-Column on Desktop):**
  1. **NCERT Books (English Medium):** Stack of books icon, badge 'Classes 1–12', instant PDF access.
  2. **NCERT पुस्तकें (हिंदी माध्यम):** Open Hindi book icon, badge 'कक्षा 1–12', complete Hindi textbooks.
  3. **NCERT Solutions & Dual-Pane:** Lightbulb & notepad icon, badge 'Step-by-Step KaTeX', split-screen solver.
  4. **Formula Vault & Revision Notes:** Clipboard & checklist icon, badge 'High Yield Notes', formula cards.
  5. **Video Lectures & Experiments:** Video player icon, badge 'Curated Video Lessons', concept animations.
  6. **CBSE & NIOS Board Papers:** Official question paper & pencil icon, badge 'Solved PYQs (2018–2026)'.
- **Fast-Track Class Strip:** Quick pills for Class 12, Class 11, Class 10, Class 9, and Classes 1–8.

---

### SCREEN 2: Class / Standard Selector
- **Header:** Back arrow `←` to Home Hub, Title: *"Explore NCERT Textbooks"* with subtitle *"Select Your Academic Class"*.
- **Class Card Grid (Classes 12 to 1):**
  - High-contrast 2-column card grid where each class is highlighted by a distinctive circular gradient badge:
    - **Class 12:** Purple Gradient (`#8b5cf6`) — Senior Secondary Board & Entrance
    - **Class 11:** Rose Gradient (`#ec4899`) — Foundation & Olympiad
    - **Class 10:** Orange Gradient (`#f97316`) — Secondary Board Exam
    - **Class 9:** Sky Blue Gradient (`#0284c7`) — High School Foundation
    - **Classes 8 to 1:** Emerald, Cyan, Gold, and Indigo gradient circular badges.
  - Metadata on cards: Subject count (e.g. `16 Subjects • 48 Books`), free access label, and hover chevron.

---

### SCREEN 3: Subject Directory
- **Header:** Interactive breadcrumbs (`Home ❯ Class 12 Books`), Title: *"Class 12 NCERT Subjects"* with stream filter pills (`All`, `Science`, `Commerce`, `Humanities`).
- **Subject Grid with Rounded Letter Badges:**
  - **[M] Mathematics:** Purple badge, Part I, Part II & Exemplar (13 Chapters).
  - **[P] Physics:** Crimson/Coral badge, Part I & II (Electrostatics to Nuclei).
  - **[C] Chemistry:** Amber badge, Physical, Inorganic & Organic modules.
  - **[B] Biology:** Emerald badge, 13 Chapters for Board & NEET.
  - **[A] Accountancy:** Violet badge, Partnership, Company Accounts & TS Grewal.
  - **[E] Economics:** Pink badge, Macroeconomics & Indian Economic Development.
  - **[BS] Business Studies:** Blue badge, Principles & Financial Management.
  - **[H] History & Political Science:** Brown/Slate badges, Indian History & Contemporary World.

---

### SCREEN 4: Chapter Index & Action Deck
- **Header Banner:** Authentic textbook cover art with translucent dark gradient overlay displaying book title (e.g., *"MATHEMATICS PART-I (XII)"*) + "Open in Google Drive" external link button.
- **Edition Switcher Tabs:** `New Rationalized Edition (2026-27)` vs `Previous Full Syllabus`.
- **Chapter Rows with Multi-Action Controls:**
  - Each chapter row contains:
    - Chapter / Unit number & descriptive title (e.g. `Unit 1: Relations and Functions`)
    - Page count and PDF file size (e.g. `Pages 1–32 • 4.2 MB`)
    - Action Buttons:
      - Primary Button (`#04AA6D` Green): **"Read In-App"** / **"Read Offline"**
      - Secondary Button (`#00dce6` Cyan): **"Instant Solutions"**
      - Direct Download icon button (Zero redirects)
      - Offline bookmark star button

---

### SCREEN 5: High-Precision Reader & Solution Studio
- **HUD Bar:** Back button `←`, Active filename (`lemh101.pdf`), Page counter scrubber (`Page [ 1 ] of 32`), Zoom controls (`-`, `100%`, `+`), Scratchpad toggle, and Dark/Sepia/Light reading mode switcher.
- **Dual-Pane Split Layout (Desktop):**
  - **Left Pane (50%):** Crystal-clear rendered NCERT textbook PDF.
  - **Right Pane (50%):** Step-by-step KaTeX mathematical solutions, formula derivations, and copyable LaTeX equations.
- **Mobile Stack Mode:** Sticky bottom segment pill toggle to smoothly switch between `Textbook PDF` and `KaTeX Solutions`.

---

## 3. TECHNICAL & DESIGN EXCELLENCE
- 100% responsive, dark-mode first with high-readability text contrast (`#ffffff` headings, `#d4e4fa` body).
- Zero paywalls, zero ads blocking text, and fast offline local caching for saved chapters.
- Fully compatible with KaTeX typesetting for mathematical, physical, and chemical notations.
```
