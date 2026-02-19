
const User={
    _email: "pm@example.co", 
    _password: "123abc",

    get email(){
        return this._email.toUpperCase()
    }
    ,
    set email(value){
        this._email = value
    }
     ,
    get password(){
        return this._password.toUpperCase()
    }
    ,
    set password(value){
        this._password = value
    }

}

const prathmesh =  Object.create(User)
console.log(prathmesh.password); // output 123ABC
console.log(prathmesh.email);  
