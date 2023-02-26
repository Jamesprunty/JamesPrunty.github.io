const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e){

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
    
    //This will reset the form
    this.reset();

}

//Add this in as an empty array because if you forget to put anything in it won't fail. As it will just loop over nothing.
function populateList(items = [], itemsList){

    //This goes through the items in the array and puts them as HTML in "platesList"
itemsList.innerHTML = items.map((item, i) => {

    return `
    
    <li>
        <label for="">${item.text}</label>
    </li>
    
    
    
    `;

//We have to join it because usally this will give us an array, when we want one big string
}).join('');


}




//We listen to submit, rather than click
addItems.addEventListener('submit', addItem);