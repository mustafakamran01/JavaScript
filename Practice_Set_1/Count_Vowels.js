/*
    We need to write a function that counts the number of vowels in a string.

    Example:
    Input: "JavaScript"
    Output: 3
*/

const prompt = require("prompt-sync")();

let userInput = prompt("Enter a string: ").toLowerCase();

let count = 0;

const vowelsCount = (input) => {

    for (let i = 0; i < input.length; i++) {

        switch (input.charAt(i)) {
            case 'a':
                count++;
                break;

            case 'e':
                count++;
                break;

            case 'i':
                count++;
                break;

            case 'o':
                count++;
                break;

            case 'u':
                count++;
                break;
        
            default:
                break;
        }
    }

    return count
}

console.log(vowelsCount(userInput));


