/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "phone-mini": "200px",
      "phone-xs": "320px",
      "phone-sm": "375px",
      "phone-md": "400px",
      "phone-des": "428px",
      "phone-lg": "480px",
      small: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "desktop-med": "1350px",
      "desktop-wide": "1440px",
      "2xl": "1536px",
      max: "1920px",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
