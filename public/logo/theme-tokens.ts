/**
 * Nextsem Master Brand Design System & Theme Tokens
 * Exportable and type-safe for use across all Nextsem web & mobile apps.
 */

export const nextsemTheme = {
  brandName: "Nextsem Academy",
  domain: "nextsem.online",
  version: "1.0.0",

  colors: {
    // Primary Platform Accent
    primary: "#04AA6D",
    primaryHover: "#039861",
    primaryLight: "#10b981",
    primaryDark: "#026d46",
    primaryGlow: "rgba(4, 170, 109, 0.45)",

    // Surfaces & Backgrounds
    bgMain: "#17181c",
    bgCard: "#0c1328",
    bgCardHover: "#111b38",
    bgElevated: "#1e293b",
    bgDarkest: "#060c18",

    // High-Contrast Typography
    textWhite: "#ffffff",
    textSlate: "#94a3b8",
    textMuted: "#64748b",
    textHighlight: "#04AA6D",

    // Borders & Dividers
    borderSubtle: "rgba(255, 255, 255, 0.08)",
    borderMedium: "rgba(148, 163, 184, 0.2)",
    borderAccent: "rgba(4, 170, 109, 0.5)",
    borderGlow: "#04AA6D",

    // Multi-App Brand Specializations
    subBrands: {
      ignou: {
        accent: "#c1a648",
        accentLight: "#f5d77f",
        bg: "#060c18",
        card: "#0c1328",
        glow: "rgba(193, 166, 72, 0.4)",
      },
      kids: {
        accentOrange: "#f59e0b",
        accentMint: "#10b981",
        bg: "#0f172a",
        card: "#1e1b4b",
      },
      ncert: {
        accentBlue: "#0284c7",
        accentSky: "#38bdf8",
        bg: "#050e1d",
        card: "#0c1e3d",
      },
    },
  },

  typography: {
    fontSans: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontMono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
  },

  shadows: {
    card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
    glowGreen: "0 0 25px rgba(4, 170, 109, 0.45)",
    glowGold: "0 0 25px rgba(193, 166, 72, 0.45)",
    innerSubtle: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
  },

  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },
} as const;

export type NextsemTheme = typeof nextsemTheme;
