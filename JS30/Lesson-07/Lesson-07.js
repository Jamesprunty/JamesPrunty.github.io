    // ## Array Cardio Day 2

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      // If there is at least one person older than 18 it will return true

      /*
      const isAdult = people.some(function(person){

        const currentYear = (new Date()).getFullYear();
        if(currentYear - person.year >= 18){
          return true;
        }
      });*/

      //The code above can be written like this:

      const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 18);
  
      console.log(isAdult);

      // Array.prototype.every() // is everyone 19 or older?
      //The every function works the same way as the some function

      const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 18);
  
      console.log(allAdults);

      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423

      /*const comment = comments.find (function(comment){

        if(comment.id === 823423){
          return true;
        }
      });*/


      const comment = comments.find(comment => comment.id === 823423);

      console.log(comment);
  
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423

      const index = comments.findIndex(comment => comment.id === 823423);

      console.log(index);

      //You can remove an object with the below code:
      //comments.splice(index, 1);


      //Or you could create a new array without the current object
      //This means we can keep the first array in case we need it.

      const newComments = [
        ...comments.slice(0, index), 
        ...comments.slice(index + 1)

      ];




  