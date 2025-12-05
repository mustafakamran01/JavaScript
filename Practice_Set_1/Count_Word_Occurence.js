/*
    We need to count how many times each word appears in a sentence.

    Example:
    Input: "I love coding and I love JavaScript"
    Output: { I: 2, love: 2, coding: 1, and: 1, JavaScript: 1 }
*/

// Taking string as an input
let myStr = "I love coding and I love coding in javaScript";

// Taking an empty object to count the occurency of each word
let wordCount = {}

// Applying loop to array to add occurence to each word
myStr.split(' ').forEach( (word) => wordCount[word] ? wordCount[word]++ : wordCount[word] = 1)

console.log(wordCount);
