/* Queues */

function Queue () { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift(); 
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
    this.get = function(i) {
        return collection[i];
    }
}

var q = new Queue(); 
q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();



function PriorityQueue () {
    var collection = [];
    this.printCollection = function() {
      (console.log(collection));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){ 
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++){
                 if (element[1] < collection[i][1]){ //checking priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}



var pq = new PriorityQueue(); 

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

let buttons = document.querySelectorAll(".btn");

let dataFinish1 = "";
let dataFinish2 = "";

buttons.forEach(element => {
    element.addEventListener('click', function(){


        if(this.id == "enqueue"){

          
        }else if(this.id == "enqueueP"){


        }else if(this.id == "dequeue"){

            
        }
        else if(this.id == "dequeueP"){

            
        }
        else if(this.id == "front"){

            
        }
        else if(this.id == "frontP"){

            
        }
        else if(this.id == "size"){

            
        }
        else if(this.id == "sizeP"){

            
        }
        else if(this.id == "empty"){

            
        }
        else if(this.id == "emptyP"){

            
        }
        else if(this.id == "print"){

            
        }else if(this.id == "printP"){

            
        }


    })
    
});

function updateQueues(){


    for(i=0;i<q.size();i++){

        let data = `<div class="stackItem"><p>${q.get(i)}</p></div>`;
       
        dataFinish1 += data;

        

    }

    //let dataComplete = JSON.stringify(dataFinish1);

    

    console.log(dataFinish1);

    queue.innerHTML = dataFinish1;
    


}

updateQueues();


pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
