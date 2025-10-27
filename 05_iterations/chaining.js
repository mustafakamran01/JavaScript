const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (items) => items + 10)
// console.log(newNums);
/*
    this operation cannot be done with filter method
*/



// const arr = []

// myNumbers.forEach( (item) => {
//     arr.push(item + 10)
// })
// console.log(arr);



const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num > 41)
console.log(newNums);
/*
    this is called chaining, 
    here we are applying multiple method
*/
