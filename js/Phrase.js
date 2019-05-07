class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        let arrayOfRandomPhraseLetters= this.phrase.split("");
        for(let i=0; i<arrayOfRandomPhraseLetters.length; i++) {
            let letter = arrayOfRandomPhraseLetters[i];
            
            if(letter!==" "){
                let li = document.createElement('li');
                li.className = "hide letter"
                li.textContent=letter;
                phraseUl.appendChild(li);
            }else{
                let li = document.createElement('li');
                li.className = "hide space "
                li.textContent=letter;
                phraseUl.appendChild(li);
            }
            
        }
    }
    checkLetter(keyText){
        let thisPhrase = this;
        if (this.phrase.indexOf(keyText) === -1){          
            game.removeLife(keyText);
            return false;
           
        } else{
            thisPhrase.showMatchedLetter(keyText);
            for (let i = 0; i<keys.length;i++){
                if(keys[i].textContent === keyText){
                    keys[i].classList.add("chosen")
                }
            }
            return true;
;        }
     
    }
    
    showMatchedLetter(letter){
        let lis = document.querySelectorAll(".letter");
        for(var i = 0; i < lis.length; i++){
            if(lis[i].textContent == letter){
            lis[i].classList.remove("hide");
            lis[i].classList.add("show");
            }
        }
        }
   
}