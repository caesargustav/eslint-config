module.exports = {
  extends: [
    'esnext',
    'plugin:vue/recommended' // Vue 2
  ],
  plugins: [
    'vue'
  ],
  rules: {
    /**
     * custom rules
     * docs: https://eslint.org/docs/rules
     */
    // possible errors
    /* activated in esnext preset */

    // best practices
    'eqeqeq': ['error', 'smart'],
    'no-empty-function': 'error',
    'no-invalid-this': 'error',
    'no-multi-spaces': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'require-await': 'error',
    'yoda': 'error',

    // variables
    'no-use-before-define': 'error',

    // stylistic issues
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'func-call-spacing': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2],
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { 'consistent': true }],
    'object-curly-spacing': ['error', 'always', {
      'objectsInObjects': true,
      'arraysInObjects': true
    }],
    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',

    // ECMAScript 6
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
  }
}