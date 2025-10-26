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

console.log(typeof scoreInNumber);  // It will print number
console.log(scoreInNumber);         // It will print 0
*/


/*
let score = undefined

console.log(typeof score);           // typeof undefined is undefined 

let scoreInNumber = Number(score)      

console.log(typeof scoreInNumber);    // It will print number
console.log(scoreInNumber);             // It will print NaN
*/


/*
let score = true

console.log(typeof score);              // typeof true/false is boolean

let scoreInNumber = Number(score)       

console.log(typeof scoreInNumber);      // It will print number
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


/*
let someNumber = 33

console.log(typeof someNumber);     // typeof somenumber is number


let stringSomeNumber = String(someNumber)

console.log(typeof stringSomeNumber);      // typeof stringSomeNumber is String
console.log(stringSomeNumber);          // It will print "33"
*/



//********************************************* Operations *********************************************//

// let value = 3

// let negvalue = -value

// console.log(negvalue);   // It will print -3

// console.log(2 ** 3)     // it is 2 raise to the power 3

// let str1 = "Mustafa"
// let str2 = "Kamran"

// let str3 = str1 + str2

// console.log(str3)        // It will print "MustafaKamran"

// console.log("1" + 2)        // 12
// console.log(1 + "2")        // 12
// console.log("1" + 2 + 2);   // 122        // if string is at first place, then it concatenate all the number or string
// console.log(1 + 2 + "2");   // 32         // if number is at first, then it perform addition and the concatenate with string


// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2      // this is ok but not recommended. the code readability should be high


x = 2, y = 3

z = ++x + ++y        // x = 3, y = 4, z = 7

console.table([z, x, y])











