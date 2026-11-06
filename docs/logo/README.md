# Nextsem NCERT & NIOS Brand Logo System

Official vector branding assets for the **Nextsem NCERT & NIOS Solutions Hub** application and web ecosystem.

Derived directly from the master **Nextsem Brand System** (`nextsem.online`), tailored specifically for K-12 and Open Schooling academics (Class 1 to 12).

---

## 🎨 Brand Color Tokens

| Token | Hex Code | Preview | Usage |
|---|---|---|---|
| **Primary Emerald Green** | `#04AA6D` | ![#04AA6D](https://via.placeholder.com/15/04AA6D/000000?text=+) | Stroke for `N`, borders, highlights, active pills |
| **Luminous Emerald** | `#10b981` | ![#10b981](https://via.placeholder.com/15/10b981/000000?text=+) | Gradient highlights & glow accents |
| **Crisp White** | `#FFFFFF` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) | Stroke for `S`, primary dark-mode typography |
| **Midnight Surface** | `#0c1328` | ![#0c1328](https://via.placeholder.com/15/0c1328/000000?text=+) | Emblem badge fill & card surface |
| **Platform Dark Canvas**| `#17181c` | ![#17181c](https://via.placeholder.com/15/17181c/000000?text=+) | Primary platform dark background |
| **Charcoal Slate** | `#0f172a` | ![#0f172a](https://via.placeholder.com/15/0f172a/000000?text=+) | Light-mode stroke for `S` & light-mode text |

---

## 📦 Asset Files Inventory

| File | Resolution / ViewBox | Format | Target Placement |
|---|---|---|---|
| [`nextsem-logo-ncert-nios-stacked.svg`](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/docs/logo/nextsem-logo-ncert-nios-stacked.svg) | `120 x 120` | SVG | Compact cards, modal dialogs, footer branding |
| [`nextsem-logo-ncert-nios-stacked-hires.svg`](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/docs/logo/nextsem-logo-ncert-nios-stacked-hires.svg) | `300 x 300` | SVG | High-DPI screens, splash screens, documentation |
| [`nextsem-logo-ncert-nios-horizontal.svg`](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/docs/logo/nextsem-logo-ncert-nios-horizontal.svg) | `560 x 120` | SVG | Desktop top navbar, header banners, marketing headers |
| [`nextsem-logo-ncert-nios-app-icon.svg`](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/docs/logo/nextsem-logo-ncert-nios-app-icon.svg) | `512 x 512` | SVG | Android adaptive app icon, PWA manifest, iOS icon |
| [`nextsem-logo-ncert-nios-light.svg`](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/docs/logo/nextsem-logo-ncert-nios-light.svg) | `120 x 120` | SVG | Light mode layout cards and clean white PDF exports |
| [`nextsem-logo-ncert-nios-mark.svg`](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/docs/logo/nextsem-logo-ncert-nios-mark.svg) | `100 x 100` | SVG | Browser favicon, mobile header emblem, quick badges |
| [`logo-preview.html`](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/docs/logo/logo-preview.html) | Interactive HTML | HTML | Live theme switcher (Light/Dark) testbench |

---

## 📐 Design & Geometry Rules

1. **The Iconic `N` Stroke**:
   - Drawn using an emerald green stroke (`#04AA6D` or gradient `#10b981` → `#04AA6D`).
   - Round line caps (`stroke-linecap="round"`) and round joins (`stroke-linejoin="round"`).
2. **The Iconic `S` Stroke**:
   - Drawn using a crisp pure white stroke (`#FFFFFF`) in dark mode, or deep charcoal (`#0f172a`) in light mode.
   - Smooth cubic Bézier curvature with round line caps.
3. **Card Container**:
   - Rounded squircle rectangle with `rx="16"` (or proportional `rx` according to scale) with a `#04AA6D` glowing border (`drop-shadow` filter).
