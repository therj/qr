const { resolve } = require(`node:path`);

const project = resolve(process.cwd(), `tsconfig.json`);

const customRules = {
  'no-octal-escape': 0,
  'import/no-unresolved': `error`,
  'import/extensions': [
    `error`,
    `never`,
    {
      ignorePackages: true,
      pattern: {
        js: `never`,
        ts: `never`,
        json: `always`,
      },
    },
  ],
  'prettier/prettier': [
    `error`,
    {
      trailingComma: `es5`,
      semi: true,
      printWidth: 80,
      singleQuote: true,
    },
    { usePrettierrc: false },
  ],
  'linebreak-style': [`error`, `unix`],
  'eol-last': [`warn`, `always`],
  'no-console': `error`,
  'no-unused-vars': [
    `error`,
    { argsIgnorePattern: `^_`, varsIgnorePattern: `^__` },
  ],
  'no-underscore-dangle': [`error`, { allow: [`_id`, `_doc`] }],
  quotes: [
    `error`,
    `backtick`,
    { avoidEscape: true, allowTemplateLiterals: false },
  ],
  // "unicorn/filename-case": ["off"],
  // "@typescript-eslint/explicit-function-return-type": ["off"],
  // "@typescript-eslint/array-type": ["error", { default: "generic" }],
};

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: [`import`],
  extends: [`airbnb-base`, `plugin:prettier/recommended`, `next`],
  ignorePatterns: [`node_modules/`, `dist/`, `.next`],
  parserOptions: {
    ecmaVersion: `latest`,
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  // add rules configurations here
  rules: {
    ...customRules,
    'import/no-default-export': `off`,
    'import/prefer-default-export': `off`,
    '@typescript-eslint/no-unused-vars': [
      `error`,
      { argsIgnorePattern: `^_`, varsIgnorePattern: `^_` },
    ],
  },
  overrides: [
    {
      files: [`**/*.ts`, `**/*.tsx`],
      extends: [
        `plugin:@typescript-eslint/recommended`, // Extend TypeScript rules
      ],
      parser: `@typescript-eslint/parser`,
      plugins: [`@typescript-eslint`],
    },
  ],
};
