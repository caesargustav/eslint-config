## Instructions for unpublished package

1. Run following command in the directory of the project where `package.json` is located
```sh
yarn add eslint git+https://gitlab.com/wacg/tools/eslint-config-wacg.git -D
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
  "lint": "eslint **/*.{js,vue}",
  "lint:fix": "eslint **/*.{js,vue} --fix"
}
```

[ESLint Command Line Docs](https://eslint.org/docs/user-guide/command-line-interface)