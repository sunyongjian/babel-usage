new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000)
})

var b = async function b() {
  console.log('begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('done');
}
b();