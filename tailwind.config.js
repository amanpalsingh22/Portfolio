/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070a10",
        panel: "#10141f",
        cyanGlow: "#7dd3fc",
        blueGlow: "#93c5fd",
        violetGlow: "#c4b5fd",
        greenGlow: "#86efac"
      },
      boxShadow: {
        glow: "0 18px 50px rgba(0, 0, 0, 0.28)",
        violet: "0 18px 50px rgba(0, 0, 0, 0.24)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
