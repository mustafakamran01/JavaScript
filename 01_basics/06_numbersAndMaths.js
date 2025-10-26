const score = 400
// console.log(score);

const balance = new Number(100)     // here we are explicitily creating a variable of number type
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));            // here we can set number of digit after decimal

const newNumber = 123.867

// console.log(newNumber.toPrecision(3));
/*
    It will give the precise value of the given number upto the give number of digits,
    and it will return a string value
*/

const hundreds = 10000000

// console.log(hundreds.toLocaleString());         // it will represent the number using comma in US style
// console.log(hundreds.toLocaleString('en-IN'));      // it will represent the number using comma in Indian style



//************************************************Maths***********************************************//

// console.log(Math);

// console.log(`This will give the absolute value of a given number: ${Math.abs(-4)}`);
// console.log(`This will round of the given value: ${Math.round(4.7)}`);
// console.log(`This will give the higher round of value of the given number: ${Math.ceil(4.3)}`);
// console.log(`This will give the lower round of value of the given number: ${Math.floor(4.8)}`);
// console.log(`This will give the maximum number within the given numbers: ${Math.max(45, 6, 44, 78)}`);
// console.log(`This will give the minimum number within the given numbers: ${Math.min(66, 87, 3, 2, 55)}`);

// console.log(Math.random());
/*
    Math.random() generally gives value between 0 to 1.
*/

// console.log((Math.random() * 10) + 1);
/*
    It will give random values between 1 to 10.
*/

// console.log(Math.floor(Math.random() * 10) + 1);
/*
    It will give lowest rounded value.
*/

const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
/*
    It is a formula to get random value in the given range
*/
















