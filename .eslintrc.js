module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:protractor/recommended",
        "cucumber",
        "chai-friendly",
        "chai-expect"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {

        "no-unused-expressions": 0,
        "chai-friendly/no-unused-expressions": 2,
        "chai-expect/missing-assertion": 2,
        "chai-expect/terminating-properties": 1

    }
};