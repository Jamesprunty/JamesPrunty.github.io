/* Binary Search Tree */

let center = window.innerWidth / 2;
let startHeight = 70;
let xDiff = 200;
let xDiffStart = window.innerWidth / 4;
let yDiff = 80;
let newLevel = 0;
let state = "odd";
let leftDone = false;
let rightDone = false;

class Node {
  constructor(data, left = null, right = null, posX = center, posY = startHeight, level = 0) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.posX = posX; //Stores the position x of the node to use later
    this.posY = posY;
    this.level = level;//Stores what level the node is on
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data); //The root can keep all the defaults of the new node

      addNode(this.root.data, this.root.posX, this.root.posY);


      return;
    } else {


      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {

            /*newLevel = node.level +1; //increase the node level from the previous node
            xDiff = xDiffStart; //Reset xDiff so we can change it for each level

            for(let i=0;i<node.level;i++){//For each level
              xDiff = xDiff /2; //Half the distance
            }*/

            console.log(node.left);


            node.left = new Node(data, null, null, node.posX - xDiff, node.posY + yDiff, newLevel);//The node position is relative to the previous node so each level will always be the same.

            addLine(node.posX, node.posY, node.left.posX, node.left.posY); //Add line first to it is at the bottom
            addNode(node.data, node.posX, node.posY);//Add revious node again so its on the line, since the node position is stored in the node, this makes it easy. 

            addNode(node.left.data, node.left.posX, node.left.posY); //Add new node


            return;
          } else if (node.left !== null) {

            return searchTree(node.left);

          }



        } else if (data > node.data) {
          if (node.right === null) {

            /*newLevel = node.level +1;
            xDiff = xDiffStart;

            for(let i=0;i<node.level;i++){
              xDiff = xDiff /2;
            }*/




            node.right = new Node(data, null, null, node.posX + xDiff, node.posY + yDiff, newLevel);

            addLine(node.posX, node.posY, node.right.posX, node.right.posY);
            addNode(node.right.data, node.right.posX, node.right.posY);
            addNode(node.data, node.posX, node.posY);


            return;
          } else if (node.right !== null) {

            return searchTree(node.right);
          }



        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }



  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return [current.posX, current.posY];
  }




  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }



  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        };
        if (node.right != null) {
          Q.push(node.right);
        };
      };
      return result;
    } else {
      return null;
    };
  };
}



var bst = new BST();
bst.add(20);




/*
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());*/

function addNode(value, x, y) {


  let svg = document.querySelector("#treeSVG");

  const svgns = "http://www.w3.org/2000/svg";

  let newCircle = document.createElementNS(svgns, "circle");

  newCircle.setAttribute("cy", y);
  newCircle.setAttribute("cx", x);
  newCircle.setAttribute("r", "25");
  newCircle.setAttribute("stroke", "white");


  svg.appendChild(newCircle);

  let newText = document.createElementNS(svgns, "text");
  newText.setAttributeNS(null, "y", y);
  newText.setAttributeNS(null, "x", x);
  newText.setAttributeNS(null, "stroke", "white");
  newText.setAttributeNS(null, "text-anchor", "middle");
  var textNode = document.createTextNode(value);
  newText.appendChild(textNode);

  svg.appendChild(newText);

}

function addLine(fromX, fromY, toX, toY) {

  let svg = document.querySelector("#treeSVG");

  const svgns = "http://www.w3.org/2000/svg";
  let newLine = document.createElementNS(svgns, "line");
  newLine.setAttribute("x1", fromX);
  newLine.setAttribute("y1", fromY);
  newLine.setAttribute("x2", toX);
  newLine.setAttribute("y2", toY);
  newLine.setAttribute("stroke-width", 1);
  newLine.setAttribute("stroke", "white");
  newLine.setAttribute("z-index", "-1");

  svg.appendChild(newLine);

}

let elem = document.querySelector("#elem");
let buttons = document.querySelectorAll(".btn");
let outputText = document.querySelector("#outputText");

buttons.forEach(element => {
  element.addEventListener('click', function () {

    switch (this.id) {

      case "add":
        if (elem.value > 0) {
          console.log(elem.value);
          bst.add(parseInt(elem.value));
        } else {

          outputText.innerText = "Please enter a number in the value box."

        }

        elem.value = "";
        break;

      case "find":
        if (elem.value > 0) {


          let posValue = (bst.find(parseInt(elem.value)));

          if (posValue != null) {

            outputText.innerText = "x = " + posValue[0] + " y = " + posValue[1];

          } else {

            outputText.innerText = "That value is not in the tree"

          }




        } else {

          outputText.innerText = "Please enter a number in the value box."

        }
        elem.value = "";
        break;

      case "isPresent":
        if (elem.value > 0) {
          outputText.innerText = bst.isPresent(parseInt(elem.value));
        } else {

          outputText.innerText = "Please enter a number in the value box."

        }

        elem.value = "";
        break;


      case "remove":
        if (elem.value > 0) {



        } else {

          outputText.innerText = "Please enter a number in the value box."

        }

        elem.value = "";
        break;

      case "reset":
        bst = null;
        bst = new BST();

        let svg = document.querySelector("#treeSVG");

        svg.textContent("")


        break;
    }

  })
});

/*let add = document.querySelector("#add");
let find = document.querySelector("#find");
let isPresent = document.querySelector("#isPresent");
let remove = document.querySelector("#remove");
let findMin = document.querySelector("#findMax");*/
