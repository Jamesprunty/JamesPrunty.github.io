const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px


function shadow(e){


    //Get width of the hero object


    /*const width = hero.offsetWidth;
    const height = hero.offsetHeight;*/
    //The above code can be written the following way

    //offsetwidth is equal to the variable width and it takes it from hero
    
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    //If the parent has a child, it will log the position relative to that. 
    //So we need to account for this


    //This is the thing you listened on, target will be the thing you triggered on
    //So "this" is "Hero" and the target could be "Hero" or the "h1" element
    //If what it is hovering on is not the same as "hero"
    if(this !== e.target){

        //These take what it logs at the child object and adds it to what it logs to make the total
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;

        
    }

    //Our walk is 100 so our range should be from -50 - 50.
    //take the value divide it by the total width and x by walk. then take half of the walk.
    //Use Math.round to round to whole numbers
    const xWalk = Math.round(x / width * walk) - (walk / 2);
    const yWalk = Math.round(y / height * walk) - (walk / 2);
    //This creates a text shadow that changes with the mouse 
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 blue,
    ${xWalk}px ${yWalk * -1}px 0 green,
    ${xWalk * -1}px ${yWalk * -1}px 0 yellow`;

   

}


hero.addEventListener('mousemove', shadow);