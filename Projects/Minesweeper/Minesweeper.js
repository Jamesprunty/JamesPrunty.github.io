
 let svg = document.querySelector("#mineSVG");
 let svgSize = svg.getBoundingClientRect();
 let boxSize = 25;
 let boxSizePad = 30;









function createGraph(size){

    mineMap = [];

    nodeAmount = size * size;
    let number = 0;
    let infoArray = [];
    console.log(nodeAmount);

   for (let i = 0; i < nodeAmount; i++) {
    infoArray.push([i,0]);
    
   }
  
  
  for (let i = 0; i < nodeAmount; i++) {
  
    let tempArray = [];
    number++;
    
    for (let j = 0; j < nodeAmount; j++) {

        tempArray.push(number);  
  }
  mineMap.push(tempArray);
}
  
    let randomArray = [];

    for (let i = 0; i < nodeAmount / 100 * 12 ; i++) {
        console.log(size / 100 * 20);

        let random = generateRandom();

        for (let j = 0; j < randomArray.length; j++) {
            while(random == randomArray[j]){
                random = generateRandom();
            }
            
        }

        randomArray.push(random); 
    }

    

    randomArray.forEach(element => {
        infoArray[element][1] = 100;

    });

    console.log(infoArray);




  
  createMap(mineMap, size);

  
  
  }
  
  
function createMap(mineMap, size){

    let leftPoint =  svgSize.width / 2 - size/2 * boxSizePad;
    let topPoint = svgSize.height / 2 - size/2 * boxSizePad;
    let row = 0;
    let column = 0;

   for (let i = 0; i < mineMap.length; i++) {
    
    let x = leftPoint + boxSizePad * i - column;

    let y = topPoint + boxSizePad + row;

    if(i % size == size-1){
        row += boxSizePad;
        column += boxSizePad * size;
    }

    
    addNode(i,x,y,"white",i);
    
   }


}

function addNode(value, x, y, colour, ID) {


   
  
    const svgns = "http://www.w3.org/2000/svg";

  
  
    let newCircle = document.createElementNS(svgns, "rect");
  
    newCircle.setAttribute("y", y);
    newCircle.setAttribute("x", x);
    newCircle.setAttribute("stroke", colour);
    newCircle.setAttribute("id", value);
    newCircle.setAttribute("class", "node");
    newCircle.setAttribute("width", boxSize);
    newCircle.setAttribute("height", boxSize);
  
  
    svg.appendChild(newCircle);
}

function generateRandom(min = 0, max = nodeAmount) {

    

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;


    return rand;
}




createGraph(6);




let nodes = document.querySelectorAll(".node");
nodes.forEach(element => {
    element.addEventListener("click", function(){

    })
});

  
    