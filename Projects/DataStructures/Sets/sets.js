/* Sets */

function mySet() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false

    this.has = function (element) {
        return (collection.indexOf(element) !== -1);

    };


    // this method will return all the values in the set
    this.values = function () {
        return collection;
    };


    // this method will add an element to the set
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        outputText.innerText = "Set 2 already contains this value so it will not be added.";
        return false;
    };


    // this method will remove an element from a set
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };



    // this method will return the size of the collection
    this.size = function () {
        return collection.length;
    };



    // this method will return the union of two sets
    this.union = function (otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    };



    // this method will return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };



    // this method will return the difference of two sets as a new set
    this.difference = function (otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };



    // this method will test if the set is a subset of a different set
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        });
    };
}


let set1 = new mySet();
set1.add("c");
set1.add("b");
set1.add("a");
set1.add("d");
set1.add("e");
set1.add("f");

let set2 = new mySet();
set2.add("f");

let add = document.querySelector("#add");
let has = document.querySelector("#has");
let values = document.querySelector("#values");
let remove = document.querySelector("#remove");
let size = document.querySelector("#size");
let union = document.querySelector("#union");
let intersection = document.querySelector("#intersection");
let difference = document.querySelector("#difference");
let subset = document.querySelector("#subset");

let newElem = document.querySelector("#newElem");
let checkElem = document.querySelector("#checkElem");
let removeElem = document.querySelector("#removeElem");

let output = document.querySelector("#outputText");



let set1Div = document.querySelector("#set1");
let set2Div = document.querySelector("#set2");

dataFinishSet1 = "";
dataFinishSet2 = "";

let buttons = document.querySelectorAll(".btn");
buttons.forEach(element => {

    element.addEventListener('click', function () {



        if (this.id == "add") {


            console.log(newElem.value);
            set2.add(newElem.value);
            updateSet();


        } else if (this.id == "has") {

            outputText.innerText = set2.has(checkElem.value);

        } else if (this.id == "values") {

            outputText.innerText = set2.values();

        } else if (this.id == "remove") {

            set2.remove(removeElem.value);
            updateSet();

        } else if (this.id == "size") {

            outputText.innerText = set2.size();

        } else if (this.id == "union") {

            outputText.innerText = set2.union(set1).values();

        } else if (this.id == "intersection") {

            outputText.innerText = set2.intersection(set1).values();

        } else if (this.id == "difference") {

            outputText.innerText = set2.difference(set1).values();

        } else if (this.id == "subset") {

            outputText.innerText = set2.subset(set1);

        }


    });
})


function updateSet() {



    dataFinishSet1 = "";
    dataFinishSet2 = "";


    for (i = 0; i < set1.size(); i++) {

        let data = `<div class="setItem"><p>${set1.values()[i]}</p></div>`;

        dataFinishSet1 += data;



    }

    for (i = 0; i < set2.size(); i++) {

        let data = `<div class="setItem"><p>${set2.values()[i]}</p></div>`;

        dataFinishSet2 += data;



    }

    let dataComplete = JSON.stringify(dataFinishSet1);


    console.log(dataComplete);



    set1Div.innerHTML = dataFinishSet1;
    set2Div.innerHTML = dataFinishSet2;

}

updateSet();



var setA = new mySet();
var setB = new mySet();
setA.add("c");
setB.add("b");
setB.add("a");
setB.add("d");
setB.add("e");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
