const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//push Appends new elements to the end of an array, and returns the new length of the array.
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);        //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ]]  
// console.log(marvel_heros[3][1]);  //flash


//concat :Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// const allHero = marvel_heros.concat(dc_heros)
// console.log(allHero);          [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



//Spread: saperating each elemnt 
const all_newHeros = [...marvel_heros, ...dc_heros]
// console.log(all_newHeros);   //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//flat :flat(depth?: 1 | undefined): (number | number[])[]
//The maximum recursion depth
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);                             //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// console.log(Array.isArray("Prathmesh"))  // check if this name array or not true or false 
//false


// console.log(Array.from("Prathmesh"))     //Creates an array from an iterable object.
//'P', 'r', 'a', 't', 'h', 'm', 'e', 's', 'h']




// console.log(Array.from({ name : "hitesh"})) // interesting [] return empty array


let score1 = 100
let score2 = 200
let score3 =300

//Returns a new array from a set of elements.
console. log (Array. of(score1,score2,score3));   //[ 100, 200, 300 ]







