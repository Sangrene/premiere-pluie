/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      unbounded: ["Unbounded", "sans-serif"]
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#FCFCFF',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        "primary": "#7CBFEF",
        "black": "#1D1D1F"
      },
    }

  },
  plugins: [],
}

