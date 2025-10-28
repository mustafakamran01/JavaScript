/* We need to flatten the given nested array into a single array */

myArr = [1, [2, [3, [4]]]]

console.log(`Array before flatten`);
console.log(myArr);


const newArr = myArr.flat(Infinity)

console.log(`Array after flatten`);
console.log(newArr);





