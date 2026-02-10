const score = 400

const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2));        //100.00


const otherNumber = 123.5465156

// console.log(otherNumber.toPrecision(3)); //124

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN')); // 10.00,000


// +++++++++++++++++++++++ Maths ++++++++++++++++++

console.log(Math);    //Object

console.log(Math.abs(-4));           // Opt=>4  convert negetive values to positive
console.log(Math.round(0.99));       // Opt=>1  convert round numbers
console.log(Math.ceil(0.99));        // Opt=>1  convert round numbers and choose top value
console.log(Math.floor(0.99));       // Opt=>0  convert round numbers and choose lower value
console.log(Math.min(4, 3, 6, 8));   //3
console.log(Math.max(4, 3, 6, 8));   //8
console.log(Math.random());          // Value always in between 0 to 1


console.log((Math.random() * 10));    // sometimes it gives 0. something value so avoid 0 we added 1 in next step
console.log(Math.floor(Math.random() * 10) + 1);



const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) +min) // general Formula for generate random number in range











