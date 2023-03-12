let menuItems = document.querySelectorAll(".menuItem");
let menuHover = document.querySelectorAll(".menuHover");
let circles = document.querySelectorAll("circle");
let circleInside = document.querySelectorAll(".circleInside");
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
let gridContainer = document.querySelector("#gridContainer");
let parent = document.querySelector("#parent");
let number = 1;
let pageContainer = document.querySelector("#pageContainer");
let titleText = "Title:"
let descriptionText = "Description:"
let titleInfo = document.getElementById("title");
let descriptionInfo = document.getElementById("description");
let gridTiles = document.getElementById("parent").querySelectorAll("div");
let count = 0;

const Projects =[

    {
        name: "Marcov Model",
        description: "A test marcov model that takes reference information to create sentances based on that data."
    },
    {
        name: "Stardle",
        description: "A wordle style game where you have to guess the movie title."
    }




]


const Courses = [
    {
        name: "Clock",
        description: "A JS clock"
    },
    {
        name: "Clock V2",
        description: "Slightly edited verison of the clock, including alarm and time zones"
    },
    {
        name: "Lesson-02"
    },
    {
        name: "Lesson-02-Advanced"
    },
    {
        name: "Lesson-03"
    },
    {
        name: "Lesson-03-Advanced"
    },
    {
        name: "Lesson-04"
    },
    {
        name: "Lesson-04-Advanced"
    },
    {
        name: "Lesson-05"
    },
    {
        name: "Lesson-05-Advanced"
    },
    {
        name: "Lesson-06"
    },
    {
        name: "Lesson-06-Advanced"
    },
    {
        name: "Lesson-07"
    },
    {
        name: "Lesson-07-Advanced"
    },
    {
        name: "Lesson-08"
    },
    {
        name: "Lesson-08-Advanced"
    },
    {
        name: "Lesson-09"
    },
    {
        name: "Lesson-09-Advanced"
    },
    {
        name: "Lesson-10"
    },
    {
        name: "Lesson-10-Advanced"
    },
    {
        name: "Lesson-11"
    },
    {
        name: "Lesson-11-Advanced"
    },
    {
        name: "Lesson-12"
    },
    {
        name: "Lesson-12-Advanced"
    },
    {
        name: "Lesson-13"
    },
    {
        name: "Lesson-13-Advanced"
    },
    {
        name: "Lesson-14"
    },
    {
        name: "Lesson-14-Advanced"
    },
    {
        name: "Lesson-15"
    },
    {
        name: "Lesson-15-Advanced"
    },
];


let currentContent = [];
let currentNumber;


changeSpeed(1);


gridTiles.forEach(element => {
    element.classList.add("tileAnimation");
    element.classList.add("tileBackground");
    element.addEventListener("mouseover", function(){menuManager("grow", this)});
    element.addEventListener("mouseout", function(){menuManager("shrink", this)});
    element.addEventListener("click", function(){menuManager("click", this)});
});



menuHover.forEach(element => {
    element.addEventListener('mouseover', function () { menuController("on") });
    element.addEventListener('mouseout', function () { menuController("off") });
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
      
        changeMenu("projects");

    }
    if (state === "bottomMenu" && expanded == 1) {
      
        changeMenu("courses");

    }

    if (state === "topOn" && expanded == 1) {
      
        topMenuBG.classList.add("scaleUpTop");
        topText.classList.add("hText");
        menuCircleTop.classList.add("hCircle");

        if (topMenuBG.classList.contains("scaleDownTop")) {
            topMenuBG.classList.remove("scaleDownTop");
        }

    }

    if (state === "bottomOn" && expanded == 1) {
      
        menuCircleBottom.classList.add("scaleUp");
        bottomMenuBG.classList.add("scaleUpBottom");
        bottomText.classList.add("hText");
        menuCircleBottom.classList.add("hCircle");

        if (bottomMenuBG.classList.contains("scaleDownBottom")) {
            bottomMenuBG.classList.remove("scaleDownBottom");
        }

    }
    if (state === "topOff" && expanded == 1) {
       
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
    let speed05 = duration / 4 + "s";
    let speed1 = duration * 1 + "s";
    let speed2 = duration * 1.5 + "s";
    let speed3 = duration * 2 + "s";
    let speed4 = duration * 2.5 + "s";
    let speed5 = duration * 2.6 + "s";

    r.style.setProperty('--speed0', speed0);
    r.style.setProperty('--speed05', speed05);
    r.style.setProperty('--speed1', speed1);
    r.style.setProperty('--speed2', speed2);
    r.style.setProperty('--speed3', speed3);
    r.style.setProperty('--speed4', speed4);
    r.style.setProperty('--speed5', speed5);


}

function changeMenu(menuType) {

    
    
    menuCircle.classList.add("scaleDownFull")
    topMenuBG.classList.add("BGupR");
    midMenuBG.classList.add("BGmidR");
    bottomMenuBG.classList.add("BGdownR");
    menuOpen.classList.add("hidden");

    circleInside.forEach(element => {
        element.classList.add("hidden");
    });

    setTimeout(() => {;

        BGs.forEach(element => {
           element.classList.add("hidden"); 
        });

        circles.forEach(element => {
            element.classList.add("hidden");
        });

        SVGContainer.classList.add("hidden");
        
    }, 130);


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

    if(menuType === "projects"){
        currentContent = Projects;
    }else if (menuType === "courses"){
        currentContent = Courses;
    }
    
   



    setTimeout(() => {;

        gridContainer.classList.remove("zeroScale")
        parent.classList.remove("zeroScale");
        gridPage.classList.remove("zeroScale");

        titleInfo.innerHTML = titleText;
        descriptionInfo.innerHTML = descriptionText;

        gridTiles.forEach(element => {
            element.classList.remove("zeroScale");
            element.innerHTML = `<p class="tileText">`+number+`</p>`;
            number++;
            if(count <= currentContent.length - 1){
                element.classList.add("border");
            }else{
                element.classList.add("borderRed");
            }
            count++;
            
        });

        
    }, 550);





}


function menuManager(status, object){

    if(object.getElementsByTagName('p')[0].innerHTML <= currentContent.length){

        currentNumber = object.getElementsByTagName('p')[0].innerHTML;
        titleInfo.innerHTML = currentContent[currentNumber -1].name;
        descriptionInfo.innerHTML = currentContent[currentNumber -1].description;
    
    
    
        if(status === "grow"){
            object.classList.add("grow");
            object.classList.add("z-index1");
    
    
                currentNumber = object.getElementsByTagName("P").innerHTML;
    
                if(object.classList.contains("shrink")){
                    object.classList.remove("shrink")
                }
    
    
        }else if(status === "shrink"){
            object.classList.add("shrink"); 
            object.classList.remove("z-index1");
    
                if(object.classList.contains("grow")){
                    object.classList.remove("grow")
                }
    
        }

    }
 

    

}
