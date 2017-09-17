//const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    home: './client/src/client.js',
    styles: './client/src/less/style.less',
    search: './client/src/search.js'
  },

  output: {
    path: __dirname + "/public",
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js']
  },

  module: {

    rules: [{
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: './client/src/index.html',
      excludechunks: ['search']
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      hash: true,
      template: './client/src/search.html',
      excludechunks: ['home']
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],
  watch: true
}
;