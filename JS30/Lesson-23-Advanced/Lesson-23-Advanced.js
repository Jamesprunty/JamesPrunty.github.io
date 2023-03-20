

//New utterance this will containthe pitch, rate, text and voice it will be said in
const msg = new SpeechSynthesisUtterance();
//All the voices will be put here
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

//This will put whatever is in the text area into the utterance 
msg.text = document.querySelector('[name="text').value;

function populateVoices() {

    //This gets all the voices on the system
    voices = this.getVoices();

    const voiceOptions = voices
        //we can filter by language
        /*.filter(voice => voice.lang.includes('en'))*/
        //Map over all the voices and add each one as an option in the dropdown
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
    //Add these voices to the dropdown
    voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {

    //This will look in the voices list and find the one that has the same name as "this.vlaue" which is the name of the voice
    msg.voice = voices.find(voice => voice.name === this.value);
    //If something is running this will cancel it and start again
    toggle();

}

//startOver = true, means by default it will be true and so you don't need to pass anything to make it work. However, it means you can pass a "false" in if you dont want it to start over. 
function toggle(startOver = true) {
    //This will cancel anything already running
    speechSynthesis.cancel();
    if (startOver) {

        //This will restart the speaking
        speechSynthesis.speak(msg);

    }

}

function setOption(){

//we can find what property has changed "this.name" and what it has changed to "this.value"
//because the names are the same as the utterance values we can use this code
msg[this.name] = this.value;
toggle();
}


//When the voicesChanged we will populate voices
//You cant do this on page load as this takes a couple of seconds to load
//speechSynthesis is what actually says the words
speechSynthesis.addEventListener('voiceschanged', populateVoices);
//Look for when a voice is selected, then run function
voicesDropdown.addEventListener('change', setVoice);
//When one of the options change, run function
options.forEach(option => option.addEventListener('change', setOption));
//event listener for speak button
speakButton.addEventListener('click', toggle);
//If you need to run an argument through a function you can just "function(argument) as that will just load on page load"
//You can use (function.bind(null, argument)) (null is relating to "this" but we aren't using "this" so its null)
//Or you can create an inline function as below
stopButton.addEventListener('click', () => toggle(false));







