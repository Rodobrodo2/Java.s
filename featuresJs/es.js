//Estrazione elementi base (node file.js)
let numeri = [51, 52, 53, 54, 55];
let [primo, secondo] = numeri;
console.log(primo, secondo);

//Saltare elementi durante il destructuring
[primo, , terzo] = numeri;
console.log(primo, terzo);

//Destructuring con valori predefiniti (arr)
let frutti = ["banane", "papaya", "mango", "ananas"];
let [india, brasile, messico, costaRica, cina = "castagne"] = frutti;
console.log("L'India e il paese che produce piu " + india);
console.log("Il Brasile il paese che produce piu " + brasile);
console.log("Il Messico e il paese che produce piu " + messico);
console.log("Il Costa Rica e il paese che produce piu " + costaRica);
console.log("La Cina e il paese che produce piu " + cina);

//Estrazione di proprietà base 
let utente = {
    name: "Claudio",
    zipCode: 34567
}
let {name, zipCode, city = "Torino",  university = "Informatica"} = utente;
console.log(`Nome: ${name}`)
console.log(`Zipcode: ${zipCode}`)

//Destructuring con nomi di variabili diversi predefiniti(obj)
let { 
    name: nomePersona,
    eta: etaPersona = 29,
    city: cittàResidenza = "Roma", 
    lavoro: lavoroAttività = "Sviluppatore",
} = utente;

console.log(`Nome: ${nomePersona}`);
console.log(`Età: ${etaPersona}`);
console.log(`Città: ${cittàResidenza}`);
console.log(`Lavoro: ${lavoroAttività}`);

//Destructuring con valori predefiniti (obj)
console.log("Citta: " + city);
console.log("Università: " + university);

//Coppia di un Array
let numeriOriginale = [1, 2, 3, 4, 5];
let numeriCopia = [...numeriOriginale];
numeriOriginale.push(6);

console.log("Array originale:", numeriOriginale);
console.log("Array copia:", numeriCopia);

//Unione di 2 array
const proteine = ["pollo", "tonno", "seitan"];
const carboidrati = ["pasta", "riso", "farro"];
const dieta = [ ...proteine, ...carboidrati];
console.log("La tua nuova dieta comprende: " + dieta);

//Copia di un oggetto con proprietà aggiuntive
let macchina = {
    marca: "mercedes",
    modello: "amg",
    portiere: 5,
    cambio: "manuale"
}

let copiaMacchina = { ...macchina, ruote: 4};
console.log(macchina);
console.log(copiaMacchina);

//Funzione con parametri variabili
function somma(...numeri) {
    return numeri.reduce((accumulatore, numero) => accumulatore + numero, 0);
}
console.log(somma(4, -2, 7, 9, 10));
