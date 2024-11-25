// Funzioni di base con callback
function eseguiOperazione(a, b, callback) {
    const result = a + b;
    console.log(`Risultato della somma: ${result}`);

    if (callback && typeof callback === 'function') {
        callback(result);
    }
}

function stampaMessaggio(result) {
    console.log(`Il risultato ${result} è stato elaborato con successo`)
}

eseguiOperazione(5, 3, stampaMessaggio);

// Funzione con callback e passaggio di parametri
function operazionePrincipale(callback) {
    let numero = 5;
    let result = numero * numero;
    
    if(callback && typeof callback === 'function') {
        callback(result);
    }
}

function gestisciRisultato(result) {
    console.log(`Il callback ha ricevuto il risultato: ${result}`);
}

operazionePrincipale(gestisciRisultato);

// Callback annidati
function eseguiSomma(a, b, callback) {
    const risultatoSomma = a + b;
    console.log(`Risultato della somma: ${risultatoSomma}`);
    
    callback(risultatoSomma);
}

function eseguiMoltiplicazione(x, callback) {
    const risultatoMoltiplicazione = x * 2;
    console.log(`Risultato della moltiplicazione: ${risultatoMoltiplicazione}`);

    callback(risultatoMoltiplicazione);
}

eseguiSomma(3, 5, function(risultatoSomma) {
    eseguiMoltiplicazione(risultatoSomma, function(risultatoMoltiplicazione) {
        console.log(`Il risultato finale è: ${risultatoMoltiplicazione}`);
    });
});