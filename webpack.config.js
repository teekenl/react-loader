const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
      // uncomment this line if your index.html is located inside the app folder
      // context:  __dirname + '/app'
      entry: './src/text.js',
      output: {
        path: path.join(__dirname,'build'),
        filename: 'bundle.js'
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
            test: /\.css$/,
            loader: 'style-loader!css-loader!',
            include: path.join(__dirname, 'src')
          }
        ]
      }
};
