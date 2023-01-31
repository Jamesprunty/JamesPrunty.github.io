const inbox = document.querySelectorAll('.item')

console.log(inbox);

inbox.forEach(element => {

    addEventListener('change', function(){

        console.log(this);

        if(this.checked){

            console.log("Checkbox Checked");

        }else{

            console.log("Checkbox unchecked");

        }
        

    })
    
});