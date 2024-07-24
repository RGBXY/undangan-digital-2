/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9BA59C",
        secondary: "#F5F5F2",
        primary_text: "#353A36",
      },
      fontFamily: {
        amita: "Amita",
        nunito: "Nunito",
        tangerine: "Tangerine",
      },
    },
  },
  plugins: [],
};
