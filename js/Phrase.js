class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        let arrayOfPhraseLetter = this.phrase.split("");
        arrayOfPhraseLetter.forEach(letter => {
            let li = document.createElement("li");
            li.textContent = letter;
            
            if(letter!==" "){
                let li = document.createElement('li');
                li.className = "hide letter"
                li.style.userSelect = "none";
                li.textContent=letter;
                phraseContainer.appendChild(li);
            }else{
                let li = document.createElement('li');
                li.className = "hide space ";
                li.textContent=letter;
                phraseContainer.appendChild(li);
            }
        });
    }

  
    checkLetter(key){
        let keyText = key.textContent;
        let thisPhrase = this;
        if( thisPhrase.phrase.indexOf(keyText) != -1){
            // console.log(true);
            key.classList.add("chosen");
            return true;
        } else{
            key.classList.add("wrong");
            // console.log(false);
            return false;
        }
    }
    showMatchedLetter(key){
        let lis = document.querySelectorAll(".letter");
        for(var i = 0; i < lis.length; i++){
            if(lis[i].textContent == key.textContent){
            lis[i].classList.remove("hide");
            lis[i].classList.add("show");
            }
        }
    }
}