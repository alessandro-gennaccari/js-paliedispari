/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


var sceltaUtente = prompt('Scegli tra pari o dispari.');
sceltaUtente = sceltaUtente.toLowerCase();
var numeroUtente = prompt('Scegli un numero da 1 a 5.')

while (sceltaUtente != 'pari' && sceltaUtente != 'dispari'){
    scelta = prompt('Hai sbagliato, puoi scegliere tra "pari" o "dispari".')
}
console.log(sceltaUtente);

while (numeroUtente <= 0 || numeroUtente >= 6){
    numeroUtente = prompt('Hai sbagliato numero, puoi scegliere un numero da "1" a "5".')
}
console.log(numeroUtente);
