let table = document.getElementById('container');

let buttons = document.querySelectorAll(".controlOption");

let referenceBtn = document.querySelector("#reference");
let spliceBtn = document.querySelector("#splice");
let concatBtn = document.querySelector("#concat");
let spreadBtn = document.querySelector("#spread");
let assignBtn = document.querySelector("#assign");
let resetBtn = document.querySelector("#reset");





let tableMade = false;
rowCount = 0;
const data = [{

  name: "James" ,
  lastName: "Prunty",
  age: "28"

}];


document.querySelector("#originalTable").insertAdjacentHTML('afterend',
        `<table id="table"><thead><tr><th>
     ${Object.keys(data[0]).join('<th>')}
    </thead><tbody><tr><td>${data.map(e => Object.values(e)
            .join('<td>')).join('<tr><td>')}</table>`)

    tableMade = true;
    rowCount++


    function processData (e){

        console.log(e);
        console.log(this);


        console.log(this);



    }

    buttons.forEach(element => {
        
        element.addEventListener('click', processData);

    });

   