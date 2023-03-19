const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const r = document.querySelector(':root');
let pixelLocation;



function getVideo() {
    //This gets sets the video to get video data.
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);

            //Set the source to be the mediastream
            //To play the video we need to convert it to a URL
            video.srcObject = localMediaStream;
            //It may update every once in a while, but to get a video, you have to call "play()"
            video.play();
        })
        //Catch any error, if the user didn't allow the webcam
        .catch(err => {
            console.error(`Please allow access to webcam`, err)
        });
}

function paintToCanvas() {

    //Get the width and Height of the video
    const width = video.videoWidth;
    const height = video.videoHeight;

    //We need to make sure the canvas width & Height is the same as the video

    canvas.width = width;
    canvas.height = height;


    //Return this so that if you need access to it you can get access and call it back
    return setInterval(() => {
        //Every 16ms we will draw the image of the video
        //Starts in the corner and goes for the height and width
        ctx.drawImage(video, 0, 0, width, height);
        //This exports the data to pixels, this is very large, 1.2m values. This will be an array of "Red, Green, Blue, Alpha" of all the pixels
        //So for each pixel you have 4 numbers in the array.
        let pixels = ctx.getImageData(0, 0, width, height);
        //Run the pixels through the filter

        //pixels = redEffect(pixels);

        //pixels = rgbSplit(pixels);

        //This will have the new frames come up but the others will still be visible for 10 frames causing a blur
        //ctx.globalAlpha = 0.1;

        pixels = greenScreen(pixels);

        //update the canvas
        ctx.putImageData(pixels, 0, 0);


    }, 16);

}



function takePhoto() {

    //Reset the snap sound and play when button is pressed.
    snap.currentTime = 0;
    snap.play();

    //Take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    //Creates a porper link
    const link = document.createElement('a');
    //Set the link to be the data from the snapshot
    link.href = data;
    //Se tthe attribute to download (this will allow you to donwload a copy)
    link.setAttribute('download', 'handsome');
    //Set the text to the link
    //link.textContent = 'Download Image';
    //Instead of a link, we put the image in a <img> tag
    link.innerHTML = `<img src="${data}" alt="Handsome Fella" />`

    //Insert into the strip at the beginning
    strip.insertBefore(link, strip.firstChild);



}

function redEffect(pixels) {
    //Loop through all the pixels and change each value
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100;//R
        pixels.data[i + 1] = pixels.data[i + 1] - 50//G
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5//B
    }

    return pixels;
}


function rgbSplit(pixels) {

    //Loop through all the pixels and change each value
    //This picks the data and splits them up
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0];//R
        pixels.data[i + 100] = pixels.data[i + 1];//G
        pixels.data[i - 150] = pixels.data[i + 2];//B
    }

    return pixels;
}


function greenScreen(pixels) {
    //This will hold the min and maximum "green" (Which is the greenscreen colour. )
    const levels = {};
    //This gets all the data from the six sliders and puts them in the array. 
    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i += 4) {

        //Get the rgb data
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        //If the rgb values are between the ranges

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            //Take the pixels out
            //The fourth pixel is the transparency pixel so if we set it to 0 is will be transparent rather than 255 which is solid
            pixels.data[i + 3] = 0;

        }
    }

    return pixels;

}


getVideo();

//Once this video starts playing, it will send out an event called 'canplay'
video.addEventListener('canplay', paintToCanvas);


canvas.addEventListener('mousedown', (e) => {
    //Get cursor position on canvas
    getCursorPosition(canvas, e)
});


let getCursorPosition = (canvas, e) => {
    //Get the size of rect
    const rect = canvas.getBoundingClientRect()
    //Get position compared to canvas
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top




    const width = video.videoWidth;
    const height = video.videoHeight;

    let pixels = ctx.getImageData(0, 0, width, height);

    console.log(x, y);

    //console.log(pixelLocation);

    let pixelRed = pixels.data[((width * y) + x) * 4];
    let pixelGreen = pixels.data[((width * y) + x) * 4 + 1];
    let pixelBlue = pixels.data[((width * y) + x) * 4 + 2];
    let pixelAlpha = pixels.data[((width * y) + x) * 4 + 3];

    let rgbValue = pixelRed + "," + pixelGreen + "," + pixelBlue;

    let numbers = [pixelRed, pixelGreen, pixelBlue];
    numbers.sort((a, b) => a < b ? 1 : -1);

    if (numbers[0] == pixelRed) {

        document.getElementById("rmin").value = pixelRed - 90;
        document.getElementById("rmax").value = pixelRed + 90;

        document.getElementById("gmin").value = pixelGreen - 20;
        document.getElementById("gmax").value = pixelGreen + 20;

        document.getElementById("bmin").value = pixelBlue - 20;
        document.getElementById("bmax").value = pixelBlue + 20;

    }
    if (numbers[0] == pixelGreen) {

    } document.getElementById("rmin").value = pixelRed - 20;
    document.getElementById("rmax").value = pixelRed + 20;

    document.getElementById("gmin").value = pixelGreen - 90;
    document.getElementById("gmax").value = pixelGreen + 90;

    document.getElementById("bmin").value = pixelBlue - 20;
    document.getElementById("bmax").value = pixelBlue + 20;

    if (numbers[0] == pixelBlue) {

        document.getElementById("rmin").value = pixelRed - 20;
        document.getElementById("rmax").value = pixelRed + 20;

        document.getElementById("gmin").value = pixelGreen - 20;
        document.getElementById("gmax").value = pixelGreen + 20;

        document.getElementById("bmin").value = pixelBlue - 90;
        document.getElementById("bmax").value = pixelBlue + 90;
    }

    console.log(numbers);
    r.style.setProperty('--color', rgbValue);
    console.log(pixels);


    console.log(pixelRed,)

}















