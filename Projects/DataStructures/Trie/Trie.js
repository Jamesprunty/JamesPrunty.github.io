/* Trie Data Structure */

let svg = document.querySelector("#trieSVG");
let svgSize = svg.getBoundingClientRect();
let xStart = 70;
let yCenter = svgSize.height / 2;
let xDiff = 200;
let xDiffStart = window.innerHeight / 4;
let yDiff = 80;
let newLevel = 0;

let Node = function(posX = xStart, posY = yCenter, previous, colour = "white") {
	this.keys = new Map();
	this.end = false;
	this.posX = posX; //Stores the position x of the node to use later
    this.posY = posY;
   // this.level = level;//Stores what level the node is on
	this.colour = colour;
	this.previous = previous;
	
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};

let Trie = function() {

	this.root = new Node();
	addNode("root", xStart, yCenter);
	level = 0;
	let posArray = [[xStart, yCenter]];
	let currentNode = this.root;
	let newX = 0;
	let newY = 0;
	

	this.add = function(input, node = this.root) {

		
		if (input.length == 0) {//if we are at the end of the word
			node.setEnd(); //Set end of a word
			level = 0;
			return;

		} else if (!node.keys.has(input[0])) {//If the node does not have the key of input[0] already,

			//If this node does not exist we need to add it in.
			level++;

			node.keys.set(input[0], new Node()); //Add a key of that letter and make the contents of the key the new node, which will have its own keys
			
			//Next we need to add it to the visual tree.
			//We want it to dynamically change when things are added. Make a note of all the places before adding it, change if it conflicts. 

			let newX = xStart + level*70;
			let newY = yCenter;
			let index = 0;
			addNode(input.substr(0,1), newX, newY); 
			
			//we want to take the previous node, add 70 to X, if something is there add 70 to y, keep going until nothing is there.
				


			//console.log(node.keys.get(input[0]).previous.posX);

			



			return this.add(input.substr(1), node.keys.get(input[0], node));//run add node on the string again, from the first position, which will keep going until there are none left. The root node will be the new key.
		
		
		
		} else {
			level++;
			return this.add(input.substr(1), node.keys.get(input[0])); // If there is a key already, rerun the add method with the key as the new root node.
			
		};
	};



	this.isWord = function(word) {
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) {
				return false;
			} else {
				node = node.keys.get(word[0]);
				word = word.substr(1);
			};
		};
		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? 
      true : false;
	};



	this.print = function() {
		let words = new Array();
		let search = function(node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd()) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};
		search(this.root, new String());
		return words.length > 0 ? words : mo;
	};




};

myTrie = new Trie()
myTrie.add('ball'); 
//myTrie.update();
myTrie.add('bat'); 
//myTrie.add('doll'); 
//myTrie.add('dork'); 
//myTrie.add('do'); 
//myTrie.add('dorm')
//myTrie.add('send')
//myTrie.add('sense')
//console.log(myTrie.isWord('doll'))
//console.log(myTrie.isWord('dor'))
//console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())

function addNode(value, x, y, colour) {


	let svg = document.querySelector("#trieSVG");
  
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


  console.log(svgSize.height);


