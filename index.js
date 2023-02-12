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
        name: "Other Projects to come"
    }

];

item1.innerHTML = projects[0].name;
item2.innerHTML = projects[1].name;
item3.innerHTML = projects[2].name;



console.log(projects);


console.log(items);

title.addEventListener('click', openMenu);

function moveItems() {
    delay = 0;
    duration = 0.5;



    if (rotations == 0) {




        if (this.classList.contains("startRTM")) {

            console.log("MOVE TO JS30");

            menuContainer.classList.add("moveTop");

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
    
        }, duration * 5000);



    }else{





    root.style.setProperty('--delay', delay + "s");
    root.style.setProperty('--duration', duration + "s");

    console.log(this.id);




    if (this.id == "item1") {

        console.log("Click 1")


    }

    if (this.id == "item2") {

        console.log("Click 2")



    }

    if (this.id == "item3") {

        console.log("Click 3")



    }
}




    /*
    if (document.querySelector(".farStart")) {
        document.querySelector(".farStart").classList.remove("farStart");
    }
    if (document.querySelector(".start")) {
        document.querySelector(".start").classList.remove("start");
    }


    if (this.classList.contains("OTR") || this.classList.contains("MTR")) {


        this.classList.add("right");
        this.classList.remove("middle");

        if (document.querySelector(".LTM")) {
            document.querySelector(".LTM").classList.add("middle");
        }

        if (document.querySelector(".RTM")) {
            document.querySelector(".RTM").classList.add("middle");
        }

        if (document.querySelector(".RTM")){        
            document.querySelector(".RTM").classList.remove("RTM");
            }

        document.querySelector(".middle").classList.add("MTL");

        this.classList.add("RTM");
        this.classList.remove("MTR");
        this.classList.remove("OTR");

        if (document.querySelector(".LTM")) {
            document.querySelector(".LTM").classList.remove("LTM");
        }


    }

    if (this.classList.contains("MTL") || this.classList.contains("OTL")) {

        this.classList.add("left");
        this.classList.remove("middle");

        if (document.querySelector(".RTM")) {
            document.querySelector(".RTM").classList.add("middle");
        }

        if (document.querySelector(".LTM")) {
            document.querySelector(".LTM").classList.add("middle");
        }

        if (document.querySelector(".LTM")){        
            document.querySelector(".LTM").classList.remove("LTM");
            }

        document.querySelector(".middle").classList.add("MTR");

        this.classList.add("LTM");
        this.classList.remove("MTL");
        this.classList.remove("OTL");

        if (document.querySelector(".RTM")) {
            document.querySelector(".RTM").classList.remove("RTM");
        }


    }*/
if (rotations > 1){

    
    setTimeout(() => {
        
        resetDivs();

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





    console.log("Menu Open");


}

function resetDivs() {

    console.log("THIS IS WORKING");
    console.log(rotations);

    duration = 0;

    if(rotations == 1){

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
    




    }

    








}
