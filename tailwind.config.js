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
    './app/**/*.html',
    './app/**/*.html.erb',
    './app/**/*.rb',
    './app/javascript/**/*.vue',
    './app/javascript/**/*.js',
  ],
  plugins: [require('@tailwindcss/forms')],
};
