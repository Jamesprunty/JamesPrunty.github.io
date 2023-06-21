//Access Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE

//Person

let movieName = "cars";
let movieLower = movieName.toLowerCase();
let movieID = "";
let cast = [];
let poster = "";
let clues = [];
let castImages = [];
let releaseDate = "";
let summary = "";
let imdbLink = "";
let hint = 1;

let imageHint = document.querySelector("#imageHint");
let textHint = document.querySelector("#textHint");
let nextHint = document.querySelector("#nextHint");

nextHint.addEventListener('click', function(){
  controller("next");
});





async function getMovie(name){
    //Movie

    let url = "https://api.themoviedb.org/3/search/movie?query=" + name + "&include_adult=false&language=en-US&page=1"
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE'
        }
      };
      
      return await fetch(url, options)
        .then((response) => response.json())
        .then((responseData) => {
          return responseData})
        .catch(err => console.error(err));
    }


    async function getMovieCast(id){

        //id in this example is 920

        let url = "https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-US"

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE'
            }
          };
          
          return await fetch(url, options)
        .then((response) => response.json())
        .then((responseData) => {
          getPerson(responseData.cast[0].id).then((responseData) => {
            imageHint.src = "http://image.tmdb.org/t/p/w500/" + responseData.profiles[0].file_path;
          });
          cast.push(responseData.cast[0].id);
          getPerson(responseData.cast[1].id);
          cast.push(responseData.cast[1].id);
          getPerson(responseData.cast[2].id);
          cast.push(responseData.cast[2].id);
          
          return responseData})
        .catch(err => console.error(err));
    }

    async function getMovieDetails(id){

      let url = "https://api.themoviedb.org/3/movie/" + id + "?language=en-US";

        //id in this example is 920

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE'
            }
          };
          
          return await fetch(url, options)
        .then((response) => response.json())
        .then((responseData) => {
          poster = responseData.poster_path;
          releaseDate = responseData.release_date;
          clues.push(responseData.release_date);
          summary = responseData.overview;
          clues.push(responseData.overview);
          imdbLink = responseData.imdb_id;
          return responseData})
        .catch(err => console.error(err));


            //Poster    http://image.tmdb.org/t/p/w500/*JPG FILEPATH*

    }

    async function getPerson(id){

      let url = "https://api.themoviedb.org/3/person/" + id + "/images";

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE'
            }
          };
          
          return await fetch(url, options)
          .then((response) => response.json())
          .then((responseData) => {
            castImages.push(responseData.profiles[0].file_path);
            return responseData})
          .catch(err => console.error(err));


            //Person picture http://image.tmdb.org/t/p/w500/ *THE JPG*


    }

    function controller(button){

      if(button == "next"){

        

        
        if(hint <= 2){
          if(imageHint.classList.contains("hidden")){
            imageHint.classList.remove("hidden");
            textHint.classList.add("hidden");
          }
          imageHint.src = "http://image.tmdb.org/t/p/w500/" + castImages[hint];
          
          
        }else{

          if(textHint.classList.contains("hidden")){
            textHint.classList.remove("hidden");
            imageHint.classList.add("hidden");
            
            console.log(clues);
            console.log("test");
            textHint.innerText = "";
            textHint.innerText = clues[hint - 3];
            console.log(clues[hint - 3]);
            
          
          }

        }

        hint++;

        
        


       
      }





    }

   
    getMovie(movieName).then(response => {
      movieID = response.results[0].id;
      getMovieCast(response.results[0].id);
      getMovieDetails(response.results[0].id);

      
    });
