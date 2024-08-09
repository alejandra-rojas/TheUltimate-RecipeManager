/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        azeret: ["Azeret Mono", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        robotomono: ["Roboto Mono", "sans-serif"],
      },
    },
  },
};
