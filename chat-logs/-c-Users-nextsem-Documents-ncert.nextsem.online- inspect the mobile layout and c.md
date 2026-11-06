# @[c:\Users\nextsem\Documents\ncert.nextsem.online] inspect the mobile layout and correct it is hiding behind the top icon on android

*Saved on: 17/9/2026, 6:23:56 pm*
*Conversation ID: b7b2eba1-d522-4c3a-8fe2-8b39f6738670*

---

### 👤 User

@[c:\Users\nextsem\Documents\ncert.nextsem.online] inspect the mobile layout and correct it is hiding behind the top icon on android

---

### 👤 User

also update this page as per the title of page https://ncert-alpha.vercel.app/?class=6

---

### 🤖 Antigravity AI

### 📱 Mobile Android Layout & Class 6 Page Audit & Fix Summary

---

### 1. 🔍 Root Cause Analysis: Mobile Layout Hiding Behind Android Top Icons

1. **Edge-to-Edge `viewport-fit=cover` Collision**:
   - In [`index.html`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/index.html), `<meta name="viewport" content="... viewport-fit=cover" />` enables edge-to-edge rendering on modern Android devices and PWAs.
   - However, `<header>` in [`Navbar.tsx`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/components/Navbar.tsx) was defined with fixed `height: 62px` and `top: 0` with **zero** `env(safe-area-inset-top)` padding.
   - As a result, the top Android system icons (clock, camera punch-hole notch, Wi-Fi, battery percentage) were rendering directly on top of the hamburger/back button, brand logo emblem, and search bar.
   - On narrow mobile viewports (360px–412px), the search input box (`width: 190px`) and left logo controls collided horizontally.

2. **Breadcrumb Sticky Top Misalignment**:
   - [`BreadcrumbAddressBar.tsx`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/components/BreadcrumbAddressBar.tsx) used a hardcoded `top: 62px`, which would cause it to slide underneath the navbar once top safe-area padding was added.

---

### 2. 🛠️ Fixes Applied for Android Safe Area & Responsive Header

1. **Dynamic Top Safe-Area Inset on Sticky Navbar**:
   - Updated `<header>` in [`Navbar.tsx`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/components/Navbar.tsx):
     ```tsx
     height: 'calc(62px + env(safe-area-inset-top, 0px))',
     minHeight: 'calc(62px + env(safe-area-inset-top, 0px))',
     paddingTop: 'env(safe-area-inset-top, 0px)',
     boxSizing: 'border-box'
     ```
   - Controls now sit in the dedicated 62px content zone **strictly below** the physical Android status bar icons and camera cutout.

2. **Sticky Breadcrumb Sync**:
   - In [`BreadcrumbAddressBar.tsx`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/components/BreadcrumbAddressBar.tsx), updated `top` to:
     ```tsx
     top: 'calc(62px + env(safe-area-inset-top, 0px))'
     ```
   - Stays aligned directly beneath the navbar when scrolling.

3. **Full-Screen Reader & Drawer Safe-Area Inset Support**:
   - [`NavigationDrawer.tsx`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/components/NavigationDrawer.tsx): Added `padding-top: calc(16px + env(safe-area-inset-top, 0px))` to the drawer header.
   - [`PdfReaderView.tsx`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/components/PdfReaderView.tsx): Added `padding-top: calc(10px + env(safe-area-inset-top, 0px))` so PDF viewer navigation buttons are never obscured.

4. **Responsive Mobile Search Width & Typography**:
   - In [`index.css`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/index.css), added mobile media queries:
     - On screens `< 600px`: search box auto-scales (`max-width: 38vw`).
     - On screens `< 480px`: compact search (`max-width: 34vw`), logo text adjusts to 0.98rem.
     - On screens `< 360px`: secondary subtitle hides, search stays clean and accessible without colliding.

---

### 3. 📚 Class 6 Curriculum & Dynamic Title (`?class=6`) Resolution

**The Issue on `https://ncert-alpha.vercel.app/?class=6`**:
- The page heading displayed `"Class VI Subjects • NCERT Textbooks & Solutions"`, but because `class6Data.ts` was missing from `CLASSES_DATA`, the app defaulted to Class 12, showing Class 12 Physics, Chemistry, Biology, and Accountancy!
- The browser tab title never updated dynamically.

**What was done**:
1. **Created [`src/data/class6Data.ts`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/data/class6Data.ts)**:
   - Added all 5 official NEP-rationalized Class 6 subjects:
     - **Mathematics (गणित प्रकाश - Ganita Prakash)**: 10 Chapters (`fegp101`–`fegp110`)
     - **Science (जिज्ञासा / Curiosity - Jigyasa)**: 12 Chapters (`fhcu101`–`fhcu112`)
     - **Social Science (Exploring Society: India and Beyond)**: 14 Chapters (`fees101`–`fees114`)
     - **English (पूर्वी - Poorvi)**: 10 Chapters including *Neem Baba* (`fepr101`–`fepr110`)
     - **Hindi (मल्हार - Malhar)**: 13 Chapters (`fhml101`–`fhml113`)
   - Fully linked with official NCERT CDN codes and local PDF directories under `public/pdf/Class 6/`.

2. **Registered `CLASS_6_DATA` in [`ncertData.ts`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/data/ncertData.ts)**:
   - `CLASSES_DATA` now includes `CLASS_6_DATA`.

3. **Cover Image Mappings in [`SubjectList.tsx`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/components/SubjectList.tsx)**:
   - Mapped authentic covers for Ganita Prakash, Curiosity Science, Exploring Society, Poorvi, and Malhar.

4. **Dynamic `document.title` Synchronization in [`App.tsx`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/src/App.tsx)**:
   - Added `useEffect` to synchronize the browser tab `<title>` dynamically:
     - When on `?class=6`: `"Class 6 NCERT Textbooks & Solutions | StudyGuide — Nextsem Academy"`
     - Updates seamlessly across all classes, subjects, book parts, and chapter PDF readers.

---

### 4. 🌐 Verification & Direct Local Preview URLs

The project compiled with **0 build errors** (`tsc -b && vite build`):

- **Localhost URL**: [http://localhost:3002/?class=6](http://localhost:3002/?class=6)
- **Network IP URL**: [http://192.168.29.171:3002/?class=6](http://192.168.29.171:3002/?class=6)
- The page has been launched directly in Google Chrome for verification.

---

### 👤 User

npm run dev

---

### 🤖 Antigravity AI

The development server is running on **port 3002**:

```bash
> studyguide@0.0.0 dev
> vite --host --port 3002

  VITE v8.2.0  ready in 380 ms

  ➜  Local:   http://localhost:3002/
  ➜  Network: http://192.168.29.171:3002/
```

### 🔗 Direct Preview Links:
- **Localhost URL**: [http://localhost:3002/?class=6](http://localhost:3002/?class=6)
- **PC Network IP URL**: [http://192.168.29.171:3002/?class=6](http://192.168.29.171:3002/?class=6)

The active link has also been launched directly in Google Chrome.

---

### 🤖 Antigravity AI

### ⚠️ Network IP Address Correction

The connection timed out because your router's DHCP currently assigned your PC the IPv4 address **`192.168.29.170`** (ending in **`.170`**, not `.171`):

```bash
Ethernet adapter Ethernet:
   IPv4 Address. . . . . . . . . . . : 192.168.29.170
```

Both `localhost` and `192.168.29.170` have been tested and return **HTTP 200 OK** immediately:

```bash
> curl.exe -I http://192.168.29.170:3002/
HTTP/1.1 200 OK
```

---

### 🌐 Direct Working Preview Links:

- **Active Network IP**: [http://192.168.29.170:3002/?class=6](http://192.168.29.170:3002/?class=6)
- **Localhost**: [http://localhost:3002/?class=6](http://localhost:3002/?class=6)

*(The tab has also been opened directly in Google Chrome).*

---

### 👤 User

update on git

---

