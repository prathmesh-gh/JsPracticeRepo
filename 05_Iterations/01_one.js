// for loop
//syntax

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    // console.log(`5 is best number`);
  }
  //   console.log(element);             // 0 to 10
}

// console.log(element);       //ReferenceError: element is not defined

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop values : ${i} `);

  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop values : ${j} and outer loop values : ${i}  `);        //one times i and 10 times j
    // console.log(i + "*" + j + "=" + i * j);                       //printed a table
  }
}

let myArray = ["flash", "spiderman", "batman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element);
}

//  break and continue

// for (let index = 1; index < 20; index++) {
//     if (index==5){
//         console.log(`detected 5`);
//         break;
//     }
//   console.log(`value of i is ${index}`);
// }

/*
output :
value of i is 1
value of i is 2
value of i is 3
value of i is 4
detected 5
*/





for (let index = 1; index < 20; index++) {
    if (index==5){
        console.log(`detected 5`);
        // break;
        continue
    }
  console.log(`value of i is ${index}`);
}

