const inbox = document.querySelectorAll('.item')

console.log(inbox);

inbox.forEach(element => {

    addEventListener('change', handleChange);    
});

function handleChange () {

console.log(this.name);

}