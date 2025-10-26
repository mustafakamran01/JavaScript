// console.log(2 > 0);
// console.log(2 < 0);
// console.log(2 <= 0);n
// console.log(2 >= 0);
// console.log(2 == 0)


// console.log("2" < 1)
// console.log("02" > 1)   

/* 
    It is not recommended to compare these type of equation, 
    because sometimes it doesnot give the predicted result
*/


// console.log(null > 0);      // false
// console.log(null == 0);     // false
// console.log(null >= 0);     // true

/* 
    The reaon is that an equality check (==) and comparisons (>, <, >=, <=) work differently.
    comparisons convert null value to a number, treating it as 0.
    that's why (null >= 0) is true and (null > 0) is false
*/

console.log("2" === 2)  // false: because === check the data type as well, if the data type is different, the it will give false