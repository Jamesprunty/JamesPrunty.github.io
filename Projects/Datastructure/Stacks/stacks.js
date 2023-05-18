/* Stacks! */

// functions: push, pop, peek, length

var letters = []; // this is our stack

var word = "freeCodeCamp"

var rword = "";//This is the reversed word to check

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
   letters.push(word[i]); //Create an array with each letter as a separate string.
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
   rword += letters.pop(); //This will pop each letter off in the reverse order
}

if (rword === word) {
   console.log(word + " is a palindrome.");
}
else {
   console.log(word + " is not a palindrome.");
}



// Creates a stack
var Stack = function() {
    this.count = 0; //Starts the stack with 0
    this.storage = {}; //Creates an empty array
  
    // Adds a value onto the end of the stack
    this.push = function(value) {//This is the push function and requires a value
        this.storage[this.count] = value;//Add to the storage, the value at the count (which is the total amount)
        this.count++; //Add one to the count so it keeps up. 
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) { //If there is nothing in the stack
            return undefined; //Return 0
        }

        this.count--; //Take one off the count
        var result = this.storage[this.count];//Then retun the storage at the count amount
        delete this.storage[this.count]; //Then delete it from the stack
        return result; 
    }
    
    this.size = function() {
        return this.count; //Return the count
    }
    
    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1]; //Returns the last item in the stack without deleting it
    }
}




let newStack = new Stack();


let push = document.querySelector("#push");
let newElem = document.querySelector("#newElem");
let pop = document.querySelector("#pop");
let peek = document.querySelector("#peek");
let length = document.querySelector("#length");
let stack = document.querySelector("#stack");
let outputText = document.querySelector("#outputText");

let dataFinish = {};

let buttons = document.querySelectorAll(".btn");
buttons.forEach(element => {
    element.addEventListener('click', function(){

        console.log(this.id);

        if(this.id == "push"){

            if(newElem.value !== ""){

                newStack.push(newElem.value);
                updateStack();
                newElem.value = "";

            }else{
                outputText.innerText = "Please enter a value";
            }




        }else if(this.id == "pop"){

            outputText.innerText = newStack.pop();
            updateStack();

           

        }else if (this.id == "peek"){

            outputText.innerText = newStack.peek();

            

        }else if(this.id == "length"){

            outputText.innerText =newStack.size();

        }



    })
});

function updateStack(){

    dataFinish = "";


    for(i=0;i<newStack.size();i++){

        let data = `<div class="stackItem"><p>${newStack.storage[i]}</p></div>`;
       
        dataFinish += data;

        

    }

    let dataComplete = JSON.stringify(dataFinish);

    dataComplete[0] = ";"

    console.log(dataComplete);



    stack.innerHTML = dataFinish;
    


}

