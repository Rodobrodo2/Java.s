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

// Catena di promesse con condizioni
getNumberAfterOneSecond()
    .then((number) => {
        console.log(`Partiamo con ${number}`);
        if (number % 2 === 0) {
            return number + 200;
        } else {
            return number * 200;
        }
    })
    .then((newNumber) => {
        console.log(`Il nuovo numero è ${newNumber}`);
    });

//Catena di promesse con gestione degli errori
function getRandomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = 4;
        setTimeout(() => {
            if(randomValue >= 5) {
                resolve(randomValue);
            } else {
                reject(randomValue);
            }
        }, 1000);
    });
}

// Include anche l'es: Gestione degli errori con catch e gestione degli errori in una catena di promesse
getRandomPromise()
    .then((succesNumber) => {
        console.log(`Promessa risolta con il numero: ${successNumber}`);
        return succesNumber * 2;
    })
    .then((modifiedNumber) => {
        console.log(`Numero dopo la manipolazione: ${modifiedNumber}`);
    })
    .catch((errorNumber) => {
        console.error(`Promessa rifiutata con il numero ${errorNumber}`);
    });

// Gestione degli errori con then e catch
function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true;
        if(value) {
            resolve("La promessa e vera");
        } else {
            reject("La promessa e falsa");
        }
    })
}

myPromise()
    .then((success) => {
        console.log(success);
    })
    .catch((error) => {
        console.error(error);
    });

// Utilizzare Promise.all
function sourceA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dati dalla fonte A");
        }, 2000);
    });
}

function sourceB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dati dalla fonte B");
        }, 3000);
    });
}

Promise.all([sourceA(), sourceB()])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error("Si e verificato un errore", error);
    });

