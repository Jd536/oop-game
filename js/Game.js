class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }
    
    createPhrase(){
        return[
            "The change is you",
            "I love you",
            "You are beautiful",
            "I love coding JavaScript",
            "You are perfect"
        ]
    }

    getRandomPhrase(){
        let index = Math.floor(Math.random()*this.phrases.length);
        let randomPhrase = this.phrases[index];
        return new Phrase(randomPhrase);
    }

    startGame(){
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
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction(){
        if(event.target.className ==="key"){
           
            let button = event.target;
            button.setAttribute("disabled", true);
            this.activePhrase.checkLetter(button);
            this.activePhrase.showMatchedLetter(button);
            this.removeLife(button);
            this.gameOver();
            this.activePhrase.showMatchedLetter(button);
        }   else {
            let pressedKey = event.key;
            keys.forEach(key=>{
                if(pressedKey === key.textContent){
                    this.activePhrase.checkLetter(key);
                    this.activePhrase.showMatchedLetter(key);
                    if(key.disabled !== true){
                        this.removeLife(key);
                    }
                    this.gameOver();
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
            return true;
        }
    }

    removeLife(key){
        if(this.activePhrase.checkLetter(key)=== false){
            lives[this.missed].setAttribute("src","images/lostHeart.png");
            this.missed += 1;
        }
    }

    gameOver(){
        if (this.missed ===  5){
            overlay.style.display = "";
            overlay.style.background="#232526";
            overlay.style.background= 'linear-gradient(to right, #232526, #414345)';
            overlay.className = "lose";
            image.setAttribute("src","images/sadEmoji.png")
            overlayH1.textContent = "You lose!!";
            overlayH1.appendChild(image);           
        }
        if (this.checkWin() === true){
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