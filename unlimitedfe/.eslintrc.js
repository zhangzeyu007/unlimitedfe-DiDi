module.exports = {
    root: true,
    env: { browser: true, es2021: true, node: true },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'airbnb-base',
        // '@vue/typescript/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    // parserOptions: {
    //     ecmaVersion: 2020,
    // },
    plugins: ['import', '@typescript-eslint'],
    rules: {
        'prettier/prettier': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-undef': 0,
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'import/extensions': ['off'],
        'import/extensions': [
            'error',
            {
                ignorePackages: true,
                pattern: {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                    scss: 'never',
                    vue: 'always',
                },
            },
        ],
        // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['vite.config.ts'] }],
        'import/no-unresolved': [
            2,
            {
                ignore: ['^@/'], // @ 是设置的路径别名
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/v-on-event-hyphenation': [
            'error',
            'never',
            {
                autofix: true,
            },
        ],
        'vue/attribute-hyphenation': ['error', 'never'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-void': ['error', { allowAsStatement: true }],
        'no-restricted-globals': ['error', 'event', 'fdescribe'],
        'import/prefer-default-export': 0,
        'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"],
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.scss'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            alias: {
                map: [['/@', './src']],
                extensions: ['.ts', '.js', '.jsx', '.json', '.scss'],
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
