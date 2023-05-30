/* Trie Data Structure */

let svg = document.querySelector("#trieSVG");
let svgSize = svg.getBoundingClientRect();
let xCentre = svgSize.width / 2;
let yStart = 70;
let xDiff = 200;
let xDiffStart = window.innerHeight / 4;
let yDiff = 80;
let newLevel = 0;

let Node = function (value, root = "root", previousNode, branch, level = 0, posX, posY) {
	this.keys = new Map();
	this.end = false;
	this.posX = posX; //Stores the position x of the node to use later
	this.posY = posY;
	this.level = level;//Stores what level the node is on
	/*this.colour = colour;
	this.previousX = previousX;
	this.previousY = previousY;*/
	this.value = value;
	this.previousNode = previousNode;
	this.root = root;
	this.branch = branch;

	this.setEnd = function () {
		this.end = true;
	};
	this.isEnd = function () {
		return this.end;
	};
};

let Trie = function () {

	this.root = new Node("root", "root", null, null, 0, xCentre, yStart);
	addNode("root", xCentre, yStart, "white");
	level = 0;
	let posArray = [[xCentre, yStart]];
	let currentNode = this.root;
	let previousNode = currentNode.previous;
	let newX = 0;
	let newY = 0;
	let rootArray = [];



	this.add = function (input, node = this.root) {
		if (input.length == 0) {
			node.setEnd();
			//updateTrie();
			return;
		} else if (!node.keys.has(input[0])) {

			if(node == this.root){
				node.keys.set(input[0], new Node(input[0], input[0], node, node.branch, node.level + 1));
			
			}else if(node.keys.size == 0){
				node.keys.set(input[0], new Node(input[0], node.root, node, node.branch, node.level + 1));

			}else{
				node.keys.set(input[0], new Node(input[0], node.root, node, node.root, node.level + 1));
				node.keys.forEach(key => {
					key.branch = node.value;
				});
			}
			


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
myTrie.add("test");
myTrie.add("terp");
myTrie.add("plot");
myTrie.add("prit");
myTrie.add("clap");
myTrie.add("prot");





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
				addNode("root", xCentre, yStart, "white");
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



function createTrie(root) {

	let before = false;
	let moveArray = [];

	let currentNode = root;

	function updateNodes(root) {

		function traverse(root) {



			root.keys.forEach(key => {


				if (key.end) {
					key.posX = root.posX;
					key.posY = root.posY + 70;
					addNode(key.value, key.posX, key.posY, "red", key.root);

					//Change colour
					return moveArray;
				}

				if(root.keys.size == 1){
					key.posX = root.posX;
					key.posY = root.posY + 70;
					addNode(key.value, key.posX, key.posY, "white", key.root);


				}else{
					let width = root.keys.size * 70 / 2 - 34;
					root.keys.forEach(key =>{
						key.posY = root.posY + 70;
						key.posX = root.posX + width;
						width -= 70;
						addNode(key.value, key.posX, key.posY, "white", key.root);
					})
					if(root != myTrie.root){
						moveArray.push([key.root, key.branch]);

					}

					/*if(root != myTrie.root){
						let rootVal = key.root;
						let status = "after";
						function splitVal(value, root){

							root.keys.forEach(key => {
								if(key.value != value){

									if(status == "after"){
										let rightSide = document.querySelectorAll(`.${key.value}`)
						
										rightSide.forEach(element => {
											if(element.tagName == "circle"){
												let tempX = element.getAttribute("cx");
												parseInt(tempX);
												let set = Number(tempX) + 15;
												
												element.setAttribute("cx", set);
											}
										});
									}else{
										let leftSide = document.querySelectorAll(`.${key.value}`)

										console.log(leftSide);
						
										leftSide.forEach(element => {
											if(element.tagName == "circle"){
												let tempX = element.getAttribute("cx");
												parseInt(tempX);
												let set = Number(tempX) - 15;
												
												element.setAttribute("cx", set);
												myTrie.root.keys.get(element.id).posX = set;

												
											}
										});
									}

								}else{
									status = "before"
								}

	
							})


						}
						splitVal(key.root, myTrie.root);
					}*/




				}
				traverse(key);

			})
		}
		traverse(currentNode);
		

	}

	updateNodes(currentNode);

	console.log(moveArray);
	//MOVE EVERYTHING AROUND
	


	return moveArray;

	


}

console.log(createTrie(myTrie.root));







/*function createTrie(root) {

	let width = root.keys.size * 70;
	let startPosition = root.posX - width / 2 + 30;

	if (root == myTrie.root) {

		root.keys.forEach(key => {

			key.posY = root.posY + 70;

			key.posX = startPosition

			addNode(key.value, startPosition, key.posY, "white", root);

			key.posX = startPosition;

			startPosition += 70



		})

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
					console.log("TEST1");

					/*if (root.isEnd) {
						console.log("test2");
						//Change colour
						return;
					}

					root.keys.forEach(key => {

						if(root.keys.size == 1){

							console.log("TESTER");

							key.posX = key.previousNode.posX;
							key.posY = key.previousNode.posY + 70

							addNode(key.value, key.previousNode.posX, key.previousNode.posY + 70, "white", root);


						}else{

							let width = root.keys.size * 70;
							let startPosition = root.posX - width / 2 + 30;

							addNode(key.value, key.previousNode.posX, key.previousNode.posY + 70, "white", root);




						}

						traverse(key);

					})
				}
				traverse(currentNode);

			}

			updateNodes(currentNode);






		}






	}

}



	createTrie(myTrie.root);

*/
/*function updateTrie(){

	svg.innerHTML = "";
	addNode("root", xCentre, yStart, "white");


	function levelFinder(){

		console.log("start");

		let node = myTrie.root;
		let rootArray = [];
		let level = 0;
		node.keys.forEach(key => {
			rootArray.push(key);
		});
		let levelArray = {};

		for (let i = 0; i < rootArray.length; i++) {

			currentNode = rootArray[i];

			function updateNodes(root) {

					function traverse(root) {

						if (currentNode.isEnd) {
							return;
						}

						root.keys.forEach(key => {
							console.log(levelArray);
							levelArray.push(key.level);
							traverse(key);

						})
					}
					traverse(currentNode);

			}

			updateNodes(currentNode);
		}
		return levelArray;

	}

	levelFinder();



function createNode(root){

	if(root == myTrie.root){

		let widthDiff = svgSize.width / root.keys.size;
		let startPoint = 70 * level;
		let x = 70;

		root.keys.forEach(key => {
			key.posY = yStart + 70;

			addNode(key.value, x ,key.posY,"white", root);
			key.posX = x;
			x+=widthDiff;
			createNode(key);

		})

	}else{

		let widthDiff = svgSize.width / root.keys.size;
		let x = widthDiff / level;



		root.keys.forEach(key => {


			key.posY = root.posY + 70;
			addNode(key.value, x ,key.posY,"white", root);
			key.posX = x;
			x+=widthDiff;

		})


	}






}*/
	//createNode(myTrie.root);


