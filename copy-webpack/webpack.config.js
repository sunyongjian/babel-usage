
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        to: 'dist.js',
      },
    ]),
  ]
}