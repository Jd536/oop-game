const overlay = document.getElementById("overlay");
let overlayH1 = overlay.querySelectorAll("h1")[0];
const phraseContainer = document.querySelectorAll("#phrase ul")[0];
const keys = document.querySelectorAll(".key");
var lives = document.querySelectorAll(".tries img");
const game = new Game();
let span = document.createElement("span");
let image = document.createElement("img");
image.height="50";
span.appendChild(image);


let startAndResetButton = document.getElementById("btn__reset");
startAndResetButton.addEventListener("click", function(){
    game.startGame();
});

keys.forEach(key => { // Handle click event on the onscreen keyboard
    key.addEventListener("click", (event)=>{
       game.handleInteraction(event);
    })
});

document.addEventListener("keypress", function(event){ // handle physical keyboard event
    game.handleInteraction(event);
    return false;
});
