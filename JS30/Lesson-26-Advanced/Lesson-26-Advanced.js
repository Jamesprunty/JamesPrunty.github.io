const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){

    //Add the class to the li we are hovering on
    this.classList.add('trigger-enter');
    //After 150ms we will add this second class
    //We cannot go from opacity 0 and display none to opacity 1 and inline block with transition effects
    //So what we have to do is first change the display to block, then after 150ms change the opacity which will transition
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    //This will show the background when hovered over
    background.classList.add('open');

    //This will select the one dropdown that is under the thing that is beign hovered on
    const dropdown = this.querySelector('.dropdown');
    //Ge the coords for the dropdown
    const dropdownCoords = dropdown.getBoundingClientRect();
    //These coord are absolute on the page so we have to get the Nav coors as well to be able to set the dropdown to be under it
    const navCoords = nav.getBoundingClientRect();

    //Store all the coords
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,

    };

    //Set the width and height of the background to the li. Transition effects are set in CSS
    background.style.setProperty('width', `${coords.width}px`)
    background.style.setProperty('height', `${coords.height}px`)
    //Set the background position
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

}

function handleLeave(){

    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}


triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));


