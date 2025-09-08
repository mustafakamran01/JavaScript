/************************* for in loop *******************/

// const myObject = {
//     suzuki: "Fronx",
//     hyundai: "Creta",
//     mahindra: "XUV700",
//     vw: "Virtus"
// }

// for(const key in myObject){
//     console.log(key);
    
// }
/*
    it will print the keys present in the object
*/

// for(const key in myObject){
//     console.log(myObject[key]);
    
// }
/*
    it will only print the value associated with the keys
*/

// for(const key in myObject){
//     console.log(`${key} has good car, named as ${myObject[key]}`);
    
// }


// const myCar = ["Fronx", "Verna", "Safari", "Taigun"]

// for(const key in myCar){
//     console.log(myCar[key]);
    
// }
/*
    for in loop generally print the keys whereas for of loop print the values of the array
*/


const map = new Map()

map.set("Bihar", "Patna")
map.set("UP", "Lucknow")
map.set("West Bengal", "Kolkata")

for(const key in map){
    console.log(key);
    
}
/*
    it will print nothing, because maps are not iterable using for in loops
*/
