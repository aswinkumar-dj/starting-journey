let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

scoreElement();

function playGame(playerMove) {
    document.querySelector('.js-refresh').innerText = ''; /* This will disppear the refresh line */
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'Lose';
        } else {
            result = 'Win';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'Win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else {
            result = 'Lose';
        }
    } else if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
            result = 'Lose';
        } else if (computerMove === 'Paper') {
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
    computerMove='Rock';
}
else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove='Paper';
}
else if (randomNumber >=2/3 && randomNumber <1){
    computerMove='Scissor'
}
return computerMove;

}
function scoreElement(){
document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
}