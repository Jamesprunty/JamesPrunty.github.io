//The debounce function stops the function event running too many times
//Pass it a function, it will run debounce all the time. But it will only run the function once every 2o miliseconds
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {

  //console.log("this has started");

  sliderImages.forEach(sliderImage => {

    //window.scrollY gets how far down the screen has scrolled
    //To get where the bottom is, we plus the height of the window
    //slideImage / 2 gives us the pixel count half way down the image

    //Half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    console.log(slideInAt);

    //This gives us the pixel level from the top
    //The bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    //console.log(imageBottom);

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPassed = window.scrollY < imageBottom;

    //If it is half way through but not scrolled passed it will slide in. 
    //If you have scrolled passed it will slide back. 
    if(isHalfShown && isNotScrolledPassed){

      sliderImage.classList.add('active');

    }else{

      //If we have scrolled past the image or not got to it yet, move it back
      sliderImage.classList.remove('active');

    }
  })
}

//This checks for scrolling
//The debounce will stop it from running too much and lagging the system.
window.addEventListener('scroll', debounce(checkSlide));