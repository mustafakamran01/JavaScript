/***************************** for each loop **************************/

// const myArray = ["C", "C++", "Java", "Python", "JavaScript"]

// myArray.forEach( function (item){
//     console.log(item);
    
// })
/*
    here we are not giving function name, because it's a call back function, and
    every time the loops iterate, functions goes to the array and take each element as a parameter, and
    here we are printing the functions arguments
*/

// myArray.forEach( (item) => {         // using arrow function
//     console.log(item);
    
// })


// function printing(item){                // this is also a way to use for each loop by passing outside function as an argument
//     console.log(item);
    
// }
// myArray.forEach(printing)


// myArray.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })
/*
    function also contains index and whole array as an parameter
*/


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },

    {
        languageName: "Java",
        languageFileName: "java"
    },

    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})
/*
    this is how we can access array of objects
*/