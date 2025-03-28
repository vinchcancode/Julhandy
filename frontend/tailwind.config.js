/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
