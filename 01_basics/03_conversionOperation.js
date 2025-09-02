/* 
let score = "324aa"

console.log(typeof score);       // typeof score is string

let scoreInNumber = Number(score)   // We cannot convert a alphanumeric / string value to a number, it will lost the real value 

console.log(typeof scoreInNumber);
console.log(scoreInNumber);     // It will NaN
*/


/*
 let score = null

console.log(typeof score);      // typeof null is object

let scoreInNumber = Number(score)       

console.log(typeof scoreInNumber);
 console.log(scoreInNumber);         // It will print 0
*/


/*
let score = undefined

console.log(typeof score);           // typeof undefined is undefined 

let scoreInNumber = Number(score)      

console.log(typeof scoreInNumber);
console.log(scoreInNumber);             // It will print NaN
*/


/*
let score = true

console.log(typeof score);              // typeof true/false is boolean

let scoreInNumber = Number(score)       

console.log(typeof scoreInNumber);
console.log(scoreInNumber);             // it will print 1
*/


/*
let isLoggedIn = 1

console.log(typeof isLoggedIn)     // typeof isLoggedIn is number


let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)      // typeof booleanIsLoggedIn is boolean
console.log(booleanIsLoggedIn)             // it will print true
*/


/*
let isLoggedIn = ""

console.log(typeof isLoggedIn);     // typeof isLoggedIn is string


let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn);      // typeof booleanIsLoggedIn is boolean
console.log(booleanIsLoggedIn);             // it will print false
*/


let someNumber = 33

console.log(typeof someNumber);     // typeof somenumber is number


let stringSomeNumber = String(someNumber)

console.log(typeof stringSomeNumber);      // typeof stringSomeNumber is String
console.log(stringSomeNumber);

