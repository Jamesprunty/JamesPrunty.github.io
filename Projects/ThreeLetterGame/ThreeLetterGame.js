const alphabet = "abcdefghijklmnopqrstuvwxyz"
let letters = randomLetters(3);
console.log(letters);











function randomLetters(amount){
    let tempArray = [];
    
    function letterGen(){
        const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
        return randomChar;
    }

    for (let i = 0; i < amount; i++) {
        tempArray.push(letterGen());
        
    }

    return tempArray;



}