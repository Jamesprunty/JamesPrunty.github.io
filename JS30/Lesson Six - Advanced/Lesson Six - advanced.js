const endpoint = ".//Names.json";

let names = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const searchBox = document.getElementById ("searchBox");





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

    document.getElementById("suggestions").classList.remove("hidden");
    document.getElementById("suggestions").classList.add("suggestions");

    

    let html = matchArray.map(name => {

        const regex = new RegExp(this.value, 'gi');

        const fullName = name.FullName.replace(regex, `<span class="hl">${this.value}</span>`);
       
        


            return ` 
            <li class="item">
                <span class="name">${fullName}</span>
            </>       
            `;


        


    }).join('');


    suggestions.innerHTML = html;

    liList = document.querySelectorAll('.suggestions li');
    var i, n = liList.length;
    for (i=0; i<n; i++)
    liList[i].addEventListener('click', function() { 
    
    console.log(this.innerText);
    let value = this.innerText;
    document.getElementById("searchBox").value = value;
    document.getElementById("suggestions").classList.add("hidden");
    document.getElementById("suggestions").classList.remove("suggestions");
    
   });

   

}


//console.log(names);
//console.log(JSON.stringify(names));





