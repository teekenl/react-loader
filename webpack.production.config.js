const path = require(path);
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: '../src/react-loader.js',
    output: {
        path: path.resolve('dist'),
        filename: 'react-loader.js'
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
            }
        ]
    },
    plugins: []

};