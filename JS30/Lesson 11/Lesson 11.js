/*Get elements*/

/*This gets the overall div, but we need to get the ones under it*/
const player = document.querySelector('.player');
/*Get the video element*/
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player_slider');




/*Build Functions*/

function togglePlay() {

    //Paused is a part of the video element. "playing" is not part of it. 

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}


function updateButton() {

    //Check to see if its paused, if true, then show play symbol.
    const icon = this.paused ? '►' : '❚ ❚';
    // Set the button.
    toggle.textContent = icon;

}

function skip(){

//We can put a data-skip on anything we want. 
//This will show us the skip value
console.log(this.dataset.skip);

}


/*Hook up the event listeners*/

video.addEventListener('click', togglePlay);
/*We may pause the video in different ways so instead of looking for the play button, we just test the video for when its played*/
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

//This has anything with data-skip attribute
skipButtons.forEach(button => button.addEventListener('click', skip));

