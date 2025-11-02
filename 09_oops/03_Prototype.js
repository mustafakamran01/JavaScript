const name = "Mustafa Kamran"

const myHeros = ["throw", "ironMAn"]

const heroPower = {
    thor: "hammer",
    ironMan: "sling"
}

Object.prototype.kamran = function() {
    console.log("Kamran is present in all object");
}
/* 
    Here we are creating a property of an object which can be accessible to object as well as Arrays, functions, String, 
    because, these all belongs to an object
*/

heroPower.kamran()
myHeros.kamran()
name.kamran()

Array.prototype.mustafa = () => {
    console.log("Mustafa is present in all array");
}
/* 
    Here we are creating a property of an Array which can be accessible by arrays only
*/

myHeros.mustafa();
// heroPower.mustafa();
/* 
    This will give error because, we create a property of an Array,
    so, it can only be accessible by arrays not object, functions, String..
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
    This is how we use inheritance, here property of user is inherited to teacher
*/
// console.log(teacher.userName)



const str = "   Mustafa    "

String.prototype.trueLength = function() {
    return `True length is ${this.trim().length}`
}
/* Here this refers to the context whom is calling this function */ 

console.log(str.trueLength());
/* Here "str" is calling this function so, this refers to str */

console.log("   Kamran  ".trueLength());
