/*Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari 
(usando un'altra funzione) 
Dichiariamo chi ha vinto.*/



/* l'utete sceglie pari e dispari e inserisce un numero da 1 a 5 */
const userChoice = prompt("scegli pari o dispari");
const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));


/*Generiamo un numero random (sempre da 1 a 5) per il computer*/
function comuputerRandomNumber(randomNumber){
    return math.Floor(math.random()*4)+1;
}


function sommaDeiNumeri(){
    let totale= userNumber+randomNumber;

    if(totale % 2 === 0){
        totale = "pari"
    }else{
        totale="dispari"
    }
}



