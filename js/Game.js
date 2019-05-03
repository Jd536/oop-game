class Game {
    constructor(){
        this.missed = 0;
        this.phrases =this.createPhrase();
        this.activePhrase = null;
    }
    createPhrase(){// Returns an array of Phrases
        return  [
         "The change is you",
         "I love you",
         "You are beautiful",
         "I love coding JavaScript",
         "Practice makes perfect"
     ]
    }

    getRandomPhrase(){ // Return a phrase picked randomly this.phrases
        let index= Math.floor(Math.random()*5);
        let phrase = this.phrases[index];
        return phrase
       }

    startGame(){
        overlay.style.display = "none";
        this.getRandomPhrase();
        let newPhrase = this.getRandomPhrase();
        phrase.addPhraseToDisplay(newPhrase);
        console.log(newPhrase);
        // this.handleInteraction();
        this.missed=0;
        lives.forEach(function(live){
            if (live.getAttribute('src') == "images/lostHeart.png"){
                    live.setAttribute("src","images/liveHeart.png")
            }
        })
        keys.forEach(key=>{
            key.classList.remove("chosen");
            key.classList.remove("wrong");
            key.disabled=false;
        })
    this.activePhrase = newPhrase;
   }

    handleInteraction(){
        let thisGame = this;
        keys.forEach(function(key){
             key.addEventListener("click", function(){
                 let choosenLetter = key.textContent;
                 phrase.checkLetter(choosenLetter);
                 // console.log(choosenLetter);
                 thisGame.checkWin();
                 thisGame.removeLife(choosenLetter);
                 phrase.showWrongKeys(choosenLetter, thisGame.activePhrase, key);
                 key.setAttribute("disabled", true);
             });
        });
 
        document.addEventListener('keydown', function(event){
             let keyText= event.key;
             phrase.checkLetter(keyText);
             thisGame.checkWin();
                 thisGame.removeLife(keyText);
        });
    }
    checkWin(){
        let matchedLetters = document.querySelectorAll(".show");
        let activeLettersWithoutTheSpaces= document.querySelectorAll("#phrase ul .letter");
        console.log(matchedLetters.length);
        console.log(activeLettersWithoutTheSpaces.length);
        if(matchedLetters.length === activeLettersWithoutTheSpaces.length){
            console.log("win");
            overlay.style.display = "";
            overlay.style.background="#b2fefa";
            overlay.style.background= 'linear-gradient(to right, #b2fefa, #0ed2f7)';
            overlay.className = "win";
            image.setAttribute("src","images/happyEmoji.png")
            overlayH1.textContent = "Awesome!!! You won!!";
            overlayH1.appendChild(image);
             var li =phraseUl.lastElementChild;
             while(li){
                 phraseUl.removeChild(li);
                 li=phraseUl.lastElementChild;
             }
     
 
        }
    }
 
    removeLife(keyText){
         let thisGame = this;
         let LowerCaseActivePhrase = this.activePhrase.toLowerCase();
         let lives = Array.from(document.querySelectorAll('.tries img[src="images/liveHeart.png"'));
         if(LowerCaseActivePhrase.indexOf(keyText) === -1){
             lives[0].setAttribute("src","images/lostHeart.png");
             let misses = Array.from(document.querySelectorAll('.tries img[src="images/lostHeart.png"'));
             thisGame.missed = misses.length;
             console.log(thisGame.missed);
             if(thisGame.missed === 5){
                 console.log("lose");
                 thisGame.gameOver();
             }
         }
     }
 
    gameOver(){
     overlay.style.display = "";
     overlay.style.background="#232526";
     overlay.style.background= 'linear-gradient(to right, #232526, #414345)';
     overlay.className = "lose";
     image.setAttribute("src","images/sadEmoji.png")
     overlayH1.textContent = "You lose!!";
     overlayH1.appendChild(image);
      var li =phraseUl.lastElementChild;
      while(li){
          phraseUl.removeChild(li);
          li=phraseUl.lastElementChild;
      }
      
    }
 

}