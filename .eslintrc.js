module.exports = {
    root: true,
    extends: [
        'standard',
        "plugin:flowtype/recommended",
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    plugins: [
        'html',
        'vue',
        'flowtype'
    ],
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true,
        }
    },
    parserOptions: {
        parser: "babel-eslint",
        sourceType: 'module',
        "ecmaFeatures": {
            "jsx": true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        amd: true
    },
    rules: {
        "linebreak-style": [0, "error", "windows"],
        "indent": ['error', 4],
        'space-before-function-paren': 0,
        'eol-last': 0,
        'semi': ['error', 'always'],
        "quotes": 0,
        "no-console": ["error", {
            allow: ["log", "warn"]
        }],
        "arrow-parens": 0,
        "no-new": 0,
        "no-throw-literal": 0
    },
    globals: {
        "document": true,
        "localStorage": true,
        "window": true,
        "jQuery": true,
        $: true
    }
}