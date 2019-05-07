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
            "Practice makes perfect"
        ]
    }
    getRandomPhrase(){
        let index= Math.floor(Math.random()*this.phrases.length);
        let randomPhrase = this.phrases[index];
        return new Phrase(randomPhrase);
    }

    startGame(){
        overlay.style.display = "none";
        if(overlay.className =="win" || overlay.className=== "lose"){
            overlayH1.appendChild(image);
            var li =phraseUl.lastElementChild;
            this.missed = 0;
            while(li){
                phraseUl.removeChild(li);
                li=phraseUl.lastElementChild;
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

    handleInteraction(keyText){

        this.activePhrase.checkLetter(keyText);
        this.gameOver();
     
    }
    
    checkWin(){
        let revealedLetters = document.querySelectorAll(".show");
        let lettersOnDisplay = document.querySelectorAll(".letter");
        if(revealedLetters.length === lettersOnDisplay.length){
            return true;
        } else if(this.missed === 5){
            return false;
        }
    }

    removeLife(keyText){
            lives[this.missed].setAttribute("src","images/lostHeart.png");
            this.missed += 1;
            for (let i = 0; i<keys.length;i++){
                if(keys[i].textContent === keyText){
                    keys[i].classList.add("wrong")
                }
            };
    }

    gameOver(){
        if (this.checkWin() === false){
                overlay.style.display = "";
                overlay.style.background="#232526";
                overlay.style.background= 'linear-gradient(to right, #232526, #414345)';
                overlay.className = "lose";
                image.setAttribute("src","images/sadEmoji.png")
                overlayH1.textContent = "You lose!!";
                overlayH1.appendChild(image);           
        } else if (this.checkWin() === true){
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