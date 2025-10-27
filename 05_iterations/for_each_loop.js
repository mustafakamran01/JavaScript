/***************************** for each loop **************************/

const myArray = ["C", "C++", "Java", "Python", "JavaScript"]

// myArray.forEach( function (item){
//     console.log(`Element: ${item}`);
// })
/*
    Here we are not giving function name, because it's a call back function, and
    every time the loops iterate, functions goes to the array and take each element as a parameter, and
    here we are printing the functions arguments
*/


// myArray.forEach( (item) => {                    // using arrow function
//     console.log(`Element Arrow: ${item}`);
// })


// function printing(item){
//     console.log(`Element: ${item}`);
// }
// myArray.forEach(printing);
/*
    This is also a way to use for each loop by passing outside function as an argument
*/


// myArray.forEach( (item, index, arr) => {
//     console.log(`${index} index have ${item} item`);
//     console.log(arr);  
// })
/*
    function also contains index and whole array as an parameter
*/



const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: ".js"
    },

    {
        languageName: "Java",
        languageFileName: ".java"
    },

    {
        languageName: "Python",
        languageFileName: ".py"
    },

    {
        languageName: "C++",
        languageFileName: ".cpp"
    }
]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// })
myCoding.forEach( (obj) => {
    console.log(`Language name: ${obj.languageName}`);
    console.log(`Language file name: ${obj.languageFileName}`);    
})
/*
    This is how we can access array of objects
*/

/*
    We cannot use for each loop on object directly.
*/