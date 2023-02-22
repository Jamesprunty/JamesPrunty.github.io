const canvas = document.querySelector('#draw');
const StorkeColour = document.querySelector('#strokeColour');
const strokeSize = document.querySelector('#strokeSize');
const reset = document.querySelector('#reset');
const save = document.querySelector('#save');


let SC = "#000000";
let SS = "10";

//We dont draw on the canvas but instead draw on the context 
//We need to get the context (we want 2D)
const ctx = canvas.getContext('2d');

//We want to set the size of the canvas to the size of the window. 
canvas.width = window.innerWidth;

let heightNo = ((window.innerHeight / 100) * 80);


canvas.height = heightNo;

//Canvas settings

//When we start we need a colour
ctx.strokeStyle = SC;
//Is the stroke rounded?
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = SS;

//We can use global composite oportator to do different things

let isDrawing = false;
//You need a start X and Y and a last X and Y
let lastX = 0;
let lastY = 0;

//A good way to test events, is create a function with (e) and console log it. Then add event listener
function draw(e) {
    //stop function from running when mouse is not down
    if (!isDrawing) return;

    //This will change the hue as we go. 
    ctx.strokeStyle = SC;
    ctx.lineWidth = SS;


    //start path
    ctx.beginPath()
    //start from
    ctx.moveTo(lastX, lastY);
    //Go to. These offset values are coming from the event
    ctx.lineTo(e.offsetX, e.offsetY);
    //Draw Line
    ctx.stroke();

    ctx.fillStyle = "red";
    ctx.fill();

    //update the start position
    /*lastX = e.offsetX;
    lastY = e.offsetY;*/
    //We can do the previous code in one line. This is destructuring an array

    [lastX, lastY] = [e.offsetX, e.offsetY];

    reset.addEventListener('click', function () {

        console.time('reset');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById("linkText").href = "";
        document.getElementById("linkText").classList.add("hidden");
        document.getElementById("linkText").classList.remove("show");

        console.log('%c this is in the reset listener', 'color: red');

        console.dir(reset);

        console.count('reset');


        console.timeEnd('reset');
    })

    save.addEventListener('click', function () {

        const imageURL = canvas.toDataURL("image/jpg");
        document.getElementById("linkText").href = imageURL;
        document.getElementById("linkText").classList.add("show");
        document.getElementById("linkText").classList.remove("hidden");

        console.log('%c this is in the save listener', 'color: blue');



    })



}

canvas.addEventListener('mousemove', draw);
//These listeners will let us know if the mouse is up or down. We need to pass the event
canvas.addEventListener('mousedown', (e) => {

    isDrawing = true;
    //update the lastX and lastY. When the mouse goes down, lastx&Y equal where the mous is
    [lastX, lastY] = [e.offsetX, e.offsetY];

});
canvas.addEventListener('mouseup', () => isDrawing = false);
//We need this listener so if the mouse leaves the canvas it turns off
canvas.addEventListener('mouseout', () => isDrawing = false);

StorkeColour.addEventListener('change', function () {

    console.log(this.value);
    SC = this.value;

    console.log('%c This is value' + SC, 'color: green');

    console.assert(SC == "", "This is not empty");
})

strokeSize.addEventListener('change', function () {

    console.log(this.value);
    SS = this.value;
});












