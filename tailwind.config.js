/** @type {import('tailwindcss').Config} */
const light = require('daisyui/src/theming/themes')['[data-theme=light]'];

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", 'sans-serif']
      },
      backgroundImage: {
        'banner-1': 'url("../assets/images/banner1.png")',
        'banner-2': 'url("../assets/images/banner2.png")',
        'banner-3': 'url("../assets/images/banner3.png")',
        'banner-4': 'url("../assets/images/banner4.png")',
      }
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        // customize daisyui light theme
        light: {
          ...light,
          primary: '#F85559',
          neutral: '#121212',
          'primary-content': '#FFFFFF',
          'neutral-content': '#FFFFFF',
          'base-content': '#121212',
        }
      }
    ],
  },
};
