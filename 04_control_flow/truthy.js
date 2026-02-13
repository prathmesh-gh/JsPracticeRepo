const userEmail = [];

if (userEmail) {
  console.log(`user found`);
} else {
  console.log(`user not found`);
}
// output user found

/*  

/////////////////// truthy and falsy values ////////////////////

//false value 
 false ,0 ,-0 ,BigInt0n, "", null, undefined,NaN


//truthy value
 "0",'false'," ",[],{},function(){} 

 /////////////////////////////////////////////////////////////////

*/

if (userEmail.length === 0) {
  console.log(`Array is Empty`);
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log(`object is Empty`);
}

// Nullish coalescing operator  (??): null  undefine
// for safetycheck

let vail;
//  vail =5??10                //5
//  vail=null ??10             //10
// vail = undefined ?? 15;     //15
vail = null ?? 10 ?? 15; // assign first value 10

console.log(vail); // 10

// ternary operator
// condition ?true:false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);        //more than:80
