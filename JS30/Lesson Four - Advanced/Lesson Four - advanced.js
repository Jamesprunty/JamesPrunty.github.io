//Create a new object to interact with the server
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var pages = [];
var page = "";
var death = "";
var age = "";
const button = document.getElementById("btn");
var peopleArray = [];
var searchInput;

var firstName;
var lastName;
var birthDay;







// Provide 3 arguments (GET/POST, The URL, Async True/False)

function GetInfo(search) {



    searchURLTemplate = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='";
    var url = (searchURLTemplate + search + "'")
    console.log(searchInput);
    console.log(url);

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


        for (var i in data.query.pages) {
            pages.push(data.query.pages[i].pageid);
            //console.log(pages);
            //console.log(data.query.pages[i].pageid);


        }
        page = pages[0];
        console.log(page);




        const ResulturlStart = "https://en.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&pageid=";
        const ResulturlEnd = "&format=json"

        var url2 = (ResulturlStart + page + ResulturlEnd);
        console.log(url2);


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
        console.log(bDaySection);
        console.log(death);

        if (JString.search(/>Died</) < 1) {

            death = "alive"
            let now = Date.now();
            let birth = new Date(bDaySection).getTime();
            var diff = (now - birth) / 1000;
            diff /= (60 * 60 * 24);
            var years = Math.abs(Math.round(diff / 365));

            console.log(years);
            console.log(death);

            age = years - 1;

            birthDay = birth;

        } else {

            death = "dead";

            let deathDateRaw = JString.substring(dDayStart, dDayEnd);
            let deathDate = new Date(deathDateRaw).getTime();
            let birth = new Date(bDaySection).getTime();
            var diff = (deathDate - birth) / 1000;
            diff /= (60 * 60 * 24);
            var years = Math.abs(Math.round(diff / 365));

            console.log(years);
            console.log(death);

            age = years - 1;
            birthDay = birth;



        }

        console.log(age);
        console.log(firstName);
        console.log(lastName);
        console.log(birthDay);
        console.log(bDaySection);

        peopleArray.push([{f_name: firstName}, {l_name: lastName}, {bDay: bDaySection}, {ageYears: age}]);
        console.log(peopleArray);

        searchInput = "";
        page = "";
        url = "";
        url2 = "";
        pages = [];

        


    }

    
}

button.addEventListener('click', function () {

    searchInput = document.getElementById("input").value;

    GetInfo(searchInput);
});