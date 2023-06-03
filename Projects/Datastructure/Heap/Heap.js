/* Heaps */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

let minChk = document.querySelector("#minCheck");
let maxChk = document.querySelector("#maxCheck");
let value = document.querySelector("#elem");
let output = document.querySelector("#outputText");

minChk.addEventListener('click', function () {

	if (maxChk.checked) {
		maxChk.checked = false;

		myMinHeap.wipe();
		myMinHeap.insert(null);

		myMaxHeap.export().forEach(element => {

			if (element != null) {
				myMinHeap.insert(element);
			}


		});

	} else {
		minChk.checked = true;
	}

	myMinHeap.update();

});
maxChk.addEventListener('click', function () {

	myMaxHeap.wipe();
	myMaxHeap.insert(null);

	myMinHeap.export().forEach(element => {

		if (element != null) {
			myMaxHeap.insert(element);
		}
	});

	if (minChk.checked) {
		minChk.checked = false;
	} else {
		maxChk.checked = true;
	}

	myMaxHeap.update();
});

minChk.checked = true;

let svg = document.querySelector("#heapSVG");
let svgSize = svg.getBoundingClientRect();
let arrayDiv = document.querySelector("#arrayDiv");



let MinHeap = function () {

	let heap = [null];
	addNode("Root", svgSize.width / 2, 70, "white", 0)

	this.print = () => heap;

	this.export = function () {
		let exportArray = [];
		heap.forEach(element => {
			if (element != null) {
				exportArray.push(element);
			}
		});
		return exportArray;
	}

	this.wipe = function () {
		heap = [];
	}

	this.insert = function (num) {
		heap.push(num); //Push onto heap
		if (heap.length > 2) { //Otherwise there would only be 1 value and so don't need to sort
			let idx = heap.length - 1;//Set idx to be the end of the heap, starts at the end and works back
			while (heap[idx] < heap[Math.floor(idx / 2)]) {//While the value at the end (we just added) is less than the value at half the index which is its parent. Ie, while the value is less than its parent. 
				if (idx >= 1) {//As long as the index is not 0 (Whic is the root)
					[heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]]; //Swap the parent and child round.
					if (Math.floor(idx / 2) > 1) {//If you haven't reached the end
						idx = Math.floor(idx / 2); // Keep going up one level
					} else {
						break;
					};
				};
			};
		};
		this.update();
	};

	this.remove = function () {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		this.update();
		return smallest;
	};

	this.sort = function () {
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		};
		this.update();
		return result;
	};

	this.update = function () {

		let svg = document.querySelector("#heapSVG");

		const svgns = "http://www.w3.org/2000/svg";

		svg.innerHTML = "";
		arrayDiv.innerHTML = "";
		let dataFinish = "";

		addNode("Root", svgSize.width / 2, 70, "white", 0)


		data = `<div class="heapItem">
			<div class="index heapItem"><p>ID</p></div>
			<div class="element listData"><p>Data</p></div>
			</div>`;

		dataFinish += data;


		for (let i = 0; i < heap.length; i++) {



			data = `<div class="heapItem">
			<div class="index heapItem"><p>${i}</p></div>
			<div class="element listData"><p>${heap[i]}</p></div>
			</div>`;

			dataFinish += data;


		}

		arrayDiv.innerHTML = dataFinish;
		xDiff = 200;

		let heapPos = [];

		for (let i = 0; i < heap.length; i++) {
			if (i == 0) {
				heapPos.push([null, svgSize.width / 2, 70, 0]);


				if(heap[1]){
					heapPos.push([heap[i + 1], heapPos[i][1], heapPos[i][2] + 70, 1]);
					console.log(heapPos[i][1], heapPos[i][2], heapPos[i + 1][1], heapPos[i + 1][2], heapPos[i + 1][0], heapPos[i + 1][0])
	
					addLine(heapPos[i][1], heapPos[i][2], heapPos[i + 1][1], heapPos[i + 1][2], heapPos[i + 1][0], heapPos[i + 1][0])
					addNode(heap[i + 1], heapPos[i][1], heapPos[i][2] + 70, "white", heap[i + 1]);
					addNode("Root", svgSize.width / 2, 70, "white", 0)

				}







			} else {

				if (heap[i * 2] != null || heap[i * 2] != undefined) {


					let diff = xDiff / heapPos[i][3];


					heapPos.push([heap[i * 2], heapPos[i][1] - diff, heapPos[i][2] + 70, heapPos[i][3] + 1]);
					addLine(heapPos[i][1], heapPos[i][2], heapPos[i * 2][1], heapPos[i * 2][2], heapPos[i * 2][0], heapPos[i * 2][0]);
					addNode(heap[i * 2], heapPos[i][1] - diff, heapPos[i][2] + 70, "white", heap[i * 2]);
					addNode(heap[i], heapPos[i][1], heapPos[i][2], "white", heap[i]);


				}

				if (heap[i * 2 + 1] != null || heap[i * 2 + 1] != undefined) {


					let diff = xDiff / heapPos[i][3];



					heapPos.push([heap[(i * 2) + 1], heapPos[i][1] + diff, heapPos[i][2] + 70, heapPos[i][3] + 1]);
					addLine(heapPos[i][1], heapPos[i][2], heapPos[i * 2 + 1][1], heapPos[i * 2 + 1][2], heapPos[i * 2 + 1][0], heapPos[i * 2 + 1][0])
					addNode(heap[(i * 2) + 1], heapPos[i][1] + diff, heapPos[i][2] + 70, "white", heap[i * 2 + 1]);
					addNode(heap[i], heapPos[i][1], heapPos[i][2], "white", heap[i]);


				}

			}

		}



	}

};

let MaxHeap = function () {

	let heap = [null];

	this.print = () => heap;

	this.export = function () {
		let exportArray = [];
		heap.forEach(element => {
			if (element != null) {
				exportArray.push(element)
			}
		});
		return exportArray;
	}

	this.wipe = function () {
		heap = [];
	}

	this.insert = function (num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx / 2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]];
					if (Math.floor(idx / 2) > 1) {
						idx = Math.floor(idx / 2);
					} else {
						break;
					};
				};
			};
		};
		this.update();
	};

	this.remove = function () {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		this.update();
		return smallest;
	};

	this.sort = function () {
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		};
		this.update();
		return result;
	};

	this.update = function () {

		let svg = document.querySelector("#heapSVG");

		const svgns = "http://www.w3.org/2000/svg";

		svg.innerHTML = "";
		arrayDiv.innerHTML = "";
		let dataFinish = "";

		addNode("Root", svgSize.width / 2, 70, "white", 0)


		data = `<div class="heapItem">
			<div class="index heapItem"><p>ID</p></div>
			<div class="element listData"><p>Data</p></div>
			</div>`;

		dataFinish += data;


		for (let i = 0; i < heap.length; i++) {



			data = `<div class="heapItem">
			<div class="index heapItem"><p>${i}</p></div>
			<div class="element listData"><p>${heap[i]}</p></div>
			</div>`;

			dataFinish += data;


		}

		arrayDiv.innerHTML = dataFinish;
		xDiff = 200;

		let heapPos = [];

		for (let i = 0; i < heap.length; i++) {
			if (i == 0) {
				heapPos.push([null, svgSize.width / 2, 70, 0]);



			
				if(heap[1]){
					heapPos.push([heap[i + 1], heapPos[i][1], heapPos[i][2] + 70, 1]);
					console.log(heapPos[i][1], heapPos[i][2], heapPos[i + 1][1], heapPos[i + 1][2], heapPos[i + 1][0], heapPos[i + 1][0])
	
					addLine(heapPos[i][1], heapPos[i][2], heapPos[i + 1][1], heapPos[i + 1][2], heapPos[i + 1][0], heapPos[i + 1][0])
					addNode(heap[i + 1], heapPos[i][1], heapPos[i][2] + 70, "white", heap[i + 1]);
					addNode("Root", svgSize.width / 2, 70, "white", 0)

				}





			} else {

				if (heap[i * 2] != null || heap[i * 2] != undefined) {


					let diff = xDiff / heapPos[i][3];


					heapPos.push([heap[i * 2], heapPos[i][1] - diff, heapPos[i][2] + 70, heapPos[i][3] + 1]);
					addLine(heapPos[i][1], heapPos[i][2], heapPos[i * 2][1], heapPos[i * 2][2], heapPos[i * 2][0], heapPos[i * 2][0]);
					addNode(heap[i * 2], heapPos[i][1] - diff, heapPos[i][2] + 70, "white", heap[i * 2]);
					addNode(heap[i], heapPos[i][1], heapPos[i][2], "white", heap[i]);


				}

				if (heap[i * 2 + 1] != null || heap[i * 2 + 1] != undefined) {


					let diff = xDiff / heapPos[i][3];



					heapPos.push([heap[(i * 2) + 1], heapPos[i][1] + diff, heapPos[i][2] + 70, heapPos[i][3] + 1]);
					addLine(heapPos[i][1], heapPos[i][2], heapPos[i * 2 + 1][1], heapPos[i * 2 + 1][2], heapPos[i * 2 + 1][0], heapPos[i * 2 + 1][0])
					addNode(heap[(i * 2) + 1], heapPos[i][1] + diff, heapPos[i][2] + 70, "white", heap[i * 2 + 1]);
					addNode(heap[i], heapPos[i][1], heapPos[i][2], "white", heap[i]);


				}

			}
		}






	}

};


let myMinHeap = new MinHeap();
myMinHeap.insert(30);
myMinHeap.insert(26);
myMinHeap.insert(78);
myMinHeap.insert(2);
myMinHeap.insert(10);
myMinHeap.insert(79);
myMinHeap.insert(50);
myMinHeap.insert(7);
myMinHeap.insert(56);
myMinHeap.insert(90);
myMinHeap.insert(16);
myMinHeap.insert(83);
myMinHeap.insert(46);
myMinHeap.insert(1);
myMinHeap.insert(80);
console.log(myMinHeap.print());


let myMaxHeap = new MaxHeap();




function addNode(value, x, y, colour, ID) {


	let svg = document.querySelector("#heapSVG");

	const svgns = "http://www.w3.org/2000/svg";

	let newCircle = document.createElementNS(svgns, "circle");

	newCircle.setAttribute("cy", y);
	newCircle.setAttribute("cx", x);
	newCircle.setAttribute("r", "20");
	newCircle.setAttribute("stroke", colour);
	newCircle.setAttribute("id", value);
	newCircle.setAttribute("class", ID);


	svg.appendChild(newCircle);

	let newText = document.createElementNS(svgns, "text");
	newText.setAttributeNS(null, "y", y);
	newText.setAttributeNS(null, "x", x);
	newText.setAttributeNS(null, "stroke", "white");
	newText.setAttributeNS(null, "text-anchor", "middle");
	newText.setAttributeNS(null, "id", value);
	newText.setAttributeNS(null, "class", ID);
	var textNode = document.createTextNode(value);
	newText.appendChild(textNode);

	svg.appendChild(newText);

}

function addLine(fromX, fromY, toX, toY, ID, value) {

	let svg = document.querySelector("#heapSVG");

	const svgns = "http://www.w3.org/2000/svg";
	let newLine = document.createElementNS(svgns, "line");
	newLine.setAttribute("x1", fromX);
	newLine.setAttribute("y1", fromY);
	newLine.setAttribute("x2", toX);
	newLine.setAttribute("y2", toY);
	newLine.setAttribute("stroke-width", 1);
	newLine.setAttribute("stroke", "white");
	newLine.setAttribute("z-index", "-1");
	newLine.setAttribute("class", ID);
	newLine.setAttribute("id", value);

	svg.appendChild(newLine);

}

let buttons = document.querySelectorAll(".btn");
buttons.forEach(element => {
	element.addEventListener("click", function () {
		switch (this.id) {

			case "insert":


				if(value.value == ""){
					output.innerText = "Please enter a value";
				}else{
					if(minChk.checked){
						myMinHeap.insert(value.value);
						value.value = "";
					}else{
						myMaxHeap.insert(value.value);
						value.value = "";
					}
				}
				break;

			case "remove":


			if(minChk.checked){
				output.innerText = myMinHeap.remove();
			}else{
				output.innerText = myMaxHeap.remove();
			}
				break;

			case "sort":


				console.log("sort");

				if(minChk.checked){
					output.innerText = myMinHeap.sort();
				}else{
					output.innerText = myMaxHeap.sort();
				}


				break;

			case "print":

			if(minChk.checked){

				output.innerText = myMinHeap.print();
			}else{
				output.innerText = myMaxHeap.print();
			}


				break;



		}
	})
});



