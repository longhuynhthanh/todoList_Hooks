const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const vendor = [
    'axios',
    'react',
    'react-dom',
    'react-router-dom',
    'semantic-ui-react'
];

const devServer = {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    compress: true,
    port: 8080
  };

module.exports = {
    entry: {
        index: ['./src/index.js', 'babel-polyfill'],
        vendor: vendor
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
        alias: {
            '../../theme.config$': path.join(__dirname, 'my-semantic-theme/theme.config')
        }
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/,
            },
            {
                loader: 'file-loader',
                test: /\.(jpe?g|gif|png|svg|woff|woff2|eot|ttf|wav|mp3|ico)$/
            },
            //LESS
            {
                test: /\.(less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugins({
            template: 'src/index.html'
        }),
        // this handles the bundled .css output file
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
            //filename: "./css/[name].css"
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        }
    },
    devServer
}