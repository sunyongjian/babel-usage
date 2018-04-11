
var webpack = require('webpack');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
  ]
}