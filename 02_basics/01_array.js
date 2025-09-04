//*************************************How to declare an array*********************************//

// const arr1 = [34, 76, 88, 6, "Kamran", true]
// console.log(arr1);

// const arr2 = new Array("Kamran", "Mustafa", 21, 100)
// console.log(arr2);



//*******************************************Array methods***************************************//

const arr = [0, 1, 2, 3, 4, 5]

// arr.push(6)         // This will add given element to the end of the array
// console.log(arr);

// arr.pop()           // This will remove one element from the end of the array
// console.log(arr);

// arr.unshift(9)         // This will add given element at the starting of array
// console.log(arr);

// arr.shift()
// console.log(arr);           // This will remove one element from the starting of an array

// console.log(`This will tell whether the given element is present or not: ${arr.includes(5)}`);

// console.log(`This will give the index value of the given element: ${arr.indexOf(9)}`);
/* If the given vaue is present then it will give the index value but if the given value is not present then it will give -1*/ 


//*******************Slice and Splice***************//

console.log("A", arr);

const myn1 = arr.slice(1,3)
console.log(myn1);

console.log("B", arr);

const myn2 = arr.splice(1,3)
console.log(myn2);

console.log("C", arr);

/*
    In slice, we are getting a sub array of the given range and it will not effect the real array, but
    in splice they remove the element of given range from the real array and then give it to the user
*/









