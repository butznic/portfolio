/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures all React files in src are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}