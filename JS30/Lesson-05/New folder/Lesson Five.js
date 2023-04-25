//Selects all panels
const panels = document.querySelectorAll('.panel');


function toggleOpen() {
    //Whatever object is attached to this, toggle "open" to the classlist
    this.classList.toggle('open');
}

function toggleActive(e) {
    //This will tell us what transitioned when it finishes
    console.log(e.propertyName);

    //If the event property name includes "flex" it is true. e.g "flex" & "flex-grow" would both be included
    if (e.propertyName.includes('flex')) {

        //Whatever object is attached to this, toggle "open" to the classlist
        this.classList.toggle('open-active');
    }


}

//For each "panel" in "Panels" add an event listener on click
//We don't add the "()" to the function as this would make it run on page load
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

//Looks for the transition end event to toggleActive
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));