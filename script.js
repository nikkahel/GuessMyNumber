'use strict';
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const callMessgge = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when 0
  if (!guess) {
    callMessgge('Wrong Number');

    // when player win
  } else if (guess === secret) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = ' 30rem';
    document.querySelector('.number').textContent = secret;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when player high
  } else if (guess !== secret) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secret ? 'Too high' : 'too low';
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = ' 15rem';
  document.querySelector('.number').textContent = '?';
});
