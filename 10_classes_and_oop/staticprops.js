class User {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`User Name : ${this.username}`);
  }
  // static method : using static keyword we can create static method which can be called without creating an instance of the class
  static createID() {
    return `1234`;
  }
}

const prathmesh = new User("Prathmesh");

// console.log(prathmesh.createID()); // error came TypeError: prathmesh.createID is not a function

class Teacher extends User {
  constructor(email,username) {
    super(username)
    this.email = email;
  }
}


const iphone =  new Teacher ("iphone","iphone@example.com")
console.log(iphone.createID());         // TypeError: iphone.createID is not a function

