# Session Log: NIOS Chemistry 313 Lesson 26 (Hydrocarbons) Test Suite & Study Studio

## 📌 Overview
1. **Source Document**:
   - `https://www.nios.ac.in/media/documents/313courseE/L26.pdf`
   - **Course**: NIOS Senior Secondary (Class 12) Chemistry (Course 313)
   - **Module 7**: Chemistry of Organic Compounds
   - **Lesson 26**: Hydrocarbons (Pages 146–169, 24 pages total)

2. **Features Built**:
   - Comprehensive **20 High-Yield Competency Questions** covering every core reaction, rule, mechanism, and distinction test:
     - *Alkanes*: Wurtz reaction, Kolbe Electrolysis, Decarboxylation with Soda Lime, Boiling point vs branching, Free radical chlorination mechanism (Initiation, Propagation, Termination).
     - *Alkenes*: Dehydrohalogenation, Saytzeff's rule, Markovnikov addition, Anti-Markovnikov (Peroxide/Kharasch effect), Ozonolysis cleavage, Baeyer's reagent test.
     - *Alkynes*: Acidity of terminal alkynes ($50\%\ s$-character in $sp$ hybridization), Kucherov hydration to ketones, Cyclic trimerization to Benzene.
     - *Benzene & Arenes*: Resonance energy ($150.6\text{ kJ/mol}$), Hückel's $(4n+2)\pi$ aromaticity rule, $S_E\text{Ar}$ nitration/Friedel-Crafts alkylation mechanism, Directive influence (ortho/para vs meta), BHC (Lindane) addition product.
     - *Distinction Table*: Ethane vs Ethene vs Ethyne ($Br_2/CCl_4$ and ammoniacal $AgNO_3$).
   - **Dynamic Option Reshuffling (Fisher-Yates)** on every quiz start.
   - Dual modes: **Practice & Learn** (instant answers + step-by-step mechanism explanations) and **Timed Exam Mode** (20-minute timer, question palette, scorecard with confetti).
   - Topic-specific filtering: All Questions, Alkanes, Alkenes, Alkynes, Benzene & Arenes.
   - Print test sheet generator.

---

## 🛠️ Files Created / Updated

1. **`src/data/hydrocarbonsTestData.ts`**:
   - 20 high-yield questions with page-wise citations from NIOS Lesson 26.
2. **`src/components/interactive/HydrocarbonsTestView.tsx`**:
   - Interactive React component with dynamic option shuffling, dual modes, and question palette.
3. **`src/App.tsx`**:
   - Integrated `HYDROCARBONS_TEST` view mode and routing params (`?view=hydrocarbons`, `?view=nios-313`, `?view=nios-chemistry`, `?view=nios-l26`, `?view=l26`).
4. **`src/components/AppDashboard.tsx`**:
   - Added interactive launcher card for the Hydrocarbons test on the main dashboard.

---

## 🌐 Live Access URLs

- **Localhost (PC Browser)**: `http://localhost:3002/?view=hydrocarbons`
- **Network / Mobile Access**: `http://192.168.29.171:3002/?view=hydrocarbons`
