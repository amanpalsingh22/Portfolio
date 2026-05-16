/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050712",
        panel: "#0a1020",
        cyanGlow: "#18d7ff",
        blueGlow: "#4f8cff",
        violetGlow: "#8d5cff",
        greenGlow: "#62ffb2"
      },
      boxShadow: {
        glow: "0 0 32px rgba(24, 215, 255, 0.18)",
        violet: "0 0 32px rgba(141, 92, 255, 0.18)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
