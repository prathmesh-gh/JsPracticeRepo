//      reduce

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myNums = [1, 2, 3];

//  how to write reduce syntax way 1
// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acccumulator: ${acc} and current value ${currval}`);

//     return acc+currval
// },0)

//    way 2
// const myTotal = myNums.reduce((acc,curr) => {
//         console.log(`acccumulator: ${acc} and current value ${curr}`)
//         return acc+curr
// },0)

//    way 3
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

//example

const shoppingCart = [
    {
        itemName:"Js Course",
        price :3000
    },
    {
        itemName:"python Course",
        price :999
    },
    {
        itemName:"Mobile development Course",
        price :3000
    },
    {
        itemName:"data science Course",
        price :13000
    }
];

const PriceToPay=shoppingCart.reduce((acc,item)=>( acc+item.price),0)

console.log(PriceToPay);                 //19999
