let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject
  }, 10000)
})

setTimeout(
  () => {
    console.log()
  },
  0,
  promise
)

// example 2

export const Example2 = () => {
  const posts = [
    { title: "Post One", body: "This is posted by Avarile" },
    { title: "Post two", body: "This is posted by Anastasia" },
    { title: "Post three", body: "This is posted by Aurelia" },
    { title: "Post four", body: "This is posted by Emily" },
    { title: "Post five", body: "This is posted by Family" },
  ]

  const GetPosts = (posts) => {
    setTimeout(() => {
      let output = ""
      posts.forEach((post, index) => {
        output = output + `<li>${post.title}</li>`
      })
      document.body.innerHTML = output
    }, 3000)
  }
}

// Promise Array:
// use Array.prototype.forEach

export const PromiseQueue = (todos) => {
  let promise = Promise.resolve()

  todos.forEach((todo) => {
    promise = promise.then(() => {
      return new Promise((resolve) => {
        finishTodo(todo, () => {
          resolve()
        })
      })
    })
  })
  return promise
}

