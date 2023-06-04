
let svg = document.querySelector("#mineSVG");
let svgSize = svg.getBoundingClientRect();
const svgns = "http://www.w3.org/2000/svg";
let boxSize = 25;
let boxSizePad = 30;
let infoArray = [];
let randomArray = [];









function createGraph(size) {



    mineMap = [];

    //Get amount of nodes in the grid

    nodeAmount = size * size;
    let number = 0;

    //Set all nodes to 0 in info array

    for (let i = 0; i < nodeAmount; i++) {
        infoArray.push([i, 0]);

    }

    //Generate bombs at random

    for (let i = 0; i < nodeAmount / 100 * 10; i++) {

        let random = generateRandom();

        for (let j = 0; j < randomArray.length; j++) {
            while (random == randomArray[j]) {
                random = generateRandom();
            }

        }

        randomArray.push(random);
    }


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
            mineMap[i][i + (size + 1)] = 1;
            mineMap[i][i + (size - 1)] = 1;



        } else if (i < (size * size) - 1 && i > ((size * size) - size)) {

            //console.log("2:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i - 1] = 1;
            mineMap[i][i + 1] = 1;
            mineMap[i][i - size] = 1;
            mineMap[i][i - (size + 1)] = 1;
            mineMap[i][i - (size - 1)] = 1;



        } else if (i % size == 0 && i != 0 && i != ((size * size) - size)) {



            // console.log("3:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i + 1] = 1;
            mineMap[i][i - size] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i + (size + 1)] = 1;
            mineMap[i][i - (size + 1)] = 1;

        } else if (i % size == size - 1 && i != (size * size - 1) && i != size - 1) {



            //console.log("4:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i - 1] = 1;
            mineMap[i][i - size] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i + (size - 1)] = 1;
            mineMap[i][i - size - 1] = 1;

        } else if (i == 0) {

            //  console.log("5:" + i)


            mineMap[i][i] = 1;
            mineMap[i][i + 1] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i + (size + 1)] = 1;


        } else if (i == size - 1) {
            // console.log("6:" + i)

            mineMap[i][i] = 1;
            mineMap[i][i - 1] = 1;
            mineMap[i][i + size] = 1;
            mineMap[i][i + (size - 1)] = 1;



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

    //Run create map now that all the data is in place

    createMap(mineMap, size);


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

        infoArray[i].push(x, y);

        addNode(i, x, y, "white", i);
        //addText(i , x+12, y+16, i);

    }

    //Create the eventlisteners for the nodes

    let nodes = document.querySelectorAll(".node");
    nodes.forEach(element => {
        element.addEventListener("click", function () {


            if (infoArray[this.id][1] == 100) {
                console.log("BOMB");

                showAll();

            } else if (infoArray[this.id][1] > 0 && infoArray[this.id][1] < 100) {

                addText(infoArray[this.id][1], infoArray[this.id][2] + boxSizePad / 2 - 3, infoArray[this.id][3] + boxSizePad / 2 + 2, infoArray[this.id][1])


            } else {

                revealEmpties(mineMap, this.id);

            }

        })
    });
}

function addNode(value, x, y, colour, ID) {



    let newRect = document.createElementNS(svgns, "rect");

    newRect.setAttribute("y", y);
    newRect.setAttribute("x", x);
    newRect.setAttribute("stroke", colour);
    newRect.setAttribute("id", value);
    newRect.setAttribute("class", "node");
    newRect.setAttribute("width", boxSize);
    newRect.setAttribute("height", boxSize);


    svg.appendChild(newRect);
}

function addText(value, x, y, ID) {

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


    infoArray.forEach(element => {

        // addText("B",element[2] + boxSizePad / 2 - 3, element[3] + boxSizePad/2 + 2, element[0] );
        addText(element[1], element[2] + boxSizePad / 2 - 3, element[3] + boxSizePad / 2 + 2, element[0]);

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
        var idx = curConnected.indexOf(1); //This is a "1" because 1 symbolises that the node is connected. If there is no node with index of 1, the idx will be set to -1.
        while (idx != -1) {//WHile it has connected nodes.
            // console.log(infoArray[idx][1]);

            neighborIdx.push(idx); //Push it onto the list of neighbours.
            nodesFree.push(idx);
            idx = curConnected.indexOf(1, idx + 1); //This searches for the next node. We look in the array after the previous one we found (idx + 1)


        }

        for (var j = 0; j < nodesFree.length; j++) {//Loops through to find the distance.

            let nodeId = nodesFree[j];

            console.log(nodeId);

            if (infoArray[nodeId][1] == 0) {

                console.log(nodeId + " IN ARRAY");
                queue.push(nodeId);

                // revealEmpties(mineMap, nodesFree[j]); //Push the neighbor to the queue. Next time we go through the while loop we will check those neighbors too.

            }
        }
    }
    nodesFree.forEach(element => {
        // console.log("Array");
        for (let i = 0; i < graph[element].length; i++) {

            if (graph[element][1] != 0) {
                // console.log("!!!!");
                addText(infoArray[i][1], infoArray[i][2] + boxSizePad / 2 - 3, infoArray[i][3] + boxSizePad / 2 + 2, infoArray[i][0]);
            }

        }

        addText(infoArray[element][1], infoArray[element][2] + boxSizePad / 2 - 3, infoArray[element][3] + boxSizePad / 2 + 2, infoArray[element][0]);

    });
    //return nodesLen;
}





createGraph(10);






