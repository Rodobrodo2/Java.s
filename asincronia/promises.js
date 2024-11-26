// Creare una promessa semplice e gestione di una promessa con catch
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
    });