/* Stacks! */


let push = document.querySelector("#push");
let newElem = document.querySelector("#newElem");
let pop = document.querySelector("#pop");
let peek = document.querySelector("#peek");
let length = document.querySelector("#length");
let stack = document.querySelector("#stack");

let buttons = document.querySelectorAll(".btn");
buttons.forEach(element => {
    element.addEventListener('click', function(){

        console.log(this.id);

        if(this.id == "push"){

           

        }else if(this.id == "pop"){

           

        }else if (this.id == "peek"){

            

        }else if(this.id == "length"){

           

        }



    })
});



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

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
