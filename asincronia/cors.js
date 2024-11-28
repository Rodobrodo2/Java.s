// Comprendere un errore CORS // Utilizzato api che supporta CORS

const apiuRl = "http://client.cors-api.appspot.com/client"

const fetchData = async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);;
        }
        const data = await response.json();
        console.log("Risultato", data);
    } catch (error) {
        console.error("Errore durante la richiesta:", error);
    }
}

fetchData(); 


// Utilizzare un proxy per bypassare CORS (usato il sito test-cors dove ho testato le richieste cors )
const proxyUrl = "https://api.allorigins.win/get?url=";
const apiUrl = "http://client.cors-api.appspot.com/client";

const fetchDataWithProxy = async () => {
    try {
        const response = await fetch(proxyUrl + apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Errore durante la richiesta tramite proxy:", error);
    }
}

fetchDataWithProxy();