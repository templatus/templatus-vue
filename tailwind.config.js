module.exports = {
  mode: 'jit', // https://tailwindcss.com/docs/just-in-time-mode
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  purge: [
    './app/**/*.html',
    './app/**/*.html.erb',
    './app/**/*.rb',
    './app/packs/**/*.vue',
    './app/packs/**/*.js',
  ],
  plugins: [require('@tailwindcss/forms')],
};
