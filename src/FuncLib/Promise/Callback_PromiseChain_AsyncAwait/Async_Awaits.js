const stocks = {
  Fruits: ["Strawberry", "Grape", "Banana", "Apple"],
  Liquids: ["Water", "Ice"],
  HolderS: ["Cone", "Cup", "Stick"],
  Toppings: ["Chocolate", "Peanus"],
}

let is_shop_open = true

const order = async (time, job) => {
  try {
    await job()
  } catch (error) {
    throw new Error("error has occured")
  }
}
