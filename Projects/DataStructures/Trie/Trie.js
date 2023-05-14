/* Trie Data Structure */

let Node = function() {
	this.keys = new Map();
	this.end = false;
	
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};

let Trie = function() {

	this.root = new Node();

	this.add = function(input, node = this.root) {
		if (input.length == 0) {
			node.setEnd();
			return;
		} else if (!node.keys.has(input[0])) {
			node.keys.set(input[0], new Node());
			return this.add(input.substr(1), node.keys.get(input[0]));
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
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
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())

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