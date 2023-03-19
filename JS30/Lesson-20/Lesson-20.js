//SpeechRecognition is a global variable that lives in the browser and lives in the browser.
//What this is doing is setting speech recognition to be webkit speech recognition.
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//Create a new instance
const recognition = new SpeechRecognition();

//This will type as you speak, if this is false you would need to stop talking for it to type anything.
recognition.interimResults = true;

//we will need to creat a paragraph for the text to go into
let p = document.createElement('p');

//This is the div all the information will be put into.
const words = document.querySelector('.words');

//This will create our first one
words.appendChild(p);

//We add an event listener waiting for a result
//This will then pass an event 
recognition.addEventListener('result', e =>{

//This returns a list (not an array). So we can't do the normal things we do with an array. 
//console.log(e.results);

//Because the data is a list not an array, we need to turn it into an array. 
const transcript = Array.from(e.results)
    //This will map over the results and give us the first one
    .map(result => result[0])
    //This then goes over that first result and gets the transcript
    .map(result => result.transcript)
    //Make this a string.
    .join('')

    //This adds the text to the P
    p.textContent = transcript;

    //If the sentance has finished ("isFinal")
    if(e.results[0].isFinal){
        //Create a new P element
        p = document.createElement('p');
        //Append it to words
        words.appendChild(p);
    }

console.log(transcript);


});

//When the recognition ends, start again 
//If we dont do this then when we stop speaking it will diconnect
recognition.addEventListener('end', recognition.start);

//We need to start the recognition
recognition.start();