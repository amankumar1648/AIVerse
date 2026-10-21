import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}"
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px"
      }
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff"
        },

        secondary: {
          DEFAULT: "#7c3aed",
          foreground: "#ffffff"
        },

        background: "#ffffff",
        foreground: "#111827",

        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#6b7280"
        },

        accent: {
          DEFAULT: "#06b6d4",
          foreground: "#ffffff"
        },

        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",

        border: "#e5e7eb"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        card: "0 8px 24px rgba(0,0,0,0.06)",
        glow: "0 0 30px rgba(37,99,235,0.25)"
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-8px)"
          }
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        },

        pulseGlow: {
          "0%,100%": {
            boxShadow: "0 0 0 rgba(37,99,235,0)"
          },
          "50%": {
            boxShadow: "0 0 24px rgba(37,99,235,.35)"
          }
        }
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        fadeUp: "fadeUp .6s ease forwards",
        glow: "pulseGlow 2s infinite"
      }
    }
  },

plugins: []
};

export default config;
