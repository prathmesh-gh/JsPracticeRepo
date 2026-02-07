const accountld = 144553
let accountEmaiI = "Pm@google.com"
var accountPassword = "12345"
accountCity ="Pune" // even if we dont assign the let const and var to variable javascript consider as a veriable
let accountState;   // if we only declaired variables and not use it javascript takes it as a undefined

// accountld = 1
 accountEmaiI = "mp@google.com"
 accountPassword = "000345"
 accountCity="kolhapur"
 
/*Prefer not to use var
because of issue in block scope and functional scope*/


// console. log (accountld) ;
// console.log(accountEmaiI);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountld,accountEmaiI,accountPassword,accountCity,accountState]);
