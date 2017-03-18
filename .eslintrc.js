const path = require('path')

module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint-config-airbnb-easy",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "env": {
    "es6": true,
    "jasmine": true
  }
}
