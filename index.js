let menuItems = document.querySelectorAll(".menuItem");
let menuHover = document.querySelectorAll(".menuHover");
let circles = document.querySelectorAll("circle");
let r = document.querySelector(':root');
let SVGContainer = document.querySelector("#SVGContainer");
r.style.setProperty('--running', "paused");
let menuCircle = document.querySelector(".menuCircle")
let topMenuBG = document.querySelector(".topMenuBG");
let bottomMenuBG = document.querySelector(".bottomMenuBG");

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
    r.style.setProperty('--running', "running");
    menuCircle.classList.add("scaleUp");
    topMenuBG.classList.add("BGup");
    bottomMenuBG.classList.add("BGdown");
    if(menuCircle.classList.contains("scaleDown")){
        menuCircle.classList.remove("scaleDown"); 
    }
    if(topMenuBG.classList.contains("BGupR")){
        topMenuBG.classList.remove("BGupR"); 
    }
    if(bottomMenuBG.classList.contains("BGdownR")){
        bottomMenuBG.classList.remove("BGdownR"); 
    }
    /*
    menuHover.forEach(element => {
        element.classList.add("scaleUp");

        if(element.classList.contains("scaleDown")){
            element.classList.remove("scaleDown"); 
        }
        
    });
*/

}else if(state === "off"){
    r.style.setProperty('--running', "paused");

    menuCircle.classList.add("scaleDown");
    topMenuBG.classList.add("BGupR");
    bottomMenuBG.classList.add("BGdownR");
    if(menuCircle.classList.contains("scaleUp")){
        menuCircle.classList.remove("scaleUp"); 
    }
    if(topMenuBG.classList.contains("BGup")){
        topMenuBG.classList.remove("BGup"); 
    }
    if(bottomMenuBG.classList.contains("BGdown")){
        bottomMenuBG.classList.remove("BGdown"); 
    }
    

    /*
    menuHover.forEach(element => {
        element.classList.add("scaleDown");
        if(element.classList.contains("scaleUp")){
            element.classList.remove("scaleUp"); 
        }
    });
    */

}



    
}

function changeSpeed(duration){

    let speed1 = duration * 1 + "s";
    let speed2 = duration * 1.5 + "s";
    let speed3 = duration * 2 + "s";
    let speed4 = duration * 2.5 + "s";
    let speed5 = duration * 2.6 + "s";
    
    r.style.setProperty('--speed1', speed1);
    r.style.setProperty('--speed2', speed2);
    r.style.setProperty('--speed3', speed3);
    r.style.setProperty('--speed4', speed4);
    r.style.setProperty('--speed5', speed5);


}
