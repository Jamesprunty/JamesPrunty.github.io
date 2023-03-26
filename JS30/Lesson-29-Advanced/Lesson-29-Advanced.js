let countdown;
//Get the timer display
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
//Selects everything with "data-time"
const buttons = document.querySelectorAll('[data-time]');




function timer(seconds) {
    //Clear any existing timers
    clearInterval(countdown);

    //This will give us the time now 
    const now = Date.now();
    //This will set the desired time, which is now plus how many seconds (*1000 as it is in ms)
    const then = now + seconds * 1000;
    //This runs as soon as it knows how much time is left to show the first amount
    displayTimeLeft(seconds);
    //This sets the time we wil be back, it is the current time + the timer amount
    displayEndTime(then);
    //This runs every second
    countdown = setInterval(() => {
        //Calculates seconds left between the timer and now
        const secondsLeft = Math.round((then - Date.now()) / 1000)

        if (secondsLeft < 0) {
            //Remove the interval
            clearInterval(countdown);

            return;
        }

        //Display it
        displayTimeLeft(secondsLeft);
    }, 1000);


}


//We run this in a function as the setInterval only runs after the first second. 
function displayTimeLeft(seconds) {
    //We do math.floor in order to get the whole numbers 
    const minutes = Math.floor(seconds / 60)
    //This will give us the seconds left after it has been equally divided by 60 (for the minutes)
    const remainderSeconds = seconds % 60;
    //get the right time format
    //If the minutes or seconds in under 10, then add a "0" to the beginning, otherwise (:) don't add anything.
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    //This updates the tab info in the browser
    document.title = display;
    //Update the timer on screen
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {

    //The way timestamps work is that when you type "Date.now" this is just the number of milliseconds since jan 1 1970
    //To get this time back, just type "new Date(STRING OF NUMBERS)" and this will give you the date in a full timestamp
    //You can put this through a variable and use it later if needed
    //If ou put this in a variable "x" you could then put x.getDate(), x.getDay(), x.getMonth() and it would return the data
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    //Display the time
    endTime.textContent = `Be back at ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){

    //"this" will equal the button
    //"this.dataset" will give us the DOM element with the time in it
    //"this.dataset.time" will give us the time
    //We need to parseInt to put it in as a number
    const seconds = parseInt(this.dataset.time);
    console.log(seconds);

    timer(seconds);


}

//When we click a button run startTimer
buttons.forEach(button => button.addEventListener('click', startTimer));

//If we want to select a form we cab put "document."NAMEOFFORM" eg document.customForm.
//If in that form we have inputs we these will show up nested in the selection

document.customForm.addEventListener('submit', function(e){

    //This will prevent it from submitting and refreshing and creating a get request.
    e.preventDefault();
    //Collect the amount of minutes from the input
    const mins = this.minutes.value;
    //Push to timer and convert mins to seconds
    timer(mins * 60);
    //reset the input
    this.reset();

})






