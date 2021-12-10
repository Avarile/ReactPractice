// Section 1: Unique elements
const UniqueEle = () => {
  const array1 = ["Avarile", "Emily", "Anastasia", "Aurelia", "Emily", "Aurelia"]
  let newArray = Array.from(new Set(array1))

  return newArray
}
// another solution
const UniqueEle2 = (array) => {
  let newArray = [...new Set(array)]
  return newArray
}

// section 2: use spread operator to combine 2 arrays
const CombineArrays = () => {
  const array1 = ["Avarile", "Emily"]
  const array2 = ["Anastasia", "Aurelia"]
  const newArray = [...array1, ...array2]
  console.log(newArray)
}

// section 3:
const CopyArray = () => {
  const array1 = ["Avarile", "Emily", "Anastasia", "Aurelia", "Emily", "Aurelia"]
  const newArray = [...array1]
  console.log(newArray)
}
// section 4: replace a certain element in the array
const SpliceArray = () => {
  const array1 = ["Avarile", "Emily", "Anastasia", "Aurelia"]
  let result = array1.splice(2, 1, "grand father") // here we replaced the Anastasia with Grande father

  return console.log(result, array1)

  // IMPORTANT!!! this func will change original array
}

// section 5: reset am array to enmpty
const ResetArray = () => {
  const array1 = ["Avarile", "Emily", "Anastasia", "Aurelia", "Emily", "Aurelia"]
  array1.length = 0 // when an array.lentgh = 0, its emptied

  return console.log(array1)
}

// section 6: turn an array in to object
const ConvertIntoObj = () => {
  const array1 = ["Avarile", "Emily", "Anastasia", "Aurelia", "Emily", "Aurelia"]
  const arrayObj = { ...array1 }

  return console.log(arrayObj)
}

// Fill some data in the array
const FillArray = () => {
  let array1 = new Array(8).fill("Avarile")

  return console.log(array1)
}

// Find the common elements between arrays
const FindCommonEle = () => {
  const array1 = ["Avarile", "Emily", "Anastasia", "Aurelia", "Emily", "Aurelia"]
  const array2 = ["Avarile", "Emily", "Anastasia", "grandFather", "grandeMother"]

  const uniqueArray1 = [...new Set(array1)] // Before find the common element first get rid of the duplicates
  const commonEle = uniqueArray1.filter((element) => array2.includes(element))
  return console.log(commonEle)
}

// section 7: Get rid of the falsy values
const DeleteFalsy = () => {
  const array1 = ["Avarile", "Emily", null, undefined, false, "", NaN, "Anastasia", "Aurelia", "Emily", "Aurelia"]

  const trueArray1 = array1.filter(Boolean)

  return console.log(trueArray1)
}

// lastIndexOf() using this we can find the index of an element 's last presence
const LastIndex = () => {
  const array1 = ["Avarile", "Emily", "Anastasia", "Aurelia", "Emily", "Aurelia"]

  const LastIndex = array1.lastIndexOf("Anastasia")
  return console.log(LastIndex)
}



// From here Contents from the Red Book
// Array.from()
// Array.of()

class ArrayFuncs {
  const string = Array.from("Matt") // the string will be break in to 'm', 'a', 't', 't'
  // from can also combine Sets and Map into an new array
  const newMapArray = new Map().set("Avarile", 'Emily').set('Anastasia', 'Aurelia')
  const newSetArray = new Set().add('Avarile').add("Emily").add('Anastasia').add('Aurelia')

  // use From to shalow copy an array 
  const array1 = [1, 2, 3, 4]
  const array2 = new Array.from(array1)
  // log(array1) [1, 2, 3, 4]
  // alert( array1 === array2 )  false



  const getArgsArray = (arguments) => {
    return Array.from(arguments)
  }
}

// Array.of() can turn a set of args into array

console.log(Array.of(1,2,3,4)); // [1, 2, 3, 4]


// Array empty slot and REMEMBER this is not encouraged to be used!!!

const options = [, , , ,] // an array has 5 elements
console.log(options.length); //5
console.log(options); // [, , , ,] and they are all undefined

// those empties are undefined
const options = [1, , , ,5]

for (const option of options) {
  console.log(option === undefined);
}
// false
// true
// true
// true
// false

// example 2:
const a = Array.from([, , ,])
for (val of a) {
  console.log(val === undefined);
}
// true
// true
// true


// this is not encouraged to be used


// Important Contents1: Add/Delete elements in an Array
// Important Contents1: Add/Delete elements in an Array
// Important Contents1: Add/Delete elements in an Array

// method1: length

const colors = ['red', 'green', 'blue', 'white', 'black'] // we have an array with 5 elements
colors.length = 4
console.log(colors[4]); // print the 5th element of the array but the array length already been decreased to 4, 
// undefined
