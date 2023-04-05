//const timeNodes = document.querySelectorAll('[data-time');
//convert this nodelist into an array

const timeNodes = Array.from(document.querySelectorAll('[data-time'));
let totalTime = document.querySelector('.totalTime');

//map through the array and get to times
const seconds = timeNodes

    //Get the timestamp from data-time
    .map(node => node.dataset.time)
    //We will then split minutes and seconds
    .map(timeCode => {
        //ParseFloat changes the string to a number
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        //return mins and seconds
        return (mins * 60) + secs;
    })
    //Adds all the the seconds together.
    .reduce((total, vidSeconds)=>total + vidSeconds);

let secondsLeft = seconds;
//Gets the total hours as a round number (e.g if 4.9 hours it would say 4)
const hours = Math.floor(secondsLeft / 3600);
//This will turn the remained (lets say .9 hours) into actual seconds. 
//% divides everything evenly then gives you the remainder.
secondsLeft = secondsLeft % 3600;
const mins =  Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);

totalTime.textContent = `Hours: ` + hours + ` Minutes: ` + mins + ` Seconds: ` + secondsLeft;