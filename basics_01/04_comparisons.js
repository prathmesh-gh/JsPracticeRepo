// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);      // true
// console.log("02" > 1);     //true


//avoid this type of conversions
// console.log(null > 0);    //false 
// console.log(null==0);     //false
// console.log(null >= 0);   //true

//avoid this type of conversions
// console.log(undefined > 0);    //false 
// console.log(undefined==0);     //false
// console.log(undefined >= 0);   //false


// The reason is that an equality check ==and comparisons > < >=
// <=work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null O is true and (1) null > 0 is false.

// console.log("2"==2)  //true
// console.log("2"===2)   //false beacuse it check datatype and conversion also