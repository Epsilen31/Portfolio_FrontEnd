/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./app/**/*.{js,jsx}",
  "./src/**/*.{js,jsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      // 2025 Design System Colors
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7c3aed",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764",
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
        950: "#022c22",
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
        950: "#500724",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      "fade-in": {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "slide-in-left": {
        "0%": { opacity: "0", transform: "translateX(-100px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      "slide-in-right": {
        "0%": { opacity: "0", transform: "translateX(100px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      "slide-in-bottom": {
        "0%": { opacity: "0", transform: "translateY(100px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "float": {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-20px)" },
      },
      "pulse-slow": {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0.5" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "fade-in": "fade-in 0.5s ease-out",
      "slide-in-left": "slide-in-left 0.8s ease-out",
      "slide-in-right": "slide-in-right 0.8s ease-out",
      "slide-in-bottom": "slide-in-bottom 0.8s ease-out",
      "float": "float 6s ease-in-out infinite",
      "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    backdropBlur: {
      xs: "2px",
    },
    boxShadow: {
      "glass": "0 8px 32px rgba(0, 0, 0, 0.1)",
      "glass-strong": "0 20px 60px rgba(0, 0, 0, 0.15)",
      "glow": "0 0 20px rgba(59, 130, 246, 0.5)",
      "glow-purple": "0 0 20px rgba(168, 85, 247, 0.5)",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];
