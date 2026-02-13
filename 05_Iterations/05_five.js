//for each loop : mostly prefferd and used

const coading = ["js", "cpp", "cpp", "java", "rb", "pyton"];

// //  first way using function
// coading.forEach(function (item) {
//     console.log(item);
// });

// another way is using arrow function

coading.forEach((item) => {
  //   console.log(item);
});

// // another way as a function
// function printMe (item){
//     console.log(item);
// }
// coading.forEach(printMe)

/////  getting all item, index, arr
coading.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

// getting array of object / object of object

const myCoading = [
  {
    languageName: "javascript",
    langugefilename: "js",
  },
  {
    languageName: "java",
    langugefilename: "java",
  },
  {
    languageName: "python",
    langugefilename: "py",
  },
];

myCoading.forEach((item) => {
  console.log(item.languageName);
});
