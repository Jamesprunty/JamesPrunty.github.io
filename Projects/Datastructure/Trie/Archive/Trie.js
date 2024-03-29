/* Trie Data Structure */

let svg = document.querySelector("#trieSVG");
let svgSize = svg.getBoundingClientRect();
let xStart = 70;
let yCenter = svgSize.height / 4;
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



	this.add = function (input, node = this.root) {


		if (input.length == 0) {//if we are at the end of the word
			node.setEnd(); //Set end of a word
			node.colour = "red";
			addNode(node.value, node.posX, node.posY, "red", node.root);
			level = 0;
			return;

		} else if (!node.keys.has(input[0])) {//If the node does not have the key of input[0] already,

			//If this node does not exist we need to add it in.
			level++;

			if (node == this.root) {

				let newX = xStart + 70;
				let newY = yCenter;

				node.keys.set(input[0], new Node(newX, newY, node.posX, node.posY, input[0], node, "white", input[0]));

				rootArray.push(input[0]);

				if (rootArray.length <= 1) {


				} else {

					//this.update(input[0]);

					for (i = 0; i < rootArray.length - 1; i++) {

						let rootVal = rootArray[i];

						let nodes = [];
						nodes = document.querySelectorAll("." + rootArray[i]);
						nodesRoot = document.querySelectorAll("#" + rootArray[i]);
						for (let i = 0; i < nodesRoot.length; i++) {
							if (nodesRoot[i].tagName == "line") {

								nodesRoot[i].y2.baseVal.value += 25;
							}

							if (nodesRoot[i].tagName == "circle") {
								nodesRoot[i].cy.baseVal.value += 25;

								if (nodesRoot[i].classList.contains(rootVal)) {
									nodesRoot[i].remove();
								}

							}

							if (nodesRoot[i].tagName == "text") {

								nodesRoot[i].y.baseVal[0].value += 25;
								if (nodesRoot[i].classList.contains(rootVal)) {
									nodesRoot[i].remove();
								}

							}
						}

						for (let i = 0; i < nodes.length; i++) {
							if (nodes[i].tagName == "line") {

								nodes[i].y1.baseVal.value += 25;
								nodes[i].y2.baseVal.value += 25;
							}
							if (nodes[i].tagName == "circle") {
								nodes[i].cy.baseVal.value += 25;

							}

							if (nodes[i].tagName == "text") {


								nodes[i].y.baseVal[0].value += 25;

							}
						}

					}



				}



				addLine(xStart, yCenter, newX, newY, node.root, input.substr(0, 1))
				addNode(input.substr(0, 1), newX, newY, "white", node.root);
				addNode("root", xStart, yCenter, "white", node.root);


				posArray.push([newX, newY]);




			} else {



				let newX = node.posX + 70;
				let newY = node.posY;

				if(node.keys.size >= 1){
					console.log(node);
					newY = node.posY + 70;
				}



				this.update(input[0]);


				for (i = 0; i < rootArray.length - 1; i++) {

					let rootVal = rootArray[i];

					let nodes = [];
					nodes = document.querySelectorAll("." + rootArray[i]);
					nodesRoot = document.querySelectorAll("#" + rootArray[i]);
					for (let i = 0; i < nodesRoot.length; i++) {
						if (nodesRoot[i].tagName == "line") {

							nodesRoot[i].y2.baseVal.value += 25;
						}

						if (nodesRoot[i].tagName == "circle") {
							nodesRoot[i].cy.baseVal.value += 25;

							if (nodesRoot[i].classList.contains(rootVal)) {
								nodesRoot[i].remove();
							}

						}

						if (nodesRoot[i].tagName == "text") {

							nodesRoot[i].y.baseVal[0].value += 25;
							if (nodesRoot[i].classList.contains(rootVal)) {
								nodesRoot[i].remove();
							}

						}
					}

					for (let i = 0; i < nodes.length; i++) {
						if (nodes[i].tagName == "line") {

							nodes[i].y1.baseVal.value += 25;
							nodes[i].y2.baseVal.value += 25;
						}
						if (nodes[i].tagName == "circle") {
							nodes[i].cy.baseVal.value += 25;

						}

						if (nodes[i].tagName == "text") {


							nodes[i].y.baseVal[0].value += 25;

						}
					}

				}



				node.keys.set(input[0], new Node(newX, newY, node.posX, node.posY, input[0], node, "white", node.root)); //Add a key of that letter and make the contents of the key the new node, which will have its own keys

				//Next we need to add it to the visual tree.
				//We want it to dynamically change when things are added. Make a note of all the places before adding it, change if it conflicts. 


				let index = 0;
				addLine(node.posX, node.posY, newX, newY, node.root, input.substr(0, 1))
				addNode(input.substr(0, 1), newX, newY, node.colour, node.root);
				addNode(node.value, node.posX, node.posY, node.colour, node.root);
				posArray.push([newX, newY]);

				//we want to take the previous node, add 70 to X, if something is there add 70 to y, keep going until nothing is there.




			}

			return this.add(input.substr(1), node.keys.get(input[0], node));//run add node on the string again, from the first position, which will keep going until there are none left. The root node will be the new key.




		} else {
			level++;
			return this.add(input.substr(1), node.keys.get(input[0])); // If there is a key already, rerun the add method with the key as the new root node.

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

	this.update = function (root) {
		let node = this.root;

		for (let i = 0; i < rootArray.indexOf(root); i++) {

			currentNode = node.keys.get(rootArray[i]);

			function updateNodes(root) {

					function traverse(root) {
						root.posY -=70;
						root.previousY = root.previousNode.posY


						root.keys.forEach(key => {
							traverse(key);
	
						})

						if (currentNode.isEnd) {
							return;
						}
					}
					traverse(currentNode);
					return;
				
			}

			updateNodes(currentNode);
		}
	}

};

myTrie = new Trie()
myTrie.add("about");
myTrie.add("aboub");
myTrie.add("aloud");
myTrie.add("alouk");


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



