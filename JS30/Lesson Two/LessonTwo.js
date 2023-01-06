
//get the second hand
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate() {
    //Gets the current date and sets to "now"
    const now = new Date();
    // Make a const for seconds and set to "getSeconds()"
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    // Get the percentage by deviding by 60, then times by 360 to get the degrees
    //We add 90 degress to offset the default 90 we put in.
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;
    //Set the secondhand rotate to the seconds degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(seconds);
}


// This will run "setDate" every second.
setInterval(setDate, 1000);


