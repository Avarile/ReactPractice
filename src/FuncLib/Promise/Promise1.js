let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject
  }, 10000)
})

setTimeout(() => {
  console.log();
}, 0, promise);