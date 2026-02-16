//  The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//  A Promise is in one of these states:
//  - pending: initial state, neither fulfilled nor rejected.
//  - fulfilled: meaning that the operation completed successfully.
//  - rejected: meaning that the operation failed.
//  - The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.
//  A Promise is settled if it is either fulfilled or rejected, but not pending.




// 1. Create a new Promise that resolves after 2 seconds with the message "Hello, World!".
const promiseOne = new Promise(function (resolve, reject) {
  //Do some asynchronous operation
  //Data fetching, API call, cryptography etc.
  
  setTimeout(() => {
    console.log("async operation completed");
    //call resolve when the async operation is completed successfully
    resolve();
  }, 1000);
});

//consume the promise using then method
promiseOne.then(function () {
  console.log("Promise Consumed");
});



//2.create a new Promise that resolve after 1 second 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



//3.creating a third promise that rejects after 1 seconds with object containing user data 

const promiseThree =new Promise(function(resolve, reject){
setTimeout(() => {
    resolve({userName :"Prathmesh",email:"prathmesh@example.com"})
}, 1000);
   
})


promiseThree.then(function(user){
    console.log(user);
})




//4. Create a new Promise that rejects after 1 second with an error message "Error: Something went wrong". Handle the rejection using the catch method and log the error message to the console. 

const promiseFour = new Promise (function(resolve,reject){
setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Prathmesh", password: "12345"})
        } else {
            reject('ERROR: Something went wrong in promise four')
        }
    }, 1000)
})


//chaining then and catch method to handle both resolved and rejected state of the promise
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username     
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



//5. create  NEW promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject('ERROR: Javascript went wrong')
        }
    }, 1000)
})


// using async await to consume the promise five
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// 6. creating async await for json data using fetch API and handling error using try catch block with 

// async function fetchData(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchData()





//another way to fetch data using .then and .catch method

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))




