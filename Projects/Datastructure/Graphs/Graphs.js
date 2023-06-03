/* Graphs: Breadth-first search */

let graphSize = 6;

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
  
  var exBFSGraph = [
    [0, 1, 1, 1, 0, 1],
    [0, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1]
  ];


let inputSize = document.querySelector("#size");
let inputIndex = document.querySelector("#index");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(element => {
  element.addEventListener("click", function(){ 
    switch(this.id){

      case "random":
      if(inputSize.value <= 0){

        outputText.innerText = "Please enter a size";

      }else{

        randomise(inputSize.value);

        inputSize.value = "";
        
      }

      break;

      case "bfs":
        if(inputIndex.value < 0 || inputIndex.value > graphSize){

          outputText.innerText = "Please enter a valid index";
  
        }else{
  

          console.log(exBFSGraph);
          let bfsArray = bfs(exBFSGraph, inputIndex.value);
          let arraySize = 0;


          let outputMessage = ""

          for (let i = 0; i < graphSize; i++) {

            let add = `[${i}:${bfsArray[i]}]  `;
            outputMessage += add;

        
          }

          outputText.innerText = outputMessage;
          console.log(bfs(exBFSGraph, inputIndex.value))
  
          
          
        }
        inputIndex.value = "";

      break;



    }
  })
});







  function addNode(value, x, y, colour, ID) {


    let svg = document.querySelector("#graphSVG");
  
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
  
    let svg = document.querySelector("#graphSVG");
  
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

    let arrowLength = newLine.getTotalLength();
    let place1 = newLine.getPointAtLength(arrowLength / 2 - 20);
    let place2 = newLine.getPointAtLength(arrowLength / 2 + 20);

    let arrow1X = place1.x;
    let arrow1Y = place1.y;
    let arrow2X = place2.x;
    let arrow2Y = place2.y;

    if(arrowLength > 0){

      addArrow(arrow1X, arrow1Y, arrow2X, arrow2Y);

    }
    

    
  
  }

  function addArrow(fx,fy,tx,ty){

    let svg = document.querySelector("#graphSVG");
  
    const svgns = "http://www.w3.org/2000/svg";
    let newLine1 = document.createElementNS(svgns, "line");

   
    let newTriangle = document.createElementNS(svgns, "polygon");
    let points = `0,0 -8,16 8,16`;
    newTriangle.setAttribute("points", points);
    newTriangle.setAttribute("stroke-width", 1);
    newTriangle.setAttribute("stroke", "white");
    newTriangle.setAttribute("fill", "white");

    var angle = Math.atan2(fy - ty, fx - tx) * 180 / Math.PI - 90;

    
    newTriangle.setAttribute("transform", `translate(${tx} ${ty}), rotate(${angle} 0 0)`);



    svg.appendChild(newTriangle);





  }

  function createGraph(graph){



    let nodeAmount = graph.length;
    graphSize = graph.length;

    let svg = document.querySelector("#graphSVG");

    svg.innerHTML = "";
  
    const svgns = "http://www.w3.org/2000/svg";
    let svgSize = svg.getBoundingClientRect();
  
    let newCircle = document.createElementNS(svgns, "circle");
  
    newCircle.setAttribute("cy", svgSize.height / 2);
    newCircle.setAttribute("cx", svgSize.width / 2);
    newCircle.setAttribute("r", svgSize.height/2.5);
    //newCircle.setAttribute("stroke", "white");
    newCircle.setAttribute("id", "path");
  
  
    svg.appendChild(newCircle);


    let path = document.querySelector("#path");
    let pathlength = path.getTotalLength();
    let place = pathlength / nodeAmount;
    let posArray = [];

    for (i=0; i < graph.length; i++){
      let dist = place * i;
      let point = path.getPointAtLength(dist);
      posArray.push([i,point.x,point.y]);
      addNode(i,point.x,point.y,"white",i);
    }

    for (let i = 0; i < graph.length; i++) {
     
      let element = graph[i];

      
      for (let j = 0; j < element.length; j++) {

        
        if(element[j] == 1){

          addLine(posArray[i][1],posArray[i][2],posArray[j][1],posArray[j][2],element[0],element[0]);
          addNode(i,posArray[i][1],posArray[i][2],"white",i)
          addNode(j,posArray[j][1],posArray[j][2],"white",j)
        }
        
        
      }

      
    }

   createTextArray();

  }


function randomise(size){

  exBFSGraph = [];


for (let i = 0; i < size; i++) {

  let tempArray = [];
  
  for (let j = 0; j < size; j++) {
    let number =  Math.random() < 0.5
    if(number == true){
      tempArray.push(1);
    }else{
      tempArray.push(0);

    }
    
  }

  exBFSGraph.push(tempArray);
  
}

console.log(exBFSGraph);

createGraph(exBFSGraph);


}

function createTextArray(){

  console.log(graphSize);

  let svg = document.querySelector("#graphSVG");

  const svgns = "http://www.w3.org/2000/svg";
  let svgSize = svg.getBoundingClientRect();

let test = "test";

for (let i = 0; i < graphSize; i++) {

  let newText = document.createElementNS(svgns, "text");
  newText.setAttributeNS(null, "y", svgSize.height - 22 * i - 20);
  newText.setAttributeNS(null, "x", svgSize.width - 11 * graphSize);
  newText.setAttributeNS(null, "stroke", "white");
  newText.setAttribute("font-size", "o.1em");
  newText.setAttribute("stroke-width", "1");
  newText.setAttributeNS(null, "text-anchor", "middle");

  let row = `[`
  for (let j = 0; j < exBFSGraph[i].length; j++) {
    
    row += `${exBFSGraph[i][j]},`;

    }
    row += `]`;
    console.log(row);
 
  var textNode = document.createTextNode(row);


  newText.appendChild(textNode);
  svg.appendChild(newText);
}







}

  //randomise(5);
  createTextArray();

  createGraph(exBFSGraph);

