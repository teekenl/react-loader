const path = require(path);

module.exports = {
    entry: '../app/home.js',
    output: {
        path: path.resolve(dist),
        filename: 'react-loader.js'
    },
    module: {
        loaders:[
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
    }

}