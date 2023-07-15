/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#e16162',
        secondary: '#fac05e',
        info: '#abd1c6',
        forest: '#0d160b',
        night: '#080d07'
      }
    }
  },
  plugins: []
}

