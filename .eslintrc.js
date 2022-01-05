module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    env: {
      browser: true,
      node: true,
      es6: true
    },
    extends: [
      'plugin:vue/strongly-recommended',
      'eslint-config-egg',
    ]
  }
  