/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-font": "#332323",
        "light-font": "#704646",
        "white-bone": "#fffcfb",
      },
      borderRadius:{
        'custom':'20px'
      }
    },
  },
  plugins: [],
};
