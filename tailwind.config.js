// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FBD784",
          '600': "#FFA343",
          '500': "#FFC178",
          '400': "#FFD1A0",
        },
      },
    },
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
