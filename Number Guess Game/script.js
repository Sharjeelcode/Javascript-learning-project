const guess = document.getElementById("guess");
const previousGuesses = document.getElementById("previousGuesses");
const remaningGuess = document.getElementById("remaningGuess");
const remarks = document.getElementById("remarks");

const number = Math.ceil(Math.random() * 100 + 1);
let rGuess = Number(10);
const pGuess = [];

function submitGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  if (!guess) {
    remarks.innerText = "Please enter a valid value";
  } else if (rGuess === 0) {
    remarks.innerText = "Game Over";
    nnerText = "";
    previousGuesses.innerText = "";
    document.getElementById("guess").value = "";
    remaningGuess.innerHTML = 10;
  } else if (guess < number) {
    remarks.innerText = "Your guess is Lesser";
    pGuess.push(guess);
    rGuess--;
    remaningGuess.innerHTML = rGuess;
    previousGuesses.innerHTML = pGuess;
    document.getElementById("guess").value = "";
  } else if (guess > number) {
    remarks.innerText = "your guess is Greater";
    pGuess.push(guess);
    rGuess--;
    console.log(guess);
    remaningGuess.innerHTML = rGuess;
    document.getElementById("guess").value = "";
  } else if (guess === number) {
    remarks.innerText = "!Yahoo, Your guess is Correct";
    remaningGuess.innerText = "";
    previousGuesses.innerText = "";
    document.getElementById("guess").value = "";
  }
}
