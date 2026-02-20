

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
// getter and setter

    get email() {
        // we can do some manipulation here before returning the value
        return this._email.toUpperCase();
    }

    set email(value){
        return  this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = value;
    }
}

const prathmesh = new User("pm@example.com","123abc");

console.log(prathmesh.password); // output 123ABC
console.log(prathmesh.email);    // output PM@EXAMPLE.com