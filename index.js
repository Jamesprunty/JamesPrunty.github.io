const title = document.querySelector(".titleContainer");
const menuContainer = document.querySelector("#MenuContainer");
const SHDiv = document.querySelector("#SHDiv");
const page = document.querySelector("#page");

title.addEventListener('click', openMenu);



function openMenu(){

    title.classList.add("titleAnimate");
    menuContainer.classList.remove("hidden");
    SHDiv.classList.add("subtitleAnimate");
    page.classList.add("backgroundAnimate");
   


console.log("Menu Open");


}