/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: "#00D9FF",
          purple: "#B829FF",
          green: "#39FF14",
          orange: "#FF6B00",
          pink: "#FF0080",
          blue: "#0066FF",
        },
        dark: {
          100: "#0A0A0F",
          200: "#050508",
          300: "#101018",
          400: "#1A1A2E",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        rajdhani: ["Rajdhani", "sans-serif"],
        "sour-gummy": ['"Sour Gummy"', "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "rotate-slow": "rotate 20s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)" },
          to: { boxShadow: "0 0 30px rgba(0, 217, 255, 0.8)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        cyber: "0 0 20px rgba(0, 217, 255, 0.3)",
        "cyber-lg": "0 0 40px rgba(0, 217, 255, 0.4)",
        purple: "0 0 20px rgba(184, 41, 255, 0.3)",
        green: "0 0 20px rgba(57, 255, 20, 0.3)",
        orange: "0 0 20px rgba(255, 107, 0, 0.3)",
        pink: "0 0 20px rgba(255, 0, 128, 0.3)",
        blue: "0 0 20px rgba(0, 102, 255, 0.3)",
      },
      safelist: [
        "hover:shadow-cyber",
        "hover:shadow-purple",
        "hover:shadow-green",
        "hover:shadow-orange",
        "hover:shadow-pink",
      ],
    },
  },
  plugins: [],
};
