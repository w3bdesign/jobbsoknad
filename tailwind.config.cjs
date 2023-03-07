/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      outline: {
        blue: '2px solid #0000ff',
      },
      colors: {
        'medhjelp-red': '#C30000',
      },
    },
  },
  plugins: [],
}
