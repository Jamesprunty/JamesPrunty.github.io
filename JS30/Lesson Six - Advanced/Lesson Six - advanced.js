const endpoint = ".//Names.json";

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//Add the event listener for the search box
searchInput.addEventListener('change', displayMatches);
//We also want this to change when a key comes up, not only when you click outside of the box
searchInput.addEventListener('keyup', displayMatches);

const names = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => names.push(...data))

console.log(names);




function findMatches(wordToMatch, names) {

    return names.filter(name => {
        const regex = new RegExp(wordToMatch, 'gi');
        return name.First.match(regex) || name.Second.match(regex) || name.Second2.match(regex) || name.Second3.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, names);
    //console.log(matchArray);
    const html = matchArray.map(name => {
        const regex = new RegExp(this.value, 'gi');
        const firstName = name.First.replace(regex, `<span class="hl">${this.value}</span>`);
        const secondName = name.Second.replace(regex, `<span class="hl">${this.value}</span>`);
        const secondName2 = name.Second2.replace(regex, `<span class="hl">${this.value}</span>`);
        const secondName3 = name.Second3.replace(regex, `<span class="hl">${this.value}</span>`);
    
        return ` 
        <li>
            <span class="name">${firstName}, ${secondName}, ${secondName2}, ${secondName3}</span>
        </>       
        `;
    }).join('');

    suggestions.innerHTML = html;

}








