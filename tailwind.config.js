/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["none"], // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "secondary": "#111111",
      }
    },
  },
  plugins: [],
}