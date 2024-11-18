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

