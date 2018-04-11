var babel = require('babel-core');

function transform(content, path) {
  try {
    const result = babel.transform(content, {
      presets: ['env', 'stage-0'],
    }).code;
    return new Buffer(result, 'utf-8');
  } catch (e) {
    console.log(e);
    return content;
  }
}

module.exports = transform;
