const array = ["Avarile", "Sparutus", "Emily", "Anastasia", "Aurelia", "Blacky"]

const printLog = (logItem) => {
  console.log(logItem)
}

for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    printLog(array[i]) // your logic code
  }, i * 3000) // NOTE!!! i * 1000
}
