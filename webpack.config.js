const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry: {
    home: './client/src/client.jsx',
    styles: './client/src/less/style.less'
  },

  output: {
    path: __dirname + "/public",
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js']
  },

  devtool: 'inline-source-map',

  module: {

    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },


  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.jsx?$/,
      options: {
        eslint: {
          configFile: path.join(__dirname, '.eslintrc')
        }
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: './client/src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  watch: true
};
