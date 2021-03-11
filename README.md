## Instructions for unpublished package

You may need to run the following command first, to be able to add unofficial gitlab npm packages:
```sh
git config --global url."git@gitlab.com:".insteadOf "https://gitlab.com/"
```

1. Run following command in the directory of the project where `package.json` is located:
```sh
yarn add eslint git+https://gitlab.com/wacg/tools/eslint-config-wacg.git -D
```

for updating run:
```sh
yarn upgrade eslint-config-wacg
```

2. add `.eslintrc.js` in the root dirictory with following content:

```js
module.exports = {
  extends: [
    'wacg'
  ]
}
```

3. Either install the VS Code [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension for direct integration or add lint tasks to `package.json`:
```json
"scripts": {
  "lint": "eslint **/*.js",
  "lint:fix": "eslint **/*.js --fix"
}
```

for multiple file extensions:

```json
"scripts": {
  "lint": "eslint **/*.{js,vue}",
  "lint:fix": "eslint **/*.{js,vue} --fix"
}
```

[ESLint Command Line Docs](https://eslint.org/docs/user-guide/command-line-interface)