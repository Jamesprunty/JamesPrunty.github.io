const inbox = document.querySelectorAll('input[type="checkbox"]')
let shiftDown = false;
let pressed = "0";
let lastchecked;
let newchecked;
let remove;
let previous;
let CheckedArray = [];


console.log(inbox);

inbox.forEach(element => {

    addEventListener('change', handleChange);

});


function handleChange(e) {

    for (i = 0; i < inbox.length; i++) {

        if (e.target == inbox[i]) {

            if (inbox[i].checked) {

                CheckedArray.push(i);
                console.log('%c' + CheckedArray, 'color:red');


            } else {

                const index = CheckedArray.indexOf(i);
                if (index > -1) { CheckedArray.splice(index, 1) };
                console.log('%c' + CheckedArray, 'color:blue');

            }




        }

    }

    if(shiftDown){

        previous = CheckedArray[CheckedArray.length - 2];
        current = CheckedArray[CheckedArray.length - 1];

        console.log('%c'+previous,'color:red');
        console.log('%c'+current,'color:green');

        for(i=previous;i<current;i++){

            inbox[i].checked = true;


        }

        if(previous>current){

            for(i=current;i<previous;i++){

                inbox[i].checked = true;
    
    
            }


        }


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










