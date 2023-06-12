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
        description: "A test marcov model that takes reference information to create sentances based on that data.",
        folderName: "Marcov",
        dir: "../Projects/"
        
    },
    {
        name: "Stardle",
        description: "(Not Done) A wordle style game where you have to guess the movie title."
    },
    {
        name: "ChatGPT assistant",
        description: "(Not Done) Integrate voice to text to ask a question, then implement text to speech to read the response"
     
    },
    {
        name: "DataStructures",
        description: "Working with different types of data structure, visual representations",
        folderName: "Datastructure",
        dir: "../Projects/"
     
    }, 
    {
        name: "Minesweeper",
        description: "MineSweeper game",
        folderName: "Minesweeper",
        dir: "../Projects/"
     
    },  
    {
        name: "Conway's game of life",
        description: "(Not Done) Conway's game of life",
        folderName: "Conway's game of life",
        dir: "../Projects/"
     
    },  
    {
        name: "The three letter game",
        description: "A simple word game",
        folderName: "ThreeLetterGame",
        dir: "../Projects/"
     
    },  



]


const Courses = [
    {
        name: "DrumKit",
        description: "Interactive DurmKit - Press the buttons to play.",
        folderName: "Lesson-01",
        dir: "../JS30/"
    },
    {
        name: "Piano",
        description: "Interactive piano - Press keys to play, or type a message and hear it played back.",
        folderName: "Lesson-01-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Clock",
        description: "Clock that shows the time.",
        folderName: "Lesson-02",
        dir: "../JS30/"
    },
    {
        name: "Clock V2",
        description: "Slightly edited verison of the clock, including alarm and time zones.",
        folderName: "Lesson-02-Advanced",
        dir: "../JS30/"
    },
    {
        name: "CSS Variables",
        description: "Using CSS variables to edit an image.",
        folderName: "Lesson-03",
        dir: "../JS30/"
    },
    {
        name: "CSS Variables - Selection",
        description: "Select which image to edit and modify CSS variables.",
        folderName: "Lesson-03-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Array Cardio",
        description: "Working with different Arrays.",
        folderName: "Lesson-04",
        dir: "../JS30/"
    },
    {
        name: "Poeple Sorter V1",
        description: "Version 1 of people sorter - Add person from wikipedia and sort by different catagories.",
        folderName: "Lesson-04-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Flex Panels",
        description: "An example of flex panels.",
        folderName: "Lesson-05",
        dir: "../JS30/"
    },
    {
        name: "Flex Panels V2",
        description: "Slight modifications on the flex panels.",
        folderName: "Lesson-05-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Type ahead",
        description: "Type to search - Displays cities in America.",
        folderName: "Lesson-06",
        dir: "../JS30/"
    },
    {
        name: "People Soter V2",
        description: "Search for peloaded famous names to search for.",
        folderName: "Lesson-06-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Array Cardio V2",
        description: "Working with Arrays Pt2.",
        folderName: "Lesson-07",
        dir: "../JS30/"
    },
    {
        name: "People Sorter V3",
        description: "Select user in table to select.",
        folderName: "Lesson-07-Advanced",
        dir: "../JS30/"
    },
    {
        name: "HTML Canvas",
        description: "Simple drawing canvas.",
        folderName: "Lesson-08",
        dir: "../JS30/"
    },
    {
        name: "HTML Canvas V2",
        description: "Added change pen and color, add the ability to save and download.",
        folderName: "Lesson-08-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Dev Tools",
        description: "Usefull tools for working with code",
        folderName: "Lesson-09",
        dir: "../JS30/"
    },
    {
        name: "Dev Tools in practice",
        description: "Examples of Dev tools in practice.",
        folderName: "Lesson-09-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Hold Shift click (My code)",
        description: "Shift click example - My version.",
        folderName: "Lesson-10",
        dir: "../JS30/"
    },
    {
        name: "Hold Shift click (MosBos)",
        description: "Shift click example - Mosbos version.",
        folderName: "Lesson-10-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Video Player",
        description: "Simple video controls.",
        folderName: "Lesson-11",
        dir: "../JS30/"
    },
    {
        name: "Video Player V2",
        description: "Video Player with added full screen button.",
        folderName: "Lesson-11-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Key Sequence Detection",
        description: "detects keys logged.",
        folderName: "Lesson-12",
        dir: "../JS30/"
    },
    {
        name: "Key Sequence Detection V2",
        description: "Puzzle including Key Sequence.",
        folderName: "Lesson-12-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Slide & Scroll",
        description: "Images slide in as you scroll down.",
        folderName: "Lesson-13",
        dir: "../JS30/"
    },
    {
        name: "Slide & Scroll V2",
        description: "(Not Done)Items scroll in when scrolling to the right",
        folderName: "Lesson-13-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Copying & Reference",
        description: "Understanding Copying and reference.",
        folderName: "Lesson-14",
        dir: "../JS30/"
    },
    {
        name: "Copying and Reference V2",
        description: "(Not Done) Visual example of copying and referencing",
        folderName: "Lesson-14-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Local Storage",
        description: "Retrieve information from local storage.",
        folderName: "Lesson-15",
        dir: "../JS30/"
    },
    {
        name: "Advanced local storage",
        description: "Added check all, clear, uncheck all and save to local storage",
        folderName: "Lesson-15-Advanced",
        dir: "../JS30/"
    },
    {
        name: "CSS Text Shadow Mouse Move Effect",
        description: "Shadow moves with the mouse position on the page",
        folderName: "Lesson-16",
        dir: "../JS30/"
    },
    {
        name: "Box CSS shadow mouse move",
        description: "Added the effect to a box instead of text and added inset shadow",
        folderName: "Lesson-16-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Sorting band names without articles (Me)",
        description: "Sort the band names without the articles (e.g.'The' or 'An') *My Code",
        folderName: "Lesson-17",
        dir: "../JS30/"
    },
    {
        name: "Sorting band names without articles (MosBos)",
        description: "Sort the band names without the articles (e.g.'The' or 'An') *MosBos Code*",
        folderName: "Lesson-17-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Tally string times with Reduce",
        description: "Add up all the times for videos and turn them into hours/mins/seconds",
        folderName: "Lesson-18",
        dir: "../JS30/"
    },
    {
        name: "Photobooth",
        description: "Working with Webcam and manipulating the image",
        folderName: "Lesson-19",
        dir: "../JS30/"
    },
    {
        name: "photoBooth V2",
        description: "Create a colour picker to get the greenscreen colour, also selectable filters *FIX GREENSCREEN SELECTION*",
        folderName: "Lesson-19-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Speech Detection",
        description: "Type out whatever is said",
        folderName: "Lesson-20",
        dir: "../JS30/"
    },
    {
        name: "People Sorter V4",
        description: "(Not Done) Integrate Voice commands into people sorter",
        folderName: "Lesson-20-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Geolocation based speedometer and compass",
        description: "Compass and speedometer",
        folderName: "Lesson-21",
        dir: "../JS30/"
    },
    {
        name: "Google Maps clone",
        description: "(Not Done) create a google maps clone",
        folderName: "Lesson-21-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Highlighter Follow",
        description: "Highlight follows around the page when hovering",
        folderName: "Lesson-22",
        dir: "../JS30/"
    },
    {
        name: "Highlighter Follow Advanced",
        description: "(Not Done) ",
        folderName: "Lesson-22-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Text to speech",
        description: "Type message to speech, also change voice properties",
        folderName: "Lesson-23",
        dir: "../JS30/"
    },
    {
        name: "Text to speech Advanced",
        description: "(Not Done) Chat GPT intergration, add voice to text and read output",
        folderName: "Lesson-23-Advanced",
        dir: "../JS30/"
    },
    {
        name: "sticky Nav bar",
        description: "When you scroll passed the header the nav bar stays at the top",
        folderName: "Lesson-24",
        dir: "../JS30/"
    },
    {
        name: "Sticky Nav bar v2",
        description: "(Not Done) Add a sticky footer as well",
        folderName: "Lesson-24-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Event Listener propagation",
        description: "Event Listener Propagation, capture & bubbling",
        folderName: "Lesson-25",
        dir: "../JS30/"
    },
    {
        name: "Follow along Dropdown",
        description: "Dropdown menu that follows and changes size",
        folderName: "Lesson-26",
        dir: "../JS30/"
    },
    {
        name: "Follow along Dropdown V2",
        description: "(Not Done) Add some animation to the dropdown",
        folderName: "Lesson-26-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Drag and scroll",
        description: "Drag and scroll along",
        folderName: "Lesson-27",
        dir: "../JS30/"
    },
    {
        name: "Drag and Drop",
        description: "(Not Done) Create drag and drop function",
        folderName: "Lesson-27-Advanced"
    },
    {
        name: "Video speed controls",
        description: "Change video speed with bar",
        folderName: "Lesson-28",
        dir: "../JS30/"
    },
    {
        name: "Video speed controls V2",
        description: "(Not Done) Only change speed when mousedown and have set speed buttons",
        folderName: "Lesson-28-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Countdown Timer",
        description: "Set time to countdown, and show end time",
        folderName: "Lesson-29",
        dir: "../JS30/"
    },
    {
        name: "Countdown Timer V2",
        description: "(Not Done) Add stopwatch with lap timer",
        folderName: "Lesson-29-Advanced",
        dir: "../JS30/"
    },
    {
        name: "Wackamole",
        description: "Wackamole game",
        folderName: "Lesson-30",
        dir: "../JS30/"
    },
    {
        name: "Wackamole V2",
        description: "Added a timer, show final score and save high score to localstorage",
        folderName: "Lesson-30-Advanced",
        dir: "../JS30/"
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

        if (growfull == false) {



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

        } else if (growfull == true) {

            growfullObj = document.querySelector(".growFull");

            if (growfullObj.classList.contains("growFull")) {
                growfullObj.classList.remove("growFull");
            };

            if (growfullObj.classList.contains("z-index1")) {
                growfullObj.classList.remove("z-index1");
            };



            growfullObj.innerHTML = `<p class="tileText">` + (currentNumber + 1) + `</p>`;

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


            gridContainer.classList.remove("zeroScale")
            parent.classList.remove("zeroScale");
            gridPage.classList.remove("zeroScale");

            titleInfo.innerHTML = titleText;
            descriptionInfo.innerHTML = descriptionText;

            gridTiles.forEach(element => {
                element.classList.remove("zeroScale");
                element.innerHTML = `<iframe class="zeroScale hidden" id="` + number + `"> </iframe> <p class="tileText">` + number + `</p>`;
                number++;
                

                if (count <= currentContent.length - 1) {

                    

                    if (currentContent[count].description.includes("Not Done")) {
                        element.classList.add("borderRed");
                    } else {
                        element.classList.add("border");
                    }

                   
                } else {
                    element.classList.add("zeroScale");
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

        if (growfull == true) {
            growfull = false;
        } else if (growfull == false) {
            growfull = true;
            console.log("GROWFULL");

            object.classList.add("growFull");

            currentNumber = object.getElementsByTagName('p')[0].innerHTML;

            console.log(currentNumber);
            Number(currentNumber);

            currentNumber -= 1;

            let folder = currentContent[currentNumber].folderName;
            let dir = currentContent[currentNumber].dir;

            let directory = dir + folder + "/" + folder + ".html";

            console.log(directory);

            console.log(object.iframe);


            //object.innerHTML = `<div id="innerPage"><object type="text/html" data=` + directory + `></object> <div id="inputContainer"></div></div>`
            object.innerHTML = `<iframe class="iframe" src="` + directory + `"> </iframe>`

        }


    }




}
