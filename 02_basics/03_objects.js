//singleton  => when we make a constructor it's singleton
Object.create          // create obeject and its singleton


//object literal 

const mysymbol = Symbol("key1")

//object ke under Keyvalues pair hote hai
const JsUser = {
    name: "Prathmesh",    // system takes name as "name"(string)
    age: 25,
    location: "india",
    email: "testemail@gamil.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Friday"],
    "fullName": "John Doe",              // this cannot be 
    [mysymbol]: "mykey1"                 // use square bracket around key for treat as a Symbol
}


//access Objects
// console.log(JsUser.email);         //testemail@gamil.com
// console.log(JsUser[email]);     //ReferenceError: email is not defined
// console.log(JsUser["email"]);      //testemail@gamil.com
// console.log(JsUser["fullName"]);   //John Doe

// console.log(JsUser[mysymbol]);             //myKey1
// console.log(typeof JsUser[mysymbol]);      //Type changes to Symbol=> string


//change values

JsUser.email = "pm@google.com"

//freeze  for stop changes of Object values
// Object.freeze(JsUser)
JsUser.email = "gm@google.com"

// console.log(JsUser.email);   //pm@google.com

// console.log(JsUser);
/*
  age: 25,
  location: 'india',
  email: 'pm@google.com',
  isLoggedIn: 'false',
  lastLoginDays: [ 'Monday', 'Friday' ],
  fullName: 'John Doe',
  Symbol(key1): 'mykey1'
}
  */



//Function Declaration : we can treat functions a veriables also

JsUser.greeting = function () {
    console.log("Hello  JSUser");
}
JsUser.greeting2 = function () {
    console.log(`Hello User ${this.name} `);
}

//when object is unfreeze after commenting line 37
console.log(JsUser.greeting()); // Hello JsUser and Undefined
console.log(JsUser.greeting);   // [Function (anonymous)]

console.log(JsUser.greeting2());  //Hello User Prathmesh 



//when Object is freeze
// console.log(JsUser.greeting());  //TypeError: JsUser.greeting is not a function
// console.log(JsUser.greeting);    //Undefined



//Note : always use the dot notations for access the objects






