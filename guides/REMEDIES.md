# React Native Remedies

## Packager

#### `@providesModule naming collision`

Run `yarn install && npm dedupe`

#### Flow not working?

Install the exact Flow version that `.flowconfig` speicifies. e.g. `yarn add --dev flow-bin@0.42.0`

#### Eslint config

```bash
#! /bin/bash
npm i --save eslint chalkdust eslint-config-prettier eslint-plugin-jsx-control-statements jsx-control-statements eslint-plugin-react eslint-plugin-react-native eslint-plugin-import prettier && echo 'module.exports = {
  extends: [
    "chalkdust",
    "plugin:jsx-control-statements/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  plugins: ["jsx-control-statements", "react", "react-native"],
  rules: {
    "react/prop-types": 1,
    "react-native/no-unused-styles": 1,
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
