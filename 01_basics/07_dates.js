//****************************************************Dates*******************************************************//

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2024, 2, 4, 9, 30)        
/*
    Here,
        2024 => year
        2 => Month  // Index of month starts from 0 that's why 2 is March
        4 => Date
        9 => Hour 
        30 => Minute
*/

// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());


let birthDate = new Date("01-21-2001")

// console.log(birthDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(birthDate.getTime());
// console.log(Math.floor(Date.now()/1000));       // it will give the time in seconds, and in general we get time in miliseconds


// console.log(myDate.getMonth());     // index starts from 0


console.log(myDate.toLocaleString('default', {
    weekday: "long"
    
}))
















