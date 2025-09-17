const randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const guess = parseInt(userInput.value);

  if (guess <= 0 || guess > 100) {
    alert('Please enter a number between 1 to 100');
  } else if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
  }

  if (numGuess > 10) {
    lowOrHi.innerHTML = `Game Over. Random number was ${randomNumber}`;
  } else {
    if (guess === randomNumber) {
      lowOrHi.innerHTML = `Congratulations!!!, your guess is right ${guess}`;
    } else if (guess < randomNumber) {
      lowOrHi.innerHTML = 'Number is TOO less';
    } else {
      lowOrHi.innerHTML = 'Number is TOO high';
    }
  }
});
