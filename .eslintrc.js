module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [],
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  globals: {},
  rules: {
    'vue/no-unused-vars': 'error',
    'vue/no-v-html': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extra-semi': 'error',
    'semi': ['error', 'never'],
    'quotes': ['warn', 'single'],
  }
}
