const max = 100
const min = 1
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const submit = document.querySelector('#subt')

const prevGuess = document.querySelector('.guesses')

const guessRemaining = document.querySelector('.lastResult')

const result = document.querySelector('.lowOrHi')

let oldGuess = [];
let playGame = true;
let numberOfRemaining = 10;

submit.addEventListener('click', (e) => {
  e.preventDefault();

  const guessField = Number(document.querySelector('.guessField').value)

  if (playGame) {
    if (guessField < 1 || guessField > 100) {
    result.innerHTML = "Please enter a number between 1 to 100"
  } else if (isNaN(guessField)) {
    result.innerHTML = "Please enter a valid number"
  } else {
    oldGuess.push(guessField)
    prevGuess.innerHTML = oldGuess;
    if (numberOfRemaining > 0) {
      if (guessField > randomNumber) {
        result.innerHTML = "Too high"
      } else if (guessField < randomNumber) {
        result.innerHTML = "Too low"
      } else if (guessField == randomNumber) {
        result.innerHTML = "Congratulation!! You won the game"
        playGame = false;
      }
    }

    numberOfRemaining--;
    guessRemaining.innerHTML = numberOfRemaining;

    if (numberOfRemaining == 0) {
      result.innerHTML = `Sorry!! You lost. Random number is ${randomNumber}`
      playGame = false;
    }
  }
  }
})