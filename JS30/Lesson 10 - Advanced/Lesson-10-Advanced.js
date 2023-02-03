const checkBoxes =document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function handleCheck(e){

    let inBetween = false;

//Check if shift is down && check they are checking it
if(e.shiftKey && this.checked){

    checkBoxes.forEach(checkbox => {

        console.log(checkbox);

        if(checkbox === this || checkbox === lastChecked){

            console.log("start");
            //Turn on inbetween variable and toggle the ones inbetween
            //This will make sure it only gets the ones inbetween
            inBetween = !inBetween;

        }

        if(inBetween){
            checkbox.checked = true;
        }

    })


}



lastChecked = this;
}




checkBoxes.forEach(element => element.addEventListener('click', handleCheck));