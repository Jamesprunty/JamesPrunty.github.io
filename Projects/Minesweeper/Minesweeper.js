
let svg = document.querySelector("#mineSVG");
let svgSize = svg.getBoundingClientRect();
const svgns = "http://www.w3.org/2000/svg";
let boxSize = 25;
let boxSizePad = 30;
let infoArray = [];
let randomArray = [];
let outputText = document.querySelector("#outputText");
let input = document.querySelector("#size");
let buttons = document.querySelectorAll(".btn");
let gridSize = 0;
let flagArray = [];
let correct = 0;
let bombAmount = 0;
let flags = 0;
let endGame = false;
let firstTurn = true;

buttons.forEach(element => {
    element.addEventListener("click", function () {
        if (this.id == "random") {

            if (input.value < 4 || input.value > 25) {
                outputText.innerText = "Please enter a number between 4 and 25";
            } else {
                reset(parseInt(input.value));


            }
        } else if (this.id == "reset") {

            reset(parseInt(gridSize));




        }

        input.value = "";
    })
});




function reset(size) {

    infoArray = [];
    randomArray = [];
    svg.innerHTML = ""
    nodeAmount = 0;
    bombAmount = 0;
    nodesFree = [];
    mineMap = [];
    endGame = false;
    firstTurn = true;


    createGraph(size);
}




function createGraph(size) {



    let mineMap = [];
    svg.innerHTML = "";
    gridSize = size;


    //Get amount of nodes in the grid

    nodeAmount = size * size;
    let number = 0;

    //Set all nodes to 0 in info array

    for (let i = 0; i < nodeAmount; i++) {
        infoArray.push([i, 0]);

    }

    //Generate bombs at random

    bombAmount = Math.ceil(nodeAmount / 100 * 15);
    flags = bombAmount;
    if (bombAmount < 1) {
        bombAmount = 1;
    }

    for (let i = 0; i < bombAmount; i++) {

        let random = generateRandom();

        for (let j = 0; j < randomArray.length; j++) {
            while (random == randomArray[j]) {
                random = generateRandom();
            }

        }

        randomArray.push(random);
    }

    outputText.innerText = `bombs: ${bombAmount}`;

    //Set all bombs to 100 in info array

    randomArray.forEach(element => {
        infoArray[element][1] = 100;

    });

    //Create mineMap which is the links between all the nodes - set them all to 0

    for (let i = 0; i < nodeAmount; i++) {

        let tempArray = [];
        number = 0;

        for (let j = 0; j < nodeAmount; j++) {

            tempArray.push(number);
        }
        mineMap.push(tempArray);


    }

    //Set up all of the links between the nodes, this is the 8 nodes surrounding it.

    for (let i = 0; i < mineMap.length; i++) {


        if (i > 0 && i < size && i != size - 1) {
            //console.log("1:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i - 1] = 1;
            mineMap[i][i + 1] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i + size + 1] = 1;
            mineMap[i][i + size - 1] = 1;



        } else if (i < (size * size) - 1 && i > ((size * size) - size)) {

            //console.log("2:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i - 1] = 1;
            mineMap[i][i + 1] = 1;
            mineMap[i][i - size] = 1;
            mineMap[i][i - size + 1] = 1;
            mineMap[i][i - size - 1] = 1;



        } else if (i % size == 0 && i != 0 && i != ((size * size) - size)) {



            // console.log("3:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i + 1] = 1;
            mineMap[i][i - size] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i + size + 1] = 1;
            mineMap[i][i - size + 1] = 1;

        } else if (i % size == size - 1 && i != (size * size - 1) && i != size - 1) {



            //console.log("4:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i - 1] = 1;
            mineMap[i][i - size] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i + size - 1] = 1;
            mineMap[i][i - size - 1] = 1;

        } else if (i == 0) {

            //  console.log("5:" + i)


            mineMap[i][i] = 1;
            mineMap[i][i + 1] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i + size + 1] = 1;


        } else if (i == size - 1) {
            // console.log("6:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i - 1] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i + size - 1] = 1;



        } else if (i == size * size - 1) {
            // console.log("7:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i - 1] = 1;
            mineMap[i][i - size] = 1;
            mineMap[i][i - size - 1] = 1;



        } else if (i == (size * size) - size) {
            // console.log("8:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i + 1] = 1;
            mineMap[i][i - size] = 1;
            mineMap[i][i - size + 1] = 1;


        }
        else {
            mineMap[i][i] = 1;
            mineMap[i][i - 1] = 1;
            mineMap[i][i + 1] = 1;
            mineMap[i][i - size] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i - size + 1] = 1;
            mineMap[i][i - size - 1] = 1;
            mineMap[i][i + size + 1] = 1;
            mineMap[i][i + size - 1] = 1;

        }
    }

    randomArray.forEach(element => {
        let neighbours = bfs(mineMap, element);


        for (let i = 0; i < nodeAmount; i++) {
            if (neighbours[i] == 1) {
                if (neighbours[i] != element)
                    infoArray[i][1] = infoArray[i][1] + 1;
                if (infoArray[i][1] > 100) {
                    infoArray[i][1] = 100;
                }
            }

        }

    });

    randomArray.forEach(element => {
        if (element == 1){
            let neighbours1 = bfs(mineMap, 1);
            for (let i = 0; i < nodeAmount; i++) {
                if (neighbours1[i] == 1) {
                    if (neighbours1[i] != element)
                        infoArray[i][1] = infoArray[i][1] + 1;
                    if (infoArray[i][1] > 100) {
                        infoArray[i][1] = 100;
                    }
                }
    
            }
        }
    });

    

    //Run create map now that all the data is in place

    createMap(mineMap, size);

    outputText.innerText = `Bombs: ${bombAmount}`;

}


function createMap(mineMap, size) {

    let leftPoint = svgSize.width / 2 - size / 2 * boxSizePad;
    let topPoint = svgSize.height / 2 - size / 2 * boxSizePad;
    let row = 0;
    let column = 0;

    //Go through the minMeap and add all the nodes

    for (let i = 0; i < mineMap.length; i++) {

        let x = leftPoint + boxSizePad * i - column;

        let y = topPoint + boxSizePad + row;

        //row will lower the nodes when it gets to the end
        //column will push it back to the beginning so it is in line

        if (i % size == size - 1) {
            row += boxSizePad;
            column += boxSizePad * size;
        }

        infoArray[i].push(x, y, 0, 0);

        addNode(i, x, y, "white", i);
        //addText(i , x+12, y+16, i);

    }

    //Create the eventlisteners for the nodes

    let nodes = document.querySelectorAll(".node");
    nodes.forEach(element => {
        element.addEventListener("mousedown", function (e) {

            if (endGame == false){


            if (e.ctrlKey == true) {


                if (infoArray[this.id][4] == 0) {

                  
                   
                    infoArray[this.id][4] = 1;
                    outputText.innerText = `Bombs: ${bombAmount}`;

                    addText("F", infoArray[this.id][2] + boxSizePad / 2 - 3, infoArray[this.id][3] + boxSizePad / 2 + 2, `f${infoArray[this.id][0]}`, "green");
                    
                
                
                } else if(infoArray[this.id][4] == 1){

                    infoArray[this.id][4] = 2;
                    outputText.innerText = `Bombs: ${bombAmount}`;
                    let selected = document.querySelector(`.f${this.id}`);
                    selected.remove();

                    addText("?", infoArray[this.id][2] + boxSizePad / 2 - 3, infoArray[this.id][3] + boxSizePad / 2 + 2, `q${infoArray[this.id][0]}`, "white");
                    
                    
                    
                }else{

                    infoArray[this.id][4] = 0;
                    
                    outputText.innerText = `Bombs: ${bombAmount}`;

                    let selected = document.querySelector(`.q${this.id}`);
                    selected.remove();

                    randomArray.forEach(element => {
                        if (element == this.id){
                            correct--;
                        }
                    });
                }


            } else if (!e.ctrlKey && infoArray[this.id][4] != 1) {

                amountLeft = 0;



                if (infoArray[this.id][1] == 100) {

                    let id = parseInt(this.id);

                    if(firstTurn){
                        reset(parseInt(gridSize));
                        if(infoArray[id][1] != 100){
                            $(`#id`).trigger("click");

                        }else{
                            reset(parseInt(gridSize));
                        }
                    }else{
                

                    outputText.innerText = "YOU LOSE!!!!!";
                    endGame = true;

                    showAll();
                    }
                    

                } else if (infoArray[this.id][1] > 0 && infoArray[this.id][1] < 100) {

                    firstTurn = false;

                    infoArray.forEach(element => {
                        if (element[5] == 0){
                            amountLeft++;
                        }

                    });


                    
                    if(parseInt(amountLeft -1) === parseInt(bombAmount)){


                        outputText.innerText = "YOU WIN!!!!";
                        showAll();
                        endGame = true;

                    }

                    infoArray[this.id][5] = 1;



                    addNode(infoArray[this.id][1], infoArray[this.id][2], infoArray[this.id][3], "#DCDCDC", infoArray[this.id][1], "#D8D8D8")
                    if (infoArray[this.id][1] == 1) {
                        addText(infoArray[this.id][1], infoArray[this.id][2] + boxSizePad / 2 - 3, infoArray[this.id][3] + boxSizePad / 2 + 2, infoArray[this.id][0], "green");
                    }
                    if (infoArray[this.id][1] == 2) {
                        addText(infoArray[this.id][1], infoArray[this.id][2] + boxSizePad / 2 - 3, infoArray[this.id][3] + boxSizePad / 2 + 2, infoArray[this.id][0], "orange");
                    }
                    if (infoArray[this.id][1] > 2) {
                        addText(infoArray[this.id][1], infoArray[this.id][2] + boxSizePad / 2 - 3, infoArray[this.id][3] + boxSizePad / 2 + 2, infoArray[this.id][0], "red");
                    }

                } else {
                    revealEmpties(mineMap, this.id);

                    infoArray.forEach(element => {
                        if (element[5] == 0){
                            amountLeft++;
                        }
                       
                    });

                    if(amountLeft == bombAmount){


                        outputText.innerText = "YOU WIN!!!!";
                        endGame = true;

                    }

                }
            }
        }
        })
    });



}

function addNode(value, x, y, colour, ID, fill) {



    let newRect = document.createElementNS(svgns, "rect");

    newRect.setAttribute("y", y);
    newRect.setAttribute("x", x);
    newRect.setAttribute("stroke", colour);
    newRect.setAttribute("fill", fill);
    newRect.setAttribute("id", value);
    newRect.setAttribute("class", "node");
    newRect.setAttribute("width", boxSize);
    newRect.setAttribute("height", boxSize);


    svg.appendChild(newRect);
}

function addText(value, x, y, ID, colour = "white") {

    let newText = document.createElementNS(svgns, "text");
    newText.setAttributeNS(null, "y", y);
    newText.setAttributeNS(null, "x", x);
    newText.setAttributeNS(null, "stroke", colour);
    newText.setAttributeNS(null, "text-anchor", "middle");
    newText.setAttributeNS(null, "id", value);
    newText.setAttributeNS(null, "class", ID);
    var textNode = document.createTextNode(value);
    newText.appendChild(textNode);

    svg.appendChild(newText);

}

function generateRandom(min = 0, max = nodeAmount) {



    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;


    return rand;
}

function showAll() {


    randomArray.forEach(element => {

        // addText("B",element[2] + boxSizePad / 2 - 3, element[3] + boxSizePad/2 + 2, element[0] );

        addText("!", infoArray[element][2] + boxSizePad / 2 - 3, infoArray[element][3] + boxSizePad / 2 + 2, infoArray[element][0], "red");



    });

}

function bfs(graph, root) {
    var nodesLen = {};//This is where the key value pairs will be stored


    for (var i = 0; i < graph.length; i++) {//Go through the graph
        nodesLen[i] = Infinity; //Start everything off at infinity (meaning there is no route to that node).
    }
    nodesLen[root] = 0; //The root (which is what was searched) is set to 0 as it is the node.

    var queue = [root]; //This is a queue to keep track of the jumps it has to make.
    var current; //This will keep track of the current node while traversing.

    while (queue.length != 0) {//Keep traversing until there is nothing left in the queue
        current = queue.shift();//We pop off the top of the list, at the first itteration it is just the root. 

        var curConnected = graph[current];//We look at all the nodes currently connected to the node. Each index of the graph is an array saying which node is connected to that node.
        var neighborIdx = []; //This will keep track of which indexes are connected to this node. 
        var idx = curConnected.indexOf(1); //Gets the first node. This is a "1" because 1 symbolises that the node is connected. If there is no node with index of 1, the idx will be set to -1.
        while (idx != -1) {//WHile it has connected nodes.
            neighborIdx.push(idx); //Push it onto the list of neighbours.
            idx = curConnected.indexOf(1, idx + 1); //This searches for the next node. We look in the array after the previous one we found (idx + 1)
        }

        for (var j = 0; j < neighborIdx.length; j++) {//Loops through to find the distance.
            if (nodesLen[neighborIdx[j]] == Infinity) { //This means we have not set the distance of this node yet. 
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1; //Set the distance to the value of the nodes length array for the current node, plus 1.
                queue.push(neighborIdx[j]); //Push the neighbor to the queue. Next time we go through the while loop we will check those neighbors too.
            }
        }
    }
    return nodesLen;
};



function revealEmpties(graph, root) {

    var nodesFree = [];
    //nodesLen[root] = 0; //The root (which is what was searched) is set to 0 as it is the node.

    var queue = [root]; //This is a queue to keep track of the jumps it has to make.
    var current; //This will keep track of the current node while traversing.

    while (queue.length != 0) {//Keep traversing until there is nothing left in the queue
        current = queue.shift();//We pop off the top of the list, at the first itteration it is just the root. 

        var curConnected = graph[current];//We look at all the nodes currently connected to the node. Each index of the graph is an array saying which node is connected to that node.
        var neighborIdx = []; //This will keep track of which indexes are connected to this node. 
        //var nodesFree = [];
        var idx = curConnected.indexOf(1); //This is a "1" because 1 symbolises that the node is connected. If there is no node with index of 1, the idx will be set to -1.

        while (idx != -1) {//WHile it has connected nodes.
            // console.log(infoArray[idx][1]);



            neighborIdx.push(idx); //Push it onto the list of neighbours.
            nodesFree.push(idx);


            idx = curConnected.indexOf(1, idx + 1); //This searches for the next node. We look in the array after the previous one we found (idx + 1)


        }



        for (var j = 0; j < nodesFree.length; j++) {//Loops through to find the distance.

            let nodeId = nodesFree[j];



            if (infoArray[nodeId][1] == 0) {

                infoArray[nodeId][1] = "10";
                queue.push(nodeId);


                // revealEmpties(mineMap, nodesFree[j]); //Push the neighbor to the queue. Next time we go through the while loop we will check those neighbors too.

            }
        }
    }

    //console.log(nodeId);


    nodesFree.forEach(element => {
        // console.log("Array");
        infoArray[element][5] = 1;


        if (infoArray[element][1] != 10) {

            addNode(infoArray[element][1], infoArray[element][2], infoArray[element][3], "#DCDCDC", infoArray[element][1], "#D8D8D8")

            if (infoArray[element][1] == 1) {
                addText(infoArray[element][1], infoArray[element][2] + boxSizePad / 2 - 3, infoArray[element][3] + boxSizePad / 2 + 2, infoArray[element][0], "green");
            }
            if (infoArray[element][1] == 2) {
                addText(infoArray[element][1], infoArray[element][2] + boxSizePad / 2 - 3, infoArray[element][3] + boxSizePad / 2 + 2, infoArray[element][0], "orange");
            }
            if (infoArray[element][1] > 2 && infoArray[element][1] < 100) {
                addText(infoArray[element][1], infoArray[element][2] + boxSizePad / 2 - 3, infoArray[element][3] + boxSizePad / 2 + 2, infoArray[element][0], "red");
            }
        } else {
            addNode(infoArray[element][1], infoArray[element][2], infoArray[element][3], "#DCDCDC", infoArray[element][1], "#E8E8E8")
        }

    });
    //return nodesLen;
}





createGraph(10);







