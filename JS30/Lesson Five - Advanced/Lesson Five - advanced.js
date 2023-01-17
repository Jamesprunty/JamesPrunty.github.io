//Selects all panels
const panels = document.querySelectorAll('.panel');

const panel1 = document.querySelector('.panel1');
const panel2 = document.querySelector('.panel2');
const panel3 = document.querySelector('.panel3');
const panel4 = document.querySelector('.panel4');
const panel5 = document.querySelector('.panel5');


function toggleOpen(panelNo) {

    console.log(panelNo);

    switch (panelNo) {

        case "panel1":
            panel3.classList.toggle('open1');
            break;

        case "panel2":
            panel3.classList.toggle('open2');
            break;

        case "panel3":
            panel3.classList.toggle('open3');
            break;

        case "panel4":
            panel3.classList.toggle('open4');
            break;

        case "panel5":
            panel3.classList.toggle('open5');
            break;
    }


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
panel1.addEventListener('click', function () { toggleOpen("panel1") });
panel2.addEventListener('click', function () { toggleOpen("panel2") });
panel3.addEventListener('click', function () { toggleOpen("panel3") });
panel4.addEventListener('click', function () { toggleOpen("panel4") });
panel5.addEventListener('click', function () { toggleOpen("panel5") });

//Looks for the transition end event to toggleActive
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));