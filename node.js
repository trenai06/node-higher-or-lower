const readline = require("readline");

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

let guessCount;

function gameStart() {
  rl.question(`Want to play Higher or Lower?`, (answer) => {
    if (answer == "yes") {
      guessCount = 1;
      console.log(
        `Nice! guess a number (1-100) and I'll tell you if you need to guess higher or lower.`
      );
      randomNumber();
      playerGuess();
    } else if (answer == "no") {
      console.log(`Lame! Goodbye, I guess....`);
      rl.close();
    } else {
      console.log(`I was prepared for this... Please answer Yes or No.`);
      gameStart();
    }
  });
}

function randomNumber() {
  number = Math.floor(Math.random() * 100 + 1);
  return number;
}

function playerGuess() {
  rl.question(`What's your pick?`, (guess) => {
    if (guessCount < 3) {
      if (guess < number && guess > 0) {
        guessCount++;
        console.log(`You need to guess higher!`);
        console.log(`Choose Again!`);
        playerGuess();
      } else if (guess > number && guess < 100) {
        guessCount++;
        console.log(`You need to choose lower!`);
        console.log(`Choose Again!`);
        playerGuess();
      } else if (guess == number) {
        console.log(`You Win!`);
        gameStart();
      } else {
        console.log(`Please choose from 1 - 100!`);
        playerGuess();
      }
    } else if (guessCount === 3) {
      console.log(`You Lose!`);
      gameStart();
    }
  });
}

gameStart();
