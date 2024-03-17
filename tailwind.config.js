/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#7C70B0',
        'grey': '#3E3E3E',
      },
      fontFamily: {
        'cgothic': ['c-gothic', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'phone': 'url("../assets/phone-back.png")',
        'stop': 'url("../assets/stop.jpg")',
        'alveoles': 'url("../assets/back-alveoles.jpg")',
        // 'alveoles2': 'url("../assets/alveoles2.png")',
      },     
    },
  },
  plugins: [],
}


