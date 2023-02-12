const title = document.querySelector(".titleContainer");
const menuContainer = document.querySelector("#MenuContainer");
const SHDiv = document.querySelector("#SHDiv");
const page = document.querySelector("#page");
const items = document.querySelectorAll(".item");
const root = document.documentElement;
let rootElement = document.querySelector(':root');
let delay = 1.2;
let duration = 2.5;
root.style.setProperty('--delay', delay + "s");
root.style.setProperty('--duration', duration + "s");
let rotations = 0;

items.forEach(item => {
    item.addEventListener('click', moveItems);
});

items[0].classList.add("three");





console.log(items);

title.addEventListener('click', openMenu);

function moveItems() {

    if (rotations == 0){

        rotations++;
    }


    delay = 0;
    duration = 0.5;

    root.style.setProperty('--delay', delay + "s");
    root.style.setProperty('--duration', duration + "s");

    if (this.classList.contains("one")) {

        console.log("Click 1")


    }

    if (this.classList.contains("two")) {

        console.log("Click 2")

    }

    if (this.classList.contains("three")) {

        console.log("Click 3")

        item2.classList.add("twoSmall");

        setTimeout(() => {

            item1.classList.add("Left");
            item2.classList.add("Left");
            item3.classList.add("Left");
            item4.classList.add("Left");


            setTimeout(() => {

                item3.classList.add("centerExpand");


                
                
            }, duration * 1000);


            

            
            
        }, duration * 1000);
        

        
        
        



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
}

function openMenu() {

    title.classList.add("titleAnimate");
    menuContainer.classList.remove("hidden");
    SHDiv.classList.add("subtitleAnimate");
    page.classList.add("backgroundAnimate");



    console.log("Menu Open");


}
