/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/*----------------
    FUNZIONE
----------------*/
// FUNZIONE CHE GENERA UN NUMERO RANDOM 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// FUNZIONE CHE SOMMA DUE NUMERI PASSATI DA ARGOMENTI
function sommaNums(numOne, numTwo){
    return numOne + numTwo;
}

//FUNZIONE CHE CONTROLLA SE UN NUMERO E' PARI O DISPARI
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
// ---- USER SCEGLIE PARI E DISPARI E PUO' SCEGLIERE SOLO QUESTI DUE VALORI ----
let sceltaPariDispari = prompt("Scegli Pari o Dispari.");

while (sceltaPariDispari.toLocaleLowerCase() != "pari" && sceltaPariDispari.toLocaleLowerCase() != "dispari") {
    sceltaPariDispari = prompt("Attenzione! Scegli Pari o Dispari!");
}

if (sceltaPariDispari === "pari"){
    console.log(`Hai scelto di giocare Pari.`);
} else {
    console.log(`Hai scelto di giocare Dispari.`);
}

// ---- USER SCEGLIE UN NUMERO DA 1 A 5 E CONTROLLO CHE NON INSERISCA ALTRI VALORI ----

let sceltaNumero = Number(prompt("Adesso scegli un numero da 1 a 5"));

while (sceltaNumero < 1 || sceltaNumero > 5) {
    sceltaNumero = Number(prompt("Attenzione! Devi scegliere un numero tra 1 a 5!"));
}

console.log(`Tu hai scelto ${sceltaNumero}`);

// ---- AL COMPUTER VIENE ASSEGNATO UN NUMERO RANDOM DA 1 A 5 TRAMITE LA FUNZIONE GETRNDINTEGER ----

const sceltaNumeroCPU = getRndInteger(1, 5);
console.log(`Il computer ha scelto ${sceltaNumeroCPU}`);

// ---- I NUMERI DELL'USER E DELLA CPU VENGONO SOMMATI DALLA FUNZIONE SOMMANUMS ----

const tot = sommaNums(sceltaNumero, sceltaNumeroCPU);
console.log(`Il totale è ${tot}`)

// ---- LA FUNZIONE IFPARI CONTROLLA SE IL TOTALE DELLA SOMMA E' PARI O DISPARI E IN BASE AGLI IF STAMPA
// IL MESSAGGIO DI VINCITA O DI PERDITA ----

if (ifPari(tot) === true && sceltaPariDispari === "pari"){
    console.log("Hai vinto!");
} else if (ifPari(tot) === false && sceltaPariDispari === "dispari"){
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}