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
    b: 2
}

let myObj2 = {
    b: 3,
    c: 4
}

let myObj1Arr = Object.entries(myObj1)
let myObj2Arr = Object.entries(myObj2)

const newObj = Object.fromEntries(myObj1Arr.filter( ([Key, value]) => !Key.includes(myObj1Arr))
                                           . concat(myObj2Arr))

console.log(newObj);





