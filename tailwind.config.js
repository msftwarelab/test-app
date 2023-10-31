/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      vs: "510px",
      sm: "780px",
      md: "1070px",
      td: "1110px",
      lg: "1248px",
      xl: "1440px",
    },
    extend: {
      // Define your primary and secondary colors here
      colors: {
        primary: '#13293D',
        primaryHover: '#1E3448',
        secondary: '#9EB4C3',
        secondaryHover: '#B7C9D5',
      },
    },
  },
  plugins: [],
}

