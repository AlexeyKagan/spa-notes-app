const path = require('path');

const config = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                ],
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        // GZIP Compression
        compress: true,
        port: 8080,
    }
};

module.exports = config;
