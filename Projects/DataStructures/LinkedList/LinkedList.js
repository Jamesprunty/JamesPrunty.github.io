/* LinkedList */

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    if(head == null){
      return "The list is empty";
    }else{
      return [head.element];
    }
    
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function (element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        if(currentNode == null){
          return false;
        }
      }

      previousNode.next = currentNode.next;

    }

    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    var currentNode = head;
    var index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
        if(currentNode == null){
          return false;
        }
      }

      currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function (index) {
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next
    }
    return currentNode.element;

  };

  this.nodeAt = function (index) {

    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next
    }
    return currentNode;

  };


  this.addAt = function (index, element) {
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  }

  this.removeAt = function (index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next
    }
    length--;
    return currentNode.element;
  }

}

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());

var linkedL = new LinkedList();

linkedL.add('Kitten');
//linkedL.add('Puppy');
//linkedL.add('Dog');
//linkedL.add('Cat');
//linkedL.add('Fish');

let linkedList = document.querySelector("#linkedList");
let value = document.querySelector("#value");
let index = document.querySelector("#index");
let output = document.querySelector("#outputText");

let buttons = document.querySelectorAll(".btn");
buttons.forEach(element => {
  element.addEventListener('click', function () {

    switch (this.id) {

      //ADD IF VALUE EMPTY && What happens if null

      case "add":

      if(value.value != ""){
        linkedL.add(value.value);
        updateList();
        value.value = "";
        index.value = "";

      }else{
        output.innerHTML = "Please enter a value."
      }

        break;

        case "remove":
        if(value.value != ""){

          if(!linkedL.remove(value.value)){
            output.innerHTML = "The value is not in the list"
          }

        linkedL.remove(value.value);
        updateList();
        value.value = "";
        index.value = "";


      }else{
        output.innerHTML = "Please enter a value."
      }
        break;


        case "indexOf":
          if(value.value != ""){


            if(linkedL.indexOf(value.value)==-1){
              output.innerHTML = "The value does not exist.";

            }else{
              output.innerHTML = linkedL.indexOf(value.value);
              updateList();
              value.value = "";
              index.value = "";

            }

      }else{
        output.innerHTML = "Please enter a value."
      }
        break;


        case "elementAt":
          if(index.value != ""){

            if(index.value > linkedL.size()){
              output.innerHTML = "The index does not exist."

            }else{
              
        output.innerHTML = linkedL.elementAt(index.value);
        updateList();
        value.value = "";
        index.value = "";

            }

      }else{
        output.innerHTML = "Please enter an Index."
      }
        break;
        

        case "addAt":

   

          if(index.value >= 0 && value.value != ""){

            if(index.value > linkedL.size()){

              output.innerHTML = "The index does not exist."

            }else{
            linkedL.addAt(parseInt(index.value), value.value);
            updateList();
            value.value = "";
            index.value = "";
            }

          }else{
            output.innerHTML = "Please enter a value and Index."
          }



        break;

        case "removeAt":

        if(index.value >= 0){

          if(index.value > linkedL.size()){

            output.innerHTML = "The index does not exist."

          }else{

            linkedL.removeAt(parseInt(index.value));
            updateList();
            value.value = "";
            index.value = "";

          }


      }else{
        output.innerHTML = "Please enter a value and Index."
      }
        break;

        case "size":

        output.innerHTML = linkedL.size();
        updateList();
        value.value = "";
        index.value = "";
        break;

        case "head":

          output.innerHTML = linkedL.head();
          updateList();
          value.value = "";
          index.value = "";



        break;

        case "isEmpty":

        output.innerHTML = linkedL.isEmpty();
        updateList();
        value.value = "";
        index.value = "";
        break;



    }


  })
});


function updateList() {

  linkedList.innerHTML = "";

  let dataFinish = "";

  var listArray = [];

  for (let i = 0; i < linkedL.size(); i++) {
    listArray.push([linkedL.nodeAt(i), linkedL.nodeAt(i + 1)]);
  };

  if (linkedL.size() == 1) {

    data = `<div class="listItem ">
      <div class="index listData"><p>Index: ${0}</p></div>
      <div class="element listData"><p>Element: ${listArray[0][0].element}</p></div>
      <div  class="next listData"><p>*End of List*</p></div>
      </div>`;

      console.log("TESTS");

    dataFinish += data;

    linkedList.innerHTML = dataFinish;

  } else {

  for (let i = 0; i < listArray.length - 1; i++) {



      if (listArray[i][1].element) {
        console.log(listArray[i][0].element);
        console.log(listArray[i][1].element);
        let data = "";

        if (i == 0) {
          data = `<div class="listItem">
                      <div class="index listData"><p>Index: ${i}</p></div>
                      <div class="element listData"><p>Element: ${listArray[i][0].element}</p></div>
                      <div class="next listData"><p>Link: ${listArray[i][1].element}</p></div>
                      </div>`;

        } else {
          data = `<div class="listItem">
                      <div class="index listData"><p>Index: ${i}</p></div>
                      <div class="element listData"><p>Element: ${listArray[i][0].element}</p></div>
                      <div  class="next listData"><p>Link: ${listArray[i][1].element}</p></div>
                    </div>`;

        }

        dataFinish += data;

        if (i == listArray.length - 2) {
          data = `<div class="listItem ">
                      <div class="index listData"><p>Index: ${i + 1}</p></div>
                      <div class="element listData"><p>Element: ${listArray[i+1][0].element}</p></div>
                      <div  class="next listData"><p>*End of List*</p></div>
                      </div>`;

          dataFinish += data;

        }
      }

    }

    linkedList.innerHTML = dataFinish;

  }


}

updateList();


