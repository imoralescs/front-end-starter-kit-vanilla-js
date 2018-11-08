const path = require('path');
const fs = require('fs');
const util = require('util')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MODE = 'development';
const enabledSourceMap = (MODE === 'development');

const pug = {
    test: /\.pug$/,
    use: ['html-loader?attrs=false', 'pug-html-loader']
};

const sass = {
    test: /\.scss/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
                url: false,
                sourceMap: enabledSourceMap,
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: enabledSourceMap,
            }
        }]
    })
};

// Generate list page of HtmlWebpackPlugin
const pages = fs
    .readdirSync(path.resolve(__dirname, 'src/pug'))
    .filter(fileName => fileName.endsWith('.pug'))

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [pug, sass]
    },
    plugins: [
        /*new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/pug/index.pug',
            inject: false
        }),*/
        ...pages.map(page => {
            const temp = page.split('.').slice(0, -1).join('.');
            return new HtmlWebpackPlugin({
                filename: `${temp}.html`,
                template: `src/pug/${page}`,
                inject: false
            })
        }),
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;