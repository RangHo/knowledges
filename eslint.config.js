import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import svelteParser from 'svelte-eslint-parser';
import sveltePlugin from 'eslintplugin-svelte';

const config = [
  // Ignore generated files
  {
    ignores: ['.svelte-kit/**/*'],
  },

  // Load predefined configs
  eslint.configs.recommended,

  // JavaScript settings
  {
    files: ['**/*.js'],
  },

  // TypeScript settings
  {
    files: ['**/*.ts'],
    ignores: ['playwright.config.ts', 'vite.config.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },

  // Svelte settings
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        project: './tsconfig.json',
        extraFileExtensions: ['.svelte'],
      },
    },
    plugins: {
      svelte: sveltePlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...sveltePlugin.configs.recommended.rules,
    },
  },
];

export default config;
