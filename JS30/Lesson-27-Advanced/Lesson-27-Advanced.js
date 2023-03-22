//Gets the slider
const slider = document.querySelector('.items');
//Is the mouse down?
let isDown = false;
//This is the original click point. We need to know this until we unclick as this will be our point of reference
let startX;
//This is how much we have already scrolled to match where we click
let scrollLeft; 
//We will pass the event on this mouseDown
slider.addEventListener('mousedown', (e) => {

    isDown = true;
    slider.classList.add('active');
    //e.pageX gets us the evens position on the page
    //We offset by the slider div amount to get the coords on the slider, this is incase there are margins that might move it
    startX = e.pageX - slider.offsetLeft;
    //Keep the scroll upto date
    scrollLeft = slider.scrollLeft;

});

slider.addEventListener('mouseleave', () => {

    isDown = false;
    slider.classList.remove('active');

});

slider.addEventListener('mouseup', () => {

    isDown = false
    slider.classList.remove('active');

});

slider.addEventListener('mousemove', (e) => {

    //Only do this if mousedown
    if(!isDown) return;

    //This will stop the selecting of text or some other anomolies you dont want
    e.preventDefault();
    //This wil keep updating where the mouse is
    const x = e.pageX - slider.offsetLeft;
    //console.log(x, startX);
    //We can multiply this to speed up the scroll
    const walk = (x - startX) * 2;
    //console.log(walk);

    //By adding "scrollLeft we dont need to calculate the scrollLeft every time"
    slider.scrollLeft = scrollLeft - walk;
   

});
