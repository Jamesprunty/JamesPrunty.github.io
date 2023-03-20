const nav = document.querySelector('#main');

//Get the top part of the nave menu so we can check when we scroll by it
const topOfNav = nav.offsetTop; 

function fixNav(){
if (window.scrollY >= topOfNav){
    //When you change an element to "fixed" in css, it no longer takes space on the page
    //because of this, the content on the page will move up to fill that space but the height og the item now fixed (the nav bar)
    //So when we fix the nav bar to the screen we need to add padding which is the same height as the nav bar
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
}else {

    //This adds to the body instead of each element and then you select what you want each individual elemt to do in css
    document.body.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
}
}

//This event listener goes off every time the page is scrolled
window.addEventListener('scroll', fixNav);