"use strict"

//This is a dictionary
var model = {
    
   // 'hello': ['my']
    
    
};

function removeCharFromString(str, punct){
    
    return str.split(punct).join('');
}

function normalizeStr(str){
    
    var ret = str.toLowerCase();
    var toRemove = ['.', ',', ';'];
    for(var i =0; i < toRemove.length; i++ ){
        
        ret = removeCharFromString(ret,i);
    }
    
    
    
    
    return ret;
    
}

function train(str) {
    
    var trainingStr = normalizeStr(str);
    
    //ret is for return
    var ret = {};
    
    var arr = trainingStr.split(' ');
    
    // For each word in the sentance (start at 1 as we are looking to the word previously)
    for (var i = 1; i < arr.length; i++){
        //If the model does not already contain the word in the key
        if(model[arr[i-1]] == null){
            
            // Add the word to the key
            model[arr[i-1]] = [arr[i]];
        } else{
            //Push into the array
            model[arr[i-1]].push(arr[i]);
        }
        
    }
    

    
    return ret;
    
}



function randElement(arr){
    
    //Return a random number betwen the lowest and max in that key.
    return arr[Math.floor(Math.random()*arr.length)];
}

function suggest(word) {
    
    //If the word has a length
    if (model[word]){
        
        //return the first word in the key
       return randElement(model[word]);
    }
    
    return '';
    
    
}

function saveToLocal(){
    
    //
    window.localStorage.setItem('model', JSON.stringify(model));
    
}

function getFromLocal(){
    
    var asStr = window.localStorage.getItem('model');
    model = JSON.parse(asStr);
}


function generateChain(num, seed){
    
    var ret = '';
    var current = seed;
    for (var i=0; i<num; i++){
        ret += current + ' ';
        current = suggest(current);
    }
    
    ret += current;
    current = suggest(current);  
    
    return ret;
    
}

function main() {
    
    var btn = document.getElementById('btn');
    console.log(btn);
    btn.addEventListener('click', function (){
        var text = document.getElementById('text').value;
        train(text);
        console.log(text);

    });
    
   
            
    
    var suggestButton = document.getElementById('suggestBtn');
    suggestButton.addEventListener('click', function () {
        var feed = document.getElementById('feed').value;
        var number = document.getElementById('number').value;
        
        if(feed == null){
            
            feed = 'is';
        }
        
        if (number == null){
            
            number = "10";
        }
        
        
        
        var suggestion = generateChain(number, feed);
        
        var outputEle = document.getElementById('outputEle');
        outputEle.innerText = suggestion;
    })
    
    //This gets from local storage
    //getFromLocal();
    
    train("It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families that he is considered as the rightful property of some one or other of their daughters. 'My dear Mr. Bennet,' said his lady to him one day, 'have you heard that Netherfield Park is let at last?' Mr. Bennet replied that he had not. 'But it is,' returned she; 'for Mrs. Long has just been here, and she told me all about it.' Mr. Bennet made no answer. 'Do not you want to know who has taken it?' cried his wife impatiently. 'You want to tell me, and I have no objection to hearing it.' This was invitation enough. 'Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.' 'What is his name?' 'Bingley.' 'Is he married or single?' 'Oh! single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!' 'How so? how can it affect them?' 'My dear Mr. Bennet,' replied his wife, 'how can you be so tiresome! You must know that I am thinking of his marrying one of them.' 'Is that his design in settling here?' 'Design! nonsense, how can you talk so! But it is very likely that he may fall in love with one of them, and therefore you must visit him as soon as he comes.' 'I see no occasion for that. You and the girls may go, or you may send them by themselves, which perhaps will be still better, for as you are as handsome as any of them, Mr. Bingley might like you the best of the party. Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it. It was then disclosed in the following manner: -- Observing his second daughter employed in trimming a hat, he suddenly addressed her with: 'I hope Mr. Bingley will like it, Lizzy.' 'We are not in a way to know what Mr. Bingley likes,' said her mother resentfully, 'since we are not to visit.' 'But you forget, mama,' said Elizabeth, 'that we shall meet him at the assemblies, and that Mrs. Long has promised to introduce him.' 'I do not believe Mrs. Long will do any such thing. She has two neices of her own. She is a selfish, hypocritical woman, and I have no opinion of her.' 'No more have I,' said Mr. Bennet; 'and I am glad to find that you do not depend on her serving you.' Mrs. Bennet deigned not to make any reply, but, unable to contain herself, began scolding one of her daughters. 'Don't keep coughing so, Kitty, for Heaven's sake! Have a little compassion on my nerves. You tear them to pieces.' 'Kitty has no discretion in her coughs,'said her father; 'she times them ill.' 'I do not cough for my own amusement,' replied Kitty fretfully. 'When is your next ball to be, Lizzy?' 'To-morrow fortnight.' 'Aye, so it is,' cried her mother; 'and Mrs. Long does not come back till the day before; so it will be impossible for her to introduce him, for she will not know him herself.' 'Then, my dear, you may have the advantage of your friend, and introduce Mr. Bingley to her.' 'Impossible, Mr. Bennet, impossible, when I am not acquainted with him myself; how can you be so teasing?' 'I honour your circumspection. A fortnight's acquaintance is certainly very little. One cannot know what a man really is by the end of a fortnight. But if we do not venture somebody else will; and after all, Mrs. Long and her neices must stand their chance; and, therefore, as she will think it an act of kindness, if you decline the office, I will take it on myself. Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject was sufficient to draw from her husband any satisfactory description of Mr. Bingley. They attacked him in various ways -- with barefaced questions, ingenious suppositions, and distant surmises; but he eluded the skill of them all, and they were at last obliged to accept the second-hand intelligence of their neighbour, Lady Lucas. Her report was highly favourable. Sir William had been delighted with him. He was quite young, wonderfully handsome, extremely agreeable, and, to crown the whole, he meant to be at the next assembly with a large party. Nothing could be more delightful! To be fond of dancing was a certain step towards falling in love; and very lively hopes of Mr. Bingley's heart were entertained. 'If I can but see one of my daughters happily settled at Netherfield,' said Mrs. Bennet to her husband, 'and all the others equally well married, I shall have nothing to wish for.' In a few days Mr. Bingley returned Mr. Bennet's visit, and sat about ten minutes with him in his library. He had entertained hopes of being admitted to a sight of the young ladies, of whose beauty he had heard much; but he saw only the father. The ladies were somewhat more fortunate, for they had the advantage of ascertaining from an upper window that he wore a blue coat, and rode a black horse. An invitation to dinner was soon afterwards dispatched; and already had Mrs. Bennet planned the courses that were to do credit to her housekeeping, when an answer arrived which deferred it all. Mr. Bingley was obliged to be in town the following day, and, consequently, unable to accept the honour of their invitation, etc. Mrs. Bennet was quite disconcerted. She could not imagine what business he could have in town so soon after his arrival in Hertfordshire; and she began to fear that he might be always flying about from one place to another, and never settled at Netherfield as he ought to be. Lady Lucas quieted her fears a little by starting the idea of his being gone to London only to get a large party for the ball; and a report soon followed, that Mr. Bingley was to bring twelve ladies and seven gentlemen with him to the assembly. The girls grieved over such a number of ladies, but were comforted the day before the ball by hearing that instead of twelve he had brought only six with him from London -- his five sisters and a cousin. And when the party entered the assembly room it consisted of only five altogether -- Mr. Bingley, his two sisters, the husband of the eldest, and another young man. Mr. Bingley was good-looking and gentlemanlike; he had a pleasant countenance, and easy, unaffected manners. His sisters were fine women, with an air of decided fashion. His brother-in-law, Mr. Hurst, merely looked the gentleman; but his friend Mr. Darcy soon drew the attention of the room by his fine, tall person, handsome features, noble mien, and the report, which was in general circulation within five minutes after his entrance, of his having ten thousand a year. The gentlemen pronounced him to be a fine figure of a man, the ladies declared he was much handsomer than Mr. Bingley, and he was looked at with great admiration for about half the evening, till his manners gave a disgust which turned the tide of his popularity; for he was discovered to be proud, to be above his company, and above being pleased; and not all his large estate in Derbyshire could then save him from having a most forbidding, disagreeable countenance, and being unworthy to be compared with his friend. Mr. Bingley had soon made himself acquainted with all the principal people in the room; he was lively and unreserved, danced every dance, was angry that the ball closed so early, and talked of giving one himself at Netherfield. Such amiable qualities must speak for themselves. What a contrast between him and his friend! Mr. Darcy danced only once with Mrs. Hurst and once with Miss Bingley, declined being introduced to any other lady, and spent the rest of the evening in walking about the room, speaking occasionally to one of his own party. His character was decided. He was the proudest, most disagreeable man in the world, and every body hoped that he would never come there again. Amongst the most violent against him was Mrs. Bennet, whose dislike of his general behaviour was sharpened into particular resentment, by his having slighted one of her daughters. Elizabeth Bennet had been obliged, by the scarcity of gentlemen, to sit down for two dances; and during part of that time Mr. Darcy had been standing near enough for her to overhear a conversation between him and Mr. Bingley, who came from the dance for a few minutes, to press his friend to join it. 'Come, Darcy,' said he, 'I must have you dance. I hate to see you standing about by yourself in this stupid manner. You had much better dance.'");
    
    console.log(model);
    
    console.log(generateChain(20, 'to'));
    
    saveToLocal();
    
    console.log(suggest('this'));
    
}

main();