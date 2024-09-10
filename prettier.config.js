/** @type {import('prettier').Config} */
const config = {
  semi: true,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};

export default config;
