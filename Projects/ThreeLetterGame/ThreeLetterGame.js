const alphabet = "abcdefghijklmnopqrstuvwxyz"
const current = document.querySelector("#current");
const input = document.querySelector("#input");
const previousDiv = document.querySelector("#previousDiv");
const timerDiv = document.querySelector("#timerDiv");
const popupContent = document.querySelector("#popupContent");
const highScoreCount = 5;
const highScores = 'highScores';
let scoresArray = [];




window.addEventListener("load", function () {
    if(!localStorage.getItem("firstTime")){

   
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
}
localStorage.setItem("firstTime", true)
});


document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

let number = 3;
let lettersArr = generate(number);
let isWord = true;
let responseData = "";
let isTrue = true;
let longEnough = true;
let letterFirst = true;
let letterCheck = true;
let success = true;
let inputLength = true;
let test = true;
let previousArray = [];

input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {

        longEnough = true;
        letterFirst = true;
        isWord = true;
        letterCheck = true;
        success = true;
        inputLength = true;

        wordChecker(lettersArr, input.value);





    }
})

previousArray.push(["Letters", "Words", "Points"]);




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

    if (firstLetters[0] == undefined) {
        letterFirst = false;
    } else {
        letterFirst = true;
    }


    if (input.length < 4) {
        inputLength = false;
    }


    //Check if the words are words, if they are not, then return false

    let wordCheckArray = [];

    words.forEach(element => {
        dictionaryCheck(element).then((responseData) => {
            wordCheckArray.push(responseData);
        });


    });

    setTimeout(() => {

        wordCheckArray.forEach(element => {
            if (element == false) {
                isWord = false;
            }
        });

    }, 1000);



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
        if (parseInt(element) == 0) {
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




        successCheck.forEach(element => {
            if (element == false) {
                success = false;
            }
        });

        let upperLetters = [];

        for (let i = 0; i < letters.length; i++) {
            upperLetters.push(letters[i].toLocaleUpperCase());

        }



        if (success == true) {

            //Process points

            let points = 0;


            let inputData = input.split("");

            inputData.forEach(element => {
                points++;
                if (element == " ") {
                    points += 5;
                }
            });


            input.value = "";





            previousArray.push([upperLetters, words, points - 4]);

            let dataFinish = ""

            previousArray.forEach(element => {

                let data =
                    `<div class="prevContainer">
            <div class="heading"><p class="lettersContent">${element[0]}</p></div>
            <div class="heading"><p class="wordsContent">${element[1]}</p></div>
            <div class="heading"><p class="wordsContent">${element[2]}</p></div>
            </div>`

                dataFinish += data;
                let total = 0;




            });


            previousDiv.innerHTML = dataFinish;

            if (previousArray.length < 6) {

                reset(number);

            } else {

                endGame(previousArray);

            }



        } else {

            input.value = "";


            //return that there was a problem


            if (successCheck[0] == false) {
                alert("The word must be longer.");
            } else if (successCheck[1] == false) {
                alert("The first character is not a letter.");
            } else if (successCheck[2] == false) {
                alert("The words do not contain the letters or are not in the right order.");
            } else if (successCheck[3] == false) {
                alert("The input must be at least 4 letters in length.");
            } else if (successCheck[4] == false) {
                alert("One of the words is not a word.");
            }


        }


    }, 1000);


    //calculate score and add to previous lise, then generate a new set of letters. 


}

async function dictionaryCheck(word) {


    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;


    return await fetch(url)
        .then((response) => response.json())
        .then((responseData) => {

            if (responseData.message) {
                return false;
            } else {
                return true;
            }
        })
        .catch(error => console.warn(error));
}

function reset(number) {

    input.value = "";
    longEnough = true;
    letterFirst = true;
    isWord = true;
    letterCheck = true;
    success = true;
    inputLength = true;
    document.querySelector(".popup").style.display = "none";
    lettersArr = generate(number);


}

function fullReset(number){

    previousDiv.innerHTML = 
    
    ` <div class="prevContainer">
    <div class="heading">
        <p class="lettersContent">Letters</p>
    </div>
    <div class="heading">
        <p class="wordsContent">Words</p>
    </div>
    <div class="heading">
        <p class="wordsContent">Points</p>
    </div>
</div>`

    input.value = "";
    longEnough = true;
    letterFirst = true;
    isWord = true;
    letterCheck = true;
    success = true;
    inputLength = true;
    previousArray = [];
    previousArray.push(["Letters", "Words", "Points"]);
    document.querySelector(".popup").style.display = "none";
    lettersArr = generate(number);

}

function endGame() {

    let total = 0;


    for (let i = 1; i < previousArray.length; i++) {
        total += previousArray[i][2];
    }



    if(localStorage.getItem("highScores0")){

        let tempScores = [];
        let inserted = false;

     for (let j = 0; j < 6; j++) {
        if(localStorage.getItem("highScores" + j)){
        scoresArray.push(localStorage.getItem("highScores" + j));
        }
     }

     console.log(scoresArray);



     for (let i = 0; i < 6; i++) {

        console.log(scoresArray[i]);

        if(total <= scoresArray[i] && inserted == false){
            tempScores.push(total);
            inserted = true;
            tempScores.push(scoresArray[i]);
        }else if(scoresArray[i + 1] == undefined && inserted == false){

            tempScores.push(scoresArray[i]);
            console.log("TESTNIG");
            tempScores.push(total);
            inserted = true;
            

        }else{
            tempScores.push(scoresArray[i]);
        }
     }

     console.log(tempScores);

     for (let k = 0; k < 6; k++) {
        localStorage.setItem("highScores" + k, tempScores[k]);
        
     }

     console.log(scoresArray);


    }else{
       
        localStorage.setItem("highScores0", total)

    }

    let scores = previousDiv.innerHTML;

    popupContent.innerHTML = `
        <h1>Results<h1><br>
        <h2> Your score was: ${total}</h2><br><br>

        <h3>Previous Results</h3>
        <div id="highScoresTable">
        <div id="headerContainer">
        <div class="header"><p>Place</p></div>
        <div class="header"><p>Score</p></div>
        </div>
        <div id="headerContainer">
        <div class="header"><p>1</p></div>
        <div class="header"><p>${localStorage.getItem("highScores0")}</p></div>
        </div>
        <div id="headerContainer">
        <div class="header"><p>2</p></div>
        <div class="header"><p>${localStorage.getItem("highScores1")}</p></div>
        </div>
        <div id="headerContainer">
        <div class="header"><p>3</p></div>
        <div class="header"><p>${localStorage.getItem("highScores2")}</p></div>
        </div>
        <div id="headerContainer">
        <div class="header"><p>4</p></div>
        <div class="header"><p>${localStorage.getItem("highScores3")}</p></div>
        </div>
        <div id="headerContainer">
        <div class="header"><p>5</p></div>
        <div class="header"><p>${localStorage.getItem("highScores4")}</p></div>
        </div>
        <div id="previousResults"></div>
        <div id="reset"><input type="button" value="reset" id="resetBtn"></input>
        </div>`

    //timerDiv.innerHTML = `<p id="score">Total: ${total}</p>`
    input.value = "";
    document.querySelector(".popup").style.display = "block";

    const resetBtn = document.querySelector("#resetBtn");
    resetBtn.addEventListener("click", function(){
        console.log("TEST");

        fullReset(number);

    })

}


  //Setup reset





