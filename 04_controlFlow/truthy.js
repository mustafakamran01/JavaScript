// const userEmail = []

// if(userEmail){
//     console.log("Got user email");
    
// } else{
//     console.log("Don't have user email");
    
// }

// /*
//     falsy value:
//         false, 0, -0, BigInt -> 0n, "" (empty string), null, undefined, NaN
// */

// /*
//     truthy value:
//         "0" (it is zero as string), "false" (it is false as string), " " (string with space), 
//         [] (empty array), {} (empty object), function(){} (empty function)
// */

// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }


// const myObj = {}

// if (Object.keys(myObj).length === 0) {
//     console.log("Object is empty");
    
// } else {
    
// }


//********************************* Nullish Coalescing Operator (??) : null undefined ******************************//

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 40
// val1 = undefined ?? 65
// val1 = null ?? 10 ?? 20
// val1 = null ?? undefined

/*
    Nullish operator will compare the values that are given, if the given values are null or undefined, they check the other value,
    if the other value is also null or undefined, then it will give undefined
*/
console.log(val1);



/****************************************** Terniary Operator ****************************************/

// const coffeePrice = 150

// coffeePrice >= 100 ? console.log("Coffee is expensive") : console.log("Coffee is affordable");

