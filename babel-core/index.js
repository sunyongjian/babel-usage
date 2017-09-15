var babel = require('babel-core');
var transform = babel.transform;
var path = require('path');
var result = babel.transformFileSync(path.resolve(__dirname) + "/test.js", {
  presets: ['env'],
  plugins: ['transform-runtime'],
});

console.log(result, 'res');
