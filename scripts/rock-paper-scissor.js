let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

scoreElement();

let isAutoplaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoplaying) {
    isAutoplaying = true;
    intervalId = setInterval( () => {
      const playerMove = pickComputerMove(); // call the function
      playGame(playerMove);
    }, 1000);
  } else {
    clearInterval(intervalId); // stop the interval
    isAutoplaying = false;
  }
}

document.querySelector('.js-rock-btn').addEventListener('click', () => {
    playGame('rock');

});

document.querySelector('.js-paper-btn').addEventListener('click', () => {
    playGame('paper');

});

document.querySelector('.js-scissor-btn').addEventListener('click', () => {
    playGame('scissor');

});


function playGame(playerMove) {
    document.querySelector('.js-refresh').innerText = ''; /* This will disppear the refresh line */
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'Lose';
        } else {
            result = 'Win';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'Win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else {
            result = 'Lose';
        }
    } else if (playerMove === 'scissor') {
        if (computerMove === 'rock') {
            result = 'Lose';
        } else if (computerMove === 'paper') {
            result = 'Win';
        } else {
            result = 'Tie';
        }
    }

    if (result === 'Win'){
        score.wins +=1;
    }
    else if (result === 'Lose'){
        score.losses +=1;
    }
    else if (result === 'Tie') {
        score.ties +=1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    scoreElement();

    document.querySelector('.js-result')
        .innerHTML= result;

    document.querySelector('.js-moves')
        .innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    }

    

function pickComputerMove() {
const randomNumber=Math.random();
let computerMove='';

if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove='rock';
}
else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove='paper';
}
else if (randomNumber >=2/3 && randomNumber <1){
    computerMove='scissor'
}
return computerMove;

}
function scoreElement(){
document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
}