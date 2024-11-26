// Creare una promessa semplice e gestione di una promessa con catch e una con finally
function newPromise(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x) {
                resolve("Promise risolta")
            } else {
                reject("Promise non risolta")
            }
        }, 2000);
    });
}

newPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((errore) => {
        console.log(errore);
    })
    .finally(() => {
        console.log('Operazione completata')
    })

    // Catena di promesse semplici
    function getNumberAfterOneSecond() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const num = 4;
                resolve(num);
            }, 1000);
        })
    }

    getNumberAfterOneSecond()
        .then((number) => {
            console.log(`Numero iniziale: ${number}`);
            return number * 2; // funz callback il numero inizale * 2
        })
        .then((doubleNumber) => {
            console.log(`Dopo la moltiplicazione per 2: ${doubleNumber}`);
            return doubleNumber + 3; //Aggiungiamo 3 al doubleNumber
        })
        .then((addNumber) => {
            console.log(`Risultato finale: ${addNumber}`);
        });