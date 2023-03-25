let countdown;





function timer(seconds){
   //This will give us the time now 
    const now = Date.now();
    //This will set the desired time, which is now plus how many seconds (*1000 as it is in ms)
    const then = now + seconds * 1000;
    //This runs as soon as it knows how much time is left to show the first amount
    displayTimeLeft(seconds);
    //This runs every second
    countdown = setInterval(() => {
        //Calculates seconds left between the timer and now
        const secondsLeft = Math.round((then - Date.now())/1000)

        if(secondsLeft < 0){
            //Remove the interval
            clearInterval(countdown);

            return;
        }

        //Display it
        displayTimeLeft(secondsLeft);
        }, 1000);


}


//We run this in a function as the setInterval only runs after the first second. 
function displayTimeLeft(seconds){
    console.log(seconds)
}