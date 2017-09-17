const path = require(path);
const webpack = require('webpack');
const uglify = require('uglifyjs-webpack-plugin');

module.exports =[
    {
        // context
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
                    loader: 'babel-lodaer',
                    include: path.join(__dirname, 'src'),
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new webpack.EnvironmentPlugin([  // Setup environment for development
                'NODE_ENV',
            ]),
            new UglifyJsPlugin({sourceMap: true})
        ]
    },
    {
        // uncomment this line if your index.html is located inside the app folder
        // context:  __dirname + '/app'
        entry: '../src/example.js',
        output: {
            path: path.resolve('dist'),
            filename: 'example.js'
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
