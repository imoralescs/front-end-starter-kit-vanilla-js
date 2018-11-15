module.exports = {
    'env': {
        'browser': true,
    },
    'extends': [
        'airbnb'
    ],
    'plugins': [],
    'parserOptions': {},
    'globals': {
        'expect': true,
        'test': true,
        'describe': true,
        'afterEach': true,
        'beforeEach': true,
        'navigator': true,
        'window': true,
        'fetch': true,
    },
    'rules': {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'no-underscore-dangle': 'off',
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};