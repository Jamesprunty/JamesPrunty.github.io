const pressed = [];
const secretCode = 'james';


window.addEventListener('keyup', (e) => {

    //This gives use the key that has been pressed.
    console.log(e.key);
    pressed.push(e.key);
    //This would just infinitely log all things pressed and so would become essentially a keylogger
    //We need to cut it down to only be the amount of letters we are looking for.
    //-secretCode.length - 1: Trim from the back and up the amount of letters your secret code is +1
    //The amount is the length of the array - secret code length, so it only does that many
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);

    //This changes "pressed" into a string and checks it. 
    if(pressed.join('').includes(secretCode)){

        cornify_add();

    }


})