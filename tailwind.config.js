/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index/html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#21243D",
        pink: "#FF6464",
        secondary: "#00A8CC",
        "light-blue": "#EDF7FA",
      },
    },
    screens: {
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
