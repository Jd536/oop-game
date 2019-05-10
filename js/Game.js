class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }
    
    createPhrase(){ // hold and return the an Array of phrases
        return[
            "The change is you",
            "I love you",
            "You are beautiful",
            "I love coding JavaScript",
            "You are perfect"
        ]
    }

    getRandomPhrase(){ // Generates a random phrases based on a random number which is max at the length of the array
        let index = Math.floor(Math.random()*this.phrases.length);
        let randomPhrase = this.phrases[index];
        return new Phrase(randomPhrase);
    }

    startGame(){ // starts and reset the game and it's values
        overlay.style.display = "none";
        if(overlay.className =="win" || overlay.className=== "lose"){
            overlayH1.appendChild(image);
            var li =phraseContainer.lastElementChild;
            this.missed = 0;
            while(li){
                phraseContainer.removeChild(li);
                li=phraseContainer.lastElementChild;
            }
            for(var i = 0; i < lives.length; i++){
                lives[i].setAttribute("src","images/liveHeart.png")
            }

            keys.forEach(function(key){
                key.classList.remove("wrong");
                key.classList.remove("chosen");
                key.removeAttribute("disabled");
            })
        }
        this.activePhrase = this.getRandomPhrase(); // value of the selected phrase is passed to the activePhrase property
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction(){
        if(event.target.className ==="key"){
           
            let button = event.target;
            button.setAttribute("disabled", true);
            // this.activePhrase.checkLetter(button);
            this.activePhrase.showMatchedLetter(button);
            if(this.activePhrase.checkLetter(button) === true){
               button.classList.add("chosen");
            } if(this.activePhrase.checkLetter(button) === false){
                button.classList.add("wrong");
                this.removeLife(button);
                this.missed += 1;
            }
            if (this.checkWin() ==="win"){
                this.gameOver("win");
            } else if(this.checkWin() === "lose"){
                this.gameOver("lose");
            }
            this.activePhrase.showMatchedLetter(button);
        }  else {
            let pressedKey = event.key;
            keys.forEach(key=>{
                if(pressedKey === key.textContent){
                    // this.activePhrase.checkLetter(key);
                    this.activePhrase.showMatchedLetter(key);
                 
                    if(this.activePhrase.checkLetter(key) === true){
                        key.classList.add("chosen");
                     } else if(this.activePhrase.checkLetter(key) === false){
                         key.classList.add("wrong");
                           if(key.disabled !== true){
                                this.removeLife(key);
                                this.missed += 1;
                            }
                         
                     }
                     if (this.checkWin() ==="win"){
                        this.gameOver("win");
                    } else if(this.checkWin() === "lose"){
                        this.gameOver("lose");
                    }
                    this.activePhrase.showMatchedLetter(key);
                    key.setAttribute("disabled", true);
                }
             
            });
        }
    }

    checkWin(){
        let matchedLetters = document.querySelectorAll(".show"); 
        let activePhraseLetters = document.querySelectorAll(".letter");
        if(matchedLetters.length === activePhraseLetters.length){
            console.log("win!");
            return "win";
        }  else if(this.missed == 5){
            return "lose";
        }
    }

    removeLife(key){
        if(this.activePhrase.checkLetter(key)=== false){
            lives[this.missed].setAttribute("src","images/lostHeart.png");
            // this.missed += 1;
        }
    }

    gameOver(message){ // display a message and change the color of the overlay based on the message received from the checkwin method called in the handle interaction method
        if (message ===  "lose"){
            overlay.style.display = "";
            overlay.style.background="#232526";
            overlay.style.background= 'linear-gradient(to right, #232526, #414345)';
            overlay.className = "lose";
            image.setAttribute("src","images/sadEmoji.png")
            overlayH1.textContent = "You lose!!";
            overlayH1.appendChild(image);           
        }
        if (message ===  "win"){
            overlay.style.display = "";
            overlay.style.background="#b2fefa";
            overlay.style.background= 'linear-gradient(to right, #b2fefa, #0ed2f7)';
            overlay.className = "win";
            image.setAttribute("src","images/happyEmoji.png")
            overlayH1.textContent = "Awesome!!! You won!!";
            overlayH1.appendChild(image);
        }
    }
}