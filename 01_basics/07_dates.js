/******************************************* Dates **********************************************/

let myDate = new Date();

// console.log(myDate);                    // 2025-10-26T07:58:46.409Z
// console.log(myDate.toString());         // Sun Oct 26 2025 13:28:46 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());     // Sun Oct 26 2025
// console.log(myDate.toISOString());      // 2025-10-26T07:58:46.409Z
// console.log(myDate.toJSON());           // 2025-10-26T07:58:46.409Z
// console.log(myDate.toLocaleString());   // 26/10/2025, 1:28:46 pm


let myCreatedDate = new Date(2025, 2, 10, 9, 30)        
/*
    Here,
        2025 => year
        2 => Month  // Index of month starts from 0 that's why 2 is March
        10 => Date
        9 => Hour 
        30 => Minute
*/

// console.log(myCreatedDate);                     // 2025-03-10T04:00:00.000Z
// console.log(myCreatedDate.toString());          // Mon Mar 10 2025 09:30:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toLocaleString());    // 10/3/2025, 9:30:00 am
// console.log(myCreatedDate.toDateString());      // Mon Mar 10 2025


let birthDate = new Date("01-21-2001")

// console.log(birthDate.toLocaleString());        // 21/1/2001, 12:00:00 am
// console.log(birthDate.getTime());           // 980015400000, it is presented in miliseconds


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));       // it will give the time in seconds, and in general we get time in miliseconds


// console.log(myDate.getMonth());     // index starts from 0


// console.log(myDate.toLocaleString('default', {
//     weekday: "long"
    
// }))
















