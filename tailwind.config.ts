import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        // 'above-1800': { min: '1800px' },
        "between-1200-1399": {
          min: "1200px",
          max: "1399px",
        },
        "between-1400-1680": {
          min: "1400px",
          max: "1680px",
        },
        "between-992-1199": {
          min: "992px",
          max: "1199px",
        },
        "between-768-991": {
          min: "768px",
          max: "991px",
        },
        "between-576-767": {
          min: "576px",
          max: "767px",
        },
        "between-400-575": {
          min: "400px",
          max: "575px",
        },
        "max-1680": {
          max: "1680px",
        },
        "max-1199": {
          max: "1199px",
        },
        "max-575": {
          max: "575px",
        },
        "max-479": {
          max: "479px",
        },
        "max-399": {
          max: "399px",
        },
      },
      keyframes: {
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        orbitIconRotate: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
        "float-fast": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        float: "float 2.5s ease-in-out infinite",
        "float-slow": "float-slow 4s ease-in-out infinite",
        "float-medium": "float 3s ease-in-out infinite",
        "float-fast": "float-fast 2s ease-in-out infinite",
        "float-delayed": "float 2.5s ease-in-out 0.5s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "rotate 20s linear infinite",
        "orbitIcon-rotate": "orbitIconRotate 20s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "7rem",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
