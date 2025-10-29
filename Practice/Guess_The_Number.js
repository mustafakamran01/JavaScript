const prompt = require("prompt-sync")();

const max = 100
const min = 1
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let numberOfGuessLeft = 10;

prevGuess = [];

for (let i = 1; i <= 10; i++){

    let userInput = Number(prompt("Enter your guess: "))
    
    if (userInput < 1 || userInput > 100 || isNaN(userInput)){
    
        console.log("Please choose number between 1 to 100 or you have entered a invalid number");
        console.log();
        numberOfGuessLeft--;
        console.log(`Number of guess left: ${numberOfGuessLeft}`);
        // console.log();
        prevGuess.push(userInput)
        console.log(`Previous guesses: ${prevGuess},`);
        console.log();
        continue;
    }

    if (userInput > randomNumber){

        console.log("Too high!!!");
        numberOfGuessLeft--;
        console.log();
        console.log(`Number of guess left: ${numberOfGuessLeft}`);
        // console.log();
        prevGuess.push(userInput)
        console.log(`Previous guesses: ${prevGuess},`);
        console.log();
    
    } else if (userInput < randomNumber){
    
        console.log("Too low!!!");
        numberOfGuessLeft--;
        console.log();
        console.log(`Number of guess left: ${numberOfGuessLeft}`);
        // console.log();
        prevGuess.push(userInput)
        console.log(`Previous guesses: ${prevGuess},`);
        console.log();
    
    } else if (userInput === randomNumber){
    
        console.log();
        console.log("   Congratulations!!!! You have guessed the number correct.");
        break;
    }

    if (numberOfGuessLeft == 0){
        console.log();
        console.log("   Sorry!!! You lost the game");
    }

}

