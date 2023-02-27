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
//const data = null;

const movies = [
    {
        title:"Cars",
        imdb:"tt0317219"
    }
];

console.log(movies);



var url = 'http://www.omdbapi.com/?i=tt0317219&apikey=90ab9906';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function(){

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

    let actor1Search = actor1.replace(/\s/g, '%20');
    let actor2Search = actor2.replace(/\s/g, '%20');
    let actor3Search = actor3.replace(/\s/g, '%20');




var url2 = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=" + actor1Search + "&pageNumber=1&pageSize=10&autoCorrect=true";
var xhr2 = new XMLHttpRequest();
xhr2.withCredentials = true;
xhr2.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		imageData = JSON.parse(this.response);
        console.log(imageData);
        actor1URL = Object.values(imageData.value)[1].url;
        console.log(actor1URL);
	}
});



xhr2.open('GET', url2, true);
xhr2.setRequestHeader("X-RapidAPI-Key", "13d7771060mshc1088a713a8eca3p10eb86jsne011dab43bdb");
xhr2.setRequestHeader("X-RapidAPI-Host", "contextualwebsearch-websearch-v1.p.rapidapi.com");

xhr2.send(data);

}
xhr.send();



/*fetch('http://www.omdbapi.com/?i=tt0317219&apikey=90ab9906')
    .then(res => res.json())
    .then(data => console.log(data));



/*const api_url = 'http://www.omdbapi.com/?i=tt0317219&apikey=90ab9906'
const response = await fetch(url);
let data = await response.json();
console.log(data);

getapi(api_url);

*/

/*fetch('http://www.omdbapi.com/?i=tt0317219&apikey=90ab9906')
    .then(response => { return response.json()})
    .then(response => console.log(JSON.stringify(response)))
    .then(response => movieDetails = JSON.parse(response));
    
    
    console.log(movieDetails);
    
*/



    /*

    {"Title":"Cars","Year":"2006","Rated":"G","Released":"09 Jun 2006","Runtime":"117 min","Genre":"Animation, Adventure, Comedy","Director":"John Lasseter, Joe Ranft","Writer":"John Lasseter, Joe Ranft, Jorgen Klubien","Actors":"Owen Wilson, Bonnie Hunt, Paul Newman","Plot":"On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town, and learns that winning isn't everything in life.","Language":"English, Italian, Japanese, Yiddish","Country":"United States","Awards":"Nominated for 2 Oscars. 28 wins & 34 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"74%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"7.2","imdbVotes":"428,427","imdbID":"tt0317219","Type":"movie","DVD":"07 Nov 2006","BoxOffice":"$244,082,982","Production":"N/A","Website":"N/A","Response":"True"}

    */