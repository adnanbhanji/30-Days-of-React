// declaring variables
// let allows you to reassign vals, whereas const is constant
let x = 2;
console.log(x);
x = 3;
console.log(x);

const y = 20;
console.log(y);

// Arrays
// way 1
const arr1 = Array(); // const is preferred over let in arrays
// or
let arr = new Array();

console.log(arr1); // []

// way 2 - recomended way
const arr2 = [];
console.log(arr2);

// an array of numbers
const numbers = [1, 2, 3, 4, 5];
// an array of strings
const fruits = ["apple", "banana", "cherry"];

console.log("Numbers:", numbers);
console.log("Numbers Length:", numbers.length);

console.log("Fruits:", fruits);
console.log("Fruits Length:", fruits.length);

// can also have different data types within one array.

// making an array from a string. if we don't put space, we split each letter.
const string = "hi my name is adnan";
const stringArr = string.split(" ");
console.log(stringArr);

console.log(stringArr[3]); // accessing 4th elem

stringArr[3] = "iss"; // can replace elements
console.log(stringArr);

// common aray methods
// const arr8 = Array(8): creates an array with 8 empty values
// const eightXvalues = Array(8).fill('X'): creates arr with 8 X values
// const arrcombined = arr8.concat(eightXvalues) : combines the two arrays
// console.log(arrcombined.length) : gets length of arr
// console.log(arrcombined.indexOf(5)) : returns -1 if doesn't exist, else the index
// some other ones are .lastIndexof, .includes, .toString, .join, .slice, .splice, .push, .pop, .reverse

// Conditionals

// if, else if, else statements
// example

const weather = "sunny";
if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}

// these can also be written in switch case format.
// another way is ternary operators. very famous in react so its necessary to know how these work.
// example - the first part after the ? is the true part, the latter after the : is the else part

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

// exercises for ternary operators
//If a is greater than b return 'a is greater than b' else 'a is less than b'.
const a = 32;
const b = 31;

a > b ? console.log("a is greater than b") : console.log("a is less than b");

//
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = 79;

let grade =
  score >= 80
    ? "A"
    : score >= 70
    ? "B"
    : score >= 60
    ? "C"
    : score >= 50
    ? "D"
    : "F";

console.log(grade);

// loops
// mainly for and while loops are used. but there are others like do while, for of, etc
// using a for loop to sum only even numbers

let sum = 0;
for (let i = 0; i < 101; i += 2) {
  sum += i;
}

console.log(sum);

// another way

let total = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    total += i;
  }
}
console.log(total);

// this can also be done with a while loop, but it's mostly used for when we don't know when or how many iterations to do
let guess = 9; // imagine this was asked as input
while (guess > 0) {
  console.log(`We are ${guess} steps away!!`);
  guess--; // decrement each time
}

// scopes

// we have global, local, and function scope.
// in global, declare an element outside a function/block and it can be accessed from anywhere
// in local, declare an element in a function, and can only be accessed in the function and its inner functions
// in function, similar to previous, it's only accessible in the function, but if declared within a block in the function, its only accessible there.

// eg - difference b/w local and function scope in code

function bar() {
  let localVariable = "I am a local variable";
  console.log(localVariable); // 'I am a local variable'
}
bar();

function baz() {
  if (true) {
    let functionVariable = "I am a function variable";
    console.log(functionVariable); // 'I am a function variable'
  }
  //console.log(functionVariable); // ReferenceError: functionVariable is not defined
}
baz();

// objects - key value pair

obj1 = {
  name: "Adnan",
  age: 20,
  city: "Madrid",
};

console.log(obj1);
console.log(obj1.name);
console.log(obj1["name"]);

// have many methods like object methods
// in the code below, getFullName is a method, and this is how you access elements within the object

const person = {
  firstName: "Jack",
  lastName: "Ma",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());
// Jack Ma

// some other methods are objects.keys. .values., .entries, .console.log(person.hasOwnProperty('firstName')): true

// functions

// typical way to make functions
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName("Jack", "Ma"));

// anonymous functions
const square = function (n) {
  return n * n;
};
console.log(square(2)); // -> 4

//self-invoking functions
let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

// arrow func are very common in react
//normal func
function addNumbers(a, b) {
  return a + b;
}

// arrow func
const addNumbers2 = (a, b) => {
  return a + b;
};

// is the same as below - explicit return, since there's only one return

const addNumbers3 = (a, b) => a + b;

// callback function example

const callback = (n) => {
  return n ** 2;
};
// function takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));

// time
// set interval

// function sayHello() {
//   console.log("Hello");
// }
// setInterval(sayHello, 2000); // it prints hello in every 2 seconds

// // settimeout
// function sayHello() {
//   console.log("Bye");
// }
// setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.

// destructuring

const nums = [1, 2, 3];
const [num1, num2, num3] = nums;
console.log(num1, num2, num3); // 1, 2, 3,

const countries = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCountries] = countries;
console.log(gem, fra, nordicCountries);
// Germany, France,  ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]

// same can be done for objects

const rectangle = {
  width: 20,
  height: 10,
};

let { width, height } = rectangle;
console.log(width, height); // 20, 10

// functional programming

//for each
//We use forEach when we like to iterate through an array of items.
//The forEach is a higher-order function and it takes call-back as a parameter.
//The forEach method is used only with array and we use forEach if you are interested in each item or index or both.

const cont = ["Finland", "Estonia", "Sweden", "Norway"];
cont.forEach((cont, i) => console.log(i, cont.toUpperCase()));

//We use the map method whenever we like to modify an array. We use the map method only with arrays and it always returns an array.
const cont2 = ["Finland", "Estonia", "Sweden", "Norway"];
const cont2Length = cont2.map((country) => country.length);

console.log(cont2Length); // [7, 7, 6, 6]

// filter, filters arr
const cont3 = ["Finland", "Estonia", "Sweden", "Norway", "Iceland"];
const cont3WithLand = cont3.filter((country) => country.includes("land"));
console.log(cont3WithLand); // ["Finland", "Iceland"]

const numss = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numss.filter((n) => n % 2 === 0);

// reduce - We use the reduce method to sum all numbers in an array together, or to multiply items in an array or to concatenate items in an array. Let us see the following different example to make this explanation more clear.
// default - 0, can start from another value, add value after cur: acc*curr, 10. so starts from 10
const nums3 = [1, 2, 3, 4, 5];
const value = nums3.reduce((acc, cur) => acc * cur);
console.log(value); // 120

// find returns the first occurence of an element in an arr
const cont4 = ["Finland", "Estonia", "Sweden", "Norway", "Iceland"];
const count4WithWay = cont4.find((country) => country.includes("way"));
console.log(count4WithWay); // Norway

// theres more like findIndex, some, every etcc

//classes - how to make one
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Adnan", "Bhanji");

console.log(person1);

// many concepts like default values in objects, class methods, get, set have been covered already.
// have also covered dom
// and async, await
