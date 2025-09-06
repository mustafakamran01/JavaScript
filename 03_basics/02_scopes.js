// var c = 300

// let a = 100

// const b = 200

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30

//     console.log("INNER: ", a);

// }

// console.log(c);
// console.log(a);
// console.log(b);

/*
    the global scope that we use in console of web page is different from the global scope that we use in node environment      
*/



// function one(){
//     const userName = "Kamran"

//     function two(){
//         const codeEditor = "VS Code"
//         console.log(`User name is ${userName}`);
        
//     }

//     // console.log(codeEditor);
//     /*
//         we cannot access variables which are defined inside a scope,
//         here one() acts as a global scope for two(), so we can access all the variables of one() inside two(), but
//         we cannot access two() variables in one()
//     */

//     two()
    
// }
// one()



// if(true){
//     const userName = "Mustafa"

//     if(userName == "Mustafa"){
//         const codeEditor = "IntelliJ"

//         console.log(`User name is ${userName} and code editor is ${codeEditor}`);
//     }

//     // console.log(codeEditor);
    
// }

// // console.log(userName);



//******************************************Interesting****************************************//


const result = addOne(5)
function addOne(num){
    return num + 1
}
console.log(result);



addTwo(5)
const addTwo = function(num){
    return num + 2

}
/*
    Here it gives error while calling addTwo() before defining because that function is stored in a variable, whereas
    addOne() is not giving error while calling it before it's defination
*/