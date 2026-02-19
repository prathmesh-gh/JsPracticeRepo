

function SetUserName(username) {
    this.username = username;
    console.log("called set username function");
}

function CreateUserName(username, email, password) {
    SetUserName.call(this, username)        // call method is used to call a function with a given this value and arguments provided individually;
    this.email = email;
    this.password = password;
}

const userOne = new CreateUserName("Prathmesh", "abc@gmail.com", "12345");
console.log(userOne);
