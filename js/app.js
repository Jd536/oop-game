
const overlay = document.getElementById("overlay");
let keys = Array.from(document.querySelectorAll(".key"));
const game = new Game();
const phrase = new Phrase(game.getRandomPhrase());


// game.phrases.forEach((phrase,index)=>{
//     console.log(`Phrase ${index} - phrase: ${phrase}`);
// });
// phrase.addPhraseToDisplay();

//Add event elistener to the start button to reveal onscreen keyboard and start game
const startButton = document.getElementById("btn__reset");
startButton.addEventListener("click",()=>{
    game.startGame();
    phrase.checkLetter();
    phrase.showMatchedLetter();
    game.checkForWin();
    game.removeLife();
 
});

