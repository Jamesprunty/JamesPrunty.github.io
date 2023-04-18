// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

//This will go through every one of the inventors and run the function for each

/*
const fifteen = inventors.filter(function(inventor){
    //If the inventor was in the 1500s
    if (inventor.year >= 1500 && inventor.year < 1600){
    //Keep it, if it is false or null it will not keep it
    return true;
  }});
*/

//The code above can be shortened to the below code

const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);



// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
//Map takes an array, does something with it then outputs the same length

//const fullNames = inventors.map(inventor => inventor.first + inventor.last);

//The above line can be done in the following way

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

//It will always return the same amount.


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

//You get two items it compares them then puts it before or after depending if it is more or not

/*
const ordered = inventor.sort(function(a, b){

  if (a.year > b.year) {

    return 1;
  } else {
    return -1;
  }

  });
  */

//The above code can be shortened using a ternerary statement
//sort a and b.
//If a year is bigger than b year (? = true?)
//return one otherwise (:) return -1

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(ordered);





// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
//Reduce will allow you to buld something on each one. 
//This can take the place of doing the i for loop.

//reduce will give us a running total of what we got last time and the inventor
//return total, which is the total from last time
//Then add on the years that inventor lived. 
//You have to add the ",0" at the start as the first time around there is no total. So it is equal to undefined
const totalYears = inventors.reduce((total, inventor) => { return total + (inventor.passed - inventor.year) }, 0);
console.log(totalYears);


// 5. Sort the inventors by years lived

const oldest = inventors.sort(function (a, b) {

  const lastGuy = (a.passed - a.year);
  const nextGuy = (b.passed - b.year);
  /*
  if (lastGuy > nextGuy){
    return -1;
  }else{
    return 1;
  }
  */

  return lastGuy > nextGuy ? -1 : 1;

});

console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//To do this, we start by inspecting the site and seeing what contains all of the DOMS
// from looking at this we can see it is mw-catagory
//const catagory = document.querySelector('.mw-catagory');
//Then we call querySelector to get the links
//QuerySelector will create a node list, which does not have the map() function so we need to convert to array.
//const links = Array.from(catagory.querySelectorAll('a'));
//You can also use the following to create the array:

//const links = [...catagory.quesrySelectorAll('a')];

//The "... will take each iteration and add it as an item in the array."

//We need to get the links into text form, a good way to sort this is to put each one on its own line
/*const de = links
  .map(link => link.textContent)
  .filter(streetName => streetName.includes('de'));
  */


// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => {

  //set the last name first then split the first and last name apart 
  const [alast, afirst] = lastOne.split(', ');
  const [blast, bfirst] = nextOne.split(', ');
  //sort
  return alast > blast ? 1 : -1;
})

console.log(alpha);



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function (obj, item) {

//if we console.log(item) we would see it would go through all the items in data one by one

//We have to check if there is an item in the object already
//If there is no key of the current item in object
if(!obj[item]){
  //put in the key and make 0
  obj[item] = 0;
}
//The item will now always exist, so then we increase it by 1
obj[item]++;
//Then return the object
return obj;

//The {} is a blank object to start. 
}, {});

console.log(transportation);


