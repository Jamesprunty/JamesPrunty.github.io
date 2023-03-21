const divs = document.querySelectorAll('div');
const button = document.querySelector('input');

function logText(e){
    //This will log the parents as well as the children
    //This is because they surrond the inner divs.
    //So by clicking on "three", we have clicked "two" and "one" and the body and the page and html etc etc
    //This is called bubbling
    //You will not always see this if you are not listening for them
    //You can put this in an if statement to stop  it at whatever point you want it to.
    console.log(this.classList.value);

    //If we want it to stop bubling and ONLY run the event on the first one in the series with e.stoppropagation()
    // If capture is set to true, this will mean that it will stop on the highest level with an event listener and not process anything more
    
    /*e.stopPropagation();*/

}

/*divs.forEach(div => div.addEventListener('click', logText));*/

//The way that the even listener works in JS, is that it goes from top to bottom
// It starts with the highest element and checks if you clicked that, then the next etc
// It captures all of these events going from top to bottom
// Once it has all the events it then bubbles which runs them from the lowest level working its way back up. 

//To reverse this we can set capture to true. This will run on the capture, not the bubble, so will go from top to bottom. 
// by default capture is false
divs.forEach(div => div.addEventListener('click', logText, {
    //Runs the event on catpure rather than bubble so will work from top down    
    capture: false,
    //This will run the event once and then UNBIND itself, to remove the eventlistener completely
    once: true

        }));

        button.addEventListener('click', () => {console.log("CLICK")}, {once: true});









