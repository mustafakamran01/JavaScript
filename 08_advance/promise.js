// const promiseOne = new Promise( (resolve, reject) => {
//     // Do async task
//     // DB calls, cryptography, network

//     setTimeout( () => {
//         console.log("Async task completed");
//         resolve()
//     }, 1000)
// })

// promiseOne.then( () => {
//     console.log("Promise consumed");
    
// })
/*
    resolve is directly connected to then()
*/



// new Promise( (resolve, reject) => {         // another way of creating promise
//     setTimeout( () => {
//         console.log("Async tasked 2");
//         resolve()
//     }, 1000)
// }).then( () => {
//     console.log("Promise 2 resolved");
    
// })



// new Promise( (resolve, reject) => {         // this is how we can pass object as well
//     setTimeout( () => {
//         resolve({userName: "kamran", email: "kamran@google.com"})
//     }, 1000)
// }).then( (user) => {
//     console.log(user);
    
// })



// new Promise ( (resolve, reject) => {
//     setTimeout( () => {
//         let error = false
//         if (!error) {
//             resolve({userName: "mustafa", email: "mustafa@microsoft.com"})
//         } else {
//             reject("ERROR: Something went wrong")
//         }
//     }, 1000)
// })
// .then( (user) =>  user.userName)
// .then( (myUserName) => console.log(myUserName))
// .catch( (err) => console.log(err))
// .finally( () => console.log("The promise is either resolved or rejected"))
/*
    this is called chaining, here we are returning values from one then() to another then()
*/



// const promiseFive = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         let error = false
//         if (!error) {
//             resolve({userName: "Mustafa Kamran", email: "kamran.mustafa@apple.com"})
//         } else {
//            console.log("Error: Something went wrong");
            
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// consumePromiseFive()



// async function getAllUser() {
//     try {
//         const data = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log((await data.json()));
//         // const response = await data.json()
//         // console.log(response);
//     } catch (error) {
//      console.log("E: ", error);
        
//     }
// }
// getAllUser()



fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => response.json())
.then( (data) => console.log(data))
.catch( (err) => console.log("E: ", err))