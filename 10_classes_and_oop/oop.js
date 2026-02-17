// Object literal

const user = {
  username: "Prathmesh",
  password: "12345",
  loginCount: 0,
  signIn: true,

  getuserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);          //Username: Prathmesh
    console.log(this);
  },
};

// console.log(user.username);
// user.getuserDetails();
// console.log(this);               // Window object when run on browser and on node its {}




// constructor function : 
// Promise is a constructor function
// `new` keyword creates a new object,
// sets `this` to that object,
// links it to the constructor’s prototype,
// and returns the object


function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;  


  //method to get user details
  this.greetings = function () {
    console.log(`Hello ${this.username}, welcome back!`);
  }
  
  //important to return this from the constructor function otherwise it will return undefined because by default constructor function returns undefined if we don't return anything explicitly and we are trying to set properties on undefined which will throw an error in strict mode and in non strict mode it will set properties on global object which is not what we want
  return this
}

let userOne = User ("Prathmesh", 5, true)   // without new keyword it will return undefined because this will be undefined in that case and we are trying to set properties on undefined which will throw an error in strict mode and in non strict mode it will set properties on global object which is not what we want
// console.log(userOne);                        // all this values come
let userTwo =  User ("Hitesh", 10, false)     
console.log(userOne);                           // User { username: 'Hitesh', loginCount: 10, isLoggedIn: false }` values overrides values of userOne because both userOne and userTwo are referencing the same object in memory which is created by the constructor function and we are setting properties on that object using this keyword which is shared between both userOne and userTwo



// to fix this issue we need to use new keyword which creates a new object for each user and sets properties on that object using this keyword which is different for each user
const userThree = new User ("Prathmesh", 5, true)
const userFour = new User ("Hitesh", 10, false)
console.log(userThree);                         // User { username: 'Prathmesh', loginCount: 5, isLoggedIn: true }
console.log(userFour);                          // User { username: 'Hitesh', loginCount: 10, isLoggedIn: false }
console.log(userOne.constructor);             // [Function: User] - // constructor tells which function was used to create this object



// how it works under the hood when we use new keyword with constructor function
// 1. A new empty object is created.
// 2. The constructor function is called with `this` set to the new object.
// 3. The properties and methods are added to the new object using `this`.
// 4. The new object is returned from the constructor function.