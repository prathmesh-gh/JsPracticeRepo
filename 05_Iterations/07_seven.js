//map :callback

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnums = myNums.map((num) => {
//   return num + 10;
// });
// console.log(newnums);                                         //$ node 07_seven.js [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


///////////////////////     chaining    ////////////////////

const newnums = 
myNums.map((num) => num * 10)
      .map((num)=>num+1)
      .filter((num)=>{
        return num>=50
      })


console.log(newnums);

/** output 
 // before pplying filter
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]

// after applying filter
 [ 51, 61, 71, 81, 91, 101 ]

 */





 