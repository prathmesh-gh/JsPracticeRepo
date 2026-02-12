// ================= BLOCK SCOPE (let & const) =================

let a = 300;

if (true) {
  let a = 10; // Block-scoped variable
  const b = 20; // Block-scoped constant

  // console.log("INNER:", a);
  // Output: INNER: 10
}

// console.log(a);   // Output: 300

// console.log(b);  // Error: b is not defined (block scope)

// WHY:
// let and const are block-scoped, so they exist only inside { }

// HOW:
// Inner 'a' shadows outer 'a', but only inside the if block

// ================= FUNCTION SCOPE & CLOSURE =================
// Inner functions can access variables of parent function (closure)

function one() {
  const username = "prathmesh";

  function two() {
    const website = "youtube";
    // console.log(username);          // Output: prathmesh
  }

  //   console.log(website);
  two(); //prathmesh
}

one();

// ================= NESTED BLOCK SCOPE =================

if (true) {
  const username = "prathmesh";

  if (username === "prathmesh") {
    const website = " youtube";
    // console.log(username + website);       // Output: prathmesh youtube
  }

  // console.log(website);                    // Error: website is block-scoped
}

// console.log(username);                     // Error: username is block-scoped


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}



addTwo(5);                                  // Error: ReferenceError: Cannot access 'addTwo' before initialization     
const addTwo = function (num) {
  return num + 2;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




