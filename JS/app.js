console.log('Console Test');
console.log('');

// chiedere utente inserimento parola

const word = prompt('Inserisci una parola : ');
console.log('la parola inserita è : ' , word);

//crea funzione verifica palindromo

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


    