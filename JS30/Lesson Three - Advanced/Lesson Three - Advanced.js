


//Query selector will give you something similar to an array called a node list
//The difference is that an array has a ton of built in prototypes you can use
//To look at what you can do with an element, look it up in the dev tools in the browser
//If you use the dropdown on proto, you will see all the things you can do with it
//So sometimes if you want to use array protos, you can convert a node list to an array

//This will create a node list of all inputs in .controls class
const inputs = document.querySelectorAll('.controls input');
var treeCheck = document.getElementById("treesSelect");
var mountCheck = document.querySelector("#mountainSelect");
var selected = "trees";
var r = document.querySelector(':root');
const blurSet = document.getElementById("blur");
const spacingSet = document.getElementById("spacing");
const baseSet = document.getElementById("base");
var baseKeep = "";
var blurKeep = "";
var spacingKeep = "";

var tDetails = [];
var mDetails = [];




treeCheck.addEventListener('change', function () {

    if (this.checked) {

        mountCheck.checked = false;
        selected = "trees";
        blurSet.value = getComputedStyle(document.getElementById("blur")).getPropertyValue('--tblur.value');
        baseSet.value = getComputedStyle(document.getElementById("base")).getPropertyValue('--tbase');
        spacingSet.value = getComputedStyle(document.getElementById("spacing")).getPropertyValue('--tspacing');

        console.log(blurSet.value);


    } else {



    }
});

treeCheck.checked = true;

mountCheck.addEventListener('change', function () {

    if (this.checked) {

        treeCheck.checked = false;
        selected = "mountains";
        blurSet.value = getComputedStyle(document.getElementById("blur")).getPropertyValue('--mblur');
        baseSet.value = getComputedStyle(document.getElementById("base")).getPropertyValue('--mbase');
        spacingSet.value = getComputedStyle(document.getElementById("spacing")).getPropertyValue('--mspacing');

        console.log(blurSet.value);

    } else {



    }
});






function handleUpdate() {


    if (treeCheck.checked) {


        var name = ("t" + this.name);
        var nameVar = "--" + name;




        //datset is an object that will contain all data attributes (For us this would just be sizing)
        //Some don't have a data tag and so you have to add the "|| ''" so it doesnt return undefined
        const suffix = this.dataset.sizing || '';



        document.documentElement.style.setProperty(`--${name}`, this.value + suffix);

    } else if (mountCheck.checked) {


        var name = ("m" + this.name);


        //datset is an object that will contain all data attributes (For us this would just be sizing)
        //Some don't have a data tag and so you have to add the "|| ''" so it doesnt return undefined
        const suffix = this.dataset.sizing || '';

        document.documentElement.style.setProperty(`--${name}`, this.value + suffix);




    }





}


//This will go through each input and add an eventlistener. 
//The event listener will run handleUpdate when something changes
inputs.forEach(input => input.addEventListener('change', handleUpdate));
//This will update as you move your mouse over it
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
