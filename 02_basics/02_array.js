const marvel_heros = ["thor", "ironMan", "thanos"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     // it will insert dc_heros array as an 4th element in the marvel_heros array
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);


// const all_heros = marvel_heros.concat(dc_heros)     // it will create a new array with all the combined elements of both arrays
// console.log(all_heros);


// const new_heros = [...marvel_heros, ...dc_heros]        // it is known as spread operator, and can add more than two arrays together
// console.log(new_heros);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);


// console.log(Array.isArray("Kamran"));
// console.log(Array.from("Kamran"));
// console.log(Array.from({name: "Kamran"}));      // it cannot create array of an object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



