/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#000000", 2: "#333333", 3: "#4d4e50", 4: "#495057" },
        paper: { DEFAULT: "#ffffff", 2: "#efefef", 3: "#eceff1" },
        line: { DEFAULT: "#dddddd", 2: "#c5c5c5" },
        mute: "#a5a5a5",
        brand: { blue: "#0056b3", deep: "#024780", flag: "#eb385e", red: "#ff0000" },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        ui: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
