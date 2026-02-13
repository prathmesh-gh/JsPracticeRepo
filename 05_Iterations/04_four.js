//for in Loop

const myObject = {
  js: "jacvascript",
  cpp: "c++",
  rb: "Ruby",
  swift: "Swift by apple",
};

for (const key in myObject) {
  console.log(); //get values
//   console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for jacvascript

cpp shortcut is for c++

rb shortcut is for Ruby

swift shortcut is for Swift by apple
*/

const programming = ["js", "cpp", "cpp", "java", "rb", "pyton"];

for (const key in programming) {

//   console.log(`${key} shortcut is for ${programming[key]}`);
}
/* output :$ node 04_four.js 

0 shortcut is for js

1 shortcut is for cpp

2 shortcut is for cpp

3 shortcut is for java

4 shortcut is for rb

5 shortcut is for pyton
 */



//map in for In not possible 

// const map = new Map();
// map.set("IN", "India");
// map.set("UK", "United Kingdom");
// map.set("JP", "Japan");

// // for (const key in map) {
// //   console.log(`${key}`);            
// // }




// note : object = >forin loop
//        arrays => forof loop  also  we canuse other loops on array