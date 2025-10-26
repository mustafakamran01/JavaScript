/* 
    Primitive data types:- String, Number, Boolean, null, undefined, Symbol, BigInt
*/

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null

// let userEmail;
// console.log(typeof userEmail);      // undefined


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);    
/*
    it will give false, because the value might be same , but the reference is different and symbol always contains unique values
*/


/*
    Reference (Non Primitive) data types:- Array, Objects, Functions
*/

// const colours = ["black", "blue", "green", "red"]  // it's an array of colours

// let myObj = {
//     name: "Kamran",
//     age: 24,
// }

// console.log(myObj);


// const myFunction = function(){
//     console.log("Hello World");
    
// }

let myFunc = function(){
    console.log("Revision of JS");
    
}
// console.log(myFunc);        // It will give reference of the function
// myFunc();               // It will actually call the function;

// console.log(typeof colours);        // object
// console.log(typeof myObj);          // object
// console.log(typeof myFunction);     // function


//********************************************** Memory ********************************************//

/*
    Primitive data type uses Stack memory and Non primitive data type uses heap memory.
    In stack memory, an instance of a variable is used or given to another variable.
    But, in heap memory the direct reference to the object is given
*/


// let myYoutubeName = "MustafaKamran"

// let anotherName = myYoutubeName

// anotherName = "Coding"

// console.log(myYoutubeName);
// console.log(anotherName);


let user1 = {
    name: "Mustafa",
    email: "mustafa@google.com"
}

let user2 = user1

user2.email = "kamran@microsoft.com"
/*
    It will change the value in both the object
*/

console.log(user1.email);
console.log(user2.email);









