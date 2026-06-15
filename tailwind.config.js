/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        cyanGlow: "rgb(var(--color-cyan-glow) / <alpha-value>)",
        blueGlow: "rgb(var(--color-blue-glow) / <alpha-value>)",
        violetGlow: "rgb(var(--color-violet-glow) / <alpha-value>)",
        greenGlow: "rgb(var(--color-green-glow) / <alpha-value>)"
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        violet: "var(--shadow-violet)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
