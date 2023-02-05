/*Get elements*/

/*This gets the overall div, but we need to get the ones under it*/
const player = document.querySelector('.player');
/*Get the video element*/
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');




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

function skip(e) {

    //We can put a data-skip on anything we want. 
    //This will show us the skip value
    //We add the skip to the current time. "This.dataset.skip" is a string, so the parsefloat converts it.
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);

}

function handleRangeUpdate() {
    //This gets the name of the range (e.g. volume), and sets it to the value.

    video[this.name] = this.value;

}

function handleProgress() {

    //CurrentTime and duration are both elements of the video property.
    const percent = (video.currentTime / video.duration) * 100;
    //Se the progress bar to the percent of the progress.
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {

    //offsetX tells us where we clicked in the progress bar divided by the width to give us a percentage. 
    const scrubtime = (e.offsitex / progress.offsetWidth) * video.duration;
    video.currentTime = scrubtime;

}


/*Hook up the event listeners*/

video.addEventListener('click', togglePlay);
/*We may pause the video in different ways so instead of looking for the play button, we just test the video for when its played*/
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

//This has anything with data-skip attribute
skipButtons.forEach(button => button.addEventListener('click', skip));

//Look for change in the ranges. 
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

//we have to set a flag variable to see when the mouse is down. 
let mousedown = false;

progress.addEventListener('click', scrub);
//With this function it will check if mouse is down, if true, it will move on to the next (which is scrub()).
//Since the scrub needs the event to be passed, we have to pass it through.
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
//Set mousedown when clicked
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

