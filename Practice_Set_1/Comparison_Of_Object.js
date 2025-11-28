// Input:
// { a: 1, b: { c: 2 } }
// { a: 1, b: { c: 2 } }

// Output: true

const input1 = {
    a: 1,
    b: {
        c: 2
    }
}

const input2 = {
    a: 1,
    b: {
        c: 2
    }
}

// console.log(input1);
// console.log(input2)

let input1Arr = Object.entries(input1)
let input2Arr = Object.entries(input2)

// console.log(input1Arr);
// console.log(input2Arr);


let keys1 = Object.keys(input1)
let keys2 = Object.keys(input2)

console.log(keys1);
console.log(keys2);
