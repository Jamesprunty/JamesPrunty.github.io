//This is the entire white bar
const speed = document.querySelector('.speed');
//This is the filled part that shows the speed
const bar = document.querySelector('.speed-bar');
//The actual video
const video = document.querySelector('.flex');

function handleMove(e){

    //We need to find the top of the bar
    //We need to offset it in case there are other elements on the page that change the value
    const y = e.pageY - this.offsetTop;
    //We can start to get the percentage by taking the y value (the top) and dividing it by where the mouse is
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    //We can get the actual percent of the actual div by multiplying by 100
    const height = Math.round(percent * 100) + '%';
    //This updates the filled area to the percentage (which is where the mouse is)
    bar.style.height = height;
    //This will give us a range between the min and max
    //0% is not 0 it is 0.4 and 100% isn't 100, it is 4. so we need to show this. 
    const playbackRate = percent * (max - min) + min;
    //This will set the bar text to the amount.
    //"toFixed(2)" will only show 2 decimal places
    bar.textContent = playbackRate.toFixed(2) + 'x';
    //Change the speed on the video
    video.playbackRate = playbackRate;

}


speed.addEventListener('mousemove', handleMove)