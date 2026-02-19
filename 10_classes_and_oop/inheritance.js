class User {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`User Name is : ${this.username}`);
  }
}

// accessing User class properties and methods using the extends
class Teacher extends User {
  constructor(username, email, password) {
    super(username); // calling the parent class constructor
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by the ${this.username}`);
  }
}

const teacher1 = new Teacher("John Doe", "john@example.com", "password123");

teacher1.addCourse();  // Output: A new course was added by the John Doe


const teacher2 = new User("Jane Smith");

teacher2.logme();  // Output: User Name is : Jane Smith

console.log(teacher1 instanceof Teacher);  // Output: true
console.log(teacher2 instanceof User);  // Output: true