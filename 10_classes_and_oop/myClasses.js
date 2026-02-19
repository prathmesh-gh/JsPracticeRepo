//ES 6

//class declaration

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}asksladk`;
  }
  usernameToUpperCase() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("john Doe", "john@gmail.com", "12345");

console.log(user1.encryptPassword());
console.log(user1.usernameToUpperCase());



//before ES6 (without class declaration)

function User1(username, email, password) {   
    this.username = username;
    this.email = email;
    this.password = password;
}   

User1.prototype.encryptPassword = function() {
    return `${this.password}asksladk`;
}

User1.prototype.usernameToUpperCase = function() {
    return `${this.username.toUpperCase()}`;
}


const user2 = new User1("john Doe", "john@gmail.com", "12345");

console.log(user2.encryptPassword());
console.log(user2.usernameToUpperCase());