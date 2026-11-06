# NCERT Authentic Book Covers & Visual Identification Standard Integration

## Session Objective
1. Follow `/learn` directive to integrate authentic NCERT book cover images across Class 12 (`http://localhost:3002/?class=12`) and similar class/subject pages (`http://localhost:3002/?class=11`, `http://localhost:3002/?class=12&subject=...`).
2. Make subject and book discovery instantly familiar, visual, and recognizable matching physical NCERT school textbooks (e.g. `keac1`, `keac2`, `leac1`, `leac2`, `lemh1`, `lemh2`, `leph1`, `leph2`, `lech1`, `lech2`, `lebo1`, `lefl1`, `levt1`, `lekl1`, `lecs1`, `lebs1`, `lebs2`, `leec1`, `leec2`).

---

## Changes Implemented

### 1. Permanent Learning Rule in `.agents/AGENTS.md`
- Added the following permanent standard:
  ```markdown
  - **NCERT Authentic Book Covers & Visual Identification Standard (PERMANENT RULE)**: Always use and render authentic NCERT book cover images (e.g. from `/book-covers/` or realistic 3D NCERT textbook templates with official codes like `keac1`, `keac2`, `leac1`, `leac2`, `lemh1`, `lebs1`, etc.) on all subject lists (`?class=12`, `?class=11`, etc.), subject book pickers, and chapter headers to ensure students instantly recognize and identify their physical school textbooks.
  ```

### 2. `SubjectList.tsx` (`src/components/SubjectList.tsx`)
- Replaced the plain abstract letter circles with **3D Realistic NCERT Book Cover Thumbnails**:
  - Direct rendering of authentic NCERT book covers (`/book-covers/math-p1.png`, `/book-covers/physics-p1.png`, `/book-covers/chemistry-p1.png`, `/book-covers/biology.png`, `/book-covers/accountancy-p1.png`, `/book-covers/english-flamingo.png`, `/book-covers/cs-textbook.png`).
  - Realistic 3D book spine groove, left spine highlight (`borderLeft: 3.5px solid rgba(255,255,255,0.5)`), drop shadow, and NCERT yellow header strip.

### 3. `SubjectBooksView.tsx` (`src/components/SubjectBooksView.tsx`)
- Updated `getCoverImage` and book parts to map all official NCERT textbook parts:
  - Accountancy: Part I (`keac1` / `leac1`), Part II (`keac2` / `leac2`), and T.S. Grewal Double Entry Book Keeping.
  - Mathematics: Part I (`lemh1`), Part II (`lemh2`), Exemplar (`leep2`).
  - Physics: Part I (`leph1`), Part II (`leph2`), Exemplar (`leep1`).
  - Chemistry: Part I (`lech1`), Part II (`lech2`), Exemplar (`leep5`).
  - English: Flamingo (`lefl1`), Vistas (`levt1`), Kaleidoscope (`lekl1`).
  - Business Studies: Principles of Management (`lebs1`) & Business Finance (`lebs2`).
  - Economics: Macroeconomics (`leec1`) & Indian Economic Development (`leec2`).
  - Biology & Computer Science.
- Enhanced book cover banners with spine shadow groove and official NCERT textbook code tags.

---

## Verification
- `npx tsc --noEmit` passed with 0 errors.
