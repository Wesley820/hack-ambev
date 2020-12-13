module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
