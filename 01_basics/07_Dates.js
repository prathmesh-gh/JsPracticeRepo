//Date 

let myDate = new Date()  //created dates Object

console.log(myDate);                //2026-02-10T11:43:16.024Z
console.log(myDate.toString());     //Tue Feb 10 2026 11:45:41 GMT+0000 (Coordinated Universal Time)


console.log(myDate.toISOString());          //2026-02-10T11:50:08.963Z
console.log(myDate.toLocaleDateString());   //2/10/2026, 11:50:08 AM
console.log(myDate.toLocaleString());       //2/10/2026, 11:50:08 AM
console.log(myDate.toTimeString());         //11:50:08 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());          //Tue, 10 Feb 2026 11:50:08 GMT


console.log(typeof myDate);                //Date

// ===============================
// JavaScript Date Examples
// ===============================


// new Date(year, month, day)
// Month is 0-based (0 = January)
let myCreatedDate1 = new Date(2023, 0, 23);

// Output: 23 January 2023
console.log("Example 1:", myCreatedDate1.toLocaleString());


// new Date(year, month, day, hours, minutes, seconds)
// Month is still 0-based
let myCreatedDate2 = new Date(2023, 0, 23, 5, 30, 0);

// Output: 23 January 2023, 5:30 AM
console.log("Example 2:", myCreatedDate2.toLocaleString());


// new Date("YYYY-MM-DD")
// Month is NOT 0-based in string format
let myCreatedDate = new Date("2023-01-14");

// Output: 14 January 2023
console.log("Example 3:", myCreatedDate.toLocaleString());



// Current date and time
// output :Current Date: 2/10/2026, 1:27:46 PM
let now = new Date();

console.log("Current Date:", now.toLocaleString());


//timestamps

let myTimeStamp = Date.now()
console.log(myTimeStamp);     /// output in milisececonds 1770730250613

let myCreatedDateInmilisecond = myCreatedDate.getTime();     /// output in miliseconds




// -------------------- COMPARISON --------------------

// Compare two dates using milliseconds
if (myTimeStamp > myCreatedDateInmilisecond) {
  console.log("Current date is AFTER myCreatedDate");
} else if (myTimeStamp < myCreatedDateInmilisecond) {
  console.log("Current date is BEFORE myCreatedDate");
} else {
  console.log("Both dates are EXACTLY the same");
}
console.log(myTimeStamp);
console.log(myCreatedDateInmilisecond);



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  // get current Month
console.log(newDate.getDay());      //get current day tuesday  output =>2



console.log(
  newDate.toLocaleString(
    'default',              // Uses system's default locale (like en-IN, en-US)
    {
      weekday: "long"       // Displays full name of the day (Monday, Tuesday, etc.)
    })
);                                        // output current day Tuesday




