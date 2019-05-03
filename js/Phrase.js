class Phrase{
    constructor(){
        this.phrase = game.activePhrase;
    }
    addPhraseToDisplay(phrase){
        let ul= document.querySelectorAll("#phrase ul")[0];
        let letters= phrase.toLowerCase().split("");
        for(let i=0; i<letters.length; i++) {
            let letter = letters[i];
            
            if(letter!==" "){
                let li = document.createElement('li');
                li.className = "hide letter"
                li.textContent=letter;
                ul.appendChild(li);
            }else{
                let li = document.createElement('li');
                li.className = "hide space "
                li.textContent=letter;
                ul.appendChild(li);
            }
            
        }
    }

    checkLetter(keyText){ 
        let thisPhrase = this;
        let lis = document.querySelectorAll(".letter");  
           for(let i=0; i<lis.length; i++){
            if(keyText == lis[i].textContent ){
                    console.log(true);
                   thisPhrase.showMatchedLetter(lis[i]);
            } 
        }
     
    }
    showMatchedLetter(lis){
    lis.classList.remove("hide");
    lis.classList.add("show");
    }

    showWrongKeys (keyText, activePhrase, key){
             
            if(activePhrase.indexOf(keyText) === -1){
                console.log("wrong")
                key.classList.add("wrong");
            } else{
                key.classList.add("chosen");
            }
    
    }
}