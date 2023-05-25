/* Trie Data Structure */

let svg = document.querySelector("#trieSVG");
let svgSize = svg.getBoundingClientRect();
let xStart = 70;
let yCenter = svgSize.height / 2;
let xDiff = 200;
let xDiffStart = window.innerHeight / 4;
let yDiff = 80;
let newLevel = 0;

let Node = function (posX = xStart, posY = yCenter, previousX, previousY, value, previousNode, colour, root = "root") {
	this.keys = new Map();
	this.end = false;
	this.posX = posX; //Stores the position x of the node to use later
	this.posY = posY;
	// this.level = level;//Stores what level the node is on
	this.colour = colour;
	this.previousX = previousX;
	this.previousY = previousY;
	this.value = value;
	this.previousNode = previousNode;
	this.root = root;

	this.setEnd = function () {
		this.end = true;
	};
	this.isEnd = function () {
		return this.end;
	};
};

let Trie = function () {

	this.root = new Node();
	addNode("root", xStart, yCenter, "white");
	level = 0;
	let posArray = [[xStart, yCenter]];
	let currentNode = this.root;
	let previousNode = currentNode.previous;
	let newX = 0;
	let newY = 0;
	let rootArray = [];



	this.add = function(input, node = this.root) {
		if (input.length == 0) {
			node.setEnd();
			updateTrie();
			return;
		} else if (!node.keys.has(input[0])) {
			node.keys.set(input[0], new Node());
			return this.add(input.substr(1), node.keys.get(input[0]));
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
		};
	};



	this.isWord = function (word) {
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



	this.print = function () {
		let words = new Array();
		let search = function (node, string) {
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
myTrie.add("about");
myTrie.add("aboub");
myTrie.add("sboub");
myTrie.add("sbint");
myTrie.add("sbudt");
myTrie.add("ssudt");



let buttons = document.querySelectorAll(".btn");
let value = document.querySelector("#elem");
let output = document.querySelector("#outputText");
buttons.forEach(element => {
	element.addEventListener('click', function () {

		switch (element) {

			case add:
				if (value.value != "") {
					myTrie.add(value.value);
				} else {
					output.innerText = "Please enter a value"
				}
				value.value = "";

				break;

			case isWord:
				output.innerText = myTrie.isWord(value.value);
				break;

			case printbtn:
				output.innerText = myTrie.print();
				break;

			case reset:
				myTrie = null;
				myTrie = new Trie();
				document.querySelector("#trieSVG").innerHTML = null;
				addNode("root", xStart, yCenter, "white");
				break;
		}


	})
});



function addNode(value, x, y, colour, root) {


	let svg = document.querySelector("#trieSVG");

	const svgns = "http://www.w3.org/2000/svg";

	let newCircle = document.createElementNS(svgns, "circle");

	newCircle.setAttribute("cy", y);
	newCircle.setAttribute("cx", x);
	newCircle.setAttribute("r", "20");
	newCircle.setAttribute("stroke", colour);
	newCircle.setAttribute("id", value);
	newCircle.setAttribute("class", root);


	svg.appendChild(newCircle);

	let newText = document.createElementNS(svgns, "text");
	newText.setAttributeNS(null, "y", y);
	newText.setAttributeNS(null, "x", x);
	newText.setAttributeNS(null, "stroke", "white");
	newText.setAttributeNS(null, "text-anchor", "middle");
	newText.setAttributeNS(null, "id", value);
	newText.setAttributeNS(null, "class", root);
	var textNode = document.createTextNode(value);
	newText.appendChild(textNode);

	svg.appendChild(newText);

}

function addLine(fromX, fromY, toX, toY, root, value) {

	let svg = document.querySelector("#trieSVG");

	const svgns = "http://www.w3.org/2000/svg";
	let newLine = document.createElementNS(svgns, "line");
	newLine.setAttribute("x1", fromX);
	newLine.setAttribute("y1", fromY);
	newLine.setAttribute("x2", toX);
	newLine.setAttribute("y2", toY);
	newLine.setAttribute("stroke-width", 1);
	newLine.setAttribute("stroke", "white");
	newLine.setAttribute("z-index", "-1");
	newLine.setAttribute("class", root);
	newLine.setAttribute("id", value);

	svg.appendChild(newLine);

}

function updateNode() {



}

function updateTrie(){


	function levelFinder(){

		let node = myTrie.root;
		let rootArray = [];
		let level = 0;
		node.keys.forEach(key => {
			rootArray.push(key);
		});

		for (let i = 0; i < rootArray.length; i++) {

			currentNode = rootArray[i];

			function updateNodes(root) {

					function traverse(root) {

						if(root.keys.size > 1){
							console.log("TWST")
							level += root.keys.size;
						}

						if (currentNode.isEnd) {
							return level;
						}
						
						root.keys.forEach(key => {
							level++;
							traverse(key);
	
						})
					}
					traverse(currentNode);
				
			}

			updateNodes(currentNode);
		}
		return level;

	}

let maxLevel = levelFinder();
console.log(maxLevel);


}



