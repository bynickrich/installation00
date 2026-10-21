/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-css-order'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};

export default config;
