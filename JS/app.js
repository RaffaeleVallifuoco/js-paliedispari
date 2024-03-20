console.log('Console Test');
console.log('');

// // chiedere utente inserimento parola

// const word = prompt('Inserisci una parola : ');
// console.log('la parola inserita è : ' , word);

// //crea funzione verifica palindromo

function palindromo (text) {
let check = false;
let splitText = text.split('');
console.log('text split : ', splitText);
let inverseText = splitText.reverse();
console.log('incerso split : ' , inverseText);
let joinReverse = inverseText.join('');
console.log('inverso : ' , joinReverse);

if(text == joinReverse) {
    check = true;
}
return check;
}

const result = palindromo (word);

console.log(result);

if(result) {
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}




// utente scegli pari o dispari da prompt
//inserisce numero da 1 a 5
// generare numero random da 1 a 5 tramite funzione
//sommo numeo scelto e random e stabilisco se la somma è pari tramite funzione

let choice = prompt('Indovina se uscirà un numero pari o dispari');
    console.log('Hai scelto' , choice);
let choiceNumber = parseInt(prompt('Inserisci un numero a scelta tar 1 e 5  : '));
    console.log('Il numero inserito è : ', choiceNumber);
function createRandom (minValue , maxValue) {
    const random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return random;
}
const randomNumber = createRandom (1 , 5);
console.log('random generato : ' ,randomNumber);

function sommaPariDispari(numScelto , numRandom ) {
    const sum = numScelto + numRandom;

    return sum % 2 == 0;
}

const value = sommaPariDispari (choiceNumber , randomNumber);
console.log('La somma è pari ? ' , value);

if(choice == 'pari') {
    choice = true;
} else {
    choice = false;
}
if(choice == value) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}