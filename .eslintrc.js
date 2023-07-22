module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'i18n'],
  env: {
    jest: true,
  },
  rules: {
    'prettier/prettier': [2, { bracketSpacing: true }],
    'react-hooks/exhaustive-deps': 'off',
    'no-shadow': 'off',

    'react/jsx-sort-props': [
      'error',
      { shorthandFirst: true, callbacksLast: true },
    ],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-fragments': 'warn',
    'react/jsx-key': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-deprecated': 'warn',

    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-types': ['error', { types: { object: false } }],
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    'i18n/no-russian-character': [
      'error',
      {
        includeIdentifier: true,
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
