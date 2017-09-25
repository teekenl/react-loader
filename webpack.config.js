const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports =[
    {
        entry: './src/react-loader.js',
        output: {
            path: path.resolve('dist'),
            filename: 'react-loader.js',
            publicPath: '/dist/'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: path.join(__dirname, 'src'),
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx$/,
                    loader: 'babel-loader',
                    include: path.join(__dirname, 'src'),
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    include: path.join(__dirname, 'src'),
                    loader: 'style-loader!css-loader'
                }
            ]
        },
    },
    {
        // uncomment this line if your index.html is located inside the app folder
        // context:  __dirname + '/app'
        entry: './src/text.js',
        output: {
            path: path.resolve('dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        devServer: {
            inline: true
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: path.join(__dirname, 'src'),
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx$/,
                    loader: 'babel-lodaer',
                    include: path.join(__dirname, 'src'),
                    exclude: /node_modules/
                }
            ]
        },
    }
];
