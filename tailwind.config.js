/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#7C70B0',
        'grey': '#3E3E3E',
      },
      fontFamily: {
        'cgothic': ['c-gothic', 'sans-serif'],
      },
      backgroundImage: {
        'phone': 'url("/src/assets/phone-back.png")',
        'stop': 'url("/src/assets/stop.jpg")',
        'alveoles': 'url("/src/assets/back-alveoles.jpg")',
      },     
    },
  },
  plugins: [],
}

