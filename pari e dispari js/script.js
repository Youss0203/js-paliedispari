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
const randomNumber = comuputerRandomNumber ()
function comuputerRandomNumber(){
    return Math.floor(Math.random()*4)+1;
}


/* const randomNumber=computerRandomNumber(1,5) 
function computerRandomNumber(minNumber,maxNumber){
    return Math.floor(Math.random()*(maxNumber-minNumber + 1)-minNumber)
}*/


/*Sommiamo i due numeri */

let somma= userNumber+randomNumber;
const risultato=sommaDeiNumeri()

function sommaDeiNumeri(){

    if(somma % 2 === 0){
        somma = "pari"
    }else{
        somma = "dispari"
    }
}



function vincitore(){
if(risultato===userChoice){
    return "l'utente vince"
}else{
    return "il computer vince"
}
}
const ilVincitore = vincitore()
console.log(ilVincitore)





