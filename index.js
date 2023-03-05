let menuItems = document.querySelectorAll(".menuItem");
let menuHover = document.querySelectorAll(".menuHover");
let circles = document.querySelectorAll("circle");
let r = document.querySelector(':root');

console.log(circles);

changeSpeed(1);




menuHover.forEach(element => {
    element.addEventListener('mouseover', function(){ menuController("on")});
});
menuHover.forEach(element => {
    element.addEventListener('mouseout', function(){ menuController("off")});
});

menuItems.forEach(element => {
    element.addEventListener('click', menuController);
});




function menuController(state){

console.log("TEST");

if(state == "on"){
    changeSpeed(5);
}else if(state === "off"){
    changeSpeed(1);
}



    
}

function changeSpeed(duration){

    let speed1 = duration * 1 + "s";
    let speed2 = duration * 1.5 + "s";
    let speed3 = duration * 2 + "s";
    let speed4 = duration * 2.5 + "s";
    let speed5 = duration * 5 + "s";
    
    r.style.setProperty('--speed1', speed1);
    r.style.setProperty('--speed2', speed2);
    r.style.setProperty('--speed3', speed3);
    r.style.setProperty('--speed4', speed4);
    r.style.setProperty('--speed5', speed5);


}
