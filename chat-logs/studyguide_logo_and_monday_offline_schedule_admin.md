# Session Transcript & Architecture Log: StudyGuide by Nextsem Logo & Monday Schedule Admin Portal

**Date**: 2026-09-28  
**Project**: StudyGuide by Nextsem (`ncert.nextsem.online`)  
**Targets**: Localhost (`http://localhost:3002/`), PC Network (`http://192.168.29.170:3002/`), Live Vercel (`https://ncert-alpha.vercel.app/`), Firebase (`https://nextsem-ncert-2403.web.app/`)

---

## 1. User Requests
1. Rename the project everywhere to **"StudyGuide by Nextsem"**.
2. Make a new logo for it with the logo text **"StudyGuide by Nextsem"**.
3. Implement an Admin Panel based on the Monday offline teaching schedule in `docs/offline class.md` so that clicking a specific slot opens the corresponding section on `https://ncert-alpha.vercel.app/?view=classes` and enables adding chapterwise PDFs and lecture notes/exercises.

---

## 2. Preserved Notes (Verbatim) from `docs/offline class.md`
```markdown
on momday we teach :
3-4 PM 5th class Maths ; 3rd class Maths 2nd class :Maths
4-5 PM Maths of 6th 7th and 8th 
5-6 Maths for 9th and 10th
6-7 Accountancy 11th.
7-8 History 12th
8-9 :30 physics 12th and NIOS
9:30 to 11 PM : BCA 1st sem cs or maths .
npw make an admin panel for above schedule so that on clicking a specific slot the correspoding section on https://ncert-alpha.vercel.app/?view=classes gets open and we can add cahpterwise pdf and notes in it.
```

---

## 3. Monday Master Teaching Schedule Mapping (7 Slots)

| Slot | Time Window | Classes / Subjects | Direct Vercel Route | Action Buttons |
|---|---|---|---|---|
| **Slot 1** | **3:00 PM – 4:00 PM** | Class 5 Maths, Class 3 Maths, Class 2 Maths | `?view=classes&class=5&subject=c5-maths`<br>`?view=classes&class=3&subject=c3-maths`<br>`?view=classes&class=2&subject=c2-maths` | In-App View, Open on Vercel, + Add Chapter PDF & Notes |
| **Slot 2** | **4:00 PM – 5:00 PM** | Class 6 Maths, Class 7 Maths, Class 8 Maths | `?view=classes&class=6&subject=c6-maths`<br>`?view=classes&class=7&subject=c7-maths`<br>`?view=classes&class=8&subject=c8-maths` | In-App View, Open on Vercel, + Add Chapter PDF & Notes |
| **Slot 3** | **5:00 PM – 6:00 PM** | Class 9 Maths, Class 10 Maths | `?view=classes&class=9&subject=c9-maths`<br>`?view=classes&class=10&subject=c10-maths` | In-App View, Open on Vercel, + Add Chapter PDF & Notes |
| **Slot 4** | **6:00 PM – 7:00 PM** | Class 11 Accountancy | `?view=classes&class=11&subject=c11-accountancy` | In-App View, Open on Vercel, + Add Chapter PDF & Notes |
| **Slot 5** | **7:00 PM – 8:00 PM** | Class 12 History | `?view=classes&class=12&subject=c12-history` | In-App View, Open on Vercel, + Add Chapter PDF & Notes |
| **Slot 6** | **8:00 PM – 9:30 PM** | Class 12 Physics & NIOS Physics | `?view=classes&class=12&subject=c12-physics`<br>`?view=classes&class=12&subject=nios-physics` | In-App View, Open on Vercel, + Add Chapter PDF & Notes |
| **Slot 7** | **9:30 PM – 11:00 PM** | BCA 1st Sem CS & Maths | `https://ignou-study-notes-by-nextsem.web.app/bca/semester-1` | Open IGNOU BCA 1st Sem Hub, + Add Notes |

---

## 4. Logo Generation & Asset Integration
- Generated new modern educational emblem featuring illuminated golden textbook, academic mortarboard, neon cyan & emerald ribbons, with bold pure white **StudyGuide** and neon green **BY NEXTSEM**.
- Assets deployed to:
  - `public/studyguide-by-nextsem-logo.jpg`
  - `public/study-guide-by-nextsem.svg`
  - `public/image-20.png`
  - `public/app-logo.png`
  - `public/studyguide-logo.png`
- Displayed edge-to-edge inside squircle containers with green ambient glowing borders in `Navbar.tsx`, `NavigationDrawer.tsx`, and `AdminPortalView.tsx`.

---

## 5. Build & Verification
- `npm run build`: Exit Code 0 (Passed with 1,836 modules transformed cleanly).
- Dev server running on port 3002:
  - Localhost URL: `http://localhost:3002/`
  - PC Network IP URL: `http://192.168.29.170:3002/`
