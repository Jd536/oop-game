let overlay = document.getElementById("overlay");
let phraseUl = document.querySelectorAll("#phrase ul")[0];
let overlayH1 = overlay.querySelectorAll("h1")[0];
let keys = Array.from(document.querySelectorAll(".key"));
let tries = document.querySelectorAll(".tries");
var lives = document.querySelectorAll(".tries img");
let span = document.createElement("span");
let image = document.createElement("img");
image.height="50";
span.appendChild(image);

const game = new Game();
const phrase = new Phrase();
console.log(phrase.phrase);
console.log(game.activePhrase);

let reset__btn = document.getElementById("btn__reset");
reset__btn.addEventListener("click", function(event){
    game.startGame();

})

game.handleInteraction();