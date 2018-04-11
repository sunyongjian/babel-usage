
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const transform = require('./transform');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'a.js',
        to: 'b.js',
        transform,
      },
    ]),
  ]
}