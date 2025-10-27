
// const user = {
//     userName: "Kamran",
//     email: "kamran@google.com",
//     welcomeMessage: function(){
//         console.log(`Hi ${this.userName} welcome to website`);
//         /*
//             Here, this point to the current object running in the program
//         */
//         function inner(){
//             console.log(this.userName);
//             /*
//                 Here it will give undefined, because we are calling this function standalone, 
//                 and not with any object (inner())
//             */
//         }
//         inner();
//     }
// }
// console.log(this);
// /*
//     here, this point to an empty object when we are in node environment, but
//     when we run this keyword in brower console then it will point to the window object
// */
// console.log(user.welcomeMessage());
// user.userName = "Mustafa Kamran"
// console.log(user);



// function code(){
//     let userName = "Mustafa Kamran"
//     console.log(this);
//     /*
//         Here when we print this keyword inside a function then we will get lots of information.
//         basically different functions.
//     */
//    console.log(this.userName);
//    /*
//         When we try to access variable using this keyword inside a function,
//         then we will get undefined, because we cannot access variable using this keyword inside a func.
//    */    
// }
// code();

/********************************** Arrow function *****************************/

// const car = () => {
//     let carName = "VW Virtus"
//     console.log(this);
//     /*
//         It gives empty object, why?
//         because arrow function does not has it's own this.
//         They inherit this from their surrounding (parent) scope i.e, node here
//     */
//     console.log(this.carName);
//     /*
//         Here we get undefined
//     */
//     console.log(carName);
//     /*
//         Now we get the value of car name.
//     */
// }
// car();



// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(5, 6))



// const multiplyTwo = (num1, num2) => { return num1 * num2}
// const multiplyTwo = (num1, num2) => num1 * num2     // Both ways are correct
// /*
//     this is called implicit return, we can also write arrow function using this method when we have single line of code
//      we can also wrap num1 * num2 into a paranthesis like this (num1 * num2), this is also correct, but
//      we cannot wrap it into curly braces, otherwise we need to write return keyword with it
// */
// console.log(multiplyTwo(8, 10));



const myObj = () => ({userName: "Mustafa Kamran"})
/*
    When we return an object using an implicit return, then we need to wrap our object into a paranthesis
*/
console.log(myObj());
console.log(myObj().userName);
