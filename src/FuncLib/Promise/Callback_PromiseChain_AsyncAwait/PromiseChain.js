const stocks = {
  Fruits: ["Strawberry", "Grape", "Banana", "Apple"],
  Liquids: ["Water", "Ice"],
  HolderS: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanus"],
}

let is_shop_open = true

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work())
      }, time)
      // when the shop is opened, we are going to resolve the Promise --- to do the work
    } else reject(console.log("Our shop is Closed"))
  })
}

order(2000, () => {
  console.log(`${stocks.Fruits[0]} was selected`)
})
  .then(() => {
    return order(0000, () => {
      console.log("Production has started")
    })
  })
  .then(() => {
    return order(2000, () => {
      console.log("The Fruit has Chopped")
    })
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.Liquids[1]} and ${stocks.Liquids[0]} was selected`)
    })
  })
  .then(() => {
    return order(1000, () => {
      console.log("the Machine was started")
    })
  })
  .then(() => {
    return order(1000, () => {
      console.log(`iceCream was placed on ${stocks.HolderS[0]}`)
    })
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.Toppings[1]} was selected`)
    })
  })
  .then(() => {
    return order(2000, () => {
      console.log("IceCream is served")
    })
  })
  .catch(() => {
    // catched the error when the Promise cannt be resolved --- it's rejected
    console.log("Customer left")
  })
  .finally(() => {
    console.log("Day ended shop is closed")
  })
