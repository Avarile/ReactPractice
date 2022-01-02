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

// Promise

// Imagine that you’re a top singer, and fans ask day and night for your upcoming song.

// To get some relief, you promise to send it to them when it’s published. You give your fans a list. They can fill in their email addresses, so that when the song becomes available, all subscribed parties instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can’t publish the song, they will still be notified.

// Everyone is happy: you, because the people don’t crowd you anymore, and fans, because they won’t miss the song.

// This is a real-life analogy for things we often have in programming:

//     A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
//     A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
//     A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

// The analogy isn’t terribly accurate, because JavaScript promises are more complex than a simple subscription list: they have additional features and limitations. But it’s fine to begin with.

// The constructor syntax for a promise object is:

const PromiseExample2 = (callback) => {
  let promise = new Promise((resolve, reject) => {
    callback() // executor (the producing code, singer)
  })
}
