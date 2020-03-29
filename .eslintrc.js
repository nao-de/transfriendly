module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    "plugin:flowtype/recommended",
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  "parser": "babel-eslint",
  'plugins': [
    'react',
    'flowtype'
  ],
  'rules': {
    "flowtype/require-valid-file-annotation": [
      2,
      "always"
    ]
  },
};
