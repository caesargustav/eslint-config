## Unpublished package

| Action     | Command |
| ---------- | ------- |
| Installing | `npm -g add https://gitlab.com/wacg/tools/eslint-config-wacg` |
| Updating   | `npm update -g eslint-config-wacg` |
| Removing   | `npm remove -g eslint-config-wacg` |

add `.eslintrc.js` in the root dirictory with following content:

```js
module.exports = {
  extends: [
    'wacg'
  ]
}
```