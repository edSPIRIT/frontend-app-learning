// eslint-disable-next-line import/no-extraneous-dependencies
const { createConfig } = require('@edx/frontend-build');

module.exports = createConfig('eslint', {
  overrides: [{
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)', 'setupTest.js'],
    rules: {
      'import/named': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-no-constructed-context-values': 'off',
    },
  }],
  rules: {
    'no-restricted-exports': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'func-names': 'off',
  },
});
