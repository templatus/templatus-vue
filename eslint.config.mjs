import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import pluginJest from 'eslint-plugin-jest';

import vueTsEslintConfig from '@vue/eslint-config-typescript';
import prettierConfig from '@vue/eslint-config-prettier';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPrettierRecommended,
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  {
    files: ['spec/javascript/**'],
    ...pluginJest.configs['flat/recommended'],
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-var-requires': 'off',
      'vue/no-v-html': 'off',
    },
  },
  {
    ignores: [
      '.ruby-lsp/',
      '.yarn/',
      'config/',
      'coverage/',
      'db/',
      'log/',
      'node_modules/',
      'public/',
      'tmp/',
      'vendor/',
    ],
  },
  prettierConfig,
];
