/* We need to find out the number of unique elements present in an array */

let myArr = [1, 2, 2, 3, 4, 4, 5]

const mySet = new Set();

for (let ele of myArr){
    mySet.add(ele)
}

console.log(mySet.size);


