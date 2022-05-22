'use strict';
/* console.log(document.querySelector('.message').textContent);
console.log((document.querySelector('.message').textContent = 'dom altered '));
 */

let secretNo = Math.trunc(Math.random() * 20, 2);
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNo;
const displayMessage = msg => {
  document.querySelector('.message').textContent = msg;
};
document.querySelector('.check').addEventListener('click', () => {
  let guessNo = Number(document.querySelector('.guess').value);

  //No number passed
  if (!guessNo) {
    //document.querySelector('.message').textContent = 'No Answer..!!😵';
    displayMessage('No Answer..!!😵');
  }
  //Number is correct
  else if (guessNo === secretNo) {
    //document.querySelector('.message').textContent = 'Correct Number..!!😆';
    displayMessage('Correct Number..!!😆');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNo;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNo !== secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNo > secretNo ? 'That is to high..!!😉' : 'That is to low..!!😇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game..💠';
      displayMessage('You lost the game..💠');
      document.querySelector('.score').textContent = 0;
    }
  } /*
  //When number is to high
  else if (guessNo > secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'That is to high..!!😉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game..💠';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When number is too low
  else if (guessNo < secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'That is to low..!!😇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ..💠';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});
document.querySelector('.again').addEventListener('click', () => {
  secretNo = Math.trunc(Math.random() * 20, 2);
  score = 20;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
