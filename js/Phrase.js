/* Phrase class, to create new phrases*/
class Phrase{
    constructor(phrase){
        this.phrase = phrase;
    }
    addPhraseToDisplay(){
         let ul = document.querySelectorAll("#phrase ul")[0];
        let letters = this.phrase.split("");
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
    checkLetter(){//Checks to see if letter selected  matches a letter in the phrase.
        let activePhrase= this.phrase.toLowerCase().split("");
        let lis =Array.from(document.querySelectorAll(".letter"));
        keys.forEach(function(key){
            let keyText = key.textContent;
            key.addEventListener("click", function(){
               
                if(activePhrase.indexOf(keyText)!==-1){
                    console.log(true);
                    return true;
                }else{
                    console.log(false);
                    return false;
                }
            });            
        });
         console.log(activePhrase); 
    }
    showMatchedLetter(){// Reveal the matching letters
        let lis = Array.from(document.querySelectorAll(".letter"));
        let keys = Array.from(document.querySelectorAll(".key"));
        for(let i=0;i<lis.length;i++){
        keys.forEach(function(key){
            key.addEventListener("click", function(){
                if(key.textContent=== lis[i].textContent.toLowerCase()){
                    lis[i].classList.remove("hide");
                    lis[i].classList.add("show");
                }
            });
        });
        }
        
        }
}

