const myObj = {
    a: 30,
    b: 60,
    c: 90,
    d: 40
}

const filtered = Object.fromEntries(Object.entries(myObj).filter( ([Key, value]) => value > 50 ) );

console.log(filtered);

/*
    Object.entries(obj) :- It converts the given object into an array
    Object.fromEntries(arr) :- It converts the given array into an object
*/

