import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{html,html.erb,rb}',
    './app/javascript/**/*.{vue,js,ts}',
  ],
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
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
