/* Queues */

function Queue() {
    collection = [];
    this.print = function () {
        console.log(collection);
    };
    this.enqueue = function (element) {
        collection.push(element);
    };
    this.dequeue = function () {
        return collection.shift();
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
    this.get = function (i) {
        return collection[i];
    }
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');



function PriorityQueue() {
    var collection = [];
    this.printCollection = function () {
        (console.log(collection));
    };
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) { //checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };
    this.dequeue = function () {
        var value = collection.shift();
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
    this.get = function (i) {
        return collection[i];
    }
}



var pq = new PriorityQueue();

pq.enqueue(['Ace', 1]);
pq.enqueue(['King', 2]);
pq.enqueue(['Queen', 2]);
pq.enqueue(['Jack', 3]);
pq.enqueue(['10', 4]);


let enqueue = document.querySelector("#enqueue");
let enqueueP = document.querySelector("#enqueueP");
let dequeueP = document.querySelector("#dequeueP");
let dequeue = document.querySelector("#dequeue");
let front = document.querySelector("#front");
let frontP = document.querySelector("#frontP");
let sizeP = document.querySelector("#sizeP");
let size = document.querySelector("#size");
let empty = document.querySelector("#empty");
let emptyP = document.querySelector("#emptyP");
let print = document.querySelector("#print");
let printP = document.querySelector("#printP");
let queueDiv = document.querySelector("#queue");
let queueDivP = document.querySelector("#queueP");
let newElem = document.querySelector("#newElem");
let newElemP = document.querySelector("#newElemP");
let newPriorP = document.querySelector("#newPriorP");

let buttons = document.querySelectorAll(".btn");

let dataFinish1 = "";
let dataFinish2 = "";

buttons.forEach(element => {
    element.addEventListener('click', function () {


        if (this.id == "enqueue") {


            q.enqueue(newElem.value);
            updateQueues();


        } else if (this.id == "enqueueP") {

            console.log(newPriorP.value);

            if(newPriorP.value > 0 && newElemP.value != 0){
              

                let input = [newElemP.value, newPriorP.value];
                pq.enqueue(input);

            }else{

                outputTextP.innerText = "Please enter a priority & value";
                return;
             
            }

            
            updateQueues();

        } else if (this.id == "dequeue") {

            q.dequeue();
            updateQueues();

        }
        else if (this.id == "dequeueP") {

            pq.dequeue();
            updateQueues();

        }
        else if (this.id == "front") {

            outputText.innerText = q.front();

        }
        else if (this.id == "frontP") {

            outputTextP.innerText = pq.front();

        }
        else if (this.id == "size") {

            outputText.innerText = q.size();

        }
        else if (this.id == "sizeP") {

            outputTextP.innerText = pq.size();

        }
        else if (this.id == "empty") {

            outputText.innerText = q.isEmpty();

        }
        else if (this.id == "emptyP") {

            outputTextP.innerText = pq.isEmpty();

        }


    })

});

function updateQueues() {

    dataFinish1 = "";
    dataFinish2 = "";


    for (i = 0; i < q.size(); i++) {



        let data = `<div class="queueItem"><p>${q.get(i)}</p></div>`;

        dataFinish1 += data;

    }

    for (i = 0; i < pq.size(); i++) {

        let data2 = `<div class="queueItem"><p>${pq.get(i)}</p></div>`;

        dataFinish2 += data2;

    }


    queue.innerHTML = dataFinish1;
    queueP.innerHTML = dataFinish2;



}

updateQueues();



