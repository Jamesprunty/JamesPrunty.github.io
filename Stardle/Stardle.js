//Access Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE

//Person


function getMovie(){
    //Movie
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE'
        }
      };
      
      fetch('https://api.themoviedb.org/3/search/movie?query=cars&include_adult=false&language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    function getMovieCast(id){

        //id in this example is 920

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/920/credits?language=en-US', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    function getMovieDetails(id){

        //id in this example is 920

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/920?language=en-US', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));


            //Poster    http://image.tmdb.org/t/p/w500/*JPG FILEPATH*

    }

    function getPerson(id){

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE'
            }
          };
          
          fetch('https://api.themoviedb.org/3/person/887/images', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));


            //Person picture http://image.tmdb.org/t/p/w500/ *THE JPG*


    }

    getPerson(887);
    getMovie();
    getMovieCast(903);
    getMovieDetails(903);