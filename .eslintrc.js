module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    'jsx-quotes': [1, 'prefer-double'],
    'prettier/prettier': ['warn'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
  },
  plugins: [
    'react',
    'import',
    'jsx-a11y',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-react-hooks',
    'redux-saga',
    'prettier',
  ],
};
