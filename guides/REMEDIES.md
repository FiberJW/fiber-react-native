# React Native Remedies

## Packager

#### `@providesModule naming collision`

Run `yarn install && npm dedupe`

#### Flow not working?

Install the exact Flow version that `.flowconfig` speicifies. e.g. `yarn add --dev flow-bin@0.42.0`

#### Eslint config

```bash
#! /bin/bash
npm i --save-dev eslint eslint-config-prettier eslint-plugin-react eslint-plugin-filenames eslint-plugin-jsx-a11y eslint-config-formidable eslint-plugin-import prettier && echo 'module.exports = {
  extends: [
    "formidable/configurations/es6-react",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "consistent-return": 0,
    "react/sort-comp": [
      1,
      {
        order: [
          "static-methods",
          "everything-else",
          "/^on.+$/",
          "lifecycle",
          "render"
        ]
      }
    ]
  }
};' > .eslintrc.js
```
