const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];



function strip(bandName) {
    //replace any of these, i makes it not case sensitive with emptiness and then trim the extra space.
    return bandName.replace(/^(a |the |an )/i, '').trim();
}


    //This data is ONLY deciding where it goes, it is not effecting the actual array. 
    //We are stripping in the sort function, but the array is the same
   /* if (strip(a) > strip(b)) {
        return 1;
    } else {
        return -1
    }*/

    //If you are just returning you can put it all on one line
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1 );

//We use the .join to remove the commas

document.querySelector('#bands').innerHTML = 
    sortedBands.map(band => `<li>${band}</li>`)
    .join('');



console.log(sortedBands);



