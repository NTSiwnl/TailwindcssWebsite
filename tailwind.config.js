/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**.html'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
