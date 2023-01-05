

const secondHand = document.querySelector('.second-hand');



function setDate() {
    //Gets the current date and sets to "now"
    const now = new Date();
    // Make a const for seconds and set to "getSeconds()"
    const seconds = now.getSeconds();
    // Get the percentage by deviding by 60, then times by 360 to get the degrees
    const secondsDegrees = ((seconds / 60) * 360);
    console.log(seconds);
}


// This will run "setDate" every second.
setInterval(setDate, 1000);


