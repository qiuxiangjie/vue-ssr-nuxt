module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", '@vue/prettier'],
  // add your custom rules here
  rules: {
    "nuxt/no-cjs-in-config": "off",
    // 'no-console': 0,
    //'prettier/prettier': 'off',
    "eslint.autoFixOnSave": true,
    "prettier/prettier": [
      "warn",
      {
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "avoid",
        proseWrap: "never",
        printWidth: 120,
        overrides: []
      }
    ]
    // "generator-star-spacing": "off",
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-unused-vars": "off"
  }
};
