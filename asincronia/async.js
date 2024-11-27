// Funzioni asincrone in serie 
async function firstFunction() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "Risultato della prima funzione (2 secondi)";
}

async function secondFuntion() {
    await new Promise((resolve) => setTimeout(resolve,3000));
    return "Risultato della seconda funzione (3 secondi)";
}

async function callFunctions() {
    console.log("Inizio chiamate in serie");
    const firstResult = await firstFunction();
    console.log(firstResult);

    const secondResult = await secondFuntion();
    console.log(secondResult);
    
    console.log("Totale attesa: 5 secondi");
}

callFunctions();