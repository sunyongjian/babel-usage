Object.values = require('babel-runtime/core-js/object/values').default;

console.log(Object.values({ 1: 2 }));

var a = async function a() {
  console.log('begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('done');
}
a();