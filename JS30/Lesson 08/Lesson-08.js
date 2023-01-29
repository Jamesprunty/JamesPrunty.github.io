const canvas = document.querySelector('#draw');

//We dont draw on the canvas but instead draw on the context 
//We need to get the context (we want 2D)
const ctx = canvas.getContext('2d');

//We want to set the size of the canvas to the size of the window. 
canvas.width = window.innerWidth;

let heightNo = ((window.innerHeight / 100) * 80);


canvas.height = heightNo;

//Canvas settings

//When we start we need a colour
ctx.strokeStyle = '#BADA55';
//Is the stroke rounded?
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

//We can use global composite oportator to do different things

let isDrawing = false;
//You need a start X and Y and a last X and Y
let lastX = 0;
let lastY = 0;

//HSL H=hue S=saturation L=light Hue works 360 deg from red to red
let hue = 0;

let direction = true;


//A good way to test events, is create a function with (e) and console log it. Then add event listener
function draw(e) {
    //stop function from running when mouse is not down
    if (!isDrawing) return;

    console.log(e);

    //This will change the hue as we go. 
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;


    //start path
    ctx.beginPath()
    //start from
    ctx.moveTo(lastX, lastY);
    //Go to. These offset values are coming from the event
    ctx.lineTo(e.offsetX, e.offsetY);
    //Draw Line
    ctx.stroke();

    //update the start position
    /*lastX = e.offsetX;
    lastY = e.offsetY;*/
    //We can do the previous code in one line. This is destructuring an array

    [lastX, lastY] = [e.offsetX, e.offsetY];

    //Increment the hue to change it
    hue++;
    //Reset hue
    if (hue >= 360) {
        hue = 0;
    };

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {

        //We want to toggle direction
        //If it is greater than 100 or less than 1 flip the direction
        direction = !direction

    }

    if (direction) {

        //increase line width
        ctx.lineWidth++;

    } else {
        //Decrease line width
        ctx.lineWidth--;
    }

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








