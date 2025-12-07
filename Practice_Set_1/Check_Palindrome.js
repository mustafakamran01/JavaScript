/*
    We need to write a function that checks if a given string is a palindrome.

    Example:
    Input: "madam"
    Output: true

    Input: "hello"
    Output: false
*/

const prompt = require("prompt-sync")();

// Here we are taking input from the user and making it small letter
let userInput = prompt("Enter a string: ").toLowerCase();

// Here we are creating a function that checks whether the given word is palindrome or not
const checkPalindrome = (input) => {
    let temp = ""

    for (let i = input.length - 1; i >= 0; i--) {
        temp += input.charAt(i)
    }

    if (temp === input) {
        return "String is palindrome"
    }

    return "String is not palindrome"
}

console.log(checkPalindrome(userInput));


