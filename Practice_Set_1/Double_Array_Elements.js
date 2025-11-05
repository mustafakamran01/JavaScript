/*
    Given an array, we need to return a new array where each element is doubled.

    Example:
    Input: [1, 2, 3]
    Output: [2, 4, 6]
*/

let myArr = [1, 2, 3, 4, 5, 6, 7]

const doubledArr = myArr.map( (element) => element * 2)

console.log(doubledArr);
