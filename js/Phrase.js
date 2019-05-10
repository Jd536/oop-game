class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase(); // change all letters in the active phrase to lowecase
    }

    addPhraseToDisplay(){ // Select the Active phrase, turn it into an array and add it to the display 
        let arrayOfPhraseLetter = this.phrase.split("");
        arrayOfPhraseLetter.forEach(letter => {
            let li = document.createElement("li");
            li.textContent = letter;
            
            if(letter!==" "){ // is called if the array element is a space
                let li = document.createElement('li');
                li.className = "hide letter"
                li.style.userSelect = "none";
                li.textContent=letter;
                phraseContainer.appendChild(li);
            }else{//is called if the array element is an actual letter
                let li = document.createElement('li');
                li.className = "hide space ";
                li.textContent=letter;
                phraseContainer.appendChild(li);
            }
        });
    }

  
    checkLetter(key){ // check if the clicked button matched a letter in the activePhrase
        let keyText = key.textContent;
        let thisPhrase = this;
        if( thisPhrase.phrase.indexOf(keyText) != -1){
            return true;
        } else{
            return false;
        }
    }
    showMatchedLetter(key){ // display the letter if there is a match
        let lis = document.querySelectorAll(".letter");
        for(var i = 0; i < lis.length; i++){
            if(lis[i].textContent == key.textContent){
            lis[i].classList.remove("hide");
            lis[i].classList.add("show");
            }
        }
    }
}