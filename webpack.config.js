const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  APP_SRC: path.resolve(__dirname, 'app'),
};

const config = {
  entry: './app/app.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map',

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
          'css-loader',
          'postcss-loader'
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.APP_SRC, 'index.html'),
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8081,
  },

};

module.exports = config;
