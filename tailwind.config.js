/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomorrow: ["Tomorrow", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        stars: "url('/images/stars.svg')",
        ellipse: "url('/images/ellipse.svg')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
