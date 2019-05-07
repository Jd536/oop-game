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

let resetButton = document.getElementById("btn__reset");
resetButton.addEventListener("click", function(event){
    game.startGame();

});
keys.forEach(function(key){
    key.addEventListener("click", function(){
        let keyText = key.textContent;
        game.handleInteraction(keyText);
        key.setAttribute("disabled", "true");
    })
});
document.addEventListener('keypress', function(event){
    let keyText= event.key;
    game.handleInteraction(keyText);
    
});
