/* Hash Table */


var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };


  
  let HashTable = function() {
  
    let storage = [];
    let storageLimit = 5;
    this.storageLimit = storageLimit;
    this.storage = [];

    
    this.print = function() {
      console.log(this.storage)
    }

  
    this.add = function(key, value) {
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

  
    this.remove = function(key) {
      var index = hash(key, this.storageLimit);
      if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
        delete this.storage[index];
      } else {
        for (var i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            delete this.storage[index][i];
          }
        }
      }
    };

  
    this.lookup = function(key) {
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

  function updateTables(){

    console.log("THIS IS A TEST" );
    console.log(ht.storageLimit);
    console.log(ht.storage);

    for (let i = 0; i < ht.storageLimit; i++){
      
      let data = `<div id="box${i}"class="HashItem"><p>${i}</p></div>`;

      hashTable.innerHTML += data;

      

      for (let j = 0; j < 5; i++){

        let dataChild = `<div id="boxCHild${j}"class="HashItem"><p>${j.storage}</p></div>`;
        
        let boxName = "boxChild" + j;
        
        let boxDivs = document.querySelectorAll(".HasItem");


        boxDivs.forEach(element => {

          

          
        });

        boxDiv.innerHTML = dataChild;

      }
    }
  }
  console.log(hash('quincy', 10))
  
  let ht = new HashTable();
  ht.add('beau', 'person');
  ht.add('fido', 'dog');
  ht.add('rex', 'dinosour');
  ht.add('tux', 'penguin');
  ht.add('A', 'B');
  ht.add('C', 'D');
  console.log(ht.lookup('tux'))
  ht.print();

  updateTables();