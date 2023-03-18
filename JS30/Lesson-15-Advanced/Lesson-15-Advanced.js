const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const checkAll = document.querySelector('#checkAll');
const checkNone = document.querySelector('#checkNone');
const reset = document.querySelector('#reset');

const items = JSON.parse(localStorage.getItem('Items')) || [];

checkAll.addEventListener('click', function() {controls("checkAll")});
checkNone.addEventListener('click', function() {controls("checkNone")});
reset.addEventListener('click', function() {controls("reset")});


//At page load we will set the variable 'items' to be from local storage, but if it is the first time then it will be a blank array.


function addItem(e) {

    //This will stop the page from refreshing
    e.preventDefault();



    //We can do "this.quer.." because it is a form, so it looks for something in there with attribute "name"
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        //instead of text: text, we can shorthand this to "text"
        text,
        done: false

    };

    items.push(item);
    populateList(items, itemsList);

    //Set to local storage
    //Localstorage is a key value store and can only hold strings
    //SetItem sets it, getItem will get it. 
    //Next is the item name 
    //Then the array needs to be turned into a string to save


    localStorage.setItem('Items', JSON.stringify(items));

    //JSON.parse will bring this back from a string into an object again


    //This will reset the form
    this.reset();

}

//Add this in as an empty array because if you forget to put anything in it won't fail. As it will just loop over nothing.
//Every time we run this it recreates the whole list
function populateList(items = [], itemsList) {

    //This goes through the items in the array and puts them as HTML in "platesList"
    itemsList.innerHTML = items.map((item, i) => {

        //Link the label to the input by making the "id" and the "For" the same
        //We will add a ternerary operator. If "item.done" is true, then check the box, otherwise do nothing. 

        return `
    
    <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}/>
        <label for="item${i}">${item.text}</label>
    </li>

    `;

        //We have to join it because usally this will give us an array, when we want one big string
    }).join('');

}


function toggleDone(e) {

    //if the whatever we clicked on is not an input, then return without doing antyhing
    //This is event deligation, we listen for an event on something higher and then check what it is on the lower level
    if (!e.target.matches('input')) return;
    //We get the element target and set it as a variable to use
    const el = e.target;
    //Previously we set the dataset index so that we could get the index of the item in the list
    const index = el.dataset.index;
    console.log(el.dataset.index);
    //It takes this and toggles the check, if it is true, it sets it to false and vice versa
    // This will set done to the item at the index where the element is.
    items[index].done = !items[index].done
    //Update the local storage
    localStorage.setItem('Items', JSON.stringify(items));
    // Repopulate the list
    populateList(items, itemsList);



}

function controls(button) {

 if(button === "checkAll"){

    for(i=0;i<items.length;i++){
        console.log(i);
        items[i].done = true;
    }

 }

 if(button === "checkNone"){

    for(i=0;i<items.length;i++){
        console.log(i);
        items[i].done = false;
    }

 }

    //Update the local storage
    localStorage.setItem('Items', JSON.stringify(items));
    // Repopulate the list
    populateList(items, itemsList);

 if(button === "reset"){

    localStorage.removeItem("Items");

    itemsList.innerHTML = ``;
    itemsList.length = 0;
    items.length = 0;

 }





}


//We listen to submit, rather than click
addItems.addEventListener('submit', addItem);

//We add the eventlistner to the UL instead of the individual list items as they are always changing.
itemsList.addEventListener('click', toggleDone);

//populate the list of items. 
//but Items doesn't exist on page load, so we have to get it at the beginning.
populateList(items, itemsList);