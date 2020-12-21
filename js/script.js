/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

var sceltaUtente;
do {
    sceltaUtente = prompt('Scegli tra "pari" o "dispari".')
    sceltaUtente = sceltaUtente.toLowerCase().trim();
} while (sceltaUtente != 'pari' && sceltaUtente != 'dispari')

document.getElementById('segno').innerHTML = sceltaUtente.toUpperCase();

var numeroUtente;
do {
    numeroUtente = parseInt(prompt('Scegli un numero da "1" a "5".'));
} while (numeroUtente <= 0 || numeroUtente >= 6)

document.getElementById('numero-utente').innerHTML = 'Ed il numero: ' + numeroUtente;

var numeroCpu = randomNumber(1,5);
var sommaNumeri = somma(numeroUtente,numeroCpu);
var tipologiaSomma = isPari(sommaNumeri);

document.getElementById('numero-cpu').innerHTML = 'Il computer ha lanciato: ' + numeroCpu;
document.getElementById('somma').innerHTML = 'La somma è: ' + sommaNumeri;

if (tipologiaSomma == sceltaUtente){
    document.getElementById('vincitore').innerHTML = 'Hai Vinto!';
} else {
    document.getElementById('vincitore').innerHTML = 'Hai Perso!';
}

// Funzioni
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function somma(n1,n2) {
    return n1 + n2;
}

function isPari(tot) {
    if (tot%2 == 0) {
        return 'pari';
    }
    return 'dispari';
}