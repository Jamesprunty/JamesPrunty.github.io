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
let returnbtn = document.querySelector("#returnbtn");
let growfull = false;
let growfullObj = document.querySelector(".growFull");

const Projects = [

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
        name: "DrumKit",
        description: "Interactive DurmKit - Press the buttons to play.",
        folderName: "Lesson-01"
    },
    {
        name: "Piano",
        description: "Interactive piano - Press keys to play, or type a message and hear it played back.",
        folderName: "Lesson-01-Advanced"
    },
    {
        name: "Clock",
        description: "Clock that shows the time.",
        folderName: "Lesson-02"
    },
    {
        name: "Clock V2",
        description: "Slightly edited verison of the clock, including alarm and time zones.",
        folderName: "Lesson-02-Advanced"
    },
    {
        name: "CSS Variables",
        description: "Using CSS variables to edit an image.",
        folderName: "Lesson-03"
    },
    {
        name: "CSS Variables - Selection",
        description: "Select which image to edit and modify CSS variables.",
        folderName: "Lesson-03-Advanced"
    },
    {
        name: "Array Cardio",
        description: "Working with different Arrays.",
        folderName: "Lesson-04"
    },
    {
        name: "Poeple Sorter V1",
        description: "Version 1 of people sorter - Add person from wikipedia and sort by different catagories.",
        folderName: "Lesson-04-Advanced"
    },
    {
        name: "Flex Panels",
        description: "An example of flex panels.",
        folderName: "Lesson-05"
    },
    {
        name: "Flex Panels V2",
        description: "Slight modifications on the flex panels.",
        folderName: "Lesson-05-Advanced"
    },
    {
        name: "Type ahead",
        description: "Type to search - Displays cities in America.",
        folderName: "Lesson-06"
    },
    {
        name: "People Soter V2",
        description: "Search for peloaded famous names to search for.",
        folderName: "Lesson-06-Advanced"
    },
    {
        name: "Array Cardio V2",
        description: "Working with Arrays Pt2.",
        folderName: "Lesson-07"
    },
    {
        name: "People Sorter V3",
        description: "Select user in table to select.",
        folderName: "Lesson-07-Advanced"
    },
    {
        name: "HTML Canvas",
        description: "Simple drawing canvas.",
        folderName: "Lesson-08"
    },
    {
        name: "HTML Canvas V2",
        description: "Added change pen and color, add the ability to save and download.",
        folderName: "Lesson-08-Advanced"
    },
    {
        name: "Dev Tools",
        description: "Usefull tools for working with code",
        folderName: "Lesson-09"
    },
    {
        name: "Dev Tools in practice",
        description: "Examples of Dev tools in practice.",
        folderName: "Lesson-09-Advanced"
    },
    {
        name: "Hold Shift click (My code)",
        description: "Shift click example - My version.",
        folderName: "Lesson-10"
    },
    {
        name: "Hold Shift click (MosBos)",
        description: "Shift click example - Mosbos version.",
        folderName: "Lesson-10-Advanced"
    },
    {
        name: "Video Player",
        description: "Simple video controls.",
        folderName: "Lesson-11"
    },
    {
        name: "Video Player V2",
        description: "Video Player with added full screen button.",
        folderName: "Lesson-11-Advanced"
    },
    {
        name: "Key Sequence Detection",
        description: "detects keys logged.",
        folderName: "Lesson-12"
    },
    {
        name: "Key Sequence Detection V2",
        description: "Puzzle including Key Sequence.",
        folderName: "Lesson-12-Advanced"
    },
    {
        name: "Slide & Scroll",
        description: "Images slide in as you scroll down.",
        folderName: "Lesson-13"
    },
    {
        name: "Slide & Scroll V2",
        description: "*Still needs doing*",
        folderName: "Lesson-13-Advanced"
    },
    {
        name: "Copying & Reference",
        description: "Understanding Copying and reference.",
        folderName: "Lesson-14"
    },
    {
        name: "Copying and Reference V2",
        description: "Visual example of copying and reference.",
        folderName: "Lesson-14-Advanced"
    },
    {
        name: "Local Storage",
        description: "Retrieve information from local storage.",
        folderName: "Lesson-15"
    },
    {
        name: "People Sorter V4",
        description: "Added saved seaches to local storage.",
        folderName: "Lesson-15-Advanced"
    },
];


let currentContent = [];
let currentNumber;


changeSpeed(1);


gridTiles.forEach(element => {
    element.classList.add("tileAnimation");
    element.classList.add("tileBackground");
    element.addEventListener("mouseover", function () { menuManager("grow", this) });
    element.addEventListener("mouseout", function () { menuManager("shrink", this) });
    element.addEventListener("click", function () { menuManager("click", this) });
});

returnbtn.addEventListener('click', function () { changeMenu("returnbtn") });



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

    if (menuType === "returnbtn") {

        if(growfull == false){
            
        

        gridContainer.classList.add("zeroScale")
        parent.classList.add("zeroScale");
        gridPage.classList.add("zeroScale");

        setTimeout(() => {
            BGs.forEach(element => {
                element.classList.remove("hidden");
            });

            circles.forEach(element => {
                element.classList.remove("hidden");
            });

            SVGContainer.classList.remove("hidden");

            number = 1;
            count = 0;

            gridTiles.forEach(element => {

                if (element.classList.contains("border")) { element.classList.remove("border") };

                if (element.classList.contains("borderRed")) { element.classList.remove("borderRed") };



            });



        }, 550);

    }else if(growfull == true){

        growfullObj = document.querySelector(".growFull");

        if(growfullObj.classList.contains("growFull")){
            growfullObj.classList.remove("growFull");
        };

        if(growfullObj.classList.contains("z-index1")){
            growfullObj.classList.remove("z-index1");
        };



        growfullObj.innerHTML = `<p class="tileText">` + (currentNumber+1) + `</p>`;

        growfull = false;






    }
    } else {



        menuCircle.classList.add("scaleDownFull")
        topMenuBG.classList.add("BGupR");
        midMenuBG.classList.add("BGmidR");
        bottomMenuBG.classList.add("BGdownR");
        menuOpen.classList.add("hidden");

        circleInside.forEach(element => {
            element.classList.add("hidden");
        });

        setTimeout(() => {
            ;

            BGs.forEach(element => {
                element.classList.add("hidden");
            });

            circles.forEach(element => {
                element.classList.add("hidden");
            });

            SVGContainer.classList.add("hidden");

            menuCircle.classList.add("scaleUp")

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

        if (menuType === "projects") {
            currentContent = Projects;
        } else if (menuType === "courses") {
            currentContent = Courses;
        }





        setTimeout(() => {
            ;

            gridContainer.classList.remove("zeroScale")
            parent.classList.remove("zeroScale");
            gridPage.classList.remove("zeroScale");

            titleInfo.innerHTML = titleText;
            descriptionInfo.innerHTML = descriptionText;

            gridTiles.forEach(element => {
                element.classList.remove("zeroScale");
                element.innerHTML = `<p class="tileText">` + number + `</p>`;
                number++;
                if (count <= currentContent.length - 1) {
                    element.classList.add("border");
                } else {
                    element.classList.add("borderRed");
                }
                count++;

            });


        }, 550);


    }


}

function menuManager(status, object) {

    if (growfull == false) {

        if (object.getElementsByTagName('p')[0].innerHTML <= currentContent.length) {

            currentNumber = object.getElementsByTagName('p')[0].innerHTML;
            titleInfo.innerHTML = currentContent[currentNumber - 1].name;
            descriptionInfo.innerHTML = currentContent[currentNumber - 1].description;



            if (status === "grow") {
                object.classList.add("grow");
                object.classList.add("z-index1");


                currentNumber = object.getElementsByTagName("P").innerHTML;

                if (object.classList.contains("growFull")) {
                    object.classList.remove("growFull")
                }

                if (object.classList.contains("shrink")) {
                    object.classList.remove("shrink")
                }


            } else if (status === "shrink") {
                object.classList.add("shrink");
                object.classList.remove("z-index1");


                if (object.classList.contains("growFull")) {
                    object.classList.remove("growFull")
                }

                if (object.classList.contains("grow")) {
                    object.classList.remove("grow")
                }

            }

        }
    }

    if (status === "click") {
       

        if (object.classList.contains("shrink")) {
            object.classList.remove("shrink")
        }
        if (object.classList.contains("grow")) {
            object.classList.remove("grow")
        }

        if(growfull == true){
            growfull = false;
        }else if (growfull == false){
            growfull = true;
            console.log("GROWFULL");

            object.classList.add("growFull");
    
            currentNumber = object.getElementsByTagName('p')[0].innerHTML;
    
            console.log(currentNumber);
            Number(currentNumber);

            currentNumber -= 1;
    
            let folder = currentContent[currentNumber].folderName;
    
            let directory = "../JS30/" + folder + "/" + folder + ".html";
    
            console.log(directory);
    
    
            object.innerHTML = `<div id="innerPage"><object type="text/html" data=` + directory + `></object> <div id="inputContainer"></div></div>`
    
        }

        
    }




}
