/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/*----------------
    FUNZIONE
----------------*/
function ifPalindroma(word){
    let reversed = "";
    for (let i = word.length - 1; i >=  0; i--){
        reversed += word[i];
    }
    if( word.toLowerCase() === reversed.toLowerCase()){
        return true;
    }
    return false;
}

/*----------------
    MAIN
----------------*/
const userWord = prompt("Inserisci una parola per sapere se è una palindroma!");
if (ifPalindroma(userWord)){
    console.log(`La parola "${userWord}" è una palindroma`);
} else {
    console.log(`La parola "${userWord}" non è una palindroma`);
}

// Esempi parole palindrome:
    // Esse.
    // Osso.
    // Aerea.
    // Esose.
    // Aveva.
    // Inani.
    // Ingegni.
    // Ossesso.