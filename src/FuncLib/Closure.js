// there are 9 main Closure usage and they are:

// 1. Return value

function Main(){  // definition
  let name = 'Avarile'
  return function () { 
    return name
  }
}
// usage
let returnFunction = Main();
console.log(returnFunction()); // Avarile


// 2. Pass value as a function

let Func2 // define a variable
function Main() {
  let name = "Avarile"
  // pass the value to Func2
  Func2 = function () {
    return name 
  }
}

// usage
Main() // pass the value to Func2
console.log(Func2()); // Avarile

// 3. Function a prop to pass in or return

const Main = () => {
  let name = "Avarile";
  return Callback = () => {
    return name
  }
}

// usage

  const instance = Main() // pass the return of Main to variable instance

  const ConsumeFunc = (func) => {
    console.log(func()); // ConsumeFunc accepts a func as a prop and run this func within 
}

  ConsumeFunc(instance)


// 4. An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.

(function () {
  statements
})();

//It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

//  The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//  The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

//  We would also use IIFE to create private and public variables and methods. For a more sophisticated use of the module pattern and other use of IIFE, you could see the book Learning JavaScript Design Patterns by Addy Osmani.

const makeWithdraw = balance => (function(copyBalance) {
  let balance = copyBalance; // This variable is private
  let doBadThings = function() {
    console.log("I will do bad things with your money");
  };
  doBadThings();
  return {
    withdraw: function(amount) {
      if (balance >= amount) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient money";
      }
    },
  }
})(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20));  // 0


// 5. Looping access props --- which works just like Iterator

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

// or in ES6 arrow function

const makeAdder = (x) => {
  return (y) => {
    return x + y
  }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


// Example of Looping with closure

var array = []; // init an empty array

for (let i = 0; i < 3; i++) {          
    array[i] = function() {            
      console.log("My value: " + i); 
    };
}
