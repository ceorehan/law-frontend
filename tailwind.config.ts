import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1B1B18",
          900: "#141412",
          800: "#1B1B18",
          700: "#26261F",
          600: "#3A3A30",
        },
        ivory: {
          DEFAULT: "#FBF9F4",
          100: "#FFFFFF",
          200: "#FBF9F4",
          300: "#F3EFE4",
        },
        emerald: {
          DEFAULT: "#0E5C3E",
          50: "#E7F2EC",
          100: "#C6E3D3",
          400: "#1A7A54",
          500: "#0E5C3E",
          600: "#0A4630",
        },
        gold: {
          DEFAULT: "#9A7A2E",
          100: "#F1E6C6",
          400: "#B4923F",
          500: "#9A7A2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
        display: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(27,27,24,0.08)",
        card: "0 8px 30px -10px rgba(27,27,24,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
