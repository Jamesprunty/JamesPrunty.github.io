let menuItems = document.querySelectorAll(".menuItem");
let menuHover = document.querySelectorAll(".menuHover");
let circles = document.querySelectorAll("circle");
let r = document.querySelector(':root');
let SVGContainer = document.querySelector("#SVGContainer");
r.style.setProperty('--running', "paused");
let menuCircle = document.querySelector(".menuCircle")
let topMenuBG = document.querySelector(".topMenuBG");
let midMenuBG = document.querySelector(".midMenuBG");
let bottomMenuBG = document.querySelector(".bottomMenuBG");
let expanded = 0;

console.log(circles);

changeSpeed(1);




menuHover.forEach(element => {
    element.addEventListener('mouseover', function(){ menuController("on")});
});
menuHover.forEach(element => {
    element.addEventListener('mouseout', function(){ menuController("off")});
});
menuHover.forEach(element => {

});

menuHover.forEach(element => {
    element.addEventListener('click', function(){ menuController("click")});
});




function menuController(state){

console.log("TEST");

if(state == "on" && expanded == 0){
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
    if(menuCircle.classList.contains("scaleDownFull")){
        menuCircle.classList.remove("scaleDownFull"); 
    }
    if(menuCircle.classList.contains("scaleUpFull")){
        menuCircle.classList.remove("scaleUpFull"); 
    }


}else if(state === "off" && expanded == 0){
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
    if(menuCircle.classList.contains("scaleDownFull")){
        menuCircle.classList.remove("scaleDownFull"); 
    }
    if(menuCircle.classList.contains("scaleUpFull")){
        menuCircle.classList.remove("scaleUpFull"); 
    }
}else if(state === "click" && expanded == 0){

    console.log("Has been clicked");

    

    menuCircle.classList.add("scaleUpFull")

    if(menuCircle.classList.contains("scaleUp")){
        menuCircle.classList.remove("scaleUp"); 
    }
    if(menuCircle.classList.contains("scaleDown")){
        menuCircle.classList.remove("scaleDown"); 
    }
    if(menuCircle.classList.contains("scaleDownFull")){
        menuCircle.classList.remove("scaleDownFull"); 
    }

    expanded = 1;

}else if(state === "click" && expanded == 1){

    menuCircle.classList.add("scaleDownFull")
    if(menuCircle.classList.contains("scaleUp")){
        menuCircle.classList.remove("scaleUp"); 
    }
    if(menuCircle.classList.contains("scaleUpFull")){
        menuCircle.classList.remove("scaleUpFull"); 
    }
    if(menuCircle.classList.contains("scaleDown")){
        menuCircle.classList.remove("scaleDown"); 
    }


    expanded = 0;



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
