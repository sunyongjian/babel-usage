async function a() {
  console.log('begin1');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('done1');
}
a();