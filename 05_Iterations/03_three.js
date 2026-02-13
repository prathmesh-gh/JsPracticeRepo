// forof loop

// syntax
const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  // console.log(`value of element is ${val}`);
}

//string
const greetings = "hello world";

for (const greet of greetings) {
  //   console.log(`value of each char is ${greet}`);
}

// Maps : unique value and maintain the orders
//output :$ node 03_three.js
// IN :- India
// UK :- United Kingdom
// JP :- Japan

const map = new Map();
map.set("IN", "India");
map.set("UK", "United Kingdom");
map.set("JP", "Japan");

for (const [key, value] of map) {
  //  console.log(key ,':-',value);
}

// forof loop on the object


const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":- ", value);               //TypeError: myObject is not iterable
// }


