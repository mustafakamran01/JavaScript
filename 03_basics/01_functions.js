function myLastName(){
    console.log("K");
    console.log("a");
    console.log("m");
    console.log("r");
    console.log("a");
    console.log("n");
    
}
// myLastName()

const myFirstName = function (){
    console.log("M");
    console.log("U");
    console.log("S");
    console.log("T");
    console.log("A");
    console.log("F");
    console.log("A");
    
}
// myFirstName();
/*
    Both ways are correct to create a function
*/



// function addTwoNumber(num1, num2){
//     return (num1 + num2);
// }
// const result = addTwoNumber(10, 20);
// console.log(`Sum of given two number is: ${result}`);



// function userLoginMessage(userName){
//     if (!userName) {
//         console.log("Please enter a username.");
//         return;
//     } 
//     return `${userName} just logged in.`
// }
// console.log(userLoginMessage());
// console.log(userLoginMessage("Mustafa Kamran"));
/*
    If a parameters is not provided by the user, then it is considered as undefined
*/



// function userLoginMessage(userName = "Shark"){
//     return `${userName} just logged in`
// }
// console.log(userLoginMessage());
// console.log(userLoginMessage("Kamran"));
/*
    Here shark is considered as a default value, if user doesnot provide any parameters, but
*/



// function calculateCartPrice(...num){
//     return num
// }
// console.log(calculateCartPrice(200, 450, 430, 999, 560));
/*
    ...num it is known as rest operator
    we generally use rest operator when we don't know how many arguments we are going to give to the function
    rest operator collects all the value and bundled it in an array 
*/



// function calculateCartPrice(val1, val2, ...num){
//     console.log(val1 + val2);
//     return num
// }
// console.log(calculateCartPrice(200, 450, 430, 999, 560, 200, 780, 444));
/*
    In this case the 1st argument will be collected by val1, and 2nd argument will be collected by val2, and
    rest of the arguments are collected by num and bundled it in an array.
*/



// const myCar1 = {
//     name: "Virtus",
//     price: 1800000
// }

// function carInfo(anyObject){
//     return `Name of the car is ${anyObject.name} and price of car is ${anyObject.price}`
// }
// // console.log(carInfo(myCar1));

// console.log(carInfo({
//     name: "Seltos",
//     price: 2000000
// }));

/*
    here we can create an object while calling the function
*/



// const myArr = [100, 200, 300, 400]

// function handleArray(getArray){
//     console.log(`Second element of the array is ${getArray[1]}`);
    
// }
// handleArray(myArr)

// handleArray([1, 2, 3, 5, 6, 7, 8])
/*
    we can also create an array while calling functions as we did in case of object
*/
