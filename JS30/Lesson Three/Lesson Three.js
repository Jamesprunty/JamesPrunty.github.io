


//Query selector will give you something similar to an array called a node list
//The difference is that an array has a ton of built in prototypes you can use
//To look at what you can do with an element, look it up in the dev tools in the browser
//If you use the dropdown on proto, you will see all the things you can do with it
//So sometimes if you want to use array protos, you can convert a node list to an array

//This will create a node list of all inputs in .controls class
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){

    //datset is an object that will contain all data attributes (For us this would just be sizing)
    //Some don't have a data tag and so you have to add the "|| ''" so it doesnt return undefined
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

//This will go through each input and add an eventlistener. 
//The event listener will run handleUpdate when something changes
inputs.forEach(input => input.addEventListener('change', handleUpdate));
//This will update as you move your mouse over it
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
