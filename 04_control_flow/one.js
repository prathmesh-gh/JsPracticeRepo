//if

const isLoggedInuser = true;
const temp = 41;

// if (temp===40) {
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// if (2!=3) {
//      console.log(`executed `);              //executed
// }

//opratops for comparisions
// < , > , <= ,>= ,=(assign),  == (equality) , === (exact match or strict checking) , !=(not equal)



////////////////////////////////////////////////////////////////////////////////

const score = 200;

if (score > 100) {
  const power = "fly";
//   console.log(`user power : ${power}`);         

}
// console.log(`user power : ${power}`);           // error Power is not defined


//////////////////////////////////////////////////////////////////////////////////



//short hand notation

const balance =1000

// if (balance>500) console.log("test"), console.log("test2");          // implicite scope(assume)   do not use this not a standerd

/////////////////////////////////////////////////////////////////////////////////////////


// if (balance<500) {
//     console.log(`balance is ${balance} less than 500 `);
    
// } else if(balance<750) {
//     console.log(`balance is ${balance} less than 750 `);
// }
// else if(balance<900) {
//     console.log(`balance is ${balance} less than 900 `);
// }
// else if(balance<1200) {
//     console.log(`balance is ${balance} less than 1200 `);
// }
// else{
//      console.log(`balance is ${balance} less than 500 `);
// }
// // output : balance is 1000 less than 1200 



////////////////////////////////////////////////////////////////////////////////////////////////////////////

const userLoggedIn = true
const debitCard =true
const LoggedInFromGoogle =false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard) {                // check both and if true then execute
    console.log(`allowed to buy courses`);
}


if (LoggedInFromEmail||LoggedInFromGoogle){
    console.log(`user logged In `);              ///user logged In 
} 

