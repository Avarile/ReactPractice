// Section 1: Unique elements
const array1 = ["Avarile", "Emily", "Anastasia", "Aurelia", "Emily", "Aurelia"]
let newArray = Array.from(new Set(array1))
// another solution
let newArray = [...new Set(array1)]
console.log(newArray)
console.log(array1)

// section 2: use spread operator to combine 2 arrays
const array1 = ["Avarile", "Emily"]
const array2 = ["Anastasia", "Aurelia"]
const newArray = [...array1, ...array2]
console.log(newArray)

// section 3:
const array1 = ["Avarile", "Emily", "Anastasia", "Aurelia", "Emily", "Aurelia"]
const newArray = [...array1]

// section 4:
let familyMembers = ["family"]
