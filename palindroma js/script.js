/*Palidroma: 
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/

/*Chiedere all’utente di inserire una parola */
const userWord = prompt("inserisci una parola");
/*Creare una funzione per capire se la parola inserita è palindroma*/

if (userWord===getReversedWord(userWord)){
    console.log("palindroma")
}else{
    console.log("non è palindroma")
}

function getReversedWord(word){
    let reverseWord="";
    for (let i=word.length -1; i > 0; i--){
        reverseWord=reverseWord+word.charAt(i);
        
    }
    return reverseWord
}
