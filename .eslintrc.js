module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "space-before-function-paren": [0, "always"],
    "camelcase": [0, {"properties": "never"}],
    "no-useless-escape": 0,
    "no-duplicate-case": 0,
    "prefer-const": 0,
    "no-undef": 0,
    "no-unused-vars": 1,
    "import/no-duplicates": 0,
    "no-multiple-empty-lines": 0,
    "semi":0,
    "quotes": 0,
    "prefer-promise-reject-errors": 0,
    "no-async-promise-executor": 0,
    'dot-notation': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    "no-callback-literal": 0,
    "handle-callback-err": 0
  }
}
