//Protype :
//1. Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from.
//2. The prototype of an object can be accessed using the __proto__ property or the Object.getPrototypeOf() method.
//3. When we try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks for it on the object's prototype, and so on up the prototype chain until it finds it or reaches the end of the chain (null).
//4. We can add properties and methods to an object's prototype, and all objects that inherit from that prototype will have access to those properties and methods.

//Example of prototype in JavaScript

function multipyBy5(num) {
  return num * 5;
}

console.log(multipyBy5(5)); // 25
multipyBy5.power = 2;

console.log(multipyBy5.power); //2
console.log(multipyBy5.prototype); //{} - every function in JavaScript has a prototype property which is an object that contains properties and methods that can be inherited by other objects created using that function as a constructor function

function creatUser(username, score) {
  this.username = username; // this is current context
  this.score = score;
}

creatUser.prototype.incrementScore = function () {
  this.score++;
};

creatUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

const chai = new creatUser("Chai", 100); //added new keyword to create a new object and set this to that object and link it to the constructor's prototype and return the object
const tea = new creatUser("Tea", 200);
console.log(chai); // creatUser { username: 'Chai', score: 100
console.log(tea); // creatUser { username: 'Tea', score: 200 }

chai.incrementScore();
console.log(chai); // creatUser { username: 'Chai', score: 101 }
chai.printMe(); // score is 101
tea.incrementScore();
console.log(tea); // creatUser { username: 'Tea', score: 201 }
tea.printMe(); // score is 201



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
