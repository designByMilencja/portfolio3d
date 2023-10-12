/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#D8DBD5",
        secondary: "#F98D52",
        tertiary: "#1C98A1",
        warning: "#D41130",
        dark: "#000",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0 35px 120px -15px #211e35",
      },
      screens: {
        xs: "460px",
        ss: "680px",
        sm: "768px",
        md: "1040px",
        lg: "1200px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background2.jpg')",
      },
    },
  },
  plugins: [],
};
