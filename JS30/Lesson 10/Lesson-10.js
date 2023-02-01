const inbox = document.querySelectorAll('input[type="checkbox"]')
let shiftDown = false;
let pressed = "0";
let lastchecked;
let newchecked;


console.log(inbox);

inbox.forEach(element => {

    addEventListener('change', handleChange);

});


function handleChange(e) {

    if (e.target.checked){

        e.target.classList.add('current');
        console.log("Checked");

    } else {

        e.target.classList.remove('current');
        console.log("UnChecked");
    }

    

    newchecked = e.target.outerHTML;

    console.log('%c' + newchecked, 'color:red');

    console.log(e.target);

    console.log(inbox[0]);

    
    


    if (lastchecked == ""){

       
        return;

    }

    if (shiftDown) {

        






    } else {


        return;







    }








}

window.addEventListener('keydown', function (e) {

    if (pressed == "0") {

        if (e.key == "Shift") {

            shiftDown = true;
            console.log("ShiftDown");

            pressed++;
        }
    }
});

window.addEventListener('keyup', function (e) {

    if (e.key == "Shift") {

        shiftDown = false;
        console.log("ShiftUp");

        pressed = "0";
    }
});





//Get whether the shift button is down - DONE

//Get which box is checked

//Get which box is being checked

//Find all the boxes in between

//Check those boxes









