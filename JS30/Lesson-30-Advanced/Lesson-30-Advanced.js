const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const highScores = document.querySelector('#highScores');
let lastHole;
let timeUp = false;
let score = 0;
let timerTime = 10;
let timer = timerTime;
let information = document.querySelector('#information');

//Set up local storage

const highScore = JSON.parse(localStorage.getItem('highScore')) || 0;

highScores.innerHTML = `Your current high Score is: ` + highScore;




//This will return a random number between two values (in ms)
function randomTime(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}

//This will push through a Node list of all of our Hole DOMs
function randomHole(holes) {
    //Gets a random index from the node list
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    //If the hole that is selected is the same as the previous one, return itself to be run again
    if (hole === lastHole) {
        return randomHole(holes);
    }

    lastHole = hole;
    //The hole DOM needs to be returned so we can reference it as a dom 
    return hole;

}

function peep() {
    //get the random time and the random holes from the functions
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);

}

function startGame() {
    //Reset the game
    timer = timerTime;
    information.innerHTML = timer + ` Seconds`
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();



    let timerInterval = setInterval(() => {
        
        timer--
        if(timer >= 0){
        information.innerHTML = timer + ` Seconds`
        } else if (timer < 0){
            
            if(score > parseInt(highScore)){

                information.innerHTML = `Time Up, Your score is: ` + score + `! That's a new High Score!`

            }else {

                information.innerHTML = `Time Up, Your score is: ` + score + `!`
            }
        }

        if (timer < 0) {
            if(score > parseInt(highScore)){
                highScores.innerHTML = `Your current high Score is: ` + score;
                localStorage.setItem('highScore', JSON.stringify(score));

            }
            
            clearInterval(timerInterval);
        }
    }, 1000);


    setTimeout(() => {
        timeUp = true;
    }, timer * 1000);
}

function bonk(e) {
    //All click events have a "isTrusted" tag. This means if you simulate a click, it will no work. You have to actually click
    if (!e.isTrusted) return;
    //Increase score
    score++;
    //Make the mole move down
    this.classList.remove('up');
    scoreBoard.textContent = score;

}

//Add an event listener on the moles, when clicked, run bonk function
moles.forEach(element => element.addEventListener('click', bonk));
















