/* 
    Primitive data types:- String, Number, Boolean, null, undefined, Symbol, BigInt
*/

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);



/*
    Reference (Non Primitive) data types:- Array, Objects, Functions
*/

const colours = ["black", "blue", "green", "red"]  // it's an array of colours

let myObj = {
    name: "Kamran",
    age: 24,
}

// console.log(myObj);


const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof colours);        // object
console.log(typeof myObj);          // object
console.log(typeof myFunction);     // function


