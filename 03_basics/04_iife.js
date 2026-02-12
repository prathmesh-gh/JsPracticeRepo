// Immediately invoked function expression (IIFE)

(
function chai() {
    //named iffe
    console.log(`db connected`);
}());


((name) => {
    //unnamed iffe
    console.log(`db connected2 ${name}`);
})('prathmesh')                                   //db connected2 prathmesh