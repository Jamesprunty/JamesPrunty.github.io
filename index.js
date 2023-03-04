let menuItems = document.querySelectorAll(".menuItem");



menuItems.forEach(element => {
    element.addEventListener('click', menuController);
});




function menuController(){

console.log(this);

    
}
