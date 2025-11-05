/*
    We need to write a function that checks if a given string is a palindrome.

    Example:
    Input: "madam"
    Output: true

    Input: "hello"
    Output: false
*/

const prompt = require("prompt-sync")();

let userInput = prompt("Enter a string: ").toLowerCase();

const checkPalindrome = (userInput) => {
    
    let temp = userInput;
    let newStr = "";

    for (let i = userInput.length-1; i >= 0; i--){
        newStr += userInput[i]
    }

    if (temp === newStr){
        return "String is palindrome"
    }

    return "String is not palindrome"
}
console.log(checkPalindrome(userInput));
