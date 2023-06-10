const alphabet = "abcdefghijklmnopqrstuvwxyz"
const current = document.querySelector("#current");
const input = document.querySelector("#input");
let lettersArr = generate(3);
let isWord = true;
let responseData = "";
let isTrue = true;
let longEnough = true;
let letterFirst = true;
let letterCheck = true;
let success = true;
let inputLength = true;
let test = true;

input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {

        longEnough = true;
        letterFirst = true;
        isWord = true;
        letterCheck = true;
        success = true;
        inputLength = true;

            console.log(wordChecker(lettersArr, input.value));

        
        
    }
})












function generate(amount) {

    let letters = randomLetters(amount);

    let dataTotal = "";


    for (let i = 0; i < letters.length; i++) {
        let upperLetter = letters[i].toLocaleUpperCase();
        let data = `<div id="letter${i}" class="letter"><p id="letter${i}Val">${letters[i].toUpperCase()}</p></div>`
        dataTotal += data;

    }

    current.innerHTML = dataTotal;

    return letters;

}



function randomLetters(amount) {
    let tempArray = [];

    function letterGen() {
        const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
        return randomChar;
    }

    for (let i = 0; i < amount; i++) {
        tempArray.push(letterGen());

    }

    return tempArray;



}

function wordChecker(letters, input) {

    

    let trueArray = [];


    // split into words
    let words = input.split(" ");
    let wordAmount = words.length;

    //If the words are 3 letters return

    words.forEach(element => {
        if (element.length <= 2) {
            longEnough = false;  
        }
    });

    let firstLetters = words[0].split("");

    if(firstLetters[0] == undefined){
        letterFirst = false;
    }else{
        letterFirst = true;
    }


    if(input.length < 4){
        inputLength = false;
    }









    //Check if the words are words, if they are not, then return false

    let wordCheckArray = [];
   
words.forEach(element => {
    dictionaryCheck(element).then((responseData) => {
      wordCheckArray.push(responseData);});


});

setTimeout(() => {

    console.log(wordCheckArray);
    wordCheckArray.forEach(element => {
        if(element == false){
            isWord = false;
        }
    });
    
}, 1000);




/*

console.log(trueArray);

setTimeout(() => {

    trueArray.forEach(element => {
        if(element.message){
            return "One of inputs is not a word";
        }
    });
    
    
}, 1000);*/






    let check = [];
    checkIdx = 0;

    for (let j = 0; j < letters.length; j++) {
        check.push(0);

    }

    //Check it contains the letters and the letters are in the correct order, if they don't return true

    for (let i = 0; i < input.length; i++) {

        if (input[i] == letters[checkIdx]) {
            check[checkIdx] = 1;
            checkIdx += 1;
        };
    }
 

    check.forEach(element => {
        if(parseInt(element) == 0){
            letterCheck = false;
        }
    });


setTimeout(() => {

    let successCheck = [];
    let successCheckData = [];
    successCheck.push(longEnough);
    successCheckData.push("Long Enough: " + longEnough);
    successCheck.push(letterFirst);
    successCheckData.push("Letter First: " + letterFirst);
    successCheck.push(letterCheck);
    successCheckData.push("Letter Check: " + letterCheck);
    successCheck.push(inputLength);
    successCheckData.push("Input Data: " + inputLength);
    successCheck.push(isWord);
    successCheckData.push("Is Word: " + isWord);

    console.log(isWord);



    successCheck.forEach(element => {
        if(element == false){
            success = false;
        }
    });


    console.log(successCheck);

    if(success == true){
        console.log("PASSED");
    }else{
        console.log("FAILED");
    }

    
}, 1000);





    //calculate score and add to previous lise, then generate a new set of letters. 


}







async function dictionaryCheck(word) {


    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;


    return await fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);

      if(responseData.message){
        return false;
      }else{
        return true;
      }
    })
    .catch(error => console.warn(error));
  }




