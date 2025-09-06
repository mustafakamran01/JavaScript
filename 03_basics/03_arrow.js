// const user = {
//     userName: "Kamran",
//     email: "kamran@google.com",
//     welcomeMessage: function(){
//         console.log(`Hi ${this.userName} welcome to website`);
//         /*
//             here, this point to the current object running in the program
//         */
//        console.log(this);
       
//     }
// }
// console.log(this);
/*
    here, this point to an empty object when we are in node environment, but
    when we run this keyword in brower console then it will point to the window object
*/
// console.log(user.welcomeMessage());

// user.userName = "Mustafa Kamran"
// console.log(user);



// function code(){
//     let userName = "Mustafa"
//     console.log(this);
//     /*
//         here when we print this keyword inside a function, then we get lots of information
//     */
//     console.log(this.userName);
//     /*
//         when we try to access variable in function using this keyword, then we will get undefined
//         i.e, we cannot access variable in function using this keyword
//     */
        
// }
// code()


//***********************************Arrow function******************************//

// const car = () => {
//     let carName = "VW Virtus"
//     console.log(this);
//     /*
//         here we get empty object
//     */
//     console.log(this.carName);
//     /*
//         here we get undefined
//     */   
//     console.log(carName);
//     /*
//         now we get the value of carName
//     */
    
// }
// car()



// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(5, 6))

// const multiplyTwo = (num1, num2) => num1 * num2
// /*
//     this is called implicit return, we can also write arrow function using this method when we have single line of code
//      we can also wrap num1 * num2 into a paranthesis like this (num1 * num2), this is also correct, but
//      we cannot wrap it into curly braces, otherwise we need to write return keyword with it
// */
// console.log(multiplyTwo(8, 10));

const myObj = () => ({userName: "Mustafa Kamran"})
/*
    when we return an object using an implicit return, then we need to wrap our object into a paranthesis
*/
console.log(myObj());
