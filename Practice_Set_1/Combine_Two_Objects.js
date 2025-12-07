/* We need to combine given two object together and If they have the same key, 
   keep the value from the second object.

Example:
// Input:
// { a: 1, b: 2 }
// { b: 3, c: 4 }

// Output:
// { a: 1, b: 3, c: 4 }
*/

let myObj1 = {
    a: 1,
    b: 2,
    c: 5,
    d: 20
}

let myObj2 = {
    b: 3,
    c: 4,
    a: 10
}

// Here we are converting both objects into an array
let myObj1Arr = Object.entries(myObj1)
let myObj2Arr = Object.entries(myObj2)

// const newArr = myObj1Arr.filter( ([key, value]) => !myObj2Arr.includes(key)).concat(myObj2Arr)
// const newObj = Object.fromEntries(newArr)
// console.log(newObj);

/* 
    Now we are applying map method on first object to iterate over it
    Every iteration gives each keys and we will check whether that key present in second object or not.
    If it is present then we will not insert that key-value into new array,
    and then we will concat the second array into the new array
*/
const newObj = Object.fromEntries(myObj1Arr.filter( ([key]) => !myObj2.hasOwnProperty(key)).concat(myObj2Arr))
console.log(newObj);







