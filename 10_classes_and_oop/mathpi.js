// interview question change value of PI
const descripter = (Object.getOwnPropertyDescriptor(Math, "PI"));

console.log(descripter); 
/* output {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// we can not change the value of PI because it is not writable and not configurable



const chai = {
    name: "chai",
    price : 10,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* output {{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/


Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false, 
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* output {
  value: "chai",
  writable: false,
  enumerable: false,
  configurable: true
}*/


for (let [key,value] of Object.entries(chai)) {
    if (typeof value !=='function') {
        console.log(`${key} : ${value}`);
    }

    // output
    // price : 10
    // isAvailable : true

}


