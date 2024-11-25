function eseguiOperazione(a, b, callback) {
    const result = a + b;

    if (callback && typeof callback === "function") {
        callback(result);
    }
}

function stampaMessaggio(result) {
    console.log(`Il risultato ${result} è stato elaborato con successo`)
}

eseguiOperazione(2, 3, stampaMessaggio);