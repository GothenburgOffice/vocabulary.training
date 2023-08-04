module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "key-spacing": ["error", { 
      "singleLine": {
          "beforeColon": false, 
          "afterColon": true 
      },
      "multiLine": {
          "beforeColon": false,
          "afterColon": true,
          "align": "colon"
      }
    }],
    "no-console": "warn",
    "quotes": ["error","single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false, "ignoreJSX": "all" }],
    "no-trailing-spaces": "error",
    "no-useless-return": "error",
    "no-warning-comments": [1, { "terms": ["todo", "fixme", "debug"], "location": "anywhere" }],
    "no-use-before-define": "error",
    "prefer-const": "error",
    "no-var": "error",
    "no-tabs": "error",
    "no-multiple-empty-lines": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "react/boolean-prop-naming": [2, { "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+" }],
    "react/destructuring-assignment": [2, "always"],
    "react/no-access-state-in-setstate": [2],
    "react/no-did-mount-set-state": [0],
    "react/no-did-update-set-state": [0],
    "react/no-redundant-should-component-update": [0],
    "react/no-unused-prop-types": [0],
    "react/no-unused-state": [0],
    "react/no-will-update-set-state": [0],
    "react/prop-types": [0],
    "react/react-in-jsx-scope": [0],
    "node/handle-callback-err": [0],
    "handle-callback-err": [0],
    "node/no-exports-assign": [0],
    "node/no-path-concat": [0],
    "node/no-callback-literal": [0],
    "node/no-new-require": [0],
    "semi": ["error", "never"],
    "no-extra-semi": "error"
  },
}
