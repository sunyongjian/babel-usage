
require('babel-core/register')({ presets: [], plugins: ['transform-runtime', 'babel-plugin-transform-async-to-generator', 'babel-plugin-transform-es2015-modules-commonjs']});
require('./async');