//Access Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE

//Person

let movieName = "The lego movie";
let movieID = "";
let cast = [];
let poster = "";
let castImages = [];
let releaseDate = "";
let summary = "";
let imdbLink = "";




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
          console.log(responseData);
          console.log(responseData.cast[0].name);
          getPerson(responseData.cast[0].id);
          cast.push(responseData.cast[0].id);
          console.log(responseData.cast[1].name);
          getPerson(responseData.cast[1].id);
          cast.push(responseData.cast[1].id);
          console.log(responseData.cast[2].name);
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
          console.log(poster);
          releaseDate = responseData.release_date;
          console.log(releaseDate);
          summary = responseData.overview;
          console.log(summary);
          imdbLink = responseData.imdb_id;
          console.log(imdbLink);
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
            console.log(responseData.profiles[0].file_path);
            console.log(castImages);
            return responseData})
          .catch(err => console.error(err));


            //Person picture http://image.tmdb.org/t/p/w500/ *THE JPG*


    }

   
    getMovie(movieName).then(response => {
      movieID = response.results[0].id;
      getMovieCast(response.results[0].id);
      getMovieDetails(response.results[0].id);

      
    });
