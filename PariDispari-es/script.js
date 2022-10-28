/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/*----------------
    FUNZIONE
----------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sommaNums(numOne, numTwo){
    return numOne + numTwo;
}

function ifPari(num){
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

/*----------------
    MAIN
----------------*/
let sceltaPariDispari = prompt("Scegli Pari o Dispari.");

while (sceltaPariDispari.toLocaleLowerCase() != "pari" && sceltaPariDispari.toLocaleLowerCase() != "dispari") {
    sceltaPariDispari = prompt("Attenzione! Scegli Pari o Dispari!");
}

console.log(`Hai scelto di giocare ${sceltaPariDispari}`);

// ----

let sceltaNumero = Number(prompt("Adesso scegli un numero da 1 a 5"));

while (sceltaNumero < 1 || sceltaNumero > 5) {
    sceltaNumero = Number(prompt("Attenzione! Devi scegliere un numero tra 1 a 5!"));
}

console.log(`Tu hai scelto ${sceltaNumero}`);

// ----

const sceltaNumeroCPU = getRndInteger(1, 5);
console.log(`Il computer ha scelto ${sceltaNumeroCPU}`);

// ----

const tot = sommaNums(sceltaNumero, sceltaNumeroCPU);
console.log(`Il totale è ${tot}`)
// ----

if (ifPari(tot) === true && sceltaPariDispari === "pari"){
    console.log("Hai vinto!");
} else if (ifPari(tot) === false && sceltaPariDispari === "dispari"){
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}

// ----