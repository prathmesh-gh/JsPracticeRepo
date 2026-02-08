// # Primitive (call By value) 

// 7 types :String, Number, Boolean, null, undefined, Symbol, Bigint

//Javascript is a  dynamically typed language ,This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
const score = 100                // type is number
const scoreValue = 100.3         // type is number

const isLoggedIn = false          // type is boolean
const outsideTemp = null          // type is Object
let usereEmail;                   // undefined

const id = Symbol('123')          // Symbol is for the Unique id  
const anotherId = Symbol('123')   // Symbol is for the Unique id 

console.log(id === anotherId);     // false

const bigNumber = 21651545616546515648n // if you put n in front of number it is presented as a bigint



// Refrence Type (Non Primitive)

//Types : Arreys, Objects, Functions

//array
const heros = ["Spidy", "hulk", "iornman"]   // 

//objects
let myObj={
    name:"Prathmesh",           // type is Object
    age:25
}

//function

const myFunction  = function(){
    console.log("Hello I am Function");
}

console.log(typeof myFunction); // OUTPUT is a function but we called it as Object Function

console.log(typeof isLoggedIn)
console.log(typeof outsideTemp)


/*

Type of Value → Result of typeof

Undefined → "undefined"

Null → "object"

Boolean → "boolean"

Number → "number"

String → "string"

Object (native and does not implement [[Call]]) → "object"

Object (native or host and does implement [[Call]]) → "function"

Object (host and does not implement [[Call]]) → Implementation-defined (but may not be "undefined", "boolean", "number", or "string")

*/