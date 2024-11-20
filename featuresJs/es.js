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

//Destructuring array con rest operator
let bibite = ["fanta", "coca cola", "sprite", "monster", "redbull"];
let [orange, black, ...rest] = bibite;
console.log(`Bevo spesso la ${orange}`);
console.log(`Non bevo quasi mai la ${black}`);
console.log(`Queste bibite:  ${rest} non le ho mai provate`);

//Destructuring oggetto con rest operator
const scuola = {
    materia: "Scienze",
    classe: "terza F",
    profResponsabile: "Luca Antonini",
    rimandato: "Spagnolo" 
}

const { materia, ...resto} = scuola;
console.log(`Ho il massimo dei voti in ${materia}`);
console.log("Info da sapere sulla mia scuola:", resto);

//Conversione di un oggetto in una stringa JSON
let oggetto = {
    nome: "Redi",
    eta: 25
}

let jsonString = JSON.stringify(oggetto);
console.log(jsonString);

//Conversione di una stringa JSON in un oggetto
const stringaJson = '{"nome":"Redi","eta": 25}';
const object = JSON.parse(stringaJson);
console.log(object);

//Manipolazione di dati JSON

//1 crea una stringa JSON che rappresenta una lista di persone
let jsonUtenti = `[
    {"nome": "Luca", "età": 30},
    {"nome": "Anna", "età": 25},
    {"nome": "Marco", "età": 35}
]` ;

//2 convertire la stringa JSON in un array di oggetti
let utenti = JSON.parse(jsonUtenti);

//3 aggiungere una nuoa persona all'array
utenti.push({ nome: "Giulia", età: 28 });

//4 convertire l'array aggiornato in una stringa JSON 
let jsonAggiornato = JSON.stringify(utenti, null, 4);

//stampa la stringa JSON
console.log(jsonAggiornato);

//Stringa semplice con template literals
const person = {
    naMe: "Gilberto",
    surname: "Nanni",
}

const { naMe, surname } = person;
console.log(`Il mio nome è ${naMe} ${surname}`);

// Stringa multilineaa con templates literals (capito male)
const ragazza = `
    nome : Claudia,
    cognome: Rossi,
    eta: 33,
`
console.log(ragazza)

//oppure(forse ho cpaito, da chiedere a manfro!)
const nAme = "Luca";
const sUrname = "Rossi";
const aGe = 28;
const cIty = "Milano";

const descrizionePersona = `
    Informazioni sulla persona:
    Nome: ${nAme}
    Cognome: ${sUrname}
    Età: ${aGe} anni
    Città: ${cIty}
`;

console.log(descrizionePersona);

// Funzione e template literals
function ragazzo(persona) {
    const { nome, cognome, eta, citta } = persona;
    return `
        Informazioni sul ragazzo:
        Nome: ${nome}
        Cognome: ${cognome}
        Età: ${eta}
        Citta: ${citta}
    `;
}

const ragazzoEsempio = {
    nome: "Giuseppe",
    cognome: "Rossi",
    eta: 28,
    citta: "Lucca",
}

const ragazzoFormattato = ragazzo(ragazzoEsempio);
console.log(ragazzoFormattato);

//Utilizzare console.log()
let numero = 42;
let stringa = "Ciao, mondo!"; 
let array = [1, 2, 3, 4, 5]; 
let oGgetto = { nome: "Mario", età: 30 }; 

console.log("Numero:", numero);
console.log("Stringa:", stringa);
console.log("Array:", array);
console.log("Oggetto:", oGgetto);

//Utilizzare console.error() e console.warn()
//console.error
let stato = "errore";

if (stato === "errore") {
    console.error("Errore critico: qualcosa è andato storto!");
} else if (stato === "avviso") {
    console.warn("Avviso: controlla i dati inseriti.");
} else {
    console.log("Stato normale: tutto funziona correttamente.");
}

//console.warn
let sTato = "avviso";

if (sTato === "avviso") {
    console.warn("Avviso: controlla i dati inseriti.");
} else if (sTato === "error") {
    console.warn("Errore critico: qualcosa è andato storto!");
} else {
    console.log("Stato normale: tutto funziona correttamente.");
}

// Utilizzare console.table() e console.group()
const studenti = [
    { nome: 'Mario', cognome: 'Rossi', età: 20 },
    { nome: 'Luigi', cognome: 'Verdi', età: 22 },
    { nome: 'Giulia', cognome: 'Bianchi', età: 19 },
];

function stampaDati() {
    console.group('Dettagli Studenti'); 
    
    console.log('Stampa dettagli studenti in formato tabella:');
    console.table(studenti); 
    
    console.log('Messaggi individuali:');
    studenti.forEach(studente => {
        console.groupCollapsed(`Studente: ${studente.nome} ${studente.cognome}`);
        console.log(`Nome: ${studente.nome}`);
        console.log(`Cognome: ${studente.cognome}`);
        console.log(`Età: ${studente.età}`);
        console.groupEnd(); 
    });

    console.groupEnd(); 
}

stampaDati();

//Utilizzare seTimeout
function stampaMessaggio() {
    console.log('Questo messaggio appare dopo 3 secondi');
}

setTimeout(stampaMessaggio, 3000);

//Utilizzare setInterval
function stampaAvviso() {
    console.warn('VIRUS NEL SISTEMA');
}

const avviso = setInterval(stampaAvviso, 2000);

setTimeout(() => {
    clearInterval(avviso);
    console.log('Intervallo interrotto dopo 4 secondi');
}, 4000);



//Interrompere setInterval con clearInterval
function stampaErrore() {
    console.error('Password non valida');
}

const intervalId = setInterval(stampaErrore, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Intervallo interrotto dopo 5 secondi');
}, 5000);

// Gestione di un errore semplice
function dividi(numeratore, denominatore) {
    try {
        if (denominatore === 0) {
            throw new Error("Impossibile dividere per zero."); //messaggio personalizzato
        }
        let risultato = numeratore / denominatore;
        console.log(`Il risultato della divisione è: ${risultato}`);
    } catch (errore) {
        console.error("Errore:", errore.message); //errore.message(proprieta) lancio il messaggio personalizzato
    }
}
dividi(10, 2);
dividi(10, 0);

//Gestione di piu tipi di errori
function operaSuStringa(input) {
    try {

        if (input === null || input === undefined) {
            throw new Error("L'input non può essere null o undefined.");
        }

        if (typeof input !== "string") {
            throw new TypeError("L'input deve essere una stringa.");
        }
    
        let risultato = input.toUpperCase();
        console.log(`Risultato: ${risultato}`);

    } catch (errore) {
        if (errore instanceof TypeError) {
            console.error("Errore di tipo:", errore.message);
        } else {
            console.error("Errore generico:", errore.message || "Si è verificato un errore sconosciuto.");
        }
    }
}

operaSuStringa("ciao mondo");
operaSuStringa(42);
operaSuStringa(null);

// Uso di finally per eseguire codice indipendentemente dal risultato
function operazioneConErrore() {
    try {
        let numero = 10;
        let risultato = numero / 0;  
        if (risultato === Infinity) {
            throw new Error("Non si può dividere per zero!");
        }
        console.log("Operazione riuscita, risultato:", risultato);
        
    } catch (errore) {
        console.error("Si è verificato un errore:", errore.message);
        
    } finally {
        console.log("Operazione completata.");
    }
}

operazioneConErrore();
