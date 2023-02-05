const endpoint = "puzzle.json"
let secrets = [];
const pressed = [];
let secretCode = '';
const puzzleContainer = document.querySelector('.puzzleContainer');

var testArray = [
    
    {
        "Secret": "optimization",
        "ID": "1",
        "Image_1": ".//Images/op.jfif",
        "Image_2": ".//Images/Tea.png",
        "Image_3": ".//Images/Mi.png",
        "Image_4": ".//Images/Say.jpg",
        "Image_5": ".//Images/shin.jpg"
    },
    {
        "Secret": "diabolical",
        "ID": "2",
        "Image_1": ".//Images/dye.jfif",
        "Image_2": ".//Images/abs.jpg",
        "Image_3": ".//Images/ball.jpg",
        "Image_4": ".//Images/lick.jpg",
        "Image_5": ".//Images/call.jpg"
    }
];


fetch(endpoint)
    .then(blob => blob.json())
    .then(data => secrets.push(...data))


let random = Math.floor(Math.random() * 2 + 1)
console.log(random);
let pickSecret = testArray.find(element => element.ID == random);
console.log(pickSecret.Secret);

secretCode = pickSecret.Secret;


window.addEventListener('resize', setPuzzle);
document.documentElement.style.setProperty(`--height`, (puzzleContainer.offsetWidth / 5) + "px");
document.getElementById("image1").style.backgroundImage=`url(${pickSecret.Image_1})`;
document.getElementById("image2").style.backgroundImage=`url(${pickSecret.Image_2})`;
document.getElementById("image3").style.backgroundImage=`url(${pickSecret.Image_3})`;
document.getElementById("image4").style.backgroundImage=`url(${pickSecret.Image_4})`;
document.getElementById("image5").style.backgroundImage=`url(${pickSecret.Image_5})`;


function setPuzzle(){

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

        console.log("This is done");
        document.getElementById("win").classList.add("display");
        document.getElementById("win").classList.remove("hidden");
        document.getElementById("puzzleContainer").classList.add("hidden");


        

    }

})