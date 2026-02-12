// ================= SAY MY NAME FUNCTION =================

// Function to print each letter of the name PRATHMESH line by line
function sayMyName() {
    console.log("P"); // Output: P
    console.log("R"); // Output: R
    console.log("A"); // Output: A
    console.log("T"); // Output: T
    console.log("H"); // Output: H
    console.log("M"); // Output: M
    console.log("E"); // Output: E
    console.log("S"); // Output: S
    console.log("H"); // Output: H
}

// WHY: Used to group repeated logic in one place
// HOW: Function is defined once and executed when called

// sayMyName();


// ================= ADD TWO NUMBERS =================

function addTwoNumbers(number1, number2) {
    return number1 + number2; // returns sum
}

const result = addTwoNumbers(3, 5);
// console.log("Result:", result);
// Output: Result: 8

// WHY: Used to perform calculations dynamically
// HOW: Values are passed as arguments and result is returned


// ================= LOGIN USER MESSAGE =================

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        // Output: Please enter a username
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("prathmesh"));
// Output: prathmesh just logged in

// console.log(loginUserMessage());
// Output: sam just logged in

// WHY: Used to handle user login messages
// HOW: Uses default parameters and conditional checks


// ================= REST OPERATOR EXAMPLE =================

function calculateCartPrice(val1, val2, ...num1) {
    return num1; // remaining values stored in array
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [500, 2000]

// WHY: Used when number of arguments is unknown
// HOW: Rest operator (...) collects extra values into array


// ================= OBJECT HANDLING =================

const user = {
    username: "prathmesh",
    price: 199
};

function handleObject(anyobject) {
    console.log(
        `Username is ${anyobject.username} and price is ${anyobject.price}`
    );
}

// handleObject(user);
// Output: Username is prathmesh and price is 199

handleObject({
    username: "sam",
    price: 399
});
// Output: Username is sam and price is 399

// WHY: Used to pass structured data (objects) to functions
// HOW: Function accesses object properties using dot notation


// ================= ARRAY HANDLING =================

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]; // index 1 = second element
}

// console.log(returnSecondValue(myNewArray));
// Output: 400

console.log(returnSecondValue([200, 400, 500, 1000]));
// Output: 400

// WHY: Used to work with collections of data
// HOW: Arrays are passed to functions and accessed using index