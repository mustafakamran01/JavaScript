// function myName(){
//     console.log("K");
//     console.log("a");
//     console.log("m");
//     console.log("r");
//     console.log("a");
//     console.log("n");
    
// }
// myName()



// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
//     return number1 + number2

// }
// const result = addTwoNumber(34, 56)
// console.log(`Result of addition of given two number ${result}`);



// function userLoginMessage(userName){
//     if(!userName){
//         console.log("Please enter a username");
//         return
        
//     }
//     return `${userName} just logged in`
// }
// console.log(userLoginMessage("Mustafa Kamran"))
// console.log(userLoginMessage());
/*
    if a parameters is not provided by the user, then it is considered as undefined
*/



// function userLoginMessage(userName = "Shark"){
//     return `${userName} just logged in`
// }
// console.log(userLoginMessage());
// console.log(userLoginMessage("Kamran"));
/*
    here shark is considered as a default value, if user doesnot provide any parameters, but
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
//     return num
// }
// console.log(calculateCartPrice(200, 450, 430, 999, 560));
/*
    in this case the 1st argument will be collected by val1, and 2nd argument will be collected by val2, and
    rest of the arguments are collected by num
*/



// const course = {
//     courseName: "JavaScript",
//     price: 999
// }

// function handleObject(anyObject){
//     console.log(`Name of the car is ${anyObject.carName} and price of the car is ${anyObject.price}`);
    
// }
// handleObject(course)

// handleObject({
//     carName: "Skoda Kodiaq",
//     price: 4500000
// })
/*
    here we can create an object while calling the function
*/



const myArr = [100, 200, 300, 400]

function handleArray(getArray){
    console.log(`Second element of the array is ${getArray[1]}`);
    
}
handleArray(myArr)
/*
    we can also create an array while calling functions as we did in case of object
*/
