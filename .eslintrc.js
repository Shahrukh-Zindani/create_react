const path = require('path')

module.exports = {
    "extends": "airbnb",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js"],
                "paths": [
                    "node_modules",
                    path.join(__dirname, "src"),
                    __dirname
                ]
            }
        }
    },
    "rules": {
        "strict": [
            2, "global"
        ],
        "comma-dangle": [
            1, {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "ignore"
            }
        ],
        "semi": [
            2, "never"
        ],
        "max-len": [
            2, {
                "code": 160
            }
        ],
        "arrow-body-style": [
            2, "as-needed"
        ],
        "react/jsx-no-bind": [
            1, {
                "ignoreRefs": true,
                "allowArrowFunctions": true,
                "allowBind": false
            }
        ],
        "no-confusing-arrow": [
            "error", {
                "allowParens": true
            }
        ],
        "react/prefer-stateless-function": [1],
        "react/no-string-refs": [1],
        "react/jsx-filename-extension": [
            1, {
                "extensions": [".js", ".jsx"]
            }
        ],
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": true
            }
        ],
        "react/no-unused-prop-types": [
            1, {
                skipShapeProps: true
            }
        ],
        "react/prop-types": [
            1, {
                skipUndeclared: true
            }
        ],
        "object-shorthand": [
            0, "always"
        ],
        "no-unused-vars": [2],
        "no-console": 1,
        "consistent-return": 0,
        "arrow-parens": [
            2, "always"
        ],
        "no-return-assign": [1],
        "no-underscore-dangle": [1]
    },
    "globals": {
        "window": true,
        "document": true,
        "location": true,
        "sessionStorage": true,
        "localStorage": true,
        "expect": true,
        "beforeEach": true,
        "jest": true,
        "google": true
    }
}
