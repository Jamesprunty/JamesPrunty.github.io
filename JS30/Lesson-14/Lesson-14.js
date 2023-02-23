 // start with strings, numbers and booleans

    let age = 100;
    let age2 = age;
    console.log(age, age2);
    age - 200;
    //This will show (200, 100) because the value of age goes in at the same time
    console.log(age, age2);
    //This means if you change one it will not change the other one. 

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.

    // You might think we can just do something like this:

    const team = players;
    team[3] = "Lux";

    //This will change the last player in "Players" as well as "Team"
    //This is because "Team" is just a reference, not a copy.

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    //This will give you the whole array. 
    const team2 = players.slice(); 

    //This will also copy the array.
    const team3 = [].concat(players);


    // or use the new ES6 Spread

    const team4 = [...players];

    const team5 = Array.from(players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:

    //This will change the original object
    const captain = person; 

    // how do we take a copy instead?

    //"{}" ia an empty object, then the object to copy, then an addition.
    Object.assign({}, person, {number:99});

    // We will hopefully soon see the object ...spread
    //This works the same as an array.
    const cap3 = {...person};
    console.log(cap3);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const cap4 = Object.assign({}, person);

    //One way to deepClone

    const cap5 = JSON.parse(JSON.stringify(person));

