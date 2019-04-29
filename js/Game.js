/* Game class, start and end the game, handle interactions, get a 
random phrase, check for a win, and remove a life from the scoreboard.*/

class Game{
    constructor(){
        this.missed = 0; //Used to track the number of missed guesses by the player.
        this.phrases = this.createPhrases();
        this.activePhrase =null;// Phrase object that's currenlty in play.
    }
    createPhrases(){// generate array of phrases
       return [
            "The change is you",
            "I love you",
            "You are beautiful",
            "I love coding JavaScript",
            "Practice makes perfect"
        ]
        
    }
    getRandomPhrase(){// select a random string from the phrases array.
        let index= Math.floor(Math.random()*5);
        return this.phrases[index];

    }
    startGame(){
    overlay.style.display ="none";
    this.activePhrase = this.getRandomPhrase();
    phrase.addPhraseToDisplay();
    }
    checkForWin(){
        keys.forEach(key=>{
            key.addEventListener("click", function(){
                let  lettersOnBoard=document.querySelectorAll(".letter");
                let selectedLetter= document.querySelectorAll(".show");
                if(lettersOnBoard.length===selectedLetter.length){
                    console.log("You Won");
                    return this;
                }
            });
        });
       
    }
    removeLife(){
        keys.forEach(key=>{
            key.addEventListener("click", function(){
                let failed =  Array.from(document.querySelectorAll('.tries img[src="images/lostHeart.png"'));
                if(phrase.checkLetter()!=true){
                    let i=0;
                    let tries =Array.from(document.querySelectorAll('.tries img[src="images/liveHeart.png"'));
                        tries[i].setAttribute("src","images/lostHeart.png"); 
                        if(failed.length==5){
                            this.gameOver();
                        }
                              
                }
            
                });
            });
           
        }

    gameOver(){
        return overlay.style.display="";
            
        } 
    
}