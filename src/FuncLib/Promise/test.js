
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