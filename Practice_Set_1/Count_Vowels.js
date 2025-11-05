/*
    We need to write a function that counts the number of vowels in a string.

    Example:
    Input: "JavaScript"
    Output: 3
*/

const prompt = require("prompt-sync")();

let userInput = prompt("Enter a string: ").toLowerCase();

let count = 0;

function vowelsCount(input){

    for(let char of input){
        if (char === 'a'){
            count++;
        } else if(char === 'e'){
            count++;
        } else if(char === 'i'){
            count++;
        } else if(char === 'o'){
            count++;
        } else if(char === 'u'){
            count++;
        }
    }
    return count;
}

console.log(vowelsCount(userInput));


