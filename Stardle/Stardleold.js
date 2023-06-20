const imageHint = document.querySelector("#imageHint");
const hints = document.querySelectorAll(".hint")

hints.forEach(element => {
    element.addEventListener('click', hintManager);
});

let guesses = 0;
let number = 1;


let movieDetails;
let title;
let release;
let actors;
let actor1;
let actor2;
let actor3;
let poster;
let plot;
let imageData = null;
let actor1URL;
let actor2URL;
let actor3URL;
let actorsURL = [];
let actorsURLComplete = [];
let info = {};


//const data = null;

const movies = [
    {
        title: "Cars",
        imdb: "tt0317219"
    }
];

console.log(movies);



var url = 'http://www.omdbapi.com/?i=tt0317219&apikey=90ab9906';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function () {

    var data = JSON.parse(xhr.responseText);
    title = data.Title;
    release = data.Released;

    console.log(data);
    actors = data.Actors.split(',');
    actor1 = actors[0];
    actor2 = actors[1];
    actor3 = actors[2];
    poster = data.Poster;
    plot = data.Plot;


    let a1 = actor1.trimStart();
    let a2 = actor2.trimStart();
    let a3 = actor3.trimStart();

    console.log(a2);
    console.log(a3);

    let actor1Search = a1.replace(/\s/g, '%20');
    let actor2Search = a2.replace(/\s/g, '%20');
    let actor3Search = a3.replace(/\s/g, '%20');

    actorsURL.push(actor1Search, actor2Search, actor3Search);
    console.log(actorsURL);


    info[0] = "Cars"







    var xhr2 = new XMLHttpRequest();

    var url2 = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=" + actorsURL[0] + "&pageNumber=1&pageSize=10&autoCorrect=true";


    xhr2.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            imageData = JSON.parse(this.response);
            console.log(imageData);
            actorsURLComplete.push(Object.values(imageData.value)[0].url);
            console.log(actorsURLComplete);
            info[1] = actorsURLComplete[0];

            imageHint.src = actorsURLComplete[0];

        }
    });



    var xhr3 = new XMLHttpRequest();

    var url3 = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=" + actorsURL[1] + "&pageNumber=1&pageSize=10&autoCorrect=true";

    xhr3.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            imageData = JSON.parse(this.response);
            console.log(imageData);
            actorsURLComplete.push(Object.values(imageData.value)[0].url);
            console.log(actorsURLComplete);
            info[2] = actorsURLComplete[1];
        }
    });




    var xhr4 = new XMLHttpRequest();

    var url4 = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=" + actorsURL[2] + "&pageNumber=1&pageSize=10&autoCorrect=true";


    xhr4.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            imageData = JSON.parse(this.response);
            console.log(imageData);
            actorsURLComplete.push(Object.values(imageData.value)[0].url);
            console.log(actorsURLComplete);
            info[3] = actorsURLComplete[2];
            ;
        }
    });

    info[4] = release;
    info[5] = plot;


    console.log("%c" + info, "color:red");
    console.log(url2);



    xhr2.open('GET', url2, true);
    xhr3.open('GET', url3, true);
    xhr4.open('GET', url4, true);


    xhr2.withCredentials = true;
    xhr3.withCredentials = true;
    xhr4.withCredentials = true;

    xhr2.setRequestHeader("X-RapidAPI-Key", "13d7771060mshc1088a713a8eca3p10eb86jsne011dab43bdb");
    xhr2.setRequestHeader("X-RapidAPI-Host", "contextualwebsearch-websearch-v1.p.rapidapi.com");
    xhr3.setRequestHeader("X-RapidAPI-Key", "13d7771060mshc1088a713a8eca3p10eb86jsne011dab43bdb");
    xhr3.setRequestHeader("X-RapidAPI-Host", "contextualwebsearch-websearch-v1.p.rapidapi.com");
    xhr4.setRequestHeader("X-RapidAPI-Key", "13d7771060mshc1088a713a8eca3p10eb86jsne011dab43bdb");
    xhr4.setRequestHeader("X-RapidAPI-Host", "contextualwebsearch-websearch-v1.p.rapidapi.com");



    xhr2.send(data);

    setTimeout(() => {
        xhr3.send(data);

        setTimeout(() => {
            xhr4.send(data);
        }, 2000);

    }, 2000);
}
xhr.send();


function hintManager() {

    console.log(this);


    if (this.value == "Next Hint") {

        console.log("%c" + info, "color:green");

        number++;
        guesses++;

        hints.forEach(element => {

            if (element.value == number) {
                element.classList.remove("hidden");
                imageHint.src = Object.values(info)[number];

            }
        });

    }




}

