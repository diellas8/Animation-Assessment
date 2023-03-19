/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "project-icon-blue": "#0000ff",
        "projcet-icon-pink": "#ff00ff",
        "project-icon-green": "#00ff00",
      }
    },
  },
  plugins: [],
}