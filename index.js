let menuItems = document.querySelectorAll(".menuItem");
let menuHover = document.querySelectorAll(".menuHover");
let circles = document.querySelectorAll("circle");
let bigCircle = document.querySelector(".bigCircle");
let circleContainer = document.querySelector("#circles")
let r = document.querySelector(':root');
let SVGContainer = document.querySelector("#SVGContainer");
r.style.setProperty('--running', "paused");
let menuCircle = document.querySelector(".menuCircle")
let menuCircle2 = document.querySelector(".menuCircle2")
let topMenuBG = document.querySelector(".topMenuBG");
let midMenuBG = document.querySelector(".midMenuBG");
let bottomMenuBG = document.querySelector(".bottomMenuBG");
let menuCircleTop = document.querySelector(".menuCircleTop")
let menuCircleBottom = document.querySelector(".menuCircleBottom")
let topText = document.querySelector("#topText");
let bottomText = document.querySelector("#bottomText");
let menuOpen = document.querySelector("#menuOpen")
let expanded = 0;
let BGs = document.querySelectorAll(".BG");
let svg = document.querySelector(".svg");

console.log(circles);

changeSpeed(1);




menuHover.forEach(element => {
    element.addEventListener('mouseover', function () { menuController("on") });
});
menuHover.forEach(element => {
    element.addEventListener('mouseout', function () { menuController("off") });
});

menuHover.forEach(element => {
    element.addEventListener('click', function () { menuController("click") });
});


menuCircleTop.addEventListener('mouseover', function () { menuController("topOn") });
topText.addEventListener('mouseover', function () { menuController("topOn") });
menuCircleBottom.addEventListener('mouseover', function () { menuController("bottomOn") });
bottomText.addEventListener('mouseover', function () { menuController("bottomOn") });
topText.addEventListener('mouseout', function () { menuController("topOff") });
menuCircleTop.addEventListener('mouseout', function () { menuController("topOff") });
bottomText.addEventListener('mouseout', function () { menuController("bottomOff") });
menuCircleBottom.addEventListener('mouseout', function () { menuController("bottomOff") });



topText.addEventListener('click', function () { menuController("topMenu") });
bottomText.addEventListener('click', function () { menuController("bottomMenu") });
menuCircleTop.addEventListener('click', function () { menuController("topMenu") });
menuCircleBottom.addEventListener('click', function () { menuController("bottomMenu") });



function menuController(state) {


    if (state == "on" && expanded == 0) {
        r.style.setProperty('--running', "running");
        menuCircle.classList.add("scaleUp");
        topMenuBG.classList.add("BGup");
        bottomMenuBG.classList.add("BGdown");
        if (menuCircle.classList.contains("scaleDown")) {
            menuCircle.classList.remove("scaleDown");
        }
        if (topMenuBG.classList.contains("BGupR")) {
            topMenuBG.classList.remove("BGupR");
        }
        if (bottomMenuBG.classList.contains("BGdownR")) {
            bottomMenuBG.classList.remove("BGdownR");
        }
        if (menuCircle.classList.contains("scaleDownFull")) {
            menuCircle.classList.remove("scaleDownFull");
        }
        if (menuCircle.classList.contains("scaleUpFull")) {
            menuCircle.classList.remove("scaleUpFull");
        }


    } else if (state === "off" && expanded == 0) {
        r.style.setProperty('--running', "paused");

        menuCircle.classList.add("scaleDown");
        topMenuBG.classList.add("BGupR");
        bottomMenuBG.classList.add("BGdownR");
        if (menuCircle.classList.contains("scaleUp")) {
            menuCircle.classList.remove("scaleUp");
        }
        if (topMenuBG.classList.contains("BGup")) {
            topMenuBG.classList.remove("BGup");
        }
        if (bottomMenuBG.classList.contains("BGdown")) {
            bottomMenuBG.classList.remove("BGdown");
        }
        if (menuCircle.classList.contains("scaleDownFull")) {
            menuCircle.classList.remove("scaleDownFull");
        }
        if (menuCircle.classList.contains("scaleUpFull")) {
            menuCircle.classList.remove("scaleUpFull");
        }
    } else if (state === "click" && expanded == 0) {

        console.log("Has been clicked");

        setTimeout(() => {

            menuOpen.classList.add("show");
            if (menuOpen.classList.contains("hidden")) {
                menuOpen.classList.remove("hidden");
            }
            
        }, 100);
       
        menuCircle.classList.add("scaleUpFull")
        topMenuBG.classList.add("BGtopMenu");
        midMenuBG.classList.add("BGmidMenu");
        bottomMenuBG.classList.add("BGbottomMenu");
        


        if (menuCircle.classList.contains("scaleUp")) {
            menuCircle.classList.remove("scaleUp");
        }
        if (menuCircle.classList.contains("scaleDown")) {
            menuCircle.classList.remove("scaleDown");
        }
        if (menuCircle.classList.contains("scaleDownFull")) {
            menuCircle.classList.remove("scaleDownFull");
        }

        if (topMenuBG.classList.contains("BGup")) {
            topMenuBG.classList.remove("BGup");
        }
        if (bottomMenuBG.classList.contains("BGdown")) {
            bottomMenuBG.classList.remove("BGdown");
        }

        if (topMenuBG.classList.contains("BGupR")) {
            topMenuBG.classList.remove("BGupR");
        }
        if (bottomMenuBG.classList.contains("BGdownR")) {
            bottomMenuBG.classList.remove("BGdownR");
        }



        expanded = 1;

    } else if (state === "click" && expanded == 1) {

        menuCircle.classList.add("scaleDownFull")
        topMenuBG.classList.add("BGupR");
        midMenuBG.classList.add("BGmidR");
        bottomMenuBG.classList.add("BGdownR");
        menuOpen.classList.add("hidden");

        if (menuCircle.classList.contains("scaleUp")) {
            menuCircle.classList.remove("scaleUp");
        }
        if (menuCircle.classList.contains("scaleUpFull")) {
            menuCircle.classList.remove("scaleUpFull");
        }
        if (menuCircle.classList.contains("scaleDown")) {
            menuCircle.classList.remove("scaleDown");
        }
        if (topMenuBG.classList.contains("BGtopMenu")) {
            topMenuBG.classList.remove("BGtopMenu");
        }
        if (midMenuBG.classList.contains("BGmidMenu")) {
            midMenuBG.classList.remove("BGmidMenu");
        }
        if (bottomMenuBG.classList.contains("BGbottomMenu")) {
            bottomMenuBG.classList.remove("BGbottomMenu");
        }
        if (menuOpen.classList.contains("show")) {
            menuOpen.classList.remove("show");
        }

        expanded = 0;
    }

    if (state === "topMenu" && expanded == 1) {
        console.log("Top Click")
        changeMenu("projects");

    }
    if (state === "bottomMenu" && expanded == 1) {
        console.log("Bottom Click")
        changeMenu("courses");

    }

    if (state === "topOn" && expanded == 1) {
        console.log("HoverTop");
        topMenuBG.classList.add("scaleUpTop");
        topText.classList.add("hText");
        menuCircleTop.classList.add("hCircle");

        if (topMenuBG.classList.contains("scaleDownTop")) {
            topMenuBG.classList.remove("scaleDownTop");
        }

    }

    if (state === "bottomOn" && expanded == 1) {
        console.log("HoverBottom");
        menuCircleBottom.classList.add("scaleUp");
        bottomMenuBG.classList.add("scaleUpBottom");
        bottomText.classList.add("hText");
        menuCircleBottom.classList.add("hCircle");

        if (bottomMenuBG.classList.contains("scaleDownBottom")) {
            bottomMenuBG.classList.remove("scaleDownBottom");
        }

    }
    if (state === "topOff" && expanded == 1) {
        console.log("OffTop");
        menuCircleTop.classList.add("scaleDown")
        topMenuBG.classList.add("scaleDownTop")
        topText.classList.remove("hText");
        menuCircleTop.classList.remove("hCircle");

        if (topMenuBG.classList.contains("scaleUpTop")) {
            topMenuBG.classList.remove("scaleUpTop");
        }
        if (topMenuBG.classList.contains("hText")) {
            topMenuBG.classList.remove("hText");
        }
    }
    if (state === "bottomOff" && expanded == 1) {
        console.log("OffBottom");
        menuCircleBottom.classList.add("scaleDown")
        bottomMenuBG.classList.add("scaleDownBottom")
        bottomText.classList.remove("hText");
        menuCircleBottom.classList.remove("hCircle");

        if (bottomMenuBG.classList.contains("scaleUpBottom")) {
            bottomMenuBG.classList.remove("scaleUpBottom");
        }
        if (bottomMenuBG.classList.contains("hText")) {
            bottomMenuBG.classList.remove("hText");
        }
    }

}

function changeSpeed(duration) {

    let speed0 = duration / 9 + "s";
    let speed1 = duration * 1 + "s";
    let speed2 = duration * 1.5 + "s";
    let speed3 = duration * 2 + "s";
    let speed4 = duration * 2.5 + "s";
    let speed5 = duration * 2.6 + "s";

    r.style.setProperty('--speed0', speed0);
    r.style.setProperty('--speed1', speed1);
    r.style.setProperty('--speed2', speed2);
    r.style.setProperty('--speed3', speed3);
    r.style.setProperty('--speed4', speed4);
    r.style.setProperty('--speed5', speed5);


}

function changeMenu(menuType) {

    

}
