//Access Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI4YWM0OTljNmZlMjk2MmY1YTkyYTdkZGI3OTZjNyIsInN1YiI6IjY0OTE4MGZmYzJmZjNkMDBmZmJkNDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5a_itJxBFkx802Y3tIk2BLJx0MuLWNJXbdTbFXKZVE

//Person





let movieName = generateMovie();
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
let guesses = 0;

let imageHint = document.querySelector("#imageHint");
let textHint = document.querySelector("#textHint");
let nextHint = document.querySelector("#nextHint");
let hint1 = document.querySelector("#hint1");
let hint2 = document.querySelector("#hint2");
let hint3 = document.querySelector("#hint3");
let hint4 = document.querySelector("#hint4");
let hint5 = document.querySelector("#hint5");
let submit = document.querySelector("#submit");
let input = document.querySelector("#input");

nextHint.addEventListener('click', function(){
  controller("next");
});
hint1.addEventListener('click', function(){
  controller("hint1");
});
hint2.addEventListener('click', function(){
  controller("hint2");
});
hint3.addEventListener('click', function(){
  controller("hint3");
});
hint4.addEventListener('click', function(){
  controller("hint4");
});
hint5.addEventListener('click', function(){
  controller("hint5");
});
submit.addEventListener('click', function(){
  controller("submit");
})










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
            //imageHint.src = "http://image.tmdb.org/t/p/w500/" + responseData.profiles[0].file_path;
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
            imageHint.src = "http://image.tmdb.org/t/p/w500/" + castImages[0];
            return responseData})
          .catch(err => console.error(err));


            //Person picture http://image.tmdb.org/t/p/w500/ *THE JPG*


    }

    function controller(button){




      console.log(button);

      if(button == "next"){

        
      if(hint == 1){
        hint2.classList.remove("hidden");
        if(imageHint.classList.contains("hidden")){
          imageHint.classList.remove("hidden");
          textHint.classList.add("hidden");
        }
        console.log(imageHint);

        console.log(castImages);
        console.log(cast);

        imageHint.src = "http://image.tmdb.org/t/p/w500/" + castImages[1];

      }else if(hint == 2){
        hint3.classList.remove("hidden");
        if(imageHint.classList.contains("hidden")){
          imageHint.classList.remove("hidden");
          textHint.classList.add("hidden");
        }
        console.log(imageHint);

        console.log(castImages);
        console.log(cast);
        imageHint.src = "http://image.tmdb.org/t/p/w500/" + castImages[2];

      }else if(hint == 3){
        hint4.classList.remove("hidden");
        if(textHint.classList.contains("hidden")){
          textHint.classList.remove("hidden");
          imageHint.classList.add("hidden");
        }

          console.log(clues);
          console.log("test");
          textHint.innerText = "";

          textHint.innerText = "Release Date: " + clues[hint - 3];

      }else if (hint == 4){
        hint5.classList.remove("hidden");
          if(textHint.classList.contains("hidden")){
            textHint.classList.remove("hidden");
            imageHint.classList.add("hidden");
          }

            console.log(clues);
            console.log("test");
            textHint.innerText = "";

            clues[1] = clues[1].substring(0,100) + "...";

            textHint.innerText = "Synopsis: " + clues[hint - 3];
    
            nextHint.value = "Give Up";


      }else if(hint == 5){
        console.log("YOU LOSE");
        endGame("lose");
      }
      
            hint++;

           

        }

      if(button == "hint1"){

        if(imageHint.classList.contains("hidden")){
          imageHint.classList.remove("hidden");
          textHint.classList.add("hidden");
        }

        console.log(castImages);
        console.log(cast);

        imageHint.src = "http://image.tmdb.org/t/p/w500/" + castImages[0];

      }else if(button == "hint2"){

        if(imageHint.classList.contains("hidden")){
          imageHint.classList.remove("hidden");
          textHint.classList.add("hidden");
        }

        imageHint.src = "http://image.tmdb.org/t/p/w500/" + castImages[1];

      }else if(button == "hint3"){

        if(imageHint.classList.contains("hidden")){
          imageHint.classList.remove("hidden");
          textHint.classList.add("hidden");
        }

        imageHint.src = "http://image.tmdb.org/t/p/w500/" + castImages[2];

      }else if(button == "hint4"){

        if(textHint.classList.contains("hidden")){
          textHint.classList.remove("hidden");
          imageHint.classList.add("hidden");
        }

        textHint.innerText = "";

        textHint.innerText = "Release Date: " + clues[0];

      }else if(button == "hint5"){

        if(textHint.classList.contains("hidden")){
          textHint.classList.remove("hidden");
          imageHint.classList.add("hidden");
        }

        textHint.innerText = "";

        textHint.innerText = "Synopsis: " + clues[1];
      }

      

      if(button ==  "submit"){

        if(input.value.toLowerCase() == movieLower){
          guesses++;


          endGame("win");

          console.log("YOU HAD: " + guesses + " GUESSES")

          console.log("WIN PAGE");


        }else{

          if(hint == 5){

            guesses++;

            endGame("lose");
          }


        }


      }

    }

   
    getMovie(movieName).then(response => {
      movieID = response.results[0].id;
      getMovieCast(response.results[0].id);
      getMovieDetails(response.results[0].id);

      
    });


    function endGame(result){

      console.log(result);

      /*textHint.innerHTML = `
      <h1> Unlucky!</h1><br><br>
      <p>Guesses: ${guesses}`*/

      console.log("LOSE PAGE")

    }

    function generateMovie(){

      let movies = [
        ["The Rescuers Down Under"],
        ["Thunder Force"],
        ["Beauty and the Beast"],
        ["Alice in Wonderland"],
        ["Cinderella"],
        ["Hawkeye"],
        ["Father of the Bride"],
        ["Hook"],
        ["Marry Me"],
        ["Moon Knight"],
        ["The Rocketeer"],
        ["Druk"],
        ["Lightyear"],
        ["Strange World"],
        ["What About Bob?"],
        ["Batman Returns"],
        ["The Proposal"],
        ["Encino Man"],
        ["Home Alone 2: Lost in New York"],
        ["Housesitter"],
        ["The Mighty Ducks"],
        ["Up"],
        ["Reservoir Dogs"],
        ["Sister Act"],
        ["Life as We Know It"],
        ["The Invention of Lying"],
        ["Thor: Love and Thunder"],
        ["Cool Runnings"],
        ["Dennis the Menace"],
        ["Yes Man"],
        ["Groundhog Day"],
        ["Grumpy Old Men"],
        ["Jurassic Park"],
        ["Night at the Museum: Battle of the Smithsonian"],
        ["Sister Act 2: Back in the Habit"],
        ["Eddie the Eagle"],
        ["Tombstone"],
        ["Ms. Marvel"],
        ["Spider-Man: No Way Home"],
        ["The Vicar of Dibley"],
        ["D2: The Mighty Ducks"],
        ["Ant-Man and the Wasp: Quantumania"],
        ["Forrest Gump"],
        ["Twilight"],
        ["The Land Before Time II: The Great Valley Adventure"],
        ["The Little Rascals"],
        ["Paddington"],
        ["RiÂ¢hie RiÂ¢h"],
        ["Love Guaranteed"],
        ["The Santa Clause"],
        ["The Shawshank Redemption"],
        ["The Swan Princess"],
        ["Paul Blart: Mall Cop"],
        ["The Duke"],
        ["Pride and Prejudice"],
        ["Apollo 13"],
        ["Batman Forever"],
        ["Braveheart"],
        ["Morning Glory"],
        ["Clueless"],
        ["Father of the Bride Part II"],
        ["Shutter Island"],
        ["French Kiss"],
        ["Grumpier Old Men"],
        ["Jumanji"],
        ["Julie & Julia"],
        ["The Ugly Truth"],
        ["Sabrina"],
        ["Sense and Sensibility"],
        ["Toy Story"],
        ["While You Were Sleeping"],
        ["101 Dalmatians"],
        ["Glass Onion"],
        ["Big Night"],
        ["D3: The Mighty Ducks"],
        ["Dune: Part One"],
        ["Emma"],
        ["Happy Gilmore"],
        ["Independence Day"],
        ["Muppet Treasure Island"],
        ["Space Jam"],
        ["Anastasia"],
        ["Batman & Robin"],
        ["Flubber"],
        ["George of the Jungle"],
        ["Good Will Hunting"],
        ["Hercules"],
        ["Home Alone 3"],
        ["Hope Floats"],
        ["One Chance"],
        ["Mouse Hunt"],
        ["Harry Potter and the Deathly Hallows: Part 2"],
        ["Titanic"],
        ["Toy Story 2"],
        ["The Truman Show"],
        ["Chicken Run"],
        ["Ever After"],
        ["The Green Mile"],
        ["The Lord of the Rings: The Fellowship of the Ring"],
        ["Mulan"],
        ["The Prince of Egypt"],
        ["Rush Hour"],
        ["Tarzan"],
        ["The Wedding Singer"],
        ["X-Men"],
        ["The Emperor's New Groove"],
        ["Doctor Strange"],
        ["The World's End"],
        ["Brave"],
        ["Zookeeper"],
        ["Dr. Horrible's Sing-Along Blog"],
        ["Iron Man 2"],
        ["Analyze This"],
        ["Notting Hill"],
        ["The Twilight Saga: New Moon"],
        ["Venom"],
        ["X: First Class"],
        ["The Spy Next Door"],
        ["Madagascar 3: Europe's Most Wanted"],
        ["Date Night"],
        ["Luca"],
        ["Only Murders in the Building"],
        ["You've Got Mail"],
        ["Pirates of the Caribbean: On Stranger Tides"],
        ["Iron Man Three"],
        ["Kung Fu Panda 2"],
        ["Going the Distance"],
        ["Despicable Me"],
        ["The Twilight Saga: Breaking Dawn - Part 1"],
        ["The Matrix"],
        ["Treasure Planet"],
        ["Emma"],
        ["The Book of Boba Fett"],
        ["The Hunger Games"],
        ["Prisoners"],
        ["Inspector Gadget"],
        ["The Wolverine"],
        ["Deadpool"],
        ["Rise of the Guardians"],
        ["Monsters University"],
        ["The Help"],
        ["Spider-Man"],
        ["The Legend of Bagger Vance"],
        ["Falling for Christmas"],
        ["Aquaman"],
        ["The Lorax"],
        ["Chalet Girl"],
        ["The Lego Movie"],
        ["The King's Speech"],
        ["A Star Is Born"],
        ["Marcel the Shell with Shoes On"],
        ["Boy"],
        ["Crazy, Stupid, Love."],
        ["Maleficent"],
        ["Disenchanted"],
        ["Midnight in Paris"],
        ["Avatar: The Way of Water"],
        ["Runaway Bride"],
        ["The Age of Adaline"],
        ["Cinderella"],
        ["Mirror Mirror"],
        ["Ice Age: Continental Drift"],
        ["Spirit: Stallion of the Cimarron"],
        ["The Lord of the Rings: The Return of the King"],
        ["The Lord of the Rings: The Two Towers"],
        ["The Twilight Saga: Breaking Dawn - Part 2"],
        ["The Sixth Sense"],
        ["Despicable Me 2"],
        ["The Legend of Korra"],
        ["Les MisÃ©rables"],
        ["Gladiator"],
        ["Moonrise Kingdom"],
        ["The Giant Mechanical Man"],
        ["Mansfield Park"],
        ["Pirates of the Caribbean: Dead Men Tell No Tales"],
        ["Black Panther"],
        ["Bicentennial Man"],
        ["A Knight's Tale"],
        ["Captain America: The Winter Soldier"],
        ["Django Unchained"],
        ["Turbo"],
        ["Safety Not Guaranteed"],
        ["The Amazing Spider-Man 2"],
        ["The Batman"],
        ["X-Men: Days of Future Past"],
        ["O Brother, Where Art Thou?"],
        ["The Hunger Games: Catching Fire"],
        ["The Hunger Games: Mockingjay - Part 1"],
        ["The Hunger Games: Mockingjay - Part 2"],
        ["Zoolander"],
        ["Toy Story 4"],
        ["The Good Dinosaur"],
        ["Thor: The Dark World"],
        ["Monsters, Inc."],
        ["Guardians of the Galaxy"],
        ["Identity Thief"],
        ["Children of Men"],
        ["Big Momma's House"],
        ["Inside Out"],
        ["Hacksaw Ridge"],
        ["Unbreakable"],
        ["About Time"],
        ["The Kid"],
        ["The Love Punch"],
        ["Big Hero 6"],
        ["Spider-Man: Homecoming"],
        ["Kung Fu Panda 3"],
        ["The Grand Budapest Hotel"],
        ["Jumanji: Welcome to the Jungle"],
        ["Frozen"],
        ["Atlantis: The Lost Empire"],
        ["The Intern"],
        ["Coco"],
        ["Duck Soup"],
        ["The Heat"],
        ["Kung Pow: Enter the Fist"],
        ["The Little Mermaid II: Return to the Sea"],
        ["Chocolat"],
        ["Harry Potter and the Sorcerer's Stone"],
        ["Bridget Jones's Diary"],
        ["Isn't It Romantic"],
        ["The Fundamentals of Caring"],
        ["The Count of Monte Cristo"],
        ["Lady and the Tramp II: Scamp's Adventure"],
        ["Maid in Manhattan"],
        ["Star Wars: Episode VIII - The Last Jedi"],
        ["Sweet Home Alabama"],
        ["Alice Through the Looking Glass"],
        ["Jojo Rabbit"],
        ["My Big Fat Greek Wedding"],
        ["Derek"],
        ["Catch Me If You Can"],
        ["The Rookie"],
        ["The Royal Tenenbaums"],
        ["Finding Nemo"],
        ["Me Before You"],
        ["Ice Age"],
        ["A Beautiful Mind"],
        ["Night at the Museum: Secret of the Tomb"],
        ["The Grinch"],
        ["The Secret Life of Pets"],
        ["Lilo & Stitch"],
        ["I Am Sam"],
        ["Beauty and the Beast"],
        ["The Importance of Being Earnest"],
        ["Mulan II"],
        ["Kingsman: The Secret Service"],
        ["Gosford Park"],
        ["The Croods: A New Age"],
        ["X2"],
        ["Ad Astra"],
        ["Zootopia"],
        ["Soul"],
        ["Harry Potter and the Chamber of Secrets"],
        ["Encanto"],
        ["Snow White and the Seven Dwarfs"],
        ["Home on the Range"],
        ["Shanghai Knights"],
        ["The Jungle Book"],
        ["The Santa Clause 2"],
        ["Spy"],
        ["Artemis Fowl"],
        ["Two Weeks Notice"],
        ["Gone with the Wind"],
        ["Spider-Man 2"],
        ["Cars"],
        ["The Incredibles"],
        ["Fantastic Beasts and Where to Find Them"],
        ["Elf"],
        ["Esio Trot"],
        ["Freaky Friday"],
        ["A Beautiful Day in the Neighborhood"],
        ["Cruella"],
        ["Piglet's Big Movie"],
        ["Pirates of the Caribbean: The Curse of the Black Pearl"],
        ["Brother Bear"],
        ["The Philadelphia Story"],
        ["Harry Potter and the Goblet of Fire"],
        ["The Shop Around the Corner"],
        ["13 Going on 30"],
        ["Something's Gotta Give"],
        ["Eternal Sunshine of the Spotless Mind"],
        ["X-Men: Apocalypse"],
        ["Murder on the Orient Express"],
        ["Bambi"],
        ["The SpongeBob SquarePants Movie"],
        ["Black Widow"],
        ["Captain America: Civil War"],
        ["Ocean's Twelve"],
        ["Raising Helen"],
        ["Thor: Ragnarok"],
        ["Madagascar"],
        ["Moana"],
        ["The Secret Life of Walter Mitty"],
        ["Cars 3"],
        ["Incredibles 2"],
        ["Confessions of a Teenage Drama Queen"],
        ["First Daughter"],
        ["Inglourious Basterds"],
        ["The Terminal"],
        ["Shaun of the Dead"],
        ["The Room"],
        ["The Village"],
        ["National Treasure"],
        ["Jurassic World"],
        ["Chicken Little"],
        ["The Hitchhiker's Guide to the Galaxy"],
        ["Iron Man"],
        ["Kong: Skull Island"],
        ["Bewitched"],
        ["X-Men: The Last Stand"],
        ["The Perfect Man"],
        ["Ratatouille"],
        ["Pirates of the Caribbean: Dead Man's Chest"],
        ["Dumbo"],
        ["The Boss Baby"],
        ["Guardians of the Galaxy Vol. 2"],
        ["A Lot Like Love"],
        ["Puss in Boots: The Last Wish"],
        ["The Pacifier"],
        ["Nanny McPhee"],
        ["Tangled"],
        ["John Carter"],
        ["Last Holiday"],
        ["The Lego Batman Movie"],
        ["Fantastic Beasts: The Crimes of Grindelwald"],
        ["Fantastic Beasts: The Secrets of Dumbledore"],
        ["Shrek the Third"],
        ["Spider-Man 3"],
        ["Pride & Prejudice"],
        ["In the Good Old Summertime"],
        ["The Inspector General"],
        ["Captain Marvel"],
        ["Avengers: Infinity War"],
        ["Avengers: Endgame"],
        ["300"],
        ["Becoming Jane"],
        ["Avatar: The Last Airbender"],
        ["North & South"],
        ["Harry Potter and the Half-Blood Prince"],
        ["Stranger Than Fiction"],
        ["Surf's Up"],
        ["Cinderella"],
        ["Hot Fuzz"],
        ["Just Like Heaven"],
        ["Failure to Launch"],
        ["Fantastic Mr. Fox"],
        ["Just Friends"],
        ["V for Vendetta"],
        ["Next"],
        ["Toy Story 3"],
        ["Alita: Battle Angel"],
        ["Ice Age: The Meltdown"],
        ["Royal Wedding"],
        ["Kung Fu Panda"],
        ["Blades of Glory"],
        ["Scott Pilgrim vs. the World"],
        ["Un peu, beaucoup, aveuglÃ©ment!"],
        ["Hans Christian Andersen"],
        ["Paddington 2"],
        ["Bambi II"],
        ["Shazam!"],
        ["Puss in Boots"],
        ["Pirates of the Caribbean: At World's End"],
        ["Singin' in the Rain"],
        ["Frozen II"],
        ["Good Luck Chuck"],
        ["The Santa Clause 3: The Escape Clause"],
        ["Calamity Jane"],
        ["Mulan"],
        ["Land of the Lost"],
        ["Nacho Libre"],
        ["The Holiday"],
        ["The Devil Wears Prada"],
        ["Pinocchio"],
        ["Enchanted"],
        ["The Simpsons Movie"],
        ["Step Up"],
        ["Spider-Man: Into the Spider-Verse"],
        ["Llamageddon"],
        ["National Treasure: Book of Secrets"],
        ["Brother Bear 2"],
        ["There Will Be Blood"],
        ["Hunt for the Wilderpeople"],
        ["Early Man"],
        ["Klaus"],
        ["Hail, Caesar!"],
        ["White Christmas"],
        ["Norbit"],
        ["Night at the Museum"],
        ["No Country for Old Men"],
        ["Daddy Long Legs"],
        ["Madagascar: Escape 2 Africa"],
        ["The Croods"],
        ["The SpongeBob Movie: Sponge on the Run"],
        ["The Prestige"],
        ["Lady and the Tramp"],
        ["Hidden Figures"],
        ["Jurassic World: Fallen Kingdom"],
        ["The Court Jester"],
        ["Something Borrowed"],
        ["Eagle vs Shark"],
        ["The Man Who Knew Too Much"],
        ["Split"],
        ["The Ten Commandments"],
        ["Avatar"],
        ["Mary Poppins Returns"],
        ["Funny Face"],
        ["Love in the Afternoon"],
        ["Ant-Man and the Wasp"],
        ["Morbius"],
        ["Raya and the Last Dragon"],
        ["The Secret Life of Pets 2"],
        ["Minions: The Rise of Gru"],
        ["Mrs. Harris Goes to Paris"],
        ["Houseboat"],
        ["Kimi no na wa."],
        ["Operation Petticoat"],
        ["Sleeping Beauty"],
        ["Some Like It Hot"],
        ["F9"],
        ["One Hundred and One Dalmatians"],
        ["Wish Dragon"],
        ["Charade"],
        ["Cats"],
        ["The Sword in the Stone"],
        ["Phantom Thread"],
        ["Spies in Disguise"],
        ["Send Me No Flowers"],
        ["The Laundromat"],
        ["PokÃ©mon: Detective Pikachu"],
        ["The Lion King"],
        ["Aladdin"],
        ["The Aeronauts"],
        ["Doctor Dolittle"],
        ["2001: A Space Odyssey"],
        ["Chitty Chitty Bang Bang"],
        ["Spider-Man: Far from Home"],
        ["The Lion in Winter"],
        ["The Odd Couple"],
        ["The AristoCats"],
        ["Dark Phoenix"],
        ["A Quiet Place"],
        ["Dolittle"],
        ["Everything Everywhere All at Once"],
        ["Trouble"],
        ["Guardians of the Galaxy Vol. 3"],
        ["Glass"],
        ["Mirai no Mirai"],
        ["Johnny English Strikes Again"],
        ["The Boss Baby: Family Business"],
        ["Robin Hood"],
        ["Venom: Let There Be Carnage"],
        ["Once Upon a Time in... Hollywood"],
        ["Onward"],
        ["Over the Moon"],
        ["Ron's Gone Wrong"],
        ["Into the Wild"],
        ["The Many Adventures of Winnie the Pooh"],
        ["Death on the Nile"],
        ["The Rescuers"],
        ["Grease"],
        ["The Princess and the Frog"],
        ["Over Her Dead Body"],
        ["They Shall Not Grow Old"],
        ["The Muppet Movie"],
        ["Jumanji: The Next Level"],
        ["The Mitchells vs the Machines"],
        ["Red Notice"],
        ["Jurassic World Dominion"],
        ["Lady and the Tramp"],
        ["Turning Red"],
        ["The Mandalorian"],
        ["Interstellar"],
        ["The Fox and the Hound"],
        ["A Quiet Place Part II"],
        ["The Darjeeling Limited"],
        ["Obi-Wan Kenobi"],
        ["Eurovision Song Contest: The Story of Fire Saga"],
        ["Nine"],
        ["100% Wolf"],
        ["Back to the Future"],
        ["Clue"],
        ["How to Train Your Dragon"],
        ["Shrek Forever After"],
        ["Knives Out"],
        ["Eternals"],
        ["Ferris Bueller's Day Off"],
        ["WALLÂ·E"],
        ["The Great Mouse Detective"],
        ["Loki"],
        ["WandaVision"],
        ["The Legend of Tarzan"],
        ["The Falcon and the Winter Soldier"],
        ["Emma."],
        ["Harry Potter and the Deathly Hallows: Part 1"],
        ["Spider-Man: Across the Spider-Verse"],
        ["Overboard"],
        ["Shang-Chi and the Legend of the Ten Rings"],
        ["The Princess Bride"],
        ["Spaceballs"],
        ["Doctor Strange in the Multiverse of Madness"],
        ["The Amazing Spider-Man"],
        ["A Fish Called Wanda"],
        ["The Naked Gun: From the Files of Police Squad!"],
        ["Oliver & Company"],
        ["Batman"],
        ["Cranford"],
        ["17 Again"],
        ["See No Evil, Hear No Evil"],
        ["When Harry Met Sally..."],
        ["Back to the Future Part III"],
        ["Home Alone"]
        ]
      

      console.log(movies.length);



      let randomNum = Math.floor(Math.random() * movies.length);
      console.log(randomNum);
      console.log(movies[randomNum]);

      return movies[randomNum][0];


    }



    //Enter to submit
    //Clear text on submit
    //Do lose and win pages
    //ResetGame
    
