const readline = require("readline");

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

function gameStart() {
  rl.question(`Want to play Higher or Lower?`, (answer) => {
    if (answer == "yes") {
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

let guessCount = 1;

function playerGuess() {
  rl.question(`What's your pick?`, (guess) => {
    if (guessCount < 3) {
      if (guess < number) {
        guessCount++;
        console.log(`You need to guess higher!`);
        console.log(`Choose Again!`);
        playerGuess();
      } else if (guess > number) {
        guessCount++;
        console.log(`You need to choose lower!`);
        console.log(`Choose Again!`);
        playerGuess();
      } else if (guess == number) {
        console.log(`You Win!`);
        gameStart();
      }
    } else if (guessCount === 3) {
      console.log(`You Lose!`);
      gameStart();
    }
  });
}

gameStart();
