module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es2024: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.js',
                'postcss.config.js',
                'tailwind.config.js'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4]
    },
    settings: {
        react: {
            "version": "detect"
        }
    }

}
