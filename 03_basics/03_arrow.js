const user = {
  username: "prathmesh",
  price: "500",

  // using this for accessing thhe current context mean i can acees it in user = {}
  welcomeMessage: function () {
    console.log(`Hello ${this.username} welcome to website`);
  },
};

// user.welcomeMessage   // no valuse cause its a method we have to add ()
// user.welcomeMessage() // Hello prathmesh welcome to website

// //changing context
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage() // Hello sam welcome to website

// console.log(this)        //{}

///////////////////////////////////////////////

// function chai(){
//     let username ="prathmesh"
//     console.log(this.username);       //undefined on function but work in objects
// }

// chai();

// const chai= function(){
//     let username ="prathmesh"
//     console.log(this.username);       //undefined
//
// }
// chai();

//arow function
// const chai= () =>{
//      let username ="prathmesh"
//      console.log(this.username);       //undefined

// }
// chai();

////////////////// arrow function /////////////////////////////////

// const addTwo = (num1,num2) => {
//  return num1+num2
// };

// console.log (addTwo(1,2));      


//implisite  return : we dont have to write retutn and {}
// const addTwo = (num1,num2) => num1+num2 ;

// or we can write it as a
//if culy braces used write return 
//if round brackets use no need to right return

// const addTwo = (num1,num2) => (num1+num2 );
// console.log (addTwo(1,2));    




//Explisite return : we have to add return 
// for return object

const addTwo = (num1, num2) => ({username: "prathmesh"})


console.log(addTwo(3, 4))          //{ username: 'prathmesh' }



const myArray=[1,2,4,5,6]
// myArray.forEach()
