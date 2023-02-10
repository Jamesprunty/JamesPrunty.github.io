let table = document.getElementById('container');

let buttons = document.querySelectorAll('input[type="button"]');

let tableMade = false;
let table2Made = false;
rowCount = 0;
const data = [{

  name: "James",
  lastName: "Prunty",
  age: "28"

}];

const dataArray = ["SJames", "Prunty", "28"]





document.querySelector("#originalTable").insertAdjacentHTML('afterend',
  `<table id="table"><thead><tr><th>
     ${Object.keys(data[0]).join('<th>')}
    </thead><tbody><tr><td>${data.map(e => Object.values(e)
    .join('<td>')).join('<tr><td>')}</table>`)



tableMade = true;
rowCount++


function processData(e) {

  let func = this.value;


  if (tableMade) {


    document.getElementById("table").remove();
  }

  if (table2Made) {

    document.getElementById("table2").remove();

  }

  switch (func) {


    case "reference":
      
     const newData = data;
      newData[0].name = "Jeremy";
      console.log(newData);

      document.querySelector("#originalTable").insertAdjacentHTML('afterend',
        `<table id="table"><thead><tr><th>
     ${Object.keys(data[0]).join('<th>')}
    </thead><tbody><tr><td>${data.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)

      document.querySelector("#newTable").insertAdjacentHTML('afterend',
        `<table id="table2"><thead><tr><th>
       ${Object.keys(newData[0]).join('<th>')}
      </thead><tbody><tr><td>${newData.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)

      table2Made = true;

      break;


    case "slice":

      const newData2 = data.slice();
      newData2[0].name = "Jeremy";
      console.log(newData2);
      console.log(data);

      document.querySelector("#originalTable").insertAdjacentHTML('afterend',
        `<table id="table"><thead><tr><th>
       ${Object.keys(data[0]).join('<th>')}
      </thead><tbody><tr><td>${data.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)

      document.querySelector("#newTable").insertAdjacentHTML('afterend',
        `<table id="table2"><thead><tr><th>
         ${Object.keys(newData2[0]).join('<th>')}
        </thead><tbody><tr><td>${newData2.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)

      table2Made = true;


      break;

    case "concat":
      const newData3 = [].concat(data);
      newData3[0].name = "Jack";
      console.log(newData3);
      console.log(data);

      document.querySelector("#originalTable").insertAdjacentHTML('afterend',
        `<table id="table"><thead><tr><th>
       ${Object.keys(data[0]).join('<th>')}
      </thead><tbody><tr><td>${data.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)

      document.querySelector("#newTable").insertAdjacentHTML('afterend',
        `<table id="table2"><thead><tr><th>
         ${Object.keys(newData3[0]).join('<th>')}
        </thead><tbody><tr><td>${newData3.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)

      table2Made = true;

      break;

    case "spread":

      const newData4 = {...data};
      newData4[0].name = "Jamie";
      console.log(newData4);
      console.log(data);

      document.querySelector("#originalTable").insertAdjacentHTML('afterend',
        `<table id="table"><thead><tr><th>
       ${Object.keys(data[0]).join('<th>')}
      </thead><tbody><tr><td>${data.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)

      document.querySelector("#newTable").insertAdjacentHTML('afterend',
        `<table id="table2"><thead><tr><th>
         ${Object.keys(newData4[0]).join('<th>')}
        </thead><tbody><tr><td>${newData4.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)
      break;

    case "assign":
      newData5 = Object.assign({}, data, {name:"Jonah"});

      console.log(newData5);
      console.log(data);

      document.querySelector("#originalTable").insertAdjacentHTML('afterend',
        `<table id="table"><thead><tr><th>
       ${Object.keys(data[0]).join('<th>')}
      </thead><tbody><tr><td>${data.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)

      document.querySelector("#newTable").insertAdjacentHTML('afterend',
        `<table id="table2"><thead><tr><th>
         ${Object.keys(newData5[0]).join('<th>')}
        </thead><tbody><tr><td>${newData5.map(e => Object.values(e)
          .join('<td>')).join('<tr><td>')}</table>`)
      break;
      break;

    case "refresh":
      location.reload();
      console.log(this.value);
      break;

    default:
      console.log(this.value);

  }



}

buttons.forEach(element => {

  element.addEventListener('click', processData);

});

