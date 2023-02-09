let table = document.getElementById('container');
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


    function processData (){

        console.log(this);



        
    }