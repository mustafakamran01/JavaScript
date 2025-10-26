const name = "Kamran"
// console.log(typeof name);   // String

const repoCount = 2

// console.log("Hello my name is " + name + " and my repo count is " + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   
/*
    It is a modern way of concatenating string 
*/


const gameName = new String("BattleGround")     // another way of declaring string
// console.log(typeof gameName);       // object


// console.log(gameName[6]);

// console.log(gameName.__proto__);        // it is an object 

// console.log(`The length of the string is ${gameName.length}`);
// console.log(`To convert all the character to the upper case ${gameName.toUpperCase()}`);
// console.log(`To find out the character to a particular index ${gameName.charAt(5)}`);
// console.log(`To find out the index value of a particular character ${gameName.indexOf('o')}`);

// console.log(`To create a substring from a given string ${gameName.substring(0, 6)}`);
/*
    It will give string from index 0 to 5
*/

// console.log(`To slice a string ${gameName.slice(-12, 6)}`);

const carName = new String("    Virtus ")

// console.log(`To trim the extra white spaces from start and end ${carName.trim()}`);


const url = "https://kamran.com/github%20mustafa01"

// console.log(`To replace any particular characters ${url.replace("%20", "-")}`);
// console.log(`To check whether the particular character is present or not ${url.includes("git")}`);

const ans = new String("My name is Mustafa Kamran")
// console.log(`To convert a string to an array ${ans.split(' ')}`);
arr = ans.split(' ')
console.log(typeof arr);    // object
console.log(arr);       // [ 'My', 'name', 'is', 'Mustafa', 'Kamran' ]


