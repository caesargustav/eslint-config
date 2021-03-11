## Installing an unpublished package

```sh
npm -g add https://gitlab.com/wacg/tools/eslint-config-wacg
```

add `.eslintrc.js` in the root dirictory with following content:

```js
module.exports = {
  extends: [
    'wacg'
  ]
}
```