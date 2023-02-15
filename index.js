const title = document.querySelector(".titleContainer");
const menuContainer = document.querySelector("#MenuContainer");
const SHDiv = document.querySelector("#SHDiv");
const page = document.querySelector("#page");
const items = document.querySelectorAll(".item");
const root = document.documentElement;
const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");
const item0 = document.querySelector("#item0");
let SF = 2;
let BF = 6;



root.style.setProperty('--fontSmall', SF + "vw");
root.style.setProperty('--fontBig', BF + "vw");



let click = "";
let start = 0;

let rootElement = document.querySelector(':root');
let delay = 1.2;
let duration = 2.5;
root.style.setProperty('--delay', delay + "s");
root.style.setProperty('--duration', duration + "s");
let rotations = 0;

items.forEach(item => {
    item.addEventListener('click', moveItems);
});



item1.classList.add("noShow");




const projects = [
    {

        name: "JS30 Project"
    },
    {

        name: "Marcov Model"
    },
    {

        name: "Blog"
    },
    {

        name: "New Project1"
    },
    {

        name: "New Project2"
    },
    {
        name: "New Project3"
    },
    {
        name: "New Project4"
    }


];

const Lessons = [
    {
        name: "Lesson-1"
    },
    {
        name: "Lesson-1-Advanced"
    },
    {
        name: "Lesson-2"
    },
    {
        name: "Lesson-2-Advanced"
    },
    {
        name: "Lesson-3"
    },
    {
        name: "Lesson-3-Advanced"
    },
    {
        name: "Lesson-4"
    },
    {
        name: "Lesson-4-Advanced"
    },
    {
        name: "Lesson-5"
    },
    {
        name: "Lesson-5-Advanced"
    },
    {
        name: "Lesson-6"
    },
    {
        name: "Lesson-6-Advanced"
    },
    {
        name: "Lesson-7"
    },
    {
        name: "Lesson-7-Advanced"
    },
    {
        name: "Lesson-8"
    },
    {
        name: "Lesson-8-Advanced"
    },
    {
        name: "Lesson-9"
    },
    {
        name: "Lesson-9-Advanced"
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
    {
        name: "Lesson-16"
    },
    {
        name: "Lesson-16-Advanced"
    },
    {
        name: "Lesson-17"
    },
    {
        name: "Lesson-17-Advanced"
    },





];

let menuArray = projects;

console.log(menuArray);

for (i = 0; i < items.length - 1; i++) {

    items[i + 1].innerHTML = menuArray[i].name;
    items[0].innerHTML = menuArray[menuArray.length - 1].name;

}



title.addEventListener('click', openMenu);

function moveItems() {
    delay = 0;
    duration = 2;

    root.style.setProperty('--delay', delay + "s");
    root.style.setProperty('--duration', duration + "s");



    if (rotations == 0) {




        if (this.classList.contains("startRTM")) {



            console.log("2 has been clicked");
            menuContainer.classList.add("moveTop");
            menuContainer.classList.remove("staerRTM");

            setTimeout(() => {

                duration = 0;

                menuContainer.classList.add("moveBottom");
               menuContainer.classList.remove("moveTop");
    
                menuArray = Lessons;
                

                setTimeout(() => {

                    start = menuArray.length - 2;

                    console.log(menuArray);
                    duration = 1.2;

                    menuContainer.classList.add("recenter");
        
                    menuContainer.classList.remove("moveBottom");
                    
                    
                }, 700);
    
   
    
                
            }, 400);

 

        }

        if (this.classList.contains("startMoveLeft")) {


            item1.classList.add("two");
            item1.classList.remove("start");


            setTimeout(() => {

                item1.classList.add("firstMTL");
                item2.classList.add("firstRTM");
                item3.classList.add("firstOTR");

            }, 100);

        }

        setTimeout(() => {

            resetDivs();

        }, duration * 1000);



    } else {



        if (this.id == "item1") {

            click = "left";

            console.log("1 has been clicked");


            item1.classList.add("LTM");
            item2.classList.add("MTR");
            item3.classList.add("moveRight");
            item0.classList.add("moveRight");


        }

        if (this.id == "item2") {

            console.log("2 has been clicked");
            menuContainer.classList.add("moveTop");

            setTimeout(() => {

                duration = 0;

                menuContainer.classList.add("moveBottom");
               menuContainer.classList.remove("moveTop");
    
                menuArray = Lessons;
                

                setTimeout(() => {

                    start = 0;
                    item0.innerHTML = menuArray[menuArray.length - 1].name;
                    item1.innerHTML = menuArray[0].name
                    item2.innerHTML = menuArray[1].name
                    item3.innerHTML = menuArray[2].name
                    item4.innerHTML = menuArray[3].name

                    console.log(start);
                    console.log(item1.innerHTML);
                    console.log(menuArray[0].name);
                    console.log(menuArray);

                    duration = 1.2;

                    menuContainer.classList.add("recenter");
        
                    menuContainer.classList.remove("moveBottom");
                    
                    
                }, 700);
    
   
    
                
            }, 400);

 





        }

        if (this.id == "item3") {

            console.log("3 has been clicked");
            click = "right";

            item3.classList.add("RTM");
            item2.classList.add("MTL");
            item1.classList.add("moveLeft");
            item4.classList.add("moveLeft");

        }
    }


    if (rotations > 0) {


        setTimeout(() => {

            resetDivs(click);

        }, duration * 1000);

    }

    rotations++;




}

function openMenu() {

    title.classList.add("titleAnimate");
    menuContainer.classList.remove("hidden");
    SHDiv.classList.add("subtitleAnimate");
    page.classList.add("backgroundAnimate");

    setTimeout(() => {

        item1.classList.add("startRTM");
        item1.classList.remove("noShow");
        setTimeout(() => {

            item2.classList.add("startMoveLeft");



        }, 600);


    }, duration * 300);



}

function resetDivs(click) {

    duration = 0;
    console.clear;


    if (rotations == 1) {

        item1.classList.add("side");
        item3.classList.add("side");
        item1.classList.remove("two");

        item2.classList.add("two");

        if (document.querySelector(".startRTM")) {
            document.querySelector(".startRTM").classList.remove("startRTM");
        }
        if (document.querySelector(".firstMTL")) {
            document.querySelector(".firstMTL").classList.remove("firstMTL");
        }

        let starts = document.querySelectorAll(".start");
        starts.forEach(element => {
            element.classList.remove("start");
        });

        if (document.querySelector(".startMoveLeft")) {
            document.querySelector(".startMoveLeft").classList.remove("startMoveLeft");
        }
        if (document.querySelector(".firstRTM")) {
            document.querySelector(".firstRTM").classList.remove("firstRTM");
        }
        if (document.querySelector(".firstOTR")) {
            document.querySelector(".firstOTR").classList.remove("firstOTR");
        }


        start = menuArray.length - 1;

    }

    if (rotations > 1) {

        if (click == "left") {

            start--
            if (start < 0) { start = menuArray.length - 1 }

        }
        if (click == "right") {

            start++
            if (start == menuArray.length) { start = 0 }

        }

        j = start;

        for (i = 0; i < items.length; i++) {

            if (j == menuArray.length) {
                j = 0;
            }

            items[i].innerHTML = menuArray[j].name;

            j++

        }



        if (document.querySelector(".LTM")) {
            document.querySelector(".LTM").classList.remove("LTM");
        }

        if (document.querySelector(".resetSmallRight")) {
            document.querySelector(".resetSmallRight").classList.remove("resetSmallRight");
        }
        let resetSmall = document.querySelectorAll(".resetSmall")
        resetSmall.forEach(element => {
            element.classList.remove("resetSmall");
        });
        let removeRight = document.querySelectorAll(".moveRight")
        removeRight.forEach(element => {
            element.classList.remove("moveRight");
        });
        if (document.querySelector(".MTR")) {
            document.querySelector(".MTR").classList.remove("MTR");
        }
        if (document.querySelector(".resetBig")) {
            document.querySelector(".resetBig").classList.remove("resetBig");
        }
        if (document.querySelector(".RTM")) {
            document.querySelector(".RTM").classList.remove("RTM");
        }

        if (document.querySelector(".resetSmallRight")) {
            document.querySelector(".resetSmallRight").classList.remove("resetSmallRight");
        }

        let removeLeft = document.querySelectorAll(".moveLeft")
        removeLeft.forEach(element => {
            element.classList.remove("moveLeft");
        });
        if (document.querySelector(".MTL")) {
            document.querySelector(".MTL").classList.remove("MTL");
        }
        if (document.querySelector(".resetBig")) {
            document.querySelector(".resetBig").classList.remove("resetBig");
        }



    }
}















