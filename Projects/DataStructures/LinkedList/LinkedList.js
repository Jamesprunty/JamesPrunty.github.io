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
    return [head.element];
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

      //ADD IF VALUE EMPTY

      case "add":

        linkedL.add(value.value);
        updateList();
        value.value = "";
        index.value = "";
        break;

        case "remove":

        linkedL.remove(value.value);
        updateList();
        value.value = "";
        index.value = "";
        break;

        case "indexOf":

        output.innerHTML = linkedL.indexOf(value.value);
        updateList();
        value.value = "";
        index.value = "";
        break;

        case "elementAt":

        output.innerHTML = linkedL.elementAt(index.value);
        updateList();
        value.value = "";
        index.value = "";
        break;

        case "addAt":

        //Add add at 0

        linkedL.addAt(parseInt(index.value), value.value);
        updateList();
        value.value = "";
        index.value = "";
        break;

        case "removeAt":

        linkedL.removeAt(parseInt(index.value));
        updateList();
        value.value = "";
        index.value = "";
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

        //ADD INDEX NUMBER TO THE DIV

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


