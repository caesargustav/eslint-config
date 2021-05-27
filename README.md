## WACG ESLint Config

ESLint configuration file for WACG projects

<!-- installing (start) -->
### Installing

npm
```sh
npm i -D eslint @wacg/eslint-config
```

yarn
```sh
yarn add -D eslint @wacg/eslint-config
```
<!-- installing (end) -->

<!-- configuration (start) -->
### Configuration
add `.eslintrc.js` in the root dirictory of your project with following content:

```js
module.exports = {
  extends: [
    '@wacg/eslint-config'
  ]
}
```
<!-- configuration (end) -->

<!-- tasks (start) -->
### Tasks
add the following task to the `scripts` section of your `package.json`

```json
"scripts": {
  "lint": "eslint **/*.js",
  "lint:fix": "eslint **/*.js --fix"
}
```
<!-- tasks (end) -->