import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          "dark-950": "#0a0a0a",
          "dark-900": "#0f0f0f",
          "dark-800": "#1a1a1a",
          "dark-700": "#2a2a2a",
        },
        orange: {
          300: "#fdba74",
          400: "#fbbf24",
          500: "#f97316",
          600: "#ea5e0a",
          700: "#c2410c",
        },
        yellow: {
          400: "#facc15",
          500: "#eab308",
        },
      },
      boxShadow: {
        "glow-xs": "0 0 12px rgba(249, 115, 22, 0.2)",
        "glow-sm": "0 0 20px rgba(249, 115, 22, 0.4)",
        "glow-md": "0 0 40px rgba(249, 115, 22, 0.5)",
        "glow-lg": "0 0 60px rgba(249, 115, 22, 0.6)",
        "glow-xl": "0 0 80px rgba(249, 115, 22, 0.7)",
        "depth-sm":
          "0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)",
        "depth-md":
          "0 8px 16px rgba(0, 0, 0, 0.4), 0 16px 32px rgba(0, 0, 0, 0.3)",
        "depth-lg":
          "0 12px 24px rgba(0, 0, 0, 0.5), 0 24px 48px rgba(0, 0, 0, 0.4)",
        "inner-glow": "inset 0 0 24px rgba(249, 115, 22, 0.1)",
      },
      borderRadius: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      transitionTimingFunction: {
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth-in": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "smooth-out": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "sharp-in": "cubic-bezier(0.4, 0, 1, 1)",
        "sharp-out": "cubic-bezier(0, 0, 0.2, 1)",
        "elastic": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "spin-slow": "spin-slow 30s linear infinite",
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fade-in 500ms ease-out forwards",
        "slide-up": "slide-up 600ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "slide-down": "slide-down 600ms ease-out forwards",
        "slide-left": "slide-left 500ms ease-out forwards",
        "slide-right": "slide-right 500ms ease-out forwards",
        "bounce-in": "bounce-in 700ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s infinite",
        "float": "float 4s ease-in-out infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(32px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          from: { transform: "translateY(-32px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left": {
          from: { transform: "translateX(32px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right": {
          from: { transform: "translateX(-32px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(249, 115, 22, 0.6)" },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "shimmer-light":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        "mesh-gradient":
          "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 88, 12, 0.05) 50%, rgba(10, 10, 10, 0) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
