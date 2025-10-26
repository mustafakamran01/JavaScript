const marvel_heros = ["thor", "ironMan", "thanos"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     // it will insert dc_heros array as an 4th element in the marvel_heros array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);
/*
    It will create a new array with all the combined elements of both arrays.
*/


// const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);
/*
    It is known as spread operator and,
    can add more than two arrays together.
*/

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7,[-1, -5, [-6, -10]], [4, 5]]]
// const realAnotherArray = anotherArray.flat(2)
// console.log(realAnotherArray);
/*
    It will flatten the elements of array in one single array
*/


console.log(Array.isArray("Kamran"));
console.log(Array.from("Kamran"));
console.log(Array.from({name: "Kamran"}));      // It cannot create array from an object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
/*
    Core difference between Array.of and Array.from is:
        Array.from creates array of iterable objects like String, sets, maps, NodeList but,
        Array.of takes every arguments as an element and creates an array of them.
*/



