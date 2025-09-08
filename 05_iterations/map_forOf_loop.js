/**************************** for of loop *******************************/

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]

// for (const val of myArray) {
//     console.log(`Value: ${val}`);
    
// }



// const greetings = "Hello World!!"

// for(const greet of greetings){
//     console.log(`Each character: ${greet}`);
    
// }
/*
    we can apply for of loop on string as well
*/



/********************************** Map **************************************/

const map = new Map()

map.set("Bihar", "Patna")
map.set("UP", "Lucknow")
map.set("West Bengal", "Kolkata")

// console.log(map);
/*
    maps maintain the insertion order, and always store unique value
*/

// for(const key of map){
//     console.log(key);
    
// }
/*
    here we get all the element in form of key value
*/

for(const [key, value] of map){             
    console.log(`${key} :- ${value}`);
    console.log(key);
    console.log(value);
    
}
/*
    here we are de-structuring the map, and
    now we can access key or value seperately
*/



