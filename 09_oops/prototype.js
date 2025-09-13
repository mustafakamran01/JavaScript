// const str = "Mustafa   "
// console.log(str.length);

// const myHeros = ["thor", "spiderman"]

// const heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
        
//     }
// }

// Object.prototype.kamran = function(){
//     console.log("Kamran is present in all object");
// }
/*
    here we are adding a property to object prototype, which can be accessed by all the strings, arrays, functions etc, because
    all data types whether it is string, array, functions are goes through object
*/

// Array.prototype.heyKamran = function(){
//     console.log("Kamran is present in an array");
    
// }

// heroPower.kamran()
// myHeros.kamran()
// myHeros.heyKamran()
// heroPower.heyKamran()
/*
    it will give error because, heyKamran() is present in array prototype only
*/


/****************************** Inheritance *****************************/

// const user = {
//     userName: 'Kamran',
//     email: 'kamran@google.com'
// }

// const teacher = {
//     makeVideo: true
// }

// const teachingSupport = {
//     isAvaiable: false
// }

// const TAsupport = {
//     makeAssignment: "JS assignment",
//     fullTime: true
// }

// Object.setPrototypeOf(teacher, user)
/*
    this is how we use inheritance, here property of user is inherited to teacher
*/
// console.log(teacher.userName)


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);    
}

let anotherUser = "ChaiAurCode    "

anotherUser.trueLength()
"   mustafa     ".trueLength()
