const endpoint = "puzzle.json"
let secrets = [];
const pressed = [];
const secretCode = '';
const puzzleContainer = document.querySelector('.puzzleContainer');
window.addEventListener('resize', setHeight);
document.documentElement.style.setProperty(`--height`, (puzzleContainer.offsetWidth / 5) + "px");

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => secrets.push(...data))

let random = Math.floor(Math.random() * 2)
console.log(random);
console.log(secrets);
console.log();

let secretWord = secrets.filter(name => { return secrets.ID > 0});




console.log("%c" + secretWord, "color:red");


function setHeight(){

console.log(puzzleContainer.offsetWidth/5);
document.documentElement.style.setProperty(`--height`, (puzzleContainer.offsetWidth / 5) + "px");

}





















window.addEventListener('keyup', (e) => {

    //This gives use the key that has been pressed.

    pressed.push(e.key);
    //This would just infinitely log all things pressed and so would become essentially a keylogger
    //We need to cut it down to only be the amount of letters we are looking for.
    //-secretCode.length - 1: Trim from the back and up the amount of letters your secret code is +1
    //The amount is the length of the array - secret code length, so it only does that many
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);

    //This changes "pressed" into a string and checks it. 
    if(pressed.join('').includes(secretCode)){



    }

})