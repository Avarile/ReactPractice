function queue(things) {
  let promise = Promise.resolve()
  things.forEach((thing) => {
    // 这里很容易出错，如果不把 `.then()` 返回的新实例赋给 `promise` 的话，就不是队列，而是批量执行
    promise = promise.then(() => {
      return new Promise((resolve) => {
        doThing(thing, () => {
          resolve()
        })
      })
    })
  })
  return promise
}

queue(["lots", "of", "things"])
