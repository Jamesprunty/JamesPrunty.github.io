   // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

   //Select all links on the page
   const triggers = document.querySelectorAll('a');

   //Create the highlight
   const highlight = document.createElement('span');

   highlight.classList.add('highlight');

   //Put the highlight on the page
   document.body.append(highlight);

   function highlighLink(){

    //This gives all info about the position of the item
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }

    //Change the highlight width and height to match the link
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;

    //Move the highlight to the right place
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

   }

//When someone mouseovers a link, run the highlightLink function
triggers.forEach(a => a.addEventListener('mouseenter', highlighLink));












