// Funzioni asincrone in serie 
async function firstFunction() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "Risultato della prima funzione (2 secondi)";
}

async function secondFuntion() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
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

// Eseguire una richiesta GET semplice
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "GET",
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

// Eseguire una richiesta POST
const sendData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: 1,
                name: "Orazio",
            }),
        })
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("errore: ", error);
    }
}

sendData();