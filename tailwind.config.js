/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        cardWhiteGv: "#FFFFFF",
        cardBorderGv: "#E6E6E6",
        BlackFontGv: "#212121",
        WhiteFontGv: "#FAFAFA",
        errorRedFontGv: "#D86161",
        placeholderGreyGv: "#7A7A7A",
        placeholderBorderColorGv: "#E6E6E6",
        primaryBlueGv: "#1597E4",
      },
    },
  },
  plugins: [],
};
