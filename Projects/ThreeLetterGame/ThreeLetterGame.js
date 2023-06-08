const alphabet = "abcdefghijklmnopqrstuvwxyz"
const current = document.querySelector("#current");
const input = 
generate(3);













function generate(amount){

    let letters = randomLetters(amount);
    console.log(letters);

    let dataTotal = "";
    

    for (let i = 0; i < letters.length; i++) {
        let upperLetter = letters[i].toLocaleUpperCase();
        let data = `<div id="letter${i}" class="letter"><p id="letter${i}Val">${letters[i].toUpperCase()}</p></div>`
        dataTotal += data;
        
    }
    console.log(dataTotal);

    current.innerHTML = dataTotal;

}



function randomLetters(amount){
    let tempArray = [];
    
    function letterGen(){
        const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
        return randomChar;
    }

    for (let i = 0; i < amount; i++) {
        tempArray.push(letterGen());
        
    }

    return tempArray;



}