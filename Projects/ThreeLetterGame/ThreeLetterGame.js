const alphabet = "abcdefghijklmnopqrstuvwxyz"
const current = document.querySelector("#current");
const input = document.querySelector("#input");
let lettersArr = generate(3);
let isWord = true;
let responseData = "";
let isTrue = true;

input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        wordChecker(lettersArr, input.value);
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




    // split into words
    let words = input.split(" ");
    let wordAmount = words.length;

    //If the words are 3 letters return

    words.forEach(element => {
        if (element.length <= 2) {
            return "too Short";
        }
    });


    //Check if the words are words, if they are not, then return false

    let checked = dictionaryCheck(words);

  
        console.log(checked);

    


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




    //calculate score and add to previous lise, then generate a new set of letters. 


}

function dictionaryCheck(words) {

    let trueArray = []; 



    words.forEach(element => {

        isWord = true;

        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + element;


        const fetchData = () => {

            return new Promise((resolve, reject) => (
                fetch(url)
                  .then(res => res.json())
                  .then(data => resolve(data))
                  .catch(err => reject(err))
                ))
          }
          
          async function getData() {
            const data = await fetchData()
            console.log(data);
            return data;
          }

          getData().then(data => trueArray.push(data.message));
          

          setTimeout(() => {

            console.log(trueArray);

            console.log(isTrue);
            
          }, 1000);


          /*if(isTrue){
            trueArray.push(0);
          }else{
            trueArray.push(1);
          }*/



      /*async function checkDictionary(url){
        const response = await fetch(url);
        console.log(response);
      }

checkDictionary(url);*/
        

/*async function fetchMoviesJSON() {
    const response = await fetch(url);
    const words = await response.json();
    return words;
  }
  
  fetchMoviesJSON().then(words => {
    words; // fetched movies
    console.log(words);

    if(words.message){
        trueArray.push(0);
        console.log(trueArray);
        return false;
    }else{
        trueArray.push(1);
        return true;
    }
  });

  if(test){
    console.log(await fetchMoviesJSON());
  }else{
    console.log("This is a not word");
  }*/


       /*
    
        fetchDemo().then(function(result) {

            if(result.message){
                isTrue = false;
            }else{
                trueArray.push(1);
                console.log(trueArray);
            }

            console.log(isTrue);

        });

*/
    });

    console.log(trueArray);


  

}


