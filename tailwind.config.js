/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Nova paleta para tema escuro - tons mais neutros com acentos verdes e roxos
        dark: {
          primary: "#0f0f23", // Azul escuro quase preto
          secondary: "#1a1a2e", // Roxo escuro
          surface: "#16213e", // Azul acinzentado
          accent: "#10dc60", // Verde vibrante
          purple: "#7c3aed", // Roxo médio
          text: "#e2e8f0", // Cinza claro
          muted: "#64748b", // Cinza médio
          border: "#374151", // Cinza escuro
        },
        background: {
          light: "#ffffff",
          dark: "#0f0f23",
        },
        surface: {
          light: "#f8fafc",
          dark: "#1a1a2e",
        },
        border: {
          light: "#e2e8f0",
          dark: "#374151",
        },
        text: {
          primary: {
            light: "#1e293b",
            dark: "#e2e8f0",
          },
          secondary: {
            light: "#64748b",
            dark: "#94a3b8",
          },
        },
        accent: {
          light: "#0ea5e9",
          dark: "#10dc60",
        },
      },
      animation: {
        "coin-flip": "coinFlip 2s ease-out forwards",
        "coin-bounce": "coinBounce 0.5s ease-out 2s forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        coinFlip: {
          "0%": {
            transform: "translateY(-100vh) rotateY(0deg) scale(0.1)",
            opacity: "0",
          },
          "50%": {
            transform: "translateY(-20px) rotateY(1800deg) scale(1.1)",
            opacity: "1",
          },
          "70%": {
            transform: "translateY(10px) rotateY(1800deg) scale(0.95)",
          },
          "85%": {
            transform: "translateY(-5px) rotateY(1800deg) scale(1.02)",
          },
          "100%": {
            transform: "translateY(0) rotateY(1800deg) scale(1)",
            opacity: "1",
          },
        },
        coinBounce: {
          "0%": {
            transform: "translateY(0) rotateY(1800deg) scale(1)",
          },
          "30%": {
            transform: "translateY(-10px) rotateY(1800deg) scale(1.05)",
          },
          "60%": {
            transform: "translateY(5px) rotateY(1800deg) scale(0.98)",
          },
          "100%": {
            transform: "translateY(0) rotateY(1800deg) scale(1)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      boxShadow: {
        coin: "0 10px 30px rgba(16, 220, 96, 0.3), 0 0 20px rgba(124, 58, 237, 0.2)",
        "dark-lg": "0 10px 25px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        "gradient-accent": "linear-gradient(45deg, #10dc60, #7c3aed)",
      },
    },
  },
  plugins: [],
};
