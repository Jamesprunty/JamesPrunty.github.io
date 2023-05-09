/* Hash Table */


var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  console.log(hash%max);
  return hash % max;
};



let HashTable = function () {

  let storage = [];
  let storageLimit = 5;
  this.storageLimit = storageLimit;
  this.storage = [];


  this.print = function () {
    console.log(this.storage)
  }


  this.add = function (key, value) {
    var index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  };


  this.remove = function (key) {
    var index = hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
      return true;
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
          return true;
        }

      }

    }
    return false;
  };


  this.lookup = function (key) {
    var index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  };
};

function updateTable() {

  hashTable.innerHTML = "";


  for (let i = 0; i < ht.storageLimit; i++) {

    let data = `<div id="boxDiv${i}" class="boxDiv"> <div id="box${i}" class="HashItem"><p>${i}</p></div></div>`;

    hashTable.innerHTML += data;

    let index = i;
    if (ht.storage[i] != undefined) {
      ht.storage[i].forEach(element => {
        let childKey = "key: " + element[0];
        let childValue = "value: " + element[1];

        let dataChild = `<div id="boxChild${i}"class="HashItem"><p class="childKey info">${childKey}</p><p class="childValue info">${childValue}</div>`;

        let box = "box" + i;

        let boxDiv = document.getElementById(box);

        let newDiv = document.createElement('div');

        newDiv.innerHTML = dataChild;

        boxDiv.parentNode.prepend(newDiv);
      });

    }

  }
}

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');
ht.add('A', 'B');
ht.add('C', 'D');


updateTable();


let buttons = document.querySelectorAll(".btn");
let storageVal = document.querySelector("#storageLimit");
let output = document.querySelector("#outputText");
let key = document.querySelector("#key");
let value = document.querySelector("#value");

buttons.forEach(element => {
  element.addEventListener('click', function () {
    switch (this.id) {
      case "storageLimitbtn":
        if (storageVal.value < 30) {
          ht.storageLimit = storageVal.value;
          updateTable();
          storageVal.value = "";

        } else {
          output.innerText = "Please enter a number lower than 30";
        }

        break;
      case "add":

        console.log(key.value);
        console.log(value.value);

        if (key.value != "" && value.value != "") {

          ht.add(key.value, value.value);
          updateTable();
          key.value = "";
          value.value = "";

        } else {
          output.innerText = "Please enter a key and a value";

        }
        break;
      case "remove":

        if (key.value != "") {
          ht.remove(key.value);
          updateTable();
          key.value = "";
          value.value = "";

          if (ht.remove(key.value) === false) {
            output.innerText = "Value is not in the table";
            key.value = "";
            value.value = "";
          }

        } else {
          output.innerText = "Please enter a value to remove";
          key.value = "";
          value.value = "";
        }
        break;
      case "lookUp":
        if (key.value != "") {


          if (!ht.lookup(key.value)) {
            output.innerText = ht.lookup(key.value);
            key.value = "";
            value.value = "";
          }else{
            output.innerText = "Key does not exist in table";
          }

          console.log(output.innerText = ht.lookup(key.value));

        } else {
          output.innerText = "Please enter a key to lookup";
          key.value = "";
          value.value = "";
        }


        break;

      default:
        break;
    }
  })
});