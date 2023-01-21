const endpoint = ".//Names.json";

const names = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => names.push(...data))

console.log(names);





