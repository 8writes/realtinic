/** @format */

import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {   
      fontFamily: {
        'Plus-Jakarta-Sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'realtinic-purple': '#5937BE',
        'realtinic-grey': '#999999',
        'realtinic-violet': '#E1D8F8;',
        'realtinic-yellow': '#FED532',
        'realtinic-green': '#00A858',
        'realtinic-l-green': '#EBFFEE',
        'realtinic-purple-shadow': '#3A1E5D',
        'dash-bg': '#FAFAFA',
        danger: '#FF0000',
      },
      screens: {},
      backgroundImage: {},
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
