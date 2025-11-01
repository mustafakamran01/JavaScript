// const promiseOne = new Promise( (resolve, reject) => {
//     /*
//         Do async task like, DB calls, cryptogarphy, network calls
//     */
//     setTimeout( () => {
//         console.log("Async task completed");
//         resolve();
//     }, 1000)
// })
// promiseOne.then( () => {
//     console.log("Promise consumed");
// })
/* resolve is directly connected to then */


/* Another way of creating promise without storing it into any variable */
// new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// }).then( () => {
//     console.log("Promise is consumed");
// })


/* This is how we can pass parameters to then() through resolve() */
// new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve({userName: "Mustafa", email: "kamran@apple.com"})
//     }, 1000)
// }).then( (user) => {
//     console.log(user);
// })


/* This is how we use reject method and handle error in promise */
// new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         let error = false;

//         if (!error) {
//             resolve({username: "Kamran", pass: "12345"})
//         } else {
//             reject("Error: Something went wrong!!!")
//         }
//     }, 1000)
// })
// .then( (user) => {
//     return user.username;
// })
// .then( (myUsername) => {
//     console.log(myUsername);
// })
// .catch( (err) => console.log(err))
// .finally( () => console.log("Promise is consumed, either resolved or rejected"))


/* This is how we handle promise with help of async await */
// const promiseFive = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         let error = false;

//         if (!error) {
//             resolve({username: "JavaScript", pass: "12345"})
//         } else {
//             reject("Error: Something went wrong")
//         }
//     }, 1000)
// });
// async function consumePromiseFive(){
//     try {
//         const data = await promiseFive
//         /* Here we get the data from promiseFive whether resolve or reject */
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();


/* This is how we get data using fetch and handle it using async and await */
// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         /* Converting response to JSON also takes sometimes that's why we need to put await in it */
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers();


/* This is how we fetch the data from a API using fetch method and handle it using then and catch */
// fetch("https://jsonplaceholder.typicode.com/users")
// .then( (user) =>  user.json())
// .then( (data) => console.log(data))
// .catch( (error) => console.log(error))
/* 
    Here first then is returning the data that is converted into JSON format, and
    second then is printing the converted data
*/


/* Just for testing */
// new Promise( (resolve, reject) => {
//     const data = fetch("https://api.github.com/users/hiteshchoudhary")
//     if (data) {
//         resolve(data);
//     } else {
//         reject("Error: Something went wrong")
//     }
// }).then( (data) => {
//     return data.json();
// }).then( (data) => {
//     console.log(data);
// }).catch( (error) => console.log(error))

