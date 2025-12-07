// Input:
// { a: 1, b: { c: 2 } }
// { a: 1, b: { c: 2 } }

// Output: true

const input1 = {
    a: 1,
    b: {
        d: 5
    },
    s: 5
}

const input2 = {
    a: 1,
    b: {
        d: 5
    },
    s: 5
}

// // We are creating a function to compare both object recursively
// function comparison(obj1, obj2) {

//     if (obj1 === obj2) return true

//     if (typeof(obj1) !== 'object' || typeof(obj2) !== 'object' || obj1 == null || obj2 == null) return false

//     let keys1 = Object.keys(obj1)
//     let keys2 = Object.keys(obj2)

//     if (keys1.length != keys2.length) return false

//     for (let key of keys1) {
//         if (!comparison(obj1[key], obj2[key])) {
//             return false
//         }
//     }

//     return true
// }

// console.log(comparison(input1, input2));

function comparison(obj1, obj2) {
    if (obj1 === obj2) return true

    if (obj1 == null || typeof(obj1) != 'object' || obj2 == null || typeof(obj2) != 'object') return false

    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    if (keys1.length != keys2.length) return false

    for (let key of keys1) {
        if (!comparison(obj1[key], obj2[key])) return false
    }

    return true
}

console.log(comparison(input1, input2));
