# NCERT Notes View Organization & T.S. Grewal Hub Integration (Matching ClassGrid Layout)

## Session Objective
Make `http://localhost:3002/?view=ncert-notes` completely identical in interface, styling, and navigation flow to `http://localhost:3002/?view=classes` (`ClassGrid.tsx`), with:
1. **Identical Class Cards Grid Layout**: 3-column responsive luxury jewel cards for Classes 12 down to 1.
2. **Pedagogical Stage Filter Navigation Pills**: `All Classes (1–12)`, `Senior (12–11)`, `Secondary (10–9)`, `Middle (8–6)`, `Primary (5–1)`.
3. **Class Drill-Down Flow**: Clicking any Class Card (e.g. **Class 11**) opens that class's notes view.
4. **Featured T.S. Grewal Financial Accounting Card**: Prominently featured under Class 11 with direct launch triggers for Q5 Two-Column Cash Book (Pg 10.44), Accounting Equation (Q1–Q5), and 18 Chapters Index.
5. **Real-time Live Search Filtering**: Filtering across topics, chapters, and keywords.

---

## Technical Details

### `src/components/pages/NcertNotesView.tsx`
- **Main View (`selectedClassNum === null`)**:
  - Exact 3-column grid matching `ClassGrid.tsx`.
  - Luxury Squircle Jewel Badges with large Roman numerals (`XII`, `XI`, `X`, `IX`, etc.), luxury gradients, and glowing accents.
  - Stage tag pills & popular labels (`🔥 High Demand`, `💼 Commerce & T.S. Grewal`, `🏆 Top Rated`).
  - Solved notes counts & streams info.
  - Action button strip `Open Class Notes →` with `ChevronRight`.
- **Drill-Down View (`selectedClassNum !== null`)**:
  - Class header banner with `← All Classes` back navigation and breadcrumbs.
  - Under **Class 11**:
    - **Header**: `ACCOUNTANCY (FINANCIAL ACCOUNTING)`
    - **Tag Badge**: `T.S. GREWAL • FINANCIAL ACCOUNTING (18 CHAPTERS & SOLUTIONS)` 📖
    - **Sub-strip**: `T.S. GREWAL: DOUBLE ENTRY BOOK KEEPING (XI)` with `Explore →`
    - **Action Jump Pills**:
      - 📑 `Q5 Two-Column Cash Book (Pg 10.44)`
      - 📊 `Accounting Equation (Q1–Q5)`
      - 📚 `18 Chapters Index`
      - ⚡ `Cash Book Simulator`
    - Clicking launches `onOpenTsGrewal()`.
    - Other notes: *Cash Book Numericals Studio & Simulator*, *Stitch Accountancy & Ledger Studio*, *Math Permutations & Combinations Reader*.
  - Under **Class 12**:
    - *Physics Ch 6 (EMI Formula Vault)*, *Physics Ch 7 (AC 6 Difficulty Tiers)*, *Stitch Dual-Pane Study Studio*, *Stitch Numericals Lab*, *Accountancy Company Accounts*.
  - Under **Class 10**:
    - *Science Ch 1 Chemical Reactions (25 HOTS MCQs)*, *Maths Real Numbers*, *Social Science Economics*.
  - Under **Class 9**:
    - *Ganita Manjari Ch 1 Coordinate Geometry (17 Step Numericals)*, *Science Matter & Motion*.
  - Under **Middle / Primary Classes (8 to 1)**:
    - Respective Ganita Prakash & Curiosity Notes and Worksheets.
- **Search Mode**: Instant search results across all classes with direct launch buttons.

---

## Verification
- TypeScript typecheck passed cleanly (`npx tsc --noEmit` exited with code 0).
- Standard Dark/Light theme token adherence.
