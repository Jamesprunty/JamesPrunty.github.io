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

    for(i=0;i<inbox.length;i++){

        if(e.target == inbox[i]){

            if (inbox[i].checked){

                CheckedArray.push(i);
            console.log('%c'+CheckedArray,'color:red');


            }else{

                const index = CheckedArray.indexOf(i);
                if(index > -1){CheckedArray.splice(index, 1)};
                console.log('%c'+CheckedArray,'color:blue');

            }


            

        }

    }


}


    /*backup
    
    
    
    if (e.target.checked){
        CheckedArray.push(e.target);
        console.log(CheckedArray);
    }else{
        console.log("This is not checked");
        console.log(CheckedArray);
        }
    }
    
    if (e.target.checked){

        e.target.classList.add('current');


    } else {

        e.target.classList.remove('current');
        e.target.classList.remove('previous');


    }


    if (shiftDown) {

        let remove = document.querySelector('.previous')
        let previous = document.querySelector('.current')
        previous.classList.add('previous');
        previous.classList.remove('current');
        e.target.classList.add('current');        
        remove.classList.remove('previous');

        for (i=0;i<inbox.length;i++){

            if (inbox[i].classList.contains('current')){

                console.log(i);

            }
            if (inbox[i].classList.contains('previous')){

                console.log(i);

            }




        }


    } else {

        remove = document.querySelector('.previous')
        previous = document.querySelector('.current')

        previous.classList.add('previous');
        previous.classList.remove('current');
        e.target.classList.add('current');
        
        if(previous.classList.contains('current') && previous.classList.contains('previous') ){

            previous.classList.remove('previous');

        }

        remove.classList.remove('previous');

        remove = "";
        previous = "";

  
        


        return;







    }*/


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









