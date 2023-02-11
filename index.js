const title = document.querySelector(".titleContainer");
const menuContainer = document.querySelector("#MenuContainer");
const SHDiv = document.querySelector("#SHDiv");
const page = document.querySelector("#page");
const items = document.querySelectorAll(".item");
const root = document.documentElement;
let rootElement = document.querySelector(':root');
root.style.setProperty('--delay', "1.2s");
root.style.setProperty('--duration', "2s");

items.forEach(item => {
    item.addEventListener('click', moveItems);
});

title.addEventListener('click', openMenu);






function moveItems(){

    root.style.setProperty('--delay', "0s");
    root.style.setProperty('--duration', "1.5s");

if(this.classList.contains("RTM") || this.classList.contains("LTM")){

    console.log("Clicking the middle ");
}

if (this.classList.contains("OTR") || this.classList.contains("MTR")){

    

    if(document.querySelector(".farStart")){
        document.querySelector(".farStart").classList.remove("farStart");
    }
    if(document.querySelector(".start")){
    document.querySelector(".start").classList.remove("start");
    }

    if(document.querySelector(".RTM")){
        document.querySelector(".RTM").classList.add("middle");
        }
    
        if(document.querySelector(".LTM")){
            document.querySelector(".LTM").classList.add("middle");
        }
    document.querySelector(".RTM").classList.remove("RTM");
    document.querySelector(".middle").classList.add("MTL");
    

    this.classList.add("right");
    console.log("Clicking the right");
    this.classList.add("RTM");
    this.classList.remove("OTR");
    this.classList.remove("MTR");



}

if (this.classList.contains("MTL") || this.classList.contains("OTL")){

    this.classList.add("left");
    this.classList.remove("middle");

    if(document.querySelector(".RTM")){
    document.querySelector(".RTM").classList.add("middle");
    }

    if(document.querySelector(".LTM")){
        document.querySelector(".LTM").classList.add("middle");
    }

    document.querySelector(".middle").classList.add("MTR");

    
    console.log("Clicking the Left");
    this.classList.add("LTM");


}


}

function openMenu(){

    title.classList.add("titleAnimate");
    menuContainer.classList.remove("hidden");
    SHDiv.classList.add("subtitleAnimate");
    page.classList.add("backgroundAnimate");
    item1.classList.add("RTM");
    item2.classList.add("OTR");   


console.log("Menu Open");


}