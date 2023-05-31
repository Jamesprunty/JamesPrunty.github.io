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
			createTrie(myTrie.root);
			return;
		} else if (!node.keys.has(input[0])) {

			if (node == this.root) {
				node.keys.set(input[0], new Node(input[0], input[0], node, node.branch, node.level + 1));

			} else if (node.keys.size == 0) {
				node.keys.set(input[0], new Node(input[0], node.root, node, node.branch, node.level + 1));

			} else {
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
myTrie.add("rest");
myTrie.add("ta");
myTrie.add("ra");
myTrie.add("turn");
myTrie.add("rank");
myTrie.add("risk");
myTrie.add("pest");








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

	svg.innerHTML = "";

	let before = false;
	let moveArray = [];

	let currentNode = root;

	function updateNodes(root) {

		function traverse(root) {



			root.keys.forEach(key => {


				if (root.end) {


					if (root.keys.size == 1) {
						console.log(myTrie.root.posX);
						console.log(root.posX);
						key.posX = root.posX;
						key.posY = root.posY + 70;
						addLine(root.posX, root.posY, key.posX, key.posY, key.root, key.value);

						if(key.end){
							addNode(key.value, key.posX, key.posY, "red", key.root);
						}else{
							addNode(key.value, key.posX, key.posY, "white", key.root);
						}
	
						if(root.end){
							addNode(root.value, root.posX, root.posY, "red", root.root);
						}else{
							addNode(root.value, root.posX, root.posY, "white", root.root);
						}


					} else {
						let width = root.keys.size * 70 / 2 - 34;
						root.keys.forEach(key => {
							key.posY = root.posY + 70;
							key.posX = root.posX + width;
							width -= 150 / key.level * 1.5;
							addLine(root.posX, root.posY, key.posX, key.posY, key.root, key.value);
							if(key.end){
								addNode(key.value, key.posX, key.posY, "red", key.root);
							}else{
								addNode(key.value, key.posX, key.posY, "white", key.root);
							}
		
							if(root.end){
								addNode(root.value, root.posX, root.posY, "red", root.root);
							}else{
								addNode(root.value, root.posX, root.posY, "white", root.root);
							}
						})
						if (root != myTrie.root) {
							moveArray.push([key.root, key.branch]);

						}
					}

					
				}

				else if (root.keys.size == 1) {
					key.posX = root.posX;
					key.posY = root.posY + 70;
					addLine(root.posX, root.posY, key.posX, key.posY, key.root, key.value);
					if(key.end){
						addNode(key.value, key.posX, key.posY, "red", key.root);
					}else{
						addNode(key.value, key.posX, key.posY, "white", key.root);
					}

					if(root.end){
						addNode(root.value, root.posX, root.posY, "red", root.root);
					}else{
						addNode(root.value, root.posX, root.posY, "white", root.root);
					}
					
					


				} else {
					let width = root.keys.size * 70 / 2 - 34;
					root.keys.forEach(key => {
						key.posY = root.posY + 70;
						key.posX = root.posX + width 
						width -= 150 / key.level * 1.5;
						addLine(root.posX, root.posY, key.posX, key.posY, key.root, key.value);
						if(key.end){
							addNode(key.value, key.posX, key.posY, "red", key.root);
						}else{
							addNode(key.value, key.posX, key.posY, "white", key.root);
						}
	
						if(root.end){
							addNode(root.value, root.posX, root.posY, "red", root.root);
						}else{
							addNode(root.value, root.posX, root.posY, "white", root.root);
						}
						
					})
					if (root != myTrie.root) {
						moveArray.push([key.root, key.branch]);

					}


				}
				traverse(key);

			})
		}
		traverse(currentNode);


	}

	updateNodes(currentNode);

	console.log(moveArray);
	//MOVE EVERYTHING AROUND

	let rootKeys = [];
	myTrie.root.keys.forEach(key => {
		rootKeys.push(key.value);

	});

	
	
	function spaceTrie(rootKeys){
		let amount = 10

	
	rootKeys.forEach(key => {

		moveArray.forEach(node => {

			if (node[0] == key) {
				if (key == rootKeys[0]) {
					let move = document.querySelectorAll(`.${key}`);
					move.forEach(element => {
						if (element.tagName == "circle") {
							let base = Number(element.getAttribute("cx"));
							let set = base + amount;
							element.setAttribute("cx", set);
						} else if (element.tagName == "text") {
							let base = Number(element.getAttribute("x"));
							let set = base + amount;
							element.setAttribute("x", set);
						} else if (element.tagName == "line") {
							let base1 = Number(element.getAttribute("x1"));
							let base2 = Number(element.getAttribute("x2"));
							let yValue = Number(element.getAttribute("y1"));
							let set1 = base1 + amount;
							let set2 = base2 + amount;

							if(yValue != 70){
								element.setAttribute("x1", set1);
							}

							
							element.setAttribute("x2", set2);


							


						}
					});
				} else if (key == rootKeys[rootKeys.length - 1]) {
					let move = document.querySelectorAll(`.${key}`);
					console.log(move);
					move.forEach(element => {
						if (element.tagName == "circle") {
							let base = Number(element.getAttribute("cx"));
							let set = base - amount;
							element.setAttribute("cx", set);
						} else if (element.tagName == "text") {
							let base = Number(element.getAttribute("x"));
							let set = base - amount;
							element.setAttribute("x", set);
						} else if (element.tagName == "line") {
							let base1 = Number(element.getAttribute("x1"));
							let base2 = Number(element.getAttribute("x2"));
							let yValue = Number(element.getAttribute("y1"));
							let set1 = base1 - amount;
							let set2 = base2 - amount;
							if(yValue != 70){
								element.setAttribute("x1", set1);
							}
							element.setAttribute("x2", set2);

						}
					});
				} else {

					//Mive anything on either side of them.

					let status = "right";

					rootKeys.forEach(rootKey => {
						if (rootKey != node[0]) {
							if (status == "right") {
								let move = document.querySelectorAll(`.${rootKey}`);
								move.forEach(element => {
									if (element.tagName == "circle") {
										let base = Number(element.getAttribute("cx"));
										let set = base + amount;
										element.setAttribute("cx", set);
									} else if (element.tagName == "text") {
										let base = Number(element.getAttribute("x"));
										let set = base + amount;
										element.setAttribute("x", set);
									} else if (element.tagName == "line") {
										let base1 = Number(element.getAttribute("x1"));
										let base2 = Number(element.getAttribute("x2"));
										let yValue = Number(element.getAttribute("y1"));
										let set1 = base1 + amount;
										let set2 = base2 + amount;
										if(yValue != 70){
											element.setAttribute("x1", set1);
										}
										element.setAttribute("x2", set2);

									}
								});
								

							} else {
								let move = document.querySelectorAll(`.${rootKey}`);
								move.forEach(element => {
									if (element.tagName == "circle") {
										let base = Number(element.getAttribute("cx"));
										let set = base - amount;
										element.setAttribute("cx", set);
									} else if (element.tagName == "text") {
										let base = Number(element.getAttribute("x"));
										let set = base - amount;
										element.setAttribute("x", set);
									} else if (element.tagName == "line") {
										let base1 = Number(element.getAttribute("x1"));
										let base2 = Number(element.getAttribute("x2"));
										let yValue = Number(element.getAttribute("y1"));
										let set1 = base1 - amount;
										let set2 = base2 - amount;
										if(yValue != 70){
											element.setAttribute("x1", set1);
										}
										element.setAttribute("x2", set2);

									}
								});

							}
						} else {
							status = "left";
						}

					})
				}

			}

		});
	

	});

}
spaceTrie(rootKeys);


	

	console.log(rootKeys)

	let node = myTrie.root;
		let rootArray = [];
		node.keys.forEach(key => {
			rootArray.push(key);
		});


		for (let i = 0; i < rootArray.length; i++) {


			currentNode = rootArray[i];

			function updateNodes(root) {
				console.log("test1");

				function traverse(root) {

					if (root.End) {
						return;
					}

					root.keys.forEach(key => {
						console.log("TEST");

						if(root != myTrie.root){
							/*if(root.keys.size > 1){
								rootKeys = [];
	
								root.keys.forEach(key => {
									//rootKeys.push(key.value);
							
								});
								
								
	
							}*/

						}



						traverse(key);

					})
				}
				traverse(currentNode);

			}

			updateNodes(currentNode);






		}

	



}

console.log(createTrie(myTrie.root));



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


