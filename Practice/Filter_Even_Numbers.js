/*
    Given an array of integers, we need to return only the even numbers.

    Example:
    Input: [1, 2, 3, 4, 5, 6]
    Output: [2, 4, 6]
*/

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = myArr.filter( (element) => element % 2 == 0)

console.log(evenNumbers);
