/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#F98D52",
        tertiary: "#1C98A1",
        warning: "#D41130",
        dark: "#000",
      },
      boxShadow: {
        card: "0 35px 120px -15px #211e35",
      },
      textShadow: {
        'default': '0 2px 0 rgba(0,0,0,0.3)',
        'lg': '0 2px 2px rgba(0,0,0,0.3)',
      },
      screens: {
        xs: "460px",
        ss: "680px",
        sm: "768px",
        md: "1040px",
        lg: "1200px"
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/background2.jpg')",
      },
    },
  },
  plugins: [],
};
