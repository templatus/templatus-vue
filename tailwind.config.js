/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        rails: {
          light: '#D30001',
          dark: '#690000',
        },
        vue: {
          DEFAULT: '#42b883',
        },
        rose: {
          DEFAULT: '#F0E7E9',
        },
      },
    },
  },
  content: [
    './app/**/*.{html,html.erb,rb}',
    './app/javascript/**/*.{vue,js,ts}',
  ],
  plugins: [require('@tailwindcss/forms')],
};
