/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': "#0b0b0b",
        'primary' : "#3c6e71"
      },
    },
  },
  plugins: [],
}
