/* We need to find out the number of unique elements present in an array */

let myArr = [1, 2, 2, 3, 4, 4, 5,]

const occurence = {}
let count = 0;

myArr.forEach( (ele) => occurence[ele] ? occurence[ele]++ : occurence[ele] = 1)

// console.log(occurence);

for (let key in occurence) {
    // console.log(occurence[key]);
    if (occurence[key] == 1) {
        count++;
    }
}

console.log(`Unique number of element: ${count}`);







