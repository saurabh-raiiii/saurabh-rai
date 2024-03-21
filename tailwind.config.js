/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple-400" : "#291C3A",
        "purple-300" : "#331C52",
        "purple-200" : "#8121D0",
        "purple-100" : "#DCCFED",
      }
    },
  },
  plugins: [],
}