const endpoint = ".//Names.json";

let names = [];
const searchInputData = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const searchBox = document.getElementById("searchBox");

//Lesson 4 - advanced

var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var pages = [];
var page = "";
var death = "";
var age = "";
const button = document.getElementById("btn");
const filter = document.getElementById("filter");
const sortLast = document.getElementById("sortLast");
const sortAge = document.getElementById("sortAge");
let peopleArray = [];
let peopleArrayData = [];
let peopleFilter = [];
let ordered = [];
let peopleArrayHeadings = [{"ID": "", "First Name": "", "Last Name": "", "Birth Day": "", "Alive": "", "Age": "" }];
var searchInput;
var Table = "<table><tr>";
var cells = 5;
var id = "0";


var firstName;
var lastName;
var birthDay;
tableMade = false;
rowCount = "0";


//Add the event listener for the search box
searchInputData.addEventListener('change', displayMatches);

//We also want this to change when a key comes up, not only when you click outside of the box
searchInputData.addEventListener('keyup', displayMatches);

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => names.push(...data))

console.log(names);


function findMatches(wordToMatch, names) {


    return names.filter(name => {
        const regex = new RegExp(wordToMatch, 'gi');
        return name.FullName.match(regex);
    });

}

function displayMatches() {

    if (this.value == '') {

        document.getElementById("suggestions").classList.add("hidden");
        document.getElementById("suggestions").classList.remove("suggestions");


    } else {

        const matchArray = findMatches(this.value, names);

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
        for (i = 0; i < n; i++)
            liList[i].addEventListener('click', function () {

                console.log(this.innerText);
                let value = this.innerText;
                document.getElementById("searchBox").value = value;
                document.getElementById("suggestions").classList.add("hidden");
                document.getElementById("suggestions").classList.remove("suggestions");

            });



    }
}


//console.log(names);
//console.log(JSON.stringify(names));

document.querySelector('h1').insertAdjacentHTML('afterend',
    `<table id="tableStart"><thead><tr><th>
        ${Object.keys(peopleArrayHeadings[0]).join('<th>')}</table>`)



// Provide 3 arguments (GET/POST, The URL, Async True/False)

function GetInfo(search) {

    document.getElementById("error").classList.add("hidden");





    searchURLTemplate = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='";
    var url = (searchURLTemplate + search + "'")


    xhr.open('GET', url, true);

    xhr.send();
    // Send request to the server asynchronously

    // Once request has loaded...
    xhr.onload = function () {
        // Parse the request into JSON
        var data = JSON.parse(this.response);

        // Log the data object
        // console.log(data);

        // Log the page objects
        //console.log(data.query.pages)

        // Loop through the data object
        // Pulling out the titles of each page


        for (var j in data.query.pages) {
            pages.push(data.query.pages[j].pageid);
            //console.log(pages);
            //console.log(data.query.pages[i].pageid);


        }
        page = pages[0];

        const ResulturlStart = "https://en.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&pageid=";
        const ResulturlEnd = "&format=json"

        var url2 = (ResulturlStart + page + ResulturlEnd);

        xhr2.open('GET', url2, true);
        xhr2.send();

    }

    xhr2.onload = function () {


        // Parse the request into JSON
        var data = JSON.parse(this.response);


        // Log the data object
        console.table(data);

        var text = data.parse.text;
        var name = data.parse.title;

        var nameSplit = name.split(" ");
        firstName = nameSplit[0];
        lastName = nameSplit[1];

        var JString = JSON.stringify(text);
        //console.log(JString);

        var bDayStart = JString.search(/bday/) + 7;
        var bDayEnd = bDayStart + 10;

        var dDayCheck = JString.search(/aged&#/)
        var dDayStart = dDayCheck - 20;
        var dDayEnd = dDayStart + 10;

        var ageStart = JString.search(/aged&#/);


        //console.log(dDayStart);
        //console.log(bDayStart);


        let bDaySection = JString.substring(bDayStart, bDayEnd);


        if (JString.search(/>Died</) < 1) {

            death = "alive"
            let now = Date.now();
            let birth = new Date(bDaySection).getTime();
            var diff = (now - birth);
            diff_dt = new Date(diff);
            years = diff_dt.getUTCFullYear();
            age = Math.abs(years - 1970);

            birthDay = birth;

            ++id;

        } else {

            death = "dead";

            let deathDateRaw = JString.substring(dDayStart, dDayEnd);
            let deathDate = new Date(deathDateRaw).getTime();
            let birth = new Date(bDaySection).getTime();
            var diff = (deathDate - birth);
            var diff_dt = new Date(diff);
            years = diff_dt.getUTCFullYear();
            console.log(diff_dt);

            age = Math.abs(years - 1970);

            birthDay = birth;

            ++id;

        }

        if (!age) {


            document.getElementById("error").classList.remove("hidden");

            peopleArrayData.push({ "ID": id, "First Name": firstName, "Last Name": lastName, "Birth Day": "n/a", "Alive": "n/a", "Age": "0" });
            peopleArray.push({ "ID": id, "First Name": firstName, "Last Name": lastName, "Birth Day": "n/a", "Alive": "n/a", "Age": "0" });

        } else {

            birthFormat = bDaySection.split('-');
            birthDayNew = birthFormat[2] + "/" + birthFormat[1] + "/" + birthFormat[0];


            peopleArrayData.push({ "ID": id,  "First Name": firstName, "Last Name": lastName, "Birth Day": bDaySection, "Alive": death, "Age": age });
            peopleArray.push({ "ID": id,  "First Name": firstName, "Last Name": lastName, "Birth Day": birthDayNew, "Alive": death, "Age": age });

            console.log(peopleArray);

        }

        generateTable();


        searchInput = "";
        page = "";
        url = "";
        url2 = "";
        pages = [];
        document.getElementById("searchBox").value = ""
        id = "0";



    }


}

button.addEventListener('click', function () {


    if (!tableMade) {

        document.getElementById("tableStart").remove();

    }


    searchInput = document.getElementById("searchBox").value;
    searchInputArray = searchInput.split(',');
    console.log(searchInputArray);

    if (tableMade) {

        document.getElementById("table").remove();

    }

    GetInfo(searchInputArray);
});

filter.addEventListener('click', function () {

    if (tableMade) {

        filterAge = document.getElementById("filterAge").value;
        console.log(filterAge);
        console.log(peopleArray);
        document.getElementById("table").remove();
        filterList(filterAge, peopleArray);

    }
});

sortLast.addEventListener('click', function () {


    document.getElementById("table").remove();
    console.log("testing Working");
    sort("last");


});

sortAge.addEventListener('click', function () {

    document.getElementById("table").remove();
    console.log("testing Working");
    sort("age");

});



function generateTable() {

    //Access the container using "belittlement()" 
    //Then use "insertAdjacementHTML()" to add the table tags
    //Use "Object.Keys()" to access the keys in the object
    //Then use the "join()" method to put them in <TH> as the titles
    //Once you have the titles you close them with </th>
    //Then use "map()" and "Object.values()" to go through the values and use "join()" to put them in the row


    // document.getElementById('container').insertAdjacentHTML('afterend',`<table><tr><th>${peopleArray.map(Object.keys).join('<th>')}</th><tr><TD>${peopleArray.map(e=>Object.values(e).join('<TD>')).join('<tr><TD>')}</table>`)

    let table = document.getElementById('container');




    document.querySelector('h1').insertAdjacentHTML('afterend',
        `<table id="table"><thead><tr><th>
     ${Object.keys(peopleArray[0]).join('<th>')}
    </thead><tbody><tr><td>${peopleArray.map(e => Object.values(e)
            .join('<td>')).join('<tr><td>')}</table>`)

    tableMade = true;
    rowCount++


}

function filterList(filterAge, peopleArray) {

    var peopleFilter = peopleArray.filter(function (itm) {
        return itm.Age > filterAge;


    });


    //resets array
    peopleArray.length = 0;
    //copies all of "poepleFilter" to "peopleArray" so the add person uses the filtered table
    Array.prototype.push.apply(peopleArray, peopleFilter);


    console.log(peopleArray);

    let table = document.getElementById('container');

    if (peopleFilter.length > 0) {

        document.querySelector('h1').insertAdjacentHTML('afterend',
            `<table id="table"><thead><tr><th>
        ${Object.keys(peopleArray[0]).join('<th>')}
        </thead><tbody><tr><td>${peopleArray.map(e => Object.values(e)
                .join('<td>')).join('<tr><td>')}</table>`)


    } else {


        document.querySelector('h1').insertAdjacentHTML('afterend',
            `<table id="table"><thead><tr><th>
        ${Object.keys(peopleArrayHeadings[0]).join('<th>')}</table>`)

    }



}

function sort(sortType) {



    if (sortType == "age") {

        //console.log("test123");

        peopleArray.sort(function (a, b) {

            var keyA = a.Age;
            var keyB = b.Age;

            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;

        });

    } else {



        peopleArray.sort(function (a, b) {

            var name = "Last name";

            var keyA = a["Last Name"];
            var keyB = b["Last Name"];

            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;

        });

        console.log(peopleArray);

    }

    //peopleArray.length = 0;

    Array.prototype.push.apply(peopleArray, ordered);

    document.querySelector('h1').insertAdjacentHTML('afterend',
        `<table id="table"><thead><tr><th>
        ${Object.keys(peopleArray[0]).join('<th>')}
        </thead><tbody><tr><td>${peopleArray.map(e => Object.values(e)
            .join('<td>')).join('<tr><td>')}</table>`)


};
function map() {
}





