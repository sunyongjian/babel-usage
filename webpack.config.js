
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './helpers/index.js'
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
  }
}