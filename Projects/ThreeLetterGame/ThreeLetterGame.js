const alphabet = "abcdefghijklmnopqrstuvwxyz"
const current = document.querySelector("#current");
const input = document.querySelector("#input");
let lettersArr = generate(3);
let isWord = true;

input.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        wordChecker(lettersArr, input.value);
    }
})












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

    return letters;

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

function wordChecker(letters, input){

   

        
    // split into words
    let words = input.split(" ");
    console.log(words);
    let wordAmount = words.length;
    console.log(wordAmount);

     //If the words are 3 letters return

     words.forEach(element => {
        console.log(element);
        if(element.length <= 2){
            console.log("too short");
            return "too Short";
        }
     });


    //Check if the words are words, if they are not, then return false

    dictionaryCheck(words);




    let check = [];
    checkIdx = 0;

    for (let j = 0; j < letters.length; j++) {
        check.push(0);
        
    }
    console.log(check);

console.log(letters);
console.log(input);

//Check it contains the letters and the letters are in the correct order, if they don't return true

for (let i = 0; i < input.length; i++) {
    
    if(input[i] == letters[checkIdx]){
        check[checkIdx] = 1;
        checkIdx += 1;
    };
}

console.log(check);



//calculate score and add to previous lise, then generate a new set of letters. 


}

function dictionaryCheck(words){

    

    words.forEach(element => {

        isWord = true;

        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + element; 

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onload = function () {
            var data = JSON.parse(this.response);
            console.log(data.message);
            if(data.message == "Sorry pal, we couldn't find definitions for the word you were looking for."){
                console.log("FAILURE");
                return false;
            }
            
        }

    });



}