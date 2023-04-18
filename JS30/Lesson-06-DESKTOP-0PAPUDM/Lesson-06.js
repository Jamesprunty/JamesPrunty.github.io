const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');



//New method called "fetch()"
//Fetch will return a promise
//Then you put a ".then" with the promise
//The data that comes back from a fetch, it doesn't know what it is yet

fetch(endpoint)
    //This "blob" need to be converted into what you want. We want JSON
    .then(blob => blob.json())
    //This will then give us the raw data which we want
    //We then push it into cities (because its a const we can redefine it but we can push)
    //The issue is this will create an array in cities when we want cities to be the array
    //This is where we add a "spread" which is the "..."
    .then(data => cities.push(...data))

//This is the function to match the search, we push in the cities array and the word to match

function findMatches(wordToMatch, cities) {


    //This will return the cities array with the filter

    return cities.filter(place => {


        //This will look at the word to match
        // "g" means global, this means that if it comes up more than once it will show that, "i" means insensitive
        //regex is a way to string characters to make matches
        const regex = new RegExp(wordToMatch, 'gi');

        //Usually you can use this to find matches, but we need to be able to look for the string in search, thats why we use regex
        return place.city.match(regex) || place.state.match(regex);

    });
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {

    //This should take this value, which is the search box value
    //and the cities array
    //and runs them through the findMatches function 
    const matchArray = findMatches(this.value, cities);

    //This will go through all the objects in the array
    const html = matchArray.map(place => {

        //to add highlighting we want to remove the word from the place and set it in its own class
        //This sets the search value to a match item
        const regex = new RegExp(this.value, 'gi');
        //This takes the regex, it replaces that with a span, with the class of "hl"
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);


        //This will go through the array and put each object into its own place on the list
        //Replace "place.city" for "cityName" as this has the highlight
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </>   
        `;
        //This turns the array into one big string
    }).join('');

    //Put the html info into the html list
    suggestions.innerHTML = html;


}
//Add the event listener for the search box
searchInput.addEventListener('change', displayMatches);
//We also want this to change when a key comes up, not only when you click outside of the box
searchInput.addEventListener('keyup', displayMatches);


