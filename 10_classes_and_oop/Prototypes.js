//Prototypes Sections Start from here
//In JavaScript, every object has a hidden property called [[Prototype]] which is a reference to another object. This is how JavaScript implements inheritance and allows objects to access properties and methods of other objects through the prototype chain.


// let myName = "Prathmesh     "

// console.log(myName.truelength);   // undefined because truelength is not a method of string prototype and it is not defined on myName object as well so it returns undefined



let myHeros=["thor", "spiderman", "ironman"]

let heropower={
    thor:"hammer",
    spiderman:"web",
    iornman : "armor",

    getSpiderPower:function(){
        return `spiderman's power is ${this.spiderman}`
    }
}


Object.prototype.prathmesh = function(){
    console.log("prathmesh is present in all objects");
}

heropower.prathmesh(); // prathmesh is present in all objects (because we have added prathmesh method to the Object prototype which is the parent of all objects in JavaScript so all objects can access that method through prototype chain)


Array.prototype.helloPrathmesh =  function(){
    console.log(" Prathmesh says hello");
    
}

myHeros.helloPrathmesh();     // returns prathmesh says hello
// heropower.helloPrathmesh();   // TypeError: heropower.helloPrathmesh is not a function



//inheritance 


const User ={
    name :"prathmesh",
    email:"prathmesh@google.com"
}
const Teacher = {
    
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


//Modern syntax of declaring proto

Object.setPrototypeOf(TeachingSupport,Teacher)  
    

//====================================================

let anotherUserName = "Prathmesh chai code          "

String.prototype.truelength=function(){
    console.log(`${this}`);                     //Prathmesh chai code           (this refers to the string object on which the method is called)
    console.log(`the length is : ${this.trim().length}`);         
}
 
anotherUserName.truelength()     //14
"hitesh choudhary".truelength()   //16





// we learn about how we can use protypes 
//1. to use __proto_ property to access the prototype of an object and use it to add new properties and methods to the prototype which can be accessed by all objects that inherit from that prototype
//2. modern syntax of declaring proto using Object.setPrototypeOf() method which takes two arguments the first argument is the object whose prototype we want to set and the second argument is the object which we want to set as the prototype of the first object
//3. we can also add properties and methods to the built-in prototypes like String.prototype, Array.prototype, Object.prototype etc. but it is not recommended because it can cause conflicts with other code that uses those prototypes and it can also cause performance issues because it can affect all objects that inherit from those prototypes
//4. we also learn how to access the prottyype of string and array objects and how to add new methods to those prototypes and use them on string and array objects

