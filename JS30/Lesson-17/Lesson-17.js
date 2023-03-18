const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let bandSort = [];
let sortNumber = 0;
bands.sort();
let finishedArray = [];

const itemsList = document.querySelector('.itemsList');


console.log(bands);

bands.forEach(element => {

    
    
    console.log(element.startsWith("The "));

    if(element.startsWith("A ")){

        bandSort[sortNumber] = {Title: element.substring(2), Article: "A "};
   
    }else if(element.startsWith("An ")){

        bandSort[sortNumber] = {Title: element.substring(3), Article: "An "};

    }else if(element.startsWith("The ")){

        bandSort[sortNumber] = {Title: element.substring(4), Article: "The "};

    }else{

        bandSort[sortNumber] = {Title: element, Article: ""};
    }

    
    sortNumber++;

});

let sorted = bandSort.sort((a,b)=> {
    let ta = a.Title.toLowerCase(),
        tb = b.Title.toLowerCase();

    if(ta < tb ){
        return -1;
    }
    if (ta > tb){
        return 1;
    }

    return 0;


});



console.log(sorted);

sorted.forEach(element => {

    if(element.Article != ""){

        finishedArray.push(element.Article + element.Title);

    }else{

        finishedArray.push(element.Title);

    }

    
});

console.log(finishedArray);

console.log(itemsList);




itemsList.innerHTML = finishedArray.map((i) => {
    return `

<li>
${i}
</li>

`;

    //We have to join it because usally this will give us an array, when we want one big string
}).join('');


