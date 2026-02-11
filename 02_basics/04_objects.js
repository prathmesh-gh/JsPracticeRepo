//singleton or help of constructor declaration


// const tinderUser = new Object()   // singleton obj declaration

const tinderUser = {}             //non singleton obj declaration

tinderUser.id = "123abc"
tinderUser.name = "allen",
    tinderUser.IsLoggedIn = false

// console.log(tinderUser);         //{ id: '123abc', name: 'allen', IsLoggedIn: false }


const regularUser = {
    email: "game@gmail.com",
    fullname: {
        userfullName: {
            firstname: "jack",
            lastname: "perry"
        }
    }
}
// console.log(regularUser.fullname)   //{ userfullName: { firstname: 'jack', lastname: 'perry' } }

// console.log(regularUser.fullname.userfullName.firstname)   // jack





const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }


// const obj3 = { obj1, obj2 }

// console.log(obj3);                    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// assign: Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// const obj3 = Object.assign({},obj1, obj2,obj4);
// console.log(obj3);                       //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


//spread 
const obj3 = { ...obj1, ...obj2, ...obj4 }
console.log(obj3);                       //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



//syntax we used wen values come from database 

const user = [                            //array of object
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    },
    {
        id: 1,
        email: "testuser@google.com"
    }
]

// user[1].email
console.log(tinderUser);                  //{ id: '123abc', name: 'allen', IsLoggedIn: false }

console.log(Object.keys(tinderUser));     //[ 'id', 'name', 'IsLoggedIn' ]
console.log(Object.values(tinderUser));   // [ '123abc', 'allen', false ]
console.log(Object.entries(tinderUser));   //showed key values

console.log(tinderUser.hasOwnProperty('isLogged'));   //false because does not have the property name of isLoggedIn


//destructuring  of objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courselnstructor: "Prathmesh"
}

// course.courselnstructor

//use this approch instead of type everytime course.courselnstructor
const {courselnstructor} =course
console.log(courselnstructor);      //prathmesh


// api 

// {
//     "coursename": "js in hindi",
//     "price": "999",
//     "name": "Prathmesh"
// }

//json

[
    {},
    {},
    {}
]






