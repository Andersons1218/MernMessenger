/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {

  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      'display': ['Helvetica'],
    },
    extend: {},
  },
  plugins: [],
}
