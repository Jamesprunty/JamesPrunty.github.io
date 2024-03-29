function playSound(e) {
    //This will show us the event when a key is typed, it will show us various bits of info.
    //The main thing we are looking for in this event is the keycode.
    /*console.log(e);*/
    //To get the keycode, we can use the "."
    /*console.log(e.keyCode)*/
    //Create a constant 
    //Select the audio element (must be with a "`")
    //We want the audio element from a specific keyCode
    //That keycode is e.keyCode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //Next we will do the same but call the class "key" with ".key"
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //This will return the audio html data, if the key has no audio it will return null.
    //console.log(audio);
    //If there is no audio on that data-key keycode, stop.
    if (!audio) return;
    //Without this you would have to wait for the sound to finish playing fully to play again
    //By adding this you rewind to the beginning again.
    audio.currentTime = 0;
    //Otherwise, play audio
    audio.play();
    /*console.log(key);*/
    //We then add the class "playing" to the key with "classList.add"
    key.classList.add('playing');
}
//To remove the class we have to add a transition end event
//This meand we are listening for when the transition finishes (which is after the time set in css)
//We need to look at all the keys so we add "querySelectorAll" in the class of Key.
function removeTransition(e) {
    /*console.log(e);*/
    //We are looking for the transform transition and none others
    //So If the PropertyName is NOT 'transform' then return.

    if (e.propertyName !== 'transform') return;
    //This means that when it is finished transitioning, it will then return 'transform'
    /*console.log(e.propertyName);*/
    //this is always equal to what got called against it, test by displaying in console
    /*console.log(this);*/
    //remove "playing" class from "this" which is the div.
    this.classList.remove('playing');
}
//This is selecting all that have the class "key".
const keys = document.querySelectorAll('.key');
//For each key in keys add an event listener that will look out for transitions.
//Then run the function "removeTransition".
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//There are different elements we could be looking for. Window is the one we are looking for here.
//The event we are looking for, is keydown.
//"e" in the function is for the event that takes place when you press a key down. 
window.addEventListener('keydown', playSound);

