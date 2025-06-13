import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // General rules
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-undef': 'off', // Turn off for config files that use require
    },
  },
  {
    ignores: [
      'dist/',
      'node_modules/',
      '.astro/',
      '.cache/',
      '.pnpm/',
      '*.log',
      '.env*',
      '.vscode/',
      '.idea/',
      '.DS_Store',
      '*.tmp',
      '*.temp',
    ],
  },
];