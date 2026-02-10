// array
/*
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

# JavaScript arrays are resizable and can contain a mix of different data types.
# JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
# JavaScript arrays are zero-indexed: the first element of an array is at index 0
# JavaScript array-copy operations create shallow copies(Refrences). 
*/
const myArr = [0, 1, 2, 3, 4, 5];

// const myHeors = ["spiderman", "catwoman"]
// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);    //1


// Array Methods

//Push : Added values in Array

// myArr.push(6)
// myArr.push(7)
// console.log(myArr); //[0, 1, 2, 3, 4, 5, 6, 7]


// pop : remove last element from the array

// myArr.pop()
// console.log(myArr);  //[0, 1, 2, 3, 4, 5, 6]


//unshift :added element to start of array
//unshift : Removes the first element from an array and returns it

// myArr.unshift(9)     //[9,0, 1, 2, 3, 4, 5, 6]
// myArr.shift()        //[0, 1, 2, 3, 4, 5, 6]
// console.log(myArr);


//questionair methods

// console.log(myArr.includes(9));  //false
// console.tog(myArr.indexOf(3));   //3
// console.log(myArr);


const newArray = myArr.join()
// console.log(myArr);           //[0, 1, 2, 3, 4, 5]
// console.log(newArray);        //0,1,2,3,4,5

//slice 
//Returns a copy of a section of an array.

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)       // A  [ 0, 1, 2, 3, 4, 5 ]

// console.log(myn1);                // [ 1, 2 ]

//splice
// console.log("B ", myArr);        //// B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)   // A  [ 0, 1, 2, 3, 4, 5 ]
// console.log( "C ",myArr);         // C [0, 4, 5]
// console.log(myn2);                // [1, 2, 3]





