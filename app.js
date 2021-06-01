// REFACTORING THE WHOLE CODE.

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const resetBtn = document.querySelector('#resetBtn');
const winningScoreSelect = document.querySelector('#playUpto')

let winningScore = 3; //let's play upto 5.
let isGameOver = false; // meaning you just started the game.

//let's create function that works for player 1 and player 2 or what we call generic function.
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1; //basically, it could be player 1 or player 2.
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


//When Player 1 click.
p1.button.addEventListener('click', function () {
    //so when they click on player one button and the code goes below:
    updateScores(p1, p2); //p1 is the player and p2 is the opponent.
})

//when Player 2 click.
p2.button.addEventListener('click', function () {
    //so when they click on player one button and the code goes below:
    updateScores(p2, p1); //p2 is the player and p1 is the opponent.
})


//we are deploying a change event which is very useful.
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value); // converted the string into number.
    reset(); // also, need this to pass in here to reset it when user select their option.
})

resetBtn.addEventListener('click', reset) // passing in the function inside the resetButton.

function reset() {
    isGameOver = false;
    //using for of loop instead regular for loop.
    for (let p of [p1, p2]) { // since there are two player at the moment.
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
