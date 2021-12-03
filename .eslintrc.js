module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: ['cypress'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'vue/no-v-html': 'off',
    'vue/script-setup-uses-vars': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser', // the typescript-parser for eslint, instead of tslint
    sourceType: 'module', // allow the use of imports statements
    ecmaVersion: 2020, // allow the parsing of modern ecmascript
  },

  overrides: [
    {
      files: ['cypress/**/*.js'],
      rules: {
        'jest/expect-expect': 'off',
      },
    },
  ],
};
