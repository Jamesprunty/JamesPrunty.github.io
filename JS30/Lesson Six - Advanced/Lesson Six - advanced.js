const endpoint = ".//Names.json";

let names = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//Add the event listener for the search box
searchInput.addEventListener('change', displayMatches);
//We also want this to change when a key comes up, not only when you click outside of the box
searchInput.addEventListener('keyup', displayMatches);



    fetch(endpoint)
    .then(blob => blob.json())
    .then(data => names.push(...data))

console.log (names);


function findMatches(wordToMatch, names) {

    return names.filter(name => {
        const regex = new RegExp(wordToMatch, 'gi');
        return name.FullName.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, names);
    //console.log(matchArray);

    let html = matchArray.map(name => {

        const regex = new RegExp(this.value, 'gi');
        const fullName = name.FullName.replace(regex, `<span class="hl">${this.value}</span>`);
       
        
        return ` 
        <li>
            <span class="name">${fullName}</span>
        </>       
        `;
    }).join('');


    suggestions.innerHTML = html;
    

}


//console.log(names);
//console.log(JSON.stringify(names));





