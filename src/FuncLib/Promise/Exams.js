// Exam 1

const promise1 = new Promise((resolve, reject) => {
  console.log("Promise - 1")
})
console.log("1", promise1)

// Promise - 1
// 1 Promise {<pending>}

// Exam 2

const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve("success")
  console.log(2)
})

promise.then(() => {
  console.log(3)
})
console.log(4)

// My answer :
// 1
// 2
// 4
// 3

// answer 1 2 4 3 correct

// Exam 3

const promise1 = new Promise((resolve, reject) => {
  console.log("Promise - 1") // normall func call is called asynclly
  resolve("resolve - 1")
})

const promise2 = promise1.then((res) => {
  console.log(res) // which is resolve - 1
})

console.log("1", promise1)
console.log("2", promise2)

// my answer
// Promise - 1
// 1, Promise { <resolved> : "resolve - 1" }
// 2, Promise { <pending> }
// resolve - 1

// my answer is correct

// Exam 4 promise with setTimeout

console.log("start")
setTimeout(() => {
  console.log("time")
}, 0)

Promise.resolve().then(() => {
  console.log("resolve")
})

console.log("end")

// my answer
// start , end, resolve, time

// Exam 5

const promise = new Promise((res, rej) => {
  console.log("1")
  setTimeout(() => {
    console.log("timer start")
    resolve("resolve - 1")
    console.log("timer ends")
  }, 0)
  console.log("2")
})

promise.then((res) => {
  console.log(res) // pending while the first fun through
})
console.log("4")

// my answer
// 1, 2, 4, resolve - 1, timer start, timer ends

// correct answer
// 1, 2, 4, timer start, timer ends, resolve - 1

// Exam 6

Promise.resolve().then(() => {
  console.log("promise - 1")
  const timer2 = setTimeout(() => {
    console.log("timer - 2")
  }, 0)
})

const timer1 = setTimeout(() => {
  console.log("timer - 1")
  Promise.resolve().then(() => {
    console.log("promise - 2")
  })
}, 0)

console.log("start")

// my answer
// start, promise - 1, timer -1, Promise - 2, timer - 2

// Exam 7 with then, catch, and finally

const promise = new Promise((res, rej) => {
  res("success1")
  rej("error")
  res("success2")
})

promise
  .then((res) => {
    console.log("then", res)
  })
  .catch((err) => {
    console.log("catch", err)
  })

// my answer
// then success1
// correct

// Exam 8

const promise = new Promise((res, rej) => {
  rej("error") // rej get called first so res will not be called 
  res("success")
})

promise
  .then((res) => {
    console.log("then", res);
  }).then()
